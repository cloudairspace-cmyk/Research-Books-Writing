/**
 * enrich-book-03-v1.js
 * Massive expansion for Book 3 (Chapters 1-5)
 * Goal: Push Book 3 over 56k words. No em dashes allowed.
 */
const fs = require('fs');
const path = require('path');
const bookPath = path.join(__dirname, 'books', 'book-03.json');
const book = JSON.parse(fs.readFileSync(bookPath, 'utf-8'));

function append(content, html) {
  return content + html;
}

book.chapters[0].content = append(book.chapters[0].content, `
<h2>1.6 The Ontological Foundations of Methodology</h2>
<p>Methodology is not merely a collection of data-gathering techniques; it is the physical manifestation of a researcher's ontology. Ontology asks the fundamental question: "What is the nature of reality?" If a researcher believes that reality is an objective, measurable entity that exists independently of human observation (realism), their methodology will inevitably involve quantitative measurement, strict variable control, and statistical inference. They will use surveys, sensors, and randomized trials because these tools are designed to capture objective, external facts.</p>
<p>Conversely, if a researcher believes that reality is socially constructed and subjective, existing only in the minds and interactions of individuals (relativism or constructivism), a survey is an inappropriate tool. Their methodology must involve deep, qualitative engagement, such as ethnography or phenomenological interviewing, because the "reality" they are studying cannot be counted; it must be interpreted. A methodology chapter that fails to explicitly state its ontological foundation is a building without a foundation; the techniques may look sound, but the entire intellectual structure is liable to collapse under academic scrutiny.</p>

<h2>1.7 Case Study: The Methodological Divide in Psychology</h2>
<p>The history of psychology provides a perfect illustration of how ontology drives methodology. In the mid-20th century, the behaviorist paradigm dominated. Behaviorists, operating from a strict positivist ontology, argued that the internal mind was an unknowable "black box." Therefore, the only valid methodology was the observation and measurement of external behavior in highly controlled laboratory settings. They measured response times, salivation rates, and maze completion times.</p>
<p>In stark contrast, the emergence of humanistic and later cognitive psychology shifted the ontological assumption. Researchers argued that internal mental states (emotions, beliefs, cognitive processing) were not only real but were the primary drivers of behavior. This ontological shift necessitated a completely different methodology. Researchers began using clinical interviews, self-reporting scales, and eventually fMRI scans to measure what the behaviorists had deemed unmeasurable. The methodology changed because the definition of "reality" changed.</p>

<h2>1.8 Chapter 1 Summary and Reflection</h2>
<p><strong>Summary:</strong> This chapter has established that methodology is not a cookbook of research recipes, but a deeply philosophical defense of how the researcher intends to capture reality. We explored the direct pipeline from ontological belief (what is real) to epistemological stance (how we know what is real) to methodological choice (how we collect data about what is real). We also discussed the historical evolution of methodological paradigms, demonstrating that no research method is inherently superior; a method is only valid if it aligns perfectly with the research question and the underlying philosophical assumptions.</p>
<p><strong>Discussion Questions:</strong>
1. State your primary research question. Based on this question, what is your implicit ontological assumption about the nature of the reality you are studying?
2. If you were forced to adopt the opposite ontological assumption, how would your methodology have to change?
3. How will you explicitly defend your chosen methodology against an examiner who operates from a different philosophical paradigm?</p>
`);

book.chapters[1].content = append(book.chapters[1].content, `
<h2>2.6 The Distinction Between Methodology and Methods</h2>
<p>A frequent error in academic writing is the conflation of the terms "methodology" and "methods." While often used interchangeably in casual conversation, they hold distinct technical meanings in research. "Methods" are the specific, practical tools and techniques used to collect and analyze data. A survey questionnaire is a method. A semi-structured interview is a method. A t-test is a statistical method.</p>
<p>Methodology, conversely, is the overarching theoretical and philosophical framework that justifies the selection of those specific methods. It is the logic behind the tools. If your method is a survey, your methodology is quantitative survey research design, which requires a defense of sampling theory, statistical power, and construct validity. Your methodology chapter must explain not just what tools you used (the methods), but why those specific tools were the most epistemologically sound choice for answering your specific research question, and why alternative tools were rejected.</p>

<h2>2.7 Case Study: Methodological Failure in Polling</h2>
<p>The failure of several major political polls to accurately predict recent election outcomes is rarely a failure of statistical mathematics; it is usually a failure of methodology. The method used is often a telephone survey. The mathematics of margin-of-error calculation are executed flawlessly. However, the methodology - the overarching logic of how the sample is acquired and weighted - is frequently flawed.</p>
<p>For example, if a polling methodology relies heavily on random digit dialing of landline telephones, it systematically excludes younger, more mobile, and often lower-income demographics who only use cellular phones. The method (the phone call) works perfectly, but the methodology (the sampling framework) is catastrophically biased. When researchers write their methodology chapter, they must spend far more time defending the logic of their sampling and data collection framework than they spend describing the actual mechanical tools they used.</p>

<h2>2.8 Chapter 2 Summary and Reflection</h2>
<p><strong>Summary:</strong> This chapter clarified the critical distinction between the philosophical logic of research (methodology) and the practical tools of data collection (methods). We explored how a flawless execution of a method cannot save a fundamentally flawed methodology. We emphasized that the methodology chapter is an argumentative defense, requiring the researcher to justify why their chosen methods are the most rigorous and appropriate tools for answering their specific research question, explicitly addressing and dismissing alternative approaches.</p>
<p><strong>Discussion Questions:</strong>
1. List the specific methods you will use in your research (e.g., surveys, interviews, archival analysis). Now, write one paragraph explaining the overarching methodology that justifies using these tools together.
2. What is the greatest threat to the validity of your chosen methods, and how does your methodology attempt to mitigate this threat?
3. If an examiner asked why you did not use an alternative method (e.g., why you used surveys instead of interviews), what is your methodological defense?</p>
`);

book.chapters[2].content = append(book.chapters[2].content, `
<h2>3.6 The Epistemology of Quantitative Design</h2>
<p>Quantitative research design is anchored in a positivist epistemology. It operates on the assumption that the social or natural world is governed by laws or regularities that can be objectively measured and mathematically modeled. The goal of quantitative design is not merely to describe a phenomenon, but to establish causal relationships, predict future outcomes, and generalize findings from a small sample to a much larger population.</p>
<p>To achieve this, quantitative design relies heavily on the concept of reductionism. Complex human behaviors or natural phenomena are reduced to discrete, measurable variables. A concept as complex as "employee satisfaction" is reduced to a numerical score on a five-point Likert scale. This reductionism is both the greatest strength and the greatest weakness of quantitative design. Its strength lies in its ability to strip away subjective noise, allowing for rigorous statistical testing. Its weakness lies in the fact that the reduction process often strips away the rich contextual nuances that give the phenomenon its meaning in the real world.</p>

<h2>3.7 Case Study: The Limits of Correlational Design</h2>
<p>A classic example of the limitations of quantitative design involves the historical correlation between ice cream sales and drowning incidents. A researcher conducting a purely correlational quantitative study would find a highly significant, positive correlation: as ice cream sales increase, drownings also increase. If the researcher stops there, the methodological design leads to a catastrophic analytical error: concluding that eating ice cream causes drowning.</p>
<p>A robust quantitative methodology chapter must explicitly acknowledge the limitations of its design. It must differentiate between correlational designs (which establish relationships) and experimental designs (which establish causality). In the ice cream example, a rigorous researcher would identify the confounding variable - temperature. Hot summer weather causes both an increase in swimming (leading to more drownings) and an increase in ice cream consumption. A methodology that fails to account for confounding variables through statistical control or experimental manipulation will produce mathematically accurate but scientifically meaningless results.</p>

<h2>3.8 Chapter 3 Summary and Reflection</h2>
<p><strong>Summary:</strong> This chapter delved into the positivist foundations of quantitative research design. We explored the necessity and the dangers of reductionism - transforming complex phenomena into measurable variables. We detailed the critical differences between descriptive, correlational, quasi-experimental, and true experimental designs, emphasizing that the chosen design strictly limits the type of claims (associational versus causal) the researcher is legally permitted to make in their conclusion.</p>
<p><strong>Discussion Questions:</strong>
1. Are you using a correlational or an experimental design? Based on this choice, are you permitted to use the word "cause" in your final conclusion?
2. List three potential confounding variables in your study. How does your methodology plan to control for them?
3. How have you operationalized your most abstract variable into a discrete, measurable number?</p>
`);

book.chapters[3].content = append(book.chapters[3].content, `
<h2>4.6 The Phenomenology of Qualitative Inquiry</h2>
<p>While quantitative research seeks to explain and predict from the outside, qualitative research seeks to understand and interpret from the inside. The dominant epistemological foundation of qualitative inquiry is phenomenology - the study of conscious experience from the first-person perspective. A phenomenological methodology assumes that "truth" is not an objective metric floating in the ether, but a subjective reality constructed by individuals as they interact with their environment.</p>
<p>Therefore, the goal of qualitative research is not to gather a sample size of 1,000 to find a statistical average, but to gather a sample size of 10 to find a profound depth of meaning. The qualitative researcher is not a detached observer; they are an active instrument of data collection. Their own biases, background, and interpersonal skills directly influence the data they collect during an interview or observation. A rigorous qualitative methodology chapter does not attempt to hide this subjectivity; rather, it manages it through rigorous reflexivity and transparent documentation of the analytical process.</p>

<h2>4.7 Case Study: Ethnography in Corporate Culture</h2>
<p>A researcher wanted to understand why a major technology company was experiencing massive turnover among its female engineering staff. A quantitative survey approach was deployed first. The company sent out a 50-question survey to all departing employees. The numerical data indicated that the primary reason for leaving was "seeking better compensation." Management increased salaries, but the turnover rate remained unchanged. The quantitative methodology had failed to capture the truth.</p>
<p>The company then hired a qualitative researcher who deployed an ethnographic methodology. The researcher spent six months embedded in the engineering teams, conducting unstructured interviews and observing daily interactions. The qualitative data revealed a toxic "bro-culture" where female engineers were systematically talked over in meetings, assigned administrative rather than technical tasks, and excluded from informal networking events. When filling out the exit survey, the departing women had simply selected "better compensation" because it was the easiest, least confrontational box to check. The qualitative methodology succeeded because it bypassed the superficial metric to uncover the deeply rooted, complex social reality.</p>

<h2>4.8 Chapter 4 Summary and Reflection</h2>
<p><strong>Summary:</strong> This chapter explored the interpretivist foundation of qualitative research. We contrasted the quantitative pursuit of generalizability with the qualitative pursuit of deep, contextual understanding. We emphasized that in qualitative research, the researcher is the primary data collection instrument, requiring intense reflexivity. Through the lens of ethnography and phenomenology, we demonstrated how qualitative methods uncover the complex "why" and "how" behind the superficial numerical "what."</p>
<p><strong>Discussion Questions:</strong>
1. How will you manage your own subjectivity and bias during the qualitative data collection process?
2. If your sample size is only 12 participants, how will you defend the validity and importance of your findings to a quantitatively trained examiner?
3. What specific strategies (e.g., member checking, triangulation) will you use to ensure the trustworthiness of your qualitative data?</p>
`);

book.chapters[4].content = append(book.chapters[4].content, `
<h2>5.6 The Pragmatism of Mixed Methods</h2>
<p>Mixed methods research is not simply combining a survey with an interview; it is a distinct methodological paradigm rooted in the philosophy of pragmatism. Pragmatism rejects the binary war between positivism (quantitative) and constructivism (qualitative). Instead, pragmatism argues that the ultimate test of a methodology is its usefulness. If a research question is highly complex, involving both measurable outcomes and subjective experiences, pragmatism dictates that the researcher should use whatever combination of tools works best to answer the question.</p>
<p>Designing a mixed methods study is exceptionally challenging because the researcher must be fluent in both quantitative statistical analysis and qualitative thematic interpretation. Furthermore, the researcher must design a specific integration strategy. Data integration is the point where the numbers and the narratives meet. If the survey data says one thing, and the interview data says the exact opposite, the mixed methods researcher does not throw one dataset away. The contradiction itself becomes the most fascinating finding, requiring a new, synthesized level of analysis to explain the discrepancy.</p>

<h2>5.7 Case Study: Explanatory Sequential Design</h2>
<p>A public health team wanted to study vaccine hesitancy in a specific rural county. They utilized an explanatory sequential mixed methods design. In Phase 1 (Quantitative), they deployed a standardized survey to 5,000 residents to measure demographic variables and baseline attitudes toward vaccines. The statistical analysis revealed a surprising finding: individuals with higher levels of formal education in this specific county were statistically more likely to be vaccine-hesitant than those with lower levels of education, a finding that contradicted national trends.</p>
<p>The quantitative data identified the anomaly but could not explain it. In Phase 2 (Qualitative), the team purposely sampled 30 of the highly educated, highly hesitant respondents for in-depth interviews. The qualitative analysis revealed that this specific demographic was utilizing their advanced research skills to access sophisticated, pseudo-scientific misinformation online, creating a false sense of intellectual superiority over public health officials. The quantitative phase identified the "what," and the qualitative phase explained the "why." This seamless integration exemplifies the power of mixed methods.</p>

<h2>5.8 Chapter 5 Summary and Reflection</h2>
<p><strong>Summary:</strong> This chapter introduced mixed methods research as a pragmatic paradigm that transcends the quantitative/qualitative divide. We discussed the complexity of designing mixed methods studies, emphasizing the critical importance of integration strategies (e.g., sequential, concurrent, embedded). We demonstrated how combining methodologies allows researchers to leverage the statistical power of numbers alongside the explanatory depth of narratives, providing a holistic understanding of highly complex phenomena.</p>
<p><strong>Discussion Questions:</strong>
1. What is the specific integration point in your mixed methods design? When and how will the quantitative data and qualitative data "talk" to each other?
2. Which paradigm is dominant in your study? Is it a qualitatively driven study with a small quantitative component, or vice versa? How does this dictate your writing structure?
3. If your qualitative findings completely contradict your quantitative findings, what is your analytical strategy for resolving or explaining the tension?</p>
`);

// Check word count
let words = 0;
book.chapters.forEach(ch => {
  words += ch.content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
});
console.log('Book 3 Words:', words, 'Est Pages:', Math.ceil(words / 280));

fs.writeFileSync(bookPath, JSON.stringify(book, null, 2), 'utf-8');
console.log('Book 3 Chapters 1-5 massive expansion complete.');
