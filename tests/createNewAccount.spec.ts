import { expect } from '@playwright/test';
import { test } from '../fixtures/resources-fixture';

test.beforeEach(async ({ homePage, cookiesComponent }) => {
    await homePage.navigate();
    expect(homePage.homePageTitle());
    await cookiesComponent.acceptAllCookies();
});

test('Create new account', async ({ homePage, signInPage, createAccountPage, accountCreatedPage }) => {
    await homePage.clickSignInButton();

    expect(signInPage.signInPageTitle());
    await signInPage.newCustomerButtonClick();

    expect(createAccountPage.createAccountPageTitle());
    await createAccountPage.fillOutForm('Lorem', 'Ipsum', '01', '01', '2000', '01179277225', 'lorem ipsum', 'lorem.ipsum@test.com', 'LoremIpsum');
});

test.afterEach(async ({ homePage }) => {
    await homePage.close();
});