import { test as baseTest} from '@playwright/test';
import { LoginPage } from '@pages/LoginPage';


const test = baseTest.extend({
    loginPage: async ({ page }, use) => {
      await use(new LoginPage(page));
    }})

export default test;