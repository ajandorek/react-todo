import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyASfR-XgOhdEBgIUrgOtRgscW420GL1NGg",
    authDomain: "jandorek-todo-app.firebaseapp.com",
    databaseURL: "https://jandorek-todo-app.firebaseio.com",
    projectId: "jandorek-todo-app",
    storageBucket: "jandorek-todo-app.appspot.com",
    messagingSenderId: "427911417652"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
    isRunning: true,
    user: {
        name: 'Alec',
        age: 25
    },
    app: {
        name: 'Todo App',
        version: '1.0.0'
    }
});

var notesRef = firebaseRef.child('notes');

notesRef.on('child_added', (snapshot) => {
    console.log('child added', snapshot.key, snapshot.val());
});

notesRef.on('child_changed', (snapshot) => {
    console.log('child changed', snapshot.key, snapshot.val());
});

notesRef.on('child_removed', (snapshot) => {
    console.log('child removed', snapshot.key, snapshot.val());
});

var newNoteRef = notesRef.push({
    text: 'walk the dog!'
});