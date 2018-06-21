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

    function registerTransaction(date, user, paidSocial, sharesBougth, loanFromSocial, loanFromShares, paySocial, payShares) {
        var loanShares = loanFromShares - payShares;
        var loanSocial = loanFromSocial - paySocial;
        var place = user.data().place;
        return db.add({
            date: date,
            user: uid,
            paidSocial: paidSocial,
            sharesBougth: sharesBougth,
            loanShares: loanShares,
            loanSocial: loanSocial,
            place: place
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

    function addUser(Username, Email, name, password) {
        database.getUserInfo(currentUser.uid).then(user => {
            let place = user.data().place;
            //firebase.auth().createUser({
            //    email: Email,
            //    emailVerified: false,
            //    password: password,
            //    displayName: name,
            //    disabled: false
            //})
            //    .then(function (userRecord) {
            // See the UserRecord reference doc for the contents of userRecord.
            //db.collection('users').doc(userRecord.uid).set({

            db.collection('users').add({
                Username: Username,
                Email: Email,
                name: name,
                place: place
            })
                .then((userRecord) => {
                    console.log("Successfully created new user:", userRecord.id);
                    console.log('Data saved', Username, Email);
                })
                .catch(function (error) {
                    console.log("Error creating new user:", error);
                });
        });
    }


    return {
        getPlaces: getPlaces,
        getUsers: getUsers,
        getUserInfo: getUserInfo,
        registerTransaction: registerTransaction,
        getTransactionsUser: getTransactionsUser,
        getTransactions: getTransactions,
        addUser: addUser
    }
}();
