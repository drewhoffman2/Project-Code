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
