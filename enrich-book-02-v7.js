/**
 * enrich-book-02-v7.js
 * Expands Chapters 16-20 of Book 2
 * Goal: Add significant academic depth and word count. No em dashes allowed.
 */
const fs = require('fs');
const path = require('path');
const bookPath = path.join(__dirname, 'books', 'book-02.json');
const book = JSON.parse(fs.readFileSync(bookPath, 'utf-8'));

function append(content, html) {
  return content + html;
}

book.chapters[15].content = append(book.chapters[15].content, `
<h2>16.7 Defending Your Synthesis Against Examiner Critique</h2>
<p>In a thesis defense or a peer-review process, the literature review is frequently the most heavily attacked chapter. Examiners do not expect you to have read every single paper ever published, but they do expect your synthesis to be representative, fair, and analytically sound. A common critique is the accusation of "cherry-picking" - selecting only the literature that supports your hypothesis while ignoring contradictory evidence.</p>
<p>To defend against this, your writing must preemptively address the counter-arguments. When discussing a controversial topic, you should explicitly devote a paragraph to the strongest opposing viewpoint. "While the consensus suggests X, critics such as Smith (2021) and Jones (2022) raise valid concerns regarding the long-term sustainability of this model, citing robust longitudinal data..." By acknowledging the strongest form of the opposing argument and then methodically explaining why your research perspective remains valid despite it, you demonstrate intellectual maturity and insulate your review against the charge of bias.</p>
`);

book.chapters[16].content = append(book.chapters[16].content, `
<h2>17.7 The Literature Map: Visualizing the Scholarly Conversation</h2>
<p>A powerful technique for managing complex literature reviews is the creation of a literature map. A literature map is a visual diagram that lays out the topography of the scholarly conversation. At the center of the map is your core research question. Radiating outward are the major theoretical schools, methodological debates, and key authors contributing to the topic.</p>
<p>This visual exercise prevents the reviewer from getting lost in the chronological weeds. It allows the researcher to see clusters of research and, crucially, the empty spaces between the clusters. If one cluster of research focuses entirely on the psychological impacts of a policy, and another cluster focuses on the economic impacts, the empty space between them might represent the socio-cultural impacts - revealing a perfect, visually verified gap for your own research to fill. Including a simplified version of this map in your actual chapter can provide a brilliant roadmap for your examiner.</p>
`);

book.chapters[17].content = append(book.chapters[17].content, `
<h2>18.7 The Danger of the "Straw Man" in Literature Reviews</h2>
<p>The "straw man" fallacy occurs when a writer deliberately misrepresents or oversimplifies an opposing theory or study to make it easier to attack. In literature reviews, this often happens when a researcher is desperately trying to carve out a gap for their own study. They might summarize a previous author's nuanced, multi-variable study as a simplistic, single-variable claim, and then loudly critique that simplistic claim to justify their own research.</p>
<p>This is both an analytical failure and an ethical breach. Academic rigor demands the principle of charity: you must interpret the literature in its strongest, most reasonable form before critiquing it. If you have to distort previous research to justify your own, your research gap is likely an illusion. A strong literature review engages with the best, most sophisticated versions of opposing arguments and demonstrates why further research is still necessary.</p>
`);

book.chapters[18].content = append(book.chapters[18].content, `
<h2>19.7 Managing the Emotional Toll of the Literature Review</h2>
<p>The literature review is often the most emotionally taxing phase of the research process. It is a period characterized by information overload, imposter syndrome, and a persistent feeling of inadequacy. As the researcher reads paper after paper written by brilliant experts, it is natural to feel that everything important has already been said, and said better than the researcher could ever manage.</p>
<p>Managing this emotional toll is critical for project momentum. Researchers must recognize that the literature review is designed to make them feel ignorant; its purpose is to expose the vastness of human knowledge. The antidote to this imposter syndrome is active synthesis. By shifting from passive reading (absorbing the brilliance of others) to active synthesis (critiquing, categorizing, and identifying the flaws in the literature), the researcher reclaims their agency. They move from being a student of the literature to becoming a master of it, identifying the precise limitations that only their unique research project can resolve.</p>
`);

book.chapters[19].content = append(book.chapters[19].content, `
<h2>20.7 The Literature Review as a Living Document</h2>
<p>Finally, the researcher must accept that a literature review is never truly "finished" until the thesis is bound or the article is published. It is a living document. The academic world does not pause while you conduct your data collection. New papers are published daily. A review that was comprehensive in January may be outdated by August.</p>
<p>Therefore, a rigorous researcher maintains "search alerts" on major academic databases (like Scopus or Google Scholar) using their core keywords. These alerts automatically notify the researcher of any new publications in their niche. In the final weeks before submission, the researcher must conduct a final "sweep" of the literature, updating their review to include the most recent studies. This demonstrates to the examiners that the researcher is fully engaged in the ongoing, real-time scholarly conversation, rather than relying on a static snapshot of the past.</p>
`);

fs.writeFileSync(bookPath, JSON.stringify(book, null, 2), 'utf-8');
console.log('Book 2 Chapters 16-20 enriched successfully.');

// Check word count
let words = 0;
book.chapters.forEach(ch => {
  words += ch.content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
});
console.log('Book 2 Words:', words, 'Est Pages:', Math.ceil(words / 280));
