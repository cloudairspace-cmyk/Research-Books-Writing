/**
 * enrich-book-02-v3.js
 * Expands Chapters 9-13 of Book 2
 * Goal: Add significant academic depth and word count. No em dashes allowed.
 */
const fs = require('fs');
const path = require('path');
const bookPath = path.join(__dirname, 'books', 'book-02.json');
const book = JSON.parse(fs.readFileSync(bookPath, 'utf-8'));

function append(content, html) {
  return content + html;
}

// Chapter 9 is index 8
book.chapters[8].content = append(book.chapters[8].content, `
<h2>9.6 Structuring the Argumentative Flow</h2>
<p>A well-written literature review is essentially a sustained argument. It does not merely state what is known; it argues for what is missing and why your research is the logical next step. To achieve this, the flow of your paragraphs must follow a specific argumentative structure. The most effective structure is the "funnel" approach. You begin with the broad context of your topic, establishing its general importance. You then systematically narrow the focus, reviewing the literature that addresses increasingly specific aspects of your variables, until you arrive precisely at the pinpoint gap your research will fill.</p>
<p>Each paragraph within this funnel must also have its own internal structure, typically known as the MEAL plan: Main idea, Evidence, Analysis, and Link. The Main idea (topic sentence) states the core point of the paragraph (e.g., "Recent studies suggest X"). The Evidence provides citations to support this claim. The Analysis explains the significance or limitations of the evidence. Finally, the Link connects the paragraph to the broader argument or transitions to the next paragraph. When every paragraph follows this structure, the literature review becomes highly cohesive and persuasive.</p>

<h2>9.7 The Role of Signposting in Academic Writing</h2>
<p>Given the complexity of a literature review, the reader can easily become lost in the sheer volume of citations and theories. Effective academic writing relies heavily on "signposting" to guide the reader through the argument. Signposts are explicit statements that tell the reader where they are in the argument, what has just been covered, and what is coming next.</p>
<p>For example, a transition between major sections might read: "Having established the economic impact of the policy, this review will now examine its psychological consequences on the workforce." This explicit signposting prevents the reader from experiencing cognitive whiplash when the topic shifts. Similarly, internal signposts like "Conversely," "Furthermore," and "In contrast to this consensus," help the reader instantly grasp the relationship between sequential paragraphs. Masterful use of signposting ensures that the reader's cognitive energy is spent understanding your synthesis, not trying to decipher your structure.</p>
`);

// Chapter 10 is index 9
book.chapters[9].content = append(book.chapters[9].content, `
<h2>10.6 The iterative nature of Systematic Reviews</h2>
<p>While systematic reviews are often presented as a rigid, linear process - define protocol, search databases, extract data, synthesize - the reality of conducting one is often highly iterative. As researchers begin the initial screening phase, they frequently discover that their search terms were either too broad (returning thousands of irrelevant medical papers for a sociological question) or too narrow (missing seminal papers they already knew existed).</p>
<p>This discovery necessitates returning to the protocol and refining the search string. This iterative refinement is not a failure of planning; it is a normal part of the systematic review process. However, any changes made to the search protocol must be meticulously documented and justified. If a search term was removed because it produced unmanageable noise, the researcher must explicitly state this in their methodology section. Transparency in these iterative decisions is what separates a truly systematic review from an ad hoc literature search masquerading as one.</p>

<h2>10.7 Quality Appraisal Tools</h2>
<p>The defining feature of a systematic review, differentiating it from a scoping review, is the formal appraisal of study quality. A systematic review does not treat all published papers equally. It rigorously evaluates the methodological soundness of each included study, acknowledging that a poorly designed study provides weaker evidence than a robust one.</p>
<p>To do this objectively, researchers use standardized quality appraisal tools, such as the CASP (Critical Appraisal Skills Programme) checklists or the Cochrane Risk of Bias tool. These tools force the reviewer to ask specific, structured questions about each study: Was the sample representative? Were confounding variables controlled for? Was the data analysis appropriate? Studies that score poorly on these appraisals may still be included in the review, but their findings are given less weight in the final synthesis, and their methodological flaws are highlighted as limitations in the existing evidence base.</p>
`);

// Chapter 11 is index 10
book.chapters[10].content = append(book.chapters[10].content, `
<h2>11.6 The PRISMA 2020 Update</h2>
<p>The PRISMA statement, originally published in 2009, revolutionized the reporting of systematic reviews and meta-analyses. However, as the methodology of systematic reviewing evolved, so did the need for updated reporting guidelines. In 2020, the PRISMA statement was significantly revised to account for advances in the field, including the rise of machine learning in study screening and the increasing importance of registering review protocols.</p>
<p>The PRISMA 2020 update expands the standard 27-item checklist and provides a more detailed flow diagram. Crucially, it now requires reviewers to explicitly report whether they used automation tools during the screening process, how they assessed certainty in the body of evidence, and whether any data or code from the review are publicly available. Adhering to the PRISMA 2020 guidelines is now mandatory for publication in most top-tier medical and social science journals, making it essential knowledge for any researcher attempting a systematic review.</p>
`);

// Chapter 12 is index 11
book.chapters[11].content = append(book.chapters[11].content, `
<h2>12.6 Meta-Analysis: Synthesizing Quantitative Data</h2>
<p>When a systematic review identifies a sufficient number of quantitative studies that measure the same variables using similar metrics, the researcher may proceed to a meta-analysis. A meta-analysis is not merely a literature review; it is a statistical procedure that combines the numerical results of multiple independent studies to produce a single, pooled estimate of effect size.</p>
<p>The power of meta-analysis lies in its ability to overcome the limitations of small sample sizes in individual studies. By pooling data from twenty studies, each with 50 participants, the meta-analysis effectively creates a "super-study" with 1,000 participants. This massive increase in statistical power allows researchers to detect small but highly significant effects that individual studies might have missed, and to resolve conflicting findings in the literature by demonstrating the overall, aggregated trend.</p>
<p>However, meta-analysis is highly susceptible to the "apples and oranges" problem. If the included studies are too dissimilar in their methodologies, populations, or measurement tools (a state known as high heterogeneity), pooling their statistical results is mathematically invalid and produces meaningless conclusions. The researcher must conduct rigorous heterogeneity testing (such as calculating the I-squared statistic) before proceeding with the meta-analysis, to justify that combining the studies is scientifically sound.</p>
`);

// Chapter 13 is index 12
book.chapters[12].content = append(book.chapters[12].content, `
<h2>13.6 Scoping Reviews vs. Systematic Reviews</h2>
<p>While systematic reviews aim to answer a highly specific research question (e.g., "What is the efficacy of Drug X on Symptom Y?"), scoping reviews have a broader, more exploratory purpose. The goal of a scoping review is not to synthesize findings to answer a specific question, but rather to "map" the existing literature on a broad topic. They are often used to determine the size and nature of the evidence base, identify gaps in the literature, or clarify complex concepts.</p>
<p>Unlike systematic reviews, scoping reviews generally do not include a formal quality appraisal of the included studies. The focus is on breadth rather than depth. A scoping review might map all the different methodologies that have been used to study "workplace burnout" over the last decade, regardless of whether those individual studies were methodologically robust. This makes the scoping review an excellent preliminary step before undertaking primary research or a full systematic review, as it provides a comprehensive overview of the terrain.</p>
<p>Despite their exploratory nature, scoping reviews must still be conducted with rigorous, transparent, and reproducible methods. The search strategy, inclusion criteria, and data extraction processes must be clearly documented, often following the PRISMA-ScR (Scoping Review) extension guidelines. The failure to distinguish clearly between the purpose and methodology of a scoping review versus a systematic review is a frequent cause of rejection in academic publishing.</p>
`);

fs.writeFileSync(bookPath, JSON.stringify(book, null, 2), 'utf-8');
console.log('Book 2 Chapters 9-13 enriched successfully.');
