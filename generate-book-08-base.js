/**
 * generate-book-08-base.js
 * Generates the base JSON for Book 8: Research Ethics in Practice
 * 24 chapters, target ~242 pages (~66,550 words).
 * Initial content per chapter: ~1000 words to set the foundation.
 * NO EM DASHES.
 */
const fs = require('fs');
const path = require('path');

const book = {
  id: "book-08",
  title: "Research Ethics in Practice",
  author: "Academic Writing Team",
  chapters: []
};

const chapterTitles = [
  "The Evolution of Research Ethics",
  "Ethics as a Continuous Practice",
  "The Role of the Institutional Review Board (IRB)",
  "Navigating Ethical Frameworks and Codes",
  "Balancing Risk and Benefit",
  "Designing Ethical Interventions",
  "Positionality and Power Dynamics",
  "The Ethics of Funding and Sponsorship",
  "Informed Consent: Beyond the Form",
  "Vulnerable Populations and Assent",
  "Privacy, Anonymity, and Confidentiality",
  "The Right to Withdraw",
  "Ethical Observational Research",
  "Data Security and Storage",
  "The Ethics of Secondary Data Analysis",
  "Managing Incidental Findings",
  "Intellectual Honesty and Integrity",
  "Authorship and Credit",
  "Plagiarism, Self-Plagiarism, and Patchwriting",
  "The Ethics of Peer Review",
  "Digital and Social Media Research Ethics",
  "Artificial Intelligence in the Research Process",
  "Open Science and Data Sharing",
  "Conclusion: The Responsible Scholar"
];

const generateChapterContent = (title, index) => {
  const chNum = index + 1;
  return `
<h1>Chapter ${chNum}: ${title}</h1>
<p>Research ethics is often mistakenly viewed by novice scholars as a bureaucratic hurdle to be cleared at the beginning of a project. However, true research ethics is not a one-time approval process; it is a continuous, reflective practice that permeates every stage of the research lifecycle. This chapter explores the foundational concepts surrounding <strong>${title.toLowerCase()}</strong>, establishing the principles that guide responsible scholarship in the contemporary academic environment.</p>
<p>The academic enterprise is fundamentally built upon trust: trust that the research was conducted honestly, trust that participants were treated with dignity, and trust that the findings accurately reflect the data. When this trust is broken, the consequences extend far beyond the individual researcher, damaging the credibility of the entire discipline and eroding public confidence in science and scholarship. Therefore, engaging with ethical dilemmas is not an administrative burden but a core intellectual responsibility of the researcher.</p>
<p>As we navigate the complexities of this topic, it is crucial to recognize that ethical guidelines are rarely black and white. While clear prohibitions exist against fabrication, falsification, and plagiarism, most daily ethical decisions involve balancing competing goods or navigating gray areas where multiple interpretations are possible. The goal of this exploration is not to provide a rigid rulebook, but to develop the ethical reasoning skills necessary to make principled decisions when confronted with ambiguity.</p>

<h2>${chNum}.1 Understanding the Core Principles</h2>
<p>To fully grasp the implications of ${title.toLowerCase()}, we must first ground our understanding in the core ethical principles that govern research involving human subjects and data. The Belmont Report, published in 1979, articulated three foundational principles that continue to guide institutional review boards worldwide: respect for persons, beneficence, and justice. Respect for persons requires that individuals be treated as autonomous agents and that persons with diminished autonomy are entitled to protection. This principle forms the bedrock of informed consent procedures.</p>
<p>Beneficence involves an obligation to secure the well-being of participants by maximizing possible benefits and minimizing possible harms. This is often described as the risk-benefit calculus, a continuous assessment that researchers must perform not just during the design phase, but throughout the implementation of the study. Justice requires that the burdens and benefits of research be distributed equitably, ensuring that vulnerable populations are not exploited for research that primarily benefits more privileged groups.</p>
<p>These principles must be translated from abstract ideals into concrete methodological practices. This translation process is often fraught with tension, as the demands of rigorous research design can sometimes conflict with the imperative to protect participants. Navigating this tension is the hallmark of a mature, ethical researcher who understands that methodological perfection cannot be pursued at the expense of human dignity.</p>

<h2>${chNum}.2 Common Pitfalls and Challenges</h2>
<p>In the application of these principles, researchers frequently encounter specific challenges related to ${title.toLowerCase()}. One of the most common pitfalls is viewing ethics as a static checklist rather than a dynamic dialogue. A researcher might obtain a signed consent form but fail to recognize when a participant becomes distressed during an interview, missing the ethical imperative to pause or terminate the session. Ethics is about human interaction, not just documentation.</p>
<p>Another significant challenge is the failure to anticipate the unintended consequences of research. Even well-intentioned studies can inadvertently stigmatize communities, reveal sensitive information through deductive disclosure, or disrupt local power dynamics. Researchers must engage in rigorous foresight, consulting with community representatives and stakeholders to identify potential harms that might not be obvious from an external academic perspective.</p>
<p>Furthermore, the pressure to publish and secure funding can create subtle incentives to cut ethical corners. The temptation to drop an outlier that weakens a statistical model, to overstate the implications of a finding, or to slice data into multiple minor publications (salami slicing) are all ethical challenges driven by the structural pressures of modern academia. Maintaining integrity in the face of these pressures requires conscious vigilance and a strong professional moral compass.</p>

<h2>${chNum}.3 Strategies for Responsible Practice</h2>
<p>Developing a robust ethical practice requires proactive strategies. First and foremost is the cultivation of reflexivity: the continuous, critical examination of one's own assumptions, biases, and positionality. Reflexivity allows the researcher to understand how their presence influences the research environment and the participants within it. This self-awareness is essential for mitigating power imbalances and ensuring that the research process remains respectful and collaborative.</p>
<p>A second crucial strategy is seeking ongoing consultation and peer review. Ethical dilemmas should rarely be resolved in isolation. Discussing challenges with supervisors, colleagues, or institutional ethics committee members provides diverse perspectives and prevents researchers from developing ethical blind spots. This collaborative approach to ethical problem-solving is a sign of professional maturity, not weakness.</p>
<p>Finally, researchers must commit to transparency in their methodology and reporting. Open science practices, such as pre-registering study designs, sharing anonymized datasets, and publishing both positive and negative results, are powerful mechanisms for enforcing ethical conduct. Transparency allows the scientific community to evaluate the integrity of the research process, ensuring that the foundations of knowledge remain strong and trustworthy.</p>

<h2>${chNum}.4 Chapter Summary</h2>
<p>In summary, the issues surrounding ${title.toLowerCase()} are central to the integrity of the academic enterprise. We have explored the foundational principles of respect, beneficence, and justice, and examined the common pitfalls that researchers face when translating these principles into practice. By cultivating reflexivity, seeking collaborative consultation, and committing to transparency, researchers can navigate the complex ethical landscape of modern scholarship. Ultimately, ethical research is not about avoiding punishment or satisfying a committee; it is about conducting work that is genuinely respectful, rigorous, and beneficial to society.</p>
`;
};

chapterTitles.forEach((title, index) => {
  book.chapters.push({
    title: title,
    content: generateChapterContent(title, index)
  });
});

fs.writeFileSync(path.join(__dirname, 'books', 'book-08.json'), JSON.stringify(book, null, 2), 'utf8');

let words = 0;
book.chapters.forEach(ch => {
  words += ch.content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
});
console.log('Book 8 base generated successfully!');
console.log(`Total words: ${words}`);
console.log(`Estimated pages: ${Math.ceil(words / 275)}`);
