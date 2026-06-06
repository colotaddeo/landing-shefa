import { chromium } from '@playwright/test';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = (name) => path.join(__dirname, name);

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await context.newPage();

// Enable hover media query via CDP
const client = await context.newCDPSession(page);
await client.send('Emulation.setEmulatedMedia', {
  features: [{ name: 'hover', value: 'hover' }, { name: 'pointer', value: 'fine' }]
});

await page.goto('http://localhost:3001');
await page.waitForLoadState('networkidle');
await page.waitForTimeout(500);

// EcosystemMap section
const ecosystem = page.locator('section[aria-labelledby="ecosystem-heading"]');
const endeavorLogo = ecosystem.locator('img[alt="Endeavor"]');
const arcapLogo = ecosystem.locator('img[alt="ARCAP"]');

await endeavorLogo.scrollIntoViewIfNeeded();
await page.waitForTimeout(300);

await page.screenshot({ path: OUT('verify-ecosystem-default.png') });

const ePosBefore = await endeavorLogo.boundingBox();
console.log('Endeavor bbox before hover:', JSON.stringify(ePosBefore));

// Hover the direct parent (the cell) — one level up from img
const endeavorCell = endeavorLogo.locator('xpath=..');
const cellBox = await endeavorCell.boundingBox();
console.log('Endeavor CELL bbox:', JSON.stringify(cellBox));

await endeavorCell.hover({ force: true });
await page.waitForTimeout(700);

const ePosAfter = await endeavorLogo.boundingBox();
console.log('Endeavor bbox after hover:', JSON.stringify(ePosAfter));
await page.screenshot({ path: OUT('verify-endeavor-hover.png') });

// ARCAP
await arcapLogo.scrollIntoViewIfNeeded();
const aPosBefore = await arcapLogo.boundingBox();
console.log('\nARCAP bbox before hover:', JSON.stringify(aPosBefore));

const arcapCell = arcapLogo.locator('xpath=..');
await arcapCell.hover({ force: true });
await page.waitForTimeout(700);

const aPosAfter = await arcapLogo.boundingBox();
console.log('ARCAP bbox after hover:', JSON.stringify(aPosAfter));
await page.screenshot({ path: OUT('verify-arcap-hover.png') });

console.log('\n=== RESULTS ===');
const dxE = ePosAfter.x - ePosBefore.x;
const dxA = aPosAfter.x - aPosBefore.x;
console.log(`Endeavor Δx = ${dxE.toFixed(1)}px — logo moved right: ${dxE > 10}`);
console.log(`ARCAP     Δx = ${dxA.toFixed(1)}px — logo moved right: ${dxA > 10}`);

// Computed style check
const rightValueAfterHover = await page.evaluate(() => {
  const logo = document.querySelector('section[aria-labelledby="ecosystem-heading"] img[alt="Endeavor"]');
  if (!logo) return 'NOT FOUND';
  return window.getComputedStyle(logo).right;
});
console.log('\nComputed right value of Endeavor logo (hovered):', rightValueAfterHover);

await browser.close();
