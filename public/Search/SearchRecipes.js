var numIngredients = 0;

// function to add another text box for ingredient items
function createNewElement() {
  numIngredients++;

    // First create a DIV element.
	var txtNewInputBox = document.createElement('div');

    // Then add the content (a new input box) of the element. '" + player_id + "'
    txtNewInputBox.classList.add("input-group")
    txtNewInputBox.innerHTML = "<input id='Ingredient" +numIngredients+ "' name='ingredient' class='form-control py-2 rounded-pill mr-1 pr-5' type='ingredient_items' id='newIngredient'>";

    // Finally put it where it is supposed to appear.
	document.getElementById("SearchIngredients").appendChild(txtNewInputBox);

  if (numIngredients == 1) {
    document.getElementById('RemoveButton').disabled = false;
  }
}

function removeIngredient() {
  var el = document.getElementById('Ingredient'+numIngredients+'');
  el.remove(); // Removes the div with the 'div-02' id
  numIngredients--;

  if (numIngredients == 0) {
    document.getElementById('RemoveButton').disabled = true;
  }
}

function clickAdvance() {
  document.getElementById("keyword").required = true;
  var x = document.getElementById("myText").required;
  console.log(x);
}


// function to get the search from the user
function getSearch() {
  // clear localStorage to reset search info
  localStorage.clear();

  var search = document.getElementById("search").value;
  localStorage.setItem("Search", search);


  // redirct the page to displaSearch page
  window.location.href='displaySearch.html';
}

function getAdvancedSearch() {
  // clear localStorage to reset search info
  localStorage.clear();

  var keyword = document.getElementById("keyword").value;
  localStorage.setItem("Keyword", keyword);

  var rating = document.getElementsByName("rating_input");
  var rate;
  for (var i = 0; i < rating.length; i++) {
    if (rating[i].checked) {
      rate = rating[i].value;
    }
  }
  localStorage.setItem("Rating", rate);

  // if statements to check if glutenFree. vegetarian, or vegan are clicked and add to localStorage
  if (document.getElementById("glutenFree").checked) {
    localStorage.setItem("GlutenFree", "Gluten Free");
  }

  if (document.getElementById("vegetarian").checked) {
    localStorage.setItem("Vegetarian", "Vegetarian");
  }

  if (document.getElementById("vegan").checked) {
    localStorage.setItem("Vegan", "Vegan");
  }

  var ingre = [];
  var i = 0;
  var id = "Ingredient" + (i+1);
  while (document.getElementById(id)) {
    ingre[i] = document.getElementById(id).value;
    i++;
    id = "Ingredient" + (i+1);
    localStorage.setItem("Ingredient", JSON.stringify(ingre));
  }

  if (document.getElementById("max_time").value !== null) {
      var time = document.getElementById("max_time").value;
      localStorage.setItem("MaxTime", time);
  }

  // redirct the page to displaSearch page
  window.location.href='displaySearch.html';
}

// function that uploads search info onto displaySearch page when loaded
function uploadSearch() {
  var node = document.createElement('LI');
  var textnode;

  var word = localStorage.getItem('Search');
  word = word.charAt(0).toUpperCase()+word.slice(1);
  textnode = document.createTextNode(word);
  node.appendChild(textnode);
  document.getElementById("search-list").appendChild(node);
  //document.getElementById("search").innerHTML += localStorage.getItem('Search');
}

// function to upload advanced search info onto displaSearch page when loaded
function uploadAdvancedSearch() {
  var node = document.createElement('LI');
  var textnode;

  textnode = document.createTextNode(localStorage.getItem('Keyword'));
  node.appendChild(textnode);
  document.getElementById("search-list").appendChild(node);
  if (localStorage.getItem('Rating')) {
    var node = document.createElement('LI');
    textnode = document.createTextNode("Rating: " + localStorage.getItem('Rating'));
    node.appendChild(textnode);
    document.getElementById("search-list").appendChild(node);
  }
  if (localStorage.getItem('GlutenFree')) {
    var node = document.createElement('LI');
    textnode = document.createTextNode(localStorage.getItem('GlutenFree'));
    node.appendChild(textnode);
    document.getElementById("search-list").appendChild(node);
  }
  if (localStorage.getItem('Vegetarian')) {
    var node = document.createElement('LI');
    textnode = document.createTextNode(localStorage.getItem('Vegetarian'));
    node.appendChild(textnode);
    document.getElementById("search-list").appendChild(node);
  }
  if (localStorage.getItem('Vegan')) {
    var node = document.createElement('LI');
    textnode = document.createTextNode(localStorage.getItem('Vegan'));
    node.appendChild(textnode);
    document.getElementById("search-list").appendChild(node);
  }

  if (localStorage.getItem("Ingredient")) {
    ingred = JSON.parse(localStorage.getItem("Ingredient"));

    var node = document.createElement('LI');
    for (var i = 0; i < ingred.length; i++) {
      var text = ingred[i].charAt(0).toUpperCase()+ingred[i].slice(1);
      if (i == 0) {
        textnode = "Ingredient(s): " + text;
      }
      else {
          textnode += ", " + text;
      }
    }
    console.log(textnode)
    textnode = document.createTextNode(textnode)
    node.appendChild(textnode);
    document.getElementById("search-list").appendChild(node);
  }

  if (localStorage.getItem('MaxTime')) {
    var node = document.createElement('LI');
    textnode = document.createTextNode("Max Time: " + localStorage.getItem('MaxTime'));
    node.appendChild(textnode);
    document.getElementById("search-list").appendChild(node);
  }
}


// function to look in the database to find search results based on user input
// pass in search type to know which search has been done
function findResults(type) {
  var ref = database.ref('recipes');

  // if that checks if the search was regular or advanced
  if (type == "regular") {
    // getting data
    // will either call gotData or errData function
    ref.on('value', gotData, errData);
  }
}

// convert minutes to hours as string
function MinutesToHours(minutes) {
  var conversion;
  if (minutes > 60) {
    var hours = Math.floor(minutes/60);
    var minutes = (minutes%60)
    conversion = hours.toString() + " hour(s) "+ minutes.toString() + " minute(s)";
  }
  else {
    conversion = minutes.toString() + " minute(s)";
  }
  return conversion;
}

// function that will create recipe as a card to disply on display search
function createCard(array) {
  var card = "", count = 1;
  //console.log(array[0].descrip);

  var div = document.createElement("div");

  for (var i = 0; i < array.length; i++) {
    if (i == 0) {
      card += '<div class="row">';
      //card += '<div style="width: 30%">';
    }
    console.log("second");
    card += '<div class="col-sm-6">';
    card += '<div class="card" style="height: 17rem;">';
    card += '<div class="card-body">';
    card += '<h5 class="card-title">'+array[i].recipe_name+'</h5>';
    card += '<p class="card-text">'+array[i].descrip+'</p>';
    card += '<p class="card-text">Rating: '+array[i].rating+'</p>';
    var time = MinutesToHours(array[i].make_time);
    card += '<p class="card-text">Make Time: '+time+'</p>';
    card += '</div>';
    card += '</div>';
    card += '</div>';

    if (count%2 == 0) {
      // end the div of card rows
      card += '</div><div class=row style="margin-top:10px">';
      count = 0;
    }
    count++;
  }

  // insert card into innerHTML of div
  document.getElementById("results").innerHTML += card;

}

// function to get the data from the database
function gotData(data) {
  //console.log(data.val());

  // set recipes to the data in database
  var recipes = data.val();
  // get data in array for all keys in recipes
  var keys = Object.keys(recipes);
  console.log(keys);
  // array to hold found recipes
  var recipe_array = [];

  // for loop that runs through keys in recipes
  for (var i = 0; i < keys.length; i++) {
    // declare variables
    var k = keys[i];
    var recipe_name = recipes[k].recipe_name;
    // make strings to lower case to make searching strings easier
    var recipe_name_lower = recipe_name.toLowerCase();
    var search = localStorage.getItem("Search").toLowerCase();
    // if that checks if the user search is more than one word
    if (search.split(' ').length >= 2) {
      var split = search.split(' ');
      var count = 0;
      // for loop that runs through all search words to find a match in recipes
      for (var j = 0; j < split.length; j++) {
        var word = split[j].toString();
        // if that checks if user search is in the recipe name
        if (recipe_name_lower.includes(word)) {
          count++;
        }
      }
      //if that checks if there was 2 words to match recipe to display
      if (count >= 2) {
        // add recipe to array
        recipe_array.push(recipes[k]);
      }
    }
    // else search is only one word
    else {
      // if that checks if user search is in the recipe name
      if (recipe_name_lower.includes(search)) {
        num++;
        // add recipe to array
        recipe_array.push(recipes[k]);
      }
    }
  }

  // call function to create a card with recipe found
  createCard(recipe_array);

}

function errData() {
  console.log("Error!");
  console.log(err);
}
