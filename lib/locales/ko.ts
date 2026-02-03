export const ko = {
  // Header
  title: "Markdown에서 PDF로 변환기",
  subtitle: "Markdown을 전문 PDF로 변환",

  // Controls
  buttons: {
    upload: "업로드",
    showPreview: "미리보기 표시",
    hidePreview: "미리보기 숨기기",
    getPDF: "PDF 가져오기",
    generatingPDF: "PDF 생성 중...",
    settings: "설정",
    tableOfContents: "목차",
    exportHTML: "HTML",
    exportMarkdown: "MD"
  },

  // Editor
  editor: {
    title: "Markdown 편집기",
    placeholder: "여기에 Markdown을 입력하세요...\n\n# 제목 1\n## 제목 2\n\n**굵게** 와 *기울임*\n\n- 목록 항목 1\n- 목록 항목 2\n\n```javascript\nconsole.log('안녕하세요, 세계!');\n```\n\n| 열 1 | 열 2 |\n|---------|----------|\n| 데이터 1  | 데이터 2   |",
    dragDropText: "Markdown 파일을 여기에 드롭하세요",
    dragDropSubtext: ".md 및 .txt 파일 지원",
    loading: "다이어그램 로딩 중...",
    rendering: "다이어그램 렌더링 중...",
    stats: {
      characters: "문자",
      words: "단어",
      lines: "줄",
      readingTime: "읽는 시간"
    }
  },

  // Preview
  preview: {
    title: "미리보기",
    theme: "테마"
  },

  // Settings
  settings: {
    title: "설정",
    theme: "테마",
    paperSize: "용지 크기",
    fontSize: "글꼴 크기"
  },

  // Table of Contents
  toc: {
    title: "목차"
  },

  // Themes
  themes: {
    default: "기본",
    academic: "학술",
    modern: "현대",
    minimal: "미니멀"
  },

  // Paper Sizes
  paperSizes: {
    a4: "A4",
    letter: "레터",
    legal: "리걸"
  },

  // Font Sizes
  fontSizes: {
    10: "10pt",
    11: "11pt",
    12: "12pt",
    14: "14pt",
    16: "16pt"
  },

  // Messages
  messages: {
    pdfGenerationError: "PDF 생성 실패",
    pdfExportError: "PDF 내보내기 실패, 콘솔에서 세부정보를 확인하세요",
    mermaidRenderError: "Mermaid 렌더링 오류",
    mermaidSyntaxError: "Mermaid 구문을 확인하세요",
    mermaidExampleSyntax: "구문 예시:",
    mermaidRenderRetry: "Mermaid 렌더링 시도 {count}번 실패, 100ms 후 재시도",
    mermaidFinalError: "Mermaid 렌더링 최종 실패",
    unknownError: "알 수 없는 오류",
    highlightJsError: "언어 \"{lang}\"에 대한 Highlight.js 오류:",
    katexRenderError: "KaTeX 렌더링 오류:",
    mermaidInitError: "Mermaid 초기화 오류:",
    mermaidLoading: "다이어그램 로딩 중...",
    mermaidRendering: "다이어그램 렌더링 중...",
    templateLoaded: "템플릿 로드됨",
    templateLoadedMessage: "템플릿이 편집기에 적용되었습니다.",
    fileTooLarge: "파일이 너무 큽니다. 최대 크기는 5MB입니다.",
    invalidFileType: "잘못된 파일 유형입니다. .md 또는 .txt 파일을 업로드하세요.",
    fileUploadFailed: "파일 업로드 실패. 다시 시도하세요.",
    fileUploaded: "파일이 성공적으로 업로드됨",
    resetComplete: "재설정 완료",
    resetCompleteMessage: "편집기와 설정이 기본값으로 재설정되었습니다.",
    copySuccess: "클립보드에 복사됨",
    copyFailed: "클립보드 복사 실패",
    networkError: "네트워크 오류. 연결을 확인하세요.",
    quotaExceeded: "저장소 할당량 초과. 브라우저 데이터를 일부 정리하세요.",
    autoSaveFailed: "자동 저장 실패. 변경 사항이 저장되지 않을 수 있습니다."
  },

  // Templates
  templates: {
    title: "템플릿 선택",
    description: "전문적으로 설계된 템플릿 중에서 선택하여 빠르게 시작",
    selectTemplate: "템플릿을 클릭하여 편집기로 로드하세요. 현재 내용이 바뀝니다.",
    categories: {
      all: "모든 템플릿",
      basic: "기본",
      academic: "학술",
      technical: "기술",
      documentation: "문서"
    }
  },

  // Default Content
  defaultContent: `# Markdown에서 PDF로 변환기

> 🎯 **수학 공식, 순서도, 코드 강조 표시, 여러 테마로 Markdown 문서를 전문 PDF로 변환**

## ✨ 기능

### 📊 **완전한 Markdown 지원**
- **텍스트 서식**: **굵게**, *기울임*, ~~취소선~~, \`인라인 코드\`
- **제목 수준**: H1-H6 제목 구조 전체 지원
- **목록**: 순서 있는 목록, 순서 없는 목록, 작업 목록
- **링크 및 이미지**: 자동 링크 인식, 이미지 임베드 지원
- **표**: 정렬 및 복잡한 표 구조 지원
- **인용문**: 블록 인용문 및 중첩 인용문

### 🧮 **수학 공식 렌더링 (KaTeX)**
**인라인 공식**: 아인슈타인의 질량-에너지 방정식 $E = mc^2$

**블록 공식**:
$$\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}$$

**복잡한 공식**:
$$\\sum_{i=1}^{n} x_i = x_1 + x_2 + \\cdots + x_n$$

**행렬 표현**:
$$\\begin{bmatrix}
a & b \\\\
c & d
\\end{bmatrix}$$

### 📈 **다이어그램 그리기 (Mermaid)**

#### 순서도
\`\`\`mermaid
graph TD
    A[시작] --> B{조건}
    B -->|예| C[실행 A]
    B -->|아니오| D[실행 B]
    C --> E[끝]
    D --> E
\`\`\`

#### 그래프 다이어그램
\`\`\`mermaid
graph LR
    A[사용자] --> B[시스템]
    B --> A[응답]
\`\`\`

### 💻 **코드 강조 표시**

#### JavaScript 예시
\`\`\`javascript
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// 사용 예시
console.log(fibonacci(10)); // 출력: 55
\`\`\`

#### Python 예시
\`\`\`python
def quicksort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quicksort(left) + middle + quicksort(right)
\`\`\`

### 📋 **표 기능**

| 기능 | 상태 | 설명 | 단축키 |
|---------|:------:|-------------|----------|
| 수학 공식 | ✅ | 완전한 KaTeX 지원 | \`$...\$ |
| 순서도 | ✅ | Mermaid 다이어그램 | \`mermaid |
| 코드 강조 표시 | ✅ | 다국어 지원 | \`lang |
| 표 | ✅ | 완전한 표 기능 | \| \| \| |
| 링크 | ✅ | 자동 링크 인식 | [텍스트](url) |

---

## 📖 사용자 가이드

### 🚀 **빠른 시작**

1. **콘텐츠 편집**
   - 왼쪽 편집기에 Markdown 콘텐츠를 입력하거나 붙여넣기
   - WYSIWYG으로 실시간 미리보기

2. **파일 업로드**
   - "업로드" 버튼을 클릭하여 .md 또는 .txt 파일 선택
   - 또는 파일을 편집기 영역으로 직접 드래그 앤 드롭

3. **스타일 사용자 정의**
   - 테마 스타일 선택 (기본/학술/현대/미니멀)
   - 용지 크기 및 글꼴 크기 조정
   - 효과의 실시간 미리보기

4. **PDF 내보내기**
   - "PDF 가져오기" 버튼 클릭
   - 생성된 PDF 문서 자동 다운로드
   - 문서 제목을 기준으로 파일 이름 자동 생성

### ⌨️ **Markdown 구문 치트 시트**

#### 기본 구문
\`\`\`markdown
# 수준 1 제목
## 수준 2 제목
### 수준 3 제목

**굵은 텍스트** 또는 __굵은 텍스트__
*기울임 텍스트* 또는 _기울임 텍스트_
~~취소선~~

- 순서 없는 목록 항목
  - 중첩 목록 항목

1. 순서 있는 목록 항목
2. 두 번째 항목
   1. 중첩 순서 항목

> 인용문 텍스트
>> 중첩 인용문

[링크 텍스트](https://example.com)
![이미지 설명](이미지.jpg)

\`인라인 코드\`

\`\`\`언어
코드 블록
\`\`\`

### 💡 **사용 팁**

1. **수학 공식**
   - 인라인 공식에는 \`$...\` 사용
   - 블록 공식에는 \`$$...$$\` 사용
   - 완전한 LaTeX 수학 구문 지원

2. **코드 블록**
   - 구문 강조 표시를 위한 언어 지정: \`\`\`javascript
   - 지원되는 언어: JavaScript, Python, JSON, Bash 등

3. **다이어그램 그리기**
   - Mermaid 구문을 사용하여 순서도, 그래프 등 생성
   - 여러 다이어그램 유형 지원: 그래프, 순서도 등

4. **표 서식**
   - \`|\`를 사용하여 열 구분
   - \`-\`를 사용하여 헤더와 콘텐츠 구분
   - 정렬 지원: \`:---\` (왼쪽), \`---:\` (오른쪽), \`:---:\` (가운데)

---

## ❓ 자주 묻는 질문 (FAQ)

### Q1: 어떤 Markdown 구문이 지원되나요?
**A**: 이 도구는 표, 작업 목록, 취소선 등을 포함한 표준 Markdown 구문과 GitHub Flavored Markdown (GFM) 확장을 지원합니다. 또한 수학 공식 (KaTeX) 및 다이어그램 그리기 (Mermaid)도 지원합니다.

### Q2: 수학 공식이 표시되지 않으면 어떻게 하나요?
**A**: 올바른 구문을 사용하는지 확인하세요:
- 인라인 공식: \`$공식$\`
- 블록 공식: \`$$공식$$\`
그래도 표시되지 않으면 공식 구문이 올바른지 확인하세요.

### Q3: 내보내는 PDF의 품질은 어떻게 되나요?
**A**: 출력 품질을 보장하기 위해 전문 PDF 생성 엔진을 사용합니다:
- 고선명 벡터 그래픽
- 선명한 텍스트 렌더링
- 올바른 페이지 매김
- 원본 서식 유지

### Q4: 내 데이터는 안전한가요?
**A**: 완전히 안전합니다! 모든 처리가 브라우저에서 로컬로 수행됩니다:
- 서버에 데이터가 업로드되지 않음
- 문서 콘텐츠가 저장되지 않음
- 처리 후 데이터가 자동으로 삭제됨

### Q5: 어떤 브라우저가 지원되나요?
**A**: 모든 최신 브라우저를 지원합니다:
- Chrome 65+
- Firefox 60+
- Safari 12+
- Edge 79+

### Q6: 큰 문서를 처리하려면 어떻게 하나요?
**A**: 큰 문서의 경우 다음을 권장합니다:
- 섹션별 처리
- 글꼴 크기 적절 조정
- 합리적인 분할을 위해 페이지 나누기 사용
- 내보내기 전 미리보기로 효과 확인

### Q7: 내보내는 PDF 파일 이름은 무엇인가요?
**A**: 파일 이름은 문서의 첫 줄 제목을 기준으로 자동 생성됩니다. 예:
- 제목 "프로젝트 보고서" → "프로젝트 보고서.pdf"
- 제목이 없으면 "document.pdf" 사용

---

## 📞 기술 지원

### 🔧 **기술 스택**
- **Next.js** - React 프레임워크
- **Tailwind CSS** - 스타일링 프레임워크
- **Marked** - Markdown 파서
- **KaTeX** - 수학 공식 렌더링
- **Mermaid** - 다이어그램 그리기
- **html2pdf.js** - PDF 생성
- **Highlight.js** - 코드 강조 표시

### 📧 **문의하기**
[오픈 소스](https://github.com/szlizhenhua/markdown-to-pdf). 질문이나 제안이 있으시면 다음을 통해 문의하세요:
- GitHub Issues: 문제 보고 또는 기능 요청
- 피드백 이메일: support@markdown-to-pdf.org

### 🔄 **변경 로그**
- **v1.0.0** - 초기 릴리스
- KaTeX 수학 공식 지원
- Mermaid 다이어그램 지원
- 여러 테마 스타일 선택
- 반응형 디자인 최적화

---

<div style="text-align: center; margin-top: 3em; padding: 2em; border-top: 1px solid #eee; color: #666;">
  <p><strong>Markdown에서 PDF로 변환기</strong></p>
  <p>전문 Markdown에서 PDF 변환 도구</p>
  <p style="font-size: 0.9em; margin-top: 1em;">
    ❤️로 만듦 | 프라이버시 우선
  </p>
  <p style="font-size: 0.8em; margin-top: 0.5em;">
    © 2025 Markdown to PDF. All rights reserved.
  </p>
</div>`,

  // SEO
  seo: {
    title: "Markdown에서 PDF로 변환기 | 전문 문서 내보내기",
    description: "수학, 코드, 다이어그램, 목차, 테마가 있는 Markdown을 전문 PDF 문서로 변환. 학술 및 상업용 출판 품질 출력.",
    keywords: "Markdown, PDF, 변환기, KaTeX, Mermaid, 코드 강조 표시, 목차, 테마, 내보내기, 학술, 전문"
  }
}
