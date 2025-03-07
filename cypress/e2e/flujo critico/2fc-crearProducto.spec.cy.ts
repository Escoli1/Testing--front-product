describe('Crear un producto, con usuario logueado', () => {
    it('passes', () => {
      cy.visit('http://localhost:3001/login')
      cy.contains('LOGIN').should('be.visible')
      cy.get('[data-testidemail="email"]').type("user1@example.com")
      cy.get('[data-testidpassword="password"]').type("password123")
      cy.get('[data-testidbtniniciar="iniciar"]').click()
      cy.contains('Lista de Productos').should('be.visible')
      cy.wait(3000)
      cy.contains('Lista de Productos').should('be.visible')
      cy.get('[data-testidbtncrearproducto="crear"]').click()
      cy.get('[data-testidnameproducto="name"]').type("producto 10")
      cy.get('[data-testiddescripcionproducto="descripcion"]').type('descripcion producto 10')
      cy.get('[data-testidprecioproducto="precio"]').clear().type('10')
      cy.get('[data-idbtnregistrarproducto="registrar-producto"]').click()
      cy.contains('producto 10').should('be.visible')
      cy.contains('Producto creado exitosamente!').should('be.visible')
    })
  })
  