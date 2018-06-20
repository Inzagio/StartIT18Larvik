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

const dbUsers = firebase.firestore().collection('users');
//const dbVillageSettings = firebase.firestore().doc('village');

var currentUser;
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.
        currentUser = user;
    } else {
        // User is signed out.
        currentUser = null;
    }
});

var database = function () {
    const db = firebase.firestore();

    function getPlaces() {
        return db.collection('places').get();
    }

    function getUsers(place) {
        return db.collection('users').where('place', '==', place).get();
    }

    function getUserInfo(uid) {
        let user;
        let places = [];
        return db.collection('users').doc(uid).get();
    }

    function registerTransaction(date, uid, paidSocial, sharesBougth, loanFromSocial, loanFromShares, place) {
        var loanShares = loanFromShares;
        var loanSocial = loanFromSocial;
        return db.add({
            date: date,
            user: `users/${uid}`,
            paidSocial: paidSocial,
            sharesBougth: sharesBougth,
            loanShares: loanShares,
            loanSocial: loanSocial,
            place: `places/${place}`
        });
    }

    function getTransactionsUser(user) {
        return db.collection('transactions').orderBy('date').where('user', '==', user).get();
    }

    function getTransactions(place) {
        if (place) {
            return db.collection('transactions').orderBy('date').where('place', '==', place).get();
        }
        else {
            return db.collection('transactions').orderBy('date').get();
        }
    }

    return {
        getPlaces: getPlaces,
        getUsers: getUsers,
        getUserInfo: getUserInfo,
        registerTransaction: registerTransaction,
        getTransactions: getTransactions
    }
}();
