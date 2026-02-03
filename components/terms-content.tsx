"use client"

import { useLanguage } from '@/lib/contexts/language-context'

export function TermsContent() {
  const { language } = useLanguage()

  const termsData = {
    en: {
      title: "Terms of Service",
      lastUpdated: "Last updated",
      sections: [
        {
          heading: "1. Acceptance of Terms",
          content: "By accessing and using Markdown to PDF Converter, you accept and agree to be bound by the terms and provision of this agreement."
        },
        {
          heading: "2. Description of Service",
          content: "Markdown to PDF Converter provides a web-based tool for converting Markdown text into PDF documents. The service is provided as is and as available."
        },
        {
          heading: "3. User Conduct",
          content: "You agree to use our service only for lawful purposes. You are prohibited from using the service to:",
          items: ["Generate content that is illegal, harmful, or violates the rights of others.", "Attempt to disrupt or interfere with the security or performance of the service."]
        },
        {
          heading: "4. Disclaimer of Warranties",
          content: "We do not guarantee that the service will be error-free or uninterrupted. We are not responsible for any data loss during the conversion process. Users are encouraged to keep backups of their original documents."
        },
        {
          heading: "5. Intellectual Property",
          content: "You retain all rights to the content you create and convert using our service. We do not claim ownership over your documents."
        }
      ]
    },
    fr: {
      title: "Conditions d'Utilisation",
      lastUpdated: "Dernière mise à jour",
      sections: [
        {
          heading: "1. Acceptation des Conditions",
          content: "En accédant et en utilisant le convertisseur Markdown vers PDF, vous acceptez et acceptez d'être lié par les termes et les dispositions de cet accord."
        },
        {
          heading: "2. Description du Service",
          content: "Le convertisseur Markdown vers PDF fournit un outil Web pour convertir le texte Markdown en documents PDF. Le service est fourni tel quel et tel que disponible."
        },
        {
          heading: "3. Conduite de l'Utilisateur",
          content: "Vous acceptez d'utiliser notre service uniquement à des fins légales. Il vous est interdit d'utiliser le service pour :",
          items: ["Générer du contenu illégal, nuisible ou violant les droits d'autrui.", "Tenter de perturber ou d'interférer avec la sécurité ou les performances du service."]
        },
        {
          heading: "4. Clause de Non-Responsabilité",
          content: "Nous ne garantissons pas que le service sera sans erreur ou ininterrompu. Nous ne sommes pas responsables de toute perte de données pendant le processus de conversion. Les utilisateurs sont encouragés à conserver des sauvegardes de leurs documents originaux."
        },
        {
          heading: "5. Propriété Intellectuelle",
          content: "Vous conservez tous les droits sur le contenu que vous créez et convertissez à l'aide de notre service. Nous ne revendiquons aucune propriété sur vos documents."
        }
      ]
    },
    'zh-cn': {
      title: "服务条款",
      lastUpdated: "最后更新",
      sections: [
        {
          heading: "1. 接受条款",
          content: "通过访问和使用 Markdown 转 PDF 转换器，您接受并同意受本协议的条款和规定的约束。"
        },
        {
          heading: "2. 服务描述",
          content: "Markdown 转 PDF 转换器提供基于 Web 的工具，用于将 Markdown 文本转换为 PDF 文档。服务按原样和可用方式提供。"
        },
        {
          heading: "3. 用户行为",
          content: "您同意仅将我们的服务用于合法目的。禁止使用服务来：",
          items: ["生成非法、有害或侵犯他人权利的内容。", "试图破坏或干扰服务的安全性或性能。"]
        },
        {
          heading: "4. 免责声明",
          content: "我们不保证服务将无错误或不间断。我们不对转换过程中的任何数据丢失负责。建议用户保留原始文档的备份。"
        },
        {
          heading: "5. 知识产权",
          content: "您保留使用我们服务创建和转换的内容的所有权利。我们不对您的文档主张所有权。"
        }
      ]
    },
    es: {
      title: "Términos de Servicio",
      lastUpdated: "Última actualización",
      sections: [
        {
          heading: "1. Aceptación de los Términos",
          content: "Al acceder y utilizar el Convertidor de Markdown a PDF, acepta y acuerda estar sujeto a los términos y disposiciones de este acuerdo."
        },
        {
          heading: "2. Descripción del Servicio",
          content: "El Convertidor de Markdown a PDF proporciona una herramienta basada en la web para convertir texto Markdown en documentos PDF. El servicio se proporciona tal como está y según disponibilidad."
        },
        {
          heading: "3. Conducta del Usuario",
          content: "Usted acepta utilizar nuestro servicio solo para fines legales. Se le prohíbe utilizar el servicio para:",
          items: ["Generar contenido que sea ilegal, dañino o viole los derechos de otros.", "Intentar interrumpir o interferir con la seguridad o el rendimiento del servicio."]
        },
        {
          heading: "4. Exención de Garantías",
          content: "No garantizamos que el servicio esté libre de errores o sin interrupciones. No somos responsables de ninguna pérdida de datos durante el proceso de conversión. Se anima a los usuarios a mantener copias de seguridad de sus documentos originales."
        },
        {
          heading: "5. Propiedad Intelectual",
          content: "Usted conserva todos los derechos sobre el contenido que crea y convierte utilizando nuestro servicio. No reclamamos propiedad sobre sus documentos."
        }
      ]
    },
    de: {
      title: "Nutzungsbedingungen",
      lastUpdated: "Zuletzt aktualisiert",
      sections: [
        {
          heading: "1. Annahme der Bedingungen",
          content: "Durch den Zugriff und die Nutzung des Markdown zu PDF Konverters erklären Sie sich mit den Bedingungen und Bestimmungen dieser Vereinbarung einverstanden."
        },
        {
          heading: "2. Beschreibung des Dienstes",
          content: "Der Markdown zu PDF Konverter stellt ein Web-basiertes Tool zur Konvertierung von Markdown-Text in PDF-Dokumente bereit. Der Dienst wird wie besehen und wie verfügbar bereitgestellt."
        },
        {
          heading: "3. Benutzerverhalten",
          content: "Sie erklären sich damit einverstanden, unseren Service nur für lawful purposes zu nutzen. Es ist Ihnen untersagt, den Service zu nutzen, um:",
          items: ["Inhalte zu generieren, die illegal, schädlich sind oder die Rechte anderer verletzen.", "Zu versuchen, die Sicherheit oder Leistung des Dienstes zu stören oder zu beeinträchtigen."]
        },
        {
          heading: "4. Haftungsausschluss",
          content: "Wir garantieren nicht, dass der Service fehlerfrei oder unterbrechungsfrei ist. Wir sind nicht für Datenverluste während des Konvertierungsprozesses verantwortlich. Benutzer werden ermutigt, Backups ihrer Originaldokumente zu erstellen."
        },
        {
          heading: "5. Geistiges Eigentum",
          content: "Sie behalten alle Rechte an den Inhalten, die Sie mit unserem Service erstellen und konvertieren. Wir beanspruchen kein Eigentum an Ihren Dokumenten."
        }
      ]
    },
    ja: {
      title: "利用規約",
      lastUpdated: "最終更新",
      sections: [
        {
          heading: "1. 規約の同意",
          content: "Markdown から PDF コンバータにアクセスし使用することで、この契約の条項および規定に拘束されることに同意し、合意するものとします。"
        },
        {
          heading: "2. サービスの説明",
          content: "Markdown から PDF コンバータは、Markdown テキストを PDF ドキュメントに変換するための Web ベースのツールを提供します。サービスは現状のままおよび利用可能な状態で提供されます。"
        },
        {
          heading: "3. ユーザーの行動",
          content: "合法的な目的のみでサービスを使用することに同意します。以下の目的でサービスを使用することは禁止されています：",
          items: ["違法、有害または他者の権利を侵害するコンテンツを生成する。", "サービスのセキュリティまたはパフォーマンスを妨害または干渉しようとする。"]
        },
        {
          heading: "4. 保証の否認",
          content: "サービスがエラーフリーまたは中断なしであることを保証しません。変換プロセス中のデータ損失については責任を負いません。ユーザーは元のドキュメントのバックアップを保持することが推奨されます。"
        },
        {
          heading: "5. 知的財産",
          content: "サービスを使用して作成および変換するコンテンツのすべての権利を保有します。ドキュメントの所有権を主張しません。"
        }
      ]
    },
    ko: {
      title: "서비스 약관",
      lastUpdated: "최종 업데이트",
      sections: [
        {
          heading: "1. 약관의 수락",
          content: "Markdown에서 PDF로 변환기에 액세스하고 사용함으로써 귀하는 이 계약의 약관 및 규정에 구속되는 것에 동의합니다."
        },
        {
          heading: "2. 서비스 설명",
          content: "Markdown에서 PDF로 변환기는 Markdown 텍스트를 PDF 문서로 변환하는 웹 기반 도구를 제공합니다. 서비스는 있는 그대로 및 사용 가능한 상태로 제공됩니다."
        },
        {
          heading: "3. 사용자 행동",
          content: "합법적인 목적으로만 서비스를 사용하는 것에 동의합니다. 서비스를 사용하여 다음과 같은 행위를 하는 것이 금지됩니다.",
          items: ["불법적, 유해하거나 타인의 권리를 침해하는 콘텐츠를 생성합니다.", "서비스의 보안 또는 성능을 방해하거나 간섭하려고 시도합니다."]
        },
        {
          heading: "4. 보증 부인",
          content: "서비스가 오류 없거나 중단되지 않음을 보장하지 않습니다. 변환 프로세스 중 데이터 손실에 대해 책임지지 않습니다. 사용자는 원본 문서의 백업을 유지하는 것이 좋습니다."
        },
        {
          heading: "5. 지적 재산권",
          content: "서비스를 사용하여 만들고 변환하는 콘텐츠에 대한 모든 권리를 보유합니다. 문서에 대한 소유권을 주장하지 않습니다."
        }
      ]
    },
    it: {
      title: "Termini di Servizio",
      lastUpdated: "Ultimo aggiornamento",
      sections: [
        {
          heading: "1. Accettazione dei Termini",
          content: "Accedendo e utilizzando il Convertitore da Markdown a PDF, accetti e accetti di essere vincolato dai termini e dalle disposizioni di questo accordo."
        },
        {
          heading: "2. Descrizione del Servizio",
          content: "Il Convertitore da Markdown a PDF fornisce uno strumento basato sul web per convertire testo Markdown in documenti PDF. Il servizio è fornito così com'è e secondo disponibilità."
        },
        {
          heading: "3. Condotta dell'Utente",
          content: "Accetti di utilizzare il nostro servizio solo per scopi legali. È vietato utilizzare il servizio per:",
          items: ["Generare contenuti che sono illegali, dannosi o violano i diritti altrui.", "Tentare di interrompere o interferire con la sicurezza o le prestazioni del servizio."]
        },
        {
          heading: "4. Esclusione di Garanzie",
          content: "Non garantiamo che il servizio sarà privo di errori o ininterrotto. Non siamo responsabili per qualsiasi perdita di dati durante il processo di conversione. Gli utenti sono incoraggiati a mantenere backup dei loro documenti originali."
        },
        {
          heading: "5. Proprietà Intellettuale",
          content: "Mantieni tutti i diritti sui contenuti che crei e converti utilizzando il nostro servizio. Non rivendichiamo la proprietà sui tuoi documenti."
        }
      ]
    },
    pt: {
      title: "Termos de Serviço",
      lastUpdated: "Última atualização",
      sections: [
        {
          heading: "1. Aceitação dos Termos",
          content: "Ao acessar e usar o Conversor de Markdown para PDF, você aceita e concorda em ficar vinculado aos termos e disposições deste acordo."
        },
        {
          heading: "2. Descrição do Serviço",
          content: "O Conversor de Markdown para PDF fornece uma ferramenta baseada na web para converter texto Markdown em documentos PDF. O serviço é fornecido como está e conforme disponível."
        },
        {
          heading: "3. Conduta do Usuário",
          content: "Você concorda em usar nosso serviço apenas para fins legais. É proibido usar o serviço para:",
          items: ["Gerar conteúdo que seja ilegal, prejudicial ou viole os direitos de outros.", "Tentar interromper ou interferir com a segurança ou desempenho do serviço."]
        },
        {
          heading: "4. Isenção de Garantias",
          content: "Não garantimos que o serviço estará livre de erros ou sem interrupções. Não somos responsáveis por qualquer perda de dados durante o processo de conversão. Os usuários são encorajados a manter backups de seus documentos originais."
        },
        {
          heading: "5. Propriedade Intelectual",
          content: "Você retém todos os direitos sobre o conteúdo que você cria e converte usando nosso serviço. Não reivindicamos propriedade sobre seus documentos."
        }
      ]
    },
    ru: {
      title: "Условия Обслуживания",
      lastUpdated: "Последнее обновление",
      sections: [
        {
          heading: "1. Принятие Условий",
          content: "Получая доступ и используя Конвертер Markdown в PDF, вы принимаете и соглашаетесь быть связанным условиями и положениями этого соглашения."
        },
        {
          heading: "2. Описание Сервиса",
          content: "Конвертер Markdown в PDF предоставляет веб-инструмент для преобразования текста Markdown в PDF-документы. Сервис предоставляется как есть и в доступности."
        },
        {
          heading: "3. Поведение Пользователя",
          content: "Вы соглашаетесь использовать наш сервис только в законных целях. Вам запрещено использовать сервис для:",
          items: ["Генерации контента, который является незаконным, вредным или нарушает права других.", "Попытки прервать или вмешаться в безопасность или производительность сервиса."]
        },
        {
          heading: "4. Отказ от Гарантий",
          content: "Мы не гарантируем, что сервис будет безошибочным или без перерывов. Мы не несем ответственности за любые потери данных во время процесса преобразования. Пользователям рекомендуется сохранять резервные копии своих исходных документов."
        },
        {
          heading: "5. Интеллектуальная Собственность",
          content: "Вы сохраняете все права на контент, который вы создаете и преобразуете с помощью нашего сервиса. Мы не претендуем на право собственности на ваши документы."
        }
      ]
    },
    'zh-tw': {
      title: "服務條款",
      lastUpdated: "最後更新",
      sections: [
        {
          heading: "1. 接受條款",
          content: "通過訪問和使用 Markdown 轉 PDF 轉換器，您接受並同意受本協議的條款和規定的約束。"
        },
        {
          heading: "2. 服務描述",
          content: "Markdown 轉 PDF 轉換器提供基於 Web 的工具，用於將 Markdown 文本轉換為 PDF 文檔。服務按原樣和可用方式提供。"
        },
        {
          heading: "3. 用戶行為",
          content: "您同意僅將我們的服務用於合法目的。禁止使用服務來：",
          items: ["生成非法、有害或侵犯他人權利的內容。", "試圖破壞或干擾服務的安全性或性能。"]
        },
        {
          heading: "4. 免責聲明",
          content: "我們不保證服務將無錯誤或不間斷。我們不對轉換過程中的任何數據丟失負責。建議用戶保留原始文檔的備份。"
        },
        {
          heading: "5. 知識產權",
          content: "您保留使用我們服務創建和轉換的內容的所有權利。我們不對您的文檔主張所有權。"
        }
      ]
    },
    ar: {
      title: "شروط الخدمة",
      lastUpdated: "آخر تحديث",
      sections: [
        {
          heading: "1. قبول الشروط",
          content: "من خلال الوصول إلى واستخدام محول Markdown إلى PDF، فإنك تقبل وتوافق على الالتزام بشروط وأحكام هذا الاتفاق."
        },
        {
          heading: "2. وصف الخدمة",
          content: "محول Markdown إلى PDF يوفر أداة قائمة على الويب لتحويل نص Markdown إلى مستندات PDF. يتم توفير الخدمة كما هي ومتاحة."
        },
        {
          heading: "3. سلوك المستخدم",
          content: "توافق على استخدام خدمتنا فقط للأغراض المشروعة. يحظر استخدام الخدمة لـ:",
          items: ["إنشاء محتوى غير قانوني أو ضار أو ينتهك حقوق الآخرين.", "محاولة تعطيل أو التدخل مع أمان الخدمة أو أدائها."]
        },
        {
          heading: "4. إخلاء المسؤولية",
          content: "لا نضمن أن الخدمة ستكون خالية من الأخطاء أو غير متقطعة. نحن غير مسؤولين عن أي فقدان للبيانات أثناء عملية التحويل. يُنصح المستخدمون بالاحتفاظ بنسخ احتياطية من مستنداتهم الأصلية."
        },
        {
          heading: "5. الملكية الفكرية",
          content: "أنت تحتفظ بجميع الحقوق في المحتوى الذي تنشئه وتحوله باستخدام خدمتنا.我们不 نطالب بملكية مستنداتك."
        }
      ]
    },
    hi: {
      title: "सेवा की शर्तें",
      lastUpdated: "अंतिम अद्यतन",
      sections: [
        {
          heading: "1. नियमों की स्वीकृति",
          content: "Markdown से PDF कनवर्टर तक पहुंचकर और उसका उपयोग करके, आप इस समझौते की शर्तों और प्रावधानों से बंधे रहने के लिए सहमत होते हैं।"
        },
        {
          heading: "2. सेवा का विवरण",
          content: "Markdown से PDF कनवर्टर Markdown टेक्स्ट को PDF दस्तावेजों में बदलने के लिए एक वेब-आधारित टूल प्रदान करता है। सेवा जैसी है और जैसी उपलब्ध है, प्रदान की जाती है।"
        },
        {
          heading: "3. उपयोगकर्ता आचरण",
          content: "आप केवल कानूनी उद्देश्यों के लिए हमारी सेवा का उपयोग करने के लिए सहमत होते हैं। सेवा का उपयोग करने के लिए निषिद्ध है:",
          items: ["अवैध, हानिकारक या दूसरों के अधिकारों का उल्लंघन करने वाली सामग्री उत्पन्न करना।", "सेवा की सुरक्षा या प्रदर्शन में बाधा डालने या हस्तक्षेप करने का प्रयास करना।"]
        },
        {
          heading: "4. वारंटी की अस्वीकृति",
          content: "हम यह गारंटी नहीं देते कि सेवा त्रुटि-मुक्त या बिना रुकावट की होगी। रूपांतरण प्रक्रिया के दौरान किसी भी डेटा हानि के लिए हम जिम्मेदार नहीं हैं। उपयोगकर्ताओं को अपने मूल दस्तावेजों का बैकअप रखने के लिए प्रोत्साहित किया जाता है।"
        },
        {
          heading: "5. बौद्धिक संपदा",
          content: "आप हमारी सेवा का उपयोग करके बनाई गई और परिवर्तित सामग्री के सभी अधिकार रखते हैं। हम आपके दस्तावेजों पर स्वामित्व का दावा नहीं करते।"
        }
      ]
    },
    tr: {
      title: "Hizmet Şartları",
      lastUpdated: "Son güncelleme",
      sections: [
        {
          heading: "1. Şartların Kabulü",
          content: "Markdown'tan PDF'e Dönüştürücü'ye erişerek ve kullanarak, bu anlaşmanın hüküm ve koşullarına bağlı kalmayı kabul ve kabul edersiniz."
        },
        {
          heading: "2. Hizmetin Açıklaması",
          content: "Markdown'tan PDF'e Dönüştürücü, Markdown metnini PDF belgelerine dönüştürmek için web tabanlı bir araç sağlar. Hizmet olduğu gibi ve mevcut olduğu şekilde sunulmaktadır."
        },
        {
          heading: "3. Kullanıcı Davranışı",
          content: "Hizmetimizi sadece yasal amaçlar için kullanmayı kabul edersiniz. Hizmeti kullanmak aşağıdakiler için yasaktır:",
          items: ["Yasa dışı, zararlı veya başkalarının haklarını ihlal eden içerik oluşturmak.", "Hizmetin güvenliğini veya performansını bozmaya veya müdahale etmeye çalışmak."]
        },
        {
          heading: "4. Garanti Reddi",
          content: "Hizmetin hatasız veya kesintisiz olacağını garanti etmiyoruz. Dönüştürme işlemi sırasında herhangi bir veri kaybından sorumlu değiliz. Kullanıcıların orijinal belgelerinin yedeklerini tutmaları önerilir."
        },
        {
          heading: "5. Fikri Mülkiyet",
          content: "Hizmetimizi kullanarak oluşturduğunuz ve dönüştürdüğünüz içeriğin tüm haklarını saklı tutarsınız. Belgelerinizin mülkiyetini talep etmiyoruz."
        }
      ]
    },
    nl: {
      title: "Servicevoorwaarden",
      lastUpdated: "Laatst bijgewerkt",
      sections: [
        {
          heading: "1. Aanvaarding van Voorwaarden",
          content: "Door toegang te krijgen tot en gebruik te maken van de Markdown naar PDF Converter, aanvaardt u en gaat u akkoord met de voorwaarden en bepalingen van deze overeenkomst."
        },
        {
          heading: "2. Beschrijving van de Dienst",
          content: "De Markdown naar PDF Converter biedt een webgebaseerd hulpmiddel voor het converteren van Markdown-tekst naar PDF-documenten. De dienst wordt aangeboden zoals deze is en voor zover beschikbaar."
        },
        {
          heading: "3. Gebruikersgedrag",
          content: "U gaat akkoord met het uitsluitend gebruik van onze dienst voor wettelijke doeleinden. Het is verboden de dienst te gebruiken voor:",
          items: ["Het genereren van inhoud die onwettig, schadelijk is of de rechten van anderen schendt.", "Pogingen om de beveiliging of prestaties van de dienst te verstoren of te interfereren."]
        },
        {
          heading: "4. Vrijwaring",
          content: "Wij garanderen niet dat de dienst foutloos of ononderbroken zal zijn. Wij zijn niet verantwoordelijk voor enig gegevensverlies tijdens het conversieproces. Gebruikers worden aangemoedigd om back-ups van hun originele documenten te behouden."
        },
        {
          heading: "5. Intellectueel Eigendom",
          content: "U behoudt alle rechten op de inhoud die u maakt en converteert met onze dienst. Wij claimen geen eigendom over uw documenten."
        }
      ]
    },
    sv: {
      title: "Användarvillkor",
      lastUpdated: "Senast uppdaterad",
      sections: [
        {
          heading: "1. Godtagande av Villkor",
          content: "Genom att få tillgång till och använda Markdown till PDF-konverteraren accepterar och går du med på att vara bunden av villkoren och bestämmelserna i detta avtal."
        },
        {
          heading: "2. Beskrivning av Tjänsten",
          content: "Markdown till PDF-konverteraren tillhandahåller ett webbaserat verktyg för att konvertera Markdown-text till PDF-dokument. Tjänsten tillhandahålls som den är och som tillgänglig."
        },
        {
          heading: "3. Användarbeteende",
          content: "Du går med på att endast använda vår tjänst för lagliga ändamål. Det är förbjudet att använda tjänsten för:",
          items: ["Generera innehåll som är olagligt, skadligt eller kränker andras rättigheter.", "Försöka störa eller ingripa i tjänstens säkerhet eller prestanda."]
        },
        {
          heading: "4. Ansvarsfriskrivning",
          content: "Vi garanterar inte att tjänsten kommer att vara felfri eller oavbruten. Vi är inte ansvariga för någon dataförlust under konverteringsprocessen. Användare uppmuntras att behålla säkerhetskopior av sina ursprungliga dokument."
        },
        {
          heading: "5. Intellektuellt Ägande",
          content: "Du behåller alla rättigheter till innehållet du skapar och konverterar med vår tjänst. Vi gör inga anspråk på ägandeskap av dina dokument."
        }
      ]
    },
    pl: {
      title: "Warunki Korzystania z Usługi",
      lastUpdated: "Ostatnia aktualizacja",
      sections: [
        {
          heading: "1. Akceptacja Warunków",
          content: "Uzyskując dostęp i korzystając z Konwertera Markdown do PDF, akceptujesz i zgadzasz się być związany warunkami i postanowieniami tej umowy."
        },
        {
          heading: "2. Opis Usługi",
          content: "Konwerter Markdown do PDF zapewnia narzędzie internetowe do konwersji tekstu Markdown na dokumenty PDF. Usługa jest świadczona tak, jak jest i w miarę dostępności."
        },
        {
          heading: "3. Zachowanie Użytkownika",
          content: "Zgadzasz się używać naszej usługi tylko do legalnych celów. Zabrania się używania usługi do:",
          items: ["Generowania treści, które są nielegalne, szkodliwe lub naruszają prawa innych.", "Próby zakłócenia lub ingerencji w bezpieczeństwo lub wydajność usługi."]
        },
        {
          heading: "4. Wyłączenie Odpowiedzialności",
          content: "Nie gwarantujemy, że usługa będzie wolna od błędów lub nieprzerwana. Nie jesteśmy odpowiedzialni za jakiekolwiek utraty danych podczas procesu konwersji. Użytkownicy są zachęcani do utrzymywania kopii zapasowych swoich oryginalnych dokumentów."
        },
        {
          heading: "5. Własność Intelektualna",
          content: "Zachowujesz wszystkie prawa do treści, które tworzysz i konwertujesz przy użyciu naszej usługi. Nie rościmy sobie prawa własności do Twoich dokumentów."
        }
      ]
    },
    vi: {
      title: "Điều Khoản Dịch Vụ",
      lastUpdated: "Cập nhật lần cuối",
      sections: [
        {
          heading: "1. Chấp Nhận Điều Khoản",
          content: "Bằng cách truy cập và sử dụng Bộ chuyển đổi Markdown sang PDF, bạn chấp nhận và đồng ý bị ràng buộc bởi các điều khoản và quy định của thỏa thuận này."
        },
        {
          heading: "2. Mô Tả Dịch Vụ",
          content: "Bộ chuyển đổi Markdown sang PDF cung cấp công cụ dựa trên web để chuyển đổi văn bản Markdown thành tài liệu PDF. Dịch vụ được cung cấp như là và theo mức độ có sẵn."
        },
        {
          heading: "3. Hành Vi Người Dùng",
          content: "Bạn đồng ý chỉ sử dụng dịch vụ của chúng tôi cho mục đích hợp pháp. Bạn bị cấm sử dụng dịch vụ để:",
          items: ["Tạo nội dung bất hợp pháp, có hại hoặc vi phạm quyền của người khác.", "Cố gắng làm gián đoạn hoặc can thiệp vào bảo mật hoặc hiệu suất của dịch vụ."]
        },
        {
          heading: "4. Tuyên Bố Miễn Trừ Trách Nhiệm",
          content: "Chúng tôi không đảm bảo rằng dịch vụ sẽ không có lỗi hoặc không bị gián đoạn. Chúng tôi không chịu trách nhiệm về bất kỳ mất mát dữ liệu nào trong quá trình chuyển đổi. Người dùng được khuyến khích giữ bản sao lưu tài liệu gốc của họ."
        },
        {
          heading: "5. Sở Hữu Trí Tuệ",
          content: "Bạn giữ lại tất cả quyền đối với nội dung bạn tạo và chuyển đổi bằng dịch vụ của chúng tôi. Chúng tôi không tuyên bố quyền sở hữu đối với tài liệu của bạn."
        }
      ]
    }
  }

  const data = termsData[language as keyof typeof termsData] || termsData.en

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
