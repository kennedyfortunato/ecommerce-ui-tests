import { test as baseTest } from '@playwright/test';
import { HomePage } from '../page-objects/homePage';
import { CookiesComponent } from '../page-components/cookiesComponent';
import { SignInPage } from '../page-objects/signInPage';
import { CreateAccountPage } from '../page-objects/createAccountPage';
import { AccountCreatedPage } from '../page-objects/accountCreatedPage';

export const test = baseTest.extend<{ homePage: HomePage, cookiesComponent: CookiesComponent, signInPage: SignInPage, createAccountPage: CreateAccountPage, accountCreatedPage: AccountCreatedPage }>({
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
    cookiesComponent: async ({ page }, use) => {
        await use(new CookiesComponent(page));
    },
    signInPage: async ({ page }, use) => {
        await use(new SignInPage(page));
    },
    createAccountPage: async ({ page }, use) => {
        await use(new CreateAccountPage(page));
    },
    accountCreatedPage: async ({ page }, use) => {
        await use(new AccountCreatedPage(page));
    }
});