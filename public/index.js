
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

// start working with recipes to get database started
var recipe = {
  recipe_name: "Peanut Butter Cookies",
  descrip: "Yummy peanut butter cookies!",
  directions: ["Cream butter, peanut butter, and sugars together in a bowl; beat in eggs.", "In a separate bowl, sift flour, baking powder, baking soda, and salt; stir into butter mixture. Put dough in refrigerator for 1 hour.", "Roll dough into 1 inch balls and put on baking sheets. Flatten each ball with a fork, making a crisscross pattern. Bake in a preheated 375 degrees F oven for about 10 minutes or until cookies begin to brown."],
  rating: 5,
  gluten_free: 0,
  vegetarian: 0,
  vegan: 0,
  ingredients: ["1 cup unsalted butter","1 cup crunchy peanut butter", "1 cup white sugar", "1 cup packed brown sugar", "2 eggs", "2 ½ cups all-purpose flour", "1 teaspoon baking powder", "½ teaspoon salt", "½ teaspoons baking soda"],
  make_time: 85,
  servings: 24
}
ref.push(recipe);

recipe = {
  recipe_name: "Peanut Butter Cookies",
  descrip: "Yummy peanut butter cookies!",
  directions: ["Season chicken with salt, pepper and garlic powder; set aside.", "Heat a pan or skillet over medium high heat; sear chicken thigh fillets or breast fillets on both sides until golden and cooked through.", "FOR BONE IN THIGHS:", "Reduce heat after searing on both sides, cover skillet with a lid and continue cooking until the chicken is cooked through, while turning every 5 minutes until done. Alternatively, see notes for oven method.","Drain most of the excess oil from the pan,leaving about 2 tablespoons of pan juiced for added flavour.", "FOR SAUCE:", "When chicken is done and cooked through, arrange chicken skin-side up in the pan (if cooking with skin); add the garlic between the chicken and fry until fragrant (about 30 seconds). Add the honey, water, vinegar and soy sauce. Increase heat to medium-high and continue to cook until the sauce reduces down and thicken slightly (about 3-4 minutes).", "Garnish with parsley and serve over vegetables, rice, pasta or with a salad."],
  rating: 4,
  gluten_free: 0,
  vegetarian: 0,
  vegan: 0,
  ingredients: ["6 chicken thighs, bone in or out, with or without skin", "Salt and pepper, to season", "2 teaspoons garlic powder, to season", "6 cloves garlic, crushed", "1/3 cup honey", "1/4 cup water (or chicken broth)", "2 tablespoons rice wine vinegar (or apple cider vinegar, or any white vinegar)", "1 tablespoon soy sauce"],
  make_time: 30,
  servings: 6
}
ref.push(recipe);
