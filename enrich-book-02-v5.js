/**
 * enrich-book-02-v5.js
 * Expands Chapters 1-10 of Book 2 with EVEN MORE DEPTH.
 * Goal: Push Book 2 over 56k words.
 */
const fs = require('fs');
const path = require('path');
const bookPath = path.join(__dirname, 'books', 'book-02.json');
const book = JSON.parse(fs.readFileSync(bookPath, 'utf-8'));

function append(content, html) {
  return content + html;
}

book.chapters[0].content = append(book.chapters[0].content, `
<h2>1.9 The Democratization of Knowledge and the Literature Review</h2>
<p>The transition into the open-access era has fundamentally altered the landscape of the literature review. Historically, access to academic journals was restricted to those affiliated with well-funded universities, creating a structural inequality in knowledge production. The open-access movement, driven by platforms like PLOS ONE and the proliferation of institutional repositories, has democratized access to primary research. This democratization means that literature reviewers now have an ethical obligation to look beyond the top-tier, paywalled journals and engage with a globally diverse array of scholarship.</p>
<p>However, this abundance of accessible literature introduces new challenges in quality control. The rise of predatory journals - publishers that charge author fees without providing rigorous peer review - requires the modern researcher to be hyper-vigilant. A literature review that unwittingly incorporates findings from predatory journals poisons its own theoretical foundation. Consequently, verifying the credibility of the publication venue is now as critical a step in the literature review process as evaluating the methodology of the study itself.</p>

<h2>1.10 Mapping the Intellectual Genealogy of a Concept</h2>
<p>An advanced technique in literature reviewing is tracing the intellectual genealogy of a core concept. This involves identifying the seminal paper that first introduced a term, and then meticulously tracking how that term has been redefined, expanded, or critiqued over subsequent decades. This genealogical approach reveals the malleability of academic language.</p>
<p>For instance, the concept of "burnout" meant something quite specific when it was first introduced in the 1970s (primarily focusing on human service workers). Over forty years, the literature has expanded the concept to cover corporate employees, students, and even parental roles. A literature review that treats "burnout" as a static, universally agreed-upon variable ignores this rich history. By tracing its genealogy, the researcher can precisely define which historical iteration of the concept they are adopting for their own study, thereby inoculating their research against accusations of conceptual vagueness.</p>
`);

book.chapters[1].content = append(book.chapters[1].content, `
<h2>2.9 The Grey Literature: Hidden Treasures and Methodological Risks</h2>
<p>While peer-reviewed journal articles are the gold standard, a truly comprehensive literature review, particularly in applied fields like public health or education, must engage with "grey literature." Grey literature encompasses documents produced by government agencies, non-governmental organizations (NGOs), think tanks, and industry bodies that are not controlled by commercial academic publishers. This includes policy white papers, government reports, working papers, and conference proceedings.</p>
<p>The primary advantage of grey literature is its immediacy and practical relevance. Academic publishing is notoriously slow; a peer-reviewed paper might report data that is three years old. A government report, however, can provide data from the current quarter. However, the methodological risk is significant: grey literature is rarely subject to double-blind peer review. It may be heavily influenced by the political or commercial agenda of the publishing organization. Therefore, when synthesizing grey literature, the reviewer must adopt an even more skeptical stance, explicitly acknowledging the source's potential biases while extracting its valuable empirical data.</p>

<h2>2.10 Tracking Citations: Forward and Backward Snowballing</h2>
<p>Keyword searching in databases is effective, but it often misses highly relevant papers that use unexpected terminology. To counteract this, researchers use a technique known as "snowballing" or citation tracking. Backward snowballing involves taking a highly relevant, recent paper and meticulously combing through its reference list to identify older, foundational studies. This ensures you do not miss the historical roots of your topic.</p>
<p>Forward snowballing relies on citation indexes (like Web of Science, Scopus, or Google Scholar) to see who has cited your highly relevant paper since it was published. If you find a seminal paper from 2015, forward snowballing allows you to discover the research from 2016 to the present day that builds upon, refutes, or modifies that 2015 study. By combining rigorous Boolean keyword searching with both forward and backward snowballing, you create an almost impenetrable net that captures the entirety of the relevant scholarly discourse.</p>
`);

book.chapters[2].content = append(book.chapters[2].content, `
<h2>3.9 Deconstructing Statistical Reporting in Literature</h2>
<p>For researchers conducting reviews in quantitative fields, the ability to critically read statistical reporting is paramount. It is not enough to read the author's narrative conclusion; the reviewer must interrogate the statistical tables. A common issue in published literature is the over-reliance on p-values at the expense of effect sizes. An author might declare a "highly significant" finding (p < .001), but if the effect size (e.g., Cohen's d) is negligible, the finding has statistical significance but no practical real-world relevance.</p>
<p>A rigorous literature review points out these discrepancies. If a body of literature consistently reports significant p-values but tiny effect sizes, the reviewer can synthesize this to argue that while the phenomenon exists, its real-world impact has been vastly overstated by previous researchers. This critical deconstruction of statistics elevates the literature review from a summary of claims to a forensic audit of the evidence.</p>

<h2>3.10 Identifying "Spin" in Academic Abstracts</h2>
<p>The abstract is the most frequently read part of any academic paper, and unfortunately, it is also the most susceptible to "spin." Spin occurs when authors use linguistic strategies to make their findings appear more robust, novel, or clinically significant than the actual data supports. This is often done to increase the likelihood of publication or media coverage.</p>
<p>Spin might involve focusing the abstract entirely on a secondary, statistically significant finding while ignoring the fact that the primary hypothesis failed. It might involve using causal language ("This drug cures X") when the study design only permits correlational claims ("This drug is associated with a reduction in X"). The critical reader never relies solely on the abstract. They compare the claims in the abstract directly against the data in the results section. Identifying and correcting for author spin is a vital service that a good literature review provides to the broader academic community.</p>
`);

book.chapters[3].content = append(book.chapters[3].content, `
<h2>4.8 The Methodological Structure</h2>
<p>In addition to chronological and thematic structures, a literature review can also be organized methodologically. This is particularly useful when the research gap you are addressing is fundamentally a problem of how previous research has been conducted, rather than what has been found. In a methodological review, the paragraphs and sections are organized according to the research designs employed by previous scholars.</p>
<p>For instance, a review on second-language acquisition might dedicate one section to reviewing all the cross-sectional survey studies on the topic, a second section to the longitudinal observational studies, and a third section to the randomized controlled trials. The analytical goal here is to demonstrate how the choice of methodology has constrained or skewed the findings of the field. The reviewer might conclude that because 90% of the literature relies on self-reported surveys, the field suffers from a massive social desirability bias, thereby perfectly justifying the reviewer's decision to use an ethnographic observational methodology in their own upcoming study.</p>
`);

book.chapters[4].content = append(book.chapters[4].content, `
<h2>5.8 Synthesizing Across Disciplinary Boundaries</h2>
<p>The most innovative and impactful literature reviews often break out of disciplinary silos. If you are researching organizational leadership, restricting your review solely to business management journals limits the scope of your understanding. A truly comprehensive synthesis will cross disciplinary boundaries, bringing in insights from psychology (cognitive biases in decision making), sociology (group dynamics and power structures), and even biology (the neuroscience of stress under pressure).</p>
<p>Synthesizing across disciplines is challenging because different fields use different jargon for the same concepts. What a psychologist calls "self-efficacy," a sociologist might call "agency," and a management scholar might call "empowerment." The reviewer must act as a translator, aligning these distinct vocabularies into a single, coherent narrative. When executed successfully, this cross-disciplinary synthesis allows the researcher to see solutions that are invisible to scholars who remain trapped within a single academic discipline.</p>
`);

fs.writeFileSync(bookPath, JSON.stringify(book, null, 2), 'utf-8');
console.log('Book 2 Chapters 1-5 enriched again successfully.');
