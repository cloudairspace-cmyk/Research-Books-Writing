/**
 * generate-book-09-base.js
 * Generates the base JSON for Book 9: Winning Research Funding
 * 25 chapters, target ~265 pages (~72,875 words).
 * Initial content per chapter: ~1000 words to set the foundation.
 * NO EM DASHES.
 */
const fs = require('fs');
const path = require('path');

const book = {
  id: "book-09",
  title: "Winning Research Funding",
  author: "Academic Writing Team",
  chapters: []
};

const chapterTitles = [
  "The Funding Landscape",
  "Types of Grants and Sponsors",
  "Decoding the Call for Proposals",
  "Is This Grant Right for You?",
  "The Anatomy of a Grant Proposal",
  "Writing a Compelling Specific Aims Page",
  "The Literature Review in a Grant Context",
  "Aligning Methods with Objectives",
  "Building the Project Timeline",
  "The Budget: Translating Ideas into Costs",
  "Budget Justification and Narrative",
  "Demonstrating Institutional Capacity",
  "Building the Perfect Research Team",
  "Letters of Support and Commitment",
  "Addressing Broader Impacts and Diversity",
  "Data Management and Sharing Plans",
  "The Role of the Program Officer",
  "Navigating Internal Institutional Approvals",
  "The Peer Review Process for Grants",
  "Interpreting Reviewer Feedback (Summary Statements)",
  "The Art of the Resubmission",
  "Managing the Grant Once Awarded",
  "Progress Reports and Sponsor Communication",
  "Ethics in Grant Writing and Management",
  "Sustaining a Funded Research Program"
];

const generateChapterContent = (title, index) => {
  const chNum = index + 1;
  return `
<h1>Chapter ${chNum}: ${title}</h1>
<p>Securing research funding is widely considered one of the most daunting challenges facing modern scholars. In an era of shrinking institutional budgets and increasingly competitive grant cycles, the ability to write a compelling proposal is no longer an optional skill; it is a fundamental requirement for academic survival and career advancement. This chapter explores the critical aspects of <strong>${title.toLowerCase()}</strong>, establishing the strategic foundation necessary for navigating the complex and often opaque world of research funding.</p>
<p>Many novice researchers approach grant writing as an extension of academic writing, treating the proposal as a miniature thesis or a preemptive journal article. This is a fundamental misconception. A thesis is a record of past achievements and intellectual exploration; a grant proposal is a persuasive argument about the future. It is a business plan for intellectual inquiry. The sponsor is not awarding a prize for past brilliance, but making an investment in future outcomes. Therefore, the language, structure, and rhetorical strategy of a grant proposal must differ significantly from traditional academic prose.</p>
<p>Understanding this distinction is the first step toward grant-writing success. A successful proposal must not only demonstrate methodological rigor and theoretical sophistication, but it must also convince a skeptical review panel that the problem is urgent, that the proposed team is uniquely qualified to solve it, and that the return on the sponsor's investment will be substantial. The following sections will dismantle the mechanics of this persuasive process, offering actionable strategies for elevating a proposal from merely "fundable" to highly competitive.</p>

<h2>${chNum}.1 Strategic Alignment and Sponsor Goals</h2>
<p>The most brilliant research idea will go unfunded if it does not align with the strategic goals of the sponsoring agency. Before drafting a single sentence of a proposal, researchers must engage in deep intelligence gathering. What is the historical context of the funding agency? What are their stated strategic priorities for the next five years? Who currently sits on their review panels, and what types of projects have they funded recently? Understanding the sponsor's underlying motivations is critical.</p>
<p>For example, a government health agency (like the NIH or the MRC) prioritizes research that ultimately reduces the burden of human disease; a theoretical proposal that fails to articulate a clear path to clinical or public health translation will likely be rejected. Conversely, a basic science foundation (like the NSF) prioritizes fundamental discoveries that advance the frontiers of knowledge; a highly applied proposal that lacks theoretical innovation will fail. The ethical and strategic imperative for the grant writer is to find the authentic intersection between their own research passions and the sponsor's strategic mandate.</p>
<p>This alignment must be explicit throughout the document. The proposal should use the sponsor's own vocabulary, echoing the themes and priorities highlighted in the call for proposals. This is not pandering; it is effective communication. It demonstrates to the review panel that the applicant understands the agency's mission and that funding this specific project will help the agency achieve its own strategic objectives.</p>

<h2>${chNum}.2 The Psychology of the Grant Reviewer</h2>
<p>To write an effective proposal, one must understand the environment in which it will be read. Grant reviewers are typically senior academics who are chronically overworked, chronically fatigued, and reviewing proposals on weekends or late at night. They are often reading a stack of fifteen to twenty complex, dense documents, searching for reasons to triage (reject) the weaker ones quickly so they can focus their limited time on the top contenders.</p>
<p>Given this reality, a proposal that is dense, jargon-heavy, and poorly formatted will provoke reviewer irritation, regardless of the underlying science. The successful grant writer anticipates the reviewer's cognitive load and designs the proposal to minimize it. This means using clear headings, bullet points, bold text for key concepts, and high-quality conceptual diagrams that convey complex methodologies at a glance. A tired reviewer should be able to skim the first page and immediately understand the problem, the proposed solution, and the expected impact.</p>
<p>Furthermore, reviewers are often asked to evaluate proposals that fall slightly outside their specific area of deep expertise. Therefore, the proposal must be written on two levels simultaneously: it must provide enough technical depth to satisfy the specialist reviewer, but the core argument and significance must be accessible to the intelligent generalist. Failing to strike this balance usually results in a review panel that is either confused or unimpressed.</p>

<h2>${chNum}.3 Common Pitfalls in ${title}</h2>
<p>In the context of ${title.toLowerCase()}, several recurring errors routinely sink otherwise promising proposals. The first is the "trust me" approach, where the applicant outlines an ambitious methodology but fails to provide preliminary data or cite pilot studies demonstrating that the techniques are actually feasible in their hands. Reviewers are risk-averse; they will not fund an expensive learning curve.</p>
<p>A second common pitfall is the failure to address alternative outcomes or potential methodological problems. Novice grant writers often present their research plan as a guaranteed success, ignoring the reality that science is unpredictable. Experienced reviewers look for a "Potential Pitfalls and Alternative Strategies" section. If an applicant cannot identify what might go wrong and how they will pivot if it does, the reviewers will assume the applicant lacks the necessary experience to manage a complex project.</p>
<p>Finally, proposals frequently fail due to an imbalance between ambition and feasibility. An early-career researcher proposing to cure a major disease with a two-year, $50,000 grant demonstrates a profound lack of realism. The scope of the proposed work must perfectly match the budget requested and the timeline available. A tightly focused, highly feasible project is always more competitive than a sprawling, under-resourced epic.</p>

<h2>${chNum}.4 Chapter Summary</h2>
<p>In conclusion, mastering the nuances of ${title.toLowerCase()} requires a paradigm shift from academic reporting to strategic persuasion. By deeply understanding the sponsor's strategic goals, designing the document to accommodate the exhausted reviewer, and rigorously avoiding common pitfalls related to feasibility and risk management, researchers can dramatically improve their funding success rates. Grant writing is a distinct professional skill that requires dedicated practice, resilience in the face of rejection, and an unwavering focus on clarity and impact. The subsequent sections of this chapter will provide detailed, actionable strategies for executing these principles in your own proposals.</p>
`;
};

chapterTitles.forEach((title, index) => {
  book.chapters.push({
    title: title,
    content: generateChapterContent(title, index)
  });
});

fs.writeFileSync(path.join(__dirname, 'books', 'book-09.json'), JSON.stringify(book, null, 2), 'utf8');

let words = 0;
book.chapters.forEach(ch => {
  words += ch.content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
});
console.log('Book 9 base generated successfully!');
console.log(`Total words: ${words}`);
console.log(`Estimated pages: ${Math.ceil(words / 275)}`);
