"use client"

import { useLanguage } from '@/lib/contexts/language-context'

export function AboutContent() {
  const { language } = useLanguage()

  const aboutData = {
    en: {
      title: "About Us",
      sections: [
        {
          content: "Markdown to PDF Converter is a powerful, free online tool dedicated to simplifying document creation for developers, writers, and students."
        },
        {
          heading: "Our Mission",
          content: "We believe that creating beautiful, professional-looking PDFs should be easy and accessible to everyone. Markdown is a fantastic format for writing, but converting it to a shareable, styled PDF can often be a hassle. Our mission is to bridge that gap with a fast, private, and feature-rich converter."
        },
        {
          heading: "Why Choose Us?",
          items: [
            "<strong>Privacy First:</strong> Your documents are processed locally in your browser. We don't spy on your content.",
            "<strong>Feature Rich:</strong> Support for KaTeX (math), Mermaid (diagrams), and syntax highlighting.",
            "<strong>Customizable:</strong> Various themes and layout options to suit your needs.",
            "<strong>Free to Use:</strong> We are committed to keeping this core tool free for our community."
          ]
        },
        {
          heading: "Technology",
          content: "This project is built using modern web technologies including Next.js, React, and Tailwind CSS, ensuring a fast and responsive experience on any device."
        }
      ]
    },
    fr: {
      title: "À Propos de Nous",
      sections: [
        {
          content: "Le convertisseur Markdown vers PDF est un outil en ligne puissant et gratuit dédié à simplifier la création de documents pour les développeurs, les rédacteurs et les étudiants."
        },
        {
          heading: "Notre Mission",
          content: "Nous croyons que créer des PDFs beaux et professionnels devrait être facile et accessible à tous. Markdown est un format fantastique pour écrire, mais le convertir en PDF partageable et stylisé peut souvent être un problème. Notre mission est de combler ce fossé avec un convertisseur rapide, privé et riche en fonctionnalités."
        },
        {
          heading: "Pourquoi Nous Choisir ?",
          items: [
            "<strong>Confidentialité d'Abord :</strong> Vos documents sont traités localement dans votre navigateur. Nous n'espionnons pas votre contenu.",
            "<strong>Riche en Fonctionnalités :</strong> Prise en charge de KaTeX (mathématiques), Mermaid (diagrammes) et de la coloration syntaxique.",
            "<strong>Personnalisable :</strong> Différents thèmes et options de mise en page pour répondre à vos besoins.",
            "<strong>Gratuit à Utiliser :</strong> Nous nous engageons à garder cet outil principal gratuit pour notre communauté."
          ]
        },
        {
          heading: "Technologie",
          content: "Ce projet est construit en utilisant des technologies web modernes, notamment Next.js, React et Tailwind CSS, garantissant une expérience rapide et réactive sur n'importe quel appareil."
        }
      ]
    },
    'zh-cn': {
      title: "关于我们",
      sections: [
        {
          content: "Markdown 转 PDF 转换器是一个强大的免费在线工具，致力于为开发人员、作家和学生简化文档创建。"
        },
        {
          heading: "我们的使命",
          content: "我们相信，创建美观、专业的 PDF 应该对每个人来说都简单易得。Markdown 是一种很棒的写作格式，但将其转换为可分享、有样式的 PDF 通常很麻烦。我们的使命是通过快速、私密和功能丰富的转换器来弥合这一差距。"
        },
        {
          heading: "为什么选择我们？",
          items: [
            "<strong>隐私优先：</strong> 您的文档在浏览器中本地处理。我们不会窥探您的内容。",
            "<strong>功能丰富：</strong> 支持 KaTeX（数学）、Mermaid（图表）和语法高亮。",
            "<strong>可自定义：</strong> 各种主题和布局选项以满足您的需求。",
            "<strong>免费使用：</strong> 我们致力于为社区保持这个核心工具的免费。"
          ]
        },
        {
          heading: "技术",
          content: "本项目使用现代网络技术构建，包括 Next.js、React 和 Tailwind CSS，确保在任何设备上都有快速响应的体验。"
        }
      ]
    },
    es: {
      title: "Acerca de Nosotros",
      sections: [
        {
          content: "El Convertidor de Markdown a PDF es una herramienta en línea potente y gratuita dedicada a simplificar la creación de documentos para desarrolladores, escritores y estudiantes."
        },
        {
          heading: "Nuestra Misión",
          content: "Creemos que crear PDFs hermosos y profesionales debe ser fácil y accesible para todos. Markdown es un formato fantástico para escribir, pero convertirlo a un PDF con estilo y compartible a menudo puede ser una molestia. Nuestra misión es cerrar esa brecha con un convertidor rápido, privado y rico en funciones."
        },
        {
          heading: "¿Por Qué Elegirnos?",
          items: [
            "<strong>Privacidad Primero:</strong> Sus documentos se procesan localmente en su navegador. No espiamos su contenido.",
            "<strong>Rico en Funciones:</strong> Soporte para KaTeX (matemáticas), Mermaid (diagramas) y resaltado de sintaxis.",
            "<strong>Personalizable:</strong> Varios temas y opciones de diseño para satisfacer sus necesidades.",
            "<strong>Gratis para Usar:</strong> Estamos comprometidos a mantener esta herramienta principal gratuita para nuestra comunidad."
          ]
        },
        {
          heading: "Tecnología",
          content: "Este proyecto está construido utilizando tecnologías web modernas, incluyendo Next.js, React y Tailwind CSS, asegurando una experiencia rápida y receptiva en cualquier dispositivo."
        }
      ]
    },
    de: {
      title: "Über Uns",
      sections: [
        {
          content: "Der Markdown zu PDF Konverter ist ein leistungsstarkes, kostenloses Online-Tool, das der Vereinfachung der Dokumenterstellung für Entwickler, Autoren und Studenten gewidmet ist."
        },
        {
          heading: "Unsere Mission",
          content: "Wir glauben, dass die Erstellung schöner, professioneller PDFs einfach und für jeden zugänglich sein sollte. Markdown ist ein fantastisches Format zum Schreiben, aber das Konvertieren in ein teilbares, gestaltetes PDF kann oft eine Umstände sein. Unsere Mission ist es, diese Lücke mit einem schnellen, privaten und funktionsreichen Konverter zu schließen."
        },
        {
          heading: "Warum Uns Wählen?",
          items: [
            "<strong>Privatsphäre an erster Stelle:</strong> Ihre Dokumente werden lokal in Ihrem Browser verarbeitet. Wir spionieren Ihren Inhalt nicht aus.",
            "<strong>Funktionsreich:</strong> Unterstützung für KaTeX (Mathematik), Mermaid (Diagramme) und Syntaxhervorhebung.",
            "<strong>Anpassbar:</strong> Verschiedene Themen und Layoutoptionen, um Ihren Bedürfnissen gerecht zu werden.",
            "<strong>Kostenlos zu nutzen:</strong> Wir sind engagiert, dieses Haupttool für unsere Gemeinde kostenlos zu halten."
          ]
        },
        {
          heading: "Technologie",
          content: "Dieses Projekt wurde mit modernen Web-Technologien einschließlich Next.js, React und Tailwind CSS erstellt und sorgt für eine schnelle und reaktionsschnelle Erfahrung auf jedem Gerät."
        }
      ]
    }
  }

  const data = aboutData[language as keyof typeof aboutData] || aboutData.en

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">{data.title}</h1>

      <div className="space-y-6">
        {data.sections.map((section, index) => (
          <section key={index}>
            {section.heading && (
              <h2 className="text-2xl font-semibold mb-3">{section.heading}</h2>
            )}
            {section.content && (
              <p dangerouslySetInnerHTML={{ __html: section.content }} />
            )}
            {section.items && (
              <ul className="list-disc ml-6 mt-2 space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </div>
  )
}
