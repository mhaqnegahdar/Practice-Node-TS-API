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
2. Install main packages (express, dotenv)
3. Install dev dependencies (@types/express, @types/node)
4. Add src directory
5. Add src/config and .env
6. Create a src/logging.ts (Optional)
    - Very Good Practice for future scalablity
7. Create server.ts
    - Create and Initialize the server
    - Add logging middleware
    - Add cors middleware
    - Add routes
    - Add routeNotFound Middleware
    - Start Server
    - Create Shutdown function
8. Confirm the setup by checking /main/healthcheck route
    ```bash
    npm run dev
    ```

### **Expected Outcome:**

Make a get request to the healthcheck route to make sure it works.

<!-- ---

## **Step 2: [Test Configuration]**
### **Objective:**
Explain the purpose of this step.

### **Instructions:**
1. [ ] Configure settings in `config.json`:
   ```json
   {
       "port": 3000,
       "debug": true
   }
   ```
2. Launch the application using `npm start`.
3. Open your browser and go to `http://localhost:3000`.

### **Expected Outcome:**
The application should load with a welcome message.

---

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
