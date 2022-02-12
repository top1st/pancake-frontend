describe('Add Liquidity', () => {
  it('loads the two correct tokens', () => {
    cy.visit('/add/0x687f9936a14407eB08273A910eBdEb98a1B5f5a0/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56')
    cy.get('#add-liquidity-input-tokena #pair').should('contain.text', '$MINTS')
    cy.get('#add-liquidity-input-tokenb #pair').should('contain.text', 'BUSD')
  })

  it('loads the BNB and tokens', () => {
    cy.visit('/add/BNB/0x687f9936a14407eB08273A910eBdEb98a1B5f5a0')
    cy.get('#add-liquidity-input-tokena #pair').should('contain.text', 'MATIC')
    cy.get('#add-liquidity-input-tokenb #pair').should('contain.text', '$MINTS')
  })

  it('loads the WMATIC and tokens', () => {
    cy.visit('/add/0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270/0x687f9936a14407eB08273A910eBdEb98a1B5f5a0')
    cy.get('#add-liquidity-input-tokena #pair').should('contain.text', 'WMATIC')
    cy.get('#add-liquidity-input-tokenb #pair').should('contain.text', '$MINTS')
  })

  it('does not crash if BNB is duplicated', () => {
    cy.visit('/add/BNB/BNB')
    cy.get('#add-liquidity-input-tokena #pair').should('contain.text', 'MATIC')
    cy.get('#add-liquidity-input-tokenb #pair').should('not.contain.text', 'MATIC')
  })

  it('does not crash if address is duplicated', () => {
    cy.visit('/add/0x687f9936a14407eB08273A910eBdEb98a1B5f5a0/0x687f9936a14407eB08273A910eBdEb98a1B5f5a0')
    cy.get('#add-liquidity-input-tokena #pair').should('contain.text', '$MINTS')
    cy.get('#add-liquidity-input-tokenb #pair').should('not.contain.text', '$MINTS')
  })

  it('token not in storage is loaded', () => {
    cy.visit('/add/0xD74b782E05AA25c50e7330Af541d46E18f36661C/0x687f9936a14407eB08273A910eBdEb98a1B5f5a0')
    cy.get('#add-liquidity-input-tokena #pair').should('contain.text', 'QUACK')
    cy.get('#add-liquidity-input-tokenb #pair').should('contain.text', '$MINTS')
  })

  it('single token can be selected', () => {
    cy.visit('/add/0xD74b782E05AA25c50e7330Af541d46E18f36661C')
    cy.get('#add-liquidity-input-tokena #pair').should('contain.text', 'QUACK')
    cy.visit('/add/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56')
    cy.get('#add-liquidity-input-tokena #pair').should('contain.text', 'BUSD')
    cy.visit('/add/BNB')
    cy.get('#add-liquidity-input-tokena #pair').should('contain.text', 'MATIC')
  })

  it('redirects /add/token-token to add/token/token', () => {
    cy.visit('/add/0x687f9936a14407eB08273A910eBdEb98a1B5f5a0-0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56')
    cy.url().should(
      'contain',
      '/add/0x687f9936a14407eB08273A910eBdEb98a1B5f5a0/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    )
  })

  it('redirects /add/BNB-token to /add/BNB/token', () => {
    cy.visit('/add/BNB-0x687f9936a14407eB08273A910eBdEb98a1B5f5a0')
    cy.url().should('contain', '/add/BNB/0x687f9936a14407eB08273A910eBdEb98a1B5f5a0')
  })

  it('redirects /add/token-BNB to /add/token/BNB', () => {
    cy.visit('/add/0x687f9936a14407eB08273A910eBdEb98a1B5f5a0-BNB')
    cy.url().should('contain', '/add/0x687f9936a14407eB08273A910eBdEb98a1B5f5a0/BNB')
  })

  it('redirects /add/WMATIC to /add/WMATIC/token', () => {
    cy.visit('/add/0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270-0x687f9936a14407eB08273A910eBdEb98a1B5f5a0')
    cy.url().should(
      'contain',
      '/add/0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270/0x687f9936a14407eB08273A910eBdEb98a1B5f5a0',
    )
  })

  it('redirects /add/token-WMATIC to /add/token/WMATIC', () => {
    cy.visit('/add/0x687f9936a14407eB08273A910eBdEb98a1B5f5a0-0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270')
    cy.url().should(
      'contain',
      '/add/0x687f9936a14407eB08273A910eBdEb98a1B5f5a0/0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
    )
  })
})
