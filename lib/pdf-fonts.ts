import { existsSync, readFileSync } from 'node:fs'
import { dirname, extname, resolve } from 'node:path'

const REMOTE_FONT_TIMEOUT_MS = 8000
const MAX_UNIQUE_CHARS_PER_CHUNK = 300
const GOOGLE_FONTS_USER_AGENT =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36'
const GOOGLE_FONTS_CSS_ENDPOINTS = (
  process.env.PDF_FONT_CSS_ENDPOINTS
    ?.split(',')
    .map((entry) => entry.trim())
    .filter(Boolean) ?? ['https://fonts.googleapis.com/css2']
)

const LOCAL_NOTO_COLOR_EMOJI_DIR = resolve(process.cwd(), 'assets/fonts/noto-color-emoji')

const REMOTE_FONT_CSS_CACHE = new Map<string, Promise<string>>()
const REMOTE_FONT_FILE_CACHE = new Map<string, Promise<string>>()
let cachedEmojiCss: string | null = null

const HAN_RE = /\p{Script=Han}/u
const HIRAGANA_RE = /\p{Script=Hiragana}/u
const KATAKANA_RE = /\p{Script=Katakana}/u
const HANGUL_RE = /\p{Script=Hangul}/u
const ARABIC_RE = /\p{Script=Arabic}/u
const DEVANAGARI_RE = /\p{Script=Devanagari}/u
const HEBREW_RE = /\p{Script=Hebrew}/u
const THAI_RE = /\p{Script=Thai}/u
const BENGALI_RE = /\p{Script=Bengali}/u
const GURMUKHI_RE = /\p{Script=Gurmukhi}/u
const GUJARATI_RE = /\p{Script=Gujarati}/u
const TAMIL_RE = /\p{Script=Tamil}/u
const TELUGU_RE = /\p{Script=Telugu}/u
const KANNADA_RE = /\p{Script=Kannada}/u
const MALAYALAM_RE = /\p{Script=Malayalam}/u
const SINHALA_RE = /\p{Script=Sinhala}/u
const LAO_RE = /\p{Script=Lao}/u
const KHMER_RE = /\p{Script=Khmer}/u
const MYANMAR_RE = /\p{Script=Myanmar}/u
const GEORGIAN_RE = /\p{Script=Georgian}/u
const ARMENIAN_RE = /\p{Script=Armenian}/u
const ETHIOPIC_RE = /\p{Script=Ethiopic}/u
const CYRILLIC_RE = /\p{Script=Cyrillic}/u
const GREEK_RE = /\p{Script=Greek}/u
const LATIN_RE = /\p{Script=Latin}/u
const EMOJI_RE = /\p{Extended_Pictographic}/u
const SYMBOL_RE = /\p{Symbol}/u
const MATH_RE = /\p{Math}/u
const NUMBER_RE = /\p{Number}/u
const PUNCTUATION_RE = /\p{Punctuation}/u
const SEPARATOR_RE = /\p{Separator}/u
const MARK_RE = /\p{Mark}/u
const CJK_PUNCTUATION_RE = /[\u3000-\u303F\uFE10-\uFE1F\uFE30-\uFE4F\uFF01-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF40\uFF5B-\uFF65]/u

type FontRequest = {
  family: string
  text: string
  weights: number[]
}

export async function getPdfFontCss(htmlContent: string, language?: string): Promise<{
  css: string
  fontFamilies: string[]
}> {
  const textContent = extractTextContent(htmlContent)
  const fontRequests = buildFontRequests(textContent, language)
  const remoteCssChunks = await Promise.all(fontRequests.map((request) => loadRemoteFontCss(request)))

  const fontFamilies = fontRequests.map((request) => request.family)
  const cssParts = remoteCssChunks.filter(Boolean)

  if (needsEmoji(textContent)) {
    const emojiCss = getLocalEmojiCss()
    if (emojiCss) {
      cssParts.push(emojiCss)
      fontFamilies.push('Noto Color Emoji')
    }
  }

  return {
    css: cssParts.join('\n'),
    fontFamilies: Array.from(new Set(fontFamilies)),
  }
}

function buildFontRequests(text: string, language?: string): FontRequest[] {
  const familySets = new Map<string, Set<string>>()
  const characters = Array.from(text)
  const hasJapaneseSignal = HIRAGANA_RE.test(text) || KATAKANA_RE.test(text)
  const hasKoreanSignal = HANGUL_RE.test(text)
  const preferredHanFamily = hasJapaneseSignal
    ? 'Noto Sans JP'
    : hasKoreanSignal
      ? 'Noto Sans KR'
      : getPreferredHanFamily(language)

  for (let index = 0; index < characters.length; index += 1) {
    const char = characters[index]
    if (isIgnorableCharacter(char)) {
      continue
    }

    if (isEmojiCharacter(char)) {
      continue
    }

    const cjkPunctuationFamily = getCjkPunctuationFamily(characters, index, preferredHanFamily)
    if (cjkPunctuationFamily) {
      addCharToFamily(familySets, cjkPunctuationFamily, char)
      continue
    }

    if (HAN_RE.test(char)) {
      addCharToFamily(familySets, preferredHanFamily, char)
      continue
    }

    if (HIRAGANA_RE.test(char) || KATAKANA_RE.test(char)) {
      addCharToFamily(familySets, 'Noto Sans JP', char)
      continue
    }

    if (HANGUL_RE.test(char)) {
      addCharToFamily(familySets, 'Noto Sans KR', char)
      continue
    }

    if (ARABIC_RE.test(char)) {
      addCharToFamily(familySets, 'Noto Sans Arabic', char)
      continue
    }

    if (DEVANAGARI_RE.test(char)) {
      addCharToFamily(familySets, 'Noto Sans Devanagari', char)
      continue
    }

    if (HEBREW_RE.test(char)) {
      addCharToFamily(familySets, 'Noto Sans Hebrew', char)
      continue
    }

    if (THAI_RE.test(char)) {
      addCharToFamily(familySets, 'Noto Sans Thai', char)
      continue
    }

    if (BENGALI_RE.test(char)) {
      addCharToFamily(familySets, 'Noto Sans Bengali', char)
      continue
    }

    if (GURMUKHI_RE.test(char)) {
      addCharToFamily(familySets, 'Noto Sans Gurmukhi', char)
      continue
    }

    if (GUJARATI_RE.test(char)) {
      addCharToFamily(familySets, 'Noto Sans Gujarati', char)
      continue
    }

    if (TAMIL_RE.test(char)) {
      addCharToFamily(familySets, 'Noto Sans Tamil', char)
      continue
    }

    if (TELUGU_RE.test(char)) {
      addCharToFamily(familySets, 'Noto Sans Telugu', char)
      continue
    }

    if (KANNADA_RE.test(char)) {
      addCharToFamily(familySets, 'Noto Sans Kannada', char)
      continue
    }

    if (MALAYALAM_RE.test(char)) {
      addCharToFamily(familySets, 'Noto Sans Malayalam', char)
      continue
    }

    if (SINHALA_RE.test(char)) {
      addCharToFamily(familySets, 'Noto Sans Sinhala', char)
      continue
    }

    if (LAO_RE.test(char)) {
      addCharToFamily(familySets, 'Noto Sans Lao', char)
      continue
    }

    if (KHMER_RE.test(char)) {
      addCharToFamily(familySets, 'Noto Sans Khmer', char)
      continue
    }

    if (MYANMAR_RE.test(char)) {
      addCharToFamily(familySets, 'Noto Sans Myanmar', char)
      continue
    }

    if (GEORGIAN_RE.test(char)) {
      addCharToFamily(familySets, 'Noto Sans Georgian', char)
      continue
    }

    if (ARMENIAN_RE.test(char)) {
      addCharToFamily(familySets, 'Noto Sans Armenian', char)
      continue
    }

    if (ETHIOPIC_RE.test(char)) {
      addCharToFamily(familySets, 'Noto Sans Ethiopic', char)
      continue
    }

    if (MATH_RE.test(char)) {
      addCharToFamily(familySets, 'Noto Sans Math', char)
      continue
    }

    if (SYMBOL_RE.test(char)) {
      addCharToFamily(familySets, 'Noto Sans Symbols 2', char)
      continue
    }

    if (
      LATIN_RE.test(char) ||
      GREEK_RE.test(char) ||
      CYRILLIC_RE.test(char) ||
      NUMBER_RE.test(char) ||
      PUNCTUATION_RE.test(char) ||
      SEPARATOR_RE.test(char) ||
      MARK_RE.test(char)
    ) {
      addCharToFamily(familySets, 'Noto Sans', char)
      continue
    }

    addCharToFamily(familySets, 'Noto Sans', char)
  }

  return Array.from(familySets.entries())
    .map(([family, chars]) => ({
      family,
      text: Array.from(chars).join(''),
      weights: getFontWeightsForFamily(family),
    }))
    .filter((request) => request.text.length > 0)
}

function getFontWeightsForFamily(family: string): number[] {
  if (family === 'Noto Sans') {
    return [400, 700]
  }

  return [400]
}

function getPreferredHanFamily(language?: string): string {
  switch (language) {
    case 'zh-tw':
      return 'Noto Sans TC'
    case 'ja':
      return 'Noto Sans JP'
    case 'ko':
      return 'Noto Sans KR'
    case 'zh-cn':
    default:
      return 'Noto Sans SC'
  }
}

function addCharToFamily(target: Map<string, Set<string>>, family: string, char: string) {
  const existingSet = target.get(family)
  if (existingSet) {
    existingSet.add(char)
    return
  }

  target.set(family, new Set([char]))
}

function getCjkPunctuationFamily(characters: readonly string[], index: number, preferredHanFamily: string): string | null {
  const char = characters[index]
  if (!char) {
    return null
  }

  const adjacentCjkFamily = getAdjacentCjkFamily(characters, index, preferredHanFamily)

  if (CJK_PUNCTUATION_RE.test(char)) {
    return adjacentCjkFamily ?? preferredHanFamily
  }

  if (PUNCTUATION_RE.test(char) && adjacentCjkFamily) {
    return adjacentCjkFamily
  }

  return null
}

function getAdjacentCjkFamily(characters: readonly string[], index: number, preferredHanFamily: string): string | null {
  const previousChar = getAdjacentMeaningfulChar(characters, index, -1)
  const nextChar = getAdjacentMeaningfulChar(characters, index, 1)

  for (const candidate of [previousChar, nextChar]) {
    const family = getCjkFamilyForChar(candidate, preferredHanFamily)
    if (family) {
      return family
    }
  }

  return null
}

function getAdjacentMeaningfulChar(characters: readonly string[], startIndex: number, direction: -1 | 1): string | null {
  for (let index = startIndex + direction; index >= 0 && index < characters.length; index += direction) {
    const candidate = characters[index]
    if (!candidate || isIgnorableCharacter(candidate)) {
      continue
    }

    if (SEPARATOR_RE.test(candidate)) {
      continue
    }

    return candidate
  }

  return null
}

function getCjkFamilyForChar(char: string | null, preferredHanFamily: string): string | null {
  if (!char) {
    return null
  }

  if (HAN_RE.test(char)) {
    return preferredHanFamily
  }

  if (HIRAGANA_RE.test(char) || KATAKANA_RE.test(char)) {
    return 'Noto Sans JP'
  }

  if (HANGUL_RE.test(char)) {
    return 'Noto Sans KR'
  }

  return null
}

function isIgnorableCharacter(char: string): boolean {
  if (char === '\u200d' || char === '\ufe0f' || char === '\ufe0e') {
    return false
  }

  return /^\p{Control}$/u.test(char)
}

function isEmojiCharacter(char: string): boolean {
  if (char === '\u200d' || char === '\ufe0f' || char === '\ufe0e') {
    return true
  }

  const codePoint = char.codePointAt(0) ?? 0
  if (codePoint >= 0x1f3fb && codePoint <= 0x1f3ff) {
    return true
  }

  if (codePoint >= 0x1f1e6 && codePoint <= 0x1f1ff) {
    return true
  }

  return EMOJI_RE.test(char)
}

function needsEmoji(text: string): boolean {
  for (const char of text) {
    if (isEmojiCharacter(char)) {
      return true
    }
  }

  return false
}

function extractTextContent(html: string): string {
  return decodeHtmlEntities(
    html
      .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ' ')
      .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ' ')
      .replace(/<[^>]+>/g, ' ')
  )
}

function decodeHtmlEntities(value: string): string {
  const namedEntities: Record<string, string> = {
    amp: '&',
    apos: "'",
    gt: '>',
    lt: '<',
    nbsp: ' ',
    quot: '"',
  }

  return value
    .replace(/&#(\d+);/g, (_match, codePoint) => {
      const numeric = Number.parseInt(codePoint, 10)
      return Number.isNaN(numeric) ? _match : String.fromCodePoint(numeric)
    })
    .replace(/&#x([0-9a-f]+);/gi, (_match, hexCodePoint) => {
      const numeric = Number.parseInt(hexCodePoint, 16)
      return Number.isNaN(numeric) ? _match : String.fromCodePoint(numeric)
    })
    .replace(/&([a-z]+);/gi, (match, entityName) => namedEntities[entityName.toLowerCase()] ?? match)
}

async function loadRemoteFontCss(request: FontRequest): Promise<string> {
  const textChunks = splitIntoChunks(request.text, MAX_UNIQUE_CHARS_PER_CHUNK)
  const cssParts = await Promise.all(
    textChunks.map((chunk) => loadRemoteFontCssChunk(request.family, request.weights, chunk))
  )

  return cssParts.filter(Boolean).join('\n')
}

async function loadRemoteFontCssChunk(family: string, weights: number[], text: string): Promise<string> {
  if (!text) {
    return ''
  }

  const cacheKey = JSON.stringify({ family, weights, text })
  const cachedPromise = REMOTE_FONT_CSS_CACHE.get(cacheKey)
  if (cachedPromise) {
    return cachedPromise
  }

  const pendingPromise = (async () => {
    for (const endpoint of GOOGLE_FONTS_CSS_ENDPOINTS) {
      try {
        const url = buildGoogleFontsCssUrl(endpoint, family, weights, text)
        const response = await fetchWithTimeout(url)

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`)
        }

        const rawCss = await response.text()
        return inlineRemoteFontUrls(rawCss)
      } catch (error) {
        console.warn(`Failed to load remote PDF font CSS for ${family} from ${endpoint}:`, error)
      }
    }

    return ''
  })()

  REMOTE_FONT_CSS_CACHE.set(cacheKey, pendingPromise)

  try {
    return await pendingPromise
  } catch (error) {
    REMOTE_FONT_CSS_CACHE.delete(cacheKey)
    console.warn(`Failed to resolve remote PDF font CSS for ${family}:`, error)
    return ''
  }
}

function buildGoogleFontsCssUrl(endpoint: string, family: string, weights: number[], text: string): string {
  const url = new URL(endpoint)
  url.searchParams.append('family', `${family}:wght@${weights.join(';')}`)
  url.searchParams.append('display', 'swap')
  url.searchParams.append('text', text)
  return url.toString()
}

async function inlineRemoteFontUrls(css: string): Promise<string> {
  const matches = Array.from(css.matchAll(/url\((['"]?)(https?:\/\/[^'")]+)\1\)/g))
  if (matches.length === 0) {
    return css
  }

  const replacements = new Map<string, string>()
  await Promise.all(
    matches.map(async ([, , url]) => {
      if (!replacements.has(url)) {
        replacements.set(url, await getRemoteFontDataUri(url))
      }
    })
  )

  return css.replace(/url\((['"]?)(https?:\/\/[^'")]+)\1\)/g, (_match, _quote, url) => {
    const dataUri = replacements.get(url)
    return dataUri ? `url("${dataUri}")` : _match
  })
}

async function getRemoteFontDataUri(url: string): Promise<string> {
  const cachedPromise = REMOTE_FONT_FILE_CACHE.get(url)
  if (cachedPromise) {
    return cachedPromise
  }

  const pendingPromise = (async () => {
    const response = await fetchWithTimeout(url)
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`)
    }

    const contentType = response.headers.get('content-type') || getMimeTypeFromUrl(url)
    const arrayBuffer = await response.arrayBuffer()
    return `data:${contentType};base64,${Buffer.from(arrayBuffer).toString('base64')}`
  })()

  REMOTE_FONT_FILE_CACHE.set(url, pendingPromise)

  try {
    return await pendingPromise
  } catch (error) {
    REMOTE_FONT_FILE_CACHE.delete(url)
    throw error
  }
}

async function fetchWithTimeout(url: string): Promise<Response> {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), REMOTE_FONT_TIMEOUT_MS)

  try {
    return await fetch(url, {
      headers: {
        'User-Agent': GOOGLE_FONTS_USER_AGENT,
      },
      signal: controller.signal,
    })
  } finally {
    clearTimeout(timeout)
  }
}

function splitIntoChunks(value: string, maxSize: number): string[] {
  const chunks: string[] = []
  let currentChunk = ''
  let currentSize = 0

  for (const char of value) {
    currentChunk += char
    currentSize += 1

    if (currentSize >= maxSize) {
      chunks.push(currentChunk)
      currentChunk = ''
      currentSize = 0
    }
  }

  if (currentChunk) {
    chunks.push(currentChunk)
  }

  return chunks
}

function getMimeTypeFromUrl(url: string): string {
  const extension = extname(new URL(url).pathname).toLowerCase()

  switch (extension) {
    case '.woff2':
      return 'font/woff2'
    case '.woff':
      return 'font/woff'
    case '.ttf':
      return 'font/ttf'
    case '.otf':
      return 'font/otf'
    default:
      return 'application/octet-stream'
  }
}

function resolveLocalEmojiCssPath(): string {
  const cssPath = resolve(LOCAL_NOTO_COLOR_EMOJI_DIR, 'emoji.css')
  if (!existsSync(cssPath)) {
    throw new Error(`Unable to locate local emoji CSS at ${cssPath}`)
  }

  return cssPath
}

function getLocalEmojiCss(): string {
  if (cachedEmojiCss !== null) {
    return cachedEmojiCss
  }

  try {
    const cssPath = resolveLocalEmojiCssPath()
    const rawCss = readFileSync(cssPath, 'utf8')
    cachedEmojiCss = inlineLocalAssetUrls(rawCss, dirname(cssPath))
  } catch (error) {
    console.warn('Failed to load local emoji CSS for PDF export:', error)
    cachedEmojiCss = ''
  }

  return cachedEmojiCss
}

function inlineLocalAssetUrls(css: string, assetBaseDir: string): string {
  return css.replace(/url\((['"]?)(?!data:|https?:|file:)([^'")]+)\1\)/g, (match, _quote, assetPath) => {
    const normalizedAssetPath = assetPath.trim().split('#')[0].split('?')[0]
    if (!normalizedAssetPath) {
      return match
    }

    const absoluteAssetPath = resolve(assetBaseDir, normalizedAssetPath)
    if (!existsSync(absoluteAssetPath)) {
      return match
    }

    try {
      return `url("${toLocalDataUri(absoluteAssetPath)}")`
    } catch (error) {
      console.warn(`Failed to inline local PDF font asset: ${absoluteAssetPath}`, error)
      return match
    }
  })
}

function toLocalDataUri(filePath: string): string {
  const mimeType = getLocalMimeType(filePath)
  const encoded = readFileSync(filePath).toString('base64')
  return `data:${mimeType};base64,${encoded}`
}

function getLocalMimeType(filePath: string): string {
  const extension = extname(filePath).toLowerCase()

  switch (extension) {
    case '.woff2':
      return 'font/woff2'
    case '.woff':
      return 'font/woff'
    case '.ttf':
      return 'font/ttf'
    case '.otf':
      return 'font/otf'
    case '.svg':
      return 'image/svg+xml'
    default:
      return 'application/octet-stream'
  }
}
