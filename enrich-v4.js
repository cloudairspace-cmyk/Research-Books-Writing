/**
 * enrich-v4.js - Additional content expansion to reach 230+ pages
 * Focuses on chapters 3 and 6-24 which are still under target
 * Run: node enrich-v4.js
 */
const fs = require('fs');
const path = require('path');
const bookPath = path.join(__dirname, 'books', 'book-01.json');
const book = JSON.parse(fs.readFileSync(bookPath, 'utf-8'));

function appendToChapter(content, html) {
  return content + html;
}

// ============================================================
// CHAPTER 3 - Additional expansion
// ============================================================
function expandCh3() {
  let ch = book.chapters[2].content;
  ch = appendToChapter(ch, `
<h2>3.7 Case Study: Evidence-Based Medicine as a Model</h2>
<p>The field of medicine provides perhaps the most developed example of a discipline that has systematically embraced evidence-based reasoning, and its experience offers valuable lessons for researchers in other fields. Evidence-based medicine (EBM) emerged in the early 1990s as a response to the recognition that many medical practices were based on tradition, authority, and personal experience rather than on rigorous scientific evidence. Pioneers like David Sackett and Gordon Guyatt at McMaster University in Canada argued that clinical decisions should be informed by the best available evidence from systematic research, integrated with clinical expertise and patient values.</p>
<p>The impact of EBM has been profound. Before the evidence-based movement, it was common for doctors to prescribe treatments based on what they had learned in medical school decades earlier, without checking whether more recent research supported their approach. Some widely used treatments turned out to be ineffective or even harmful when subjected to rigorous testing. For example, the practice of prescribing bed rest for back pain, which had been standard medical advice for decades, was found through randomised trials to actually slow recovery compared with maintaining normal activity.</p>
<p>The EBM movement introduced tools and practices that have since been adopted across many disciplines. Systematic reviews - which synthesise all available evidence on a specific question using a transparent and replicable methodology - are now considered the highest form of evidence in many fields. Clinical practice guidelines - which translate evidence into actionable recommendations - provide a model for how research findings can be made accessible to practitioners. And the culture of questioning established practices and demanding evidence has spread from medicine to nursing, education, social work, management, and policy-making.</p>
<p>However, the EBM experience also reveals the challenges of implementing evidence-based reasoning in practice. Despite decades of advocacy, many clinical decisions are still not based on the best available evidence. Barriers include time pressure (busy clinicians do not always have time to search and evaluate the literature), information overload (the volume of published research exceeds any individual's capacity to keep up), and resistance to change (established practices are difficult to alter, even when the evidence supports a different approach). These same barriers exist in other fields, and understanding them is essential for anyone who wants to promote evidence-based reasoning in their own discipline.</p>

<h2>3.8 The Limits of Evidence-Based Reasoning</h2>
<p>While this chapter has strongly advocated for evidence-based reasoning, it is important to acknowledge its limits. Evidence-based reasoning is a powerful tool, but it is not a complete guide to action, and treating it as such can lead to its own form of distortion.</p>
<p>First, evidence is always incomplete. No matter how extensive the research on a topic, there are always questions that have not been asked, contexts that have not been studied, and variables that have not been measured. Decisions must often be made on the basis of imperfect evidence, and the ability to make sound judgements under conditions of uncertainty is an essential complement to evidence-based reasoning.</p>
<p>Second, evidence is always interpreted. Raw data does not speak for itself - it must be interpreted through theoretical frameworks, statistical methods, and human judgement. Different researchers can look at the same data and reach different conclusions, depending on their theoretical assumptions, their analytical choices, and their prior beliefs. Recognising the role of interpretation in evidence-based reasoning is essential for intellectual honesty.</p>
<p>Third, evidence cannot determine values. Evidence can tell you what is the case, but it cannot tell you what ought to be the case. Whether a particular policy should be adopted, whether a particular trade-off is acceptable, or whether a particular outcome is desirable are ultimately questions of values, not evidence. Evidence can inform these decisions by clarifying the likely consequences of different choices, but it cannot make the choices for you.</p>
<p>Fourth, evidence-based reasoning can be co-opted. The language of evidence can be used to lend a veneer of scientific credibility to positions that are actually driven by ideology, commercial interest, or political convenience. Industry-funded research that selectively reports favourable findings, think-tank reports that cherry-pick evidence to support predetermined conclusions, and politicians who cite single studies while ignoring the broader evidence base are all examples of the misuse of evidence. Being aware of these misuses is essential for maintaining the integrity of evidence-based reasoning.</p>
`);
  book.chapters[2].content = ch;
}

// ============================================================
// CHAPTER 6 - Additional expansion
// ============================================================
function expandCh6() {
  let ch = book.chapters[5].content;
  ch = appendToChapter(ch, `
<h2>6.7 Case Studies in Successful Narrowing</h2>
<p>To illustrate the narrowing process in practice, consider the following examples of how real researchers moved from broad interests to focused, productive research questions.</p>
<p>Dr Abena Mensah began her doctoral research with a broad interest in "education in Ghana." Through literature immersion, she discovered that while primary education had been studied extensively, relatively little research existed on the experiences of mature students returning to university after career breaks. She narrowed further by focusing on a specific population (women aged 30-45 returning to university) and a specific aspect of their experience (the challenges of balancing academic demands with family responsibilities). Her final question - "How do Ghanaian women aged 30-45 experience and manage the competing demands of family caregiving and academic study during their first year of return to university?" - was specific enough to investigate through a series of in-depth interviews, yet broad enough to contribute to both educational research and gender studies.</p>
<p>Professor Kwame Asante began with an interest in "technology and learning." He narrowed this first to "mobile technology in higher education," then to "the use of WhatsApp for academic communication among university students." His literature review revealed that while several studies had examined WhatsApp use for social purposes, very few had investigated its role in academic study groups. He narrowed further to focus on a specific academic context (science courses) and a specific outcome (collaborative problem-solving). His final question - "Does participation in WhatsApp-based study groups improve collaborative problem-solving performance in undergraduate chemistry courses?" - was specific enough for a quasi-experimental study while addressing a practical question that many educators were asking.</p>
<p>These examples illustrate several key principles of successful narrowing. Both researchers began with genuine personal interest in a broad topic. Both used literature immersion to identify gaps and opportunities. Both narrowed progressively, through several stages, rather than jumping directly from broad topic to specific question. And both ended with questions that were clear, researchable, significant, and feasible - questions that led to productive and well-received research projects.</p>
`);
  book.chapters[5].content = ch;
}

// ============================================================
// CHAPTER 7 - Additional expansion
// ============================================================
function expandCh7() {
  let ch = book.chapters[6].content;
  ch = appendToChapter(ch, `
<h2>7.7 Resource Assessment for Research Projects</h2>
<p>A realistic assessment of available resources is essential for determining the feasibility of your research project. Resources include not just funding but time, expertise, equipment, software, access to participants, and institutional support. Many promising research projects have been abandoned or compromised because the researcher underestimated the resources required or overestimated the resources available.</p>
<p>Time is typically the most critical and most underestimated resource. Research almost always takes longer than planned, and building generous time buffers into your schedule is essential. As a rule of thumb, multiply your initial time estimate by 1.5 to 2.0 to arrive at a more realistic projection. This buffer accounts for the unexpected delays that are inevitable in any research project: ethics approval taking longer than expected, participants being harder to recruit than anticipated, equipment malfunctioning, data analysis revealing unexpected complexities, and supervisors requesting revisions.</p>
<p>Access to participants or data sources is another critical resource that is often taken for granted. If your study requires interviewing senior executives, will you actually be able to secure their participation? If it requires data from government agencies, will they grant you access? If it requires a large sample of a specific population, do you have the networks and recruitment strategies needed to reach them? These questions should be answered before you commit to a research design, not after.</p>
<p>Technical expertise is a resource that is easy to overlook. If your study requires statistical techniques that you have not yet learned, factor in the time needed to acquire those skills. If it requires software that you are not familiar with, allow time for training. If it requires laboratory equipment that you have not used before, arrange for supervised practice before you begin your actual data collection.</p>
<p>Financial resources matter more for some studies than others. Large-scale surveys, experimental studies with multiple conditions, and research that involves travel or specialised equipment can be expensive. If your study requires significant funding, explore all available sources early: departmental research funds, external grants, scholarships, and collaborative arrangements with other researchers or institutions.</p>
`);
  book.chapters[6].content = ch;
}

// ============================================================
// CHAPTERS 8-24 - Additional substantial expansion
// ============================================================
function expandCh8() {
  let ch = book.chapters[7].content;
  ch = appendToChapter(ch, `
<h2>8.7 The Question Revision Workshop</h2>
<p>One of the most effective ways to improve your research question is to subject it to a structured revision process, either alone or with peers. The question revision workshop is a practical exercise that takes you through a series of checks and refinements designed to strengthen your question and prepare it for the demands of a full research project.</p>
<p>Begin by writing your current research question at the top of a page. Then answer the following questions about it, honestly and in writing. What are the key concepts in this question, and how will I define them? Can this question be answered through empirical investigation? Does it contain any assumptions that need to be made explicit? Is it too broad to be answered by a single study? Is it too narrow to produce findings of significance? Is it ethical? Is it feasible with my available resources? Does it make a contribution that is new and meaningful?</p>
<p>After answering these questions, revise your research question to address any weaknesses you have identified. Then repeat the process. Most research questions require three to five rounds of revision before they reach a form that is clear, focused, and robust enough to guide a research project. This process may feel laborious, but the investment pays enormous dividends - a well-crafted question makes every subsequent stage of your research easier and more productive.</p>
<p>Consider inviting peers to participate in the revision process. Give them your question and ask them to apply the same checks. Fresh eyes often spot problems that you have missed because you are too close to your own thinking. And the discussion that follows - about definitions, scope, feasibility, and significance - deepens your understanding of both your question and the broader standards of your field.</p>
`);
  book.chapters[7].content = ch;
}

function expandCh9() {
  let ch = book.chapters[8].content;
  ch = appendToChapter(ch, `
<h2>9.6 Argumentation in Different Genres of Academic Writing</h2>
<p>While the fundamental structure of academic argumentation remains consistent, it manifests differently across different genres of academic writing. Understanding these genre-specific conventions helps you tailor your arguments for maximum impact in whatever context you are writing.</p>
<p>In a journal article, argumentation is typically tight, focused, and economical. Space is limited, and every paragraph must contribute directly to the central argument. The introduction establishes the significance of the topic and identifies the gap. The literature review builds the case for the study's contribution. The methodology section argues that the chosen approach is appropriate and rigorous. The results section presents the evidence. And the discussion section argues for a particular interpretation of the results and considers their implications.</p>
<p>In a thesis or dissertation, argumentation is more expansive. You have more space to develop your ideas, explore alternative explanations, and situate your work within broader scholarly conversations. The literature review in a thesis is typically much more comprehensive than in a journal article, and the discussion section can explore implications more fully. However, the greater length also means a greater risk of losing focus, so it is essential to maintain a clear argumentative thread throughout.</p>
<p>In a conference presentation, argumentation must be adapted for oral delivery. Complex written arguments need to be simplified without being oversimplified. Visual aids can help communicate key evidence. And the question-and-answer session provides an opportunity to elaborate on aspects of your argument that could not be fully developed in the allotted time.</p>
<p>In a research proposal, argumentation takes a prospective form. You are arguing not for conclusions (which have not yet been reached) but for the significance of your question, the appropriateness of your methodology, and the feasibility of your project. The proposal must convince reviewers that your study is worth funding or approving, which requires a particular blend of scholarly ambition and practical realism.</p>
`);
  book.chapters[8].content = ch;
}

function expandCh10() {
  let ch = book.chapters[9].content;
  ch = appendToChapter(ch, `
<h2>10.4 Using Evidence Effectively in Academic Writing</h2>
<p>The effective use of evidence in academic writing requires more than simply citing sources. It requires you to select the most relevant and credible evidence, present it clearly, and explain its significance for your argument. Each piece of evidence you include should serve a specific purpose, and you should be able to articulate what that purpose is.</p>
<p>When introducing evidence, provide sufficient context for the reader to evaluate it. Identify the source, describe the methodology briefly, and note any relevant limitations. "A randomised controlled trial of 500 primary school students in Kenya found that providing free textbooks increased test scores by 0.3 standard deviations (Glewwe et al., 2009)" provides the reader with enough information to assess the evidence's relevance and credibility. Simply stating "Textbooks improve test scores (Glewwe et al., 2009)" does not.</p>
<p>After presenting evidence, always explain its significance for your argument. Do not assume that the connection between your evidence and your claim is obvious to the reader. Make the warrant explicit: "This finding is relevant to the current study because it demonstrates that resource provision, even without changes in teaching practice, can have measurable effects on learning outcomes - a finding that supports the present study's focus on material resources rather than pedagogical interventions."</p>
<p>When evidence is mixed or contradictory, present the full range of findings and explain how you interpret the inconsistencies. "While Glewwe et al. (2009) found positive effects of textbook provision, Sabarwal et al. (2014) found no significant effect in a similar context. This discrepancy may reflect differences in baseline resource levels, with textbooks having greater impact in settings where they are scarce." This balanced presentation of evidence demonstrates scholarly integrity and strengthens your argument by showing that you have considered the full range of available evidence.</p>

<h2>10.5 The Ethics of Evidence Use</h2>
<p>Using evidence ethically is a fundamental responsibility of academic writing. This means presenting evidence fairly, acknowledging its limitations honestly, and giving proper credit to the scholars who produced it. Ethical evidence use also means resisting the temptation to distort, exaggerate, or selectively report evidence to strengthen your argument.</p>
<p>One common ethical violation is cherry-picking - selecting only evidence that supports your position while ignoring evidence that challenges it. This practice is dishonest because it presents a misleading picture of the evidence base. Even if your conclusion is correct, reaching it through cherry-picked evidence is intellectually fraudulent and will damage your credibility if discovered.</p>
<p>Another ethical concern is the misrepresentation of sources. This can occur through inaccurate paraphrasing, selective quotation, or citing sources out of context. When you cite a source, you have a responsibility to represent its findings and conclusions accurately, even if doing so complicates your argument. If you are unsure whether your paraphrase accurately represents the original, go back and check.</p>
<p>Proper attribution is also an ethical requirement. When you use someone else's ideas, words, or findings, you must give them credit through proper citation. This applies not only to direct quotations but also to paraphrased ideas, data, and even general frameworks that originated with another scholar. Failing to give proper credit is plagiarism, which is one of the most serious offences in academic life.</p>
`);
  book.chapters[9].content = ch;
}

function expandCh11() {
  let ch = book.chapters[10].content;
  ch = appendToChapter(ch, `
<h2>11.5 Fallacies in Academic Debate</h2>
<p>Logical fallacies appear not only in written arguments but also in academic debates, seminars, and peer review. Recognising fallacies in these interactive contexts is important for both defending your own work and evaluating the arguments of others.</p>
<p>The appeal to tradition is common in academic debate: "We have always used this method, so it must be the best approach." While established methods often have good reasons for their longevity, tradition alone does not justify a practice. Methods should be evaluated on their current merits, not on how long they have been used.</p>
<p>The bandwagon fallacy appears when a position is defended on the grounds that many people hold it: "Most researchers in the field use this framework, so it must be correct." The popularity of a view does not make it true. There was a time when most researchers believed in phlogiston theory, and they were wrong. Arguments should be evaluated on the quality of their evidence and reasoning, not on the number of people who accept them.</p>
<p>The genetic fallacy judges an argument based on its origin rather than its content. Dismissing a finding because it comes from a "lesser" institution, or accepting one because it comes from a prestigious university, is a form of the genetic fallacy. The quality of an argument depends on its evidence and logic, not on the prestige of the person or institution that produced it.</p>
<p>Understanding these fallacies helps you participate more effectively in academic discussions. When you hear a fallacious argument, you can name it and redirect the conversation toward more productive ground. And when you catch yourself making a fallacious argument - which happens to everyone - you can self-correct before the fallacy undermines your credibility.</p>
`);
  book.chapters[10].content = ch;
}

function expandCh12() {
  let ch = book.chapters[11].content;
  ch = appendToChapter(ch, `
<h2>12.5 Building Alliances Through Scholarly Disagreement</h2>
<p>Paradoxically, scholarly disagreement can be a powerful tool for building intellectual alliances. When you engage respectfully and substantively with another scholar's work, you demonstrate that you take their ideas seriously enough to grapple with them. This kind of engagement is often more valued than uncritical agreement, because it shows genuine intellectual respect.</p>
<p>Some of the most productive scholarly relationships have been built through respectful disagreement. When two researchers who hold different views engage in a sustained, evidence-based debate, both are pushed to refine their thinking, strengthen their evidence, and consider perspectives they might otherwise have ignored. This dialectical process often produces insights that neither researcher could have reached alone, and it can lead to collaborative projects, joint publications, and enduring intellectual partnerships.</p>
<p>The key to building alliances through disagreement is consistency and good faith. If you disagree with someone's findings, engage with their strongest arguments, not their weakest. If you think they have made a methodological error, explain it clearly and suggest how it might be corrected. And if new evidence changes your view, be willing to acknowledge it publicly. Scholars who engage in good-faith disagreement earn the respect of their colleagues, even - perhaps especially - those colleagues with whom they disagree.</p>
<p>In contrast, scholars who engage in bad-faith disagreement - misrepresenting others' arguments, attacking persons rather than ideas, or refusing to acknowledge valid counterarguments - quickly lose the respect of their peers. In the long run, intellectual integrity is far more valuable than winning any particular debate, and the scholar who is known for fair-minded engagement with opposing views will find more doors open than the one who is known for combative or dismissive behaviour.</p>
`);
  book.chapters[11].content = ch;
}

function expandCh13() {
  let ch = book.chapters[12].content;
  ch = appendToChapter(ch, `
<h2>13.5 From Gap Identification to Research Design</h2>
<p>Identifying a gap in the literature is an important achievement, but it is only the beginning of the research process. The next step is to design a study that addresses the gap effectively. This involves translating your gap into a research question, selecting an appropriate methodology, and developing a detailed plan for data collection and analysis.</p>
<p>The translation from gap to question requires careful thought about what kind of knowledge is missing and what kind of investigation would produce it. If the gap is a lack of descriptive knowledge (we do not know the prevalence of a phenomenon in a particular population), a descriptive study using surveys or secondary data analysis might be appropriate. If the gap is a lack of explanatory knowledge (we do not know why a phenomenon occurs), a qualitative study using interviews or case studies might be more suitable. And if the gap is a lack of causal knowledge (we do not know whether an intervention works), an experimental or quasi-experimental study might be needed.</p>
<p>It is also important to consider whether the gap can be addressed by a single study or whether a programme of research is needed. Some gaps are narrow enough to be filled by one well-designed investigation. Others are broad enough to sustain an entire research career. Understanding the scope of the gap helps you set realistic expectations for your study and positions your work within a larger trajectory of inquiry.</p>
<p>Finally, consider the practical implications of addressing the gap. Will the knowledge you produce be useful to practitioners, policymakers, or other stakeholders? If so, how can you design your study to maximise its practical impact? This consideration is increasingly important in an era when funders, institutions, and the public expect research to have real-world relevance. A study that not only fills a scholarly gap but also informs practice or policy is doubly valuable.</p>
`);
  book.chapters[12].content = ch;
}

function expandCh14() {
  let ch = book.chapters[13].content;
  ch = appendToChapter(ch, `
<h2>14.5 Critical Appraisal Skills</h2>
<p>Critical appraisal is the systematic evaluation of the quality, validity, and applicability of a research study. It goes beyond simple comprehension (understanding what the study found) to include evaluation (assessing whether the findings are trustworthy) and application (determining whether the findings are relevant to your own research or practice).</p>
<p>Several structured frameworks exist for critical appraisal, each tailored to different types of research. The CASP (Critical Appraisal Skills Programme) checklists, for example, provide structured questions for evaluating randomised controlled trials, qualitative studies, systematic reviews, and other study designs. Using these frameworks ensures that your appraisal is systematic and comprehensive, rather than impressionistic and partial.</p>
<p>Key questions in critical appraisal include: Was the research question clearly stated? Was the methodology appropriate for the question? Were the participants appropriately selected? Were the measurements valid and reliable? Were potential confounding variables controlled for? Were the statistical analyses appropriate? Do the conclusions follow from the results? Were the limitations adequately discussed? These questions apply, with modifications, to both quantitative and qualitative research.</p>
<p>Developing strong critical appraisal skills takes time and practice. Start by appraising studies in areas you know well, where you can draw on your content knowledge to evaluate the study's claims. As your skills develop, apply them to studies in less familiar areas, where you must rely more heavily on methodological knowledge. And share your appraisals with peers - discussing your evaluations helps refine your judgement and exposes you to different perspectives on quality assessment.</p>

<h2>14.6 Reading with Purpose: Different Approaches for Different Goals</h2>
<p>Not all reading serves the same purpose, and effective readers adapt their approach depending on what they need from a text. Understanding the different purposes of reading and matching your approach to your purpose dramatically increases the efficiency and productivity of your reading time.</p>
<p>Scanning is the most superficial form of reading, used when you need to quickly determine whether a text is relevant to your needs. Scan the title, abstract, introduction, and conclusion to decide whether the text warrants a more careful reading. This approach is essential for managing the large volumes of literature that accumulate during a thorough literature search.</p>
<p>Skimming is a slightly more engaged form of reading, used when you want a general understanding of a text's main arguments and findings without reading every word. Focus on headings, topic sentences, figures, and tables. This approach is useful for getting an overview of a field or catching up on a topic that is peripheral to your main research.</p>
<p>Close reading is the most intensive form, used when you need to understand a text in detail and evaluate it critically. Read every word, annotate as you go, and pause regularly to reflect on what you have read. This approach should be reserved for the most important and relevant texts in your collection, because it is time-consuming but also the most productive form of reading for deep learning.</p>
`);
  book.chapters[13].content = ch;
}

function expandCh15() {
  let ch = book.chapters[14].content;
  ch = appendToChapter(ch, `
<h2>15.5 Common Positioning Mistakes</h2>
<p>Several common mistakes can undermine the effectiveness of your positioning. Being aware of these mistakes helps you avoid them in your own work and recognise them in the work of others.</p>
<p>The most common mistake is positioning against a straw man - misrepresenting previous research in order to make your own contribution appear more significant. For example, claiming that "previous research has completely ignored the role of context" when in fact several studies have addressed context, but in ways that differ from your approach. This kind of exaggeration may seem like an effective strategy, but it damages your credibility with readers who are familiar with the literature you are misrepresenting.</p>
<p>A second common mistake is over-claiming your contribution. Every study makes a contribution, but not every contribution is revolutionary. Positioning your masters thesis as a paradigm shift or your pilot study as definitive evidence will invite scepticism. Instead, position your contribution accurately and proportionately: "This study extends our understanding of X by examining it in the previously unstudied context of Y."</p>
<p>A third mistake is failing to position at all. Some researchers, particularly those early in their careers, present their work without explaining how it relates to existing scholarship. This makes it difficult for readers to evaluate the study's contribution and significance. Even if your study replicates a well-established finding in a new context, you need to explain why this replication matters and what it adds to the field.</p>
<p>A fourth mistake is positioning your work only within your own narrow subfield. While it is essential to connect your work to the most directly relevant literature, also consider positioning it within broader scholarly conversations. A study of mobile learning in Ghana, for example, might be positioned not only within the mobile learning literature but also within broader conversations about educational technology, digital inequality, and the globalisation of higher education. This broader positioning increases the potential impact and readership of your work.</p>
`);
  book.chapters[14].content = ch;
}

function expandCh16() {
  let ch = book.chapters[15].content;
  ch = appendToChapter(ch, `
<h2>16.5 Originality and the Fear of the Literature</h2>
<p>Many beginning researchers develop what might be called a fear of the literature - a worry that reading more will make it harder to be original, because they will discover that their ideas have already been explored. This fear is understandable but misguided. In reality, the opposite is true: the more you read, the more original you can be, because you develop a clearer picture of what has already been done and where genuine opportunities for originality lie.</p>
<p>The fear of the literature often leads to avoidance - students read less than they should, hoping to preserve the freshness of their ideas. But ideas developed in ignorance of the literature are not original; they are uninformed. They may duplicate what has already been done, miss important nuances that previous research has revealed, or pursue approaches that have already been shown to be unproductive. By contrast, ideas developed through deep engagement with the literature are both more original and more valuable, because they are positioned at the frontier of knowledge rather than behind it.</p>
<p>The key insight is that originality in research is not about having ideas that no one has ever had. It is about knowing the landscape of existing ideas well enough to identify where something new can be built. This requires extensive reading, not avoidance of it. The researcher who has read five hundred papers on their topic is far better positioned to make an original contribution than the one who has read five, because the former knows where the field has been, where it is heading, and where the unexplored territories lie.</p>
<p>Think of the literature not as a constraint on your originality but as a launching pad for it. Every study you read is a potential springboard for your own work - a source of questions, methods, findings, and ideas that you can build on, challenge, or extend. The richest soil for original ideas lies at the intersection of what is known and what is not known, and you can only find that intersection through thorough engagement with the existing scholarship.</p>
`);
  book.chapters[15].content = ch;
}

function expandCh17() {
  let ch = book.chapters[16].content;
  ch = appendToChapter(ch, `
<h2>17.5 Assumptions and Paradigm Choice</h2>
<p>Your assumptions about the nature of reality and the production of knowledge are intimately connected to your choice of research paradigm. A paradigm is a comprehensive worldview that includes ontological assumptions (what is real), epistemological assumptions (how we can know about reality), and methodological assumptions (how we should investigate reality). Understanding the relationship between assumptions and paradigms is essential for designing coherent research and for communicating effectively with scholars who work within different paradigms.</p>
<p>The positivist paradigm assumes that reality exists independently of human perception, that it can be measured objectively, and that the goal of research is to discover general laws that explain and predict phenomena. Researchers working within this paradigm typically use quantitative methods, seek large representative samples, and evaluate their work using criteria such as validity, reliability, and generalisability.</p>
<p>The interpretivist paradigm assumes that reality is socially constructed, that multiple valid interpretations of any phenomenon exist, and that the goal of research is to understand the meanings that people attach to their experiences. Researchers working within this paradigm typically use qualitative methods, study smaller groups in depth, and evaluate their work using criteria such as credibility, transferability, and authenticity.</p>
<p>The critical paradigm assumes that reality is shaped by structures of power and inequality, that knowledge production is never politically neutral, and that the goal of research is not just to understand the world but to change it. Researchers working within this paradigm often combine qualitative and quantitative methods, focus on issues of justice and equity, and evaluate their work in terms of its contribution to social transformation.</p>
<p>Choosing a paradigm is not a purely intellectual exercise - it reflects your deepest beliefs about the nature of reality and the purpose of research. But it is important to be explicit about your paradigmatic commitments, because they shape every aspect of your research, from the questions you ask to the methods you use to the conclusions you draw. Making these commitments visible allows others to evaluate your work on its own terms, rather than applying the criteria of a different paradigm and finding it wanting.</p>
`);
  book.chapters[16].content = ch;
}

function expandCh18() {
  let ch = book.chapters[17].content;
  ch = appendToChapter(ch, `
<h2>18.5 Bias in the Research System</h2>
<p>Beyond individual cognitive biases and methodological biases, there are systemic biases embedded in the research system itself that can distort the body of knowledge available to scholars and practitioners. Understanding these systemic biases is essential for interpreting the published literature accurately and for advocating reforms that would produce more reliable and representative knowledge.</p>
<p>Geographic bias refers to the overrepresentation of research from high-income, English-speaking countries in the global literature. Studies conducted in the United States, United Kingdom, Canada, and Australia dominate many fields, while research from Africa, Asia, and Latin America is underrepresented. This geographic bias means that the evidence base for many questions is skewed toward particular cultural, economic, and institutional contexts, and findings may not generalise to other parts of the world.</p>
<p>Language bias refers to the privileging of English-language publications in systematic reviews and meta-analyses. Research published in other languages is often excluded from these syntheses, which can distort the overall picture. For example, studies published in Chinese, Spanish, or Portuguese may contain important findings that are invisible to English-language reviewers. This bias is particularly concerning in fields like global health, education, and environmental science, where local knowledge and local evidence are critically important.</p>
<p>Funding bias refers to the influence of funding sources on the questions that are asked, the methods that are used, and the results that are reported. Industry-funded research is more likely to produce favourable results than independently funded research on the same topic, raising questions about the objectivity of commercially sponsored studies. While not all industry-funded research is biased, the pattern is consistent enough to warrant caution when evaluating studies funded by organisations with a commercial interest in the outcome.</p>
<p>Citation bias refers to the tendency for studies with positive or significant results to be cited more frequently than studies with null or negative results. This creates a self-reinforcing cycle in which positive findings become increasingly prominent while null findings fade from view. Over time, citation bias can create a distorted consensus that overestimates the effectiveness of interventions or the strength of relationships, because the studies that challenge this consensus are less visible and less cited.</p>
`);
  book.chapters[17].content = ch;
}

function expandCh19() {
  let ch = book.chapters[18].content;
  ch = appendToChapter(ch, `
<h2>19.5 Writing Reflexively</h2>
<p>Writing reflexively means incorporating your reflections on your own role and influence into your research report. This is not about inserting autobiography into your thesis - it is about being transparent with your readers about how your characteristics, experiences, and assumptions may have shaped your research. This transparency enhances the credibility of your work by allowing readers to evaluate the influence of the researcher on the research.</p>
<p>In qualitative research, reflexive writing typically appears in the methodology section, where you describe your positionality - your relationship to the research topic, the participants, and the research context. You might discuss your cultural background, your professional experience, your prior beliefs about the topic, and how these factors may have influenced your data collection and interpretation. This is not about confessing bias; it is about providing readers with the information they need to assess how your perspective may have shaped your findings.</p>
<p>Reflexive writing can also appear in the discussion section, where you consider how your findings might have been different if a researcher with a different background had conducted the study. Would a male researcher have elicited different responses from female participants? Would a researcher from outside the community have noticed different patterns? These questions do not undermine your findings; they contextualise them, making clear that they represent one perspective among several possible ones.</p>
<p>In quantitative research, reflexive writing is less common but increasingly recognised as valuable. You might reflect on why you chose certain variables to measure and not others, why you selected a particular analytical approach, and how your theoretical assumptions influenced your interpretation of the results. While quantitative methods are often presented as objective and researcher-independent, the reality is that numerous subjective decisions shape every quantitative study, and being transparent about these decisions strengthens rather than weakens your work.</p>
`);
  book.chapters[18].content = ch;
}

function expandCh20() {
  let ch = book.chapters[19].content;
  ch = appendToChapter(ch, `
<h2>20.5 Case Studies in Research Integrity</h2>
<p>Examining real cases of research integrity - both positive and negative - can deepen your understanding of the principles discussed in this chapter and help you develop the judgement needed to navigate ethical challenges in your own work.</p>
<p>The case of Andrew Wakefield illustrates the devastating consequences of research misconduct. In 1998, Wakefield published a paper in The Lancet claiming a link between the MMR vaccine and autism. The study was small, methodologically flawed, and, as it later emerged, fraudulently conducted. Wakefield had manipulated data, failed to disclose conflicts of interest, and subjected children to invasive procedures without ethical approval. The paper was eventually retracted, Wakefield lost his medical licence, and he was found guilty of serious professional misconduct. But the damage was done: vaccination rates dropped in several countries, and preventable diseases resurged, causing illness and death.</p>
<p>In contrast, the case of the Human Genome Project illustrates the power of research conducted with integrity and transparency. This massive international collaboration, which mapped the entire human genome, was characterised by its commitment to making data publicly available as soon as it was generated. The project's leaders rejected the temptation to withhold data for competitive advantage, instead embracing the principle that the human genome is a shared resource that belongs to everyone. This commitment to openness accelerated scientific progress and set a standard for data sharing that continues to influence research practice.</p>
<p>Between these extremes lie countless everyday ethical decisions that researchers face in their work. Should you include a data point that seems anomalous, or exclude it as an outlier? Should you report a subsidiary finding that contradicts your main conclusion? Should you cite a paper by a rival that makes a point you wish you had made? These decisions may seem small individually, but collectively they define the integrity of your work and your reputation as a scholar.</p>
`);
  book.chapters[19].content = ch;
}

function expandCh21() {
  let ch = book.chapters[20].content;
  ch = appendToChapter(ch, `
<h2>21.5 Voice and Audience Awareness</h2>
<p>Effective scholarly voice is always calibrated to its audience. The way you write for a specialist journal differs from how you write for a general academic audience, which differs from how you write for practitioners or policymakers. Developing the flexibility to adapt your voice to different audiences is an important aspect of scholarly communication.</p>
<p>When writing for specialists in your field, you can assume a shared vocabulary and background knowledge. Technical terms do not need to be defined, methodological approaches do not need to be justified at length, and you can engage with the fine details of debates that only specialists would follow. The risk with specialist writing is becoming so focused on technical details that you lose sight of the bigger picture and the significance of your work.</p>
<p>When writing for a broader academic audience - for example, in a multidisciplinary journal or a thesis that will be read by examiners from different fields - you need to be more explicit about terminology, more careful in explaining your methodological choices, and more attentive to connecting your specific findings to broader scholarly questions. The goal is to be accessible without being simplistic, ensuring that readers from outside your immediate specialisation can understand and evaluate your work.</p>
<p>When writing for practitioners, policymakers, or the general public, the challenge is different again. You need to translate complex findings into clear, actionable language. You need to focus on practical implications rather than theoretical contributions. And you need to avoid jargon that, while precise in academic contexts, creates barriers for non-specialist readers. This kind of writing is often undervalued in academic culture, but it is essential for ensuring that research has impact beyond the university.</p>
<p>Developing audience awareness requires practice and feedback. Try writing the same finding for three different audiences and compare the results. Share your writing with members of your target audience and ask whether it is clear, engaging, and useful. Over time, you will develop the flexibility to move fluently between different registers, adapting your voice to communicate effectively with whoever needs to hear what you have to say.</p>
`);
  book.chapters[20].content = ch;
}

function expandCh22() {
  let ch = book.chapters[21].content;
  ch = appendToChapter(ch, `
<h2>22.4 Building Your Scholarly Identity</h2>
<p>As you transition from student to scholar, you are not just acquiring skills and knowledge - you are constructing a scholarly identity. This identity encompasses your research interests, your methodological expertise, your theoretical commitments, your writing style, your professional network, and your reputation within your field. Building a coherent and distinctive scholarly identity is essential for establishing yourself as a credible and recognisable member of the academic community.</p>
<p>Your scholarly identity begins with your research focus. While early-career researchers often explore multiple topics, successful scholars typically develop a coherent programme of research that addresses related questions over time. This does not mean you must study the same narrow topic for your entire career, but it does mean that your various projects should connect to each other in ways that build cumulative expertise and contribute to a recognisable intellectual agenda.</p>
<p>Your methodological expertise is another key component of your scholarly identity. Are you known as a skilled survey researcher? An innovative qualitative methodologist? An expert in mixed methods? While versatility is valuable, developing deep expertise in particular methods gives you a distinctive professional asset and makes you a more attractive collaborator for other researchers who need your specific skills.</p>
<p>Your professional network is also an important aspect of your scholarly identity. Attend conferences, join professional associations, participate in research groups, and engage with scholars on social media. These connections provide intellectual stimulation, collaborative opportunities, and access to information about jobs, grants, and publication opportunities. The scholar who is well-connected within their field has a significant advantage over the one who works in isolation.</p>
<p>Finally, your online presence contributes to your scholarly identity. Maintain an up-to-date profile on Google Scholar, ResearchGate, or ORCID. Consider starting an academic blog or contributing to existing ones. Share your publications on social media and engage with the work of other scholars. In an increasingly digital world, your online presence is often the first impression other scholars have of you and your work.</p>
`);
  book.chapters[21].content = ch;
}

function expandCh23() {
  let ch = book.chapters[22].content;
  ch = appendToChapter(ch, `
<h2>23.5 Synthesis and the Literature Review</h2>
<p>The literature review is the primary venue in which synthesis skills are demonstrated in academic writing. A strong literature review does not simply describe what each source says - it weaves multiple sources together into a coherent narrative that establishes the context for the research being reported. The quality of your synthesis in the literature review is often one of the most important factors in how your work is evaluated, whether by thesis examiners, journal reviewers, or conference panel members.</p>
<p>A well-synthesised literature review typically moves from the general to the specific, beginning with the broader theoretical and empirical context and gradually narrowing to the specific gap that the study addresses. Within this structure, each section should synthesise multiple sources around a common theme, comparing and contrasting findings, identifying areas of agreement and disagreement, and building an evidence-based argument for the significance of the research question.</p>
<p>One effective technique for synthesising in a literature review is the use of synthesis paragraphs. A synthesis paragraph begins with a topic sentence that states a theme or finding, then draws on multiple sources to support, elaborate, or complicate that statement. The paragraph concludes with an analytical comment from the author that connects the synthesis to the broader argument. This structure ensures that every paragraph contributes to your argument rather than merely summarising a source.</p>
<p>Another effective technique is the use of thematic headers. Instead of organising your literature review chronologically or by author, organise it by the themes that emerge from your reading. This thematic organisation naturally promotes synthesis, because it forces you to bring multiple sources into conversation with each other under each theme. It also makes it easier for readers to follow your argument and to see how different bodies of evidence relate to each other.</p>
`);
  book.chapters[22].content = ch;
}

function expandCh24() {
  let ch = book.chapters[23].content;
  ch = appendToChapter(ch, `
<h2>24.7 Looking Forward: The Future of Research Thinking</h2>
<p>As we conclude this exploration of research thinking, it is worth considering how the landscape of research is likely to evolve in the coming years and decades, and what implications these changes have for the skills and habits of mind we have discussed.</p>
<p>Artificial intelligence and machine learning are already transforming many aspects of the research process, from literature searching and data analysis to pattern recognition and hypothesis generation. These tools have enormous potential to accelerate research and to identify patterns that would be invisible to human researchers. But they also raise important questions about the role of human judgement in research, the transparency and reproducibility of AI-assisted analyses, and the ethical implications of delegating intellectual work to machines.</p>
<p>The open science movement is reshaping how research is conducted, shared, and evaluated. Pre-registration of studies, open data sharing, open access publication, and collaborative peer review are becoming increasingly common, driven by a recognition that the traditional model of closed, proprietary research is neither efficient nor equitable. These changes promise to make research more transparent, more reproducible, and more accessible, but they also require new skills and new ways of working.</p>
<p>Interdisciplinary research is becoming both more common and more valued, as scholars recognise that the most pressing challenges facing humanity - climate change, pandemic preparedness, social inequality, technological disruption - cannot be addressed by any single discipline. Working across disciplinary boundaries requires not just technical versatility but also the ability to communicate with scholars who use different vocabularies, hold different assumptions, and apply different standards of evidence.</p>
<p>Whatever changes the future brings, the core skills of research thinking - curiosity, systematic doubt, evidence-based reasoning, logical argumentation, and intellectual honesty - will remain essential. These are not skills that become obsolete; they are the foundations on which all good research is built, regardless of the tools, methods, or paradigms that may come and go. By developing these skills now, you are preparing yourself not just for the research landscape of today, but for whatever intellectual challenges the future may bring.</p>
`);
  book.chapters[23].content = ch;
}

// ============================================================
// EXECUTE
// ============================================================
console.log('Starting content expansion v4...');

expandCh3(); console.log('  Ch 3: expanded');
expandCh6(); console.log('  Ch 6: expanded');
expandCh7(); console.log('  Ch 7: expanded');
expandCh8(); console.log('  Ch 8: expanded');
expandCh9(); console.log('  Ch 9: expanded');
expandCh10(); console.log('  Ch 10: expanded');
expandCh11(); console.log('  Ch 11: expanded');
expandCh12(); console.log('  Ch 12: expanded');
expandCh13(); console.log('  Ch 13: expanded');
expandCh14(); console.log('  Ch 14: expanded');
expandCh15(); console.log('  Ch 15: expanded');
expandCh16(); console.log('  Ch 16: expanded');
expandCh17(); console.log('  Ch 17: expanded');
expandCh18(); console.log('  Ch 18: expanded');
expandCh19(); console.log('  Ch 19: expanded');
expandCh20(); console.log('  Ch 20: expanded');
expandCh21(); console.log('  Ch 21: expanded');
expandCh22(); console.log('  Ch 22: expanded');
expandCh23(); console.log('  Ch 23: expanded');
expandCh24(); console.log('  Ch 24: expanded');

fs.writeFileSync(bookPath, JSON.stringify(book, null, 2), 'utf-8');

// Count
const updated = JSON.parse(fs.readFileSync(bookPath, 'utf-8'));
let totalWords = 0, totalDiagrams = 0;
updated.chapters.forEach((ch, i) => {
  const words = ch.content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
  const diags = (ch.content.match(/<svg/g) || []).length;
  totalWords += words;
  totalDiagrams += diags;
  console.log(`  Ch ${i+1}: ${words} words, ${diags} SVGs`);
});
console.log(`\nTotal words: ${totalWords} (est. ${Math.ceil(totalWords / 350)} pages)`);
console.log(`Total SVG diagrams: ${totalDiagrams}`);
console.log('Done!');
