import { expect, type Page } from '@playwright/test';

export class HomePage {
    constructor(private page: Page) { }

    readonly menuButon = this.page.locator('//button[@id="hfMenuBtn"]');
    readonly searchButton = this.page.locator('//button[@id="hfSearchBtn"]');
    readonly signInButton = this.page.getByRole('button', { name: 'Sign in' });
    readonly bagButton = this.page.getByTestId('bagbutton-button');

    async navigate() {
        await this.page.goto('https://www.simplybe.co.uk');
    }

    async homePageTitle() {
        await expect(this.page).toHaveTitle('Simply Be: Women\'s Fashion & Plus Size Clothing in Sizes 10-32');
    }

    async clickSignInButton() {
        await this.signInButton.click();
    }

    async close() {
        await this.page.close();
    }
}