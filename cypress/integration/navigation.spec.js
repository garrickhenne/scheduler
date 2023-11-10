describe("Navigation", () => {
  it('should navigate to Tuesday', () => {
    cy.request('GET', 'http://localhost:80001/api/debug/reset')
      .then(() => {
        cy.visit('/');
        cy.contains('li', 'Tuesday')
          .click()
          .should('have.class', 'day-list__item--selected');
      });
  });
});