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
  },

  // SEO Content
  seoContent: {
    whyChooseUs: {
      label: "우리를 선택하는 이유",
      title: "우리의 Markdown에서 PDF 변환기를 사용하는 이유는?",
      subtitle: "출판을 위한 Apple 같은 경험: 깔끔하고 빠르며 초안에서 PDF까지 아름답게 일관성이 있습니다.",
      features: {
        privacy: {
          title: "프라이버시 중심",
          description: "데이터는 우리와 함께 안전합니다. 모든 변환은 브라우저에서 로컬로 수행됩니다. Markdown 파일을 서버에 업로드하지 않습니다."
        },
        instant: {
          title: "즉시 변환",
          description: "대기열이 없습니다. 최적화된 엔진이 문서를 즉시 변환하며 큰 파일도 쉽게 지원합니다."
        },
        richSupport: {
          title: "풍부한 지원",
          description: "GFM(GitHub Flavored Markdown), KaTeX 수학 공식, Mermaid 다이어그램 및 코드 구문 강조 표시에 대한 완전한 지원."
        }
      }
    },
    howToConvert: {
      label: "간단한 워크플로우",
      title: "Markdown을 PDF로 변환하는 방법",
      subtitle: "집중하고 몇 초 만에 세련된 PDF를 얻도록 설계된 차분한 3단계 프로세스.",
      steps: {
        step1: {
          title: "Markdown 작성 또는 붙여넣기",
          description: "실시간 편집기에 직접 입력하거나 기존 Markdown 코드를 붙여넣습니다. .md 파일을 끌어다 놓을 수도 있습니다."
        },
        step2: {
          title: "스타일 사용자 정의",
          description: "전문 테마(학술, 현대 등) 중에서 선택하고 글꼴 크기, 여백 및 용지 크기(A4, Letter)를 조정합니다."
        },
        step3: {
          title: "PDF 다운로드",
          description: "내보내기 버튼을 클릭하여 즉시 형식이 지정된 PDF 문서를 가져와 공유 또는 인쇄할 준비를 합니다."
        }
      }
    },
    faq: {
      label: "자주 묻는 질문",
      title: "자주 묻는 질문",
      items: {
        isFree: {
          question: "이 도구는 무료인가요?",
          answer: "네, 우리의 Markdown에서 PDF 변환기는 개인 및 상업용으로 100% 무료입니다."
        },
        dataStorage: {
          question: "내 데이터를 저장하나요?",
          answer: "아니요. 모든 것은 브라우저에서 처리됩니다. 문서는 장치를 떠나지 않습니다."
        },
        mathSupport: {
          question: "수학 방정식을 지원하나요?",
          answer: "네! KaTeX를 사용하여 복잡한 수학 공식과 방정식을 아름답게 렌더링합니다."
        },
        diagrams: {
          question: "다이어그램을 만들 수 있나요?",
          answer: "물론입니다. Mermaid.js를 지원하여 텍스트에서 플로우차트, 시퀀스 다이어그램 및 간트 차트를 만들 수 있습니다."
        }
      }
    },
    comprehensive: {
      title: "포괄적인 Markdown 솔루션",
      description1: "논문을 쓰는 학생, 코드를 문서화하는 개발자, 소설을 쓰는 작가 등 우리의 Markdown 편집기는 필요한 도구를 제공합니다. 실시간 미리보기, 단어 수 추적 및 집중 모드와 같은 기능을 통해 방해 없이 작성할 수 있습니다.",
      description2: "변환기는 제목, 목록, 링크, 이미지 및 인용 블록을 포함하여 모든 표준 Markdown 구문을 처리합니다. 고급 사용자는 언어별 구문 강조, 각주 및 작업 목록을 지원하는 코드 블록을 높이 평가할 것입니다."
    }
  },

  // Footer
  footer: {
    tagline: "Markdown에서 PDF로",
    subtitle: "매번 우아한 변환.",
    description: "모든 사람을 위한 전문 문서 변환 도구. 무료, 안전, 빠름.",
    legal: {
      title: "법적",
      privacyPolicy: "개인정보 보호정책",
      termsOfService: "서비스 약관"
    },
    links: {
      title: "링크",
      aboutUs: "회사 소개",
      contact: "연락처"
    },
    connect: {
      title: "연결",
      description: "질문이나 피드백이 있으신가요?"
    },
    copyright: "© {year} Markdown to PDF. All rights reserved.",
    designed: "명확성을 위해 설계됨"
  },

  // Toolbar
  toolbar: {
    heading: "제목",
    bold: "굵게",
    italic: "기울임",
    strikethrough: "취소선",
    code: "코드",
    link: "링크",
    image: "이미지",
    bulletList: "글머리 기호 목록",
    numberedList: "번호 매기기 목록",
    quote: "인용",
    codeBlock: "코드 블록",
    horizontalRule: "가로선",
    undo: "실행 취소",
    redo: "다시 실행",
    showLess: "적게 표시",
    showMore: "더 보기",
    disableWordWrap: "단어 줄 바꿈 비활성화",
    enableWordWrap: "단어 줄 바꿈 활성화",
    findAndReplace: "찾기 및 바꾸기",
    showTools: "도구 표시",
    hideTools: "도구 숨기기",
    exportTXT: "TXT",
    special: "특수",
    lineOps: "줄 작업"
  },

  // Dialogs
  dialogs: {
    markdownCheatSheet: "Markdown 치트 시트",
    documentStatistics: "문서 통계",
    close: "닫기",
    focusMode: {
      title: "집중 모드",
      enter: "집중 모드 시작",
      exit: "집중 모드 종료",
      description: "산만하지 않은 글쓰기 환경"
    },
    wordGoal: {
      title: "단어 목표 추적기",
      setGoal: "단어 목표 설정",
      currentWords: "현재 단어",
      goalWords: "목표",
      remaining: "남음",
      progress: "진행률",
      achieved: "목표 달성! 🎉"
    },
    timeTracker: {
      title: "시간 추적기",
      startTime: "세션 시작",
      stopTime: "세션 중지",
      reset: "재설정",
      totalTime: "총 시간",
      sessions: "오늘 세션"
    },
    pomodoro: {
      title: "뽀모도로 타이머",
      start: "시작",
      pause: "일시정지",
      reset: "재설정",
      work: "업무",
      shortBreak: "짧은 휴식",
      longBreak: "긴 휴식",
      sessions: "완료된 세션"
    },
    quickTemplates: {
      title: "빠른 템플릿",
      select: "삽입할 템플릿 선택"
    },
    documentTemplates: {
      title: "문서 템플릿",
      description: "시작할 템플릿 선택"
    },
    performance: {
      title: "성능 설정",
      debounceTime: "디바운스 시간",
      description: "렌더링 성능 조정"
    },
    autosave: {
      title: "자동 저장 설정",
      interval: "저장 간격",
      description: "작업을 자동으로 저장하는 빈도",
      status: {
        saved: "저장됨",
        saving: "저장 중...",
        unsaved: "저장되지 않은 변경사항",
        error: "저장 실패"
      }
    },
    typography: {
      title: "타이포그래피 컨트롤",
      fontSize: "글꼴 크기",
      lineHeight: "줄 높이",
      fontFamily: "글꼴 계열"
    },
    snippets: {
      title: "스니펫 라이브러리",
      add: "스니펫 추가",
      save: "스니펫 저장",
      cancel: "취소",
      name: "이름",
      content: "내용"
    },
    keyboardShortcuts: {
      title: "키보드 단축키",
      description: "이 단축키로 작업 속도 향상"
    }
  }
}
