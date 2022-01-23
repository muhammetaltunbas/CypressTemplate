import {
    Given,
    When,
    Then
} from 'cypress-cucumber-preprocessor/steps'

import LoginPage from '../../../support/PageObjects/LoginPage'
var lPage = new LoginPage()
import FlightPage from '../../../support/PageObjects/FlightPage'
var fPage = new FlightPage()


Given('User is on {string} landing page', (PageUrl) => {
    cy.visit(PageUrl)
})

Then('Login page is opened', function () {
    cy.verifyPage(this.data.loginPageTitle)//gets data from dataProperties file via fixtures
})

When('User enters {string} and {string} and clicks sign in button', (username, password) => {
    lPage.login(username, password)
})

Then('User goes flightpage', () => {
    fPage.checkLoginFunction()
})

Then('User can not login in', () => {
    lPage.checkWrongLoginCridentials()
    

})