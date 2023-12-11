describe('template spec', () => {
  beforeEach(() => {
    cy.visit('/')
})
it('multi-page testing', () => {
  cy.get('#1').click();
  cy.location("pathname").should("equal", "/product/1")

  cy.visit('/')
  cy.get('#2').click();
  cy.location("pathname").should("equal", "/product/2")
  
  cy.visit('/')
  cy.get('#3').click();
  cy.location("pathname").should("equal", "/product/3")
  
  cy.visit('/')
  cy.get('#4').click()
  cy.location("pathname").should("equal", "/product/4")
  
  cy.visit('/')
  cy.get('#5').click()
  cy.location("pathname").should("equal", "/product/5")
  
  cy.visit('/')
  cy.get('#6').click()
  cy.location("pathname").should("equal", "/product/6")
  
})
})