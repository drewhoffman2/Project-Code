
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
var database = firebase.database();

var ref = database.ref('recipes');

//start working with recipes to get database started

// var recipe = {
//   recipe_name: "Easy Sugar Cookies",
//   descrip: "Quick and easy sugar cookies! They are really good, plain or with candies in them. My friend uses chocolate mints on top, and they're great!",
//   directions: ["Step 1", "Preheat oven to 375 degrees F (190 degrees C). In a small bowl, stir together flour, baking soda, and baking powder. Set aside.", "Step 2", "In a large bowl, cream together the butter and sugar until smooth. Beat in egg and vanilla. Gradually blend in the dry ingredients. Roll rounded teaspoonfuls of dough into balls, and place onto ungreased cookie sheets.", "Step 3", "Bake 8 to 10 minutes in the preheated oven, or until golden. Let stand on cookie sheet two minutes before removing to cool on wire racks."],
//   rating: 4,
//   gluten_free: 0,
//   vegetarian: 0,
//   vegan: 0,
//   ingredients: ["2 ¾ cups all-purpose flour", "1 teaspoon baking soda", "½ teaspoon baking powder", "1 cup butter, softened", "1 ½ cups white sugar", "1 egg", "1 teaspoon vanilla extract"],
//   make_time: 25,
//   servings: 48
// }
// ref.push(recipe);
//
// recipe = {
//   recipe_name: "Bacon & Spinach Stuffed Chicken",
//   descrip: "Hasselback your chicken by cutting shallow slits into your chicken breasts (don't cut all the way through!) and stuff each slit with bacon and a creamy spinach and artichoke filling. It will make your weeknight chicken dinner sing!",
//   directions: ["Preheat oven to 400°. Line a large baking sheet with foil. Make slits widthwise in chicken, being careful not to cut all the way through chicken. Season with salt and pepper. Place on prepared baking sheet.", "In a medium bowl, combine cream cheese, spinach, artichokes, and ½ cup of mozzarella. Season with salt, pepper, and a pinch of red pepper flakes. Fill every other slit with cream cheese mixture and fill remaining slits with a piece of bacon. Sprinkle remaining ½ cup mozzarella on top and drizzle with oil.", "Bake until chicken is cooked through and bacon is crispy, 35 minutes."],
//   rating: 5,
//   gluten_free: 0,
//   vegetarian: 0,
//   vegan: 0,
//   ingredients: ["4 boneless skinless chicken breasts", "Kosher salt", "Freshly ground black pepper", "4 oz. cream cheese, softened", "1/2 c. frozen spinach, defrosted and drained", "1/3 c. chopped artichoke hearts", "1 c. shredded mozzarella, divided", "Pinch crushed red pepper flakes", "4 strips bacon, cut into 4 strips", "2 tbsp. extra-virgin olive oil "],
//   make_time: 50,
//   servings: 4
// }
// ref.push(recipe);
//
// recipe = {
//   recipe_name: "Vegan Chocolate Chip Cookies",
//   descrip: "These vegan chocolate chip cookies are a one-bowl recipe that makes for a chewy gluten free cookie topped with flaky sea salt. In a word: Incredible!",
//   directions: ["Preheat the oven to 350F and line a baking sheet with parchment paper.", "In the bottom of a large bowl, whisk together the ground flaxseed and water and let thicken for 5 minutes.", "To the same bowl, add the coconut oil, sugar, almond butter, and vanilla. Whisk until well combined. Add the almond flour and sprinkle the baking soda and salt evenly over the mixture. Use a spatula or wooden spoon to stir until well combined, adding 1 to 2 tablespoons water if the mixture is too dry. Fold in the chocolate chips.", "Use a 2-tablespoon cookie scoop to scoop the dough onto the baking sheet. Press each ball down slightly and sprinkle with flaky sea salt, if using. Bake for 10 to 13 minutes or until the edges are just starting the brown.", "Cool on the pan for 5 minutes and then transfer to a wire rack to finish cooling.", "When the cookies are completely cool, they can be stored in an airtight container or frozen. (To reheat frozen cookies, bake in a 350F oven for 5 minutes or until warmed through.)"],
//   rating: 4,
//   gluten_free: 0,
//   vegetarian: 1,
//   vegan: 1,
//   ingredients: ["1 tablespoon ground flaxseed", "3 tablespoons water, plus more if necessary", "2 tablespoons coconut oil, softened but not melted", "1/2 cup brown sugar (or coconut sugar)", "1/4 cup almond butter", "1 teaspoon vanilla extract", "2 cups almond flour", "1/2 teaspoon baking soda", "1/4 teaspoon sea salt", "1/2 cup vegan semisweet chocolate chips", "Flaky sea salt, for sprinkling"],
//   make_time: 25,
//   servings: 16
// }
// ref.push(recipe);
//
// recipe = {
//   recipe_name: "Oatmeal Chocolate Chip Cookies",
//   descrip: "Here’s the very best oatmeal chocolate chip cookies recipe you’ll find! Chewy and packed with chocolate, a hint of molasses makes them utterly irresistible.",
//   directions: ["In a medium bowl, whisk all-purpose flour, baking soda, baking powder, cinnamon, and kosher salt.", "In the bowl of a stand mixer, mix the butter, brown sugar, and granulated sugar on medium high for 1 to 2 minutes, scraping the bowl as necessary, until well combined.", "Add in eggs, vanilla, and molasses and combine on medium for about 30 seconds until fully combined. Add flour mixture and mix on low until combined. Add oats and 3/4 cup chocolate chips and mix on low for a few seconds until combined. Take the bowl off of the mixer and use a spatula to stir just until the oats and chocolate chips are evenly distributed.", "Transfer to a covered container. Chill 12 minutes.", "Preheat the oven to 350 degrees with two racks spaced out.", "Line two baking sheets with parchment paper. Remove the bowl with the dough from the refrigerator. Scoop cookies into 2-tablespoon drops and roll quickly into balls (try to make the scoops as even as possible to ensure uniform cookies). Place balls on baking sheets with several inches between each cookie. Flatten the tops of each ball lightly with your hand and lightly press in the additional 1/4 cup chocolate chips to the tops where needed. Sprinkle with sea salt.", "Bake for 5 minutes, then remove and rotate sheets and put them back in on the opposite racks. Bake about 5 more minutes until they just set (we like pulling them out just slightly underbaked, which makes them chewy when cooled). Cool several minutes and then transfer to wire rack to fully cool. Store at room temperature in a cookie tin for up to 3 days, or freeze for up to 3 months."],
//   rating: 5,
//   gluten_free: 0,
//   vegetarian: 0,
//   vegan: 0,
//   ingredients: ["1 1/4 cup all-purpose flour", "1/2 teaspoon baking soda", "1/2 teaspoon baking powder", "1 teaspoon ground cinnamon", "1/2 teaspoon kosher salt", "10 tablespoons salted butter, at room temperature*", "1/3 cup brown sugar, packed", "1/3 cup granulated sugar", "2 eggs", "1 tablespoon vanilla extract", "2 tablespoons molasses", "2 cups rolled oats", "1 cup dark chocolate chips", "Flaked sea salt, for topping"],
//   make_time: 40,
//   servings: 24
// }
// ref.push(recipe);
//
//
// recipe = {
//   recipe_name: "Coconut Shrimp Curry",
//   descrip: "This easy shrimp curry tastes better than a restaurant in under 30 minutes! It’s a Thai red curry flavored with coconut milk and curry paste.",
//   directions: ["Start the jasmine rice (or basmati rice).", "Mince the onion. Mince the garlic. Cut the pepper into thin strips.", "In a large skillet, pot or Dutch oven, heat the oil over medium heat. Add the onion and saute for 5 minutes, until translucent. Add the garlic & red pepper and saute for 1 minute. Stir in the curry paste and saute for 1 minute.", "Add coconut milk, fish sauce, turmeric, lime zest, water, and kosher salt and bring to a simmer. Once simmering, add the shrimp and cook about 4 to 5 minutes until the shrimp is tender and opaque, depending on the size of the shrimp. Stir in 5 large leaves basil.", "To serve, spoon the shrimp and sauce over rice. Garnish with additional chopped basil and lime wedges."],
//   rating: 4,
//   gluten_free: 1,
//   vegetarian: 0,
//   vegan: 0,
//   ingredients: ["Jasmine rice (or basmati rice), for serving", "1 yellow onion", "2 garlic cloves", "1 red bell pepper", "2 tablespoons olive oil or coconut oil", "3 tablespoons Thai red curry paste", "15-ounce can full fat coconut milk", "1 teaspoon fish sauce", "1/4 teaspoon ground turmeric", "Zest of 1 lime (plus lime wedges to garnish)", "1/2 cup water", "1 teaspoon kosher salt", "1 pound large shrimp, shell on or tail on (wild caught if possible)", "5 leaves fresh basil or Thai basil, plus more for garnish"],
//   make_time: 25,
//   servings: 4
// }
// ref.push(recipe);
