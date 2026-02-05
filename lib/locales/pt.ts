export const pt = {
  // Header
  title: "Conversor de Markdown para PDF",
  subtitle: "Converta Markdown para PDFs profissionais",

  // Controls
  buttons: {
    upload: "Carregar",
    showPreview: "Mostrar Visualização",
    hidePreview: "Ocultar Visualização",
    getPDF: "Obter PDF",
    generatingPDF: "Gerando PDF...",
    settings: "Configurações",
    tableOfContents: "Índice",
    exportHTML: "HTML",
    exportMarkdown: "MD"
  },

  // Editor
  editor: {
    title: "Editor Markdown",
    placeholder: "Comece a digitar seu Markdown aqui...\n\n# Título 1\n## Título 2\n\n**Negrito** e *itálico*\n\n- Item de lista 1\n- Item de lista 2\n\n```javascript\nconsole.log('Olá Mundo!');\n```\n\n| Coluna 1 | Coluna 2 |\n|---------|----------|\n| Dado 1  | Dado 2   |",
    dragDropText: "Solte seu arquivo Markdown aqui",
    dragDropSubtext: "Suporta arquivos .md e .txt",
    loading: "Carregando diagrama...",
    rendering: "Renderizando diagrama...",
    stats: {
      characters: "Caracteres",
      words: "Palavras",
      lines: "Linhas",
      readingTime: "Tempo de leitura"
    }
  },

  // Preview
  preview: {
    title: "Visualização",
    theme: "tema"
  },

  // Settings
  settings: {
    title: "Configurações",
    theme: "Tema",
    paperSize: "Tamanho do Papel",
    fontSize: "Tamanho da Fonte"
  },

  // Table of Contents
  toc: {
    title: "Índice"
  },

  // Themes
  themes: {
    default: "Padrão",
    academic: "Acadêmico",
    modern: "Moderno",
    minimal: "Minimalista"
  },

  // Paper Sizes
  paperSizes: {
    a4: "A4",
    letter: "Carta",
    legal: "Legal"
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
    pdfGenerationError: "Falha na geração do PDF",
    pdfExportError: "Falha na exportação do PDF, verifique o console para detalhes",
    mermaidRenderError: "Erro de renderização Mermaid",
    mermaidSyntaxError: "Verifique a sintaxe Mermaid",
    mermaidExampleSyntax: "Exemplo de sintaxe:",
    mermaidRenderRetry: "Tentativa de renderização Mermaid {count} falhou, tentará novamente em 100ms",
    mermaidFinalError: "Falha final na renderização Mermaid",
    unknownError: "Erro desconhecido",
    highlightJsError: "Erro Highlight.js para idioma \"{lang}\":",
    katexRenderError: "Erro de renderização KaTeX:",
    mermaidInitError: "Erro de inicialização Mermaid:",
    mermaidLoading: "Carregando diagrama...",
    mermaidRendering: "Renderizando diagrama...",
    templateLoaded: "Modelo carregado",
    templateLoadedMessage: "O modelo foi aplicado ao editor.",
    fileTooLarge: "Arquivo muito grande. Tamanho máximo 5MB.",
    invalidFileType: "Tipo de arquivo inválido. Carregue um arquivo .md ou .txt.",
    fileUploadFailed: "Falha no carregamento do arquivo. Tente novamente.",
    fileUploaded: "Arquivo carregado com sucesso",
    resetComplete: "Redefinição completa",
    resetCompleteMessage: "Editor e configurações redefinidos para os padrões.",
    copySuccess: "Copiado para a área de transferência",
    copyFailed: "Falha ao copiar para a área de transferência",
    networkError: "Erro de rede. Verifique sua conexão.",
    quotaExceeded: "Cota de armazenamento excedida. Limpe alguns dados do navegador.",
    autoSaveFailed: "Falha no salvamento automático. Suas alterações podem não ser salvas."
  },

  // Templates
  templates: {
    title: "Selecionar um Modelo",
    description: "Escolha entre modelos profissionalmente projetados para começar rapidamente",
    selectTemplate: "Clique em um modelo para carregá-lo no editor. Seu conteúdo atual será substituído.",
    categories: {
      all: "Todos os Modelos",
      basic: "Básico",
      academic: "Acadêmico",
      technical: "Técnico",
      documentation: "Documentação"
    },
    // Document templates
    blank: {
      name: "Documento em Branco",
      description: "Começar do zero"
    },
    article: {
      name: "Artigo de Blog",
      description: "Estrutura padrão de postagem de blog"
    },
    readme: {
      name: "README.md",
      description: "Modelo de documentação de projeto"
    },
    resume: {
      name: "Currículo/CV",
      description: "Modelo de currículo profissional"
    },
    essay: {
      name: "Ensaio Acadêmico",
      description: "Trabalho acadêmico estruturado"
    },
    meeting: {
      name: "Notas de Reunião",
      description: "Modelo de notas de reunião estruturadas"
    },
    tutorial: {
      name: "Tutorial/Guia",
      description: "Modelo de tutorial passo a passo"
    },
    simpleNotes: {
      name: "Notas Simples",
      description: "Modelo básico de anotações"
    },
    meetingNotes: {
      name: "Notas de Reunião",
      description: "Documentação de reunião estruturada"
    },
    researchPaper: {
      name: "Artigo de Pesquisa",
      description: "Modelo de artigo acadêmico com citações"
    },
    apiDocumentation: {
      name: "Documentação de API",
      description: "Modelo de referência técnica de API"
    },
    blogPost: {
      name: "Modelo de Post de Blog",
      description: "Modelo de post de blog otimizado para SEO"
    },
    productRequirements: {
      name: "Requisitos do Produto",
      description: "Modelo de PRD para gerentes de produto"
    },
    templates: "Modelos"
  },

  quickTemplates: {
    apiEndpoint: "Endpoint de API",
    codeSnippet: "Snippet de Código",
    meetingNotes: "Notas de Reunião",
    bugReport: "Relatório de Bug",
    dailyStandup: "Daily Standup",
    featureRequest: "Solicitação de Recurso",
    codeReview: "Revisão de Código",
    projectReadme: "README do Projeto"
  },
  textTransform: {
    title: "Transformar Texto",
    close: "Fechar",
    uppercase: "MAIÚSCULO",
    lowercase: "minúsculo",
    titleCase: "Título",
    sentenceCase: "Frase",
    camelCase: "camelCase",
    kebabCase: "kebab-case",
    snakeCase: "snake_case",
    toggleCase: "tOGGLE cASE",
    capitalize: "Capitalizar",
    uppercaseDesc: "Converter para maiúsculo",
    lowercaseDesc: "Converter para minúsculo",
    titleCaseDesc: "Capitalizar Cada Palavra",
    sentenceCaseDesc: "Capitalizar apenas a primeira palavra",
    camelCaseDesc: "Converter para camelCase",
    kebabCaseDesc: "Converter para kebab-case",
    snakeCaseDesc: "Converter para snake_case",
    toggleCaseDesc: "Alternar maiúsculo/minúsculo",
    capitalizeDesc: "Capitalizar primeira letra"
  },
  codeLanguages: {
    javascript: "JavaScript",
    typescript: "TypeScript",
    python: "Python",
    java: "Java",
    cpp: "C++",
    csharp: "C#",
    go: "Go",
    rust: "Rust",
    php: "PHP",
    ruby: "Ruby",
    swift: "Swift",
    kotlin: "Kotlin",
    html: "HTML",
    css: "CSS",
    scss: "SCSS",
    sql: "SQL",
    bash: "Bash",
    shell: "Shell",
    json: "JSON",
    yaml: "YAML",
    xml: "XML",
    markdown: "Markdown",
    dockerfile: "Dockerfile",
    diff: "Diff",
    language: "Idioma",
    insertCodeBlock: "Inserir Bloco de Código",
    preview: "Visualização"
  },
  dateTime: {
    insertDateTime: "Inserir Data/Hora",
    date: "Data",
    time: "Hora",
    dateTime: "Data e Hora",
    iso8601: "ISO 8601",
    usFormat: "Formato EUA",
    euFormat: "Formato UE",
    readable: "Legível",
    cancel: "Cancelar"
  },
  listHelper: {
    listType: "Tipo de Lista",
    bullet: "Marcadores",
    numbered: "Numerada",
    numberOfItems: "Número de Itens",
    listItems: "Itens da Lista",
    insertList: "Inserir Lista",
    cancel: "Cancelar",
    item: "Item"
  },
  highlightHelper: {
    insertHighlight: "Inserir destaque",
    highlightText: "Destacar Texto",
    textToHighlight: "Texto para destacar",
    color: "Cor",
    visualOnly: "(apenas visual)",
    note: "Nota: O destaque usa a sintaxe ==texto==. Pode não ser suportado por todos os renderizadores Markdown.",
    cancel: "Cancelar",
    yellow: "Amarelo",
    red: "Vermelho",
    green: "Verde",
    blue: "Azul",
    purple: "Roxo",
    pink: "Rosa"
  },

  helpDialog: {
    title: "Referência Rápida de Markdown",
    close: "Fechar",
    headings: "Cabeçalhos",
    textStyles: "Estilos de Texto",
    codeBlocks: "Blocos de Código",
    lists: "Listas",
    links: "Links",
    images: "Imagens",
    quotes: "Citações",
    tables: "Tabelas"
  },

  // Default Content
  defaultContent: `# Conversor de Markdown para PDF

> 🎯 **Converta seus documentos Markdown em PDFs profissionais com fórmulas matemáticas, fluxogramas, destacamento de código e múltiplos temas**

## ✨ Recursos

### 📊 **Suporte Completo de Markdown**
- **Formatação de Texto**: **Negrito**, *Itálico*, ~~Tachado~~, \`Código inline\`
- **Níveis de Títulos**: Suporte completo de estrutura de títulos H1-H6
- **Listas**: Listas ordenadas, listas não ordenadas, listas de tarefas
- **Links e Imagens**: Reconhecimento automático de links, suporte para incorporação de imagens
- **Tabelas**: Suporte para alinhamento e estruturas de tabelas complexas
- **Citações**: Citações em bloco e citações aninhadas

### 🧮 **Renderização de Fórmulas Matemáticas (KaTeX)**
**Fórmula Inline**: Equação massa-energia de Einstein $E = mc^2$

**Fórmula em Bloco**:
$$\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}$$

**Fórmula Complexa**:
$$\\sum_{i=1}^{n} x_i = x_1 + x_2 + \\cdots + x_n$$

**Representação Matricial**:
$$\\begin{bmatrix}
a & b \\\\
c & d
\\end{bmatrix}$$

### 📈 **Desenho de Diagramas (Mermaid)**

#### Fluxograma
\`\`\`mermaid
graph TD
    A[Início] --> B{Condição}
    B -->|Sim| C[Executar A]
    B -->|Não| D[Executar B]
    C --> E[Fim]
    D --> E
\`\`\`

#### Diagrama de Grafo
\`\`\`mermaid
graph LR
    A[Usuário] --> B[Sistema]
    B --> A[Resposta]
\`\`\`

### 💻 **Destacamento de Código**

#### Exemplo JavaScript
\`\`\`javascript
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Exemplo de uso
console.log(fibonacci(10)); // Saída: 55
\`\`\`

#### Exemplo Python
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

### 📋 **Recursos de Tabela**

| Recurso | Status | Descrição | Atalho |
|---------|:------:|-------------|----------|
| Fórmulas Matemáticas | ✅ | Suporte completo KaTeX | \`$...\$ |
| Fluxogramas | ✅ | Diagramas Mermaid | \`mermaid |
| Destacamento de Código | ✅ | Suporte multilíngue | \`lang |
| Tabelas | ✅ | Funcionalidade completa de tabelas | \| \| \| |
| Links | ✅ | Reconhecimento automático de links | [texto](url) |

---

## 📖 Guia do Usuário

### 🚀 **Início Rápido**

1. **Editar Conteúdo**
   - Digite ou cole conteúdo Markdown no editor à esquerda
   - Visualização em tempo real com WYSIWYG

2. **Carregar Arquivos**
   - Clique no botão "Carregar" para selecionar arquivos .md ou .txt
   - Ou arraste e solte arquivos diretamente na área do editor

3. **Personalizar Estilos**
   - Escolha o estilo do tema (Padrão/Acadêmico/Moderno/Minimalista)
   - Ajuste o tamanho do papel e o tamanho da fonte
   - Visualização em tempo real dos efeitos

4. **Exportar PDF**
   - Clique no botão "Obter PDF"
   - Download automático do documento PDF gerado
   - Nome do arquivo gerado automaticamente baseado no título do documento

### ⌨️ **Referência Rápida de Sintaxe Markdown**

#### Sintaxe Básica
\`\`\`markdown
# Título de Nível 1
## Título de Nível 2
### Título de Nível 3

**Texto em negrito** ou __Texto em negrito__
*Texto em itálico* ou _Texto em itálico_
~~Tachado~~

- Item de lista não ordenada
  - Item de lista aninhada

1. Item de lista ordenada
2. Segundo item
   1. Item ordenado aninhado

> Texto de citação
>> Citação aninhada

[Texto do link](https://example.com)
![Descrição da imagem](imagem.jpg)

\`Código inline\`

\`\`\`linguagem
Bloco de código
\`\`\`

### 💡 **Dicas de Uso**

1. **Fórmulas Matemáticas**
   - Use \`$...\` para envolver fórmulas inline
   - Use \`$$...$$\` para envolver fórmulas em bloco
   - Sintaxe matemática LaTeX completa suportada

2. **Blocos de Código**
   - Especifique a linguagem para destacamento de sintaxe: \`\`\`javascript
   - Linguagens suportadas: JavaScript, Python, JSON, Bash, etc.

3. **Desenho de Diagramas**
   - Use sintaxe Mermaid para criar fluxogramas, gráficos, etc.
   - Suporte para múltiplos tipos de diagramas: grafo, fluxograma, etc.

4. **Formatação de Tabelas**
   - Use \`|\` para separar colunas
   - Use \`-\` para separar cabeçalhos e conteúdo
   - Suporte para alinhamento: \`:---\` (esquerda), \`---:\` (direita), \`:---:\` (centro)

---

## ❓ Perguntas Frequentes (FAQ)

### P1: Quais sintaxes Markdown são suportadas?
**R**: Esta ferramenta suporta sintaxe Markdown padrão e extensões GitHub Flavored Markdown (GFM), incluindo tabelas, listas de tarefas, tachado, etc. Também suporta fórmulas matemáticas (KaTeX) e desenho de diagramas (Mermaid).

### P2: O que fazer se as fórmulas matemáticas não forem exibidas?
**R**: Certifique-se de usar a sintaxe correta:
- Fórmulas inline: \`$fórmula$\`
- Fórmulas em bloco: \`$$fórmula$$\`
Se ainda não forem exibidas, verifique se a sintaxe da fórmula está correta.

### P3: Qual é a qualidade dos PDFs exportados?
**R**: Usamos mecanismos de geração de PDF profissionais para garantir a qualidade de saída:
- Gráficos vetoriais de alta definição
- Renderização de texto clara
- Paginação de páginas correta
- Manter formatação original

### P4: Meus dados estão seguros?
**R**: Completamente seguros! Todo o processamento é feito localmente no seu navegador:
- Nenhum dado é carregado em nenhum servidor
- Nenhum armazenamento do conteúdo do seu documento
- Dados automaticamente apagados após o processamento

### P5: Quais navegadores são suportados?
**R**: Suporta todos os navegadores modernos:
- Chrome 65+
- Firefox 60+
- Safari 12+
- Edge 79+

### P6: Como lidar com documentos grandes?
**R**: Para documentos grandes, recomendamos:
- Processar por seções
- Ajustar adequadamente o tamanho da fonte
- Usar quebras de página para segmentação razoável
- Visualizar para confirmar efeitos antes de exportar

### P7: Qual é o nome do arquivo PDF exportado?
**R**: O nome do arquivo é gerado automaticamente baseado no título da primeira linha do documento, por exemplo:
- Título "Relatório de Projeto" → "Relatório de Projeto.pdf"
- Usa "documento.pdf" quando não há título

---

## 📞 Suporte Técnico

### 🔧 **Stack Tecnológico**
- **Next.js** - Framework React
- **Tailwind CSS** - Framework de Estilização
- **Marked** - Analisador Markdown
- **KaTeX** - Renderização de Fórmulas Matemáticas
- **Mermaid** - Desenho de Diagramas
- **html2pdf.js** - Geração de PDF
- **Highlight.js** - Destacamento de Código

### 📧 **Contate-Nos**
[Código Aberto](https://github.com/szlizhenhua/markdown-to-pdf). Para perguntas ou sugestões, entre em contato através de:
- GitHub Issues: Relatar problemas ou solicitar recursos
- Email de feedback: support@markdown-to-pdf.org

### 🔄 **Log de Alterações**
- **v1.0.0** - Lançamento inicial
- Suporte de fórmulas matemáticas KaTeX
- Suporte de diagramas Mermaid
- Seleção de múltiplos estilos de tema
- Otimização de design responsivo

---

<div style="text-align: center; margin-top: 3em; padding: 2em; border-top: 1px solid #eee; color: #666;">
  <p><strong>Conversor de Markdown para PDF</strong></p>
  <p>Ferramenta Profissional de Conversão de Markdown para PDF</p>
  <p style="font-size: 0.9em; margin-top: 1em;">
    Feito com ❤️ | Privacidade em Primeiro Lugar
  </p>
  <p style="font-size: 0.8em; margin-top: 0.5em;">
    © 2025 Markdown to PDF. Todos os direitos reservados.
  </p>
</div>`,

  // SEO
  seo: {
    title: "Conversor de Markdown para PDF | Exportação de Documentos Profissional",
    description: "Converta Markdown em documentos PDF profissionais com matemática, código, diagramas, índice, temas. Saída de qualidade de publicação para uso acadêmico e comercial.",
    keywords: "Markdown, PDF, conversor, KaTeX, Mermaid, destacamento de código, índice, temas, exportar, acadêmico, profissional"
  },

  // SEO Content
  seoContent: {
    whyChooseUs: {
      label: "Por que nos escolher",
      title: "Por que usar nosso conversor de Markdown para PDF?",
      subtitle: "Uma experiência semelhante à Apple para publicar: limpa, rápida e lindamente consistente do rascunho ao PDF.",
      features: {
        privacy: {
          title: "Foco na privacidade",
          description: "Seus dados estão seguros conosco. Todas as conversões acontecem localmente no seu navegador. Nunca fazemos upload dos seus arquivos Markdown para qualquer servidor."
        },
        instant: {
          title: "Conversão instantânea",
          description: "Sem filas de espera. Nosso mecanismo otimizado converte seus documentos instantaneamente, suportando arquivos grandes com facilidade."
        },
        richSupport: {
          title: "Suporte rico",
          description: "Suporte completo para GFM (GitHub Flavored Markdown), fórmulas matemáticas KaTeX, diagramas Mermaid e destaque de sintaxe de código."
        }
      }
    },
    howToConvert: {
      label: "Fluxo de trabalho simples",
      title: "Como converter Markdown para PDF",
      subtitle: "Um fluxo tranquilo de três passos projetado para mantê-lo focado e obter um PDF polido em segundos.",
      steps: {
        step1: {
          title: "Escreva ou cole Markdown",
          description: "Digite diretamente em nosso editor em tempo real ou cole seu código Markdown existente. Você também pode arrastar e soltar arquivos .md."
        },
        step2: {
          title: "Personalize o estilo",
          description: "Escolha entre nossos temas profissionais (Acadêmico, Moderno, etc.) e ajuste tamanhos de fonte, margens e tamanho de papel (A4, Carta)."
        },
        step3: {
          title: "Baixar PDF",
          description: "Clique no botão Exportar para obter instantaneamente seu documento PDF formatado, pronto para compartilhar ou imprimir."
        }
      }
    },
    faq: {
      label: "Perguntas frequentes",
      title: "Perguntas frequentes",
      items: {
        isFree: {
          question: "Esta ferramenta é gratuita?",
          answer: "Sim, nosso conversor de Markdown para PDF é 100% gratuito para uso pessoal e comercial."
        },
        dataStorage: {
          question: "Vocês armazenam meus dados?",
          answer: "Não. Processamos tudo no seu navegador. Seus documentos nunca saem do seu dispositivo."
        },
        mathSupport: {
          question: "Suporta equações matemáticas?",
          answer: "Sim! Usamos KaTeX para renderizar lindamente fórmulas e equações matemáticas complexas."
        },
        diagrams: {
          question: "Posso criar diagramas?",
          answer: "Absolutamente. Suportamos Mermaid.js para criar fluxogramas, diagramas de sequência e gráficos de Gantt a partir do texto."
        }
      }
    },
    comprehensive: {
      title: "Solução abrangente de Markdown",
      description1: "Seja você um estudante escrevendo uma tese, um desenvolvedor documentando código ou um escritor redigindo um romance, nosso editor Markdown fornece as ferramentas de que você precisa. Com recursos como visualização em tempo real, rastreamento de contagem de palavras e modo de foco, você pode escrever sem distrações.",
      description2: "Nosso conversor lida com toda a sintaxe Markdown padrão, incluindo cabeçalhos, listas, links, imagens e blocos de citação. Usuários avançados apreciarão o suporte para blocos de código com destaque de sintaxe específico da linguagem, notas de rodapé e listas de tarefas."
    }
  },

  // Footer
  footer: {
    tagline: "Markdown para PDF",
    subtitle: "Conversões elegantes, sempre.",
    description: "Ferramenta de conversão de documentos profissional para todos. Gratuito, seguro e rápido.",
    legal: {
      title: "Legal",
      privacyPolicy: "Política de privacidade",
      termsOfService: "Termos de serviço"
    },
    links: {
      title: "Links",
      aboutUs: "Sobre nós",
      contact: "Contato"
    },
    connect: {
      title: "Conectar",
      description: "Perguntas ou feedback?"
    },
    copyright: "© {year} Markdown to PDF. Todos os direitos reservados.",
    designed: "Projetado para clareza"
  },

  // Toolbar
  toolbar: {
    heading: "Cabeçalho",
    bold: "Negrito",
    italic: "Itálico",
    strikethrough: "Tachado",
    code: "Código",
    link: "Link",
    image: "Imagem",
    bulletList: "Lista com marcadores",
    numberedList: "Lista numerada",
    quote: "Citação",
    codeBlock: "Bloco de código",
    horizontalRule: "Linha horizontal",
    undo: "Desfazer",
    redo: "Refazer",
    showLess: "Mostrar menos",
    showMore: "Mostrar mais",
    disableWordWrap: "Desativar quebra de linha",
    enableWordWrap: "Ativar quebra de linha",
    findAndReplace: "Localizar e substituir",
    showTools: "Mostrar ferramentas",
    hideTools: "Ocultar ferramentas",
    exportTXT: "TXT",
    special: "Especial",
    lineOps: "Operações de linha"
  },

  // Dialogs
  dialogs: {
    markdownCheatSheet: "Folha de cola do Markdown",
    documentStatistics: "Estatísticas do documento",
    close: "Fechar",
    focusMode: {
      title: "Modo de foco",
      enter: "Entrar no modo de foco",
      exit: "Sair do modo de foco",
      description: "Ambiente de escrita sem distrações"
    },
    wordGoal: {
      title: "Rastreador de meta de palavras",
      setGoal: "Definir meta de palavras",
      currentWords: "Palavras atuais",
      goalWords: "Meta",
      remaining: "Restantes",
      progress: "Progresso",
      achieved: "Meta alcançada! 🎉"
    },
    timeTracker: {
      title: "Rastreador de tempo",
      startTime: "Iniciar",
      stopTime: "Pausar",
      reset: "Redefinir",
      totalTime: "Tempo total",
      sessions: "Sessões hoje",
      wordsPerMin: "palavras/min",
      recording: "Gravando",
      stopped: "Parado",
      today: "Hoje",
      thisWeek: "Esta Semana",
      avgSession: "Sessão Média",
      dailyTimeGoal: "Meta de Tempo Diária",
      hours: "2 horas",
      recentSessions: "Sessões Recentes"
    },
    pomodoro: {
      title: "Timer Pomodoro",
      description: "Use a técnica Pomodoro para sessões de escritura focadas",
      start: "Iniciar",
      pause: "Pausar",
      reset: "Redefinir",
      work: "Trabalho",
      shortBreak: "Pausa curta",
      longBreak: "Pausa longa",
      sessions: "Sessões concluídas"
    },
    quickTemplates: {
      title: "Modelos rápidos",
      select: "Selecionar um modelo para inserir"
    },
    documentTemplates: {
      title: "Modelos de documento",
      description: "Escolher um modelo para começar"
    },
    performance: {
      title: "Configurações de desempenho",
      debounceTime: "Tempo de debounce",
      description: "Ajustar o desempenho de renderização"
    },
    autosave: {
      title: "Configurações de salvamento automático",
      interval: "Intervalo de salvamento",
      description: "Com que frequência salvar seu trabalho automaticamente",
      status: {
        saved: "Salvo",
        saving: "Salvando...",
        unsaved: "Alterações não salvas",
        error: "Erro ao salvar"
      }
    },
    typography: {
      title: "Controles de tipografia",
      description: "Personalize a aparência do texto de visualização",
      fontSize: "Tamanho da fonte",
      lineHeight: "Altura da linha",
      fontFamily: "Família da fonte"
    },
    snippets: {
      title: "Biblioteca de snippets",
      description: "Acesso rápido a padrões e modelos Markdown reutilizáveis",
      add: "Adicionar snippet",
      save: "Salvar snippet",
      cancel: "Cancelar",
      name: "Nome",
    },
    keyboardShortcuts: {
      title: "Atalhos de teclado",
      description: "Acelere seu fluxo de trabalho com estes atalhos"
    }
  },
}
