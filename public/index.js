
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
//   recipe_name: "Vegan Brownies (Insanely Fudgy!)",
//   descrip: "This vegan brownie recipe is rich and insanely fudgy! A wholesome treat that tastes decadent, it’s also gluten-free and mostly whole food plant-based.",
//   directions: ["Preheat the oven to 350ºF. Line an 8-inch square pan with a piece of parchment paper, leaving an overhang on two opposite sides. Set aside.", "In a medium bowl, whisk together the almond butter, maple syrup, applesauce, and vanilla.", "To the almond butter mixture, add the cocoa powder, coconut flour, baking soda, and salt. Whisk to combine, ensuring that there are no dry lumps of cocoa in the batter.", "In a double boiler, melt half of the chocolate chunks. Vigorously stir the melted chocolate into the brownie batter until fully incorporated.", "Scrape the brownie batter into the prepared baking pan. Smooth the batter out evenly with a spatula, pushing it into the edges and corners of the pan. (We used a 9-inch pan, so we did not smooth entirely into one side to keep the brownies on the thicker side.)", "Scatter the reserved chocolate chunks and rough-chopped nuts over the top. Slide the pan into the oven, and bake the brownies until the top is slightly firm and appears dry and lightly cracked, about 27 to 30 minutes.", "Cool the brownies completely in the pan set on a wire rack. Then, cover the brownies and place them in the refrigerator for at least 1 hour. This step is crucial. The brownies will not cut neatly unless they get adequate cooling time. (We enjoyed the brownies even more a day later after refrigerating over night.)", "Right before slicing the brownies, run a chef’s knife under hot water and dry it off, then slice into squares and serve."],
//   rating: 3,
//   gluten_free: 0,
//   vegetarian: 0,
//   vegan: 1,
//   ingredients: ["3/4 cup almond butter", "1/4 cup plus 2 tablespoons pure maple syrup", "3/4 cup unsweetened applesauce", "1 1/2 teaspoons pure vanilla extract", "1/2 cup unsweetened cocoa powder", "3 tablespoons coconut flour", "3/4 teaspoon baking soda", "1/2 teaspoon kosher salt", "1/2 cup chopped chocolate from a 70% dark dairy-free chocolate bar, divided", "3 tablespoons whole almonds, roughly chopped"],
//   make_time: 105,
//   servings: 16
// }
// ref.push(recipe);
//
// recipe = {
//   recipe_name: "Chocolate Cake with Ganache Glaze",
//   descrip: "This decadent chocolate cake recipe features a chocolate buttercream filling and a shiny dark chocolate ganache. It’s chocolate dessert perfection!",
//   directions: ["For the cake:", "3 cups (375g) unbleached all-purpose flour", "2⁄3 cup (60g) unsweetened cocoa powder", "2 teaspoons baking soda", "3⁄4 teaspoon salt", "2 cups (475ml) unsweetened nondairy milk, homemade or store-bought", "2 tablespoons apple cider vinegar", "1 3⁄4 cups (350g) sugar", "2⁄3 cup (160ml) melted coconut oil", "2 teaspoons vanilla extract" ,"For the filling" ,"1 cup (245g) pumpkin puree", "1⁄4 cup (20g) unsweetened cocoa powder", "1⁄4 cup (60ml) maple syrup", "3 tablespoons almond butter or cashew butter", "For the ganache:", "6 ounces (170g) bittersweet chocolate, finely chopped", "1⁄2 cup (120ml) coconut milk", "2 tablespoons maple syrup"],
//   rating: 4,
//   gluten_free: 0,
//   vegetarian: 0,
//   vegan: 0,
//   ingredients: ["Preheat the oven to 350°F (175°C). Coat two 8- or 9-inch (20 or 23cm) round springform pans with melted coconut oil.", "To make the cake, put the flour, cocoa, baking soda, and salt in a large bowl and whisk to combine.", "In a medium bowl, vigorously whisk together the nondairy milk and vinegar until frothy. Whisk in the sugar, oil, and vanilla. Add about one-third of the mixture to the flour mixture and stir with a spatula or whisk, or use an electric mixer on the lowest setting. Repeat, adding the remaining liquid in two more additions, mixing just until incorporated after the final addition. Pour the batter into the prepared pans.", "Bake for about 25 minutes, until a toothpick inserted into the center comes out clean. Remove from the oven but leave the cakes in their pans and let cool completely.", "To make the filling, process all the ingredients in a food processor.", "To make the ganache, put the chocolate in a medium heatproof bowl. Combine the coconut milk and maple syrup in a small saucepan over medium-low heat. Cook, stirring occasionally, until just simmering. Pour over the chocolate and stir until melted. Let cool to room temperature.", "To assemble the cake, remove the layers from their pans. Place one, top side up, on a serving platter and gently shave off the rounded top with a sharp knife. Spread all of the filling over the top. Place the other cake layer atop the filling. Pour the ganache evenly over the top and let it drizzle down the sides. Refrigerate for at least 1 hour before serving.", "Leftovers will keep in a covered container in the fridge for up to 4 days."],
//   make_time: 70,
//   servings: 14
// }
// ref.push(recipe);
//
// recipe = {
//   recipe_name: "Chewy Cookie Cake Recipe",
//   descrip: "This chewy chocolate chip cookie cake recipe is easy to make and a serious crowd pleaser: the perfect treat for book clubs and pitch ins!",
//   directions: ["Preheat the oven to 325 degrees Farenheit. Grease a 9-inch pie pan.", "Combine the flour, baking soda, and kosher salt in a bowl. Set aside.", "In the bowl of a stand mixer (or with an electric mixer), cream together the butter, granulated sugar, and brown sugar with paddle attachment for 2 to 3 minutes until fluffy. Add the vanilla, egg, milk, and orange zest and beat for 1 minute.", "With the mixer on low, add the flour mixture until just combined. Remove the bowl from the mixer and fold in 1/2 cup of the chocolate chips. Use a spatula to press down the dough into the pie pan. Top with the additional 1/4 cup chocolate chips.", "Bake 25 to 27 minutes, until the edges are starting to brown and the center has fully firmed up. Cool several hours at room temperature before serving (the cookie cake is much too gooey to cut when it’s first baked, so the longer you can cool it the better!)."],
//   rating: 4,
//   gluten_free: 0,
//   vegetarian: 0,
//   vegan: 0,
//   ingredients: ["1 1/2 cups all purpose flour", "1/2 teaspoon baking soda", "1/2 teaspoon kosher salt", "8 tablespoons unsalted butter, room temperature", "1/4 cup granulated sugar", "1/2 cup brown sugar, packed", "1 tablespoon vanilla extract", "1 tablespoon milk", "1 large egg, room temperature", "1/2 teaspoon orange zest", "3/4 cup best quality dark chocolate chips"],
//   make_time: 40,
//   servings: 12
// }
// ref.push(recipe);
