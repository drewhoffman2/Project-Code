
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
firebase.analytics();
console.log(firebase);
const database = firebase.database();

var ref = database.ref('recipes');

//start working with recipes to get database started

// var recipe = {
//   recipe_name: "Vegan Brownies (Insanely Fudgy!)",
//   descrip: "This vegan brownie recipe is rich and insanely fudgy! A wholesome treat that tastes decadent, it’s also gluten-free and mostly whole food plant-based.",
//   directions: ["Preheat the oven to 350ºF. Line an 8-inch square pan with a piece of parchment paper, leaving an overhang on two opposite sides. Set aside.", "In a medium bowl, whisk together the almond butter, maple syrup, applesauce, and vanilla.", "To the almond butter mixture, add the cocoa powder, coconut flour, baking soda, and salt. Whisk to combine, ensuring that there are no dry lumps of cocoa in the batter.", "In a double boiler, melt half of the chocolate chunks. Vigorously stir the melted chocolate into the brownie batter until fully incorporated.", "Scrape the brownie batter into the prepared baking pan. Smooth the batter out evenly with a spatula, pushing it into the edges and corners of the pan. (We used a 9-inch pan, so we did not smooth entirely into one side to keep the brownies on the thicker side.)", "Scatter the reserved chocolate chunks and rough-chopped nuts over the top. Slide the pan into the oven, and bake the brownies until the top is slightly firm and appears dry and lightly cracked, about 27 to 30 minutes.", "Cool the brownies completely in the pan set on a wire rack. Then, cover the brownies and place them in the refrigerator for at least 1 hour. This step is crucial. The brownies will not cut neatly unless they get adequate cooling time. (We enjoyed the brownies even more a day later after refrigerating over night.)", "Right before slicing the brownies, run a chef’s knife under hot water and dry it off, then slice into squares and serve."],
//   rating: 3,
//   gluten_free: 0,
//   vegetarian: 0,
//   vegan: 1,
//   ingredients: ["3/4 cup almond butter", "1/4 cup plus 2 tablespoons pure maple syrup", "3/4 cup unsweetened applesauce", "1 1/2 teaspoons pure vanilla extract", "1/2 cup unsweetened cocoa powder", "3 tablespoons coconut flour", "3/4 teaspoon baking soda", "1/2 teaspoon kosher salt", "1/2 cup chopped chocolate from a 70% dark dairy-free chocolate bar, divided", "3 tablespoons whole almonds, roughly chopped"],
//   make_time: 105,
//   servings: 16,
//   private: 0
// }
// ref.push(recipe);
//
