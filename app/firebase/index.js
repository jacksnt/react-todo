import firebase from 'firebase';

try{
  var config = {
      apiKey: "AIzaSyB3PFja3GV_E9Flo3yntUUtOJP5ptmPZM0",
      authDomain: "jack-todo-app.firebaseapp.com",
      databaseURL: "https://jack-todo-app.firebaseio.com",
      storageBucket: "jack-todo-app.appspot.com",
      messagingSenderId: "575191822794"
    };
    firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
