describe('Crear un producto, con usuario logueado', () => {
    it('passes', () => {
      cy.visit('http://localhost:3001/login')
      cy.contains('LOGIN').should('be.visible')
      cy.get('#email').type('user1@example.com')
      cy.get('#password').type('password123')
      cy.get('#iniciar').click()
      cy.contains('Lista de Productos').should('be.visible')
      cy.get('#crear').click()
      cy.get('#name').type('producto 10')
      cy.get('#descripcion').type('descripcion producto 10')
      cy.get('#precio').clear().type('10')
      cy.get('#registrar-producto').click()
      cy.contains('Producto creado exitosamente!').should('be.visible')
    })
  })
  