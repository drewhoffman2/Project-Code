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
var database = firebase.database();

var ref = database.ref('friends');//create friends on firebase
//me adding below this
ref.on('value', gotData, errData);

function gotData(data)
{
console.log(data.val()); //view in console "Object"
var scores = data.val();
var keys = Object.keys(scores);
console.log(keys); //array of keys to the data
for(var i = 0; i < ke)
}

function errData(err)
{
	console.log('Error!');
	console.log(err);
}
//original code below this
//Vanessa only had what was above this in her code
function removeDiv(divId) {
   $("#"+divId).remove();
}


var uniqueID = 0;

function addCard(cardName){
  var newID =  "card" + uniqueID;
  console.log(newID);
  uniqueID++;
  var tweet = $('<div id=' + newID + ' class="card mb-3" style="max-width:600px" ><button type="button" class="btn btn-danger btn-sm" onclick = "deleteCard('+ newID +')">X</button> <img class="card-img-top" src="elon.png" alt="elon"><div class = "card-body"><p class = "card-text">I want Elon Musk to follow me</p></div></div>');
  tweet.appendTo(cardName);
}

function deleteCard(cardID){
  console.log(cardID);
  //var x = document.getElementById(cardID);
  cardID.remove();
}

//Based off of Vanessa's remove recipe
var numIngredients = 0;

// function to add another text box for ingredient items
function createNewElement() {
  numIngredients++;

    // First create a DIV element.
	var txtNewInputBox = document.createElement('div');

    // Then add the content (a new input box) of the element. '" + player_id + "'
    txtNewInputBox.classList.add("input-group")
    txtNewInputBox.innerHTML = "<input id='Ingredient " +numIngredients+ "' class='form-control py-2 rounded-pill mr-1 pr-5' type='ingredient_items' id='newIngredient'>";

    // Finally put it where it is supposed to appear.
	document.getElementById("SearchIngredients").appendChild(txtNewInputBox);

  if (numIngredients == 1) {
    document.getElementById('RemoveButton').disabled = false;
  }
}

function removeIngredient() {
  var el = document.getElementById('Ingredient '+numIngredients+'');
  el.remove(); // Removes the div with the 'div-02' id
  numIngredients--;

  if (numIngredients == 0) {
    document.getElementById('RemoveButton').disabled = true;
  }
}
