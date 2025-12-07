/***********************************************************
 * This script contains actions doing on home page.
 * This is part of Page Object Model.
 * Owner: Vipin
 ***********************************************************/


export const spotClick = () => {
  //click on Spot tab and check ALL is focused
  cy.get(':nth-child(2) > .style_label-badge-wrapper__MWCxl:visible').click();
  cy.get('#all > span')
    .should('have.text', 'All')
  cy.get('#undefined-base-th > div > span').should('have.text', 'Pair');
};

export const verifyPairs = () => {
  //check different trading pairs are visible
  cy.get('#usdt > span')
    .should('have.text', 'USDT')
    .click({timeout: 10000});
  // check Pairs with USDT only
  cy.get('.style_row__BPgMJ .asset-list_icons__Uy4Cz').parent().each((el, index, list) => {
    expect(el.text()).to.include('-USDT')
    if(index < 10) {expect(el).to.be.visible}  // checking visibility for first 10 elements only
  })

   cy.get('#btc > span')
    .should('have.text', 'BTC')
    .click({timeout: 10000});
  // check Pairs with BTC only
  cy.get('.style_row__BPgMJ .asset-list_icons__Uy4Cz').parent().each((el, index, list) => {
    expect(el.text()).to.include('-BTC');
    if(index < 10) {expect(el).to.be.visible}  // checking visibility for first 10 elements only
  })

}