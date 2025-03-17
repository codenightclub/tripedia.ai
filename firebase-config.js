/**
 * Firebase configuration management
 * 
 * This file handles loading the appropriate Firebase configuration
 * based on the current environment (production, staging, development)
 */

// Function to get the appropriate Firebase configuration
const getFirebaseConfig = () => {
    // Production environment
    if (window.location.hostname === "tripedia.ai" ||
        window.location.hostname === "www.tripedia.ai") {
        console.log("Loading production Firebase configuration");
        return {
            apiKey: "AIzaSyAgdQEEC6ubWY2CDrviLNpdln83pvbRCGY",
            authDomain: "psyched-edge-432218-u8.firebaseapp.com",
            projectId: "psyched-edge-432218-u8",
            storageBucket: "psyched-edge-432218-u8.appspot.com",
            messagingSenderId: "362861495180",
            appId: "1:362861495180:web:0f405a9cd405d7be7d0ca9",
            measurementId: "G-6F2PWHWSFH"
        };
    }

    // Staging environment
    else if (window.location.hostname.includes("staging") ||
        window.location.hostname.includes("test")) {
        console.log("Loading staging Firebase configuration");
        return {
            // Replace these with your staging environment Firebase credentials
            apiKey: "YOUR_STAGING_API_KEY",
            authDomain: "YOUR_STAGING_AUTH_DOMAIN",
            projectId: "YOUR_STAGING_PROJECT_ID",
            storageBucket: "YOUR_STAGING_STORAGE_BUCKET",
            messagingSenderId: "YOUR_STAGING_MESSAGING_SENDER_ID",
            appId: "YOUR_STAGING_APP_ID",
            measurementId: "YOUR_STAGING_MEASUREMENT_ID"
        };
    }

    // Local development environment
    else {
        console.log("Loading development Firebase configuration");
        return {
            // For local development, you can use the same as production
            // or set up a separate Firebase project for development
            apiKey: "AIzaSyAgdQEEC6ubWY2CDrviLNpdln83pvbRCGY",
            authDomain: "psyched-edge-432218-u8.firebaseapp.com",
            projectId: "psyched-edge-432218-u8",
            storageBucket: "psyched-edge-432218-u8.appspot.com",
            messagingSenderId: "362861495180",
            appId: "1:362861495180:web:0f405a9cd405d7be7d0ca9",
            measurementId: "G-6F2PWHWSFH"
        };
    }
};

// Function to initialize Firebase with the appropriate config
const initializeFirebase = () => {
    try {
        // Get environment-specific configuration
        const firebaseConfig = getFirebaseConfig();

        // Initialize Firebase if it hasn't been initialized already
        if (typeof firebase !== 'undefined') {
            try {
                const app = firebase.initializeApp(firebaseConfig);
                console.log("Firebase initialized successfully");
                return app;
            } catch (error) {
                // Firebase might already be initialized
                if (error.code === 'app/duplicate-app') {
                    console.log("Firebase already initialized, returning existing app");
                    return firebase.app();
                } else {
                    console.error("Firebase initialization error:", error);
                    throw error;
                }
            }
        } else {
            console.error("Firebase SDK not loaded");
            return null;
        }
    } catch (e) {
        console.error("Error in Firebase configuration:", e);
        return null;
    }
}; 