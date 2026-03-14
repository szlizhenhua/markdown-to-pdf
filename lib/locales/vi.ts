export const vi = {
  // Header
  title: "Công cụ Chuyển đổi Markdown sang PDF",
  subtitle: "Chuyển đổi Markdown thành PDF chuyên nghiệp",

  // Controls
  buttons: {
    upload: "Tải lên",
    showPreview: "Hiện bản xem trước",
    hidePreview: "Ẩn bản xem trước",
    getPDF: "Lấy PDF",
    generatingPDF: "Đang tạo PDF...",
    settings: "Cài đặt",
    tableOfContents: "Mục lục",
    exportHTML: "HTML",
    exportMarkdown: "MD"
  },

  // Editor
  editor: {
    title: "Trình soạn thảo Markdown",
    placeholder: "Bắt đầu nhập Markdown của bạn tại đây...\n\n# Tiêu đề 1\n## Tiêu đề 2\n\n**In đậm** và *in nghiêng*\n\n- Mục danh sách 1\n- Mục danh sách 2\n\n```javascript\nconsole.log('Xin chào Thế giới!');\n```\n\n| Cột 1 | Cột 2 |\n|---------|----------|\n| Dữ liệu 1  | Dữ liệu 2   |",
    dragDropText: "Kéo tệp Markdown vào đây",
    dragDropSubtext: "Hỗ trợ tệp .md và .txt",
    loading: "Đang tải biểu đồ...",
    rendering: "Đang hiển thị biểu đồ...",
    stats: {
      characters: "Ký tự",
      words: "Từ",
      lines: "Dòng",
      readingTime: "Thời gian đọc",
      readingTimeLessThanOne: "< 1 phút",
      readingTimeMinute: "phút",
      readingTimeHour: "giờ"
    }
  },

  // Preview
  preview: {
    title: "Xem trước",
    theme: "chủ đề"
  },

  // Settings
  settings: {
    title: "Cài đặt",
    theme: "Chủ đề",
    paperSize: "Khổ giấy",
    fontSize: "Cỡ chữ"
  },

  // Table of Contents
  toc: {
    title: "Mục lục"
  },

  // Themes
  themes: {
    default: "Mặc định",
    academic: "Học thuật",
    modern: "Hiện đại",
    minimal: "Tối giản"
  },

  // Paper Sizes
  paperSizes: {
    a4: "A4",
    letter: "Thư",
    legal: "Pháp lý"
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
    pdfGenerationError: "Tạo PDF thất bại",
    pdfExportError: "Xuất PDF thất bại, kiểm tra console để biết chi tiết",
    mermaidRenderError: "Lỗi hiển thị Mermaid",
    mermaidSyntaxError: "Kiểm tra cú pháp Mermaid",
    mermaidExampleSyntax: "Ví dụ cú pháp:",
    mermaidRenderRetry: "Lần thử hiển thị Mermaid {count} thất bại, sẽ thử lại sau 100ms",
    mermaidFinalError: "Hiển thị Mermaid cuối cùng thất bại",
    unknownError: "Lỗi không xác định",
    highlightJsError: "Lỗi Highlight.js cho ngôn ngữ \"{lang}\":",
    katexRenderError: "Lỗi hiển thị KaTeX:",
    mermaidInitError: "Lỗi khởi tạo Mermaid:",
    mermaidLoading: "Đang tải biểu đồ...",
    mermaidRendering: "Đang hiển thị biểu đồ...",
    templateLoaded: "Đã tải mẫu",
    templateLoadedMessage: "Mẫu đã được áp dụng vào trình soạn thảo.",
    fileTooLarge: "Tệp quá lớn. Kích thước tối đa là 5MB.",
    invalidFileType: "Loại tệp không hợp lệ. Vui lòng tải lên tệp .md hoặc .txt.",
    fileUploadFailed: "Tải tệp lên thất bại. Vui lòng thử lại.",
    fileUploaded: "Đã tải tệp lên thành công",
    resetComplete: "Đặt lại hoàn tất",
    resetCompleteMessage: "Trình soạn thảo và cài đặt đã được đặt về mặc định.",
    copySuccess: "Đã sao chép vào clipboard",
    copyFailed: "Sao chép vào clipboard thất bại",
    networkError: "Lỗi mạng. Vui lòng kiểm tra kết nối của bạn.",
    quotaExceeded: "Vượt quá hạn ngạch lưu trữ. Vui lòng xóa một số dữ liệu trình duyệt.",
    autoSaveFailed: "Tự động lưu thất bại. Các thay đổi của bạn có thể không được lưu."
  },

  // Templates
  templates: {
    title: "Chọn Mẫu",
    description: "Chọn từ các mẫu được thiết kế chuyên nghiệp để bắt đầu nhanh chóng",
    selectTemplate: "Nhấp vào một mẫu để tải vào trình soạn thảo. Nội dung hiện tại của bạn sẽ được thay thế.",
    categories: {
      all: "Tất cả Mẫu",
      basic: "Cơ bản",
      academic: "Học thuật",
      technical: "Kỹ thuật",
      documentation: "Tài liệu"
    },
    // Document templates
    blank: {
      name: "Tài liệu Trống",
      description: "Bắt đầu với một trang trắng"
    },
    article: {
      name: "Bài Blog",
      description: "Cấu trúc bài đăng blog tiêu chuẩn"
    },
    readme: {
      name: "README.md",
      description: "Mẫu tài liệu dự án"
    },
    resume: {
      name: "Sơ yếu lý lịch",
      description: "Mẫu sơ yếu lý lịch chuyên nghiệp"
    },
    essay: {
      name: "Tiểu luận Học thuật",
      description: "Bài báo học thuật có cấu trúc"
    },
    meeting: {
      name: "Ghi chú Cuộc họp",
      description: "Mẫu ghi chú cuộc họp có cấu trúc"
    },
    tutorial: {
      name: "Hướng dẫn/Cẩm nang",
      description: "Mẫu hướng dẫn từng bước"
    },
    simpleNotes: {
      name: "Ghi chú Đơn giản",
      description: "Mẫu ghi chú cơ bản"
    },
    meetingNotes: {
      name: "Ghi chú Cuộc họp",
      description: "Tài liệu cuộc họp có cấu trúc"
    },
    researchPaper: {
      name: "Bài báo Nghiên cứu",
      description: "Mẫu bài báo học thuật với trích dẫn"
    },
    apiDocumentation: {
      name: "Tài liệu API",
      description: "Mẫu tham khảo kỹ thuật API"
    },
    blogPost: {
      name: "Mẫu Bài viết Blog",
      description: "Mẫu bài viết blog tối ưu SEO"
    },
    productRequirements: {
      name: "Yêu cầu Sản phẩm",
      description: "Mẫu PRD cho quản lý sản phẩm"
    },
    templates: "Mẫu"
  },

  // Default Content
  defaultContent: `# Công cụ Chuyển đổi Markdown sang PDF

> 🎯 **Chuyển đổi tài liệu Markdown của bạn thành PDF chuyên nghiệp với công thức toán học, biểu đồ, làm nổi bật mã và nhiều chủ đề**

## ✨ Tính năng

### 📊 **Hỗ trợ Markdown Đầy đủ**
- **Định dạng văn bản**: **In đậm**, *In nghiêng*, ~~Gạch bỏ~~, \`Mã inline\`
- **Mức tiêu đề**: Hỗ trợ đầy đủ cấu trúc tiêu đề H1-H6
- **Danh sách**: Danh sách có thứ tự, danh sách không có thứ tự, danh sách công việc
- **Liên kết & Hình ảnh**: Tự động nhận dạng liên kết, hỗ trợ nhúng hình ảnh
- **Bảng**: Hỗ trợ căn chỉnh và cấu trúc bảng phức tạp
- **Trích dẫn**: Trích dẫn khối và trích dẫn lồng nhau

### 🧮 **Hiển thị Công thức Toán học (KaTeX)**
**Công thức inline**: Phương trình khối lượng-năng lượng của Einstein $E = mc^2$

**Công thức khối**:
$$\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}$$

**Công thức phức tạp**:
$$\\sum_{i=1}^{n} x_i = x_1 + x_2 + \\cdots + x_n$$

**Biểu diễn ma trận**:
$$\\begin{bmatrix}
a & b \\\\
c & d
\\end{bmatrix}$$

### 📈 **Vẽ Biểu đồ (Mermaid)**

#### Sơ đồ Dòng chảy
\`\`\`mermaid
graph TD
    A[Bắt đầu] --> B{Điều kiện}
    B -->|Có| C[Thực hiện A]
    B -->|Không| D[Thực hiện B]
    C --> E[Kết thúc]
    D --> E
\`\`\`

#### Sơ đồ Đồ thị
\`\`\`mermaid
graph LR
    A[Người dùng] --> B[Hệ thống]
    B --> A[Phản hồi]
\`\`\`

#### Sơ đồ Trình tự
\`\`\`mermaid
sequenceDiagram
    participant U as Người dùng
    participant W as Ứng dụng Web
    participant S as Dịch vụ PDF
    U->>W: Dán/Chỉnh sửa Markdown
    W-->>U: Xem trước trực tiếp
    U->>W: Nhấp "Lấy PDF"
    W->>S: Kết xuất & tạo PDF
    S-->>W: Trả về PDF
    W-->>U: Tải xuống tệp
\`\`\`

#### Sơ đồ Gantt
\`\`\`mermaid
gantt
    title Kế hoạch Dự án (Ví dụ)
    dateFormat  YYYY-MM-DD
    section Lập kế hoạch
    Yêu cầu        :a1, 2026-02-01, 3d
    Xem xét          :a2, 2026-02-04, 1d
    section Giao hàng
    Tính năng trình soạn thảo     :b1, 2026-02-05, 5d
    Hoàn thiện xuất PDF   :b2, 2026-02-10, 3d
\`\`\`

#### Sơ đồ Lớp
\`\`\`mermaid
classDiagram
    class MarkdownRenderer {
      +render(markdown) HTML
      +renderMermaid() void
    }
    class PdfExporter {
      +export(html) PDF
    }
    MarkdownRenderer --> PdfExporter : cung cấp HTML
\`\`\`

#### Sơ đồ Trạng thái
\`\`\`mermaid
stateDiagram-v2
    [*] --> Nhàn rỗi
    Nhàn rỗi --> Chỉnh sửa : nhập
    Chỉnh sửa --> Xem trước : xem trước
    Xem trước --> Xuất : xuất
    Xuất --> Nhàn rỗi : hoàn thành
\`\`\`

#### Sơ đồ Tròn
\`\`\`mermaid
pie title Phân bổ Rủi ro (Ví dụ)
    "Cao" : 15
    "Trung bình" : 35
    "Thấp" : 50
\`\`\`

#### Sơ đồ Tư duy
\`\`\`mermaid
mindmap
  root((Rủi ro))
    Xác định
      Mối đe dọa
      Cơ hội
    Đánh giá
      Tác động
      Khả năng
    Phản hồi
      Giảm thiểu
      Chuyển nhượng
      Chấp nhận
\`\`\`

#### Dòng thời gian
\`\`\`mermaid
timeline
    title Tần suất Phát hành (Ví dụ)
    2026-02 : ra mắt v1.0
    2026-03 : thư viện mẫu
    2026-04 : cộng tác & lịch sử
\`\`\`

#### Sơ đồ Radar (Tùy chỉnh)
\`\`\`mermaid
radar-chart
    title Radar Kỹ năng Đội (Ví dụ 1)
    axis Giao tiếp, Thiết kế, Phát triển, QA, Tài liệu
    series Kế hoạch A [80, 70, 90, 60, 75]
    series Kế hoạch B [65, 85, 70, 80, 60]
\`\`\`

\`\`\`mermaid
radar
    title Radar Chỉ số Sản phẩm (Ví dụ 2)
    axis Tốc độ, Ổn định, UX, Khả năng bảo trì
    v1 [70, 60, 80, 65]
\`\`\`

#### Sơ đồ Tứ phân đoạn (Tùy chỉnh)
\`\`\`mermaid
quadrant-chart
    title Ma trận Rủi ro vs Thời điểm
    x-axis "Khả năng kiểm soát" --> "Độ nhạy cảm"
    y-axis "Độ trưởng thành" --> "Tính cấp thiết"
    quadrant-1 "Cửa sổ chiến lược"
    quadrant-2 "Quan sát & chuẩn bị"
    quadrant-3 "Tránh"
    quadrant-4 "Thúc đẩy"
    "Đi sâu địa phương": [0.75, 0.85]
    "Khảo sát SEA": [0.45, 0.65]
    "Đôi đường": [0.35, 0.55]
    "Dẫn đầu đối thủ": [0.60, 0.31]
\`\`\`

### 💻 **Làm nổi bật Mã**

#### Ví dụ JavaScript
\`\`\`javascript
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Ví dụ sử dụng
console.log(fibonacci(10)); // Đầu ra: 55
\`\`\`

#### Ví dụ Python
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

### 📋 **Tính năng Bảng**

| Tính năng | Trạng thái | Mô tả | Lối tắt |
|---------|:------:|-------------|----------|
| Công thức Toán học | ✅ | Hỗ trợ KaTeX đầy đủ | \`$...\$ |
| Sơ đồ Dòng chảy | ✅ | Biểu đồ Mermaid | \`mermaid |
| Làm nổi bật Mã | ✅ | Hỗ trợ đa ngôn ngữ | \`lang |
| Bảng | ✅ | Chức năng bảng đầy đủ | \| \| \| |
| Liên kết | ✅ | Tự động nhận dạng liên kết | [văn bản](url) |

---

## 📖 Hướng dẫn Sử dụng

### 🚀 **Bắt đầu Nhanh**

1. **Chỉnh sửa Nội dung**
   - Nhập hoặc dán nội dung Markdown vào trình soạn thảo bên trái
   - Xem trước thời gian thực với WYSIWYG

2. **Tải lên Tệp**
   - Nhấp nút "Tải lên" để chọn tệp .md hoặc .txt
   - Hoặc kéo và thả tệp trực tiếp vào khu vực trình soạn thảo

3. **Tùy chỉnh Giao diện**
   - Chọn kiểu chủ đề (Mặc định/Học thuật/Hiện đại/Tối giản)
   - Điều chỉnh khổ giấy và cỡ chữ
   - Xem trước hiệu ứng thời gian thực

4. **Xuất PDF**
   - Nhấp nút "Lấy PDF"
   - Tự động tải xuống tài liệu PDF đã tạo
   - Tên tệp được tạo tự động dựa trên tiêu đề tài liệu

### ⌨️ **Bảng tham chiếu Cú pháp Markdown**

#### Cú pháp Cơ bản
\`\`\`markdown
# Tiêu đề Cấp 1
## Tiêu đề Cấp 2
### Tiêu đề Cấp 3

**Văn bản in đậm** hoặc __Văn bản in đậm__
*Văn bản in nghiêng* hoặc _Văn bản in nghiêng_
~~Gạch bỏ~~

- Mục danh sách không có thứ tự
  - Mục danh sách lồng nhau

1. Mục danh sách có thứ tự
2. Mục thứ hai
   1. Mục có thứ tự lồng nhau

> Văn bản trích dẫn
>> Trích dẫn lồng nhau

[Liên kết](https://example.com)
![Mô tả hình ảnh](hinhanh.jpg)

\`Mã inline\`

\`\`\`ngonngu
Khối mã
\`\`\`

### 💡 **Mẹo Sử dụng**

1. **Công thức Toán học**
   - Sử dụng \`$...\` cho công thức inline
   - Sử dụng \`$$...$$\` cho công thức khối
   - Hỗ trợ đầy đủ cú pháp toán học LaTeX

2. **Khối Mã**
   - Chỉ định ngôn ngữ để làm nổi bật cú pháp: \`\`\`javascript
   - Các ngôn ngữ được hỗ trợ: JavaScript, Python, JSON, Bash, v.v.

3. **Vẽ Biểu đồ**
   - Sử dụng cú pháp Mermaid để tạo sơ đồ dòng chảy, đồ thị, v.v.
   - Hỗ trợ nhiều loại biểu đồ: đồ thị, sơ đồ dòng chảy, v.v.

4. **Định dạng Bảng**
   - Sử dụng \`|\` để phân tách cột
   - Sử dụng \`-\` để phân tách tiêu đề và nội dung
   - Hỗ trợ căn chỉnh: \`:---\` (trái), \`---:\` (phải), \`:---:\` (giữa)

---

## ❓ Câu hỏi Thường gặp (FAQ)

### C1: Cú pháp Markdown nào được hỗ trợ?
**Đ**: Công cụ này hỗ trợ cú pháp Markdown tiêu chuẩn và các phần mở rộng GitHub Flavored Markdown (GFM), bao gồm bảng, danh sách công việc, gạch bỏ, v.v. Nó cũng hỗ trợ công thức toán học (KaTeX) và vẽ biểu đồ (Mermaid).

### C2: Làm gì khi công thức toán học không hiển thị?
**Đ**: Hãy chắc chắn bạn sử dụng cú pháp đúng:
- Công thức inline: \`$công thức$\`
- Công thức khối: \`$$công thức$$\`
Nếu vẫn không hiển thị, hãy kiểm tra xem cú pháp công thức có đúng không.

### C3: Chất lượng PDF được xuất như thế nào?
**Đ**: Chúng tôi sử dụng các công cụ tạo PDF chuyên nghiệp để đảm bảo chất lượng đầu ra:
- Đồ họa vector độ nét cao
- Hiển thị văn bản rõ ràng
- Phân trang đúng
- Giữ nguyên định dạng ban đầu

### C4: Dữ liệu của tôi có an toàn không?
**Đ**: Hoàn toàn an toàn! Tất cả xử lý được thực hiện cục bộ trong trình duyệt của bạn:
- Không có dữ liệu nào được tải lên máy chủ
- Không lưu trữ nội dung tài liệu của bạn
- Dữ liệu được tự động xóa sau khi xử lý

### C5: Những trình duyệt nào được hỗ trợ?
**Đ**: Hỗ trợ tất cả trình duyệt hiện đại:
- Chrome 65+
- Firefox 60+
- Safari 12+
- Edge 79+

### C6: Làm sao để xử lý tài liệu lớn?
**Đ**: Với tài liệu lớn, chúng tôi khuyến nghị:
- Xử lý theo từng phần
- Điều chỉnh cỡ chữ phù hợp
- Sử dụng ngắt trang để phân đoạn hợp lý
- Xem trước để xác nhận hiệu quả trước khi xuất

### C7: Tên tệp PDF được xuất là gì?
**Đ**: Tên tệp được tạo tự động dựa trên tiêu đề dòng đầu tiên của tài liệu, ví dụ:
- Tiêu đề "Báo cáo Dự án" → "Báo cáo Dự án.pdf"
- Sử dụng "document.pdf" khi không có tiêu đề

---

## 📞 Hỗ trợ Kỹ thuật

### 🔧 **Tech Stack**
- **Next.js** - Framework React
- **Tailwind CSS** - Framework kiểu dáng
- **Marked** - Bộ phân tích Markdown
- **KaTeX** - Hiển thị công thức toán học
- **Mermaid** - Vẽ biểu đồ
- **html2pdf.js** - Tạo PDF
- **Highlight.js** - Làm nổi bật mã

### 📧 **Liên hệ**
[Open Source](https://github.com/szlizhenhua/markdown-to-pdf). Đối với câu hỏi hoặc đề xuất, vui lòng liên hệ với chúng tôi qua:
- GitHub Issues: Báo cáo vấn đề hoặc yêu cầu tính năng
- Phản hồi email: support@markdown-to-pdf.org

### 🔄 **Nhật ký Thay đổi**
- **v1.0.0** - Phát hành đầu tiên
- Hỗ trợ công thức toán học KaTeX
- Hỗ trợ biểu đồ Mermaid
- Lựa chọn kiểu chủ đề đa dạng
- Tối ưu hóa thiết kế đáp ứng

---

<div style="text-align: center; margin-top: 3em; padding: 2em; border-top: 1px solid #eee; color: #666;">
  <p><strong>Công cụ Chuyển đổi Markdown sang PDF</strong></p>
  <p>Công cụ Chuyển đổi Markdown sang PDF Chuyên nghiệp</p>
  <p style="font-size: 0.9em; margin-top: 1em;">
    Được tạo với ❤️ | Ưu tiên Quyền riêng tư
  </p>
  <p style="font-size: 0.8em; margin-top: 0.5em;">
    © 2025 Markdown to PDF. Bảo lưu mọi quyền.
  </p>
</div>`,

  // SEO
  seo: {
    title: "Công cụ Chuyển đổi Markdown sang PDF | Xuất Tài liệu Chuyên nghiệp",
    description: "Chuyển đổi Markdown thành tài liệu PDF chuyên nghiệp với toán học, mã, biểu đồ, mục lục, chủ đề. Đầu ra chất lượng xuất bản cho sử dụng học thuật và thương mại.",
    keywords: "Markdown, PDF, chuyển đổi, KaTeX, Mermaid, làm nổi bật mã, mục lục, chủ đề, xuất, học thuật, chuyên nghiệp"
  },

  // SEO Content
  seoContent: {
    whyChooseUs: {
      label: "Tại sao chọn chúng tôi",
      title: "Tại sao nên sử dụng công cụ chuyển đổi Markdown sang PDF của chúng tôi?",
      subtitle: "Trải nghiệm giống Apple cho xuất bản: sạch sẽ, nhanh và đẹp một cách nhất quán từ bản nháp đến PDF.",
      features: {
        privacy: {
          title: "Ưu tiên Quyền riêng tư",
          description: "Dữ liệu của bạn an toàn với chúng tôi. Tất cả chuyển đổi diễn ra cục bộ trong trình duyệt của bạn. Chúng tôi không bao giờ tải lên tệp Markdown của bạn lên bất kỳ máy chủ nào."
        },
        instant: {
          title: "Chuyển đổi Tức thì",
          description: "Không có hàng đợi. Công cụ tối ưu hóa của chúng tôi chuyển đổi tài liệu của bạn ngay lập tức và hỗ trợ các tệp lớn một cách dễ dàng."
        },
        richSupport: {
          title: "Hỗ trợ Phong phú",
          description: "Hỗ trợ đầy đủ cho GFM (GitHub Flavored Markdown), công thức toán học KaTeX, biểu đồ Mermaid và làm nổi bật cú pháp mã."
        }
      }
    },
    howToConvert: {
      label: "Quy trình đơn giản",
      title: "Cách Chuyển đổi Markdown sang PDF",
      subtitle: "Quy trình ba bước êm dịnh được thiết kế để giữ cho bạn tập trung và có được PDF bóng bẩy trong vài giây.",
      steps: {
        step1: {
          title: "Viết hoặc Dán Markdown",
          description: "Nhập trực tiếp vào trình soạn thảo thời gian thực của chúng tôi hoặc dán mã Markdown hiện có của bạn. Bạn cũng có thể kéo và thả các tệp .md."
        },
        step2: {
          title: "Tùy chỉnh Kiểu dáng",
          description: "Chọn từ các chủ đề chuyên nghiệp của chúng tôi (Học thuật, Hiện đại, v.v.) và điều chỉnh cỡ chữ, lề và khổ giấy (A4, Thư)."
        },
        step3: {
          title: "Tải xuống PDF",
          description: "Nhấp nút Xuất để nhận ngay tài liệu PDF được định dạng sẵn sàng để chia sẻ hoặc in."
        }
      }
    },
    faq: {
      label: "FAQ",
      title: "Câu hỏi Thường gặp",
      items: {
        isFree: {
          question: "Công cụ này có miễn phí không?",
          answer: "Có, công cụ chuyển đổi Markdown sang PDF của chúng tôi hoàn toàn miễn phí 100% cho cả sử dụng cá nhân và thương mại."
        },
        dataStorage: {
          question: "Bạn có lưu trữ dữ liệu của tôi không?",
          answer: "Không. Chúng tôi xử lý mọi thứ trong trình duyệt của bạn. Tài liệu của bạn không bao giờ rời khỏi thiết bị của bạn."
        },
        mathSupport: {
          question: "Có hỗ trợ phương trình toán học không?",
          answer: "Có! Chúng tôi sử dụng KaTeX để hiển thị đẹp các công thức và phương trình toán học phức tạp."
        },
        diagrams: {
          question: "Tôi có thể tạo biểu đồ không?",
          answer: "Chắc chắn. Chúng tôi hỗ trợ Mermaid.js để tạo sơ đồ dòng chảy, sơ đồ trình tự và biểu đồ Gantt từ văn bản."
        }
      }
    },
    comprehensive: {
      title: "Giải pháp Markdown Toàn diện",
      description1: "Dù bạn là sinh viên viết luận văn, nhà phát triển tài liệu mã hoặc nhà văn viết tiểu thuyết, trình soạn thảo Markdown của chúng tôi cung cấp các công cụ bạn cần. Với các tính năng như xem trước thời gian thực, theo dõi số từ và chế độ tập trung, bạn có thể viết而无 bị xao nhãng.",
      description2: "Công cụ chuyển đổi của chúng tôi xử lý tất cả cú pháp Markdown tiêu chuẩn bao gồm tiêu đề, danh sách, liên kết, hình ảnh và khối trích dẫn. Người dùng nâng cao sẽ đánh giá cao hỗ trợ cho các khối mã với làm nổi bật cú pháp cụ thể theo ngôn ngữ, chú thích cuối trang và danh sách công việc."
    }
  },

  // Footer
  footer: {
    tagline: "Markdown sang PDF",
    subtitle: "Chuyển đổi sang PDF chuyên nghiệp mỗi lần.",
    description: "Công cụ chuyển đổi tài liệu chuyên nghiệp cho mọi người. Miễn phí, an toàn và nhanh.",
    legal: {
      title: "Pháp lý",
      privacyPolicy: "Chính sách Quyền riêng tư",
      termsOfService: "Điều khoản Dịch vụ"
    },
    links: {
      title: "Liên kết",
      aboutUs: "Về chúng tôi",
      contact: "Liên hệ"
    },
    connect: {
      title: "Kết nối",
      description: "Câu hỏi hoặc phản hồi?"
    },
    copyright: "© {year} Markdown to PDF. Bảo lưu mọi quyền.",
    designed: "Được thiết kế để rõ ràng"
  },

  // Toolbar
  toolbar: {
    heading: "Tiêu đề",
    bold: "In đậm",
    italic: "In nghiêng",
    strikethrough: "Gạch bỏ",
    code: "Mã",
    link: "Liên kết",
    image: "Hình ảnh",
    bulletList: "Danh sách dấu đầu dòng",
    numberedList: "Danh sách đánh số",
    quote: "Trích dẫn",
    codeBlock: "Khối mã",
    horizontalRule: "Đường ngang",
    undo: "Hoàn tác",
    redo: "Làm lại",
    showLess: "Hiện ít hơn",
    showMore: "Hiện thêm",
    disableWordWrap: "Tắt ngắt dòng",
    enableWordWrap: "Bật ngắt dòng",
    findAndReplace: "Tìm và Thay thế",
    showTools: "Hiện công cụ",
    hideTools: "Ẩn công cụ",
    exportTXT: "TXT",
    special: "Đặc biệt",
    lineOps: "Thao tác Dòng",
    focus: "Tập trung",
    focused: "Đang tập trung",
    exportMarkdownLabel: "Xuất .md",
    splitView: {
      sideBySide: "Song song",
      vertical: "Dọc",
      switchToSideBySide: "Chuyển sang chế độ song song",
      switchToVertical: "Chuyển sang chế độ dọc"
    },
    lineOpsActions: {
      duplicate: "Nhân đôi dòng",
      delete: "Xóa dòng",
      join: "Gộp",
      sortAsc: "Sắp xếp ↑",
      sortDesc: "Sắp xếp ↓",
      reverse: "Đảo ngược",
      clean: "Làm sạch"
    }
  },

  // Dialogs
  dialogs: {
    markdownCheatSheet: "Bảng tham chiếu Markdown",
    documentStatistics: "Thống kê Tài liệu",
    close: "Đóng",
    focusMode: {
      title: "Chế độ Tập trung",
      enter: "Vào Chế độ Tập trung",
      exit: "Thoát Chế độ Tập trung",
      description: "Môi trường viết không xao nhãng",
      activeHint: "Chế độ Tập trung Đang bật - Nhấn Esc để thoát"
    },
    markdownExport: {
      title: "Xuất Markdown",
      description: "Tải markdown dưới dạng tệp .md hoặc sao chép vào clipboard",
      filenameLabel: "Tên tệp",
      filenamePlaceholder: "tai-lieu",
      filenameHint: "Tệp sẽ được lưu dưới dạng \"{filename}\"",
      download: "Tải .md",
      copy: "Sao chép vào Clipboard",
      fileInfoTitle: "Thông tin Tệp:"
    },
    wordGoal: {
      title: "Theo dõi Mục tiêu Từ",
      setGoal: "Đặt Mục tiêu Từ",
      currentWords: "Từ hiện tại",
      goalWords: "Mục tiêu",
      remaining: "Còn lại",
      progress: "Tiến độ",
      achieved: "Đạt mục tiêu! 🎉",
      doneBadge: "Xong"
    },
    timeTracker: {
      title: "Theo dõi Thời gian",
      startTime: "Bắt đầu",
      stopTime: "Tạm dừng",
      reset: "Đặt lại",
      totalTime: "Tổng thời gian",
      sessions: "Phiên hôm nay",
      wordsPerMin: "từ/phút",
      recording: "Đang ghi",
      stopped: "Đã dừng",
      today: "Hôm nay",
      thisWeek: "Tuần này",
      avgSession: "Phiên TB",
      dailyTimeGoal: "Mục tiêu thời gian ngày",
      hours: "2 giờ",
      recentSessions: "Phiên Gần đây"
    },
    pomodoro: {
      title: "Bộ đếm Pomodoro",
      description: "Sử dụng kỹ thuật Pomodoro cho các phiên viết tập trung",
      start: "Bắt đầu",
      pause: "Tạm dừng",
      reset: "Đặt lại",
      work: "Làm việc",
      shortBreak: "Nghỉ ngắn",
      longBreak: "Nghỉ dài",
      sessions: "Phiên đã hoàn thành"
    },
    quickTemplates: {
      title: "Mẫu Nhanh",
      select: "Chọn một mẫu để chèn"
    },
    documentTemplates: {
      title: "Mẫu Tài liệu",
      description: "Chọn một mẫu để bắt đầu"
    },
    performance: {
      title: "Cài đặt Hiệu suất",
      debounceTime: "Thời gian Debounce",
      description: "Điều chỉnh hiệu suất hiển thị (thấp = nhanh hơn nhưng tốn nhiều tài nguyên hơn)"
    },
    autosave: {
      title: "Cài đặt Tự động Lưu",
      interval: "Khoảng lưu",
      description: "Tần suất tự động lưu công việc của bạn",
      status: {
        saved: "Đã lưu",
        saving: "Đang lưu...",
        unsaved: "Thay đổi chưa lưu",
        error: "Lỗi lưu"
      }
    },
    typography: {
      title: "Kiểm soát Typography",
      description: "Tùy chỉnh giao diện của văn bản xem trước",
      fontSize: "Cỡ chữ",
      lineHeight: "Chiều cao dòng",
      fontFamily: "Họ phông"
    },
    snippets: {
      title: "Thư viện Đoạn mã",
      description: "Truy cập nhanh vào các mẫu và đoạn mã Markdown có thể tái sử dụng",
      add: "Thêm Đoạn mã",
      save: "Lưu Đoạn mã",
      cancel: "Hủy",
      name: "Tên",
      content: "Nội dung"
    },
    keyboardShortcuts: {
      title: "Phím tắt",
      description: "Tăng tốc quy trình làm việc của bạn với các phím tắt này"
    }
  },

  quickTemplates: {
    apiEndpoint: "Điểm cuối API",
    codeSnippet: "Đoạn mã",
    meetingNotes: "Ghi chú cuộc họp",
    bugReport: "Báo cáo lỗi",
    dailyStandup: "Họp giao ban hàng ngày",
    featureRequest: "Yêu cầu tính năng",
    codeReview: "Code Review",
    projectReadme: "Project README"
  },

  textTransform: {
    title: "Chuyển đổi Văn bản",
    close: "Đóng",
    uppercase: "IN HOA",
    lowercase: "thường",
    titleCase: "Viết Hoa Chữ Cái Đầu",
    sentenceCase: "Viết hoa câu",
    camelCase: "camelCase",
    kebabCase: "kebab-case",
    snakeCase: "snake_case",
    toggleCase: "tOGGLE cASE",
    capitalize: "Viết hoa",
    uppercaseDesc: "Chuyển sang in hoa",
    lowercaseDesc: "Chuyển sang in thường",
    titleCaseDesc: "Viết hoa mỗi từ",
    sentenceCaseDesc: "Chỉ viết hoa từ đầu tiên",
    camelCaseDesc: "Chuyển sang camelCase",
    kebabCaseDesc: "Chuyển sang kebab-case",
    snakeCaseDesc: "Chuyển sang snake_case",
    toggleCaseDesc: "Đảo ngược chữ hoa/thường",
    capitalizeDesc: "Viết hoa chữ cái đầu"
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
    language: "Ngôn ngữ",
    insertCodeBlock: "Chèn Khối Mã",
    preview: "Xem trước"
  },

  dateTime: {
    insertDateTime: "Chèn Ngày/Giờ",
    date: "Ngày",
    time: "Giờ",
    dateTime: "Ngày & Giờ",
    iso8601: "ISO 8601",
    usFormat: "Định dạng US",
    euFormat: "Định dạng EU",
    readable: "Dễ đọc",
    cancel: "Hủy"
  },

  listHelper: {
    listType: "Loại danh sách",
    bullet: "Dấu đầu dòng",
    numbered: "Đánh số",
    numberOfItems: "Số mục",
    listItems: "Mục danh sách",
    insertList: "Chèn Danh sách",
    cancel: "Hủy",
    item: "Mục"
  },

  highlightHelper: {
    insertHighlight: "Chèn Đánh dấu",
    highlightText: "Đánh dấu Văn bản",
    textToHighlight: "Văn bản cần đánh dấu",
    color: "Màu",
    visualOnly: "(chỉ trực quan)",
    note: "Lưu ý: Đánh dấu sử dụng cú pháp ==văn bản==. Có thể không được hỗ trợ bởi tất cả bộ hiển thị markdown.",
    cancel: "Hủy",
    yellow: "Vàng",
    red: "Đỏ",
    green: "Xanh lá cây",
    blue: "Xanh dương",
    purple: "Tím",
    pink: "Hồng"
  },

  helpDialog: {
    title: "Tài liệu Tham khảo Markdown Nhanh",
    close: "Đóng",
    headings: "Tiêu đề",
    textStyles: "Kiểu văn bản",
    codeBlocks: "Khối mã",
    lists: "Danh sách",
    links: "Liên kết",
    images: "Hình ảnh",
    quotes: "Trích dẫn",
    tables: "Bảng"
  },

  // Batch Conversion
  batchConversion: {
    button: "PDF Hàng Loạt",
    buttonShort: "Hàng loạt",
    dialogTitle: "Chuyển đổi Markdown Hàng Loạt",
    dialogDescription: "Chọn một thư mục hoặc nhiều tệp .md, sau đó chọn thư mục đầu ra để tạo các PDF từng cái một.",
    selectFolder: "Chọn thư mục",
    selectFiles: "Chọn tệp",
    outputTitle: "Chọn thư mục đầu ra",
    outputDescription: "Tìm thấy {count} tệp Markdown. Chọn một thư mục đầu ra và bắt đầu chuyển đổi.",
    duplicateHint: "Nếu một PDF có cùng tên đã tồn tại trong thư mục đầu ra, một hậu tố số sẽ được thêm vào để tránh ghi đè.",
    folderHint: "Quét đệ quy thư mục đã chọn và các thư mục con của nó",
    filesHint: "Chọn nhiều tệp .md cùng lúc",
    chooseOutput: "Chọn thư mục đầu ra và bắt đầu",
    processingTitle: "Đang chuyển đổi hàng loạt",
    processingDescription: "Đang tạo PDF tuần tự. Giữ trang này mở.",
    currentFile: "Tệp hiện tại",
    completed: "Hoàn thành",
    resultTitle: "Chuyển đổi hàng loạt hoàn thành",
    resultSummary: "{success} thành công, {failed} thất bại.",
    outputFolder: "Thư mục đầu ra",
    selectedFiles: "Tệp đã chọn",
    failedFiles: "Tệp thất bại",
    moreFiles: "tệp khác",
    close: "Đóng",
    cancel: "Hủy",
    unsupported: "Trình duyệt này không hỗ trợ chuyển đổi hàng loạt dựa trên thư mục. Sử dụng trình duyệt Chromium gần đây như Chrome hoặc Edge.",
    noMarkdownFiles: "Không tìm thấy tệp Markdown nào trong nguồn đã chọn.",
    skippedFiles: "Đã bỏ qua {count} tệp không đáp ứng yêu cầu.",
    finishedToast: "Chuyển đổi hàng loạt hoàn thành",
    partialFailureToast: "Một số tệp không chuyển đổi được"
  }
}
