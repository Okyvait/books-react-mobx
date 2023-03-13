describe('book page', () => {
  it('should open book page from main page and return back', () => {
    cy.intercept({
      method: 'GET',
      url: '**/api/**',
    }).as('loadBook');

    cy.visit('/').wait('@loadBook');

    cy.getByTestId('linkToCard').as('linkToCard').first().click().wait('@loadBook');

    cy.location().should((loc) => {
      expect(loc.pathname).to.match(/book\/\d+/);
    });

    cy.getByTestId('bookCover').should('be.visible');
    cy.getByTestId('bookTitle').should('be.visible');

    cy.contains('Description').siblings('[data-testid="description"]').should('be.visible').invoke('text').its('length').should('be.greaterThan', 0);
    cy.contains('Back').click().wait('@loadBook');

    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/');
    });

    cy.get('@linkToCard').should('be.visible');
  });
});
