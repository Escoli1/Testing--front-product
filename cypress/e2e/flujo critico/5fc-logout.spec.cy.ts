describe('Logear un Usuario e Ingresar al Sistema', () => {
    it('passes', () => {
      cy.visit('http://localhost:3001/login')
      cy.contains('LOGIN').should('be.visible')
      cy.get('[data-testidemail="email"]').type("user1@example.com")
      cy.get('[data-testidpassword="password"]').type("password123")
      cy.get('[data-testidbtniniciar="iniciar"]').click()
      cy.contains('Lista de Productos').should('be.visible')
      cy.wait(3000)
      cy.contains('Logout').should('be.visible')
      cy.get('[data-testidbtnlogout="logout"]').click()
      cy.contains('Práctica Final- Cypress').should('be.visible')
    })
  })
  