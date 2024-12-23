import { expect, type Page } from '@playwright/test';

export class SignInPage {
    constructor(private page: Page) { }

    readonly newCustomerButton = this.page.getByRole('link', { name: ' I\'m a new customer' });
    readonly userNameInput = this.page.locator('//input[@id="username"]');
    readonly passwordInput = this.page.locator('//input[@id="password"]');
    readonly rememberMeCheckBox = this.page.locator('//input[@id="rememberMe"]');
    readonly signInButton = this.page.locator('//button[@id="signInButton"]');
    readonly loginForgottenDetailsLink = this.page.locator('//a[@data-ga-tracking-id="login_forgottenDetailsLink"]');

    async signIn(email: string, password: string) {
        await this.userNameInput.fill(email);
        await this.passwordInput.fill(password);
        await this.signInButton.click();
    }

    async newCustomerButtonClick() {
        await this.newCustomerButton.click();
    }

    async rememberMeCheckBoxClick() {
        await this.rememberMeCheckBox.click();
    }

    async loginForgottenDetailsLinkClick() {
        await this.loginForgottenDetailsLink.click();
    }

    async signInPageTitle() {
        await expect(this.page).toHaveTitle('Sign In | Simply Be');
    }
}