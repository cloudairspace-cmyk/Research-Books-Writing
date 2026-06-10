/**
 * Homers Research Consult - Database Module
 * Uses localStorage with Firebase-ready structure.
 * When Firebase is configured, swap the storage calls.
 */

const DB = {
  // ---- Core Storage ----
  _get(key) {
    try { return JSON.parse(localStorage.getItem('hrc_' + key)); }
    catch { return null; }
  },
  _set(key, val) {
    localStorage.setItem('hrc_' + key, JSON.stringify(val));
  },

  // ---- Firebase Sync ----
  firebaseEnabled: false,
  firebaseConfig: null,
  db: null,
  onUpdate: null,

  initFirebase(config) {
    this.firebaseConfig = config;
    if (typeof firebase !== 'undefined') {
      try {
        if (!firebase.apps.length) {
          firebase.initializeApp(config);
        }
        this.db = firebase.database();
        this.firebaseEnabled = true;
        console.log('[DB] Firebase Realtime Database initialized');

        // Set up real-time listeners for data sync
        const paths = ['books', 'comments', 'voicenotes', 'versions', 'chapterStatus'];
        paths.forEach(path => {
          this.db.ref(path).on('value', (snapshot) => {
            const val = snapshot.val();
            if (val !== null) {
              this._set(path, val);
              if (this.onUpdate) {
                try { this.onUpdate(path); } catch (e) { console.error('[DB] UI callback error:', e); }
              }
            }
          });
        });
      } catch (e) {
        console.error('[DB] Firebase initialization failed:', e);
      }
    } else {
      console.warn('[DB] Firebase SDK not loaded. Running in offline/localStorage mode.');
    }
  },

  _writeFirebase(path, data) {
    if (this.firebaseEnabled && this.db) {
      this.db.ref(path).set(data).catch(e => {
        console.error(`[DB] Firebase write failed to ${path}:`, e);
      });
    }
  },

  // ---- Books ----
  getBooks() {
    return this._get('books') || [];
  },

  setBooks(books) {
    this._set('books', books);
    this._writeFirebase('books', books);
  },

  getBook(bookId) {
    const books = this.getBooks();
    return books.find(b => b.id === bookId) || null;
  },

  updateBookStatus(bookId, status) {
    const books = this.getBooks();
    const book = books.find(b => b.id === bookId);
    if (book) {
      book.status = status;
      book.lastUpdated = new Date().toISOString();
      this.setBooks(books);
    }
  },

  // ---- Comments ----
  getComments(bookId, chapterId) {
    const all = this._get('comments') || {};
    const key = bookId + '_' + chapterId;
    const val = all[key];
    if (!val) return [];
    const arr = Array.isArray(val) ? val : Object.values(val);
    arr.forEach(c => {
      if (c && c.replies && !Array.isArray(c.replies)) {
        c.replies = Object.values(c.replies);
      }
    });
    return arr;
  },

  getAllBookComments(bookId) {
    const all = this._get('comments') || {};
    const result = [];
    for (const key in all) {
      if (key.startsWith(bookId + '_')) {
        const val = all[key];
        const arr = Array.isArray(val) ? val : Object.values(val);
        arr.forEach(c => {
          if (c && c.replies && !Array.isArray(c.replies)) {
            c.replies = Object.values(c.replies);
          }
        });
        result.push(...arr);
      }
    }
    return result;
  },

  addComment(bookId, chapterId, comment) {
    const all = this._get('comments') || {};
    const key = bookId + '_' + chapterId;
    if (!all[key]) all[key] = [];
    comment.id = 'c_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5);
    comment.timestamp = new Date().toISOString();
    
    // Ensure all[key] is an array before pushing
    let arr = all[key];
    if (!Array.isArray(arr)) arr = Object.values(arr);
    arr.push(comment);
    all[key] = arr;

    this._set('comments', all);
    this._writeFirebase('comments', all);
    return comment;
  },

  resolveComment(bookId, chapterId, commentId) {
    const all = this._get('comments') || {};
    const key = bookId + '_' + chapterId;
    if (all[key]) {
      let arr = all[key];
      if (!Array.isArray(arr)) arr = Object.values(arr);
      const c = arr.find(x => x.id === commentId);
      if (c) {
        c.resolved = true;
        c.resolvedAt = new Date().toISOString();
        all[key] = arr;
        this._set('comments', all);
        this._writeFirebase('comments', all);
      }
    }
  },

  addReply(bookId, chapterId, commentId, reply) {
    const all = this._get('comments') || {};
    const key = bookId + '_' + chapterId;
    if (all[key]) {
      let arr = all[key];
      if (!Array.isArray(arr)) arr = Object.values(arr);
      const c = arr.find(x => x.id === commentId);
      if (c) {
        if (!c.replies) c.replies = [];
        let repArr = c.replies;
        if (!Array.isArray(repArr)) repArr = Object.values(repArr);
        
        reply.id = 'r_' + Date.now();
        reply.timestamp = new Date().toISOString();
        repArr.push(reply);
        c.replies = repArr;
        
        all[key] = arr;
        this._set('comments', all);
        this._writeFirebase('comments', all);
      }
    }
  },

  // ---- Voice Notes ----
  getVoiceNotes(bookId, chapterId) {
    const all = this._get('voicenotes') || {};
    const key = bookId + '_' + chapterId;
    const val = all[key];
    if (!val) return [];
    return Array.isArray(val) ? val : Object.values(val);
  },

  addVoiceNote(bookId, chapterId, note) {
    const all = this._get('voicenotes') || {};
    const key = bookId + '_' + chapterId;
    if (!all[key]) all[key] = [];
    let arr = all[key];
    if (!Array.isArray(arr)) arr = Object.values(arr);
    
    note.id = 'v_' + Date.now();
    note.timestamp = new Date().toISOString();
    arr.push(note);
    all[key] = arr;

    this._set('voicenotes', all);
    this._writeFirebase('voicenotes', all);
    return note;
  },

  // ---- Versions ----
  getVersions(bookId) {
    const all = this._get('versions') || {};
    const val = all[bookId];
    if (!val) return [];
    return Array.isArray(val) ? val : Object.values(val);
  },

  addVersion(bookId, version) {
    const all = this._get('versions') || {};
    if (!all[bookId]) all[bookId] = [];
    version.id = 'ver_' + Date.now();
    version.timestamp = new Date().toISOString();
    version.number = all[bookId].length + 1;
    all[bookId].push(version);
    this._set('versions', all);
    this._writeFirebase('versions', all);
    return version;
  },

  // ---- Chapter Status ----
  getChapterStatus(bookId, chapterId) {
    const all = this._get('chapterStatus') || {};
    return all[bookId + '_' + chapterId] || 'pending';
  },

  setChapterStatus(bookId, chapterId, status) {
    const all = this._get('chapterStatus') || {};
    all[bookId + '_' + chapterId] = status;
    this._set('chapterStatus', all);
    this._writeFirebase('chapterStatus', all);
  },

  // ---- Export / Import ----
  exportAll() {
    const data = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith('hrc_')) {
        data[key] = localStorage.getItem(key);
      }
    }
    return JSON.stringify(data, null, 2);
  },

  importAll(jsonStr) {
    try {
      const data = JSON.parse(jsonStr);
      for (const key in data) {
        if (key.startsWith('hrc_')) {
          localStorage.setItem(key, data[key]);
        }
      }
      return true;
    } catch (e) {
      console.error('[DB] Import failed:', e);
      return false;
    }
  }
};

// Auto-initialize if global config is set to true
if (typeof FIREBASE_ENABLED !== 'undefined' && FIREBASE_ENABLED) {
  DB.initFirebase(FIREBASE_CONFIG);
}
