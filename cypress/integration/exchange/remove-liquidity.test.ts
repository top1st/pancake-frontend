describe('Remove Liquidity', () => {
  it('redirects from address-address to address/address', () => {
    cy.visit('/remove/0x0b3F868E0BE5597D5DB7fEB59E1CADBb0fdDa50a-0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56')
    cy.url().should(
      'contain',
      '/remove/0x0b3F868E0BE5597D5DB7fEB59E1CADBb0fdDa50a/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    )
  })

  it('bnb-cake remove', () => {
    cy.visit('/remove/BNB/0x0b3F868E0BE5597D5DB7fEB59E1CADBb0fdDa50a')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'MATIC')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'CAKE')
  })

  it('cake-bnb remove', () => {
    cy.visit('/remove/0x0b3F868E0BE5597D5DB7fEB59E1CADBb0fdDa50a/BNB')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'CAKE')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'MATIC')
  })

  it('loads the two correct tokens', () => {
    cy.visit('/remove/0x0b3F868E0BE5597D5DB7fEB59E1CADBb0fdDa50a/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'CAKE')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'BUSD')
  })

  it('does not crash if BNB is duplicated', () => {
    cy.visit('/remove/BNB/BNB')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'MATIC')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'MATIC')
  })

  it('does not crash if token is duplicated', () => {
    cy.visit('/remove/0x0b3F868E0BE5597D5DB7fEB59E1CADBb0fdDa50a/0x0b3F868E0BE5597D5DB7fEB59E1CADBb0fdDa50a')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'CAKE')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'CAKE')
  })

  it('token not in storage is loaded', () => {
    cy.visit('/remove/0xD74b782E05AA25c50e7330Af541d46E18f36661C/0x0b3F868E0BE5597D5DB7fEB59E1CADBb0fdDa50a')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'QUACK')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'CAKE')
  })
})
