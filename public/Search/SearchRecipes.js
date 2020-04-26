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

  set(function() {
    var advancedForm = document.getElementById("keyword");

    location.href = "#keyword"; }, 355);
}

/*
  HELPER FUNCTIONS
*/

// function that capitalize the first letter of a word
function capitalize(word) {
  var newWord = "";
  var array = word.split(" ");
  for (var i = 0; i < array.length; i++) {
    newWord += array[i].charAt(0).toUpperCase() + array[i].slice(1);
    newWord += " ";
  }
  return newWord;
}

// END OF HELPER FUNCTIONS

// function to get the search from the user
function getSearch() {
  // clear localStorage to reset search info
  localStorage.clear();
  var search = document.getElementById("search").value;

  // check if the user typed in something
  if (search != "") {

    console.log(search);
    localStorage.setItem("Search", search);
    // redirct the page to displaySearch page
    window.location.href = 'displaySearch.html';
  }
  else {
    alert("Please fill out search field");
  }
}

function getAdvancedSearch() {
  // clear localStorage to reset search info
  localStorage.clear();

  var keyword = document.getElementById("keyword").value;

  if (keyword !== "") {
    localStorage.setItem("Keyword", keyword);

    var rating = document.getElementsByName("rating_input");
    var rate;
    for (var i = 0; i < rating.length; i++) {
      if (rating[i].checked) {
        rate = rating[i].value;
        localStorage.setItem("Rating", rate);
      }
    }

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

}

// function that uploads search info onto displaySearch page when loaded
function uploadSearch() {
  var node = document.createElement('LI');
  var textnode;

  var word = localStorage.getItem('Search');
  word = capitalize(word);
  textnode = document.createTextNode(word);
  node.appendChild(textnode);
  document.getElementById("search-list").appendChild(node);
  //document.getElementById("search").innerHTML += localStorage.getItem('Search');
}

// function to upload advanced search info onto displaSearch page when loaded
function uploadAdvancedSearch() {
  var node = document.createElement('LI');
  var textnode;
  // array to hold if the user had a requirement for each search choice
  var requirements = [];

  textnode = capitalize(localStorage.getItem('Keyword'));
  textnode = document.createTextNode(textnode);

  node.appendChild(textnode);
  document.getElementById("search-list").appendChild(node);
  // check if there was a rating preference
  if (localStorage.getItem('Rating')) {
    // push 1 into array to show there was a rating
    requirements.push(1);
    var node = document.createElement('LI');
    textnode = document.createTextNode("Rating: " + localStorage.getItem('Rating'));
    node.appendChild(textnode);
    document.getElementById("search-list").appendChild(node);
  }
  else {
    // push 0 into array --> no rating
    requirements.push(0);
  }

  if (localStorage.getItem('GlutenFree')) {
    // push 1 into array --> there was gluten free requirement
    requirements.push(1);
    var node = document.createElement('LI');
    textnode = document.createTextNode(localStorage.getItem('GlutenFree'));
    node.appendChild(textnode);
    document.getElementById("search-list").appendChild(node);
  }
  else {
    // 0 --> there is no gluten free
    requirements.push(0);
  }

  if (localStorage.getItem('Vegetarian')) {
    // push 1 --> there was a requirement
    requirements.push(1);
    var node = document.createElement('LI');
    textnode = document.createTextNode(localStorage.getItem('Vegetarian'));
    node.appendChild(textnode);
    document.getElementById("search-list").appendChild(node);
  }
  else {
    // push 0 --> there was no requirement
    requirements.push(0);
  }

  if (localStorage.getItem('Vegan')) {
    // push 1 --> there was a requirement
    requirements.push(1);
    var node = document.createElement('LI');
    textnode = document.createTextNode(localStorage.getItem('Vegan'));
    node.appendChild(textnode);
    document.getElementById("search-list").appendChild(node);
  }
  else {
    // push 0 --> there was no requirement
    requirements.push(0);
  }

  if (localStorage.getItem("Ingredient")) {
    // push 1 --> there was a requirement
    requirements.push(1);
    ingred = JSON.parse(localStorage.getItem("Ingredient"));

    var node = document.createElement('LI');
    for (var i = 0; i < ingred.length; i++) {
      var text = capitalize(ingred[i]);
      if (i == 0) {
        textnode = "Ingredient(s): " + text;
      }
      else {
          textnode += ", " + text;
      }
    }
    //console.log(textnode)
    textnode = document.createTextNode(textnode)
    node.appendChild(textnode);
    document.getElementById("search-list").appendChild(node);
  }
  else {
    // push 0 --> there was no requirement
    requirements.push(0);
  }

  if (localStorage.getItem('MaxTime')) {
    // push 1 --> there was a requirement
    requirements.push(1);
    var node = document.createElement('LI');
    textnode = document.createTextNode("Max Time: " + localStorage.getItem('MaxTime'));
    node.appendChild(textnode);
    document.getElementById("search-list").appendChild(node);
  }
  else {
    // push 0 --> there was no requirement
    requirements.push(0);
  }

  // put requirements array into local storage
  localStorage.setItem("Requirements", requirements)
}


// function to look in the database to find search results based on user input
// pass in search type to know which search has been done
function findResults(type) {
  var ref = database.ref('recipes');

  // if that checks if the search was regular or advanced
  if (type == "regular") {
    // getting data
    // will either call gotData or errData function
    //console.log("Search");
    ref.on('value', gotDataSearch, errData);
  }
  else if (type == "advanced"){
    //console.log("Advanced");
    ref.on('value', gotDataAdvanced, errData);
  }
  else if (type == "currentRecipe") {
    //console.log("Advanced");
    ref.on('value', gotCurrentRecipe, errData);
  }
  else if (type == "users") {
    var ref = database.ref('users');
    ref.on('value', getCreator, errData);
  }
  else if (type == "currentUser") {
    var ref = database.ref('users');
    ref.on('value', gotUserInfo, errData);
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
function createCard(array, ids, pics) {
  var card = "", count = 1;
  //console.log(array[0].descrip);

  var div = document.createElement("div");

  for (var i = 0; i < array.length; i++) {
    if (i == 0) {
      card += '<div class="row">';
    }
    card += '<div class="col-sm-6">';
    card += '<div class="card h-100">';
    // console.log(pics[i]);
    // card += '<img src="'+ pics[i] +'" class="card-img-top" alt="'+ array[i].recipe_name +' Picture">';
    card += '<div class="card-body" style="word-wrap: break-word;">';
    card += '<h5 class="card-title">'+array[i].recipe_name+'</h5>';
    card += '<p class="card-text">'+array[i].descrip+'</p>';
    card += '<p class="card-text">Rating: '+array[i].rating+'</p>';
    var time = MinutesToHours(array[i].make_time);
    card += '<p class="card-text">Make Time: '+time+'</p>';
    card += '</div>';
    card += '<button type="submit" id="'+ ids[i] +'" onclick="seeRecipe(this.id)" class="btn btn-dark">See Recipe</button>';
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

function noRecipe() {
  document.getElementById("results").innerHTML += '<h4 style="text-align:center">Sorry, there are no recipes based on your search.</h4>';
}

// function to get the data from the database
function gotDataSearch(data) {
  //console.log(data.val());

  // set recipes to the data in database
  var recipes = data.val();
  // get data in array for all keys in recipes
  var keys = Object.keys(recipes);
  console.log(keys);
  // array to hold found recipes
  var recipe_array = [];
  // array to hold keys of found recipes, array to hold image's urls
  var ids_array = [], pic_array = [],unique_id;
  var createdByUser = false;

  // for loop that runs through keys in recipes
  for (var i = 0; i < keys.length; i++) {
    // declare variables
    var k = keys[i];

    // check if the recipe is made by the current user
    var user_recipe = JSON.parse(localStorage.getItem('CurrentUserData'));
    if (user_recipe != undefined) {
      for (var a = 0; a < user_recipe.recipes.length; a++) {
        //console.log(user_recipe.recipes[a]);
        if (user_recipe.recipes[a] == k) {
          createdByUser = true;
        }
      }
    }

    if (recipes[k].private == 0 && createdByUser == false) {
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


          // function to find the unique_id of the current key
          var query = firebase.database().ref('recipes').orderByChild('recipe_name').equalTo(recipe_name);
          query.once( 'value', data => {
              data.forEach(userSnapshot => {
                  let user = userSnapshot.val();
                  let key = userSnapshot.key;
                  // set the key to unique_id
                  unique_id = key;
              });
          });

          // add id to array
          ids_array.push(unique_id);

        }
      }
      // else search is only one word
      else {
        // if that checks if user search is in the recipe name
        if (recipe_name_lower.includes(search)) {
          // add recipe to array
          recipe_array.push(recipes[k]);


          // function to find the unique_id of the current key
          var query = firebase.database().ref('recipes').orderByChild('recipe_name').equalTo(recipe_name);
          query.once( 'value', data => {
              data.forEach(userSnapshot => {
                  let user = userSnapshot.val();
                  let key = userSnapshot.key;
                  // set the key to unique_id
                  unique_id = key;
              });
          });

          // add id to array
          ids_array.push(unique_id);
        }
      }
    }
  }

  // if that checks if there was any found recipes
  // if there was a hit --> create cards in html with recipes
  if (recipe_array.length == 0) {
    noRecipe();
  }
  else {

    // call function to create a card with recipe found
    createCard(recipe_array, ids_array);
  }
}

function gotDataAdvanced(data) {

  // set recipes to the data in database
  var recipes = data.val();
  // get data in array for all keys in recipes
  var keys = Object.keys(recipes);
  //console.log(keys);
  // array to hold found recipes
  var recipe_array = [];
  // array to hold keys of found recipes
  var ids_array = [];

  console.log(keys);
  var unique_id, createdByUser = false;


  // for loop that runs through keys in recipes
  for (var i = 0; i < keys.length; i++) {
    // declare variables
    var k = keys[i];

    // check if the recipe is made by the current user
    var user_recipe = JSON.parse(localStorage.getItem('CurrentUserData'));
    if (user_recipe != undefined) {
      for (var a = 0; a < user_recipe.recipes.length; a++) {
        //console.log(user_recipe.recipes[a]);
        if (user_recipe.recipes[a] == k) {
          createdByUser = true;
        }
      }
    }


    // if that chkes if the recipe is private or not
    if (recipes[k].private == 0 && createdByUser == false) {
      var recipe_name = recipes[k].recipe_name;
      var found = false;
      // make strings to lower case to make searching strings easier
      var recipe_name_lower = recipe_name.toLowerCase();
      var keyword = localStorage.getItem("Keyword").toLowerCase();
      // if that checks if the user keyword is more than one word
      if (keyword.split(' ').length >= 2) {
        var split = keyword.split(' ');
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
          // set keyowrd found to true
          found = true;
        }
      }
      // else search is only one word
      else {
        // if that checks if user search is in the recipe name
        if (recipe_name_lower.includes(keyword)) {
          // set keyowrd found to true
          found = true;
        }
      }

      // if there was a match with the keyword --> continue on with other requirements in search
      // otherwise, test other recipes

      if (found == true) {
        //console.log(localStorage.getItem("Requirements"));
        var requirements = localStorage.getItem("Requirements");


        // check if there was a rating requirement
        if (requirements[0] == 1) {
          //console.log("Rating");
          var rating = recipes[k].rating;
          var user_rating = localStorage.getItem("Rating");
          // check to see if the user rating does not match the current recipes rating
          if (rating != user_rating) {
            // set found to false showing this recipe is not a match
            found = false;
          }
        }

        console.log(found);
        // check if there is a gluten free requirement
        if (found == true && requirements[2] == 1) {
          var gf = recipes[k].glutenFree;
          var user_gf = localStorage.getItem("GlutenFree");
          // check to see if the recipe's gluten free matches the user
          if (gf != user_gf) {
            // if recipe is not gluten free --> found is false --> recipe does not match
            found = false;
          }
        }

        // check if there is a vegetarian requirement
        if (found == true && requirements[4] == 1) {
          var veg = recipes[k].vegetarian;
          var user_veg = localStorage.getItem("Vegetarian");
          // check to see if the recipe's vegetarian matches the user
          if (veg != user_veg) {
            // if recipe is not vegetarian --> found is false --> recipe does not match
            found = false;
          }
        }

        // check if there is a vegan requirement
        if (found == true && requirements[6] == 1) {
          var vegan = recipes[k].vegan;
          var user_vegan = localStorage.getItem("Vegan");
          // check to see if the recipe's vegan matches the user
          if (vegan != user_vegan) {
            // if recipe is not vegan --> found is false --> recipe does not match
            found = false;
          }
        }

        // check if there is a ingredient requirement
        if (found == true && requirements[8] == 1) {
          var ingred = recipes[k].ingredients;
          var user_ingred = JSON.parse(localStorage.getItem("Ingredient"));
          // set found to false
          found = false;
          // var to have count of number of user ingredients
          var count = user_ingred.length, counter = 0;
          // check to see if any of the recipe's ingredients matches the user
          for (var u = 0; u < user_ingred.length; u++) {
            for (var a = 0; a < ingred.length; a++) {
              if (ingred[a].includes(user_ingred[u])) {
                counter++;
              }
            }
          }

          // check to see if the current recipe has all the ingredients that the user selected
          if (counter == count) {
            found = true;
          }
        }

        // check if there is a vegetarian requirement
        if (found == true && requirements[10] == 1) {
          var time = recipes[k].vegetarian;
          var user_time = localStorage.getItem("Vegetarian");
          // check to see if the recipe's gluten free matches the user
          if (time != user_time) {
            // if recipe is not gluten free --> found is false --> recipe does not match
            found = false;
          }
        }

        // check to see if the current recipe matches all requirements
        if (found == true) {
          // add recipe to array
          recipe_array.push(recipes[k]);

          // function to find the unique_id of the current key
          var query = firebase.database().ref('recipes').orderByChild('recipe_name').equalTo(recipe_name);
          query.once( 'value', data => {
              data.forEach(userSnapshot => {
                  let user = userSnapshot.val();
                  let key = userSnapshot.key;
                  // set the key to unique_id
                  unique_id = key;
              });
          });

        ids_array.push(unique_id);
        }
      }
    }
  }

  //console.log(ids_array);

  // if that checks if there was any found recipes
  // if there was a hit --> create cards in html with recipes
  if (recipe_array.length == 0) {
    noRecipe();
  }
  else {
    // call function to create a card with recipe found
    createCard(recipe_array, ids_array);
  }
}


function errData() {
  console.log("Error!");
  console.log(err);
}

// function that finds current recipe in
function gotCurrentRecipe(data) {
  // console.log(localStorage.getItem("ID"));

  // set recipes to the data in database
  var recipes = data.val();
  // get data in array for all keys in recipes
  var keys = Object.keys(recipes);


  console.log(recipes);
  var recipe = localStorage.getItem("ID"), found = false, i = 0, k;

  while (found == false) {
    // declare variables
    k = keys[i];

    if (k == recipe) {
      //console.log("true");
      found = true;
      recipe = recipes[k];
    }
    else {
      i++;
    }
  }

  console.log(recipe);

  // put recipe name in html page
  document.getElementById("recipe_name").innerHTML = recipe.recipe_name;

  // put recipe creator name in html page
  localStorage.setItem("userID", recipe.created_by);
  findResults("users");

  // make buton clickable if user hasn't saved recipe already
  findResults("currentUser");
  // call function to see if button needs to be disabled
  checkSaveButton(k);

  // put recipe description in html page
  document.getElementById("descrip").innerHTML = recipe.descrip;

  // put recipe rating in html page
  document.getElementById("rating").innerHTML = recipe.rating;

  // put recipe time in html page
  document.getElementById("time").innerHTML = MinutesToHours(recipe.make_time);

  // put recipe servings size in html page
  document.getElementById("servings").innerHTML = recipe.servings;

  // put if recipe is vegetarian
  if (recipe.vegetarian) {
    document.getElementById("vegetarian").innerHTML = "Yes";
  }
  else {
    document.getElementById("vegetarian").innerHTML = "No";
  }

  // put if recipe is vegan
  if (recipe.vegan) {
    document.getElementById("vegan").innerHTML = "Yes";
  }
  else {
    document.getElementById("vegan").innerHTML = "No";
  }

  // put if recipe is gluten free
  if (recipe.gluten_free) {
    document.getElementById("gluten_free").innerHTML = "Yes";
  }
  else {
    document.getElementById("gluten_free").innerHTML = "No";
  }

  // put recipe ingredients in html page
  var list = "", r = recipe.ingredients;
  for (var i = 0; i < r.length; i++) {
    list += "<li>" + r[i] +"</li>";
  }
  document.getElementById("ingredients").innerHTML = list;

  // put recipe directions in html page
  var list = "", r = recipe.directions;
  for (var i = 0; i < r.length; i++) {
    list += "<li>" + r[i] +"</li>";
  }
  document.getElementById("directions").innerHTML = list;

  // put recipe image in html page
  getImageUrl(recipe.image);

}

// function that takes recipe id and stores it and calls seeRecipe page
function seeRecipe(id) {
  // put id into localStorage
  localStorage.setItem("ID", id);

  // redirct the page to seeRecipe page
  window.location.href='seeRecipe.html';
}


function getImageUrl(pic) {
  var storage = firebase.storage();
  var storageRef = storage.ref();
  var image_url;
  var word = "images/" + pic;
  var imageRef = storageRef.child(word);
    imageRef.getDownloadURL().then(function(url) {
      // Once we have the download URL, we set it to our img element
      document.getElementById('picture').src = url;
      console.log(url);
    })

}

// function to get the creator of the user
function getCreator(data) {
  // set recipes to the data in database
  var users = data.val();
  // get data in array for all keys in recipes
  var keys = Object.keys(users);

  var name = localStorage.getItem("userID"), found = false, count = 0;

  while (found == false && count < keys.length) {
    var k = keys[count];
    //console.log(users[k]);
    if (k == name) {
      found = true;
      name = users[k].first_name + " " + users[k].last_name;
    }
    else {
      count++;
    }
  }

  // check if the creator's name was found
  if (found == true) {
    document.getElementById("creator_name").innerHTML = "Created By: " + name;
  }
}


// function to add the current recipe to saved recipes array of the logged in user
function saveRecipe() {
  //console.log(localStorage.getItem("CurrentUser"));
  var name = localStorage.getItem("CurrentUser");
  var recipeID = localStorage.getItem("ID");
  var ref = database.ref('users/' + name + "/saved_recipes");

  ref.push(recipeID);

  // disable the button and change the innerHTML to saved
  document.getElementById("saveButton").disabled = true;
  document.getElementById("saveButton").innerHTML = "Saved!";

}

// function to find the user in database and save their
function gotUserInfo(data) {
  // set recipes to the data in database
  var users = data.val();
  // get data in array for all keys in recipes
  var keys = Object.keys(users);
  var currentUser = localStorage.getItem("CurrentUser"), found = false, i = 0;

  while (found == false) {
    // declare variables
    var k = keys[i];

    if (k == currentUser) {
      found = true;
      currentUser = users[k];
      localStorage.setItem("SavedRecipes", JSON.stringify(currentUser.saved_recipes));
    }
    else {
      i++;
    }
  }
}

// function to check if the save button needs to be disabled if user already has saved the current recipe
function checkSaveButton(recipeID) {
  console.log(recipeID);
  // get the user's saved recipes from localStorage
  var saved = JSON.parse(localStorage.getItem('SavedRecipes'));
  console.log(saved);

  var keys = Object.keys(saved);
  var found = false, i = 0;

  while (found == false && i < keys.length) {
    // declare variables
    var k = keys[i];
    if (saved[k] == recipeID) {
      found = true;
      // disable the button and change the innerHTML to saved
      document.getElementById("saveButton").disabled = true;
      document.getElementById("saveButton").innerHTML = "Already Saved";
    }
    else {
       i++;
    }
  }
}
