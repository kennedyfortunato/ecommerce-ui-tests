import { expect } from '@playwright/test';
import { test } from '../fixtures/resources-fixture';

test.beforeEach(async ({ homePage, cookiesComponent }) => {
    await homePage.navigate();
    expect(homePage.homePageTitle());
    await cookiesComponent.acceptAllCookies();
});

test('Verify landing page header elements', async ({ homePage }) => {
    await expect(homePage.menuButon).toBeVisible();
    await expect(homePage.searchButton).toBeVisible();
    await expect(homePage.signInButton).toBeVisible();
    await expect(homePage.bagButton).toBeVisible();
});

test.afterEach(async ({ homePage }) => {
    await homePage.close();
});