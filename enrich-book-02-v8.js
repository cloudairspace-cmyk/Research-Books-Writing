/**
 * enrich-book-02-v8.js
 * Massive expansion for Book 2
 * Goal: Add significant academic depth and word count. No em dashes allowed.
 */
const fs = require('fs');
const path = require('path');
const bookPath = path.join(__dirname, 'books', 'book-02.json');
const book = JSON.parse(fs.readFileSync(bookPath, 'utf-8'));

function append(content, html) {
  return content + html;
}

book.chapters[0].content = append(book.chapters[0].content, `
<h2>1.11 The Literature Review as a Rhetorical Act</h2>
<p>In addition to its epistemological and methodological functions, the literature review is fundamentally a rhetorical act. Rhetoric, in the Aristotelian sense, is the art of persuasion. When you write a literature review, your goal is not merely to describe what has been published; your goal is to persuade the reader (specifically, the examiner or peer reviewer) of three specific claims: that the problem you have identified is significant, that the existing literature has failed to adequately address this problem, and that your proposed research is the logical, necessary, and most robust method for solving it.</p>
<p>Viewing the literature review as a rhetorical act forces the researcher to shift their writing style. A descriptive review reads like an encyclopedia entry: flat, objective, and tedious. A rhetorical review reads like a legal brief: sharp, argumentative, and focused. Every paragraph must serve the ultimate goal of persuading the jury (the academic community) that your research gap is legitimate and urgent. You achieve this persuasion not by raising your voice, but by carefully marshalling the evidence from previous studies, arranging it to highlight its contradictions or omissions, and guiding the reader to the inevitable conclusion that your research is required.</p>

<h2>1.12 Establishing Ethos in the Literature Review</h2>
<p>A key component of rhetorical persuasion is "ethos," the establishment of the author's credibility and authority. In academic writing, you do not establish ethos by boasting about your intelligence or your passion for the subject. You establish ethos through the sheer mastery of the literature review. When an examiner reads a review that effortlessly synthesizes fifty complex papers, correctly identifies the underlying theoretical debates, and respectfully but firmly critiques established authorities in the field, the examiner implicitly trusts the researcher.</p>
<p>This trust is critical because it carries over into the methodology and results chapters. If your literature review is sloppy, misses seminal papers, or misinterprets key theories, the examiner loses faith in your competence. They will read the rest of your thesis with deep skepticism, actively looking for errors in your data collection or statistical analysis because your poor literature review has destroyed your ethos. Conversely, a masterful literature review buys you the benefit of the doubt. It proves that you are a careful, rigorous scholar, making the examiner much more likely to accept your subsequent findings.</p>
`);

book.chapters[1].content = append(book.chapters[1].content, `
<h2>2.11 Managing the "Rabbit Hole" Effect in Database Searches</h2>
<p>One of the most dangerous phenomena during the literature search phase is the "rabbit hole" effect. This occurs when a researcher begins searching for a specific topic, clicks on an interesting related article, reads its bibliography, clicks on another slightly related article, and three hours later finds themselves deeply immersed in a fascinating body of literature that has absolutely nothing to do with their original research question.</p>
<p>While intellectual curiosity is essential for research, the rabbit hole effect is a massive drain on productivity and focus. It stems from a lack of a disciplined search protocol. To combat this, researchers must treat database searching as a highly structured, time-boxed activity. Before logging into Scopus or Web of Science, you must clearly define your inclusion and exclusion criteria. If an article is fascinating but falls outside your inclusion criteria, you must have the discipline to ignore it or save it for a different project. The goal of the literature search is not to read everything interesting; it is to systematically collect the specific data needed to construct your argument.</p>

<h2>2.12 The Role of "Alerts" in Maintaining Currency</h2>
<p>The academic publishing cycle is continuous. A literature review is never truly finished; it is merely paused for publication. To manage this continuous flow of information, researchers must move from "pulling" information (manually searching databases) to "pushing" information (having the databases send relevant articles directly to them). This is achieved through the strategic use of search alerts.</p>
<p>Once you have developed a highly effective, tightly focused Boolean search string for your topic, you should save that search in your primary academic databases (e.g., PubMed, IEEE Xplore, ProQuest) and set up an email alert. Whenever a new article is published that matches your exact search criteria, the database will automatically email you the abstract. This automated system ensures that you remain at the cutting edge of your field without having to repeat the manual search process every month. It guarantees that your literature review will be completely up-to-date on the day you submit your final thesis.</p>
`);

book.chapters[2].content = append(book.chapters[2].content, `
<h2>3.11 Differentiating Between "Claims" and "Evidence" in Literature</h2>
<p>A critical reading skill that many novice researchers lack is the ability to instantly distinguish between an author's claims and the evidence provided to support those claims. A claim is an assertion of truth (e.g., "Cognitive behavioral therapy is more effective than psychoanalysis for treating phobias"). The evidence is the empirical data (e.g., a randomized controlled trial showing a 40% greater reduction in symptoms for the CBT group).</p>
<p>When reviewing literature, you cannot cite an author's claim as if it were a proven fact unless you have evaluated the underlying evidence. Authors, in their enthusiasm, often make claims in their discussion sections that stretch far beyond what their data actually supports. If you blindly cite these overstated claims in your own literature review, you import their methodological flaws into your own work. Critical reading requires you to constantly ask: "The author says X is true, but what exactly did they measure, and do the numbers actually prove X?" If the evidence is weak, you must state that the author "suggested" or "hypothesized" X, rather than stating that they "proved" X.</p>

<h2>3.12 Evaluating the "Conflict of Interest" Statement</h2>
<p>In modern academic publishing, particularly in the medical, pharmaceutical, and technological sciences, the critical reader must always check the Conflict of Interest (COI) or Funding declaration at the end of the article. Empirical research has repeatedly demonstrated the "funding effect" - studies funded by an industry are statistically much more likely to produce results favorable to that industry than independently funded studies.</p>
<p>This does not mean that industry-funded research is automatically fraudulent or invalid. However, it does require the critical reader to adopt a heightened level of skepticism. If a study sponsored by a pharmaceutical company finds that their new drug is highly effective, the reviewer must scrutinize the methodology with extreme care. Were the control groups appropriate? Was the statistical analysis transparent? A comprehensive literature review does not ignore industry-funded studies, but it explicitly notes the funding source when synthesizing the evidence, allowing the reader to assess the potential for bias.</p>
`);

book.chapters[3].content = append(book.chapters[3].content, `
<h2>4.9 The Theoretical Structure</h2>
<p>Beyond chronological, thematic, and methodological structures, a literature review can also be structured theoretically. This approach is primarily used when the core purpose of the research is to test, compare, or develop theories rather than to address a specific empirical problem. In a theoretically structured review, the major sections of the chapter correspond to the different theoretical frameworks that have been used to explain the phenomenon.</p>
<p>For example, a literature review on the causes of poverty might be structured around three theoretical camps: structuralist theories, behavioral theories, and institutional theories. The reviewer would synthesize the literature supporting and critiquing each theory in turn. The analytical goal of this structure is to demonstrate the limitations of all existing theories, thereby creating a gap that the researcher will fill by proposing a new, synthesized, or modified theoretical framework in the subsequent chapters.</p>

<h2>4.10 The "Inverted Pyramid" Macro-Structure</h2>
<p>Regardless of whether you choose a thematic, methodological, or theoretical approach, the overall macro-structure of the literature review should resemble an inverted pyramid. You begin at the widest point, discussing the broad context and the general importance of your overarching topic. This section orientates the reader and establishes relevance.</p>
<p>As the review progresses, you systematically move down the pyramid, narrowing the focus to more specific variables and contexts. If your broad topic is "technology in education," the next level down might be "online learning platforms," followed by "asynchronous discussion boards," followed by "the impact of asynchronous discussion boards on introverted students." By the time you reach the tip of the inverted pyramid at the end of the chapter, the focus is so narrow and specific that it perfectly matches the exact dimensions of your research question. This macro-structure prevents the literature review from wandering aimlessly and ensures a constant, directed flow toward the research gap.</p>
`);

book.chapters[4].content = append(book.chapters[4].content, `
<h2>5.9 Synthesizing Methodological Flaws Across the Field</h2>
<p>One of the most powerful forms of synthesis occurs when a researcher identifies a consistent methodological flaw that plagues an entire body of literature. This requires stepping back from the findings of individual papers and looking at the aggregate methodological choices of the discipline. For instance, a reviewer might notice that out of fifty papers studying the psychological impact of social media, forty-five rely exclusively on self-reported survey data.</p>
<p>The synthesis here is not about what the studies found; it is about how they found it. The reviewer can powerfully argue that the entire field suffers from severe social desirability bias and memory recall errors because of this methodological monoculture. By synthesizing this structural flaw across the literature, the reviewer instantly justifies their own decision to use a different methodology - such as physiological monitoring or ethnographic observation - positioning their research not just as another study, but as a methodological breakthrough for the discipline.</p>

<h2>5.10 The Use of Summary Tables in Synthesis</h2>
<p>While the synthesis matrix is a tool for the writer, the summary table is a tool for the reader. In a dense literature review, a well-constructed summary table can communicate complex comparative information much more effectively than paragraphs of text. A summary table typically lists the key studies discussed in a specific section, categorized by author, methodology, sample size, and primary finding.</p>
<p>However, the text must never simply repeat the contents of the table. The table provides the descriptive data; the text provides the analytical synthesis. For example, the text might read: "As demonstrated in Table 2.1, while the majority of quantitative studies (n=12) found a positive correlation, the three qualitative studies highlighted severe contextual limitations to this effect." The table handles the heavy lifting of listing the citations and study details, freeing the text to focus entirely on the analytical argument. This combination of visual summary and textual synthesis is the hallmark of professional academic writing.</p>
`);

book.chapters[5].content = append(book.chapters[5].content, `
<h2>6.7 The Conceptual Gap vs. The Contextual Gap</h2>
<p>When identifying research gaps, it is crucial to distinguish between a conceptual gap and a contextual gap. A conceptual gap exists when a theoretical relationship has never been tested, or when a phenomenon is entirely undefined in the literature. These are the most difficult gaps to fill because they require the researcher to build new theoretical models or develop new measurement instruments from scratch.</p>
<p>A contextual gap, on the other hand, exists when a well-established theory or relationship has not been tested in a specific environment, population, or time period. For example, "Theory X has been proven in the manufacturing sector, but it has never been tested in the healthcare sector." Contextual gaps are generally easier to fill and form the basis of the vast majority of master's and doctoral research. However, the researcher must still prove the need. They must argue why the new context is fundamentally different enough that the established theory might not apply, thereby justifying the replication of the study in the new environment.</p>

<h2>6.8 Avoiding the "Straw Gap"</h2>
<p>Just as writers use "straw man" arguments, novice researchers often invent "straw gaps." A straw gap is a research problem that is manufactured solely to justify a predetermined study, even though the literature has already adequately addressed the issue. The researcher ignores recent publications or seminal reviews that answer their question, pretending the gap still exists so they can proceed with their planned research.</p>
<p>This is intellectually dishonest and highly dangerous. When an examiner, who is an expert in the field, reads a literature review claiming a gap that was actually filled five years ago, the thesis is immediately compromised. The researcher must have the courage to abandon a research idea if the literature review reveals that the question has already been definitively answered. The gap must emerge organically and truthfully from a comprehensive, unbiased reading of the current literature.</p>
`);

// Check word count
let words = 0;
book.chapters.forEach(ch => {
  words += ch.content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
});
console.log('Book 2 Words:', words, 'Est Pages:', Math.ceil(words / 280));

fs.writeFileSync(bookPath, JSON.stringify(book, null, 2), 'utf-8');
console.log('Book 2 Chapters 1-6 massive expansion complete.');
