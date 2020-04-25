(function(){
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

  //var currentuser = firebaseUser.uid;
  var email = $("#txtEmail").val();
  var pass = $("#txtPassword").val();

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnlogin = document.getElementById('btnLogin');
  const btnSignup = document.getElementById('btnSignup');
  const btnLogout = document.getElementById('btnLogout');

  btnlogin.addEventListener('click', e => {
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
  });

  btnSignup.addEventListener('click', e => {
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise
    .catch(e => console.log(e.message));
    //String currentuser = firebase.uid
    //writeuserdata(currentuser, pass, email);
    console.log('created new')
  });

  btnLogout.addEventListener('click', e => {
    firebase.auth().signOut();
  });

  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser){
      console.log(firebaseUser.uid);
      //var currentuser = firebaseUser.uid;
      //var pw = firebaseUser.password;
      //var em = firebaseUser.email;
      //var email = txtEmail.value;
      //var pass = txtPassword.value;
      writeuserdata(currentuser, pass, email);
      alert("You have Been Logged in!!");
      //window.location = "../public/MyRecipes/MyRecipes.html"
      //btnLogout.getElementById("btnLogout").style.visibility = "hidden";
      btnLogout.classList.remove('hide');
    }
    else {
      console.log('not logged in')
      alert("You are Currently Logged out");
      btnLogout.classList.add('hide');
    }
  });

  function writeuserdata(userID, Password, email)
  {
    firebase.database().ref('users/' + userID).set({
      email: email,
      password: Password,
    });
  }

}());
