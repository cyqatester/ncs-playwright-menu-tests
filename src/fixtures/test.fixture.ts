import { test as base, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

type PageFixtures = {
  homePage: HomePage;
};

/** Central fixture for Page Object Model classes. */
export const test = base.extend<PageFixtures>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },
});

export { expect };
