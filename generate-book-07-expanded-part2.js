/**
 * Book 7 Generator: Expanded Part 2 (Chapters 6-10)
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

function ch06() {
  return `<h1>Chapter 6</h1><h2 style='font-size:2rem;margin-bottom:4px;'>What to Do When Your Supervisor Is Unavailable or Unhelpful</h2>
<blockquote><strong>Learning Objectives</strong><br>By the end of this chapter, you will be able to:<br>* Identify the root causes of supervisory breakdown<br>* Differentiate between normal unavailability and toxic supervision<br>* Employ practical strategies to re-engage an absent supervisor<br>* Build a supplementary academic support network<br>* Navigate institutional grievance procedures when necessary</blockquote>
<h2>6.1 Diagnosing the Problem</h2>
<p>Despite your best efforts to "manage up," supervisory relationships sometimes break down. A supervisor may become unresponsive to emails, repeatedly cancel meetings, provide hopelessly vague feedback ("make it more critical"), or provide destructive, demoralizing criticism. Before taking action, you must diagnose the root cause of the breakdown. Is the supervisor temporarily overwhelmed by a grant deadline? Have they suffered a personal crisis? Or is this a chronic pattern of neglect or toxicity?</p>
<p>Temporary unavailability is frustrating but normal. Chronic unavailability or destructive behaviour is a structural risk to your degree. It is crucial to distinguish between a supervisor who is merely busy and one who is actively obstructing your progress. A busy supervisor will eventually apologize and engage; a toxic supervisor will blame you for their lack of engagement. If you are experiencing chronic issues, the worst strategy is silent endurance. The longer you wait, the harder it becomes to recover lost time (Wisker, 2012).</p>
\${wrapFig(svgQuadrant('DIAGNOSING SUPERVISOR BEHAVIOUR', 
  { top: 'HIGH SUPPORT', bottom: 'LOW SUPPORT', left: 'LOW DIRECTION', right: 'HIGH DIRECTION' },
  [
    { color: NAVY, title: 'The Laissez-Faire', desc: 'Friendly but absent\\nNeeds explicit requests' },
    { color: TEAL, title: 'The Mentor', desc: 'Ideal balance\\nGuides but empowers' },
    { color: MAROON, title: 'The Absentee', desc: 'Unresponsive\\nMajor structural risk' },
    { color: GOLD, title: 'The Micromanager', desc: 'Controlling\\nStifles independence' }
  ]
), 'Figure 6.1 Identifying your supervisor\\'s style helps you formulate a response strategy.')}
<h2>6.2 Re-engaging the Absent Supervisor</h2>
<p>If your supervisor has "gone dark," escalate your communication strategically. Do not send angry or accusatory emails. Maintain absolute professionalism. Start by sending a brief, focused update: "I have attached the revised methodology. To keep the timeline on track for ethical approval next month, I need your sign-off by Friday. If I don't hear from you, I will assume it is acceptable and submit." This transfers the burden of action. If they do not respond, you proceed, and you have a written record that you gave them the opportunity to intervene.</p>
<p>If emails fail, utilize office hours or departmental events. A polite, face-to-face interaction ("I know you've been incredibly busy, but I just need five minutes to clarify this point") is often much harder to ignore than an email in an overflowing inbox. If you have a co-supervisor, use them as an ally. Frame the issue carefully: "I'm having trouble getting hold of Professor X to approve this chapter, and I'm concerned about the timeline. How would you recommend I proceed?" (Murray, 2011).</p>
<h2>6.3 Building a Shadow Committee</h2>
<p>You cannot rely entirely on one or two individuals for your intellectual and emotional survival. You must build a "shadow committee" a supplementary network of academic and peer support. This includes post-docs in your department, sympathetic faculty members, your university librarian, and, crucially, your peers. Other doctoral or master's candidates are often your best source of practical advice and emotional solidarity.</p>
<p>Do not be afraid to approach scholars outside your university. If you read a paper that perfectly aligns with your research, email the author. "I am a doctoral candidate at University Y, and your recent paper was incredibly helpful. I am grappling with [specific methodological issue] and wondered if you had encountered this." Many academics are remarkably generous with their time if approached by an informed, polite junior researcher. This expands your network and dilutes your dependence on an unhelpful supervisor.</p>
<h2>6.4 When to Escalate</h2>
<p>There is a line between a poor supervisor and a negligent one. If you have tried managing up, if you have communicated your needs clearly and professionally, and your supervisor is still failing to provide the basic contractual requirements of their role (e.g., refusing to read drafts for months, disappearing without arranging cover), you must escalate the issue.</p>
<p>Every university has a postgraduate coordinator, a director of research, or a dean of graduate studies. Their job is to manage these exact situations. Approach them confidentially. Present a factual, unemotional record of the issue: "I have sent four drafts over three months and received no response. I have requested meetings and had them cancelled." Do not frame it as a personal conflict; frame it as a risk to the university's completion metrics. In severe cases, you may need to formally request a change of supervisor. This is a difficult, politically sensitive process, but it is infinitely better than failing your degree because you remained trapped in a dysfunctional relationship.</p>`;
}

function ch07() {
  return `<h1>Chapter 7</h1><h2 style='font-size:2rem;margin-bottom:4px;'>Overcoming Writer's Block, Perfectionism, and Imposter Syndrome</h2>
<blockquote><strong>Learning Objectives</strong><br>By the end of this chapter, you will be able to:<br>* Recognise imposter syndrome as a structural, not personal, phenomenon<br>* Distinguish between healthy high standards and paralyzing perfectionism<br>* Implement evidence-based strategies for overcoming writer's block<br>* Separate the generative writing phase from the editing phase<br>* Develop a sustainable, low-anxiety writing routine</blockquote>
<h2>7.1 The Trinity of Academic Paralysis</h2>
<p>The greatest threats to completing a thesis are rarely intellectual; they are psychological. Almost every research candidate will, at some point, battle the trinity of academic paralysis: imposter syndrome (the belief that you are a fraud who will soon be exposed), perfectionism (the refusal to produce work that is less than flawless), and writer's block (the inability to put words on the page). These three phenomena are deeply interconnected. Imposter syndrome fuels perfectionism, which in turn causes writer's block.</p>
<p>Understanding that these feelings are nearly universal is the first step to managing them. When you look at senior academics, you see their polished, published work; you do not see the messy, anxiety-ridden drafts that preceded it. The illusion that "real" academics write perfect prose effortlessly is toxic. Recognising that struggle is the norm, not the exception, robs these psychological blocks of much of their power (Clance and Imes, 1978).</p>
\${wrapFig(svgTriangle('THE PARALYSIS CYCLE',
  [
    { label: 'IMPOSTER SYNDROME', sub: 'Fear of exposure', color: MAROON },
    { label: 'PERFECTIONISM', sub: 'Unrealistic standards', color: NAVY },
    { label: 'WRITER\\'S BLOCK', sub: 'Inaction & avoidance', color: GOLD }
  ],
  ['Drives need to be flawless', 'Causes fear of the blank page', 'Reinforces feelings of inadequacy']
), 'Figure 7.1 The self-reinforcing cycle of academic paralysis.')}
<h2>7.2 Managing Imposter Syndrome</h2>
<p>Imposter syndrome thrives in isolation. The academic culture of critique where your work is constantly pulled apart by supervisors and reviewers creates an environment where it is easy to feel inadequate. To counter this, you must separate your intellectual worth from the critique of your work. When a supervisor tears apart a chapter, they are critiquing the words on the page, not your fundamental capacity as a researcher.</p>
<p>Combat imposter syndrome by maintaining a "victory log." Research is a long, delayed-gratification process. Write down every small win: mastering a new statistical test, conducting a successful interview, finally understanding a difficult theoretical concept. When the feeling of being a fraud overwhelms you, review this log to remind yourself of the objective evidence of your competence. Furthermore, talk to your peers. Discovering that the smartest person in your cohort also feels like an imposter is profoundly liberating.</p>
<h2>7.3 Defeating Perfectionism with "Shitty First Drafts"</h2>
<p>Perfectionism is not a virtue in thesis writing; it is a profound liability. The desire to write the perfect sentence the first time round guarantees that you will write very few sentences. To overcome this, you must embrace the concept of the "shitty first draft" (a term popularized by Anne Lamott). The sole purpose of a first draft is to exist. It does not need to be elegant, coherent, or even entirely accurate. It just needs to get ideas out of your head and onto the page, where they can be manipulated.</p>
<p>Separate the generative phase of writing from the editing phase. When generating text, turn off your internal editor. Do not fix typos, do not look up missing references (just write "[CITE]"), and do not obsess over sentence structure. Just write. Only when the draft is complete should you switch to the editing phase, where your perfectionist tendencies can be put to productive use refining the prose (Silvia, 2019).</p>
<h2>7.4 Strategies for Writer's Block</h2>
<p>Writer's block is rarely an inability to write; it is usually a fear of writing badly. There are several concrete strategies to bypass this fear. <strong>1. Lower the bar:</strong> Tell yourself you only have to write 100 words today. Often, the momentum of those first 100 words will carry you further, but if it doesn't, you still met your goal. <strong>2. Change the medium:</strong> If staring at a blinking cursor is paralyzing, try writing by hand, or dictating your thoughts into your phone while walking. <strong>3. The Pomodoro Technique:</strong> Commit to writing for just 25 minutes, followed by a 5-minute break. This makes the task finite and manageable. <strong>4. Write out of order:</strong> Do not force yourself to write the introduction first. Start with the easiest section perhaps the methods or the description of your sample to build confidence before tackling the complex theoretical framework (Murray, 2015).</p>`;
}

function ch08() {
  return `<h1>Chapter 8</h1><h2 style='font-size:2rem;margin-bottom:4px;'>Staying Organised: Files, Drafts, and Version Control</h2>
<blockquote><strong>Learning Objectives</strong><br>By the end of this chapter, you will be able to:<br>* Implement a robust, future-proof file naming convention<br>* Manage multiple drafts of chapters without losing critical data<br>* Utilise backup systems to prevent catastrophic data loss<br>* Organise physical and digital research materials efficiently<br>* Maintain a clean, stress-free digital workspace</blockquote>
<h2>8.1 The Reality of Data Entropy</h2>
<p>A thesis generates a staggering amount of digital detritus: hundreds of PDF articles, interview transcripts, statistical output files, ethics forms, and endless drafts of chapters. Without a rigid organizational system established on day one, this digital pile quickly turns into a chaotic mess. By year three, you will be frantically searching for "Chapter3_Final_Final_v2_USE_THIS_ONE.docx," terrified that you are about to submit the wrong version.</p>
<p>Disorganization is not just an annoyance; it is a major cognitive drain. Every minute spent searching for a lost file or trying to remember which version of a chapter contains the latest supervisor comments is a minute of mental energy stolen from actual research. Establishing a system is an upfront investment that pays massive dividends in the final, highly stressful months before submission.</p>
\${wrapFig(svgBars('WHERE DIGITAL TIME IS WASTED', 'Average hours lost per month due to poor organisation', [
  { label: 'Searching for Files', segments: [{ pct: 35, color: NAVY, text: 'Search' }, { pct: 65, color: '#e0e0e0', text: '' }] },
  { label: 'Resolving Version Conflicts', segments: [{ pct: 25, color: GOLD, text: 'Version' }, { pct: 75, color: '#e0e0e0', text: '' }] },
  { label: 'Re-reading Lost Notes', segments: [{ pct: 20, color: TEAL, text: 'Notes' }, { pct: 80, color: '#e0e0e0', text: '' }] },
  { label: 'Formatting Chaos', segments: [{ pct: 20, color: MAROON, text: 'Format' }, { pct: 80, color: '#e0e0e0', text: '' }] }
]), 'Figure 8.1 Poor digital hygiene steals hundreds of hours over a three-year PhD.')}
<h2>8.2 File Naming Conventions</h2>
<p>Never name a file "Final." There is always another final. Adopt a strict, consistent file naming convention based on the date (using the YYYY-MM-DD format so files sort chronologically), the chapter or content description, and your initials. For example: "2026-07-07_Chap3_Methodology_JD.docx". When your supervisor returns it with comments, save it as "2026-07-21_Chap3_Methodology_SupervisorComments.docx".</p>
<p>Create a dedicated "Archive" folder within your main chapter folder. When you begin a major rewrite of a chapter, save the old version in the Archive folder before you start deleting paragraphs. Knowing that the old text is safely archived removes the fear of aggressive editing. You can always retrieve that deleted paragraph if you change your mind.</p>
<h2>8.3 The 3-2-1 Backup Rule</h2>
<p>Data loss is the ultimate academic nightmare. Laptops are stolen, hard drives fail, and coffee is spilled. If your only copy of your thesis is on your laptop's hard drive, you are operating with unacceptable risk. You must implement the standard IT "3-2-1 Rule": Keep three copies of your data, on two different media types, with one copy stored offsite.</p>
<p>In practice, this means: 1) Your working files on your laptop. 2) A local backup on an external hard drive (updated weekly). 3) An automatic, continuous backup to a secure cloud service (e.g., OneDrive, Dropbox, or university-provided secure storage). Never rely solely on a USB flash drive; they are notoriously unreliable and easily lost. If your laptop is destroyed today, you should lose no more than one day's work.</p>
<h2>8.4 Managing the Literature Library</h2>
<p>Do not save downloaded journal articles to a single "Downloads" folder with their default, incomprehensible filenames (e.g., "s12889-020-09435-w.pdf"). You must use reference management software (like Zotero, Mendeley, or EndNote) from the very beginning. These programs allow you to import the PDF, automatically extract the citation metadata, and rename the file to a readable format (e.g., "Smith_2020_PublicHealth.pdf").</p>
<p>Within your reference manager, create a folder structure that mirrors your thesis structure or your key themes. This transforms your reference manager from a mere bibliography generator into a searchable, organized database of your entire conceptual landscape. When you need to write the section on theoretical frameworks, all the relevant literature is already grouped together and waiting for you.</p>`;
}

function ch09() {
  return `<h1>Chapter 9</h1><h2 style='font-size:2rem;margin-bottom:4px;'>Chapter One — Introduction: Setting the Scene and the Problem</h2>
<blockquote><strong>Learning Objectives</strong><br>By the end of this chapter, you will be able to:<br>* Structure the introduction chapter of a thesis effectively<br>* Hook the reader and establish the significance of the research topic<br>* State the research problem clearly and convincingly<br>* Outline the scope and limitations of the study<br>* Provide a clear roadmap for the rest of the thesis</blockquote>
<h2>9.1 The Role of the Introduction Chapter</h2>
<p>The introduction chapter is arguably the most important chapter in your thesis. It is the examiner's first impression of your work, your academic voice, and your capability as a researcher. A strong introduction builds confidence in the reader; a weak, rambling, or unfocused introduction creates doubt that will colour how the rest of the thesis is read. The introduction must convince the examiner that the research problem is significant, that the approach is sound, and that the thesis will make a meaningful contribution to knowledge (Murray, 2011).</p>
<p>Unlike a journal article introduction, which is typically short and dense, a thesis introduction chapter is substantial (often 3,000 to 5,000 words). It must provide enough background to situate the study without preempting the detailed literature review in Chapter 2. It must provide enough methodological context to explain how the study was conducted without replacing the detailed justification required in Chapter 3. Striking this balance is one of the key challenges of writing the introduction (Dunleavy, 2003).</p>
\${wrapFig(svgFunnel('THE INTRODUCTION FUNNEL', [
  { label: 'Broad Context', text: 'The general field and its importance', num: 1 },
  { label: 'Specific Area', text: 'The sub-field and current debates', num: 2 },
  { label: 'The Problem', text: 'The gap in knowledge or tension in practice', num: 3 },
  { label: 'The Questions', text: 'What this thesis will specifically answer', num: 4 },
  { label: 'The Roadmap', text: 'How the thesis is structured to answer them', num: 5 }
]), 'Figure 9.1 The introduction should move logically from the broad context to the specific research questions.')}
<h2>9.2 Hooking the Reader</h2>
<p>The opening paragraphs must hook the reader and establish the broad territory of the research. Avoid clichéd openings ("Since the dawn of time...") or overly broad statements ("Education is important in society"). Instead, begin with a specific, engaging observation, a striking statistic, a brief anecdote that illustrates the problem, or a clear statement of a paradox or contradiction in the field. The goal is to make the reader agree that the general area you are studying is important and interesting (Trafford and Leshem, 2008).</p>
<p>Once the territory is established, the introduction must quickly narrow its focus. Think of the introduction as an inverted pyramid, starting broad and systematically narrowing down to the specific research problem. This narrowing process guides the reader from what they already know to the specific issue your thesis will address.</p>
<h2>9.3 Stating the Research Problem and Questions</h2>
<p>The heart of the introduction is the problem statement. This must be a clear, unambiguous statement of what is wrong, missing, or misunderstood in current knowledge or practice, and why this matters. Following the problem statement, present your research questions or objectives clearly. These should stand out visually (often as bullet points or bold text) so the examiner can find them easily. Every subsequent chapter in the thesis will be judged on whether it helps to answer these specific questions (Dunleavy, 2003).</p>
<p>A good problem statement bridges the gap between the real world and the academic literature. It explains not only why the issue matters to practitioners or society (the practical problem) but also why it matters to scholars (the theoretical or empirical gap). If you can articulate both, you have a robust foundation for a doctoral thesis.</p>
<h2>9.4 The Roadmap</h2>
<p>The final section of the introduction chapter must provide a structural overview of the entire thesis. This is the "roadmap." It should briefly describe what each subsequent chapter will cover and how it contributes to the overall argument. A good roadmap does more than just list the chapters; it explains the logical progression between them.</p>
<p>For example, rather than writing: "Chapter 2 is the literature review. Chapter 3 is the methodology," write: "Having established the broad problem in Chapter 1, Chapter 2 critically reviews the existing literature on X and Y, demonstrating the lack of empirical data regarding Z. To address this gap, Chapter 3 details the mixed-methods methodology used to investigate Z..." This explicitly connects the chapters and demonstrates the coherence of your overall research design (Trafford and Leshem, 2008).</p>`;
}

function ch10() {
  return `<h1>Chapter 10</h1><h2 style='font-size:2rem;margin-bottom:4px;'>Chapter Two — Literature Review: Building the Scholarly Context</h2>
<blockquote><strong>Learning Objectives</strong><br>By the end of this chapter, you will be able to:<br>* Understand the specific requirements of a thesis literature review chapter<br>* Organise the literature thematically to support your research questions<br>* Synthesise sources to create an original conceptual framework<br>* Demonstrate critical engagement rather than mere summary<br>* Clearly identify and articulate the research gap your study fills</blockquote>
<h2>10.1 Beyond the Summary</h2>
<p>The literature review chapter is typically the longest chapter in a thesis (often 15,000 to 25,000 words for a doctorate), and it is where many candidates struggle. The most common mistake is treating the literature review as a descriptive catalogue: "Author A said this, Author B said that, Author C found something else." A thesis literature review must be an argument, not a list. It must synthesise existing knowledge, critically evaluate previous research, and build a compelling case for why your specific study is necessary (Hart, 2018).</p>
<p>Your literature review is the intellectual foundation of your thesis. It demonstrates to the examiner that you have mastered the field, that you understand the key debates and methodologies, and that you are capable of engaging with established scholars as a peer. A strong literature review does not just report on the field; it maps the field, showing the relationships, tensions, and gaps between different bodies of work (Murray, 2011).</p>
\${wrapFig(svgCompare('LITERATURE REVIEW APPROACHES',
  { title: 'THE DESCRIPTIVE CATALOGUE', items: ['Organised by author or date', 'Summarises individual papers', 'Accepts findings passively', 'Reads like an annotated bibliography', 'Fails to build an argument'] },
  { title: 'THE SYNTHESISED ARGUMENT', items: ['Organised thematically by concept', 'Compares and contrasts papers', 'Critiques methodology and findings', 'Reads like a continuous debate', 'Leads directly to the research gap'] }
), 'Figure 10.1 The literature review must move from descriptive summary to critical synthesis.')}
<h2>10.2 Thematic Organisation</h2>
<p>Never organise your literature review chronologically (unless you are writing a historical thesis) or by author. Organise it thematically, around the concepts and variables that are central to your research questions. Each section of the literature review should explore a specific theme, drawing on multiple authors to discuss that theme. This thematic structure forces you to synthesise rather than summarise, as you must compare what different authors have said about the same issue (Hart, 2018).</p>
<p>Use headings and subheadings generously to guide the reader through your thematic structure. A clear heading structure acts as a visual outline of your argument, making it easier for the examiner to follow your logic. The sequence of themes should follow a logical progression, typically moving from broader concepts to more specific issues, ultimately leading directly to your research gap (Trafford and Leshem, 2008).</p>
<h2>10.3 Identifying the Gap</h2>
<p>The entire literature review chapter is an argument leading to a single conclusion: that there is a significant gap in current knowledge, and that this gap needs to be filled. You must make this gap explicit. Do not assume the reader will see it.</p>
<p>State clearly: "While extensive research has examined X, and emerging literature has begun to explore Y, there is a notable absence of empirical data on Z." This statement of the gap provides the justification for your methodology chapter. Without a clearly identified gap, your research appears redundant, no matter how well-executed it is (Hart, 2018).</p>
<h2>10.4 The Conceptual Framework</h2>
<p>In many disciplines, the literature review concludes with a conceptual or theoretical framework. This is a model (often presented both visually as a diagram and textually) that brings together the key concepts identified in the literature review and shows how they relate to one another in the context of your study.</p>
<p>The conceptual framework is the bridge between the literature review and the methodology: it takes the abstract ideas from the literature and turns them into the specific constructs you will investigate. Developing a unique conceptual framework is often one of the major original contributions of a doctoral thesis, demonstrating your ability to synthesize disparate theories into a new analytical tool (Trafford and Leshem, 2008).</p>`;
}

module.exports = { ch06, ch07, ch08, ch09, ch10 };
