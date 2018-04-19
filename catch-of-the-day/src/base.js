import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC1Jim61g1gdwyioE9dI4uKDFnfmGNNHYs",
  authDomain: "catch-of-the-day-ali-g.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-ali-g.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is named export
export { firebaseApp };

//  this is a default export
export default base;
