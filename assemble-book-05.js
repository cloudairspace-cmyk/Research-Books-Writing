/**
 * Book 5 Assembler: The Literature Review Mastery Guide
 * Combines all part files and generates books/book-05.json
 * Run: node assemble-book-05.js
 */
const fs = require('fs');
const path = require('path');

const part12 = require('./generate-book-05-part12'); // ch01-ch08
const part34 = require('./generate-book-05-part34'); // ch09-ch16
const part56 = require('./generate-book-05-part56'); // ch17-ch23

const chapterMeta = [
  ['ch01', 'Chapter 1: What a Literature Review Is and What It Is Not', 'PART ONE: Understanding the Literature Review'],
  ['ch02', 'Chapter 2: Types of Literature Reviews: Narrative, Systematic, Scoping, Meta-Analysis', 'PART ONE: Understanding the Literature Review'],
  ['ch03', 'Chapter 3: The Purpose of the Literature Review in Different Research Contexts', 'PART ONE: Understanding the Literature Review'],
  ['ch04', 'Chapter 4: Common Literature Review Mistakes That Examiners Hate', 'PART ONE: Understanding the Literature Review'],
  ['ch05', 'Chapter 5: Defining the Scope and Boundaries of Your Review', 'PART TWO: Planning and Searching the Literature'],
  ['ch06', 'Chapter 6: Developing Your Search Strategy and Keywords', 'PART TWO: Planning and Searching the Literature'],
  ['ch07', 'Chapter 7: Conducting a Systematic and Reproducible Database Search', 'PART TWO: Planning and Searching the Literature'],
  ['ch08', 'Chapter 8: Inclusion and Exclusion Criteria: How to Decide What Goes In', 'PART TWO: Planning and Searching the Literature'],
  ['ch09', 'Chapter 9: Reading for a Literature Review: Different from Reading for Interest', 'PART THREE: Reading and Managing Sources'],
  ['ch10', 'Chapter 10: Annotated Bibliographies: Building Your Reading Foundation', 'PART THREE: Reading and Managing Sources'],
  ['ch11', 'Chapter 11: Managing 50 to 200 Sources Without Losing Your Mind', 'PART THREE: Reading and Managing Sources'],
  ['ch12', 'Chapter 12: Mapping the Literature: Concept Maps and Thematic Matrices', 'PART THREE: Reading and Managing Sources'],
  ['ch13', 'Chapter 13: The Difference Between Summarising and Synthesising', 'PART FOUR: Synthesising the Literature'],
  ['ch14', 'Chapter 14: Thematic Synthesis: Organising Sources Around Ideas, Not Authors', 'PART FOUR: Synthesising the Literature'],
  ['ch15', 'Chapter 15: Identifying Agreements, Debates, and Contradictions in the Field', 'PART FOUR: Synthesising the Literature'],
  ['ch16', 'Chapter 16: Identifying and Articulating the Gap Your Research Will Fill', 'PART FOUR: Synthesising the Literature'],
  ['ch17', 'Chapter 17: Structuring Your Literature Review: Thematic vs. Chronological vs. Methodological', 'PART FIVE: Writing the Literature Review'],
  ['ch18', 'Chapter 18: Writing the Introduction and Scope of Your Review', 'PART FIVE: Writing the Literature Review'],
  ['ch19', 'Chapter 19: Writing Synthesis Paragraphs That Flow and Argue', 'PART FIVE: Writing the Literature Review'],
  ['ch20', 'Chapter 20: Concluding Your Review and Transitioning to Your Methodology', 'PART FIVE: Writing the Literature Review'],
  ['ch21', 'Chapter 21: What Makes a Systematic Review Different from a Chapter Review', 'PART SIX: The Systematic Review as a Standalone Study'],
  ['ch22', 'Chapter 22: PRISMA Guidelines and Reporting Standards', 'PART SIX: The Systematic Review as a Standalone Study'],
  ['ch23', 'Chapter 23: Writing a Systematic Review for Journal Publication', 'PART SIX: The Systematic Review as a Standalone Study'],
];

const allFunctions = { ...part12, ...part34, ...part56 };

const referencesContent = `<h1>References</h1>
<p>The following references have been cited throughout this book. They are presented in APA 7th edition format.</p>

<p>Arksey, H., and O'Malley, L. (2005). Scoping studies: Towards a methodological framework. <em>International Journal of Social Research Methodology</em>, 8(1), 19-32.</p>
<p>Baumeister, R. F., and Leary, M. R. (1997). Writing narrative literature reviews. <em>Review of General Psychology</em>, 1(3), 311-320.</p>
<p>Booth, A., Sutton, A., and Papaioannou, D. (2016). <em>Systematic approaches to a successful literature review</em> (2nd ed.). Sage.</p>
<p>Borenstein, M., Hedges, L. V., Higgins, J. P. T., and Rothstein, H. R. (2021). <em>Introduction to meta-analysis</em> (2nd ed.). Wiley.</p>
<p>Charmaz, K. (2014). <em>Constructing grounded theory</em> (2nd ed.). Sage.</p>
<p>Creswell, J. W., and Creswell, J. D. (2018). <em>Research design: Qualitative, quantitative, and mixed methods approaches</em> (5th ed.). Sage.</p>
<p>Creswell, J. W., and Plano Clark, V. L. (2018). <em>Designing and conducting mixed methods research</em> (3rd ed.). Sage.</p>
<p>Creswell, J. W., and Poth, C. N. (2018). <em>Qualitative inquiry and research design: Choosing among five approaches</em> (4th ed.). Sage.</p>
<p>Efron, S. E., and Ravid, R. (2019). <em>Writing the literature review: A practical guide</em>. Guilford Press.</p>
<p>Glaser, B. G. (1992). <em>Basics of grounded theory analysis</em>. Sociology Press.</p>
<p>Grant, C., and Osanloo, A. (2014). Understanding, selecting, and integrating a theoretical framework in dissertation research. <em>Administrative Issues Journal</em>, 4(2), 12-26.</p>
<p>Grant, M. J., and Booth, A. (2009). A typology of reviews: An analysis of 14 review types and associated methodologies. <em>Health Information and Libraries Journal</em>, 26(2), 91-108.</p>
<p>Greenhalgh, T., and Peacock, R. (2005). Effectiveness and efficiency of search methods in systematic reviews of complex evidence. <em>BMJ</em>, 331(7524), 1064-1065.</p>
<p>Hart, C. (2018). <em>Doing a literature review: Releasing the research imagination</em> (2nd ed.). Sage.</p>
<p>Higgins, J. P. T., and Thomas, J. (Eds.). (2019). <em>Cochrane handbook for systematic reviews of interventions</em> (2nd ed.). Wiley.</p>
<p>Levac, D., Colquhoun, H., and O'Brien, K. K. (2010). Scoping studies: Advancing the methodology. <em>Implementation Science</em>, 5(1), 69.</p>
<p>Machi, L. A., and McEvoy, B. T. (2016). <em>The literature review: Six steps to success</em> (3rd ed.). Corwin.</p>
<p>Moher, D., Liberati, A., Tetzlaff, J., and Altman, D. G. (2009). Preferred reporting items for systematic reviews and meta-analyses: The PRISMA statement. <em>BMJ</em>, 339, b2535.</p>
<p>Novak, J. D., and Canas, A. J. (2008). The theory underlying concept maps and how to construct and use them. Technical Report IHMC CmapTools. Florida Institute for Human and Machine Cognition.</p>
<p>Page, M. J., McKenzie, J. E., Bossuyt, P. M., et al. (2021). The PRISMA 2020 statement: An updated guideline for reporting systematic reviews. <em>BMJ</em>, 372, n71.</p>
<p>Paré, G., Trudel, M.-C., Jaana, M., and Kitsiou, S. (2015). Synthesizing information systems knowledge: A typology of literature reviews. <em>Information and Management</em>, 52(2), 183-199.</p>
<p>Peters, M. D. J., Marnie, C., Tricco, A. C., et al. (2020). Updated methodological guidance for the conduct of scoping reviews. <em>JBI Evidence Synthesis</em>, 18(10), 2119-2126.</p>
<p>Petticrew, M., and Roberts, H. (2006). <em>Systematic reviews in the social sciences: A practical guide</em>. Blackwell.</p>
<p>Ravitch, S. M., and Riggan, M. (2017). <em>Reason and rigor: How conceptual frameworks guide research</em> (2nd ed.). Sage.</p>
<p>Ridley, D. (2012). <em>The literature review: A step-by-step guide for students</em> (2nd ed.). Sage.</p>
<p>Tashakkori, A., and Teddlie, C. (Eds.). (2010). <em>SAGE handbook of mixed methods in social and behavioral research</em> (2nd ed.). Sage.</p>`;

console.log('Building Book 5: The Literature Review Mastery Guide...');
console.log('\u2500'.repeat(60));

const chapters = [];
for (let i = 0; i < chapterMeta.length; i++) {
  const [funcName, title, part] = chapterMeta[i];
  const chNum = String(i + 1).padStart(2, '0');
  if (!allFunctions[funcName]) { console.error('MISSING:', funcName); process.exit(1); }
  let content = allFunctions[funcName]();
  if (i === chapterMeta.length - 1) { content += referencesContent; console.log('  + References appended'); }
  chapters.push({ id: 'ch-' + chNum, title: title, part: part, content: content });
  const words = content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
  console.log('  ch-' + chNum + ': ' + words + ' words - ' + title.substring(0, 55) + '...');
}

const book = {
  id: 'book-05',
  title: 'The Literature Review Mastery Guide',
  subtitle: 'How to Search, Synthesise, and Write a Review That Stands on Its Own',
  author: 'Homers Research Consult',
  publisher: 'HRC Press, Accra',
  edition: '1st Edition',
  year: 2026,
  pages: 235,
  category: 'Academic Research',
  chapters: chapters
};

const outPath = path.join(__dirname, 'books', 'book-05.json');
const json = JSON.stringify(book, null, 2);
fs.writeFileSync(outPath, json, 'utf8');

const fileSizeKB = (Buffer.byteLength(json, 'utf8') / 1024).toFixed(1);
let totalWords = 0;
chapters.forEach(ch => {
  totalWords += ch.content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
});
console.log('\u2500'.repeat(60));
console.log('Book 5 generated successfully!');
console.log('   File: ' + outPath);
console.log('   Size: ' + fileSizeKB + ' KB');
console.log('   Chapters: ' + chapters.length);
console.log('   Parts: 6');
console.log('   Total Words: ' + totalWords);
console.log('   Est Pages: ' + Math.ceil(totalWords / 280));
