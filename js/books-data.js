/**
 * Books metadata - the 10 research books
 * Based on the official HRC TOC (June 2026)
 * 8 Academic Research Books + 2 Business Research Books
 */
const BOOKS_DATA = [
  {
    id: 'book-01',
    number: 1,
    title: 'The Research Mind',
    type: 'Academic Research',
    description: 'How to Think, Question, and Reason Like a Scholar — training the intellectual engine behind every great researcher.',
    chapters: 25,
    pages: 240,
    cover: 'img/book-01-cover.png',
    status: 'draft',
    lastUpdated: null
  },
  {
    id: 'book-02',
    number: 2,
    title: 'Finding and Reading Research',
    type: 'Academic Research',
    description: 'How to Search, Evaluate, and Extract Knowledge from Academic Sources — navigating journals, databases, and building knowledge systems.',
    chapters: 25,
    pages: 260,
    cover: 'img/book-02-cover.png',
    status: 'draft',
    lastUpdated: '2026-06-29'
  },
  {
    id: 'book-03',
    number: 3,
    title: 'Designing Your Study',
    type: 'Academic Research',
    description: 'A Decision-Based Guide to Research Methodology — every chapter is a decision point from paradigm to sampling.',
    chapters: 23,
    pages: 260,
    cover: 'img/book-03-cover.png',
    status: 'draft',
    lastUpdated: '2026-06-30'
  },
  {
    id: 'book-04',
    number: 4,
    title: 'Data Unravelled',
    type: 'Academic Research',
    description: 'How to Analyse, Interpret, and Present Research Findings — from data cleaning to compelling visualisation.',
    chapters: 24,
    pages: 245,
    cover: 'img/book-04-cover.png',
    status: 'draft',
    lastUpdated: null
  },
  {
    id: 'book-05',
    number: 5,
    title: 'The Literature Review Mastery Guide',
    type: 'Academic Research',
    description: 'How to Search, Synthesise, and Write a Review That Stands on Its Own — the most misunderstood part of research, mastered.',
    chapters: 23,
    pages: 235,
    cover: 'img/book-05-cover.png',
    status: 'draft',
    lastUpdated: null
  },
  {
    id: 'book-06',
    number: 6,
    title: 'The Academic Writer',
    type: 'Academic Research',
    description: 'Producing Clear, Credible, and Compelling Research Writing — not what to research, but how to write about it.',
    chapters: 24,
    pages: 250,
    cover: 'img/book-06-cover.png',
    status: 'draft',
    lastUpdated: null
  },
  {
    id: 'book-07',
    number: 7,
    title: 'From Dissertation to Defence',
    type: 'Academic Research',
    description: 'Completing Your Thesis with Confidence from Start to Finish — managing the most demanding academic undertaking.',
    chapters: 25,
    pages: 270,
    cover: 'img/book-07-cover.png',
    status: 'draft',
    lastUpdated: null
  },
  {
    id: 'book-08',
    number: 8,
    title: 'Research Ethics in Practice',
    type: 'Academic Research',
    description: 'Principles, Dilemmas, and Decision-Making for Responsible Scholars — ethics as a continuous practice, not a checkbox.',
    chapters: 24,
    pages: 242,
    cover: 'img/book-08-cover.png',
    status: 'draft',
    lastUpdated: null
  },
  {
    id: 'book-09',
    number: 9,
    title: 'Winning Research Funding',
    type: 'Business Research',
    description: 'How to Write Proposals That Get Approved and Grants That Get Awarded — the science and strategy of securing funding.',
    chapters: 25,
    pages: 265,
    cover: 'img/book-09-cover.png',
    status: 'draft',
    lastUpdated: null
  },
  {
    id: 'book-10',
    number: 10,
    title: 'Research to Impact',
    type: 'Business Research',
    description: 'How to Communicate Your Findings to the World Beyond Academia — translating research into real-world change.',
    chapters: 24,
    pages: 248,
    cover: 'img/book-10-cover.png',
    status: 'draft',
    lastUpdated: null
  }
];
