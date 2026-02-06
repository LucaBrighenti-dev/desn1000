// ============================================
// FIREBASE CONFIGURATION - DESN1000 Booking System
// ============================================
// 
// INSTRUCTIONS:
// 1. Go to https://console.firebase.google.com/
// 2. Create a project (or open your existing one)
// 3. Add a Web App and copy your config values below
// 4. Replace ALL the "YOUR_..." placeholders with your actual values
//
// See the setup guide provided for full step-by-step instructions.
// ============================================

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
