/**
 * Book 3 Assembler: Designing Your Study
 * Combines all part files and generates books/book-03.json
 * Run: node assemble-book-03.js
 */
const fs = require('fs');
const path = require('path');

const part12 = require('./generate-book-03-part12'); // ch01-ch06
const part34 = require('./generate-book-03-part34'); // ch07-ch16
const part56 = require('./generate-book-03-part56'); // ch17-ch23

const chapterMeta = [
  ['ch01', 'Chapter 1: What Research Design Is and Why It Determines Everything', 'PART ONE: Foundations of Research Design'],
  ['ch02', 'Chapter 2: The Research Design Framework: Paradigm, Approach, Design, Method', 'PART ONE: Foundations of Research Design'],
  ['ch03', 'Chapter 3: Aligning Your Question with Your Design', 'PART ONE: Foundations of Research Design'],
  ['ch04', 'Chapter 4: Ontology and Epistemology: What They Are and Why Researchers Must Know Them', 'PART TWO: Philosophical Foundations'],
  ['ch05', 'Chapter 5: Research Paradigms: Positivism, Interpretivism, Constructivism, Pragmatism', 'PART TWO: Philosophical Foundations'],
  ['ch06', 'Chapter 6: Choosing and Defending Your Philosophical Position', 'PART TWO: Philosophical Foundations'],
  ['ch07', 'Chapter 7: Quantitative Research: Principles, Strengths, and Limitations', 'PART THREE: Research Approaches'],
  ['ch08', 'Chapter 8: Qualitative Research: Principles, Strengths, and Limitations', 'PART THREE: Research Approaches'],
  ['ch09', 'Chapter 9: Mixed Methods Research: When and How to Combine Both', 'PART THREE: Research Approaches'],
  ['ch10', 'Chapter 10: Making the Choice: A Decision Framework for Your Approach', 'PART THREE: Research Approaches'],
  ['ch11', 'Chapter 11: Experimental and Quasi-Experimental Designs', 'PART FOUR: Research Designs'],
  ['ch12', 'Chapter 12: Survey Design: Cross-Sectional and Longitudinal', 'PART FOUR: Research Designs'],
  ['ch13', 'Chapter 13: Case Study Design: Single and Multiple Cases', 'PART FOUR: Research Designs'],
  ['ch14', 'Chapter 14: Ethnography, Phenomenology, and Grounded Theory', 'PART FOUR: Research Designs'],
  ['ch15', 'Chapter 15: Action Research and Participatory Designs', 'PART FOUR: Research Designs'],
  ['ch16', 'Chapter 16: Systematic Review and Meta-Analysis as Research Designs', 'PART FOUR: Research Designs'],
  ['ch17', 'Chapter 17: Probability Sampling: Types, Uses, and How to Calculate Sample Size', 'PART FIVE: Sampling Decisions'],
  ['ch18', 'Chapter 18: Non-Probability Sampling: Purposive, Snowball, Convenience', 'PART FIVE: Sampling Decisions'],
  ['ch19', 'Chapter 19: How to Justify Your Sample Size and Selection Strategy', 'PART FIVE: Sampling Decisions'],
  ['ch20', 'Chapter 20: How to Write a Methodology Chapter That Stands Up to Scrutiny', 'PART SIX: Writing and Defending Your Methodology'],
  ['ch21', 'Chapter 21: Validity, Reliability, Credibility, and Trustworthiness', 'PART SIX: Writing and Defending Your Methodology'],
  ['ch22', 'Chapter 22: Limitations: How to Acknowledge Them Without Undermining Your Study', 'PART SIX: Writing and Defending Your Methodology'],
  ['ch23', 'Chapter 23: Responding to Methodology Questions in a Viva or Review', 'PART SIX: Writing and Defending Your Methodology'],
];

const allFunctions = { ...part12, ...part34, ...part56 };

const referencesContent = `<h1>References</h1>
<p>The following references have been cited throughout this book. They are presented in APA 7th edition format.</p>

<p>Berger, P. L., and Luckmann, T. (1966). <em>The social construction of reality: A treatise in the sociology of knowledge</em>. Doubleday.</p>
<p>Bhaskar, R. (2008). <em>A realist theory of science</em>. Routledge.</p>
<p>Booth, A., Sutton, A., and Papaioannou, D. (2016). <em>Systematic approaches to a successful literature review</em> (2nd ed.). Sage.</p>
<p>Borenstein, M., Hedges, L. V., Higgins, J. P. T., and Rothstein, H. R. (2021). <em>Introduction to meta-analysis</em> (2nd ed.). Wiley.</p>
<p>Bryman, A. (2016). <em>Social research methods</em> (5th ed.). Oxford University Press.</p>
<p>Campbell, D. T., and Stanley, J. C. (1963). <em>Experimental and quasi-experimental designs for research</em>. Houghton Mifflin.</p>
<p>Charmaz, K. (2014). <em>Constructing grounded theory</em> (2nd ed.). Sage.</p>
<p>Cochran, W. G. (1977). <em>Sampling techniques</em> (3rd ed.). Wiley.</p>
<p>Cohen, J. (1992). A power primer. <em>Psychological Bulletin</em>, 112(1), 155-159.</p>
<p>Creswell, J. W., and Creswell, J. D. (2018). <em>Research design: Qualitative, quantitative, and mixed methods approaches</em> (5th ed.). Sage.</p>
<p>Creswell, J. W., and Plano Clark, V. L. (2018). <em>Designing and conducting mixed methods research</em> (3rd ed.). Sage.</p>
<p>Creswell, J. W., and Poth, C. N. (2018). <em>Qualitative inquiry and research design: Choosing among five approaches</em> (4th ed.). Sage.</p>
<p>Crotty, M. (1998). <em>The foundations of social research: Meaning and perspective in the research process</em>. Sage.</p>
<p>De Vaus, D. A. (2001). <em>Research design in social research</em>. Sage.</p>
<p>De Vaus, D. A. (2014). <em>Surveys in social research</em> (6th ed.). Routledge.</p>
<p>Denzin, N. K., and Lincoln, Y. S. (Eds.). (2018). <em>The SAGE handbook of qualitative research</em> (5th ed.). Sage.</p>
<p>Fetterman, D. M. (2020). <em>Ethnography: Step-by-step</em> (4th ed.). Sage.</p>
<p>Field, A. (2018). <em>Discovering statistics using IBM SPSS statistics</em> (5th ed.). Sage.</p>
<p>Fowler, F. J. (2014). <em>Survey research methods</em> (5th ed.). Sage.</p>
<p>Glaser, B. G., and Strauss, A. L. (1967). <em>The discovery of grounded theory: Strategies for qualitative research</em>. Aldine.</p>
<p>Guba, E. G., and Lincoln, Y. S. (1994). Competing paradigms in qualitative research. In N. K. Denzin and Y. S. Lincoln (Eds.), <em>Handbook of qualitative research</em> (pp. 105-117). Sage.</p>
<p>Guest, G., Bunce, A., and Johnson, L. (2006). How many interviews are enough? An experiment with data saturation and variability. <em>Field Methods</em>, 18(1), 59-82.</p>
<p>Hammersley, M., and Atkinson, P. (2019). <em>Ethnography: Principles in practice</em> (4th ed.). Routledge.</p>
<p>Hart, C. (2018). <em>Doing a literature review: Releasing the research imagination</em> (2nd ed.). Sage.</p>
<p>Higgins, J. P. T., and Thomas, J. (Eds.). (2019). <em>Cochrane handbook for systematic reviews of interventions</em> (2nd ed.). Wiley.</p>
<p>Kindon, S., Pain, R., and Kesby, M. (Eds.). (2007). <em>Participatory action research approaches and methods</em>. Routledge.</p>
<p>Kuhn, T. S. (1962). <em>The structure of scientific revolutions</em>. University of Chicago Press.</p>
<p>Lincoln, Y. S., and Guba, E. G. (1985). <em>Naturalistic inquiry</em>. Sage.</p>
<p>Maxwell, J. A. (2013). <em>Qualitative research design: An interactive approach</em> (3rd ed.). Sage.</p>
<p>McNiff, J. (2017). <em>Action research: All you need to know</em>. Sage.</p>
<p>Merriam, S. B., and Tisdell, E. J. (2016). <em>Qualitative research: A guide to design and implementation</em> (4th ed.). Jossey-Bass.</p>
<p>Morgan, D. L. (2007). Paradigms lost and pragmatism regained: Methodological implications of combining qualitative and quantitative methods. <em>Journal of Mixed Methods Research</em>, 1(1), 48-76.</p>
<p>Moustakas, C. (1994). <em>Phenomenological research methods</em>. Sage.</p>
<p>Mullins, G., and Kiley, M. (2002). "It's a PhD, not a Nobel Prize": How experienced examiners assess research theses. <em>Studies in Higher Education</em>, 27(4), 369-386.</p>
<p>Murray, R. (2011). <em>How to survive your viva</em> (2nd ed.). Open University Press.</p>
<p>Patton, M. Q. (2015). <em>Qualitative research and evaluation methods</em> (4th ed.). Sage.</p>
<p>Petticrew, M., and Roberts, H. (2006). <em>Systematic reviews in the social sciences: A practical guide</em>. Blackwell.</p>
<p>Popper, K. (1959). <em>The logic of scientific discovery</em>. Hutchinson.</p>
<p>Punch, K. F. (2014). <em>Introduction to social research: Quantitative and qualitative approaches</em> (3rd ed.). Sage.</p>
<p>Reason, P., and Bradbury, H. (Eds.). (2008). <em>The SAGE handbook of action research</em> (2nd ed.). Sage.</p>
<p>Shadish, W. R., Cook, T. D., and Campbell, D. T. (2002). <em>Experimental and quasi-experimental designs for generalized causal inference</em>. Houghton Mifflin.</p>
<p>Stake, R. E. (1995). <em>The art of case study research</em>. Sage.</p>
<p>Tashakkori, A., and Teddlie, C. (Eds.). (2010). <em>SAGE handbook of mixed methods in social and behavioral research</em> (2nd ed.). Sage.</p>
<p>Trafford, V., and Leshem, S. (2008). <em>Stepping stones to achieving your doctorate</em>. Open University Press.</p>
<p>Van Manen, M. (2016). <em>Researching lived experience</em> (2nd ed.). Routledge.</p>
<p>Yin, R. K. (2018). <em>Case study research and applications: Design and methods</em> (6th ed.). Sage.</p>`;

console.log('Building Book 3: Designing Your Study...');
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
  id: 'book-03',
  title: 'Designing Your Study',
  subtitle: 'A Decision-Based Guide to Research Methodology',
  author: 'Homers Research Consult',
  publisher: 'HRC Press, Accra',
  edition: '1st Edition',
  year: 2026,
  pages: 260,
  category: 'Academic Research',
  chapters: chapters
};

const outPath = path.join(__dirname, 'books', 'book-03.json');
const json = JSON.stringify(book, null, 2);
fs.writeFileSync(outPath, json, 'utf8');

const fileSizeKB = (Buffer.byteLength(json, 'utf8') / 1024).toFixed(1);
console.log('─'.repeat(60));
console.log('Book 3 generated successfully!');
console.log('   File: ' + outPath);
console.log('   Size: ' + fileSizeKB + ' KB');
console.log('   Chapters: ' + chapters.length);
console.log('   Parts: 6');
console.log('   Pages: ' + book.pages);
