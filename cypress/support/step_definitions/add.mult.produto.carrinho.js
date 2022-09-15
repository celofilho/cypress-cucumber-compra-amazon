/// <reference types="cypress" />
/*global Given, When, Then, And */

Given('Estou logado na amazon', () => {
  cy.loginAmazon()
})

When('Adiciono produto ao carrinho', () => {
    cy.get('#twotabsearchtextbox').type('Console PlayStation 5 - Digital Edition{enter}', {force:true})
    .get('[data-asin] > .sg-col-inner > .s-widget-container > .s-card-container > .a-spacing-base > .a-spacing-small > .s-title-instructions-style > .a-size-mini > .a-link-normal > .a-size-base-plus')
     .first().click()
    .get('#add-to-cart-button').should('be.visible').click()
    .get('#sc-buy-box-ptc-button > .a-button-inner > .a-button-input').click()
    .get('#orderSummaryPrimaryActionBtn > .a-button-inner > .a-button-input').click()
})

Then('O preço final do meu carrinho é a soma dos itens adicionados', () => {
    const normalizeText = (s) => s.replace(/\s/g, '').toUpperCase()
    cy.get(':nth-child(4) > .a-text-right')
    .should(($div) => {
        const firstText = normalizeText($div.text())
        expect(firstText).to.equal(`${Cypress.env('valor.total.esperado')}`) 
    })
})

