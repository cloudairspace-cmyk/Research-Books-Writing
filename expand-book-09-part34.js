/**
 * expand-book-09-part34.js
 * Expands Book 9 Chapters 10-17 (Budget, Team, and Institutional Support)
 * NO EM DASHES.
 */
const fs = require('fs');
const path = require('path');
const bookPath = path.join(__dirname, 'books', 'book-09.json');
const book = JSON.parse(fs.readFileSync(bookPath, 'utf-8'));

function append(ch, html) { ch.content += html; }

// ============ CHAPTER 10: The Budget ============
append(book.chapters[9], `
<h2>10.5 The Ethics of Budgeting</h2>
<p>Budgeting is not merely an administrative exercise; it is an ethical and strategic one. Novice grant writers often treat the budget as an afterthought, plugging in numbers to reach the maximum allowable limit without rigorous justification. This is a severe strategic error. Reviewers scrutinize the budget to determine if the researcher truly understands the operational realities of the proposed work. An inflated budget suggests greed or incompetence, while an artificially deflated budget suggests naivete and an inability to deliver the promised results.</p>
<p>The ethical imperative is to request exactly what is required to execute the science safely and rigorously, no more and no less. This means accurately estimating the time commitment (FTE or Full-Time Equivalent) required for each personnel member. If a researcher proposes to act as the Principal Investigator on a massive, multi-site trial but only requests five percent of their salary support, reviewers will immediately flag the project as unfeasible; five percent of a working week is insufficient to manage a major trial. The budget must be a mathematically precise reflection of the narrative methodology (Porter, 2007).</p>

<h2>10.6 Direct Costs vs. Indirect Costs (Facilities and Administrative)</h2>
<p>Understanding the distinction between direct and indirect costs is fundamental to grant administration. Direct costs are the expenses specifically required to conduct the proposed research: investigator salaries, laboratory supplies, specialized software, participant compensation, and travel to specific field sites. These are the costs that the researcher directly controls and justifies.</p>
<p>Indirect costs (also known as Facilities and Administrative or F&A costs, or overhead) are the real but unquantifiable costs the institution incurs to support the research environment. This includes electricity, library access, building maintenance, and the salaries of the compliance and grants management staff. Institutions negotiate specific F&A rates with the government. Grant writers must understand that if a grant has a $100,000 limit, they cannot spend $100,000 on direct research. If their institutional F&A rate is 50%, they must calculate the budget such that the direct costs plus the 50% overhead on those direct costs equals $100,000. Failing to account for F&A costs early in the planning process inevitably leads to severe budget shortfalls that cripple the research design.</p>
`);

// ============ CHAPTER 11: Budget Justification ============
append(book.chapters[10], `
<h2>11.5 Transforming Numbers into Narrative</h2>
<p>The budget justification (or budget narrative) is the document where the applicant explains exactly why each requested dollar is necessary. A poor budget justification simply restates the numbers in a sentence format: "We request $10,000 for supplies." This provides the reviewer with zero additional information. A strong budget justification translates the numbers back into the methodological narrative.</p>
<p>An effective justification explains the rate of consumption and the specific purpose of the expense. For example: "We request $10,000 for specialized RNA extraction kits. This is based on a requirement of 500 kits (to cover 400 patient samples plus a 25% failure/optimization buffer) at a quoted vendor price of $20 per kit. These kits are critical for executing Aim 2, as standard extraction methods do not yield sufficient RNA purity for the proposed sequencing protocol." This level of detail reassures the reviewer that the budget is grounded in empirical reality, not guesswork.</p>

<h2>11.6 Justifying Personnel and Effort</h2>
<p>Personnel costs almost always constitute the largest portion of a grant budget. Therefore, justifying personnel effort is the most heavily scrutinized part of the narrative. Researchers must clearly articulate the specific role and unique expertise of every individual listed on the budget. It is not enough to say "Dr. Smith will serve as Co-Investigator for 10% effort."</p>
<p>The justification must detail what Dr. Smith will actually do during that 10% effort: "Dr. Smith, a biostatistician with specific expertise in longitudinal mixed-effects modeling, will dedicate 10% effort (1.2 calendar months) to the project. He will be responsible for overseeing the randomization protocol in Year 1, conducting the interim data analysis at month 18, and leading the final statistical modeling for Aim 3." This explicit linkage between personnel, effort, and specific scientific aims proves to the review panel that the team is right-sized and that no one is being included merely as an "honorary" team member.</p>
`);

// ============ CHAPTER 12: Demonstrating Institutional Capacity ============
append(book.chapters[11], `
<h2>12.5 The "Facilities and Other Resources" Document</h2>
<p>Most major grant applications require a specific document detailing the institution's facilities, equipment, and intellectual environment. Novice researchers often treat this as a boilerplate document, copying and pasting generic text from their university's website about the library size or the age of the buildings. This is a missed strategic opportunity. The "Facilities and Other Resources" document is a crucial component of the persuasive argument regarding feasibility.</p>
<p>Reviewers use this document to verify that the investigator is not operating in isolation. If the proposal requires complex computational modeling, the facilities document must detail the specific supercomputing clusters available to the researcher, including processing speed, storage capacity, and the availability of dedicated IT support staff. If the research requires specialized animal housing or specific core facilities (like a flow cytometry lab), the document must explicitly confirm that the applicant has guaranteed, prioritized access to these resources. The goal is to prove that the surrounding institutional environment actively guarantees the project's success.</p>

<h2>12.6 Institutional Commitment to the Investigator</h2>
<p>Particularly for early-career researchers or large center grants, sponsors look for evidence of hard institutional commitment. Sponsors want to partner with universities, not just write blank checks. Institutional commitment demonstrates that the university believes in the researcher and is willing to share the financial risk of the project.</p>
<p>This commitment can take many forms: guaranteed protected research time (relieving the applicant of heavy teaching loads), the provision of dedicated laboratory space, seed funding for pilot data, or the commitment to hire additional support staff. A strong letter from a Department Chair or Dean outlining these specific, tangible commitments significantly strengthens the proposal. It signals to the review panel that if unforeseen challenges arise, the institution has the infrastructure and the motivation to support the investigator through the crisis.</p>
`);

// ============ CHAPTER 13: Building the Perfect Team ============
append(book.chapters[12], `
<h2>13.5 The Fallacy of the Lone Genius</h2>
<p>As noted in the discussion of the funding landscape, the era of the lone genius is largely over. Complex problems require diverse expertise. However, a common mistake is assembling a "franken-team" of prominent researchers whose expertise looks impressive on paper but who have no history of collaboration and no clear mechanism for integrating their work. Reviewers are adept at spotting teams constructed solely for the purpose of winning the grant, rather than for doing the science.</p>
<p>The perfect research team is structurally sound and intellectually synergistic. The Principal Investigator (PI) does not need to be an expert in every technique proposed, but they must be an expert in managing experts. If the proposal includes a highly specialized technique (e.g., fMRI imaging in a primarily sociological study), the team must include a Co-Investigator who is a recognized expert in fMRI. The reviewers must see a one-to-one mapping between the methodological requirements of the Aims and the specific expertise of the named personnel (Chung and Shauver, 2008).</p>

<h2>13.6 Demonstrating Collaborative Synergy</h2>
<p>To convince reviewers that a team will function effectively, the proposal must provide evidence of prior collaboration. The strongest evidence is a history of co-authored publications or previous co-funded grants. If the team is newly formed, the proposal must explicitly describe the management plan: how often will the team meet? How will data be shared across institutions? How will disagreements regarding publication authorship or intellectual property be resolved?</p>
<p>A "Multiple Principal Investigator" (Multi-PI) model is increasingly common for highly interdisciplinary projects. In this model, two or more researchers share equal authority and responsibility for the project. While this reflects the reality of modern collaborative science, it requires a mandatory, detailed "Leadership Plan" document. This plan must explicitly delineate responsibilities, financial control, and dispute resolution mechanisms. A vague Leadership Plan will sink a Multi-PI application, as reviewers will anticipate administrative chaos.</p>
`);

// ============ CHAPTER 14: Letters of Support ============
append(book.chapters[13], `
<h2>14.5 Differentiating Support from Commitment</h2>
<p>Grant proposals frequently include letters from external partners, consultants, or department heads. However, not all letters are created equal. A "Letter of Support" is generally a weak endorsement. It often reads like a generic character reference: "I think Dr. Smith's research is very interesting and important to the field." Reviewers assign almost zero value to these letters because they cost the writer nothing and provide no tangible benefit to the project.</p>
<p>What reviewers look for are "Letters of Commitment." A Letter of Commitment details a specific, tangible contribution that the writer is legally or professionally bound to provide if the grant is funded. "If Dr. Smith is funded, my laboratory commits to running 500 specific assays at a reduced cost of X, and we guarantee turnaround within two weeks." Or, "The community clinic commits to providing access to our patient registry for recruitment purposes and will provide a dedicated room for interviews." These letters prove that the necessary infrastructure and partnerships are not just hypothetical, but locked in place.</p>

<h2>14.6 The Art of Ghostwriting the Letter</h2>
<p>A common, accepted reality of grant writing is that the applicant usually drafts the letters of commitment for their partners to sign. Busy collaborators or community leaders rarely have the time to read the full grant proposal and draft a highly specific letter that hits the required strategic notes. Asking a collaborator to write a letter from scratch usually results in a generic, late, or missing document.</p>
<p>The strategic grant writer provides the collaborator with a highly polished draft. This draft should explicitly state the collaborator's role, the specific resources they are providing, and a sentence or two acknowledging their unique expertise. The collaborator can then review, edit if necessary, print it on their institutional letterhead, and sign it. This ensures that every letter in the application appendix is a powerful, specific Letter of Commitment that directly reinforces the feasibility arguments made in the main narrative.</p>
`);

// ============ CHAPTER 15: Broader Impacts and Diversity ============
append(book.chapters[14], `
<h2>15.5 Beyond the Ivory Tower: The Broader Impacts Criterion</h2>
<p>Agencies like the National Science Foundation (NSF) explicitly evaluate proposals on two primary criteria: Intellectual Merit (the quality of the science) and Broader Impacts. Broader Impacts refers to the potential of the proposed research to benefit society and contribute to the achievement of specific, desired societal outcomes. Historically, researchers treated this section as an afterthought, writing vague paragraphs about presenting at conferences or publishing in open-access journals. Today, a weak Broader Impacts section is a fatal flaw (Schimel, 2012).</p>
<p>Sponsors expect robust, innovative, and measurable plans for societal engagement. This might involve developing K-12 educational outreach programs based on the research, partnering with industry to commercialize a discovery, creating policy briefs for local government, or engaging in extensive science communication via public media. The key is that the Broader Impacts plan must be as rigorously designed and evaluated as the scientific methodology itself. It must have dedicated funding within the budget and clear metrics for success.</p>

<h2>15.6 Integrating Diversity, Equity, and Inclusion (DEI)</h2>
<p>In recent years, funding agencies worldwide have placed a massive, structural emphasis on Diversity, Equity, and Inclusion (DEI). This is not merely a political initiative; it is a recognition that diverse teams produce better, more innovative science, and that the benefits of publicly funded research must be distributed equitably across all demographics. Proposals must meaningfully address DEI on multiple levels.</p>
<p>First, regarding the research team: does the proposal actively recruit and support early-career researchers from underrepresented backgrounds? Second, regarding the research design: are the participant samples demographically representative, or do they perpetuate the historical over-reliance on wealthy, Western populations? Finally, regarding the impact: will the outcomes of the research disproportionately benefit or harm specific marginalized communities? Proposals that treat DEI as a superficial checkbox or a generic institutional statement will be severely penalized by modern review panels.</p>
`);

// ============ CHAPTER 16: Data Management and Sharing ============
append(book.chapters[15], `
<h2>16.6 The Rise of the Data Management Plan (DMP)</h2>
<p>We are in the era of Open Science. Major funders (including the NIH, NSF, and European Research Council) now mandate detailed Data Management and Sharing Plans (DMPs) as a core, scored component of the grant application. The underlying philosophy is that data generated with public funds is a public good. The days of a researcher hoarding a dataset for a decade to extract every possible publication are over. Sponsors expect data to be made FAIR: Findable, Accessible, Interoperable, and Reusable.</p>
<p>A competitive DMP must be highly technical and specific. It must detail exactly what types of data will be generated (e.g., genomic sequences, qualitative transcripts, sensor data), the specific file formats that will be used (prioritizing open-source, non-proprietary formats), and the metadata standards that will be applied to ensure the data is comprehensible to secondary users. Vague statements like "Data will be available upon request" are no longer acceptable; the DMP must name the specific, recognized digital repository where the data will be deposited upon publication.</p>

<h2>16.7 Budgeting for Open Science</h2>
<p>Open Science is not free. Preparing datasets for public release, ensuring robust de-identification of human subjects data, and paying repository archiving fees require significant resources. A common strategic error is writing a comprehensive DMP but failing to request the funds necessary to execute it. This signals to the review panel that the applicant does not truly understand the operational reality of data sharing.</p>
<p>Ethical and strategic grant writers explicitly include lines in their budget justification for "Data Management Personnel" (to cover the time required to clean and annotate datasets) and "Repository Fees." By budgeting for open science, the applicant demonstrates that they view data sharing not as an unfunded administrative burden, but as a core, integrated component of the modern scientific enterprise.</p>
`);

// ============ CHAPTER 17: The Program Officer ============
append(book.chapters[16], `
<h2>17.5 The Most Important Person You Have Never Met</h2>
<p>The Program Officer (PO), sometimes called a Program Director or Scientific Officer, is the agency staff member responsible for managing a specific portfolio of grants. They are the human face of the massive funding bureaucracy. Novice researchers often fear POs, viewing them as intimidating gatekeepers. Experienced researchers view POs as crucial allies and invaluable sources of strategic intelligence. The PO's job is not to reject grants; their job is to curate a portfolio of excellent science that advances the agency's mission. They want you to write a successful proposal.</p>
<p>A PO can provide insights that are not written in the Call for Proposals. They can tell you if your proposed methodology is currently out of favor with review panels, if your budget is unrealistically high for the current funding climate, or if your specific aims overlap too heavily with a project they just funded last month. Engaging with a PO before writing the proposal is often the difference between success and failure.</p>

<h2>17.6 The Art of the Concept Paper</h2>
<p>You should never contact a PO with a vague question like, "I want to study X, do you have any money for that?" POs are incredibly busy. The professional way to initiate contact is to send a "Concept Paper" or a "White Paper." This is a concise, one-to-two-page document outlining the core narrative arc: the specific problem, the central hypothesis, the key specific aims, and a rough estimate of the required budget.</p>
<p>Send the concept paper via email and request a brief, fifteen-minute phone call to discuss its alignment with the agency's current priorities. During the call, listen more than you speak. If the PO says the project is not a good fit for their portfolio, ask them if they can recommend a different program or a different agency. If they offer critique, incorporate it immediately. A proposal that has been shaped by the early guidance of a PO has a significantly higher chance of surviving the review process, as it has been pre-aligned with the agency's internal strategic vision.</p>
`);

// ===== SAVE AND VERIFY =====
fs.writeFileSync(bookPath, JSON.stringify(book, null, 2), 'utf-8');
console.log('Book 9 Part 3-4 expansion complete.');
