Test Scenarios
This project includes the following test scenarios:

Login Test:

Valid user credentials are used to log in to the website.
Invalid users trigger an error message.
Product Purchase Flow:

Add a product to the cart.
Proceed to checkout and complete the purchase with valid details.
Negative tests for missing form fields (first name, last name, postal code).

The project folder structure is as follows:
/cypress
  /fixtures
    user.json           // Contains valid and invalid user data
  /integration
    SauceDemo.cy.js      // Cypress test file for Sauce Demo website
  /support
    commands.js
    index.js
