import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDofm3-2bpuM5KgwJorXkOqjSDrRaUC0PY",
    authDomain: "todo-app-f771d.firebaseapp.com",
    databaseURL: "https://todo-app-f771d.firebaseio.com",
    storageBucket: "todo-app-f771d.appspot.com",
    messagingSenderId: "811357947632"
  };
  firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

  firebaseRef.set({
    app: {
      name: 'App',
      version: '1.0'
    },
    isRunning: true,
    user: {
      name: 'James',
      age: 21
    }
  });

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('New todo  added', snapshot.key, snapshot.val());
});

todosRef.push({
  text: 'Todo 1'
});

todosRef.push({
  text: 'Todo 2'
});

// notesRef.on('child_added', (snapshot) => {
//   console.log('child_added', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_changed', (snapshot) => {
//   console.log('child_changed', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_removed', (snapshot) => {
//   console.log('child_removed', snapshot.key, snapshot.val());
// });
//
// var newNoteRef = notesRef.push({
//   text: 'Walk the dog!'
// });
