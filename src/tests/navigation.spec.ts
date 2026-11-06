import { test } from '../fixtures/test.fixture';

/**
 * Test cases for NCS Singapore home page navigation.
 * Author: bombeo
 */

test.describe('NCS Singapore home page navigation', () => {
    test.beforeEach(async ({ homePage }) => {
        await homePage.open();
    });

    test('Top Navigation menu is visible on the home page', async ({ homePage }) => {
        await homePage.expectAiProdNavMenuExists();
        await homePage.expectServicesNavMenuExists();
        await homePage.expectIndustriesNavMenuExists();
        await homePage.expectInsightsNavMenuExists();
        await homePage.expectPartnersNavMenuExists();
        await homePage.expectCareersNavMenuExists();
        await homePage.expectAboutUsNavMenuExists();
    });

    test('Top Navigation menus submenus are visible on the home page', async ({ homePage }) => {
        await homePage.expectCommanderAiSubMenuExists();
        await homePage.expectAppComEngSubMenuExists();
        await homePage.expectCentralGovtSubMenuExists();
        await homePage.expectPartnersSubMenuExists();
        await homePage.expectCareersSubMenuExists();
        await homePage.expectCodeOfConductSubMenuExists();
    });

});
