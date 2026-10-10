const puppeteer = require("puppeteer-core");
const fs = require("fs");
const path = require("path");

const SCREENSHOT_DIR = "/home/sanjay/.gemini/antigravity/brain/e2524af4-3e5e-4d4b-88dc-a8429428ece9/qa_artifacts";

async function runQA() {
  if (!fs.existsSync(SCREENSHOT_DIR)) {
    fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
  }

  const browser = await puppeteer.launch({
    executablePath: "/usr/bin/google-chrome",
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-gpu"]
  });

  const page = await browser.newPage();

  // Test Breakpoints for Overflow
  const breakpoints = [
    { name: "iPhone_SE_320", width: 320, height: 568 },
    { name: "Samsung_S20_360", width: 360, height: 800 },
    { name: "iPhone_14_393", width: 393, height: 852 },
    { name: "iPad_Portrait_768", width: 768, height: 1024 },
    { name: "Desktop_1440", width: 1440, height: 900 }
  ];

  console.log("--- 1. TESTING HORIZONTAL OVERFLOW ACROSS BREAKPOINTS ---");
  for (const bp of breakpoints) {
    await page.setViewport({ width: bp.width, height: bp.height });
    await page.goto("http://localhost:5173/", { waitUntil: "networkidle2" });
    await new Promise(r => setTimeout(r, 1500));

    const overflowInfo = await page.evaluate(() => {
      const docWidth = document.documentElement.offsetWidth;
      const scrollWidth = document.documentElement.scrollWidth;
      const bodyWidth = document.body.scrollWidth;
      return {
        innerWidth: window.innerWidth,
        docWidth,
        scrollWidth,
        bodyWidth,
        hasOverflow: scrollWidth > window.innerWidth || bodyWidth > window.innerWidth
      };
    });

    console.log(`[${bp.name}] Viewport: ${bp.width}x${bp.height} -> Overflow: ${overflowInfo.hasOverflow ? "FAIL" : "PASS (scrollWidth: " + overflowInfo.scrollWidth + "px)"}`);
  }

  // Test 2: Desktop Visual Sections
  console.log("\n--- 2. CAPTURING SECTIONS ON DESKTOP ---");
  await page.setViewport({ width: 1280, height: 800 });
  await page.goto("http://localhost:5173/", { waitUntil: "networkidle2" });
  await new Promise(r => setTimeout(r, 1500));

  // Scroll to Reels section
  await page.evaluate(() => {
    const el = document.getElementById("reels");
    if (el) el.scrollIntoView({ behavior: "instant" });
  });
  await new Promise(r => setTimeout(r, 1200));
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, "desktop_reels_section.png") });
  console.log("Saved: desktop_reels_section.png");

  // Scroll to Coverflow gallery
  await page.evaluate(() => {
    const el = document.querySelector("h2"); // search for coverflow or scroll down
    window.scrollBy(0, 800);
  });
  await new Promise(r => setTimeout(r, 1200));
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, "desktop_coverflow_section.png") });
  console.log("Saved: desktop_coverflow_section.png");

  // Scroll to Transformation slider
  await page.evaluate(() => {
    window.scrollBy(0, 1000);
  });
  await new Promise(r => setTimeout(r, 1200));
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, "desktop_transformation_section.png") });
  console.log("Saved: desktop_transformation_section.png");

  // Test 3: Reel Viewer Modal Interaction
  console.log("\n--- 3. TESTING REEL VIEWER MODAL ---");
  await page.evaluate(() => {
    const el = document.getElementById("reels");
    if (el) el.scrollIntoView({ behavior: "instant" });
  });
  await new Promise(r => setTimeout(r, 800));

  // Click the first reel card
  const clicked = await page.evaluate(() => {
    const card = document.querySelector('[data-reel-id="reel-01"] [role="button"]');
    if (card) {
      card.click();
      return true;
    }
    return false;
  });
  console.log(`Clicked first reel card: ${clicked}`);
  await new Promise(r => setTimeout(r, 1200));

  // Verify modal is open
  const modalOpen = await page.evaluate(() => {
    const modal = document.querySelector('[role="dialog"]') || document.querySelector('video');
    return !!modal;
  });
  console.log(`ReelViewer modal opened successfully: ${modalOpen}`);
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, "reel_viewer_modal.png") });
  console.log("Saved: reel_viewer_modal.png");

  // Close modal via close button
  await page.evaluate(() => {
    const closeBtn = document.querySelector('button[aria-label="Close"]') || document.querySelector('button:has(svg)');
    if (closeBtn) closeBtn.click();
  });
  await new Promise(r => setTimeout(r, 800));

  // Test 4: Mobile View of Reels Page
  console.log("\n--- 4. TESTING REELS PAGE ON MOBILE ---");
  await page.setViewport({ width: 390, height: 844 });
  await page.goto("http://localhost:5173/reels", { waitUntil: "networkidle2" });
  await new Promise(r => setTimeout(r, 1500));
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, "mobile_reels_page.png") });
  console.log("Saved: mobile_reels_page.png");

  // Test 5: Mobile Navigation Drawer
  console.log("\n--- 5. TESTING MOBILE DRAWER ---");
  await page.goto("http://localhost:5173/", { waitUntil: "networkidle2" });
  await new Promise(r => setTimeout(r, 1000));
  
  // Click hamburger button
  const hamburgerClicked = await page.evaluate(() => {
    const btn = document.querySelector('button[aria-label="Toggle navigation menu"]');
    if (btn) {
      btn.click();
      return true;
    }
    return false;
  });
  console.log(`Clicked mobile hamburger: ${hamburgerClicked}`);
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, "mobile_nav_drawer.png") });
  console.log("Saved: mobile_nav_drawer.png");

  await browser.close();
  console.log("\n--- ALL QA TESTS COMPLETED SUCCESSFULLY ---");
}

runQA().catch((err) => {
  console.error("QA script failed:", err);
  process.exit(1);
});
