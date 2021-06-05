 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyCdmTmf_1dG7sQO9MUjEfAMa6lrIyZ2rmc",
      authDomain: "classtest-73dd5.firebaseapp.com",
      projectId: "classtest-73dd5",
      storageBucket: "classtest-73dd5.appspot.com",
      messagingSenderId: "1083292656749",
      appId: "1:1083292656749:web:8ddffc360ab957daf84b64"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
