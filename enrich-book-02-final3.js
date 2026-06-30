/**
 * enrich-book-02-final3.js
 * Pushing Book 2 past 56,000 words (200 pages).
 * Adding "Key Academic Terms to Master" to each chapter.
 */
const fs = require('fs');
const path = require('path');
const bookPath = path.join(__dirname, 'books', 'book-02.json');
const book = JSON.parse(fs.readFileSync(bookPath, 'utf-8'));

function append(content, html) {
  return content + html;
}

const terms = [
  // Chapter 1
  `
<h2>1.15 Key Academic Terms to Master</h2>
<p><strong>Epistemology:</strong> The branch of philosophy concerned with the theory of knowledge. It asks how we know what we know, what justifies a belief, and what constitutes valid evidence. In a literature review, your epistemological stance determines whether you treat published papers as objective facts or as socially constructed narratives.</p>
<p><strong>Heuristic:</strong> A mental shortcut or "rule of thumb" that allows people to solve problems and make judgments quickly and efficiently. While useful in daily life, relying on heuristics in a literature search (e.g., only reading papers from famous authors) leads to biased and incomplete reviews.</p>
<p><strong>Polymath:</strong> A person of wide-ranging knowledge or learning. Historically, polymaths could read the entirety of scientific literature. Today, the explosion of specialized knowledge makes the polymath obsolete, necessitating the formal, structured literature review to manage information overload.</p>
  `,
  // Chapter 2
  `
<h2>2.15 Key Academic Terms to Master</h2>
<p><strong>Boolean Operator:</strong> Logical words (AND, OR, NOT) used to connect search terms and create highly specific queries in academic databases. Mastering Boolean operators transforms a simple keyword search into a rigorous, reproducible methodology.</p>
<p><strong>Truncation:</strong> A search technique, often using an asterisk (*), that allows the database to retrieve all variations of a root word (e.g., "educat*" retrieves educate, education, educational, educator). This expands the search net significantly.</p>
<p><strong>Grey Literature:</strong> Research produced by organizations outside of the traditional commercial or academic publishing and distribution channels. This includes government reports, policy white papers, and working papers, which are crucial for scoping reviews but carry a higher risk of bias due to the lack of double-blind peer review.</p>
  `,
  // Chapter 3
  `
<h2>3.15 Key Academic Terms to Master</h2>
<p><strong>IMRAD:</strong> An acronym representing the standard structure of empirical scientific papers: Introduction, Methods, Results, and Discussion. Understanding this architecture allows the researcher to read strategically, skipping directly to the methodology or discussion sections to evaluate the paper's relevance.</p>
<p><strong>Ecological Fallacy:</strong> A logical error that occurs when a researcher makes an inference about an individual based on aggregate data for a group. A critical reader must spot when an author's conclusion commits this fallacy, invalidating their claims about individual behavior.</p>
<p><strong>Statistical Significance vs. Clinical Significance:</strong> A finding is statistically significant if it is unlikely to have occurred by chance (e.g., p < 0.05). However, a finding is clinically (or practically) significant only if the effect size is large enough to matter in the real world. A rigorous reviewer distinguishes between the two.</p>
  `,
  // Chapter 4
  `
<h2>4.13 Key Academic Terms to Master</h2>
<p><strong>Synthesis Matrix:</strong> A grid or spreadsheet used to systematically extract and categorize data from multiple sources. It forces the researcher to transition from horizontal reading (summarizing one article at a time) to vertical synthesis (comparing how multiple articles address a single variable).</p>
<p><strong>Thematic Structure:</strong> Organizing a literature review around core concepts, variables, or themes, rather than chronologically or methodologically. This is generally considered the most sophisticated approach for empirical research.</p>
<p><strong>Macro-Structure:</strong> The overarching architectural organization of the entire literature review chapter, often visualized as an "inverted pyramid" that begins with the broadest context and systematically narrows down to the specific, pinpoint research gap.</p>
  `,
  // Chapter 5
  `
<h2>5.13 Key Academic Terms to Master</h2>
<p><strong>Epistemological Monoculture:</strong> A state where an entire body of literature is dominated by a single philosophical approach to knowledge (e.g., exclusively positivist, quantitative studies). A strong review identifies this monoculture to justify the introduction of a new methodological paradigm.</p>
<p><strong>Positivism:</strong> An epistemological stance that asserts that genuine knowledge is exclusively derived from experience of natural phenomena and their properties and relations. Information derived from sensory experience, interpreted through reason and logic, forms the exclusive source of all certain knowledge.</p>
<p><strong>Interpretivism:</strong> An approach to social science that opposes the positivism of natural science. It argues that the social realm cannot be studied with the scientific method of investigation applied to the natural world; investigation of the social world requires a different epistemology, one that seeks to understand the meaning human beings attribute to their actions.</p>
  `,
  // Chapter 6
  `
<h2>6.11 Key Academic Terms to Master</h2>
<p><strong>Conceptual Gap:</strong> A void in the literature where a specific theoretical relationship has never been tested, or a phenomenon remains entirely undefined. Filling a conceptual gap usually requires building new theoretical models.</p>
<p><strong>Contextual Gap:</strong> A void in the literature where a well-established theory has not been tested in a specific environment, population, or time period. Most master's and doctoral research focuses on filling contextual gaps to test the generalizability of existing theories.</p>
<p><strong>Straw Gap:</strong> A research problem manufactured solely to justify a predetermined study, even though the literature has already adequately addressed the issue. Claiming a straw gap is an ethical and methodological violation that will be heavily penalized during an oral defense.</p>
  `,
  // Chapter 7
  `
<h2>7.11 Key Academic Terms to Master</h2>
<p><strong>Theoretical Framework:</strong> The specific theory or set of concepts that guide the research design and data interpretation. It acts as an epistemological filter, determining what data is collected and how it is understood.</p>
<p><strong>Theoretical Retrofitting:</strong> The intellectually dishonest practice of collecting data first, analyzing the results, and then going back to the literature to find a theory that conveniently explains the findings. Hypotheses must be derived from theory prior to data collection.</p>
<p><strong>Social Desirability Bias:</strong> A type of response bias that is the tendency of survey respondents to answer questions in a manner that will be viewed favorably by others. It can take the form of over-reporting "good behavior" or under-reporting "bad," or undesirable behavior. Reviewers must identify if this bias compromises an entire body of survey-based literature.</p>
  `,
  // Chapter 8
  `
<h2>8.11 Key Academic Terms to Master</h2>
<p><strong>Patchwriting:</strong> A form of plagiarism where a writer stitches together phrases from multiple sources, changing just enough words to bypass software detection, but retaining the original intellectual structure. It demonstrates a lack of deep comprehension.</p>
<p><strong>Hedging:</strong> The use of cautious language (e.g., "suggests," "may," "indicates") to make claims less absolute. It is a hallmark of scholarly tone, acknowledging the provisional nature of scientific knowledge and calibrating the claim to the strength of the evidence.</p>
<p><strong>Steel Man Argument:</strong> The practice of reconstructing an opposing argument in its strongest, most persuasive possible form before attempting to critique it. This demonstrates intellectual honesty and ensures that the subsequent critique is robust and scientifically valid.</p>
  `,
  // Chapter 9
  `
<h2>9.12 Key Academic Terms to Master</h2>
<p><strong>MEAL Plan:</strong> An acronym for structuring academic paragraphs: Main idea, Evidence, Analysis, and Link. Ensuring every paragraph contains the "Analysis" component prevents the literature review from devolving into a mere descriptive summary.</p>
<p><strong>Dialectic:</strong> A discourse between two or more people holding different points of view about a subject but wishing to establish the truth through reasoned arguments. In writing, it involves presenting a thesis, contrasting it with an antithesis, and resolving the tension through a synthesis.</p>
<p><strong>Signposting:</strong> Explicit statements in academic writing that guide the reader through the argument structure (e.g., "Having established X, this section will now explore Y"). Effective signposting reduces the cognitive load on the reader.</p>
  `,
  // Chapter 10
  `
<h2>10.12 Key Academic Terms to Master</h2>
<p><strong>Systematic Review:</strong> A review of a clearly formulated question that uses systematic and explicit methods to identify, select, and critically appraise relevant research, and to collect and analyze data from the studies that are included in the review.</p>
<p><strong>Meta-Synthesis:</strong> An intentional and coherent approach to analyzing data across qualitative studies. It is a process that enables researchers to identify a specific research question and then search for, select, appraise, summarize, and combine qualitative evidence to address that question.</p>
<p><strong>Quality Appraisal:</strong> The formal, structured evaluation of the methodological rigor of a study. In systematic reviews, studies that score poorly on quality appraisal tools (like the CASP checklist) are given less weight in the final synthesis.</p>
  `,
  // Chapter 11
  `
<h2>11.11 Key Academic Terms to Master</h2>
<p><strong>PRISMA:</strong> Preferred Reporting Items for Systematic Reviews and Meta-Analyses. An evidence-based minimum set of items for reporting in systematic reviews and meta-analyses, designed to improve transparency and methodological rigor.</p>
<p><strong>PROSPERO:</strong> An international prospective register of systematic reviews in health and social care. Registering a protocol here before commencing the search prevents duplication of effort and outcome switching.</p>
<p><strong>Outcome Switching:</strong> The unethical practice of changing the primary outcome measure of a study after the data has been collected and analyzed, usually to ensure a statistically significant result can be published. Prospective protocol registration is the primary defense against this.</p>
  `,
  // Chapter 12
  `
<h2>12.11 Key Academic Terms to Master</h2>
<p><strong>Meta-Analysis:</strong> The statistical procedure for combining data from multiple studies. When the treatment effect (or effect size) is consistent from one study to the next, meta-analysis can be used to identify this common effect.</p>
<p><strong>Heterogeneity:</strong> In a meta-analysis, the variation in study outcomes between studies. If heterogeneity is too high (often measured by the I-squared statistic), it is mathematically invalid to pool the results, as it means the studies are measuring fundamentally different things.</p>
<p><strong>Funnel Plot:</strong> A scatterplot of treatment effect against a measure of study precision. It is used primarily as a visual aid for detecting bias or systematic heterogeneity. An asymmetrical funnel plot strongly suggests publication bias.</p>
  `,
  // Chapter 13
  `
<h2>13.11 Key Academic Terms to Master</h2>
<p><strong>Scoping Review:</strong> A type of knowledge synthesis that follows a systematic approach to map evidence on a topic and identify main concepts, theories, sources, and knowledge gaps. Unlike a systematic review, it does not typically require a formal quality appraisal of the included studies.</p>
<p><strong>Constructivism:</strong> An epistemological paradigm that argues human beings generate knowledge and meaning from an interaction between their experiences and their ideas. In this view, truth is not an objective reality waiting to be discovered, but a social construct. Scoping reviews often align with this ontology by mapping diverse, subjective interpretations.</p>
<p><strong>Empty Review:</strong> A systematic or scoping review that, after executing a rigorous and exhaustive search protocol, finds zero studies that meet the inclusion criteria. This is highly valuable as it definitively proves a critical gap in the empirical literature.</p>
  `,
  // Chapter 14
  `
<h2>14.11 Key Academic Terms to Master</h2>
<p><strong>Epistemic Community:</strong> A transnational network of knowledge-based experts who help decision-makers to define the problems they face, identify various policy solutions, and assess the policy outcomes. Analyzing literature involves mapping these communities to identify shared biases or blind spots.</p>
<p><strong>Narrative Empathy:</strong> The intellectual capacity to reconstruct and genuinely understand the logic of an opposing argument before critiquing it. This prevents the literature review from becoming a hostile attack piece and builds the researcher's scholarly ethos.</p>
<p><strong>Siloing:</strong> The phenomenon where distinct groups of researchers study the same topic but never cite each other or collaborate, usually due to disciplinary boundaries or ideological differences. A masterful synthesis bridges these silos.</p>
  `,
  // Chapter 15
  `
<h2>15.11 Key Academic Terms to Master</h2>
<p><strong>Theoretical Saturation:</strong> The point in data collection or literature reviewing when new data no longer brings additional insights to the research questions. It is the definitive signal that the literature search can conclude.</p>
<p><strong>Law of Diminishing Returns:</strong> A principle stating that as investment in a particular area increases, the rate of profit from that investment, after a certain point, cannot continue to increase if other variables remain at a constant. In literature searching, it means the final 20% of articles takes 80% of the total search time.</p>
<p><strong>A Priori:</strong> Relating to or denoting reasoning or knowledge which proceeds from theoretical deduction rather than from observation or experience. In systematic reviews, decisions about inclusion criteria must be made a priori (before seeing the data) to prevent bias.</p>
  `,
  // Chapter 16
  `
<h2>16.11 Key Academic Terms to Master</h2>
<p><strong>Macro-Architecture:</strong> The high-level physical layout of a chapter or thesis, including the hierarchy of headings, subheadings, and modular sections. Good macro-architecture guides the examiner's cognitive processing of the argument.</p>
<p><strong>Preemptive Critique:</strong> The rhetorical strategy of identifying and responding to potential weaknesses in your own argument before the examiner has a chance to raise them. This demonstrates intellectual maturity and defensive rigor.</p>
<p><strong>Confirmation Bias:</strong> The tendency to search for, interpret, favor, and recall information in a way that confirms or supports one's prior beliefs or values. The rigorous structure of the literature review is specifically designed to counteract the researcher's natural confirmation bias.</p>
  `,
  // Chapter 17
  `
<h2>17.11 Key Academic Terms to Master</h2>
<p><strong>Citation Dumping:</strong> The poor academic practice of listing multiple citations at the end of a single sentence without explaining the analytical relationship between them. It indicates descriptive reporting rather than actual synthesis.</p>
<p><strong>Bibliometric Analysis:</strong> The statistical analysis of books, articles, or other publications. Bibliometrics use data on numbers and authors of scientific publications and on articles and the citations therein (and in those citations) to measure the "output" of individuals/research teams, institutions, and countries.</p>
<p><strong>Conceptual Map:</strong> A visual diagram representing the relationships between concepts, theories, and authors in a specific field. It is a powerful tool for planning the thematic structure of the literature review chapter.</p>
  `,
  // Chapter 18
  `
<h2>18.11 Key Academic Terms to Master</h2>
<p><strong>Reference Management Software (RMS):</strong> Digital tools (like Zotero, Mendeley, or EndNote) used by scholars to store, organize, and cite academic papers. Advanced use involves utilizing the tagging features to build the synthesis matrix directly within the software.</p>
<p><strong>Taxonomy:</strong> The science of classification according to a pre-determined system, with the resulting catalog used to provide a conceptual framework for discussion, analysis, or information retrieval. A researcher must develop a taxonomy of tags in their RMS.</p>
<p><strong>Citation Formatting:</strong> The strict adherence to a specific style guide (APA, MLA, Chicago) for rendering references. While RMS automates this, researchers must manually audit the output, as formatting errors significantly damage the researcher's ethos in the eyes of examiners.</p>
  `,
  // Chapter 19
  `
<h2>19.11 Key Academic Terms to Master</h2>
<p><strong>Imposter Syndrome:</strong> A psychological occurrence in which an individual doubts their skills, talents, or accomplishments and has a persistent internalized fear of being exposed as a fraud. It is highly common during the initial, overwhelming reading phase of the literature review.</p>
<p><strong>Agency:</strong> In social science, the capacity of individuals to act independently and to make their own free choices. The literature review is the process where the researcher claims their academic agency, moving from passive consumer to active producer of knowledge.</p>
<p><strong>Iterative Process:</strong> A process for arriving at a decision or a desired result by repeating rounds of analysis or a cycle of operations. The literature review is not a linear step; it requires constant iteration as primary data is collected and analyzed.</p>
  `,
  // Chapter 20
  `
<h2>20.11 Key Academic Terms to Master</h2>
<p><strong>Structural Alignment:</strong> The internal consistency of a thesis or dissertation. The literature review must seamlessly connect the problem statement in the introduction to the research design in the methodology. A misaligned thesis cannot be passed.</p>
<p><strong>Forward Alignment:</strong> Ensuring that the conclusions reached at the end of the literature review directly justify and mandate the specific methodological choices detailed in the subsequent chapter.</p>
<p><strong>Backward Alignment:</strong> Ensuring that the literature synthesized directly addresses the specific research problem and context outlined in the introduction, without wandering into irrelevant theoretical tangents.</p>
  `
];

for (let i = 0; i < 20; i++) {
  if (book.chapters[i]) {
    book.chapters[i].content = append(book.chapters[i].content, terms[i]);
  }
}

// Check word count
let words = 0;
book.chapters.forEach(ch => {
  words += ch.content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
});
console.log('Book 2 Final Words:', words, 'Est Pages:', Math.ceil(words / 280));

fs.writeFileSync(bookPath, JSON.stringify(book, null, 2), 'utf-8');
console.log('Book 2 Key Terms added successfully.');
