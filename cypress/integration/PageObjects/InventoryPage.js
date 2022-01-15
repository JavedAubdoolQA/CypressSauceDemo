// A POM for https://www.saucedemo.com/inventory.html ////////
// Only use this file to store web elements ///
class InventoryPage{
    AddProductBtn(){
        return cy.get('.btn_primary.btn_small')
    }
    AddProd(){
        return cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
    }
    Cart(){
        return cy.get('.shopping_cart_badge')
    }
    RemoveItem(){
        return cy.get('.btn_primary')
    }
    BurgerButton(){
        return cy.get('.bm-burger-button')
    }
    LogOut(){
        return cy.get('#logout_sidebar_link')
    }
    ShoppingCart(){
        return cy.get('.shopping_cart_link')
    }
}
export default InventoryPage