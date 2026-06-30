/**
 * Book 2 Assembler: Finding and Reading Research
 * Combines all part files and generates books/book-02.json
 * 
 * Run: node assemble-book-02.js
 */

const fs = require('fs');
const path = require('path');

// Import all parts
const part1 = require('./generate-book-02');      // ch01–ch04
const part2 = require('./generate-book-02-part2');  // ch05–ch09
const part34 = require('./generate-book-02-part34'); // ch10–ch17
const part56 = require('./generate-book-02-part56'); // ch18–ch25

// Chapter metadata: [functionName, title, part]
const chapterMeta = [
  // PART ONE: Understanding the Academic Information Landscape
  ['ch01', 'Chapter 1: Where Research Lives: Journals, Books, Theses, and Reports', 'PART ONE: Understanding the Academic Information Landscape'],
  ['ch02', 'Chapter 2: Peer Review Explained: What It Is and Why It Matters', 'PART ONE: Understanding the Academic Information Landscape'],
  ['ch03', 'Chapter 3: Open Access vs. Subscription Sources: Navigating Both Worlds', 'PART ONE: Understanding the Academic Information Landscape'],
  ['ch04', 'Chapter 4: Primary vs. Secondary vs. Grey Literature', 'PART ONE: Understanding the Academic Information Landscape'],
  // PART TWO: Mastering Academic Search
  ['ch05', 'Chapter 5: Introduction to Academic Databases: Scopus, Web of Science, JSTOR, PubMed', 'PART TWO: Mastering Academic Search'],
  ['ch06', 'Chapter 6: Search Strategies: Boolean Operators, Filters, and Keywords That Work', 'PART TWO: Mastering Academic Search'],
  ['ch07', 'Chapter 7: Google Scholar: Powerful but Dangerous — Using It Correctly', 'PART TWO: Mastering Academic Search'],
  ['ch08', 'Chapter 8: Snowballing and Citation Tracking: Finding What Databases Miss', 'PART TWO: Mastering Academic Search'],
  ['ch09', 'Chapter 9: Managing Your Search: Reference Managers and Systematic Recording', 'PART TWO: Mastering Academic Search'],
  // PART THREE: Evaluating Sources
  ['ch10', 'Chapter 10: How to Judge a Journal: Impact Factor, Indexing, and Reputation', 'PART THREE: Evaluating Sources'],
  ['ch11', 'Chapter 11: Evaluating an Article Before You Read It Fully', 'PART THREE: Evaluating Sources'],
  ['ch12', 'Chapter 12: Predatory Journals: How to Spot and Avoid Them', 'PART THREE: Evaluating Sources'],
  ['ch13', 'Chapter 13: When to Trust a Source and When to Question It', 'PART THREE: Evaluating Sources'],
  // PART FOUR: Reading Research Strategically
  ['ch14', 'Chapter 14: How to Read a Journal Article in 20 Minutes Without Missing Anything', 'PART FOUR: Reading Research Strategically'],
  ['ch15', 'Chapter 15: Deep Reading: When and How to Read a Paper Thoroughly', 'PART FOUR: Reading Research Strategically'],
  ['ch16', 'Chapter 16: Reading Theoretical Frameworks and Conceptual Papers', 'PART FOUR: Reading Research Strategically'],
  ['ch17', 'Chapter 17: Taking Notes That Are Useful Later — Not Just Now', 'PART FOUR: Reading Research Strategically'],
  // PART FIVE: Extracting and Organising Knowledge
  ['ch18', 'Chapter 18: Building a Personal Knowledge System from Your Reading', 'PART FIVE: Extracting and Organising Knowledge'],
  ['ch19', 'Chapter 19: Annotating, Tagging, and Categorising Sources', 'PART FIVE: Extracting and Organising Knowledge'],
  ['ch20', 'Chapter 20: Identifying Patterns, Themes, and Contradictions Across Sources', 'PART FIVE: Extracting and Organising Knowledge'],
  ['ch21', 'Chapter 21: From Reading to Thinking: Making Sense of What You Have Found', 'PART FIVE: Extracting and Organising Knowledge'],
  // PART SIX: Critically Appraising What You Read
  ['ch22', 'Chapter 22: How to Critique a Quantitative Study', 'PART SIX: Critically Appraising What You Read'],
  ['ch23', 'Chapter 23: How to Critique a Qualitative Study', 'PART SIX: Critically Appraising What You Read'],
  ['ch24', 'Chapter 24: Spotting Weak Research: Red Flags Every Reader Must Know', 'PART SIX: Critically Appraising What You Read'],
  ['ch25', 'Chapter 25: Engaging with Research You Disagree With', 'PART SIX: Critically Appraising What You Read'],
];

// Map function names to their sources
const allFunctions = {
  ...part1,
  ...part2,
  ...part34,
  ...part56,
};

// References section (to be appended to ch25)
const referencesContent = `<h1>References</h1>
<p>The following references have been cited throughout this book. They are presented in APA 7th edition format.</p>

<p>Adams, J., Smart, P., & Huff, A. S. (2017). Shades of grey: Guidelines for working with the grey literature in systematic reviews for management and organizational studies. <em>International Journal of Management Reviews</em>, 19(4), 432–454.</p>

<p>Adler, M. J., & Van Doren, C. (1972). <em>How to read a book</em> (Rev. ed.). Simon & Schuster.</p>

<p>Ahrens, S. (2017). <em>How to take smart notes: One simple technique to boost writing, learning and thinking</em>. Sönke Ahrens.</p>

<p>Baas, J., Schotten, M., Plume, A., Côté, G., & Karber, R. (2020). Scopus as a curated, high-quality bibliometric data source for academic research in quantitative science studies. <em>Quantitative Science Studies</em>, 1(1), 377–386.</p>

<p>Beall, J. (2012). Predatory publishers are corrupting open access. <em>Nature</em>, 489(7415), 179.</p>

<p>Birkle, C., Pendlebury, D. A., Schnell, J., & Adams, J. (2020). Web of Science as a data source for research on scientific and scholarly activity. <em>Quantitative Science Studies</em>, 1(1), 363–376.</p>

<p>Blank, R. M. (1991). The effects of double-blind versus single-blind reviewing: Experimental evidence from the <em>American Economic Review</em>. <em>American Economic Review</em>, 81(5), 1041–1067.</p>

<p>Boice, R. (1990). <em>Professors as writers: A self-help guide to productive writing</em>. New Forums Press.</p>

<p>Boote, D. N., & Beile, P. (2005). Scholars before researchers: On the centrality of the dissertation literature review in research preparation. <em>Educational Researcher</em>, 34(6), 3–15.</p>

<p>Booth, A., Sutton, A., & Papaioannou, D. (2016). <em>Systematic approaches to a successful literature review</em> (2nd ed.). Sage.</p>

<p>Booth, W. C., Colomb, G. G., & Williams, J. M. (2016). <em>The craft of research</em> (4th ed.). University of Chicago Press.</p>

<p>Borgman, C. L. (2007). <em>Scholarship in the digital age: Information, infrastructure, and the Internet</em>. MIT Press.</p>

<p>Bornmann, L. (2011). Scientific peer review. <em>Annual Review of Information Science and Technology</em>, 45(1), 197–245.</p>

<p>Bornmann, L. (2014). Do altmetrics point to the broader impact of research? An overview of benefits and disadvantages of altmetrics. <em>Journal of Informetrics</em>, 8(4), 895–903.</p>

<p>Bramer, W. M., Rethlefsen, M. L., Kleijnen, J., & Franco, O. H. (2017). Optimal database combinations for literature searches in systematic reviews. <em>Systematic Reviews</em>, 6(1), 245.</p>

<p>Braun, V., & Clarke, V. (2006). Using thematic analysis in psychology. <em>Qualitative Research in Psychology</em>, 3(2), 77–101.</p>

<p>Bryman, A. (2016). <em>Social research methods</em> (5th ed.). Oxford University Press.</p>

<p>Camerer, C. F., Dreber, A., Holzmeister, F., Ho, T.-H., Huber, J., Johannesson, M., ... & Wu, H. (2018). Evaluating the replicability of social science experiments in Nature and Science between 2010 and 2015. <em>Nature Human Behaviour</em>, 2(9), 637–644.</p>

<p>Case, D. O., & Given, L. M. (2016). <em>Looking for information: A survey of research on information seeking, needs, and behavior</em> (4th ed.). Emerald.</p>

<p>Cohen, J. (1992). A power primer. <em>Psychological Bulletin</em>, 112(1), 155–159.</p>

<p>Cooke, A., Smith, D., & Booth, A. (2012). Beyond PICO: The SPIDER tool for qualitative evidence synthesis. <em>Qualitative Health Research</em>, 22(10), 1435–1443.</p>

<p>Cooper, H. (2017). <em>Research synthesis and meta-analysis: A step-by-step approach</em> (5th ed.). Sage.</p>

<p>Corley, K. G., & Gioia, D. A. (2011). Building theory about theory building: What constitutes a theoretical contribution? <em>Academy of Management Review</em>, 36(1), 12–32.</p>

<p>Creswell, J. W., & Creswell, J. D. (2018). <em>Research design: Qualitative, quantitative, and mixed methods approaches</em> (5th ed.). Sage.</p>

<p>Cronin, B., & La Barre, K. (2004). Mickey Mouse and Milton: Book publishing in the humanities. <em>Learned Publishing</em>, 17(2), 85–98.</p>

<p>Csiszar, A. (2018). <em>The scientific journal: Authorship and the politics of knowledge in the nineteenth century</em>. University of Chicago Press.</p>

<p>Dunleavy, P. (2003). <em>Authoring a PhD: How to plan, draft, write and finish a doctoral thesis or dissertation</em>. Palgrave Macmillan.</p>

<p>Easterbrook, P. J., Gopalan, R., Berlin, J. A., & Matthews, D. R. (1991). Publication bias in clinical research. <em>The Lancet</em>, 337(8746), 867–872.</p>

<p>Evans, D., Gruba, P., & Zobel, J. (2014). <em>How to write a better thesis</em> (3rd ed.). Springer.</p>

<p>Falagas, M. E., Pitsouni, E. I., Malietzis, G. A., & Pappas, G. (2008). Comparison of PubMed, Scopus, Web of Science, and Google Scholar. <em>The FASEB Journal</em>, 22(2), 338–342.</p>

<p>Fernandez, P. (2011). Zotero: Information management software 2.0. <em>Library Hi Tech News</em>, 28(4), 5–7.</p>

<p>Field, A. (2018). <em>Discovering statistics using IBM SPSS statistics</em> (5th ed.). Sage.</p>

<p>Fink, A. (2019). <em>Conducting research literature reviews: From the Internet to paper</em> (5th ed.). Sage.</p>

<p>Ford, E. (2013). Defining and characterizing open peer review: A review of the literature. <em>Journal of Scholarly Publishing</em>, 44(4), 311–326.</p>

<p>Forte, T. (2022). <em>Building a second brain: A proven method to organize your digital life and unlock your creative potential</em>. Atria Books.</p>

<p>Freyne, J., Coyle, L., Smyth, B., & Cunningham, P. (2010). Relative status of journal and conference publications in computer science. <em>Communications of the ACM</em>, 53(11), 124–132.</p>

<p>Fry, J., Oppenheim, C., Probets, S., Creaser, C., Greenwood, H., Spezi, V., & White, S. (2009). <em>PEER behavioural research: Authors and users vis-à-vis journals and repositories</em>. Loughborough University.</p>

<p>Garfield, E. (2006). The history and meaning of the journal impact factor. <em>JAMA</em>, 295(1), 90–93.</p>

<p>Gilmour, R., & Cobus-Kuo, L. (2011). Reference management software: A comparative analysis of four products. <em>Issues in Science and Technology Librarianship</em>, 66(66).</p>

<p>Gilson, L. L., & Goldberg, C. B. (2015). Editors' comment: So, what is a conceptual paper? <em>Group & Organization Management</em>, 40(2), 127–130.</p>

<p>Graff, G., & Birkenstein, C. (2018). <em>"They say / I say": The moves that matter in academic writing</em> (4th ed.). W. W. Norton.</p>

<p>Greenhalgh, T. (2019). <em>How to read a paper: The basics of evidence-based medicine and healthcare</em> (6th ed.). Wiley-Blackwell.</p>

<p>Greenhalgh, T., & Peacock, R. (2005). Effectiveness and efficiency of search methods in systematic reviews of complex evidence. <em>BMJ</em>, 331(7524), 1064–1065.</p>

<p>Grudniewicz, A., Moher, D., Cobey, K. D., Bryson, G. L., Cukier, S., Allen, K., ... & Lalu, M. M. (2019). Predatory journals: No definition, no defence. <em>Nature</em>, 576(7786), 210–212.</p>

<p>Gusenbauer, M., & Haddaway, N. R. (2020). Which academic search systems are suitable for systematic reviews or meta-analyses? <em>Research Synthesis Methods</em>, 11(2), 181–217.</p>

<p>Haddaway, N. R., Collins, A. M., Coughlin, D., & Kirk, S. (2015). The role of Google Scholar in evidence reviews. <em>PLoS ONE</em>, 10(9), e0138237.</p>

<p>Harley, D., Acord, S. K., Earl-Novell, S., Lawrence, S., & King, C. J. (2010). <em>Assessing the future landscape of scholarly communication</em>. University of California, Berkeley.</p>

<p>Hart, C. (2018). <em>Doing a literature review: Releasing the research imagination</em> (2nd ed.). Sage.</p>

<p>Hartley, J. (2004). Current findings from research on structured abstracts. <em>Journal of the Medical Library Association</em>, 92(3), 368.</p>

<p>Hartley, J. (2008). <em>Academic writing and publishing: A practical handbook</em>. Routledge.</p>

<p>Hicks, D., Wouters, P., Waltman, L., De Rijcke, S., & Rafols, I. (2015). Bibliometrics: The Leiden Manifesto for research metrics. <em>Nature</em>, 520(7548), 429–431.</p>

<p>Higgins, J. P. T., & Thomas, J. (Eds.). (2019). <em>Cochrane handbook for systematic reviews of interventions</em> (2nd ed.). Wiley.</p>

<p>Huisman, J., & Smits, J. (2017). Duration and quality of the peer review process. <em>Scientometrics</em>, 113(1), 633–650.</p>

<p>Hyland, K. (2015). <em>Academic publishing: Issues and challenges in the construction of knowledge</em>. Oxford University Press.</p>

<p>Ioannidis, J. P. A. (2005). Why most published research findings are false. <em>PLoS Medicine</em>, 2(8), e124.</p>

<p>Jalali, S., & Wohlin, C. (2012). Systematic literature studies: Database searches vs. backward snowballing. <em>Proceedings of the 2012 ACM-IEEE International Symposium on Empirical Software Engineering and Measurement</em>, 29–38.</p>

<p>Jefferson, T., Rudin, M., Brodney Folse, S., & Davidoff, F. (2007). Editorial peer review for improving the quality of reports of biomedical studies. <em>Cochrane Database of Systematic Reviews</em>, (2), MR000016.</p>

<p>Jeng, W., He, D., & Jiang, J. (2015). User participation in an academic social networking service: A survey of open group users on Mendeley. <em>Journal of the Association for Information Science and Technology</em>, 66(5), 890–904.</p>

<p>Keshav, S. (2007). How to read a paper. <em>ACM SIGCOMM Computer Communication Review</em>, 37(3), 83–84.</p>

<p>Kousha, K., & Thelwall, M. (2019). Can Google Scholar and Mendeley help to assess the scholarly impacts of dissertations? <em>Journal of Informetrics</em>, 13(2), 467–484.</p>

<p>Larivière, V., Haustein, S., & Mongeon, P. (2015). The oligopoly of academic publishers in the digital era. <em>PLoS ONE</em>, 10(6), e0127502.</p>

<p>Lee, C. J., Sugimoto, C. R., Zhang, G., & Cronin, B. (2013). Bias in peer review. <em>Journal of the American Society for Information Science and Technology</em>, 64(1), 2–17.</p>

<p>Lincoln, Y. S., & Guba, E. G. (1985). <em>Naturalistic inquiry</em>. Sage.</p>

<p>Lovejoy, T. I., Revenson, T. A., & France, C. R. (2011). Reviewing manuscripts for peer-review journals: A primer for novice and seasoned reviewers. <em>Annals of Behavioral Medicine</em>, 42(1), 1–13.</p>

<p>Martín-Martín, A., Orduna-Malea, E., & Delgado López-Cózar, E. (2018). Coverage of highly-cited documents in Google Scholar, Web of Science, and Scopus: A multidisciplinary comparison. <em>Scientometrics</em>, 116(3), 2175–2188.</p>

<p>Martín-Martín, A., Thelwall, M., Orduna-Malea, E., & Delgado López-Cózar, E. (2021). Google Scholar, Microsoft Academic, Scopus, Dimensions, Web of Science, and OpenCitations' COCI. <em>Scientometrics</em>, 126(1), 871–906.</p>

<p>Mauch, J. E., & Park, N. (2003). <em>Guide to the successful thesis and dissertation</em> (5th ed.). Marcel Dekker.</p>

<p>Mead, T. L., & Beale, D. G. (2011). Enhancing the relevance of reference management systems for undergraduates. <em>Reference Services Review</em>, 39(2), 267–276.</p>

<p>Moed, H. F. (2010). Measuring contextual citation impact of scientific journals. <em>Journal of Informetrics</em>, 4(3), 265–277.</p>

<p>Moher, D., Shamseer, L., Cobey, K. D., Lalu, M. M., Galipeau, J., Avey, M. T., ... & Ziai, H. (2017). Stop this waste of people, animals and money. <em>Nature</em>, 549(7670), 23–25.</p>

<p>Mongeon, P., & Paul-Hus, A. (2016). The journal coverage of Web of Science and Scopus: A comparative analysis. <em>Scientometrics</em>, 106(1), 213–228.</p>

<p>Montesi, M., & Owen, J. M. (2008). From conference to journal publication: How conference papers in software engineering are extended for publication in journals. <em>Journal of the American Society for Information Science and Technology</em>, 59(5), 816–829.</p>

<p>Mulligan, A., Hall, L., & Raphael, E. (2013). Peer review in a changing world: An international study measuring the attitudes of researchers. <em>Journal of the American Society for Information Science and Technology</em>, 64(1), 132–161.</p>

<p>Nickerson, R. S. (1998). Confirmation bias: A ubiquitous phenomenon in many guises. <em>Review of General Psychology</em>, 2(2), 175–220.</p>

<p>Nutley, S. M., Walter, I., & Davies, H. T. O. (2007). <em>Using evidence: How research can inform public services</em>. Policy Press.</p>

<p>Olijhoek, T., Bjørnshauge, L., & Mitchell, D. (2015). Criteria for open access and publishing. <em>ScienceOpen Research</em>.</p>

<p>Open Science Collaboration. (2015). Estimating the reproducibility of psychological science. <em>Science</em>, 349(6251), aac4716.</p>

<p>Pautasso, M. (2013). Ten simple rules for writing a literature review. <em>PLoS Computational Biology</em>, 9(7), e1003149.</p>

<p>Peters, D. P., & Ceci, S. J. (1982). Peer-review practices of psychological journals. <em>Behavioral and Brain Sciences</em>, 5(2), 187–195.</p>

<p>Petticrew, M., & Roberts, H. (2006). <em>Systematic reviews in the social sciences: A practical guide</em>. Blackwell.</p>

<p>Piwowar, H., Priem, J., Larivière, V., Alperin, J. P., Matthias, L., Norlander, B., ... & Haustein, S. (2018). The state of OA: A large-scale analysis of the prevalence and impact of open access articles. <em>PeerJ</em>, 6, e4375.</p>

<p>Renear, A. H., & Palmer, C. L. (2009). Strategic reading, ontologies, and the future of scientific publishing. <em>Science</em>, 325(5942), 828–832.</p>

<p>Ridley, D. (2012). <em>The literature review: A step-by-step guide for students</em> (2nd ed.). Sage.</p>

<p>Ross-Hellauer, T. (2017). What is open peer review? A systematic review. <em>F1000Research</em>, 6, 588.</p>

<p>Rothstein, H. R., Sutton, A. J., & Borenstein, M. (Eds.). (2005). <em>Publication bias in meta-analysis: Prevention, assessment and adjustments</em>. Wiley.</p>

<p>Sampson, M., & McGowan, J. (2006). Errors in search strategies were identified by type and frequency. <em>Journal of Clinical Epidemiology</em>, 59(10), 1057–1063.</p>

<p>Schonfeld, R. C., & Guthrie, K. M. (2007). The changing information services needs of faculty. <em>EDUCAUSE Review</em>, 42(4), 8–9.</p>

<p>Seglen, P. O. (1997). Why the impact factor of journals should not be used for evaluating research. <em>BMJ</em>, 314(7079), 498–502.</p>

<p>Shadish, W. R., Cook, T. D., & Campbell, D. T. (2002). <em>Experimental and quasi-experimental designs for generalized causal inference</em>. Houghton Mifflin.</p>

<p>Smith, R. (2006). Peer review: A flawed process at the heart of science and journals. <em>Journal of the Royal Society of Medicine</em>, 99(4), 178–182.</p>

<p>Sonnenwald, D. H. (2007). Scientific collaboration. <em>Annual Review of Information Science and Technology</em>, 41(1), 643–681.</p>

<p>Suddaby, R. (2010). Editor's comments: Construct clarity in theories of management and organization. <em>Academy of Management Review</em>, 35(3), 346–357.</p>

<p>Suber, P. (2012). <em>Open access</em>. MIT Press.</p>

<p>Teixeira da Silva, J. A., & Tsigaris, P. (2018). What value do journal whitelists and blacklists have in academia? <em>The Journal of Academic Librarianship</em>, 44(6), 781–792.</p>

<p>Tennant, J. P., Crane, H., Crick, T., Davila, J., Enkhbayar, A., Havemann, J., ... & Vanholsbeeck, M. (2019). Ten hot topics around scholarly publishing. <em>Publications</em>, 7(2), 34.</p>

<p>Tenopir, C., & King, D. W. (2004). <em>Communication patterns of engineers</em>. IEEE Press.</p>

<p>Tenopir, C., Mays, R., & Wu, L. (2009). Journal article growth and reading patterns. <em>New Review of Information Networking</em>, 14(1), 4–21.</p>

<p>Testa, J. (2018). <em>The Web of Science journal evaluation process</em>. Clarivate Analytics.</p>

<p>Thompson, J. B. (2005). <em>Books in the digital age: The transformation of academic and higher education publishing in Britain and the United States</em>. Polity Press.</p>

<p>Tomkins, A., Zhang, M., & Heavlin, W. D. (2017). Reviewer bias in single-versus double-blind peer review. <em>Proceedings of the National Academy of Sciences</em>, 114(48), 12708–12713.</p>

<p>Tracy, S. J. (2010). Qualitative quality: Eight "big-tent" criteria for excellent qualitative research. <em>Qualitative Inquiry</em>, 16(10), 837–851.</p>

<p>Vrettas, G., & Sanderson, M. (2015). Conferences versus journals in computer science. <em>Journal of the Association for Information Science and Technology</em>, 66(12), 2674–2684.</p>

<p>Ware, M. (2008). Peer review in scholarly journals. <em>Publishing Research Consortium</em>.</p>

<p>Whetten, D. A. (1989). What constitutes a theoretical contribution? <em>Academy of Management Review</em>, 14(4), 490–495.</p>

<p>Wohlin, C. (2014). Guidelines for snowballing in systematic literature studies and a replication in software engineering. <em>Proceedings of the 18th International Conference on Evaluation and Assessment in Software Engineering</em>, 1–10.</p>

<p>Wolf, M. (2018). <em>Reader, come home: The reading brain in a digital world</em>. Harper.</p>`;

// Build the chapters array
console.log('Building Book 2: Finding and Reading Research...');
console.log('─'.repeat(60));

const chapters = [];

for (let i = 0; i < chapterMeta.length; i++) {
  const [funcName, title, part] = chapterMeta[i];
  const chNum = String(i + 1).padStart(2, '0');
  
  let content;
  if (allFunctions[funcName]) {
    content = allFunctions[funcName]();
    console.log(`  ✓ ch-${chNum}: ${title.substring(0, 60)}...`);
  } else {
    console.error(`  ✗ MISSING: ${funcName}`);
    process.exit(1);
  }

  // Append references to the last chapter
  if (i === chapterMeta.length - 1) {
    content += referencesContent;
    console.log('  ✓ References appended to final chapter');
  }

  chapters.push({
    id: `ch-${chNum}`,
    title: title,
    part: part,
    content: content
  });
}

// Build the book JSON
const book = {
  id: 'book-02',
  title: 'Finding and Reading Research',
  subtitle: 'How to Search, Evaluate, and Extract Knowledge from Academic Sources',
  author: 'Homers Research Consult',
  publisher: 'HRC Press, Accra',
  edition: '1st Edition',
  year: 2026,
  pages: 260,
  category: 'Academic Research',
  chapters: chapters
};

// Write to file
const outPath = path.join(__dirname, 'books', 'book-02.json');
const json = JSON.stringify(book, null, 2);

fs.writeFileSync(outPath, json, 'utf8');

const fileSizeKB = (Buffer.byteLength(json, 'utf8') / 1024).toFixed(1);
console.log('─'.repeat(60));
console.log(`✅ Book 2 generated successfully!`);
console.log(`   File: ${outPath}`);
console.log(`   Size: ${fileSizeKB} KB`);
console.log(`   Chapters: ${chapters.length}`);
console.log(`   Parts: 6`);
console.log(`   Pages: ${book.pages}`);
