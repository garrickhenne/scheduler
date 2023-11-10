describe('should book an interview', () => {
  beforeEach(() => {
    cy.request("GET", "/api/debug/reset");

    // 1. Visits the root of our web server
    cy.visit("/");

    cy.contains("Monday");
  });

  xit('should book an interview', () => {
    // 2. Clicks on the "Add" button in the second appointment
    cy.get('[alt=Add]')
      .first()
      .click();
    // 3. Enters their name
    cy.get('[data-testid="student-name-input"]')
      .type('Garrick Henne');
    // 4. Chooses an interviewer
    cy.get('[alt="Sylvia Palmer"]')
      .click();
    // 5. Clicks the save button
    cy.contains('Save').click();
    // 6. Sees the booked appointment
    cy.contains(".appointment__card--show", "Garrick Henne");
    cy.contains(".appointment__card--show", "Sylvia Palmer");
  });

  xit('should edit an interview', () => {
    // 2. Clicks the edit button for the existing appointment.
    cy.get('[alt="Edit"]').click({ force: true });
    // 3. Changes the name and interviewer
    cy.get('[data-testid=student-name-input]')
      .clear()
      .type('Garrick Henne');
    cy.get('[alt="Tori Malcolm"]').click();
    // 4. Clicks the save button
    cy.contains('Save').click();
    // 5. Sees the edit to the appointment
    cy.contains(".appointment__card--show", "Garrick Henne");
    cy.contains(".appointment__card--show", "Tori Malcolm");
  });

  it('should cancel an interview', () => {
    // 2. Clicks the delete button for the existing appointment
    cy.get('[alt=Delete]').click({ force: true });
    // 3. Clicks the confirm button
    cy.contains('Confirm').click();
    // 4. Sees that the appointment slot is empty
    cy.contains('Deleting').should('exist');
    cy.contains('Deleting').should('not.exist');

    cy.contains(".appointment__card--show", "Archie Cohen")
      .should("not.exist");
  });
});