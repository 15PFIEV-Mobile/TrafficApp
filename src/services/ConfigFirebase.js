import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDvP59HUNH5HyfSRQ92lLhAvZoTC9hX8kI",
    authDomain: "trafficapp-1cc3e.firebaseapp.com",
    databaseURL: "https://trafficapp-1cc3e.firebaseio.com",
    projectId: "trafficapp-1cc3e",
    storageBucket: "trafficapp-1cc3e.appspot.com",
    messagingSenderId: "93242070916",
    appId: "1:93242070916:web:fcb369b3a0ada66ebfefd1",
    measurementId: "G-TE15RKYG6V"
  };
  // Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);