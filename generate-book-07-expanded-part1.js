/**
 * Book 7 Generator: Expanded Part 1 (Chapters 1-5)
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

function ch01() {
  return `<h1>Chapter 1</h1><h2 style='font-size:2rem;margin-bottom:4px;'>Understanding What a Thesis or Dissertation Requires of You</h2>
<blockquote><strong>Learning Objectives</strong><br>By the end of this chapter, you will be able to:<br>* Distinguish the requirements of a doctoral thesis from an undergraduate or master's dissertation<br>* Articulate the concept of an 'original contribution to knowledge'<br>* Understand the mindset shift required for independent research<br>* Identify common misconceptions about the thesis process<br>* Establish realistic expectations for the emotional and intellectual journey ahead</blockquote>
<h2>1.1 The Great Transition</h2>
<p>The journey from student to independent researcher is one of the most significant intellectual transitions you will ever make. For most of your academic career, success has been defined by your ability to consume, understand, and reproduce established knowledge. You read the textbooks, you attended the lectures, and you wrote essays that synthesised what experts had already discovered. A thesis or dissertation requires a fundamental shift: you are no longer just consuming knowledge; you are producing it. This transition is often disorienting, and understanding exactly what is required of you is the first step toward a successful defence.</p>
<p>Many candidates begin their doctoral or master's journey assuming that it is simply an extension of their previous studies, just longer and more difficult. This is a profound misunderstanding. A thesis is not a very long essay. It is an argument, sustained over tens of thousands of words, based on original empirical or theoretical research, that makes a distinct contribution to a field of study. Recognising this difference early can save you months of misdirected effort and frustration (Dunleavy, 2003).</p>
\${wrapFig(svgCompare('STUDENT VS. RESEARCHER MINDSET',
  { title: 'THE STUDENT', items: ['Consumes existing knowledge', 'Seeks the "right" answer', 'Relies on external structure', 'Aims to demonstrate learning', 'Values certainty and closure'] },
  { title: 'THE RESEARCHER', items: ['Produces new knowledge', 'Explores open questions', 'Creates their own structure', 'Aims to contribute to the field', 'Embraces ambiguity and debate'] }
), 'Figure 1.1 The intellectual transition required for thesis success.')}
<h2>1.2 Defining the Original Contribution</h2>
<p>For doctoral candidates, the phrase "original contribution to knowledge" is the defining requirement of the degree. But what exactly does it mean? It does not mean you must discover something that fundamentally alters human history or wins a Nobel Prize. That is a paralyzing expectation. In the context of a thesis, originality is usually much more focused and incremental.</p>
<p>An original contribution can take many forms. You might apply an existing methodology to a new population or context. You might synthesise two previously disconnected theoretical frameworks to create a new way of understanding a phenomenon. You might uncover archival data that has never been analysed before. Or you might conduct an empirical study that challenges a widely held assumption in your field. The key is that your work must add something new, however small, to the scholarly conversation. You are laying one solid brick in the vast wall of human knowledge, not building the entire wall yourself (Murray, 2011).</p>
\${wrapFig(svgPyramid('TYPES OF ORIGINAL CONTRIBUTION', [
  { text: 'Theoretical Innovation (New models/concepts)', color: GOLD, num: '1' },
  { text: 'Methodological Innovation (New ways of measuring/analysing)', color: NAVY, num: '2' },
  { text: 'Empirical Novelty (New data or unstudied populations)', color: NAVY, num: '3' },
  { text: 'Contextual Application (Existing ideas applied to new areas)', color: TEAL, num: '4' },
  { text: 'Synthesis (Connecting disparate literature in a new way)', color: '#5a7a6a', num: '5' }
]), 'Figure 1.2 Originality can be achieved at multiple levels, not just theoretical breakthroughs.')}
<h2>1.3 The Master's vs. Doctoral Level</h2>
<p>It is important to clearly distinguish between the requirements of a master's dissertation and a doctoral thesis. A master's dissertation is primarily a demonstration of competence. The examiners want to see that you can conceptualise a research problem, design a viable study, execute it ethically, and write it up coherently. An original contribution is welcomed but is not usually the primary requirement. You are demonstrating that you know how to handle the tools of the trade.</p>
<p>A doctoral thesis, however, demands "doctoralness." This means not just competence in execution, but mastery of the literature, sophisticated conceptualisation, and independent intellectual leadership. You must not only use the tools of the trade but show that you can refine them or use them to uncover something genuinely new. The examiner of a doctoral thesis is looking for a peer, someone who can defend their methodological choices and debate the broader implications of their findings on equal footing (Trafford and Leshem, 2008).</p>
<h2>1.4 The Emotional Journey</h2>
<p>Understanding the intellectual requirements is only half the battle; understanding the emotional requirements is equally crucial. Writing a thesis is an endurance event. It is characterised by periods of intense enthusiasm followed by periods of profound doubt, isolation, and imposter syndrome. You will almost certainly reach a point where you believe your research is worthless, your writing is terrible, and you are incapable of finishing.</p>
<p>Anticipating this emotional arc is protective. When the "valley of despair" arrives usually somewhere in the second year for full-time doctoral students you will recognise it as a normal part of the process rather than a sign of personal failure. The candidates who successfully defend their theses are not necessarily the most intellectually gifted; they are the most resilient. They are the ones who learn to tolerate ambiguity, accept criticism without defensiveness, and keep writing even when they feel uninspired. Your thesis will test your character as much as it tests your intellect.</p>`;
}

function ch02() {
  return `<h1>Chapter 2</h1><h2 style='font-size:2rem;margin-bottom:4px;'>Choosing a Topic That Is Feasible, Original, and Worth Three Years</h2>
<blockquote><strong>Learning Objectives</strong><br>By the end of this chapter, you will be able to:<br>* Identify the characteristics of a strong, viable research topic<br>* Balance your personal passion with academic and practical constraints<br>* Use the literature to find genuine gaps rather than artificial ones<br>* Narrow a broad area of interest into a specific, answerable research question<br>* Evaluate the feasibility of a topic before committing to it</blockquote>
<h2>2.1 The Danger of the "Perfect" Topic</h2>
<p>Choosing a topic is often the most anxiety-inducing part of the early research journey. Many candidates spend months, sometimes years, searching for the "perfect" topic a topic that is groundbreaking, completely original, endlessly fascinating, and guaranteed to secure an academic career. This search is a trap. The perfect topic does not exist. A thesis topic only needs to be "good enough" viable, answerable, and capable of sustaining your interest for the duration of the project.</p>
<p>A common mistake is choosing a topic that is too broad. "The impact of social media on mental health" is not a thesis topic; it is an entire sub-discipline. A thesis must be laser-focused. It might be "The impact of algorithmic feed changes on the self-reported anxiety levels of university students during exam periods." Narrowing the topic does not make the research less important; it makes the research possible. Depth, not breadth, is the hallmark of doctoral and high-level master's research (Dunleavy, 2003).</p>
\${wrapFig(svgRadial('CHARACTERISTICS OF A STRONG TOPIC', 'STRONG\\nTOPIC', [
  { num: 1, text: 'Clear Gap in Literature' },
  { num: 2, text: 'Methodologically Feasible' },
  { num: 3, text: 'Personal Interest' },
  { num: 4, text: 'Access to Data/Participants' },
  { num: 5, text: 'Appropriate Scope' }
]), 'Figure 2.1 The five essential characteristics of a viable thesis topic.')}
<h2>2.2 Finding the Gap in the Literature</h2>
<p>A viable topic must address a gap in the existing knowledge. However, finding a gap is not simply a matter of finding something no one has ever studied. Sometimes, things have not been studied because they are not important or not researchable. A genuine gap is a missing piece of a puzzle that the scholarly community actually cares about. It is a tension between competing theories, a contradiction in recent empirical findings, or a methodology that has been applied in one context but never in another.</p>
<p>To find these gaps, you must read strategically. Do not just read the findings of recent papers; read their "Limitations" and "Directions for Future Research" sections. This is where established scholars explicitly state what needs to be done next. Engaging with these recommendations is one of the most reliable ways to identify a topic that is both original and relevant to current scholarly debates (Murray, 2011).</p>
<h2>2.3 The Feasibility Check</h2>
<p>Passion for a topic is necessary, but it is not sufficient. A topic must be feasible within the constraints of your degree programme. Feasibility encompasses several dimensions: time, money, access, and skills.</p>
<p><strong>Time:</strong> Can this study realistically be completed within your enrolment period? A longitudinal study requiring five years of data collection is not feasible for a three-year PhD. <strong>Money:</strong> Does the research require expensive equipment, travel, or participant compensation that you cannot fund? <strong>Access:</strong> Do you need to interview high-level politicians, access classified documents, or recruit vulnerable populations? If you cannot guarantee access to your data source, the topic is not viable, no matter how interesting it is. <strong>Skills:</strong> Does the topic require advanced statistical modelling, language proficiency, or programming skills that you do not possess and cannot realistically acquire in time?</p>
\${wrapFig(svgFlow('THE TOPIC REFINEMENT FUNNEL', [
  { text: 'Broad Interest', color: NAVY },
  { text: 'Literature Review', color: GOLD },
  { text: 'Identify Gap', color: NAVY },
  { text: 'Feasibility Check', color: TEAL },
  { text: 'Final Topic', color: MAROON }
]), 'Figure 2.2 The systematic process of refining an interest into a researchable topic.')}
<h2>2.4 Passion vs. Pragmatism</h2>
<p>You will be living with this topic every day for several years. If you are bored by it in month one, you will be miserable by year three. However, extreme passion can also be a liability if it blinds you to contradictory evidence or makes you defensive when receiving feedback. The ideal topic sits at the intersection of your personal interest, your supervisor's expertise, and the broader needs of the academic community.</p>
<p>Remember that your thesis topic does not define your entire academic career. It is simply the first major project you undertake as an independent researcher. Once you have your degree, you can pivot to related or entirely new areas. Do not paralyze yourself by treating the topic selection as a lifetime commitment. Choose a viable, interesting question, design a robust way to answer it, and get to work.</p>`;
}

function ch03() {
  return `<h1>Chapter 3</h1><h2 style='font-size:2rem;margin-bottom:4px;'>The Research Proposal: Getting Approval to Begin</h2>
<blockquote><strong>Learning Objectives</strong><br>By the end of this chapter, you will be able to:<br>* Understand the distinct purpose of a formal research proposal<br>* Structure a proposal that inspires confidence in your committee<br>* Clearly articulate your research questions and objectives<br>* Justify your chosen methodology against potential alternatives<br>* Anticipate and address potential ethical and practical risks</blockquote>
<h2>3.1 The Purpose of the Proposal</h2>
<p>The research proposal is often viewed by candidates as a bureaucratic hurdle, a piece of paperwork standing between them and the "real work" of research. This is a dangerous misconception. The proposal is the blueprint for your entire project. Its primary purpose is to convince a panel of experienced academics your committee or institutional review board that your proposed research is significant, original, and above all, practically executable (Punch, 2016).</p>
<p>A successful proposal answers three fundamental questions: What do you plan to do? Why is it worth doing? And how, exactly, will you do it? If the proposal is vague, overly ambitious, or methodologically weak, the committee will, quite rightly, refuse to approve it. They are not trying to obstruct you; they are trying to prevent you from embarking on a project that will ultimately fail or cause you years of unnecessary struggle.</p>
\${wrapFig(svgBars('COMPONENTS OF A SUCCESSFUL PROPOSAL', 'Relative importance of different sections (approximate effort)', [
  { label: 'Introduction/Problem', segments: [{ pct: 15, color: NAVY, text: '' }] },
  { label: 'Literature Review/Gap', segments: [{ pct: 25, color: GOLD, text: '' }] },
  { label: 'Methodology/Design', segments: [{ pct: 40, color: TEAL, text: '' }] },
  { label: 'Timeline & Ethics', segments: [{ pct: 20, color: MAROON, text: '' }] }
]), 'Figure 3.1 A strong proposal heavily weights the specific methodology and execution plan.')}
<h2>3.2 Formulating Clear Research Questions</h2>
<p>The heart of the proposal is the research question (or set of questions). Everything else the literature review, the methodology, the analysis flows directly from these questions. If your questions are muddy, your entire project will be muddy. Good research questions are open-ended (they cannot be answered with a simple "yes" or "no"), focused, and empirically answerable. They should not be normative questions about what "should" be done, but empirical questions about what is happening, why it is happening, or how it works.</p>
<p>Avoid the temptation to include too many research questions. A doctoral thesis can typically handle one overarching question and three or four specific sub-questions. A master's dissertation should be even more constrained. The committee will look closely at your questions to determine if they align with the scope of the degree. Over-promising in your research questions is a common reason for proposal rejection.</p>
<h2>3.3 Methodological Justification</h2>
<p>The most heavily scrutinized section of your proposal will be the methodology. It is not enough to simply state that you will conduct interviews or run a survey. You must justify why this specific approach is the best way to answer your specific research questions. If you propose a qualitative case study, why is a quantitative survey inappropriate? If you propose a grounded theory approach, why not phenomenology?</p>
<p>You must also provide concrete details. Who exactly are the participants? How will they be recruited? What specific analytical techniques will you apply to the data? Vague statements like "the data will be analyzed using thematic analysis" are insufficient. The committee needs to see that you have thought through the mechanics of the research process, anticipated potential obstacles, and developed strategies to overcome them (Creswell and Creswell, 2018).</p>
\${wrapFig(svgQuadrant('PROPOSAL RISK ASSESSMENT', 
  { top: 'HIGH IMPACT', bottom: 'LOW IMPACT', left: 'LOW PROBABILITY', right: 'HIGH PROBABILITY' },
  [
    { color: GOLD, title: 'Monitor', desc: 'Equipment failure\\nMinor delays' },
    { color: MAROON, title: 'Mitigate Urgently', desc: 'Failure to recruit\\nEthics rejection' },
    { color: '#5a7a6a', title: 'Accept', desc: 'Software updates\\nFormatting issues' },
    { color: NAVY, title: 'Contingency Plan', desc: 'Key informant leaves\\nDataset unavailable' }
  ]
), 'Figure 3.2 Committees look for evidence that you have assessed and planned for project risks.')}
<h2>3.4 Ethics and Risk Management</h2>
<p>Modern academic research operates under strict ethical guidelines. Your proposal must explicitly address how you will protect human participants, manage sensitive data, and ensure informed consent. Even if your research does not involve human subjects (e.g., archival research or theoretical physics), you must address issues of academic integrity and data management.</p>
<p>Furthermore, a strong proposal includes a risk management plan. What will you do if your primary data source falls through? What is your backup plan if your survey response rate is too low? Demonstrating that you have "Plan B" (and sometimes "Plan C") shows maturity and drastically increases the committee's confidence in your ability to see the project through to completion. The proposal is your opportunity to prove that you are a careful, rigorous, and prepared researcher.</p>`;
}

function ch04() {
  return `<h1>Chapter 4</h1><h2 style='font-size:2rem;margin-bottom:4px;'>Building a Realistic Timeline and Project Plan</h2>
<blockquote><strong>Learning Objectives</strong><br>By the end of this chapter, you will be able to:<br>* Translate a high-level research proposal into a granular project plan<br>* Use project management tools (like Gantt charts) effectively<br>* Account for the "planning fallacy" and hidden time sinks in research<br>* Set meaningful, achievable milestones to maintain momentum<br>* Adapt your timeline dynamically when inevitable delays occur</blockquote>
<h2>4.1 The Planning Fallacy in Academia</h2>
<p>One of the most robust findings in psychology is the "planning fallacy" the human tendency to underestimate the time required to complete a future task, even when we have past experience showing that similar tasks take longer than expected. In academic research, the planning fallacy is practically an occupational hazard. Candidates consistently believe they can write a chapter in a week, gain ethical approval in a month, and collect all their data over a short holiday.</p>
<p>When these unrealistic deadlines are inevitably missed, the result is not just a delayed project, but severe psychological distress, guilt, and loss of motivation. Building a realistic timeline is therefore not just an administrative necessity; it is a critical strategy for managing your mental health and maintaining your momentum over a multi-year project. A realistic plan acknowledges that research is inherently messy and unpredictable (Murray, 2011).</p>
\${wrapFig(svgFlow('THE REALISTIC RESEARCH TIMELINE', [
  { text: 'Planning & Ethics (Months 1-6)', color: NAVY },
  { text: 'Data Collection (Months 7-15)', color: GOLD },
  { text: 'Analysis (Months 16-22)', color: NAVY },
  { text: 'Writing (Months 23-30)', color: TEAL },
  { text: 'Revision & Submission (Months 31-36)', color: MAROON }
]), 'Figure 4.1 A typical macro-level timeline for a three-year doctoral project.')}
<h2>4.2 From Macro to Micro Planning</h2>
<p>A project plan must operate on multiple levels. The macro-level plan outlines the entire three or four years of a PhD (or the months of a master's), breaking the project into major phases: coursework, proposal defence, ethical approval, data collection, analysis, drafting, and final revision. This level is essential for ensuring you meet institutional deadlines, but it is virtually useless for guiding your daily work.</p>
<p>You must translate the macro plan into meso (monthly/termly) and micro (weekly/daily) plans. A macro milestone might be "Complete Literature Review Chapter." The meso plan breaks this down: Month 1: Search and screen articles; Month 2: Read and code key themes; Month 3: Draft sections 1-3; Month 4: Draft conclusion and revise. The micro plan dictates your daily action: "Tuesday, 9 AM - 11 AM: Write 500 words on the evolution of theory X." Without this translation to the micro-level, the macro milestones simply loom in the distance, inducing anxiety without prompting action (Dunleavy, 2003).</p>
<h2>4.3 Identifying the Hidden Time Sinks</h2>
<p>When building your timeline, you must explicitly schedule time for tasks that are often invisible but incredibly time-consuming. These "hidden time sinks" include:</p>
<p><strong>1. Ethics and Administrative Approval:</strong> Ethical review boards meet infrequently and often request revisions. Getting approval can easily take three to six months. Do not assume you can start data collection immediately. <strong>2. Recruitment:</strong> Finding participants is almost always harder and slower than anticipated. If you need 30 interviewees, plan for the time it takes to contact 150 people. <strong>3. Transcription and Data Cleaning:</strong> Transcribing a one-hour interview can take four to six hours. Cleaning a messy dataset can take weeks before any actual analysis begins. <strong>4. Formatting and Referencing:</strong> Formatting the final thesis to strict institutional guidelines, compiling the table of contents, and ensuring every reference is perfectly formatted can take an entire month at the end of the project.</p>
\${wrapFig(svgRadial('HIDDEN TIME SINKS', 'TIME\\nSINKS', [
  { num: 1, text: 'Ethics Approval Delays' },
  { num: 2, text: 'Participant Recruitment' },
  { num: 3, text: 'Data Cleaning & Prep' },
  { num: 4, text: 'Formatting & Referencing' },
  { num: 5, text: 'Software Learning Curves' }
]), 'Figure 4.2 Account for these invisible but significant time sinks in your project plan.')}
<h2>4.4 Using Gantt Charts and Milestones</h2>
<p>A Gantt chart is a visual representation of your project schedule, showing the start and finish dates of the various elements of your research. It is a powerful tool because it forces you to map out dependencies (e.g., you cannot begin data analysis until data collection is complete) and identifies periods where tasks overlap. Many universities require a Gantt chart in the research proposal.</p>
<p>However, a plan is not a prison. The purpose of the timeline is not to punish you when you fall behind, but to serve as a diagnostic tool. If you are consistently missing your micro-deadlines, your plan is unrealistic, or your working methods need adjustment. Set regular, formal review points with your supervisor to assess your progress against the timeline and, crucially, to revise the timeline to reflect reality. Flexibility, combined with forward planning, is the key to crossing the finish line.</p>`;
}

function ch05() {
  return `<h1>Chapter 5</h1><h2 style='font-size:2rem;margin-bottom:4px;'>Managing Your Supervisor Relationship Strategically</h2>
<blockquote><strong>Learning Objectives</strong><br>By the end of this chapter, you will be able to:<br>* Understand the supervisor's role and their structural constraints<br>* Shift from a dependent student mindset to a proactive project manager mindset<br>* Establish clear, mutual expectations regarding communication and feedback<br>* Prepare effectively for supervisory meetings to maximise their value<br>* Navigate the complexities of co-supervision and conflicting advice</blockquote>
<h2>5.1 The Most Important Academic Relationship</h2>
<p>The relationship between a research candidate and their supervisor (or advisor) is the single most critical factor in determining the success and the emotional quality of the thesis journey. A strong, supportive supervisory relationship can make the arduous process of research deeply rewarding. A dysfunctional relationship can lead to delayed completion, intense stress, and, in severe cases, the abandonment of the degree.</p>
<p>The fundamental mistake candidates make is adopting a passive, subordinate posture, waiting for the supervisor to tell them what to do, what to read, and when to write. This is a continuation of the undergraduate mindset. At the postgraduate research level, you are the project manager. The thesis is your project. Your supervisor is a senior consultant, a mentor, and a critical sounding board, but they are not your boss in the traditional sense, and they will not do the work for you. Managing this relationship proactively "managing up" is an essential professional skill (Wisker, 2012).</p>
\${wrapFig(svgCompare('SUPERVISOR EXPECTATIONS',
  { title: 'WHAT STUDENTS EXPECT', items: ['Detailed, line-by-line editing', 'Emotional support and therapy', 'Step-by-step project management', 'Immediate responses to emails', 'To be told exactly what to do next'] },
  { title: 'WHAT SUPERVISORS PROVIDE', items: ['High-level conceptual critique', 'Academic mentorship', 'Guidance on academic standards', 'Network access and career advice', 'Feedback on submitted work'] }
), 'Figure 5.1 Misaligned expectations are the primary source of conflict in supervision.')}
<h2>5.2 Understanding the Supervisor's Reality</h2>
<p>To manage the relationship effectively, you must understand your supervisor's working reality. Academics are under immense, constant pressure. Supervising you is only one small part of their job. They are teaching large undergraduate classes, marking hundreds of essays, sitting on administrative committees, applying for precarious grant funding, and facing relentless pressure to publish their own research. They are chronically time-poor.</p>
<p>When your supervisor takes three weeks to read a chapter, or forgets the specific details of your methodology between meetings, it is rarely because they do not care. It is because your project competes with fifty other urgent demands for their cognitive bandwidth. Understanding this structural reality helps you depersonalise delays and motivates you to make their job as easy as possible. The easier you make it for them to help you, the better the help you will receive (Dunleavy, 2003).</p>
<h2>5.3 Establishing the Working Contract</h2>
<p>The foundation of a good relationship is explicit communication about expectations, ideally established in the very first weeks of the project. Do not rely on unstated assumptions. Have a frank conversation about how you will work together. How often will you meet? Who is responsible for setting the agenda? How long do they typically need to return feedback on a draft chapter? Do they prefer to see rough drafts early, or polished drafts later? What is their preferred mode of communication for urgent vs. non-urgent issues?</p>
<p>Write these agreements down. Some universities now require a formal "supervisory agreement" document. Even if yours does not, drafting a brief email summarising your agreed ways of working provides clarity and creates a reference point if the relationship hits turbulence later. Remember that this contract can and should be renegotiated as your needs change over the course of the project.</p>
\${wrapFig(svgTriangle('THE EFFECTIVE MEETING',
  [
    { label: 'PREPARATION', sub: 'Agenda & Drafts sent prior', color: NAVY },
    { label: 'FOCUS', sub: 'Leading the discussion', color: GOLD },
    { label: 'FOLLOW-UP', sub: 'Written summary of actions', color: TEAL }
  ],
  ['Send materials 48h early', 'Take detailed notes', 'Email summary within 24h']
), 'Figure 5.2 The three pillars of a productive supervisory meeting.')}
<h2>5.4 Running Effective Meetings</h2>
<p>Supervisory meetings are the engine of your progress. Never turn up to a meeting empty-handed, expecting the supervisor to direct the conversation. You must own the meeting. Send an agenda at least 48 hours in advance, outlining exactly what you want to discuss (e.g., "1. Feedback on Chapter 2 draft; 2. Ethical approval bottleneck; 3. Plan for next month"). If you want feedback on a piece of writing, send it well in advance, and specify the type of feedback you need ("Please focus on the overall argument structure, ignore typos").</p>
<p>During the meeting, take detailed notes. The supervisor will likely throw out multiple ideas, references, and critiques in a rapid stream of consciousness. You will not remember them all. Immediately after the meeting, write a brief summary email to your supervisor: "Thank you for the meeting. As discussed, my action items for the next month are X, Y, and Z. We agreed you would look into issue A. Our next meeting is scheduled for [Date]." This creates a written record of progress and accountability, protecting both of you from misunderstandings.</p>
<h2>5.5 Navigating Co-Supervision</h2>
<p>Most doctoral candidates and many master's students have more than one supervisor. Co-supervision brings diverse expertise, but it also brings the risk of conflicting advice. Supervisor A tells you to expand the historical context; Supervisor B tells you to cut it entirely. When this happens, do not act as a passive messenger between them, and do not try to please both by producing a compromised, incoherent draft.</p>
<p>Instead, address the conflict professionally. Arrange a joint meeting, present the conflicting views objectively, and ask for a consensus decision on the best path forward for the thesis. "I have received advice suggesting approach X, and also advice suggesting approach Y. I can see the merits of both, but I need to commit to one to maintain the coherence of the methodology chapter. How should we proceed?" This positions you as a mature researcher managing your advisory board, rather than a child caught between arguing parents.</p>`;
}

module.exports = { ch01, ch02, ch03, ch04, ch05 };
