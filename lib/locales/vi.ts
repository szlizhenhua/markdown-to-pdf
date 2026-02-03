export const vi = {
  // Header
  title: "Chuyển đổi Markdown sang PDF",
  subtitle: "Chuyển đổi Markdown sang PDF chuyên nghiệp",

  // Controls
  buttons: {
    upload: "Tải lên",
    showPreview: "Hiển thị Xem trước",
    hidePreview: "Ẩn Xem trước",
    getPDF: "Lấy PDF",
    generatingPDF: "Đang tạo PDF...",
    settings: "Cài đặt",
    tableOfContents: "Mục lục",
    exportHTML: "HTML",
    exportMarkdown: "MD"
  },

  // Editor
  editor: {
    title: "Trình chỉnh sửa Markdown",
    placeholder: "Bắt đầu nhập Markdown của bạn tại đây...\n\n# Tiêu đề 1\n## Tiêu đề 2\n\n**In đậm** và *in nghiêng*\n\n- Mục danh sách 1\n- Mục danh sách 2\n\n```javascript\nconsole.log('Xin chào Thế giới!');\n```\n\n| Cột 1 | Cột 2 |\n|---------|----------|\n| Dữ liệu 1  | Dữ liệu 2   |",
    dragDropText: "Kéo tệp Markdown của bạn vào đây",
    dragDropSubtext: "Hỗ trợ tệp .md và .txt",
    loading: "Đang tải sơ đồ...",
    rendering: "Đang hiển thị sơ đồ...",
    stats: {
      characters: "Ký tự",
      words: "Từ",
      lines: "Dòng",
      readingTime: "Thời gian đọc"
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
    paperSize: "Kích thước giấy",
    fontSize: "Kích thước phông"
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
    letter: "Letter",
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
    pdfGenerationError: "Tạo PDF không thành công",
    pdfExportError: "Xuất PDF không thành công, hãy kiểm tra console để biết chi tiết",
    mermaidRenderError: "Lỗi hiển thị Mermaid",
    mermaidSyntaxError: "Vui lòng kiểm tra cú pháp Mermaid",
    mermaidExampleSyntax: "Ví dụ cú pháp:",
    mermaidRenderRetry: "Thử hiển thị Mermaid {count} không thành công, sẽ thử lại sau 100ms",
    mermaidFinalError: "Hiển thị Mermaid cuối cùng không thành công",
    unknownError: "Lỗi không xác định",
    highlightJsError: "Lỗi Highlight.js cho ngôn ngữ \"{lang}\":",
    katexRenderError: "Lỗi hiển thị KaTeX:",
    mermaidInitError: "Lỗi khởi tạo Mermaid:",
    mermaidLoading: "Đang tải sơ đồ...",
    mermaidRendering: "Đang hiển thị sơ đồ...",
    templateLoaded: "Mẫu đã tải",
    templateLoadedMessage: "Mẫu đã được áp dụng cho trình chỉnh sửa.",
    fileTooLarge: "Tệp quá lớn. Kích thước tối đa là 5MB.",
    invalidFileType: "Loại tệp không hợp lệ. Vui lòng tải lên tệp .md hoặc .txt.",
    fileUploadFailed: "Tải lên tệp không thành công. Vui lòng thử lại.",
    fileUploaded: "Tệp đã tải lên thành công",
    resetComplete: "Đặt lại hoàn tất",
    resetCompleteMessage: "Trình chỉnh sửa và cài đặt đã được đặt lại về giá trị mặc định.",
    copySuccess: "Đã sao chép vào clipboard",
    copyFailed: "Sao chép vào clipboard không thành công",
    networkError: "Lỗi mạng. Vui lòng kiểm tra kết nối của bạn.",
    quotaExceeded: "Vượt quá hạn ngạch lưu trữ. Vui lòng xóa một số dữ liệu trình duyệt.",
    autoSaveFailed: "Lưu tự động không thành công. Các thay đổi của bạn có thể không được lưu."
  },

  // Templates
  templates: {
    title: "Chọn Mẫu",
    description: "Chọn từ các mẫu được thiết kế chuyên nghiệp để bắt đầu nhanh chóng",
    selectTemplate: "Nhấp vào một mẫu để tải nó vào trình chỉnh sửa. Nội dung hiện tại của bạn sẽ được thay thế.",
    categories: {
      all: "Tất cả Mẫu",
      basic: "Cơ bản",
      academic: "Học thuật",
      technical: "Kỹ thuật",
      documentation: "Tài liệu"
    }
  },

  // Default Content
  defaultContent: `# Chuyển đổi Markdown sang PDF

> 🎯 **Chuyển đổi tài liệu Markdown của bạn sang PDF chuyên nghiệp với công thức toán học, sơ đồ lưu đồ, làm nổi bật mã và nhiều chủ đề**

## ✨ Tính năng

### 📊 **Hỗ trợ Markdown Đầy đủ**
- **Định dạng văn bản**: **In đậm**, *In nghiêng*, ~~Gạch ngang~~, \`Mã nội dòng\`
- **Mức tiêu đề**: Hỗ trợ đầy đủ cấu trúc tiêu đề H1-H6
- **Danh sách**: Danh sách có thứ tự, danh sách không có thứ tự, danh sách công việc
- **Liên kết và Hình ảnh**: Nhận dạng liên kết tự động, hỗ trợ nhúng hình ảnh
- **Bảng**: Hỗ trợ căn chỉnh và cấu trúc bảng phức tạp
- **Trích dẫn**: Khối trích dẫn và trích dẫn lồng nhau

### 🧮 **Hiển thị Công thức Toán học (KaTeX)**
**Công thức nội dòng**: Phương trình khối lượng-năng lượng của Einstein $E = mc^2$

**Công thức khối**:
$$\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}$$

**Công thức phức tạp**:
$$\\sum_{i=1}^{n} x_i = x_1 + x_2 + \\cdots + x_n$$

**Biểu diễn ma trận**:
$$\\begin{bmatrix}
a & b \\\\
c & d
\\end{bmatrix}$$

### 📈 **Vẽ Sơ đồ (Mermaid)**

#### Sơ đồ lưu đồ
\`\`\`mermaid
graph TD
    A[Bắt đầu] --> B{Điều kiện}
    B -->|Có| C[Thực hiện A]
    B -->|Không| D[Thực hiện B]
    C --> E[Kết thúc]
    D --> E
\`\`\`

#### Sơ đồ đồ thị
\`\`\`mermaid
graph LR
    A[Người dùng] --> B[Hệ thống]
    B --> A[Phản hồi]
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
| Công thức toán học | ✅ | Hỗ trợ KaTeX đầy đủ | \`$...\$ |
| Sơ đồ lưu đồ | ✅ | Sơ đồ Mermaid | \`mermaid |
| Làm nổi bật mã | ✅ | Hỗ trợ đa ngôn ngữ | \`lang |
| Bảng | ✅ | Chức năng bảng đầy đủ | \| \| \| |
| Liên kết | ✅ | Nhận dạng liên kết tự động | [văn bản](url) |

---

## 📖 Hướng dẫn Người dùng

### 🚀 **Bắt đầu Nhanh**

1. **Chỉnh sửa Nội dung**
   - Nhập hoặc dán nội dung Markdown vào trình chỉnh sửa bên trái
   - Xem trước thời gian thực với WYSIWYG

2. **Tải lên Tệp**
   - Nhấp vào nút "Tải lên" để chọn tệp .md hoặc .txt
   - Hoặc kéo và thả tệp trực tiếp vào vùng trình chỉnh sửa

3. **Tùy chỉnh Phong cách**
   - Chọn phong cách chủ đề (Mặc định/Học thuật/Hiện đại/Tối giản)
   - Điều chỉnh kích thước giấy và kích thước phông
   - Xem trước thời gian thực các hiệu ứng

4. **Xuất PDF**
   - Nhấp vào nút "Lấy PDF"
   - Tự động tải xuống tài liệu PDF được tạo
   - Tên tệp được tạo tự động dựa trên tiêu đề tài liệu

### ⌨️ **Cheat Sheet Cú pháp Markdown**

#### Cú pháp Cơ bản
\`\`\`markdown
# Tiêu đề Cấp 1
## Tiêu đề Cấp 2
### Tiêu đề Cấp 3

**Văn bản in đậm** hoặc __Văn bản in đậm__
*Văn bản in nghiêng* hoặc _Văn bản in nghiêng_
~~Gạch ngang~~

- Mục danh sách không có thứ tự
  - Mục danh sách lồng nhau

1. Mục danh sách có thứ tự
2. Mục thứ hai
   1. Mục có thứ tự lồng nhau

>Văn bản trích dẫn
>> Trích dẫn lồng nhau

[Văn bản liên kết](https://example.com)
![Mô tả hình ảnh](hình.jpg)

\`Mã nội dòng\`

\`\`\`ngôn ngữ
Khối mã
\`\`\`

### 💡 **Mẹo sử dụng**

1. **Công thức toán học**
   - Sử dụng \`$...\` cho công thức nội dòng
   - Sử dụng \`$$...$$\` cho công thức khối
   - Hỗ trợ đầy đủ cú pháp toán học LaTeX

2. **Khối mã**
   - Chỉ định ngôn ngữ để làm nổi bật cú pháp: \`\`\`javascript
   - Ngôn ngữ được hỗ trợ: JavaScript, Python, JSON, Bash, v.v.

3. **Vẽ sơ đồ**
   - Sử dụng cú pháp Mermaid để tạo sơ đồ lưu đồ, đồ thị, v.v.
   - Hỗ trợ nhiều loại sơ đồ: đồ thị, sơ đồ lưu đồ, v.v.

4. **Định dạng bảng**
   - Sử dụng \`|\` để phân tách các cột
   - Sử dụng \`-\` để phân tách tiêu đề và nội dung
   - Hỗ trợ căn chỉnh: \`:---\` (trái), \`---:\` (phải), \`:---:\` (giữa)

---

## ❓ Câu hỏi Thường gặp (FAQ)

### C1: Cú pháp Markdown nào được hỗ trợ?
**Đ**: Công cụ này hỗ trợ cú pháp Markdown tiêu chuẩn và các phần mở rộng GitHub Flavored Markdown (GFM), bao gồm bảng, danh sách công việc, gạch ngang, v.v. Nó cũng hỗ trợ công thức toán học (KaTeX) và vẽ sơ đồ (Mermaid).

### C2: Làm gì nếu công thức toán học không hiển thị?
**Đ**: Hãy đảm bảo bạn sử dụng cú pháp đúng:
- Công thức nội dòng: \`$công thức$\`
- Công thức khối: \`$$công thức$$\`
Nếu vẫn không hiển thị, hãy kiểm tra xem cú pháp công thức có đúng không.

### C3: Chất lượng của PDF được xuất như thế nào?
**Đ**: Chúng tôi sử dụng các động cơ tạo PDF chuyên nghiệp để đảm bảo chất lượng đầu ra:
- Đồ họa vectơ độ phân giải cao
- Hiển thị văn bản rõ ràng
- Phân trang đúng
- Giữ nguyên định dạng gốc

### C4: Dữ liệu của tôi có an toàn không?
**Đ**: Hoàn toàn an toàn! Tất cả xử lý được thực hiện cục bộ trong trình duyệt của bạn:
- Không có dữ liệu nào được tải lên bất kỳ máy chủ nào
- Không lưu trữ nội dung tài liệu của bạn
- Dữ liệu được tự động xóa sau khi xử lý

### C5: Những trình duyệt nào được hỗ trợ?
**Đ**: Hỗ trợ tất cả các trình duyệt hiện đại:
- Chrome 65+
- Firefox 60+
- Safari 12+
- Edge 79+

### C6: Làm thế nào để xử lý các tài liệu lớn?
**Đ**: Đối với các tài liệu lớn, chúng tôi khuyên:
- Xử lý theo từng phần
- Điều chỉnh kích thước phông phù hợp
- Sử dụng ngắt trang để phân đoạn hợp lý
- Xem trước để xác nhận các hiệu ứng trước khi xuất

### C7: Tên tệp PDF được xuất là gì?
**Đ**: Tên tệp được tạo tự động dựa trên tiêu đề của dòng đầu tiên của tài liệu, ví dụ:
- Tiêu đề "Báo cáo Dự án" → "Báo cáo Dự án.pdf"
- Sử dụng "document.pdf" khi không có tiêu đề

---

## 📞 Hỗ trợ Kỹ thuật

### 🔧 **Công nghệ Stack**
- **Next.js** - Framework React
- **Tailwind CSS** - Framework Styling
- **Marked** - Trình phân tích cú pháp Markdown
- **KaTeX** - Hiển thị công thức toán học
- **Mermaid** - Vẽ sơ đồ
- **html2pdf.js** - Tạo PDF
- **Highlight.js** - Làm nổi bật mã

### 📧 **Liên hệ với Chúng tôi**
[Mã nguồn mở](https://github.com/szlizhenhua/markdown-to-pdf). Đối với câu hỏi hoặc đề xuất, vui lòng liên hệ với chúng tôi qua:
- GitHub Issues: Báo cáo vấn đề hoặc yêu cầu tính năng
- Phản hồi qua email: support@markdown-to-pdf.org

### 🔄 **Nhật ký Thay đổi**
- **v1.0.0** - Phiên bản đầu tiên
- Hỗ trợ công thức toán học KaTeX
- Hỗ trợ sơ đồ Mermaid
- Chọn nhiều phong cách chủ đề
- Tối ưu hóa thiết kế phản hồi

---

<div style="text-align: center; margin-top: 3em; padding: 2em; border-top: 1px solid #eee; color: #666;">
  <p><strong>Chuyển đổi Markdown sang PDF</strong></p>
  <p>Công cụ Chuyển đổi Markdown sang PDF Chuyên nghiệp</p>
  <p style="font-size: 0.9em; margin-top: 1em;">
    Được tạo với ❤️ | Quyền riêng tư Đầu tiên
  </p>
  <p style="font-size: 0.8em; margin-top: 0.5em;">
    © 2025 Markdown to PDF. Đã đăng ký bản quyền.
  </p>
</div>`,

  // SEO
  seo: {
    title: "Chuyển đổi Markdown sang PDF | Xuất Tài liệu Chuyên nghiệp",
    description: "Chuyển đổi Markdown sang tài liệu PDF chuyên nghiệp với toán học, mã, sơ đồ, mục lục, chủ đề. Đầu ra chất lượng xuất bản cho mục đích học thuật và thương mại.",
    keywords: "Markdown, PDF, chuyển đổi, KaTeX, Mermaid, làm nổi bật mã, mục lục, chủ đề, xuất, học thuật, chuyên nghiệp"
  }
}
