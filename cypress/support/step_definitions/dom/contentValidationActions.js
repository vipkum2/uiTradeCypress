/***********************************************************
 * This script contains actions doing on home page.
 * This is part of Page Object Model.
 * Owner: Vipin
 ***********************************************************/


export const checkBanners = () => {
  //verify marketing banners at bottom of the page
  cy.scrollTo('bottom');
  cy.get('.style_dots__qVNOv').should('be.visible');
  cy.get('.slick-active > :nth-child(1) > .style_container__hCH7M > .style_image__kiucM')
    .should('be.visible')
    .and(($img) => {
      // check that the image has loaded
      expect($img[0].naturalWidth).to.be.greaterThan(0);
    });
};

export const downloadLinks = () => {
  //verify download section links: apple store and google play store
  //apple store
  cy.get('.style_buttons-container__9n_JQ').children('a').eq(0)
    .should('have.attr', 'href')
    .and('include', 'https://apps.apple.com/ae/app/multibank-io-buy-btc-crypto/id1592119946');

  //google play store
  cy.get('.style_buttons-container__9n_JQ').children('a').eq(1)
    .should('have.attr', 'href')
    .and('include', 'https://play.google.com/store/apps/details?id=com.multibank.app&pli=1');
}

export const aboutUs = () => {
  //verify about us section link
  cy.scrollTo('top');
  cy.get('#about-header-option-open-button > .style_menu-item__SLdA4')
    .click({timeout: 10000});
  cy.get('.style_text__lBP6_',{timeout:10000})
    .should('be.visible')
    .first()
    .should('contain.text', 'Why Multibank?')
    .click()
  cy.get('.custom-container .heading-5')
    .should('be.visible')
    .and('contain.text', 'ABOUT US');
}