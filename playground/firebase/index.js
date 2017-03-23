import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyB3PFja3GV_E9Flo3yntUUtOJP5ptmPZM0",
    authDomain: "jack-todo-app.firebaseapp.com",
    databaseURL: "https://jack-todo-app.firebaseio.com",
    storageBucket: "jack-todo-app.appspot.com",
    messagingSenderId: "575191822794"
  };
  firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app:{
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Jack',
    age: 26
  }
});

var todosRef = firebaseRef.child('todos');
todosRef.on('child_added',(snapshot)=>{
  console.log('New todo added', snapshot.key,snapshot.val());
});

todosRef.push({
  text: 'Todo 1'
});

todosRef.push({
  text: 'Todo 2'
});
