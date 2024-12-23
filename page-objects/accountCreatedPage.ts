import { type Page } from '@playwright/test';

export class AccountCreatedPage {
    constructor(private page: Page) { }

    readonly successfulAccountRegistrationTitle = this.page.getByText('Account created !');
    readonly startShoppingNowButton = this.page.locator('//button[@id="continue-shopping-link"]');

    
}