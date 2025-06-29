# Assignment 3: Fetch and Display User Profiles

## 🎯 Objective

Fetch a list of user profiles from an API and render them using reusable components. Focus is on useEffect for fetching, props for passing data, and loading/error state.

## ✅ Requirements Completed

### Core Requirements:

1. **API Integration** - ✅ Uses `https://jsonplaceholder.typicode.com/users`
2. **useEffect Hook** - ✅ Fetches data on component load using `useEffect`
3. **Loading State** - ✅ Shows loading text until data arrives
4. **UserCard Component** - ✅ Reusable component displaying name, email, city
5. **Props Usage** - ✅ Data passed to UserCard via props

### Bonus Features:

6. **Search Filter** - ✅ Search input to filter users by name (case-insensitive)
7. **Error Handling** - ✅ Friendly error message with retry functionality

## 🔧 Technical Implementation

### Components:

- **`UserProfiles`**: Main component managing state and API calls
- **`UserCard`**: Reusable component for displaying individual user information

### State Management:

- `users`: Array of all fetched users
- `filteredUsers`: Array of users matching search criteria
- `loading`: Boolean for loading state
- `error`: String for error messages
- `searchTerm`: String for search input value

### React Hooks Used:

- **`useState`**: Managing component state (users, loading, error, search)
- **`useEffect`**: API data fetching on mount and search filtering
- **`fetch`**: Modern API calling with async/await

## 🎨 Design Features

### User Interface:

- **Gradient Background**: Beautiful purple gradient backdrop
- **Card-based Layout**: Clean, modern card design for each user
- **Avatar Generation**: Dynamic avatar with user's first letter
- **Responsive Grid**: Flexbox layout that adapts to screen size
- **Hover Effects**: Interactive card animations on hover

### User Experience:

- **Loading Spinner**: Animated CSS spinner during data fetch
- **Search Functionality**: Real-time filtering as user types
- **Error Recovery**: Retry button when API calls fail
- **No Results State**: Friendly message when search has no matches
- **Statistics Display**: Shows count of filtered vs total users

## 📊 API Integration

### Endpoint Details:

- **URL**: `https://jsonplaceholder.typicode.com/users`
- **Method**: GET
- **Response**: Array of user objects

### User Data Structure:

```javascript
{
  id: 1,
  name: "Leanne Graham",
  email: "Sincere@april.biz",
  address: {
    city: "Gwenborough"
  }
  // ... other fields
}
```

## 🚀 Key Features

### Search Functionality:

- **Real-time Search**: Filters users as you type
- **Case-insensitive**: Searches regardless of letter case
- **Instant Results**: Updates grid immediately

### Error Handling:

- **Network Errors**: Handles connection issues
- **API Failures**: Manages server errors gracefully
- **Retry Mechanism**: Allows users to retry failed requests
- **User-friendly Messages**: Clear, non-technical error descriptions

### Performance Optimizations:

- **Efficient Filtering**: Uses separate filtered array for search
- **Proper Cleanup**: Effect cleanup prevents memory leaks
- **Optimized Rendering**: Conditional rendering based on states

## 🎨 Styling Approach

### Design System:

- **Modern Cards**: Clean white cards with subtle shadows
- **Consistent Spacing**: Uniform padding and margins
- **Color Palette**: Purple gradients with neutral text colors
- **Typography**: Clear hierarchy with proper font sizes

### Responsive Design:

- **Flexible Grid**: Cards wrap based on screen size
- **Mobile-friendly**: Touch-friendly buttons and inputs
- **Accessible**: Good contrast ratios and readable fonts

## 📱 User States

### Loading State:

- Animated spinner with loading text
- Prevents interaction until data loads
- Clear visual feedback

### Error State:

- Prominent error message
- Explanation of what went wrong
- Retry button for error recovery

### Empty State:

- Message when no search results found
- Helpful suggestions for users
- Clear search term display

### Success State:

- Grid of user cards
- Search statistics
- Interactive elements

## 🔗 Learning Objectives

Through this assignment, you learn:

- **API Integration**: Making HTTP requests with fetch()
- **Effect Management**: Using useEffect for side effects
- **State Management**: Complex state with multiple useState hooks
- **Component Composition**: Reusable components with props
- **Error Handling**: Graceful error management
- **Search Implementation**: Real-time filtering functionality
- **Responsive Design**: Mobile-first CSS approach

---

**Total Features:** 10+ features including all requirements and bonus items
