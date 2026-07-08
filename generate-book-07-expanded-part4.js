/**
 * Book 7 Generator: Expanded Part 4 (Chapters 16-20)
 * NO EM DASHES anywhere.
 */

const NAVY = '#1a3a5c';
const GOLD = '#c9a227';
const TEAL = '#2d6a4f';
const MAROON = '#8b3a3a';
const DGRAY = '#1a2332';

function wrapFig(svgHtml, caption) {
  return `<div style="margin:22px 0;text-align:center;">${svgHtml}<p style="font-style:italic;color:#666;font-size:.8rem;margin-top:8px;text-align:center;">${caption}</p></div>`;
}

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
    s += `<text x="${midX}" y="${y + layerH / 2 + 4}" text-anchor="middle" fill="#fff" font-size="10.5" font-weight="600" font-family="Inter,sans-serif"${lv.text.length > 30 ? ' textLength="' + maxTextW + '" lengthAdjust="spacingAndGlyphs"' : ''}>${lv.text}</text>`;
    if (lv.num) {
      s += `<text x="${x + w - 16}" y="${y + layerH / 2 + 4}" text-anchor="middle" fill="rgba(255,255,255,0.6)" font-size="10" font-weight="700">${lv.num}</text>`;
    }
  });
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${vbW} ${totalH}" style="max-width:100%;height:auto;display:block;margin:0 auto;">${s}</svg>`;
}

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
    s += `<text x="${x + stepW / 2}" y="${y + 37}" text-anchor="middle" fill="rgba(255,255,255,0.9)" font-size="8.5" font-family="Inter,sans-serif"${st.text.length > 12 ? ' textLength="' + (stepW - 12) + '" lengthAdjust="spacingAndGlyphs"' : ''}>${st.text}</text>`;
    if (i < steps.length - 1) {
      const ax = x + stepW + 2;
      s += `<polygon points="${ax + 4},${y + stepH / 2 - 8} ${ax + arrowW - 4},${y + stepH / 2} ${ax + 4},${y + stepH / 2 + 8}" fill="${GOLD}"/>`;
    }
  });
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${vb} 115" style="max-width:100%;height:auto;display:block;margin:0 auto;">${s}</svg>`;
}

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
    shapes += `<text x="${labelX}" y="${iy + 4}" text-anchor="middle" fill="#fff" font-size="9.5" font-family="Inter,sans-serif"${item.text.length > 16 ? ' textLength="' + maxLabelW + '" lengthAdjust="spacingAndGlyphs"' : ''}>${item.text}</text>`;
  });
  shapes += `<circle cx="${cx}" cy="${cy}" r="${cr}" fill="${MAROON}" stroke="#fff" stroke-width="2"/>`;
  shapes += `<text x="${cx}" y="${cy - 6}" text-anchor="middle" fill="#fff" font-size="18" font-weight="700">!</text>`;
  const cLines = centerText.split('\\n');
  cLines.forEach((line, i) => {
    shapes += `<text x="${cx}" y="${cy + 8 + i * 13}" text-anchor="middle" fill="#fff" font-size="9" font-weight="600">${line}</text>`;
  });
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${vbW} ${vbH}" style="max-width:100%;height:auto;display:block;margin:0 auto;"><text x="${cx}" y="28" text-anchor="middle" fill="${DGRAY}" font-size="14" font-weight="700" font-family="Inter,sans-serif">${title}</text>${shapes}</svg>`;
}

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
  s += `<rect x="${lx}" y="50" width="${boxW}" height="${boxH}" rx="8" fill="${NAVY}"/>`;
  s += `<text x="${lcx}" y="78" text-anchor="middle" fill="#fff" font-size="12" font-weight="700" font-family="Inter,sans-serif">${left.title}</text>`;
  s += `<line x1="${lx + 20}" y1="90" x2="${lx + boxW - 20}" y2="90" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>`;
  left.items.forEach((item, i) => {
    s += `<text x="${lcx}" y="${112 + i * 22}" text-anchor="middle" fill="rgba(255,255,255,0.85)" font-size="9.5" font-family="Inter,sans-serif"${item.length > 28 ? ' textLength="' + (boxW - 30) + '" lengthAdjust="spacingAndGlyphs"' : ''}>${item}</text>`;
  });
  s += `<circle cx="${midX}" cy="${50 + boxH / 2}" r="18" fill="${GOLD}"/>`;
  s += `<text x="${midX}" y="${54 + boxH / 2}" text-anchor="middle" fill="#fff" font-size="10" font-weight="700">VS</text>`;
  s += `<rect x="${rx}" y="50" width="${boxW}" height="${boxH}" rx="8" fill="${TEAL}"/>`;
  s += `<text x="${rcx}" y="78" text-anchor="middle" fill="#fff" font-size="12" font-weight="700" font-family="Inter,sans-serif">${right.title}</text>`;
  s += `<line x1="${rx + 20}" y1="90" x2="${rx + boxW - 20}" y2="90" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>`;
  right.items.forEach((item, i) => {
    s += `<text x="${rcx}" y="${112 + i * 22}" text-anchor="middle" fill="rgba(255,255,255,0.85)" font-size="9.5" font-family="Inter,sans-serif"${item.length > 28 ? ' textLength="' + (boxW - 30) + '" lengthAdjust="spacingAndGlyphs"' : ''}>${item}</text>`;
  });
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${vbW} ${vbH}" style="max-width:100%;height:auto;display:block;margin:0 auto;">${s}</svg>`;
}

function ch16() {
  return `<h1>Chapter 16</h1><h2 style='font-size:2rem;margin-bottom:4px;'>Acknowledgements, Declarations, and Front Matter</h2>
<blockquote><strong>Learning Objectives</strong><br>By the end of this chapter, you will be able to:<br>* Prepare the required administrative front matter for a thesis<br>* Write appropriate and professional declarations of originality<br>* Draft acknowledgements that are gracious but maintain academic tone<br>* Format the table of contents, list of figures, and list of tables correctly<br>* Ensure the title page meets exact institutional requirements</blockquote>
<h2>16.1 The Importance of Front Matter</h2>
<p>The "front matter" of a thesis includes everything that appears before Chapter One: the title page, abstract, declarations, acknowledgements, table of contents, and lists of tables, figures, and abbreviations. While these elements might seem like administrative afterthoughts, they are the first pages the examiner sees. Errors in the front matter, incorrect formatting, missing declarations, or a sloppy table of contents signal a lack of attention to detail that will immediately negatively influence the examiner's perception of your scholarly rigour (Dunleavy, 2003).</p>
<p>Every university has strict, specific guidelines for how the front matter must be formatted. You must locate your institution's thesis formatting guidelines and follow them exactly. Do not assume that the format used by a friend at another university is acceptable at yours (Murray, 2011).</p>
\${wrapFig(svgFlow('FRONT MATTER SEQUENCE', [
  { text: 'Title Page', color: NAVY },
  { text: 'Declarations', color: GOLD },
  { text: 'Abstract', color: TEAL },
  { text: 'Acknowledgements', color: MAROON },
  { text: 'Table of Contents', color: NAVY }
]), 'Figure 16.1 The standard sequence of thesis front matter.')}
<h2>16.2 Declarations of Originality</h2>
<p>Most institutions require a signed declaration stating that the work is your own, that it has not been submitted for another degree, and that all sources have been appropriately acknowledged. If your research involved human participants, you will usually need a declaration stating that ethical approval was obtained, including the ethics approval reference number.</p>
<p>If your thesis includes previously published work (as in a thesis by publication), you must include detailed declarations specifying your exact contribution to those multi-authored papers. These declarations are legal and academic requirements; leaving them out can delay your examination. Check the graduate school website for the exact mandatory wording; do not invent your own (Trafford and Leshem, 2008).</p>
<h2>16.3 Writing Acknowledgements</h2>
<p>The acknowledgements section is where you thank those who supported your research journey. While this is a personal section, it is still part of an academic document and should maintain a professional tone. It is standard practice to acknowledge your supervisors first, thanking them for their academic guidance.</p>
<p>You should also acknowledge funding bodies, scholarship providers, or institutions that provided financial support or access to facilities. Acknowledging the participants who gave their time to your study is essential. Finally, it is appropriate to thank family, friends, and peers who provided emotional or practical support, but avoid overly emotional, lengthy, or excessively informal language. A page is usually sufficient (Murray, 2015).</p>
<h2>16.4 Tables of Contents and Lists</h2>
<p>Your table of contents must be generated automatically using your word processor's heading styles. Never type a table of contents manually; it will inevitably be inaccurate by the time you finish editing. The table of contents should include all chapter titles and typically up to two levels of subheadings (e.g., 1.1 and 1.1.1).</p>
<p>If your thesis includes more than two or three tables or figures, you must include a separate List of Tables and List of Figures, again generated automatically, showing the exact title and page number of every visual aid in the document. A List of Abbreviations or Glossary should be included if your thesis uses highly technical terminology or numerous acronyms (Dunleavy, 2003).</p>`;
}

function ch17() {
  return `<h1>Chapter 17</h1><h2 style='font-size:2rem;margin-bottom:4px;'>Referencing, Bibliography, and Appendices</h2>
<blockquote><strong>Learning Objectives</strong><br>By the end of this chapter, you will be able to:<br>* Distinguish between a reference list and a bibliography<br>* Ensure perfect accuracy and consistency in your citations<br>* Use reference management software effectively for the final thesis<br>* Determine what material belongs in appendices rather than the main text<br>* Format and cross-reference appendices correctly</blockquote>
<h2>17.1 Reference List vs. Bibliography</h2>
<p>While the terms are often used interchangeably, there is an important distinction in academic formatting. A reference list contains only those sources that you have explicitly cited in the text of your thesis. If a source is not cited in the text, it cannot appear in the reference list. A bibliography includes all sources you consulted during your research, whether you cited them directly or not. Most universities require a reference list, not a bibliography, for a thesis or dissertation. Check your institutional guidelines to be certain (Pecorari, 2015).</p>
<p>The golden rule of the reference list is absolute accuracy and complete consistency. Every citation in the text must have a corresponding entry in the reference list, and every entry in the reference list must be cited in the text. Examiners frequently check this correlation. Finding discrepancies immediately suggests a lack of care and rigorous attention to detail. This is where reference management software becomes indispensable (Murray, 2011).</p>
\${wrapFig(svgCompare('REFERENCE LIST VS BIBLIOGRAPHY',
  { title: 'REFERENCE LIST', items: ['Contains only cited sources', 'Strict 1:1 match with in-text citations', 'Standard for most PhD theses', 'Shows exact evidence base', 'Requires meticulous cross-checking'] },
  { title: 'BIBLIOGRAPHY', items: ['Contains all consulted sources', 'Includes uncited background reading', 'Standard for some Humanities degrees', 'Shows broader intellectual context', 'Less rigorous structural linking'] }
), 'Figure 17.1 The distinction between the two ways of listing sources at the end of a document.')}
<h2>17.2 Perfecting the Referencing Style</h2>
<p>Your institution will specify an exact referencing style (e.g., APA 7th Edition, Harvard, Chicago, Vancouver). You must follow this style guide to the letter. This means paying attention to the placement of commas, the use of italics for journal titles but not article titles, the correct formatting of DOIs, and the handling of multiple authors.</p>
<p>Do not rely entirely on the automatic output of reference managers (like EndNote, Zotero, or Mendeley); these programs are only as good as the metadata imported into them and frequently produce formatting errors (e.g., ALL CAPS titles) that you must manually correct. A thorough, manual review of the final reference list is mandatory (Swales and Feak, 2012).</p>
<h2>17.3 The Purpose of Appendices</h2>
<p>Appendices are used for supplementary material that is relevant to the thesis but too detailed, bulky, or tangential to include in the main text. Including this material in the main chapters would disrupt the flow of the argument. However, examiners are not obligated to read the appendices; therefore, no information that is essential to understanding your core argument should be relegated to an appendix (Dunleavy, 2003).</p>
<p>Common materials placed in appendices include: blank copies of survey instruments or interview schedules, the participant information sheet and consent form, evidence of ethical approval, detailed statistical output tables that support but do not replace the summary tables in the findings chapter, and examples of analytical coding frameworks (Trafford and Leshem, 2008).</p>
<h2>17.4 Formatting and Referencing Appendices</h2>
<p>Appendices should be lettered (Appendix A, Appendix B, etc.) and should have descriptive titles. They must be listed in the table of contents. Crucially, every appendix must be explicitly referred to at least once in the main text of the thesis (e.g., "The full interview schedule is provided in Appendix A").</p>
<p>If an appendix is never mentioned in the text, it should not be included in the thesis. Do not use appendices as a dumping ground for unused data or interesting but irrelevant findings. Everything in the thesis, including the appendices, must serve the central argument (Murray, 2015).</p>`;
}

function ch18() {
  return `<h1>Chapter 18</h1><h2 style='font-size:2rem;margin-bottom:4px;'>Formatting Your Thesis to Institutional Standards</h2>
<blockquote><strong>Learning Objectives</strong><br>By the end of this chapter, you will be able to:<br>* Locate and interpret your institution's specific thesis formatting guidelines<br>* Understand why formatting compliance is an academic rather than purely administrative issue<br>* Apply consistent styles, margins, and pagination throughout the document<br>* Prepare the document for professional printing and binding if required<br>* Avoid the common formatting errors that cause submission delays</blockquote>
<h2>18.1 Compliance as Competence</h2>
<p>Formatting a thesis is not merely a matter of aesthetics; it is an academic requirement. Universities have strict, detailed regulations regarding how a thesis must look, encompassing margins, font sizes, line spacing, pagination, chapter headings, and the placement of visual aids. Failing to comply with these regulations is not viewed by examiners as a minor oversight; it is viewed as a failure to follow the rules of the academic community you are attempting to join.</p>
<p>In extreme cases, the graduate school will refuse to accept a thesis for examination if the formatting does not meet the requirements. You must obtain the official, current formatting guidelines from your university's graduate school or library before you begin formatting. Do not assume that the formatting used in a thesis submitted five years ago is still acceptable, as regulations change frequently (Dunleavy, 2003).</p>
\${wrapFig(svgRadial('CRITICAL FORMATTING ZONES', 'CHECK\\nCAREFULLY', [
  { num: 1, text: 'Title Page Wording' },
  { num: 2, text: 'Margin Widths' },
  { num: 3, text: 'Pagination Rules' },
  { num: 4, text: 'Line Spacing' },
  { num: 5, text: 'Heading Hierarchy' }
]), 'Figure 18.1 The most common areas where theses fail institutional formatting checks.')}
<h2>18.2 Margins and Pagination</h2>
<p>Most institutions require specific margins, often with a wider left margin (e.g., 4cm or 1.5 inches) to allow for binding. If you set this margin incorrectly, text may be obscured when the thesis is bound, rendering it unreadable. Pagination also follows strict rules: the preliminary pages (front matter) are typically numbered with lowercase Roman numerals (i, ii, iii), while the main text, beginning with Chapter One, is numbered with Arabic numerals (1, 2, 3). The title page is usually counted as page 'i' but the number is not displayed (Murray, 2015).</p>
<h2>18.3 Consistency is Key</h2>
<p>Beyond the specific rules, the most important aspect of formatting is consistency. If you use 14pt bold Arial for your primary headings, you must use it for every primary heading. If you capitalise the words 'Figure' and 'Table' in your text, you must do so consistently.</p>
<p>The best way to achieve this consistency is by using the 'Styles' feature in your word processor (e.g., Microsoft Word or LaTeX) rather than manually changing fonts and sizes for every heading. Applying consistent styles also allows you to automatically generate an accurate table of contents and prevents catastrophic formatting collapses when moving between different computers (Dunleavy, 2003).</p>
<h2>18.4 Final Checks Before Submission</h2>
<p>The formatting check should be a distinct phase of your final preparation, separate from proofreading the text. Print a sample chapter to ensure the margins look correct on physical paper. Check that tables and figures do not break awkwardly across pages. Ensure there are no "widows or orphans" (single lines of a paragraph stranded at the top or bottom of a page).</p>
<p>Check that all cross-references (e.g., "see Chapter 3") are accurate. Finally, always convert the document to PDF format before submitting or sending it to a printer. This ensures the formatting is "locked" and will not shift when opened on a different computer with different default settings (Trafford and Leshem, 2008).</p>`;
}

function ch19() {
  return `<h1>Chapter 19</h1><h2 style='font-size:2rem;margin-bottom:4px;'>What Examiners Are Actually Looking For</h2>
<blockquote><strong>Learning Objectives</strong><br>By the end of this chapter, you will be able to:<br>* Understand the criteria examiners use to evaluate a thesis or dissertation<br>* Recognise the 'red flags' that immediately concern examiners<br>* Adopt the perspective of an examiner when reviewing your own work<br>* Ensure your thesis explicitly demonstrates the required doctoral or master's level competencies<br>* Anticipate the likely focus areas of the examination process</blockquote>
<h2>19.1 The Examiner's Perspective</h2>
<p>To pass your examination, you must understand what the examiners are evaluating. Examiners are not reading your thesis to learn about your topic; they are reading it to determine whether you have demonstrated the competencies required for the degree. They approach the text with specific questions in mind: Is the research problem clearly defined? Is the methodology robust and justified? Are the findings supported by the data? Is the literature review comprehensive? And crucially for a doctorate, does the thesis make an original contribution to knowledge? (Trafford and Leshem, 2008).</p>
<p>Most universities provide examiners with a formal report form containing specific criteria. You should obtain a blank copy of this form from your graduate school and use it to evaluate your own draft. If the examiner must tick a box confirming "the candidate has demonstrated critical engagement with relevant literature," you must ensure that your literature review chapter provides explicit evidence of that critical engagement (Murray, 2011).</p>
\${wrapFig(svgPyramid('EXAMINER EVALUATION CRITERIA', [
  { text: 'Original Contribution & Theoretical Insight', color: GOLD, num: '1' },
  { text: 'Methodological Rigour & Justification', color: NAVY, num: '2' },
  { text: 'Critical Engagement with Literature', color: NAVY, num: '3' },
  { text: 'Coherence of Argument & Structure', color: TEAL, num: '4' },
  { text: 'Presentation, Formatting, & Academic Tone', color: '#5a7a6a', num: '5' }
]), 'Figure 19.1 The hierarchy of criteria examiners use, from foundational formatting to high-level theoretical contribution.')}
<h2>19.2 The "Doctoralness" or "Masteryness" of the Work</h2>
<p>Examiners look for the appropriate level of scholarly maturity. A master's dissertation must demonstrate competence: the ability to execute a research project properly. A doctoral thesis must demonstrate "doctoralness": the ability to conceptualise an original problem, execute a complex investigation independently, and conceptualise the findings at a high theoretical level.</p>
<p>Doctoralness is demonstrated not just in the findings, but in the tone of the writing, the depth of the critique, and the ability to link empirical data to abstract theory. An examiner can often sense within the first twenty pages whether a thesis possesses this required maturity (Trafford and Leshem, 2008).</p>
<h2>19.3 Red Flags and Fatal Flaws</h2>
<p>Examiners are highly sensitive to "red flags" that indicate poor scholarship. These include: relying on outdated literature, failing to justify methodological choices, presenting data without interpreting it, claiming findings that the data does not support, grammatical errors and typos, and formatting inconsistencies.</p>
<p>A single typo is a mistake; a pattern of typos suggests sloppiness that likely extends to the data analysis. The most fatal flaw, however, is a lack of alignment: when the methodology cannot answer the research questions, or the conclusion makes claims unrelated to the findings. Alignment is the structural integrity of the thesis (Dunleavy, 2003).</p>
<h2>19.4 The First Impression</h2>
<p>Examiners form their initial judgment very quickly, often within the first hour of reading. They typically read the title, the abstract, the introduction, and the conclusion first, before reading the methodology and the rest of the chapters in detail.</p>
<p>If the abstract is clear, the introduction sets out a compelling problem, and the conclusion states a clear contribution, the examiner approaches the rest of the thesis with a positive expectation. If these sections are confusing or poorly written, the examiner reads the rest of the thesis looking for further evidence of failure. First impressions matter profoundly in the examination process (Murray, 2015).</p>`;
}

function ch20() {
  return `<h1>Chapter 20</h1><h2 style='font-size:2rem;margin-bottom:4px;'>Preparing Your Viva or Oral Defence Presentation</h2>
<blockquote><strong>Learning Objectives</strong><br>By the end of this chapter, you will be able to:<br>* Understand the purpose and structure of the oral defence or viva voce<br>* Prepare an effective, concise presentation of your research<br>* Select the most important elements of your thesis to highlight<br>* Design presentation slides that support rather than distract from your message<br>* Practice delivery to manage anxiety and project academic confidence</blockquote>
<h2>20.1 The Purpose of the Oral Defence</h2>
<p>The viva voce (oral examination) or thesis defence is the final hurdle in the doctoral (and sometimes master's) journey. Its purpose is twofold: first, to authenticate that the thesis is your own work (if you can defend the complex ideas within it, you clearly wrote it); second, to test your ability to engage in high-level scholarly debate.</p>
<p>The examiners want to see that you can discuss the broader implications of your work, defend your methodological choices under scrutiny, and respond thoughtfully to critique. It is an examination, but it is also an initiation into the academic community as a peer (Trafford and Leshem, 2008).</p>
\${wrapFig(svgCompare('VIVA MINDSET',
  { title: 'DEFENSIVE MINDSET', items: ['Sees examiners as enemies', 'Views critique as attack', 'Focuses on proving perfection', 'Argues aggressively', 'Struggles with unexpected questions'] },
  { title: 'SCHOLARLY MINDSET', items: ['Sees examiners as peers', 'Views critique as engagement', 'Focuses on discussing ideas', 'Argues thoughtfully', 'Acknowledges limitations openly'] }
), 'Figure 20.1 The mindset shift required to succeed in the oral defence.')}
<h2>20.2 Structuring the Presentation</h2>
<p>If you are required to give a presentation (common in North America and Europe, less so in the UK/Australia), you must condense three years of work into a short timeframe. You cannot present everything. A common mistake is spending too much time on the literature review and rushing the findings. Your presentation should focus on what you did and what you discovered.</p>
<p>A typical structure for a 20-minute presentation is: the research problem and questions (3 mins), brief theoretical context (2 mins), methodology and research design (4 mins), key findings (7 mins), and the original contribution and implications (4 mins). This ensures the majority of the time is spent on your original work, not other people's literature (Trafford and Leshem, 2008).</p>
<h2>20.3 Designing Effective Slides</h2>
<p>Your slides are visual aids, not your script. Do not fill slides with bullet points and read them to the audience. Use slides to display information that is difficult to convey verbally: conceptual diagrams, key data tables, graphs showing trends, or powerful illustrative quotes from participants.</p>
<p>Keep text to an absolute minimum. Use a clean, professional design, high-contrast colours, and large fonts (minimum 24pt). The focus should be on you, the researcher, explaining your work, not on the screen behind you. Avoid complex animations or distracting transitions (Murray, 2015).</p>
<h2>20.4 Practising Delivery</h2>
<p>A thesis defence is a high-stakes performance, and like any performance, it requires rehearsal. Practise your presentation multiple times. Time yourself strictly; going over your allotted time is considered unprofessional and irritates the examiners.</p>
<p>Arrange a "mock viva" with your supervisors and other faculty members. Ask them to listen to your presentation and ask difficult questions. The mock viva is the best way to identify weaknesses in your presentation, practice thinking on your feet, and desensitise yourself to the anxiety of the actual event. Do not skip this crucial preparation step (Trafford and Leshem, 2008).</p>`;
}

module.exports = { ch16, ch17, ch18, ch19, ch20 };
