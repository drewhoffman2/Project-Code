
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAjEOADd6TSikpnj8e7RZ2FkA9k1cDwkjU",
  authDomain: "finish-my-dish.firebaseapp.com",
  databaseURL: "https://finish-my-dish.firebaseio.com",
  projectId: "finish-my-dish",
  storageBucket: "finish-my-dish.appspot.com",
  messagingSenderId: "128425488934",
  appId: "1:128425488934:web:fdb5d13d67bbb85da92ce7",
  measurementId: "G-CGCBSG2CG1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
console.log(firebase);
const database = firebase.database();

var ref = database.ref('users');

// get date for user
var d = new Date;
//console.log(firebase.firestore.Timestamp.fromDate(new Date("December 10, 1815")));

// var user = {
//   first_name: "",
//   last_name: "",
//   username: "",
//   password: "",
//   email: "",
//   created_on: firebase.firestore.Timestamp.fromDate(new Date()),
//   friends: [],
//   recipes: []
// }
// ref.push(user);

//
// Get user information by key
//


var userID = "-M5OcEJCoU2MkN1Abe0D";
localStorage.setItem("CurrentUser", userID);


var ref = database.ref('users');
ref.on('value', getCurrentUser, errData);

// function to get current user information
function getCurrentUser(data) {
  // set recipes to the data in database
  var users = data.val();
  // get data in array for all keys in recipes
  var keys = Object.keys(users);

  var userID = localStorage.getItem("CurrentUser"), found = false, count = 0;

  while (found == false && count < keys.length) {
    var k = keys[count];
    //console.log(users[k]);
    if (k == userID) {
      found = true;
      // put user into local storage
      localStorage.setItem("CurrentUserData", JSON.stringify(users[k]));
    }
    else {
      count++;
    }
  }

}

function errData() {
  console.log("Error!");
  console.log(err);
}
