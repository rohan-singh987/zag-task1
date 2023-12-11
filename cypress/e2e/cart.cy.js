describe('Cart Page', () => {
  it('Cart page testing', () => {
    cy.visit('/')
    // cy.pause()
    cy.get("#cartPageTest").click()
    cy.location('pathname').should("equal", "/cart")
  })
})