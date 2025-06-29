# Assignment 2: Daily Quote Generator

## 🎯 Objective

Build a daily quote viewer that fetches a new quote every 30 seconds automatically using useEffect, and also allows users to fetch manually using a button.

## ✅ Requirements Completed

### Core Requirements:

1. **API Integration** - ✅ Uses the API: `https://api.quotable.io/random`
2. **Quote Display** - ✅ Display quote content and author
3. **Auto-refresh** - ✅ Auto-refresh quote every 30 seconds using `useEffect`
4. **Manual Refresh** - ✅ Add a "Get New Quote" button

### Bonus Features:

5. **Loading Animation** - ✅ Add a small animation/loading spinner when fetching new quotes
6. **Error Handling** - ✅ Graceful error handling with retry functionality
7. **Fade Effects** - ✅ Smooth fade-in animations for new quotes

## 🔧 Technical Implementation

### API Integration:

- **Endpoint**: `https://api.quotable.io/random`
- **Method**: GET request using `fetch()`
- **Error Handling**: Try-catch blocks with user-friendly error messages

### State Management:

- `quote`: Stores the current quote object (content + author)
- `loading`: Boolean to show/hide loading spinner
- `error`: Stores error messages for display
- `lastFetched`: Timestamp of when quote was last updated

### React Hooks Used:

- **`useState`**: Managing quote data, loading, and error states
- **`useEffect`**: Setting up auto-refresh interval and initial fetch
- **`setInterval`**: Auto-refresh every 30 seconds with proper cleanup

## 🎨 Design Features

### Visual Elements:

- **Gradient Background**: Beautiful purple gradient backdrop
- **Glassmorphism Card**: Semi-transparent card with backdrop blur
- **Loading Spinner**: CSS-animated rotating spinner
- **Fade Animations**: Smooth transitions when quotes change

### User Experience:

- **Auto-refresh Indicator**: Shows when quotes auto-update
- **Manual Control**: Button for instant quote refresh
- **Loading States**: Visual feedback during API calls
- **Error Recovery**: Retry button when API fails
- **Status Information**: Shows last update time and quote length

## 📊 Additional Features

### Information Display:

- Real-time auto-refresh status
- Last updated timestamp
- Quote character count
- Requirements checklist

### Animations:

- Spinning loader during fetch
- Fade-in effect for new quotes
- Button hover effects
- Smooth state transitions

## 🚀 Performance

- **Cleanup**: Proper interval cleanup on component unmount
- **Error Boundaries**: Graceful error handling
- **Optimized Rendering**: Conditional rendering based on states
