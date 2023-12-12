import React from 'react'
import DiscoverHeader from './DiscoverHeader'

describe('<DiscoverHeader />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<DiscoverHeader />)
    cy.get('[data-testid = "headerTest"]').should("have.text", "Discover")

    cy.get('[data-testid="categoryTest"]').should("have.all.key", "m")
  })
})