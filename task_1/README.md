# Cypress Test Suite

## Overview

This Cypress test suite provides comprehensive end-to-end testing for the Multibank trading platform (https://trade.multibank.io/) using Behavior-Driven Development (BDD) with Cucumber and the Page Object Model (POM) design pattern.

**Owner:** Vipin

## Table of Contents

- [Technology Stack](#technology-stack)
- [Directory Structure](#directory-structure)
- [Getting Started](#getting-started)
- [Running Tests](#running-tests)
- [Test Architecture](#test-architecture)
- [Test Coverage](#test-coverage)
- [Writing Tests](#writing-tests)
- [Configuration](#configuration)
- [Reporting](#reporting)
- [Best Practices](#best-practices)

## Technology Stack

- **Cypress:** v14.5.0 - E2E testing framework
- **Cucumber:** @badeball/cypress-cucumber-preprocessor v22.1.0 - BDD support
- **Testing Library:** @testing-library/cypress v10.0.3 - Enhanced DOM queries
- **Mochawesome:** Reporting and test result generation
- **esbuild:** Fast preprocessing of test files

## Directory Structure

```
cypress/
├── e2e/
│   └── FeatureFiles/           # Gherkin feature files
│       ├── contentValidation.feature
│       ├── homePage.feature
│       └── tradingFunctionality.feature
├── fixtures/                   # Test data files
│   └── example.json
├── plugins/                    # Cypress plugins (legacy)
├── reports/                    # Mochawesome test reports
├── screenshots/                # Test failure screenshots
├── support/                    # Custom commands and configuration
│   ├── commands.js            # Custom Cypress commands
│   ├── e2e.js                 # Global configuration
│   └── step_definitions/      # Cucumber step implementations
│       ├── contentValidation.js
│       ├── homePage.js
│       ├── tradingFunctinality.js
│       └── dom/               # Page Object Model actions
│           ├── contentValidationActions.js
│           ├── homePageActions.js
│           └── tradingFunctionalityAction.js
└── videos/                     # Test execution videos (disabled)
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- yarn package manager

### 1. Clone the Repository

```bash
git clone git@github.com:Safulet/cypress-sanity-framework.git
cd cypress-sanity-framework
```

### 2. Install Node.js

- **Download**: [Node.js Official Website](https://nodejs.org/en/download/)
- **Recommended Version**: v24.2.0+

Verify installation:

```bash
node --version
# Expected output: v24.2.0 (or higher)
```

### 3. Install Yarn

```bash
sudo npm install --global yarn@1.22.22
```

Verify installation:

```bash
yarn --version
# Expected output: 1.22.22
```

## ⚡ Quick Setup

### 1. Install Dependencies

```bash
yarn install
```

## Running Tests

### Open Cypress Test Runner (Interactive Mode)

```bash
yarn cypress open
```

This opens the Cypress GUI where you can:

- Select specific feature files to run
- Selecy the Browser to run tests
- Watch tests execute in real-time
- Debug test failures interactively

### Run Tests Headlessly (CI/CD Mode)

```bash
yarn cypress run 
yarn cypress run --browser <browser-name> //  browser like: chrome, firefox, edge etc
```

This executes all tests in headless mode, suitable for continuous integration pipelines.

### Generate Test Reports

```bash
# Merge multiple JSON reports
yarn report:merge

# Generate HTML report from merged JSON
yarn report:generate
```

## Test Architecture

### BDD with Cucumber

Tests are written in Gherkin syntax using Given-When-Then structure for readability:

```gherkin
Feature: Home Page Navigation

  Scenario: Access the UI and click on navigation and layouts
    Given user should visit the Dashboard
    When top menu options should exist
    Then All SVG icons should have src attribute
```

### Page Object Model (POM)

The test suite follows a three-layer architecture:

1. **Feature Files** (`e2e/FeatureFiles/*.feature`) - Define test scenarios in plain English
2. **Step Definitions** (`support/step_definitions/*.js`) - Map Gherkin steps to code
3. **Action Files** (`support/step_definitions/dom/*Actions.js`) - Contain actual Cypress commands

**Example Flow:**

```
homePage.feature
  → homePage.js (step definitions)
    → homePageActions.js (DOM interactions)
```

### Benefits of This Architecture

- **Maintainability:** DOM selectors centralized in action files
- **Reusability:** Action functions can be shared across tests
- **Readability:** Non-technical stakeholders can understand feature files
- **Separation of Concerns:** Business logic separated from technical implementation

## Test Coverage

### 1. Home Page Navigation (`homePage.feature`)

**What it tests:**

- Dashboard accessibility
- Top navigation menu visibility
- Menu items: Dashboard, Markets, Trade, Features, About Us, Support
- SVG icons and attributes validation
- Logo dimensions (166x18)

### 2. Content Validation (`contentValidation.feature`)

**What it tests:**

- Marketing banners at page bottom
- Banner carousel functionality
- Image loading validation
- Download section links (App Store, Google Play)
- About Us section rendering

### 3. Trading Functionality (`tradingFunctionality.feature`)

**What it tests:**

- Spot trading tab interaction
- Trading pair filtering (USDT, BTC pairs)
- Pair visibility and naming conventions
- Category filtering ("All" filter activation)

### Selector Strategy

The test suite uses a mix of selector types:

- **CSS Classes:** `.style_menuItem__abc123`
- **IDs:** `#trade-header-option-open-button`
- **Attributes:** `[href="/markets"]`
- **Data Attributes:** `[data-testid="trading-pair"]`
- **Pseudo-selectors:** `.menu-item:nth-child(2)`

**Best Practice:** Define selectors as constants at the top of action files for easy maintenance.

## Configuration

### Main Configuration (`cypress.config.js`)

Key settings:

```javascript
{
  baseUrl: "https://trade.multibank.io/",
  viewportWidth: 1440,
  viewportHeight: 1000,
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 120000,
  chromeWebSecurity: false,
  testIsolation: false,
  video: false
}
```

### Global Configuration (`support/e2e.js`)

- **Uncaught Exception Handler:** Prevents test failures from application exceptions
- **Testing Library Integration:** Enables `cy.findByText()`, `cy.findByRole()`, etc.
- **testIdAttribute:** Configured as `data-testid`

### Custom Commands (`support/commands.js`)

Add custom Cypress commands here:

```javascript
Cypress.Commands.add('login', (username, password) => {
  cy.get('#username').type(username);
  cy.get('#password').type(password);
  cy.get('button[type="submit"]').click();
});
```

## Reporting

### Mochawesome Reports

Reports are generated in the `reports/` directory.

**Configuration:**

- Reporter: Mochawesome
- Output: `cypress/reports/html/index.html`
- Charts and JSON disabled in current config

**Enable Reporting:**

Update `cypress.config.js`:

```javascript
reporter: "mochawesome",
reporterOptions: {
  reportDir: "cypress/reports",
  overwrite: false,
  html: true,
  json: true
}
```

## Best Practices

### 1. Keep Feature Files Simple

- Use plain English, avoid technical jargon
- One scenario per logical user journey
- Keep scenarios focused and independent

### 2. DRY Principle in Actions

- Reuse action functions across step definitions
- Extract common patterns into helper functions
- Centralize selectors at file top

### 3. Robust Selectors

- Prefer `data-testid` attributes for stability
- Avoid selectors tied to styling (`.style_*` classes may change)
- Use semantic selectors where possible

### 4. Assertions

- Chain assertions using `.and()` for efficiency
- Be specific: check text, visibility, and attributes
- Validate image loading using `naturalWidth`

### 5. Timeouts

- Use appropriate timeouts for slow operations
- Add explicit waits for dynamic content: `cy.wait('@apiCall')`
- Consider network conditions when setting timeouts

### 6. Test Independence

- Each test should be able to run standalone
- Don't rely on execution order
- Clean up state if test isolation is disabled

### 7. Error Handling

- Use global uncaught exception handler for known app errors
- Log errors for debugging without failing tests unnecessarily
- Add meaningful error messages to assertions

## Troubleshooting

### Tests Failing Due to Timeouts

- Increase `pageLoadTimeout` in `cypress.config.js`
- Add explicit waits: `cy.wait(2000)` or intercept API calls
- Check network conditions (slow 3G, etc.)

### Element Not Found

- Verify selector is correct using browser DevTools
- Check if element is inside iframe
- Ensure element is visible (not hidden by CSS)
- Wait for dynamic content to load

### Flaky Tests

- Add explicit waits for animations/transitions
- Use `cy.intercept()` to wait for API responses
- Avoid `cy.wait(time)`, prefer waiting for specific conditions
- Enable test isolation if tests interfere with each other

## Resources

- [Cypress Documentation](https://docs.cypress.io/)
- [Cucumber Preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor)
- [Testing Library Cypress](https://testing-library.com/docs/cypress-testing-library/intro/)
- [Mochawesome Reporter](https://github.com/adamgruber/mochawesome)

## Support

For questions or issues related to this test suite, contact:

**Owner:** Vipin

---

**Last Updated:** December 2025
