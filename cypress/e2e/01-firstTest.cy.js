describe('First Test', { browser: '!chrome' }, () => {
  it('Browse to first page', () => {
    cy.visit('https://www.platzi.com')
  });
})
