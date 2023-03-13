declare namespace Cypress {
  interface Chainable<Subject> {
    getByTestId(id: string): Chainable<JQuery<HTMLElement>>;
  }
}
