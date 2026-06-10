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

const FIREBASE_ENABLED = false; // Set to true after adding your config

const FIREBASE_CONFIG = {
  apiKey: "YOUR_API_KEY_HERE",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT-default-rtdb.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Firebase will be initialized when the scripts are loaded
// For now, the platform works fully with localStorage
