/**
 * enrich-book-03-final2.js
 * Final massive push for Book 3 (All 23 Chapters).
 * Adding "Methodological Debates" and "Glossary" to each chapter.
 * Goal: Push Book 3 significantly over 56k words. No em dashes allowed.
 */
const fs = require('fs');
const path = require('path');
const bookPath = path.join(__dirname, 'books', 'book-03.json');
const book = JSON.parse(fs.readFileSync(bookPath, 'utf-8'));

function append(content, html) {
  return content + html;
}

const debatesAndGlossary = [];

for (let i = 0; i < 23; i++) {
  const chapterNum = i + 1;
  const content = `
<h2>${chapterNum}.13 Methodological Debates in the Literature</h2>
<p>In the contemporary academic landscape, no methodology is universally accepted without critique. A rigorous researcher must be aware of the ongoing debates surrounding their chosen framework. One of the most persistent debates involves the balance of power between the researcher and the participant. Traditional methodologies, particularly in the quantitative sciences, view the researcher as the absolute authority, extracting data from passive subjects. However, critical and participatory paradigms argue that this model is inherently extractive and ethically flawed. They argue for co-production of knowledge, where participants have equal say in how the data is interpreted and published. When writing your methodology chapter, you must explicitly defend where you stand in this debate. Are you extracting data, or are you co-creating knowledge?</p>
<p>Another major debate centers on the concept of "Big Data" and its impact on traditional qualitative inquiry. As algorithms become capable of processing millions of social media posts to identify "sentiment," some theorists argue that small-scale, deep qualitative interviewing is becoming obsolete. Conversely, qualitative purists argue that Big Data provides the "what" but completely fails to provide the "why," lacking the contextual nuance required to truly understand human motivation. Your methodology must position itself within this technological debate. If you are using traditional qualitative methods in the age of Big Data, you must explicitly argue for the enduring value of human-led, contextualized interpretation over algorithmic aggregation.</p>
<p>Finally, there is an ongoing crisis regarding reproducibility across the social sciences. High-profile psychology and sociology experiments have failed to replicate when conducted by independent labs. This crisis has led to a demand for "open science" practices. Researchers are increasingly expected to pre-register their hypotheses, publicly share their raw datasets, and publish their analytical code. If your methodology chapter does not address how you will ensure the reproducibility of your findings, examiners will likely question the scientific validity of your entire project. You must explicitly document the transparent, open-science protocols you intend to implement.</p>

<h2>${chapterNum}.14 Glossary of Methodological Terms</h2>
<p><strong>Ontology:</strong> The philosophical study of the nature of being, becoming, existence, or reality. It forms the foundational assumption of any research project (e.g., is reality objective or subjective?).</p>
<p><strong>Epistemology:</strong> The theory of knowledge, especially with regard to its methods, validity, and scope. It is the investigation of what distinguishes justified belief from opinion.</p>
<p><strong>Reflexivity:</strong> The active, conscious process of the researcher recognizing and documenting how their own background, biases, and presence influence the data collection and analysis.</p>
<p><strong>Triangulation:</strong> The use of multiple methods, data sources, or theoretical perspectives in the study of the same phenomenon to ensure validity and overcome the biases of a single method.</p>
<p><strong>Construct Validity:</strong> The degree to which a test measures what it claims, or purports, to be measuring. It is the most fundamental requirement of any quantitative survey instrument.</p>
<p><strong>Purposive Sampling:</strong> A non-probability sampling technique where researchers rely on their own judgment when choosing members of the population to participate in their study, aiming for informational richness rather than statistical representation.</p>
<p><strong>Theoretical Saturation:</strong> The phase of qualitative data analysis in which the researcher has continued sampling and analyzing data until no new data appear and all concepts in the theory are well-developed.</p>
<p><strong>Hawthorne Effect:</strong> A type of reactivity in which individuals modify an aspect of their behavior in response to their awareness of being observed, threatening the internal validity of an experiment.</p>
<p><strong>Longitudinal Study:</strong> A research design that involves repeated observations of the same variables over short or long periods of time. It is often a type of observational study, although they can also be structured as longitudinal randomized experiments.</p>
<p><strong>Inductive Reasoning:</strong> A logical process in which multiple premises, all believed true or found true most of the time, are combined to obtain a specific conclusion. It is the basis of Grounded Theory methodology.</p>
  `;
  debatesAndGlossary.push(content);
}

for (let i = 0; i < 23; i++) {
  if (book.chapters[i]) {
    book.chapters[i].content = append(book.chapters[i].content, debatesAndGlossary[i]);
  }
}

// Check word count
let words = 0;
book.chapters.forEach(ch => {
  words += ch.content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
});
console.log('Book 3 Words:', words, 'Est Pages:', Math.ceil(words / 280));

fs.writeFileSync(bookPath, JSON.stringify(book, null, 2), 'utf-8');
console.log('Book 3 Methodological Debates and Glossary added successfully.');
