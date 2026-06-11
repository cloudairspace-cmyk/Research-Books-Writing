const fs = require('fs');
const path = require('path');

const bookPath = path.join(__dirname, 'books', 'book-01.json');
const book = JSON.parse(fs.readFileSync(bookPath, 'utf-8'));

// Utility to insert HTML at the beginning of content
function prependHTML(content, html) {
  // Find where the first paragraph or header ends, or just prepend
  return html + '\n\n' + content;
}

// Utility to insert HTML after a specific heading
function insertAfterHeading(content, headingText, html) {
  const regex = new RegExp(`(<h[2-4]>.*?${headingText}.*?<\\/h[2-4]>)`, 'i');
  return content.replace(regex, `$1\n\n${html}\n\n`);
}

// Chapter 1: Introduction to Research
let ch1 = book.chapters[0].content;
ch1 = prependHTML(ch1, `<img src="img/ch1_intro_research.png" alt="Introduction to Research" class="header-image">`);
ch1 = insertAfterHeading(ch1, 'Types of Research', `
<div class="diagram-container">
  <div class="diagram-header">Basic vs Applied Research</div>
  <div class="diagram-grid grid-2">
    <div class="diagram-box">
      <h4>Basic Research</h4>
      <p>Driven by curiosity and a desire to expand knowledge. Focuses on theoretical understanding without immediate practical application.</p>
    </div>
    <div class="diagram-box" style="border-top-color:var(--orange);">
      <h4>Applied Research</h4>
      <p>Designed to solve practical problems of the modern world. Focuses on finding solutions that can cure diseases, innovate technology, etc.</p>
    </div>
  </div>
</div>
`);
book.chapters[0].content = ch1;

// Chapter 2: The Research Process
let ch2 = book.chapters[1].content;
ch2 = insertAfterHeading(ch2, 'Phases of the Research Process', `
<div class="diagram-container">
  <div class="diagram-header">The Research Process Cycle</div>
  <div class="diagram-flow">
    <div class="diagram-box"><h4>1. Problem</h4><p>Identify</p></div>
    <div class="diagram-arrow">➔</div>
    <div class="diagram-box"><h4>2. Literature</h4><p>Review</p></div>
    <div class="diagram-arrow">➔</div>
    <div class="diagram-box"><h4>3. Hypothesis</h4><p>Formulate</p></div>
    <div class="diagram-arrow">➔</div>
    <div class="diagram-box"><h4>4. Design</h4><p>Research Plan</p></div>
    <div class="diagram-arrow">➔</div>
    <div class="diagram-box"><h4>5. Data</h4><p>Collect & Analyze</p></div>
    <div class="diagram-arrow">➔</div>
    <div class="diagram-box"><h4>6. Report</h4><p>Conclusion</p></div>
  </div>
</div>
`);
book.chapters[1].content = ch2;

// Chapter 3: Research Paradigms & Philosophy
let ch3 = book.chapters[2].content;
ch3 = insertAfterHeading(ch3, 'Key Research Paradigms', `
<div class="diagram-container">
  <div class="diagram-header">Major Research Paradigms</div>
  <div class="diagram-grid grid-3">
    <div class="diagram-box">
      <h4>Positivism</h4>
      <p>Objective reality exists. Focuses on quantitative data, empirical observation, and scientific methods.</p>
    </div>
    <div class="diagram-box" style="border-top-color:var(--gold);">
      <h4>Interpretivism</h4>
      <p>Subjective reality. Focuses on qualitative data, understanding human meaning, and social contexts.</p>
    </div>
    <div class="diagram-box" style="border-top-color:var(--red);">
      <h4>Pragmatism</h4>
      <p>Reality is what works. Focuses on mixed methods, practical solutions, and the research question itself.</p>
    </div>
  </div>
</div>
`);
book.chapters[2].content = ch3;

// Chapter 4: Research Design
let ch4 = book.chapters[3].content;
ch4 = insertAfterHeading(ch4, 'Types of Research Design', `
<div class="diagram-container">
  <div class="diagram-header">Research Design Approaches</div>
  <div class="diagram-grid grid-3">
    <div class="diagram-box">
      <h4>Qualitative</h4>
      <p>Exploratory. Uses interviews, focus groups. Non-numerical data.</p>
    </div>
    <div class="diagram-box" style="border-top-color:var(--orange);">
      <h4>Quantitative</h4>
      <p>Descriptive/Causal. Uses surveys, experiments. Numerical data.</p>
    </div>
    <div class="diagram-box" style="border-top-color:var(--green);">
      <h4>Mixed Methods</h4>
      <p>Integrative. Combines both qualitative and quantitative approaches.</p>
    </div>
  </div>
</div>
`);
book.chapters[3].content = ch4;

// Chapter 5: Sampling Techniques
let ch5 = book.chapters[4].content;
ch5 = prependHTML(ch5, `<img src="img/ch5_sampling_techniques.png" alt="Sampling Techniques" class="header-image">`);
ch5 = insertAfterHeading(ch5, 'Types of Sampling Methods', `
<div class="diagram-container">
  <div class="diagram-header">Sampling Methods</div>
  <div class="diagram-grid grid-2">
    <div class="diagram-box">
      <h4>Probability Sampling</h4>
      <p>Every member has a known chance of selection.<br><br><b>Includes:</b> Simple Random, Stratified, Cluster, Systematic.</p>
    </div>
    <div class="diagram-box" style="border-top-color:var(--red);">
      <h4>Non-Probability Sampling</h4>
      <p>Members are selected non-randomly.<br><br><b>Includes:</b> Convenience, Purposive, Snowball, Quota.</p>
    </div>
  </div>
</div>
`);
book.chapters[4].content = ch5;

// Chapter 6: Data Collection Methods
let ch6 = book.chapters[5].content;
ch6 = insertAfterHeading(ch6, 'Primary Data Collection Methods', `
<div class="diagram-container">
  <div class="diagram-header">Primary Data Collection Tools</div>
  <div class="diagram-grid grid-2">
    <div class="diagram-box">
      <h4>📋 Surveys & Questionnaires</h4>
      <p>Standardized questions to collect data from a large group.</p>
    </div>
    <div class="diagram-box" style="border-top-color:var(--gold);">
      <h4>🗣️ Interviews</h4>
      <p>One-on-one conversations for deep qualitative insights.</p>
    </div>
    <div class="diagram-box" style="border-top-color:var(--orange);">
      <h4>👁️ Observations</h4>
      <p>Watching subjects in their natural environment without interference.</p>
    </div>
    <div class="diagram-box" style="border-top-color:var(--red);">
      <h4>🧪 Experiments</h4>
      <p>Controlled environment testing to determine cause and effect.</p>
    </div>
  </div>
</div>
`);
book.chapters[5].content = ch6;

// Chapter 7: Data Analysis Fundamentals
let ch7 = book.chapters[6].content;
ch7 = prependHTML(ch7, `<img src="img/ch7_data_analysis.png" alt="Data Analysis Fundamentals" class="header-image">`);
book.chapters[6].content = ch7;

// Chapter 10: Writing the Research Report
let ch10 = book.chapters[9].content;
ch10 = insertAfterHeading(ch10, 'Structure of a Research Report', `
<div class="diagram-container">
  <div class="diagram-header">The IMRAD Structure</div>
  <div class="diagram-flow">
    <div class="diagram-box" style="border-top-color:var(--indigo);"><h4>I</h4><p>Introduction<br><small>Why did you do it?</small></p></div>
    <div class="diagram-arrow">➔</div>
    <div class="diagram-box" style="border-top-color:var(--teal);"><h4>M</h4><p>Methods<br><small>How did you do it?</small></p></div>
    <div class="diagram-arrow">➔</div>
    <div class="diagram-box" style="border-top-color:var(--orange);"><h4>R</h4><p>Results<br><small>What did you find?</small></p></div>
    <div class="diagram-arrow">➔</div>
    <div class="diagram-box" style="border-top-color:var(--red);"><h4>A & D</h4><p>And Discussion<br><small>What does it mean?</small></p></div>
  </div>
</div>
`);
book.chapters[9].content = ch10;

fs.writeFileSync(bookPath, JSON.stringify(book, null, 2), 'utf-8');
console.log('Book chapters updated with diagrams and images.');
