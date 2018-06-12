// JavaScript source code

// Initialize Firebase
const config = {
    apiKey: "AIzaSyA7ZbZNG7bvIWJZcfpyooWB4AhKuAdQOsc",
    authDomain: "registertransaction.firebaseapp.com",
    databaseURL: "https://registertransaction.firebaseio.com",
    projectId: "registertransaction",
    storageBucket: "registertransaction.appspot.com",
    messagingSenderId: "589304248924"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true })
//Grab collection from firestore database
const db = firebase.firestore().collection('registerTransaction');
