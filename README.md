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

18. Create Signin Screen (06h00-14h00, 19/02/2022)
    i. create signin form
    ii. add email & password
    iii. add signin button

19. Connect to MongoDB Database
    i. create atlas mongodb database : npm install mongoose --save + npm i dotenv
    ii. install local mongodb database
    iii. connect to mongodb database

20. Seed Sample Data
    i. create Product model
    ii. create User model
    iii. create seed route
    iv. use route in server.js
    v. seed sample product

21. Seed Sample Users
    i. create user model
    ii. seed sample users
    iii. create user routes

22. Create Signin Backend API
    i. create signin api
    ii. npm install jsonwebtoken
    iii. define generateToken

23. Complete Signin Screen (06h00-18h00, 19/02/2022)
    i. handle submit actions
    ii. save token in store and local storage
    iii. show user name in header

24. Create Shipping Screen (06h00-18h00, 19/02/2022)
    i. Create form inputs (06h00-7h00)
    ii. handle save shipping address (09h00-10h30)
    iii. add checkout wizard bar (11h00-11h30)

25. Create Signup Screen (20/02/2022 13h00 - 14h30)
    i. create input forms
    ii. handle submit
    iii. create backend api

26. Implement Select Payment Method Screen (20/02/2022 13h00 - 14h30)
    i. create input form
    ii. handle submit

27. Create Place Order Screen (20/02/2022 16h00 - 18h30)

    1. show cart items, payment and address

28. Implement Place Order Action (22/02/2022 6h00 - 7h00)

    1. handle place order action
    2. create order create api

29. Create Order Screen (22/02/2022 08h50 - 11h30)
    i. create backend api for order:id
    ii. fetch order api in frontend
    iii. show order information in two columns

30. Pay Order by PayPal (22/02/2022 13h30 - 15h30)
    i. generate paypal client id
    ii. create api to return client id
    iii. install react-paypal-js
    iv. use PayPalScriptProvider in index.js
    v. use PayPalScriptReducer in Order Screen
    vi. implement loadPayPalScript function
    vii. render paypal button
    viii. implement onApprove payment function
    ix. create pay order api in backend

31. Display Order History (22/02/2022 16h00 - 18h00)
    i. create order screen
    ii. create order history api
    iii. use api in frontend

32. Create Profile Screen (23/02/2022 19h30 - 21h00)
    i. get user info from context
    ii. show user information
    iii. create use update api
    iv. update user info

33. Public To Heroku (27/03/2022)
    i. create and config node project
    ii. serve build folder in frontend folder
    iii. Create Heroku account
    iv. connect it to github
    v. Create mongodb atlas database
    vi. Set database connection in Heroku env variables
    vii. commit and push

34. Add Sidebar and Search Box (29/03/2022)
    i. add sidebar
    ii. add search Box

35. Create Search Screen
    i. show filters
    ii. create api for searching products
    iii. display results

36. i. Create Admin Menu
    ii. define protected route component
    iii. define admin route component
    iv. add menu for admin in header

37. Create Dashboard Screen (13h30 14/04/2022)

    1. create dashboard ui
    2. implement backend api
    3. connect ui to backend

38. Manage Products (20h 14/04/2022)

    1. create products list ui
    2. implement backend api
    3. fetch data

39. Create Product

    1. create products button
    2. implement backend api
    3. handle on click

40. Create Edit Product

    1. create edit button
    2. create edit product ui
    3. dispaly product info in the input boxes

41. Implement Update Product (10h30 21/04/2022)

    1. create edit product backend api
    2. handle update click

42. Upload Product Image (14h00 21/04/2022)

    1. create cloudinary account
    2. use the api key in env file
    3. handle upload file
    4. implement backend api to upload

43. Delete Product (15h30 21/04/2022)

    1. show delete button
    2. implement backend api
    3. handle on click

44. List Orders (20h00 22/04/2022)

    1. create order list screen
    2. implement backen api
    3. fetch and display orders

45. Deliver Order (09h00 23/04/2022)

    1. add deliver button
    2. handle click action
    3. implement backend api for deliver

46. Delete Order (14h00 23/04/2022)

    1. add delete button
    2. handle click action
    3. implement backen api for delete

47. List Users (16h00 23/04/2022)

    1. create user list screen
    2. implement backen api
    3. fetch and display users

48. Edit User (19h30 23/04/2022)

    1. create edit button
    2. create edit product ui
    3. display product info in the input boxes
    4. implement backend api
    5. handle edit click

49. Delete User (10h30 24/04/2022)

    1. add delete button
    2. handle click action
    3. implement backend api for delete

50. Choose Address On Google Map (15h00 24/04/2022)

    1. create google map credentials
    2. update .env file with Google Api Key
    3. create api to send google api to frontend
    4. create map screen
    5. fetch google api
    6. getUserLocation
    7. install @react-google-maps/api
    8. use it in shipping screen
    9. apply map to the checkout screen

51. Email order receipt by mailgun (19h00 24/04/2022)

    1. create mailgun account
    2. add and verify your domain to mailgun
    3. install mailgun-js
    4. set api key in env file
    5. change pay order in orderRouter
    6. send email order receipt

52. Review Orders (9h30 28/04/2022)

    1. create submit review form
    2. handle submit
    3. implement backend api for review

53. Upload multiple Images 15h30 (28/04/2022)

    1. add images to product model
    2. get images in edit screen
    3. show images in product screen

54. React-messenger-customer-chat (06h00 7/5/2022)

    1. npm install --force react-messenger-customer-chat
    2. Config pageId, appId & add domain to whilelist facebook

55. React-Boostrap Carousel (07/05 - 08/05/2022)
56. Footer Style-Components (09h00 - 14h30 10/05/2022)
57. Multi language Frontend (18h00 - 19h00 10/05/2022 )
