Cypress.Commands.add('verifyPage', (pUrl) => {

    cy.url().should('eq', pUrl)
})

Cypress.Commands.add('sendKeys', (element, key) => {

    if (key == "")
        return cy.get(element).focus().blur()
    else
        return cy.get(element).type(key)

})

Cypress.Commands.add('clickElement', (element) => {

    cy.get(element).click()

})
Cypress.Commands.add('getText', (element) => {
    cy.get(element).then(($el) => {
        return $el.text();
    })
})