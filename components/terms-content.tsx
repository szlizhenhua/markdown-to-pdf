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
