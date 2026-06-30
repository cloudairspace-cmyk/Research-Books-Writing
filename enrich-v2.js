/**
 * enrich-v2.js - Professional SVG diagrams + content expansion for Book 1
 * Creates visual diagrams matching the reference academic book style:
 * - Funnels, Radial hubs, Stacked bars, Quadrants, Triangles, Pyramids
 * Colors: Navy #1a3a5c, Gold #c9a227, Teal #2d6a4f, Maroon #8b3a3a
 */
const fs = require('fs');
const path = require('path');
const bookPath = path.join(__dirname, 'books', 'book-01.json');
const book = JSON.parse(fs.readFileSync(bookPath, 'utf-8'));

// ═══════════════════════════════════════════════════════
// SVG DIAGRAM TEMPLATE FUNCTIONS
// ═══════════════════════════════════════════════════════

const NAVY = '#1a3a5c';
const GOLD = '#c9a227';
const TEAL = '#2d6a4f';
const MAROON = '#8b3a3a';
const LGOLD = '#d4a843';
const CREAM = '#f8f6f1';
const DGRAY = '#1a2332';

function wrapFig(svgHtml, caption) {
  return `<div style="margin:22px 0;text-align:center;">${svgHtml}<p style="font-style:italic;color:#666;font-size:.8rem;margin-top:8px;text-align:center;">${caption}</p></div>`;
}

// --- FUNNEL (inverted pyramid, dark background) ---
function svgFunnel(title, levels) {
  const h = 50, gap = 4, startW = 360, endW = 140;
  const totalH = levels.length * (h + gap) + 80;
  const vbW = 580;
  const cx = vbW / 2;
  let shapes = '';
  levels.forEach((lv, i) => {
    const frac = i / Math.max(levels.length - 1, 1);
    const w = startW - (startW - endW) * frac;
    const nextW = startW - (startW - endW) * Math.min((i + 1) / Math.max(levels.length - 1, 1), 1);
    const x = (cx * 2 - 80 - w) / 2 + 80;
    const nx = (cx * 2 - 80 - nextW) / 2 + 80;
    const y = 60 + i * (h + gap);
    const color = i === 0 ? NAVY : i === levels.length - 1 ? TEAL : `hsl(${210 - i * 12}, 40%, ${25 + i * 4}%)`;
    shapes += `<polygon points="${x},${y} ${x + w},${y} ${nx + nextW},${y + h} ${nx},${y + h}" fill="${color}" stroke="${color}" stroke-width="0.5"/>`;
    shapes += `<text x="${x + w / 2}" y="${y + h / 2 + 5}" text-anchor="middle" fill="#fff" font-size="11" font-family="Inter,sans-serif">${lv.text}</text>`;
    shapes += `<circle cx="${x + w + 22}" cy="${y + h / 2}" r="13" fill="${GOLD}"/>`;
    shapes += `<text x="${x + w + 22}" y="${y + h / 2 + 4}" text-anchor="middle" fill="#fff" font-size="10" font-weight="700">${lv.num}</text>`;
    shapes += `<text x="${x - 14}" y="${y + h / 2 + 4}" text-anchor="end" fill="#ccc" font-size="10" font-weight="600" font-family="Inter,sans-serif">${lv.label}</text>`;
  });
  return `<div style="background:${DGRAY};border-radius:8px;padding:16px 10px 12px;margin:18px 0;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${vbW} ${totalH}" style="max-width:100%;height:auto;display:block;margin:0 auto;"><text x="${cx}" y="30" text-anchor="middle" fill="#fff" font-size="14" font-weight="700" font-family="Inter,sans-serif">${title}</text>${shapes}</svg></div>`;
}

// --- RADIAL HUB (center circle + items around it) ---
function svgRadial(title, centerText, items) {
  const n = items.length;
  const cx = 280, cy = 230, cr = 50;
  const dist = n <= 5 ? 155 : 165;
  const pillW = 170, pillH = 38;
  const vbW = 560, vbH = 440;
  let shapes = '';
  items.forEach((item, i) => {
    const angle = (i / n) * Math.PI * 2 - Math.PI / 2;
    const ix = cx + dist * Math.cos(angle);
    const iy = cy + dist * Math.sin(angle);
    shapes += `<line x1="${cx}" y1="${cy}" x2="${ix}" y2="${iy}" stroke="#999" stroke-width="1.5" stroke-dasharray="4,3"/>`;
    shapes += `<rect x="${ix - pillW/2}" y="${iy - pillH/2}" width="${pillW}" height="${pillH}" rx="${pillH/2}" fill="${NAVY}"/>`;
    shapes += `<circle cx="${ix - pillW/2 + 22}" cy="${iy}" r="13" fill="${GOLD}"/>`;
    shapes += `<text x="${ix - pillW/2 + 22}" y="${iy + 4}" text-anchor="middle" fill="#fff" font-size="10" font-weight="700">${item.num}</text>`;
    const labelX = ix + 10;
    const maxLabelW = pillW/2 - 30;
    shapes += `<text x="${labelX}" y="${iy + 4}" text-anchor="middle" fill="#fff" font-size="9.5" font-family="Inter,sans-serif"${item.text.length > 16 ? ` textLength="${maxLabelW}" lengthAdjust="spacingAndGlyphs"` : ''}>${item.text}</text>`;
  });
  shapes += `<circle cx="${cx}" cy="${cy}" r="${cr}" fill="${MAROON}" stroke="#fff" stroke-width="2"/>`;
  shapes += `<text x="${cx}" y="${cy - 6}" text-anchor="middle" fill="#fff" font-size="18" font-weight="700">!</text>`;
  const cLines = centerText.split('\\n');
  cLines.forEach((line, i) => {
    shapes += `<text x="${cx}" y="${cy + 8 + i * 13}" text-anchor="middle" fill="#fff" font-size="9" font-weight="600">${line}</text>`;
  });
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${vbW} ${vbH}" style="max-width:100%;height:auto;display:block;margin:0 auto;"><text x="${cx}" y="28" text-anchor="middle" fill="${DGRAY}" font-size="14" font-weight="700" font-family="Inter,sans-serif">${title}</text>${shapes}</svg>`;
}

// --- STACKED HORIZONTAL BARS ---
function svgBars(title, subtitle, categories, legend) {
  const barH = 38, gap = 12, startY = 70;
  const totalH = startY + categories.length * (barH + gap) + 60;
  const vbW = 540;
  const barX = 170, barW = 300;
  const midX = barX + barW / 2;
  let shapes = `<text x="${midX}" y="24" text-anchor="middle" fill="${DGRAY}" font-size="14" font-weight="700" font-family="Inter,sans-serif">${title}</text>`;
  if (subtitle) shapes += `<text x="${midX}" y="44" text-anchor="middle" fill="#666" font-size="11" font-style="italic" font-family="Inter,sans-serif">${subtitle}</text>`;
  categories.forEach((cat, i) => {
    const y = startY + i * (barH + gap);
    shapes += `<text x="${barX - 16}" y="${y + barH / 2 + 5}" text-anchor="end" fill="${DGRAY}" font-size="11" font-weight="600" font-family="Inter,sans-serif">${cat.label}</text>`;
    let bx = barX;
    cat.segments.forEach(seg => {
      const w = barW * seg.pct / 100;
      shapes += `<rect x="${bx}" y="${y}" width="${w}" height="${barH}" fill="${seg.color}" rx="3"/>`;
      if (w > 30) shapes += `<text x="${bx + w / 2}" y="${y + barH / 2 + 5}" text-anchor="middle" fill="#fff" font-size="11" font-weight="600">${seg.pct}%</text>`;
      bx += w;
    });
  });
  if (legend) {
    const ly = totalH - 30;
    const legendStartX = barX + (barW - legend.length * 120) / 2;
    legend.forEach((l, i) => {
      const lx = legendStartX + i * 120;
      shapes += `<rect x="${lx}" y="${ly}" width="14" height="14" fill="${l.color}" rx="2"/>`;
      shapes += `<text x="${lx + 20}" y="${ly + 12}" fill="${DGRAY}" font-size="11" font-family="Inter,sans-serif">${l.text}</text>`;
    });
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${vbW} ${totalH}" style="max-width:100%;height:auto;display:block;margin:0 auto;">${shapes}</svg>`;
}

// --- QUADRANT (2x2 grid with axis labels) ---
function svgQuadrant(title, axes, quads) {
  const vbW = 540, vbH = 380;
  const qW = 170, qH = 125;
  const midX = vbW / 2;
  let s = `<text x="${midX}" y="28" text-anchor="middle" fill="${DGRAY}" font-size="14" font-weight="700" font-family="Inter,sans-serif">${title}</text>`;
  s += `<text x="${midX}" y="54" text-anchor="middle" fill="${GOLD}" font-size="10" font-weight="700" letter-spacing="2" font-family="Inter,sans-serif">${axes.top}</text>`;
  s += `<text x="${midX}" y="${vbH - 20}" text-anchor="middle" fill="${GOLD}" font-size="10" font-weight="700" letter-spacing="2" font-family="Inter,sans-serif">${axes.bottom}</text>`;
  s += `<text x="55" y="${70 + qH}" text-anchor="middle" fill="${DGRAY}" font-size="10" font-weight="700" font-family="Inter,sans-serif">${axes.left}</text>`;
  s += `<text x="${vbW - 55}" y="${70 + qH}" text-anchor="middle" fill="${DGRAY}" font-size="10" font-weight="700" font-family="Inter,sans-serif">${axes.right}</text>`;
  const gapX = 10, gapY = 10;
  const startX = midX - qW - gapX / 2;
  const startY = 70;
  const positions = [[startX, startY], [startX + qW + gapX, startY], [startX, startY + qH + gapY], [startX + qW + gapX, startY + qH + gapY]];
  quads.forEach((q, i) => {
    const [x, y] = positions[i];
    s += `<rect x="${x}" y="${y}" width="${qW}" height="${qH}" rx="6" fill="${q.color}"/>`;
    s += `<text x="${x + qW/2}" y="${y + 38}" text-anchor="middle" fill="#fff" font-size="12" font-weight="700" font-family="Inter,sans-serif">${q.title}</text>`;
    const lines = q.desc.split('\\n');
    lines.forEach((line, li) => {
      s += `<text x="${x + qW/2}" y="${y + 58 + li * 16}" text-anchor="middle" fill="rgba(255,255,255,0.85)" font-size="9.5" font-style="italic" font-family="Inter,sans-serif"${line.length > 22 ? ` textLength="${qW - 20}" lengthAdjust="spacingAndGlyphs"` : ''}>${line}</text>`;
    });
  });
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${vbW} ${vbH}" style="max-width:100%;height:auto;display:block;margin:0 auto;">${s}</svg>`;
}

// --- TRIANGLE with circles at vertices ---
function svgTriangle(title, verts, edges) {
  const vbW = 540, vbH = 400;
  const pts = [[vbW/2, 90], [90, 340], [vbW - 90, 340]];
  const r = 46;
  let s = `<text x="${vbW/2}" y="30" text-anchor="middle" fill="${DGRAY}" font-size="14" font-weight="700" font-family="Inter,sans-serif">${title}</text>`;
  s += `<line x1="${pts[0][0]}" y1="${pts[0][1]}" x2="${pts[1][0]}" y2="${pts[1][1]}" stroke="#bbb" stroke-width="1.5"/>`;
  s += `<line x1="${pts[0][0]}" y1="${pts[0][1]}" x2="${pts[2][0]}" y2="${pts[2][1]}" stroke="#bbb" stroke-width="1.5"/>`;
  s += `<line x1="${pts[1][0]}" y1="${pts[1][1]}" x2="${pts[2][0]}" y2="${pts[2][1]}" stroke="#bbb" stroke-width="1.5"/>`;
  if (edges && edges.length === 3) {
    const eMids = [[(pts[0][0]+pts[1][0])/2-40,(pts[0][1]+pts[1][1])/2], [(pts[0][0]+pts[2][0])/2+40,(pts[0][1]+pts[2][1])/2], [(pts[1][0]+pts[2][0])/2,(pts[1][1]+pts[2][1])/2+22]];
    edges.forEach((e, i) => {
      s += `<text x="${eMids[i][0]}" y="${eMids[i][1]}" text-anchor="middle" fill="#777" font-size="9.5" font-style="italic" font-family="Inter,sans-serif">${e}</text>`;
    });
  }
  verts.forEach((v, i) => {
    const [x, y] = pts[i];
    s += `<circle cx="${x}" cy="${y}" r="${r}" fill="${v.color || NAVY}" stroke="#fff" stroke-width="2"/>`;
    s += `<text x="${x}" y="${y - 5}" text-anchor="middle" fill="#fff" font-size="10.5" font-weight="700" font-family="Inter,sans-serif"${v.label.length > 12 ? ` textLength="${r*2 - 14}" lengthAdjust="spacingAndGlyphs"` : ''}>${v.label}</text>`;
    if (v.sub) s += `<text x="${x}" y="${y + 12}" text-anchor="middle" fill="rgba(255,255,255,0.8)" font-size="8.5" font-style="italic" font-family="Inter,sans-serif">${v.sub}</text>`;
  });
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${vbW} ${vbH}" style="max-width:100%;height:auto;display:block;margin:0 auto;">${s}</svg>`;
}

// --- PYRAMID (stacked layers, widest at bottom) ---
function svgPyramid(title, levels) {
  const n = levels.length, layerH = 42, gap = 3;
  const totalH = n * (layerH + gap) + 70;
  const vbW = 540;
  const topW = 100, botW = 460;
  const midX = vbW / 2;
  let s = `<text x="${midX}" y="28" text-anchor="middle" fill="${DGRAY}" font-size="14" font-weight="700" font-family="Inter,sans-serif">${title}</text>`;
  levels.forEach((lv, i) => {
    const frac = i / Math.max(n - 1, 1);
    const w = topW + (botW - topW) * frac;
    const x = (vbW - w) / 2;
    const y = 50 + i * (layerH + gap);
    const color = lv.color || (i === 0 ? GOLD : i < 3 ? NAVY : TEAL);
    s += `<rect x="${x}" y="${y}" width="${w}" height="${layerH}" rx="4" fill="${color}"/>`;
    const maxTextW = w - 30;
    s += `<text x="${midX}" y="${y + layerH / 2 + 4}" text-anchor="middle" fill="#fff" font-size="10.5" font-weight="600" font-family="Inter,sans-serif"${lv.text.length > 30 ? ` textLength="${maxTextW}" lengthAdjust="spacingAndGlyphs"` : ''}>${lv.text}</text>`;
    if (lv.num) {
      s += `<text x="${x + w - 16}" y="${y + layerH / 2 + 4}" text-anchor="middle" fill="rgba(255,255,255,0.6)" font-size="10" font-weight="700">${lv.num}</text>`;
    }
  });
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${vbW} ${totalH}" style="max-width:100%;height:auto;display:block;margin:0 auto;">${s}</svg>`;
}

// --- PROCESS FLOW (horizontal steps with arrows) ---
function svgFlow(title, steps) {
  const stepW = 95, stepH = 54, arrowW = 28;
  const totalW = steps.length * stepW + (steps.length - 1) * arrowW + 40;
  const vb = Math.max(totalW, 500);
  let s = `<text x="${vb/2}" y="25" text-anchor="middle" fill="${DGRAY}" font-size="13" font-weight="700" font-family="Inter,sans-serif">${title}</text>`;
  steps.forEach((st, i) => {
    const x = 20 + i * (stepW + arrowW);
    const y = 45;
    const color = st.color || (i % 2 === 0 ? NAVY : GOLD);
    s += `<rect x="${x}" y="${y}" width="${stepW}" height="${stepH}" rx="6" fill="${color}"/>`;
    s += `<text x="${x + stepW / 2}" y="${y + 20}" text-anchor="middle" fill="#fff" font-size="9" font-weight="700" font-family="Inter,sans-serif">${st.num || (i + 1)}</text>`;
    s += `<text x="${x + stepW / 2}" y="${y + 37}" text-anchor="middle" fill="rgba(255,255,255,0.9)" font-size="8.5" font-family="Inter,sans-serif"${st.text.length > 12 ? ` textLength="${stepW - 12}" lengthAdjust="spacingAndGlyphs"` : ''}>${st.text}</text>`;
    if (i < steps.length - 1) {
      const ax = x + stepW + 2;
      s += `<polygon points="${ax + 4},${y + stepH / 2 - 8} ${ax + arrowW - 4},${y + stepH / 2} ${ax + 4},${y + stepH / 2 + 8}" fill="${GOLD}"/>`;
    }
  });
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${vb} 115" style="max-width:100%;height:auto;display:block;margin:0 auto;">${s}</svg>`;
}

// --- COMPARISON (side by side boxes) ---
function svgCompare(title, left, right) {
  const vbW = 540;
  const boxW = 220, boxGap = 60;
  const boxStartX = (vbW - boxW * 2 - boxGap) / 2;
  const maxItems = Math.max(left.items.length, right.items.length);
  const boxH = Math.max(180, 90 + maxItems * 22);
  const vbH = boxH + 70;
  const lx = boxStartX, rx = boxStartX + boxW + boxGap;
  const lcx = lx + boxW / 2, rcx = rx + boxW / 2;
  const midX = vbW / 2;
  let s = `<text x="${midX}" y="28" text-anchor="middle" fill="${DGRAY}" font-size="14" font-weight="700" font-family="Inter,sans-serif">${title}</text>`;
  // Left box
  s += `<rect x="${lx}" y="50" width="${boxW}" height="${boxH}" rx="8" fill="${NAVY}"/>`;
  s += `<text x="${lcx}" y="78" text-anchor="middle" fill="#fff" font-size="12" font-weight="700" font-family="Inter,sans-serif">${left.title}</text>`;
  s += `<line x1="${lx + 20}" y1="90" x2="${lx + boxW - 20}" y2="90" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>`;
  left.items.forEach((item, i) => {
    s += `<text x="${lcx}" y="${112 + i * 22}" text-anchor="middle" fill="rgba(255,255,255,0.85)" font-size="9.5" font-family="Inter,sans-serif"${item.length > 28 ? ` textLength="${boxW - 30}" lengthAdjust="spacingAndGlyphs"` : ''}>${item}</text>`;
  });
  // VS circle
  s += `<circle cx="${midX}" cy="${50 + boxH / 2}" r="18" fill="${GOLD}"/>`;
  s += `<text x="${midX}" y="${54 + boxH / 2}" text-anchor="middle" fill="#fff" font-size="10" font-weight="700">VS</text>`;
  // Right box
  s += `<rect x="${rx}" y="50" width="${boxW}" height="${boxH}" rx="8" fill="${TEAL}"/>`;
  s += `<text x="${rcx}" y="78" text-anchor="middle" fill="#fff" font-size="12" font-weight="700" font-family="Inter,sans-serif">${right.title}</text>`;
  s += `<line x1="${rx + 20}" y1="90" x2="${rx + boxW - 20}" y2="90" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>`;
  right.items.forEach((item, i) => {
    s += `<text x="${rcx}" y="${112 + i * 22}" text-anchor="middle" fill="rgba(255,255,255,0.85)" font-size="9.5" font-family="Inter,sans-serif"${item.length > 28 ? ` textLength="${boxW - 30}" lengthAdjust="spacingAndGlyphs"` : ''}>${item}</text>`;
  });
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${vbW} ${vbH}" style="max-width:100%;height:auto;display:block;margin:0 auto;">${s}</svg>`;
}

// ═══════════════════════════════════════════════════════
// HELPER: Insert content after a heading match
// ═══════════════════════════════════════════════════════
function insertAfter(content, headingText, html) {
  const escaped = headingText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(<h2[^>]*>[^<]*${escaped}[^<]*<\\/h2>)`, 'i');
  if (!regex.test(content)) { console.log('  WARNING: heading not found: ' + headingText); return content; }
  return content.replace(regex, `$1${html}`);
}

function insertBefore(content, headingText, html) {
  const escaped = headingText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(<h2[^>]*>[^<]*${escaped}[^<]*<\\/h2>)`, 'i');
  if (!regex.test(content)) return content;
  return content.replace(regex, `${html}$1`);
}

function appendToChapter(content, html) {
  return content + html;
}

// Remove old div-based diagrams
function removeOldDiagrams(content) {
  return content.replace(/<div class="diagram-container">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/g, '');
}

// ═══════════════════════════════════════════════════════
// EXPANDED CONTENT + SVG DIAGRAMS PER CHAPTER
// ═══════════════════════════════════════════════════════

function enrichChapter(idx) {
  let ch = book.chapters[idx].content;
  ch = removeOldDiagrams(ch);
  const ci = idx + 1;

  switch(ci) {

  // ============================================================
  // CHAPTER 1: What It Really Means to Think Like a Researcher
  // ============================================================
  case 1:
    ch = insertAfter(ch, '1.1 The Researcher', `
<p>Research thinking is not a talent you are born with. It is a discipline you develop through deliberate practice, repeated exposure to scholarly work, and a willingness to sit with uncertainty. Many students enter graduate programmes believing that intelligence alone will carry them through. They quickly discover that raw intelligence, without the structured habits of research thinking, is insufficient.</p>
<p>Consider the difference between a tourist and a geographer visiting the same landscape. The tourist sees beauty; the geographer sees tectonic forces, erosion patterns, and settlement logic. Both are looking at the same thing, but one has been trained to see beneath the surface. Research thinking works the same way: it transforms how you perceive information, arguments, and evidence in every domain of knowledge.</p>
<p>The journey from consumer of knowledge to producer of knowledge is one of the most significant intellectual transitions a person can make. It requires not just learning new skills, but fundamentally changing how you relate to information itself.</p>
`);
    ch = insertAfter(ch, '1.2 Everyday Thinking vs', `
<p>Everyday thinking is fast, intuitive, and shaped by personal experience. It serves us well in daily life - deciding what to eat, choosing a route to work, interpreting a friend's mood. But when we apply everyday thinking to complex problems, we often reach conclusions that feel right but are not supported by evidence.</p>
<p>Research thinking, by contrast, is slow, systematic, and governed by rules of evidence. It requires you to question your first instincts, seek out disconfirming evidence, and accept that your initial hypothesis may be wrong. This is profoundly uncomfortable for most people, because it means living with uncertainty rather than rushing to closure.</p>
${wrapFig(svgCompare('EVERYDAY THINKING vs. RESEARCH THINKING',
  { title: 'EVERYDAY THINKING', items: ['Fast and intuitive', 'Based on personal experience', 'Seeks confirmation', 'Avoids complexity', 'Values certainty'] },
  { title: 'RESEARCH THINKING', items: ['Slow and deliberate', 'Based on systematic evidence', 'Seeks disconfirmation', 'Embraces complexity', 'Tolerates uncertainty'] }
), 'Figure 1.1 The fundamental differences between everyday thinking and research thinking.')}
<p>A useful analogy comes from the legal system. In everyday life, we might say "I know he did it" based on a gut feeling. In a court of law, that feeling counts for nothing. You need admissible evidence, cross-examination, and logical argumentation. Research operates by similar rules: claims must be supported, methods must be transparent, and conclusions must be proportionate to the evidence.</p>
<p>Understanding this distinction is not merely academic. Professionals in every field - medicine, engineering, education, business - make better decisions when they apply research thinking rather than relying solely on intuition or tradition. The surgeon who reads the latest clinical trials makes different decisions from the surgeon who relies only on what they learned in medical school twenty years ago.</p>
`);
    ch = insertAfter(ch, '1.3 The Core Habits', `
<p>Research habits are not acquired through reading about them. They are developed through practice, reflection, and - critically - through making mistakes and learning from them. Each of the five core habits reinforces the others, creating a virtuous cycle of intellectual growth.</p>
${wrapFig(svgRadial('THE FIVE CORE HABITS OF THE RESEARCH MIND', 'RESEARCH\\nMIND', [
  { num: 1, text: 'Intellectual Curiosity' },
  { num: 2, text: 'Systematic Doubt' },
  { num: 3, text: 'Tolerance for Ambiguity' },
  { num: 4, text: 'Precision in Language' },
  { num: 5, text: 'Evidence Commitment' }
]), 'Figure 1.2 The five core habits of the research mind. Each habit reinforces the others.')}
<p>Intellectual curiosity is the engine of research. Without it, the long months of reading, data collection, and writing become unbearable. But scholarly curiosity is different from casual curiosity. It is disciplined, focused, and oriented toward questions that matter to a field of knowledge. The curious researcher does not simply ask "I wonder why?" - they ask "What would I need to investigate to find out, and would the answer advance our understanding?"</p>
<p>Systematic doubt - sometimes called scepticism - is the researcher's most valuable tool. It does not mean cynicism or negativity. It means refusing to accept a claim until you have examined the evidence supporting it. This includes your own claims. The best researchers are their own harshest critics, because they know that finding flaws in their own work is far preferable to having those flaws discovered by others after publication.</p>
<p>Tolerance for ambiguity may be the most difficult habit to develop. Human beings are naturally drawn to certainty. We want clear answers, definitive conclusions, and neat categories. Research, however, frequently reveals that reality is more complex than our categories suggest. The ability to hold multiple competing explanations in mind simultaneously, without prematurely choosing one, is a hallmark of mature scholarship.</p>
<p>Precision in language is not about using long words or complex sentences. It is about saying exactly what you mean, no more and no less. Every word in academic writing carries weight. The difference between "X causes Y" and "X is associated with Y" is enormous, and confusing the two can undermine an entire argument.</p>
`);
    ch = insertAfter(ch, '1.4 Producing Knowledge', `
<p>The shift from knowledge consumer to knowledge producer represents a fundamental change in your relationship with information. As a consumer, you receive knowledge passively: you read, you memorise, you reproduce. As a producer, you actively create new knowledge: you formulate questions, design investigations, collect and analyse data, and contribute original insights to your field.</p>
${wrapFig(svgBars('THE KNOWLEDGE SHIFT', 'How your role changes as you develop as a researcher', [
  { label: 'Undergraduate', segments: [{ pct: 85, color: NAVY, text: '' }, { pct: 15, color: GOLD, text: '' }] },
  { label: 'Masters', segments: [{ pct: 60, color: NAVY, text: '' }, { pct: 40, color: GOLD, text: '' }] },
  { label: 'Doctoral', segments: [{ pct: 30, color: NAVY, text: '' }, { pct: 70, color: GOLD, text: '' }] },
  { label: 'Post-Doc', segments: [{ pct: 15, color: NAVY, text: '' }, { pct: 85, color: GOLD, text: '' }] }
], [{ color: NAVY, text: 'Consuming' }, { color: GOLD, text: 'Producing' }]),
'Figure 1.3 The reading-writing ratio shifts across the research career.')}
<p>This transition does not happen overnight. At the undergraduate level, you spend most of your time consuming - reading textbooks, attending lectures, absorbing established knowledge. At the masters level, the balance begins to shift: you still consume heavily, but you also begin to evaluate, critique, and synthesise what you read. At the doctoral level, the balance tips decisively toward production: you are expected to generate original knowledge that did not exist before.</p>
<p>Many students find this transition frightening. "Who am I to create new knowledge?" they ask. "Surely everything important has already been discovered?" This imposter syndrome is almost universal among early-career researchers, and it is important to recognise it for what it is: a natural response to stepping into a new and unfamiliar role, not an accurate reflection of your capabilities.</p>
`);
    ch = insertAfter(ch, '1.5 Why Research Thinking', `
<p>The skills of research thinking extend far beyond the university. In a world increasingly saturated with information, misinformation, and competing claims, the ability to evaluate evidence, identify bias, and construct sound arguments is invaluable in every professional context.</p>
<p>Consider the policy analyst who must evaluate conflicting studies on a social programme. Or the business executive who must decide whether to invest in a new technology based on incomplete market data. Or the healthcare professional who must weigh the risks and benefits of a new treatment. All of these situations demand the same fundamental skills: critical evaluation of evidence, logical reasoning, and the intellectual honesty to acknowledge what we do not know.</p>
<p>Research thinking also protects you from manipulation. When a politician cites a single study to support their position, the research-trained mind asks: "What does the broader evidence base say? Was that study well-designed? Are there conflicting findings?" These are not just academic questions - they are the questions that informed citizens need to ask in a democratic society.</p>
`);
    break;

  // ============================================================
  // CHAPTER 2: Curiosity as a Scholarly Discipline
  // ============================================================
  case 2:
    ch = insertAfter(ch, '2.1 The Nature of Scholarly', `
<p>Scholarly curiosity is different from casual curiosity in several important ways. Casual curiosity is sparked by novelty and fades quickly. You might wonder why the sky is blue, look it up on your phone, and move on. Scholarly curiosity is sustained, systematic, and ultimately productive - it leads somewhere. It drives you to spend months or even years investigating a question, not because you need a quick answer, but because you believe the answer will advance human understanding.</p>
<p>The most productive scholars are those who have learned to cultivate their curiosity deliberately. They do not wait for inspiration to strike. Instead, they create conditions that nurture curiosity: they read widely across disciplines, they attend seminars outside their immediate field, they maintain research journals where they record interesting questions and observations. Over time, patterns emerge from these notes, and viable research projects take shape.</p>
<p>There is an important distinction between curiosity about facts and curiosity about relationships. Factual curiosity asks "What?" - What is the unemployment rate? What percentage of students drop out? Relational curiosity asks "Why?" and "How?" - Why do some students persist while others drop out? How does family background interact with institutional support to affect completion rates? It is relational curiosity that drives the most valuable research.</p>
`);
    ch = insertAfter(ch, '2.2 From Casual Interest', `
${wrapFig(svgFunnel('FROM CURIOSITY TO RESEARCH QUESTION', [
  { label: 'Broad Interest', text: 'Digital technology', num: 1 },
  { label: 'General Topic', text: 'Tech in education', num: 2 },
  { label: 'Specific Area', text: 'Mobile learning apps', num: 3 },
  { label: 'Population', text: 'University undergraduates', num: 4 },
  { label: 'Relationship', text: 'App usage vs academic performance', num: 5 },
  { label: 'Question', text: 'Research Question', num: 6 }
]), 'Figure 2.1 The narrowing funnel from broad interest to focused research question.')}
<p>The journey from casual interest to researchable question typically involves several stages of refinement. At each stage, you narrow your focus, clarify your concepts, and sharpen your thinking. This process is rarely linear - you will often need to cycle back to earlier stages as you learn more about your topic.</p>
<p>The key to successful narrowing is literature immersion. By reading what other researchers have already discovered about your topic, you learn what questions have been answered, what methods have been used, and - crucially - what gaps remain. These gaps become the fertile ground for your own research contribution.</p>
<p>Many beginning researchers make the mistake of trying to narrow their topic through pure thinking, without engaging with the literature. This almost always leads to frustration, because you cannot know what is already known without reading what has already been written. The literature is not just background reading - it is the essential tool for identifying where your contribution can best be made.</p>
`);
    ch = insertAfter(ch, '2.3 Cultivating Curiosity', `
<p>Curiosity can be systematically cultivated through several practical strategies. These are not vague suggestions - they are concrete techniques that successful researchers use daily to maintain and develop their intellectual engagement with their fields.</p>
${wrapFig(svgFlow('CURIOSITY CULTIVATION CYCLE', [
  { text: 'Read Widely', color: NAVY },
  { text: 'Question', color: GOLD },
  { text: 'Note Ideas', color: NAVY },
  { text: 'Explore', color: GOLD },
  { text: 'Refine', color: TEAL }
]), 'Figure 2.2 The curiosity cultivation cycle - a continuous process of reading, questioning, and refining.')}
<p>The first strategy is wide reading. Read outside your immediate discipline. A sociologist who reads neuroscience may discover unexpected connections between social behaviour and brain function. An economist who reads history may find that current market patterns echo those of previous centuries. Cross-disciplinary reading is one of the most reliable sources of original research ideas.</p>
<p>The second strategy is systematic questioning. Train yourself to ask "why" and "how" about phenomena that others take for granted. Why do some teams perform better than others? How do children learn to distinguish between reliable and unreliable sources of information? These everyday observations, when subjected to systematic inquiry, can generate significant research contributions.</p>
<p>The third strategy is maintaining a research journal. This is not a diary - it is a structured record of your observations, questions, and emerging ideas. Many of the most important scientific discoveries began as brief notes in a researcher's journal. The act of writing down a question forces you to articulate it clearly, and reviewing your journal periodically reveals patterns and connections that you might otherwise have missed.</p>
`);
    ch = insertAfter(ch, '2.4 The Relationship Between', `
<p>The relationship between curiosity and expertise is paradoxical. You might expect that as you learn more about a subject, your curiosity would diminish - after all, you already know so much. But the opposite is true. The more you learn, the more you discover how much you do not know, and the more questions you have. This is sometimes called the "expanding horizon of ignorance" - as the island of your knowledge grows, so does the shoreline of your awareness of what remains unknown.</p>
<p>This paradox has practical implications for your development as a researcher. It means that the feeling of being overwhelmed by how much you do not know is actually a sign of progress, not a sign of failure. The beginner thinks they understand a topic after reading five papers. The expert, who has read five hundred papers, knows how complex the topic truly is and how many important questions remain unanswered.</p>
<p>It also means that expertise creates, rather than exhausts, research opportunities. The more you know about a field, the better positioned you are to identify genuinely original questions, because you understand not just what has been studied, but how it has been studied, what assumptions have been made, and where those assumptions might be wrong.</p>
`);
    break;

  // ============================================================
  // CHAPTER 3: Moving from Opinion to Evidence-Based Reasoning
  // ============================================================
  case 3:
    ch = insertAfter(ch, '3.1 The Problem with Opinion', `
<p>Everyone has opinions. They are easy to form, comfortable to hold, and difficult to abandon. In everyday life, opinions serve a useful purpose - they allow us to navigate the world without investigating every claim from first principles. But in research, opinions are dangerous precisely because they feel so convincing. They can masquerade as knowledge, leading us to accept claims that have not been adequately tested.</p>
<p>The difference between opinion and evidence-based reasoning is not about intelligence or sincerity. A person can hold an opinion with great conviction and complete sincerity, and still be wrong. The history of science is littered with examples of strongly held beliefs that were contradicted by evidence: that the Earth was at the centre of the universe, that disease was caused by bad air, that intelligence was determined by skull shape. In every case, the people holding these beliefs were not stupid - they simply had not subjected their beliefs to systematic empirical testing.</p>
<p>In academic research, the standard for accepting a claim is not "Does it seem reasonable?" or "Do I agree with it?" The standard is "What evidence supports this claim, and is that evidence sufficient, relevant, and credible?" This is a much higher bar, and meeting it requires both discipline and humility.</p>
`);
    ch = insertAfter(ch, '3.2 What Counts as Evidence', `
<p>Not all evidence is created equal. A hierarchy of evidence has been developed to help researchers evaluate the relative strength of different types of evidence. Understanding this hierarchy is essential for building arguments that will withstand scholarly scrutiny.</p>
${wrapFig(svgPyramid('THE EVIDENCE HIERARCHY', [
  { text: 'Systematic Reviews & Meta-analyses', color: GOLD, num: '1' },
  { text: 'Randomised Controlled Trials (RCTs)', color: NAVY, num: '2' },
  { text: 'Cohort and Case-Control Studies', color: NAVY, num: '3' },
  { text: 'Cross-Sectional Studies', color: '#2a5070', num: '4' },
  { text: 'Case Reports and Case Series', color: TEAL, num: '5' },
  { text: 'Expert Opinion and Anecdotal Evidence', color: '#5a7a6a', num: '6' }
]), 'Figure 3.1 The evidence hierarchy. Higher levels represent stronger forms of evidence.')}
<p>At the top of the hierarchy sit systematic reviews and meta-analyses, which synthesise findings from multiple studies to produce a comprehensive and statistically robust conclusion. Below these are randomised controlled trials (RCTs), which are considered the gold standard for establishing causal relationships because they control for confounding variables through random assignment.</p>
<p>As we move down the hierarchy, the evidence becomes progressively weaker. Cohort studies and case-control studies can identify associations but cannot definitively establish causation. Cross-sectional studies provide snapshots but cannot capture change over time. Case reports offer rich detail but cannot be generalised. And expert opinion, while valuable, is the weakest form of evidence because it reflects individual judgment rather than systematic investigation.</p>
<p>It is important to note that this hierarchy is not absolute. In some fields - particularly qualitative research - different criteria for evaluating evidence apply. The hierarchy is most directly applicable to quantitative research in health and social sciences, but the underlying principle - that some forms of evidence are more reliable than others - applies across all disciplines.</p>
`);
    ch = insertAfter(ch, '3.3 Building Evidence-Based', `
<p>Building an evidence-based argument is a skill that improves with practice. It involves four key steps, each of which requires careful attention and intellectual honesty.</p>
${wrapFig(svgFlow('BUILDING AN EVIDENCE-BASED ARGUMENT', [
  { text: 'Identify', color: NAVY },
  { text: 'Evaluate', color: GOLD },
  { text: 'Integrate', color: NAVY },
  { text: 'Conclude', color: TEAL }
]), 'Figure 3.2 The four steps of building an evidence-based argument.')}
<p>First, you must identify the relevant evidence. This means conducting a thorough literature search, using multiple databases, and following citation trails to ensure you have not missed important studies. It also means looking for evidence that challenges your position, not just evidence that supports it.</p>
<p>Second, you must evaluate the quality of the evidence you have found. Is the methodology sound? Are the sample sizes adequate? Have the results been replicated? Are there any conflicts of interest? This evaluation should be systematic and honest - it is tempting to be more critical of studies that contradict your position than of studies that support it, but this selective scepticism is itself a form of bias.</p>
<p>Third, you must integrate the evidence into a coherent narrative. This is where synthesis skills become essential. You are not simply listing studies in sequence; you are weaving them together to build a case, noting where they agree, where they disagree, and what patterns emerge from the body of evidence as a whole.</p>
<p>Finally, you must draw conclusions that are proportionate to the evidence. Overstating your conclusions - claiming more certainty than the evidence warrants - is one of the most common and most damaging errors in academic writing. Use appropriate hedging language: "The evidence suggests..." rather than "The evidence proves..." This is not weakness; it is intellectual honesty.</p>
`);
    break;

  // ============================================================
  // CHAPTER 4: Critical vs Academic Thinking
  // ============================================================
  case 4:
    ch = insertAfter(ch, '4.1 Critical Thinking', `
<p>Critical thinking is widely taught and widely valued. It involves analysing arguments, identifying assumptions, evaluating evidence, and drawing logical conclusions. These are essential skills, and no researcher can succeed without them. But critical thinking alone is not sufficient for academic research.</p>
<p>The reason is that critical thinking, as typically taught, focuses on evaluating existing arguments. It teaches you to spot logical fallacies, identify weak evidence, and recognise persuasive techniques. These are defensive skills - they protect you from being misled. But academic research requires you to go further: you must not only evaluate the work of others, but also construct original arguments, design investigations, and contribute new knowledge to your field.</p>
<p>Think of critical thinking as the foundation of a building. It is essential, but a foundation alone is not a building. You need the superstructure of academic thinking - methodological literacy, theoretical awareness, and scholarly engagement - to create something that stands on its own.</p>
`);
    ch = insertAfter(ch, '4.2 The Specific Demands', `
${wrapFig(svgTriangle('THE THREE PILLARS OF ACADEMIC THINKING',
  [
    { label: 'SCHOLARLY', sub: 'Engagement', color: NAVY },
    { label: 'METHODOLOGICAL', sub: 'Literacy', color: GOLD },
    { label: 'THEORETICAL', sub: 'Awareness', color: TEAL }
  ],
  ['Reading & synthesis', 'Design & analysis', 'Frameworks & models']
), 'Figure 4.1 The three pillars of academic thinking. Each pillar supports and strengthens the others.')}
<p>Scholarly engagement means more than reading articles. It means entering into a conversation with other researchers - understanding their arguments, identifying their contributions, evaluating their evidence, and positioning your own work in relation to theirs. This requires not just comprehension but active intellectual engagement: you must read with questions in mind, not just to absorb information.</p>
<p>Methodological literacy means understanding how knowledge is produced. This includes knowledge of research designs (experimental, quasi-experimental, observational, qualitative), data collection methods (surveys, interviews, observations, archival analysis), and analytical techniques (statistical analysis, thematic analysis, discourse analysis). You do not need to master every method, but you must understand enough to evaluate the methods used by others and to select appropriate methods for your own research.</p>
<p>Theoretical awareness means understanding the conceptual frameworks that shape how we interpret data. Every piece of research is guided, whether explicitly or implicitly, by theoretical assumptions. A study of classroom behaviour will produce different findings depending on whether it is framed through a behaviourist lens, a constructivist lens, or a critical theory lens. Understanding these frameworks allows you to make informed choices about your own theoretical positioning and to understand why different researchers studying the same phenomenon may reach different conclusions.</p>
`);
    ch = insertAfter(ch, '4.3 Higher-Order Thinking', `
<p>The most sophisticated academic thinking operates at the upper levels of Bloom's revised taxonomy: analysing, evaluating, and creating. These are the cognitive operations that distinguish a mature researcher from a beginning student.</p>
${wrapFig(svgPyramid("BLOOM'S TAXONOMY IN RESEARCH", [
  { text: 'CREATING - Propose new frameworks', color: GOLD, num: '6' },
  { text: 'EVALUATING - Judge theories and evidence', color: NAVY, num: '5' },
  { text: 'ANALYSING - Compare, contrast, deconstruct', color: NAVY, num: '4' },
  { text: 'APPLYING - Use methods in new contexts', color: '#2a5070', num: '3' },
  { text: 'UNDERSTANDING - Explain in your own words', color: TEAL, num: '2' },
  { text: 'REMEMBERING - Recall facts and definitions', color: '#5a7a6a', num: '1' }
]), 'Figure 4.2 Bloom\'s revised taxonomy applied to research thinking.')}
<p>At the analysis level, you decompose arguments into their component parts and examine how those parts relate to each other. You compare different theoretical perspectives, identify underlying assumptions, and evaluate the logical structure of arguments. This is where you move beyond simply understanding what a researcher has said to understanding why they said it and how well their argument holds together.</p>
<p>At the evaluation level, you make informed judgements about the quality and significance of research. Is this study well-designed? Are its conclusions warranted? Does it make a meaningful contribution to the field? These judgements require not just analytical skills but also deep knowledge of the field and its standards.</p>
<p>At the creation level - the highest level - you generate something new. This might be a new theoretical framework, a new methodology, a new synthesis of existing findings, or a new empirical investigation. This is the level at which doctoral research operates, and it is the level that distinguishes original scholarship from competent summary.</p>
`);
    ch = insertAfter(ch, '4.4 Strengthening Your', `
<p>Academic thinking, like any skill, improves with deliberate practice. There are several strategies you can use to strengthen your thinking muscles and develop the habits of mind that characterise successful researchers.</p>
<p>First, practice reading critically. When you read a research paper, do not just absorb the findings. Ask yourself: What is the research question? Why does it matter? What methods were used? Are they appropriate? What are the limitations? Do the conclusions follow from the evidence? How does this study relate to others in the field? These questions should become automatic - a habitual lens through which you view all scholarly work.</p>
<p>Second, practice writing analytically. Do not simply summarise what you have read. Instead, compare, contrast, critique, and synthesise. Write paragraphs that begin with your own analytical claim, supported by evidence from multiple sources. This is the fundamental structure of academic argument, and mastering it transforms your writing from description to analysis.</p>
<p>Third, engage in scholarly discussion. Present your work to peers, attend seminars, participate in journal clubs. The ability to articulate and defend your ideas in real time is an essential academic skill, and it develops only through practice. Do not wait until you feel confident - confidence comes from doing, not from waiting.</p>
`);
    break;

  // ============================================================
  // CHAPTER 5: What Makes a Research Question Worth Asking
  // ============================================================
  case 5:
    ch = insertAfter(ch, '5.1 The Research Question', `
<p>If research were a journey, the research question would be your compass. It determines your direction, guides your decisions, and keeps you on course when the landscape becomes confusing. A clear, well-crafted research question is the single most important element of any research project, because every subsequent decision - your methodology, your data collection, your analysis, your conclusions - flows from it.</p>
<p>Yet formulating a good research question is one of the hardest things a researcher has to do. It requires a paradoxical combination of knowledge and ignorance: you need to know enough about your field to identify what is missing, but you need to maintain enough intellectual openness to ask questions that have not been asked before.</p>
<p>A common mistake among beginning researchers is to confuse a topic with a question. "Social media and mental health" is a topic, not a question. "Does daily social media use of more than three hours predict increased anxiety symptoms among university students aged 18-24?" is a research question. The difference is specificity, measurability, and focus.</p>
`);
    ch = insertAfter(ch, '5.2 Characteristics of a Strong', `
${wrapFig(svgRadial('CHARACTERISTICS OF A STRONG RESEARCH QUESTION', 'STRONG\\nRQ', [
  { num: 1, text: 'Clear & Specific' },
  { num: 2, text: 'Researchable' },
  { num: 3, text: 'Significant' },
  { num: 4, text: 'Feasible' },
  { num: 5, text: 'Ethical' }
]), 'Figure 5.1 The five characteristics of a strong research question.')}
<p>Clarity means that the key concepts in your question are defined precisely enough that another researcher could understand exactly what you intend to investigate. Vague terms like "impact," "effectiveness," or "success" need to be operationalised - translated into specific, measurable indicators.</p>
<p>Researchability means that your question can be answered through the systematic collection and analysis of data. Questions about values ("Should we do X?"), predictions about the distant future ("What will happen in 2100?"), or matters of pure definition ("What is justice?") are not researchable in the empirical sense, although they may be valid philosophical questions.</p>
<p>Significance means that the answer to your question will matter - it will advance theoretical understanding, inform policy or practice, or fill a genuine gap in existing knowledge. A question can be perfectly clear and researchable but trivial. Significance is what separates research that matters from research that merely exists.</p>
`);
    ch = insertAfter(ch, '5.3 Types of Research', `
${wrapFig(svgQuadrant('TYPES OF RESEARCH QUESTIONS',
  { top: 'EXPLORATORY', bottom: 'CONFIRMATORY', left: 'QUALITATIVE', right: 'QUANTITATIVE' },
  [
    { title: 'DESCRIPTIVE', desc: 'What is happening?\\nHow do people experience X?', color: NAVY },
    { title: 'RELATIONAL', desc: 'Is X associated with Y?\\nWhat predicts Z?', color: TEAL },
    { title: 'INTERPRETIVE', desc: 'What does X mean\\nto participants?', color: GOLD },
    { title: 'CAUSAL', desc: 'Does X cause Y?\\nWhat is the effect of X?', color: NAVY }
  ]
), 'Figure 5.2 The four main types of research questions, mapped across two dimensions.')}
<p>Descriptive questions ask "What is happening?" They seek to characterise a phenomenon, map its features, or document its prevalence. These are often the first questions asked about a new topic, and they provide the foundation for more complex investigations.</p>
<p>Relational questions ask "Is X associated with Y?" They explore connections between variables without necessarily claiming that one causes the other. Correlation studies, regression analyses, and survey research typically address relational questions.</p>
<p>Causal questions ask "Does X cause Y?" They require the most rigorous research designs - ideally randomised controlled trials - because establishing causation requires ruling out alternative explanations. In many social science contexts, true causal claims are difficult to make, which is why researchers often speak of "effects" or "influences" rather than "causes."</p>
<p>Interpretive questions ask "What does X mean?" They seek to understand how people make sense of their experiences, and they typically require qualitative methods such as interviews, focus groups, or ethnography. These questions are particularly valuable when exploring phenomena that are poorly understood or highly context-dependent.</p>
`);
    ch = insertAfter(ch, '5.4 The Iterative Process', `
<p>Research questions are not written once and fixed forever. They evolve as your understanding deepens. This iterative process is not a sign of confusion or weakness - it is a sign of intellectual growth. The question you start with is almost never the question you end with, and the changes you make along the way reflect your increasing sophistication as a researcher.</p>
<p>The iterative process typically involves cycles of reading, reflection, and refinement. You start with a broad question, read the literature, discover that your question has already been partially answered, refine your question to focus on what remains unknown, read more literature, refine again, and so on. Each cycle brings you closer to a question that is both original and important.</p>
<p>Be patient with this process. Many students feel anxious about not having a "perfect" question early in their programme. But premature closure - settling on a question before you understand the landscape - is far more dangerous than the temporary discomfort of uncertainty. The best questions emerge from deep engagement with a topic, not from quick decisions made in isolation.</p>
`);
    break;

  // ============================================================
  // CHAPTER 6: From Broad Interest to Focused Question
  // ============================================================
  case 6:
    ch = insertAfter(ch, '6.1 The Challenge of Narrowing', `
<p>Every researcher faces the same challenge: you start with a broad area of interest and must somehow transform it into a focused, researchable question. This narrowing process is intellectually demanding and often emotionally difficult, because it requires you to let go of possibilities. When you narrow from "education" to "mobile learning among undergraduates in Ghana," you are choosing to pursue one path and abandon many others.</p>
<p>The challenge is compounded by the fact that beginning researchers often do not know enough about their field to judge which narrowing decisions will be productive. You might spend weeks pursuing a particular angle only to discover that it has already been thoroughly investigated, or that it requires resources you do not have. This is normal and should not be interpreted as failure.</p>
${wrapFig(svgFunnel('THE NARROWING FUNNEL', [
  { label: 'Broad Interest', text: 'Education & Technology', num: 1 },
  { label: 'General Topic', text: 'E-learning in higher education', num: 2 },
  { label: 'Specific Area', text: 'Mobile app-based learning', num: 3 },
  { label: 'Population', text: 'Undergraduate students in Ghana', num: 4 },
  { label: 'Relationship', text: 'App engagement vs. academic performance', num: 5 },
  { label: 'Question', text: 'Does mobile app engagement predict GPA?', num: 6 }
]), 'Figure 6.1 The narrowing funnel from broad interest to specific research question.')}
<p>The funnel metaphor is useful because it captures two important features of the narrowing process. First, it shows that narrowing is progressive - you move through several stages, each more specific than the last. Second, it shows that the final question is much smaller than the initial interest, which can feel disappointing but is actually necessary. A broad question like "How does technology affect education?" cannot be answered by a single study. A focused question like "Does daily use of the campus learning app predict higher GPA among second-year undergraduates?" can.</p>
`);
    ch = insertAfter(ch, '6.2 Tools for Narrowing', `
<p>Two tools are particularly useful for narrowing: concept mapping and literature immersion. Used together, they can transform a vague interest into a precise research question in a matter of weeks.</p>
${wrapFig(svgTriangle('THE NARROWING TOOLKIT',
  [
    { label: 'FOCUSED', sub: 'Question', color: GOLD },
    { label: 'CONCEPT', sub: 'Mapping', color: NAVY },
    { label: 'LITERATURE', sub: 'Immersion', color: TEAL }
  ],
  ['Reveals connections', 'Reveals gaps', 'Validates focus']
), 'Figure 6.2 The two key tools for narrowing your research focus.')}
<p>Concept mapping involves writing your broad topic in the centre of a page and branching outward with related subtopics, variables, populations, and contexts. This visual exercise helps you see the full landscape of possibilities and identify which branches are most promising. It also reveals connections between concepts that you might not have noticed through linear thinking alone.</p>
<p>Literature immersion involves sustained, focused reading of the research literature in your area of interest. As you read, you learn what has been investigated, what methods have been used, what findings have emerged, and - crucially - what questions remain unanswered. These unanswered questions become candidates for your own research.</p>
<p>The combination of concept mapping and literature immersion is powerful because they complement each other. Concept mapping helps you generate possibilities; literature immersion helps you evaluate which of those possibilities are most viable and most needed. Together, they move you efficiently from a broad interest to a focused, original, and significant research question.</p>
`);
    ch = insertAfter(ch, '6.3 From Question to Problem', `
<p>Once you have a focused question, you need to frame it as a research problem. A problem statement is a formal academic argument for why your question needs to be answered. It typically includes three elements: what is known, what is not known, and why the gap matters.</p>
<p>The problem statement is your pitch to the academic community. It says: "Here is an important issue. Here is what previous research has established. Here is what we still do not know. And here is why filling this gap would be valuable." A strong problem statement makes the reader nod and think "Yes, that question does need to be answered."</p>
<p>Writing a problem statement forces you to articulate the significance of your research in concrete terms. It is not enough to say "Little research has been done on X" - you must also explain why research on X matters. What decisions will be better informed? What theories will be refined? What practices will be improved? The answers to these questions transform your problem statement from a description of a gap into a compelling case for investigation.</p>
`);
    break;

  // ============================================================
  // CHAPTERS 7-24: Similar expansion pattern
  // ============================================================
  case 7:
    ch = insertAfter(ch, '7.1 Why Testing Your Question', `
<p>Before investing months or years in a research project, you need to test whether your question can actually be investigated. Many promising questions fail one or more of the tests described in this chapter, and it is far better to discover this early than after you have collected data or written three chapters of your thesis.</p>
<p>The FINER framework provides a systematic way to evaluate your research question across five dimensions: Feasibility, Interest, Novelty, Ethics, and Relevance. A question that passes all five tests has a strong chance of leading to a successful and meaningful study.</p>
${wrapFig(svgRadial('THE FINER FRAMEWORK', 'FINER\\nTEST', [
  { num: 'F', text: 'Feasible' },
  { num: 'I', text: 'Interesting' },
  { num: 'N', text: 'Novel' },
  { num: 'E', text: 'Ethical' },
  { num: 'R', text: 'Relevant' }
]), 'Figure 7.1 The FINER framework for testing research questions.')}
<p>Feasibility asks whether the study can actually be conducted within the constraints of time, budget, expertise, and access. A brilliant question that would require ten years and a million-dollar budget is not feasible for a masters thesis. Be honest with yourself about what you can realistically accomplish.</p>
<p>Interest asks whether the question engages you and the scholarly community. A question that bores you will lead to a painful research experience, no matter how important it may be objectively. You will be living with this question for months or years - make sure it is one you genuinely want to answer.</p>
`);
    ch = insertAfter(ch, '7.2 Feasibility', `
<p>Feasibility is the most practical of the five FINER criteria, and it is the one most frequently overlooked by enthusiastic but inexperienced researchers. A feasible study is one that can be completed within your available time, with your available resources, and within your current level of expertise.</p>
<p>Time is usually the biggest constraint. A doctoral study typically takes three to five years; a masters study, one to two years. But research always takes longer than you expect. Data collection is delayed by participant recruitment. Analysis reveals unexpected complexities. Your supervisor wants revisions. Build generous buffers into your timeline, and choose a question that can be investigated within your actual time frame, not your optimistic estimate.</p>
<p>Resources include funding, equipment, software, and access to participants or data. If your question requires specialised equipment you do not have, or access to a population that is difficult to reach, these practical obstacles may make your question infeasible regardless of its intellectual merit.</p>
`);
    ch = insertAfter(ch, '7.3 Originality', `
<p>Originality does not mean that no one has ever thought about your topic before. It means that your specific question, investigated with your specific methods, in your specific context, will produce knowledge that did not previously exist. This is a much more achievable standard than most students realise.</p>
${wrapFig(svgBars('TYPES OF ORIGINALITY', 'Multiple paths to making an original contribution', [
  { label: 'New evidence', segments: [{ pct: 100, color: NAVY }] },
  { label: 'New method', segments: [{ pct: 85, color: TEAL }] },
  { label: 'New context', segments: [{ pct: 75, color: GOLD }] },
  { label: 'New synthesis', segments: [{ pct: 70, color: NAVY }] },
  { label: 'New theory', segments: [{ pct: 50, color: MAROON }] }
], [{ color: NAVY, text: 'Common' }, { color: MAROON, text: 'Less common' }]),
'Figure 7.2 Types of originality and their relative frequency in doctoral research.')}
<p>New evidence means studying a question that has not been empirically investigated before. New method means applying a methodology that has not been used to study this particular phenomenon. New context means investigating a known phenomenon in a new population, setting, or culture. New synthesis means combining insights from multiple existing studies to produce a new understanding. And new theory means proposing or modifying a theoretical framework.</p>
`);
    break;

  case 8:
    ch = insertAfter(ch, '8.1 Why Good Researchers', `
<p>Even experienced researchers sometimes write poor research questions. This is not because they lack intelligence or training, but because question formulation is inherently difficult. It requires balancing multiple competing demands: the question must be broad enough to be interesting but narrow enough to be feasible; it must be specific enough to be researchable but flexible enough to accommodate unexpected findings.</p>
<p>The most common mistakes fall into recognisable patterns, and learning to identify these patterns in your own work is one of the most valuable skills you can develop as a researcher.</p>
${wrapFig(svgRadial('COMMON RESEARCH QUESTION MISTAKES', 'COMMON\\nMISTAKES', [
  { num: 1, text: 'Too broad' },
  { num: 2, text: 'Too narrow' },
  { num: 3, text: 'Value-laden' },
  { num: 4, text: 'Unanswerable' },
  { num: 5, text: 'Double-barrelled' },
  { num: 6, text: 'Leading' }
]), 'Figure 8.1 The six most common research question mistakes.')}
`);
    ch = insertAfter(ch, '8.2 Questions That Are Too Broad', `
<p>A question that is too broad tries to cover too much ground. "What is the impact of technology on education?" is so broad that it could generate thousands of different studies, each investigating a different aspect of the relationship. The problem is not that the question is uninteresting - it is that it is unmanageable. No single study can answer it.</p>
<p>The fix for a too-broad question is to specify the population, the context, the variables, and the relationship you want to investigate. "What is the effect of tablet-based reading programmes on literacy scores among Year 3 students in rural Ghanaian schools?" is a narrowed version of the same interest, but it is now specific enough to be investigated by a single study.</p>
`);
    ch = insertAfter(ch, '8.5 A Diagnostic Checklist', `
${wrapFig(svgFlow('QUESTION DIAGNOSTIC PROCESS', [
  { text: 'Draft', color: NAVY },
  { text: 'Check scope', color: GOLD },
  { text: 'Check bias', color: NAVY },
  { text: 'Check feasibility', color: GOLD },
  { text: 'Revise', color: TEAL }
]), 'Figure 8.2 The diagnostic process for refining research questions.')}
<p>Use this five-step diagnostic process every time you draft or revise a research question. First, write your question. Second, check its scope - is it too broad or too narrow? Third, check for bias - does it contain assumptions or value judgements? Fourth, check feasibility - can you actually investigate it with your available resources? Fifth, revise based on what you have found. Repeat until your question passes all checks.</p>
`);
    break;

  case 9:
    ch = insertAfter(ch, '9.1 What Is an Academic', `
<p>An academic argument is fundamentally different from an everyday argument. In everyday language, "argument" often implies conflict - two people disagreeing, perhaps emotionally. In academic discourse, an argument is simply a reasoned case for a position, supported by evidence. It is the basic building block of scholarship.</p>
<p>Every piece of academic writing - every journal article, thesis, dissertation, and book chapter - is, at its core, an argument. The author is making a claim and supporting it with evidence and reasoning. Understanding the structure of academic arguments allows you both to evaluate the arguments of others and to construct your own more effectively.</p>
`);
    ch = insertAfter(ch, '9.2 The Structure of Academic', `
${wrapFig(svgTriangle('THE ARGUMENTATION TRIANGLE',
  [
    { label: 'CLAIM', sub: 'Your position', color: NAVY },
    { label: 'EVIDENCE', sub: 'Your data', color: GOLD },
    { label: 'WARRANT', sub: 'Your logic', color: TEAL }
  ],
  ['Supports', 'Justifies', 'Connects']
), 'Figure 9.1 The argumentation triangle. Every academic argument requires all three elements.')}
<p>The claim is the position or conclusion you are arguing for. It is the answer to your research question, the point you want your reader to accept. A strong claim is specific, debatable, and significant. It should not be so obvious that no reasonable person would disagree, nor so extreme that no evidence could support it.</p>
<p>The evidence consists of the data, facts, observations, or findings that support your claim. In academic research, evidence must be credible (from reliable sources), relevant (directly related to the claim), sufficient (enough to make the case convincingly), and current (not outdated by more recent findings).</p>
<p>The warrant is the logical connection between the evidence and the claim. It explains why the evidence supports the claim. Often, warrants are implicit - the author assumes the reader will make the connection. But making warrants explicit strengthens your argument and reduces the risk of misunderstanding.</p>
`);
    break;

  case 10:
    ch = insertAfter(ch, '10.1 Crafting Clear Claims', `
${wrapFig(svgPyramid("TOULMIN'S MODEL OF ARGUMENTATION", [
  { text: 'REBUTTAL - Exceptions and limitations', color: MAROON },
  { text: 'QUALIFIER - Degree of certainty', color: GOLD },
  { text: 'BACKING - Support for the warrant', color: NAVY },
  { text: 'WARRANT - Logical principle connecting evidence to claim', color: NAVY },
  { text: 'EVIDENCE / DATA - Facts and observations', color: TEAL },
  { text: 'CLAIM - The position being argued for', color: '#2a5070' }
]), "Figure 10.1 Toulmin's model of argumentation, showing the six elements of a complete argument.")}
<p>A well-crafted claim sits at the heart of every effective argument. It states clearly what you believe to be true and what you intend to demonstrate through evidence and reasoning. The best claims are specific enough to be tested but broad enough to be interesting.</p>
<p>Avoid claims that are merely descriptive. "Students use social media" is a fact, not a claim. "Excessive social media use negatively affects academic performance among first-year university students" is a claim - it takes a position that can be supported or challenged with evidence.</p>
`);
    break;

  case 11:
    ch = insertAfter(ch, '11.1 What Are Logical', `
<p>Logical fallacies are errors in reasoning that undermine the logical structure of an argument. They can be subtle and persuasive, which is what makes them dangerous. A fallacious argument can sound convincing - it may even reach a correct conclusion - but its logical structure is flawed, which means the conclusion is not reliably supported by the evidence.</p>
<p>Learning to identify fallacies is essential for two reasons. First, it helps you evaluate the arguments of others more effectively. When you read a research paper or listen to a conference presentation, you can spot weaknesses in reasoning that might otherwise go unnoticed. Second, it helps you avoid fallacies in your own work. Once you can name a fallacy, you can watch for it in your own thinking and writing.</p>
`);
    ch = insertAfter(ch, '11.2 Common Fallacies', `
${wrapFig(svgRadial('COMMON LOGICAL FALLACIES', 'LOGICAL\\nFALLACIES', [
  { num: 1, text: 'Ad Hominem' },
  { num: 2, text: 'Straw Man' },
  { num: 3, text: 'False Dichotomy' },
  { num: 4, text: 'Appeal to Authority' },
  { num: 5, text: 'Post Hoc' },
  { num: 6, text: 'Hasty Generalisation' },
  { num: 7, text: 'Circular Reasoning' }
]), 'Figure 11.1 The seven most common logical fallacies in research writing.')}
<p>The ad hominem fallacy attacks the person making an argument rather than the argument itself. "Dr Smith's findings are unreliable because she is funded by industry" is ad hominem - it does not address the quality of the research itself. The source of funding may be relevant as context, but it does not automatically invalidate the findings.</p>
<p>The straw man fallacy misrepresents an opponent's argument in order to make it easier to attack. "Qualitative researchers reject all numerical data" is a straw man - no serious qualitative researcher holds this position. Defeating a misrepresented argument proves nothing about the actual argument.</p>
`);
    break;

  case 12:
    ch = insertAfter(ch, '12.1 Disagreement as Scholarly', `
<p>Disagreement is not just acceptable in academia - it is essential. Science progresses through the clash of competing ideas, the testing of alternative hypotheses, and the rigorous critique of established theories. A field in which everyone agrees is a field that has stopped progressing.</p>
<p>But academic disagreement is fundamentally different from everyday disagreement. It is respectful, evidence-based, and focused on ideas rather than personalities. When you disagree with another researcher, you are not saying they are stupid or dishonest. You are saying that you have evidence or reasoning that supports a different conclusion, and you are inviting them to consider it.</p>
`);
    ch = insertAfter(ch, '12.2 The Art of Respectful', `
${wrapFig(svgBars('THE DISAGREEMENT SPECTRUM', 'From full agreement to fundamental disagreement', [
  { label: 'Full Agreement', segments: [{ pct: 100, color: TEAL }] },
  { label: 'Partial Agreement', segments: [{ pct: 70, color: TEAL }, { pct: 30, color: GOLD }] },
  { label: 'Mixed Evidence', segments: [{ pct: 50, color: TEAL }, { pct: 50, color: GOLD }] },
  { label: 'Partial Disagreement', segments: [{ pct: 30, color: TEAL }, { pct: 70, color: GOLD }] },
  { label: 'Fundamental Disagreement', segments: [{ pct: 100, color: MAROON }] }
], [{ color: TEAL, text: 'Support' }, { color: GOLD, text: 'Challenge' }]),
'Figure 12.1 The disagreement spectrum. Most scholarly positions fall between the extremes.')}
<p>Most scholarly positions are not cases of absolute agreement or absolute disagreement. They fall somewhere in between. You might agree with a researcher's theoretical framework but disagree with their methodology. You might accept their findings but argue that they have misinterpreted them. You might agree with their conclusions in one context but argue that they do not apply in another.</p>
`);
    break;

  case 13:
    ch = insertAfter(ch, '13.1 Understanding Knowledge', `
<p>A gap in the literature is a space where knowledge is missing, incomplete, or contradictory. Identifying these gaps is one of the most important skills a researcher can develop, because gaps are where original contributions are made. Every significant research project begins with the identification of a gap - something we do not know, have not investigated, or have not adequately explained.</p>
<p>Gaps are not weaknesses in the literature - they are opportunities. They represent the frontier of knowledge, the places where new discoveries can be made and new understanding can be created.</p>
`);
    ch = insertAfter(ch, '13.2 Types of Gaps', `
${wrapFig(svgQuadrant('TYPES OF KNOWLEDGE GAPS',
  { top: 'THEORETICAL', bottom: 'EMPIRICAL', left: 'WITHIN FIELD', right: 'ACROSS FIELDS' },
  [
    { title: 'FRAMEWORK', desc: 'No adequate theory\\nexplains the phenomenon', color: NAVY },
    { title: 'INTEGRATION', desc: 'Fields have not been\\ncombined or compared', color: TEAL },
    { title: 'EVIDENCE', desc: 'No data exists for\\nthis question or context', color: GOLD },
    { title: 'METHOD', desc: 'Existing methods are\\ninadequate or untested', color: NAVY }
  ]
), 'Figure 13.1 Four main types of knowledge gaps in academic research.')}
<p>Framework gaps exist when there is no adequate theoretical framework to explain a phenomenon. Evidence gaps exist when no empirical data has been collected on a particular question or in a particular context. Method gaps exist when previous studies have used inappropriate or limited methods. Integration gaps exist when insights from different fields have not been combined.</p>
`);
    break;

  case 14:
    ch = insertAfter(ch, '14.1 Reading for Gaps', `
<p>Most students read research papers to learn what is known. Strategic reading goes further - it reads for what is not known, what is contested, and what remains unexplored. This shift in reading purpose transforms every paper you read from a source of information into a source of research opportunities.</p>
<p>When you read strategically, you pay particular attention to the "Limitations" and "Future Research" sections of papers. These sections are goldmines for identifying gaps, because authors explicitly acknowledge what their study did not or could not investigate. Keep a running list of these gaps as you read - patterns will emerge that point toward viable research questions.</p>
`);
    ch = insertAfter(ch, '14.2 Where to Find Gaps', `
${wrapFig(svgRadial('WHERE TO FIND GAPS IN RESEARCH', 'RESEARCH\\nGAPS', [
  { num: 1, text: 'Future Research sections' },
  { num: 2, text: 'Contradictory findings' },
  { num: 3, text: 'Under-studied contexts' },
  { num: 4, text: 'Outdated studies' },
  { num: 5, text: 'Methodological limits' },
  { num: 6, text: 'Theory-practice gaps' }
]), 'Figure 14.1 Six places where gaps hide in published research.')}
`);
    break;

  case 15:
    ch = insertAfter(ch, '15.1 The Importance of', `
<p>Positioning your research is like placing a new building in an existing cityscape. You need to show how your building relates to the structures already there - how it fills a gap, extends a street, or provides a view that was previously unavailable. Without positioning, your research floats in isolation, disconnected from the conversations that give it meaning.</p>
`);
    ch = insertAfter(ch, '15.2 Mapping the Intellectual', `
${wrapFig(svgFlow('POSITIONING YOUR STUDY', [
  { text: 'What is known', color: NAVY },
  { text: 'What is debated', color: GOLD },
  { text: 'What is missing', color: MAROON },
  { text: 'Your contribution', color: TEAL }
]), 'Figure 15.1 The four-step process for positioning your study within existing scholarship.')}
<p>Mapping the intellectual landscape involves identifying the major schools of thought, key debates, landmark studies, and evolving trends in your field. This is not a summary of everything that has been written - it is a strategic overview that shows how your research question fits into the bigger picture.</p>
`);
    break;

  case 16:
    ch = insertAfter(ch, '16.1 What Makes Research', `
<p>Originality in research does not mean that no one has ever thought about your topic. It means that your specific combination of question, method, context, and analysis produces knowledge that did not previously exist. This is a much more achievable standard than most students realise, and understanding the different types of originality can help you identify where your contribution lies.</p>
`);
    ch = insertAfter(ch, '16.2 Types of Originality', `
${wrapFig(svgQuadrant('TYPES OF ORIGINAL CONTRIBUTION',
  { top: 'THEORETICAL', bottom: 'EMPIRICAL', left: 'EXTENDING', right: 'CHALLENGING' },
  [
    { title: 'NEW FRAMEWORK', desc: 'Propose a new theory\\nor model', color: GOLD },
    { title: 'NEW CRITIQUE', desc: 'Challenge existing\\nassumptions', color: MAROON },
    { title: 'NEW EVIDENCE', desc: 'Fill an empirical gap\\nwith new data', color: NAVY },
    { title: 'NEW METHOD', desc: 'Apply innovative\\nmethodology', color: TEAL }
  ]
), 'Figure 16.1 Four types of original contribution, classified by approach and level.')}
`);
    break;

  case 17:
    ch = insertAfter(ch, '17.1 What Are Assumptions', `
<p>Assumptions are beliefs we hold so deeply that we rarely examine them. They are the invisible lenses through which we view the world, shaping what we see, what we ask, and what we consider valid evidence. In everyday life, assumptions are useful shortcuts. In research, they can be dangerous distortions.</p>
`);
    ch = insertAfter(ch, '17.2 How Assumptions Shape', `
${wrapFig(svgPyramid('LAYERS OF RESEARCH ASSUMPTIONS', [
  { text: 'ONTOLOGICAL - What is real?', color: NAVY },
  { text: 'EPISTEMOLOGICAL - How do we know?', color: GOLD },
  { text: 'THEORETICAL - Which framework applies?', color: NAVY },
  { text: 'METHODOLOGICAL - Which methods are valid?', color: TEAL },
  { text: 'PERSONAL - What are my biases?', color: '#5a7a6a' }
]), 'Figure 17.1 The five layers of assumptions that shape every research project.')}
<p>Each layer of assumption influences the layers below it. Your ontological assumptions (what you believe about the nature of reality) shape your epistemological assumptions (what you believe about how knowledge is produced), which in turn shape your methodological choices. Making these layers explicit is essential for intellectual honesty and methodological coherence.</p>
`);
    break;

  case 18:
    ch = insertAfter(ch, '18.1 Understanding Bias', `
<p>Bias in research is any systematic tendency that distorts findings away from the truth. It can enter the research process at any stage - from question formulation to data collection to interpretation of results - and it is often invisible to the researcher themselves. Understanding the major types of bias is the first step toward guarding against them.</p>
`);
    ch = insertAfter(ch, '18.2 Cognitive Biases', `
${wrapFig(svgRadial('COGNITIVE BIASES IN RESEARCH', 'COGNITIVE\\nBIAS', [
  { num: 1, text: 'Confirmation bias' },
  { num: 2, text: 'Availability bias' },
  { num: 3, text: 'Anchoring bias' },
  { num: 4, text: 'Hindsight bias' },
  { num: 5, text: 'Dunning-Kruger effect' },
  { num: 6, text: 'Status quo bias' }
]), 'Figure 18.1 Six cognitive biases that commonly affect research thinking.')}
<p>Confirmation bias is the most pervasive and dangerous of all cognitive biases. It is the tendency to seek out, notice, and remember information that confirms your existing beliefs while ignoring or dismissing information that contradicts them. Every researcher is susceptible to confirmation bias, and the only defence is deliberate, systematic effort to seek out disconfirming evidence.</p>
`);
    break;

  case 19:
    ch = insertAfter(ch, '19.1 What Is Reflexivity', `
<p>Reflexivity is the practice of examining how your own characteristics, experiences, and assumptions influence your research. It recognises that the researcher is not a neutral instrument but an active participant in the knowledge-creation process, whose presence shapes what is observed, what is asked, and how findings are interpreted.</p>
`);
    ch = insertAfter(ch, '19.2 Types of Reflexivity', `
${wrapFig(svgTriangle('TYPES OF REFLEXIVITY',
  [
    { label: 'PERSONAL', sub: 'Who am I?', color: NAVY },
    { label: 'METHODOLOGICAL', sub: 'What do I choose?', color: GOLD },
    { label: 'EPISTEMOLOGICAL', sub: 'What do I assume?', color: TEAL }
  ],
  ['Values & identity', 'Design choices', 'Knowledge beliefs']
), 'Figure 19.1 The three types of reflexivity and their interconnection.')}
`);
    break;

  case 20:
    ch = insertAfter(ch, '20.1 Intellectual Honesty', `
<p>Intellectual honesty is the bedrock upon which all credible research is built. Without it, the entire edifice of scholarly knowledge collapses, because if researchers cannot be trusted to report their findings honestly, then no finding can be believed and no knowledge can accumulate.</p>
`);
    ch = insertAfter(ch, '20.2 Forms of Intellectual', `
${wrapFig(svgBars('FORMS OF INTELLECTUAL DISHONESTY', 'Ranked by severity and frequency', [
  { label: 'Cherry-picking', segments: [{ pct: 75, color: GOLD }, { pct: 25, color: MAROON }] },
  { label: 'Overstating findings', segments: [{ pct: 60, color: GOLD }, { pct: 40, color: MAROON }] },
  { label: 'Ignoring contradictions', segments: [{ pct: 50, color: GOLD }, { pct: 50, color: MAROON }] },
  { label: 'Data fabrication', segments: [{ pct: 10, color: GOLD }, { pct: 90, color: MAROON }] }
], [{ color: GOLD, text: 'Frequency' }, { color: MAROON, text: 'Severity' }]),
'Figure 20.1 Forms of intellectual dishonesty, ranked by how common and how damaging they are.')}
`);
    break;

  case 21:
    ch = insertAfter(ch, '21.1 Defining Scholarly', `
<p>Scholarly voice is the distinctive way you express your ideas in academic writing. It is not about using long words or complex sentences - in fact, the best scholarly writing is remarkably clear and direct. Rather, scholarly voice is about the confidence, precision, and evidence-groundedness with which you present your arguments.</p>
`);
    ch = insertAfter(ch, '21.2 Characteristics of Strong', `
${wrapFig(svgRadial('CHARACTERISTICS OF SCHOLARLY VOICE', 'SCHOLARLY\\nVOICE', [
  { num: 1, text: 'Clarity' },
  { num: 2, text: 'Precision' },
  { num: 3, text: 'Evidence-grounded' },
  { num: 4, text: 'Appropriately hedged' },
  { num: 5, text: 'Analytical' },
  { num: 6, text: 'Professional tone' }
]), 'Figure 21.1 Six characteristics of a strong scholarly voice.')}
`);
    break;

  case 22:
    ch = insertAfter(ch, '22.1 The Transition from Student', `
${wrapFig(svgCompare('STUDENT vs. SCHOLAR',
  { title: 'STUDENT', items: ['Seeks right answers', 'Follows instructions', 'Reproduces knowledge', 'Depends on supervisor', 'Avoids ambiguity'] },
  { title: 'SCHOLAR', items: ['Generates questions', 'Designs own inquiry', 'Produces knowledge', 'Collaborates as peer', 'Embraces ambiguity'] }
), 'Figure 22.1 Key differences between student and scholar mindsets.')}
<p>The transition from student to scholar is one of the most profound intellectual transformations in a person's life. It requires not just acquiring new skills but fundamentally changing how you relate to knowledge, authority, and uncertainty.</p>
`);
    break;

  case 23:
    ch = insertAfter(ch, '23.1 What Synthesis Is', `
<p>Synthesis is the process of combining insights from multiple sources to create a new, integrated understanding. It goes far beyond simply summarising what each author has said. Instead, it identifies patterns, resolves contradictions, and constructs a coherent narrative that is greater than the sum of its parts.</p>
`);
    ch = insertAfter(ch, '23.2 Techniques for Effective', `
${wrapFig(svgFlow('THE SYNTHESIS PROCESS', [
  { text: 'Read Sources', color: NAVY },
  { text: 'Identify Themes', color: GOLD },
  { text: 'Find Connections', color: NAVY },
  { text: 'Integrate Ideas', color: GOLD },
  { text: 'Form Position', color: TEAL }
]), 'Figure 23.1 The five-step synthesis process.')}
${wrapFig(svgCompare('SUMMARISING vs. SYNTHESISING',
  { title: 'SUMMARISING', items: ['Reports source by source', 'Descriptive', 'Author-organised', 'Reproduces ideas', 'Lists findings'] },
  { title: 'SYNTHESISING', items: ['Organised by theme', 'Analytical', 'Concept-organised', 'Creates new insight', 'Weaves findings together'] }
), 'Figure 23.2 The critical difference between summarising and synthesising.')}
`);
    break;

  case 24:
    ch = insertAfter(ch, '24.1 The Challenge of Real-Time', `
<p>Presenting and defending your research ideas in real time - whether in a seminar, a viva voce, or a conference presentation - is one of the most demanding intellectual activities a researcher faces. Unlike writing, which allows unlimited revision, live academic discussion requires you to think clearly, respond coherently, and maintain your composure under pressure.</p>
`);
    ch = insertAfter(ch, '24.2 Preparation Strategies', `
${wrapFig(svgQuadrant('DEFENCE PREPARATION FRAMEWORK',
  { top: 'INTELLECTUAL', bottom: 'PRACTICAL', left: 'INDIVIDUAL', right: 'COLLABORATIVE' },
  [
    { title: 'KNOW YOUR WORK', desc: 'Master every detail\\nof your study', color: NAVY },
    { title: 'ANTICIPATE', desc: 'Predict likely\\nquestions', color: GOLD },
    { title: 'PRACTISE ALONE', desc: 'Rehearse key\\narguments aloud', color: TEAL },
    { title: 'MOCK DEFENCE', desc: 'Practise with\\npeers and mentors', color: NAVY }
  ]
), 'Figure 24.1 The four-quadrant framework for defence preparation.')}
`);
    ch = insertAfter(ch, '24.3 Responding to Difficult', `
${wrapFig(svgPyramid('TYPES OF EXAMINER QUESTIONS', [
  { text: 'PHILOSOPHICAL - Challenge fundamental assumptions', color: MAROON },
  { text: 'THEORETICAL - Probe your conceptual framework', color: GOLD },
  { text: 'METHODOLOGICAL - Question your research design', color: NAVY },
  { text: 'ANALYTICAL - Examine your interpretation of data', color: NAVY },
  { text: 'CLARIFICATION - Ensure they understand your point', color: TEAL }
]), 'Figure 24.2 Types of examiner questions, from most to least challenging.')}
<p>The key to responding well to difficult questions is preparation, not improvisation. For each type of question, prepare a mental framework for how you will respond. For clarification questions, restate your point more clearly and provide an example. For methodological questions, justify your choice and acknowledge its limitations. For theoretical questions, demonstrate your understanding of the conceptual landscape. For philosophical questions, show that you have thought deeply about the foundations of your work.</p>
`);
    break;
  }

  book.chapters[idx].content = ch;
  console.log(`  Ch ${ci}: enriched`);
}

// ═══════════════════════════════════════════════════════
// EXECUTE
// ═══════════════════════════════════════════════════════

console.log('Starting enrichment v2...');
for (let i = 0; i < 24; i++) {
  enrichChapter(i);
}

fs.writeFileSync(bookPath, JSON.stringify(book, null, 2), 'utf-8');

// Count results
const updated = JSON.parse(fs.readFileSync(bookPath, 'utf-8'));
let totalWords = 0, totalDiagrams = 0;
updated.chapters.forEach((ch, i) => {
  const words = ch.content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
  const diags = (ch.content.match(/<svg/g) || []).length;
  totalWords += words;
  totalDiagrams += diags;
});
console.log(`\nTotal words: ${totalWords} (est. ${Math.ceil(totalWords / 350)} pages)`);
console.log(`Total SVG diagrams: ${totalDiagrams}`);
console.log('Done!');
