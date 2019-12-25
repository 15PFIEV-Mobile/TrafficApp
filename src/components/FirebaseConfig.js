import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAhOm4hB9lGZRf-Q3EFsCcqJ_9yuQtoedY",
  authDomain: "traffic-dec7e.firebaseapp.com",
  databaseURL: "https://traffic-dec7e.firebaseio.com",
  projectId: "traffic-dec7e",
  storageBucket: "traffic-dec7e.appspot.com",
  messagingSenderId: "342145441556",
  appId: "1:342145441556:web:eb31a424aae7cc8973ac01",
  measurementId: "G-MY84HWV4XY"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);