import {
  companyFullservice,
  fake,
  purchasePlan,
} from "../../support/credentials/comapny_fullservice";
describe("fullService plan", function () {
  let credentials = fake();
  beforeEach(function () {
    cy.visit({
      url: "/",
      method: "GET",
    });
  });

  it("Verify user can register directly as fullservice plan user", function () {
    cy.get('.header__main-nav > [href="/plans"]').click();
    cy.url().should("include", "/plans");
    cy.get(".plan--ful > .s-button").click();
    cy.url().should("include", "/fullservice/register");
    cy.get(
      ".ga-register-0 > .sign-up__block > #new_user > .sign-up__form-container > #user_email"
    )
      .clear()
      .focus()
      .type(credentials.email);
    cy.get(
      ".ga-register-0 > .sign-up__block > #new_user > .sign-up__form-container > #user_name"
    )
      .clear()
      .focus()
      .type(credentials.name);
    cy.get(
      ".ga-register-0 > .sign-up__block > #new_user > .sign-up__form-container > #user_password"
    )
      .clear()
      .focus()
      .type(credentials.password);
    cy.get(
      ".ga-register-0 > .sign-up__block > #new_user > .sign-up__form-container > .p-button"
    ).click();
    cy.url().should("include", "/fullservice/purchase-plan");
    cy.get('[name="cardnumber"]:nth-child(1)').type(purchasePlan.creditCard);
    cy.get("#stripe-card-cvc").type(3344);
    cy.get("#stripe-card-expiry").type(purchasePlan.expirationDate);
    cy.get(".p-button.p-button--purchase-plan").click();
    cy.url().should("include", "/projects?switched_plan=1");
  });
});
