# Sanjay's Lightworks - Photography Portfolio Website

A professional photography portfolio website with booking system, Google Calendar integration, and Firebase backend.

## Features Implemented

### ✅ Navigation & Page Structure
- **Booking Page**: Dedicated booking section placed before About in navigation
- **Pricing Synopsis**: Clear pricing overview added immediately after Services section

### ✅ Booking Logic & Google Calendar Integration
- Full appointment/booking system with service selection
- Date/time picker with real-time availability checking
- Anti-double-booking validation structure
- Google Calendar API integration placeholders (credentials to be added)

### ✅ SEO & Meta Content
- Complete XML sitemap (sitemap.xml) for search engine indexing
- Optimized SEO meta descriptions and title tags
- Open Graph and Twitter Card meta tags
- robots.txt for crawler instructions

### ✅ Firebase Integration & Security
- Firebase configuration structure ready for credentials
- Firestore security rules for contact forms and bookings
- Input sanitization using DOMPurify to prevent XSS attacks
- Field validation for email, phone, and text inputs
- Environment variable structure for secure credential management

### ✅ Performance Optimization
- Lazy loading for all images and gallery assets
- Image optimization with loading placeholders
- Optimized asset loading structure

### ✅ Floating Contact Pill Widget
- Sticky floating contact pill visible on all pages
- Direct links to:
  - Instagram: @sanjays_lightworks
  - WhatsApp/Phone: 905-588-2047
  - Email: nsanjayb@gmail.com

## Setup Instructions

### 1. Firebase Configuration

1. Create a Firebase project at https://console.firebase.google.com/
2. Enable Firestore Database
3. Enable Authentication (optional, for admin access)
4. Copy your Firebase configuration from Project Settings

Add your credentials to `firebase-config.js`:
```javascript
const firebaseConfig = {
  apiKey: "YOUR_FIREBASE_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

### 2. Firebase Security Rules

Apply the security rules from `firebase-security-rules.firestore` in your Firebase Console:
- Go to Firestore Database → Rules
- Copy and paste the rules
- Publish the rules

### 3. Google Calendar Integration

1. Go to Google Cloud Console (https://console.cloud.google.com/)
2. Create a project or select existing
3. Enable Google Calendar API
4. Create OAuth 2.0 credentials
5. Add your domain (sanjaylumi.com) to authorized JavaScript origins

Add credentials to `firebase-config.js`:
```javascript
const googleCalendarConfig = {
  clientId: "YOUR_GOOGLE_CLIENT_ID",
  apiKey: "YOUR_GOOGLE_API_KEY",
  discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
  scope: "https://www.googleapis.com/auth/calendar.events"
};
```

### 4. Environment Variables (Production)

Copy `.env.example` to `.env` and fill in your values:
```bash
cp .env.example .env
```

Add your actual credentials to `.env` (never commit this file).

### 5. Deploy

#### Option A: Static Hosting (Firebase Hosting, Netlify, Vercel)
1. Build your site (if using a build process)
2. Deploy to your hosting provider
3. Update sitemap.xml with your actual domain

#### Option B: Traditional Web Hosting
1. Upload all files to your web server
2. Ensure firebase-config.js is accessible
3. Test all functionality

## Security Best Practices

### API Key Protection
- ✅ Restrict Firebase API keys to your domain in Firebase Console
- ✅ Use HTTP referrer rules in Google Cloud Console
- ✅ Never commit actual credentials to version control
- ✅ Use environment variables in production

### Form Security
- ✅ DOMPurify sanitization prevents XSS attacks
- ✅ Input validation for all form fields
- ✅ Firestore security rules restrict database access
- ✅ No public read access to sensitive data

### Google Calendar Security
- ✅ OAuth 2.0 for secure authorization
- ✅ Domain restriction prevents unauthorized usage
- ✅ Calendar event validation prevents conflicts

## File Structure

```
sanjaylumi-portfolio/
├── index.html                          # Main website file
├── sitemap.xml                         # SEO sitemap
├── robots.txt                          # Crawler instructions
├── firebase-config.js                  # Firebase & Google Calendar config
├── firebase-security-rules.firestore   # Firestore security rules
├── .env.example                        # Environment variables template
├── .gitignore                          # Git ignore rules
├── README.md                           # This file
└── reference/
    └── reference.html                  # Reference design (not used in production)
```

## Customization

### Update Contact Information
Edit the floating contact pill in `index.html`:
```javascript
<a href="https://www.instagram.com/sanjays_lightworks">
<a href="https://wa.me/19055882047">
<a href="tel:9055882047">
<a href="mailto:nsanjayb@gmail.com">
```

### Update Package Pricing
Edit `PACKAGES_DATA` array in `index.html`:
```javascript
const PACKAGES_DATA = [
  {
    id: 'single',
    title: 'SINGLE PHOTO SESSION',
    price: 50,
    // ...
  }
];
```

### Update Photo Gallery
Edit `PHOTOS_DATA` array in `index.html` with your own images.

## Testing Checklist

- [ ] Contact form submits to Firebase
- [ ] Booking configurator calculates totals correctly
- [ ] Date picker functions properly
- [ ] Time picker works as expected
- [ ] Floating contact pill opens/closes
- [ ] Lazy loading images load correctly
- [ ] Navigation smooth scrolling works
- [ ] Mobile responsive design
- [ ] Google Calendar availability check (when configured)
- [ ] Form validation prevents invalid submissions

## Support

For issues or questions:
- Email: nsanjayb@gmail.com
- WhatsApp: 905-588-2047
- Instagram: @sanjays_lightworks

## License

© 2026 Sanjay's Lightworks. All rights reserved.
