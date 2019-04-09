NEEDS WORK:

    1) -COMPLETE- Product Index CSS: Hovering over a parent li gives the child image a drop shadow

    2) -COMPLETE- Long email addresses push up against DD border

    3) -COMPLETE- Product Index Divs (.item-box) need to actually link to product show page

    4) -COMPLETE- Navigating to ProductShow component from my ProductIndex breaks

    5) -COMPLETE- After changing the shape of my state, from time to time, navigating to the / will throw errors
        - when at a product show page and navigating back to root
        - may have fixed it with a Protected Route
        - seems okay but needs more testing
        - errors are back after working on the product show page
      -ANSWER- What I declared the key in jbuilder was different among index and show

    6) -COMPLETE- ProductShow: next and previous buttons over image in certain conditions

    6) -COMPLETE- ProductShow: Can't get li opacity to stay at 1 on selected

    7) -COMPLETE (HACKY)- Modal isn't perfectly centered, it's slightly to the right
        - I am using multiple divs, one at top: 50%, left: 50%; and the inner with an odd translation of ~(-11%, -7%);
        - .or class is translated something like %1000;

    8) -COMPLETE- Need to properly create horizontal lines that span 100vw
        - IDEA: create thin block element + border that has an id selector and goes 100%vw

    9) Error handing on the session form still doesn't activate a red focus/active on the trouble element

    10) -COMPLETE- Coffee dictionary has a duplicate picture in the seed file
        - changed seed file, will need to reseed to make change

    12) ? DEVELOP FULLSIZE PICTURE MODAL ?

    13) SPEND MORE TIME IN SEED DATA 
        - REMOVE UNPROFESSIONAL/BAD PICTURES (or at least make them the second picture)
        - ADD MORE PICTURES
        - CHANGE DADS HAMMER, FAVORITE WATERWAYS DEFAULT

    14) PUT APP ON CUSTOM DOMAIN

    15) ProductShow component will need revisiting after Review/Shopping Cart components are created
        - Add quantity to Products via migration
        - Add quantity to Docs
        - All of ProductShow could use some refactoring into smaller components, its starting to get unwieldly.

    16) Vertical Overflow of Description

    17) ProductShow CompDidUpdate throws an error when trying to setState of SelectedPicture to 0, even on a promise of the new data coming back
        - error claims to try render an object
    
    18) User photos

    19) -COMPLETE- !important - rendering preview of multiple files
        - suspect I'm having an issue in my container but I'm not sure how to pass that information forward.
        -ANSWER- javascript.push returns the length of the array. Memoize the result and setState to the result.

    20) -HACKY COMPLETE- Updating Product Listings throws a 500 server error
        - The problem came from data type issues:
            - On #create, the files appended to the form were file datatypes
            - On #update, the fetchProduct request returned stringified urls which were throwing errors.
        - ANSWER - Duplicate product params and filter out the strings from product_pictures 

    21) -COMPLETE- Managers Products is not properly filtering for merchant id === current user id
        - did not have access to this.props.currentUser.id inside my function? 
        - after I filtered, I did not refactor later code to use the filtered version

    22) -COMPLETE- Force price have 2 decimal places
        -USED .toFixed(2); right in the display component

    23) Need to implement the ability to remove a picture attachment from product in my update form
        - idea: boolean in state that defaults false, and returns true if a photo has been deleted
        - some logic to send two HTML requests in the event that a photo has been deleted
            - PATCH: used to add any photos
            - PUT: used to set exactly how we want (i.e. exclude the deleted product picture)

    24) Need to validate the presence of atleast one picture and render errors

    25) Add lorem ipsum or even better, static information, to product show page

    26) Need to handle AJAX request error in form in the event that theres no photo

    27) PRODUCTSHOW - picture ul is off kilter to the right after heroku push

    28) Add a Are you sure? (this action is final) prompt to end listings

    29) subSplash image has Etsy in it still

    30) Product Index - one tall image throws the row size for every image
        - Maybe add div around image itself, make image height auto and the surrounding div 11vw with overflow hidden
        - Not sure that works well because it makes the wider images go out of the picture
        - May need logic to decide if image is tall or wide or let users set thumbnail images on listing

    31) App looks slightly shifted to the right

    32) Add first name/ last name to the User model and profile dropdown

    33) Remove Lorem Ipsum on the Product Show Overview Page

    34) Will need to Refactor the Shop Manager Header to render based on the selection in the left nav;

    35) Anticipating Very Long Product Titles will overrun the Shop Manager List Items

    36) Back end for cart is extensive, may need to refactor and will certainly need to include error handling. Since the cart show view is so extensive, I don't know that I need all the methods in the CartItemController. 
        - WILL NEED: CREATE (adds an item to a cart), UPDATE (to change item quantity), DELETE (removes item from a cart) but unsure about show and index since an ajax request to cart will fetch all the data needed to display the cart




 

NOTES: 

    1) I seem to hit a hiccup everytime I extract new information out of the backend. A helpful hint to myself:
        - It all goes back to the Model; Models have associations you can use to help extract extraneous data.
        - Data is fetched from the database in the controller and passed to a backend view, an api route that uses json.jbuilder
        - The api view needs to extract only the data we need from the full object (Protect your private data!)
        - Normal actions must be modified if we'll be receiving pieces of state that live in utilize different reducers
        - The reducers must be modified to listen (case statements) and extract data from that action
        - Verify state looks like you expect it too on several actions, if not every action related to those reducers


    2) !important
        - spend more time getting great seed pictures! You've done all the work of making the css look great so you really want to show it off with great images and content. MAKE SURE THE DEFAULT PICTURE IS THE BEST PICTURE IN THE GROUP AND ADD MULTIPLE PICTURES TO ITEMS SO THAT THE FUNCTIONALITY OF THE PICTURE CAROUSEL WORKS.


    3) As the database increases in size, it will probably be necessary to implement indexes that grab smaller pieces of the database at a time. Before that time, there may be a middle stage where a boolean for loading renders a loading animation. Once that no longer works, Kamanari could be used to grab one page at a time. 
        -Anticipated changes: controller, jbuilder, ajax, action, reducers, and components.


    4) Etsy During My Doc Design:
        http://web.archive.org/web/20190320192053/https://www.etsy.com/


    5) Bug:
        Had not tested my delete product action until its implementation. There were a number of problems. In the controller, I was not rendering a json object back to the thunk action, so it was dispatching the normal action without access to the id of the item, and thus, not leaving my state. After that, my views had changed since I originally wrote the action, so the data I needed was actually nested in a high level key of products.



