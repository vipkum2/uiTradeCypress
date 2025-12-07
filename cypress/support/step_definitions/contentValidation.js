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

import * as conAct from "./dom/contentValidationActions";

When("User can see marketing banners at bottom of the page", () => {
  conAct.checkBanners();
});

Then("User can verify the download sections", () => {
  conAct.downloadLinks();
});

Then("User can render About Us section", () => {
  conAct.aboutUs();
});
