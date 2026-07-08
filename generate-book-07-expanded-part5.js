/**
 * Book 7 Generator: Expanded Part 5 (Chapters 21-25)
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
      s += `<text x="${x + qW/2}" y="${y + 58 + li * 16}" text-anchor="middle" fill="rgba(255,255,255,0.85)" font-size="9.5" font-style="italic" font-family="Inter,sans-serif"${line.length > 22 ? ' textLength="' + (qW - 20) + '" lengthAdjust="spacingAndGlyphs"' : ''}>${line}</text>`;
    });
  });
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${vbW} ${vbH}" style="max-width:100%;height:auto;display:block;margin:0 auto;">${s}</svg>`;
}

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
    s += `<text x="${x}" y="${y - 5}" text-anchor="middle" fill="#fff" font-size="10.5" font-weight="700" font-family="Inter,sans-serif"${v.label.length > 12 ? ' textLength="' + (r*2 - 14) + '" lengthAdjust="spacingAndGlyphs"' : ''}>${v.label}</text>`;
    if (v.sub) s += `<text x="${x}" y="${y + 12}" text-anchor="middle" fill="rgba(255,255,255,0.8)" font-size="8.5" font-style="italic" font-family="Inter,sans-serif">${v.sub}</text>`;
  });
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${vbW} ${vbH}" style="max-width:100%;height:auto;display:block;margin:0 auto;">${s}</svg>`;
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

function ch21() {
  return `<h1>Chapter 21</h1><h2 style='font-size:2rem;margin-bottom:4px;'>Anticipating and Answering Examiners' Questions</h2>
<blockquote><strong>Learning Objectives</strong><br>By the end of this chapter, you will be able to:<br>* Anticipate the most common types of viva questions<br>* Formulate clear, structured answers to complex methodological queries<br>* Use the 'pause and structure' technique to avoid rambling responses<br>* Manage challenging or adversarial questions without becoming defensive<br>* Direct the conversation toward the strengths of your thesis</blockquote>
<h2>21.1 The Predictable Questions</h2>
<p>While every viva is unique, the questions examiners ask are remarkably predictable. They almost always fall into four categories: introductory questions designed to put you at ease; specific methodological questions; conceptual questions about the literature and your theoretical framework; and forward-looking questions about implications and future research.</p>
<p>The most common opening question is some variation of: "Why did you choose this topic?" or "Can you summarise your thesis in five minutes?" These questions are not tricks; they are designed to let you settle your nerves by speaking about something you know intimately. You must have a rehearsed, articulate answer to these introductory questions (Murray, 2015).</p>
\${wrapFig(svgQuadrant('VIVA QUESTION CATEGORIES', 
  { top: 'THEORY', bottom: 'METHOD', left: 'GENERAL', right: 'SPECIFIC' },
  [
    { color: NAVY, title: 'Theoretical Framework', desc: 'Why this model?\\nWhat alternatives?' },
    { color: TEAL, title: 'Specific Interpretation', desc: 'Why did you interpret\\nthis data point this way?' },
    { color: MAROON, title: 'Method Justification', desc: 'Why this sample?\\nWhat are the limits?' },
    { color: GOLD, title: 'Broad Contribution', desc: 'What is the main gap\\nyour work fills?' }
  ]
), 'Figure 21.1 The four main categories of questions asked during an oral defence.')}
<h2>21.2 Answering Methodological Critiques</h2>
<p>Examiners will inevitably probe the weaknesses of your methodology. "Why didn't you use a larger sample?" or "Why did you use a survey rather than interviews?" The worst way to answer these questions is to become defensive or to pretend your methodology was perfect.</p>
<p>The correct approach is the scholarly pivot: acknowledge the limitation, justify the choice based on the constraints of the study, and explain why the data remains valid despite the limitation. "That is a valid point. A larger sample would have provided greater statistical power. However, given the difficulty of accessing this specific population, 50 participants was the maximum feasible number within the timeframe. While this limits broad generalisability, the depth of the data collected still allows for robust theoretical conclusions..." (Trafford and Leshem, 2008).</p>
<h2>21.3 The Pause and Structure Technique</h2>
<p>When asked a complex question, the natural instinct is to start speaking immediately to fill the silence. This usually leads to a rambling, unstructured answer. Instead, employ the 'pause and structure' technique. When asked a question, take a visible breath, pause for three seconds, and structure your answer in your head before speaking.</p>
<p>You can even say: "That is a very interesting question. There are three parts to my answer. First..." This technique accomplishes two things: it gives you time to think, and it signals to the examiners that you are a careful, deliberate thinker. It also prevents them from interrupting you, as you have already signaled that your answer has multiple parts.</p>
<h2>21.4 Handling the Adversarial Examiner</h2>
<p>Occasionally, you will encounter an examiner who is aggressive, adversarial, or overly critical. It is crucial not to respond in kind. If an examiner attacks your theoretical framework, do not attack theirs. Maintain absolute professional courtesy.</p>
<p>Listen carefully, acknowledge their perspective ("I understand your position, and in a different context, that framework would certainly be applicable..."), and then calmly re-state the justification for your own choices ("...however, for the specific questions addressed in this thesis, framework X provided the necessary analytical tools because..."). This demonstrates that you can hold your own in an academic debate without resorting to hostility (Dunleavy, 2003).</p>`;
}

function ch22() {
  return `<h1>Chapter 22</h1><h2 style='font-size:2rem;margin-bottom:4px;'>Post-Viva: Managing Corrections and Revisions</h2>
<blockquote><strong>Learning Objectives</strong><br>By the end of this chapter, you will be able to:<br>* Understand the common outcomes of a viva and what they mean<br>* Interpret examiner reports objectively without emotional bias<br>* Create a systematic plan for addressing required corrections<br>* Communicate effectively with your supervisor during the revision phase<br>* Complete minor or major corrections efficiently to secure final approval</blockquote>
<h2>22.1 The Reality of Corrections</h2>
<p>A common misconception among candidates is that passing the viva with "no corrections" is the norm, and anything less is a failure. This is false. A completely clean pass is extremely rare. The vast majority of successful doctoral candidates pass with "minor corrections" (typically typographical errors, clarifying a few paragraphs, or adding a few recent references). A significant number pass with "major corrections" (requiring rewriting a chapter, conducting further analysis, or significantly altering the theoretical framework).</p>
<p>Receiving minor or major corrections means you have passed the intellectual threshold of the degree; the examiners simply require the final document to reflect the standard discussed in the viva. Do not view corrections as a punishment; view them as the final polish recommended by expert reviewers (Murray, 2011).</p>
\${wrapFig(svgFlow('THE CORRECTIONS PROCESS', [
  { text: 'Receive Report', color: MAROON },
  { text: 'Cooling Off Period', color: NAVY },
  { text: 'Create Action Plan', color: GOLD },
  { text: 'Execute Revisions', color: TEAL },
  { text: 'Submit Log & Thesis', color: NAVY }
]), 'Figure 22.1 The systematic process for handling post-viva revisions.')}
<h2>22.2 Interpreting the Examiner's Report</h2>
<p>When you receive the official examiner's report detailing the required corrections, it is natural to feel deflated. You thought you were finished, and now you have more work. Read the report once, then put it away for a few days. The "cooling off" period is essential to let the emotional reaction subside.</p>
<p>When you return to the report, read it objectively as a project manager. Break the examiners' prose down into a bulleted list of specific, actionable tasks. If the report says "The candidate needs to strengthen the connection between the findings and the literature in Chapter 5," your task is: "Rewrite sections 5.2 and 5.3 to include explicit comparisons with the papers cited in Chapter 2" (Dunleavy, 2003).</p>
<h2>22.3 The Table of Corrections</h2>
<p>The most effective way to manage and submit your corrections is to use a "Table of Corrections." Create a three-column table: Column 1 lists the examiner's exact comment; Column 2 details the exact action you took to address it; Column 3 lists the page number in the revised thesis where the change can be found.</p>
<p>This table serves two purposes. First, it keeps you organized, ensuring you do not miss a single required change. Second, when you submit your revised thesis to the internal examiner or committee chair for final approval, the table makes their job incredibly easy. They do not have to read the entire thesis again; they simply check your table against the required changes. Making the examiner's job easy is the fastest route to final approval (Trafford and Leshem, 2008).</p>
<h2>22.4 Managing Major Revisions</h2>
<p>If you are required to undertake major corrections (often given 6 to 12 months to complete), you must treat this as a structured project, not an ongoing hobby. Meet with your supervisor immediately to agree on an interpretation of the examiner's report. Sometimes examiners' comments are vague; you and your supervisor must agree on what constitutes compliance.</p>
<p>Set a strict timeline for the major revisions. Do not drift away from the project, or the momentum will be lost permanently. Major corrections require significant intellectual effort, but they are rarely fatal if you address them systematically and maintain communication with your supervisor.</p>`;
}

function ch23() {
  return `<h1>Chapter 23</h1><h2 style='font-size:2rem;margin-bottom:4px;'>From Thesis to Publication: Planning Your Outputs</h2>
<blockquote><strong>Learning Objectives</strong><br>By the end of this chapter, you will be able to:<br>* Understand the difference between a thesis chapter and a journal article<br>* Identify the core 'publishable units' within your broader research<br>* Select appropriate target journals for your work<br>* Navigate the peer-review process and handle rejection constructively<br>* Balance the demands of publication with the completion of the thesis</blockquote>
<h2>23.1 A Thesis is Not a Book (or an Article)</h2>
<p>A common error made by newly minted researchers is attempting to copy and paste a chapter of their thesis and submit it directly to a journal. A thesis chapter and a journal article are fundamentally different genres, written for different audiences, serving different purposes. A thesis is written to prove your competence to examiners; a journal article is written to share interesting, novel findings with busy peers.</p>
<p>A thesis chapter contains exhaustive methodological detail and exhaustive literature reviews to prove you have read everything. A journal article requires only the methodology necessary to replicate the study, and only the literature immediately relevant to the specific finding being reported. Converting a chapter to an article requires aggressive pruning, restructuring, and a shift in tone from defensive to assertive (Murray, 2013).</p>
\${wrapFig(svgCompare('THESIS VS JOURNAL ARTICLE',
  { title: 'THE THESIS', items: ['Audience: Examiners', 'Purpose: Prove competence', 'Exhaustive literature review', 'Detailed methodology justification', 'Defensive, cautious tone'] },
  { title: 'JOURNAL ARTICLE', items: ['Audience: Busy academic peers', 'Purpose: Share novel findings', 'Highly focused literature review', 'Concise methodology section', 'Assertive, confident tone'] }
), 'Figure 23.1 The shift in genre required when converting thesis chapters into publications.')}
<h2>23.2 Identifying Publishable Units</h2>
<p>Your thesis likely contains too much information for a single article. You must dissect it into "publishable units." For a standard empirical thesis, you might extract three papers: one based on your literature review (a systematic review or conceptual paper), one reporting the primary empirical findings, and perhaps a third focusing on a novel methodological approach or a secondary dataset.</p>
<p>For each publishable unit, identify the core message. What is the single most important thing this paper tells the field? Everything in the article the literature, the methods, the discussion must support that single core message. If a piece of data is interesting but does not support the core message, save it for another paper.</p>
<h2>23.3 Selecting Target Journals</h2>
<p>Choosing the right journal is a strategic decision. Aiming too high (e.g., submitting a niche qualitative study to Nature or Science) guarantees a rapid desk rejection. Aiming too low diminishes the impact of your work. Discuss target journals with your supervisor; their experience is invaluable here.</p>
<p>Look at your own reference list. Which journals did you cite most frequently in your literature review? Those journals are clearly publishing work in your area and are logical targets. Review the "Aims and Scope" of your target journals carefully. If your paper does not fit their scope, the editor will reject it without sending it to peer review, wasting months of your time.</p>
<h2>23.4 Surviving Peer Review</h2>
<p>Peer review is a brutal process. Receiving a "Revise and Resubmit" (R&R) is a major victory, even if the reviewer comments are harsh. When you receive reviewer comments, use the same strategy as handling viva corrections: read them, get angry, put them away for a week, and then return to them objectively.</p>
<p>When you resubmit, you must include a detailed "Response to Reviewers" document. Address every single comment, explaining exactly how you changed the manuscript, or politely and firmly explaining why you chose not to. Never ignore a reviewer's comment. The peer review process is not about proving the reviewers wrong; it is about working with them to produce a stronger paper (Murray, 2013).</p>`;
}

function ch24() {
  return `<h1>Chapter 24</h1><h2 style='font-size:2rem;margin-bottom:4px;'>The Emotional Aftermath of Submission</h2>
<blockquote><strong>Learning Objectives</strong><br>By the end of this chapter, you will be able to:<br>* Recognise the common phenomenon of post-submission depression<br>* Manage the transition from intense academic focus to a void of structure<br>* Rebuild relationships that were strained during the final stages of writing<br>* Handle the uncertainty of waiting for examination results<br>* Plan a healthy transition to your next professional or academic role</blockquote>
<h2>24.1 The Void Following Submission</h2>
<p>For three or four years, the thesis has been the central organizing principle of your life. It has dictated your schedule, consumed your weekends, and provided a constant, overarching purpose. When you finally hit "Submit" or hand over the bound copies, you might expect a wave of euphoria. Instead, many candidates experience a profound sense of emptiness, disorientation, and sometimes mild depression.</p>
<p>This "post-submission void" is entirely normal. Your brain has been operating in a state of high-stress hyper-focus for months. When that stress is abruptly removed, the physiological and psychological crash can be significant. Understanding that this emotional flatline is a predictable biochemical response, rather than a sign that your thesis was terrible or that your life lacks meaning, is crucial for navigating the transition.</p>
\${wrapFig(svgRadial('POST-SUBMISSION EXPERIENCES', 'COMMON\\nFEELINGS', [
  { num: 1, text: 'Profound Exhaustion' },
  { num: 2, text: 'Loss of Identity/Purpose' },
  { num: 3, text: 'Anxiety About the Viva' },
  { num: 4, text: 'Guilt When Relaxing' },
  { num: 5, text: 'Disconnection from Peers' }
]), 'Figure 24.1 Common emotional responses experienced after submitting a thesis.')}
<h2>24.2 Rebuilding the Non-Academic Self</h2>
<p>During the final year of a PhD or master's, candidates often sacrifice their hobbies, their health routines, and their social lives to meet the deadline. After submission, you must deliberately rebuild your "non-academic self." Do not immediately dive into writing journal articles or frantically applying for post-docs in the first week. Give yourself permission to disconnect completely from the university for at least a short period.</p>
<p>Reconnect with the friends and family who supported you (and whom you likely neglected). Return to the activities that provided you joy before the thesis consumed you. Rebuilding this broader identity is essential because the academic job market is precarious and rejection-heavy; you need a stable sense of self-worth that is not entirely dependent on academic success.</p>
<h2>24.3 Managing the Waiting Period</h2>
<p>Depending on your institution, you may wait anywhere from one to four months between submitting the thesis and sitting the viva. This waiting period is agonizing. Many candidates torture themselves by re-reading their submitted thesis, finding inevitable typos, and convincing themselves they are going to fail.</p>
<p>Do not open the thesis document for at least a month after submission. Finding a typo on page 142 changes nothing, but it will ruin your weekend. When you do return to the thesis to prepare for the viva (as discussed in Chapter 20), read it not as an anxious author, but as an interested examiner. Trust that the document you submitted, while not perfect, represents years of rigorous scholarly effort.</p>
<h2>24.4 Planning the Next Step (Without Panic)</h2>
<p>As the viva approaches, the question "What next?" becomes unavoidable. The academic job market is highly competitive, and a doctoral degree no longer guarantees a tenure-track position. It is vital to explore alternative careers (industry, policy, administration) early, without viewing them as a "failure" or "Plan B."</p>
<p>The skills you developed during your research complex project management, data analysis, critical synthesis, and high-level written communication are immensely valuable outside academia. Approach your career planning with the same systematic, evidence-based mindset you applied to your research project.</p>`;
}

function ch25() {
  return `<h1>Chapter 25</h1><h2 style='font-size:2rem;margin-bottom:4px;'>Conclusion: The Beginning of Your Research Career</h2>
<blockquote><strong>Learning Objectives</strong><br>By the end of this chapter, you will be able to:<br>* Reflect on the transformation from student to independent researcher<br>* Recognize the transferability of research skills to diverse career paths<br>* Establish ongoing habits for continuous intellectual growth<br>* Maintain connection with the scholarly community post-graduation<br>* Embrace the title and responsibilities of an expert in your field</blockquote>
<h2>25.1 The True Value of the Degree</h2>
<p>When you began this journey, the goal was the degree—the piece of paper that confers the title of Master or Doctor. But as you stand at the end of the process, you will likely realize that the thesis itself is just a byproduct. The true value of the degree is the transformation it has forced upon you.</p>
<p>You have learned how to take a complex, unstructured problem, break it down into manageable components, design a rigorous methodology to investigate it, execute that plan over a period of years despite setbacks, and communicate your findings clearly to an expert audience. You have learned how to accept harsh criticism without collapsing, how to defend your ideas logically, and how to manage your own psychology during periods of intense stress. These are not merely academic skills; they are profound professional and personal capabilities.</p>
\${wrapFig(svgTriangle('THE RESEARCHER\\'S TRANSFORMATION',
  [
    { label: 'CONSUMER', sub: 'Passive learning', color: MAROON },
    { label: 'APPRENTICE', sub: 'Guided execution', color: GOLD },
    { label: 'EXPERT', sub: 'Independent production', color: NAVY }
  ],
  ['Undergraduate Phase', 'Early Thesis Phase', 'Post-Viva Professional']
), 'Figure 25.1 The fundamental identity shift completed by the thesis journey.')}
<h2>25.2 Transferable Skills in a Changing World</h2>
<p>Whether you remain in academia or transition to industry, government, or the non-profit sector, the skills forged during your research degree are your greatest asset. The ability to distinguish reliable evidence from opinion is increasingly rare and valuable. The capacity to read deeply, synthesize large volumes of complex information, and produce coherent reports is in high demand across all sectors.</p>
<p>Do not sell yourself short by thinking of yourself only as "an expert in 16th-century French poetry" or "a specialist in microbial fuel cells." You are an expert in project management, data analysis, critical thinking, and written communication. Learn to translate your academic achievements into language that non-academic employers understand and value.</p>
<h2>25.3 Maintaining the Scholarly Habit</h2>
<p>Leaving the formal university environment does not mean leaving the life of the mind. The most successful professionals are those who maintain the habits of a researcher throughout their careers. Continue to read widely, not just within your professional niche but across disciplines. Maintain your systematic curiosity.</p>
<p>When faced with a professional challenge, apply the research mindset: what is the actual problem? What evidence do we have? What methodology should we use to find out what we don't know? How can we test our assumptions before committing resources? The research mindset is a powerful tool for navigating an increasingly complex and ambiguous world.</p>
<h2>25.4 A Final Word</h2>
<p>Writing a thesis or dissertation is one of the most difficult intellectual challenges a person can undertake. It requires intellect, yes, but more importantly, it requires resilience, discipline, and a tolerance for sustained discomfort. If you have completed this journey, you have proven something fundamental about your character.</p>
<p>Be proud of what you have accomplished. You have moved beyond the boundaries of established knowledge and added a small, original piece to the sum total of human understanding. You are no longer just a student; you are a researcher, a scholar, and an expert. Welcome to the community.</p>`;
}

module.exports = { ch21, ch22, ch23, ch24, ch25 };
