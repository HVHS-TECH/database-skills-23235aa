/**************************************************************/
// fb_initialise()
// Initialize firebase, connect to the Firebase project.
// 
// Find the config data in the Firebase console. Cog wheel > Project Settings > General > Your Apps > SDK setup and configuration > Config
//
// Input:  n/a
// Return: n/a
/**************************************************************/
  // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVTSf9liUHddvuTnV0z2Ny7ozA25LDxSg",
  authDomain: "ayaan-arora-12comp.firebaseapp.com",
  databaseURL: "https://ayaan-arora-12comp-default-rtdb.firebaseio.com",
  projectId: "ayaan-arora-12comp",
  storageBucket: "ayaan-arora-12comp.firebasestorage.app",
  messagingSenderId: "894897062738",
  appId: "1:894897062738:web:d37b55fd4bc618915ab08b"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // This log prints the firebase object to the console to show that it is working.
  // As soon as you have the script working, delete this log.
  console.log("Firebase initialize finished:");
  console.log(firebase);
