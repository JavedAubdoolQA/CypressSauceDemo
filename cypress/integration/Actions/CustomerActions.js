///This Class will be used to store all of the customer actions///
///Also testers can store any helper steps that will be useful in this class ///

import CartPage from '../PageObjects/CartPage'
import LoginPage from '../PageObjects/LoginPage'
import ProductsPage from '../PageObjects/InventoryPage'

const cp = new CartPage()
const login = new LoginPage()
const ip = new ProductsPage()

class CustomerActions{
    //iterates through the array 
    RemoveItemFromCart(){
        cp.CartButton().each(($ele) => {
            // wrapped the element so we can use cypress commands
        cy.wrap($ele).click()
        })
    }
    UserLogIn(username, password){
    // baseURL is stored in cypress.json
    cy.visit('/')
    login.username().type(username)
    login.password().type(password)
    login.loginBtn().click()
    }
}
export default CustomerActions