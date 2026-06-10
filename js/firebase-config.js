/**
 * Firebase Configuration
 * 
 * HOW TO SET UP:
 * 1. Go to https://firebase.google.com
 * 2. Sign in with a Google account
 * 3. Click "Create a Project" → name it "homers-review"
 * 4. Go to Project Settings → scroll to "Your apps" → click web icon (</>)
 * 5. Register the app, copy the config object below
 * 6. Replace the placeholder values below with your actual config
 * 7. Set FIREBASE_ENABLED to true
 * 
 * That's it! The platform will automatically sync between author and reviewer.
 */

const FIREBASE_ENABLED = true; // Set to true after adding your config

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyC2LHI36s0wJJKiCxHSW__XhVhJ2uA5ZQw",
  authDomain: "homers-review.firebaseapp.com",
  databaseURL: "https://homers-review-default-rtdb.firebaseio.com",
  projectId: "homers-review",
  storageBucket: "homers-review.firebasestorage.app",
  messagingSenderId: "301567134153",
  appId: "1:301567134153:web:5d0ceb71b66d26dd284018",
  measurementId: "G-JWN8926Q91"
};

// Firebase will be initialized when the scripts are loaded
// For now, the platform works fully with localStorage
