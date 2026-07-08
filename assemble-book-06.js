/**
 * Book 6 Assembler: The Academic Writer
 * Combines all part files and generates books/book-06.json
 * Run: node assemble-book-06.js
 */
const fs = require('fs');
const path = require('path');

const part12 = require('./generate-book-06-part12');
const part34 = require('./generate-book-06-part34');
const part56 = require('./generate-book-06-part56');

const chapterMeta = [
  ['ch01', 'Chapter 1: What Academic Writing Is and the Myths That Confuse Writers', 'PART ONE: The Principles of Academic Writing'],
  ['ch02', 'Chapter 2: Clarity, Precision, and Economy: The Three Pillars of Scholarly Prose', 'PART ONE: The Principles of Academic Writing'],
  ['ch03', 'Chapter 3: Academic Tone vs. Everyday Language: Where the Line Is', 'PART ONE: The Principles of Academic Writing'],
  ['ch04', 'Chapter 4: The Writer\'s Mindset: Writing as Thinking, Not Just Reporting', 'PART ONE: The Principles of Academic Writing'],
  ['ch05', 'Chapter 5: Writing Sentences That Are Clear and Direct', 'PART TWO: Sentence and Paragraph Construction'],
  ['ch06', 'Chapter 6: Paragraph Structure: Topic Sentences, Evidence, and Analysis', 'PART TWO: Sentence and Paragraph Construction'],
  ['ch07', 'Chapter 7: Transitions and Flow: Connecting Ideas Across Paragraphs', 'PART TWO: Sentence and Paragraph Construction'],
  ['ch08', 'Chapter 8: Hedging Language: How to Make Claims with Appropriate Certainty', 'PART TWO: Sentence and Paragraph Construction'],
  ['ch09', 'Chapter 9: Structuring an Argument: From Claim to Evidence to Conclusion', 'PART THREE: Structuring Academic Documents'],
  ['ch10', 'Chapter 10: Writing Introductions That Engage and Orientate the Reader', 'PART THREE: Structuring Academic Documents'],
  ['ch11', 'Chapter 11: Writing Conclusions That Resonate and Contribute', 'PART THREE: Structuring Academic Documents'],
  ['ch12', 'Chapter 12: Structuring a Thesis or Dissertation: Chapter by Chapter', 'PART THREE: Structuring Academic Documents'],
  ['ch13', 'Chapter 13: Citing Sources: When, Why, and How', 'PART FOUR: Using Sources Effectively'],
  ['ch14', 'Chapter 14: Paraphrasing, Summarising, and Quoting: Getting the Balance Right', 'PART FOUR: Using Sources Effectively'],
  ['ch15', 'Chapter 15: Avoiding Plagiarism: Understanding Originality and Academic Integrity', 'PART FOUR: Using Sources Effectively'],
  ['ch16', 'Chapter 16: Using Tables, Figures, and Visual Aids in Academic Writing', 'PART FOUR: Using Sources Effectively'],
  ['ch17', 'Chapter 17: Passive Voice: When to Use It and When to Avoid It', 'PART FIVE: Common Writing Problems and How to Fix Them'],
  ['ch18', 'Chapter 18: Wordy Writing: How to Cut Without Losing Meaning', 'PART FIVE: Common Writing Problems and How to Fix Them'],
  ['ch19', 'Chapter 19: Coherence Problems: Why Your Writing Feels Disconnected', 'PART FIVE: Common Writing Problems and How to Fix Them'],
  ['ch20', 'Chapter 20: Grammar and Punctuation Essentials for Academic Writers', 'PART FIVE: Common Writing Problems and How to Fix Them'],
  ['ch21', 'Chapter 21: The Revision Process: Why First Drafts Are Never Final Drafts', 'PART SIX: Editing and Polishing Your Academic Writing'],
  ['ch22', 'Chapter 22: Proofreading Strategies: Catching Errors Before Your Examiner Does', 'PART SIX: Editing and Polishing Your Academic Writing'],
  ['ch23', 'Chapter 23: Formatting and Presentation: Making Your Document Look Professional', 'PART SIX: Editing and Polishing Your Academic Writing'],
  ['ch24', 'Chapter 24: Writing for Publication: From Thesis Chapter to Journal Article', 'PART SIX: Editing and Polishing Your Academic Writing'],
];

const allFunctions = { ...part12, ...part34, ...part56 };

const referencesContent = `<h1>References</h1>
<p>The following references have been cited throughout this book. They are presented in APA 7th edition format.</p>

<p>American Psychological Association. (2020). <em>Publication manual of the American Psychological Association</em> (7th ed.). American Psychological Association.</p>
<p>Booth, W. C., Colomb, G. G., and Williams, J. M. (2016). <em>The craft of research</em> (4th ed.). University of Chicago Press.</p>
<p>Creswell, J. W., and Creswell, J. D. (2018). <em>Research design: Qualitative, quantitative, and mixed methods approaches</em> (5th ed.). Sage.</p>
<p>Dunleavy, P. (2003). <em>Authoring a PhD: How to plan, draft, write and finish a doctoral thesis or dissertation</em>. Palgrave Macmillan.</p>
<p>Elbow, P. (1998). <em>Writing with power: Techniques for mastering the writing process</em> (2nd ed.). Oxford University Press.</p>
<p>Graff, G., and Birkenstein, C. (2018). <em>"They say / I say": The moves that matter in academic writing</em> (4th ed.). W. W. Norton.</p>
<p>Hart, C. (2018). <em>Doing a literature review: Releasing the research imagination</em> (2nd ed.). Sage.</p>
<p>Howard, R. M. (1999). <em>Standing in the shadow of giants: Plagiarists, authors, collaborators</em>. Ablex.</p>
<p>Hyland, K. (1996). Writing without conviction? Hedging in science research articles. <em>Applied Linguistics</em>, 17(4), 433-454.</p>
<p>Hyland, K. (2002). Authority and invisibility: Authorial identity in academic writing. <em>Journal of Pragmatics</em>, 34(8), 1091-1112.</p>
<p>Murray, R. (2015). <em>Writing in social sciences</em>. Open University Press.</p>
<p>Pecorari, D. (2015). <em>Academic writing and plagiarism: A linguistic analysis</em>. Bloomsbury.</p>
<p>Silvia, P. J. (2019). <em>How to write a lot: A practical guide to productive academic writing</em> (2nd ed.). American Psychological Association.</p>
<p>Swales, J. M. (1990). <em>Genre analysis: English in academic and research settings</em>. Cambridge University Press.</p>
<p>Swales, J. M., and Feak, C. B. (2012). <em>Academic writing for graduate students</em> (3rd ed.). University of Michigan Press.</p>
<p>Sword, H. (2012). <em>Stylish academic writing</em>. Harvard University Press.</p>
<p>Williams, J. M., and Bizup, J. (2017). <em>Style: Lessons in clarity and grace</em> (12th ed.). Pearson.</p>`;

console.log('Building Book 6: The Academic Writer...');
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
  id: 'book-06',
  title: 'The Academic Writer',
  subtitle: 'A Complete Guide to Clear, Effective Scholarly Writing',
  author: 'Homers Research Consult',
  publisher: 'HRC Press, Accra',
  edition: '1st Edition',
  year: 2026,
  pages: 250,
  category: 'Academic Research',
  chapters: chapters
};

const outPath = path.join(__dirname, 'books', 'book-06.json');
const json = JSON.stringify(book, null, 2);
fs.writeFileSync(outPath, json, 'utf8');

const fileSizeKB = (Buffer.byteLength(json, 'utf8') / 1024).toFixed(1);
let totalWords = 0;
chapters.forEach(ch => {
  totalWords += ch.content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
});
console.log('\u2500'.repeat(60));
console.log('Book 6 generated successfully!');
console.log('   File: ' + outPath);
console.log('   Size: ' + fileSizeKB + ' KB');
console.log('   Chapters: ' + chapters.length);
console.log('   Parts: 6');
console.log('   Total Words: ' + totalWords);
console.log('   Est Pages: ' + Math.ceil(totalWords / 280));
