import firebase from 'firebase';

try {
    var config = {
        apiKey: "AIzaSyASfR-XgOhdEBgIUrgOtRgscW420GL1NGg",
        authDomain: "jandorek-todo-app.firebaseapp.com",
        databaseURL: "https://jandorek-todo-app.firebaseio.com",
        projectId: "jandorek-todo-app",
        storageBucket: "jandorek-todo-app.appspot.com",
        messagingSenderId: "427911417652"
    };
    
    firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;