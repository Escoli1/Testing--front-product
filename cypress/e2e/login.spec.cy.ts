describe('Logear un Usuario e Ingresar al Sistema', () => {
  it('passes', () => {
    cy.visit('http://localhost:3001/login')
    cy.contains('LOGIN').should('be.visible')
    cy.get('#email').type('user1@example.com')
    cy.get('#password').type('password123')
    cy.get('#iniciar').click()
    cy.contains('Lista de Productos').should('be.visible')
  })
})
