import firebase from 'firebase';

var config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    storageBucket: process.env.STORAGE_BUCKET,
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