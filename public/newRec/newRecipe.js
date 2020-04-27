var userID = localStorage.getItem("idstor");
console.log(userID);
var recRef = firebase.database().ref('recipes');

var submitRecipe = function() {
    //get info from html IDs
    var user = userID;
    var descrip = $("#recDescript").val();
    var maketime = Number($("#recTime").val());
    var recipe_name = $("#recTitle").val();
    var servings = Number($("#recServ").val());

    //collect all of ingredient/instruction array
    var ingredients = [];
    var ingCount = 1; //counter
    while($("#ing" + ingCount).val()){ //while id returns a nonNULL value
      ingredients.push($("#ing" + ingCount).val()); //push value onto array
      ingCount++;
    }
    var directions = [];
    var dirCount = 1;
    while($("#ins" + dirCount).val()){
      directions.push($("#ins" + dirCount).val());
      dirCount++;
    }

    //checkbox info
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

    //save image in storage
    var storeRef = firebase.storage().ref();
    var imgFile = $('#recImage').get(0).files[0];
    if(imgFile){
      var imgName = imgFile.name;
      const metadata = { contentType: imgFile.type };
      var picRef = storeRef.child('images/' + imgName);
      const task = picRef.child(imgName).put(imgFile, metadata);
task
  .then(snapshot => snapshot.ref.getDownloadURL())
  .then((url) => {
    console.log(url);
    document.querySelector('#recImage').src = url;
  })
  .catch(console.error);
    }

    var recKey;
    //push created recipe into database
    if(imgFile){ //if image is attached
      var newRef = recRef.push({
        "created_by" : user,
        "descrip" : descrip,
        "directions" : directions,
        "gluten_free" : gluten_free,
        "image" : imgName,
        "ingredients" : ingredients,
        "make_time" : maketime,
        "private" : private,
        "rating" : 0,
        "recipe_name" : recipe_name,
        "servings" : servings,
        "vegan" : vegan,
        "vegetarian" : vegetarian
      });
      recKey = newRef.key;
    } else {
      var newRef = recRef.push({
        "created_by" : user,
        "descrip" : descrip,
        "directions" : directions,
        "gluten_free" : gluten_free,
        "ingredients" : ingredients,
        "make_time" : maketime,
        "private" : private,
        "rating" : 0,
        "recipe_name" : recipe_name,
        "servings" : servings,
        "vegan" : vegan,
        "vegetarian" : vegetarian
      });
      recKey = newRef.key;
    }

    //add recipe to user's list
    var userRecRef = firebase.database().ref('users/' + userID + '/recipes');
    userRecRef.push(recKey)

};

$(window).on('load', function () {
  // Find the HTML element with the id inpForm, and when the submit
  // event is triggered on that element, call submitRecipe.
  $("#inpForm").submit(submitRecipe);

});
