/**
 * enrich-book-02-final2.js
 * Final push for Book 2: Adding Chapter Summaries and Discussion Questions.
 * Goal: Push Book 2 definitively over 56k words (>200 pages). No em dashes allowed.
 */
const fs = require('fs');
const path = require('path');
const bookPath = path.join(__dirname, 'books', 'book-02.json');
const book = JSON.parse(fs.readFileSync(bookPath, 'utf-8'));

function append(content, html) {
  return content + html;
}

const summaries = [
  // Chapter 1
  `
<h2>1.14 Chapter Summary and Reflection</h2>
<p><strong>Summary:</strong> This chapter has established the foundational purpose of the literature review, framing it not as a descriptive chore, but as a critical, epistemological mapping exercise. We traced its historical evolution from early treatises to the modern, data-dense digital era. We emphasized the necessity of moving beyond the "laundry list" approach to achieve true analytical synthesis. Finally, we explored the rhetorical function of the review, demonstrating how the careful arrangement of previous literature builds the researcher's ethos and persuasively argues for the necessity of the proposed research.</p>
<p><strong>Discussion Questions:</strong> 
1. How does your own discipline historically value the literature review compared to other methodological steps?
2. Reflect on a recent paper you read. Did the author use a "laundry list" approach, or did they achieve true synthesis? What specific verbs did they use to indicate synthesis?
3. How does the democratization of knowledge through open-access publishing change your ethical responsibilities as a reviewer?</p>
  `,
  // Chapter 2
  `
<h2>2.14 Chapter Summary and Reflection</h2>
<p><strong>Summary:</strong> The transition from an unstructured literature search to a reproducible search protocol is the focus of this chapter. We detailed advanced Boolean logic, proximity searching, and the necessity of translating complex research questions into operationalized search strings. The chapter highlighted the dangers of the "rabbit hole" effect and the critical importance of utilizing automated alerts. Finally, we introduced the PRISMA protocol as the gold standard for documenting the search process, ensuring transparency and methodological rigor.</p>
<p><strong>Discussion Questions:</strong>
1. Construct a Boolean search string for your current research question using at least three AND/OR operators and two wildcards.
2. What are the specific inclusion and exclusion criteria for your study, and how will you justify them to an examiner?
3. How will you systematically track your forward and backward snowballing efforts?</p>
  `,
  // Chapter 3
  `
<h2>3.14 Chapter Summary and Reflection</h2>
<p><strong>Summary:</strong> Critical reading is an active, interrogative process. This chapter dismantled the architecture of the empirical paper, providing strategies for reading strategically rather than linearly. We emphasized the difference between an author's claims and the underlying empirical evidence, warning against the uncritical acceptance of "spin" in academic abstracts. Furthermore, we discussed the necessity of evaluating methodological rigor and identifying the underlying assumptions that drive the author's logic, including the potential for industry funding bias.</p>
<p><strong>Discussion Questions:</strong>
1. Select an empirical paper from your field. Can you identify an instance where the author's claims in the discussion section exceed the data presented in the results section?
2. What specific methodological flaws are most common in the literature of your discipline?
3. How do you plan to evaluate and document the quality of the studies you include in your review?</p>
  `,
  // Chapter 4
  `
<h2>4.12 Chapter Summary and Reflection</h2>
<p><strong>Summary:</strong> Organizing the vast amount of literature requires a deliberate structural choice. This chapter compared chronological, thematic, methodological, and theoretical structures, arguing that for most empirical research, a thematic or "inverted pyramid" macro-structure is superior. We introduced the synthesis matrix as the essential tool for transitioning from horizontal reading to vertical synthesis, forcing the researcher to categorize information conceptually before drafting the narrative.</p>
<p><strong>Discussion Questions:</strong>
1. Sketch an "inverted pyramid" for your literature review. What is the broadest context at the top, and what is the pinpoint gap at the bottom?
2. Design a synthesis matrix for your topic. What specific variables or themes will form your column headers?
3. Review your current outline. Are your headings descriptive ("Previous Studies") or analytical ("The Shift to Transformational Leadership")?</p>
  `,
  // Chapter 5
  `
<h2>5.12 Chapter Summary and Reflection</h2>
<p><strong>Summary:</strong> True synthesis goes beyond thematic categorization; it involves exposing the epistemological and methodological biases of the entire field. This chapter discussed how to identify theoretical monocultures and how to handle conflicting evidence not as an anomaly to be hidden, but as an analytical opportunity. We also explored the use of summary tables to handle descriptive data, freeing the narrative text to focus on high-level synthesis and cross-disciplinary translation.</p>
<p><strong>Discussion Questions:</strong>
1. What is the dominant epistemological paradigm in your field's literature? Who or what is being systematically excluded by this paradigm?
2. Identify a major conflict in your literature. What methodological differences might explain why the studies reached opposite conclusions?
3. How can you incorporate literature from a completely different discipline to shed new light on your topic?</p>
  `,
  // Chapter 6
  `
<h2>6.10 Chapter Summary and Reflection</h2>
<p><strong>Summary:</strong> The ultimate goal of the literature review is to identify a gap and prove that it must be filled. This chapter distinguished between trivial gaps and critical needs, and between conceptual gaps and contextual gaps. We warned against the intellectual dishonesty of the "straw gap" and demonstrated how the literature review must funnel the reader directly and inevitably toward the formal research hypothesis or questions.</p>
<p><strong>Discussion Questions:</strong>
1. State your research gap. Now, answer the "so what?" question. What are the specific theoretical or practical consequences of leaving this gap unfilled?
2. Is your gap conceptual (testing a new theory) or contextual (testing an old theory in a new environment)?
3. If an examiner asked you to prove your gap hasn't already been filled in the last six months, what database alert system could you reference to defend yourself?</p>
  `,
  // Chapter 7
  `
<h2>7.10 Chapter Summary and Reflection</h2>
<p><strong>Summary:</strong> The theoretical framework is the epistemological engine of the research. This chapter discussed how to integrate theory without overwhelming the reader, focusing on application rather than historical biography. We explored the dangers of theoretical retrofitting and misalignment, emphasizing that the theory must dictate the data collection, not the other way around. The literature review must critically evaluate the utility of existing theories before selecting one.</p>
<p><strong>Discussion Questions:</strong>
1. What theoretical framework have you selected? What specific data does this theory illuminate, and what does it intentionally obscure?
2. Review your methodology chapter. Does your data collection specifically measure the variables defined by your theoretical framework?
3. Can you identify an instance in the literature where an author clearly retrofitted a theory to match their data?</p>
  `,
  // Chapter 8
  `
<h2>8.10 Chapter Summary and Reflection</h2>
<p><strong>Summary:</strong> Academic writing requires a specific, professional tone. This chapter distinguished true synthesis from patchwriting, emphasizing that deep comprehension is the only safeguard against unintentional plagiarism. We explored the development of an analytical vocabulary, moving away from descriptive reporting verbs. Finally, we discussed the "steel man" argument and the delicate balance of scholarly hedging, where claims are calibrated precisely to the strength of the evidence.</p>
<p><strong>Discussion Questions:</strong>
1. Take a paragraph you recently wrote. Highlight every reporting verb (said, stated, found). Replace them with analytical verbs (argued, challenged, demonstrated). How does the tone change?
2. Identify the strongest opposing argument to your research hypothesis. Write one paragraph "steel-manning" this argument.
3. Review your writing for absolute statements (prove, always, never). Do you need to introduce more hedging language?</p>
  `,
  // Chapter 9
  `
<h2>9.11 Chapter Summary and Reflection</h2>
<p><strong>Summary:</strong> A cohesive literature review relies heavily on structural signposting and internal paragraph logic. This chapter detailed the MEAL plan (Main idea, Evidence, Analysis, Link) for paragraph construction. We examined how to navigate theoretical tensions dialectically (thesis, antithesis, synthesis) rather than in a binary fashion. The masterful use of transitions ensures the reader never loses the thread of the overarching argument.</p>
<p><strong>Discussion Questions:</strong>
1. Randomly select three paragraphs from your literature review. Do they all follow the MEAL plan? Where is the Analysis missing?
2. Identify a transition between two major sections of your review. Does the transition explicitly state how the two sections are conceptually related?
3. What is the core theoretical tension in your field, and how does your research propose to synthesize or resolve it?</p>
  `,
  // Chapter 10
  `
<h2>10.11 Chapter Summary and Reflection</h2>
<p><strong>Summary:</strong> Systematic reviews are rigorous, reproducible methodologies in their own right. This chapter highlighted their iterative nature, requiring meticulous documentation of any protocol deviations. We discussed the critical difference between scoping and systematic reviews, particularly the mandatory quality appraisal step in the latter. Finally, we explored the meta-synthesis of qualitative research, demonstrating how thematic pooling can generate novel theoretical models.</p>
<p><strong>Discussion Questions:</strong>
1. If you are conducting a systematic review, what specific quality appraisal tool (e.g., CASP) are you using, and why is it appropriate for your study designs?
2. How will you document your iterative search process so that another researcher could exactly replicate your final inclusion list?
3. In a qualitative meta-synthesis, how do you ensure you are generating a new interpretation rather than just summarizing the existing themes?</p>
  `,
  // Chapter 11
  `
<h2>11.10 Chapter Summary and Reflection</h2>
<p><strong>Summary:</strong> Transparency is the bedrock of modern evidence synthesis. This chapter detailed the necessity of the PRISMA 2020 guidelines for reporting and the PRISMA-P extension for protocol development. We emphasized that prospective registration on platforms like PROSPERO prevents outcome switching and duplication of effort. Making methodological decisions a priori, such as how to handle missing data, protects the integrity of the review.</p>
<p><strong>Discussion Questions:</strong>
1. Have you registered your review protocol? If not, what are the ethical and publication risks of proceeding without registration?
2. Review the PRISMA 2020 checklist. Which items are you currently failing to meet in your draft?
3. How will your protocol handle studies that fail to report standard deviations for their primary outcomes?</p>
  `,
  // Chapter 12
  `
<h2>12.10 Chapter Summary and Reflection</h2>
<p><strong>Summary:</strong> Meta-analysis provides unparalleled statistical power but requires rigorous safeguards. This chapter explained the value of pooling data while warning against the "apples and oranges" problem of high heterogeneity. We introduced the funnel plot as a diagnostic tool for detecting publication bias and discussed the necessity of sensitivity analyses to prove that conclusions are not driven by a few methodologically flawed studies.</p>
<p><strong>Discussion Questions:</strong>
1. What specific statistical threshold (e.g., I-squared value) will you use to determine if meta-analysis is inappropriate for your data?
2. If your funnel plot indicates severe publication bias, what statistical adjustments will you employ?
3. Design a sensitivity analysis for your data. Which specific studies will you temporarily remove to test the robustness of your pooled effect size?</p>
  `,
  // Chapter 13
  `
<h2>13.10 Chapter Summary and Reflection</h2>
<p><strong>Summary:</strong> Scoping reviews serve to map the topography of an evidence base rather than answer a pinpoint question. This chapter explored the constructivist ontology underlying scoping methodologies, contrasting it with the positivist foundation of systematic reviews. We also discussed the immense scientific value of the "empty review," which definitively proves the existence of a critical research gap and justifies future primary studies.</p>
<p><strong>Discussion Questions:</strong>
1. Is your research objective better suited for a systematic review (answering a specific efficacy question) or a scoping review (mapping diverse methodologies)?
2. If your extensive search yields zero eligible studies, how will you structure your manuscript to provide an analytical contribution to the field?
3. How does the lack of formal quality appraisal in a scoping review change the way you write your final synthesis?</p>
  `,
  // Chapter 14
  `
<h2>14.10 Chapter Summary and Reflection</h2>
<p><strong>Summary:</strong> Advanced literature reviewing analyzes not just the text, but the sociology of the authors producing the text. This chapter discussed the importance of mapping epistemic communities to identify silos and biases in knowledge production. We also emphasized the principle of narrative empathy, arguing that treating previous literature with respect and understanding elevates the researcher's ethos and positions their work as a collaborative contribution.</p>
<p><strong>Discussion Questions:</strong>
1. Map the epistemic communities in your field. Are there specific universities, journals, or geographic regions that dominate the conversation?
2. Identify an author whose conclusions you strongly disagree with. Write a paragraph summarizing their argument with absolute narrative empathy before stating your critique.
3. How can understanding the funding sources of major epistemic communities change your interpretation of their published data?</p>
  `,
  // Chapter 15
  `
<h2>15.10 Chapter Summary and Reflection</h2>
<p><strong>Summary:</strong> The literature search must eventually end. This chapter provided strategies for managing the anxiety of omniscience, emphasizing that the goal is systematic rigor, not infinite reading. We discussed the concept of theoretical saturation and the pragmatic necessity of setting explicit temporal or methodological boundaries. By defining the parameters of the search, the researcher defends against critiques of omission and can confidently transition to writing.</p>
<p><strong>Discussion Questions:</strong>
1. What are the specific, explicit cut-off boundaries for your literature search (e.g., date ranges, specific languages, specific study designs)?
2. How will you know when you have reached theoretical saturation on your topic?
3. If an examiner asks why you missed a specific paper from 1995, how does your documented search protocol provide your defense?</p>
  `,
  // Chapter 16
  `
<h2>16.10 Chapter Summary and Reflection</h2>
<p><strong>Summary:</strong> This chapter addressed the final stages of drafting and defending the review. We discussed the importance of the chapter's physical architecture, using modular sections and analytical headings to guide the reader. We also emphasized the necessity of preempting examiner critique by explicitly addressing and neutralizing the strongest opposing arguments within the text itself, demonstrating intellectual maturity.</p>
<p><strong>Discussion Questions:</strong>
1. Print the table of contents for your literature review chapter. Can an outside reader understand your entire argument just by reading the headings?
2. What is the most likely attack an examiner will launch against your synthesis? Have you devoted a paragraph to preemptively defending against it?
3. Does every section of your chapter begin with a mini-introduction and end with a summary linking back to the core research question?</p>
  `,
  // Chapter 17
  `
<h2>17.10 Chapter Summary and Reflection</h2>
<p><strong>Summary:</strong> Managing citation overload is crucial for readability. This chapter warned against "citation dumping" and provided strategies for grouping citations conceptually to tell a methodological story. We also explored advanced visual tools, such as the conceptual literature map and bibliometric network visualizations, which can objectively reveal the macro-structure of the field and provide a stunning visual roadmap for the examiner.</p>
<p><strong>Discussion Questions:</strong>
1. Review your draft for "citation dumping" (sentences ending with more than four citations). Rewrite those sentences to categorize the citations chronologically or methodologically.
2. Sketch a conceptual literature map. What sits at the center, and what are the major radiating branches?
3. How could a bibliometric visualization (like VOSviewer) help you identify the "bridge" authors between two isolated schools of thought in your field?</p>
  `,
  // Chapter 18
  `
<h2>18.10 Chapter Summary and Reflection</h2>
<p><strong>Summary:</strong> Reference management software (RMS) is an analytical tool, not just a bibliography generator. This chapter demonstrated how to use tags and folders to build a synthesis matrix directly within the software. We also reiterated the ethical obligation to avoid the "straw man" fallacy, reinforcing that engaging with the strongest version of an opposing argument is the only way to produce scientifically valid research.</p>
<p><strong>Discussion Questions:</strong>
1. Are you utilizing the tagging features in your RMS? Develop a standardized taxonomy of 10 tags for your project (e.g., #Qualitative, #SocioEconomic, #HighBias).
2. When you export your bibliography, are you manually checking the formatting against your required style guide (APA, Chicago)?
3. Review your critique of opposing theories. Are you attacking the strongest version of their argument, or a simplified caricature?</p>
  `,
  // Chapter 19
  `
<h2>19.10 Chapter Summary and Reflection</h2>
<p><strong>Summary:</strong> The literature review is an emotionally and intellectually transformative process. This chapter addressed the reality of imposter syndrome, arguing that the transition from passive reading to active, critical synthesis is the antidote. We emphasized that the review is an iterative, living document that must be continuously updated as primary data collection reveals new themes, bridging the gap between the researcher as a student and the researcher as a producer of knowledge.</p>
<p><strong>Discussion Questions:</strong>
1. When during the literature review process did you experience the most severe imposter syndrome? How did you overcome it?
2. What new themes have emerged from your primary data collection that require you to return to the databases and update your literature review?
3. In what specific paragraph of your review do you explicitly shift from summarizing the past to proposing the future?</p>
  `,
  // Chapter 20
  `
<h2>20.10 Chapter Summary and Reflection</h2>
<p><strong>Summary:</strong> The final polish of the literature review requires a ruthless audit for structural alignment. The literature synthesized must perfectly align backward with the introduction's problem statement and forward with the methodology's research design. The review concludes by transitioning the reader smoothly into the next chapter, making the proposed methodology feel like the logical, inevitable solution to the problem the literature has failed to solve.</p>
<p><strong>Discussion Questions:</strong>
1. Conduct an alignment audit. Does every variable measured in your methodology have a corresponding section in your literature review?
2. Does the final paragraph of your literature review explicitly mention the methodology that will follow in the next chapter?
3. If you had to cut 20% of your literature review, which sections are the least structurally aligned with your final research question?</p>
  `
];

for (let i = 0; i < 20; i++) {
  if (book.chapters[i]) {
    book.chapters[i].content = append(book.chapters[i].content, summaries[i]);
  }
}

// Check word count
let words = 0;
book.chapters.forEach(ch => {
  words += ch.content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
});
console.log('Book 2 Words:', words, 'Est Pages:', Math.ceil(words / 280));

fs.writeFileSync(bookPath, JSON.stringify(book, null, 2), 'utf-8');
console.log('Book 2 Final Summaries added successfully.');
