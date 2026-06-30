/**
 * enrich-book-02-final.js
 * Final massive expansion for Book 2: Adding Case Studies to all 20 chapters.
 * Goal: Push Book 2 definitively over 56k words (>200 pages).
 */
const fs = require('fs');
const path = require('path');
const bookPath = path.join(__dirname, 'books', 'book-02.json');
const book = JSON.parse(fs.readFileSync(bookPath, 'utf-8'));

function append(content, html) {
  return content + html;
}

const caseStudies = [
  // Chapter 1
  `
<h2>1.13 Case Study: The Evolution of Paradigms in Educational Research</h2>
<p>To illustrate the epistemological mapping function of the literature review, consider the shift in educational research regarding classroom discipline. Early 20th-century literature, heavily influenced by behaviorist psychology, framed discipline exclusively as a problem of behavioral reinforcement. A literature review conducted in 1960 would have synthesized studies on punitive measures, reward systems, and operant conditioning. The epistemological assumption was that student behavior was a mechanical output responding to environmental inputs.</p>
<p>However, by the late 1990s, the literature had shifted dramatically toward a constructivist and socio-cultural paradigm. A researcher conducting a review during this period would have documented the rise of "restorative justice" models. The literature began to frame discipline not as behavioral control, but as relationship building and community integration. The anomaly that forced this paradigm shift was the consistent finding that punitive measures disproportionately harmed minority students and failed to produce long-term behavioral change. A robust literature review maps this exact historical shift, explaining not just what researchers currently believe about discipline, but how and why they abandoned the previous paradigm.</p>
  `,
  // Chapter 2
  `
<h2>2.13 Case Study: The Danger of Poor Keyword Strategy</h2>
<p>A recent meta-analysis on the efficacy of "mindfulness interventions" in corporate settings provides a stark warning about poor search strategies. The initial research team searched databases using only the keyword "mindfulness." They identified 40 studies and concluded that the intervention had a moderate positive effect on employee productivity.</p>
<p>A second team, reviewing the exact same topic, utilized a vastly expanded Boolean search string: ("mindfulness" OR "meditation" OR "contemplative practice" OR "attentional training") AND ("corporate" OR "workplace" OR "employee" OR "organizational"). This rigorous search uncovered 120 studies, including many published in obscure management journals that the first team missed. When the second team synthesized this complete data set, they found that the positive effects disappeared entirely when controlling for the "Hawthorne effect" (the tendency of workers to improve simply because they are being observed). The first team's failure to translate their concepts into a comprehensive search string resulted in a statistically invalid conclusion.</p>
  `,
  // Chapter 3
  `
<h2>3.13 Case Study: Deconstructing Flawed Methodology in Published Literature</h2>
<p>In 1998, a highly influential paper was published claiming a link between a specific medical intervention and a developmental disorder in children. The abstract was terrifying, and the media amplified the claims globally. However, critical readers who looked past the abstract and examined the methodology section discovered severe flaws. The sample size consisted of only 12 participants. There was no control group. The data collection relied heavily on parental recall bias.</p>
<p>Despite these glaring methodological weaknesses, the paper remained highly cited for years because novice researchers simply read the abstract and incorporated the author's claims into their own literature reviews as established fact. It took over a decade of rigorous, large-scale epidemiological studies to definitively disprove the original paper, which was eventually retracted. This case study underscores the absolute necessity of critical reading: a literature reviewer must never cite a finding without first auditing the methodological architecture that produced it.</p>
  `,
  // Chapter 4
  `
<h2>4.11 Case Study: The Power of Thematic Synthesis</h2>
<p>A doctoral student was researching the barriers to technology adoption in rural healthcare clinics. Initially, they structured their literature review chronologically, tracing the introduction of computers in the 1980s, the internet in the 1990s, and mobile health apps in the 2010s. The resulting draft was repetitive and analytical poor; every decade showed the same problems.</p>
<p>After consulting with their supervisor, the student rebuilt their synthesis matrix and restructured the chapter thematically. The new headings became: "Infrastructural Barriers," "Financial Constraints," "Cultural Resistance among Medical Staff," and "Patient Data Privacy Concerns." Under "Cultural Resistance," the student was able to seamlessly synthesize a 1985 paper on doctors resisting desktop computers with a 2020 paper on nurses resisting AI diagnostic tools. This thematic approach proved that the underlying barrier was not the technology itself, but the disruption of established medical hierarchies, elevating the review from a historical timeline to a profound sociological critique.</p>
  `,
  // Chapter 5
  `
<h2>5.11 Case Study: Exposing Epistemological Monocultures</h2>
<p>In a comprehensive review of literature concerning international development economics, a researcher noted a disturbing trend. Over 95% of the studies evaluating the success of micro-finance loans in Southeast Asia were conducted by economists trained in Western, neo-liberal institutions. The methodology was exclusively quantitative, measuring success entirely by repayment rates and household income levels.</p>
<p>The researcher synthesized this finding not as a summary of economic data, but as a critique of an epistemological monoculture. They pointed out that this body of literature systematically ignored qualitative, sociological impacts, such as whether the pressure to repay the loans increased domestic violence or fractured community cohesion. By exposing this bias in the literature, the researcher perfectly justified their own proposed ethnographic study, demonstrating that the existing literature was not just incomplete, but epistemologically skewed.</p>
  `,
  // Chapter 6
  `
<h2>6.9 Case Study: Distinguishing a Trivial Gap from a Critical Need</h2>
<p>Consider two researchers proposing studies on remote work productivity. Researcher A conducts a literature review and notes: "Numerous studies have examined remote work productivity using self-reported surveys. However, no study has ever used a 7-point Likert scale instead of a 5-point Likert scale to measure this. My research will fill this gap." This is a trivial gap. The difference between a 5-point and 7-point scale is unlikely to yield fundamentally new theoretical insights.</p>
<p>Researcher B notes: "Current literature consistently shows remote work increases productivity. However, this entire body of literature relies on self-reported survey data, which is highly susceptible to social desirability bias (employees claiming they work harder than they do). No study has ever measured remote work productivity using objective, passive server-log data. My research will fill this methodological gap." This establishes a critical need. Researcher B is arguing that the entire foundational premise of the existing literature might be compromised by its methodology, making their proposed study essential for validating the field's core assumptions.</p>
  `,
  // Chapter 7
  `
<h2>7.9 Case Study: The Consequences of Theoretical Misalignment</h2>
<p>A master's student in sociology wanted to study how social media algorithms influence political polarization. In their literature review, they spent fifteen pages meticulously detailing "Uses and Gratifications Theory," a psychological framework explaining why individuals actively seek out specific media to fulfill their needs. However, the student's actual research methodology involved passively analyzing massive Twitter datasets using natural language processing to track the spread of extremist vocabulary.</p>
<p>During the defense, the examiners pointed out a fatal misalignment. Uses and Gratifications Theory relies entirely on understanding human motivation and active choice, but the student's methodology only measured algorithmic outcomes, completely ignoring user motivation. The data collected could not possibly test or utilize the theory outlined in the literature review. The theoretical framework had been retrofitted poorly. Had the student instead reviewed "Network Theory" or "Algorithmic Determinism," the literature would have perfectly aligned with the data collection method.</p>
  `,
  // Chapter 8
  `
<h2>8.9 Case Study: The Spectrum of Paraphrasing</h2>
<p>To understand the difference between patchwriting and true synthesis, consider the original source text: "The rapid integration of artificial intelligence into diagnostic radiology has caused significant anxiety among senior clinicians, who fear their experiential intuition will be devalued by algorithmic precision."</p>
<p><strong>Poor Paraphrasing (Patchwriting):</strong> The fast inclusion of AI in radiology has created major fear among older doctors, who worry their experience will be replaced by machine accuracy (Smith, 2023).</p>
<p><strong>Acceptable Paraphrasing:</strong> Smith (2023) notes that veteran radiologists are experiencing professional apprehension regarding the implementation of AI, primarily due to concerns that algorithmic diagnostics will render their human clinical judgment obsolete.</p>
<p><strong>Masterful Synthesis (combining with another source):</strong> The integration of clinical AI frequently triggers professional identity crises among veteran practitioners; while radiologists fear the devaluation of their experiential intuition (Smith, 2023), similar resistance has been documented among surgeons who view robotic assistance as an encroachment on their manual expertise (Jones, 2022).</p>
<p>The final example demonstrates the academic voice. The writer is no longer summarizing Smith; the writer is using Smith and Jones to build a broader argument about professional identity.</p>
  `,
  // Chapter 9
  `
<h2>9.10 Case Study: The Funnel Structure in Practice</h2>
<p>A highly successful literature review for a thesis on urban food deserts utilized the funnel structure perfectly. The first paragraph discussed the global rise of urbanization and its impact on public health (Macro level). The second section narrowed the focus to the specific concept of "food deserts" in industrialized Western nations (Meso level). The third section narrowed further, analyzing the specific literature regarding transportation infrastructure and its role in creating food deserts (Micro level).</p>
<p>Finally, the last paragraph of the review reached the pinpoint gap: "While the literature extensively documents how the lack of public transit exacerbates food deserts (Smith, 2019; Jones, 2021), there is a complete absence of empirical data on how the recent introduction of commercial ride-sharing services (e.g., Uber, Lyft) has impacted nutritional access in these specific neighborhoods." The reader feels the logical inevitability of this gap. The broad context has been systematically stripped away until only the specific, unanswered question remains.</p>
  `,
  // Chapter 10
  `
<h2>10.10 Case Study: Iterative Searching in a Scoping Review</h2>
<p>A research team set out to conduct a scoping review on "the use of virtual reality in nursing education." They developed a strict protocol and searched the medical databases (PubMed, CINAHL). Their initial search returned 45 peer-reviewed studies. However, during the screening phase, they noticed several authors referencing conference papers presented at technology, rather than medical, symposiums.</p>
<p>Realizing their initial search strategy was too disciplinarily narrow, they iteratively updated their protocol. They added engineering and computer science databases (IEEE Xplore, ACM Digital Library) to their search. This second iteration yielded an additional 60 highly relevant papers that approached the topic from a software design perspective rather than a clinical perspective. By meticulously documenting this iterative change in their methodology chapter, the team produced a vastly superior, interdisciplinary scoping review without violating the principles of transparency.</p>
  `,
  // Chapter 11
  `
<h2>11.9 Case Study: The Importance of Registering Protocols</h2>
<p>In 2018, a team of researchers decided to conduct a meta-analysis on the effectiveness of a popular dietary supplement for weight loss. They did not register a protocol on PROSPERO. During their initial analysis of the extracted data, they found that the supplement had no statistically significant effect on weight loss. However, they noticed that in a small sub-group of women over the age of 50, there was a marginal positive effect.</p>
<p>The researchers quietly changed their primary outcome measure from "overall weight loss" to "weight loss in post-menopausal women," wrote up the paper, and published it with a positive conclusion. This is known as "outcome switching" and is a severe form of scientific misconduct. Had they registered a PRISMA-P protocol in advance, publicly stating that "overall weight loss" was their primary outcome, peer reviewers would have immediately recognized the outcome switching. Protocol registration forces researchers to remain honest when the data contradicts their hopes.</p>
  `,
  // Chapter 12
  `
<h2>12.9 Case Study: Resolving Heterogeneity in Meta-Analysis</h2>
<p>A meta-analyst was investigating the effectiveness of cognitive behavioral therapy (CBT) for insomnia. They pooled data from 25 clinical trials. However, the statistical software returned an I-squared value of 85%, indicating severe, unacceptable heterogeneity. The studies were too different to be mathematically combined; doing so would produce a meaningless average.</p>
<p>Instead of abandoning the project, the researcher investigated the source of the heterogeneity. They discovered that ten of the studies were conducted in sleep clinics by trained psychologists, while the other fifteen were conducted online via automated web programs. The researcher split the data and ran two separate meta-analyses (a subgroup analysis). The clinic-based studies showed high efficacy with low heterogeneity. The online studies showed low efficacy with high heterogeneity. By investigating the statistical anomaly rather than ignoring it, the researcher produced a highly nuanced synthesis that changed clinical guidelines regarding digital therapeutics.</p>
  `,
  // Chapter 13
  `
<h2>13.9 Case Study: The Impact of an Empty Review</h2>
<p>A doctoral candidate in public health proposed a systematic review on "the psychological impact of quarantine enforcement on children in refugee camps." They spent months designing an airtight PRISMA protocol, translating search terms into Arabic and French, and combing through global databases and NGO archives. After screening 4,000 abstracts, the result was zero included studies. Not a single empirical paper met their rigorous inclusion criteria.</p>
<p>Rather than failing, the student published the "empty review" in a high-impact journal. The paper meticulously detailed the search methodology and then provided a devastating sociological analysis of why this highly vulnerable population had been entirely ignored by the scientific community. The publication of this empty review directly led to a major international grant being awarded to the student to conduct the primary research themselves. The empty review proved the absolute necessity of the grant.</p>
  `,
  // Chapter 14
  `
<h2>14.9 Case Study: Mapping Epistemic Communities</h2>
<p>While conducting a literature review on macroeconomic inflation theory, a researcher noticed a bizarre pattern in the citations. The literature was massive, but it was completely bifurcated. Authors from the "Chicago School" cited hundreds of papers, but they only ever cited other authors from the Chicago School. Authors from the "Keynesian School" did the exact same thing in reverse. The two epistemic communities were studying the exact same phenomenon but behaving as if the other community did not exist.</p>
<p>The researcher made this sociological observation the focal point of their literature review synthesis. They argued that the true gap in the literature was not a lack of data on inflation, but a lack of theoretical cross-pollination. The researcher designed their subsequent study specifically to apply a Keynesian analytical methodology to a Chicago School dataset, creating a novel synthesis that would have been impossible without first recognizing the sociological siloing of the literature.</p>
  `,
  // Chapter 15
  `
<h2>15.9 Case Study: The Pragmatics of Stopping the Search</h2>
<p>A researcher studying the history of corporate governance law found themselves trapped in a seemingly endless literature search. Because the topic spanned over a century, every legal article cited dozens of older cases and historical treatises. After three months of reading, the researcher was exhausted and had not written a single word of synthesis.</p>
<p>To escape the trap, they implemented strict methodological cut-offs. They decided to review only peer-reviewed law journal articles published after the year 2000 that specifically addressed the Sarbanes-Oxley Act. Any historical context prior to 2000 would be cited solely from three highly regarded secondary textbooks, rather than primary historical documents. By explicitly stating these boundaries in the methodology of the review, the researcher protected themselves from criticism while reducing the reading load from thousands of documents to a manageable eighty, allowing them to finally begin the critical work of writing.</p>
  `,
  // Chapter 16
  `
<h2>16.9 Case Study: Preempting Examiner Critique</h2>
<p>A student's thesis argued that universal basic income (UBI) would increase entrepreneurial activity. The student knew that the primary, devastating counter-argument in the literature was that UBI causes a reduction in workforce participation due to a lack of financial necessity. A weak researcher would have ignored this literature, hoping the examiner wouldn't bring it up.</p>
<p>Instead, the student devoted an entire section of their literature review to "The Workforce Participation Critique." They cited the strongest empirical studies proving that workforce participation drops when unconditional money is provided. Then, they synthesized this critique into their own argument: "While Smith (2018) definitively proves a drop in traditional W-2 employment, his methodology failed to categorize new business registration as 'work'. Therefore, the drop in traditional employment may actually be the exact mechanism that enables the entrepreneurial spike." By steel-manning the critique and then absorbing it into their own theory, the student neutralized the examiner's most potent weapon before the defense even began.</p>
  `,
  // Chapter 17
  `
<h2>17.9 Case Study: Visualization as an Analytical Breakthrough</h2>
<p>A researcher reviewing the literature on "sustainability in supply chains" was struggling to categorize the 300 articles they had collected. The topic was too broad. They used VOSviewer software to create a bibliometric network visualization based on the co-occurrence of keywords across the 300 abstracts.</p>
<p>The software generated a map with three distinct, color-coded clusters. The red cluster was dominated by engineering terms (emissions, logistics, optimization). The green cluster was dominated by ecological terms (biodiversity, life-cycle analysis). The blue cluster was dominated by sociological terms (fair trade, labor rights). The researcher instantly had the architectural structure for their literature review chapter. Furthermore, the map revealed that there were almost no lines connecting the engineering cluster to the sociological cluster. The researcher had found their gap: the field desperately needed studies that integrated logistical optimization with human labor rights. The visualization did the analytical heavy lifting.</p>
  `,
  // Chapter 18
  `
<h2>18.9 Case Study: The Failure of the Straw Man</h2>
<p>In a published (and heavily criticized) paper on evolutionary psychology, an author sought to advance a new theory of human mating behavior. In their literature review, they summarized the opposing "social constructivist" view by claiming: "Social constructivists believe that biology plays absolutely zero role in human behavior, and that humans are entirely blank slates written on by culture."</p>
<p>This was a massive straw man. No serious modern sociologist believes biology plays "zero" role. By attacking this cartoonish misrepresentation, the author alienated the very audience they were trying to persuade. Peer reviewers excoriated the paper, noting that the author demonstrated a profound ignorance of the literature they were attempting to critique. Had the author engaged with the strongest, most nuanced version of social constructivism, their critique would have required much more intellectual rigor, but it would have been scientifically valid.</p>
  `,
  // Chapter 19
  `
<h2>19.9 Case Study: Overcoming Imposter Syndrome through Synthesis</h2>
<p>A first-year PhD student in quantum physics was suffering from severe imposter syndrome while conducting their literature review. Every paper they read seemed to involve math they barely understood, written by Nobel laureates. They felt incapable of contributing anything original.</p>
<p>The breakthrough occurred when their supervisor forced them to stop reading and start building a synthesis matrix. As the student forced themselves to extract the specific assumptions underlying the complex math in each paper, a pattern emerged. They realized that three of the most highly cited papers all relied on a specific assumption about thermal dynamics that had recently been challenged in a completely different sub-field. The Nobel laureates weren't wrong, but their foundational assumption was outdated. The moment the student identified this systemic flaw, the imposter syndrome vanished. They realized that their job wasn't to be smarter than the established experts; their job was simply to update the framework based on new information.</p>
  `,
  // Chapter 20
  `
<h2>20.9 Case Study: The Misaligned Thesis</h2>
<p>A master's thesis in education investigated the impact of a new reading curriculum on student test scores. The literature review was a masterful, forty-page exploration of the neurological processes of reading, the history of phonics instruction, and the sociological impact of literacy on lifelong earning potential. It was beautifully written.</p>
<p>However, the methodology chapter simply detailed a pre-test/post-test analysis of fifty students using standard state examinations. The external examiner failed the thesis. The justification was simple: massive misalignment. The deeply neurological and sociological literature review had absolutely nothing to do with the basic statistical methodology employed. The student had written a literature review for a completely different study. The thesis required six months of major revisions, during which thirty pages of the literature review were deleted and replaced with literature specifically analyzing the validity of state testing metrics. Alignment is not optional; it is the structural integrity of the thesis.</p>
  `
];

for (let i = 0; i < 20; i++) {
  if (book.chapters[i]) {
    book.chapters[i].content = append(book.chapters[i].content, caseStudies[i]);
  }
}

// Check word count
let words = 0;
book.chapters.forEach(ch => {
  words += ch.content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
});
console.log('Book 2 Words:', words, 'Est Pages:', Math.ceil(words / 280));

fs.writeFileSync(bookPath, JSON.stringify(book, null, 2), 'utf-8');
console.log('Book 2 Case Studies added successfully.');
