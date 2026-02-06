export const es = {
  // Header
  title: "Conversor de Markdown a PDF",
  subtitle: "Convierte Markdown a PDFs profesionales",

  // Controls
  buttons: {
    upload: "Subir",
    showPreview: "Mostrar Vista Previa",
    hidePreview: "Ocultar Vista Previa",
    getPDF: "Obtener PDF",
    generatingPDF: "Generando PDF...",
    settings: "Configuración",
    tableOfContents: "Tabla de Contenidos",
    exportHTML: "HTML",
    exportMarkdown: "MD"
  },

  // Editor
  editor: {
    title: "Editor de Markdown",
    placeholder: "Empieza a escribir tu Markdown aquí...\n\n# Encabezado 1\n## Encabezado 2\n\n**Negrita** y *cursiva* \n\n- Elemento de lista 1\n- Elemento de lista 2\n\n```javascript\nconsole.log('¡Hola Mundo!');\n```\n\n| Columna 1 | Columna 2 |\n|---------|----------|\n| Dato 1  | Dato 2   |",
    dragDropText: "Suelta tu archivo Markdown aquí",
    dragDropSubtext: "Soporta archivos .md y .txt",
    loading: "Cargando diagrama...",
    rendering: "Renderizando diagrama...",
    stats: {
      characters: "Caracteres",
      words: "Palabras",
      lines: "Líneas",
      readingTime: "Tiempo de lectura",
      readingTimeLessThanOne: "< 1 min",
      readingTimeMinute: "min",
      readingTimeHour: "h"
    }
  },

  // Preview
  preview: {
    title: "Vista Previa",
    theme: "tema"
  },

  // Settings
  settings: {
    title: "Configuración",
    theme: "Tema",
    paperSize: "Tamaño de Papel",
    fontSize: "Tamaño de Fuente"
  },

  // Table of Contents
  toc: {
    title: "Tabla de Contenidos"
  },

  // Themes
  themes: {
    default: "Predeterminado",
    academic: "Académico",
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
    pdfGenerationError: "Error en la generación del PDF",
    pdfExportError: "Error en la exportación del PDF, verifica la consola para más detalles",
    mermaidRenderError: "Error de renderizado de Mermaid",
    mermaidSyntaxError: "Por favor, verifica la sintaxis de Mermaid",
    mermaidExampleSyntax: "Ejemplo de sintaxis:",
    mermaidRenderRetry: "Intento de renderizado de Mermaid {count} falló, se reintentará en 100ms",
    mermaidFinalError: "Error final en el renderizado de Mermaid",
    unknownError: "Error desconocido",
    highlightJsError: "Error de Highlight.js para el idioma \"{lang}\":",
    katexRenderError: "Error de renderizado de KaTeX:",
    mermaidInitError: "Error de inicialización de Mermaid:",
    mermaidLoading: "Cargando diagrama...",
    mermaidRendering: "Renderizando diagrama...",
    templateLoaded: "Plantilla cargada",
    templateLoadedMessage: "La plantilla ha sido aplicada al editor.",
    fileTooLarge: "El archivo es demasiado grande. El tamaño máximo es 5MB.",
    invalidFileType: "Tipo de archivo inválido. Por favor sube un archivo .md o .txt.",
    fileUploadFailed: "Error al subir el archivo. Por favor inténtalo de nuevo.",
    fileUploaded: "Archivo subido exitosamente",
    resetComplete: "Restablecimiento completado",
    resetCompleteMessage: "El editor y la configuración han sido restablecidos a los valores predeterminados.",
    copySuccess: "Copiado al portapapeles",
    copyFailed: "Error al copiar al portapapeles",
    networkError: "Error de red. Por favor verifica tu conexión.",
    quotaExceeded: "Cuota de almacenamiento excedida. Por favor borra algunos datos del navegador.",
    autoSaveFailed: "Error en el guardado automático. Tus cambios pueden no haberse guardado."
  },

  // Templates
  templates: {
    title: "Seleccionar una Plantilla",
    description: "Elige entre plantillas diseñadas profesionalmente para comenzar rápidamente",
    selectTemplate: "Haz clic en una plantilla para cargarla en el editor. Tu contenido actual será reemplazado.",
    categories: {
      all: "Todas las Plantillas",
      basic: "Básico",
      academic: "Académico",
      technical: "Técnico",
      documentation: "Documentación"
    },
    // Document templates
    blank: {
      name: "Documento en Blanco",
      description: "Empezar desde cero"
    },
    article: {
      name: "Artículo de Blog",
      description: "Estructura estándar de entrada de blog"
    },
    readme: {
      name: "README.md",
      description: "Plantilla de documentación de proyecto"
    },
    resume: {
      name: "Currículum/CV",
      description: "Plantilla de currículum profesional"
    },
    essay: {
      name: "Ensayo Académico",
      description: "Trabajo académico estructurado"
    },
    meeting: {
      name: "Notas de Reunión",
      description: "Plantilla de notas de reunión estructuradas"
    },
    tutorial: {
      name: "Tutorial/Guía",
      description: "Plantilla de tutorial paso a paso"
    },
    simpleNotes: {
      name: "Notas Simples",
      description: "Plantilla básica de notas"
    },
    meetingNotes: {
      name: "Notas de Reunión",
      description: "Documentación de reunión estructurada"
    },
    researchPaper: {
      name: "Artículo de Investigación",
      description: "Plantilla de artículo académico con citas"
    },
    apiDocumentation: {
      name: "Documentación de API",
      description: "Plantilla de referencia técnica de API"
    },
    blogPost: {
      name: "Plantilla de Artículo de Blog",
      description: "Plantilla de artículo de blog optimizada para SEO"
    },
    productRequirements: {
      name: "Requisitos del Producto",
      description: "Plantilla de PRD para gestores de producto"
    },
    templates: "Plantillas"
  },

  quickTemplates: {
    apiEndpoint: "Endpoint de API",
    codeSnippet: "Fragmento de Código",
    meetingNotes: "Notas de Reunión",
    bugReport: "Reporte de Error",
    dailyStandup: "Reunión Diaria",
    featureRequest: "Solicitud de Función",
    codeReview: "Revisión de Código",
    projectReadme: "README del Proyecto"
  },
  textTransform: {
    title: "Transformar Texto",
    close: "Cerrar",
    uppercase: "MAYÚSCULAS",
    lowercase: "minúsculas",
    titleCase: "Tipo Título",
    sentenceCase: "Tipo oración",
    camelCase: "camelCase",
    kebabCase: "kebab-case",
    snakeCase: "snake_case",
    toggleCase: "tOGGLE cASE",
    capitalize: "Capitalizar",
    uppercaseDesc: "Convertir a mayúsculas",
    lowercaseDesc: "Convertir a minúsculas",
    titleCaseDesc: "Capitalizar Cada Palabra",
    sentenceCaseDesc: "Capitalizar solo la primera palabra",
    camelCaseDesc: "Convertir a camelCase",
    kebabCaseDesc: "Convertir a kebab-case",
    snakeCaseDesc: "Convertir a snake_case",
    toggleCaseDesc: "Alternar mayúsculas/minúsculas",
    capitalizeDesc: "Capitalizar primera letra"
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
    insertCodeBlock: "Insertar Bloque de Código",
    preview: "Vista Previa"
  },
  dateTime: {
    insertDateTime: "Insertar Fecha/Hora",
    date: "Fecha",
    time: "Hora",
    dateTime: "Fecha y Hora",
    iso8601: "ISO 8601",
    usFormat: "Formato EE.UU.",
    euFormat: "Formato UE",
    readable: "Legible",
    cancel: "Cancelar"
  },
  listHelper: {
    listType: "Tipo de Lista",
    bullet: "Viñetas",
    numbered: "Numerada",
    numberOfItems: "Número de Elementos",
    listItems: "Elementos de Lista",
    insertList: "Insertar Lista",
    cancel: "Cancelar",
    item: "Elemento"
  },
  highlightHelper: {
    insertHighlight: "Insertar resaltado",
    highlightText: "Resaltar Texto",
    textToHighlight: "Texto a resaltar",
    color: "Color",
    visualOnly: "(solo visual)",
    note: "Nota: El resaltado usa la sintaxis ==texto==. Puede no ser compatible con todos los renderizadores de Markdown.",
    cancel: "Cancelar",
    yellow: "Amarillo",
    red: "Rojo",
    green: "Verde",
    blue: "Azul",
    purple: "Púrpura",
    pink: "Rosa"
  },

  helpDialog: {
    title: "Referencia Rápida de Markdown",
    close: "Cerrar",
    headings: "Encabezados",
    textStyles: "Estilos de Texto",
    codeBlocks: "Bloques de Código",
    lists: "Listas",
    links: "Enlaces",
    images: "Imágenes",
    quotes: "Citas",
    tables: "Tablas"
  },

  // Default Content
  defaultContent: `# Conversor de Markdown a PDF

> 🎯 **Convierte tus documentos Markdown a PDFs profesionales con fórmulas matemáticas, diagramas de flujo, resaltado de código y múltiples temas**

## ✨ Características

### 📊 **Soporte Completo de Markdown**
- **Formato de Texto**: **Negrita**, *Cursiva*, ~~Tachado~~, \`Código en línea\`
- **Niveles de Encabezados**: Soporte completo de estructura de encabezados H1-H6
- **Listas**: Listas ordenadas, listas sin orden, listas de tareas
- **Enlaces e Imágenes**: Reconocimiento automático de enlaces, soporte para incrustar imágenes
- **Tablas**: Soporte para alineación y estructuras de tablas complejas
- **Citas**: Citas en bloque y citas anidadas

### 🧮 **Renderizado de Fórmulas Matemáticas (KaTeX)**
**Fórmula en Línea**: La ecuación masa-energía de Einstein $E = mc^2$

**Fórmula en Bloque**:
$$\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}$$

**Fórmula Compleja**:
$$\\sum_{i=1}^{n} x_i = x_1 + x_2 + \\cdots + x_n$$

**Representación Matricial**:
$$\\begin{bmatrix}
a & b \\\\
c & d
\\end{bmatrix}$$

### 📈 **Dibujo de Diagramas (Mermaid)**

#### Diagrama de Flujo
\`\`\`mermaid
graph TD
    A[Inicio] --> B{Condición}
    B -->|Sí| C[Ejecutar A]
    B -->|No| D[Ejecutar B]
    C --> E[Fin]
    D --> E
\`\`\`

#### Diagrama de Grafos
\`\`\`mermaid
graph LR
    A[Usuario] --> B[Sistema]
    B --> A[Respuesta]
\`\`\`

#### Diagrama de Secuencia
\`\`\`mermaid
sequenceDiagram
    participant U as Usuario
    participant W as Aplicación Web
    participant S as Servicio PDF
    U->>W: Pegar/Editar Markdown
    W-->>U: Vista previa en vivo
    U->>W: Clic "Obtener PDF"
    W->>S: Renderizar y generar PDF
    S-->>W: Retornar PDF
    W-->>U: Descargar archivo
\`\`\`

#### Diagrama Gantt
\`\`\`mermaid
gantt
    title Plan de Proyecto (Ejemplo)
    dateFormat  YYYY-MM-DD
    section Planificación
    Requisitos        :a1, 2026-02-01, 3d
    Revisión          :a2, 2026-02-04, 1d
    section Entrega
    Características editor     :b1, 2026-02-05, 5d
    Pulido exportación PDF   :b2, 2026-02-10, 3d
\`\`\`

#### Diagrama de Clases
\`\`\`mermaid
classDiagram
    class MarkdownRenderer {
      +render(markdown) HTML
      +renderMermaid() void
    }
    class PdfExporter {
      +export(html) PDF
    }
    MarkdownRenderer --> PdfExporter : proporciona HTML
\`\`\`

#### Diagrama de Estados
\`\`\`mermaid
stateDiagram-v2
    [*] --> Inactivo
    Inactivo --> Editando : escribir
    Editando --> VistaPrevia : vista previa
    VistaPrevia --> Exportando : exportar
    Exportando --> Inactivo : hecho
\`\`\`

#### Gráfico Circular
\`\`\`mermaid
pie title Distribución de Riesgos (Ejemplo)
    "Alto" : 15
    "Medio" : 35
    "Bajo" : 50
\`\`\`

#### Mapa Mental
\`\`\`mermaid
mindmap
  root((Riesgo))
    Identificar
      Amenazas
      Oportunidades
    Evaluar
      Impacto
      Probabilidad
    Responder
      Mitigar
      Transferir
      Aceptar
\`\`\`

#### Línea de Tiempo
\`\`\`mermaid
timeline
    title Cadencia de Lanzamiento (Ejemplo)
    2026-02 : lanzamiento v1.0
    2026-03 : biblioteca de plantillas
    2026-04 : colaboración e historial
\`\`\`

#### Gráfico Radar (Personalizado)
\`\`\`mermaid
radar-chart
    title Radar de Habilidades del Equipo (Ejemplo 1)
    axis Comunicación, Diseño, Desarrollo, QA, Documentación
    series Plan A [80, 70, 90, 60, 75]
    series Plan B [65, 85, 70, 80, 60]
\`\`\`

\`\`\`mermaid
radar
    title Radar de Métricas de Producto (Ejemplo 2)
    axis Velocidad, Estabilidad, UX, Mantenibilidad
    v1 [70, 60, 80, 65]
\`\`\`

#### Gráfico de Cuadrantes (Personalizado)
\`\`\`mermaid
quadrant-chart
    title Matriz de Riesgo vs Momento
    x-axis "Controlabilidad" --> "Sensibilidad"
    y-axis "Madurez" --> "Urgencia"
    quadrant-1 "Ventana estratégica"
    quadrant-2 "Observar y prepararse"
    quadrant-3 "Evitar"
    quadrant-4 "Acelerar"
    "Profundización local": [0.75, 0.85]
    "Sondeo SEA": [0.45, 0.65]
    "Doble vía": [0.35, 0.55]
    "Liderazgo competidor": [0.60, 0.31]
\`\`\`

### 💻 **Resaltado de Código**

#### Ejemplo en JavaScript
\`\`\`javascript
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Ejemplo de uso
console.log(fibonacci(10)); // Salida: 55
\`\`\`

#### Ejemplo en Python
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

### 📋 **Características de Tabla**

| Característica | Estado | Descripción | Atajo |
|---------|:------:|-------------|----------|
| Fórmulas Matemáticas | ✅ | Soporte completo de KaTeX | \`$...\$ |
| Diagramas de Flujo | ✅ | Diagramas Mermaid | \`mermaid |
| Resaltado de Código | ✅ | Soporte multiidioma | \`lang |
| Tablas | ✅ | Funcionalidad completa de tablas | \| \| \| |
| Enlaces | ✅ | Reconocimiento automático de enlaces | [texto](url) |

---

## 📖 Guía de Usuario

### 🚀 **Inicio Rápido**

1. **Editar Contenido**
   - Escribe o pega contenido Markdown en el editor izquierdo
   - Vista previa en tiempo real con WYSIWYG

2. **Subir Archivos**
   - Haz clic en el botón "Subir" para seleccionar archivos .md o .txt
   - O arrastra y suelta archivos directamente en el área del editor

3. **Personalizar Estilos**
   - Elige el estilo del tema (Predeterminado/Académico/Moderno/Minimalista)
   - Ajusta el tamaño de papel y el tamaño de fuente
   - Vista previa en tiempo real de los efectos

4. **Exportar PDF**
   - Haz clic en el botón "Obtener PDF"
   - Descarga automática del documento PDF generado
   - Nombre de archivo generado automáticamente basado en el título del documento

### ⌨️ **Hoja de Referencia de Sintaxis Markdown**

#### Sintaxis Básica
\`\`\`markdown
# Encabezado de Nivel 1
## Encabezado de Nivel 2
### Encabezado de Nivel 3

**Texto en negrita** o __Texto en negrita__
*Texto en cursiva* o _Texto en cursiva_
~~Tachado~~

- Elemento de lista sin orden
  - Elemento de lista anidado

1. Elemento de lista ordenada
2. Segundo elemento
   1. Elemento ordenado anidado

> Texto de cita
>> Cita anidada

[Texto del enlace](https://example.com)
![Descripción de imagen](imagen.jpg)

\`Código en línea\`

\`\`\`idioma
Bloque de código
\`\`\`

### 💡 **Consejos de Uso**

1. **Fórmulas Matemáticas**
   - Usa \`$...\` para envolver fórmulas en línea
   - Usa \`$$...$$\` para envolver fórmulas en bloque
   - Sintaxis matemática completa de LaTeX compatible

2. **Bloques de Código**
   - Especifica el idioma para el resaltado de sintaxis: \`\`\`javascript
   - Idiomas compatibles: JavaScript, Python, JSON, Bash, etc.

3. **Dibujo de Diagramas**
   - Usa sintaxis Mermaid para crear diagramas de flujo, gráficos, etc.
   - Compatible con múltiples tipos de diagramas: grafo, diagrama de flujo, etc.

4. **Formato de Tablas**
   - Usa \`|\` para separar columnas
   - Usa \`-\` para separar encabezados y contenido
   - Soporte para alineación: \`:---\` (izquierda), \`---:\` (derecha), \`:---:\` (centro)

---

## ❓ Preguntas Frecuentes (FAQ)

### P1: ¿Qué sintaxis de Markdown es compatible?
**R**: Esta herramienta es compatible con la sintaxis estándar de Markdown y extensiones GitHub Flavored Markdown (GFM), incluyendo tablas, listas de tareas, tachado, etc. También es compatible con fórmulas matemáticas (KaTeX) y dibujo de diagramas (Mermaid).

### P2: ¿Qué hacer si las fórmulas matemáticas no se muestran?
**R**: Asegúrate de usar la sintaxis correcta:
- Fórmulas en línea: \`$fórmula$\`
- Fórmulas en bloque: \`$$fórmula$$\`
Si aún no se muestran, verifica si la sintaxis de la fórmula es correcta.

### P3: ¿Cuál es la calidad de los PDFs exportados?
**R**: Utilizamos motores de generación de PDF profesionales para garantizar la calidad de salida:
- Gráficos vectorizados de alta definición
- Renderizado de texto claro
- Paginación de páginas correcta
- Mantener el formato original

### P4: ¿Están seguros mis datos?
**R**: ¡Completamente seguros! Todo el procesamiento se realiza localmente en tu navegador:
- No se suben datos a ningún servidor
- No se almacena el contenido de tu documento
- Los datos se eliminan automáticamente después del procesamiento

### P5: ¿Qué navegadores son compatibles?
**R**: Compatible con todos los navegadores modernos:
- Chrome 65+
- Firefox 60+
- Safari 12+
- Edge 79+

### P6: ¿Cómo manejar documentos grandes?
**R**: Para documentos grandes, recomendamos:
- Procesar por secciones
- Ajustar apropiadamente el tamaño de fuente
- Usar saltos de página para una segmentación razonable
- Vista previa para confirmar los efectos antes de exportar

### P7: ¿Cuál es el nombre del archivo PDF exportado?
**R**: El nombre del archivo se genera automáticamente basado en el título de la primera línea del documento, por ejemplo:
- Título "Reporte de Proyecto" → "Reporte de Proyecto.pdf"
- Usa "documento.pdf" cuando no hay título

---

## 📞 Soporte Técnico

### 🔧 **Stack Tecnológico**
- **Next.js** - Framework de React
- **Tailwind CSS** - Framework de estilos
- **Marked** - Analizador de Markdown
- **KaTeX** - Renderizado de fórmulas matemáticas
- **Mermaid** - Dibujo de diagramas
- **html2pdf.js** - Generación de PDF
- **Highlight.js** - Resaltado de código

### 📧 **Contáctanos**
[Código Abierto](https://github.com/szlizhenhua/markdown-to-pdf). Para preguntas o sugerencias, por favor contáctanos a través de:
- GitHub Issues: Reportar problemas o solicitar características
- Correo de retroalimentación: support@markdown-to-pdf.org

### 🔄 **Registro de Cambios**
- **v1.0.0** - Lanzamiento inicial
- Soporte de fórmulas matemáticas KaTeX
- Soporte de diagramas Mermaid
- Selección de múltiples estilos de tema
- Optimización de diseño responsivo

---

<div style="text-align: center; margin-top: 3em; padding: 2em; border-top: 1px solid #eee; color: #666;">
  <p><strong>Conversor de Markdown a PDF</strong></p>
  <p>Herramienta Profesional de Conversión de Markdown a PDF</p>
  <p style="font-size: 0.9em; margin-top: 1em;">
    Hecho con ❤️ | Privacidad Primero
  </p>
  <p style="font-size: 0.8em; margin-top: 0.5em;">
    © 2025 Markdown to PDF. Todos los derechos reservados.
  </p>
</div>`,

  // SEO
  seo: {
    title: "Conversor de Markdown a PDF | Exportación de Documentos Profesionales",
    description: "Convierte Markdown a documentos PDF profesionales con matemáticas, código, diagramas, tabla de contenidos, temas. Salida de calidad de publicación para uso académico y comercial.",
    keywords: "Markdown, PDF, conversor, KaTeX, Mermaid, resaltado de código, tabla de contenidos, temas, exportar, académico, profesional"
  },

  // SEO Content
  seoContent: {
    whyChooseUs: {
      label: "Por qué elegirnos",
      title: "¿Por qué usar nuestro conversor de Markdown a PDF?",
      subtitle: "Una experiencia tipo Apple para publicar: limpia, rápida y bellamente consistente del borrador al PDF.",
      features: {
        privacy: {
          title: "Enfoque en la privacidad",
          description: "Sus datos están seguros con nosotros. Todas las conversiones suceden localmente en su navegador. Nunca subimos sus archivos Markdown a ningún servidor."
        },
        instant: {
          title: "Conversión instantánea",
          description: "Sin colas de espera. Nuestro motor optimizado convierte sus documentos instantáneamente, soportando archivos grandes con facilidad."
        },
        richSupport: {
          title: "Soporte rico",
          description: "Soporte completo para GFM (GitHub Flavored Markdown), fórmulas matemáticas KaTeX, diagramas Mermaid y resaltado de sintaxis de código."
        }
      }
    },
    howToConvert: {
      label: "Flujo de trabajo simple",
      title: "Cómo convertir Markdown a PDF",
      subtitle: "Un flujo tranquilo de tres pasos diseñado para mantenerlo enfocado y obtener un PDF pulido en segundos.",
      steps: {
        step1: {
          title: "Escriba o pegue Markdown",
          description: "Escriba directamente en nuestro editor en tiempo real o pegue su código Markdown existente. También puede arrastrar y soltar archivos .md."
        },
        step2: {
          title: "Personalice el estilo",
          description: "Elija entre nuestros temas profesionales (Académico, Moderno, etc.) y ajuste tamaños de fuente, márgenes y tamaño de papel (A4, Carta)."
        },
        step3: {
          title: "Descargar PDF",
          description: "Haga clic en el botón Exportar para obtener instantáneamente su documento PDF formateado, listo para compartir o imprimir."
        }
      }
    },
    faq: {
      label: "Preguntas frecuentes",
      title: "Preguntas frecuentes",
      items: {
        isFree: {
          question: "¿Es esta herramienta gratuita?",
          answer: "Sí, nuestro conversor de Markdown a PDF es 100% gratuito para uso personal y comercial."
        },
        dataStorage: {
          question: "¿Almacenan mis datos?",
          answer: "No. Procesamos todo en su navegador. Sus documentos nunca salen de su dispositivo."
        },
        mathSupport: {
          question: "¿Soporta ecuaciones matemáticas?",
          answer: "¡Sí! Usamos KaTeX para renderizar bellamente fórmulas y ecuaciones matemáticas complejas."
        },
        diagrams: {
          question: "¿Puedo crear diagramas?",
          answer: "Absolutamente. Soportamos Mermaid.js para crear diagramas de flujo, diagramas de secuencia y gráficos de Gantt desde texto."
        }
      }
    },
    comprehensive: {
      title: "Solución integral de Markdown",
      description1: "Ya sea que sea un estudiante escribiendo una tesis, un desarrollador documentando código o un escritor redactando una novela, nuestro editor de Markdown proporciona las herramientas que necesita. Con características como vista previa en tiempo real, seguimiento de conteo de palabras y modo de enfoque, puede escribir sin distracciones.",
      description2: "Nuestro conversor maneja toda la sintaxis estándar de Markdown incluyendo encabezados, listas, enlaces, imágenes y bloques de citas. Los usuarios avanzados apreciarán el soporte para bloques de código con resaltado de sintaxis específico del lenguaje, notas al pie y listas de tareas."
    }
  },

  // Footer
  footer: {
    tagline: "Markdown a PDF",
    subtitle: "Conversiones elegantes, siempre.",
    description: "Herramienta de conversión de documentos profesional para todos. Gratuita, segura y rápida.",
    legal: {
      title: "Legal",
      privacyPolicy: "Política de privacidad",
      termsOfService: "Términos de servicio"
    },
    links: {
      title: "Enlaces",
      aboutUs: "Acerca de",
      contact: "Contacto"
    },
    connect: {
      title: "Conectar",
      description: "¿Preguntas o comentarios?"
    },
    copyright: "© {year} Markdown to PDF. Todos los derechos reservados.",
    designed: "Diseñado para la claridad"
  },

  // Toolbar
  toolbar: {
    heading: "Encabezado",
    bold: "Negrita",
    italic: "Cursiva",
    strikethrough: "Tachado",
    code: "Código",
    link: "Enlace",
    image: "Imagen",
    bulletList: "Lista de viñetas",
    numberedList: "Lista numerada",
    quote: "Cita",
    codeBlock: "Bloque de código",
    horizontalRule: "Regla horizontal",
    undo: "Deshacer",
    redo: "Rehacer",
    showLess: "Mostrar menos",
    showMore: "Mostrar más",
    disableWordWrap: "Desactivar ajuste de línea",
    enableWordWrap: "Activar ajuste de línea",
    findAndReplace: "Buscar y reemplazar",
    showTools: "Mostrar herramientas",
    hideTools: "Ocultar herramientas",
    exportTXT: "TXT",
    special: "Especial",
    lineOps: "Operaciones de línea",
    focus: "Enfocar",
    focused: "Enfocado",
    exportMarkdownLabel: "Exportar .md",
    splitView: {
      sideBySide: "Lado a lado",
      vertical: "Vertical",
      switchToSideBySide: "Cambiar a vista lado a lado",
      switchToVertical: "Cambiar a vista vertical"
    },
    lineOpsActions: {
      duplicate: "Duplicar línea",
      delete: "Eliminar línea",
      join: "Unir",
      sortAsc: "Ordenar ↑",
      sortDesc: "Ordenar ↓",
      reverse: "Invertir",
      clean: "Limpiar"
    }
  },

  // Dialogs
  dialogs: {
    markdownCheatSheet: "Hoja de referencia de Markdown",
    documentStatistics: "Estadísticas del documento",
    close: "Cerrar",
    focusMode: {
      title: "Modo de enfoque",
      enter: "Entrar en modo de enfoque",
      exit: "Salir del modo de enfoque",
      description: "Entorno de escritura sin distracciones",
      activeHint: "Modo enfoque activo - Presiona Esc para salir"
    },
    markdownExport: {
      title: "Exportar Markdown",
      description: "Descarga tu markdown como .md o copia al portapapeles",
      filenameLabel: "Nombre de archivo",
      filenamePlaceholder: "document",
      filenameHint: "El archivo se guardará como \"{filename}\"",
      download: "Descargar .md",
      copy: "Copiar al portapapeles",
      fileInfoTitle: "Info del archivo:"
    },
    wordGoal: {
      title: "Rastreador de objetivos de palabras",
      setGoal: "Establecer objetivo de palabras",
      currentWords: "Palabras actuales",
      goalWords: "Objetivo",
      remaining: "Restantes",
      progress: "Progreso",
      achieved: "¡Objetivo alcanzado! 🎉",
      doneBadge: "Listo"
    },
    timeTracker: {
      title: "Rastreador de tiempo",
      startTime: "Iniciar",
      stopTime: "Pausar",
      reset: "Restablecer",
      totalTime: "Tiempo total",
      sessions: "Sesiones de hoy",
      wordsPerMin: "palabras/min",
      recording: "Grabando",
      stopped: "Detenido",
      today: "Hoy",
      thisWeek: "Esta Semana",
      avgSession: "Sesión Promedio",
      dailyTimeGoal: "Meta de Tiempo Diaria",
      hours: "2 horas",
      recentSessions: "Sesiones Recientes"
    },
    pomodoro: {
      title: "Temporizador Pomodoro",
      description: "Usa la técnica Pomodoro para sesiones de escritura enfocadas",
      start: "Iniciar",
      pause: "Pausar",
      reset: "Restablecer",
      work: "Trabajo",
      shortBreak: "Descanso corto",
      longBreak: "Descanso largo",
      sessions: "Sesiones completadas"
    },
    quickTemplates: {
      title: "Plantillas rápidas",
      select: "Seleccionar una plantilla para insertar"
    },
    documentTemplates: {
      title: "Plantillas de documento",
      description: "Elegir una plantilla para comenzar"
    },
    performance: {
      title: "Configuración de rendimiento",
      debounceTime: "Tiempo de rebote",
      description: "Ajustar el rendimiento de renderizado"
    },
    autosave: {
      title: "Configuración de guardado automático",
      interval: "Intervalo de guardado",
      description: "Con qué frecuencia guardar su trabajo automáticamente",
      status: {
        saved: "Guardado",
        saving: "Guardando...",
        unsaved: "Cambios no guardados",
        error: "Error al guardar"
      }
    },
    typography: {
      title: "Controles de tipografía",
      description: "Personaliza la apariencia del texto de vista previa",
      fontSize: "Tamaño de fuente",
      lineHeight: "Altura de línea",
      fontFamily: "Familia de fuente"
    },
    snippets: {
      title: "Biblioteca de fragmentos",
      description: "Acceso rápido a patrones y plantillas de markdown reutilizables",
      add: "Agregar fragmento",
      save: "Guardar fragmento",
      cancel: "Cancelar",
      name: "Nombre",
    },
    keyboardShortcuts: {
      title: "Atajos de teclado",
      description: "Aumenta tu productividad con estos atajos"
    }
  },
}
