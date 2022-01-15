Purpose: Was to create automation tests to verify that the customer can add/remove products from the cart and to verify that the cart is empty 

---------

How to build:
Install Cypress
npm install cypress --save-dev
Install cucumber
npm install --save-dev cypress-cucumber-preprocessor

Add the following to index.js file 
}

const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}

---------

Architecture:
The key technologies used are 
Cypress
Cucumber
Javascript
POM

---------

How to run test:
Use the following command in the terminal: 
node_modules/.bin/cypress run --spec "cypress/integration/SauceDemoCustomerJourney.feature"
Please use the command below to use test runner to run the automation test:
node_modules/.bin/cypress open

---------

Author:
Javed Aubdool# CypressSauceDemo
