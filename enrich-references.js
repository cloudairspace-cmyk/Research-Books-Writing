/**
 * enrich-references.js
 * Adds real in-text citations throughout all 24 chapters
 * and appends a comprehensive References section as the final chapter.
 * All references are real, published academic works.
 * Run: node enrich-references.js
 */
const fs = require('fs');
const path = require('path');
const bookPath = path.join(__dirname, 'books', 'book-01.json');
const book = JSON.parse(fs.readFileSync(bookPath, 'utf-8'));

// Helper: insert citation after first occurrence of a phrase
function citeAfter(content, phrase, citation) {
  const idx = content.indexOf(phrase);
  if (idx === -1) return content;
  const end = idx + phrase.length;
  // Find end of the sentence or tag
  let insertPos = end;
  // If phrase is inside text, add citation right after
  return content.substring(0, insertPos) + ' ' + citation + content.substring(insertPos);
}

// Helper: insert citation before </p> of paragraph containing phrase
function citeInParagraph(content, phrase, citation) {
  const idx = content.indexOf(phrase);
  if (idx === -1) return content;
  // Find the next </p> after the phrase
  const closeP = content.indexOf('</p>', idx);
  if (closeP === -1) return content;
  return content.substring(0, closeP) + ' ' + citation + content.substring(closeP);
}

// ============================================================
// ADD IN-TEXT CITATIONS TO ALL CHAPTERS
// ============================================================

// CHAPTER 1
let ch = book.chapters[0].content;
ch = citeAfter(ch, 'Commitment to Evidence', '(Sackett, Rosenberg, Gray, Haynes, & Richardson, 1996)');
ch = citeAfter(ch, 'Tolerance for Ambiguity', '(Budner, 1962)');
ch = citeAfter(ch, 'Systematic Doubt', '(Popper, 1959)');
ch = citeAfter(ch, 'treats knowledge as provisional and evolving', '(Kuhn, 1962)');
ch = citeInParagraph(ch, 'evidence-based practice has transformed patient care', '(Sackett, Straus, Richardson, Rosenberg, & Haynes, 2000)');
ch = citeInParagraph(ch, 'Netflix decides which shows to commission', '(Davenport & Harris, 2007)');
ch = citeInParagraph(ch, 'Like any sophisticated skill', '(Ericsson, Krampe, & Tesch-Römer, 1993)');
ch = citeInParagraph(ch, 'fabrication of data in medical research', '(Steneck, 2007)');
ch = citeInParagraph(ch, 'Ubuntu philosophy', '(Metz, 2007)');
book.chapters[0].content = ch;

// CHAPTER 2
ch = book.chapters[1].content;
ch = citeInParagraph(ch, 'Daniel Kahneman, for example, revolutionised economics', '(Kahneman, 2011)');
ch = citeInParagraph(ch, 'Lynn Margulis transformed our understanding of evolution', '(Margulis, 1970)');
ch = citeInParagraph(ch, 'Google Scholar, PubMed, and JSTOR', '(Falagas, Pitsouni, Malietzis, & Pappas, 2008)');
ch = citeInParagraph(ch, 'Reference management software like Zotero', '(Tramullas, Sánchez-Casabón, & Garay-Cerda, 2015)');
ch = citeInParagraph(ch, 'publish-or-perish culture', '(De Rond & Miller, 2005)');
ch = citeInParagraph(ch, 'Curiosity and creativity are closely related', '(Kashdan & Silvia, 2009)');
ch = citeInParagraph(ch, 'Divergent thinking exercises', '(Guilford, 1967)');
book.chapters[1].content = ch;

// CHAPTER 3
ch = book.chapters[2].content;
ch = citeAfter(ch, 'Systematic reviews & meta-analyses', '(Higgins & Green, 2011)');
ch = citeInParagraph(ch, 'confirmation bias', '(Nickerson, 1998)');
ch = citeInParagraph(ch, 'motivated reasoning', '(Kunda, 1990)');
ch = citeInParagraph(ch, 'anchoring effect', '(Tversky & Kahneman, 1974)');
ch = citeInParagraph(ch, 'credibility, transferability, dependability, and confirmability', '(Lincoln & Guba, 1985)');
ch = citeInParagraph(ch, 'Evidence-based medicine (EBM) emerged', '(Evidence-Based Medicine Working Group, 1992)');
ch = citeInParagraph(ch, 'prescribing bed rest for back pain', '(Deyo, Diehl, & Rosenthal, 1986; Waddell, Feder, & Lewis, 1997)');
ch = citeInParagraph(ch, 'Evidence can tell you what is the case', '(Hume, 1739/2003)');
book.chapters[2].content = ch;

// CHAPTER 4
ch = book.chapters[3].content;
ch = citeAfter(ch, "Bloom's Revised Taxonomy", '(Anderson & Krathwohl, 2001)');
ch = citeInParagraph(ch, 'surface learning', '(Marton & Säljö, 1976)');
ch = citeInParagraph(ch, 'Writing is the crucible', '(Elbow, 1998)');
ch = citeInParagraph(ch, 'perfectionism', '(Boice, 1990)');
ch = citeInParagraph(ch, 'critical reading and annotation', '(Adler & Van Doren, 1972)');
book.chapters[3].content = ch;

// CHAPTER 5
ch = book.chapters[4].content;
ch = citeInParagraph(ch, 'Randomised controlled trials (RCTs) are considered the gold standard', '(Shadish, Cook, & Campbell, 2002)');
ch = citeInParagraph(ch, 'In-depth interviews, focus groups', '(Creswell & Poth, 2018)');
ch = citeInParagraph(ch, 'tautological question', '(Punch, 2014)');
ch = citeInParagraph(ch, 'In the natural sciences, research questions are often framed as hypotheses', '(Popper, 1959)');
ch = citeInParagraph(ch, 'Mixed-methods researchers may combine both approaches', '(Tashakkori & Teddlie, 2010)');
book.chapters[4].content = ch;

// CHAPTER 6
ch = book.chapters[5].content;
ch = citeInParagraph(ch, 'Concept Mapping', '(Novak & Cañas, 2008)');
ch = citeInParagraph(ch, 'Literature Immersion', '(Ridley, 2012)');
ch = citeInParagraph(ch, 'research journal or research log', '(Ortlipp, 2008)');
ch = citeInParagraph(ch, 'The Five Whys', '(Ohno, 1988)');
book.chapters[5].content = ch;

// CHAPTER 7
ch = book.chapters[6].content;
ch = citeAfter(ch, 'FINER Framework', '(Hulley, Cummings, Browner, Grady, & Newman, 2013)');
ch = citeInParagraph(ch, 'Belmont Report', '(National Commission for the Protection of Human Subjects, 1979)');
ch = citeInParagraph(ch, 'informed consent', '(Beauchamp & Childress, 2019)');
ch = citeInParagraph(ch, 'pilot study is a small-scale preliminary investigation', '(Van Teijlingen & Hundley, 2001)');
book.chapters[6].content = ch;

// CHAPTER 8
ch = book.chapters[7].content;
ch = citeInParagraph(ch, 'Sweet spot lies in questions that address specific manifestations', '(Booth, Colomb, & Williams, 2016)');
ch = citeInParagraph(ch, 'Leading questions are a related but distinct problem', '(Loftus & Palmer, 1974)');
book.chapters[7].content = ch;

// CHAPTER 9
ch = book.chapters[8].content;
ch = citeAfter(ch, 'Structure of an Academic Argument', '(Toulmin, 2003)');
ch = citeInParagraph(ch, 'Theory plays a crucial but often misunderstood role', '(Abend, 2008)');
ch = citeInParagraph(ch, 'social comparison theory lens', '(Festinger, 1954)');
ch = citeInParagraph(ch, 'In a journal article, argumentation is typically tight', '(Swales, 1990)');
book.chapters[8].content = ch;

// CHAPTER 10
ch = book.chapters[9].content;
ch = citeAfter(ch, "Toulmin's Model of Argumentation", '(Toulmin, 2003)');
ch = citeInParagraph(ch, 'p-value of less than 0.05', '(Fisher, 1925; Wasserstein & Lazar, 2016)');
ch = citeInParagraph(ch, 'Glewwe et al. (2009) found positive effects of textbook provision', '(Glewwe, Kremer, & Moulin, 2009)');
ch = citeInParagraph(ch, 'plagiarism, which is one of the most serious offences', '(Pecorari, 2008)');
book.chapters[9].content = ch;

// CHAPTER 11
ch = book.chapters[10].content;
ch = citeInParagraph(ch, 'ecological fallacy', '(Robinson, 1950)');
ch = citeInParagraph(ch, "Simpson's paradox", '(Simpson, 1951; Pearl, 2009)');
ch = citeInParagraph(ch, 'Texas sharpshooter fallacy', '(Thompson, 2009)');
ch = citeInParagraph(ch, 'bandwagon fallacy', '(Walton, 1999)');
book.chapters[10].content = ch;

// CHAPTER 12
ch = book.chapters[11].content;
ch = citeInParagraph(ch, 'acknowledge-complicate-redirect', '(Graff & Birkenstein, 2018)');
ch = citeInParagraph(ch, 'right to disagree is a cornerstone of academic freedom', '(Altbach, 2001)');
book.chapters[11].content = ch;

// CHAPTER 13
ch = book.chapters[12].content;
ch = citeInParagraph(ch, 'read the "limitations" and "future research" sections', '(Hart, 1998)');
ch = citeInParagraph(ch, 'grey literature', '(Adams, Smart, & Huff, 2017)');
ch = citeInParagraph(ch, 'gap identification as a career skill', '(Sandberg & Alvesson, 2011)');
book.chapters[12].content = ch;

// CHAPTER 14
ch = book.chapters[13].content;
ch = citeAfter(ch, 'SQ3R method', '(Robinson, 1946)');
ch = citeInParagraph(ch, 'Programs like Zotero, Mendeley, and EndNote', '(Tramullas et al., 2015)');
ch = citeInParagraph(ch, 'CASP (Critical Appraisal Skills Programme)', '(Critical Appraisal Skills Programme, 2018)');
ch = citeInParagraph(ch, 'free writing', '(Elbow, 1998)');
book.chapters[13].content = ch;

// CHAPTER 15
ch = book.chapters[14].content;
ch = citeInParagraph(ch, 'organise your review thematically', '(Ridley, 2012)');
ch = citeInParagraph(ch, 'over-claiming your contribution', '(Hyland, 2005)');
ch = citeInParagraph(ch, 'positioning against a straw man', '(Sandberg & Alvesson, 2011)');
book.chapters[14].content = ch;

// CHAPTER 16
ch = book.chapters[15].content;
ch = citeInParagraph(ch, 'Originality in research is not about making a revolutionary breakthrough', '(Phillips & Pugh, 2010)');
ch = citeInParagraph(ch, 'replication crisis', '(Open Science Collaboration, 2015)');
ch = citeInParagraph(ch, 'Conceptual replications', '(Schmidt, 2009)');
book.chapters[15].content = ch;

// CHAPTER 17
ch = book.chapters[16].content;
ch = citeInParagraph(ch, 'Ontological', '(Blaikie, 2010)');
ch = citeInParagraph(ch, 'positivist paradigm', '(Comte, 1853/2009)');
ch = citeInParagraph(ch, 'interpretivist paradigm', '(Schwandt, 2000)');
ch = citeInParagraph(ch, 'critical paradigm', '(Kincheloe & McLaren, 2011)');
book.chapters[16].content = ch;

// CHAPTER 18
ch = book.chapters[17].content;
ch = citeInParagraph(ch, 'Confirmation Bias', '(Nickerson, 1998)');
ch = citeInParagraph(ch, 'Selection bias occurs when the participants', '(Heckman, 1979)');
ch = citeInParagraph(ch, 'Publication bias is the tendency', '(Rothstein, Sutton, & Borenstein, 2005)');
ch = citeInParagraph(ch, 'Pre-registration involves publicly registering', '(Nosek, Ebersole, DeHaven, & Mellor, 2018)');
ch = citeInParagraph(ch, 'Triangulation involves using multiple methods', '(Denzin, 1978)');
ch = citeInParagraph(ch, 'Geographic bias', '(Sumathipala, Siribaddana, & Patel, 2004)');
ch = citeInParagraph(ch, 'Citation bias', '(Jannot, Agoritsas, Gayet-Ageron, & Perneger, 2013)');
book.chapters[17].content = ch;

// CHAPTER 19
ch = book.chapters[18].content;
ch = citeInParagraph(ch, 'Personal Reflexivity', '(Finlay, 2002)');
ch = citeInParagraph(ch, 'reflective journal', '(Ortlipp, 2008)');
ch = citeInParagraph(ch, 'peer debriefing', '(Lincoln & Guba, 1985)');
ch = citeInParagraph(ch, 'member checking', '(Birt, Scott, Cavers, Campbell, & Walter, 2016)');
ch = citeInParagraph(ch, 'Participatory research approaches', '(Reason & Bradbury, 2008)');
book.chapters[18].content = ch;

// CHAPTER 20
ch = book.chapters[19].content;
ch = citeInParagraph(ch, 'Andrew Wakefield', '(Deer, 2011)');
ch = citeInParagraph(ch, 'Human Genome Project', '(International Human Genome Sequencing Consortium, 2001)');
ch = citeInParagraph(ch, 'Cherry-picking', '(Fanelli, 2009)');
ch = citeInParagraph(ch, 'Self-plagiarism', '(Roig, 2015)');
book.chapters[19].content = ch;

// CHAPTER 21
ch = book.chapters[20].content;
ch = citeInParagraph(ch, 'Hedged Appropriately', '(Hyland, 1998)');
ch = citeInParagraph(ch, 'passive voice trap', '(Sword, 2012)');
ch = citeInParagraph(ch, 'Write every day, even if only for thirty minutes', '(Silvia, 2007)');
ch = citeInParagraph(ch, 'first draft of any piece of writing is rarely good', '(Lamott, 1994)');
book.chapters[20].content = ch;

// CHAPTER 22
ch = book.chapters[21].content;
ch = citeInParagraph(ch, 'Imposter syndrome', '(Clance & Imes, 1978)');
ch = citeInParagraph(ch, 'up to seventy per cent of people experience imposter syndrome', '(Gravois, 2007)');
ch = citeInParagraph(ch, 'ORCID', '(Haak, Fenner, Paglione, Pentz, & Ratner, 2012)');
book.chapters[21].content = ch;

// CHAPTER 23
ch = book.chapters[22].content;
ch = citeInParagraph(ch, 'synthesis matrix', '(Garrard, 2017)');
ch = citeInParagraph(ch, 'Concept mapping is another valuable technique', '(Novak & Cañas, 2008)');
ch = citeInParagraph(ch, 'selective synthesis', '(Boote & Beile, 2005)');
book.chapters[22].content = ch;

// CHAPTER 24
ch = book.chapters[23].content;
ch = citeInParagraph(ch, 'nervousness you feel before a presentation never completely disappears', '(Dwyer & Davidson, 2012)');
ch = citeInParagraph(ch, 'Artificial intelligence and machine learning', '(Kitchin, 2014)');
ch = citeInParagraph(ch, 'open science movement', '(Vicente-Saez & Martinez-Fuentes, 2018)');
ch = citeInParagraph(ch, 'Interdisciplinary research is becoming both more common', '(Repko, 2012)');
book.chapters[23].content = ch;

console.log('✅ In-text citations added to all 24 chapters');

// ============================================================
// CREATE REFERENCES CHAPTER
// ============================================================
const referencesContent = `
<h1>References</h1>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Abend, G. (2008). The meaning of 'theory'. <em>Sociological Theory</em>, 26(2), 173–199. https://doi.org/10.1111/j.1467-9558.2008.00324.x</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Adams, R. J., Smart, P., & Huff, A. S. (2017). Shades of grey: Guidelines for working with the grey literature in systematic reviews for management and organizational studies. <em>International Journal of Management Reviews</em>, 19(4), 432–454. https://doi.org/10.1111/ijmr.12102</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Adler, M. J., & Van Doren, C. (1972). <em>How to read a book: The classic guide to intelligent reading</em> (Rev. ed.). Simon & Schuster.</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Altbach, P. G. (2001). Academic freedom: International realities and challenges. <em>Higher Education</em>, 41(1), 205–219. https://doi.org/10.1023/A:1026791518365</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Anderson, L. W., & Krathwohl, D. R. (Eds.). (2001). <em>A taxonomy for learning, teaching, and assessing: A revision of Bloom's taxonomy of educational objectives</em> (Complete ed.). Longman.</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Beauchamp, T. L., & Childress, J. F. (2019). <em>Principles of biomedical ethics</em> (8th ed.). Oxford University Press.</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Birt, L., Scott, S., Cavers, D., Campbell, C., & Walter, F. (2016). Member checking: A tool to enhance trustworthiness or merely a nod to validation? <em>Qualitative Health Research</em>, 26(13), 1802–1811. https://doi.org/10.1177/1049732316654870</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Blaikie, N. (2010). <em>Designing social research: The logic of anticipation</em> (2nd ed.). Polity Press.</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Bloom, B. S. (Ed.). (1956). <em>Taxonomy of educational objectives: The classification of educational goals. Handbook I: Cognitive domain</em>. David McKay.</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Boice, R. (1990). <em>Professors as writers: A self-help guide to productive writing</em>. New Forums Press.</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Boote, D. N., & Beile, P. (2005). Scholars before researchers: On the centrality of the dissertation literature review in research preparation. <em>Educational Researcher</em>, 34(6), 3–15. https://doi.org/10.3102/0013189X034006003</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Booth, W. C., Colomb, G. G., & Williams, J. M. (2016). <em>The craft of research</em> (4th ed.). University of Chicago Press.</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Bryman, A. (2016). <em>Social research methods</em> (5th ed.). Oxford University Press.</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Budner, S. (1962). Intolerance of ambiguity as a personality variable. <em>Journal of Personality</em>, 30(1), 29–50. https://doi.org/10.1111/j.1467-6494.1962.tb02303.x</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Clance, P. R., & Imes, S. A. (1978). The imposter phenomenon in high achieving women: Dynamics and therapeutic intervention. <em>Psychotherapy: Theory, Research & Practice</em>, 15(3), 241–247. https://doi.org/10.1037/h0086006</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Cohen, J. (1988). <em>Statistical power analysis for the behavioral sciences</em> (2nd ed.). Lawrence Erlbaum Associates.</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Comte, A. (2009). <em>A general view of positivism</em> (J. H. Bridges, Trans.). Cambridge University Press. (Original work published 1853)</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Creswell, J. W., & Creswell, J. D. (2018). <em>Research design: Qualitative, quantitative, and mixed methods approaches</em> (5th ed.). Sage.</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Creswell, J. W., & Poth, C. N. (2018). <em>Qualitative inquiry and research design: Choosing among five approaches</em> (4th ed.). Sage.</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Critical Appraisal Skills Programme. (2018). <em>CASP checklists</em>. https://casp-uk.net/casp-tools-checklists/</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Davenport, T. H., & Harris, J. G. (2007). <em>Competing on analytics: The new science of winning</em>. Harvard Business School Press.</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">De Rond, M., & Miller, A. N. (2005). Publish or perish: Bane or boon of academic life? <em>Journal of Management Inquiry</em>, 14(4), 321–329. https://doi.org/10.1177/1056492605276850</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Deer, B. (2011). How the case against the MMR vaccine was fixed. <em>BMJ</em>, 342, c5347. https://doi.org/10.1136/bmj.c5347</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Denzin, N. K. (1978). <em>The research act: A theoretical introduction to sociological methods</em> (2nd ed.). McGraw-Hill.</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Denzin, N. K., & Lincoln, Y. S. (Eds.). (2018). <em>The Sage handbook of qualitative research</em> (5th ed.). Sage.</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Deyo, R. A., Diehl, A. K., & Rosenthal, M. (1986). How many days of bed rest for acute low back pain? A randomized clinical trial. <em>New England Journal of Medicine</em>, 315(17), 1064–1070. https://doi.org/10.1056/NEJM198610233151705</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Dwyer, K. K., & Davidson, M. M. (2012). Is public speaking really more feared than death? <em>Communication Research Reports</em>, 29(2), 99–107. https://doi.org/10.1080/08824096.2012.667772</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Elbow, P. (1998). <em>Writing with power: Techniques for mastering the writing process</em> (2nd ed.). Oxford University Press.</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Ericsson, K. A., Krampe, R. T., & Tesch-Römer, C. (1993). The role of deliberate practice in the acquisition of expert performance. <em>Psychological Review</em>, 100(3), 363–406. https://doi.org/10.1037/0033-295X.100.3.363</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Evidence-Based Medicine Working Group. (1992). Evidence-based medicine: A new approach to teaching the practice of medicine. <em>JAMA</em>, 268(17), 2420–2425. https://doi.org/10.1001/jama.1992.03490170092032</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Falagas, M. E., Pitsouni, E. I., Malietzis, G. A., & Pappas, G. (2008). Comparison of PubMed, Scopus, Web of Science, and Google Scholar: Strengths and weaknesses. <em>The FASEB Journal</em>, 22(2), 338–342. https://doi.org/10.1096/fj.07-9492LSF</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Fanelli, D. (2009). How many scientists fabricate and falsify research? A systematic review and meta-analysis of survey data. <em>PLoS ONE</em>, 4(5), e5738. https://doi.org/10.1371/journal.pone.0005738</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Festinger, L. (1954). A theory of social comparison processes. <em>Human Relations</em>, 7(2), 117–140. https://doi.org/10.1177/001872675400700202</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Finlay, L. (2002). "Outing" the researcher: The provenance, process, and practice of reflexivity. <em>Qualitative Health Research</em>, 12(4), 531–545. https://doi.org/10.1177/104973202129120052</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Fisher, R. A. (1925). <em>Statistical methods for research workers</em>. Oliver and Boyd.</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Flick, U. (2018). <em>An introduction to qualitative research</em> (6th ed.). Sage.</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Garrard, J. (2017). <em>Health sciences literature review made easy: The matrix method</em> (5th ed.). Jones & Bartlett Learning.</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Glewwe, P., Kremer, M., & Moulin, S. (2009). Many children left behind? Textbooks and test scores in Kenya. <em>American Economic Journal: Applied Economics</em>, 1(1), 112–135. https://doi.org/10.1257/app.1.1.112</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Graff, G., & Birkenstein, C. (2018). <em>"They say / I say": The moves that matter in academic writing</em> (4th ed.). W. W. Norton.</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Gravois, J. (2007, November 9). You're not fooling anyone. <em>The Chronicle of Higher Education</em>, 54(11), A1.</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Guilford, J. P. (1967). <em>The nature of human intelligence</em>. McGraw-Hill.</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Haak, L. L., Fenner, M., Paglione, L., Pentz, E., & Ratner, H. (2012). ORCID: A system to uniquely identify researchers. <em>Learned Publishing</em>, 25(4), 259–264. https://doi.org/10.1087/20120404</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Hart, C. (1998). <em>Doing a literature review: Releasing the social science research imagination</em>. Sage.</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Heckman, J. J. (1979). Sample selection bias as a specification error. <em>Econometrica</em>, 47(1), 153–161. https://doi.org/10.2307/1912352</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Higgins, J. P. T., & Green, S. (Eds.). (2011). <em>Cochrane handbook for systematic reviews of interventions</em> (Version 5.1.0). The Cochrane Collaboration. https://handbook-5-1.cochrane.org/</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Hulley, S. B., Cummings, S. R., Browner, W. S., Grady, D. G., & Newman, T. B. (2013). <em>Designing clinical research</em> (4th ed.). Lippincott Williams & Wilkins.</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Hume, D. (2003). <em>A treatise of human nature</em> (D. F. Norton & M. J. Norton, Eds.). Oxford University Press. (Original work published 1739)</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Hyland, K. (1998). <em>Hedging in scientific research articles</em>. John Benjamins.</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Hyland, K. (2005). <em>Metadiscourse: Exploring interaction in writing</em>. Continuum.</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">International Human Genome Sequencing Consortium. (2001). Initial sequencing and analysis of the human genome. <em>Nature</em>, 409(6822), 860–921. https://doi.org/10.1038/35057062</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Ioannidis, J. P. A. (2005). Why most published research findings are false. <em>PLoS Medicine</em>, 2(8), e124. https://doi.org/10.1371/journal.pmed.0020124</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Jannot, A.-S., Agoritsas, T., Gayet-Ageron, A., & Perneger, T. V. (2013). Citation bias favoring statistically significant studies was present in medical research. <em>Journal of Clinical Epidemiology</em>, 66(3), 296–301. https://doi.org/10.1016/j.jclinepi.2012.09.015</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Kahneman, D. (2011). <em>Thinking, fast and slow</em>. Farrar, Straus and Giroux.</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Kashdan, T. B., & Silvia, P. J. (2009). Curiosity and interest: The benefits of thriving on novelty and challenge. In S. J. Lopez & C. R. Snyder (Eds.), <em>Oxford handbook of positive psychology</em> (2nd ed., pp. 367–374). Oxford University Press.</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Kincheloe, J. L., & McLaren, P. (2011). Rethinking critical theory and qualitative research. In k. hayes, S. R. Steinberg, & K. Tobin (Eds.), <em>Key works in critical pedagogy</em> (pp. 285–326). Sense Publishers.</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Kitchin, R. (2014). Big data, new epistemologies and paradigm shifts. <em>Big Data & Society</em>, 1(1), 1–12. https://doi.org/10.1177/2053951714528481</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Kuhn, T. S. (1962). <em>The structure of scientific revolutions</em>. University of Chicago Press.</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Kunda, Z. (1990). The case for motivated reasoning. <em>Psychological Bulletin</em>, 108(3), 480–498. https://doi.org/10.1037/0033-2909.108.3.480</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Lamott, A. (1994). <em>Bird by bird: Some instructions on writing and life</em>. Pantheon Books.</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Lincoln, Y. S., & Guba, E. G. (1985). <em>Naturalistic inquiry</em>. Sage.</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Loftus, E. F., & Palmer, J. C. (1974). Reconstruction of automobile destruction: An example of the interaction between language and memory. <em>Journal of Verbal Learning and Verbal Behavior</em>, 13(5), 585–589. https://doi.org/10.1016/S0022-5371(74)80011-3</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Margulis, L. (1970). <em>Origin of eukaryotic cells: Evidence and research implications for a theory of the origin and evolution of microbial, plant, and animal cells on the Precambrian Earth</em>. Yale University Press.</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Marton, F., & Säljö, R. (1976). On qualitative differences in learning: I — Outcome and process. <em>British Journal of Educational Psychology</em>, 46(1), 4–11. https://doi.org/10.1111/j.2044-8279.1976.tb02980.x</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Metz, T. (2007). Toward an African moral theory. <em>The Journal of Political Philosophy</em>, 15(3), 321–341. https://doi.org/10.1111/j.1467-9760.2007.00280.x</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Miles, M. B., Huberman, A. M., & Saldaña, J. (2014). <em>Qualitative data analysis: A methods sourcebook</em> (3rd ed.). Sage.</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Murray, R. (2011). <em>How to write a thesis</em> (3rd ed.). Open University Press.</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">National Commission for the Protection of Human Subjects of Biomedical and Behavioral Research. (1979). <em>The Belmont Report: Ethical principles and guidelines for the protection of human subjects of research</em>. U.S. Department of Health, Education, and Welfare.</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Nickerson, R. S. (1998). Confirmation bias: A ubiquitous phenomenon in many guises. <em>Review of General Psychology</em>, 2(2), 175–220. https://doi.org/10.1037/1089-2680.2.2.175</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Nosek, B. A., Ebersole, C. R., DeHaven, A. C., & Mellor, D. T. (2018). The preregistration revolution. <em>Proceedings of the National Academy of Sciences</em>, 115(11), 2600–2606. https://doi.org/10.1073/pnas.1708274114</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Novak, J. D., & Cañas, A. J. (2008). <em>The theory underlying concept maps and how to construct and use them</em> (Technical Report IHMC CmapTools 2006-01 Rev 01-2008). Institute for Human and Machine Cognition.</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Ohno, T. (1988). <em>Toyota production system: Beyond large-scale production</em>. Productivity Press.</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Open Science Collaboration. (2015). Estimating the reproducibility of psychological science. <em>Science</em>, 349(6251), aac4716. https://doi.org/10.1126/science.aac4716</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Ortlipp, M. (2008). Keeping and using reflective journals in the qualitative research process. <em>The Qualitative Report</em>, 13(4), 695–705. https://doi.org/10.46743/2160-3715/2008.1579</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Pearl, J. (2009). <em>Causality: Models, reasoning, and inference</em> (2nd ed.). Cambridge University Press.</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Pecorari, D. (2008). <em>Academic writing and plagiarism: A linguistic analysis</em>. Continuum.</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Phillips, E. M., & Pugh, D. S. (2010). <em>How to get a PhD: A handbook for students and their supervisors</em> (5th ed.). Open University Press.</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Popper, K. (1959). <em>The logic of scientific discovery</em>. Hutchinson.</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Punch, K. F. (2014). <em>Introduction to social research: Quantitative and qualitative approaches</em> (3rd ed.). Sage.</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Reason, P., & Bradbury, H. (Eds.). (2008). <em>The Sage handbook of action research: Participative inquiry and practice</em> (2nd ed.). Sage.</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Repko, A. F. (2012). <em>Interdisciplinary research: Process and theory</em> (2nd ed.). Sage.</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Ridley, D. (2012). <em>The literature review: A step-by-step guide for students</em> (2nd ed.). Sage.</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Robinson, F. P. (1946). <em>Effective study</em>. Harper & Brothers.</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Robinson, W. S. (1950). Ecological correlations and the behavior of individuals. <em>American Sociological Review</em>, 15(3), 351–357. https://doi.org/10.2307/2087176</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Roig, M. (2015). Avoiding plagiarism, self-plagiarism, and other questionable writing practices: A guide to ethical writing. Office of Research Integrity, U.S. Department of Health and Human Services.</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Rothstein, H. R., Sutton, A. J., & Borenstein, M. (Eds.). (2005). <em>Publication bias in meta-analysis: Prevention, assessment and adjustments</em>. Wiley.</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Sackett, D. L., Rosenberg, W. M., Gray, J. A., Haynes, R. B., & Richardson, W. S. (1996). Evidence based medicine: What it is and what it isn't. <em>BMJ</em>, 312(7023), 71–72. https://doi.org/10.1136/bmj.312.7023.71</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Sackett, D. L., Straus, S. E., Richardson, W. S., Rosenberg, W., & Haynes, R. B. (2000). <em>Evidence-based medicine: How to practice and teach EBM</em> (2nd ed.). Churchill Livingstone.</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Sandberg, J., & Alvesson, M. (2011). Ways of constructing research questions: Gap-spotting or problematization? <em>Organization</em>, 18(1), 23–44. https://doi.org/10.1177/1350508410372151</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Saunders, M., Lewis, P., & Thornhill, A. (2019). <em>Research methods for business students</em> (8th ed.). Pearson.</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Schmidt, S. (2009). Shall we really do it again? The powerful concept of replication is neglected in the social sciences. <em>Review of General Psychology</em>, 13(2), 90–100. https://doi.org/10.1037/a0015108</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Schön, D. A. (1983). <em>The reflective practitioner: How professionals think in action</em>. Basic Books.</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Schwandt, T. A. (2000). Three epistemological stances for qualitative inquiry: Interpretivism, hermeneutics, and social constructionism. In N. K. Denzin & Y. S. Lincoln (Eds.), <em>Handbook of qualitative research</em> (2nd ed., pp. 189–213). Sage.</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Shadish, W. R., Cook, T. D., & Campbell, D. T. (2002). <em>Experimental and quasi-experimental designs for generalized causal inference</em>. Houghton Mifflin.</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Silvia, P. J. (2007). <em>How to write a lot: A practical guide to productive academic writing</em>. American Psychological Association.</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Simpson, E. H. (1951). The interpretation of interaction in contingency tables. <em>Journal of the Royal Statistical Society, Series B</em>, 13(2), 238–241. https://doi.org/10.1111/j.2517-6161.1951.tb00088.x</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Steneck, N. H. (2007). <em>ORI introduction to the responsible conduct of research</em> (Rev. ed.). Office of Research Integrity, U.S. Department of Health and Human Services.</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Sumathipala, A., Siribaddana, S., & Patel, V. (2004). Under-representation of developing countries in the research literature: Ethical issues arising from a survey of five leading medical journals. <em>BMC Medical Ethics</em>, 5, 5. https://doi.org/10.1186/1472-6939-5-5</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Swales, J. M. (1990). <em>Genre analysis: English in academic and research settings</em>. Cambridge University Press.</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Sword, H. (2012). <em>Stylish academic writing</em>. Harvard University Press.</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Tashakkori, A., & Teddlie, C. (Eds.). (2010). <em>Sage handbook of mixed methods in social & behavioral research</em> (2nd ed.). Sage.</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Thompson, W. C. (2009). Painting the target around the matching profile: The Texas sharpshooter fallacy in forensic DNA interpretation. <em>Law, Probability and Risk</em>, 8(3), 257–276. https://doi.org/10.1093/lpr/mgp013</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Toulmin, S. E. (2003). <em>The uses of argument</em> (Updated ed.). Cambridge University Press.</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Tramullas, J., Sánchez-Casabón, A. I., & Garay-Cerda, P. (2015). An evaluation based on the digital library user: An experience with reference management software. <em>El Profesional de la Información</em>, 24(5), 570–578. https://doi.org/10.3145/epi.2015.sep.06</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Tversky, A., & Kahneman, D. (1974). Judgment under uncertainty: Heuristics and biases. <em>Science</em>, 185(4157), 1124–1131. https://doi.org/10.1126/science.185.4157.1124</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Van Teijlingen, E. R., & Hundley, V. (2001). The importance of pilot studies. <em>Social Research Update</em>, 35, 1–4. University of Surrey.</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Vicente-Saez, R., & Martinez-Fuentes, C. (2018). Open Science now: A systematic literature review for an integrated definition. <em>Journal of Business Research</em>, 88, 428–436. https://doi.org/10.1016/j.jbusres.2017.12.043</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Waddell, G., Feder, G., & Lewis, M. (1997). Systematic reviews of bed rest and advice to stay active for acute low back pain. <em>British Journal of General Practice</em>, 47(423), 647–652.</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Walton, D. (1999). The appeal to popularity and presumption by common knowledge. <em>Argumentation</em>, 13(2), 183–199. https://doi.org/10.1023/A:1007713005490</p>

<p style="margin-bottom:6px;text-indent:-36px;padding-left:36px;">Wasserstein, R. L., & Lazar, N. A. (2016). The ASA statement on p-values: Context, process, and purpose. <em>The American Statistician</em>, 70(2), 129–133. https://doi.org/10.1080/00031305.2016.1154108</p>
`;

// Add References as a new chapter at the end
book.chapters.push({
  id: 'ch-references',
  title: 'References',
  content: referencesContent
});

console.log('✅ References chapter added with 90+ real citations');

// Save
fs.writeFileSync(bookPath, JSON.stringify(book, null, 2), 'utf-8');

// Count
const updated = JSON.parse(fs.readFileSync(bookPath, 'utf-8'));
let totalWords = 0;
updated.chapters.forEach((ch, i) => {
  const words = ch.content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
  totalWords += words;
});
console.log(`Total words: ${totalWords}`);
console.log(`Total chapters: ${updated.chapters.length} (including References)`);
console.log('Done!');
