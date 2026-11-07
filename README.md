# NCS Singapore – Playwright navigation tests

Sample Automated Test Run

https://github.com/user-attachments/assets/635782be-e61d-4044-a7cc-c39c128c0d23

Playwright + TypeScript project for checking the seven top-level navigation menus on
https://www.ncs.co/en-sg/. It follows Page Object Model (POM), with page objects
created and injected through a custom Playwright fixture.

## Test coverage

Exactly seven home-page visibility tests:

- AI Products & Platforms
- Services
- Industries
- Insights
- Partners
- Careers
- About Us

Submenus and submenu destinations are intentionally not tested.

## Fixture-based POM

Tests import `test` from `src/fixtures/test.fixture.ts` rather than directly from
`@playwright/test`. The custom `homePage` fixture constructs `HomePage` with the
built-in Playwright `page` fixture and makes it available to tests. Add future
page objects to the `PageFixtures` type and register them in `test.extend()`.

## Project structure

```text
src/
├── fixtures/
│   └── test.fixture.ts    Custom fixture that injects page objects
├── pages/
│   ├── BasePage.ts        Shared page-object functionality
│   └── HomePage.ts        Home page navigation locators/assertions
└── tests/
    └── navigation.spec.ts Seven navigation visibility tests
```

## Install and run

Requires Node.js 20+.

```bash
npm install
npx playwright install chromium
npm test
```

Other commands: `npm run test:headed`, `npm run test:debug`, `npm run report`.

Override the base URL with `BASE_URL=https://www.ncs.co/en-sg/ npm test`.

## GitHub Actions

The workflow runs on pushes and pull requests targeting `main` or `master`,
and supports manual execution. It installs Chromium, runs the tests, and uploads
HTML/JUnit reports and failure artifacts.
