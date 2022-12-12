describe("login", function () {
  beforeEach(function () {
    cy.visit("/");
  });
  it("Verify that the user is able to login with valid credentials", function () {
    cy.get(".main-nav__link.main-nav__link--sign-in").click();
    cy.get("#user_email").type("fullservice@df.co");
    cy.get("#user_password").type("dffullservice");
    cy.get(".p-button.auth-box--register__button").click();
  });
});
