"use client"

import { useLanguage } from '@/lib/contexts/language-context'

export function PrivacyContent() {
  const { language } = useLanguage()

  const privacyData = {
    en: {
      title: "Privacy Policy",
      lastUpdated: "Last updated",
      sections: [
        {
          heading: "1. Introduction",
          content: "Welcome to Markdown to PDF Converter. We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we handle your information when you use our website and services."
        },
        {
          heading: "2. Data Processing",
          content: "Markdown to PDF Converter is designed to process your data locally in your browser whenever possible. Your Markdown documents are converted to PDF directly on your device using client-side technologies. We do not store the content of your documents on our servers."
        },
        {
          heading: "3. Information We Collect",
          content: "We may collect anonymous usage statistics and technical data to improve our service, including:",
          items: ["Browser type and version", "Operating system", "Referrer URLs", "Time spent on site"]
        },
        {
          heading: "4. Cookies and Local Storage",
          content: "We use local storage to save your preferences (such as theme usage, editor settings) to enhance your user experience. We may use third-party services like Google AdSense which utilize cookies to serve ads based on your prior visits to our website or other websites."
        },
        {
          heading: "5. Third-Party Services",
          content: "We use the following third-party services:",
          items: ["Google AdSense: To display advertisements. Google uses cookies to serve ads on our site.", "Analytics: To understand how users interact with our tool."]
        },
        {
          heading: "6. Contact Us",
          content: "If you have any questions about this Privacy Policy, please contact us at privacy@markdown-to-pdf.org."
        }
      ]
    },
    fr: {
      title: "Politique de Confidentialité",
      lastUpdated: "Dernière mise à jour",
      sections: [
        {
          heading: "1. Introduction",
          content: "Bienvenue dans le convertisseur Markdown vers PDF. Nous respectons votre vie privée et nous nous engageons à protéger vos données personnelles. Cette politique de confidentialité explique comment nous traitons vos informations lorsque vous utilisez notre site Web et nos services."
        },
        {
          heading: "2. Traitement des Données",
          content: "Le convertisseur Markdown vers PDF est conçu pour traiter vos données localement dans votre navigateur dans la mesure du possible. Vos documents Markdown sont convertis en PDF directement sur votre appareil à l'aide de technologies côté client. Nous ne stockons pas le contenu de vos documents sur nos serveurs."
        },
        {
          heading: "3. Informations Collectées",
          content: "Nous pouvons collecter des statistiques d'utilisation anonymes et des données techniques pour améliorer notre service, notamment :",
          items: ["Type et version du navigateur", "Système d'exploitation", "URL de référence", "Temps passé sur le site"]
        },
        {
          heading: "4. Cookies et Stockage Local",
          content: "Nous utilisons le stockage local pour enregistrer vos préférences (telles que l'utilisation du thème, les paramètres de l'éditeur) pour améliorer votre expérience utilisateur. Nous pouvons utiliser des services tiers comme Google AdSense qui utilisent des cookies pour diffuser des publicités basées sur vos visites précédentes sur notre site Web ou d'autres sites Web."
        },
        {
          heading: "5. Services Tiers",
          content: "Nous utilisons les services tiers suivants :",
          items: ["Google AdSense : Pour afficher des publicités. Google utilise des cookies pour diffuser des publicités sur notre site.", "Analytics : Pour comprendre comment les utilisateurs interagissent avec notre outil."]
        },
        {
          heading: "6. Contactez-Nous",
          content: "Si vous avez des questions sur cette politique de confidentialité, veuillez nous contacter à privacy@markdown-to-pdf.org."
        }
      ]
    },
    'zh-cn': {
      title: "隐私政策",
      lastUpdated: "最后更新",
      sections: [
        {
          heading: "1. 简介",
          content: "欢迎使用 Markdown 转 PDF 转换器。我们尊重您的隐私，并致力于保护您的个人数据。本隐私政策解释了当您使用我们的网站和服务时我们如何处理您的信息。"
        },
        {
          heading: "2. 数据处理",
          content: "Markdown 转 PDF 转换器设计为尽可能在您的浏览器本地处理您的数据。您的 Markdown 文档使用客户端技术直接在您的设备上转换为 PDF。我们不会在服务器上存储您文档的内容。"
        },
        {
          heading: "3. 我们收集的信息",
          content: "我们可能会收集匿名使用统计数据和技术数据以改进我们的服务，包括：",
          items: ["浏览器类型和版本", "操作系统", "引用 URL", "在网站上花费的时间"]
        },
        {
          heading: "4. Cookie 和本地存储",
          content: "我们使用本地存储来保存您的偏好设置（如主题使用、编辑器设置）以增强您的用户体验。我们可能会使用第三方服务，如 Google AdSense，它们使用 cookie 根据您之前访问我们网站或其他网站的情况来投放广告。"
        },
        {
          heading: "5. 第三方服务",
          content: "我们使用以下第三方服务：",
          items: ["Google AdSense：用于展示广告。Google 使用 cookie 在我们的网站上投放广告。", "Analytics：用于了解用户如何与我们的工具交互。"]
        },
        {
          heading: "6. 联系我们",
          content: "如果您对本隐私政策有任何疑问，请通过 privacy@markdown-to-pdf.org 联系我们。"
        }
      ]
    },
    es: {
      title: "Política de Privacidad",
      lastUpdated: "Última actualización",
      sections: [
        {
          heading: "1. Introducción",
          content: "Bienvenido al Convertidor de Markdown a PDF. Respetamos su privacidad y estamos comprometidos a proteger sus datos personales. Esta Política de Privacidad explica cómo manejamos su información cuando utiliza nuestro sitio web y servicios."
        },
        {
          heading: "2. Procesamiento de Datos",
          content: "El Convertidor de Markdown a PDF está diseñado para procesar sus datos localmente en su navegador siempre que sea posible. Sus documentos Markdown se convierten a PDF directamente en su dispositivo utilizando tecnologías del lado del cliente. No almacenamos el contenido de sus documentos en nuestros servidores."
        },
        {
          heading: "3. Información que Recopilamos",
          content: "Podemos recopilar estadísticas de uso anónimas y datos técnicos para mejorar nuestro servicio, incluyendo:",
          items: ["Tipo y versión del navegador", "Sistema operativo", "URLs de referencia", "Tiempo pasado en el sitio"]
        },
        {
          heading: "4. Cookies y Almacenamiento Local",
          content: "Utilizamos el almacenamiento local para guardar sus preferencias (como el uso del tema, la configuración del editor) para mejorar su experiencia de usuario. Podemos utilizar servicios de terceros como Google AdSense que utilizan cookies para servir anuncios basados en sus visitas anteriores a nuestro sitio web u otros sitios web."
        },
        {
          heading: "5. Servicios de Terceros",
          content: "Utilizamos los siguientes servicios de terceros:",
          items: ["Google AdSense: Para mostrar anuncios. Google utiliza cookies para servir anuncios en nuestro sitio.", "Analytics: Para entender cómo los usuarios interactúan con nuestra herramienta."]
        },
        {
          heading: "6. Contáctenos",
          content: "Si tiene alguna pregunta sobre esta Política de Privacidad, contáctenos en privacy@markdown-to-pdf.org."
        }
      ]
    },
    de: {
      title: "Datenschutzrichtlinie",
      lastUpdated: "Zuletzt aktualisiert",
      sections: [
        {
          heading: "1. Einführung",
          content: "Willkommen beim Markdown zu PDF Konverter. Wir respektieren Ihre Privatsphäre und sind committed zum Schutz Ihrer persönlichen Daten. Diese Datenschutzrichtlinie erklärt, wie wir mit Ihren Informationen umgehen, wenn Sie unsere Website und unsere Dienste nutzen."
        },
        {
          heading: "2. Datenverarbeitung",
          content: "Der Markdown zu PDF Konverter ist so konzipiert, dass Ihre Daten jederzeit direkt in Ihrem Browser verarbeitet werden. Ihre Markdown-Dokumente werden mit client-seitigen Technologien direkt auf Ihrem Gerät in PDF konvertiert. Wir speichern den Inhalt Ihrer Dokumente nicht auf unseren Servern."
        },
        {
          heading: "3. Von Uns Gesammelte Informationen",
          content: "Wir können anonyme Nutzungsstatistiken und technische Daten sammeln, um unseren Service zu verbessern, einschließlich:",
          items: ["Browsertyp und -version", "Betriebssystem", "Referrer-URLs", "Auf der Website verbrachte Zeit"]
        },
        {
          heading: "4. Cookies und Lokaler Speicher",
          content: "Wir verwenden lokalen Speicher, um Ihre Präferenzen (wie Themennutzung, Editor-Einstellungen) zu speichern, um Ihre Benutzererfahrung zu verbessern. Wir können Drittanbieter-Dienste wie Google AdSense verwenden, die Cookies nutzen, um basierend auf Ihren früheren Besuchen auf unserer Website oder anderen Websites Werbung zu schalten."
        },
        {
          heading: "5. Drittanbieter-Dienste",
          content: "Wir verwenden die folgenden Drittanbieter-Dienste:",
          items: ["Google AdSense: Um Werbung anzuzeigen. Google verwendet Cookies, um Werbung auf unserer Website zu schalten.", "Analytics: Um zu verstehen, wie Benutzer mit unserem Tool interagieren."]
        },
        {
          heading: "6. Kontaktieren Sie Uns",
          content: "Wenn Sie Fragen zu dieser Datenschutzrichtlinie haben, kontaktieren Sie uns bitte unter privacy@markdown-to-pdf.org."
        }
      ]
    },
    ja: {
      title: "プライバシーポリシー",
      lastUpdated: "最終更新",
      sections: [
        {
          heading: "1. はじめに",
          content: "Markdown から PDF コンバータへようこそ。私たちはあなたのプライバシーを尊重し、個人情報の保護に取り組んでいます。このプライバシーポリシーは、ウェブサイトとサービスを使用する際の情報の扱いについて説明します。"
        },
        {
          heading: "2. データ処理",
          content: "Markdown から PDF コンバータは、可能な限りブラウザ内でデータをローカルに処理するように設計されています。Markdown ドキュメントは、クライアントサイド技術を使用してデバイス上で直接 PDF に変換されます。ドキュメントの内容をサーバーに保存しません。"
        },
        {
          heading: "3. 収集する情報",
          content: "サービス向上のために、匿名の使用統計と技術データを収集する場合があります。これには以下が含まれます：",
          items: ["ブラウザの種類とバージョン", "オペレーティングシステム", "リファラー URL", "サイト滞在時間"]
        },
        {
          heading: "4. Cookie とローカルストレージ",
          content: "ユーザーエクスペリエンスを向上させるために、テーマ設定、エディター設定などの環境設定を保存するためにローカルストレージを使用しています。Google AdSense などのサードパーティサービスを使用する場合があり、これらは Cookie を使用して当サイトまたは他のサイトへの過去の訪問に基づいて広告を配信します。"
        },
        {
          heading: "5. サードパーティサービス",
          content: "以下のサードパーティサービスを使用しています：",
          items: ["Google AdSense：広告の表示のため。Google は Cookie を使用して当サイトで広告を配信します。", "Analytics：ユーザーがツールとどのように対話するかを理解するため。"]
        },
        {
          heading: "6. お問い合わせ",
          content: "このプライバシーポリシーに関するご質問がございましたら、privacy@markdown-to-pdf.org までお問い合わせください。"
        }
      ]
    },
    ko: {
      title: "개인정보 보호정책",
      lastUpdated: "최종 업데이트",
      sections: [
        {
          heading: "1. 소개",
          content: "Markdown에서 PDF로 변환기에 오신 것을 환영합니다. 당사는 귀하의 개인정보를 존중하며 개인 데이터 보호를 위해 최선을 다하고 있습니다. 이 개인정보 보호정책은 웹사이트와 서비스를 사용할 때 귀하의 정보를 처리하는 방법을 설명합니다."
        },
        {
          heading: "2. 데이터 처리",
          content: "Markdown에서 PDF로 변환기는 가능한 한 브라우저에서 로컬로 데이터를 처리하도록 설계되었습니다. Markdown 문서는 클라이언트 측 기술을 사용하여 장치에서 직접 PDF로 변환됩니다. 서버에서 문서 내용을 저장하지 않습니다."
        },
        {
          heading: "3. 수집하는 정보",
          content: "서비스 개선을 위해 익명의 사용 통계 및 기술 데이터를 수집할 수 있습니다. 여기에는 다음이 포함됩니다.",
          items: ["브라우저 유형 및 버전", "운영 체제", "참조 URL", "사이트에서 보낸 시간"]
        },
        {
          heading: "4. 쿠키 및 로컬 저장소",
          content: "사용자 경험을 향상시키기 위해 테마 사용, 편집기 설정과 같은 환경 설정을 저장하기 위해 로컬 저장소를 사용합니다. Google AdSense와 같은 타사 서비스를 사용할 수 있으며, 이는 웹사이트나 다른 웹사이트에 대한 이전 방문을 기반으로 광고를 게제하기 위해 쿠키를 사용합니다."
        },
        {
          heading: "5. 타사 서비스",
          content: "다음 타사 서비스를 사용합니다.",
          items: ["Google AdSense: 광고 표시를 위해. Google은 당사 사이트에서 광고를 게제하기 위해 쿠키를 사용합니다.", "Analytics: 사용자가 도구와 상호 작용하는 방식을 이해하기 위해."]
        },
        {
          heading: "6. 문의하기",
          content: "이 개인정보 보호정책에 대해 궁금한 점이 있으시면 privacy@markdown-to-pdf.org로 문의하십시오."
        }
      ]
    }
  }

  const data = privacyData[language as keyof typeof privacyData] || privacyData.en

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">{data.title}</h1>
      <p className="mb-4">{data.lastUpdated}: {new Date().toLocaleDateString()}</p>

      <div className="space-y-6">
        {data.sections.map((section, index) => (
          <section key={index}>
            <h2 className="text-2xl font-semibold mb-3">{section.heading}</h2>
            <p>{section.content}</p>
            {section.items && (
              <ul className="list-disc ml-6 mt-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </div>
  )
}
