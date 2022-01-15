// A POM for https://www.saucedemo.com////
// Only use this file to store web elements ///
class LoginPage{
    username(){
        return cy.get('[data-test="username"]')
    }
    password(){
        return cy.get('[data-test="password"]')
    }
    loginBtn(){
        return cy.get('[type="submit"]')
    }
}
export default LoginPage