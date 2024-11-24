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
3. Install dev dependencies `npm i -D @types/express @types/node`
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
5. Add build & test commands:
6. Write Your First tests.

### **Expected Outcome:**

The application should load with a welcome message.

---

<!-- ---
## **Step 3: [Descriptive Title of Step]**
### **Objective:**
Outline what this step achieves.

### **Instructions:**
1. [ ] Add additional functionality by editing `app.js`.
2. [ ] Test changes using the command:
   ```bash
   npm test
   ```

### **Expected Outcome:**
Tests should pass without errors.

---

## **Step 4: [Finalizing]**
### **Objective:**
Wrap up the task or ensure everything is complete.

### **Instructions:**
- [ ] Review all changes.
- [ ] Commit your work to version control:
   ```bash
   git add .
   git commit -m "Completed setup"
   git push origin main
   ```
- [ ] Clean up temporary files if needed.

---

## **Additional Notes**
- Troubleshooting tips (e.g., "If you encounter error X, try Y").
- References or links to external resources.

---

## **Conclusion**
A summary of the completed task and any next steps.   -->
