describe('Product Detail Test', () => {
  it('passes', () => {

    cy.visit('/product/1')
    cy.get("#sizeLTest").click()
    cy.get(".addToCartTest").click()

    cy.visit('/product/2')
    cy.get("#sizeLTest").click()
    cy.get(".addToCartTest").click()

    cy.visit('/product/3')
    cy.get("#sizeLTest").click()
    cy.get(".addToCartTest").click()

    cy.visit('/product/4')
    cy.get("#sizeLTest").click()
    cy.get(".addToCartTest").click()

    cy.visit('/product/5')
    cy.get("#sizeLTest").click()
    cy.get(".addToCartTest").click()

  })
})