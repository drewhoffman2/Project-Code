/***********************
  Load Components!

  Express      - A Node.js Framework
  Body-Parser  - A tool to help use parse the data in a post request
  Pg-Promise   - A database tool to help use connect to our PostgreSQL database
***********************/
var express = require('express'); //Ensure our express framework has been added
var app = express();
var bodyParser = require('body-parser'); //Ensure our body-parser tool has been added
app.use(bodyParser.json());              // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

//Create Database Connection
var pgp = require('pg-promise')();

/**********************
  Database Connection information
  host: This defines the ip address of the server hosting our database.  We'll be using localhost and run our database on our local machine (i.e. can't be access via the Internet)
  port: This defines what port we can expect to communicate to our database.  We'll use 5432 to talk with PostgreSQL
  database: This is the name of our specific database.  From our previous lab, we created the football_db database, which holds our football data tables
  user: This should be left as postgres, the default user account created when PostgreSQL was installed
  password: This the password for accessing the database.  You'll need to set a password USING THE PSQL TERMINAL THIS IS NOT A PASSWORD FOR POSTGRES USER ACCOUNT IN LINUX!
**********************/
const dbConfig = {
	host: 'localhost',
	port: 5432,
	database: 'finishmydish',
	user: 'vanes',
	password: 'reyes.vanessa'
};

var db = pgp(dbConfig);

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/'));//This line is necessary for us to use relative paths and access our resources directory

// change this to the homepage after
app.get('/', function(req, res) {
	res.render('../Search/searchRecipes',{
		local_css:"../Search/searchRecipes.css",
		my_title:"Search Recipes"
	});
});

// get to display displaySearch page
app.get('/displaySearch', function(req, res) {
	res.render('../Search/displaySearch',{
    local_css: "../Search/displaySearch.css",
		my_title:"Searched Recipes"
	});
});


/*Add your other get/post request handlers below here: */

app.get('/Search/searchRecipes', function(req, res) {
      res.render('../Search/searchRecipes',{
        my_title: "Search Recipes",
        local_css: "../Search/searchRecipes.css",
        advanced: '',
        search: '',
        recipe: '',
        recipe_keywords: '',
        rating: '',
        gluten: '',
        veg: '',
        vegan: '',
        ingred_list: '',
        max_time: '',
    });
});

app.get('/Search/searchRecipes/search', function(req, res) {
  var query_recipe = 'SELECT recipe_name, rating, gluten_free, vegetarian, vegan, ingredients, make_time FROM recipes';
  var s = req.query.search;

  db.any(query_recipe)
    .then(function (data) {
      res.render('../Search/searchRecipes',{
        my_title: "Search Recipes",
        local_css:"../Search/searchRecipes.css",
        advanced: '',
        search: s,
        recipe: '',
        recipe_keywords: '',
        rating: '',
        gluten: '',
        veg: '',
        vegan: '',
        ingred_list: '',
        max_time: '',
      })
    })
    .catch(function (err) {
      // display error message in case an error
      console.log('error', err);
      res.render('../Search/searchRecipes',{
        my_title: "Search Recipes",
        local_css:"../Search/searchRecipes.css",
        advanced: '',
        search: '',
        recipe: '',
        recipe_keywords: '',
        rating: '',
        gluten: '',
        veg: '',
        vegan: '',
        ingred_list: '',
        max_time: '',
      })
    });
});

app.get('/Search/searchRecipes/advanced', function(req, res) {
  var advanced = true;
  var query_recipe = 'SELECT recipe_name, rating, gluten_free, vegetarian, vegan, ingredients, make_time FROM recipes';
  var keywords = req.query.keyword;
  var stars = req.query.rating_input;
  var gf = false, veg = false, vgn = false;
  // set gluten free to true if checked
  if (req.query.glutenFree) {
    gf = true;
  }
  // set vegetarian to true if checked
  if (req.query.vegetarian) {
    veg = true;
  }
  // set vegan to true if checked
  if (req.query.vegan) {
    vgn = true;
  }

  // holds ingredients listed in form
  var ingred = req.query.ingredient;
  var time = req.query.max_time;


  console.log(keywords);

  db.any(query_recipe)
    .then(function (data) {
      // render information to display page
      res.render('../Search/displaySearch',{
        my_title: "Searched Recipes",
        local_css: "../Search/displaySearch.css",
        advanced: advanced,
        search: '',
        recipe: data,
        recipe_keywords: keywords,
        rating: stars,
        gluten: gf,
        veg: veg,
        vegan: vgn,
        ingred_list: ingred,
        max_time: time,
      })
    })
    .catch(function (err) {
      // display error message in case an error
      console.log('error', err);
      res.render('../Search/displaySearch',{
        my_title: "Searched Recipes",
        local_css: "../Search/displaySearch.css",
        advanced: '',
        search: '',
        recipe: '',
        recipe_keywords: '',
        rating:'',
        gluten: '',
        veg: '',
        vegan: '',
        ingred_list: '',
        max_time: '',
      })
    });
});





app.listen(3000);
console.log('3000 is the magic port');
