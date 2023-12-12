const { default: Cart } = require("@/app/cart/page")

describe('cart.cy.jsx', () => {
  it('playground', () => {
    // cy.mount()
    cy.mount(<Cart />)
    
  })
})