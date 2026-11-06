import { expect, Locator, Page } from '@playwright/test';

export abstract class BasePage {
  protected constructor(protected readonly page: Page) {}

  protected async expectVisible(locator: Locator, description: string): Promise<void> {
    await expect(locator, `${description} should be visible`).toBeVisible();
  }
}
