describe('App.vue', () => {
  it('should display all titles', () => {
    cy.visitDemo();

    cy.contains('h1', 'VPhoneInput');
    cy.contains('h2', 'Installation');
    cy.contains('h2', 'Configuration');
    cy.contains('h2', 'Input preview');
  });

  it('should match snapshot', () => {
    cy.visitDemo();
    cy.get('#app').toMatchImageSnapshot();
  });

  it('should toggle theme to dark and match snapshot', () => {
    cy.visitDemo();

    cy.contains('Dark theme').parent().click();

    cy.get('#app').toMatchImageSnapshot();
  });
});