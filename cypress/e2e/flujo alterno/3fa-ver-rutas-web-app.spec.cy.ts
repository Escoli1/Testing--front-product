describe('Muestra un recorrido de la app web', () => {
    it('passes', () => {
      cy.visit('http://localhost:3001')
      cy.contains('Productos').should('be.visible')
      cy.get('[data-testid="page-home"]').should('be.visible')
      cy.get('[data-testid="page-home"]').click()
      cy.wait(5000) //timeout pare visualizar la página
      cy.get('[data-testid="page-productos"]').should('be.visible')
      cy.get('[data-testid="page-productos"]').click()
      cy.wait(5000) //timeout para visualizar la página
      cy.get('[data-testid="page-login"]').should('be.visible')
      cy.get('[data-testid="page-login"]').click()
    })
  })
  