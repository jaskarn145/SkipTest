
# Skip The Dishes Coding Test #

### Coding test ###

The task is to create an application that accepts an outcode as a parameter. The application should then display the following information about each restaurant that delivers to that outcode by querying our API:

* Name
* Rating
* Typesoffoodfortherestaurant.

### User Stories ### 
* As a user running the application
* I can view a list of restaurants in a user submitted outcode (e.g. SE19)
* So that I know which restaurants are currently available.
* As a user running the application
* I can view the restaurant logo alongside restaurant information
* So that I know exactly which restaurants are currently available.
* As a user running the application
* I can tap on a restaurant
* So that I can see additional information about it

Acceptance criteria:
* For the known outcode ec4m, results are returned;

* The name, cuisine types and rating of the restaurant are displayed;
* For the restaurant additional information, address, opening and delivery times and deals are
displayed.


# OverView
Initially the User will land on dashboard screen where he can search postal code for checking the restaurants .
In search bar there are three posibilities
1) The postal code is wrong and then he will see the message "No Restaurant found in your area"
2) Somehow the user dissconnected to server then his request will aborted and he will see message ">Error While Loading Data"
3) After entering the correct postal code he will get the results 

Moving forward, user can see a list of Restaurats in his area . I have used flatlist for displaying the results,because The FlatList shows only those renders elements which are currently displaying on the screen, not all the elements of the list at once.Because of that user will get better UI experience.

I the list I have displayed following things
1) image of Restaurant
2) Name of restaurant
3) Rating
4) Cuisine Type
5) is the Restaurant New? with new tag with yellow color , so that user can check which restaurant is new

That is items are touchable
after selecting the specific restaurant user can see the details of restaurant 
1) image of Restaurant
2) Name of restaurant
3) is the Restaurant New? with new tag with yellow color , so that user can check which restaurant is new
4) Rating
5) Is Restaurant open or close
6) Cuisine Type
7) Opening time (using moment library and API)
8) Delivery Time (using moment library and API)
9) delivery estimation time (eta)
10) Is there any deal available on the restaurant other-wise it will show "No deal available in this Restaurant"


I have included 3 tests in this react native project

Two of those are snapshot testing of Dashboard screen and App .
One test is written for element check of searchbar ,because that the main element of app.



## Scripts

### To install the packages.
 `yarn install`  

### To start the bundler.
  `yarn start` 

### To run the application in iOS.
  `yarn ios`

### To run the application in android.
  `yarn android`

### To test the application code.
  `yarn test`

