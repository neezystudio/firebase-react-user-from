import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
    
        apiKey: "AIzaSyBYlx-jwVmGxM5ri5EMYkmO2DAwT6kOPV0",
        authDomain: "tukio-408c1.firebaseapp.com",
        databaseURL: "https://tukio-408c1.firebaseio.com",
        projectId: "tukio-408c1",
        storageBucket: "tukio-408c1.appspot.com",
        messagingSenderId: "585186761734",
        appId: "1:585186761734:web:e70ae4550d9e32713ff787",
        measurementId: "G-G6L7QKXE44"
});

var db = firebaseApp.firestore();

export { db };