/**
 * expand-book-07-part56.js
 * Expands Book 7 Chapters 19-25 (Parts 5 & 6: Defence Prep + Life After Thesis)
 * NO EM DASHES.
 */
const fs = require('fs');
const path = require('path');
const bookPath = path.join(__dirname, 'books', 'book-07.json');
const book = JSON.parse(fs.readFileSync(bookPath, 'utf-8'));

function append(ch, html) { ch.content += html; }

// ============ CHAPTER 19: What Examiners Look For ============
append(book.chapters[18], `
<h2>19.5 The Concept of "Doctoralness"</h2>
<p>Examiners often speak of assessing the "doctoralness" (or "masteryness" for a master's thesis) of a candidate's work. This is an elusive concept, but it generally refers to a combination of independence, critical depth, and scholarly maturity. A thesis demonstrates doctoralness when it shows that the candidate has moved beyond merely applying techniques learned in coursework to independently designing and executing a complex research project. It shows that the candidate understands the philosophical assumptions underpinning their methodology and can justify their choices against alternatives (Wisker, 2012).</p>
<p>Doctoralness is also evident in how the candidate handles complexity and contradiction. A weaker thesis will try to force contradictory data into a neat narrative or ignore literature that challenges its premise. A doctoral-level thesis embraces complexity, acknowledging contradictions in the data and using them to generate deeper theoretical insights. Finally, doctoralness is demonstrated by the candidate's ability to locate their specific, narrow research project within the broader landscape of their discipline, understanding how their small contribution advances the larger field of knowledge (Murray, 2017).</p>

<h2>19.6 The "Fatal Flaws" Examiners Fear</h2>
<p>While examiners want candidates to pass, they are also gatekeepers for their discipline and must protect its standards. They are alert for "fatal flaws" that would make the thesis unpassable without major structural revision. The most common fatal flaw is a lack of alignment: research questions that do not match the methodology, or conclusions that are not supported by the findings. A thesis that promises a qualitative exploration of lived experience but delivers a quantitative survey with basic descriptive statistics has a fundamental alignment problem (Paltridge and Starfield, 2007).</p>
<p>Another fatal flaw is a lack of original contribution (at the doctoral level). If a study perfectly replicates existing research without adding a new context, population, or theoretical lens, it fails the requirement for originality. A third fatal flaw is egregious ethical violations, such as failure to secure informed consent, breaches of participant confidentiality, or plagiarism. While poor writing or formatting errors will irritate examiners and lead to minor corrections, these fundamental flaws in design, originality, or ethics are what lead to major revisions or failure (Wisker, 2012).</p>

<h2>19.7 Key Takeaways</h2>
<p>Understanding the examiner's perspective demystifies the examination process. Examiners look for a coherent, well-argued thesis that makes an original contribution to knowledge. They value critical evaluation, methodological transparency, and intellectual honesty over perfect results. They assess the "doctoralness" of the work, looking for independence and scholarly maturity. By avoiding fatal flaws in alignment, originality, and ethics, and by presenting your work professionally, you reassure the examiner that you are a competent researcher ready to join the academic community (Murray, 2017).</p>
`);

// ============ CHAPTER 20: Preparing for the Viva ============
append(book.chapters[19], `
<h2>20.5 Structuring the Viva Presentation</h2>
<p>In many jurisdictions (including North America and parts of Europe), the oral defence begins with a presentation by the candidate. This presentation, usually lasting 15 to 30 minutes, is not a chapter-by-chapter summary of the thesis; the examiners have already read it. Instead, it is a high-level narrative that highlights the core argument and the most significant contributions. A strong presentation structure includes: the context and the problem (why the research matters), the research questions, a brief overview of the methodology (focusing on why it was the best approach), the key findings (highlighting the most surprising or significant results), and the original contribution to knowledge (Murray, 2017).</p>
<p>Visual aids should be used sparingly and strategically. Avoid slides crowded with text; the examiners should be listening to you, not reading the screen. Use slides to present complex conceptual models, key data visualisations, or summary tables. Practice the presentation multiple times to ensure it fits comfortably within the time limit. Running over time suggests a lack of preparation and an inability to synthesise, neither of which creates a good impression before the questioning begins (Wisker, 2012).</p>

<h2>20.6 The Mock Viva: Essential Preparation</h2>
<p>The single most effective preparation strategy for an oral defence is the mock viva. Organise a practice defence with your supervisor and one or two other academics who are familiar with your field but were not involved in your research. Treat the mock viva exactly like the real event: dress appropriately, deliver your presentation, and field questions under formal conditions. Ask your mock examiners to push you hard, especially on the weaknesses or limitations of your study (Paltridge and Starfield, 2007).</p>
<p>A mock viva serves several purposes. It desensitises you to the stress of the format, making the actual event less intimidating. It reveals the questions you struggle to answer, allowing you to prepare better responses. It highlights any nervous habits you may have (speaking too quickly, fidgeting, defensive body language) so you can consciously manage them. Record the mock viva or ask a peer to take detailed notes, as it is difficult to remember the feedback while you are under pressure. The time invested in a mock viva pays immense dividends in confidence and performance during the real defence (Murray, 2017).</p>

<h2>20.7 Key Takeaways</h2>
<p>The viva or oral defence is a collegial examination, not an interrogation. Prepare by rereading your thesis critically, knowing the relevant literature, and understanding the examiners' own work. Structure your presentation to highlight your core argument and original contribution, not to summarize the entire document. Conduct a rigorous mock viva to practice answering difficult questions under pressure. Approach the defence with confidence in your expertise, a willingness to engage in scholarly debate, and the openness to concede valid points of critique. It is your opportunity to defend your research and claim your place in the academic community (Wisker, 2012).</p>
`);

// ============ CHAPTER 21: Answering Questions ============
append(book.chapters[20], `
<h2>21.5 Strategies for Difficult Questions</h2>
<p>Even with excellent preparation, you will likely face questions during the defence that you do not immediately know how to answer. How you handle these moments is as important as the answer itself. First, never panic. It is perfectly acceptable to pause and think before speaking. You can buy time by saying, "That is an excellent question, let me consider how best to address it," or by asking the examiner to clarify or rephrase the question. Taking a sip of water also provides a natural, brief pause to collect your thoughts (Murray, 2017).</p>
<p>If you genuinely do not know the answer to a factual question, it is better to admit it than to guess. You can say, "I am not familiar with that specific study, but based on the principles we have discussed..." or "That falls outside the scope of my current literature review, but I will certainly look into it as I prepare this work for publication." If an examiner points out a genuine flaw in your methodology or analysis that you had not considered, acknowledge it gracefully. Defending the indefensible demonstrates a lack of scholarly maturity. Say, "You make a valid point, and in retrospect, approaching it that way would have strengthened the analysis. If I were to design a follow-up study, I would incorporate that approach" (Wisker, 2012).</p>

<h2>21.6 Managing the Dynamics of the Defence</h2>
<p>The viva is not just an intellectual exercise; it is an interpersonal dynamic. Pay attention to your body language. Sit up straight, maintain eye contact with the examiners (especially the one asking the question), and keep an open posture. Avoid crossing your arms or leaning back defensively. When an examiner is speaking, listen actively. Do not interrupt, even if you think you know where the question is going or if you disagree with the premise. Let them finish completely before you begin your response (Paltridge and Starfield, 2007).</p>
<p>Be aware that examiners may sometimes disagree with each other during the viva. If this happens, do not feel compelled to take sides immediately. Allow them to debate the point, and then offer a synthesis or explain how your data relates to both positions. Remember that the examiners are academics who enjoy intellectual debate; a robust discussion about theoretical frameworks or methodological approaches is a sign of a good viva, not a failing one. Your goal is to participate in the debate as a junior colleague, not to survive it as a victim (Murray, 2017).</p>

<h2>21.7 Key Takeaways</h2>
<p>Answering examiner questions effectively requires anticipation, strategy, and professional composure. Anticipate the standard questions about originality, contribution, and limitations. Prepare for methodological critiques by acknowledging weaknesses and defending your choices. Handle difficult questions gracefully by pausing, asking for clarification, or admitting gaps in knowledge when necessary. Manage the interpersonal dynamics of the defence through active listening and open body language. The examiners are not looking for perfection; they are looking for a researcher who can engage in intelligent, rigorous debate about their work (Wisker, 2012).</p>
`);

// ============ CHAPTER 22: Post-Viva Corrections ============
append(book.chapters[21], `
<h2>22.5 Creating a Revision Plan</h2>
<p>Once you have received the examiner's report and taken time to process it, you must translate the required corrections into a structured revision plan. Do not attempt to revise the thesis by reading through from page one and making changes ad hoc. Instead, extract every required correction from the report and list them in a spreadsheet or document. Categorise them by type (typographical, structural, analytical) and by chapter. This list becomes your project management tool for the revision phase (Murray, 2017).</p>
<p>Tackle the corrections strategically. Many students prefer to complete all the minor typographical and formatting corrections first. This provides a sense of immediate progress and reduces the size of the task list quickly. Next, address the substantive corrections chapter by chapter. For major structural changes (such as rewriting a discussion section or conducting additional data analysis), schedule dedicated blocks of time and consult with your supervisor before beginning to ensure you both understand exactly what the examiners are asking for (Paltridge and Starfield, 2007).</p>

<h2>22.6 The Matrix of Changes</h2>
<p>When you submit your revised thesis, you must also submit a document detailing how you have addressed the examiners' requirements. This is often called a "Matrix of Changes" or a "Response to Examiners." This document is critical because the internal examiner (or a committee) will use it to verify that you have completed the required work. If the matrix is clear and comprehensive, the approval process is usually swift (Wisker, 2012).</p>
<p>The matrix should be formatted as a table. The first column should quote the examiner's requirement exactly as written in the report. The second column should detail the action you have taken to address it. The third column should provide the exact page and paragraph numbers in the revised thesis where the change can be found. The tone of this document must be unfailingly professional and polite. Even if you felt a requirement was pedantic or misguided, you must demonstrate that you have addressed it respectfully and thoroughly (Murray, 2017).</p>

<h2>22.7 Key Takeaways</h2>
<p>Receiving corrections is the standard outcome of the doctoral examination process, not a failure. Manage the emotional impact of the report by taking time to process the feedback before beginning revisions. Create a structured revision plan based on a systematic breakdown of the examiners' requirements. Tackle the corrections methodically, starting with minor errors and moving to substantive changes. Prepare a clear, professional Matrix of Changes to accompany your resubmission, detailing exactly how and where you addressed every requirement. Treat the revision process as the final polish that turns a passing thesis into an excellent one (Wisker, 2012).</p>
`);

// ============ CHAPTER 23: From Thesis to Publication ============
append(book.chapters[22], `
<h2>23.5 Strategies for Co-Authorship</h2>
<p>As you transition from student to independent researcher, you must navigate the complexities of co-authorship, particularly with your former supervisor. In many disciplines, particularly in the sciences, it is standard practice for the supervisor to be a co-author on publications arising from the thesis, reflecting their contribution to the research design, funding, and theoretical framing. In the humanities, sole authorship is more common. It is essential to have an explicit conversation with your supervisor about authorship expectations before you begin drafting articles (Murray, 2017).</p>
<p>If you are co-authoring, agree on the order of authors based on the conventions of your discipline and the relative contributions to the specific paper. The student, having conducted the primary research and drafted the manuscript, is typically the first author on thesis-derived publications. Establish clear timelines and responsibilities for the drafting and revision process. A common pitfall is for papers to stall because the former student is busy with a new job and the supervisor assumes the student is leading the writing. Clear communication prevents these delays (Paltridge and Starfield, 2007).</p>

<h2>23.6 Beyond the Peer-Reviewed Article</h2>
<p>While peer-reviewed journal articles are the currency of academic careers, they are not the only valuable outputs from a thesis. Depending on your career goals, you should consider a range of publication formats. If your research has practical implications for professionals (teachers, nurses, managers), write articles for professional magazines or trade journals. These publications reach the people who can actually implement your findings, and they demonstrate the real-world impact of your research (Wisker, 2012).</p>
<p>If your research addresses issues of public interest, consider writing op-eds for newspapers, articles for platforms like The Conversation, or blog posts. Translating complex academic research into accessible public writing is a distinct and highly valued skill. Additionally, consider policy briefs if your findings have implications for government or institutional policy. A two-page policy brief summarising your key findings and recommendations can have more impact on decision-makers than a fifty-page journal article (Murray, 2017).</p>

<h2>23.7 Key Takeaways</h2>
<p>A thesis is an examination document; a publication is a contribution to the field. Transitioning from one to the other requires reconceptualising the writing for a new audience. Identify publishable units within your thesis, such as the literature review, methodology, or specific empirical findings. Select target journals strategically. Navigate co-authorship expectations with your supervisor clearly and early. Consider diverse publication formats, including professional articles, public writing, and policy briefs, to maximize the impact of your research. A strategic publication plan transforms your thesis from a completed degree into the foundation of a research career (Paltridge and Starfield, 2007).</p>
`);

// ============ CHAPTER 24: Emotional Aftermath ============
append(book.chapters[23], `
<h2>24.5 Managing the Transition to the Next Career Stage</h2>
<p>The post-submission void is often compounded by anxiety about the future. For those seeking academic careers, the transition involves navigating a highly competitive job market, applying for post-doctoral fellowships, and adjusting to the precarious reality of adjunct or fixed-term contracts. For those transitioning to industry, government, or the non-profit sector, the challenge is translating academic skills into language that non-academic employers understand and value. In both cases, the transition requires a significant shift in identity and professional strategy (Wisker, 2012).</p>
<p>It is important to approach this transition systematically. Do not wait until after graduation to begin building the networks and skills required for your next step. Use the final year of your degree to attend career workshops, conduct informational interviews with professionals in your target sectors, and tailor your CV or resume. If you are leaving academia, seek support from your university's career services to help you identify the transferable skills you have developed during your research (Murray, 2017).</p>

<h2>24.6 Redefining Success</h2>
<p>Throughout your education, success has been clearly defined: get good grades, pass exams, complete the thesis, earn the degree. Once the degree is awarded, this clear, externally imposed metric of success disappears. In the post-doctoral world, you must define success for yourself. For some, success means securing a tenure-track academic position. For others, it means finding a fulfilling career outside the university where they can apply their analytical skills. For still others, it means achieving a better balance between work and personal life after years of sacrifice (Paltridge and Starfield, 2007).</p>
<p>The pressure to follow the traditional academic path can be intense, often reinforced by supervisors and institutional cultures that view non-academic careers as a failure. Resisting this pressure and defining success on your own terms is crucial for long-term well-being. Recognize that the skills you have acquired—critical thinking, project management, resilience, complex problem solving—are highly valuable in a wide range of contexts. Your degree does not dictate your path; it expands your options (Wisker, 2012).</p>

<h2>24.7 Key Takeaways</h2>
<p>The completion of a thesis is followed by an emotional aftermath characterized by exhaustion, a sense of void, and anxiety about the future. Acknowledge these feelings as normal and temporary. Take time to rest and rebuild the non-academic aspects of your life that were neglected during the research process. Manage the transition to the next career stage systematically, seeking support for career planning and skill translation. Above all, redefine success on your own terms, recognizing that the doctoral degree provides valuable skills that can lead to fulfilling careers both within and beyond the academy (Murray, 2017).</p>
`);

// ============ CHAPTER 25: Conclusion ============
append(book.chapters[24], `
<h2>25.5 Cultivating Intellectual Humility</h2>
<p>One of the paradoxes of earning the highest academic degree is that it often results in a profound awareness of how little one actually knows. You have become a world expert in a remarkably narrow slice of your discipline, but in doing so, you have seen the vastness of the literature you have not read and the complexity of the questions you cannot answer. This realization should cultivate intellectual humility, a quality that is essential for a productive research career (Wisker, 2012).</p>
<p>Intellectual humility means recognizing the limits of your own expertise, remaining open to new evidence that challenges your conclusions, and respecting the diverse methodological and theoretical approaches of other scholars. It means entering debates not to prove that you are right, but to collaboratively advance understanding. The most respected scholars are rarely those who claim to have all the answers; they are those who ask the most insightful questions and listen most carefully to the responses (Murray, 2017).</p>

<h2>25.6 The Responsibility of the Scholar</h2>
<p>With the privilege of advanced education comes a responsibility to the broader community. The research skills you have developed are powerful tools for understanding the world, and they should be used ethically and purposefully. Whether you remain in academia or pursue a career elsewhere, you have a role to play in promoting evidence-based decision making, challenging misinformation, and contributing to the public understanding of complex issues (Paltridge and Starfield, 2007).</p>
<p>This responsibility extends to how you interact with the next generation of students and researchers. Remember the supervisors who guided you, the peers who supported you, and the mentors who offered advice. As you advance in your career, look for opportunities to provide that same support to others. The academic community thrives on this intergenerational transfer of knowledge, encouragement, and mentorship (Wisker, 2012).</p>

<h2>25.7 Final Thoughts</h2>
<p>Completing a thesis or dissertation is a monumental achievement. It requires years of sustained intellectual effort, resilience in the face of setbacks, and the courage to subject your ideas to the scrutiny of experts. You have demonstrated that you can generate new knowledge, communicate it effectively, and defend it rigorously. As you close this chapter of your life and begin the next, take pride in what you have accomplished. The degree you have earned is not just a credential; it is a testament to your capability, your perseverance, and your commitment to the pursuit of knowledge. The journey was difficult, but the skills and perspectives you have gained will serve you for a lifetime.</p>
`);

// ===== SAVE AND VERIFY =====
fs.writeFileSync(bookPath, JSON.stringify(book, null, 2), 'utf-8');

let words = 0;
book.chapters.forEach(ch => {
  words += ch.content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
});
console.log('Book 7 after Part 5-6 expansion:', words, 'words, ~' + Math.ceil(words / 275), 'pages');

for (let i = 18; i < 25; i++) {
  const w = book.chapters[i].content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
  console.log(`  Ch ${i+1}: ${w} words (~${Math.round(w/275)} pages)`);
}
