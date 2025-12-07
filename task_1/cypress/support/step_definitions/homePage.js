/***********************************************************
 * This script contains step definations for the steps written in feature file.
 * Owner: Vipin
 ***********************************************************/

import {
  Before,
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";

import * as homeAct from "./dom/homePageActions";

Given("User is on Dashboard page", () => {
  cy.visit(Cypress.env("baseUrl"), { timeout: 120000 });
  cy.get('.style_logo__Z8paE')
    .should('have.attr', 'width', '166')
    .and('have.attr', 'height', '18')
    .and('be.visible');
});

Then("User can see top menu options", () => {
  homeAct.topMenuOptionsExist();
});

Then("User can click and verify the layout and structure is correct", () => {
  homeAct.verifyTopMenuOptions();
});

Given("User is on Vault {string} page", (vaultName) => {
  homeAct.clickVaultPage(vaultName);
});

