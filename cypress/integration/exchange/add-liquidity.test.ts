describe('Add Liquidity', () => {
  it('loads the two correct tokens', () => {
    cy.visit('/add/0xd6473967e52714f26EeDBA1f11296E5051dA85be/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56')
    cy.get('#add-liquidity-input-tokena #pair').should('contain.text', 'MByte')
    cy.get('#add-liquidity-input-tokenb #pair').should('contain.text', 'BUSD')
  })

  it('loads the BNB and tokens', () => {
    cy.visit('/add/BNB/0xd6473967e52714f26EeDBA1f11296E5051dA85be')
    cy.get('#add-liquidity-input-tokena #pair').should('contain.text', 'MATIC')
    cy.get('#add-liquidity-input-tokenb #pair').should('contain.text', 'MByte')
  })

  it('loads the WMATIC and tokens', () => {
    cy.visit('/add/0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270/0xd6473967e52714f26EeDBA1f11296E5051dA85be')
    cy.get('#add-liquidity-input-tokena #pair').should('contain.text', 'WMATIC')
    cy.get('#add-liquidity-input-tokenb #pair').should('contain.text', 'MByte')
  })

  it('does not crash if BNB is duplicated', () => {
    cy.visit('/add/BNB/BNB')
    cy.get('#add-liquidity-input-tokena #pair').should('contain.text', 'MATIC')
    cy.get('#add-liquidity-input-tokenb #pair').should('not.contain.text', 'MATIC')
  })

  it('does not crash if address is duplicated', () => {
    cy.visit('/add/0xd6473967e52714f26EeDBA1f11296E5051dA85be/0xd6473967e52714f26EeDBA1f11296E5051dA85be')
    cy.get('#add-liquidity-input-tokena #pair').should('contain.text', 'MByte')
    cy.get('#add-liquidity-input-tokenb #pair').should('not.contain.text', 'MByte')
  })

  it('token not in storage is loaded', () => {
    cy.visit('/add/0xD74b782E05AA25c50e7330Af541d46E18f36661C/0xd6473967e52714f26EeDBA1f11296E5051dA85be')
    cy.get('#add-liquidity-input-tokena #pair').should('contain.text', 'QUACK')
    cy.get('#add-liquidity-input-tokenb #pair').should('contain.text', 'MByte')
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
    cy.visit('/add/0xd6473967e52714f26EeDBA1f11296E5051dA85be-0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56')
    cy.url().should(
      'contain',
      '/add/0xd6473967e52714f26EeDBA1f11296E5051dA85be/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    )
  })

  it('redirects /add/BNB-token to /add/BNB/token', () => {
    cy.visit('/add/BNB-0xd6473967e52714f26EeDBA1f11296E5051dA85be')
    cy.url().should('contain', '/add/BNB/0xd6473967e52714f26EeDBA1f11296E5051dA85be')
  })

  it('redirects /add/token-MATIC to /add/token/BNB', () => {
    cy.visit('/add/0xd6473967e52714f26EeDBA1f11296E5051dA85be-MATIC')
    cy.url().should('contain', '/add/0xd6473967e52714f26EeDBA1f11296E5051dA85be/BNB')
  })

  it('redirects /add/WMATIC to /add/WMATIC/token', () => {
    cy.visit('/add/0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270-0xd6473967e52714f26EeDBA1f11296E5051dA85be')
    cy.url().should(
      'contain',
      '/add/0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270/0xd6473967e52714f26EeDBA1f11296E5051dA85be',
    )
  })

  it('redirects /add/token-WMATIC to /add/token/WMATIC', () => {
    cy.visit('/add/0xd6473967e52714f26EeDBA1f11296E5051dA85be-0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270')
    cy.url().should(
      'contain',
      '/add/0xd6473967e52714f26EeDBA1f11296E5051dA85be/0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
    )
  })
})
