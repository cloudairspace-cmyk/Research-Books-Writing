/**
 * enrich-v5.js - Final content expansion to reach 230+ pages
 * Focuses on chapters 9-24 which still need more content
 * Run: node enrich-v5.js
 */
const fs = require('fs');
const path = require('path');
const bookPath = path.join(__dirname, 'books', 'book-01.json');
const book = JSON.parse(fs.readFileSync(bookPath, 'utf-8'));

function appendToChapter(content, html) {
  return content + html;
}

function expandCh5() {
  let ch = book.chapters[4].content;
  ch = appendToChapter(ch, `
<h2>5.8 The Living Research Question</h2>
<p>A research question is not a static artifact that you create once and then leave unchanged throughout your project. It is a living, evolving entity that grows and develops as your understanding deepens. This dynamic quality is not a weakness but a strength - it reflects the organic nature of genuine inquiry, in which new knowledge continually reshapes our understanding of what needs to be asked.</p>
<p>In the early stages of a research project, your question may be relatively broad and loosely formulated. As you read more deeply into the literature, you discover nuances and complexities that prompt you to refine your question. As you pilot your methods, you discover practical constraints that may require you to narrow or redirect your focus. And as you collect and analyse data, you may discover unexpected patterns that suggest entirely new questions worth pursuing.</p>
<p>This evolution is normal and should be embraced rather than resisted. However, it is important to document the changes you make to your question and the reasons for making them. This documentation serves two purposes: it provides material for the methodology section of your thesis, where you may need to explain how and why your question evolved, and it creates a record of your intellectual development that can be valuable for reflection and future planning.</p>
<p>At the same time, it is important to recognise the difference between productive evolution and aimless wandering. Productive evolution is driven by new evidence, deeper understanding, or practical constraints. Aimless wandering is driven by indecision, anxiety, or the pursuit of novelty. If you find yourself changing your question every few weeks without making progress toward a clearer, more focused formulation, it may be time to seek guidance from your supervisor or to impose a deadline for finalising your question.</p>
`);
  book.chapters[4].content = ch;
}

function expandCh6() {
  let ch = book.chapters[5].content;
  ch = appendToChapter(ch, `
<h2>6.8 Practical Exercises for Narrowing Your Focus</h2>
<p>The following exercises are designed to help you move from broad interest to focused question. They can be completed individually or with a peer group, and they draw on the strategies discussed throughout this chapter.</p>
<p>Exercise 1: The Five Whys. Start with your broad topic and ask yourself "why is this interesting or important?" Write down your answer. Then ask "why?" about that answer. Repeat five times. By the fifth iteration, you will have moved from a general interest to a much more specific and personally meaningful aspect of your topic.</p>
<p>Exercise 2: The Newspaper Test. Imagine that your study has been completed and the results are reported in a newspaper headline. What would the headline say? If you cannot write a clear, specific headline, your question may need to be narrowed further. The headline exercise forces you to distill your question to its essential elements and to think about what finding would be newsworthy.</p>
<p>Exercise 3: The Dinner Party Explanation. Explain your research question to someone outside academia - a family member, a friend, or a colleague in a different field. If they look confused or ask "but what exactly are you trying to find out?" your question may be too vague or too broadly framed. Their questions and reactions can help you identify which aspects of your research are most interesting and comprehensible to a non-specialist audience.</p>
<p>Exercise 4: The Variable Matrix. List all the variables that might be relevant to your topic. Then create a matrix showing the relationships between them. Identify which relationships have been studied extensively, which have been studied in some contexts but not others, and which have not been studied at all. This matrix reveals opportunities for original research and helps you identify the specific relationship your study will investigate.</p>
<p>Exercise 5: The Feasibility Checklist. For your current research question, answer these questions: Do I have access to the population I want to study? Can I collect the data I need within my time frame? Do I have the analytical skills required? Will I be able to get ethical approval? Can I fund the study? If the answer to any of these questions is no, consider how you might modify your question to make it more feasible without sacrificing its significance.</p>
`);
  book.chapters[5].content = ch;
}

function expandCh9() {
  let ch = book.chapters[8].content;
  ch = appendToChapter(ch, `
<h2>9.7 Common Weaknesses in Student Arguments</h2>
<p>Through years of supervising and examining student research, experienced academics have identified several recurring weaknesses in student argumentation. Being aware of these weaknesses can help you avoid them in your own work.</p>
<p>The most common weakness is a lack of clear claims. Many student writers describe, summarise, and report without ever stating what they think. Their writing reads like a catalogue of other people's ideas rather than an argument. To avoid this weakness, ensure that every paragraph in your analytical writing begins with a claim - a statement of your position or interpretation - which you then support with evidence from the literature or your data.</p>
<p>A second common weakness is insufficient evidence. Students often make claims that are supported by a single source, or by no source at all. Academic claims need to be supported by multiple, independent sources wherever possible. If you can find only one study that supports your claim, either look harder for additional evidence, or qualify your claim to reflect the limited evidence base.</p>
<p>A third weakness is the missing warrant. Students frequently present evidence alongside claims without explaining the connection between them. The reader is left to figure out why a particular finding supports a particular position. Making your warrants explicit - explaining the logical link between your evidence and your claim - strengthens your argument significantly and reduces the risk of misunderstanding.</p>
<p>A fourth weakness is the failure to address counterarguments. Many students present only evidence that supports their position, creating a one-sided argument that appears naive or intellectually dishonest. Engaging with counterarguments - acknowledging opposing views, presenting the evidence for them, and then explaining why the weight of evidence nevertheless favours your position - demonstrates intellectual maturity and actually strengthens your argument by showing that it can withstand challenge.</p>
<p>A fifth weakness is overstatement. Students sometimes claim more than their evidence supports, using definitive language like "proves," "demonstrates conclusively," or "establishes beyond doubt" when the evidence warrants more cautious language like "suggests," "indicates," or "is consistent with." This overstatement undermines credibility and invites criticism. Match the strength of your language to the strength of your evidence.</p>
`);
  book.chapters[8].content = ch;
}

function expandCh10() {
  let ch = book.chapters[9].content;
  ch = appendToChapter(ch, `
<h2>10.6 Integrating Multiple Types of Evidence</h2>
<p>Sophisticated academic arguments often draw on multiple types of evidence to build a comprehensive case. Integrating quantitative data, qualitative findings, theoretical arguments, and practical examples creates a richer and more convincing argument than relying on any single type of evidence alone.</p>
<p>Quantitative evidence - statistics, measurements, and numerical data - provides precision and generalisability. When you report that a programme improved test scores by 0.4 standard deviations across 1,200 participants, you are providing evidence that is precise, specific, and potentially generalisable to similar populations. However, quantitative evidence often lacks context and depth - it tells you that something works but not how or why.</p>
<p>Qualitative evidence - interview transcripts, field notes, and narrative descriptions - provides context, depth, and human meaning. When a participant describes how the programme transformed their approach to learning, you are providing evidence that is rich, contextualised, and compelling. However, qualitative evidence is harder to generalise and more susceptible to the influence of the researcher's interpretation.</p>
<p>The most persuasive arguments typically combine both types of evidence. For example: "The programme improved test scores by 0.4 standard deviations (p < .001), and interviews with participants revealed that the improvement was driven primarily by increased confidence and the development of collaborative study habits." This integration provides both the statistical evidence that something happened and the qualitative evidence that explains how and why it happened.</p>
<p>Theoretical evidence - arguments based on established frameworks and models - provides explanatory power. When you explain your findings in terms of social learning theory or self-efficacy theory, you are connecting your specific observations to broader patterns of human behaviour, making them more meaningful and more useful for other researchers and practitioners.</p>
`);
  book.chapters[9].content = ch;
}

function expandCh11() {
  let ch = book.chapters[10].content;
  ch = appendToChapter(ch, `
<h2>11.6 Teaching Yourself to Spot Fallacies</h2>
<p>The ability to spot logical fallacies is a skill that improves with deliberate practice. Here are several strategies for developing this skill systematically.</p>
<p>First, study examples. Work through collections of logical fallacies with real-world and academic examples. For each fallacy, make sure you understand not just its name and definition but why it is fallacious - what is the specific error in reasoning that it represents? Being able to explain why an argument is fallacious, not just label it, demonstrates genuine understanding.</p>
<p>Second, practice identification. When you read news articles, opinion pieces, social media posts, and academic papers, actively look for fallacies. Keep a log of the fallacies you spot, noting the type, the context, and why the argument is fallacious. Over time, this practice will train your mind to detect fallacious reasoning automatically.</p>
<p>Third, apply the skill to your own work. After drafting a section of your thesis or a paper, set it aside for a day and then reread it specifically looking for logical fallacies. Are you attacking any straw men? Are you assuming causation from correlation? Are you appealing to authority rather than evidence? Are you generalising from insufficient data? This self-review is one of the most effective ways to strengthen your arguments before they face external scrutiny.</p>
<p>Fourth, seek feedback from others. Ask a trusted colleague to read your work with an eye for logical weaknesses. It is much easier to spot fallacies in other people's arguments than in your own, because we naturally see our own reasoning as sound. A fresh pair of eyes can identify problems that you would never have noticed yourself.</p>
<p>Fifth, practice constructing arguments deliberately. Take a position you disagree with and try to construct the strongest possible argument for it without using any fallacies. This exercise forces you to rely on evidence and logic rather than emotion and bias, and it deepens your understanding of what constitutes a valid argument. It also develops the intellectual empathy needed to engage productively with scholars whose views differ from your own.</p>
`);
  book.chapters[10].content = ch;
}

function expandCh13() {
  let ch = book.chapters[12].content;
  ch = appendToChapter(ch, `
<h2>13.6 Gap Identification as a Career Skill</h2>
<p>The ability to identify gaps in knowledge is not just an academic skill - it is a professional competency that is valued in every field that depends on evidence and innovation. In medicine, identifying gaps in clinical knowledge drives the development of new treatments and the improvement of existing ones. In business, identifying gaps in market understanding drives product development and competitive strategy. In education, identifying gaps in pedagogical knowledge drives the improvement of teaching practices and learning outcomes.</p>
<p>As a researcher, your ability to identify gaps efficiently and accurately will determine the trajectory of your career. Researchers who consistently identify important, tractable gaps produce a steady stream of significant publications, attract funding, and build reputations as thought leaders in their fields. By contrast, researchers who struggle to identify gaps either pursue questions that have already been answered or tackle questions that are too broad, too narrow, or too impractical to yield meaningful results.</p>
<p>Developing gap identification as a career skill requires ongoing engagement with your field's literature, regular attendance at conferences and seminars, and active participation in scholarly communities where emerging questions and debates are discussed. It also requires a particular cast of mind - a habit of reading for what is missing rather than just for what is present, and a willingness to question established assumptions even when doing so is uncomfortable or unpopular.</p>
<p>As your career progresses, your gap identification skills will become more refined and more efficient. You will develop a deep understanding of your field's intellectual landscape, allowing you to spot gaps quickly and assess their significance accurately. You will also develop a network of colleagues who can help you identify gaps through discussion and collaboration. This combination of knowledge, skill, and network is what distinguishes a productive, impactful research career from one that produces technically competent but ultimately forgettable work.</p>
`);
  book.chapters[12].content = ch;
}

function expandCh15() {
  let ch = book.chapters[14].content;
  ch = appendToChapter(ch, `
<h2>15.6 Positioning in Practice: A Step-by-Step Guide</h2>
<p>Positioning your research effectively requires systematic effort. The following step-by-step guide will help you develop a strong position for your study.</p>
<p>Step 1: Identify the major conversations in your field. Read recent review articles, handbook chapters, and editorial commentaries to understand the key debates, trends, and concerns that currently animate your field. Make a list of the three to five most important conversations that relate to your research topic.</p>
<p>Step 2: Map the positions in each conversation. For each conversation, identify the major positions that scholars hold. Who are the key proponents of each position? What evidence do they cite? Where do they agree and disagree? This mapping exercise gives you a detailed picture of the intellectual landscape in which your study will be situated.</p>
<p>Step 3: Identify your entry point. Based on your mapping, determine where your study fits. Are you supporting one position with new evidence? Challenging an established position? Proposing a synthesis of competing positions? Introducing a new perspective that has not been considered? Your entry point should be specific, defensible, and clearly connected to the existing conversation.</p>
<p>Step 4: Articulate your contribution. Write a clear, concise statement of what your study adds to the conversation. This statement should explain what is new about your study, why it matters, and how it changes or enriches the existing understanding. This contribution statement will serve as the organising principle for your literature review and will appear prominently in your introduction and discussion sections.</p>
<p>Step 5: Test your positioning with others. Share your positioning statement with your supervisor, peers, and other scholars in your field. Ask whether they find it clear, convincing, and significant. Their feedback will help you refine your positioning and ensure that it resonates with your intended audience.</p>
`);
  book.chapters[14].content = ch;
}

function expandCh17() {
  let ch = book.chapters[16].content;
  ch = appendToChapter(ch, `
<h2>17.6 Assumptions in Collaborative Research</h2>
<p>When you work with other researchers - as co-investigators, supervisors, or members of a research team - the challenge of managing assumptions becomes more complex. Different team members may bring different assumptions to the project, and these differences, if unexamined, can lead to confusion, conflict, and inconsistency in the research.</p>
<p>The most effective research teams address assumptions explicitly at the beginning of a project. They discuss their ontological, epistemological, and methodological assumptions openly, identify areas of agreement and disagreement, and negotiate a shared framework that all team members can work within. This negotiation process can be time-consuming, but it prevents much larger problems down the line.</p>
<p>In interdisciplinary research teams, assumption differences are particularly pronounced. A psychologist and an economist studying the same phenomenon may hold fundamentally different assumptions about human behaviour, the role of context, and the appropriate methods for investigation. Making these differences explicit and finding ways to bridge them is essential for producing coherent interdisciplinary research.</p>
<p>Supervisory relationships also involve assumption management. Your supervisor may hold assumptions that differ from yours, and these differences can create tension if they are not addressed. For example, if your supervisor assumes a positivist framework while you are drawn to interpretivism, this difference needs to be discussed early and resolved. Sometimes the resolution involves adjusting your approach to align with your supervisor's expertise; sometimes it involves negotiating a compromise; and sometimes it involves finding a supervisor whose assumptions are more compatible with yours.</p>
`);
  book.chapters[16].content = ch;
}

function expandCh18() {
  let ch = book.chapters[17].content;
  ch = appendToChapter(ch, `
<h2>18.6 Practical Tools for Bias Reduction</h2>
<p>While bias can never be eliminated entirely, several practical tools and procedures can significantly reduce its influence on your research.</p>
<p>Pre-registration involves publicly registering your hypotheses, methods, and analysis plan before collecting data. By committing to a specific analytical approach in advance, you reduce the temptation to modify your analyses after seeing the results - a practice known as p-hacking or HARKing (Hypothesising After the Results are Known). Pre-registration is increasingly expected by journals and funders, and it significantly enhances the credibility of your findings.</p>
<p>Triangulation involves using multiple methods, data sources, or investigators to study the same phenomenon. If different approaches converge on the same conclusion, you can be more confident that the finding is genuine rather than an artifact of a particular method or perspective. For example, combining survey data with interview data and observational data provides a richer and more trustworthy picture than any single method alone.</p>
<p>Peer debriefing involves regularly discussing your research with a colleague who is not involved in the project. The debriefer's role is to challenge your assumptions, question your interpretations, and identify potential biases that you may have overlooked. This external perspective is invaluable because it provides the kind of critical scrutiny that is very difficult to apply to your own work.</p>
<p>Audit trails involve maintaining detailed records of every decision you make during the research process - from question formulation to data collection to analysis to interpretation. These records allow others (and your future self) to retrace your reasoning and evaluate whether your decisions were justified. Audit trails are standard practice in qualitative research and are increasingly valued in quantitative research as well.</p>
<p>Negative case analysis involves deliberately seeking out cases that do not fit your emerging interpretation and examining them carefully. If your data analysis suggests that parental involvement improves student performance, look for cases where parental involvement was high but performance was low. These negative cases can reveal important nuances and limitations that strengthen rather than weaken your analysis.</p>
`);
  book.chapters[17].content = ch;
}

function expandCh19() {
  let ch = book.chapters[18].content;
  ch = appendToChapter(ch, `
<h2>19.6 Reflexivity and Power</h2>
<p>A critical dimension of reflexivity involves examining the power dynamics inherent in the research relationship. Researchers typically hold more power than their participants - they control the research agenda, decide which questions to ask, determine how data is interpreted, and choose what to publish. This power imbalance has implications for the ethics, validity, and impact of your research.</p>
<p>Power dynamics are particularly pronounced when research involves vulnerable or marginalised populations. When a university-educated researcher studies the experiences of people living in poverty, or when a researcher from the global North studies communities in the global South, the power differential can influence every aspect of the research process - from whether participants feel able to refuse participation, to whether they feel comfortable expressing views that differ from what they perceive the researcher wants to hear.</p>
<p>Reflexive awareness of power dynamics does not mean you should avoid studying populations that differ from you - important research would be impossible if every researcher studied only people like themselves. But it does mean that you should be thoughtful about how power differences might affect your data, transparent about these dynamics in your research report, and committed to practices that minimise the negative effects of power imbalance.</p>
<p>Participatory research approaches offer one way to address power dynamics by involving community members as co-researchers rather than passive subjects. In participatory action research, for example, community members help define the research questions, participate in data collection and analysis, and share in the dissemination of findings. While participatory approaches are not appropriate for all research questions, they can produce more equitable and more valid research by drawing on the expertise of those who are most directly affected by the issues being studied.</p>
`);
  book.chapters[18].content = ch;
}

function expandCh20() {
  let ch = book.chapters[19].content;
  ch = appendToChapter(ch, `
<h2>20.6 Developing Your Ethical Compass</h2>
<p>Intellectual honesty is not just a set of rules to follow - it is a personal commitment that must be cultivated and strengthened over time. Developing your ethical compass involves more than memorising codes of conduct; it involves internalising the values of honesty, transparency, and rigour so deeply that they guide your decisions even when no one is watching.</p>
<p>One way to develop your ethical compass is through engagement with ethical dilemmas. Read and discuss cases where researchers faced difficult ethical choices. What would you have done in their position? What pressures were they facing, and how could those pressures have been managed differently? These discussions help you develop the practical wisdom needed to navigate ethical challenges when they arise in your own work.</p>
<p>Another way is to identify role models - researchers whose work exemplifies the values you want to embody. Study their careers, read their methodological reflections, and observe how they handle challenges and setbacks. Having concrete examples of ethical excellence gives you a standard to aspire to and a source of guidance when you face difficult decisions.</p>
<p>A third way is to build accountability into your work processes. Share your raw data with a trusted colleague. Keep an audit trail of your analytical decisions. Pre-register your hypotheses. These practices create structures of accountability that support ethical behaviour even when the temptation to cut corners is strong. They also develop habits of transparency that become natural over time, making it easier to be honest without conscious effort.</p>
<p>Ultimately, the most important resource for maintaining intellectual honesty is a clear sense of purpose. When you remember why you became a researcher - to discover truth, to advance understanding, to contribute to human knowledge - the temptation to compromise that purpose through dishonest practices becomes easier to resist. Holding onto that sense of purpose, even when the pressures of academic life are intense, is the foundation of a career built on integrity.</p>
`);
  book.chapters[19].content = ch;
}

function expandCh21() {
  let ch = book.chapters[20].content;
  ch = appendToChapter(ch, `
<h2>21.6 Finding Your Unique Academic Identity Through Voice</h2>
<p>Every scholar has a unique perspective shaped by their background, training, experiences, and interests. Your scholarly voice is the medium through which this unique perspective is expressed. Developing a voice that is authentically yours - rather than an imitation of someone else's style - is essential for making a distinctive and recognisable contribution to your field.</p>
<p>Finding your voice is a process that unfolds gradually through extensive reading and writing. As you read the work of scholars you admire, you absorb elements of their style and approach. As you write and receive feedback, you discover which elements feel natural and which feel forced. Over time, you develop a style that draws on your influences but is distinctively your own - a style that reflects your way of thinking, your priorities, and your personality.</p>
<p>Do not try to force your voice to conform to a preconceived idea of what academic writing should sound like. The best scholarly writing does not come from a template - it comes from a genuine effort to communicate your ideas as clearly, precisely, and compellingly as possible. If you are naturally inclined toward concise, direct prose, embrace that tendency rather than padding your writing with unnecessary complexity. If you are naturally inclined toward rich, detailed description, use that strength rather than stripping your writing of the texture that makes it engaging.</p>
<p>At the same time, your voice must operate within the conventions of your discipline and the expectations of your audience. Finding the balance between authentic expression and disciplinary convention is one of the ongoing challenges of academic writing, and it is a balance that shifts as you move from thesis writing to journal articles to conference presentations to public engagement. The key is to remain true to your core values - clarity, precision, honesty, and rigour - while adapting your expression to suit different contexts and audiences.</p>
`);
  book.chapters[20].content = ch;
}

function expandCh22() {
  let ch = book.chapters[21].content;
  ch = appendToChapter(ch, `
<h2>22.5 Mentoring and Being Mentored</h2>
<p>Mentoring is one of the most important mechanisms through which scholarly practices and values are transmitted from one generation to the next. A good mentor can accelerate your development, help you avoid common mistakes, open doors to opportunities, and provide emotional support during the inevitable challenges of academic life.</p>
<p>The ideal mentoring relationship is based on mutual respect, clear expectations, and open communication. Your mentor should be invested in your development, willing to share their expertise and network, and able to provide honest and constructive feedback. In return, you should be responsive to their guidance, respectful of their time, and proactive in seeking the support you need.</p>
<p>Many scholars have multiple mentors who serve different functions. Your primary supervisor provides guidance on your research project and helps you develop methodological expertise. A secondary mentor might help you develop teaching skills, navigate institutional politics, or explore career options outside academia. Peer mentors - fellow graduate students or early-career researchers - provide emotional support, practical advice, and a sense of community. Together, these mentoring relationships create a support network that is far more robust than any single relationship.</p>
<p>As you develop as a scholar, you will also begin to mentor others - undergraduates, newer graduate students, or colleagues who are less experienced in your area of expertise. This reverse mentoring is not just a service to others; it is one of the most effective ways to deepen your own understanding. Teaching and mentoring force you to articulate what you know, to identify gaps in your own understanding, and to develop the communication skills that are essential for effective scholarship.</p>
`);
  book.chapters[21].content = ch;
}

function expandCh23() {
  let ch = book.chapters[22].content;
  ch = appendToChapter(ch, `
<h2>23.6 Advanced Synthesis: Working with Contradictory Evidence</h2>
<p>One of the greatest challenges in synthesis is dealing with contradictory evidence - studies that reach different or opposing conclusions about the same question. Contradictory evidence is common in social science research, where different methods, populations, and contexts can produce different results. Rather than seeing contradictory evidence as a problem, view it as an opportunity for deeper analysis and more nuanced understanding.</p>
<p>When you encounter contradictory evidence, the first step is to examine the sources of the contradiction. Do the studies use different methodologies? Study different populations? Measure the variable of interest in different ways? Operate within different theoretical frameworks? Understanding why studies disagree is often more illuminating than knowing what they individually found, because it reveals the complexity of the phenomenon and the factors that moderate its effects.</p>
<p>The second step is to assess the quality of the evidence on each side. Not all studies are equally rigorous, and weighting your synthesis by study quality can help resolve apparent contradictions. If three well-designed studies find an effect and one poorly designed study does not, the weight of evidence clearly favours the existence of the effect, despite the surface-level contradiction.</p>
<p>The third step is to propose an integrative explanation that accounts for the contradictory findings. Perhaps the effect exists under some conditions but not others. Perhaps it is moderated by factors that the individual studies did not examine. Perhaps it is smaller than some studies suggest but non-zero. An integrative explanation that accommodates the full range of evidence is a genuine contribution to knowledge and demonstrates the kind of sophisticated analytical thinking that distinguishes excellent scholarship.</p>
`);
  book.chapters[22].content = ch;
}

function expandCh24() {
  let ch = book.chapters[23].content;
  ch = appendToChapter(ch, `
<h2>24.8 A Personal Manifesto for Research Thinking</h2>
<p>As you complete this book and prepare to apply what you have learned, consider drafting a personal manifesto for your research practice. This manifesto is a statement of the principles and commitments that will guide your work as a researcher. It is not a formal document - it is a personal reflection that captures what matters most to you and how you intend to conduct yourself as a scholar.</p>
<p>Your manifesto might include commitments such as: I will pursue questions that genuinely interest me, not just questions that are easy to publish. I will report my findings honestly, even when they are not what I hoped for. I will seek out and seriously consider evidence that challenges my views. I will treat research participants with dignity and respect. I will give proper credit to the ideas and work of others. I will be transparent about my methods and my limitations. I will contribute to the scholarly community through constructive engagement, generous mentoring, and respectful disagreement.</p>
<p>These commitments may seem obvious, but writing them down and reviewing them periodically serves as a valuable reminder of your core values, especially during periods of stress or pressure when the temptation to cut corners can be strong. They also provide a framework for making difficult decisions - when you are unsure what to do, you can ask which course of action is most consistent with your manifesto.</p>
<p>The journey of research thinking that this book has described is not a journey with a definitive destination. It is an ongoing process of growth, discovery, and refinement that will continue throughout your career and, indeed, throughout your life. The habits of mind you develop through research thinking - curiosity, scepticism, precision, intellectual honesty - are not just academic skills. They are ways of engaging with the world that make you a better thinker, a better professional, and a better citizen.</p>
<p>We live in an age when the ability to evaluate evidence, identify bias, construct sound arguments, and communicate clearly is more important than ever. Misinformation, pseudoscience, and unfounded claims compete for attention alongside genuine knowledge and rigorous scholarship. The research-trained mind is equipped to navigate this landscape with discernment and confidence, distinguishing between claims that are supported by evidence and those that merely sound convincing. This is a gift that your education has given you - use it wisely, share it generously, and never stop developing it.</p>
`);
  book.chapters[23].content = ch;
}

// EXECUTE
console.log('Starting content expansion v5...');

expandCh5(); console.log('  Ch 5: expanded');
expandCh6(); console.log('  Ch 6: expanded');
expandCh9(); console.log('  Ch 9: expanded');
expandCh10(); console.log('  Ch 10: expanded');
expandCh11(); console.log('  Ch 11: expanded');
expandCh13(); console.log('  Ch 13: expanded');
expandCh15(); console.log('  Ch 15: expanded');
expandCh17(); console.log('  Ch 17: expanded');
expandCh18(); console.log('  Ch 18: expanded');
expandCh19(); console.log('  Ch 19: expanded');
expandCh20(); console.log('  Ch 20: expanded');
expandCh21(); console.log('  Ch 21: expanded');
expandCh22(); console.log('  Ch 22: expanded');
expandCh23(); console.log('  Ch 23: expanded');
expandCh24(); console.log('  Ch 24: expanded');

fs.writeFileSync(bookPath, JSON.stringify(book, null, 2), 'utf-8');

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
