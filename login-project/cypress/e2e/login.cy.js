describe('Login Form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });

  it('başarılı form doldurulduğunda success sayfası açılır', () => {
    cy.get('[data-cy="form-email"]').type('emre@wit.com.tr');
    cy.get('[data-cy="form-password"]').type('12345678A');
    cy.get('input[type="checkbox"]').check();

    cy.get('[data-cy="form-submit"]').should('not.be.disabled').click();
    cy.contains('Form başarı ile gönderildi').should('be.visible');
  });

  it('email yanlış girildiğinde hata gösterir', () => {
    cy.get('[data-cy="form-email"]').type('emre@wit');
    cy.get('[data-cy="form-password"]').type('12345678A');
    cy.get('input[type="checkbox"]').check();

    cy.get('p').should('have.length', 1);
    cy.get('[data-cy="form-submit"]').should('be.disabled');
  });
});
