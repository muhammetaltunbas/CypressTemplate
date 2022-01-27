/// <reference types="Cypress" />
var usernameBox="#username"
var passwordBox="#password"
var loginBtn="[value*='Sign']"
var alertMessage ="#flash_alert"


class LoginPage {

    searchBox() {
        return cy.get('.desktopOldAutosuggestTheme-input')
    }
    loginButton()
    {
        return cy.get(loginBtn)
    }
    login(username,password)
    {
        cy.sendKeys(usernameBox,username)
        cy.sendKeys(passwordBox,password)
        cy.clickElement(loginBtn)

    }
    checkWrongLoginCridentials()
    {
        return cy.get(alertMessage).should('be.not.disabled')
    }
    
}

export default LoginPage