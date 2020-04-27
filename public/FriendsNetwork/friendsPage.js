//1) connect firebase
//accesing the logged in user
 var userID = localStorage.getItem("idstor");
var friend_index=0;
 firebase.analytics();
 console.log(userID);
 const database = firebase.database();

//2) current user's profile


//3) current user's friend's cards
var number=0;
var content = ``;
var modal_content = ``;
//I reference the users first and call the function test if I receive data
var reff = database.ref('users');
reff.on('value', test, err);

  //traverse through the users friends in order to make cards for each
function test(data) {
  var users = data.val();
  var keys = Object.keys(users);
  console.log(keys)
  if(users[userID].friends != undefined){
  var reccs = Object.keys(users[userID].friends);
  var length = reccs.length;
  }
  else{var length=0;}
console.log(length);


//here I reference the recipes array with what the user has stored
  for (var i=0; i<length; i++){
    var user_friends = database.ref('friends/' + users[userID].friends[reccs[i]]);
//here I call the function gotData for the recipe information refrencing the reicpe array using the ids from the user
    user_friends.on('value', gotUserData, errData);
  }

}

    //a) username

    //b) their recipe cards



//4) Helper functions
function errData(err) {
  console.log(err);
}

function err(data) {
console.log("err: ", data);
}

function gotUserData(data)
{
  var friends =data.val();
  var friend_id = data.key;
  //var keys = Object.keys(recipes);
  console.log(data);
  let container = document.getElementById('friends');
  let modals = document.getElementById('modals');
  //friend info below (username name recipes)
  var username = user.username;
  var firstName = user.first_name;
  var lastName = user.last_name;
  //var recipes = user.recipes; //then find out how to connect all that info (in fill_saved) by attaching to this var

  //builds the friend card
    var modal_name = "friend_"+number;
    var card_name = "card_"+friend_index;
    //var pic_id = "pic_"+number; //there are no pics for each user
    number++;
    friend_index++;
    content = `
    <div class="col-sm-4">

      <div class="card " style="background-color:#ff7366;height:500px">
        <div id="${card_name}">
        <button onclick="Display(${modal_name})">View Friend</button>
        <button onclick="DeleteFriend(${card_name})">Delete</button>
        <div class="card-block">
          <h4 class="card-title">${username}</h4>
        </div>
        <div class="card-block">
        </div>
      </div>
      </div>
    </div>
    `;
    container.innerHTML += content;
    //getImageUrl(image, pic_id); //np pics in user profiles

    //here I build the modal for each friend and its appropriate info
    modal_content = `
        <div id="${modal_name}" class="modal">
        <!-- Modal content -->
        <div class="modal-content">
          <span class="close" onclick="Close(${modal_name})">&times;</span>
            <div class="modal-header">
          <h2>${username}: </h2>
          </div>

          <div class="modal-body">
            <p>Recipes:</p>
            <ul>`
            //needs to add recipes of user as cards to the modal

    modal_content+=`</ul>
            <p>Recipes: </p>

          </div>
        </div>
      </div>
    `;

    modals.innerHTML += modal_content
  //call fill_saved(data) to get recipe cards?
}

//display the recipe modal when the view button is clicked
function Display(id)
{
  document.getElementById(id.id).style.display = "block";
}

function Close(id)
{
  document.getElementById("genericRecipe").style.display = "none";
}

window.onclick = function(event)
{
  if (event.target == document.getElementById("foodRecipe"))
  {
    document.getElementById("foodRecipe").style.display = "none";
  }
  if (event.target == document.getElementById("genericRecipe"))
  {
    document.getElementById("genericRecipe").style.display = "none";
  }
}



function fill_friends(data) //friends card + modal
{
  /*
  var recipes=data.val();
  var recipe_id = data.key;
  //var keys = Object.keys(recipes);
  console.log(data);
  let container = document.getElementById('saved_friend');
  let modals = document.getElementById('modals');
  //friend info below (username name recipes)
  var username = user.username;
  var firstName = user.first_name;
  var lastName = user.last_name;
  var recipes = user.recipes; //then find out how to connect all that info (in fill_saved) by attaching to this var

  //builds the friend card
    var modal_name = "friend_"+number;
    var card_name = "card_"+friend_index;
    //var pic_id = "pic_"+number; //there are no pics for each user
    number++;
    friend_index++;
    content = `
    <div class="col-sm-4">

      <div class="card " style="background-color:#ff7366;height:500px">
        <div id="${card_name}">
        <img id="${pic_id}" class="card-img-top img-fluid" style="height:230px" src="../images/spaghetti.jpg" alt="Card image cap" >
        <button onclick="Display(${modal_name})">View Friend</button>
        <button onclick="DeleteFriend(${card_name})">Delete</button>
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
    container.innerHTML += content;
    //getImageUrl(image, pic_id); //np pics in user profiles

    //here I build the modal for each friend and its appropriate info
    modal_content = `
        <div id="${modal_name}" class="modal">
        <!-- Modal content -->
        <div class="modal-content">
          <span class="close" onclick="Close(${modal_name})">&times;</span>
            <div class="modal-header">
          <h2>${username}: </h2>
          </div>

          <div class="modal-body">
            <p>Recipes:</p>
            <ul>`
            //this loop iterates over all the ingredients to add them to the modal - needs to add them as cards to the modal
            for (var j=0; j<recipes.length; j++ )
            {
              modal_content += `
              <li>${recipes[j]}</li>
              `
            }
    modal_content+=`</ul>
            <p>Recipes: </p>
            <ol> `
            for (var k=0; k<recipes.length; k++) {
    modal_content += `
            <li>${recipes[k]}</li>
    `; }
            modal_content+=`</ol>
          </div>
        </div>
      </div>
    `;

    modals.innerHTML += modal_content
//call fill_saved(data) to get recipe cards?
*/
}

function fill_saved(data)//recipe card + modal (edit to be just cards on the modal?)
{
  /*
  //console.log(data.val());
  var recipes=data.val();
  var recipe_id = data.key;
  //var keys = Object.keys(recipes);
  console.log(data);
  let container = document.getElementById('saved_recipes');
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
    var pic_id = "pic_"+number;
    number++;
    recipe_index++;
    content = `
    <div class="col-sm-4">

      <div class="card " style="background-color:#ff7366;height:500px">
        <div id="${card_name}">
        <img id="${pic_id}" class="card-img-top img-fluid" style="height:230px" src="../images/spaghetti.jpg" alt="Card image cap" >
        <button onclick="Display(${modal_name})">View Recipe</button>
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
  //uncomment after figure out how to keep the size reasonable
    getImageUrl(image, pic_id);
  //  console.log(data.key);
  */
}


//Vanessa's Code
function getImageUrl(pic, id) {
  /*
  console.log(id);
  var storage = firebase.storage();
  var storageRef = storage.ref();
  var image_url;
  var word = "images/" + pic;
  var imageRef = storageRef.child(word);
  console.log(id);
    imageRef.getDownloadURL().then(function(url) {
      // Once we have the download URL, we set it to our img element
      document.getElementById(id).src = url;
    })
    */
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
