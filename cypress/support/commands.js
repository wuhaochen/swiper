// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
Cypress.Commands.add('getNextSlide', { prevSubject: 'optional' }, () => {
  return cy.get('.swiper-button-next');
});
Cypress.Commands.add('getPrevSlide', { prevSubject: 'optional' }, () => {
  return cy.get('.swiper-button-prev');
});
Cypress.Commands.add('nextSlide', { prevSubject: 'optional' }, () => {
  cy.getNextSlide().click();
});
Cypress.Commands.add('prevSlide', { prevSubject: 'optional' }, () => {
  cy.getPrevSlide().click();
});
// subject, options
Cypress.Commands.add('getActiveSlide', { prevSubject: 'optional' }, () => {
  return cy.get('.swiper-slide-active');
});

Cypress.Commands.add('getSliderWrapper', { prevSubject: 'optional' }, () => {
  return cy.get('.swiper-wrapper');
});

Cypress.Commands.add('getSliderContainer', { prevSubject: 'optional' }, () => {
  return cy.get('.swiper-container');
});

Cypress.Commands.add('getSlide', { prevSubject: 'optional' }, (subject, slideIndex) => {
  return cy.get(`.swiper-slide:nth-child(${slideIndex})`);
});
Cypress.Commands.add('getSlides', { prevSubject: 'optional' }, () => {
  return cy.get(`.swiper-slide`);
});

// Cypress.Commands.add('swipeLeft', () => {
//   cy.get('.swiper-slide-active')
//     .trigger('mousedown', { which: 1 }) // start capture
//     .trigger('mousemove', 'left') // register start position
//     .trigger('mousemove', 'right') // register end position
//     .wait(0) // wait for requestAnimationFrame to invoke fireOnMove
//     .trigger('mouseup'); // end capture
// });

// Cypress.Commands.add('swipeRight', () => {
//   cy.get('.swiper-slide-active')
//     .trigger('mousedown', { position: 'left' })
//     .trigger('mousemove', { clientX: 100, clientY: 275 })
//     .trigger('mouseup', { force: true });
// });
