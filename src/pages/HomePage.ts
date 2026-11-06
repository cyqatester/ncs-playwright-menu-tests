import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {

    //main Navigation
    readonly aiProdNavMenu: Locator;
    readonly servicesNavMenu: Locator;
    readonly industriesNavMenu: Locator;
    readonly insightsNavMenu: Locator;
    readonly partnersNavMenu: Locator;
    readonly careersNavMenu: Locator;
    readonly aboutUsNavMenu: Locator;

    //Navigation menu submenus
    readonly comamanderAISubMenu: Locator;
    readonly appComEngineeringSubMenu: Locator;
    readonly centralGovtSubMenu: Locator;
    readonly partnersSubMenu: Locator;
    readonly careersSubMenu: Locator;
    readonly codeOfConductSubMenu: Locator;

    constructor(page: Page) {
      super(page);

      this.aiProdNavMenu = this.page.locator('.nav-item-wrapper').filter({ has: this.page.getByRole('button', { name: 'AI Products & Platforms', }), });
      this.servicesNavMenu = this.page.locator('.nav-item-wrapper').filter({ has: this.page.getByRole('button', { name: 'Services', }), });
      this.industriesNavMenu = this.page.locator('.nav-item-wrapper').filter({ has: this.page.getByRole('button', { name: 'Industries', }), });
      this.insightsNavMenu = this.page.locator('.nav-item-wrapper').filter({ has: this.page.getByRole('button', { name: 'Insights', }), });
      this.partnersNavMenu = this.page.locator('.nav-item-wrapper').filter({ has: this.page.getByRole('button', { name: 'Partners', }), });
      this.careersNavMenu = this.page.locator('.nav-item-wrapper').filter({ has: this.page.getByRole('button', { name: 'Careers', }), });
      this.aboutUsNavMenu = this.page.locator('.nav-item-wrapper').filter({ has: this.page.getByRole('button', { name: 'About Us', }), });

      this.comamanderAISubMenu = page.getByRole('link', { name: 'CommanderAI' }).first();
      this.appComEngineeringSubMenu = page.getByRole('button', { name: 'Applications and Communications Engineering (ACE)' }).first();
      this.centralGovtSubMenu = page.getByRole('link', { name: 'Central Government' }).first();
      this.partnersSubMenu = page.getByRole('link', { name: 'Partners' }).first();
      this.careersSubMenu = page.getByRole('link', { name: 'Career stories' }).first();
      this.codeOfConductSubMenu = page.getByRole('link', { name: 'Code of Conduct' }).first();
    }

    async open(): Promise<number | undefined> {
        const response = await this.page.goto('/', { waitUntil: 'domcontentloaded' });
        return response?.status();
    }

    async expectAiProdNavMenuExists(): Promise<void> {
        await expect(this.aiProdNavMenu).toBeVisible();
    }

    async expectServicesNavMenuExists(): Promise<void> {
        await expect(this.servicesNavMenu).toBeVisible();
    }

    async expectIndustriesNavMenuExists(): Promise<void> {
        await expect(this.industriesNavMenu).toBeVisible();
    }

    async expectInsightsNavMenuExists(): Promise<void> {
        await expect(this.insightsNavMenu).toBeVisible();
    }

    async expectPartnersNavMenuExists(): Promise<void> {
        await expect(this.partnersNavMenu).toBeVisible();
    }

    async expectCareersNavMenuExists(): Promise<void> {
        await expect(this.careersNavMenu).toBeVisible();
    }

    async expectAboutUsNavMenuExists(): Promise<void> {
        await expect(this.aboutUsNavMenu).toBeVisible();
    }

    async expectCommanderAiSubMenuExists(): Promise<void> {
        await this.aiProdNavMenu.hover();
        await expect(this.comamanderAISubMenu).toBeVisible();
    }

    async expectAppComEngSubMenuExists(): Promise<void> {
        await this.servicesNavMenu.hover();
        await expect(this.appComEngineeringSubMenu).toBeVisible();
    }

    async expectCentralGovtSubMenuExists(): Promise<void> {
        await this.industriesNavMenu.hover();
        await expect(this.centralGovtSubMenu).toBeVisible();
    }

    async expectPartnersSubMenuExists(): Promise<void> {
        await this.partnersNavMenu.hover();
        await expect(this.partnersSubMenu).toBeVisible();
    }

    async expectCareersSubMenuExists(): Promise<void> {
        await this.careersNavMenu.hover();
        await expect(this.careersSubMenu).toBeVisible();
    }

    async expectCodeOfConductSubMenuExists(): Promise<void> {
        await this.aboutUsNavMenu.hover();
        await expect(this.codeOfConductSubMenu).toBeVisible();
    }
}
