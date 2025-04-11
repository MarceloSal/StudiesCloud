describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://marcelosal.github.io/tennis-school/')
    cy.get('.title h1 span')
      .should('have.text', 'TENNIS')
  })
})