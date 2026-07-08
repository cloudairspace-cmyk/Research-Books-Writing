/**
 * Book 7 Generator: Expanded Part 3 (Chapters 11-15)
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

function ch11() {
  return `<h1>Chapter 11</h1><h2 style='font-size:2rem;margin-bottom:4px;'>Chapter Three — Methodology: Justifying Your Research Approach</h2>
<blockquote><strong>Learning Objectives</strong><br>By the end of this chapter, you will be able to:<br>* Structure a comprehensive methodology chapter for a thesis<br>* Distinguish between describing methods and justifying methodology<br>* Articulate your philosophical paradigm and its influence on your design<br>* Provide sufficient detail for replication while maintaining readability<br>* Address limitations and ethical considerations transparently</blockquote>
<h2>11.1 Description vs. Justification</h2>
<p>The methodology chapter is the engine room of the thesis. If the literature review asks "What do we know?", the methodology chapter asks "How will we find out what we do not know?" The most common weakness in thesis methodology chapters is that they describe what the researcher did (methods) but fail to explain why they did it (methodology). A strong methodology chapter is fundamentally a justification: it must convince the examiner that your chosen approach was the most appropriate way to answer your specific research questions (Creswell and Creswell, 2018).</p>
<p>Every decision you made during the research design process must be defended. Why this paradigm and not another? Why a qualitative approach rather than quantitative? Why this specific data collection method? Why this sample size? Why this analytical technique? For every "what," the examiner expects a "why," supported by references to methodological literature (Punch, 2016).</p>
\${wrapFig(svgTriangle('THE METHODOLOGY TRIANGLE',
  [
    { label: 'PARADIGM', sub: 'Philosophy & Worldview', color: NAVY },
    { label: 'METHODOLOGY', sub: 'Research Strategy', color: GOLD },
    { label: 'METHODS', sub: 'Tools & Techniques', color: TEAL }
  ],
  ['Informs Strategy', 'Determines Tools', 'Aligns with Philosophy']
), 'Figure 11.1 The relationship between paradigm, methodology, and methods.')}
<h2>11.2 Philosophical Foundations</h2>
<p>At the doctoral level (and increasingly at the master's level), the methodology chapter must explicitly address the philosophical foundations of the research. This involves stating and justifying your ontological position (what is the nature of reality?) and your epistemological position (how can we know that reality?). These philosophical choices dictate your paradigm (e.g., positivism, interpretivism, pragmatism), which in turn dictates your methodology and methods.</p>
<p>Explicitly linking these layers demonstrates deep methodological competence. For example, a pragmatist epistemology naturally leads to a mixed-methods design, as it privileges "what works" to answer the research question over strict adherence to either qualitative or quantitative purism. You must articulate these philosophical underpinnings to show that your research design is intellectually coherent, not just a random collection of techniques (Creswell and Creswell, 2018).</p>
<h2>11.3 Structuring the Chapter</h2>
<p>A standard methodology chapter follows a logical sequence, moving from the abstract to the concrete. It typically begins with a restatement of the research questions (to remind the reader of the goal), followed by the philosophical paradigm, the overall research approach (quantitative, qualitative, mixed), the specific research design (e.g., case study, experiment), the sampling strategy and participant selection, the data collection instruments and procedures, the data analysis techniques, and finally, ethical considerations and limitations (Punch, 2016).</p>
<p>In each section, the formula is the same: State what you did. Justify why you did it (with citations to methodological literature). Explain what alternatives you rejected, and why. By explicitly stating why you did not use a different method, you preempt the examiner's most likely critique.</p>
<h2>11.4 Addressing Limitations Transparently</h2>
<p>No research design is perfect. Every methodological choice involves trade-offs. The examiner knows this, and trying to hide the limitations of your study will only make you appear naive or dishonest. A strong methodology chapter explicitly acknowledges its limitations and explains what steps were taken to mitigate them.</p>
<p>If your sample size was small, acknowledge it, explain why it was necessary or unavoidable, and discuss how this limits the generalisability of your findings. Transparent acknowledgment of limitations demonstrates scholarly maturity and preempts criticism from the examiners. It tells the examiner: "I know this design has flaws, but I have accounted for them, and the resulting data is still valid within these specific boundaries" (Trafford and Leshem, 2008).</p>`;
}

function ch12() {
  return `<h1>Chapter 12</h1><h2 style='font-size:2rem;margin-bottom:4px;'>Chapter Four — Findings: Presenting What You Discovered</h2>
<blockquote><strong>Learning Objectives</strong><br>By the end of this chapter, you will be able to:<br>* Differentiate between presenting findings and discussing implications<br>* Structure a findings chapter logically according to your research design<br>* Present quantitative data clearly using tables, figures, and text<br>* Present qualitative data effectively using themes and quotations<br>* Maintain an objective, analytical tone while reporting results</blockquote>
<h2>12.1 The Purpose of the Findings Chapter</h2>
<p>The findings chapter (often called "Results" in the sciences) is where you present the original data generated by your study. Its primary purpose is to answer the research questions using the evidence you have collected. In a standard five-chapter thesis, the findings chapter should present the data clearly and objectively, without interpreting what the data means in the broader context of the literature (that interpretation belongs in the Discussion chapter).</p>
<p>The separation of findings and discussion is crucial for demonstrating that your data can stand alone before you apply your own interpretations to it (Murray, 2015). A common error is confusing the presentation of data with the presentation of findings. The examiner does not want to read raw data (e.g., interview transcripts or raw survey responses). They want to read the findings that emerged from your analysis of that data. Your job is to process, organise, and present the data in a way that makes the patterns and results immediately clear (Dunleavy, 2003).</p>
\${wrapFig(svgBars('DATA VS. FINDINGS VS. DISCUSSION', 'The progression from raw data to theoretical contribution', [
  { label: 'Raw Data', segments: [{ pct: 100, color: DGRAY, text: 'Unprocessed transcripts/numbers' }] },
  { label: 'Findings', segments: [{ pct: 70, color: NAVY, text: 'Identified themes & statistics' }, { pct: 30, color: '#e0e0e0', text: '' }] },
  { label: 'Discussion', segments: [{ pct: 30, color: '#e0e0e0', text: '' }, { pct: 70, color: GOLD, text: 'Interpretation & connection to literature' }] }
]), 'Figure 12.1 The findings chapter sits between raw data and theoretical discussion.')}
<h2>12.2 Structuring the Presentation</h2>
<p>The structure of your findings chapter should be driven by your research questions or your analytical framework, not by your data collection instruments. Do not structure the chapter as "Results from Survey Question 1," "Results from Survey Question 2." Instead, structure it thematically: "Findings Relating to Job Satisfaction," "Findings Relating to Productivity." This structure keeps the focus on the research problem rather than the mechanics of data collection (Trafford and Leshem, 2008).</p>
<p>For quantitative studies, the chapter typically begins with descriptive statistics (presenting the characteristics of the sample) before moving to inferential statistics (testing the hypotheses). For qualitative studies, the chapter is typically organised by the major themes that emerged from the analysis, with each theme supported by evidence from the data (Creswell and Creswell, 2018).</p>
<h2>12.3 Presenting Quantitative Data</h2>
<p>When presenting quantitative findings, use a combination of text, tables, and figures. The text should guide the reader through the data, highlighting the most important significant findings, unexpected results, and patterns. The tables and figures should provide the precise numerical details.</p>
<p>Never present the exact same information in both a table and the text; use the text to explain the table. Be precise in your statistical reporting, ensuring you include all necessary values (e.g., p-values, effect sizes, degrees of freedom) according to your discipline's conventions (e.g., APA formatting). Avoid making the chapter a "data dump"; select the most important analyses that directly answer your research questions.</p>
<h2>12.4 Presenting Qualitative Data</h2>
<p>When presenting qualitative findings, the challenge is managing the volume of text. Use direct quotations from participants to illustrate and support your themes, but do not rely on quotations to do the work of analysis. A quotation should provide evidence for a claim you have made in your own analytical voice.</p>
<p>Follow the "quote sandwich" rule: introduce the context of the quotation, present the quotation, and then explain how it illustrates the theme. Ensure you provide sufficient context for each quotation (e.g., participant pseudonym, role) so the examiner can evaluate its relevance without compromising anonymity (Punch, 2016).</p>`;
}

function ch13() {
  return `<h1>Chapter 13</h1><h2 style='font-size:2rem;margin-bottom:4px;'>Chapter Five — Discussion: Interpreting and Arguing Your Results</h2>
<blockquote><strong>Learning Objectives</strong><br>By the end of this chapter, you will be able to:<br>* Understand the distinct purpose of the discussion chapter compared to findings<br>* Elevate your findings to the level of conceptual or theoretical contribution<br>* Integrate your findings with the literature reviewed in Chapter Two<br>* Construct a compelling argument about what your findings mean<br>* Handle unexpected or contradictory results with academic maturity</blockquote>
<h2>13.1 The Most Important Chapter</h2>
<p>If the methodology chapter is the engine room, the discussion chapter is the bridge. It is here that you take the raw findings presented in Chapter Four, interpret what they mean, and connect them back to the literature reviewed in Chapter Two. The discussion chapter is where you make your original contribution to knowledge explicit. For many examiners, this is the most important chapter in the thesis, because it demonstrates your ability to think critically, conceptually, and independently about your own data (Trafford and Leshem, 2008).</p>
<p>A weak discussion chapter simply repeats the findings. A strong discussion chapter elevates the findings, moving from the specific details of your data to the broader conceptual or theoretical implications for the field. The discussion chapter must answer the fundamental "So what?" question. You found X; so what does that mean for our understanding of Y? (Murray, 2015).</p>
\${wrapFig(svgQuadrant('THE DISCUSSION MATRIX', 
  { top: 'AGREES WITH LITERATURE', bottom: 'DISAGREES WITH LITERATURE', left: 'EXPECTED FINDING', right: 'UNEXPECTED FINDING' },
  [
    { color: NAVY, title: 'Confirm & Extend', desc: 'Validates existing theory\\nin a new context' },
    { color: GOLD, title: 'Nuance & Refine', desc: 'Adds complexity to\\nestablished models' },
    { color: MAROON, title: 'Challenge & Revise', desc: 'Requires rewriting of\\naccepted principles' },
    { color: TEAL, title: 'Paradigm Shift', desc: 'Groundbreaking\\nrevolutionary data' }
  ]
), 'Figure 13.1 How to position your findings relative to the existing literature.')}
<h2>13.2 Integrating with the Literature</h2>
<p>The discussion chapter must engage deeply with the literature you established earlier in the thesis. This is where you close the loop. For every major finding, you must discuss how it relates to what is already known. Do your findings confirm existing theories? Do they contradict previous research? Do they provide a new explanation for a known phenomenon? Do they fill the specific gap you identified in your literature review? (Dunleavy, 2003).</p>
<p>When your findings agree with the literature, explain how they extend or strengthen that knowledge. When your findings disagree with the literature, you must explore why. Do not ignore contradictions. Discrepancies are often the source of the most interesting theoretical contributions. Perhaps the previous literature was based on a different cultural context, or used a different methodology, or examined a different population. Explaining these differences is the essence of doctoral-level analysis.</p>
<h2>13.3 Structuring the Argument</h2>
<p>The discussion chapter should be structured around your most significant contributions, not necessarily in the chronological order of your findings. Start strong: begin the chapter by clearly stating your most important finding and its primary implication. Then, organise the chapter into thematic sections that explore the meaning of the data.</p>
<p>Use confident, scholarly language. While you should avoid overstating your claims, you must also avoid being overly timid. If your data supports a strong conclusion, make that conclusion clearly and defend it robustly. Avoid endless hedging (e.g., "It might possibly be suggested that perhaps..."); instead, state your case directly ("The data indicate that...").</p>
<h2>13.4 Theoretical and Conceptual Contributions</h2>
<p>At the doctoral level, the discussion must move beyond empirical description to theoretical contribution. You must explain how your findings alter, refine, or challenge the theoretical framework you presented in Chapter Two. If you developed a conceptual model early in the thesis, the discussion chapter is where you present the revised, empirically tested version of that model. This transition from empirical data back to abstract theory is the hallmark of successful doctoral work (Trafford and Leshem, 2008).</p>`;
}

function ch14() {
  return `<h1>Chapter 14</h1><h2 style='font-size:2rem;margin-bottom:4px;'>Chapter Six — Conclusion: Closing With Impact and Contribution</h2>
<blockquote><strong>Learning Objectives</strong><br>By the end of this chapter, you will be able to:<br>* Synthesise the overall argument of the thesis without merely summarising<br>* Articulate your original contribution to knowledge clearly and confidently<br>* Discuss the practical and policy implications of your work<br>* Outline realistic and meaningful directions for future research<br>* Write a final closing statement that leaves a strong, lasting impression</blockquote>
<h2>14.1 The Final Impression</h2>
<p>The conclusion chapter is your final opportunity to speak to the examiner. It must provide a sense of closure, synthesise the entire journey of the thesis, and state unequivocally what you have contributed to the field. Unlike the discussion chapter, which focuses on detailed interpretation of specific findings, the conclusion chapter zooms out to consider the thesis as a whole. It should be relatively short (typically 3,000 to 5,000 words), punchy, and confident (Murray, 2015).</p>
<p>The biggest mistake in a conclusion chapter is introducing new data, new literature, or new arguments. The conclusion is not the place for surprises. Everything in the conclusion must emerge logically from the preceding chapters. If a point is important enough to be in the conclusion, it must have been fully developed in the discussion (Dunleavy, 2003).</p>
\${wrapFig(svgFlow('THE CONCLUSION STRUCTURE', [
  { text: 'Restate Problem', color: NAVY },
  { text: 'Synthesise Argument', color: GOLD },
  { text: 'Claim Contribution', color: TEAL },
  { text: 'State Implications', color: MAROON },
  { text: 'Future Research', color: NAVY }
]), 'Figure 14.1 The logical flow of a strong thesis conclusion.')}
<h2>14.2 Synthesising the Argument</h2>
<p>Begin the conclusion by returning to the original research problem and research questions stated in Chapter One. Briefly and clearly state how the thesis has answered these questions. Do not recount the methodology or the granular details of the findings; instead, provide a high-level synthesis of the argument. The examiner should be able to read your introduction and your conclusion together and see a perfectly matched problem and solution (Trafford and Leshem, 2008).</p>
<h2>14.3 The Contribution to Knowledge</h2>
<p>Every doctoral thesis (and to a lesser extent, master's thesis) must make an original contribution to knowledge. In the conclusion chapter, you must state explicitly what this contribution is. Do not leave it to the examiner to figure it out. Use clear, direct language: "This thesis makes three distinct contributions to knowledge. First..."</p>
<p>Your contributions might be empirical (new data), methodological (a new way of investigating a problem), or theoretical (a new concept or model). Claiming your contribution clearly is essential for passing the viva. If you cannot articulate what your thesis adds to the field in three bullet points, you are not ready to submit (Murray, 2011).</p>
<h2>14.4 Implications and Future Research</h2>
<p>A strong conclusion demonstrates that you understand the broader value of your work. Discuss the practical implications: how should practitioners, policymakers, or professionals change their behaviour based on your findings? Discuss the theoretical implications: how should other scholars adjust their models or theories? (Dunleavy, 2003).</p>
<p>Finally, outline directions for future research. This shows that you understand your study is part of an ongoing scholarly conversation, not the final word on the subject. Do not suggest future research that you should have done yourself (this invites criticism). Instead, suggest research that logically builds on your new findings, explores new contexts, or uses different methodologies to examine the questions your study has raised. End the thesis with a strong, memorable closing sentence.</p>`;
}

function ch15() {
  return `<h1>Chapter 15</h1><h2 style='font-size:2rem;margin-bottom:4px;'>Writing a Strong Abstract</h2>
<blockquote><strong>Learning Objectives</strong><br>By the end of this chapter, you will be able to:<br>* Understand the critical role the abstract plays in the examination process<br>* Structure a thesis abstract to include all necessary components<br>* Condense thousands of words into a concise, powerful summary<br>* Balance background, methodology, findings, and implications<br>* Edit the abstract for maximum impact and clarity</blockquote>
<h2>15.1 The Most Important 300 Words</h2>
<p>The abstract is the first thing the examiner will read, and it is often the only thing that future researchers will read when deciding whether to download your thesis. Despite its brevity (typically 300 to 500 words), it is one of the most difficult and important sections to write. A strong abstract sets a positive, confident tone for the entire examination; a weak, confusing, or poorly structured abstract makes the examiner immediately suspicious of the quality of the work that follows (Murray, 2011).</p>
<p>Because the abstract must summarise the entire completed project, it should be the very last thing you write. Trying to write the final abstract before the discussion and conclusion chapters are finished is impossible, because you do not yet know exactly what your final, refined argument will be (Dunleavy, 2003).</p>
\${wrapFig(svgBars('ABSTRACT PROPORTIONS', 'Ideal word distribution in a 300-word abstract', [
  { label: 'Background/Problem', segments: [{ pct: 15, color: NAVY, text: 'Context' }, { pct: 85, color: '#e0e0e0', text: '' }] },
  { label: 'Methodology', segments: [{ pct: 25, color: GOLD, text: 'Methods' }, { pct: 75, color: '#e0e0e0', text: '' }] },
  { label: 'Key Findings', segments: [{ pct: 40, color: TEAL, text: 'Results' }, { pct: 60, color: '#e0e0e0', text: '' }] },
  { label: 'Implications', segments: [{ pct: 20, color: MAROON, text: 'Impact' }, { pct: 80, color: '#e0e0e0', text: '' }] }
]), 'Figure 15.1 The balance of components in a successful abstract.')}
<h2>15.2 The Structure of a Thesis Abstract</h2>
<p>A successful thesis abstract is essentially a microcosm of the thesis itself. It must contain four distinct elements, carefully balanced for length. First, the background and problem (approx. 15%): what is the broad context and the specific gap or problem this thesis addresses?</p>
<p>Second, the methodology (approx. 25%): what approach, design, and methods were used to investigate the problem? Third, the key findings (approx. 40%): what were the most significant, original discoveries? Fourth, the implications and contribution (approx. 20%): what do these findings mean for theory and practice, and what is the original contribution to knowledge? (Swales and Feak, 2012).</p>
<h2>15.3 Common Abstract Mistakes</h2>
<p>The most common mistake is spending too much space on the background context and running out of space for the findings and contribution. The examiner already knows the background; they are reading the abstract to find out what you discovered. Another common error is being too vague: stating that "findings are discussed" rather than actually stating what the findings are. An abstract must be concrete and specific.</p>
<p>Finally, avoid citations, acronyms, and overly complex jargon in the abstract; it must be readable as a standalone document. An examiner from a slightly different sub-discipline should be able to read and perfectly understand your abstract without needing to consult a dictionary.</p>
<h2>15.4 Drafting and Refining</h2>
<p>To draft the abstract, try extracting the key topic sentences from your introduction, methodology, findings, and conclusion chapters. Paste these into a new document. You will likely have about 1,500 words. Your task is then to ruthlessly edit, condense, and rewrite this text until it flows logically as a single, coherent narrative of 300 to 500 words.</p>
<p>Read the abstract aloud. Give it to someone outside your discipline; if they cannot understand the core purpose and finding of your research, you need to simplify the language and clarify the argument. Every single word in the abstract must earn its place. Cut unnecessary adjectives, eliminate throat-clearing phrases, and ensure the active voice dominates (Trafford and Leshem, 2008).</p>`;
}

module.exports = { ch11, ch12, ch13, ch14, ch15 };
