import { chromium } from 'playwright'

async function main() {
  const browser = await chromium.launch({ headless: true })
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })

  const errors = []
  const failed = []
  page.on('console', (msg) => {
    if (msg.type() === 'error') errors.push('[console] ' + msg.text())
  })
  page.on('pageerror', (err) => errors.push('[pageerror] ' + err.message))
  page.on('requestfailed', (req) => {
    failed.push(`[failed] ${req.url()} - ${req.failure()?.errorText}`)
  })

  await page.goto('https://prisma-studio.pages.dev/', { waitUntil: 'networkidle', timeout: 30000 })
  await page.waitForTimeout(3000)
  await page.screenshot({ path: '/tmp/prisma-live.png', fullPage: false })
  console.log('saved /tmp/prisma-live.png')

  const bodyText = await page.evaluate(() => document.body.innerText.trim())
  const rootHTML = await page.evaluate(() => document.getElementById('root')?.innerHTML?.length || 0)
  console.log('body text length:', bodyText.length)
  console.log('root children:', rootHTML)

  await browser.close()

  console.log('\n=== JS errors ===')
  errors.forEach((e) => console.log(e))
  console.log('\n=== Failed requests ===')
  failed.forEach((f) => console.log(f))
}

main().catch((e) => {
  console.error('FATAL:', e.message)
  process.exit(1)
})
