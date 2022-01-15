// A POM for https://www.saucedemo.com/cart.html ///
// Only use this file to store web elements ///
class CartPage{
    CartQuantity(){
        return cy.get('.cart_quantity')
    }
    RemoveItemInCart(){
        return cy.get('.btn_secondary').contains('Remove')
    }
    CheckoutBtn(){
        return cy.get('.checkout_button')
    }
    EmptyCart(){
        return cy.get('.removed_cart_item')
    }
    CartButton(){
        return cy.get('.cart_button')
    }
}
export default CartPage