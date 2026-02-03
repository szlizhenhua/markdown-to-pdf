export const ja = {
  // Header
  title: "Markdown から PDF へのコンバーター",
  subtitle: "Markdown をプロフェッショナルな PDF に変換",

  // Controls
  buttons: {
    upload: "アップロード",
    showPreview: "プレビューを表示",
    hidePreview: "プレビューを非表示",
    getPDF: "PDF を取得",
    generatingPDF: "PDF を生成中...",
    settings: "設定",
    tableOfContents: "目次",
    exportHTML: "HTML",
    exportMarkdown: "MD"
  },

  // Editor
  editor: {
    title: "Markdown エディター",
    placeholder: "ここに Markdown を入力してください...\n\n# 見出し 1\n## 見出し 2\n\n**太字** と *斜体*\n\n- リスト項目 1\n- リスト項目 2\n\n```javascript\nconsole.log('こんにちは、世界！');\n```\n\n| 列 1 | 列 2 |\n|---------|----------|\n| データ 1  | データ 2   |",
    dragDropText: "Markdown ファイルをここにドロップ",
    dragDropSubtext: ".md と .txt ファイルをサポート",
    loading: "ダイアグラムを読み込み中...",
    rendering: "ダイアグラムをレンダリング中...",
    stats: {
      characters: "文字",
      words: "単語",
      lines: "行",
      readingTime: "読了時間"
    }
  },

  // Preview
  preview: {
    title: "プレビュー",
    theme: "テーマ"
  },

  // Settings
  settings: {
    title: "設定",
    theme: "テーマ",
    paperSize: "用紙サイズ",
    fontSize: "フォントサイズ"
  },

  // Table of Contents
  toc: {
    title: "目次"
  },

  // Themes
  themes: {
    default: "デフォルト",
    academic: "アカデミック",
    modern: "モダン",
    minimal: "ミニマル"
  },

  // Paper Sizes
  paperSizes: {
    a4: "A4",
    letter: "レター",
    legal: "リーガル"
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
    pdfGenerationError: "PDF の生成に失敗しました",
    pdfExportError: "PDF のエクスポートに失敗しました。コンソールで詳細を確認してください",
    mermaidRenderError: "Mermaid のレンダリングエラー",
    mermaidSyntaxError: "Mermaid の構文を確認してください",
    mermaidExampleSyntax: "構文の例:",
    mermaidRenderRetry: "Mermaid のレンダリング試行 {count} が失敗しました。100ms 後に再試行します",
    mermaidFinalError: "Mermaid のレンダリングが最終的に失敗しました",
    unknownError: "不明なエラー",
    highlightJsError: "言語 \"{lang}\" の Highlight.js エラー:",
    katexRenderError: "KaTeX レンダリングエラー:",
    mermaidInitError: "Mermaid 初期化エラー:",
    mermaidLoading: "ダイアグラムを読み込み中...",
    mermaidRendering: "ダイアグラムをレンダリング中...",
    templateLoaded: "テンプレートが読み込まれました",
    templateLoadedMessage: "テンプレートがエディターに適用されました。",
    fileTooLarge: "ファイルが大きすぎます。最大サイズは 5MB です。",
    invalidFileType: "無効なファイルタイプです。.md または .txt ファイルをアップロードしてください。",
    fileUploadFailed: "ファイルのアップロードに失敗しました。再試行してください。",
    fileUploaded: "ファイルが正常にアップロードされました",
    resetComplete: "リセット完了",
    resetCompleteMessage: "エディターと設定がデフォルト値にリセットされました。",
    copySuccess: "クリップボードにコピーしました",
    copyFailed: "クリップボードへのコピーに失敗しました",
    networkError: "ネットワークエラー。接続を確認してください。",
    quotaExceeded: "ストレージクォータを超えました。ブラウザデータをクリアしてください。",
    autoSaveFailed: "自動保存に失敗しました。変更が保存されない可能性があります。"
  },

  // Templates
  templates: {
    title: "テンプレートを選択",
    description: "プロフェッショナルにデザインされたテンプレートから選択して素早く開始",
    selectTemplate: "テンプレートをクリックしてエディターに読み込みます。現在のコンテンツは置き換えられます。",
    categories: {
      all: "すべてのテンプレート",
      basic: "ベーシック",
      academic: "アカデミック",
      technical: "テクニカル",
      documentation: "ドキュメンテーション"
    }
  },

  // Default Content
  defaultContent: `# Markdown から PDF へのコンバーター

> 🎯 **数式、フローチャート、コードハイライト、複数のテーマで Markdown ドキュメントをプロフェッショナルな PDF に変換**

## ✨ 機能

### 📊 **完全な Markdown サポート**
- **テキストフォーマット**: **太字**, *斜体*, ~~取り消し線~~, \`インラインコード\`
- **見出しレベル**: H1-H6 見出し構造の完全サポート
- **リスト**: 番号付きリスト、箇条書きリスト、タスクリスト
- **リンクと画像**: 自動リンク認識、画像埋め込みサポート
- **テーブル**: 配置と複雑なテーブル構造のサポート
- **引用**: ブロック引用と入れ子引用

### 🧮 **数式レンダリング (KaTeX)**
**インライン数式**: アインシュタインの質量-エネルギー方程式 $E = mc^2$

**ブロック数式**:
$$\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}$$

**複雑な数式**:
$$\\sum_{i=1}^{n} x_i = x_1 + x_2 + \\cdots + x_n$$

**行列表現**:
$$\\begin{bmatrix}
a & b \\\\
c & d
\\end{bmatrix}$$

### 📈 **図の描画 (Mermaid)**

#### フローチャート
\`\`\`mermaid
graph TD
    A[開始] --> B{条件}
    B -->|はい| C[実行 A]
    B -->|いいえ| D[実行 B]
    C --> E[終了]
    D --> E
\`\`\`

#### グラフ図
\`\`\`mermaid
graph LR
    A[ユーザー] --> B[システム]
    B --> A[応答]
\`\`\`

### 💻 **コードハイライト**

#### JavaScript の例
\`\`\`javascript
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// 使用例
console.log(fibonacci(10)); // 出力: 55
\`\`\`

#### Python の例
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

### 📋 **テーブル機能**

| 機能 | 状態 | 説明 | ショートカット |
|---------|:------:|-------------|----------|
| 数式 | ✅ | 完全な KaTeX サポート | \`$...\$ |
| フローチャート | ✅ | Mermaid ダイアグラム | \`mermaid |
| コードハイライト | ✅ | 多言語サポート | \`lang |
| テーブル | ✅ | 完全なテーブル機能 | \| \| \| |
| リンク | ✅ | 自動リンク認識 | [テキスト](url) |

---

## 📖 ユーザーガイド

### 🚀 **クイックスタート**

1. **コンテンツを編集**
   - 左側のエディターに Markdown コンテンツを入力または貼り付け
   - WYSIWYG でリアルタイムプレビュー

2. **ファイルをアップロード**
   - 「アップロード」ボタンをクリックして .md または .txt ファイルを選択
   - またはファイルをエディター領域に直接ドラッグアンドドロップ

3. **スタイルをカスタマイズ**
   - テーマスタイルを選択（デフォルト/アカデミック/モダン/ミニマル）
   - 用紙サイズとフォントサイズを調整
   - エフェクトのリアルタイムプレビュー

4. **PDF をエクスポート**
   - 「PDF を取得」ボタンをクリック
   - 生成された PDF ドキュメントの自動ダウンロード
   - ドキュメントタイトルに基づいてファイル名が自動生成

### ⌨️ **Markdown 構文チートシート**

#### 基本構文
\`\`\`markdown
# レベル 1 見出し
## レベル 2 見出し
### レベル 3 見出し

**太字テキスト** または __太字テキスト__
*斜体テキスト* または _斜体テキスト_
~~取り消し線~~

- 箇条書きリスト項目
  - 入れ子リスト項目

1. 番号付きリスト項目
2. 2 番目の項目
   1. 入れ子番号付き項目

> 引用テキスト
>> 入れ子引用

[リンクテキスト](https://example.com)
![画像説明](画像.jpg)

\`インラインコード\`

\`\`\`言語
コードブロック
\`\`\`

### 💡 **使用のヒント**

1. **数式**
   - インライン数式には \`$...\` を使用
   - ブロック数式には \`$$...$$\` を使用
   - 完全な LaTeX 数式構文をサポート

2. **コードブロック**
   - シンタックスハイライトに言語を指定: \`\`\`javascript
   - サポートされている言語: JavaScript、Python、JSON、Bash など

3. **図の描画**
   - Mermaid 構文を使用してフローチャート、グラフなどを作成
   - 複数の図タイプをサポート: グラフ、フローチャートなど

4. **テーブルフォーマット**
   - \`|\` を使用して列を区切る
   - \`-\` を使用してヘッダーとコンテンツを区切る
   - 配置のサポート: \`:---\` (左)、\`---:\` (右)、\`:---:\` (中央)

---

## ❓ よくある質問 (FAQ)

### Q1: サポートされている Markdown 構文は？
**A**: このツールは標準の Markdown 構文と GitHub Flavored Markdown (GFM) 拡張機能をサポートしており、テーブル、タスクリスト、取り消し線などが含まれます。また、数式 (KaTeX) と図の描画 (Mermaid) もサポートしています。

### Q2: 数式が表示されない場合は？
**A**: 正しい構文を使用しているか確認してください:
- インライン数式: \`$数式$\`
- ブロック数式: \`$$数式$$\`
それでも表示されない場合は、数式構文が正しいか確認してください。

### Q3: エクスポートされる PDF の品質は？
**A**: 出力品質を保証するためにプロフェッショナルな PDF 生成エンジンを使用しています:
- 高解像度ベクターグラフィック
- 明瞭なテキストレンダリング
- 正しいページ改ページ
- 元のフォーマットを維持

### Q4: データは安全ですか？
**A**: 完全に安全です！すべての処理はブラウザー内でローカルに行われます:
- サーバーにデータはアップロードされません
- ドキュメントコンテンツは保存されません
- 処理後にデータは自動的に消去されます

### Q5: サポートされているブラウザーは？
**A**: すべての最新ブラウザーをサポート:
- Chrome 65+
- Firefox 60+
- Safari 12+
- Edge 79+

### Q6: 大きなドキュメントを処理するには？
**A**: 大きなドキュメントの場合、以下をお勧めします:
- セクションごとに処理
- フォントサイズを適切に調整
- 適切なセグメンテーションのために改ページを使用
- エクスポート前にプレビューで効果を確認

### Q7: エクスポートされる PDF のファイル名は？
**A**: ファイル名はドキュメントの最初の行のタイトルに基づいて自動生成されます、例:
- タイトル「プロジェクトレポート」→「プロジェクトレポート.pdf」
- タイトルがない場合は「document.pdf」を使用

---

## 📞 技術サポート

### 🔧 **技術スタック**
- **Next.js** - React フレームワーク
- **Tailwind CSS** - スタイリングフレームワーク
- **Marked** - Markdown パーサー
- **KaTeX** - 数式レンダリング
- **Mermaid** - 図の描画
- **html2pdf.js** - PDF 生成
- **Highlight.js** - コードハイライト

### 📧 **お問い合わせ**
[オープンソース](https://github.com/szlizhenhua/markdown-to-pdf)。質問や提案については、以下からお問い合わせください:
- GitHub Issues: 問題を報告または機能をリクエスト
- フィードバックメール: support@markdown-to-pdf.org

### 🔄 **変更履歴**
- **v1.0.0** - 初回リリース
- KaTeX 数式サポート
- Mermaid ダイアグラムサポート
- 複数のテーマスタイル選択
- レスポンシブデザインの最適化

---

<div style="text-align: center; margin-top: 3em; padding: 2em; border-top: 1px solid #eee; color: #666;">
  <p><strong>Markdown から PDF へのコンバーター</strong></p>
  <p>プロフェッショナル Markdown から PDF 変換ツール</p>
  <p style="font-size: 0.9em; margin-top: 1em;">
    ❤️ で作成 | プライバシー優先
  </p>
  <p style="font-size: 0.8em; margin-top: 0.5em;">
    © 2025 Markdown to PDF. All rights reserved.
  </p>
</div>`,

  // SEO
  seo: {
    title: "Markdown から PDF コンバーター | プロフェッショナルドキュメントエクスポート",
    description: "数式、コード、ダイアグラム、目次、テーマで Markdown をプロフェッショナルな PDF ドキュメントに変換。学術および商用利用の出版品質出力。",
    keywords: "Markdown, PDF, コンバーター, KaTeX, Mermaid, コードハイライト, 目次, テーマ, エクスポート, 学術, プロフェッショナル"
  }
}
