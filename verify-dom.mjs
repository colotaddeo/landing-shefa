import { chromium } from '@playwright/test';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

await page.goto('http://localhost:3001');
await page.waitForLoadState('networkidle');
await page.waitForTimeout(1000);

// Check DOM
const allImgAlts = await page.evaluate(() =>
  [...document.querySelectorAll('img')].map(i => i.alt)
);
console.log('All img alts:', allImgAlts);

const allSections = await page.evaluate(() =>
  [...document.querySelectorAll('section')].map(s => ({
    id: s.id,
    ariaLabelledBy: s.getAttribute('aria-labelledby'),
    classNames: s.className.slice(0, 80)
  }))
);
console.log('Sections:', JSON.stringify(allSections, null, 2));

// Check if LanguageContext is causing issues
const bodyText = await page.evaluate(() => document.body.innerHTML.slice(0, 500));
console.log('\nBody start:', bodyText);

await browser.close();
