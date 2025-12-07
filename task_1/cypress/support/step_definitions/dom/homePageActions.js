/***********************************************************
 * This script contains actions doing on home page.
 * This is part of Page Object Model.
 * Owner: Vipin
 ***********************************************************/


const dashboard = '.style_menu-container__Ha_wV .style_menu-item--active__EF4Pb'
const markets = '[href="/markets"]'
const trade = '#trade-header-option-open-button > .style_menu-item__SLdA4'
const features = '#features-header-option-open-button > .style_menu-item__SLdA4'
const aboutUs = '#about-header-option-open-button > .style_menu-item__SLdA4'
const support = '#support-header-option-open-button > .style_menu-item__SLdA4'

export const topMenuOptionsExist = () => {
  //dashboard option
  cy.get(dashboard)
    .should('have.text', 'Dashboard')
    .and('have.attr', 'href')

  //markets optioon
  cy.get(markets)
    .should("be.exist")
    .and("be.visible");

  //features option
  cy.get(features)
    .should("be.exist")
    .and("be.visible")
    .and('contain.text', 'Features');

  //about us option
  cy.get(aboutUs)
    .should("be.exist")
    .and("be.visible")
    .and('contain.text', 'About Us');

  //support option
  cy.get(support)
    .should("be.exist")
    .and("be.visible")
    .and('contain.text', 'Support');

  //trade option: added samlpe how can we verify each details of the element
  cy.get(trade)
    .should("be.exist")
    .and("be.visible")
    .and('contain.text', 'Trade')
    .find('svg')
        .should('have.attr', 'xmlns', 'http://www.w3.org/2000/svg')
        .and('have.attr', 'fill', 'none')
        .and('have.attr', 'viewBox', '0 0 6 5')
    .click()
    cy.get('.p-8').should('be.visible'); //verifying dropdown opened
 
};
