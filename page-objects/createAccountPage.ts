import { expect, Page } from '@playwright/test';

export class CreateAccountPage {
    constructor(private page: Page) { }

    readonly salutationMrOption = this.page.locator('//select[@id="salutation"]');
    readonly salutationMissOption = this.page.locator('//option[@value="Miss"]');
    readonly salutationMrsOption = this.page.locator('//option[@value="Mrs"]');
    readonly salutationMsOption = this.page.locator('//option[@value="Ms"]');
    readonly firstNameInput = this.page.locator('//input[@id="firstName"]');
    readonly lastNameInput = this.page.locator('//input[@id="lastName"]');
    readonly birthDayInput = this.page.locator('//input[@id="day"]');
    readonly birthMonthInput = this.page.locator('//input[@id="month"]');
    readonly birthYearInput = this.page.locator('//input[@id="year"]');
    readonly phoneNumberInput = this.page.locator('//input[@id="phoneNumber"]');
    readonly addressInput = this.page.locator('//input[@id="address"]');
    readonly adressSearchItem = this.page.locator('//div[@id="GB|RM|B|3898830|A1|ENG"]');
    readonly emailInput = this.page.locator('//input[@id="email"]');
    readonly passwordInput = this.page.locator('//input[@id="password"]');
    readonly emailConsentYesInput = this.page.locator('//input[@id="emailOptIn"]');
    readonly emailConsentNoInput = this.page.locator('//input[@id="emailOptOut"]');
    readonly postConsentYesInput = this.page.locator('//input[@id="postOptIn"]');
    readonly postConsentNoInput = this.page.locator('//input[@id="postOptOut"]');
    readonly phoneConsentYesInput = this.page.locator('//input[@id="phoneOptIn"]');
    readonly phoneConsentNoInput = this.page.locator('//input[@id="phoneOptOut"]');
    readonly continueButton = this.page.locator('//button[@data-ga-tracking-id="registration_continueToDeliveryButton"]');

    async createAccountPageTitle() {
        await expect(this.page).toHaveTitle('Create an account | Simply Be');
    }

    async fillOutForm(firstName: string, lastName: string, birthDay: string, birthMonth: string, birthYear: string, phoneNumber: string, address: string, email: string, password: string) {
        await this.salutationMrOption.selectOption('Mr');
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.birthDayInput.fill(birthDay);
        await this.birthMonthInput.fill(birthMonth);
        await this.birthYearInput.fill(birthYear);
        await this.phoneNumberInput.fill(phoneNumber);
        await this.addressInput.fill(address);
        await this.adressSearchItem.click();
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.emailConsentNoInput.click();
        await this.postConsentNoInput.click();
        await this.phoneConsentNoInput.click();
        await this.continueButton.click();
    }
}