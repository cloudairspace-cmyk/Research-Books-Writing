/**
 * CEO Feedback Retriever
 * 
 * Internal utility for pulling all CEO comments from the review platform
 * so the writing team can systematically address each piece of feedback.
 * 
 * Usage:
 *   - From the browser console on any platform page:
 *       CEOFeedback.getAll()           → All CEO comments across all books
 *       CEOFeedback.getByBook('book-01') → CEO comments for a specific book
 *       CEOFeedback.getByChapter('book-01', 'ch-03') → CEO comments for a specific chapter
 *       CEOFeedback.getUnresolved()    → Only unresolved CEO comments
 *       CEOFeedback.getSummary()       → Quick stats summary
 *       CEOFeedback.exportCSV()        → Download all feedback as CSV
 *       CEOFeedback.exportJSON()       → Download all feedback as JSON
 *       CEOFeedback.printReport()      → Pretty-print a full report to console
 */

const CEOFeedback = {

  // ---- Internal helpers ----

  /**
   * Check if a comment was made by the CEO
   */
  _isCEO(comment) {
    if (!comment || !comment.role) return false;
    const role = comment.role.toLowerCase();
    return role === 'reviewer' || role === 'ceo';
  },

  /**
   * Get book metadata by ID
   */
  _getBookMeta(bookId) {
    if (typeof BOOKS_DATA !== 'undefined') {
      return BOOKS_DATA.find(b => b.id === bookId) || null;
    }
    if (typeof DB !== 'undefined') {
      const books = DB.getBooks();
      return books.find(b => b.id === bookId) || null;
    }
    return null;
  },

  /**
   * Get all chapter data for a book (from loaded JSON or DB)
   */
  async _getChapters(bookId) {
    try {
      const resp = await fetch(`books/${bookId}.json`);
      if (resp.ok) {
        const data = await resp.json();
        return data.chapters || [];
      }
    } catch (e) { /* silent */ }
    return [];
  },

  /**
   * Extract plain text from an HTML content snippet (first 120 chars)
   */
  _extractText(html, maxLen = 120) {
    if (!html) return '';
    const div = document.createElement('div');
    div.innerHTML = html;
    const text = div.textContent.trim();
    return text.length > maxLen ? text.substring(0, maxLen) + '…' : text;
  },

  /**
   * Get all raw comments from localStorage/Firebase
   */
  _getAllRawComments() {
    if (typeof DB === 'undefined') {
      console.error('[CEOFeedback] DB module not loaded. Run this from a platform page.');
      return {};
    }
    return DB._get('comments') || {};
  },

  /**
   * Parse a comments storage key like "book-01_ch-03" into { bookId, chapterId }
   */
  _parseKey(key) {
    const parts = key.split('_');
    // Keys are like: book-01_ch-03
    // bookId could be "book-01" and chapterId "ch-03"
    if (parts.length >= 3) {
      // Reconstruct: first two parts = bookId, rest = chapterId
      const bookId = parts[0] + '-' + parts[1];
      const chapterId = parts.slice(2).join('-');
      return { bookId, chapterId };
    }
    return { bookId: parts[0], chapterId: parts[1] || 'unknown' };
  },

  // ---- Public API ----

  /**
   * Get ALL CEO comments across all books and chapters.
   * Returns an array of enriched comment objects.
   */
  getAll() {
    const allComments = this._getAllRawComments();
    const ceoComments = [];

    for (const key in allComments) {
      const { bookId, chapterId } = this._parseKey(key);
      const bookMeta = this._getBookMeta(bookId);

      let comments = allComments[key];
      if (!Array.isArray(comments)) comments = Object.values(comments);

      comments.forEach(comment => {
        if (this._isCEO(comment)) {
          ceoComments.push({
            id: comment.id,
            bookId,
            bookTitle: bookMeta ? bookMeta.title : bookId,
            bookNumber: bookMeta ? bookMeta.number : null,
            chapterId,
            text: comment.text || '',
            paragraphIndex: comment.paragraphIndex,
            paragraphText: comment.paragraphText || '',
            resolved: !!comment.resolved,
            resolvedAt: comment.resolvedAt || null,
            timestamp: comment.timestamp,
            date: comment.timestamp ? new Date(comment.timestamp).toLocaleDateString() : '',
            time: comment.timestamp ? new Date(comment.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '',
            replies: comment.replies || []
          });
        }
      });
    }

    // Sort by book number, then chapter, then timestamp
    ceoComments.sort((a, b) => {
      if (a.bookNumber !== b.bookNumber) return (a.bookNumber || 0) - (b.bookNumber || 0);
      if (a.chapterId !== b.chapterId) return a.chapterId.localeCompare(b.chapterId);
      return new Date(a.timestamp) - new Date(b.timestamp);
    });

    console.log(`[CEOFeedback] Found ${ceoComments.length} CEO comment(s) total.`);
    return ceoComments;
  },

  /**
   * Get CEO comments for a specific book.
   */
  getByBook(bookId) {
    const all = this.getAll();
    const filtered = all.filter(c => c.bookId === bookId);
    console.log(`[CEOFeedback] Found ${filtered.length} CEO comment(s) for ${bookId}.`);
    return filtered;
  },

  /**
   * Get CEO comments for a specific chapter of a specific book.
   */
  getByChapter(bookId, chapterId) {
    const all = this.getAll();
    const filtered = all.filter(c => c.bookId === bookId && c.chapterId === chapterId);
    console.log(`[CEOFeedback] Found ${filtered.length} CEO comment(s) for ${bookId} → ${chapterId}.`);
    return filtered;
  },

  /**
   * Get only unresolved CEO comments.
   */
  getUnresolved() {
    const all = this.getAll();
    const unresolved = all.filter(c => !c.resolved);
    console.log(`[CEOFeedback] Found ${unresolved.length} UNRESOLVED CEO comment(s).`);
    return unresolved;
  },

  /**
   * Get only resolved CEO comments.
   */
  getResolved() {
    const all = this.getAll();
    const resolved = all.filter(c => c.resolved);
    console.log(`[CEOFeedback] Found ${resolved.length} resolved CEO comment(s).`);
    return resolved;
  },

  /**
   * Get a quick stats summary.
   */
  getSummary() {
    const all = this.getAll();
    const unresolved = all.filter(c => !c.resolved);
    const resolved = all.filter(c => c.resolved);

    // Group by book
    const byBook = {};
    all.forEach(c => {
      if (!byBook[c.bookId]) {
        byBook[c.bookId] = { title: c.bookTitle, total: 0, unresolved: 0, resolved: 0, chapters: new Set() };
      }
      byBook[c.bookId].total++;
      byBook[c.bookId].chapters.add(c.chapterId);
      if (c.resolved) byBook[c.bookId].resolved++;
      else byBook[c.bookId].unresolved++;
    });

    const summary = {
      totalComments: all.length,
      unresolvedComments: unresolved.length,
      resolvedComments: resolved.length,
      booksWithComments: Object.keys(byBook).length,
      breakdown: Object.entries(byBook).map(([id, data]) => ({
        bookId: id,
        bookTitle: data.title,
        total: data.total,
        unresolved: data.unresolved,
        resolved: data.resolved,
        chaptersAffected: data.chapters.size,
        chapters: Array.from(data.chapters).sort()
      }))
    };

    console.table(summary.breakdown);
    return summary;
  },

  /**
   * Pretty-print a full actionable report to the console.
   */
  printReport() {
    const all = this.getAll();
    if (all.length === 0) {
      console.log('%c═══ CEO FEEDBACK REPORT ═══', 'color: #075e54; font-size: 16px; font-weight: bold;');
      console.log('%cNo CEO comments found.', 'color: #667781;');
      return;
    }

    console.log('%c═══════════════════════════════════════════', 'color: #075e54; font-weight: bold;');
    console.log('%c       CEO FEEDBACK REPORT', 'color: #075e54; font-size: 18px; font-weight: bold;');
    console.log('%c═══════════════════════════════════════════', 'color: #075e54; font-weight: bold;');

    const unresolved = all.filter(c => !c.resolved);
    const resolved = all.filter(c => c.resolved);

    console.log(`%c📊 Total: ${all.length} | ⏳ Open: ${unresolved.length} | ✅ Resolved: ${resolved.length}`, 'font-size: 13px; font-weight: bold; color: #333;');
    console.log('');

    // Group by book
    const byBook = {};
    all.forEach(c => {
      if (!byBook[c.bookId]) byBook[c.bookId] = [];
      byBook[c.bookId].push(c);
    });

    for (const bookId of Object.keys(byBook).sort()) {
      const bookComments = byBook[bookId];
      const bookTitle = bookComments[0].bookTitle;
      const bookUnresolved = bookComments.filter(c => !c.resolved).length;

      console.log(`%c📖 Book ${bookComments[0].bookNumber}: ${bookTitle}`, 'color: #1a73e8; font-size: 14px; font-weight: bold;');
      console.log(`%c   ${bookComments.length} comment(s) | ${bookUnresolved} open`, 'color: #667781; font-size: 12px;');

      // Group by chapter within book
      const byChapter = {};
      bookComments.forEach(c => {
        if (!byChapter[c.chapterId]) byChapter[c.chapterId] = [];
        byChapter[c.chapterId].push(c);
      });

      for (const chapterId of Object.keys(byChapter).sort()) {
        const chapterComments = byChapter[chapterId];
        console.log(`%c   📑 ${chapterId}`, 'color: #008069; font-weight: bold;');

        chapterComments.forEach((c, i) => {
          const status = c.resolved ? '✅' : '⏳';
          const quote = c.paragraphText
            ? `\n         📎 Re: "${c.paragraphText.substring(0, 80)}${c.paragraphText.length > 80 ? '…' : ''}"`
            : '';

          console.log(
            `%c      ${status} [${c.date} ${c.time}] ${c.text}${quote}`,
            `color: ${c.resolved ? '#34a853' : '#d93025'}; font-size: 12px;`
          );

          if (c.replies && c.replies.length > 0) {
            c.replies.forEach(r => {
              const replyRole = (r.role === 'reviewer' || r.role === 'CEO') ? 'CEO' : 'Emma';
              console.log(`%c         ↳ ${replyRole}: ${r.text}`, 'color: #5f6368; font-size: 11px; font-style: italic;');
            });
          }
        });
      }
      console.log('');
    }

    console.log('%c═══════════════════════════════════════════', 'color: #075e54; font-weight: bold;');
    console.log('%cUse CEOFeedback.getUnresolved() to get only open items.', 'color: #667781; font-style: italic;');
    return all;
  },

  /**
   * Export all CEO feedback as a downloadable CSV file.
   */
  exportCSV() {
    const all = this.getAll();
    if (all.length === 0) {
      console.log('[CEOFeedback] No comments to export.');
      return;
    }

    const headers = ['Book #', 'Book Title', 'Chapter', 'Status', 'Date', 'Time', 'Comment', 'Referenced Text', 'Replies'];
    const rows = all.map(c => [
      c.bookNumber || '',
      `"${(c.bookTitle || '').replace(/"/g, '""')}"`,
      c.chapterId,
      c.resolved ? 'Resolved' : 'Open',
      c.date,
      c.time,
      `"${(c.text || '').replace(/"/g, '""')}"`,
      `"${(c.paragraphText || '').substring(0, 200).replace(/"/g, '""')}"`,
      `"${(c.replies || []).map(r => {
        const who = (r.role === 'reviewer' || r.role === 'CEO') ? 'CEO' : 'Emma';
        return `${who}: ${(r.text || '').replace(/"/g, '""')}`;
      }).join(' | ')}"`
    ]);

    const csv = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ceo-feedback-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);

    console.log(`[CEOFeedback] Exported ${all.length} comments to CSV.`);
  },

  /**
   * Export all CEO feedback as a downloadable JSON file.
   */
  exportJSON() {
    const all = this.getAll();
    if (all.length === 0) {
      console.log('[CEOFeedback] No comments to export.');
      return;
    }

    const blob = new Blob([JSON.stringify(all, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ceo-feedback-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);

    console.log(`[CEOFeedback] Exported ${all.length} comments to JSON.`);
  },

  /**
   * Fetch CEO comments directly from Firebase (bypassing localStorage).
   * Useful when localStorage might be stale.
   */
  async fetchFromFirebase() {
    if (typeof DB === 'undefined' || !DB.firebaseEnabled || !DB.db) {
      console.warn('[CEOFeedback] Firebase not available. Falling back to local data.');
      return this.getAll();
    }

    try {
      const snapshot = await DB.db.ref('comments').once('value');
      const allComments = snapshot.val() || {};
      const ceoComments = [];

      for (const key in allComments) {
        const { bookId, chapterId } = this._parseKey(key);
        const bookMeta = this._getBookMeta(bookId);

        let comments = allComments[key];
        if (!Array.isArray(comments)) comments = Object.values(comments);

        comments.forEach(comment => {
          if (this._isCEO(comment)) {
            ceoComments.push({
              id: comment.id,
              bookId,
              bookTitle: bookMeta ? bookMeta.title : bookId,
              bookNumber: bookMeta ? bookMeta.number : null,
              chapterId,
              text: comment.text || '',
              paragraphIndex: comment.paragraphIndex,
              paragraphText: comment.paragraphText || '',
              resolved: !!comment.resolved,
              resolvedAt: comment.resolvedAt || null,
              timestamp: comment.timestamp,
              date: comment.timestamp ? new Date(comment.timestamp).toLocaleDateString() : '',
              time: comment.timestamp ? new Date(comment.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '',
              replies: comment.replies || []
            });
          }
        });
      }

      ceoComments.sort((a, b) => {
        if (a.bookNumber !== b.bookNumber) return (a.bookNumber || 0) - (b.bookNumber || 0);
        if (a.chapterId !== b.chapterId) return a.chapterId.localeCompare(b.chapterId);
        return new Date(a.timestamp) - new Date(b.timestamp);
      });

      console.log(`[CEOFeedback] Fetched ${ceoComments.length} CEO comment(s) directly from Firebase.`);
      return ceoComments;
    } catch (e) {
      console.error('[CEOFeedback] Firebase fetch failed:', e);
      return this.getAll();
    }
  },

  /**
   * Search CEO comments by keyword.
   */
  search(keyword) {
    if (!keyword) {
      console.warn('[CEOFeedback] Provide a search keyword.');
      return [];
    }
    const all = this.getAll();
    const lowerKeyword = keyword.toLowerCase();
    const matches = all.filter(c =>
      (c.text && c.text.toLowerCase().includes(lowerKeyword)) ||
      (c.paragraphText && c.paragraphText.toLowerCase().includes(lowerKeyword))
    );
    console.log(`[CEOFeedback] Found ${matches.length} comment(s) matching "${keyword}".`);
    return matches;
  },

  /**
   * Mark a CEO comment as resolved by its ID.
   */
  resolve(commentId) {
    if (typeof DB === 'undefined') {
      console.error('[CEOFeedback] DB module not loaded.');
      return false;
    }

    const allComments = this._getAllRawComments();
    for (const key in allComments) {
      let comments = allComments[key];
      if (!Array.isArray(comments)) comments = Object.values(comments);

      const comment = comments.find(c => c.id === commentId);
      if (comment) {
        comment.resolved = true;
        comment.resolvedAt = new Date().toISOString();
        allComments[key] = comments;
        DB._set('comments', allComments);
        DB._writeFirebase('comments', allComments);
        console.log(`[CEOFeedback] ✅ Marked comment ${commentId} as resolved.`);
        return true;
      }
    }

    console.warn(`[CEOFeedback] Comment ${commentId} not found.`);
    return false;
  },

  /**
   * Bulk resolve all CEO comments for a specific chapter.
   */
  resolveChapter(bookId, chapterId) {
    const chapterComments = this.getByChapter(bookId, chapterId);
    let count = 0;
    chapterComments.forEach(c => {
      if (!c.resolved) {
        this.resolve(c.id);
        count++;
      }
    });
    console.log(`[CEOFeedback] ✅ Resolved ${count} comment(s) for ${bookId} → ${chapterId}.`);
    return count;
  }
};

// Make it available globally
window.CEOFeedback = CEOFeedback;

console.log('[CEOFeedback] ✅ CEO Feedback Retriever loaded. Type CEOFeedback.printReport() to see all feedback.');
