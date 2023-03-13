describe('main page', () => {
  beforeEach(() => {
    cy.intercept({
      method: 'GET',
      url: '**/api/**',
    }).as('loadBooks');

    cy.visit('/').wait('@loadBooks');
  });

  const getTextContent = (items) => items.map((i, x) => x.textContent);

  it('should open main page', () => {
    cy.getByTestId('linkToCard').should('be.visible');
    cy.contains('Sort by').should('be.visible');
    cy.contains('Genre').should('be.visible');
  });

  it('should open main page and sort items', () => {
    cy.location().should((loc) => {
      expect(loc.search).to.be.empty;
    });
    cy.getByTestId('sortBySelect').select('↓ rating').wait('@loadBooks');

    cy.location().should((loc) => {
      expect(loc.search).to.eq('?sortRating=desc');
    });
    cy.wait(1000);

    const getNumbers = (items) =>
      items.map((i, x) => {
        const num = x.replace(/^\w+:\s/g, '');
        return parseFloat(num);
      });

    cy.get('[data-testid="linkToCard"] [data-testid="rating"]')
      .then(getTextContent)
      .then(getNumbers)
      .then((ratings) => {
        const sorted = [...ratings].sort((a, b) => b - a);
        expect([...ratings], 'sort by rating desc').to.deep.equal(sorted);
      });
  });

  it('should filter items by genre', () => {
    const genre1 = 'action';
    const genre2 = 'detective';

    cy.location().should((loc) => {
      expect(loc.search).to.be.empty;
    });
    cy.getByTestId('genreFilterSelect').as('genreSelect').select(genre1).wait('@loadBooks');
    cy.get('@genreSelect').select(genre2).wait('@loadBooks');

    cy.location().should((loc) => {
      expect(loc.search).to.contain(`?genre=${genre1}&genre=${genre2}`);
    });

    cy.get('[data-testid="linkToCard"] [data-testid="genres"]')
      .then(getTextContent)
      .each((str) => {
        expect(str, `expect str ${str} to contain genres`).to.have.string(genre1, genre2);
      });
  });
});
