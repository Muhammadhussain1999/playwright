import {page} from '@playwright/test'
export class LoginPage {
    constructor(page,context) {
        this.page = page
        this.context = context
    }
    LoginPageElements = {
        loginURL: '/login',
        loginPageHeading: 'auth-box__header-text',
        // signInBtn:"a.main-nav__link.main-nav__link--sign-in",
        signInBtn: '(//button[contains(text(), "Connect")])[1]',
        emailField: "[id='email']",
        alertBox: 'div[role="alert"] div~div',
        passwordField: "[id='user_password']",
        loginBtn: "button[name='button']",
        validationMessage: 'div.flash.flash--alert.flash--login',
        h1: '.auth-box__header-text',
//******************************Messsage Assertion**********************************/
        unsuccessfullMessage: 'Invalid Email or password.',
        loginPageMessage: 'Welcome back! Login below'
    }
    async navigateToURL(){
        await this.page.goto("/");
        await this.page.locator('//button[contains(., "Build my Feed now")]').click()
        await this.page.locator('//button[contains(., "Skip for now")]').click()
        await this.page.locator('//p[contains(., "Explore Now")]').click()
    }
    async clickSigninButton(){
        await this.page.locator(this.LoginPageElements.signInBtn).click()
    }
    async userTypesData(data) {
        await this.page.locator(this.LoginPageElements.emailField).type(data)
    } 
    // async alertBox() {
    //     // await this.page.locator(this.LoginPageElements.alertBox)
    //     let alertText;
        
    //     // Setup dialog event listener
    //     this.page.on('dialog', async (dialog) => {
    //         alertText = dialog.message();
    //         await dialog.accept();
    //     });

    //     // Trigger the action that opens the alert box
    //     await this.page.click(this.LoginPageElements.alertBox);

    //     // Wait for the alert box to be handled
    //     await this.page.waitForTimeout(1000); // Adjust the time as needed

    //     // Remove the dialog event listener
    //     this.page.removeListener('dialog');

    //     // Return the text from the alert box
    //     return alertText;
        
    // }
   
}