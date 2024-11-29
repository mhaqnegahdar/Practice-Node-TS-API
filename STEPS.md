# **Steps to Setup the Project**

## **Prerequisites**

-   [ ] Set up editor (.vscode, .prettierrc)
-   [ ] Install these globally (ts-node, typescript, ts-node-dev)

---

## **Step 1: [Initial Configuration]**

### **Objective:**

To initialize and configure an API using typescript, node, Express.

### **Instructions:**

1. Config Typescript (tsconfig.json) tsc --init
2. Install main packages `npm i express dotenv`
3. Install dev dependencies `npm i -D @types/express @types/node ts-node-dev`
4. Add _src_ directory
5. Add _src/config_ and _.env_
6. Create a _src/logging.ts_ (Optional)
    - Very Good Practice for future scalablity
7. Create _server.ts_
    - Create and Initialize the server
    - Add logging middleware
    - Add cors middleware
    - Add routes
    - Add routeNotFound Middleware
    - Start Server
    - Create Shutdown function
8. Confirm the setup by checking _/main/healthcheck_ route
    ```bash
    npm run dev
    ```

### **Expected Outcome:**

Make a get request to the healthcheck route to make sure it works.

## **Step 2: [Test Configuration]**

### **Objective:**

Help you find bugs that you may have not found before.

### **Instructions:**

1. Install packages ``.
    ```bash
    npm i -D typescript ts-node jest supertest @types/jest @types/supertest
    ```
2. Change `tsconfig`
3. Create `tsconfg.built.json`
4. Create `jest.config.json`
5. Add build & test commands.
6. Write Your First tests.

### **Expected Outcome:**

The application should load with a welcome message.

---

## **Step 3: [Decorators & Routing]**

### **Objective:**

Better & cleaner code structure and reusablity.

### **Instructions:**

1. Put your controllers inside classes
2. install packages `npm i reflect-metadata`
3. Do the configuration in `tsconfig`.
4. Make your controllers
5. make a Controller decorator
6. make Route decorator
    1. get method, path , middlewares[]
    2. get existing routeHandlers or make a new Map
    3. check if method exists on routeHandlers map if not create it with value of empty Map
    4. set the value of reflectHanler method to the key of path and [...middlewares, discriptor.value]
    5. define the routeHandlers at the end
7. Create modules/routes.ts and defineRoutes function
    1. get controllers, application
    2. loop over all controllers inside get their routeHandlers
    3. get routeHandlers and baseRoute
    4. loop over keys of routeHandlers (methods)
    5. extract routes from each method and loop over the routes
    6. extract controllers from each routes and create the define each route
8. use defineRoutes function in server.ts

### **Expected Outcome:**

You should now be able to create your routes in a reusable and much cleaner way

---

## **Step 4: [Data Validation]**

### **Objective:**

Validating data is a curcial asspect of building robust and secure applications.

### **Instructions:**

1. Install Joi `npm i joi` (ts library for data validation)
2. Create Validate decorator
3. Create Joi schema for the controller
4. set the validate decorator for the route

---

---

## **Step 5: [Database Connection]**

### **Objective:**

Reusable using decorators

### **Instructions:**

1. Install main packages `npm i mongoos`
2. Set up mongo db Database

3. Add Database credentials to _src/config_ and _.env_
4. Connect to database using mongoose
5. Create a schema and its model
6. Create controllers for crud operations on that model
7. Declare Handlers for crud operations in each Request
8. Create Decorators for Crud Operations
    - Very Good Practice for future scalablity
9. Added ObjectId Validator Decorator
10. Add Validate and Crud Decorators to each route

### **Expected Outcome:**

returned value should be match what is in the database
