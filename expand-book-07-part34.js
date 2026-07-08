/**
 * expand-book-07-part34.js
 * Expands Book 7 Chapters 9-18 (Parts 3 & 4: Writing Each Chapter + Supporting Elements)
 * NO EM DASHES.
 */
const fs = require('fs');
const path = require('path');
const bookPath = path.join(__dirname, 'books', 'book-07.json');
const book = JSON.parse(fs.readFileSync(bookPath, 'utf-8'));

function append(ch, html) { ch.content += html; }

// ============ CHAPTER 9: Introduction ============
append(book.chapters[8], `
<h2>9.5 Outlining the Thesis Structure</h2>
<p>The final section of the introduction chapter provides a roadmap for the rest of the thesis. This is more than a simple table of contents in prose form; it should explain the logical progression of the argument across the chapters. Instead of writing, "Chapter 2 is the literature review. Chapter 3 is the methodology," write, "Chapter 2 establishes the theoretical framework by reviewing the literature on X and Y, identifying the specific gap that this study addresses. Building on this framework, Chapter 3 outlines the mixed methods approach used to investigate..." This narrative approach shows how each chapter is a necessary step in answering the research questions (Paltridge and Starfield, 2007).</p>
<p>This structural overview is particularly important in a thesis because examiners will read it to understand how the document is organised before they dive into the details. A clear, logical roadmap reassures the examiner that the thesis is a coherent whole rather than a collection of disjointed chapters. For thesis-by-publication formats, this section must explain how the individual papers relate to each other and contribute to the overarching thesis narrative (Murray, 2017).</p>

<h2>9.6 When to Write the Introduction</h2>
<p>A common piece of advice is to write the introduction last. While it is true that the introduction must be finalised after the rest of the thesis is complete, writing a draft introduction early in the process is highly beneficial. An early draft forces you to clarify your research problem, articulate your questions, and define your scope. It serves as a statement of intent that guides your subsequent work. As the research evolves, you can revise the draft introduction to reflect changes in your focus or methodology (Wisker, 2012).</p>
<p>The final revision of the introduction, however, must wait until the conclusion has been written. The introduction and conclusion must mirror each other: the introduction asks the questions, and the conclusion answers them. The introduction promises what the thesis will deliver, and the conclusion demonstrates that the promise has been kept. Reviewing the introduction and conclusion side-by-side is a crucial step in the final editing process to ensure this alignment (Murray, 2017).</p>

<h2>9.7 Key Takeaways</h2>
<p>The introduction chapter sets the scene, states the problem, and outlines the structure of the thesis. It must hook the reader, establish the significance of the research, and present clear research questions. The introduction should provide a narrative roadmap that explains the logical progression of the chapters. While a draft introduction is useful early in the process, the final version must be written (or heavily revised) last to ensure it aligns perfectly with the completed thesis and mirrors the conclusion (Paltridge and Starfield, 2007).</p>
`);

// ============ CHAPTER 10: Literature Review ============
append(book.chapters[9], `
<h2>10.5 Establishing the Theoretical Framework</h2>
<p>In many disciplines, the literature review chapter also serves to establish the theoretical or conceptual framework for the study. A theoretical framework is a system of concepts, assumptions, and expectations that guides the research. It explains the lens through which you are viewing the problem. For example, if you are studying educational inequality, you might use Bourdieu's theory of cultural capital as your theoretical framework. The literature review must introduce this theory, explain its key concepts, and justify why it is the most appropriate lens for your specific research questions (Wisker, 2012).</p>
<p>A conceptual framework, while similar, is often constructed by the researcher from several different theories or concepts to create a bespoke model for their study. The literature review must trace the origins of these concepts and show how they have been combined to form the new framework. Whether you use an established theoretical framework or construct your own conceptual framework, it must be explicitly defined in the literature review because it will inform your methodological choices and guide your data analysis (Murray, 2017).</p>

<h2>10.6 The Importance of Critical Evaluation</h2>
<p>Examiners look closely at the literature review to assess the candidate's critical thinking skills. A descriptive review that merely lists what other authors have found demonstrates only that the candidate can read and summarise. A critical review demonstrates that the candidate can evaluate the quality of the evidence, identify methodological flaws in existing studies, and recognise biases or limitations in the literature. When discussing a key study, you should note its strengths, but also point out its weaknesses: "While Smith's (2019) large sample size provides statistical power, the reliance on self-reported data limits the validity of the findings" (Paltridge and Starfield, 2007).</p>
<p>Critical evaluation also involves identifying the boundaries of existing knowledge. It is not enough to say what is known; you must articulate clearly what is not known. This is the gap statement, the crucial pivot point where the review transitions from discussing others' work to justifying your own. The gap statement should be specific and grounded in the preceding critical analysis: because previous studies had this limitation, or ignored this context, or used this flawed methodology, a gap exists that your study will fill (Wisker, 2012).</p>

<h2>10.7 Key Takeaways</h2>
<p>The literature review chapter must move beyond summary to thematic synthesis and critical evaluation. It should be structured around ideas, not authors. It must establish the theoretical or conceptual framework that will guide the study. The review must demonstrate critical thinking by evaluating the strengths and weaknesses of existing research, leading logically to the identification of a specific gap in knowledge. A strong literature review shows the examiner that you have mastered the field and are ready to contribute to it (Murray, 2017).</p>
`);

// ============ CHAPTER 11: Methodology ============
append(book.chapters[10], `
<h2>11.5 Aligning Methodology with Research Questions</h2>
<p>The most important criterion for evaluating a methodology chapter is alignment: do the chosen methods align logically with the research questions and the theoretical framework? If your research question asks "How many," "How often," or "What is the relationship between," a quantitative methodology is required. If your question asks "How do people experience," "Why do they believe," or "What is the process," a qualitative methodology is required. If your question has both elements, a mixed methods approach is necessary (Creswell and Creswell, 2018).</p>
<p>Examiners will look for this alignment explicitly. They will check whether the epistemological stance (e.g., positivism, constructivism) matches the methodology (e.g., experimental, phenomenological), which in turn matches the methods (e.g., surveys, interviews), which in turn match the research questions. A mismatch at any level (for example, claiming a constructivist epistemology but using a highly structured, closed-ended survey to measure objective reality) is a major flaw that examiners will challenge during the defence (Wisker, 2012).</p>

<h2>11.6 Detailing the Data Collection and Analysis Procedures</h2>
<p>The methodology chapter must provide sufficient detail for another researcher to replicate your study (in quantitative research) or understand exactly how you arrived at your interpretations (in qualitative research). For data collection, this means describing the sampling strategy, the recruitment process, the specific instruments used (including reliability and validity data if applicable), and the step-by-step procedures followed in the field or laboratory. For interviews, include the interview guide or protocol in an appendix and describe the interview setting and duration in the chapter (Paltridge and Starfield, 2007).</p>
<p>For data analysis, vague statements such as "The data were analysed using thematic analysis" are insufficient. You must describe the specific steps of the analysis. For example: "The interviews were transcribed verbatim. The transcripts were then read multiple times for familiarisation. Initial codes were generated inductively using NVivo software. These codes were grouped into preliminary themes, which were then reviewed against the entire dataset before being refined and defined." This level of detail demonstrates methodological rigour and transparency (Murray, 2017).</p>

<h2>11.7 Key Takeaways</h2>
<p>The methodology chapter is an argument, not just a description. It must justify your methodological choices, demonstrating how they align with your philosophical stance and your research questions. Address reliability, validity, and trustworthiness explicitly. Provide detailed, transparent accounts of your data collection and analysis procedures. Discuss ethical considerations and how they were managed. A strong methodology chapter anticipates methodological critiques and addresses them proactively, showing the examiner that you understand the limitations of your approach (Creswell and Creswell, 2018).</p>
`);

// ============ CHAPTER 12: Findings ============
append(book.chapters[11], `
<h2>12.5 Presenting Qualitative Findings</h2>
<p>Presenting qualitative findings presents a different challenge: managing the sheer volume of text and selecting the most illustrative quotes without overwhelming the reader. Qualitative findings are typically structured around the themes identified in the analysis. For each theme, the researcher must provide a clear definition, explain its dimensions or variations, and support it with representative quotations from the data (Wisker, 2012).</p>
<p>A common mistake in qualitative findings chapters is the "quote dump": stringing together multiple long quotations with little or no analytical commentary connecting them. The researcher's voice must lead the narrative. The structure should be: make an analytical point about the theme, provide a brief quotation that illustrates the point, and then explain how the quotation supports the analysis. Ensure that you select quotes from a range of participants to demonstrate that the theme is prevalent across the dataset, rather than relying heavily on one particularly articulate participant (Paltridge and Starfield, 2007).</p>

<h2>12.6 Presenting Quantitative Findings</h2>
<p>For quantitative studies, the findings chapter should follow the sequence of the research questions or hypotheses. For each question, describe the descriptive statistics first (means, standard deviations, frequencies) to provide a picture of the data, and then present the inferential statistics (t-tests, ANOVAs, regressions) used to test the hypothesis. Report the results of statistical tests completely, including the test statistic, degrees of freedom, p-value, and effect size. Effect sizes are particularly important as they indicate the practical significance of the finding, not just its statistical probability (Creswell and Creswell, 2018).</p>
<p>Use tables and figures strategically to present complex data clearly, but do not simply duplicate the tables in the text. The text should highlight the key findings shown in the tables, drawing the reader's attention to the most important patterns or significant results. Ensure that all tables and figures are numbered, titled appropriately, and referred to in the text before they appear (Murray, 2017).</p>

<h2>12.7 Key Takeaways</h2>
<p>The findings chapter should present the results of your analysis clearly, objectively, and logically, without slipping into interpretation or discussion. Structure the chapter around your research questions, hypotheses, or themes. For qualitative data, balance analytical commentary with illustrative quotations, avoiding quote dumps. For quantitative data, report statistics completely (including effect sizes) and use tables and figures effectively to summarise complex information. A strong findings chapter tells a clear, compelling story about what the data revealed (Paltridge and Starfield, 2007).</p>
`);

// ============ CHAPTER 13: Discussion ============
append(book.chapters[12], `
<h2>13.5 Explaining Unexpected Findings</h2>
<p>Almost every research project produces some unexpected or contradictory findings. Novice researchers often try to hide or minimise these anomalies, fearing they will be seen as failures. Experienced researchers recognise that unexpected findings are often the most interesting part of the study, offering opportunities for new theoretical insights. When discussing an unexpected finding, first consider methodological explanations: was the sample unusual, was the measurement instrument flawed, or was the context different from previous studies? If methodological explanations are insufficient, explore theoretical explanations: does the unexpected finding suggest that existing theory needs to be modified or extended? (Wisker, 2012).</p>
<p>Addressing contradictory findings demonstrates intellectual honesty and analytical maturity. If your results contradict the dominant paradigm in the literature, you must argue why your findings are valid and what they mean for the field. Are previous assumptions incorrect? Has the context changed? Addressing these questions directly in the discussion chapter prepares you for the inevitable questions examiners will ask during the defence (Murray, 2017).</p>

<h2>13.6 Acknowledging Limitations</h2>
<p>The discussion chapter must include a section on the limitations of the study. This is not a confession of failure, but a demonstration of critical self-awareness. Every study has limitations related to sampling, methodology, scope, or context. The goal is to acknowledge these limitations honestly and explain how they might impact the interpretation of the findings. For example: "The reliance on self-reported survey data means that the findings may be subject to social desirability bias; future research could employ observational methods to corroborate these results" (Paltridge and Starfield, 2007).</p>
<p>However, the limitations section should not undermine the value of the research. After acknowledging a limitation, you should explain why the study's findings remain valid and significant despite it. The key is to be realistic about what your study can and cannot claim, avoiding both grandiosity and excessive self-deprecation (Creswell and Creswell, 2018).</p>

<h2>13.7 Key Takeaways</h2>
<p>The discussion chapter is the intellectual climax of the thesis, where you interpret your findings and state your original contribution. It must move beyond summarizing the data to engaging in a dialogue with the existing literature. Explain unexpected or contradictory findings, using them as opportunities for theoretical insight. Acknowledge the study's limitations honestly but without undermining the value of your research. A strong discussion chapter demonstrates that you can think deeply about your data and understand its significance within the broader disciplinary context (Wisker, 2012).</p>
`);

// ============ CHAPTER 14: Conclusion ============
append(book.chapters[13], `
<h2>14.5 Making Recommendations for Future Research</h2>
<p>The conclusion should point the way forward by suggesting directions for future research. These recommendations should be specific and grounded in the findings and limitations of your study. Avoid generic statements like "more research is needed." Instead, identify specific questions that your study has raised but not answered, or methodological limitations that future studies could overcome. For example: "Given the significant effect of the intervention on short-term retention, future longitudinal studies should investigate whether these gains are maintained over a longer period, such as one or two academic years" (Murray, 2017).</p>
<p>Recommendations can also be directed at practice or policy, depending on the discipline. If your findings have implications for how professionals operate or how policies are designed, state these clearly. For professional doctorates (such as the EdD or DBA), practical recommendations are a critical component of the conclusion and must be detailed, actionable, and firmly supported by the evidence (Wisker, 2012).</p>

<h2>14.6 The Final Paragraph</h2>
<p>The final paragraph of the thesis is your last opportunity to leave an impression on the examiner. It should not introduce new material, but it should provide a powerful summary of the study's ultimate significance. Return to the broad context established in the introduction, showing how your specific findings illuminate the larger problem. The tone should be confident and authoritative. You have completed a major piece of original research; your final words should reflect the mastery of the topic that you have achieved (Paltridge and Starfield, 2007).</p>
<p>Review the introduction and conclusion side-by-side. The introduction poses a problem; the conclusion must provide the answer. The introduction outlines a gap in the literature; the conclusion must demonstrate how that gap has been filled. This alignment is essential for creating a sense of closure and demonstrating the coherence of the entire thesis (Murray, 2017).</p>

<h2>14.7 Key Takeaways</h2>
<p>The conclusion chapter provides closure by synthesising the argument, summarising the key findings in relation to the research questions, and clearly stating the original contribution to knowledge. It must avoid introducing new material while still feeling fresh and impactful. Make specific, grounded recommendations for future research or practice. Ensure perfect alignment between the introduction and the conclusion. End with a strong, confident statement of the study's overall significance (Wisker, 2012).</p>
`);

// ============ CHAPTER 15: Abstract ============
append(book.chapters[14], `
<h2>15.5 Crafting the Abstract: A Structured Approach</h2>
<p>Writing a strong abstract requires discipline and conciseness. A highly effective approach is to allocate a specific number of sentences to each structural element. For a 300-word abstract, a typical allocation might be: Context and background (2 sentences); The specific problem or gap (1-2 sentences); The research purpose and main questions (1-2 sentences); Methodology and data sources (2-3 sentences); Key findings (3-4 sentences); Implications and contribution (2 sentences). This structured allocation ensures that the abstract remains balanced and does not get bogged down in excessive detail in any one area (Paltridge and Starfield, 2007).</p>
<p>When drafting the abstract, use active verbs and precise language. Avoid filler phrases and unnecessary adjectives. Because word count is strictly limited, every word must earn its place. Do not include citations in the abstract unless your study is a direct replication or critique of a specific, named paper. The abstract should be self-contained and intelligible to a reader who has not read the full thesis (Murray, 2017).</p>

<h2>15.6 The Abstract and the Examiner</h2>
<p>The abstract plays a crucial role in the examination process. When a potential examiner is invited to evaluate your thesis, they are usually sent only the title and the abstract. They base their decision to accept or decline the invitation entirely on these two elements. A poorly written, confusing, or jargon-heavy abstract may lead qualified examiners to decline the invitation. Conversely, a clear, compelling abstract that highlights a significant original contribution will attract interested and engaged examiners (Wisker, 2012).</p>
<p>Furthermore, the abstract sets the examiner's initial expectations for the quality of the thesis. An abstract with grammatical errors, unclear methodology, or vague findings creates an immediate negative impression that the rest of the thesis will have to work hard to overcome. An excellent abstract establishes your credibility from the very first page (Murray, 2017).</p>

<h2>15.7 Key Takeaways</h2>
<p>The abstract is the most widely read part of your thesis and the primary tool for securing examiners. It must be a self-contained, highly condensed summary of the entire project. Follow a strict structure: context, problem, purpose, methodology, key findings, and implications. Use active verbs and precise language, avoiding citations and unnecessary detail. Write the abstract last, after the thesis is fully complete, to ensure accuracy. A strong abstract is a concise demonstration of your ability to synthesize complex research into a clear, compelling narrative (Paltridge and Starfield, 2007).</p>
`);

// ============ CHAPTER 16: Front Matter ============
append(book.chapters[15], `
<h2>16.5 Managing the Table of Contents and Lists</h2>
<p>The Table of Contents (TOC) is not merely a navigational aid; it is a structural outline of your argument. A clear, logically structured TOC demonstrates that the thesis has a coherent narrative arc. The headings in the TOC must match the headings in the text exactly, both in wording and in formatting hierarchy. Most word processing software can generate the TOC automatically based on heading styles; using this feature is essential to ensure accuracy, especially as page numbers change during the final editing phases (Murray, 2017).</p>
<p>If your thesis contains more than a few tables or figures, you must include a List of Tables and a List of Figures following the TOC. These lists should include the table/figure number, its exact title, and the page number. Similarly, if your thesis uses many acronyms, abbreviations, or specialised terms, a List of Abbreviations or a Glossary is highly recommended. These lists make the thesis more accessible to examiners, who may need to quickly look up a term or locate a specific data table during the evaluation process (Wisker, 2012).</p>

<h2>16.6 The Importance of Absolute Accuracy</h2>
<p>The front matter is the first thing the examiner sees after the abstract. Errors here—typographical mistakes in the acknowledgements, misaligned page numbers in the TOC, or formatting inconsistencies on the title page—signal carelessness. An examiner who finds three typos before reaching Chapter 1 will approach the rest of the thesis with increased scepticism and a heightened critical eye. The front matter requires meticulous proofreading, ideally by someone other than the author, to ensure absolute perfection (Paltridge and Starfield, 2007).</p>
<p>Pay special attention to institutional requirements for the title page and declarations. Universities often mandate specific wording for declarations of originality, copyright statements, and the formatting of the title page (including font size, spacing, and the exact phrasing of the degree name). Non-compliance with these administrative details can delay graduation or require formal corrections, even if the academic content of the thesis is excellent (Murray, 2017).</p>

<h2>16.7 Key Takeaways</h2>
<p>The front matter creates the crucial first impression of your thesis. It includes the title page, declarations, acknowledgements, table of contents, and lists of figures/tables. Ensure absolute accuracy and strict compliance with institutional formatting guidelines. Write sincere but professional acknowledgements. Use automated tools to generate the table of contents to guarantee precision. Meticulous attention to the front matter demonstrates professionalism and respect for the examination process, establishing a positive tone before the examiner even reads the introduction (Wisker, 2012).</p>
`);

// ============ CHAPTER 17: Referencing and Appendices ============
append(book.chapters[16], `
<h2>17.5 Managing Appendices Effectively</h2>
<p>Appendices are the repository for material that is necessary to support the thesis but too detailed, lengthy, or distracting to include in the main text. The rule of thumb for appendices is: the examiner should be able to read and understand the main text without looking at the appendices, but the appendices must be available if the examiner wishes to verify a procedure or examine raw data. Common items for appendices include: full interview schedules or survey questionnaires, blank consent forms and information sheets, ethics approval letters, detailed mathematical proofs, extensive data tables that summarise secondary findings, and coding frames or sample transcripts for qualitative research (Murray, 2017).</p>
<p>Appendices must be organised logically, numbered sequentially (Appendix A, Appendix B, or Appendix 1, Appendix 2), and listed in the Table of Contents. Crucially, every appendix must be referred to at least once in the main text. If an appendix is never mentioned in the text, it should not be included. When referring to an appendix, guide the reader: "The full interview schedule, detailing the prompt questions for each theme, is provided in Appendix C" (Paltridge and Starfield, 2007).</p>

<h2>17.6 The Ethics and Transparency Function</h2>
<p>Both referencing and appendices serve a vital function in demonstrating the ethics and transparency of your research. Flawless referencing proves that you have acknowledged your intellectual debts and avoided plagiarism. Comprehensive appendices (such as ethics approvals, consent forms, and data collection instruments) prove that you conducted the research properly and transparently. In an era where research integrity is increasingly scrutinized, these elements of the thesis provide the documentary evidence that your methodology was sound and your conduct was ethical (Wisker, 2012).</p>
<p>Examiners will spot-check your references and review your appendices to assess this integrity. A missing ethics approval letter in the appendix or a series of references in the text that are missing from the bibliography will raise red flags. Treat these sections not as administrative burdens, but as essential evidence of your professional competence as a researcher (Murray, 2017).</p>

<h2>17.7 Key Takeaways</h2>
<p>Referencing and appendices provide the essential supporting architecture for your thesis. A flawless reference list demonstrates academic integrity and attention to detail; use reference management software to ensure consistency. Appendices should contain necessary supplementary material (instruments, ethics documents, supplementary data) that would disrupt the flow of the main text. Every appendix must be clearly labelled and explicitly referred to in the main chapters. Together, these sections provide the transparency and documentation required to verify the rigour and ethics of your research (Paltridge and Starfield, 2007).</p>
`);

// ============ CHAPTER 18: Formatting to Standards ============
append(book.chapters[17], `
<h2>18.5 The Psychology of Formatting</h2>
<p>Formatting is not merely an aesthetic concern; it has a profound psychological effect on the examiner. A thesis that is beautifully formatted, with consistent margins, clear headings, perfectly aligned tables, and a readable font, creates a "halo effect." The examiner subconsciously assumes that a candidate who is meticulous about presentation is also meticulous about methodology, data analysis, and argumentation. The thesis feels authoritative and professional, making the examiner more receptive to the content (Murray, 2017).</p>
<p>Conversely, a thesis with inconsistent fonts, wandering margins, orphaned headings (a heading at the bottom of a page with the text on the next), or poorly formatted tables creates cognitive friction. The examiner becomes distracted by the errors and frustrated by the lack of care. This frustration often bleeds into their evaluation of the academic content. A sloppy presentation suggests a sloppy researcher, and the examiner will read the thesis with increased suspicion, looking for methodological flaws to match the formatting flaws (Wisker, 2012).</p>

<h2>18.6 Using Styles and Templates</h2>
<p>The only reliable way to achieve consistent formatting in a document of 80,000 words is to use the "Styles" function in your word processor. Do not manually format headings by highlighting text and clicking "bold" and "14pt." Instead, define a "Heading 1" style, a "Heading 2" style, and a "Body Text" style, and apply them consistently. This ensures absolute uniformity across chapters and allows you to generate an accurate, automated Table of Contents (Paltridge and Starfield, 2007).</p>
<p>Many universities provide an official thesis template (often a Microsoft Word .dotx file or a LaTeX class file). If your university provides one, use it from day one. Do not write the thesis in a blank document and try to format it at the end; retrofitting a massive document into a template is a nightmare that often introduces new errors. Write in the template, using the predefined styles, so that formatting is managed continuously rather than becoming a crisis in the final weeks before submission (Murray, 2017).</p>

<h2>18.7 Key Takeaways</h2>
<p>Compliance with institutional formatting standards is mandatory, not optional. A professionally formatted thesis creates a positive psychological impression on the examiner, signaling competence and attention to detail. Use word processor Styles and institutional templates from the beginning to ensure consistency and automate the Table of Contents. Pay careful attention to margins, pagination, heading hierarchies, and the formatting of tables and figures. Never underestimate the impact of presentation; excellent research presented poorly will always be evaluated more harshly than excellent research presented professionally (Wisker, 2012).</p>
`);

// ===== SAVE AND VERIFY =====
fs.writeFileSync(bookPath, JSON.stringify(book, null, 2), 'utf-8');

let words = 0;
book.chapters.forEach(ch => {
  words += ch.content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
});
console.log('Book 7 after Part 3-4 expansion:', words, 'words, ~' + Math.ceil(words / 275), 'pages');

for (let i = 8; i < 18; i++) {
  const w = book.chapters[i].content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
  console.log(`  Ch ${i+1}: ${w} words (~${Math.round(w/275)} pages)`);
}
