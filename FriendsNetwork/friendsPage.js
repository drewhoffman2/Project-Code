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
