import loginPage from "../../support/pages/login_page";
import projecstPage from "../../support/pages/projects_page";
import {
  companyFullservice,
  fake,
} from "../../support/credentials/comapny_fullservice";

describe("login", function () {
  let Fullserviceuser = companyFullservice();
  let fakevalues = fake();
  beforeEach(function () {
    cy.visit({
      url: loginPage.val,
      method: "GET",
      timeout: 10000,
    });
    //   after(function () {});
  });
  it("Verify that the user is able to login with valid credentials", function () {
    cy.intercept("login").as("loginSuccess");
    cy.url().should("include", "/login");
    cy.get(loginPage.emailField).clear().focus().type(Fullserviceuser.email);
    cy.get(loginPage.passwordField).type(Fullserviceuser.password);
    cy.get(loginPage.logInBtn).click();
    cy.wait("@loginSuccess");
    cy.url().should("include", "/projects");
    //cy.wait(1000);
    cy.get(projecstPage.projectLink).then(($title) => {
      expect($title.text()).to.contain(projecstPage.titleValue);

    });
    cy.get('.nav-menu > .js-nav-menu__trigger').click()
    cy.get(':nth-child(7) > .nav-menu__link').click()
    cy.url().should('eq',Cypress.config().baseUrl)

  });

  it("Verify that the user cannot log in with a valid email and an invalid password.", function () {
    cy.intercept("login").as("loginUnsuccessfull");
    cy.url().should("include", "/login");
    cy.get(loginPage.emailField).clear().focus().type(Fullserviceuser.email);
    cy.get(loginPage.passwordField).type(fakevalues.password);
    cy.get(loginPage.logInBtn).click();
    cy.get(loginPage.invalidcredentials).then(($validation) => {
      expect($validation.text()).to.contain(
        loginPage.invalidcredentialsMessage
      );
    });
  });

  it("Verify that the user cannot log in with an invalid email and a valid password", function () {
    cy.intercept("login").as("loginUnsuccessfull");
    cy.url().should("include", "/login");
    cy.get(loginPage.emailField).clear().focus().type(fakevalues.email);
    cy.get(loginPage.passwordField).type(fakevalues.password);
    cy.get(loginPage.logInBtn).click();
    cy.get(loginPage.invalidcredentials).then(($validation) => {
      expect($validation.text()).to.contain(
        loginPage.invalidcredentialsMessage
      );
    });
  });
  it("Verify that the user is unable to log in when the email and password fields are left empty",function(){
    cy.url().should("include", "/login");
    cy.get(loginPage.logInBtn).click();
  })
  it('Verify that the "Lost password?" link leads to the new passwords page', function(){
    cy.url().should("include", "/login");
    cy.get(loginPage.lostPassowrdLink).click()
    cy.url().should("include", "/password/new");
    cy.get('.password-box__header-text').then(($title)=>{
      expect($title.text()).contain('Forgot your Password?')
    })

  })
});
