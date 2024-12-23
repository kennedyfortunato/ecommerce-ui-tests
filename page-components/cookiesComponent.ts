import { type Locator, type Page } from "@playwright/test";

export class CookiesComponent {
    constructor(private page: Page) { }

    readonly cookiesSettingsButton: Locator = this.page.getByRole('button', { name: 'Manage cookies' });
    readonly acceptAllCookiesButton: Locator = this.page.getByRole('button', { name: 'Accept All Cookies' });

    async openCookiesSettings() {
        await this.cookiesSettingsButton.click();
    }

    async acceptAllCookies() {
        await this.acceptAllCookiesButton.click();
    }
}