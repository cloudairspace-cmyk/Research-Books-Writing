/**
 * Book 4 Assembler: Data Unravelled
 * Combines all part files and generates books/book-04.json
 * Run: node assemble-book-04.js
 */
const fs = require('fs');
const path = require('path');

const part12 = require('./generate-book-04-part12'); // ch01-ch09
const part34 = require('./generate-book-04-part34'); // ch10-ch17
const part56 = require('./generate-book-04-part56'); // ch18-ch24

const chapterMeta = [
  ['ch01', 'Chapter 1: Data Cleaning: Why Raw Data Is Never Ready to Analyse', 'PART ONE: Before You Analyse - Preparing Your Data'],
  ['ch02', 'Chapter 2: Coding and Categorising Data for Analysis', 'PART ONE: Before You Analyse - Preparing Your Data'],
  ['ch03', 'Chapter 3: Choosing the Right Analysis Method for Your Data Type', 'PART ONE: Before You Analyse - Preparing Your Data'],
  ['ch04', 'Chapter 4: Research Software Overview: SPSS, STATA, NVivo, Atlas.ti, R', 'PART ONE: Before You Analyse - Preparing Your Data'],
  ['ch05', 'Chapter 5: Descriptive Statistics: Summarising What Your Data Says', 'PART TWO: Quantitative Data Analysis'],
  ['ch06', 'Chapter 6: Inferential Statistics: Making Claims Beyond Your Sample', 'PART TWO: Quantitative Data Analysis'],
  ['ch07', 'Chapter 7: Hypothesis Testing: t-Tests, ANOVA, and Chi-Square Explained', 'PART TWO: Quantitative Data Analysis'],
  ['ch08', 'Chapter 8: Correlation and Regression Analysis', 'PART TWO: Quantitative Data Analysis'],
  ['ch09', 'Chapter 9: Reading and Reporting Statistical Output Correctly', 'PART TWO: Quantitative Data Analysis'],
  ['ch10', 'Chapter 10: Thematic Analysis: A Step-by-Step Process', 'PART THREE: Qualitative Data Analysis'],
  ['ch11', 'Chapter 11: Content Analysis: Systematic Coding of Text and Media', 'PART THREE: Qualitative Data Analysis'],
  ['ch12', 'Chapter 12: Discourse Analysis and Narrative Analysis', 'PART THREE: Qualitative Data Analysis'],
  ['ch13', 'Chapter 13: Grounded Theory Analysis: Letting Theory Emerge from Data', 'PART THREE: Qualitative Data Analysis'],
  ['ch14', 'Chapter 14: Ensuring Rigour in Qualitative Analysis', 'PART THREE: Qualitative Data Analysis'],
  ['ch15', 'Chapter 15: Integrating Quantitative and Qualitative Findings', 'PART FOUR: Mixed Methods Analysis'],
  ['ch16', 'Chapter 16: Convergent, Explanatory, and Exploratory Mixed Analysis', 'PART FOUR: Mixed Methods Analysis'],
  ['ch17', 'Chapter 17: Resolving Contradictions Between Quantitative and Qualitative Results', 'PART FOUR: Mixed Methods Analysis'],
  ['ch18', 'Chapter 18: The Difference Between Findings and Discussion', 'PART FIVE: Interpreting and Discussing Findings'],
  ['ch19', 'Chapter 19: How to Interpret Results Without Overstating or Understating Them', 'PART FIVE: Interpreting and Discussing Findings'],
  ['ch20', 'Chapter 20: Linking Your Findings Back to the Literature', 'PART FIVE: Interpreting and Discussing Findings'],
  ['ch21', 'Chapter 21: What to Do When Findings Are Unexpected or Negative', 'PART FIVE: Interpreting and Discussing Findings'],
  ['ch22', 'Chapter 22: Tables, Charts, and Figures That Communicate Clearly', 'PART SIX: Presenting and Visualising Data'],
  ['ch23', 'Chapter 23: Choosing the Right Visual for Your Data Type', 'PART SIX: Presenting and Visualising Data'],
  ['ch24', 'Chapter 24: Common Data Presentation Mistakes and How to Avoid Them', 'PART SIX: Presenting and Visualising Data']
];

const allFunctions = { ...part12, ...part34, ...part56 };

const referencesContent = `<h1>References</h1>
<p>The following references have been cited throughout this book. They are presented in APA 7th edition format.</p>

<p>Acock, A. C. (2018). <em>A gentle introduction to Stata</em> (6th ed.). Stata Press.</p>
<p>American Psychological Association. (2020). <em>Publication manual of the American Psychological Association</em> (7th ed.). https://doi.org/10.1037/0000165-000</p>
<p>Bazeley, P., and Jackson, K. (2013). <em>Qualitative data analysis with NVivo</em> (2nd ed.). Sage.</p>
<p>Belcher, W. L. (2019). <em>Writing your journal article in twelve weeks: A guide to academic publishing success</em> (2nd ed.). University of Chicago Press.</p>
<p>Braun, V., and Clarke, V. (2006). Using thematic analysis in psychology. <em>Qualitative Research in Psychology</em>, 3(2), 77-101.</p>
<p>Braun, V., and Clarke, V. (2012). Thematic analysis. In H. Cooper, P. M. Camic, D. L. Long, A. T. Panter, D. Rindskopf, and K. J. Sher (Eds.), <em>APA handbook of research methods in psychology, Vol. 2. Research designs: Quantitative, qualitative, neuropsychological, and biological</em> (pp. 57-71). American Psychological Association.</p>
<p>Bryman, A. (2016). <em>Social research methods</em> (5th ed.). Oxford University Press.</p>
<p>Charmaz, K. (2014). <em>Constructing grounded theory</em> (2nd ed.). Sage.</p>
<p>Clandinin, D. J. (2013). <em>Engaging in narrative inquiry</em>. Routledge.</p>
<p>Cohen, J. (1992). A power primer. <em>Psychological Bulletin</em>, 112(1), 155-159.</p>
<p>Cohen, J. (1994). The earth is round (p < .05). <em>American Psychologist</em>, 49(12), 997-1003.</p>
<p>Corbin, J., and Strauss, A. (2015). <em>Basics of qualitative research: Techniques and procedures for developing grounded theory</em> (4th ed.). Sage.</p>
<p>Creswell, J. W., and Creswell, J. D. (2018). <em>Research design: Qualitative, quantitative, and mixed methods approaches</em> (5th ed.). Sage.</p>
<p>Creswell, J. W., and Plano Clark, V. L. (2018). <em>Designing and conducting mixed methods research</em> (3rd ed.). Sage.</p>
<p>Creswell, J. W., and Poth, C. N. (2018). <em>Qualitative inquiry and research design: Choosing among five approaches</em> (4th ed.). Sage.</p>
<p>Cumming, G. (2014). The new statistics: Why and how. <em>Psychological Science</em>, 25(1), 7-29.</p>
<p>Day, R. A., and Gastel, B. (2012). <em>How to write and publish a scientific paper</em> (7th ed.). Cambridge University Press.</p>
<p>Fairclough, N. (2013). <em>Critical discourse analysis: The critical study of language</em> (2nd ed.). Routledge.</p>
<p>Fetters, M. D., Curry, L. A., and Creswell, J. W. (2013). Achieving integration in mixed methods designs-Principles and practices. <em>Health Services Research</em>, 48(6pt2), 2134-2156.</p>
<p>Field, A. (2018). <em>Discovering statistics using IBM SPSS statistics</em> (5th ed.). Sage.</p>
<p>Field, A., Miles, J., and Field, Z. (2012). <em>Discovering statistics using R</em>. Sage.</p>
<p>Foucault, M. (1972). <em>The archaeology of knowledge and the discourse on language</em>. Pantheon Books.</p>
<p>Friese, S. (2019). <em>Qualitative data analysis with ATLAS.ti</em> (3rd ed.). Sage.</p>
<p>Gee, J. P. (2014). <em>An introduction to discourse analysis: Theory and method</em> (4th ed.). Routledge.</p>
<p>Glaser, B. G., and Strauss, A. L. (1967). <em>The discovery of grounded theory: Strategies for qualitative research</em>. Aldine.</p>
<p>Guetterman, T. C., Fetters, M. D., and Creswell, J. W. (2015). Integrating quantitative and qualitative results in health science mixed methods research through joint displays. <em>Annals of Family Medicine</em>, 13(6), 554-561.</p>
<p>Hair, J. F., Black, W. C., Babin, B. J., and Anderson, R. E. (2019). <em>Multivariate data analysis</em> (8th ed.). Cengage.</p>
<p>Ivankova, N. V., Creswell, J. W., and Stick, S. L. (2006). Using mixed-methods sequential explanatory design: From theory to practice. <em>Field Methods</em>, 18(1), 3-20.</p>
<p>Krippendorff, K. (2018). <em>Content analysis: An introduction to its methodology</em> (4th ed.). Sage.</p>
<p>Lincoln, Y. S., and Guba, E. G. (1985). <em>Naturalistic inquiry</em>. Sage.</p>
<p>Moffatt, S., White, M., Mackintosh, J., and Howel, D. (2006). Using quantitative and qualitative data in health services research: What happens when mixed method findings conflict? <em>BMC Health Services Research</em>, 6(1), 28.</p>
<p>Neuendorf, K. A. (2017). <em>The content analysis guidebook</em> (2nd ed.). Sage.</p>
<p>Pallant, J. (2020). <em>SPSS survival manual: A step by step guide to data analysis using IBM SPSS</em> (7th ed.). Routledge.</p>
<p>Patton, M. Q. (2015). <em>Qualitative research and evaluation methods: Integrating theory and practice</em> (4th ed.). Sage.</p>
<p>Pluye, P., Grad, R. M., Levine, A., and Nicolau, B. (2009). Understanding divergence of quantitative and qualitative data (or results) in mixed methods studies. <em>International Journal of Multiple Research Approaches</em>, 3(1), 58-72.</p>
<p>Potter, J., and Wetherell, M. (1987). <em>Discourse and social psychology: Beyond attitudes and behaviour</em>. Sage.</p>
<p>Riessman, C. K. (2008). <em>Narrative methods for the human sciences</em>. Sage.</p>
<p>Saldaña, J. (2021). <em>The coding manual for qualitative researchers</em> (4th ed.). Sage.</p>
<p>Schreier, M. (2012). <em>Qualitative content analysis in practice</em>. Sage.</p>
<p>Silver, C., and Lewins, A. (2014). <em>Using software in qualitative research: A step-by-step guide</em> (2nd ed.). Sage.</p>
<p>Swales, J. M., and Feak, C. B. (2012). <em>Academic writing for graduate students: Essential tasks and skills</em> (3rd ed.). University of Michigan Press.</p>
<p>Tabachnick, B. G., and Fidell, L. S. (2019). <em>Using multivariate statistics</em> (7th ed.). Pearson.</p>
<p>Tufte, E. R. (2001). <em>The visual display of quantitative information</em> (2nd ed.). Graphics Press.</p>
<p>Wasserstein, R. L., and Lazar, N. A. (2016). The ASA statement on p-values: Context, process, and purpose. <em>The American Statistician</em>, 70(2), 129-133.</p>`;

console.log('Building Book 4: Data Unravelled...');
console.log('─'.repeat(60));

const chapters = [];
for (let i = 0; i < chapterMeta.length; i++) {
  const [funcName, title, part] = chapterMeta[i];
  const chNum = String(i + 1).padStart(2, '0');
  if (!allFunctions[funcName]) { console.error('MISSING:', funcName); process.exit(1); }
  let content = allFunctions[funcName]();
  if (i === chapterMeta.length - 1) { content += referencesContent; console.log('  + References appended'); }
  chapters.push({ id: 'ch-' + chNum, title: title, part: part, content: content });
  console.log('  ch-' + chNum + ': ' + title.substring(0, 60) + '...');
}

const book = {
  id: 'book-04',
  title: 'Data Unravelled',
  subtitle: 'How to Analyse, Interpret, and Present Research Findings',
  author: 'Homers Research Consult',
  publisher: 'HRC Press, Accra',
  edition: '1st Edition',
  year: 2026,
  pages: 250,
  category: 'Academic Research',
  chapters: chapters
};

const outPath = path.join(__dirname, 'books', 'book-04.json');
const json = JSON.stringify(book, null, 2);
fs.writeFileSync(outPath, json, 'utf8');

const fileSizeKB = (Buffer.byteLength(json, 'utf8') / 1024).toFixed(1);
console.log('─'.repeat(60));
console.log('Book 4 generated successfully!');
console.log('   File: ' + outPath);
console.log('   Size: ' + fileSizeKB + ' KB');
console.log('   Chapters: ' + chapters.length);
console.log('   Parts: 6');
console.log('   Pages: ' + book.pages);
