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
    },
    it: {
      title: "Chi Siamo",
      sections: [
        {
          content: "Il convertitore da Markdown a PDF è uno strumento online potente e gratuito dedicato a semplificare la creazione di documenti per sviluppatori, scrittori e studenti."
        },
        {
          heading: "La Nostra Missione",
          content: "Crediamo che creare PDF belli e professionali dovrebbe essere facile e accessibile a tutti. Markdown è un formato fantastico per scrivere, ma convertirlo in PDF condivisibile e stilizzato può spesso essere difficile. La nostra missione è colmare questa lacuna con un convertitore veloce, privato e ricco di funzionalità."
        },
        {
          heading: "Perché Sceglierci?",
          items: [
            "<strong>Privacy Prima di Tutto:</strong> I tuoi documenti vengono elaborati localmente nel tuo browser. Non spiiamo il tuo contenuto.",
            "<strong>Ricco di Funzionalità:</strong> Supporto per KaTeX (matematica), Mermaid (diagrammi) e evidenziazione della sintassi.",
            "<strong>Personalizzabile:</strong> Vari temi e opzioni di layout per soddisfare le tue esigenze.",
            "<strong>Gratuito da Usare:</strong> Ci impegniamo a mantenere questo strumento principale gratuito per la nostra comunità."
          ]
        },
        {
          heading: "Tecnologia",
          content: "Questo progetto è costruito utilizzando moderne tecnologie web inclusi Next.js, React e Tailwind CSS, garantendo un'esperienza veloce e reattiva su qualsiasi dispositivo."
        }
      ]
    },
    pt: {
      title: "Sobre Nós",
      sections: [
        {
          content: "O conversor de Markdown para PDF é uma ferramenta online poderosa e gratuita dedicada a simplificar a criação de documentos para desenvolvedores, escritores e estudantes."
        },
        {
          heading: "Nossa Missão",
          content: "Acreditamos que criar PDFs bonitos e profissionais deve ser fácil e acessível a todos. O Markdown é um formato fantástico para escrever, mas convertê-lo em um PDF compartilhável e estilizado pode muitas vezes ser um incômodo. Nossa missão é preencher essa lacuna com um conversor rápido, privado e rico em recursos."
        },
        {
          heading: "Por Que Nos Escolher?",
          items: [
            "<strong>Privacidade em Primeiro Lugar:</strong> Seus documentos são processados localmente no seu navegador. Não espionamos seu conteúdo.",
            "<strong>Rico em Recursos:</strong> Suporte para KaTeX (matemática), Mermaid (diagramas) e realce de sintaxe.",
            "<strong>Personalizável:</strong> Vários temas e opções de layout para atender às suas necessidades.",
            "<strong>Gratuito para Usar:</strong> Estamos comprometidos em manter esta ferramenta principal gratuita para nossa comunidade."
          ]
        },
        {
          heading: "Tecnologia",
          content: "Este projeto é construído usando tecnologias web modernas, incluindo Next.js, React e Tailwind CSS, garantindo uma experiência rápida e responsiva em qualquer dispositivo."
        }
      ]
    },
    ru: {
      title: "О Нас",
      sections: [
        {
          content: "Конвертер Markdown в PDF — это мощный бесплатный онлайн-инструмент, посвященный упрощению создания документов для разработчиков, писателей и студентов."
        },
        {
          heading: "Наша Миссия",
          content: "Мы верим, что создание красивых, профессионально выглядящих PDF-файлов должно быть простым и доступным для всех. Markdown — это отличный формат для написания, но конвертация его в стильный PDF-файл для совместного использования часто может быть сложной. Наша миссия — устранить этот пробел с помощью быстрого, конфиденциального и богатого функциями конвертера."
        },
        {
          heading: "Почему Выбирают Нас?",
          items: [
            "<strong>Конфиденциальность Прежде Всего:</strong> Ваши документы обрабатываются локально в вашем браузере. Мы не шпионим за вашим содержимым.",
            "<strong>Богатый Функционал:</strong> Поддержка KaTeX (математика), Mermaid (диаграммы) и подсветки синтаксиса.",
            "<strong>Настраиваемый:</strong> Различные темы и параметры макета для удовлетворения ваших потребностей.",
            "<strong>Бесплатно:</strong> Мы стремимся поддерживать этот основной инструмент бесплатным для нашего сообщества."
          ]
        },
        {
          heading: "Технологии",
          content: "Этот проект построен с использованием современных веб-технологий, включая Next.js, React и Tailwind CSS, обеспечивая быстрый и отзывчивый опыт на любом устройстве."
        }
      ]
    },
    'zh-tw': {
      title: "關於我們",
      sections: [
        {
          content: "Markdown 轉 PDF 轉換器是一個強大的免費在線工具，致力於為開發人員、作家和學生簡化文檔創建。"
        },
        {
          heading: "我們的使命",
          content: "我們相信，創建美觀、專業的 PDF 應該對每個人來說都簡單易得。Markdown 是一種很棒的寫作格式，但將其轉換為可分享、有樣式的 PDF 通常很麻煩。我們的使命是通過快速、私密和功能豐富的轉換器來彌合這一差距。"
        },
        {
          heading: "為什麼選擇我們？",
          items: [
            "<strong>隱私優先：</strong> 您的文檔在瀏覽器中本地處理。我們不會窺探您的內容。",
            "<strong>功能豐富：</strong> 支持 KaTeX（數學）、Mermaid（圖表）和語法高亮。",
            "<strong>可自定義：</strong> 各種主題和布局選項以滿足您的需求。",
            "<strong>免費使用：</strong> 我們致力於為社區保持這個核心工具的免費。"
          ]
        },
        {
          heading: "技術",
          content: "本項目使用現代網絡技術構建，包括 Next.js、React 和 Tailwind CSS，確保在任何設備上都有快速響應的體驗。"
        }
      ]
    },
    ja: {
      title: "私たちについて",
      sections: [
        {
          content: "Markdown から PDF コンバーターは、開発者、ライター、学生のためのドキュメント作成を簡素化することに特化した、強力で無料のオンラインツールです。"
        },
        {
          heading: "私たちの使命",
          content: "美しくプロフェッショナルな PDF の作成は、誰にとっても簡単でアクセスしやすいものであるべきだと私たちは信じています。Markdown は素晴らしい執筆フォーマットですが、共有可能でスタイリッシュな PDF に変換するのは面倒なことが多いのです。私たちの使命は、高速でプライベート、かつ機能豊富なコンバーターでそのギャップを埋めることです。"
        },
        {
          heading: "私たちを選ぶ理由",
          items: [
            "<strong>プライバシー優先：</strong> ドキュメントはブラウザ内でローカルに処理されます。あなたのコンテンツを覗き見することはありません。",
            "<strong>機能豊富：</strong> KaTeX（数式）、Mermaid（図）、シンタックスハイライトをサポート。",
            "<strong>カスタマイズ可能：</strong> さまざまなテーマとレイアウトオプションでニーズに合わせられます。",
            "<strong>無料で使用：</strong> コミュニティのために、このコアツールを無料で提供し続けることを約束します。"
          ]
        },
        {
          heading: "技術",
          content: "このプロジェクトは Next.js、React、Tailwind CSS などの最新の Web 技術を使用して構築されており、どのデバイスでも高速で応答性の高いエクスペリエンスを提供します。"
        }
      ]
    },
    ko: {
      title: "회사 소개",
      sections: [
        {
          content: "Markdown에서 PDF로 변환기는 개발자, 작가 및 학생을 위해 문서 작성을 단순화하는 데 전념하는 강력하고 무료인 온라인 도구입니다."
        },
        {
          heading: "우리의使命",
          content: "우리는 아름답고 전문적인 PDF를 만드는 것이 모든 사람에게 쉽고 접근 가능해야 한다고 믿습니다. Markdown은 글쓰기를 위한 훌륭한 형식이지만 공유 가능하고 스타일이 적용된 PDF로 변환하는 것은 종종 번거로울 수 있습니다. 우리의使命은 빠르고 프라이빗하며 기능이 풍부한 변환기로 이 격차를 해소하는 것입니다."
        },
        {
          heading: "우리를 선택하는 이유",
          items: [
            "<strong>프라이버시 우선:</strong> 문서는 브라우저에서 로컬로 처리됩니다. 콘텐츠를 염탐하지 않습니다.",
            "<strong>기능 풍부:</strong> KaTeX(수학), Mermaid(다이어그램) 및 구문 강조 표시를 지원합니다.",
            "<strong>사용자 정의 가능:</strong> 요구 사항에 맞는 다양한 테마 및 레이아웃 옵션.",
            "<strong>무료 사용:</strong> 커뮤니티를 위해 핵심 도구를 무료로 제공하기 위해 최선을 다합니다."
          ]
        },
        {
          heading: "기술",
          content: "이 프로젝트는 Next.js, React 및 Tailwind CSS를 포함한 최신 웹 기술을 사용하여 구축되었으며 모든 장치에서 빠르고 반응형인 경험을 보장합니다."
        }
      ]
    },
    ar: {
      title: "معلومات عنا",
      sections: [
        {
          content: "محول Markdown إلى PDF هو أداة قوية ومجانية عبر الإنترنت مكررة لتبسيط إنشاء المستندات للمطورين والكتاب والطلاب."
        },
        {
          heading: "مهمتنا",
          content: "نحن نؤمن بأن إنشاء ملفات PDF جميلة واحترافية يجب أن يكون سهلاً ومتاحاً للجميع. Markdown هو تنسيق رائع للكتابة، ولكن تحويله إلى PDF قابل للمشاركة بتنسيق قد يكون غالباً أمراً مزعجاً. مهمتنا هي سد هذه الفجوة مع محول سريع وخاص وغني بالميزات."
        },
        {
          heading: "لماذا تختارنا؟",
          items: [
            "<strong>الخصوصية أولاً:</strong> يتم معالجة مستنداتك محلياً في متصفحك.我们不 لا تجسس على محتواك.",
            "<strong>غني بالميزات:</strong> دعم KaTeX (الرياضيات) و Mermaid (المخططات) وتظليل بناء الجملة.",
            "<strong>قابل للتخصيص:</strong> سمات متنوعة وخيارات تخطيط لتناسب احتياجاتك.",
            "<strong>مجاني للاستخدام:</strong> نحن ملتزمون بالحفاظ على هذه الأداة الأساسية مجانية لمجتمعنا."
          ]
        },
        {
          heading: "التقنية",
          content: "تم بناء هذا المشروع باستخدام تقنيات الويب الحديثة بما في ذلك Next.js و React و Tailwind CSS، مما يضمن تجربة سريعة ومتجاوبة على أي جهاز."
        }
      ]
    },
    hi: {
      title: "हमारे बारे में",
      sections: [
        {
          content: "Markdown से PDF कनवर्टर एक शक्तिशाली, मुफ्त ऑनलाइन टूल है जो डेवलपर्स, लेखकों और छात्रों के लिए दस्तावेज़ निर्माण को सरल बनाने के लिए समर्पित है।"
        },
        {
          heading: "हमारा मिशन",
          content: "हम मानते हैं कि सुंदर, पेशेवर PDF बनाना सभी के लिए आसान और सुलभ होना चाहिए। Markdown लेखन के लिए एक शानदार प्रारूप है, लेकिन इसे एक साझा करने योग्य, स्टाइल वाले PDF में बदलना अक्सर एक परेशानी हो सकती है। हमारा मिशन एक तेज़, निजी और सुविधा संपन्न कनवर्टर के साथ इस अंतर को पाटना है।"
        },
        {
          heading: "हमें क्यों चुनें?",
          items: [
            "<strong>पहले गोपनीयता:</strong> आपके दस्तावेज़ आपके ब्राउज़र में स्थानीय रूप से संसाधित होते हैं। हम आपकी सामग्री की जासूसी नहीं करते।",
            "<strong>सुविधाएं संपन्न:</strong> KaTeX (गणित), Mermaid (आरेख) और वाक्य रचना हाइलाइटिंग का समर्थन।",
            "<strong>अनुकूलन योग्य:</strong> आपकी आवश्यकताओं को पूरा करने के लिए विभिन्न विषय और लेआउट विकल्प।",
            "<strong>मुफ्त उपयोग:</strong> हम अपने समुदाय के लिए इस मुख्य टूल को मुफ्त रखने के लिए प्रतिबद्ध हैं।"
          ]
        },
        {
          heading: "प्रौद्योगिकी",
          content: "यह प्रोजेक्ट आधुनिक वेब प्रौद्योगिकियों का उपयोग करके बनाया गया है, जिसमें Next.js, React और Tailwind CSS शामिल हैं, जो किसी भी डिवाइस पर तेज़ और प्रतिक्रियाशील अनुभव सुनिश्चित करता है।"
        }
      ]
    },
    tr: {
      title: "Hakkımızda",
      sections: [
        {
          content: "Markdown'tan PDF'e Dönüştürücü, geliştiriciler, yazarlar ve öğrenciler için belge oluşturmayı basitleştirmeye adanmış güçlü, ücretsiz bir çevrimiçi araçtır."
        },
        {
          heading: "Misyonumuz",
          content: "Güzel, profesyonel görünümlü PDF'ler oluşturmanın herkes için kolay ve erişilebilir olması gerektiğine inanıyoruz. Markdown yazmak için harika bir formattır, ancak paylaşılabilir, stilli bir PDF'ye dönüştürmek genellikle zahmetli olabilir. Misyonumuz, hızlı, özel ve özellik dolu bir dönüştürücü ile bu boşluğu doldurmaktır."
        },
        {
          heading: "Neden Bizi Seçmelisiniz?",
          items: [
            "<strong>Gizlilik Öncelikli:</strong> Belgeleriniz tarayıcınızda yerel olarak işlenir. İçeriğinizi casusluk yapmıyoruz.",
            "<strong>Özellik Zengini:</strong> KaTeX (matematik), Mermaid (diagramlar) ve söz dizimi vurgulama desteği.",
            "<strong>Özelleştirilebilir:</strong> İhtiyaçlarınıza uygun çeşitli temalar ve düzen seçenekleri.",
            "<strong>Ücretsiz Kullanım:</strong> Bu temel aracı topluluğumuz için ücretsiz tutmaya kararlıyız."
          ]
        },
        {
          heading: "Teknoloji",
          content: "Bu proje, Next.js, React ve Tailwind CSS dahil olmak üzere modern web teknolojileri kullanılarak oluşturulmuştur ve herhangi bir cihazda hızlı ve duyarlı bir deneyim sağlar."
        }
      ]
    },
    nl: {
      title: "Over Ons",
      sections: [
        {
          content: "Markdown naar PDF Converter is een krachtige, gratis online tool die gewijd is aan het vereenvoudigen van documentcreatie voor ontwikkelaars, schrijvers en studenten."
        },
        {
          heading: "Onze Missie",
          content: "Wij geloven dat het maken van mooie, professionele PDF's eenvoudig en toegankelijk moet zijn voor iedereen. Markdown is een fantastisch formaat om te schrijven, maar het converteren naar een deelbare, gestileerde PDF kan vaak een gedoe zijn. Onze missie is om die kloog te overbruggen met een snelle, privégeoriënteerde en functierijke converter."
        },
        {
          heading: "Waarom Ons Kiezen?",
          items: [
            "<strong>Privacy Eerst:</strong> Uw documenten worden lokaal in uw browser verwerkt. Wij bespioneren uw inhoud niet.",
            "<strong>Functierijk:</strong> Ondersteuning voor KaTeX (wiskunde), Mermaid (diagrammen) en syntax highlighting.",
            "<strong>Aanpasbaar:</strong> Verschillende thema's en lay-outopties om aan uw behoeften te voldoen.",
            "<strong>Gratis te Gebruiken:</strong> Wij zijn toegewijd om dit kerninstrument gratis te houden voor onze gemeenschap."
          ]
        },
        {
          heading: "Technologie",
          content: "Dit project is gebouwd met moderne webtechnologieën inclusief Next.js, React en Tailwind CSS, wat zorgt voor een snelle en responsieve ervaring op elk apparaat."
        }
      ]
    },
    sv: {
      title: "Om Oss",
      sections: [
        {
          content: "Markdown till PDF-konverterare är ett kraftfullt, gratis onlineverktyg dedikerat till att förenkla dokumentskapande för utvecklare, skribenter och studenter."
        },
        {
          heading: "Vårt Uppdrag",
          content: "Vi tror att det ska vara enkelt och tillgängligt för alla att skapa vackra, professionella PDF:er. Markdown är ett fantastiskt format för att skriva, men att konvertera det till en delbar, stylad PDF kan ofta vara besvärligt. Vårt uppdrag är att överbrygga det här gapet med en snabb, privat och funktionsrik konverterare."
        },
        {
          heading: "Varför Välja Oss?",
          items: [
            "<strong>Integritet Först:</strong> Dina dokument bearbetas lokalt i din webbläsare. Vi spionerar inte på ditt innehåll.",
            "<strong>Funktionsrik:</strong> Stöd för KaTeX (matematik), Mermaid (diagram) och syntaxmarkering.",
            "<strong>Anpassningsbar:</strong> Olika teman och layoutalternativ för att möta dina behov.",
            "<strong>Gratis att Använda:</strong> Vi är engagerade i att hålla detta kärnverktyg gratis för vår gemenskap."
          ]
        },
        {
          heading: "Teknologi",
          content: "Detta projekt är byggt med moderna webbteknologier inklusive Next.js, React och Tailwind CSS, vilket säkerställer en snabb och responsiv upplevelse på alla enheter."
        }
      ]
    },
    pl: {
      title: "O Nas",
      sections: [
        {
          content: "Konwerter Markdown do PDF to potężne, darmowe narzędzie online poświęcone uproszczeniu tworzenia dokumentów dla programistów, pisarzy i studentów."
        },
        {
          heading: "Nasza Misja",
          content: "Wierzymy, że tworzenie pięknych, profesjonalnych plików PDF powinno być łatwe i dostępne dla każdego. Markdown to fantastyczny format do pisania, ale konwersja do udostępnialnego, stylowego pliku PDF może często być uciążliwa. Naszą misją jest zapełnienie tej luki szybkim, prywatnym i bogatym w funkcje konwerterem."
        },
        {
          heading: "Dlaczego Wybrać Nas?",
          items: [
            "<strong>Prywatność Priorytetem:</strong> Twoje dokumenty są przetwarzane lokalnie w Twojej przeglądarce. Nie szpiegujemy Twojej treści.",
            "<strong>Bogaty w Funkcje:</strong> Obsługa KaTeX (matematyka), Mermaid (diagramy) i podświetlanie składni.",
            "<strong>Konfigurowalny:</strong> Różne motywy i opcje układu, aby spełnić Twoje potrzeby.",
            "<strong>Darmowy w Użytkowaniu:</strong> Jesteśmy zobowiązani do utrzymania tego głównego narzędzia darmowego dla naszej społeczności."
          ]
        },
        {
          heading: "Technologia",
          content: "Ten projekt jest zbudowany z wykorzystaniem nowoczesnych technologii internetowych, w tym Next.js, React i Tailwind CSS, zapewniając szybkie i responsywne doświadczenie na dowolnym urządzeniu."
        }
      ]
    },
    vi: {
      title: "Về Chúng Tôi",
      sections: [
        {
          content: "Bộ chuyển đổi Markdown sang PDF là một công cụ trực tuyến mạnh mẽ và miễn phí dành riêng để đơn giản hóa việc tạo tài liệu cho các nhà phát triển, nhà văn và sinh viên."
        },
        {
          heading: "Sứ Mệnh của Chúng Tôi",
          content: "Chúng tôi tin rằng việc tạo ra các tệp PDF đẹp mắt và chuyên nghiệp nên dễ dàng và tiếp cận được với mọi người. Markdown là một định dạng tuyệt vời để viết, nhưng việc chuyển đổi nó sang PDF có thể chia sẻ và có kiểu dáng thường có thể là phiền phức. Sứ mệnh của chúng tôi là thu hẹp khoảng cách này với một bộ chuyển đổi nhanh, riêng tư và giàu tính năng."
        },
        {
          heading: "Tại Sao Chọn Chúng Tôi?",
          items: [
            "<strong>Ưu Tiên Quyền Riêng Tư:</strong> Tài liệu của bạn được xử lý cục bộ trong trình duyệt của bạn. Chúng tôi không gián điệp nội dung của bạn.",
            "<strong>Giàu Tính Năng:</strong> Hỗ trợ KaTeX (toán học), Mermaid (sơ đồ) và làm nổi bật cú pháp.",
            "<strong>Có Thể Tùy Chỉnh:</strong> Nhiều chủ đề và tùy chọn bố cục để đáp ứng nhu cầu của bạn.",
            "<strong>Miễn Phí Sử Dụng:</strong> Chúng tôi cam kết giữ công cụ chính này miễn phí cho cộng đồng của mình."
          ]
        },
        {
          heading: "Công Nghệ",
          content: "Dự án này được xây dựng sử dụng các công nghệ web hiện đại bao gồm Next.js, React và Tailwind CSS, đảm bảo trải nghiệm nhanh và phản hồi trên mọi thiết bị."
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
