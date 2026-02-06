// ============================================
// FIREBASE CONFIGURATION - DESN1000 Booking System
// ============================================

const firebaseConfig = {
    apiKey: "AIzaSyARa7aRuEt2_68tVSBsSZBZ8QgYY7Y6gp0",
    authDomain: "desn1000-bookings.firebaseapp.com",
    projectId: "desn1000-bookings",
    storageBucket: "desn1000-bookings.firebasestorage.app",
    messagingSenderId: "218977672572",
    appId: "1:218977672572:web:f77a449422fe1e85c458f9"
};

// Initialize Firebase (compat SDK)
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
