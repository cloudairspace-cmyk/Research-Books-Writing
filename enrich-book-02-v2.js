/**
 * enrich-book-02-v2.js
 * Expands Chapters 4-8 of Book 2
 * Goal: Add significant academic depth and word count. No em dashes allowed.
 */
const fs = require('fs');
const path = require('path');
const bookPath = path.join(__dirname, 'books', 'book-02.json');
const book = JSON.parse(fs.readFileSync(bookPath, 'utf-8'));

function append(content, html) {
  return content + html;
}

book.chapters[3].content = append(book.chapters[3].content, `
<h2>4.6 The Chronological vs. Thematic Approach</h2>
<p>One of the first structural decisions a researcher must make when organising their literature review is whether to adopt a chronological or a thematic approach. A chronological structure traces the historical development of a topic over time. It is particularly useful when the research question is fundamentally historical or when demonstrating how a paradigm has shifted. For example, a review on the medical understanding of a specific disease might logically start with early 20th-century theories and progress chronologically to modern genetic understandings.</p>
<p>However, for most empirical research, a thematic approach is far superior. A thematic structure organises the literature around the core concepts, variables, or themes relevant to your research question, regardless of when the studies were published. This approach allows the researcher to synthesize findings across different eras and focus the reader's attention on the theoretical debates rather than a mere timeline of publications.</p>
<p>In a thematic review, a paragraph might simultaneously discuss a foundational study from 1985 and a contemporary study from 2023, contrasting their methodologies or findings on a specific variable. This demonstrates a higher level of analytical maturity. It shows that the researcher has not just read the literature in order, but has mentally rearranged it into a new, meaningful structure that directly serves their own research objectives.</p>

<h2>4.7 Building the Matrix: A Practical Tool for Synthesis</h2>
<p>The transition from reading dozens of articles to writing a coherent review is often overwhelming. A crucial tool for managing this transition is the synthesis matrix (or literature review matrix). A synthesis matrix is a spreadsheet or table where each row represents a specific source (an article or book) and each column represents a key variable, theme, methodological approach, or finding relevant to your research question.</p>
<p>As you read an article, you do not just highlight text; you extract the relevant information and place it into the corresponding columns of your matrix. Once you have populated the matrix with several dozen sources, the magic of synthesis begins. You stop reading horizontally (reading one article summary at a time) and start reading vertically down the columns. Looking down the "Methodology" column, you can instantly see that 80% of studies used surveys while only 20% used interviews. Looking down the "Findings on Variable X" column, you can immediately spot the consensus and the outliers.</p>
<p>This vertical reading is what enables true synthesis. When you sit down to write, you do not write about Article A, then Article B. Instead, you write about Theme 1, drawing on the vertical column in your matrix to cite Articles A, C, and F that discussed it. The matrix forces you to organize your thinking thematically before you even begin drafting.</p>
`);

book.chapters[4].content = append(book.chapters[4].content, `
<h2>5.6 Recognising Epistemological Bias in the Literature</h2>
<p>Every piece of academic literature is written from a specific epistemological standpoint, whether the author explicitly states it or not. Epistemological bias refers to the inherent preference for certain types of knowledge, evidence, and methodologies over others. Identifying these biases is a critical component of a rigorous literature review.</p>
<p>For example, in many fields, there is a historical bias towards positivist, quantitative research. Studies that produce statistically significant p-values are often treated as more "objective" or "rigorous" than interpretivist, qualitative studies that produce thematic narratives. A critical reviewer does not passively accept this hierarchy. They interrogate the assumptions underlying the literature. If a body of literature claims that an intervention is universally successful based entirely on standardized survey data, but ignores the cultural context in which the intervention occurs, that literature is epistemologically biased.</p>
<p>Your job as a reviewer is to map the epistemological landscape of your topic. Are the dominant theories derived primarily from Western, industrialized contexts? Are indigenous or alternative knowledge systems marginalized? By exposing these biases, you open up new avenues for your own research, justifying your methodology not just as a choice, but as a necessary corrective to the biases of the existing literature.</p>

<h2>5.7 Dealing with Conflicting Evidence</h2>
<p>Novice researchers are often dismayed when they encounter conflicting evidence in the literature. If five studies say that X causes Y, and five other studies say that X has no effect on Y, what is the "truth"? The temptation is to side with the majority, or to pick the studies that support the researcher's preconceived notions, and quietly ignore the rest.</p>
<p>This is intellectually dishonest. Conflicting evidence is not a problem to be hidden; it is an analytical opportunity to be exploited. When the literature disagrees, it usually indicates that a phenomenon is complex and highly context-dependent. Your task is to investigate the reasons for the conflict. Did the studies use different operational definitions of the variables? Did they study different populations (e.g., adults versus adolescents)? Did they use different methodologies?</p>
<p>By writing a section of your literature review dedicated to explaining why the literature conflicts, you demonstrate advanced analytical skills. You elevate your review from a descriptive summary to a diagnostic evaluation of the field. This often leads directly to your research gap: perhaps your study is designed specifically to resolve the conflict by testing the variables in a new context or using a more robust methodology.</p>
`);

book.chapters[5].content = append(book.chapters[5].content, `
<h2>6.6 Moving Beyond the "Gap" to the "Need"</h2>
<p>Identifying a gap in the literature is only half the battle; the researcher must also prove that the gap needs to be filled. Not all gaps represent meaningful omissions; some gaps exist simply because the question is trivial or irrelevant. The transition from identifying a gap to establishing a research need requires the researcher to demonstrate the consequences of the missing knowledge.</p>
<p>To establish the need, the researcher must answer the "so what?" question. If this specific aspect of the phenomenon remains unstudied, what are the theoretical implications? Does it leave a major theory incomplete or untested in a critical context? What are the practical implications? Does the lack of knowledge hinder policy development, clinical practice, or industry innovation?</p>
<p>For example, noting that "no studies have examined the impact of remote work on left-handed software developers" identifies a gap, but it likely fails to establish a need, as handedness is probably irrelevant to remote work outcomes. Conversely, noting that "while the impact of remote work on productivity is well-documented in Western contexts, no studies have examined its impact in Sub-Saharan Africa, where infrastructure challenges are severe," identifies both a gap and a critical need. The literature review must culminate in a persuasive argument that filling the identified gap is essential for the advancement of the field.</p>
`);

book.chapters[6].content = append(book.chapters[6].content, `
<h2>7.6 Integrating Theory Without Overwhelming the Reader</h2>
<p>When writing the theoretical framework chapter (or section), a common error is the "data dump" of theoretical history. A researcher might spend ten pages detailing the entire biography of a theorist and the historical development of their theory, from its inception to the present day, before finally explaining how it applies to their own study.</p>
<p>This overwhelms the reader and distracts from the core purpose of the research. The theoretical framework must be strictly tailored to the specific needs of your study. You should provide only enough background to establish the theory's credibility and core tenets. The bulk of the section must be dedicated to application: how exactly are the specific concepts of this theory being mapped onto your specific research variables?</p>
<p>If you are using Bourdieu's theory of social capital, you do not need to summarize his entire sociology of education. You only need to define social capital as he understood it, and explicitly state how you will measure or observe social capital in your specific participant group. The theory is a tool, a lens through which to view your data; it should not become the subject of the research itself, unless you are conducting purely theoretical research.</p>
`);

book.chapters[7].content = append(book.chapters[7].content, `
<h2>8.6 The Art of Paraphrasing and Synthesis</h2>
<p>Plagiarism is universally condemned in academia, but many students inadvertently commit it not through malicious intent, but through poor paraphrasing skills. "Patchwriting" occurs when a researcher takes a source sentence, swaps out a few synonyms, changes the sentence structure slightly, and presents it as their own writing. Even with a citation, this borders on academic misconduct because the original author's intellectual structure remains intact.</p>
<p>True paraphrasing requires synthesis. It means reading a paragraph, digesting the core idea, putting the original text away, and explaining the concept in your own words, entirely integrated into your own argument. When you synthesize, you rarely paraphrase just one sentence from one author. Instead, you combine the ideas of several authors into a single, cohesive statement.</p>
<p>For example: "While early research viewed employee motivation primarily through the lens of financial compensation (Smith, 1990; Jones, 1995), more recent scholarship emphasizes the overriding importance of workplace autonomy and purpose-driven tasks in sustaining long-term engagement (Brown, 2020; Davis, 2022)." This sentence synthesizes four different sources, spanning three decades, into a single narrative arc. It demonstrates mastery over the literature, rather than subservience to it. Mastering the art of synthesis is the defining characteristic of a mature academic writer.</p>
`);

fs.writeFileSync(bookPath, JSON.stringify(book, null, 2), 'utf-8');
console.log('Book 2 Chapters 4-8 enriched successfully.');
