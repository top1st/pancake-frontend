describe('Add Liquidity', () => {
  it('loads the two correct tokens', () => {
    cy.visit('/add/0x9307B9bF2ea17AE17ae63c2D4c4135abc3097A85/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56')
    cy.get('#add-liquidity-input-tokena #pair').should('contain.text', '$MINTS')
    cy.get('#add-liquidity-input-tokenb #pair').should('contain.text', 'BUSD')
  })

  it('loads the BNB and tokens', () => {
    cy.visit('/add/BNB/0x9307B9bF2ea17AE17ae63c2D4c4135abc3097A85')
    cy.get('#add-liquidity-input-tokena #pair').should('contain.text', 'BNB')
    cy.get('#add-liquidity-input-tokenb #pair').should('contain.text', '$MINTS')
  })

  it('loads the WBNB and tokens', () => {
    cy.visit('/add/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/0x9307B9bF2ea17AE17ae63c2D4c4135abc3097A85')
    cy.get('#add-liquidity-input-tokena #pair').should('contain.text', 'WBNB')
    cy.get('#add-liquidity-input-tokenb #pair').should('contain.text', '$MINTS')
  })

  it('does not crash if BNB is duplicated', () => {
    cy.visit('/add/BNB/BNB')
    cy.get('#add-liquidity-input-tokena #pair').should('contain.text', 'BNB')
    cy.get('#add-liquidity-input-tokenb #pair').should('not.contain.text', 'BNB')
  })

  it('does not crash if address is duplicated', () => {
    cy.visit('/add/0x9307B9bF2ea17AE17ae63c2D4c4135abc3097A85/0x9307B9bF2ea17AE17ae63c2D4c4135abc3097A85')
    cy.get('#add-liquidity-input-tokena #pair').should('contain.text', '$MINTS')
    cy.get('#add-liquidity-input-tokenb #pair').should('not.contain.text', '$MINTS')
  })

  it('token not in storage is loaded', () => {
    cy.visit('/add/0xD74b782E05AA25c50e7330Af541d46E18f36661C/0x9307B9bF2ea17AE17ae63c2D4c4135abc3097A85')
    cy.get('#add-liquidity-input-tokena #pair').should('contain.text', 'QUACK')
    cy.get('#add-liquidity-input-tokenb #pair').should('contain.text', '$MINTS')
  })

  it('single token can be selected', () => {
    cy.visit('/add/0xD74b782E05AA25c50e7330Af541d46E18f36661C')
    cy.get('#add-liquidity-input-tokena #pair').should('contain.text', 'QUACK')
    cy.visit('/add/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56')
    cy.get('#add-liquidity-input-tokena #pair').should('contain.text', 'BUSD')
    cy.visit('/add/BNB')
    cy.get('#add-liquidity-input-tokena #pair').should('contain.text', 'BNB')
  })

  it('redirects /add/token-token to add/token/token', () => {
    cy.visit('/add/0x9307B9bF2ea17AE17ae63c2D4c4135abc3097A85-0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56')
    cy.url().should(
      'contain',
      '/add/0x9307B9bF2ea17AE17ae63c2D4c4135abc3097A85/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    )
  })

  it('redirects /add/BNB-token to /add/BNB/token', () => {
    cy.visit('/add/BNB-0x9307B9bF2ea17AE17ae63c2D4c4135abc3097A85')
    cy.url().should('contain', '/add/BNB/0x9307B9bF2ea17AE17ae63c2D4c4135abc3097A85')
  })

  it('redirects /add/token-BNB to /add/token/BNB', () => {
    cy.visit('/add/0x9307B9bF2ea17AE17ae63c2D4c4135abc3097A85-BNB')
    cy.url().should('contain', '/add/0x9307B9bF2ea17AE17ae63c2D4c4135abc3097A85/BNB')
  })

  it('redirects /add/WBNB to /add/WBNB/token', () => {
    cy.visit('/add/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c-0x9307B9bF2ea17AE17ae63c2D4c4135abc3097A85')
    cy.url().should(
      'contain',
      '/add/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/0x9307B9bF2ea17AE17ae63c2D4c4135abc3097A85',
    )
  })

  it('redirects /add/token-WBNB to /add/token/WBNB', () => {
    cy.visit('/add/0x9307B9bF2ea17AE17ae63c2D4c4135abc3097A85-0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c')
    cy.url().should(
      'contain',
      '/add/0x9307B9bF2ea17AE17ae63c2D4c4135abc3097A85/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    )
  })
})
