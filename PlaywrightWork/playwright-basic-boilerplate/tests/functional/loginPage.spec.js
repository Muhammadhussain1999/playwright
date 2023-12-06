import test from '@lib/BaseTest';

test(`@Smoke login page`, async ({ loginPage }) => {
    await loginPage.navigateToURL();
    await loginPage.clickOnLoginMainButton()
});