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
