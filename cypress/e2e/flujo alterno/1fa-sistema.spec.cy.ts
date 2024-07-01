describe('Prueba que la app esta levantada en el servidor local con el puerto 3001', () => {
    it('passes', () => {
      cy.visit('http://localhost:3001')
      cy.contains('Productos').should('be.visible')
      cy.get('[data-testid="page-home"]').should('be.visible')
      cy.get('[data-testid="page-home"]').click()
    })
  })
  