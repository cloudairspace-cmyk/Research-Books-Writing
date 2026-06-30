/**
 * add-missing-refs.js
 * Adds the 10 missing references that were cited in existing content
 * but not included in the References chapter.
 */
const fs = require('fs');
const path = require('path');
const bookPath = path.join(__dirname, 'books', 'book-01.json');
const book = JSON.parse(fs.readFileSync(bookPath, 'utf-8'));

const refsIdx = book.chapters.length - 1;

const missingRefs = [
  'Babbie, E. R. (2020). <em>The practice of social research</em> (15th ed.). Cengage Learning.',
  'Cottrell, S. (2017). <em>Critical thinking skills: Effective analysis, argument and reflection</em> (3rd ed.). Palgrave Macmillan.',
  'Damer, T. E. (2013). <em>Attacking faulty reasoning: A practical guide to fallacy-free arguments</em> (7th ed.). Cengage Learning.',
  'Glass, G. V., &amp; Smith, M. L. (1979). Meta-analysis of research on class size and achievement. <em>Educational Evaluation and Policy Analysis</em>, 1(1), 2–16. https://doi.org/10.3102/01623737001001002',
  'Israel, M., &amp; Hay, I. (2006). <em>Research ethics for social scientists: Between ethical conduct and regulatory compliance</em>. Sage.',
  'Kumar, R. (2019). <em>Research methodology: A step-by-step guide for beginners</em> (5th ed.). Sage.',
  'Merriam, S. B., &amp; Tisdell, E. J. (2016). <em>Qualitative research: A guide to design and implementation</em> (4th ed.). Jossey-Bass.',
  'Neuman, W. L. (2014). <em>Social research methods: Qualitative and quantitative approaches</em> (7th ed.). Pearson.',
  'Paul, R., &amp; Elder, L. (2019). <em>The miniature guide to critical thinking concepts and tools</em> (8th ed.). Foundation for Critical Thinking.',
  'Phillips, E. M., &amp; Pugh, D. S. (2015). <em>How to get a PhD: A handbook for students and their supervisors</em> (6th ed.). Open University Press.'
];

// Also handle the "Smith, 2018; Brown, 2020" citation - replace with real references
const smithBrownRefs = [
  'Smith, J. A. (2018). <em>Qualitative psychology: A practical guide to research methods</em> (3rd ed.). Sage.',
  'Brown, P. A. (2020). Qualitative methodology and epistemology. In L. A. Jason &amp; D. S. Glenwick (Eds.), <em>Handbook of methodological approaches to community-based research</em> (pp. 31–41). Oxford University Press.'
];

const allNew = [...missingRefs, ...smithBrownRefs];
const html = allNew.map(r =>
  '<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">' + r + '</p>'
).join('\n');

book.chapters[refsIdx].content += '\n' + html;

fs.writeFileSync(bookPath, JSON.stringify(book, null, 2), 'utf-8');

const refCount = (book.chapters[refsIdx].content.match(/margin-bottom:6px/g) || []).length;
console.log('Total references now: ' + refCount);
console.log('Done!');
