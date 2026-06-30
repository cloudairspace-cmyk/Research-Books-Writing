/**
 * enrich-book-diagrams.js
 * Adds rich visual diagrams to all 24 chapters of Book 1
 * Run: node enrich-book-diagrams.js
 */
const fs = require('fs');
const path = require('path');

const bookPath = path.join(__dirname, 'books', 'book-01.json');
const book = JSON.parse(fs.readFileSync(bookPath, 'utf-8'));

function insertAfter(content, headingText, html) {
  const regex = new RegExp(`(<h2[^>]*>[^<]*${headingText.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')}[^<]*<\\/h2>)`, 'i');
  if (!regex.test(content)) { console.log('  ⚠ Heading not found: ' + headingText); return content; }
  return content.replace(regex, `$1${html}`);
}

function diagram(title, inner) {
  return `<div class="diagram-container"><div class="diagram-header">${title}</div>${inner}</div>`;
}
function grid2(boxes) {
  return `<div class="diagram-grid grid-2">${boxes.map(b => box(b[0], b[1], b[2])).join('')}</div>`;
}
function grid3(boxes) {
  return `<div class="diagram-grid grid-3">${boxes.map(b => box(b[0], b[1], b[2])).join('')}</div>`;
}
function box(title, desc, color) {
  const style = color ? ` style="border-top-color:${color};"` : '';
  return `<div class="diagram-box"${style}><h4>${title}</h4><p>${desc}</p></div>`;
}
function flow(items) {
  return `<div class="diagram-flow">${items.map((item, i) => {
    const arrow = i < items.length - 1 ? '<div class="diagram-arrow">→</div>' : '';
    return `<div class="diagram-box"><h4>${item[0]}</h4><p>${item[1]}</p></div>${arrow}`;
  }).join('')}</div>`;
}
function table(headers, rows) {
  const ths = headers.map(h => `<th>${h}</th>`).join('');
  const trs = rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('');
  return `<table><thead><tr>${ths}</tr></thead><tbody>${trs}</tbody></table>`;
}

// ============================================================
// CHAPTER 1: What It Really Means to Think Like a Researcher
// ============================================================
let ch = book.chapters[0].content;
ch = insertAfter(ch, '1.3 The Core Habits', diagram('Five Core Habits of the Research Mind',
  grid3([
    ['🔍 Intellectual Curiosity', 'The desire to probe beneath the surface and ask questions others have not thought to ask.', ''],
    ['❓ Systematic Doubt', 'Questioning claims — including your own — until they are supported by adequate evidence.', 'var(--gold)'],
    ['⚖️ Tolerance for Ambiguity', 'Holding multiple possibilities in mind and resisting premature closure.', 'var(--teal)'],
  ]) + grid2([
    ['✏️ Precision in Language', 'Expressing ideas with exactness, avoiding vague or misleading terms.', 'var(--orange)'],
    ['📊 Commitment to Evidence', 'Grounding all claims in credible, systematically collected evidence.', 'var(--red)'],
  ])
));
ch = insertAfter(ch, '1.4 Producing Knowledge', diagram('Knowledge Consumer vs. Knowledge Producer',
  grid2([
    ['📥 Knowledge Consumer', 'Absorbs, memorises, and reproduces existing information. Treats knowledge as fixed. Seeks "right answers" from authorities.', ''],
    ['📤 Knowledge Producer', 'Formulates questions, designs studies, analyses data, and generates new insights. Treats knowledge as provisional and evolving.', 'var(--teal)'],
  ])
));
book.chapters[0].content = ch;
console.log('✅ Chapter 1 enriched');

// ============================================================
// CHAPTER 2: Curiosity as a Scholarly Discipline
// ============================================================
ch = book.chapters[1].content;
ch = insertAfter(ch, '2.2 From Casual Interest', diagram('From Curiosity to Research Question',
  flow([
    ['💡', 'Broad Interest'],
    ['📚', 'Literature Immersion'],
    ['🔎', 'Gap Identification'],
    ['🎯', 'Focused Question'],
  ])
));
ch = insertAfter(ch, '2.3 Cultivating Curiosity', diagram('Strategies for Cultivating Scholarly Curiosity',
  grid3([
    ['📖 Wide Reading', 'Read across disciplines to discover unexpected connections and new perspectives.', ''],
    ['❓ Why/How Questions', 'Question phenomena others take for granted. Ask "why" and "how" about everyday observations.', 'var(--gold)'],
    ['📓 Research Journal', 'Record observations, questions, and emerging ideas. Patterns and viable projects emerge over time.', 'var(--teal)'],
  ])
));
book.chapters[1].content = ch;
console.log('✅ Chapter 2 enriched');

// ============================================================
// CHAPTER 3: Moving from Opinion to Evidence-Based Reasoning
// ============================================================
ch = book.chapters[2].content;
ch = insertAfter(ch, '3.2 What Counts as Evidence', diagram('Evidence Hierarchy',
  table(
    ['Level', 'Type of Evidence', 'Reliability'],
    [
      ['1 (Highest)', 'Systematic reviews & meta-analyses', '★★★★★'],
      ['2', 'Randomised controlled trials (RCTs)', '★★★★☆'],
      ['3', 'Cohort & case-control studies', '★★★☆☆'],
      ['4', 'Case reports & case series', '★★☆☆☆'],
      ['5 (Lowest)', 'Expert opinion & anecdotal evidence', '★☆☆☆☆'],
    ]
  )
));
ch = insertAfter(ch, '3.3 Building Evidence-Based', diagram('Building an Evidence-Based Argument',
  flow([
    ['🔍', 'Identify Evidence'],
    ['⚖️', 'Evaluate Quality'],
    ['🔗', 'Integrate Sources'],
    ['✅', 'Draw Conclusion'],
  ])
));
book.chapters[2].content = ch;
console.log('✅ Chapter 3 enriched');

// ============================================================
// CHAPTER 4: Critical vs Academic Thinking
// ============================================================
ch = book.chapters[3].content;
ch = insertAfter(ch, '4.2 The Specific Demands', diagram('Three Pillars of Academic Thinking',
  grid3([
    ['📚 Scholarly Engagement', 'Locate, read, evaluate, and synthesise the work of other researchers within the body of literature.', ''],
    ['🔬 Methodological Literacy', 'Understand how knowledge is produced — research designs, data collection, analytical techniques.', 'var(--teal)'],
    ['🧠 Theoretical Awareness', 'Apply, compare, and critique theoretical frameworks that shape interpretation of data.', 'var(--gold)'],
  ])
));
ch = insertAfter(ch, '4.3 Higher-Order Thinking', diagram("Bloom's Revised Taxonomy in Research",
  table(
    ['Level', 'Thinking Skill', 'Research Example'],
    [
      ['6 (Highest)', '<strong>Creating</strong>', 'Proposing a new theoretical framework'],
      ['5', '<strong>Evaluating</strong>', 'Judging whether a theory explains a phenomenon'],
      ['4', '<strong>Analysing</strong>', 'Comparing two theories and identifying weaknesses'],
      ['3', '<strong>Applying</strong>', 'Using a method in a new context'],
      ['2', '<strong>Understanding</strong>', 'Explaining a theory in your own words'],
      ['1 (Lowest)', '<strong>Remembering</strong>', 'Recalling definitions and key facts'],
    ]
  )
));
book.chapters[3].content = ch;
console.log('✅ Chapter 4 enriched');

// ============================================================
// CHAPTER 5: What Makes a Research Question Worth Asking
// ============================================================
ch = book.chapters[4].content;
ch = insertAfter(ch, '5.2 Characteristics of a Strong', diagram('Five Characteristics of a Strong Research Question',
  grid3([
    ['🎯 Clear & Specific', 'Identifies key concepts, population, and the relationship being investigated.', ''],
    ['🔬 Researchable', 'Can be answered through systematic collection and analysis of empirical data.', 'var(--teal)'],
    ['⭐ Significant', 'Addresses a genuine gap in knowledge or a practical problem that matters.', 'var(--gold)'],
  ]) + grid2([
    ['✅ Feasible', 'Can be investigated within constraints of time, resources, and expertise.', 'var(--orange)'],
    ['🤝 Ethical', 'Can be pursued without causing harm or violating ethical standards.', 'var(--green)'],
  ])
));
ch = insertAfter(ch, '5.3 Types of Research', diagram('Types of Research Questions',
  grid3([
    ['📋 Descriptive', 'Seeks to characterise a phenomenon.<br><br><em>"What are the study habits of first-year medical students?"</em>', ''],
    ['🔗 Relational', 'Explores associations between variables.<br><br><em>"Is there a relationship between sleep quality and academic performance?"</em>', 'var(--teal)'],
    ['⚡ Causal', 'Investigates cause and effect.<br><br><em>"Does a mindfulness intervention reduce anxiety among students?"</em>', 'var(--red)'],
  ])
));
book.chapters[4].content = ch;
console.log('✅ Chapter 5 enriched');

// ============================================================
// CHAPTER 6: From Broad Interest to Focused Question
// ============================================================
ch = book.chapters[5].content;
ch = insertAfter(ch, '6.1 The Challenge of Narrowing', diagram('The Narrowing Funnel: From Topic to Question',
  flow([
    ['🌐', 'Broad Topic'],
    ['👥', 'Population'],
    ['📍', 'Context'],
    ['📊', 'Outcome'],
    ['🎯', 'Focused Question'],
  ])
));
ch = insertAfter(ch, '6.2 Tools for Narrowing', diagram('Two Key Narrowing Tools',
  grid2([
    ['🗺️ Concept Mapping', 'Write your topic in the centre and branch outward with subtopics, variables, populations, and contexts to visualise possibilities.', ''],
    ['📚 Literature Immersion', 'Read existing studies to discover what has been investigated, what methods were used, and what gaps remain unanswered.', 'var(--teal)'],
  ])
));
book.chapters[5].content = ch;
console.log('✅ Chapter 6 enriched');

// ============================================================
// CHAPTER 7: Testing Your Question
// ============================================================
ch = book.chapters[6].content;
ch = insertAfter(ch, '7.2 Feasibility', diagram('The FINER Framework for Testing Research Questions',
  grid3([
    ['✅ Feasible', 'Can be done with available time, resources, and expertise.', ''],
    ['💡 Interesting', 'Engages the researcher and the scholarly community.', 'var(--gold)'],
    ['🆕 Novel', 'Adds something new — confirms, refutes, or extends existing knowledge.', 'var(--teal)'],
  ]) + grid2([
    ['🤝 Ethical', 'Can be conducted without undue risk or ethical violations.', 'var(--green)'],
    ['⭐ Relevant', 'Has implications for theory, policy, or practice.', 'var(--orange)'],
  ])
));
book.chapters[6].content = ch;
console.log('✅ Chapter 7 enriched');

// ============================================================
// CHAPTER 8: Common Question Mistakes
// ============================================================
ch = book.chapters[7].content;
ch = insertAfter(ch, '8.1 Why Good Researchers', diagram('Common Research Question Mistakes',
  table(
    ['Mistake', 'Problem', 'Fix'],
    [
      ['Too broad', '"What is the impact of technology on education?"', 'Specify population, context, and outcome variable'],
      ['Too narrow', '"Do left-handed students in Class 3A prefer blue pens?"', 'Broaden to yield meaningful, generalisable insights'],
      ['Value-laden', '"Why is traditional education better than online?"', 'Remove assumptions; use neutral, objective language'],
      ['Unanswerable', '"What will education look like in 100 years?"', 'Focus on questions that can be tested with evidence'],
      ['Double-barrelled', '"Does class size affect motivation and performance?"', 'Split into two separate, focused questions'],
    ]
  )
));
book.chapters[7].content = ch;
console.log('✅ Chapter 8 enriched');

// ============================================================
// CHAPTER 9: Anatomy of a Strong Academic Argument
// ============================================================
ch = book.chapters[8].content;
ch = insertAfter(ch, '9.2 The Structure of Academic', diagram('The Structure of an Academic Argument',
  flow([
    ['📝', 'Claim'],
    ['📊', 'Evidence'],
    ['🔗', 'Warrant'],
    ['🛡️', 'Backing'],
    ['✅', 'Conclusion'],
  ])
));
ch = insertAfter(ch, '9.3 Evaluating the Strength', diagram('Criteria for Evaluating Arguments',
  grid3([
    ['🎯 Clarity', 'Is the claim clearly stated and unambiguous?', ''],
    ['📊 Evidence Quality', 'Is the evidence credible, relevant, and sufficient?', 'var(--teal)'],
    ['🔗 Logic', 'Does the warrant logically connect evidence to the claim?', 'var(--gold)'],
  ])
));
book.chapters[8].content = ch;
console.log('✅ Chapter 9 enriched');

// ============================================================
// CHAPTER 10: Claims, Evidence, and Warrants
// ============================================================
ch = book.chapters[9].content;
ch = insertAfter(ch, '10.1 Crafting Clear Claims', diagram("Toulmin's Model of Argumentation",
  grid3([
    ['📝 Claim', 'The position or conclusion being argued for.', ''],
    ['📊 Data/Evidence', 'Facts, statistics, or observations supporting the claim.', 'var(--teal)'],
    ['🔗 Warrant', 'The logical principle connecting evidence to the claim.', 'var(--gold)'],
  ]) + grid3([
    ['🛡️ Backing', 'Additional support for the warrant.', 'var(--orange)'],
    ['⚠️ Qualifier', 'Words limiting the strength of the claim (e.g., "generally", "likely").', 'var(--red)'],
    ['↩️ Rebuttal', 'Conditions under which the claim might not hold.', 'var(--blue)'],
  ])
));
book.chapters[9].content = ch;
console.log('✅ Chapter 10 enriched');

// ============================================================
// CHAPTER 11: Logical Fallacies
// ============================================================
ch = book.chapters[10].content;
ch = insertAfter(ch, '11.2 Common Fallacies', diagram('Common Logical Fallacies in Research',
  table(
    ['Fallacy', 'Description', 'Example'],
    [
      ['<strong>Ad Hominem</strong>', 'Attacking the person, not the argument', '"Dr Smith is biased, so her findings are wrong"'],
      ['<strong>Straw Man</strong>', 'Misrepresenting an argument to attack it', '"They want qualitative research, so they reject all data"'],
      ['<strong>False Dichotomy</strong>', 'Presenting only two options when more exist', '"Either we use surveys or we cannot measure attitudes"'],
      ['<strong>Appeal to Authority</strong>', 'Citing an authority outside their expertise', '"A famous physicist says vaccines are unsafe"'],
      ['<strong>Post Hoc</strong>', 'Assuming causation from sequence', '"Students who journal get better grades, so journaling causes better grades"'],
      ['<strong>Hasty Generalisation</strong>', 'Broad claim from insufficient evidence', '"I interviewed three students; all students feel this way"'],
    ]
  )
));
book.chapters[10].content = ch;
console.log('✅ Chapter 11 enriched');

// ============================================================
// CHAPTER 12: How to Disagree with Literature
// ============================================================
ch = book.chapters[11].content;
ch = insertAfter(ch, '12.2 The Art of Respectful', diagram('The Respectful Disagreement Spectrum',
  flow([
    ['👍', 'Agree Fully'],
    ['🤝', 'Agree with Qualification'],
    ['⚖️', 'Neutral / Mixed Evidence'],
    ['❓', 'Disagree with Respect'],
    ['✋', 'Disagree Fundamentally'],
  ])
));
book.chapters[11].content = ch;
console.log('✅ Chapter 12 enriched');

// ============================================================
// CHAPTER 13: Gaps in the Literature
// ============================================================
ch = book.chapters[12].content;
ch = insertAfter(ch, '13.2 Types of Gaps', diagram('Types of Knowledge Gaps',
  grid3([
    ['📋 Evidence Gap', 'No empirical studies have investigated this specific question.', ''],
    ['🌍 Population Gap', 'Existing research has not included this population or context.', 'var(--teal)'],
    ['🔬 Methodological Gap', 'Previous studies used limited or inappropriate methods.', 'var(--gold)'],
  ]) + grid3([
    ['🧠 Theoretical Gap', 'No existing theory adequately explains the phenomenon.', 'var(--orange)'],
    ['🔄 Contradiction Gap', 'Existing findings conflict and need reconciliation.', 'var(--red)'],
    ['⏰ Temporal Gap', 'Knowledge is outdated and needs updating with current data.', 'var(--blue)'],
  ])
));
book.chapters[12].content = ch;
console.log('✅ Chapter 13 enriched');

// ============================================================
// CHAPTER 14: Reading Research Strategically
// ============================================================
ch = book.chapters[13].content;
ch = insertAfter(ch, '14.2 Where to Find Gaps', diagram('Where Gaps Hide in Published Research',
  grid2([
    ['📄 "Future Research" Sections', 'Authors explicitly identify unanswered questions and limitations at the end of their papers.', ''],
    ['📊 Contradictory Findings', 'When two credible studies reach different conclusions, there is a gap to resolve.', 'var(--teal)'],
  ]) + grid2([
    ['🌍 Under-represented Contexts', 'Studies conducted in one context may not apply to another — this is an opportunity.', 'var(--gold)'],
    ['📅 Dated Studies', 'Research from a decade ago may not reflect current conditions — replication is valuable.', 'var(--orange)'],
  ])
));
book.chapters[13].content = ch;
console.log('✅ Chapter 14 enriched');

// ============================================================
// CHAPTER 15: Positioning Your Research
// ============================================================
ch = book.chapters[14].content;
ch = insertAfter(ch, '15.2 Mapping the Intellectual', diagram('Positioning Your Study in the Field',
  flow([
    ['📚', 'What is known'],
    ['❓', 'What is debated'],
    ['🕳️', 'What is missing'],
    ['🎯', 'Your contribution'],
  ])
));
book.chapters[14].content = ch;
console.log('✅ Chapter 15 enriched');

// ============================================================
// CHAPTER 16: Building an Original Contribution
// ============================================================
ch = book.chapters[15].content;
ch = insertAfter(ch, '16.2 Types of Originality', diagram('Types of Original Contribution',
  grid3([
    ['🆕 New Evidence', 'Providing empirical evidence where none existed before.', ''],
    ['🔬 New Method', 'Applying a method not previously used to study this phenomenon.', 'var(--teal)'],
    ['🧠 New Theory', 'Proposing a new theoretical framework or modifying an existing one.', 'var(--gold)'],
  ]) + grid3([
    ['🌍 New Context', 'Studying a known phenomenon in a new population, setting, or culture.', 'var(--orange)'],
    ['🔗 New Synthesis', 'Combining insights from multiple studies into a new understanding.', 'var(--red)'],
    ['🔄 Replication', 'Confirming or challenging existing findings with rigorous methodology.', 'var(--blue)'],
  ])
));
book.chapters[15].content = ch;
console.log('✅ Chapter 16 enriched');

// ============================================================
// CHAPTER 17: Recognising Your Own Assumptions
// ============================================================
ch = book.chapters[16].content;
ch = insertAfter(ch, '17.3 Surfacing Your Assumptions', diagram('The Assumption Audit: Key Questions',
  table(
    ['Category', 'Audit Question'],
    [
      ['Ontological', 'What do I believe about the nature of reality? Is it fixed or socially constructed?'],
      ['Epistemological', 'What do I believe about how knowledge is produced? Through measurement or interpretation?'],
      ['Personal', 'What life experiences shape how I see this topic?'],
      ['Theoretical', 'Which theories do I favour — and why? What am I taking for granted?'],
      ['Methodological', 'Why have I chosen this method? What assumptions does it carry?'],
    ]
  )
));
book.chapters[16].content = ch;
console.log('✅ Chapter 17 enriched');

// ============================================================
// CHAPTER 18: Types of Bias
// ============================================================
ch = book.chapters[17].content;
ch = insertAfter(ch, '18.2 Cognitive Biases', diagram('Key Cognitive Biases in Research',
  grid2([
    ['🔍 Confirmation Bias', 'Seeking evidence that confirms your existing beliefs while ignoring contradictory evidence.', ''],
    ['📰 Availability Bias', 'Overestimating the likelihood of events that are easily recalled or vivid.', 'var(--teal)'],
  ]) + grid2([
    ['⚓ Anchoring Bias', 'Relying too heavily on the first piece of information encountered.', 'var(--gold)'],
    ['📊 Hindsight Bias', 'Believing, after learning an outcome, that you would have predicted it.', 'var(--orange)'],
  ])
));
ch = insertAfter(ch, '18.3 Methodological and Social', diagram('Methodological & Social Biases',
  grid3([
    ['📉 Selection Bias', 'Systematic differences between participants and non-participants.', ''],
    ['😊 Social Desirability', 'Participants give answers they think are socially acceptable.', 'var(--gold)'],
    ['📋 Response Bias', 'Systematic patterns in how respondents answer questions.', 'var(--red)'],
  ])
));
book.chapters[17].content = ch;
console.log('✅ Chapter 18 enriched');

// ============================================================
// CHAPTER 19: Reflexivity
// ============================================================
ch = book.chapters[18].content;
ch = insertAfter(ch, '19.2 Types of Reflexivity', diagram('Types of Reflexivity',
  grid3([
    ['🪞 Personal Reflexivity', 'How your values, experiences, and identity shape the research process and findings.', ''],
    ['📐 Methodological Reflexivity', 'How your choice of methods influences what you can discover and what remains hidden.', 'var(--teal)'],
    ['🧠 Epistemological Reflexivity', 'How your assumptions about knowledge itself shape the questions you ask and answers you accept.', 'var(--gold)'],
  ])
));
book.chapters[18].content = ch;
console.log('✅ Chapter 19 enriched');

// ============================================================
// CHAPTER 20: Intellectual Honesty
// ============================================================
ch = book.chapters[19].content;
ch = insertAfter(ch, '20.2 Forms of Intellectual', diagram('Forms of Intellectual Dishonesty',
  table(
    ['Form', 'Description', 'Consequence'],
    [
      ['Cherry-picking', 'Selecting only evidence that supports your view', 'Distorted conclusions and misleading readers'],
      ['Overstating findings', 'Claiming more certainty than the evidence supports', 'Erodes trust in the research'],
      ['Ignoring contradictions', 'Failing to address evidence that contradicts your claims', 'Incomplete and unreliable scholarship'],
      ['Hidden agendas', 'Allowing undisclosed interests to shape conclusions', 'Compromised objectivity and ethical violation'],
      ['Self-plagiarism', 'Presenting your own prior work as new without disclosure', 'Deceptive publication practice'],
    ]
  )
));
book.chapters[19].content = ch;
console.log('✅ Chapter 20 enriched');

// ============================================================
// CHAPTER 21: Scholarly Voice
// ============================================================
ch = book.chapters[20].content;
ch = insertAfter(ch, '21.2 Characteristics of Strong', diagram('Characteristics of Strong Scholarly Voice',
  grid3([
    ['🎯 Clarity', 'Complex ideas expressed simply and precisely. No unnecessary jargon.', ''],
    ['⚖️ Balance', 'Acknowledges alternative perspectives while defending a clear position.', 'var(--teal)'],
    ['🔬 Evidence-Grounded', 'Every claim anchored in credible, cited evidence.', 'var(--gold)'],
  ]) + grid3([
    ['🤝 Hedged Appropriately', 'Uses qualifiers (may, suggests, indicates) proportional to evidence strength.', 'var(--orange)'],
    ['💡 Original', 'Goes beyond summarising — offers analysis, synthesis, and unique insight.', 'var(--red)'],
    ['🎓 Professional Tone', 'Formal without being stiff. Confident without being arrogant.', 'var(--blue)'],
  ])
));
book.chapters[20].content = ch;
console.log('✅ Chapter 21 enriched');

// ============================================================
// CHAPTER 22: From Student to Independent Scholar
// ============================================================
ch = book.chapters[21].content;
ch = insertAfter(ch, '22.1 The Transition from Student', diagram('Student vs. Scholar: Key Differences',
  grid2([
    ['🎒 Student Mindset', 'Seeks "right answers" • Follows instructions • Reproduces knowledge • Depends on supervisor • Avoids ambiguity', ''],
    ['🎓 Scholar Mindset', 'Generates original questions • Designs own inquiry • Produces knowledge • Collaborates as peer • Embraces ambiguity', 'var(--teal)'],
  ])
));
book.chapters[21].content = ch;
console.log('✅ Chapter 22 enriched');

// ============================================================
// CHAPTER 23: Synthesising Ideas
// ============================================================
ch = book.chapters[22].content;
ch = insertAfter(ch, '23.2 Techniques for Effective', diagram('The Synthesis Process',
  flow([
    ['📖', 'Read Sources'],
    ['📋', 'Identify Themes'],
    ['🔗', 'Find Connections'],
    ['🧩', 'Integrate Ideas'],
    ['💡', 'Form Position'],
  ])
));
ch = insertAfter(ch, '23.1 What Synthesis Is', diagram('Summarising vs. Synthesising',
  grid2([
    ['📝 Summarising', 'Restating what each source says individually. Reports findings one author at a time. Descriptive, not analytical.', ''],
    ['🔗 Synthesising', 'Weaving multiple sources together around themes. Creates new understanding from combined insights. Analytical and original.', 'var(--teal)'],
  ])
));
book.chapters[22].content = ch;
console.log('✅ Chapter 23 enriched');

// ============================================================
// CHAPTER 24: Thinking Under Pressure
// ============================================================
ch = book.chapters[23].content;
ch = insertAfter(ch, '24.2 Preparation Strategies', diagram('Defence Preparation Framework',
  grid2([
    ['📝 Know Your Work', 'Re-read your entire study. Be able to explain every decision and justify every choice from methodology to analysis.', ''],
    ['❓ Anticipate Questions', 'Prepare answers to likely questions: "Why this method?", "What about X?", "How do you justify this claim?"', 'var(--teal)'],
  ]) + grid2([
    ['🗣️ Practise Aloud', 'Rehearse with peers. Practise articulating your arguments under time pressure and challenging conditions.', 'var(--gold)'],
    ['🧘 Manage Anxiety', 'Prepare psychologically. Accept that nervousness is normal. Focus on the opportunity to showcase your expertise.', 'var(--orange)'],
  ])
));
ch = insertAfter(ch, '24.3 Responding to Difficult', diagram('Types of Examiner Questions',
  table(
    ['Type', 'Purpose', 'How to Respond'],
    [
      ['Clarification', 'Ensure they understand your point', 'Restate clearly, provide an example'],
      ['Challenge', 'Test the strength of your argument', 'Acknowledge the point, defend with evidence'],
      ['Extension', 'Explore implications of your findings', 'Discuss possibilities with appropriate hedging'],
      ['Devil\'s advocate', 'Test your ability to think critically', 'Engage thoughtfully, show you have considered alternatives'],
      ['Methodological', 'Probe your research design decisions', 'Justify your choice, acknowledge limitations'],
    ]
  )
));
book.chapters[23].content = ch;
console.log('✅ Chapter 24 enriched');

// ============================================================
// WRITE THE UPDATED FILE
// ============================================================
fs.writeFileSync(bookPath, JSON.stringify(book, null, 2), 'utf-8');
console.log('\n🎉 All 24 chapters enriched with diagrams! Book saved to: ' + bookPath);
