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
        getUserInfo(currentUser);
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
                place: place,
                accessLevel: 0
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

function sha1(msg) {
    function rotl(n, s) { return n << s | n >>> 32 - s; };
    function tohex(i) { for (var h = "", s = 28; ; s -= 4) { h += (i >>> s & 0xf).toString(16); if (!s) return h; } };
    var H0 = 0x67452301, H1 = 0xEFCDAB89, H2 = 0x98BADCFE, H3 = 0x10325476, H4 = 0xC3D2E1F0, M = 0x0ffffffff;
    var i, t, W = new Array(80), ml = msg.length, wa = new Array();
    msg += String.fromCharCode(0x80);
    while (msg.length % 4) msg += String.fromCharCode(0);
    for (i = 0; i < msg.length; i += 4) wa.push(msg.charCodeAt(i) << 24 | msg.charCodeAt(i + 1) << 16 | msg.charCodeAt(i + 2) << 8 | msg.charCodeAt(i + 3));
    while (wa.length % 16 != 14) wa.push(0);
    wa.push(ml >>> 29), wa.push((ml << 3) & M);
    for (var bo = 0; bo < wa.length; bo += 16) {
        for (i = 0; i < 16; i++) W[i] = wa[bo + i];
        for (i = 16; i <= 79; i++) W[i] = rotl(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16], 1);
        var A = H0, B = H1, C = H2, D = H3, E = H4;
        for (i = 0; i <= 19; i++) t = (rotl(A, 5) + (B & C | ~B & D) + E + W[i] + 0x5A827999) & M, E = D, D = C, C = rotl(B, 30), B = A, A = t;
        for (i = 20; i <= 39; i++) t = (rotl(A, 5) + (B ^ C ^ D) + E + W[i] + 0x6ED9EBA1) & M, E = D, D = C, C = rotl(B, 30), B = A, A = t;
        for (i = 40; i <= 59; i++) t = (rotl(A, 5) + (B & C | B & D | C & D) + E + W[i] + 0x8F1BBCDC) & M, E = D, D = C, C = rotl(B, 30), B = A, A = t;
        for (i = 60; i <= 79; i++) t = (rotl(A, 5) + (B ^ C ^ D) + E + W[i] + 0xCA62C1D6) & M, E = D, D = C, C = rotl(B, 30), B = A, A = t;
        H0 = H0 + A & M; H1 = H1 + B & M; H2 = H2 + C & M; H3 = H3 + D & M; H4 = H4 + E & M;
    }
    return tohex(H0) + tohex(H1) + tohex(H2) + tohex(H3) + tohex(H4);
}
