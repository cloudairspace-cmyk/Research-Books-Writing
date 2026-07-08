/**
 * expand-book-10-part34.js
 * Expands Book 10 Chapters 9-16 (Social Media, Speaking, and Industry)
 * NO EM DASHES.
 */
const fs = require('fs');
const path = require('path');
const bookPath = path.join(__dirname, 'books', 'book-10.json');
const book = JSON.parse(fs.readFileSync(bookPath, 'utf-8'));

function append(ch, html) { ch.content += html; }

// ============ CHAPTER 9: The University Press Office ============
append(book.chapters[8], `
<h2>9.5 The Press Release as a Strategic Tool</h2>
<p>The university press office (or communications department) is often underutilized by academics. Many researchers view them merely as the people who write the alumni magazine. In reality, a competent press office is a highly connected PR firm specifically dedicated to promoting your work to the mainstream media. When a significant paper is accepted for publication, the first call should be to the press officer, not to a colleague. They can help draft a press release, which is the primary mechanism for putting your research in front of hundreds of journalists simultaneously.</p>
<p>A press release is essentially a pre-written news story. It must lead with the most dramatic finding, provide context on why it matters to the general public, and include strong, pre-approved quotes from the lead researcher. If the press release is too dense or too cautious, journalists will ignore it. The researcher must collaborate actively with the press officer, allowing them to simplify the language while ensuring the core scientific truth is not distorted. This negotiation is the crux of effective media relations.</p>

<h2>9.6 Navigating Embargoes</h2>
<p>Most major scientific and medical journals operate under an embargo system. This means the journal provides the accepted paper to journalists a few days before it is officially published, allowing the journalists time to interview the authors and write their stories. However, the journalists (and the researchers) are strictly forbidden from publishing or discussing the findings publicly until the precise embargo lift time.</p>
<p>Violating an embargo is a severe professional misstep that can lead to a journal pulling a paper or barring a researcher from future publication. The press office manages this complex choreography, ensuring that the press release is distributed "under embargo" to trusted media contacts. The researcher must clear their schedule for the 48 hours preceding the embargo lift, as this is when journalists will desperately need interviews to meet their own publication deadlines.</p>
`);

// ============ CHAPTER 10: Social Media for Scholars ============
append(book.chapters[9], `
<h2>10.5 Curating a Professional Digital Identity</h2>
<p>Social media (Twitter/X, LinkedIn, ResearchGate) is no longer a frivolous distraction; it is the primary infrastructure of modern academic networking and public engagement. However, utilizing social media for impact requires treating it as a professional communication channel, not a personal diary. The researcher must carefully curate their digital identity, explicitly connecting their online persona to their specific area of expertise.</p>
<p>This involves separating the personal from the professional. A Twitter feed that alternates between rigorous critiques of economic policy and complaints about airline food dilutes the researcher's authority. The goal is to become a "node of trust" within a specific digital ecosystem. When a major news event occurs related to your field, journalists and policymakers should intuitively turn to your social media feed for expert synthesis and context. This requires consistent, high-quality, and highly focused content generation.</p>

<h2>10.6 The Art of the Academic Thread</h2>
<p>One of the most effective tools for translating dense academic papers on social media is the "thread" (a connected series of posts). When a new paper is published, merely posting a link to the paywalled journal article is ineffective; the public will not click it. Instead, the researcher should create a thread that breaks down the paper's narrative arc.</p>
<p>The first post should serve as the hook, stating the core problem and the surprising finding. Subsequent posts should explain the methodology using simple analogies, highlight the most striking data visualizations, and conclude with the policy implications. By summarizing the paper within the platform itself, the researcher removes the friction of the paywall and the dense academic prose, making the core insights immediately accessible to thousands of non-academic readers.</p>
`);

// ============ CHAPTER 11: Building a Public Brand ============
append(book.chapters[10], `
<h2>11.5 The Necessity of "Niching Down"</h2>
<p>The concept of a "personal brand" makes many academics uncomfortable, as it feels inherently commercial or egotistical. However, in the context of research impact, a brand is simply a shortcut for trust and specific expertise. You cannot be the public expert on everything. The most impactful public scholars are those who have "niched down" to become the undeniable authority on a highly specific, socially relevant intersection of topics.</p>
<p>For example, rather than branding oneself generally as a "public health expert," a researcher might brand themselves specifically as the expert on "the intersection of urban zoning laws and childhood asthma." This hyper-specificity makes the researcher highly searchable. When a journalist needs a quote on zoning regulations, they do not want a generalist; they want the specific expert. Niching down requires the discipline to decline media requests or speaking engagements that fall outside your core area, thereby protecting the integrity and focus of your public authority.</p>

<h2>11.6 Consistency and Frequency</h2>
<p>Building a public brand is not achieved through a single viral tweet or one successful Op-Ed; it is the result of relentless consistency over years. The public and the media have incredibly short memories. A researcher must consistently produce accessible content—whether through a specialized newsletter, a blog, a podcast, or regular social media commentary—to remain relevant.</p>
<p>This consistency builds a dedicated audience. When a researcher has spent three years building trust with an audience of three thousand policymakers and industry leaders via a weekly newsletter, the publication of a new, major research paper immediately reaches the exact people who have the power to implement its findings. The brand becomes the distribution network, bypassing traditional, slow academic channels entirely.</p>
`);

// ============ CHAPTER 12: Public Speaking ============
append(book.chapters[11], `
<h2>12.5 Abandoning the Academic Presentation</h2>
<p>The standard academic conference presentation—standing behind a podium, reading from a dense script, and displaying slides covered in twelve-point font and complex equations—is lethal in a public setting. A public keynote address (like a TEDx talk or an industry conference presentation) requires a fundamentally different pedagogical approach. The audience is not there to evaluate your methodology; they are there to be inspired, provoked, or educated on a high level.</p>
<p>A public presentation must be structured narratively. The speaker must establish a connection with the audience immediately, often through a relatable anecdote or a surprising counter-intuitive fact. The slides should be highly visual, utilizing powerful images and minimal text (the "less is more" principle). If a slide requires the audience to read for more than three seconds, they have stopped listening to the speaker. The visual should support the spoken word, not duplicate it.</p>

<h2>12.6 The Power of Vulnerability and Passion</h2>
<p>Academics are trained to project detached, objective authority. While necessary for scientific rigor, this detachment is incredibly boring for a public audience. The most impactful public speakers allow their passion for the subject to be visible. If the research deals with climate change, the speaker should convey the genuine urgency of the crisis. If it deals with a historical injustice, the speaker should convey appropriate moral weight.</p>
<p>Furthermore, sharing the human struggle behind the research—the failed experiments, the moments of doubt, the logistical nightmares—humanizes the scientist. It transforms the researcher from a distant, infallible authority figure into a relatable protagonist engaged in a difficult quest for truth. This emotional connection is often what makes the audience remember the data long after the presentation has ended.</p>
`);

// ============ CHAPTER 13: Data Visualization for the Public ============
append(book.chapters[12], `
<h2>13.5 The Fallacy of the "Objectively Best" Chart</h2>
<p>In academic publishing, researchers select data visualizations based on statistical rigor, favoring scatter plots with error bars, box-and-whisker plots, or complex heat maps. These charts are dense and require training to interpret. When designing visualizations for the public or policymakers, the goal is not statistical exhaustive detail; the goal is instant cognitive clarity. A chart that takes thirty seconds to decipher is a failed public communication.</p>
<p>Researchers must learn to simplify radically. This often means abandoning the "objectively best" statistical chart in favor of a simpler format (like a bar chart or a clean line graph) that immediately highlights the primary trend. It means removing chart junk—unnecessary grid lines, excessive decimals on axes, and redundant legends. The most critical element is the title. In a journal, the title is descriptive ("Figure 1: Temperature vs. Yield"). For the public, the title should state the conclusion ("Figure 1: Rising Temperatures Significantly Decrease Crop Yields"). The audience should not have to work to find the main point; it should be explicitly handed to them.</p>

<h2>13.6 Ethical Data Simplification</h2>
<p>Simplifying data for the public creates an ethical tightrope. How much nuance can be stripped away before the visualization becomes misleading? If a researcher removes the error bars to make a bar chart cleaner, are they hiding the statistical uncertainty of the finding? This tension is the core challenge of public science communication.</p>
<p>The ethical rule is that simplification must not alter the fundamental truth of the finding. If a finding is highly uncertain, the public visualization must communicate that uncertainty, perhaps through shading or explicit text, even if it makes the chart less punchy. Furthermore, public charts should always include a source link directly to the peer-reviewed paper or the raw data repository, allowing interested parties to verify the simplified graphic against the rigorous academic source.</p>
`);

// ============ CHAPTER 14: Community Engagement ============
append(book.chapters[13], `
<h2>14.5 Moving from Extraction to Collaboration</h2>
<p>Historically, academic interaction with communities (particularly marginalized communities) has been extractive: researchers enter the community, extract data through surveys or interviews, and leave to publish their papers, offering nothing in return. This model is ethically bankrupt and actively destroys the trust necessary for impactful research. True community engagement requires a paradigm shift toward collaboration and co-production.</p>
<p>Community-Based Participatory Research (CBPR) is a powerful framework that treats the community not as subjects, but as equal partners in the research process. Community leaders are involved in defining the research questions, ensuring that the study addresses issues the community actually cares about. They are involved in data collection and interpretation, providing crucial local context that the academic might miss. Finally, they co-own the data and have a decisive say in how the findings are disseminated, ensuring the research directly benefits the community it studies.</p>

<h2>14.6 Participatory Dissemination Strategies</h2>
<p>When research is co-produced, the dissemination strategy must also be co-produced. Publishing a paper in an elite sociology journal behind a $40 paywall does not help the specific urban community you studied. Impactful dissemination requires creating outputs tailored to the community's needs and literacy levels.</p>
<p>This might involve translating the executive summary into the local languages spoken in the neighborhood, hosting a town hall meeting (with free food and childcare) to present the findings directly to residents, or working with local artists to turn the data into a public mural or a community theater performance. Participatory dissemination ensures that the knowledge generated is immediately accessible and actionable for the people whose lives are most directly affected by the research.</p>
`);

// ============ CHAPTER 15: Industry Partnerships ============
append(book.chapters[14], `
<h2>15.5 Bridging the Culture Clash</h2>
<p>Translating research into industrial or commercial impact requires navigating a profound culture clash between the academy and the corporate sector. Academics prioritize theoretical rigor, comprehensive literature reviews, and long-term investigation; failure in an academic experiment is often viewed as a useful learning opportunity. Industry prioritizes speed to market, practical utility, and return on investment; failure is viewed as a financial loss.</p>
<p>To successfully partner with industry, researchers must learn to speak the language of business. An industry partner does not care about the elegance of your algorithm; they care about whether the algorithm can reduce their supply chain costs by five percent within the next two fiscal quarters. When pitching research to a corporate board, the presentation must focus entirely on the value proposition: how does this research solve a specific, expensive problem the company is currently facing? If the academic cannot articulate the commercial value, the partnership will not materialize.</p>

<h2>15.6 The Ethics of Corporate Funding</h2>
<p>Industry partnerships offer massive opportunities for scaling the impact of research, but they introduce severe ethical risks regarding conflict of interest and scientific independence. A corporate sponsor is primarily motivated by profit, not objective truth. If academic research threatens their product line or regulatory standing, the sponsor may attempt to suppress the findings or pressure the researcher to alter the conclusions.</p>
<p>Protecting research integrity requires ironclad legal agreements negotiated by the university's legal counsel before the research begins. These agreements must guarantee the researcher's absolute right to publish the findings, regardless of whether the results are favorable or unfavorable to the sponsor. They must also prohibit the sponsor from ghostwriting or editing the final manuscript. An ethical researcher must be willing to walk away from a lucrative industry partnership if the sponsor demands veto power over the publication of the data.</p>
`);

// ============ CHAPTER 16: Commercialization and IP ============
append(book.chapters[15], `
<h2>16.5 The Role of the Technology Transfer Office (TTO)</h2>
<p>When research yields a tangible product, a novel algorithm, or a new chemical compound, the pathway to impact often involves commercialization. This is an entirely different ecosystem governed by patent law and venture capital. The researcher's primary ally in this process is the university's Technology Transfer Office (TTO). The TTO is responsible for evaluating the commercial potential of a discovery, securing intellectual property (IP) protection (patents, copyrights), and negotiating licensing agreements with external companies.</p>
<p>A critical rule of commercialization is that public disclosure destroys patentability. If a researcher presents a novel engineering process at an academic conference or publishes it in a journal before filing a patent application, the invention enters the public domain, and it can never be patented. Without patent protection, no company will invest the millions of dollars required to bring the invention to market, because any competitor could simply copy it. Therefore, researchers who suspect their work has commercial value must contact their TTO before they publish or present the data.</p>

<h2>16.6 Licensing vs. Spin-offs</h2>
<p>Once a discovery is protected by a patent, there are generally two pathways to commercialization. The most common is licensing. The university (which usually owns the IP generated by its employees) licenses the technology to an existing, established company in exchange for upfront fees and ongoing royalties. The researcher receives a percentage of these royalties (as defined by university policy) and often consults for the company to help integrate the technology. This is generally a low-risk, low-effort pathway for the researcher.</p>
<p>The alternative, high-risk pathway is forming a spin-off (or spin-out) company. In this scenario, the researcher (often partnering with a business co-founder) licenses the technology from the university to their own newly formed startup. This requires the researcher to secure venture capital, hire a management team, and navigate the grueling realities of entrepreneurship. While spin-offs offer the potential for massive financial reward and direct control over the technology's development, they require a temporary or permanent departure from the traditional academic career track. It is a high-stakes pivot that requires profound strategic consideration.</p>
`);

// ===== SAVE AND VERIFY =====
fs.writeFileSync(bookPath, JSON.stringify(book, null, 2), 'utf-8');
console.log('Book 10 Part 3-4 expansion complete.');
