export const tr = {
  // Header
  title: "Markdown'dan PDF'e Dönüştürücü",
  subtitle: "Markdown'ı profesyonel PDF'lere dönüştürün",

  // Controls
  buttons: {
    upload: "Yükle",
    showPreview: "Önizlemeyi Göster",
    hidePreview: "Önizlemeyi Gizle",
    getPDF: "PDF Al",
    generatingPDF: "PDF oluşturuluyor...",
    settings: "Ayarlar",
    tableOfContents: "İçindekiler",
    exportHTML: "HTML",
    exportMarkdown: "MD"
  },

  // Editor
  editor: {
    title: "Markdown Düzenleyici",
    placeholder: "Markdown'inizi buraya yazmaya başlayın...\n\n# Başlık 1\n## Başlık 2\n\n**Kalın** ve *italik*\n\n- Liste öğesi 1\n- Liste öğesi 2\n\n```javascript\nconsole.log('Merhaba Dünya!');\n```\n\n| Sütun 1 | Sütun 2 |\n|---------|----------|\n| Veri 1  | Veri 2   |",
    dragDropText: "Markdown dosyanızı buraya bırakın",
    dragDropSubtext: ".md ve .txt dosyalarını destekler",
    loading: "Diyagram yükleniyor...",
    rendering: "Diyagram oluşturuluyor...",
    stats: {
      characters: "Karakter",
      words: "Kelime",
      lines: "Satır",
      readingTime: "Okuma süresi"
    }
  },

  // Preview
  preview: {
    title: "Önizleme",
    theme: "tema"
  },

  // Settings
  settings: {
    title: "Ayarlar",
    theme: "Tema",
    paperSize: "Kağıt Boyutu",
    fontSize: "Yazı Tipi Boyutu"
  },

  // Table of Contents
  toc: {
    title: "İçindekiler"
  },

  // Themes
  themes: {
    default: "Varsayılan",
    academic: "Akademik",
    modern: "Modern",
    minimal: "Minimal"
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
    pdfGenerationError: "PDF oluşturma başarısız",
    pdfExportError: "PDF dışa aktarma başarısız, detaylar için konsolu kontrol edin",
    mermaidRenderError: "Mermaid oluşturma hatası",
    mermaidSyntaxError: "Lütfen Mermaid sözdizimini kontrol edin",
    mermaidExampleSyntax: "Sözdizimi örneği:",
    mermaidRenderRetry: "Mermaid oluşturma denemesi {count} başarısız, 100ms sonra yeniden denenecek",
    mermaidFinalError: "Mermaid oluşturma nihai başarısız",
    unknownError: "Bilinmeyen hata",
    highlightJsError: "\"{lang}\" dili için Highlight.js hatası:",
    katexRenderError: "KaTeX oluşturma hatası:",
    mermaidInitError: "Mermaid başlatma hatası:",
    mermaidLoading: "Diyagram yükleniyor...",
    mermaidRendering: "Diyagram oluşturuluyor...",
    templateLoaded: "Şablon yüklendi",
    templateLoadedMessage: "Şablon düzenleyiciye uygulandı.",
    fileTooLarge: "Dosya çok büyük. Maksimum boyut 5MB.",
    invalidFileType: "Geçersiz dosya türü. Lütfen .md veya .txt dosyası yükleyin.",
    fileUploadFailed: "Dosya yükleme başarısız. Lütfen tekrar deneyin.",
    fileUploaded: "Dosya başarıyla yüklendi",
    resetComplete: "Sıfırlama tamamlandı",
    resetCompleteMessage: "Düzenleyici ve ayarlar varsayılan değerlere sıfırlandı.",
    copySuccess: "Panoya kopyalandı",
    copyFailed: "Panoya kopyalama başarısız",
    networkError: "Ağ hatası. Lütfen bağlantınızı kontrol edin.",
    quotaExceeded: "Depolama kotası aşıldı. Lütfen bazı tarayıcı verilerini temizleyin.",
    autoSaveFailed: "Otomatik kaydetme başarısız. Değişiklikleriniz kaydedilmeyebilir."
  },

  // Templates
  templates: {
    title: "Bir Şablon Seçin",
    description: "Hızlı başlamak için profesyonel olarak tasarlanmış şablonlardan seçim yapın",
    selectTemplate: "Düzenleyiciye yüklemek için bir şablona tıklayın. Mevcut içeriğiniz değiştirilecektir.",
    categories: {
      all: "Tüm Şablonlar",
      basic: "Temel",
      academic: "Akademik",
      technical: "Teknik",
      documentation: "Belgeleme"
    }
  },

  // Default Content
  defaultContent: `# Markdown'dan PDF'e Dönüştürücü

> 🎯 **Matematiksel formüller, akış şemaları, kod vurgulama ve birden fazla tema ile Markdown belgelerinizi profesyonel PDF'lere dönüştürün**

## ✨ Özellikler

### 📊 **Tam Markdown Desteği**
- **Metin Biçimlendirme**: **Kalın**, *İtalik*, ~~Üstü çizili~~, \`Satır içi kod\`
- **Başlık Seviyeleri**: Tam H1-H6 başlık yapısı desteği
- **Listeler**: Sıralı listeler, sırasız listeler, görev listeleri
- **Bağlantılar ve Görseller**: Otomatik bağlantı tanıma, gömme görselleri desteği
- **Tablolar**: Hizalama ve karmaşık tablo yapıları desteği
- **Alıntılar**: Blok alıntılar ve iç içe alıntılar

### 🧮 **Matematiksel Formül Oluşturma (KaTeX)**
**Satır İçi Formül**: Einstein'ın kütle-enerji denklemi $E = mc^2$

**Blok Formülü**:
$$\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}$$

**Karmaşık Formül**:
$$\\sum_{i=1}^{n} x_i = x_1 + x_2 + \\cdots + x_n$$

**Matris Temsili**:
$$\\begin{bmatrix}
a & b \\\\
c & d
\\end{bmatrix}$$

### 📈 **Diyagram Çizme (Mermaid)**

#### Akış Şeması
\`\`\`mermaid
graph TD
    A[Başlangıç] --> B{Koşul}
    B -->|Evet| C[A İşlemini Gerçekleştir]
    B -->|Hayır| D[B İşlemini Gerçekleştir]
    C --> E[Bitiş]
    D --> E
\`\`\`

#### Graf Diyagramı
\`\`\`mermaid
graph LR
    A[Kullanıcı] --> B[Sistem]
    B --> A[Yanıt]
\`\`\`

### 💻 **Kod Vurgulama**

#### JavaScript Örneği
\`\`\`javascript
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Kullanım örneği
console.log(fibonacci(10)); // Çıktı: 55
\`\`\`

#### Python Örneği
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

### 📋 **Tablo Özellikleri**

| Özellik | Durum | Açıklama | Kısayol |
|---------|:------:|-------------|----------|
| Matematiksel Formüller | ✅ | Tam KaTeX desteği | \`$...\$ |
| Akış Şemaları | ✅ | Mermaid diyagramları | \`mermaid |
| Kod Vurgulama | ✅ | Çoklu dil desteği | \`lang |
| Tablolar | ✅ | Tam tablo işlevselliği | \| \| \| |
| Bağlantılar | ✅ | Otomatik bağlantı tanıma | [metin](url) |

---

## 📖 Kullanıcı Kılavuzu

### 🚀 **Hızlı Başlangıç**

1. **İçerik Düzenleme**
   - Sol düzenleyiciye Markdown içeriğini yazın veya yapıştırın
   - WYSIWYG ile gerçek zamanlı önizleme

2. **Dosya Yükleme**
   - .md veya .txt dosyalarını seçmek için "Yükle" düğmesine tıklayın
   - Veya dosyaları doğrudan düzenleyici alanına sürükleyin ve bırakın

3. **Stilleri Özelleştirme**
   - Tema stilini seçin (Varsayılan/Akademik/Modern/Minimal)
   - Kağıt boyutunu ve yazı tipi boyutunu ayarlayın
   - Efektlerin gerçek zamanlı önizlemesi

4. **PDF Dışa Aktarma**
   - "PDF Al" düğmesine tıklayın
   - Oluşturulan PDF belgesinin otomatik indirilmesi
   - Dosya adı belge başlığına göre otomatik oluşturulur

### ⌨️ **Markdown Sözdizimi Kopya Kağıdı**

#### Temel Sözdizimi
\`\`\`markdown
# Seviye 1 Başlık
## Seviye 2 Başlık
### Seviye 3 Başlık

**Kalın metin** veya __Kalın metin__
*İtalik metin* veya _İtalik metin_
~~Üstü çizili~~

- Sırasız liste öğesi
  - İç içe liste öğesi

1. Sıralı liste öğesi
2. İkinci öğe
   1. İç içe sıralı öğe

> Alıntı metni
>> İç içe alıntı

[Bağlantı metni](https://example.com)
![Görsel açıklaması](görsel.jpg)

\`Satır içi kod\`

\`\`\`dil
Kod bloğu
\`\`\`

### 💡 **Kullanım İpuçları**

1. **Matematiksel Formüller**
   - Satır içi formüller için \`$...\` kullanın
   - Blok formülleri için \`$$...$$\` kullanın
   - Tam LaTeX matematik sözdizimi desteklenir

2. **Kod Blokları**
   - Sözdizimi vurgulama için dili belirtin: \`\`\`javascript
   - Desteklenen diller: JavaScript, Python, JSON, Bash, vb.

3. **Diyagram Çizme**
   - Akış şemaları, grafikler vb. oluşturmak için Mermaid sözdizimini kullanın
   - Çoklu diyagram türü desteği: graf, akış şeması, vb.

4. **Tablo Biçimlendirme**
   - Sütunları ayırmak için \`|\` kullanın
   - Başlıkları ve içeriği ayırmak için \`-\` kullanın
   - Hizalama desteği: \`:---\` (sol), \`---:\` (sağ), \`:---:\` (orta)

---

## ❓ Sık Sorulan Sorular (SSS)

### S1: Hangi Markdown sözdizimi destekleniyor?
**C**: Bu araç standart Markdown sözdizimini ve GitHub Flavored Markdown (GFM) uzantılarını destekler, tablolar, görev listeleri, üstü çizili, vb. Ayrıca matematiksel formüller (KaTeX) ve diyagram çizme (Mermaid) de desteklenir.

### S2: Matematiksel formüller görünmezse ne yapmalıyım?
**C**: Doğru sözdizimini kullandığınızdan emin olun:
- Satır içi formüller: \`$formül$\`
- Blok formülleri: \`$$formül$$\`
Hala görünmüyorsa, formül sözdiziminin doğru olup olmadığını kontrol edin.

### S3: Dışa aktarılan PDF kalitesi nasıl?
**C**: Çıktı kalitesini sağlamak için profesyonel PDF oluşturma motorları kullanıyoruz:
- Yüksek tanımlı vektör grafikleri
- Net metin oluşturma
- Doğru sayfa sayfalaması
- Orijinal biçimlendirmeyi koruma

### S4: Verilerim güvende mi?
**C**: Tamamen güvenli! Tüm işlemler tarayıcınızda yerel olarak gerçekleştirilir:
- Herhangi bir sunucuya veri yüklenmez
- Belge içeriğiniz depolanmaz
- İşlemeden sonra veriler otomatik olarak silinir

### S5: Hangi tarayıcılar destekleniyor?
**C**: Tüm modern tarayıcılar desteklenir:
- Chrome 65+
- Firefox 60+
- Safari 12+
- Edge 79+

### S6: Büyük belgeler nasıl ele alınır?
**C**: Büyük belgeler için aşağıdakileri öneririz:
- Bölümler halinde işleme
- Yazı tipi boyutunu uygun şekilde ayarlama
- Makul segmentasyon için sayfa sonlarını kullanma
    - Dışa aktarmadan önce efektleri onaylamak için önizleme

### S7: Dışa aktarılan PDF dosya adı nedir?
**C**: Dosya adı belgenin ilk satırındaki başlığa göre otomatik olarak oluşturulur, örneğin:
- Başlık "Proje Raporu" → "Proje Raporu.pdf"
- Başlık yoksa "document.pdf" kullanılır

---

## 📞 Teknik Destek

### 🔧 **Teknoloji Yığını**
- **Next.js** - React çerçevesi
- **Tailwind CSS** - Stil çerçevesi
- **Marked** - Markdown ayrıştırıcı
- **KaTeX** - Matematiksel formül oluşturma
- **Mermaid** - Diyagram çizme
- **html2pdf.js** - PDF oluşturma
- **Highlight.js** - Kod vurgulama

### 📧 **Bize Ulaşın**
[Açık Kaynak](https://github.com/szlizhenhua/markdown-to-pdf). Sorular veya öneriler için lütfen aşağıdakiler aracılığıyla iletişime geçin:
- GitHub Sorunları: Sorun bildirin veya özellik isteyin
- E-posta geri bildirimi: support@markdown-to-pdf.org

### 🔄 **Değişiklik Günlüğü**
- **v1.0.0** - İlk sürüm
- KaTeX matematiksel formül desteği
- Mermaid diyagram desteği
- Çoklu tema stili seçimi
- Duyarlı tasarım optimizasyonu

---

<div style="text-align: center; margin-top: 3em; padding: 2em; border-top: 1px solid #eee; color: #666;">
  <p><strong>Markdown'dan PDF'e Dönüştürücü</strong></p>
  <p>Profesyonel Markdown'dan PDF'e Dönüştürme Aracı</p>
  <p style="font-size: 0.9em; margin-top: 1em;">
    ❤️ ile yapıldı | Gizlilik Öncelikli
  </p>
  <p style="font-size: 0.8em; margin-top: 0.5em;">
    © 2025 Markdown to PDF. Tüm hakları saklıdır.
  </p>
</div>`,

  // SEO
  seo: {
    title: "Markdown'dan PDF'e Dönüştürücü | Profesyonel Belge Dışa Aktarma",
    description: "Matematik, kod, diyagramlar, içindekiler, temalar ile Markdown'ı profesyonel PDF belgelerine dönüştürün. Akademik ve ticari kullanım için yayınlama kalitesi çıktı.",
    keywords: "Markdown, PDF, dönüştürücü, KaTeX, Mermaid, kod vurgulama, içindekiler, temalar, dışa aktar, akademik, profesyonel"
  },

  // SEO Content
  seoContent: {
    whyChooseUs: {
      label: "Neden biz",
      title: "Neden Markdown'tan PDF'e dönüştürümüzü kullanmalısınız?",
      subtitle: "Yayınlama için Apple benzeri bir deneyim: taslaktan PDF'e temiz, hızlı ve güzel tutarlı.",
      features: {
        privacy: {
          title: "Gizlilik odaklı",
          description: "Verileriniz bizimle güvende. Tüm dönüşümler tarayıcınızda yerel olarak gerçekleşir. Markdown dosyalarınızı asla bir sunucuya yüklemeyiz."
        },
        instant: {
          title: "Anında dönüşüm",
          description: "Bekleme kuyruğu yok. Optimize edilmiş motorumuz belgelerinizi anında dönüştürür ve büyük dosyaları kolayca destekler."
        },
        richSupport: {
          title: "Zengin destek",
          description: "GFM (GitHub Flavored Markdown), KaTeX matematik formülleri, Mermaid diyagramları ve kod sözdizimi vurgulama için tam destek."
        }
      }
    },
    howToConvert: {
      label: "Basit iş akışı",
      title: "Markdown'ı PDF'e nasıl dönüştürülür",
      subtitle: "Odaklanmış kalmanızı ve saniyeler içinde cilalı bir PDF almanızı sağlamak için tasarlanmış sakin bir üç adımlı akış.",
      steps: {
        step1: {
          title: "Markdown yazın veya yapıştırın",
          description: "Doğrudan gerçek zamanlı editörümüze yazın veya mevcut Markdown kodunuzu yapıştırın. .md dosyalarını da sürükleyip bırakabilirsiniz."
        },
        step2: {
          title: "Stili özelleştirin",
          description: "Profesyonel temalarımızdan (Akademik, Modern, vb.) seçim yapın ve yazı tipi boyutlarını, kenar boşluklarını ve kağıt boyutunu (A4, Letter) ayarlayın."
        },
        step3: {
          title: "PDF'i indirin",
          description: "Paylaşım veya baskı için hazır biçimlendirilmiş bir PDF belgesini anında almak için Dışa Aktar düğmesine tıklayın."
        }
      }
    },
    faq: {
      label: "SSS",
      title: "Sıkça Sorulan Sorular",
      items: {
        isFree: {
          question: "Bu araç ücretsiz mi?",
          answer: "Evet, Markdown'tan PDF'e dönüştürümüz kişisel ve ticari kullanım için %100 ücretsizdir."
        },
        dataStorage: {
          question: "Verilerimi saklıyor musunuz?",
          answer: "Hayır. Her şeyi tarayıcınızda işliyoruz. Belgeleriniz asla cihazınızdan ayrılmaz."
        },
        mathSupport: {
          question: "Matematiksel denklemleri destekliyor mu?",
          answer: "Evet! Karmaşık matematiksel formülleri ve denklemleri güzel bir şekilde oluşturmak için KaTeX kullanıyoruz."
        },
        diagrams: {
          question: "Diyagram oluşturabilir miyim?",
          answer: "Kesinlikle. Metinden akış şemaları, sıra diyagramları ve Gantt şemaları oluşturmak için Mermaid.js'i destekliyoruz."
        }
      }
    },
    comprehensive: {
      title: "Kapsamlı Markdown çözümü",
      description1: "İster tez yazan bir öğrenci, ister kod dokümante eden bir geliştirici veya roman yazan bir yazar olun, Markdown editörümüz ihtiyacınız olan araçları sağlar. Gerçek zamanlı önizleme, kelime sayısı takibi ve odak modu gibi özelliklerle dikkat dağınıtmadan yazabilirsiniz.",
      description2: "Dönüştürücümüz başlıkları, listeleri, bağlantıları, resimleri ve alıntı bloklarını içeren tüm standart Markdown sözdizimini işler. Gelişmiş kullanıcılar, dile özgü sözdizimi vurgulama, dipnotlar ve görev listeleriyle kod blokları desteğini takdir edecektir."
    }
  },

  // Footer
  footer: {
    tagline: "Markdown'tan PDF'e",
    subtitle: "Her zaman zarif dönüşümler.",
    description: "Herkes için profesyonel belge dönüştürme aracı. Ücretsiz, güvenli ve hızlı.",
    legal: {
      title: "Yasal",
      privacyPolicy: "Gizlilik politikası",
      termsOfService: "Hizmet şartları"
    },
    links: {
      title: "Bağlantılar",
      aboutUs: "Hakkımızda",
      contact: "İletişim"
    },
    connect: {
      title: "Bağlan",
      description: "Sorularınız veya geri bildiriminiz mi var?"
    },
    copyright: "© {year} Markdown to PDF. Tüm hakları saklıdır.",
    designed: "Netlik için tasarlandı"
  }
}
