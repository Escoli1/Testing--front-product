describe('Eliminar un producto, con usuario logueado', () => {
    it('passes', () => {
      cy.visit('http://localhost:3001/login')
      cy.contains('LOGIN').should('be.visible')
      cy.get('[data-testidemail="email"]').type("user1@example.com")
      cy.get('[data-testidpassword="password"]').type("password123")
      cy.get('[data-testidbtniniciar="iniciar"]').click()
      cy.contains('Lista de Productos').should('be.visible')
      cy.wait(3000)
      //selecionar la fila donde se quiere eliminar
      cy.contains('producto 10').should('be.visible')
      cy.get('[data-testidbtneliminarproducto="producto-5"]').click()
      cy.contains('Producto eliminado exitosamente!').should('be.visible')
    })
  })
  