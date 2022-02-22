describe('Remove Liquidity', () => {
  it('redirects from address-address to address/address', () => {
    cy.visit('/remove/0xd6473967e52714f26EeDBA1f11296E5051dA85be-0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56')
    cy.url().should(
      'contain',
      '/remove/0xd6473967e52714f26EeDBA1f11296E5051dA85be/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    )
  })

  it('bnb-cake remove', () => {
    cy.visit('/remove/BNB/0xd6473967e52714f26EeDBA1f11296E5051dA85be')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'MATIC')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'MByte')
  })

  it('cake-bnb remove', () => {
    cy.visit('/remove/0xd6473967e52714f26EeDBA1f11296E5051dA85be/BNB')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'MByte')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'MATIC')
  })

  it('loads the two correct tokens', () => {
    cy.visit('/remove/0xd6473967e52714f26EeDBA1f11296E5051dA85be/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'MByte')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'BUSD')
  })

  it('does not crash if BNB is duplicated', () => {
    cy.visit('/remove/BNB/BNB')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'MATIC')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'MATIC')
  })

  it('does not crash if token is duplicated', () => {
    cy.visit('/remove/0xd6473967e52714f26EeDBA1f11296E5051dA85be/0xd6473967e52714f26EeDBA1f11296E5051dA85be')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'MByte')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'MByte')
  })

  it('token not in storage is loaded', () => {
    cy.visit('/remove/0xD74b782E05AA25c50e7330Af541d46E18f36661C/0xd6473967e52714f26EeDBA1f11296E5051dA85be')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'QUACK')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'MByte')
  })
})
