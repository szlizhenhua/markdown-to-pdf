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
    },
    it: {
      title: "Politica sulla Privacy",
      lastUpdated: "Ultimo aggiornamento",
      sections: [
        {
          heading: "1. Introduzione",
          content: "Benvenuti nel convertitore da Markdown a PDF. Rispettiamo la tua privacy e siamo impegnati a proteggere i tuoi dati personali. Questa Politica sulla Privacy spiega come gestiamo le tue informazioni quando utilizzi il nostro sito web e i nostri servizi."
        },
        {
          heading: "2. Elaborazione dei Dati",
          content: "Il convertitore da Markdown a PDF è progettato per elaborare i tuoi dati localmente nel tuo browser quando possibile. I tuoi documenti Markdown vengono convertiti in PDF direttamente sul tuo dispositivo utilizzando tecnologie lato client. Non memorizziamo il contenuto dei tuoi documenti sui nostri server."
        },
        {
          heading: "3. Informazioni Raccolte",
          content: "Potremmo raccogliere statistiche di utilizzo anonime e dati tecnici per migliorare il nostro servizio, inclusi:",
          items: ["Tipo e versione del browser", "Sistema operativo", "URL di riferimento", "Tempo trascorso sul sito"]
        },
        {
          heading: "4. Cookie e Archiviazione Locale",
          content: "Utilizziamo l'archiviazione locale per salvare le tue preferenze (come l'utilizzo del tema, le impostazioni dell'editor) per migliorare la tua esperienza utente. Potremmo utilizzare servizi di terze parti come Google AdSense che utilizzano i cookie per pubblicare annunci pubblicitari basati sulle tue visite precedenti al nostro sito web o ad altri siti web."
        },
        {
          heading: "5. Servizi di Terze Parti",
          content: "Utilizziamo i seguenti servizi di terze parti:",
          items: ["Google AdSense: Per visualizzare pubblicità. Google utilizza i cookie per pubblicare annunci sul nostro sito.", "Analytics: Per capire come gli utenti interagiscono con il nostro strumento."]
        },
        {
          heading: "6. Contattaci",
          content: "Se hai domande su questa Politica sulla Privacy, contattaci all'indirizzo privacy@markdown-to-pdf.org."
        }
      ]
    },
    pt: {
      title: "Política de Privacidade",
      lastUpdated: "Última atualização",
      sections: [
        {
          heading: "1. Introdução",
          content: "Bem-vindo ao conversor de Markdown para PDF. Respeitamos sua privacidade e estamos comprometidos em proteger seus dados pessoais. Esta Política de Privacidade explica como lidamos com suas informações quando você usa nosso site e serviços."
        },
        {
          heading: "2. Processamento de Dados",
          content: "O conversor de Markdown para PDF é projetado para processar seus dados localmente em seu navegador sempre que possível. Seus documentos Markdown são convertidos em PDF diretamente em seu dispositivo usando tecnologias do lado do cliente. Não armazenamos o conteúdo de seus documentos em nossos servidores."
        },
        {
          heading: "3. Informações Coletadas",
          content: "Podemos coletar estatísticas de uso anônimas e dados técnicos para melhorar nosso serviço, incluindo:",
          items: ["Tipo e versão do navegador", "Sistema operacional", "URLs de referência", "Tempo gasto no site"]
        },
        {
          heading: "4. Cookies e Armazenamento Local",
          content: "Usamos o armazenamento local para salvar suas preferências (como uso de tema, configurações do editor) para melhorar sua experiência do usuário. Podemos usar serviços de terceiros como Google AdSense que utilizam cookies para servir anúncios baseados em suas visitas anteriores ao nosso site ou outros sites."
        },
        {
          heading: "5. Serviços de Terceiros",
          content: "Usamos os seguintes serviços de terceiros:",
          items: ["Google AdSense: Para exibir anúncios. O Google usa cookies para servir anúncios em nosso site.", "Analytics: Para entender como os usuários interagem com nossa ferramenta."]
        },
        {
          heading: "6. Entre em Contato",
          content: "Se você tiver alguma dúvida sobre esta Política de Privacidade, entre em contato conosco em privacy@markdown-to-pdf.org."
        }
      ]
    },
    ru: {
      title: "Политика Конфиденциальности",
      lastUpdated: "Последнее обновление",
      sections: [
        {
          heading: "1. Введение",
          content: "Добро пожаловать в конвертер Markdown в PDF. Мы уважаем вашу конфиденциальность и обязуемся защищать ваши личные данные. Эта Политика Конфиденциальности объясняет, как мы обрабатываем вашу информацию, когда вы используете наш веб-сайт и услуги."
        },
        {
          heading: "2. Обработка Данных",
          content: "Конвертер Markdown в PDF разработан для обработки ваших данных локально в вашем браузере, когда это возможно. Ваши документы Markdown преобразуются в PDF непосредственно на вашем устройстве с использованием клиентских технологий. Мы не храним содержимое ваших документов на наших серверах."
        },
        {
          heading: "3. Собираемая Информация",
          content: "Мы можем собирать анонимную статистику использования и технические данные для улучшения нашей службы, включая:",
          items: ["Тип и версия браузера", "Операционная система", "URL-адреса рефереров", "Время, проведенное на сайте"]
        },
        {
          heading: "4. Файлы Cookie и Локальное Хранилище",
          content: "Мы используем локальное хранилище для сохранения ваших настроек (например, использование темы, настройки редактора) для улучшения вашего пользовательского опыта. Мы можем использовать сторонние сервисы, такие как Google AdSense, которые используют файлы cookie для отображения рекламы на основе ваших предыдущих посещений нашего веб-сайта или других веб-сайтов."
        },
        {
          heading: "5. Сторонние Сервисы",
          content: "Мы используем следующие сторонние сервисы:",
          items: ["Google AdSense: Для отображения рекламы. Google использует файлы cookie для показа рекламы на нашем сайте.", "Analytics: Чтобы понять, как пользователи взаимодействуют с нашим инструментом."]
        },
        {
          heading: "6. Свяжитесь с Нами",
          content: "Если у вас есть какие-либо вопросы об этой Политике Конфиденциальности, пожалуйста, свяжитесь с нами по адресу privacy@markdown-to-pdf.org."
        }
      ]
    },
    'zh-tw': {
      title: "隱私政策",
      lastUpdated: "最後更新",
      sections: [
        {
          heading: "1. 簡介",
          content: "歡迎使用 Markdown 轉 PDF 轉換器。我們尊重您的隱私並致力於保護您的個人數據。本隱私政策解釋了當您使用我們的網站和服務時我們如何處理您的信息。"
        },
        {
          heading: "2. 數據處理",
          content: "Markdown 轉 PDF 轉換器設計為盡可能在您的瀏覽器中本地處理您的數據。您的 Markdown 文檔使用客戶端技術直接在您的設備上轉換為 PDF。我們不會在我們的服務器上存儲您文檔的內容。"
        },
        {
          heading: "3. 我們收集的信息",
          content: "我們可能會收集匿名使用統計數據和技術數據以改進我們的服務，包括：",
          items: ["瀏覽器類型和版本", "操作系統", "引用 URL", "在網站上花費的時間"]
        },
        {
          heading: "4. Cookie 和本地存儲",
          content: "我們使用本地存儲來保存您的偏好設置（例如主題使用、編輯器設置）以增強您的用戶體驗。我們可能會使用第三方服務，如 Google AdSense，它們使用 cookie 根據您之前訪問我們的網站或其他網站的情況投放廣告。"
        },
        {
          heading: "5. 第三方服務",
          content: "我們使用以下第三方服務：",
          items: ["Google AdSense：用於展示廣告。Google 使用 cookie 在我們的網站上投放廣告。", "Analytics：用於了解用戶如何與我們的工具交互。"]
        },
        {
          heading: "6. 聯繫我們",
          content: "如果您對本隱私政策有任何疑問，請通過 privacy@markdown-to-pdf.org 聯繫我們。"
        }
      ]
    },
    ar: {
      title: "سياسة الخصوصية",
      lastUpdated: "آخر تحديث",
      sections: [
        {
          heading: "1. مقدمة",
          content: "مرحباً بك في محول Markdown إلى PDF. نحن نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية. تشرح سياسة الخصوصية هذه كيف نتعامل مع معلوماتك عند استخدام موقعنا الإلكتروني وخدماتنا."
        },
        {
          heading: "2. معالجة البيانات",
          content: "تم تصميم محول Markdown إلى PDF لمعالجة بياناتك محلياً في متصفحك كلما كان ذلك ممكناً. يتم تحويل مستندات Markdown إلى PDF مباشرة على جهازك باستخدام تقنيات جانب العميل.我们不 نقوم بتخزين محتوى مستنداتك على خوادمنا."
        },
        {
          heading: "3. المعلومات التي نجمعها",
          content: "قد نجمع إحصائيات استخدام مجهولة وبيانات تقنية لتحسين خدمتنا، بما في ذلك:",
          items: ["نوع وإصدار المتصفح", "نظام التشغيل", "عناوين URL المحيلة", "الوقت المقضي على الموقع"]
        },
        {
          heading: "4. ملفات تعريف الارتباط والتخزين المحلي",
          content: "نحن نستخدم التخزين المحلي لحفظ تفضيلاتك (مثل استخدام السمة، إعدادات المحرر) لتحسين تجربة المستخدم الخاصة بك. قد نستخدم خدمات الطرف الثالث مثل Google AdSense التي تستخدم ملفات تعريف الارتباط لعرض الإعلانات بناءً على زياراتك السابقة لموقعنا الإلكتروني أو مواقع ويب أخرى."
        },
        {
          heading: "5. خدمات الطرف الثالث",
          content: "نحن نستخدم خدمات الطرف الثالث التالية:",
          items: ["Google AdSense: لعرض الإعلانات. يستخدم Google ملفات تعريف الارتباط لعرض الإعلانات على موقعنا.", "Analytics: لفهم كيف يتفاعل المستخدمون مع أداة."]
        },
        {
          heading: "6. اتصل بنا",
          content: "إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى الاتصال بنا على privacy@markdown-to-pdf.org."
        }
      ]
    },
    hi: {
      title: "गोपनीयता नीति",
      lastUpdated: "अंतिम अद्यतन",
      sections: [
        {
          heading: "1. परिचय",
          content: "Markdown से PDF कनवर्टर में आपका स्वागत है। हम आपकी गोपनीयता का सम्मान करते हैं और आपकी व्यक्तिगत डेटा की सुरक्षा के लिए प्रतिबद्ध हैं। यह गोपनीयता नीति बताती है कि जब आप हमारी वेबसाइट और सेवाओं का उपयोग करते हैं तो हम आपकी जानकारी कैसे संभालते हैं।"
        },
        {
          heading: "2. डेटा प्रसंस्करण",
          content: "Markdown से PDF कनवर्टर यथासंभव आपके ब्राउज़र में स्थानीय रूप से आपके डेटा को संसाधित करने के लिए डिज़ाइन किया गया है। आपके Markdown दस्तावेज़ सीधे आपके डिवाइस पर क्लाइंट-साइड तकनीकों का उपयोग करके PDF में परिवर्तित हो जाते हैं। हम अपने सर्वर पर आपके दस्तावेज़ों की सामग्री संग्रहीत नहीं करते।"
        },
        {
          heading: "3. हम जो जानकारी एकत्र करते हैं",
          content: "हम अपनी सेवा को बेहतर बनाने के लिए अज्ञात उपयोग आँकड़े और तकनीकी डेटा एकत्र कर सकते हैं, जिसमें शामिल है:",
          items: ["ब्राउज़र का प्रकार और संस्करण", "ऑपरेटिंग सिस्टम", "रेफरर URL", "साइट पर बिताया गया समय"]
        },
        {
          heading: "4. कुकीज़ और स्थानीय भंडारण",
          content: "हम आपके उपयोगकर्ता अनुभव को बेहतर बनाने के लिए अपनी पसंद (जैसे थीम उपयोग, संपादक सेटिंग्स) को सहेजने के लिए स्थानीय भंडारण का उपयोग करते हैं। हम Google AdSense जैसी तीसरे पक्ष की सेवाओं का उपयोग कर सकते हैं जो कुकीज़ का उपयोग करती हैं ताकि आपकी हमारी वेबसाइट या अन्य वेबसाइटों पर पिछली यात्राओं के आधार पर विज्ञापन परोस सकें।"
        },
        {
          heading: "5. तीसरे पक्ष की सेवाएं",
          content: "हम निम्नलिखित तीसरे पक्ष की सेवाओं का उपयोग करते हैं:",
          items: ["Google AdSense: विज्ञापन प्रदर्शित करने के लिए। Google हमारी साइट पर विज्ञापन परोसने के लिए कुकीज़ का उपयोग करता है।", "Analytics: यह समझने के लिए कि उपयोगकर्ता हमारे टूल के साथ कैसे इंटरैक्ट करते हैं।"]
        },
        {
          heading: "6. संपर्क करें",
          content: "यदि आपके पास इस गोपनीयता नीति के बारे में कोई प्रश्न है, तो कृपया privacy@markdown-to-pdf.org पर संपर्क करें।"
        }
      ]
    },
    tr: {
      title: "Gizlilik Politikası",
      lastUpdated: "Son güncelleme",
      sections: [
        {
          heading: "1. Giriş",
          content: "Markdown'tan PDF'e Dönüştürücü'ye hoş geldiniz. Gizliliğinize saygı duyuyoruz ve kişisel verilerinizi korumayı taahhüt ediyoruz. Bu Gizlilik Politikası, web sitemizi ve hizmetlerimizi kullandığınızda bilgilerinizi nasıl işlediğimizi açıklar."
        },
        {
          heading: "2. Veri İşleme",
          content: "Markdown'tan PDF'e Dönüştürücü, verilerinizi mümkün olduğunca tarayıcınızda yerel olarak işlemek üzere tasarlanmıştır. Markdown belgeleriniz istemci tarafı teknolojilerini kullanarak doğrudan cihazınızda PDF'ye dönüştürülür. Belgelerinizin içeriğini sunucularımızda saklamayız."
        },
        {
          heading: "3. Toplanan Bilgiler",
          content: "Hizmetimizi iyileştirmek için anonim kullanım istatistikleri ve teknik veriler toplayabiliriz, şunlar dahil:",
          items: ["Tarayıcı türü ve sürümü", "İşletim sistemi", "Yönlendiren URL'ler", "Sitede geçirilen süre"]
        },
        {
          heading: "4. Çerezler ve Yerel Depolama",
          content: "Kullanıcı deneyiminizi artırmak için tercihlerinizi (tema kullanımı, düzenleyici ayarları gibi) kaydetmek için yerel depolamayı kullanıyoruz. Web sitemize veya diğer web sitelerine önceki ziyaretlerinize dayalı reklam sunmak için çerezleri kullanan Google AdSense gibi üçüncü taraf hizmetleri kullanabiliriz."
        },
        {
          heading: "5. Üçüncü Taraf Hizmetler",
          content: "Şu üçüncü taraf hizmetleri kullanıyoruz:",
          items: ["Google AdSense: Reklam görüntülemek için. Google, sitemizde reklam sunmak için çerezleri kullanır.", "Analytics: Kullanıcıların aracımızla nasıl etkileşim kurduğunu anlamak için."]
        },
        {
          heading: "6. Bizimle İletişime Geçin",
          content: "Bu Gizlilik Politikası hakkında herhangi bir sorunuz varsa, lütfen privacy@markdown-to-pdf.org adresinden bizimle iletişime geçin."
        }
      ]
    },
    nl: {
      title: "Privacybeleid",
      lastUpdated: "Laatst bijgewerkt",
      sections: [
        {
          heading: "1. Inleiding",
          content: "Welkom bij de Markdown naar PDF Converter. Wij respecteren uw privacy en zijn toegewijd aan het beschermen van uw persoonlijke gegevens. Dit Privacybeleid legt uit hoe wij uw informatie verwerken wanneer u onze website en diensten gebruikt."
        },
        {
          heading: "2. Gegevensverwerking",
          content: "De Markdown naar PDF Converter is ontworpen om uw gegevens zo veel mogelijk lokaal in uw browser te verwerken. Uw Markdown-documenten worden direct op uw apparaat geconverteerd naar PDF met behulp van client-side technologieën. Wij slaan de inhoud van uw documenten niet op onze servers op."
        },
        {
          heading: "3. Verzamelde Informatie",
          content: "Wij kunnen anonieme gebruiksstatistieken en technische gegevens verzamelen om onze dienst te verbeteren, inclusief:",
          items: ["Browsertype en -versie", "Besturingssysteem", "Verwijzende URL's", "Tijd doorgebracht op site"]
        },
        {
          heading: "4. Cookies en Lokale Opslag",
          content: "Wij gebruiken lokale opslag om uw voorkeuren (zoals themagebruik, editorinstellingen) op te slaan om uw gebruikerservaring te verbeteren. Wij kunnen derde partijdiensten zoals Google AdSense gebruiken die cookies gebruiken om advertenties weer te geven op basis van uw eerdere bezoeken aan onze website of andere websites."
        },
        {
          heading: "5. Derde Partij Diensten",
          content: "Wij gebruiken de volgende derde partij diensten:",
          items: ["Google AdSense: Om advertenties weer te geven. Google gebruikt cookies om advertenties op onze site weer te geven.", "Analytics: Om te begrijpen hoe gebruikers interageren met onze tool."]
        },
        {
          heading: "6. Neem Contact Op",
          content: "Als u vragen heeft over dit Privacybeleid, neem dan contact met ons op via privacy@markdown-to-pdf.org."
        }
      ]
    },
    sv: {
      title: "Integritetspolicy",
      lastUpdated: "Senast uppdaterad",
      sections: [
        {
          heading: "1. Introduktion",
          content: "Välkommen till Markdown till PDF-konverteraren. Vi respekterar din integritet och är engagerade i att skydda dina personuppgifter. Denna Integritetspolicy förklarar hur vi hanterar din information när du använder vår webbplats och våra tjänster."
        },
        {
          heading: "2. Databearbetning",
          content: "Markdown till PDF-konverteraren är utformad för att bearbeta dina data lokalt i din webbläsare när det är möjligt. Dina Markdown-dokument konverteras till PDF direkt på din enhet med hjälp av klientsidsteknologier. Vi lagrar inte innehållet i dina dokument på våra servrar."
        },
        {
          heading: "3. Information Vi Samlar In",
          content: "Vi kan samla in anonym användningsstatistik och teknisk data för att förbättra vår tjänst, inklusive:",
          items: ["Webbläsartyp och version", "Operativsystem", "Hänvisnings-URL:er", "Tid som spenderas på webbplatsen"]
        },
        {
          heading: "4. Kakor och Lokal Lagring",
          content: "Vi använder lokal lagring för att spara dina inställningar (som temanvändning, redigerarinställningar) för att förbättra din användarupplevelse. Vi kan använda tredjepartstjänster som Google AdSense som använder kakor för att visa annonser baserat på dina tidigare besök på vår webbplats eller andra webbplatser."
        },
        {
          heading: "5. Tredjepartstjänster",
          content: "Vi använder följande tredjepartstjänster:",
          items: ["Google AdSense: För att visa annonser. Google använder kakor för att visa annonser på vår webbplats.", "Analytics: För att förstå hur användare interagerar med vårt verktyg."]
        },
        {
          heading: "6. Kontakta Oss",
          content: "Om du har några frågor om denna Integritetspolicy, kontakta oss på privacy@markdown-to-pdf.org."
        }
      ]
    },
    pl: {
      title: "Polityka Prywatności",
      lastUpdated: "Ostatnia aktualizacja",
      sections: [
        {
          heading: "1. Wprowadzenie",
          content: "Witamy w Konwerterze Markdown do PDF. Szanujemy Twoją prywatność i jesteśmy zaangażowani w ochronę Twoich danych osobowych. Niniejsza Polityka Prywatności wyjaśnia, jak przetwarzamy Twoje informacje podczas korzystania z naszej witryny i usług."
        },
        {
          heading: "2. Przetwarzanie Danych",
          content: "Konwerter Markdown do PDF został zaprojektowany tak, aby przetwarzać Twoje dane lokalnie w przeglądarce, gdy tylko jest to możliwe. Twoje dokumenty Markdown są konwertowane bezpośrednio na Twoim urządzeniu przy użyciu technologii po stronie klienta. Nie przechowujemy treści Twoich dokumentów na naszych serwerach."
        },
        {
          heading: "3. Zbierane Informacje",
          content: "Możemy zbierać anonimowe statystyki użytkowania i dane techniczne w celu poprawy naszej usługi, w tym:",
          items: ["Typ i wersja przeglądarki", "System operacyjny", "URL-e odsyłające", "Czas spędzony na stronie"]
        },
        {
          heading: "4. Pliki Cookie i Lokalne Przechowywanie",
          content: "Używamy lokalnego przechowywania, aby zapisać Twoje preferencje (takie jak użycie motywu, ustawienia edytora) w celu poprawy Twojego doświadczenia użytkownika. Możemy używać usług stron trzecich, takich jak Google AdSense, które wykorzystują pliki cookie do wyświetlania reklam na podstawie Twoich poprzednich wizyt na naszej witrynie lub innych witrynach."
        },
        {
          heading: "5. Usługi Stron Trzecich",
          content: "Używamy następujących usług stron trzecich:",
          items: ["Google AdSense: Do wyświetlania reklam. Google używa plików cookie do wyświetlania reklam w naszej witrynie.", "Analytics: Aby zrozumieć, jak użytkownicy wchodzą w interakcję z naszym narzędziem."]
        },
        {
          heading: "6. Skontaktuj Się z Nami",
          content: "Jeśli masz jakiekolwiek pytania dotyczące niniejszej Polityki Prywatności, skontaktuj się z nami pod adresem privacy@markdown-to-pdf.org."
        }
      ]
    },
    vi: {
      title: "Chính Sách Quyền Riêng Tư",
      lastUpdated: "Cập nhật lần cuối",
      sections: [
        {
          heading: "1. Giới Thiệu",
          content: "Chào mừng bạn đến với Bộ chuyển đổi Markdown sang PDF. Chúng tôi tôn trọng quyền riêng tư của bạn và cam kết bảo vệ dữ liệu cá nhân của bạn. Chính Sách Quyền Riêng Tư này giải thích cách chúng tôi xử lý thông tin của bạn khi bạn sử dụng trang web và dịch vụ của chúng tôi."
        },
        {
          heading: "2. Xử Lý Dữ Liệu",
          content: "Bộ chuyển đổi Markdown sang PDF được thiết kế để xử lý dữ liệu của bạn cục bộ trong trình duyệt của bạn bất cứ khi nào có thể. Các tài liệu Markdown của bạn được chuyển đổi thành PDF trực tiếp trên thiết bị của bạn bằng công nghệ phía máy khách. Chúng tôi không lưu trữ nội dung tài liệu của bạn trên máy chủ của mình."
        },
        {
          heading: "3. Thông Tin Chúng Tôi Thu Thập",
          content: "Chúng tôi có thể thu thập thống kê sử dụng ẩn danh và dữ liệu kỹ thuật để cải thiện dịch vụ của mình, bao gồm:",
          items: ["Loại và phiên bản trình duyệt", "Hệ điều hành", "URL giới thiệu", "Thời gian dành trên trang"]
        },
        {
          heading: "4. Cookie và Lưu Trữ Cục Bộ",
          content: "Chúng tôi sử dụng lưu trữ cục bộ để lưu tùy chọn của bạn (như sử dụng chủ đề, cài đặt trình soạn thảo) để cải thiện trải nghiệm người dùng của bạn. Chúng tôi có thể sử dụng các dịch vụ của bên thứ ba như Google AdSense sử dụng cookie để phục vụ quảng cáo dựa trên các lần truy cập trước của bạn vào trang web của chúng tôi hoặc các trang web khác."
        },
        {
          heading: "5. Dịch Vụ Của Bên Thứ Ba",
          content: "Chúng tôi sử dụng các dịch vụ của bên thứ ba sau:",
          items: ["Google AdSense: Để hiển thị quảng cáo. Google sử dụng cookie để phục vụ quảng cáo trên trang web của chúng tôi.", "Analytics: Để hiểu cách người dùng tương tác với công cụ của chúng tôi."]
        },
        {
          heading: "6. Liên Hệ Với Chúng Tôi",
          content: "Nếu bạn có bất kỳ câu hỏi nào về Chính Sách Quyền Riêng Tư này, vui lòng liên hệ với chúng tôi tại privacy@markdown-to-pdf.org."
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
