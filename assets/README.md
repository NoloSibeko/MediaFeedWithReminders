Media Feed With Reminders

A React Native (Expo) app that displays a media feed with infinite scrolling, search, and reminders for due posts.  
Built with **FlashList**, **Expo Image**, and a mock API.

---

## Features
- Search posts by title or supplier (with debounce for performance).
- Optimized images with placeholders & caching.
- Remind me button appears for posts due within 24 hours.
- Infinite scrolling with pagination.
- Pull-to-refresh to reload posts.
- Clean card-based grid layout.

---

## Tech Stack
- [React Native](https://reactnative.dev/) + [Expo](https://expo.dev/)
- [FlashList](https://shopify.github.io/flash-list/) for high-performance lists
- [expo-image](https://docs.expo.dev/versions/latest/sdk/image/) for image optimization
- TypeScript for safety and maintainability

---

## Installation

1. Clone the repo:
   ```bash
   git clone https://github.com/NoloSibeko/MediaFeedWithReminders.git
   cd MediaFeedWithReminders
   npm install (npm install --force in the event it doesn't go through)
   close and reopen the application 
 - npx expo start
 - scan the QR Code
