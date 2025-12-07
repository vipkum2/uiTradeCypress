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

import * as tradeAct from "./dom/tradingFunctionalityAction";

When("User click on Spot tab", () => {
  tradeAct.spotClick();
});

Then("User can verify different trading pairs", () => {
  tradeAct.verifyPairs();
});
