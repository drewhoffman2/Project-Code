# Finish My Dish
Project Type: Webpage
Team: Drew Hoffman, Alex Calderon, Jared Brady, Vanessa Reyes, Katelyn Singh 

Description:
  Finish My Dish is a  website designed to help people use ingredients they have on hand in order to prevent food waste. It is a way to share recipes with others. Each user makes their own account with which they can post their own recipes. Using this format, the ingredients needed to make any specific recipe are stored. 

Functionality:
  A user must create an account to use the site. Each user has the ability to search for recipes and save them to their profile, post their own recipes, and have friends. When searching for a recipe the user can do a normal search, such as “pizza”, or an advanced search. The advanced search option allows the user to put in a keyword, rating, if it needs to be gluten/vegan/vegetarian, the ingredients they have, and the maximum make time. This allows the user to narrow down their search to recipes that apply to them. From the user’s friends you can view their friends and their recipes. In addition to logging in, the user can log out so that others cannot access their information while not using the app. All information is stored in a database and can be accessed at a later time. Finish My Dish aids in everyday life and meal planning. 
  
Deployment:
  Finish My Dish is hosted on Firebase. As well, Firebase also holds the real-time database that holds user and recipe data used for our application. 

Repo Organization:
  public - holds all html, css, and javascript that is used for hosting on Firebase
    FriendsNetwork - holds code for Friends Page
    Login_Page - holds code for login page
    Search - holds code for Search page
    images - holds all images used across the website
    newRec - holds code for New Recipe page
    404.html - html page to display when there is a 404 error
    index (.html & .css & .js) - code for home page that is displayed when user accesses url hosted by Firebase
  database -  holds old code for PostgreSQL database that was used as foundation for Firebase database
  Other files not in folder - code that declares Firebase rules, necessary code for deploying and hosting Firebase
    
