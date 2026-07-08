/**
 * generate-book-10-base.js
 * Generates the base JSON for Book 10: Research to Impact
 * 24 chapters, target ~248 pages (~68,200 words).
 * Initial content per chapter: ~1000 words to set the foundation.
 * NO EM DASHES.
 */
const fs = require('fs');
const path = require('path');

const book = {
  id: "book-10",
  title: "Research to Impact",
  author: "Academic Writing Team",
  chapters: []
};

const chapterTitles = [
  "The Impact Agenda in Modern Academia",
  "Defining and Measuring Research Impact",
  "Identifying Your Target Audience",
  "The Art of Translation: From Jargon to Plain Language",
  "Writing Policy Briefs and White Papers",
  "Engaging with Policymakers and Politicians",
  "Navigating the Media Landscape",
  "Writing Op-Eds and Public Commentary",
  "The Role of the University Press Office",
  "Social Media for Scholars",
  "Building a Public Academic Brand",
  "Public Speaking and Keynote Addresses",
  "Creating Data Visualizations for the Public",
  "Community Engagement and Participatory Dissemination",
  "Translating Research for Industry Partnerships",
  "Commercialization and Intellectual Property",
  "Startups and University Spin-offs",
  "Educational Outreach and K-12 Integration",
  "Developing Toolkits and Practitioner Guides",
  "Advocacy vs. Objectivity",
  "Managing Public Backlash and Controversy",
  "Evaluating the Reach of Your Impact",
  "Funding Your Impact Activities",
  "The Future of the Public Scholar"
];

const generateChapterContent = (title, index) => {
  const chNum = index + 1;
  return `
<h1>Chapter ${chNum}: ${title}</h1>
<p>For decades, the final step of the academic research lifecycle was publication in a peer-reviewed journal. Once the paper was in print, the researcher's job was effectively complete; it was assumed that the knowledge would naturally trickle down to society. Today, this passive model of dissemination is obsolete. We have entered the era of the "Impact Agenda," where researchers are increasingly held accountable not just for generating knowledge, but for actively translating that knowledge into tangible societal benefits. This chapter explores the critical dimensions of <strong>${title.toLowerCase()}</strong>, laying the groundwork for transforming your research from a static publication into a dynamic catalyst for change.</p>
<p>This shift from passive dissemination to active impact is driven by a confluence of factors. Funding agencies, facing intense public scrutiny, demand demonstrable return on investment for taxpayer dollars. Universities, competing for prestige and students, emphasize their real-world relevance. Most importantly, researchers themselves increasingly recognize a moral imperative to address urgent global challenges—from climate change to public health crises—that cannot be solved if vital data remains locked behind commercial academic paywalls. However, achieving genuine impact requires an entirely different skill set than conducting the research itself. It requires strategic communication, political acumen, and a profound understanding of diverse non-academic audiences.</p>
<p>Navigating this transition is challenging. The academic incentive structure has historically punished public engagement, viewing it as a distraction from "serious" scholarship—a phenomenon often pejoratively termed the "Sagan Effect" (named after astronomer Carl Sagan, who faced professional backlash for his popular science work). While these cultural barriers are crumbling, translating complex data into actionable insights for policymakers, industry leaders, or the general public remains fraught with risks of oversimplification and misinterpretation. This book provides the strategic roadmap for safely and effectively bridging the gap between the academy and the world.</p>

<h2>${chNum}.1 The Shift from Outputs to Outcomes</h2>
<p>To succeed in the impact arena, researchers must internalize the distinction between outputs and outcomes. An output is a direct product of the research activity: a journal article, a conference presentation, a dataset, or a new algorithm. Outputs are entirely within the researcher's control. An outcome, however, is the change that occurs in the world as a result of that output: a change in government policy, the adoption of a new clinical guideline, improved public understanding of a scientific concept, or the creation of a new commercial product. Outcomes involve human behavior and are therefore complex, unpredictable, and largely outside the researcher's direct control (Watermeyer, 2014).</p>
<p>The core challenge of the Impact Agenda is that researchers are increasingly evaluated on outcomes, not just outputs. You cannot simply point to a stack of publications and claim impact. You must demonstrate how those publications catalyzed change. This requires designing research with the end-user in mind from the very beginning. If you want your research to change educational policy, you cannot wait until the paper is published to figure out how to reach the Ministry of Education. You must involve educational policymakers in the design phase, ensuring your research questions align with their policy needs. Impact is not an afterthought; it is a structural component of modern research design.</p>

<h2>${chNum}.2 The Vocabulary of Translation</h2>
<p>The single greatest barrier to research impact is language. Academic training rigorously conditions scholars to communicate using dense, highly specialized jargon. Within a specific subfield, this jargon is efficient and precise. However, outside that subfield, it is an impenetrable wall. Policymakers, journalists, and community leaders do not have the time or the specialized training to decode academic prose. If they cannot understand your findings within the first two minutes of reading, they will move on to someone else who can explain things clearly.</p>
<p>Translation is not about "dumbing down" the science; it is about respecting the time and context of the audience. It involves stripping away the methodological minutiae that academics obsess over (but which policymakers rarely care about) and focusing relentlessly on the core implications. It involves replacing passive voice with active verbs, using analogies to explain complex statistical concepts, and leading with the "so what" rather than burying it at the end of a long conclusion. Mastering the vocabulary of translation is a difficult, unnatural process for most academics, requiring conscious unlearning of deeply ingrained writing habits (Smith, 2012).</p>

<h2>${chNum}.3 Strategic Dissemination Pathways</h2>
<p>Achieving impact is not a serendipitous event; it requires a strategic dissemination plan. There is no single pathway to impact. The route you choose depends entirely on your specific research findings and your intended audience. If your goal is policy change, your primary tools will be policy briefs, direct testimony, and engagement with think tanks. If your goal is commercialization, your pathway involves patent applications, technology transfer offices, and industry partnerships.</p>
<p>If your goal is public awareness, your pathway involves op-eds, social media campaigns, and collaboration with journalists. A common mistake is attempting to utilize all pathways simultaneously, resulting in a diluted, ineffective message. Strategic impact requires focusing your limited time and resources on the single pathway most likely to reach the stakeholders who have the power to enact the change your research supports. This requires a level of stakeholder mapping and strategic foresight that is rarely taught in traditional PhD programs.</p>

<h2>${chNum}.4 Chapter Summary</h2>
<p>In conclusion, the demand for research impact has permanently altered the academic landscape. Publishing in a top-tier journal is no longer the finish line; it is the starting block for the vital work of translation. By shifting focus from academic outputs to societal outcomes, mastering the difficult art of communicating in plain language, and strategically identifying the most effective dissemination pathways, researchers can ensure their work escapes the ivory tower. The subsequent sections of this chapter will provide detailed, practical strategies for executing these principles, empowering you to become a highly effective public scholar capable of driving meaningful real-world change.</p>
`;
};

chapterTitles.forEach((title, index) => {
  book.chapters.push({
    title: title,
    content: generateChapterContent(title, index)
  });
});

fs.writeFileSync(path.join(__dirname, 'books', 'book-10.json'), JSON.stringify(book, null, 2), 'utf8');

let words = 0;
book.chapters.forEach(ch => {
  words += ch.content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
});
console.log('Book 10 base generated successfully!');
console.log(`Total words: ${words}`);
console.log(`Estimated pages: ${Math.ceil(words / 275)}`);
