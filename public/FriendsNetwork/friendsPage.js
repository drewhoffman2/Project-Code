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
  var username = users[userID].username;
  var firstName = users[userID].first_name;
  var lastName = users[userID].last_name;
  let card = document.getElementById('username');
  var content = `  <tr>
      <th><h1 class="display-4">${username}</h1></th>
      <th></th>
    </tr>
  		`
      card.innerHTML+=content;
  //console.log(users[userID].first_name);
  if(users[userID].friends != undefined){
  var reccs = Object.keys(users[userID].friends);
  var length = reccs.length;
  }
  else{var length=0;}
//console.log(length);
var reff = database.ref('users/'+userID);
reff.on('value', gotUserData, err);

}

    //a) username

    //b) their recipe cards



//4) Helper functions


function err(data) {
console.log("err: ", data);
}

//building modals
function gotUserData(data)
{
  var friends =data.val();
  var friend_id = data.key;
  //var keys = Object.keys(recipes);
for(var i = 0; i<friends.friends.length; i++)
{
  var reff = database.ref('users/'+friends.friends[i]);
  reff.on('value', fillFriends, err);
}


}

function fillFriends(data)
{
  //console.log(data.val())
  var friend = data.val();
  var firstName = friend.first_name;
  var lastName = friend.last_name;
  var username = friend.username;
  //console.log(lastName);
  var container = document.getElementById('friends');
  var modals = document.getElementById('modals');
  var modal_name = "modal_"+number; //makes unique id for every friend
  number++;
  var content = `
  <div class="col-sm-4">

    <div class="card " style="background-color:#ff7366;height:250px">
      <div id="card_name">
      <button onclick="Display(${modal_name})">View Friend</button>
      <div class="card-block">
        <h4 class="card-title">${username}</h4>
        <p class="card-text">first name: ${firstName}</p>
        <p class="card-text">last name: ${lastName}</p>
      </div>
      <div class="card-block">
      </div>
    </div>
    </div>
  </div>
  `
  container.innerHTML += content;
  var keys = Object.keys(friend.recipes);
  var length = Object.keys(friend.recipes).length;
  var modal_content =  `
  <div id="${modal_name}" class="modal">
  <!-- Modal content -->
  <div class="modal-content">
    <span class="close" onclick="Close(${modal_name})">&times;</span>
      <div class="modal-header">
    <h2>${username} </h2>
    </div>

    <div class="modal-body">
      <p>Recipes: </p> `
      for(var i = 0; i < length; i++)
      {
        modal_content += `
        <li>${friend.recipes[keys[i]]}</li>` //find a way to pull this name from the recipe database
      }
      modal_content += `
    </div>
  </div>
</div>
  `
  modals.innerHTML += modal_content;

}

//display the recipe modal when the view button is clicked
function Display(id)
{
  document.getElementById(id.id).style.display = "block";
}

function Close(id)
{
  document.getElementById(id.id).style.display = "none";
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



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
