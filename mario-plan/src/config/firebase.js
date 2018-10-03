import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyC89M_k3Xxe62oblDHXYsiUEc0WO9n-J1w",
    authDomain: "mario-plan-faa4c.firebaseapp.com",
    databaseURL: "https://mario-plan-faa4c.firebaseio.com",
    projectId: "mario-plan-faa4c",
    storageBucket: "mario-plan-faa4c.appspot.com",
    messagingSenderId: "974310371180"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots:true})

  export default firebase