import {
    Given,
    When,
    And,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";


import locatorsPage from "../../Locators/Locators";

const joinUs= new locatorsPage();

Given('Visit Website for Join Us Page',()=>{
    cy.visit(joinUs.url);
})
And('Click on JoinUs Navbar',()=>{
    cy.get(joinUs.joinUsNav).click();
})
And('Check button',()=>{
    cy.get(joinUs.checkAll).click();
})
When('Click on Analytics Navbar',()=>{
    cy.get(joinUs.navAnalytics).click();
})
// Then('Click on Apply',()=>{
//     cy.get(joinUs.apply2).click();
// })


