describe('Info Page', () => {
  it('loads info overview', () => {
    cy.visit('/info')
    cy.get('#info-overview-title').should('be.visible')
  })

  it('loads info pools page', () => {
    cy.visit('/info/pools')
    cy.get('#info-pools-title').should('be.visible')
  })

  it('loads single pool page', () => {
    cy.visit('/info/pool/0x58f876857a02d6762e0101bb5c46a8c1ed44dc16')
    cy.get('#info-pool-pair-title').should('be.visible')
  })

  it('loads info tokens page', () => {
    cy.visit('/info/tokens')
    cy.get('#info-tokens-title').should('be.visible')
  })

  it('loads single token page', () => {
    cy.visit('/info/token/0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270')
    cy.get('#info-token-name-title').should('be.visible')
  })
})
