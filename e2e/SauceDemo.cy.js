describe('Sauce Demo E2E Tests', () => {
  const users = require('../fixtures/user.json');

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
  });

  it('should successfully log in with a valid user', () => {
    cy.get('[data-test="username"]').type(users.valid_users[0]);
    cy.get('[data-test="password"]').type(users.password);
    cy.get('[data-test="login-button"]').click();

    // Assert successful login
    cy.url().should('include', '/inventory.html');
  });

  it('should fail to log in with invalid users', () => {
    users.invalid_users.forEach((username) => {
      cy.visit('https://www.saucedemo.com/');
      cy.get('[data-test="username"]').type(username);
      cy.get('[data-test="password"]').type(users.password);
      cy.get('[data-test="login-button"]').click();

      // Assert login failure
      cy.get('[data-test="error"]').should('be.visible').and('contain', 'Epic sadface');
    });
  });

  describe('Product Purchase Flow', () => {
    beforeEach(() => {
      // Log in with a valid user before each test in this describe block
      cy.get('[data-test="username"]').type(users.valid_users[0]);
      cy.get('[data-test="password"]').type(users.password);
      cy.get('[data-test="login-button"]').click();

      // Assert successful login
      cy.url().should('include', '/inventory.html');
    });

    it('should add a product to the cart and complete the purchase', () => {
      // Add the first product to the cart
      cy.get('.inventory_item').first().find('button').click(); // Add to cart
      cy.get('.shopping_cart_link').click(); // Go to the cart page

      // Verify the cart contains the product
      cy.get('.cart_item').should('have.length', 1);

      // Proceed to checkout
      cy.get('[data-test="checkout"]').click();

      // Fill out checkout form
      cy.get('[data-test="firstName"]').type('John');
      cy.get('[data-test="lastName"]').type('Doe');
      cy.get('[data-test="postalCode"]').type('12345');
      cy.get('[data-test="continue"]').click();

      // Verify the checkout overview page
      cy.url().should('include', '/checkout-step-two.html');

      // Finish purchase
      cy.get('[data-test="finish"]').click();

      // Assert purchase success
      cy.get('.complete-header').should('contain', 'Thank you for your order!');
    });

    it('should display an error if first name is missing', () => {
      cy.get('.inventory_item').first().find('button').click(); // Add to cart
      cy.get('.shopping_cart_link').click(); // Go to the cart page
      cy.get('[data-test="checkout"]').click(); // Proceed to checkout

      cy.get('[data-test="lastName"]').type('Doe');
      cy.get('[data-test="postalCode"]').type('12345');
      cy.get('[data-test="continue"]').click();

      // Assert error message
      cy.get('[data-test="error"]').should('be.visible').and('contain', 'Error: First Name is required');
    });

    it('should display an error if last name is missing', () => {
      cy.get('.inventory_item').first().find('button').click(); // Add to cart
      cy.get('.shopping_cart_link').click(); // Go to the cart page
      cy.get('[data-test="checkout"]').click(); // Proceed to checkout

      cy.get('[data-test="firstName"]').type('John');
      cy.get('[data-test="postalCode"]').type('12345');
      cy.get('[data-test="continue"]').click();

      // Assert error message
      cy.get('[data-test="error"]').should('be.visible').and('contain', 'Error: Last Name is required');
    });

    it('should display an error if postal code is missing', () => {
      cy.get('.inventory_item').first().find('button').click(); // Add to cart
      cy.get('.shopping_cart_link').click(); // Go to the cart page
      cy.get('[data-test="checkout"]').click(); // Proceed to checkout

      cy.get('[data-test="firstName"]').type('John');
      cy.get('[data-test="lastName"]').type('Doe');
      cy.get('[data-test="continue"]').click();

      // Assert error message
      cy.get('[data-test="error"]').should('be.visible').and('contain', 'Error: Postal Code is required');
    });
  });
});
