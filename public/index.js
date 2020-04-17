
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
//   recipe_name: "Homemade Margherita Pizza",
//   descrip: "The most classic homemade pizza, this margherita pizza recipe features a tangy pizza sauce, gooey mozzarella, and a perfect chewy pizza crust.",
//   directions: ["Make the pizza dough: Follow the Best Pizza Dough recipe to prepare the dough. (This takes about 15 minutes to make and 45 minutes to rest.)", "Place a pizza stone in the oven and preheat to 500°F. OR preheat your pizza oven (here’s the pizza oven we use).", "Make the pizza sauce: Cut the garlic into a few rough pieces. Place the garlic, tomatoes, olive oil, oregano and kosher salt in a blender. Blend until fully combined. (You’ll use about 1/3 cup for the pizza; reserve the remaining sauce and refrigerate for up to 1 week.)", "Prepare the cheese: If using fresh mozzarella cheese, slice it into 1/4 inch thick pieces (see the photos of the pre-baked pizza above). If it’s incredibly watery fresh mozzarella (all brands vary), you may want to let it sit on a paper towel to remove moisture for about 15 minutes then dab the mozzarella with the paper towel to remove any additional moisture.", "Bake the pizza: When the oven is ready, dust a pizza peel with cornmeal or semolina flour. (If you don’t have a pizza peel, you can use a rimless baking sheet or the back of a rimmed baking sheet. But a pizza peel is well worth the investment!) Stretch the dough into a circle; see How to Stretch Pizza Dough for instructions. Then gently place the dough onto the pizza peel.", "Spread a thin layer of the pizza sauce over the dough, using about 1/4 to 1/3 cup. Add the mozzarella cheese. Top with a thin layer of fresh grated Parmesan cheese and a few pinches of kosher salt.", "Use the pizza peel to carefully transfer the pizza onto the preheated pizza stone. Bake the pizza until the cheese and crust are nicely browned, about 5 to 7 minutes in the oven (or 1 minute in a pizza oven).", "Allow the pizza to cool for a minute or two before adding the basil on top (whole leaves, lightly torn, or thinly sliced). Slice into pieces and serve immediately."],
//   rating: 5,
//   gluten_free: 0,
//   vegetarian: 0,
//   vegan: 0,
//   ingredients: ["For the pizza dough", "1 ball Best Pizza Dough (or Food Processor Dough or Thin Crust Dough)", "Semolina flour or cornmeal, for dusting the pizza peel", "For the pizza sauce", "1 small garlic clove (1/2 medium)", "15 ounces crushed fire roasted tomatoes or high quality organic canned tomatoes", "1 tablespoon extra virgin olive oil", "1/2 teaspoon dried oregano", "Scant 1/2 teaspoon kosher salt", "For the toppings", "1/4 to 1/3 cup pizza sauce", "3/4 cup shredded cheese or 2 to 3 ounces fresh mozzarella cheese", "Parmesan cheese", "A few fresh basil leaves"],
//   make_time: 67,
//   servings: 4,
//   private: 0,
//   image: "Margherita-Pizza.jpg"
// }
// ref.push(recipe);
//
// recipe = {
//   recipe_name: "Best Ever Taco Pizza",
//   descrip: "This taco pizza is topped with refried beans, cheese, romaine, crumbled tortilla chips, and of course — ranch. In a word: WOW.",
//   directions: ["Make the pizza dough: Follow the Best Pizza Dough recipe to prepare the dough. (This takes about 15 minutes to make and 45 minutes to rest.)", "Place a pizza stone in the oven and preheat to 500°F. OR preheat your pizza oven (here’s the pizza oven we use).", "Prepare the toppings: Taste the refried beans: if needed, mix in a pinch or two of cumin and a pinch of kosher salt. (Ours were already well seasoned.) Thinly slice the green onion. Chop the romaine lettuce. Chop the tomatoes.", "Bake the pizza: When the oven is ready, dust a pizza peel with cornmeal or semolina flour. (If you don’t have a pizza peel, you can use a rimless baking sheet or the back of a rimmed baking sheet. But a pizza peel is well worth the investment!) Stretch the dough into a circle; see How to Stretch Pizza Dough for instructions. Then gently place the dough onto the pizza peel.", "Spread the refried beans over the dough using a spatula to create a thin layer. Add the cheddar cheese, then top with black olives and half of the green onions. Top with a pinch of kosher salt.", "Use the pizza peel to carefully transfer the pizza onto the preheated pizza stone. Bake the pizza until the cheese and crust are nicely browned, about 5 to 7 minutes in the oven (or 1 minute in a pizza oven).", "Top with the reserved green onions, chopped tomatoes and romaine, and crumbled tortilla chips. Drizzle with ranch dressing and if desired, sprinkle with hot sauce. Slice into pieces and serve immediately."],
//   rating: 4,
//   gluten_free: 0,
//   vegetarian: 0,
//   vegan: 0,
//   ingredients: ["1 ball Best Pizza Dough (or Food Processor Dough or Thin Crust Dough)", "1/3 cup refried pinto beans, canned (or Homemade Refried Beans)", "3/4 cup shredded cheddar cheese", "2 green onions", "1 handful canned sliced black olives", "1/2 romaine heart", "1/2 tomato or 3 cherry tomatoes", "2 tablespoons Homemade Ranch Dressing", "3 organic corn tortilla chips", "Hot sauce, for the garnish", "Kosher salt", "Semolina flour or cornmeal, for dusting the pizza peel"],
//   make_time: 67,
//   servings: 8,
//   private: 0,
//   image: "Taco-Pizza.jpg"
// }
// ref.push(recipe);
//
// recipe = {
//   recipe_name: "Mint Chocolate Chip Vegan Ice Cream",
//   descrip: "This mint chocolate chip ice cream is lusciously creamy and refreshingly minty: and it’s vegan too! Here’s how to make delicious vegan ice cream at home.",
//   directions: ["Freeze the ice cream maker base overnight.", "In a small bowl, mix 1/2 cup coconut milk with 2 tablespoons cornstarch and set aside.", "Add the remainder of the coconut milk to a medium pan. Warm the coconut milk over medium low heat for a minute or two, whisking to incorporate the solids. Then add the agave syrup. Whisk in the cornstarch mixture. Heat until it mixture is thickened, 6 to 8 minutes (do not boil). Remove from heat and stir in the vanilla and peppermint extract.", "Strain through a fine-mesh sieve into a 1-gallon Ziplock bag. If churning immediately, place the bag in an ice bath for 30 minutes until cool; if churning the next day, refrigerate 4 hours or overnight (either way, the mixture should be as cold as possible before churning).", "Churn the ice cream in the ice cream maker until it thickens to the consistency of soft serve. Meanwhile, chop the mint chocolate. Add to the ice cream maker in the last 2 minutes or so.", "Eat immediately for a soft serve consistency, or for a hard ice cream texture, freeze using the following instructions: press a piece of parchment or wax paper into a sealable container, then scrape the ice cream into the container using a spatula, making sure to scrape in the bits frozen to the edges of the ice cream maker base. Freeze for 4 hours for a hard ice cream texture."],
//   rating: 5,
//   gluten_free: 0,
//   vegetarian: 0,
//   vegan: 1,
//   ingredients: ["2 15-ounce cans full-fat coconut milk", "2 tablespoons cornstarch", "1/2 cup agave syrup", "1 teaspoon vanilla", "2 teaspoons peppermint extract", "Pinch kosher salt", "2 ounces vegan dark chocolate"],
//   make_time: 70,
//   servings: 8,
//   private: 0,
//   image: "vegan-mint-ice-cream.jpg"
// }
// ref.push(recipe);
//
// recipe = {
//   recipe_name: "Blueberry Banana Ice Cream",
//   descrip: "This vegan blueberry banana ice cream is bananas and berries blended into a healthy spin on ice cream! Sometimes called “banana nice cream,” it’s oh so good.",
//   directions: ["Place banana pieces on a tray in a single layer and freeze overnight.", "Just before serving, place the frozen banana slices, frozen berries, and coconut milk or yogurt into a food processor and pulse until starting to break up. Scrape down the sides of the bowl and then blend on high until a smooth, creamy ice cream forms. You can add a touch more milk/yogurt to help it process better, but remember that the more liquid you add, the softer the end result will be.", "If desired, add a tablespoon of maple syrup and a squeeze of lemon for flavor brightener. Scoop into bowls and serve immediately. The ice cream doesn’t refreeze well, but it’s fast and easy to put together if you have the fruit pre-frozen, so making it fresh shouldn’t be a problem."],
//   rating: 4,
//   gluten_free: 0,
//   vegetarian: 0,
//   vegan: 1,
//   ingredients: ["2 ripe bananas, peeled and cut into 1-inch rounds", "2 cups frozen blueberries", "1/4 cup coconut milk or natural plain yogurt, plus extra as needed", "Maple syrup (optional)", "Lemon juice (optional)"],
//   make_time: 15,
//   servings: 4,
//   private: 0,
//   image: "Banana-Berry-Vegan-Ice-Cream.jpg"
// }
// ref.push(recipe);
