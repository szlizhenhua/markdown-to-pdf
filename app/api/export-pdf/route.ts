import { NextResponse } from 'next/server'
import { chromium } from 'playwright'

export async function POST(request: Request) {
  try {
    const { htmlContent, fileName = 'document.pdf' } = await request.json()
    
    // 启动浏览器
    const browser = await chromium.launch()
    const page = await browser.newPage()
    
    // 设置HTML内容
    await page.setContent(`
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <style>
            body { 
              font-family: "PingFang SC", "Microsoft YaHei", sans-serif;
              padding: 20px;
              line-height: 1.6;
            }
            pre {
              background-color: #1e1e1e;
              padding: 16px;
              border-radius: 6px;
              overflow: auto;
              margin: 10px 0;
            }
            code {
              font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
              font-size: 85%;
              color: #d4d4d4;
            }
            table {
              border-collapse: collapse;
              width: 100%;
              margin: 10px 0;
            }
            th, td {
              border: 1px solid #ddd;
              padding: 8px;
              text-align: left;
            }
            th {
              background-color: #f2f2f2;
            }
            .katex {
              font-size: 1.1em;
            }
            .katex-display {
              margin: 1em 0;
              text-align: center;
            }
          </style>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css">
        </head>
        <body>
          ${htmlContent}
        </body>
      </html>
    `)
    
    // 生成PDF
    const pdf = await page.pdf({
      format: 'A4',
      margin: { top: '20mm', right: '20mm', bottom: '20mm', left: '20mm' },
      printBackground: true
    })
    
    await browser.close()
    
    // 返回PDF文件
    return new NextResponse(pdf, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${fileName}"`,
      },
    })
  } catch (error) {
    console.error('PDF生成错误:', error)
    return NextResponse.json(
      { error: 'PDF生成失败' },
      { status: 500 }
    )
  }
}