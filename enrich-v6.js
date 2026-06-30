/**
 * enrich-v6.js - Final push to 230+ pages
 * Focuses on chapters 12, 14, 16 which are shortest
 * Run: node enrich-v6.js
 */
const fs = require('fs');
const path = require('path');
const bookPath = path.join(__dirname, 'books', 'book-01.json');
const book = JSON.parse(fs.readFileSync(bookPath, 'utf-8'));

function appendToChapter(content, html) {
  return content + html;
}

function expandCh1() {
  let ch = book.chapters[0].content;
  ch = appendToChapter(ch, `
<h2>1.9 Research Thinking in Different Cultural Contexts</h2>
<p>Research thinking is a universal capacity, but the way it is practised and valued varies significantly across cultural contexts. Understanding these variations is important for two reasons: it helps you appreciate the diversity of scholarly traditions that exist around the world, and it alerts you to the cultural assumptions that may be embedded in your own research practices.</p>
<p>In many Western academic traditions, research thinking is associated with individualism, competition, and the pursuit of novelty. Researchers are expected to develop their own unique questions, produce original findings, and establish individual reputations. Publication and citation metrics are used to evaluate individual productivity, and academic careers are built on personal achievement. This individualistic model has produced remarkable scientific advances, but it can also create perverse incentives - rewarding quantity over quality, novelty over replication, and individual ambition over collective benefit.</p>
<p>In other cultural contexts, research thinking may be embedded in more communal and collaborative frameworks. In many African intellectual traditions, for example, knowledge is understood as a collective resource that belongs to the community rather than the individual. The Ubuntu philosophy - "I am because we are" - suggests a fundamentally relational understanding of knowledge production, in which the researcher's obligation is not just to advance their own career but to contribute to the well-being of their community. This communal orientation does not diminish the rigour of research thinking; rather, it situates that rigour within a broader ethical framework that values collective benefit alongside individual achievement.</p>
<p>In East Asian academic traditions, the relationship between the researcher and their intellectual lineage is often emphasised more strongly than in Western traditions. Respect for established authority and careful engagement with classical texts are highly valued, and the expectation of originality may be expressed differently - as a deepening or refinement of existing understanding rather than as a radical departure from it. These traditions offer valuable perspectives on the nature of scholarly contribution and the relationship between innovation and continuity.</p>
<p>As research becomes increasingly globalised, the ability to work across cultural boundaries becomes ever more important. International research collaborations bring together scholars with different cultural assumptions, different methodological traditions, and different expectations about the research process. Navigating these differences requires not just technical competence but cultural sensitivity and intellectual humility - the recognition that your own way of doing research is not the only valid way, and that other traditions may offer insights that your own has missed.</p>
`);
  book.chapters[0].content = ch;
}

function expandCh2() {
  let ch = book.chapters[1].content;
  ch = appendToChapter(ch, `
<h2>2.8 Curiosity and Creativity in Research</h2>
<p>Curiosity and creativity are closely related but distinct qualities. Curiosity is the desire to understand - the drive to ask questions, seek answers, and explore the unknown. Creativity is the ability to generate novel ideas, make unexpected connections, and see familiar things in new ways. Together, they form the engine of original research.</p>
<p>The relationship between curiosity and creativity is reciprocal. Curiosity fuels creativity by exposing you to new ideas, perspectives, and information that provide the raw material for creative insight. The more curious you are - the more widely you read, the more questions you ask, the more diverse experiences you seek out - the richer your mental storehouse becomes, and the more connections your mind can make between seemingly unrelated ideas.</p>
<p>Creativity, in turn, fuels curiosity by generating new questions and opening up new areas for investigation. When you have a creative insight - when you see a connection that no one has noticed before, or imagine a study that no one has conducted - you experience a surge of curiosity that drives you to investigate further. This cycle of curiosity and creativity, each feeding the other, is the hallmark of a productive and fulfilling research career.</p>
<p>Several practices can help you cultivate the creativity that complements your scholarly curiosity. Divergent thinking exercises - in which you generate as many ideas as possible without evaluating them - can help you break out of habitual patterns of thought. Mind mapping and concept mapping can reveal connections between ideas that are not apparent in linear text. And regular exposure to art, literature, music, and other creative domains can stimulate the kind of lateral thinking that produces breakthrough insights in research.</p>
<p>Perhaps most importantly, creativity in research requires the willingness to take intellectual risks. The safest research - the study that follows a well-established template, uses proven methods, and asks a question whose answer is largely predictable - is rarely the most creative or the most impactful. The most creative research involves an element of uncertainty, a willingness to venture into territory where the outcome is genuinely unknown. This kind of intellectual risk-taking requires courage, resilience, and the support of a scholarly community that values innovation alongside rigour.</p>
`);
  book.chapters[1].content = ch;
}

function expandCh7() {
  let ch = book.chapters[6].content;
  ch = appendToChapter(ch, `
<h2>7.8 From Research Question to Research Proposal</h2>
<p>The final step in the question-testing process is the development of a formal research proposal. The proposal is the document in which you present your research question, justify its importance, describe how you plan to investigate it, and demonstrate that the project is feasible and ethical. It is both a planning tool for yourself and a persuasive document for others - supervisors, ethics committees, and potential funders.</p>
<p>A well-structured research proposal typically includes several key sections. The introduction establishes the context for your research, identifies the gap in existing knowledge, and presents your research question. The literature review demonstrates your mastery of the relevant scholarship and builds the case for your study's contribution. The methodology section describes your research design, data collection methods, sampling strategy, and analytical approach. The timeline and resource plan demonstrates that the project is feasible within your available time and resources. And the ethics section addresses any ethical considerations and describes how you will protect the rights and welfare of research participants.</p>
<p>Writing the proposal is itself a valuable intellectual exercise, because it forces you to think through every aspect of your project before you begin. Many problems that would be difficult and expensive to solve during the research itself - unclear definitions, inappropriate methods, unrealistic timelines, ethical oversights - can be identified and addressed at the proposal stage, when the cost of making changes is minimal.</p>
<p>The proposal should also be seen as a living document that evolves as your research progresses. While significant changes to the research question or methodology after approval require formal amendment, minor refinements and adjustments are normal and expected. The proposal provides a framework for your research, not a straitjacket. Its purpose is to guide your investigation, not to prevent you from responding to unexpected discoveries or unforeseen challenges.</p>
`);
  book.chapters[6].content = ch;
}

function expandCh8() {
  let ch = book.chapters[7].content;
  ch = appendToChapter(ch, `
<h2>8.8 Case Studies: From Weak to Strong Questions</h2>
<p>The following case studies illustrate the transformation of weak research questions into strong ones through the application of the principles discussed in this chapter. Each example shows the initial question, identifies its weaknesses, and demonstrates how it was refined into a more effective form.</p>
<p>Case Study 1: A student interested in social media began with the question: "Is social media bad for teenagers?" This question is value-laden (it assumes social media is bad), overly broad (which aspects of social media? which outcomes? which teenagers?), and binary (it expects a yes/no answer to a complex issue). Through successive refinements, the question evolved into: "What is the relationship between daily Instagram usage duration and self-reported body image satisfaction among female secondary school students aged 14-16 in urban Ghana?" This refined question identifies specific variables, a specific population, and a specific relationship to investigate.</p>
<p>Case Study 2: A student interested in leadership began with: "What makes a good leader?" This question is vague (what does "good" mean?), overly broad (in what context?), and difficult to operationalise for empirical research. Through refinement, it became: "How do teachers in high-performing primary schools describe the leadership practices that contribute most to their professional development and job satisfaction?" This version is specific, contextualised, and amenable to qualitative investigation.</p>
<p>Case Study 3: A student interested in climate change began with: "What should governments do about climate change?" This is a policy question rather than a research question - it asks for prescription rather than description or explanation. Through refinement, it became: "How do citizens in three West African coastal cities perceive the local impacts of climate change, and what factors influence their support for adaptation policies?" This version is empirically researchable and contributes to both climate science and policy studies.</p>
<p>These case studies illustrate that the journey from a weak question to a strong one is often dramatic. The initial questions are recognisable as genuine interests, but they lack the precision, specificity, and neutrality needed for productive research. The refined questions retain the core interest while adding the methodological rigour that makes them researchable. The transformation is not about abandoning your interests but about expressing them in a form that can be systematically investigated.</p>
`);
  book.chapters[7].content = ch;
}

function expandCh12() {
  let ch = book.chapters[11].content;
  ch = appendToChapter(ch, `
<h2>12.6 The Ethics of Disagreement in Academic Life</h2>
<p>Academic disagreement operates within an ethical framework that balances the freedom of intellectual inquiry with the responsibility to treat colleagues with respect and fairness. Understanding this ethical framework is essential for engaging in disagreement productively and honourably.</p>
<p>The right to disagree is a cornerstone of academic freedom. Scholars must be free to challenge established views, question dominant paradigms, and propose alternative explanations without fear of retaliation or censorship. This freedom is not just a privilege - it is a professional obligation. The advancement of knowledge depends on the willingness of individual scholars to question what is accepted and to explore what is unexamined. Suppressing disagreement, whether through institutional pressure, social conformity, or professional gatekeeping, harms not just the individual scholar but the entire scholarly enterprise.</p>
<p>However, the right to disagree comes with corresponding responsibilities. The most fundamental responsibility is honesty - representing your opponents' views accurately and fairly, even when you believe they are wrong. The straw man fallacy, in which you misrepresent an opponent's position to make it easier to attack, is not just a logical error but an ethical violation. It deceives your audience and disrespects your opponent by denying them the courtesy of having their actual views addressed.</p>
<p>A second responsibility is proportionality. Your disagreement should be proportionate to the evidence. Dismissing a well-established finding on the basis of a single preliminary study, or attacking an entire theoretical framework because of one inconsistent data point, is disproportionate and irresponsible. Conversely, ignoring strong contradictory evidence in order to maintain a comfortable consensus is equally irresponsible. The ethical scholar calibrates the strength of their disagreement to the strength of the evidence, neither overreacting to weak evidence nor underreacting to strong evidence.</p>
<p>A third responsibility is civility. Academic disagreement should focus on ideas, evidence, and arguments, not on the personal characteristics of the scholars involved. Ad hominem attacks, dismissive language, and professional bullying are not legitimate forms of scholarly discourse, regardless of how wrong you believe your opponent to be. Disagreement conducted with civility is more persuasive, more productive, and more ethical than disagreement conducted with hostility.</p>
`);
  book.chapters[11].content = ch;
}

function expandCh14() {
  let ch = book.chapters[13].content;
  ch = appendToChapter(ch, `
<h2>14.7 From Reading to Writing: Bridging the Gap</h2>
<p>Many students struggle with the transition from reading to writing - they read extensively but find it difficult to transform their reading into written arguments. This difficulty is common and can be addressed through specific strategies that bridge the gap between consuming knowledge and producing it.</p>
<p>The first strategy is to write while you read. Do not wait until you have finished reading to begin writing. Instead, write notes, summaries, and reflections as you go. After each article or chapter, write a brief response: What did you learn? How does it connect to what you already know? What questions does it raise? Where do you agree or disagree? These writing-while-reading exercises serve a dual purpose: they help you process and retain what you have read, and they generate raw material that you can later incorporate into your formal writing.</p>
<p>The second strategy is to use reading to develop your argument, not just your knowledge. As you read, ask yourself not just "What does this source say?" but "How does this source relate to my argument?" Each source you read should change your argument in some way - strengthening a point, introducing a nuance, raising a counter-argument, or suggesting a new direction. If a source does not affect your argument, it may not belong in your literature review.</p>
<p>The third strategy is to read with structure in mind. As you read multiple sources on the same topic, look for the structural patterns that connect them. Do they address the same themes? Do they use similar methods? Do they reach similar conclusions? These structural patterns provide the organisational framework for your literature review. When you sit down to write, you are not starting from scratch - you are arranging sources within a structure that your reading has already revealed.</p>
<p>The fourth strategy is to practice free writing. Set a timer for ten minutes and write continuously about your research topic without stopping to edit, revise, or worry about quality. This exercise helps overcome the paralysis that often accompanies the transition from reading to writing, and it often produces surprisingly useful material. Much of what you write in a free writing session will need to be revised or discarded, but the ideas that emerge can provide starting points for more structured writing.</p>
`);
  book.chapters[13].content = ch;
}

function expandCh16() {
  let ch = book.chapters[15].content;
  ch = appendToChapter(ch, `
<h2>16.6 Originality and Replication</h2>
<p>In recent years, the research community has engaged in a robust debate about the relationship between originality and replication. The traditional emphasis on originality - on producing new findings, testing new hypotheses, and proposing new theories - has sometimes been seen as being in tension with the equally important scientific practice of replication - repeating previous studies to verify their findings.</p>
<p>The replication crisis - the discovery that many published findings in psychology, medicine, economics, and other fields cannot be reproduced when the studies are repeated - has highlighted the importance of replication as a corrective to the bias toward novelty. If researchers are rewarded primarily for producing original findings, they may have insufficient incentive to verify the findings of others. And if journals are reluctant to publish replication studies because they lack novelty, the self-correcting mechanism of science is weakened.</p>
<p>However, replication and originality are not inherently opposed. A well-designed replication study can be highly original if it tests an established finding in a new context, with a new population, or using improved methods. "Conceptual replications" - studies that test the same underlying hypothesis using different operational definitions and methods - are particularly valuable because they assess not just whether a finding is reliable but whether it is robust across different approaches.</p>
<p>For emerging researchers, replication studies offer an excellent entry point into a research field. They provide a clear and well-defined research question, an established methodology that can be adapted, and a built-in framework for interpreting results. If your replication confirms the original finding, you have contributed to the reliability of the evidence base. If it fails to confirm the original finding, you have identified an important discrepancy that calls for further investigation. Either way, you have made a genuine contribution to knowledge.</p>
<p>The key is to approach replication not as a mechanical repetition of someone else's work but as a thoughtful and rigorous investigation that adds value to the evidence base. A good replication study explains clearly why replication is needed (perhaps the original study had methodological limitations, or the finding has not been tested in your context), describes any modifications to the original design and the reasons for them, and discusses the implications of the results for the reliability and generalisability of the original findings.</p>
`);
  book.chapters[15].content = ch;
}

function expandCh19() {
  let ch = book.chapters[18].content;
  ch = appendToChapter(ch, `
<h2>19.7 Reflexivity as a Habit of Mind</h2>
<p>The ultimate goal of reflexivity is not just to complete a reflexive section in your methodology chapter. It is to develop reflexivity as a habit of mind - an ongoing practice of self-awareness and critical self-examination that informs everything you do as a researcher.</p>
<p>As a habit of mind, reflexivity means continuously asking yourself: How might my perspective be influencing what I see and what I miss? What assumptions am I making that might not be shared by others? How would someone with a different background, training, or worldview approach this question? These questions should become as natural and automatic as checking your data for errors or verifying your citations.</p>
<p>Developing reflexivity as a habit takes time and practice. In the early stages, it may feel artificial and effortful - you have to remind yourself to step back and examine your assumptions, and the process may feel more like a chore than a natural part of your thinking. But with practice, reflexivity becomes increasingly automatic. You begin to notice your assumptions as they arise, to question your interpretations as you form them, and to seek out perspectives that differ from your own as a matter of course.</p>
<p>One practical way to develop reflexivity as a habit is to build it into your regular routines. At the end of each research activity - an interview, an observation session, a data analysis session, a writing session - spend five minutes reflecting on how your perspective may have influenced what you did. Over time, this brief reflection becomes second nature, and reflexive awareness becomes an integral part of your research practice rather than an add-on that you remember only when writing your methodology chapter.</p>
`);
  book.chapters[18].content = ch;
}

function expandCh20() {
  let ch = book.chapters[19].content;
  ch = appendToChapter(ch, `
<h2>20.7 Intellectual Honesty in the Digital Age</h2>
<p>The digital age presents both new opportunities and new challenges for intellectual honesty. On one hand, digital tools make it easier to share data, verify claims, and detect misconduct. Open data repositories allow other researchers to check your analyses. Plagiarism detection software can identify unattributed borrowing. And online platforms make it possible to share your methods, code, and materials with unprecedented transparency.</p>
<p>On the other hand, the digital age also creates new temptations and new forms of dishonesty. The pressure to maintain an active online presence and to generate engagement can encourage scholars to overstate their findings, present preliminary results as definitive conclusions, or engage in attention-seeking behaviour that prioritises visibility over accuracy. Social media rewards confident, provocative claims over nuanced, hedged ones - which is precisely the opposite of what intellectual honesty requires.</p>
<p>The abundance of digital information also makes it easier to find evidence that supports any position, regardless of its merit. With millions of papers available at the click of a button, a determined researcher can always find studies that support their preferred conclusion, even if the weight of evidence points in the opposite direction. The temptation to cherry-pick from this vast digital library is greater than ever, and resisting it requires deliberate effort and systematic methods.</p>
<p>To maintain intellectual honesty in the digital age, adopt practices that leverage digital tools for transparency rather than manipulation. Pre-register your studies. Share your data and code. Use systematic review methods rather than selective citation. And when you communicate your findings online, maintain the same standards of accuracy and nuance that you would apply in a peer-reviewed publication. The digital footprint of your scholarly communication is permanent and public, and maintaining your reputation for intellectual honesty requires vigilance in every medium you use.</p>
`);
  book.chapters[19].content = ch;
}

// EXECUTE
console.log('Starting content expansion v6...');
expandCh1(); console.log('  Ch 1: expanded');
expandCh2(); console.log('  Ch 2: expanded');
expandCh7(); console.log('  Ch 7: expanded');
expandCh8(); console.log('  Ch 8: expanded');
expandCh12(); console.log('  Ch 12: expanded');
expandCh14(); console.log('  Ch 14: expanded');
expandCh16(); console.log('  Ch 16: expanded');
expandCh19(); console.log('  Ch 19: expanded');
expandCh20(); console.log('  Ch 20: expanded');

fs.writeFileSync(bookPath, JSON.stringify(book, null, 2), 'utf-8');

const updated = JSON.parse(fs.readFileSync(bookPath, 'utf-8'));
let totalWords = 0, totalDiagrams = 0;
updated.chapters.forEach((ch, i) => {
  const words = ch.content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
  const diags = (ch.content.match(/<svg/g) || []).length + (ch.content.match(/diagram-container/g) || []).length;
  totalWords += words;
  totalDiagrams += diags;
});
console.log(`\nTotal words: ${totalWords} (est. ${Math.ceil(totalWords / 280)} pages with diagrams)`);
console.log(`Total diagrams: ${totalDiagrams}`);
console.log('Done!');
