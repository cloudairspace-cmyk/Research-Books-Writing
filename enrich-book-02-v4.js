/**
 * enrich-book-02-v4.js
 * Expands Chapters 14-20 of Book 2
 * Goal: Add significant academic depth and word count. No em dashes allowed.
 */
const fs = require('fs');
const path = require('path');
const bookPath = path.join(__dirname, 'books', 'book-02.json');
const book = JSON.parse(fs.readFileSync(bookPath, 'utf-8'));

function append(content, html) {
  return content + html;
}

// Chapter 14 is index 13
book.chapters[13].content = append(book.chapters[13].content, `
<h2>14.6 Critiquing Theoretical Frameworks in Literature</h2>
<p>When reviewing literature, it is insufficient to simply accept the theoretical framework that an author has chosen to frame their study. A mature literature review critically evaluates the appropriateness and utility of the theories employed across the field. If ten studies use Theory A to explain a phenomenon, but all ten studies struggle to explain a specific anomalous finding, the literature reviewer must point this out. This observation suggests that Theory A may be inadequate or incomplete for this specific context, paving the way for the reviewer to propose a new or modified theoretical framework for their own research.</p>
<p>Furthermore, a rigorous review looks for theoretical blind spots. If a body of literature on workplace productivity relies entirely on economic theories of rational choice, it may be systematically ignoring psychological or sociological factors. Highlighting this theoretical monoculture allows the researcher to introduce a novel theoretical lens - such as organizational psychology or cultural sociology - demonstrating how this new perspective illuminates aspects of the phenomenon that previous research has obscured.</p>
`);

// Chapter 15 is index 14
book.chapters[14].content = append(book.chapters[14].content, `
<h2>15.6 The Concept of Theoretical Saturation in Reviewing</h2>
<p>Borrowing a concept from grounded theory methodology, literature reviewers often seek "theoretical saturation" during their reading phase. Saturation occurs when the researcher stops finding new themes, theories, or methodological approaches in the literature. When reading the twentieth paper on a topic reveals the exact same arguments, cited sources, and conclusions as the first nineteen papers, the researcher has likely reached saturation for that specific sub-topic.</p>
<p>Reaching saturation is a signal that it is time to stop reading and start writing. A common trap for novice researchers is the endless literature search - the fear that there is one more perfect paper out there that must be found before writing can begin. Recognizing theoretical saturation gives the researcher permission to stop searching. They can confidently state that they have mapped the boundaries of current knowledge and can now synthesize it, rather than eternally collecting more of the same data.</p>
`);

// Chapter 16 is index 15
book.chapters[15].content = append(book.chapters[15].content, `
<h2>16.6 Plagiarism, Patchwriting, and Original Voice</h2>
<p>The academic literature review demands a delicate balance between respecting the work of previous scholars and asserting your own original scholarly voice. Failing to achieve this balance often leads to plagiarism, which in the context of literature reviews is rarely the wholesale copying of a paper, but rather the subtle, insidious practice of patchwriting. Patchwriting occurs when a student stitches together phrases and clauses from multiple sources, changing just enough words to bypass plagiarism software, but retaining the exact intellectual structure of the original authors.</p>
<p>The solution to patchwriting is not using a thesaurus; the solution is deeper comprehension. You must read a source until you understand the underlying concept so thoroughly that you can explain it to someone else without looking at the text. When you write your review from this place of deep comprehension, your original voice emerges naturally. You are no longer translating someone else's sentences; you are explaining a concept you now own, using the original author merely as a supporting citation for your independent explanation.</p>
`);

// Chapter 17 is index 16
book.chapters[16].content = append(book.chapters[16].content, `
<h2>17.6 Managing Citation Overload</h2>
<p>As the literature review expands, the sheer volume of citations can become unwieldy, both for the researcher to manage and the reader to digest. "Citation dumping" - listing a string of six or seven citations at the end of a single sentence (e.g., "Many studies have found X (Smith, 2010; Jones, 2012; Brown, 2015; Davis, 2018; Miller, 2020; Wilson, 2022)") - is poor academic practice. It tells the reader that a consensus exists, but provides zero analytical depth regarding how those studies reached that consensus or how they differ.</p>
<p>To manage citation overload, the researcher must categorize and group the literature conceptually. Instead of dumping all citations at the end of a broad claim, the researcher should break the claim down. "While earlier studies established the basic correlation using small sample sizes (Smith, 2010; Jones, 2012), more recent literature has confirmed this effect across diverse demographic populations (Brown, 2015; Davis, 2018) and through longitudinal methodologies (Miller, 2020; Wilson, 2022)." This approach uses the same six citations but organizes them to tell a story about the methodological evolution of the field.</p>
`);

// Chapter 18 is index 17
book.chapters[17].content = append(book.chapters[17].content, `
<h2>18.6 Using Reference Management Software Effectively</h2>
<p>The complexity of modern literature reviews makes the use of Reference Management Software (RMS) like Mendeley, Zotero, or EndNote absolute necessities, not optional conveniences. However, many students use these tools merely as digital filing cabinets or bibliography generators, missing their most powerful features for synthesis and organization.</p>
<p>Effective use of RMS involves utilizing tags, folders, and annotation features to build your synthesis matrix directly within the software. When you import an article, you should immediately tag it with the core variables, methodologies, or theoretical frameworks it employs. By doing this systematically, when you are ready to write the section on "Methodology X," you simply filter your RMS by that tag, and instantly retrieve every paper, along with your highlighted notes, that is relevant to that specific section. This transforms the RMS from a bibliography tool into an active partner in the analytical synthesis process.</p>
`);

// Chapter 19 is index 18
book.chapters[18].content = append(book.chapters[18].content, `
<h2>19.6 The Literature Review as an Iterative Process</h2>
<p>A fundamental misconception about the literature review is that it is a discrete phase of research that is completed before data collection begins. In reality, literature reviewing is an iterative process that continues throughout the entire lifespan of a research project. As you collect and analyze your own primary data, you will inevitably uncover unexpected themes, anomalous findings, or new theoretical implications that your initial literature review did not cover.</p>
<p>When this happens, you must return to the databases. You must conduct targeted, highly specific literature searches to help you interpret these new, unexpected findings. The literature review chapter in your final thesis or dissertation is not a snapshot of what you knew at the beginning of the project; it is a polished, retrospective narrative that has been updated and refined to perfectly frame the final results you eventually discovered. This iterative looping between data and literature is the hallmark of sophisticated, responsive research.</p>
`);

// Chapter 20 is index 19
book.chapters[19].content = append(book.chapters[19].content, `
<h2>20.6 Transitioning to the Methodology Chapter</h2>
<p>The final paragraphs of a literature review carry a heavy structural burden. They must summarize the entirety of the synthesized literature, definitively state the research gap, articulate the research questions or hypotheses designed to fill that gap, and smoothly transition the reader into the methodology chapter. The transition must feel logically inevitable. The reader should finish the literature review thinking, "Given everything presented here, the only logical next step is to conduct a study using exactly the methods the author is about to describe."</p>
<p>To achieve this seamless transition, the conclusion of the literature review should explicitly foreshadow the methodological choices. If the literature review argued that previous studies failed to capture the subjective lived experience of participants because they relied exclusively on quantitative surveys, the final transition paragraph should explicitly state that the current study will employ qualitative, phenomenological interviews to address this specific methodological gap. By linking the identified gap directly to the chosen research design, the literature review fulfills its ultimate purpose: providing the unassailable foundation and justification for the research that follows.</p>
`);

fs.writeFileSync(bookPath, JSON.stringify(book, null, 2), 'utf-8');
console.log('Book 2 Chapters 14-20 enriched successfully.');
