const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyC1BbGzrb6GZeQCj1liY4uPQncMs9tioYs",
  authDomain: "venda-de-sapatos.firebaseapp.com",
  projectId: "venda-de-sapatos",
  storageBucket: "venda-de-sapatos.appspot.com",
  messagingSenderId: "261936067179",
  appId: "1:261936067179:web:260c20c717237b37d9772e",
  measurementId: "G-VD7YJSEH60",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

module.exports = db;
