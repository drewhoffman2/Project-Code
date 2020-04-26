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
var recipe_index=0;
firebase.initializeApp(firebaseConfig);
firebase.analytics();
//console.log(firebase);
const database = firebase.database();
//var ref = database.ref('recipes');
//ref.on('value', gotData, errData);

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
      var currentuser = firebaseUser.uid;
      //var pw = firebaseUser.password;
      //var em = firebaseUser.email;
      var email = txt_Email.value;
      var pass = txt_Password.value;
      var fname = f_name.value;
      var lname = l_name.value;
      //var email = $("#txtEmail").val();
      //var pass = $("#txtPassword").val();
      writeuserdata(currentuser, pass, email, fname, lname);
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

  var modal = document.getElementById('id01');

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }

}());

//this is the content to build the cards for the user recipes
var number=0;
var content = ``;
var modal_content = ``;
//I reference the users first and call the function test if I receive data
var reff = database.ref('users');
reff.on('value', test, err);
//this is where I traverse through the users recipes in order to make cards for each
function test(data) {
  var users = data.val();
  var keys = Object.keys(users);
  console.log(keys)
  //match the user that I am using with the proper id in the array and use that as the index
  //console.log(users[keys[0]].recipes);
  var length = users[keys[2]].recipes.length
  var recipe_ids = users[keys[2]].recipes
  console.log(firebaseUser.uid)
  console.log(length);
//here I reference the recipes array with what the user has stored
  for (var i=0; i<length; i++){
    var user_recipes = database.ref('recipes/' + recipe_ids[i]);
//here I call the function gotData for the recipe information refrencing the reicpe array using the ids from the user
    user_recipes.on('value', gotData, errData);
  }

}
function err(data) {
console.log("err: ", data);
}
function gotData(data) {
//console.log(data.val());
var recipes=data.val();
var recipe_id = data.key;
//var keys = Object.keys(recipes);

let container = document.getElementById('recipes');
let modals = document.getElementById('modals');
// recipe information below
  var ingredients = recipes.ingredients;
  var description = recipes.descrip;
  var directions = recipes.directions;
  var maketime = recipes.make_time;
  var image = recipes.image;
  var name = recipes.recipe_name;
  var instructions = recipes.directions;
  var rating = recipes.rating;
  var servings = recipes.servings;
  var vegetarian = recipes.vegetarian;
  var vegan = recipes.vegan;
  var gluten = recipes.gluten_free;
  var privacy = recipes.private;


 if(gluten){gluten = "Yes"; }
 else {gluten = "No";}
 if(vegan){vegan = "Yes"; }
 else {vegan = "No";}
 if(vegetarian){vegetarian = "Yes"; }
 else {vegetarian = "No";}
 if(privacy){privacy = "Private"; }
 else {privacy = "Public";}
 //console.log(vegan);

//this log is used to check that the info from the database is pulled correctly
//  console.log(instructions);

//  console.log(image);
  //let card = document.createElement('div');
  //card.classList = 'card-body';
  //console.log(card)

//builds the recipe card
  var modal_name = "recipe_"+number;
  var card_name = "card_"+recipe_index;
  number++;
  recipe_index++;
  content = `
  <div class="col-sm-4">

    <div class="card " style="background-color:#ff7366;height:500px">
      <div id="${card_name}">
      <img class="card-img-top img-fluid" src="../images/spaghetti.jpg" alt="Card image cap" >
      <button onclick="Display(${modal_name})">View Recipe</button>
      <button onclick="privacyChange(${card_name})">Change Privacy</button>
      <button onclick="DeleteRec(${card_name})">Delete</button>
      <div class="card-block">
        <h4 class="card-title">${name}</h4>
        <p class="card-text">${description}</p>
      </div>
      <div class="card-block">
      </div>
    </div>
    </div>
  </div>
  `;
//  console.log(content);
  container.innerHTML += content;
//  console.log(data.key);
//here I build the modal for each recipe and its appropriate info
modal_content = `
    <div id="${modal_name}" class="modal">
    <!-- Modal content -->
    <div class="modal-content">
      <span class="close" onclick="Close(${modal_name})">&times;</span>
        <div class="modal-header">
      <h2>${name}: </h2>
      </div>
      <div class="container recipe_info" style="background-color:#d1cfcf">
        <div class="row">
          <div class="col">
            <h5>Rating</h5>
            <p id="rating">${rating}</p>
          </div>
          <div class="col">
            <h5>Make Time</h5>
            <p id="time">${maketime} minute(s)</p>
          </div>
          <div class="col">
            <h5>Servings</h5>
            <p id="servings">${servings}</p>
          </div>
          <div class="col">
            <h5>Vegetarian</h5>
            <p id="vegetarian">${vegetarian}</p>
          </div>
          <div class="col">
            <h5>Vegan</h5>
            <p id="vegan">${vegan}</p>
          </div>
          <div class="col">
            <h5>Gluten Free</h5>
            <p id="gluten_free">${gluten}</p>
          </div>
        </div>
      </div>

      <div class="modal-body">
      <p style=bold>Recipe Status: ${privacy}</p>
        <p>Ingredients:</p>
        <ul>`
        //this loop iterates over all the ingredients to add them to the modal
        for (var j=0; j<ingredients.length; j++ )
        {
          modal_content += `
          <li>${ingredients[j]}</li>
          `
        }
modal_content+=`</ul>
        <p>Instructions: </p>
        <ol> `
        for (var k=0; k<instructions.length; k++) {
modal_content += `
        <li>${instructions[k]}</li>
`; }
        modal_content+=`</ol>
      </div>
    </div>
  </div>
`;

modals.innerHTML += modal_content
}

function errData(err) {
  console.log(err);
}

//display the recipe modal when the view button is clicked
function Display(id)
{
  document.getElementById(id.id).style.display = "block";
}

//function to change the privacy of a recipe once the button is pushed
function privacyChange(id)
{

}
