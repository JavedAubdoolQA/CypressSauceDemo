//const { eq } = require("lodash");
/// Use this step definition file to store steps which will be used to complete adding and validating items in the cart ///
import InventoryPage from '../PageObjects/InventoryPage'
import CartPage from '../PageObjects/CartPage'
import CustomerActions from '../Actions/CustomerActions'

////creating an object for POM pages
const ip = new InventoryPage()
const cp = new CartPage()
const ca = new CustomerActions()
////creating an object for data
const dataCredentials = require('../../fixtures/credentials')
const dataURLs = require('../../fixtures/internalURLS')
const DemoProducts = require('../../fixtures/products')

//Using the before each hook so user can start the journey from the beginning
// I want to store my data in a JSON file this is because we can call data from JSON file and not hardcode it so if the data is not valid we can change in a single place 
beforeEach(function(){
    ca.UserLogIn(dataCredentials.credentials.username, dataCredentials.credentials.password)
    
})

// And('validate the product in the cart page', () => {
//     cy.get('.cart_item').each(($ele) => {
//         if (($ele).to.contain(DemoProducts.SauceDemoProducts[0])
//         // wrapped the element so we can use cypress commands
//     })
//     // cy.log(DemoProducts.SauceDemoProducts)

// });

And('validate the product in the cart page', () => {
    cy.get('.cart_item').each(($ele, index) => {
        // wrapped the element so we can use cypress commands
    expect($ele).to.contain(DemoProducts.SauceDemoProducts[index])
    })
    // cy.log(DemoProducts.SauceDemoProducts)

});

Given('products page is displayed', () => {
    cy.url().should('eq', dataURLs.internalURLS.SauceDemoInventoryURL)
});

///went with approach because if you verified a specific product and that product was removed the test will fail
// this approach will always work because it will find
// the first product on the list
When('user adds a single product to cart', () => {
    ip.AddProductBtn().eq(0).click()
});

When('user adds a multiple products to cart', () => {
    ip.AddProductBtn().eq(0).click()
    ip.AddProductBtn().eq(0).click()
    ip.AddProductBtn().eq(0).click()
});
    
Then('single product will be displayed in the shopping cart', () => {
    ip.Cart().should('have.text', '1')
});

When('user goes to the cart', () => {
    ip.ShoppingCart().click()
});

Then('single product will be displayed in the cart page', () => {
    cp.CartQuantity().should('have.text', '1')
});

Then('expected total number of products will be displayed', () => {
    cp.CartButton().should('have.length', '3')
});

And('remove product', () => {
    ca.RemoveItemFromCart()
});

Then('shopping cart is empty', () => {
    cp.EmptyCart().should('exist')
}); 
