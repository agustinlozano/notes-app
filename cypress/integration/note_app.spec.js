describe('Note app', function () {
  beforeEach(function () {
    cy.visit('http://localhost:3000')

    cy.request('POST', 'http://localhost:3001/api/testing/reset')

    const user = {
      username: 'CatitoX',
      name: 'Cato',
      password: 'BebeIsMyBrother'
    }

    cy.request('POST', 'http://localhost:3001/api/users', user)
  })

  it('content is rendered', function () {
    cy.contains('Wizard\'s Notes')
    cy.contains('show login')
    cy.contains('show all')
  })

  it('user can login', function () {
    cy.contains('show login').click()

    cy.get('[data-testid="login-form-id"] input[placeholder="Username"]')
      .type('CatitoX')

    cy.get('[data-testid="login-form-id"] input[placeholder="Password"]')
      .type('BebeIsMyBrother')

    cy.get('[data-testid="login-form-id"]')
      .contains('Login')
      .click()

    cy.get('.success-notification')
      .should('contain', 'You have logged successfully')
      .should('have.css', 'border', '3px solid rgb(153, 217, 140)')

    cy.contains('CatitoX logged in')
    cy.contains('logout')
    cy.contains('new note')
  })

  it('if login fails with wrong password', function () {
    cy.contains('show login').click()

    cy.get('[data-testid="login-form-id"] input[placeholder="Username"]')
      .type('CatitoX')

    cy.get('[data-testid="login-form-id"] input[placeholder="Password"]')
      .type('nonexisting-password')

    cy.get('[data-testid="login-form-id"]')
      .contains('Login')
      .click()

    cy.get('.failure-notification')
      .should('contain', 'Incorrect username or password')
      .should('have.css', 'border', '3px solid rgb(239, 35, 60)')
  })

  describe('when logged in', function () {
    beforeEach(function () {
      cy.login({
        username: 'CatitoX',
        password: 'BebeIsMyBrother'
      })
    })

    it('a new note can be created', function () {
      cy.contains('new note').click()

      cy.get('[data-testid="note-form-id"] textarea')
        .type('a note created from Cypress')

      cy.get('[data-testid="note-form-id"]')
        .contains('save')
        .click()

      cy.get('.success-notification')
        .should('contain', 'A new note has been added')
        .should('have.css', 'border', '3px solid rgb(153, 217, 140)')

      cy.contains('a note created from Cypress')
    })

    describe('and a note exists', function () {
      beforeEach(function () {
        cy.createNote({
          content: 'Another note but created from Cypress command',
          importance: true
        })
        cy.visit('http://localhost:3000')
      })

      it('the new note created form cypress command is rendered', function () {
        cy.get('[data-testid="notes-container"]').contains('Another note but created from Cypress command')
      })
    })
  })
})
