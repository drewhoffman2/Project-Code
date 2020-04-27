
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

(function(){
  const txtEmail = document.getElementById('txt_Email');
  const txtPassword = document.getElementById('txt_Password');
  const btnlogin = document.getElementById('btnLogin');
  const btnSignup = document.getElementById('btnSignup');
  const btnLogout = document.getElementById('btnLogout');
  var create=false;
  var login=false;
  var count=0;

  btnlogin.addEventListener('click', e => {
    login=true;
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
  });

  btnSignup.addEventListener('click', e => {
    create=true;
    const email = txt_Email.value;
    const pass = txt_Password.value;
    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
    console.log('created new')
  });

  btnLogout.addEventListener('click', e => {
    firebase.auth().signOut();
    count=1
    //window.location = "../index.html"
  });

  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser)
    {
        if (create == true)
        {
        console.log(firebaseUser.uid);
        var currentuser = firebaseUser.uid;
        localStorage.setItem("idstor", currentuser)
        var email = txt_Email.value;
        var pass = txt_Password.value;
        var fname = f_name.value;
        var lname = l_name.value;
        var uname = u_name.value;
        writeuserdata(currentuser, pass, email, fname, lname, uname);
        alert("You have Been Logged in!!");
        window.location = "../MyRecipes/MyRecipes.html"
        }
        else
        {
          console.log(firebaseUser.uid);
          var currentuser = firebaseUser.uid;
          localStorage.setItem("idstor", currentuser)
          var email = firebaseUser.uid.email;
          var pass = firebaseUser.uid.password;
          if (login==true){
            alert("You have Been Logged in!!");
            window.location = "../MyRecipes/MyRecipes.html"
          }
          // alert("You have Been Logged in!!");
          // window.location = "../MyRecipes/MyRecipes.html"
          //btnLogout.classList.remove('hide');
        }
    }
    else
    {
      console.log('not logged in')
      alert("You are Currently Logged out");
      if(count==1)
      {
        window.location = "../index.html"
      }
    }
  });
  //var recid = "-M4KOaX8EdN3mCLdLVfA";

  function writeuserdata(userID, Password, email, fname, lname, uname)
  {
    firebase.database().ref('users/' + userID).set({
      email: email,
      password: Password,
      first_name: fname,
      last_name: lname,
      friends: 0,
      username: uname,
    });
    // var ref = firebase.database().ref('users/' + userID + '/recipes');
    // ref.push("-M4KOaX8EdN3mCLdLVfA");

  }

}());
