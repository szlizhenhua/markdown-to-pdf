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
    }
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
  }
}
