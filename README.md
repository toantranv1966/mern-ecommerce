# MERN AMAZONA

# Lessons

1. Introduction (8h45-9h50, 05/02/2022)
2. Install Tools
3. Create React App
4. Create Git Repository

5. List Products (8h45-9h50, 06/02/2022)

   1. create products array
   2. add product images
   3. render products
   4. style products

6. Add routing (8h45-9h50, 07/02/2022)

   1. npm i react-router-dom
   2. create router for home screen
   3. create router for product screen

7. Create Node.JS Server (10h00-10h40, 07/02/2022)

   1. run npm init in root folder
   2. Update package.json set type: module
   3. Add .js to imports
   4. npm install express
   5. create server.js
   6. add start command as node backend/server.js
   7. require express
   8. create route for / return backend is ready.
   9. move products.js from frontend to backend
   10. create route for /api/products
   11. return products
   12. run npm start

8. Fetch Products From Backend (11h00-11h20, 07/02/2022)

   1. set proxy in package.json
   2. npm install axios
   3. use state hook
   4. use effect hook
   5. use reducer hook

9. Manage State By Reducer Hook (13h10-13h48, 07/02/2022)

   1. define reducer
   2. update fetch data
   3. get state from useReducer

10. Add bootstrap UI Framework (14h10-14h45, 07/02/2022)
    1/ npm install react-bootstrap bootstrap
    2/ update App.js

11. Create Product and Rating Component (16h00-17h00, 07/02/2022)
    1/ Create Rating component
    2/ Create Product component
    3/ Use Rating component in Product component

12. Create Product Details Screen (20h00-21h00, 07/02/2022)
    1/ fetch product from backend
    2/ create 3 columns for image, info and action

13. Create Loading and Message Component (09h00-9h30, 08/02/2022)
    1/ Create loading component
    2/ Use spinner component
    3/ Create message component
    4/ Create utils.js to define getError function

14. Implement Add To Cart (19h00-20h30, 08/02/2022)
    1/ Create React Context
    2/ define reducer
    3/ create store provider

15. Complete Add To Cart (09h00-10h30, 09/02/2022)
    1/ Check exist item in the cart
    2/ Check count in stock in backend

16. Create Cart Screen (06h00-10h30, 15/02/2022)
    i. create 2 columns
    ii. display items list
    iii. create action column

17. Complete Cart Screen (06h00-14h00, 17/02/2022)
    i. click handle for inc/dec item
    ii/ click handle for remove item
    iii/ click handle for checkout

18. Create Signin Screen
    i. create signin form
    ii. add email & password
    iii. add signin button

19. Connect to MongoDB Database
    i. create atlas mongodb database : npm install mongoose --save + npm i dotenv
    ii. install local mongodb database
    iii. connect to mongodb database
