Cypress Automation Test for Sauce Demo
This repository contains end-to-end (E2E) test automation scripts for the Sauce Demo Website. The tests are built using Cypress, an open-source testing framework, to validate the functionality of the website.

Setup Instructions
Prerequisites
Before you can run the tests, ensure you have the following installed:

Node.js (v14 or higher)
Git
Cypress
Installation Steps
Clone the Repository
Clone the repository to your local machine using Git:

bash
Copy code
git clone https://github.com/Mudassar12525/SauceTest.git
Navigate to Project Directory
Change to the project directory:

bash
Copy code
cd SauceTest
Install Dependencies
Install all the required dependencies for Cypress:

bash
Copy code
npm install
How to Run the Tests
Once the dependencies are installed, you can run the Cypress tests using the following methods:

1. Run Cypress Test Runner (Interactive Mode)
To run the tests with an interactive UI, run the following command:

bash
Copy code
npx cypress open
This command will open the Cypress Test Runner where you can see and run the individual tests. You can select a specific test to run or run all the tests.

2. Run Cypress in Headless Mode (Command Line)
To run the tests in the terminal without the UI, use the following command:

bash
Copy code
npx cypress run
This will execute all the tests in the cypress/integration folder in headless mode, which means without opening the UI.

3. Run Tests for Specific File
To run tests for a specific file, use:

bash
Copy code
npx cypress run --spec cypress/integration/SauceDemo.cy.js
Folder Structure
The project structure is as follows:

arduino
Copy code

/cypress
  /fixtures

    user.json           // Contains valid and invalid user data for login
  /e2e

    SauceDemo.cy.js      // Cypress test file for the Sauce Demo website
  /support

    commands.js          // Custom commands for Cypress
    index.js             // Initializes support files

Fixtures: Contains mock data for testing (e.g., user.json).
Integration: Holds the test scripts, like SauceDemo.cy.js.
Support: Includes custom commands and setup files for Cypress.
To Do
Here are some tasks that could be automated with more time and resources:

Filter Product Test: Add tests to filter products by price, name, or category.
Checkout Test: Automate a complete checkout process with product selection, cart validation, and order confirmation.
Logout Test: Automate the user logout process after a successful login and purchase.
Test Different User Roles: Test different roles such as "standard_user", "locked_out_user", etc.
Negative Scenarios: Add more negative test cases like invalid login credentials, missing fields in the checkout, etc.
