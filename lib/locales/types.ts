export interface LocaleTranslations {
  title: string
  subtitle: string
  buttons: {
    upload: string
    showPreview: string
    hidePreview: string
    getPDF: string
    generatingPDF: string
    settings: string
    tableOfContents: string
    exportHTML: string
    exportMarkdown: string
  }
  editor: {
    title: string
    placeholder: string
    dragDropText: string
    dragDropSubtext: string
    loading: string
    rendering: string
    stats: {
      characters: string
      words: string
      lines: string
      readingTime: string
    }
  }
  preview: {
    title: string
    theme: string
  }
  settings: {
    title: string
    theme: string
    paperSize: string
    fontSize: string
  }
  toc: {
    title: string
  }
  themes: {
    default: string
    academic: string
    modern: string
    minimal: string
  }
  paperSizes: {
    a4: string
    letter: string
    legal: string
  }
  fontSizes: {
    10: string
    11: string
    12: string
    14: string
    16: string
  }
  messages: {
    pdfGenerationError: string
    pdfExportError: string
    mermaidRenderError: string
    mermaidSyntaxError: string
    mermaidExampleSyntax: string
    mermaidRenderRetry: string
    mermaidFinalError: string
    unknownError: string
    highlightJsError: string
    katexRenderError: string
    mermaidInitError: string
    mermaidLoading: string
    mermaidRendering: string
    templateLoaded: string
    templateLoadedMessage: string
    fileTooLarge: string
    invalidFileType: string
    fileUploadFailed: string
    fileUploaded: string
    resetComplete: string
    resetCompleteMessage: string
    copySuccess: string
    copyFailed: string
    networkError: string
    quotaExceeded: string
    autoSaveFailed: string
  }
  templates: {
    title: string
    description: string
    selectTemplate: string
    categories: {
      all: string
      basic: string
      academic: string
      technical: string
      documentation: string
    }
  }
  defaultContent: string
  seo: {
    title: string
    description: string
    keywords: string
  }
}
