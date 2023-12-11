describe('Header Footer Test ', () => {
  it('passes', () => {
    cy.visit('/');

// Header
    cy.get('#discoverHeader')                             // id
    .should("exist")

    cy.get('[data-testid = "headerTest"]')                //data-testid
    .should("exist").should("have.text" , "Discover")

// Footer
    cy.get('.discFooter')                                 //class
    .should("exist")

    cy.get('.discFooter').eq(2).click()
  })

  it('passes', () => {
    cy.visit('http://localhost:3000');

  })
})