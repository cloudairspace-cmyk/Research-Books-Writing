/**
 * enrich-book-02-v6.js
 * Expands Chapters 6-15 of Book 2
 * Goal: Add significant academic depth and word count. No em dashes allowed.
 */
const fs = require('fs');
const path = require('path');
const bookPath = path.join(__dirname, 'books', 'book-02.json');
const book = JSON.parse(fs.readFileSync(bookPath, 'utf-8'));

function append(content, html) {
  return content + html;
}

book.chapters[5].content = append(book.chapters[5].content, `
<h2>6.7 Formulating the Hypothesis from the Literature Gap</h2>
<p>Once a compelling research need has been established from the literature gap, the researcher must formally articulate the hypothesis or research questions. The literature review is not a separate entity from the hypothesis; rather, the hypothesis is the logical, unavoidable conclusion of the literature review. If the literature demonstrates that Variable A affects Variable B under Condition C, and your gap identifies that Condition D has never been tested, your hypothesis naturally predicts how Variable A will affect Variable B under Condition D.</p>
<p>A poorly constructed literature review leads to a "floating hypothesis" - a prediction that seems to appear out of nowhere, disconnected from the preceding pages. A well-constructed review acts as a funnel, inevitably dropping the reader exactly onto the hypothesis. The reader should be able to guess your hypothesis before they even read it, simply based on the trajectory of the arguments you have synthesized.</p>
`);

book.chapters[6].content = append(book.chapters[6].content, `
<h2>7.7 The Danger of Theoretical Retrofitting</h2>
<p>A severe error in academic research, which often manifests in the literature review, is theoretical retrofitting. This occurs when a researcher collects their data first, analyzes the results, and then goes back to the literature to find a theory that conveniently explains their specific findings. This practice undermines the scientific method, which requires hypotheses to be derived from theory prior to data collection.</p>
<p>Theoretical retrofitting is a form of confirmation bias that makes a study appear more rigorous and theory-driven than it actually was. A genuine theoretical framework must be selected and justified in the literature review before the researcher enters the field. It acts as a predictive model, not a post-hoc rationalization. Examiners and peer reviewers are highly adept at spotting retrofitted theories, as they often feel loosely attached or overly tailored to the specific quirks of the collected data.</p>
`);

book.chapters[7].content = append(book.chapters[7].content, `
<h2>8.7 Developing an Academic Vocabulary</h2>
<p>The transition from descriptive summarizing to analytical synthesis requires a corresponding shift in vocabulary. Novice writers rely heavily on descriptive verbs: "Smith said," "Jones stated," "Brown found." These verbs indicate that the writer is merely reporting what happened in the text. To synthesize effectively, the writer must use analytical verbs that indicate the relationship between the studies and the writer's own evaluation of them.</p>
<p>Instead of "said," an analytical writer uses verbs like "argued," "contended," "postulated," or "hypothesized." When comparing studies, they use verbs that indicate the intellectual relationship: "Smith's findings corroborate Jones's theory, but directly challenge Brown's assumptions." When evaluating the strength of the evidence, they use verbs like "demonstrated," "suggested," or "implied." Developing this academic vocabulary is not about using complex words for the sake of sounding intelligent; it is about using precise language to encode the exact analytical relationship between the synthesized texts.</p>
`);

book.chapters[8].content = append(book.chapters[8].content, `
<h2>9.8 Using Headings to Control the Narrative</h2>
<p>In a lengthy literature review, headings and subheadings are not merely formatting choices; they are crucial cognitive tools for both the writer and the reader. For the writer, headings act as an outline, forcing them to group synthesized literature into coherent conceptual blocks. For the reader, headings provide a roadmap, signalling exactly how the argument is progressing.</p>
<p>A common mistake is using descriptive headings (e.g., "Previous Studies on Management") rather than analytical headings (e.g., "The Shift from Autocratic to Transformational Management Models"). An analytical heading tells the reader the conclusion of the section before they even read it. By reading the table of contents alone, an examiner should be able to understand the entire argumentative arc of your literature review. If your headings do not tell a story, your review likely lacks a cohesive structure.</p>
`);

book.chapters[9].content = append(book.chapters[9].content, `
<h2>10.8 The Meta-Synthesis of Qualitative Research</h2>
<p>While systematic reviews and meta-analyses are historically associated with quantitative, medical research, the social sciences have developed rigorous methods for systematically reviewing qualitative literature. This process is often called a meta-synthesis or a qualitative systematic review. Unlike a quantitative meta-analysis, which pools numerical data, a meta-synthesis pools themes, metaphors, and conceptual interpretations from multiple qualitative studies.</p>
<p>The goal of a meta-synthesis is not to average out the findings, but to create a new, higher-order interpretation that transcends the individual studies. For example, by synthesizing twenty ethnographic studies on the lived experience of chronic pain, a researcher might develop a new theoretical model of how chronic pain fractures personal identity - a model that none of the individual studies had fully articulated on their own. This requires a highly sophisticated level of analytical reading and conceptual translation.</p>
`);

book.chapters[10].content = append(book.chapters[10].content, `
<h2>11.7 The Role of the Protocol Registry (PROSPERO)</h2>
<p>A critical step in modern systematic reviewing is the registration of the review protocol before the search begins. PROSPERO is the international prospective register of systematic reviews. Registering a protocol serves two essential functions. First, it prevents duplication of effort. Before a research team spends a year conducting a systematic review, they can search PROSPERO to ensure no other team in the world is currently working on the exact same question.</p>
<p>Second, and more importantly, it prevents reporting bias. By publicly declaring the search strategy, inclusion criteria, and planned analyses in advance, researchers cannot quietly change their methodology halfway through the study to produce a more favorable or publishable result. If the final published review deviates significantly from the registered protocol without justification, peer reviewers will flag it as a severe methodological violation. Protocol registration is the ultimate commitment to methodological transparency.</p>
`);

book.chapters[11].content = append(book.chapters[11].content, `
<h2>12.7 Publication Bias and the Funnel Plot</h2>
<p>A meta-analysis is only as good as the literature it synthesizes. The greatest threat to the validity of a meta-analysis is publication bias (the "file drawer problem"). Journals are statistically more likely to publish studies that find a significant, positive effect than studies that find no effect. If a meta-analysis only pools published data, it will artificially inflate the true effect size because the "negative" studies are hidden in researchers' file drawers.</p>
<p>To detect publication bias, researchers use a visual tool called a funnel plot. A funnel plot graphs the effect size of each study against its precision (usually determined by sample size). In the absence of bias, the plot should look like a symmetrical, inverted funnel, with larger, more precise studies clustered at the top near the true effect size, and smaller, less precise studies spread out symmetrically at the bottom. If the plot is asymmetrical - for example, if there is a conspicuous absence of small studies showing negative effects - it strongly suggests that those studies exist but were never published. The meta-analyst must then use statistical techniques (like "trim and fill") to adjust their final conclusions to account for this missing data.</p>
`);

book.chapters[12].content = append(book.chapters[12].content, `
<h2>13.7 The Value of the "Empty" Review</h2>
<p>Occasionally, a researcher will design a rigorous systematic or scoping review protocol, execute the exhaustive database search, and find absolutely zero studies that meet their inclusion criteria. This is often perceived as a catastrophic failure, leaving the researcher wondering what they will write about. In reality, an "empty" review is a highly valuable scientific contribution.</p>
<p>An empty review definitively proves that a critical gap in the literature exists. It tells the academic and funding communities that a specific intervention, population, or phenomenon has been entirely ignored by empirical research. The researcher writes the review by detailing the rigorous methodology used to search for the data, analyzing the reasons why this specific area has been neglected (e.g., ethical barriers, lack of funding, theoretical blind spots), and issuing a clarion call for primary research. An empty review is the most powerful justification possible for conducting a new primary study.</p>
`);

book.chapters[13].content = append(book.chapters[13].content, `
<h2>14.7 Beyond the Text: Analyzing the Epistemic Community</h2>
<p>A truly advanced literature review recognizes that literature is not just text; it is the product of an epistemic community - a network of scholars who share a set of beliefs and practices. By analyzing the citations, a reviewer can map this community. Who are the central figures? Which institutions dominate the discourse? Are there distinct "camps" of researchers who refuse to cite each other?</p>
<p>Identifying these sociological factors within the literature provides a meta-level of analysis. If a reviewer notes that all the literature supporting a specific economic theory originates from researchers affiliated with a particular think tank, they introduce a necessary skepticism into their synthesis. Understanding the sociology of knowledge production allows the researcher to evaluate not just what is being said, but why it is being said, and by whom.</p>
`);

book.chapters[14].content = append(book.chapters[14].content, `
<h2>15.7 Knowing When to Stop: The Law of Diminishing Returns</h2>
<p>While theoretical saturation is the academic standard for concluding a literature search, practical constraints often dictate the timeline. The literature search is subject to the law of diminishing returns. The first ten hours of searching might yield 80% of the highly relevant, seminal papers. The next fifty hours might yield the remaining 20%. The researcher must balance the need for comprehensiveness with the constraints of their project timeline.</p>
<p>A pragmatic approach involves establishing clear cut-off criteria. This might involve setting a temporal boundary (e.g., only reviewing literature from the last ten years unless it is a seminal historical piece) or a methodological boundary (e.g., only reviewing peer-reviewed empirical studies, excluding opinion pieces and unverified reports). By explicitly stating and justifying these boundaries in the methodology section, the researcher defends their review against criticisms of omission, demonstrating that the stopping point was a strategic decision, not a failure of diligence.</p>
`);

fs.writeFileSync(bookPath, JSON.stringify(book, null, 2), 'utf-8');
console.log('Book 2 Chapters 6-15 enriched successfully.');
