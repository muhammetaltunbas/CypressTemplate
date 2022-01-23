var loginControlText = "#flash_notice"
var successLoginText = "Signed in!"//test


class FlightPage {

    checkLoginFunction() {
       return cy.getText(loginControlText).should('eq', successLoginText)
    }
}

export default FlightPage