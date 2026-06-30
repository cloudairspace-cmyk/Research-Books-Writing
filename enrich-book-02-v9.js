/**
 * enrich-book-02-v9.js
 * Massive expansion for Book 2 (Chapters 6-20)
 * Goal: Push Book 2 over 56k words. No em dashes allowed.
 */
const fs = require('fs');
const path = require('path');
const bookPath = path.join(__dirname, 'books', 'book-02.json');
const book = JSON.parse(fs.readFileSync(bookPath, 'utf-8'));

function append(content, html) {
  return content + html;
}

book.chapters[6].content = append(book.chapters[6].content, `
<h2>7.8 The Epistemological Function of the Theoretical Framework</h2>
<p>The theoretical framework serves a deeply epistemological function in empirical research: it determines what counts as valid data. Theory is not a passive lens through which the researcher objectively views reality. Theory is an active filter that illuminates certain aspects of the phenomenon while intentionally obscuring others. If a researcher adopts a Marxist theoretical framework to study educational inequality, the theory dictates that class struggle and capital distribution are the primary data points of interest. If the same researcher adopts a symbolic interactionist framework, the theory dictates that interpersonal communication and meaning-making within the classroom are the primary data points.</p>
<p>Because the theoretical framework determines what data is collected and how it is interpreted, it is arguably the most critical methodological decision a researcher makes. A literature review that fails to explicitly articulate and justify its theoretical framework leaves the subsequent research untethered, making the findings appear arbitrary rather than the logical outcome of a rigorous theoretical position.</p>
<p>Furthermore, the theoretical framework protects the researcher from "data drowning." In the era of big data and ubiquitous digital recording, researchers can collect an almost infinite amount of information. Without a theory to guide the analysis, the researcher will be paralyzed by the sheer volume of data. The theoretical framework acts as a sorting algorithm, allowing the researcher to discard 90% of the data as theoretically irrelevant, focusing only on the 10% that tests or illuminates the core concepts of the theory.</p>
`);

book.chapters[7].content = append(book.chapters[7].content, `
<h2>8.8 The Evolution of Scholarly Tone</h2>
<p>Mastering academic synthesis requires mastering scholarly tone. Novice writers often mistake complex, convoluted sentences for intellectual depth. They believe that if the writing is difficult to read, it must be profound. In reality, the most impactful academic writing is characterized by clarity, precision, and conciseness. The complexity should reside in the ideas being synthesized, not in the syntax used to express them.</p>
<p>Scholarly tone also requires the careful management of certainty. Absolute statements ("The literature proves that X is the only cause of Y") are almost always scientifically inaccurate and intellectually arrogant. Academic writing relies heavily on "hedging" language - words that indicate probability rather than absolute certainty ("The literature strongly suggests that X is a primary driver of Y under condition Z"). Hedging is not a sign of weakness or indecision; it is the linguistic manifestation of scientific humility, acknowledging that all knowledge is provisional and subject to future revision based on new empirical evidence.</p>
<p>However, the researcher must also avoid excessive hedging, which renders the writing timid and the argument unpersuasive. The masterful literature reviewer calibrates the strength of their claims precisely to the strength of the evidence they have synthesized. If the evidence is overwhelming, the claim should be bold. If the evidence is preliminary, the claim must be cautious. This calibration is the essence of a mature scholarly tone.</p>
`);

book.chapters[8].content = append(book.chapters[8].content, `
<h2>9.9 Navigating Theoretical Tensions in the Synthesis</h2>
<p>When structuring the argumentative flow of the literature review, the researcher will inevitably encounter theoretical tensions between different schools of thought. A common mistake is to present these tensions as a binary debate where one side is right and the other is wrong. True synthesis requires a more sophisticated dialectical approach: identifying the thesis (Theory A), the antithesis (Theory B), and proposing a synthesis (how your research reconciles or transcends the tension between them).</p>
<p>For example, in the study of organizational behavior, there is a historical tension between structural theories (which argue that the organization's architecture dictates behavior) and agency theories (which argue that individual employee choices dictate behavior). A weak literature review simply summarizes these two opposing camps. A strong literature review synthesizes them by arguing, for instance, that structure creates the boundaries within which agency operates, and that previous studies failed because they tried to isolate one variable from the other. By structuring the argument around the resolution of theoretical tensions, the researcher elevates the review from a descriptive summary to an original theoretical contribution.</p>
`);

book.chapters[9].content = append(book.chapters[9].content, `
<h2>10.9 The Role of Grey Literature in Scoping Reviews</h2>
<p>In scoping reviews, the inclusion of grey literature is not just an option; it is often a methodological necessity. Because scoping reviews are frequently conducted in emerging fields or applied disciplines where peer-reviewed publication lags behind real-world practice, ignoring grey literature would result in a severely truncated map of the evidence. For example, a scoping review on the use of artificial intelligence in municipal governance conducted in 2024 would find relatively few peer-reviewed studies, but hundreds of government white papers and industry technical reports.</p>
<p>However, synthesizing grey literature in a scoping review requires a specialized approach. Because grey literature lacks standardized formatting (abstracts, methodology sections, etc.), data extraction is significantly more complex. The researcher must often read massive documents to locate a single relevant data point. Furthermore, while formal quality appraisal is not required in a scoping review, the researcher must still systematically document the source type (e.g., government report vs. corporate marketing material) to provide context for the mapped evidence. The ability to systematically search, extract, and synthesize grey literature is a distinct methodological skill that separates expert reviewers from novices.</p>
`);

book.chapters[10].content = append(book.chapters[10].content, `
<h2>11.8 The PRISMA-P Protocol: Planning for Transparency</h2>
<p>While the PRISMA 2020 statement guides the reporting of the final systematic review, the PRISMA-P (Preferred Reporting Items for Systematic review and Meta-Analysis Protocols) extension guides the development of the protocol itself. Writing a PRISMA-P compliant protocol forces the research team to make critical methodological decisions before they see the data, protecting the integrity of the review.</p>
<p>A rigorous PRISMA-P protocol requires the team to explicitly state their handling of missing data. In quantitative studies, it is common for authors to fail to report standard deviations or exact sample sizes for sub-groups. The protocol must state whether the review team will attempt to contact the original authors to retrieve this missing data, whether they will use statistical imputation methods to estimate it, or whether they will exclude the study entirely. Making these decisions a priori prevents the team from subconsciously manipulating their inclusion criteria later in the process to achieve a desired meta-analytical outcome. The protocol is the architectural blueprint; the review is merely the execution of that blueprint.</p>
`);

book.chapters[11].content = append(book.chapters[11].content, `
<h2>12.8 Sensitivity Analyses in Meta-Analysis</h2>
<p>A robust meta-analysis must be able to withstand rigorous methodological scrutiny. One of the primary tools for demonstrating this robustness is the sensitivity analysis. A sensitivity analysis tests how the overall pooled effect size changes when specific, methodologically questionable studies are removed from the analysis. It answers the critical question: "Are my conclusions entirely dependent on one or two flawed studies?"</p>
<p>For example, if a meta-analysis includes twenty studies, but three of those studies had exceptionally high risk of bias (e.g., they lacked blinding or had massive dropout rates), the researcher will run the meta-analysis twice. First, they run it with all twenty studies. Then, they run a sensitivity analysis with only the seventeen high-quality studies. If the pooled effect size remains statistically significant and largely unchanged, the researcher can confidently state that their findings are robust and not driven by methodological flaws in the primary literature. If the effect disappears when the flawed studies are removed, the researcher must conclude that the current evidence base is too fragile to support a definitive conclusion. This level of statistical introspection is the hallmark of a high-quality meta-analysis.</p>
`);

book.chapters[12].content = append(book.chapters[12].content, `
<h2>13.8 The Ontological Assumptions of Scoping Reviews</h2>
<p>While systematic reviews are deeply rooted in a positivist ontology (the belief that a single, objective truth exists and can be aggregated), scoping reviews often operate from a more pragmatic or constructivist ontology. Scoping reviews acknowledge that knowledge in a specific field might be fragmented, context-dependent, and methodologically diverse. The goal is not to find the "one true answer," but to map the diverse realities constructed by different researchers.</p>
<p>This ontological difference dictates the synthesis method. A scoping review might synthesize findings by charting the evolution of definitions over time, or by mapping the geographical distribution of research to highlight how cultural contexts shape the inquiry. It embraces the complexity and messiness of the literature rather than trying to statistically flatten it. Understanding the ontological foundation of the scoping methodology allows the researcher to defend their approach against critics who might mistakenly evaluate the scoping review using the rigid positivist criteria of a systematic meta-analysis.</p>
`);

book.chapters[13].content = append(book.chapters[13].content, `
<h2>14.8 The Literature Review as Narrative Empathy</h2>
<p>Beyond its analytical functions, a masterful literature review demonstrates a form of intellectual empathy. It requires the researcher to step outside their own theoretical biases and genuinely understand the logic and motivations of the authors they are reviewing, even those with whom they vehemently disagree. This empathy allows the reviewer to present opposing arguments in their strongest, most compelling form before critiquing them.</p>
<p>When a literature review lacks this empathy, it reads like an academic attack piece. The author dismisses decades of prior research as foolish or incompetent in order to inflate the importance of their own study. This arrogant approach invariably alienates peer reviewers and examiners. A review grounded in intellectual empathy acknowledges the difficulty of the research process. It frames previous methodological limitations not as failures of intelligence, but as the natural constraints of their era or context. By treating the literature with respect, the researcher elevates their own scholarly ethos and positions their new research as a collaborative contribution to the community, rather than a hostile takeover.</p>
`);

book.chapters[14].content = append(book.chapters[14].content, `
<h2>15.8 The Zen of Knowing When to Stop Reviewing</h2>
<p>The compulsion to keep searching the literature is often driven by anxiety rather than scientific necessity. Researchers fear the "gotcha" question during their defense: "But did you read Smith's obscure 2018 paper on this exact topic?" This anxiety leads to the endless cycle of downloading PDFs that are never read, creating a digital hoarding problem that paralyzes the writing process.</p>
<p>Overcoming this requires accepting the fundamental truth of modern academia: it is physically impossible to read everything. A PhD thesis is not expected to be omniscient; it is expected to be systematically rigorous within defined parameters. The "Zen" of literature reviewing involves accepting the boundaries of your search protocol. If Smith's 2018 paper did not appear in your rigorously defined, PRISMA-compliant Boolean search of the three major databases, then its omission is not a failure of diligence; it is a limitation of the search parameters. By shifting the defense from "I read everything" to "I executed a flawless, reproducible search strategy," the researcher frees themselves from the anxiety of omniscience and can confidently begin the work of synthesis.</p>
`);

book.chapters[15].content = append(book.chapters[15].content, `
<h2>16.8 The Architecture of the Literature Review Chapter</h2>
<p>The physical layout of the literature review chapter is the final, crucial step in guiding the reader through your synthesis. A monolithic, forty-page block of text is unreadable, regardless of how brilliant the synthesis might be. The chapter must be heavily structured with clear, analytical headings that correspond directly to the research questions or the theoretical framework.</p>
<p>A standard macro-architecture begins with an introductory paragraph that explicitly outlines the structure of the chapter ("This review is divided into three sections: X, Y, and Z"). Each major section then begins with a mini-introduction and ends with a mini-summary that ties the section's findings back to the overarching research gap. This modular architecture allows the examiner to consume the complex synthesis in digestible chunks. It also forces the writer to stay on topic; if a paragraph does not logically fit under the current analytical heading, the writer immediately knows it belongs elsewhere or should be deleted entirely. Form follows function: the physical architecture of the chapter must perfectly mirror the logical architecture of the argument.</p>
`);

// Add another huge block of text to chapters 16-19 to ensure we hit 56k words
book.chapters[16].content = append(book.chapters[16].content, `
<h2>17.8 Advanced Visualization Techniques for Literature Synthesis</h2>
<p>While the basic literature map is a conceptual tool, advanced researchers utilize sophisticated bibliometric software (such as VOSviewer or CiteSpace) to create data-driven visualizations of the literature. These tools ingest the metadata from thousands of journal articles and use network analysis algorithms to visualize the relationships between authors, keywords, and citations.</p>
<p>A bibliometric visualization can reveal hidden structures in the literature that are impossible to detect through manual reading. It can show how two distinct theoretical schools have evolved in complete isolation, never citing each other despite studying the exact same phenomenon. It can identify the "bridge" authors who finally connect these isolated networks. Including a bibliometric network visualization in a literature review provides a stunning, objective overview of the field's macro-structure, immediately establishing the researcher's mastery over the entire domain of knowledge before they even begin their textual synthesis.</p>
`);

book.chapters[17].content = append(book.chapters[17].content, `
<h2>18.8 The "Steel Man" Argument in Academic Discourse</h2>
<p>As the inverse of the logical fallacy known as the "straw man," the "steel man" technique is the highest form of intellectual honesty in academic writing. To "steel man" an opposing theory in your literature review means to reconstruct your opponent's argument in its strongest, most persuasive possible form before you attempt to dismantle it. You articulate their position so clearly and robustly that even the original author would agree: "Yes, that is exactly what I meant, and you have stated it better than I did."</p>
<p>Only after building this impregnable fortress of the opposing view do you unleash your critique. If your research methodology or theoretical framework can successfully dismantle the "steel man" version of the opposing argument, your synthesis is unassailable. This technique not only insulates the researcher from accusations of bias but also sharpens their own analytical thinking, as engaging with the strongest counter-arguments forces the researcher to elevate the rigor of their own proposed study.</p>
`);

book.chapters[18].content = append(book.chapters[18].content, `
<h2>19.8 The Transition from Consumer to Producer of Knowledge</h2>
<p>The completion of the literature review marks a profound psychological transition in the life of a researcher. Throughout the reading phase, the researcher is a passive consumer of knowledge. They sit at the feet of the established experts, trying to comprehend the vast architecture of the discipline. The literature review is the crucible where this dynamic shifts.</p>
<p>By identifying the flaws, contradictions, and gaps in the existing literature, the researcher stops being a student and becomes a peer. The realization that the "experts" do not have all the answers, and that the literature is full of methodological errors and theoretical blind spots, is the moment the researcher realizes their own work is necessary. The final draft of the literature review is not just a chapter in a thesis; it is the researcher's declaration of independence, stating that they are now ready to cross the boundary of known science and produce original knowledge.</p>
`);

book.chapters[19].content = append(book.chapters[19].content, `
<h2>20.8 Final Polish: Checking for Alignment</h2>
<p>Before finalizing the literature review chapter, the researcher must conduct a rigorous "alignment check." This is a structural audit to ensure that every element of the thesis is perfectly synchronized. The literature review must align backward with the introduction (it must synthesize the literature relevant to the problem stated in chapter one) and it must align forward with the methodology (it must justify the specific methods chosen in chapter three).</p>
<p>If the literature review spends ten pages discussing the impact of socioeconomic status, but socioeconomic status is not measured in the methodology or addressed in the research questions, the thesis is misaligned. That ten-page section, regardless of how beautifully written it is, must be ruthlessly deleted. Every single paragraph in the final literature review must serve a direct, structural purpose in supporting the ultimate research design. This ruthless editing for alignment is what transforms a rambling draft into a professional, cohesive academic document.</p>
`);

// Check word count
let words = 0;
book.chapters.forEach(ch => {
  words += ch.content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
});
console.log('Book 2 Words:', words, 'Est Pages:', Math.ceil(words / 280));

fs.writeFileSync(bookPath, JSON.stringify(book, null, 2), 'utf-8');
console.log('Book 2 Chapters 6-20 massive expansion complete.');
