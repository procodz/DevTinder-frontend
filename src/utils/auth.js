// src/utils/auth.js

export const isAuthenticated = () => {
    // Check for a token in local storage
    const token = localStorage.getItem('authToken'); // Replace 'authToken' with your actual token key
    return token !== null; // Return true if token exists, false otherwise
};