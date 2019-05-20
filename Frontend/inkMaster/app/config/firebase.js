import firebase from 'firebase';

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAtJYvnYTKS4FQaI309LSHwOXfKu6ZnplE",
    authDomain: "inkmastertattooapp.firebaseapp.com",
    databaseURL: "https://inkmastertattooapp.firebaseio.com",
    projectId: "inkmastertattooapp",
    storageBucket: "inkmastertattooapp.appspot.com",
    messagingSenderId: "211941742756"
  };
  const Firebase = firebase.initializeApp(config);
  export default Firebase;
