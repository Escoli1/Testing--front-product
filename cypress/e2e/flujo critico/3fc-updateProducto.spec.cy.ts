describe('Actualizar un producto, con usuario logueado para un producto seleccionado', () => {
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
      cy.get('[data-testidbtnactualizarproducto="producto-1"]').click()
      cy.get('[data-testidnameroductoa="name"]').clear().type("producto 10")
      cy.get('[data-testiddescripcionproductoa="descripcion"]').clear().type('descripcion producto 10')
      cy.get('[data-testidprecioproductoa="precio"]').clear().type('100')
      cy.get('[data-testidbtnactualizar="actualizar-producto"]').click()
      cy.contains('producto 10').should('be.visible')
      cy.contains('Producto actualizado exitosamente!').should('be.visible')
    })
  })
  