import { test } from '../fixtures/test.fixture';

/**
 * Test cases for NCS Singapore home page navigation.
 * Author: bombeo
 */

test.describe('NCS Singapore home page navigation', () => {
    
    test.beforeEach(async ({ homePage }) => {
        const statusCode = await homePage.open();

        console.log('HTTP Status Code:', statusCode);

        if (statusCode === 403) {
          test.skip(true, 'Website returned HTTP 403 - skipping all navigation tests.');
        }
    });

    test('Top Navigation menu is visible on the home page', async ({ homePage }) => {
        await homePage.expectAiProductsNavMenuExists();
        await homePage.expectServicesNavMenuExists();
        await homePage.expectIndustriesNavMenuExists();
        await homePage.expectInsightsNavMenuExists();
        await homePage.expectPartnersNavMenuExists();
        await homePage.expectCareersNavMenuExists();
        await homePage.expectAboutUsNavMenuExists();
    });

    test('Top Navigation menus submenus are visible on the home page', async ({ homePage }) => {
        await homePage.expectasProductsSubMenuExists();
        await homePage.expectServicesSubMenusExists();
        await homePage.expectIndustriesSubMenusExists();     
        await homePage.expectPartnersSubMenuExists();
        await homePage.expectCareersSubMenusExists();
        await homePage.expectAboutUsSubMenusExists();
    });

});
