import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import firebase from 'firebase';

// // Your web app's Firebase configuration
// var firebaseConfig = {
//     apiKey: "AIzaSyAtJYvnYTKS4FQaI309LSHwOXfKu6ZnplE",
//     authDomain: "inkmastertattooapp.firebaseapp.com",
//     databaseURL: "https://inkmastertattooapp.firebaseio.com",
//     projectId: "inkmastertattooapp",
//     storageBucket: "inkmastertattooapp.appspot.com",
//     messagingSenderId: "211941742756",
//     appId: "1:211941742756:web:03b854f2e89dda61"
//   };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

export default class ImageUpload extends Component{
    render() {
        return (
            <View>
                <Text>Testing firebase integration!</Text>
            </View>
        );
    }
}