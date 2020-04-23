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

var recRef = firebase.database().ref('recipes');

var submitRecipe = function() {
    //var user = $("#").val(); //figure out
    var descrip = $("#recDescript").val();
    //var image = $("#recImage").val(); //figure out
    var maketime = $("#recTime").val();
    var recipe_name = $("#recTitle").val();
    var servings = $("#recServ").val();

    //to collect all of ingredient/instruction array
    var ingredients = [];
    var ingCount = 1; //counter
    while(ingCount < 11 && $("#ing" + ingCount).val()){ //while counter < maximum AND the id returns a nonNULL value
      ingredients.push($("#ing" + ingCount).val()); //push value onto array
      ingCount++;
    }
    var directions = [];
    var dirCount = 1;
    while(dirCount < 16 && $("#ins" + dirCount).val()){
      directions.push($("#ins" + dirCount).val());
      dirCount++;
    }

    var gluten_free = 0;
    if($("#glutenF").prop("checked") == true){
      gluten_free = 1;
    }
    var private = 0;
    if($("#priv").prop("checked") == true){
      private = 1;
    }
    var vegan = 0;
    if($("#vegan").prop("checked") == true){
      vegan = 1;
    }
    var vegetarian = 0;
    if($("#vegetarian").prop("checked") == true){
      vegetarian = 1;
    }

    recRef.push({
      //"created_by" : user,
      "descrip" : descrip,
      "directions" : directions,
      "gluten_free" : gluten_free,
      //"image" : image,
      "ingredients" : ingredients,
      "maketime" : maketime,
      "private" : private,
      "rating" : "0",
      "recipe_name" : recipe_name,
      "servings" : servings,
      "vegan" : vegan,
      "vegetarian" : vegetarian
    });
};

$(window).on('load', function () {

  // Find the HTML element with the id inpForm, and when the submit
  // event is triggered on that element, call submitRecipe.
  $("#inpForm").submit(submitRecipe);

});
