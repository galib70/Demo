

const firebaseConfig = {
    apiKey: "AIzaSyB5cdtXDnivxchSAZkp3Yxhi9S6Pi-Ub-I",
    authDomain: "myproject-19b18.firebaseapp.com",
    databaseURL: "https://myproject-19b18-default-rtdb.firebaseio.com",
    projectId: "myproject-19b18",
    storageBucket: "myproject-19b18.appspot.com",
    messagingSenderId: "64563891421",
    appId: "1:64563891421:web:ab97ac14c56adaa7031f34",
    measurementId: "G-G4E5E1K30L"
};

firebase.initializeApp(firebaseConfig);

function submitForm() {
    const name = document.getElementById('name').value;
    const roll = document.getElementById('roll').value;
    const dob = document.getElementById('date').value;
    const state = document.getElementById('state').value;
    const board = document.getElementById('board').value;
    const fatherName = document.getElementById('fatherName').value;
    const motherName = document.getElementById('motherName').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const classVal = document.getElementById('class').value;
    const schoolName = document.getElementById('schoolName').value;

    // Push data to Firebase
    firebase.database().ref('students').push({
        name: name,
        roll: roll,
        dob: dob,
        state: state,
        board: board,
        fatherName: fatherName,
        motherName: motherName,
        expiryDate: expiryDate,
        class: classVal,
        schoolName: schoolName
    }).then(() => {
        // Data successfully uploaded
        alert('Data uploaded successfully!');
    }).catch(error => {
        console.error('Error uploading data:', error);
    });
}