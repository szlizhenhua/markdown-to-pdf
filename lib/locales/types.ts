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
    blank: {
      name: string
      description: string
    }
    article: {
      name: string
      description: string
    }
    readme: {
      name: string
      description: string
    }
    resume: {
      name: string
      description: string
    }
    essay: {
      name: string
      description: string
    }
    meeting: {
      name: string
      description: string
    }
    tutorial: {
      name: string
      description: string
    }
    simpleNotes: {
      name: string
      description: string
    }
    meetingNotes: {
      name: string
      description: string
    }
    researchPaper: {
      name: string
      description: string
    }
    apiDocumentation: {
      name: string
      description: string
    }
    blogPost: {
      name: string
      description: string
    }
    productRequirements: {
      name: string
      description: string
    }
    templates: string
  }
  defaultContent: string
  seo: {
    title: string
    description: string
    keywords: string
  }
  seoContent: {
    whyChooseUs: {
      label: string
      title: string
      subtitle: string
      features: {
        privacy: {
          title: string
          description: string
        }
        instant: {
          title: string
          description: string
        }
        richSupport: {
          title: string
          description: string
        }
      }
    }
    howToConvert: {
      label: string
      title: string
      subtitle: string
      steps: {
        step1: {
          title: string
          description: string
        }
        step2: {
          title: string
          description: string
        }
        step3: {
          title: string
          description: string
        }
      }
    }
    faq: {
      label: string
      title: string
      items: {
        isFree: {
          question: string
          answer: string
        }
        dataStorage: {
          question: string
          answer: string
        }
        mathSupport: {
          question: string
          answer: string
        }
        diagrams: {
          question: string
          answer: string
        }
      }
    }
    comprehensive: {
      title: string
      description1: string
      description2: string
    }
  }
  footer: {
    tagline: string
    subtitle: string
    description: string
    legal: {
      title: string
      privacyPolicy: string
      termsOfService: string
    }
    links: {
      title: string
      aboutUs: string
      contact: string
    }
    connect: {
      title: string
      description: string
    }
    copyright: string
    designed: string
  }
  toolbar: {
    heading: string
    bold: string
    italic: string
    strikethrough: string
    code: string
    link: string
    image: string
    bulletList: string
    numberedList: string
    quote: string
    codeBlock: string
    horizontalRule: string
    undo: string
    redo: string
    showLess: string
    showMore: string
    disableWordWrap: string
    enableWordWrap: string
    findAndReplace: string
    showTools: string
    hideTools: string
    exportTXT: string
    special: string
    lineOps: string
  }
  dialogs: {
    markdownCheatSheet: string
    documentStatistics: string
    close: string
    focusMode: {
      title: string
      enter: string
      exit: string
      description: string
    }
    wordGoal: {
      title: string
      setGoal: string
      currentWords: string
      goalWords: string
      remaining: string
      progress: string
      achieved: string
    }
    timeTracker: {
      title: string
      startTime: string
      stopTime: string
      reset: string
      totalTime: string
      sessions: string
      wordsPerMin: string
      recording: string
      stopped: string
      today: string
      thisWeek: string
      avgSession: string
      dailyTimeGoal: string
      hours: string
      recentSessions: string
    }
    pomodoro: {
      title: string
      description: string
      start: string
      pause: string
      reset: string
      work: string
      shortBreak: string
      longBreak: string
      sessions: string
    }
    quickTemplates: {
      title: string
      select: string
    }
    documentTemplates: {
      title: string
      description: string
    }
    performance: {
      title: string
      debounceTime: string
      description: string
    }
    autosave: {
      title: string
      interval: string
      description: string
      status: {
        saved: string
        saving: string
        unsaved: string
        error: string
      }
    }
    typography: {
      title: string
      description: string
      fontSize: string
      lineHeight: string
      fontFamily: string
    }
    snippets: {
      title: string
      description: string
      add: string
      save: string
      cancel: string
      name: string
      content: string
    }
    keyboardShortcuts: {
      title: string
      description: string
    }
  }
  quickTemplates: {
    apiEndpoint: string
    codeSnippet: string
    meetingNotes: string
    bugReport: string
    dailyStandup: string
    featureRequest: string
    codeReview: string
    projectReadme: string
  }
  textTransform: {
    title: string
    close: string
    uppercase: string
    lowercase: string
    titleCase: string
    sentenceCase: string
    camelCase: string
    kebabCase: string
    snakeCase: string
    toggleCase: string
    capitalize: string
    uppercaseDesc: string
    lowercaseDesc: string
    titleCaseDesc: string
    sentenceCaseDesc: string
    camelCaseDesc: string
    kebabCaseDesc: string
    snakeCaseDesc: string
    toggleCaseDesc: string
    capitalizeDesc: string
  }
  codeLanguages: {
    javascript: string
    typescript: string
    python: string
    java: string
    cpp: string
    csharp: string
    go: string
    rust: string
    php: string
    ruby: string
    swift: string
    kotlin: string
    html: string
    css: string
    scss: string
    sql: string
    bash: string
    shell: string
    json: string
    yaml: string
    xml: string
    markdown: string
    dockerfile: string
    diff: string
    language: string
    insertCodeBlock: string
    preview: string
  }
  dateTime: {
    insertDateTime: string
    date: string
    time: string
    dateTime: string
    iso8601: string
    usFormat: string
    euFormat: string
    readable: string
    cancel: string
  }
  listHelper: {
    listType: string
    bullet: string
    numbered: string
    numberOfItems: string
    listItems: string
    insertList: string
    cancel: string
    item: string
  }
  highlightHelper: {
    insertHighlight: string
    highlightText: string
    textToHighlight: string
    color: string
    visualOnly: string
    note: string
    cancel: string
    yellow: string
    red: string
    green: string
    blue: string
    purple: string
    pink: string
  }
  helpDialog: {
    title: string
    close: string
    headings: string
    textStyles: string
    codeBlocks: string
    lists: string
    links: string
    images: string
    quotes: string
    tables: string
  }
}
