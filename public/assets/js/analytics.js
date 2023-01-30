  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDB1miIga7vfcj1jjGNs8n02PHaqYX8ng8",
    authDomain: "cords-mobile-webapp.firebaseapp.com",
    projectId: "cords-mobile-webapp",
    storageBucket: "cords-mobile-webapp.appspot.com",
    messagingSenderId: "780295713971",
    appId: "1:780295713971:web:fe3f84828d5b9ee3902cc6",
    measurementId: "G-FGJJW3LYVE"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

//   "site": "cordsmobileapp",
//   firebase deploy --only hosting:cordsmobileapp