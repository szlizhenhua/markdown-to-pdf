"use client"

import { useLanguage } from '@/lib/contexts/language-context'

export function ContactContent() {
  const { language } = useLanguage()

  const contactData = {
    en: {
      title: "Contact Us",
      intro: "We value your feedback and are here to help. Whether you have a feature request, a bug report, or just want to say hello, we'd love to hear from you.",
      cards: [
        {
          title: "General Inquiries",
          description: "For general questions about the service.",
          email: "info@markdown-to-pdf.org"
        },
        {
          title: "Technical Support",
          description: "Having trouble with a conversion?",
          email: "support@markdown-to-pdf.org"
        }
      ],
      business: {
        heading: "Business Address",
        content: "Markdown to PDF Team\n123 Innovation Way\nTech City, TC 90210"
      }
    },
    fr: {
      title: "Contactez-Nous",
      intro: "Nous apprécions vos commentaires et sommes là pour vous aider. Que vous ayez une demande de fonctionnalité, un rapport de bug ou que vous souhaitiez simplement dire bonjour, nous serions ravis d'avoir de vos nouvelles.",
      cards: [
        {
          title: "Questions Générales",
          description: "Pour des questions générales sur le service.",
          email: "info@markdown-to-pdf.org"
        },
        {
          title: "Support Technique",
          description: "Problèmes lors d'une conversion ?",
          email: "support@markdown-to-pdf.org"
        }
      ],
      business: {
        heading: "Adresse Commerciale",
        content: "Équipe Markdown vers PDF\n123 Innovation Way\nTech City, TC 90210"
      }
    },
    'zh-cn': {
      title: "联系我们",
      intro: "我们重视您的反馈并随时为您提供帮助。无论您有功能请求、错误报告，还是只是想打个招呼，我们都希望听到您的声音。",
      cards: [
        {
          title: "一般咨询",
          description: "关于服务的一般问题。",
          email: "info@markdown-to-pdf.org"
        },
        {
          title: "技术支持",
          description: "转换遇到问题？",
          email: "support@markdown-to-pdf.org"
        }
      ],
      business: {
        heading: "商务地址",
        content: "Markdown 转 PDF 团队\n123 Innovation Way\nTech City, TC 90210"
      }
    },
    es: {
      title: "Contáctenos",
      intro: "Valoramos sus comentarios y estamos aquí para ayudar. Ya sea que tenga una solicitud de función, un informe de error o simplemente quiera saludar, nos encantaría saber de usted.",
      cards: [
        {
          title: "Consultas Generales",
          description: "Para preguntas generales sobre el servicio.",
          email: "info@markdown-to-pdf.org"
        },
        {
          title: "Soporte Técnico",
          description: "¿Tiene problemas con una conversión?",
          email: "support@markdown-to-pdf.org"
        }
      ],
      business: {
        heading: "Dirección Comercial",
        content: "Equipo de Markdown a PDF\n123 Innovation Way\nTech City, TC 90210"
      }
    },
    de: {
      title: "Kontaktieren Sie Uns",
      intro: "Wir schätzen Ihr Feedback und sind hier, um zu helfen. Egal, ob Sie eine Funktionsanfrage, einen Fehlerbericht haben oder nur hallo sagen möchten, wir würden gerne von Ihnen hören.",
      cards: [
        {
          title: "Allgemeine Anfragen",
          description: "Für allgemeine Fragen zum Service.",
          email: "info@markdown-to-pdf.org"
        },
        {
          title: "Technischer Support",
          description: "Probleme mit einer Konvertierung?",
          email: "support@markdown-to-pdf.org"
        }
      ],
      business: {
        heading: "Geschäftsadresse",
        content: "Markdown zu PDF Team\n123 Innovation Way\nTech City, TC 90210"
      }
    },
    it: {
      title: "Contattaci",
      intro: "Apprezziamo il tuo feedback e siamo qui per aiutare. Che tu abbia una richiesta di funzionalità, una segnalazione di bug o vuoi solo salutare, saremmo felici di sentirti.",
      cards: [
        {
          title: "Richieste Generali",
          description: "Per domande generali sul servizio.",
          email: "info@markdown-to-pdf.org"
        },
        {
          title: "Supporto Tecnico",
          description: "Problemi con una conversione?",
          email: "support@markdown-to-pdf.org"
        }
      ],
      business: {
        heading: "Indirizzo Aziendale",
        content: "Team Markdown a PDF\n123 Innovation Way\nTech City, TC 90210"
      }
    },
    pt: {
      title: "Entre em Contato",
      intro: "Valorizamos seu feedback e estamos aqui para ajudar. Seja qual for seu pedido de recurso, relatório de bug ou apenas dizer olá, adoraríamos ouvir de você.",
      cards: [
        {
          title: "Consultas Gerais",
          description: "Para perguntas gerais sobre o serviço.",
          email: "info@markdown-to-pdf.org"
        },
        {
          title: "Suporte Técnico",
          description: "Problemas com uma conversão?",
          email: "support@markdown-to-pdf.org"
        }
      ],
      business: {
        heading: "Endereço Comercial",
        content: "Equipe Markdown para PDF\n123 Innovation Way\nTech City, TC 90210"
      }
    },
    ru: {
      title: "Свяжитесь с Нами",
      intro: "Мы ценим ваши отзывы и здесь, чтобы помочь. Независимо от того, есть ли у вас запрос на функцию, отчет об ошибке или вы просто хотите поздороваться, мы будем рады услышать вас.",
      cards: [
        {
          title: "Общие Запросы",
          description: "По общим вопросам о сервисе.",
          email: "info@markdown-to-pdf.org"
        },
        {
          title: "Техническая Поддержка",
          description: "Проблемы с конвертацией?",
          email: "support@markdown-to-pdf.org"
        }
      ],
      business: {
        heading: "Деловой Адрес",
        content: "Команда Markdown в PDF\n123 Innovation Way\nTech City, TC 90210"
      }
    },
    'zh-tw': {
      title: "聯繫我們",
      intro: "我們重視您的反饋並隨時為您提供幫助。無論您有功能請求、錯誤報告，還是只是想打個招呼，我們都希望聽到您的聲音。",
      cards: [
        {
          title: "一般諮詢",
          description: "關於服務的一般問題。",
          email: "info@markdown-to-pdf.org"
        },
        {
          title: "技術支持",
          description: "轉換遇到問題？",
          email: "support@markdown-to-pdf.org"
        }
      ],
      business: {
        heading: "商務地址",
        content: "Markdown 轉 PDF 團隊\n123 Innovation Way\nTech City, TC 90210"
      }
    },
    ja: {
      title: "お問い合わせ",
      intro: "私たちはあなたのフィードバックを大切にし、お手伝いすることに専念しています。機能のリクエスト、バグ報告、または単に挨拶だけでも、ぜひお聞かせください。",
      cards: [
        {
          title: "一般的なお問い合わせ",
          description: "サービスに関する一般的な質問。",
          email: "info@markdown-to-pdf.org"
        },
        {
          title: "技術サポート",
          description: "変換で問題がありますか？",
          email: "support@markdown-to-pdf.org"
        }
      ],
      business: {
        heading: "ビジネスアドレス",
        content: "Markdown から PDF チーム\n123 Innovation Way\nTech City, TC 90210"
      }
    },
    ko: {
      title: "문의하기",
      intro: "피드백을 소중히 생각하며 도와드리기 위해 여기 있습니다. 기능 요청, 버그 보고 또는 단순히 안부를 전하고 싶으시다면 언제든지 연락해 주세요.",
      cards: [
        {
          title: "일반 문의",
          description: "서비스에 대한 일반적인 질문.",
          email: "info@markdown-to-pdf.org"
        },
        {
          title: "기술 지원",
          description: "변환에 문제가 있으신가요?",
          email: "support@markdown-to-pdf.org"
        }
      ],
      business: {
        heading: "비즈니스 주소",
        content: "Markdown에서 PDF로 팀\n123 Innovation Way\nTech City, TC 90210"
      }
    },
    ar: {
      title: "اتصل بنا",
      intro: "نحن نقدر ملاحظاتك ونحن هنا للمساعدة. سواء كان لديك طلب ميزة أو تقرير خطأ أو تريد فقط قول مرحباً، نود أن نسمع منك.",
      cards: [
        {
          title: "الاستفسارات العامة",
          description: "للأسئلة العامة حول الخدمة.",
          email: "info@markdown-to-pdf.org"
        },
        {
          title: "الدعم الفني",
          description: "هل تواجه مشكلة في التحويل؟",
          email: "support@markdown-to-pdf.org"
        }
      ],
      business: {
        heading: "العنوان التجاري",
        content: "فريق Markdown إلى PDF\n123 Innovation Way\nTech City, TC 90210"
      }
    },
    hi: {
      title: "संपर्क करें",
      intro: "हम आपकी प्रतिक्रिया की सराहना करते हैं और मदद के लिए यहां हैं। चाहे आपके पास फीचर अनुरोध, बग रिपोर्ट हो या बस नमस्ते कहना हो, हम आपसे सुनना पसंद करेंगे।",
      cards: [
        {
          title: "सामान्य पूछताछ",
          description: "सेवा के बारे में सामान्य प्रश्नों के लिए।",
          email: "info@markdown-to-pdf.org"
        },
        {
          title: "तकनीकी सहायता",
          description: "रूपांतरण में समस्या?",
          email: "support@markdown-to-pdf.org"
        }
      ],
      business: {
        heading: "व्यावसायिक पता",
        content: "Markdown से PDF टीम\n123 Innovation Way\nTech City, TC 90210"
      }
    },
    tr: {
      title: "İletişime Geçin",
      intro: "Geri bildiriminize değer veriyoruz ve yardımcı olmak için buradayız. İster bir özellik talebi, hata raporu veya sadece merhaba demek isteyin, sizden duymaktan memnuniyet duyarız.",
      cards: [
        {
          title: "Genel Sorular",
          description: "Hizmetle ilgili genel sorular için.",
          email: "info@markdown-to-pdf.org"
        },
        {
          title: "Teknik Destek",
          description: "Dönüştürme sorunu mu yaşıyorsunuz?",
          email: "support@markdown-to-pdf.org"
        }
      ],
      business: {
        heading: "İş Adresi",
        content: "Markdown'tan PDF'e Ekibi\n123 Innovation Way\nTech City, TC 90210"
      }
    },
    nl: {
      title: "Neem Contact Op",
      intro: "Wij waarderen uw feedback en zijn er om te helpen. Of u nu een functieverzoek, een bugrapport heeft of gewoon hallo wilt zeggen, wij zouden graag van u horen.",
      cards: [
        {
          title: "Algemene Vragen",
          description: "Voor algemene vragen over de service.",
          email: "info@markdown-to-pdf.org"
        },
        {
          title: "Technische Ondersteuning",
          description: "Problemen met een conversie?",
          email: "support@markdown-to-pdf.org"
        }
      ],
      business: {
        heading: "Zakelijk Adres",
        content: "Markdown naar PDF Team\n123 Innovation Way\nTech City, TC 90210"
      }
    },
    sv: {
      title: "Kontakta Oss",
      intro: "Vi uppskattar din feedback och är här för att hjälpa. Oavsett om du har en funktionsförfrågan, en buggerrapport eller bara vill säga hej, skulle vi älska att höra från dig.",
      cards: [
        {
          title: "Allmänna Förfrågningar",
          description: "För allmänna frågor om tjänsten.",
          email: "info@markdown-to-pdf.org"
        },
        {
          title: "Teknisk Support",
          description: "Problem med en konvertering?",
          email: "support@markdown-to-pdf.org"
        }
      ],
      business: {
        heading: "Affärsadress",
        content: "Markdown till PDF Team\n123 Innovation Way\nTech City, TC 90210"
      }
    },
    pl: {
      title: "Skontaktuj Się z Nami",
      intro: "Cenimy swoją opinię i jesteśmy tutaj, aby pomóc. Niezależnie od tego, czy masz prośbę o funkcję, zgłoszenie błędu, czy chcesz tylko przywitać się, chętnie usłyszymy od Ciebie.",
      cards: [
        {
          title: "Ogólne Zapytania",
          description: "Do ogólnych pytań dotyczących usługi.",
          email: "info@markdown-to-pdf.org"
        },
        {
          title: "Wsparcie Techniczne",
          description: "Problem z konwersją?",
          email: "support@markdown-to-pdf.org"
        }
      ],
      business: {
        heading: "Adres Firmowy",
        content: "Zespół Markdown do PDF\n123 Innovation Way\nTech City, TC 90210"
      }
    },
    vi: {
      title: "Liên Hệ",
      intro: "Chúng tôi đánh giá cao phản hồi của bạn và ở đây để giúp đỡ. Dù bạn có yêu cầu tính năng, báo cáo lỗi hay chỉ muốn nói xin chào, chúng tôi rất vui khi nhận được tin nhắn từ bạn.",
      cards: [
        {
          title: "Thắc Mạc Chung",
          description: "Đối với các câu hỏi chung về dịch vụ.",
          email: "info@markdown-to-pdf.org"
        },
        {
          title: "Hỗ Trợ Kỹ Thuật",
          description: "Vấn đề khi chuyển đổi?",
          email: "support@markdown-to-pdf.org"
        }
      ],
      business: {
        heading: "Địa Chỉ Kinh Doanh",
        content: "Đội ngũ Markdown sang PDF\n123 Innovation Way\nTech City, TC 90210"
      }
    }
  }

  const data = contactData[language as keyof typeof contactData] || contactData.en

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">{data.title}</h1>

      <div className="space-y-6">
        <p className="text-lg">{data.intro}</p>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {data.cards.map((card, index) => (
            <div key={index} className="p-6 border rounded-lg bg-card">
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-muted-foreground mb-4">{card.description}</p>
              <a href={`mailto:${card.email}`} className="text-primary hover:underline">{card.email}</a>
            </div>
          ))}
        </div>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-3">{data.business.heading}</h2>
          <p className="whitespace-pre-line">{data.business.content}</p>
        </section>
      </div>
    </div>
  )
}
