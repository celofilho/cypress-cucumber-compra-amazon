/// <reference types="cypress" />
/*global Given, When, Then, And */

Given('Estou logado na amazon', () => {
    cy.loginAmazon()
  })
  
  When('Clico no carrinho', () => {
    cy.get('#nav-cart').click()
  })
  
  Then('Excluo produto do carrinho', () => {
    cy.get('.a-col-right > .a-row > .sc-action-delete > .a-declarative > .a-color-link').click()
    .get('.sc-cart-header > .a-row > .a-spacing-mini')
    .should(($div) => {
        const firstText = $div.text().replace('\n','').replace('\n','')
        expect(firstText).to.equal('Seu carrinho de compras da Amazon está vazio.')
    })
  })
  
  