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
