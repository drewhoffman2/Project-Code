
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

  // var gloabalVariable={
  //   userii: ""
  // };

(function(){
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
    const email = txt_Email.value;
    const pass = txt_Password.value;
    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise
    .catch(e => console.log(e.message));
    console.log('created new')
  });

  btnLogout.addEventListener('click', e => {
    firebase.auth().signOut();
  });

  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser){
      console.log(firebaseUser.uid);
      var currentuser = firebaseUser.uid;
      localStorage.setItem("idstor", currentuser)
      var email = txt_Email.value;
      var pass = txt_Password.value;
      var fname = f_name.value;
      var lname = l_name.value;
      writeuserdata(currentuser, pass, email, fname, lname);
      //varcarry(currentuser);
      alert("You have Been Logged in!!");
      window.location = "../public/MyRecipes/MyRecipes.html"
      btnLogout.classList.remove('hide');
    }
    else {
      console.log('not logged in')
      alert("You are Currently Logged out");
      btnLogout.classList.add('hide');
    }
  });


  function writeuserdata(userID, Password, email, fname, lname)
  {
    firebase.database().ref('users/' + userID).set({
      email: email,
      password: Password,
      first_name: fname,
      last_name: lname,
      friends: 0,
    });
  }

  // function varcarry(useri){
  //   //console.log(useri);
  //   userii = useri;
  //   //console.log(userii)
  // }

  // var modal = document.getElementById('id01');
  //
  //   // When the user clicks anywhere outside of the modal, close it
  //   window.onclick = function(event) {
  //     if (event.target == modal) {
  //       modal.style.display = "none";
  //     }
  //   }

}());
