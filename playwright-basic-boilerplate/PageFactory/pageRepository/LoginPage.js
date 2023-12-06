import {expect,page} from '@playwright/test'
export class LoginPage{
    constructor(page,context){
        this.page=page
        this.context=context
    }
    LoginPageElements ={
        loginURL: '/login',
        loginPageHeading: 'auth-box__header-text',
        signInBtn:"a.main-nav__link.main-nav__link--sign-in",
        emailField: "[id='user_email']",
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
    }
    async clickSigninButton(){
        await this.page.locator(this.LoginPageElements.signInBtn).click()
    }
   
}