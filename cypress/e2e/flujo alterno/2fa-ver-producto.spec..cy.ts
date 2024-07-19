describe('Ver un producto por su id en la sección de productos', () => {
    it('passes', () => {
        cy.visit('http://localhost:3001')
        cy.contains('Productos').should('be.visible')
        cy.get('[data-testid="page-home"]').should('be.visible')
        cy.get('[data-testid="page-home"]').click()
        cy.wait(5000) //timeout pare visualizar la página
        cy.get('[data-testid="page-productos"]').should('be.visible')
        cy.get('[data-testid="page-productos"]').click()
        cy.wait(5000) //timeout para visualizar la página
        cy.get('[data-testidproducto="producto-2"]').should('be.visible')
        cy.get('[data-testidproducto="producto-2"]').click()
        cy.wait(5000) //timeout para visualizar la página
        cy.get('[data-testidbutton="btn-volver-lista-productos"]').should('be.visible')
        cy.get('[data-testidbutton="btn-volver-lista-productos"]').click()
    })
  })
  