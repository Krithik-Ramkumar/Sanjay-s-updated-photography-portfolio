// Firebase Configuration
// IMPORTANT: Replace the placeholder values below with your actual Firebase project credentials
// Get these from your Firebase Console: https://console.firebase.google.com/

const firebaseConfig = {
  apiKey: "YOUR_FIREBASE_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID" // Optional - for Google Analytics
};

// Security Note:
// - Never commit actual API keys to version control
// - Use environment variables in production
// - Restrict your Firebase API keys to your domain (sanjaylumi.com) in Firebase Console
// - Enable Firebase Security Rules to protect your database

// Example environment variable usage (recommended for production):
// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.FIREBASE_APP_ID,
//   measurementId: process.env.FIREBASE_MEASUREMENT_ID
// };

// Firebase Security Rules Example (for Firestore):
// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /contacts/{document=**} {
//       allow create: if request.auth != null || request.resource.data.name != null;
//       allow read: if false; // No public reads
//       allow update, delete: if false;
//     }
//   }
// }

// Google Calendar API Configuration (for booking integration)
// IMPORTANT: Set up OAuth 2.0 credentials in Google Cloud Console
const googleCalendarConfig = {
  clientId: "YOUR_GOOGLE_CLIENT_ID",
  apiKey: "YOUR_GOOGLE_API_KEY",
  discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
  scope: "https://www.googleapis.com/auth/calendar.events"
};

// Export configurations
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { firebaseConfig, googleCalendarConfig };
}
