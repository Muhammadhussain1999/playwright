import {test} from '@lib/BaseTest';
import {expect} from '@playwright/test'
test(`@Smoke login page`, async ({ loginPage }) => {
    await loginPage.navigateToURL();
    await loginPage.clickOnLoginMainButton()
    await loginPage.userTypesData('test@2')
    const alertMessage = loginPage.alertBox()
    expect(alertMessage).toBe('must be a valid email')
}, 5000);