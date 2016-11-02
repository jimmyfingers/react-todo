import firebase from 'firebase';

try {
  var config = {
   apiKey: "AIzaSyDofm3-2bpuM5KgwJorXkOqjSDrRaUC0PY",
   authDomain: "todo-app-f771d.firebaseapp.com",
   databaseURL: "https://todo-app-f771d.firebaseio.com",
   storageBucket: "todo-app-f771d.appspot.com",
   messagingSenderId: "811357947632"
 };

  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
