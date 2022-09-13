
import {
    Given,
    When,
    And,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
import locatorsPage from "../../Locators/Locators";

const locatorAbout= new locatorsPage();

Given('khatabook Website Visite',function(){
    cy.visit(locatorAbout.url);
})

When('Hover About Us Navbar',()=>{
    cy.get(locatorAbout.aboutUs).trigger('mouseover');
    cy.wait(5000);
})

And('Click on About Us navbar', ()=>{
    cy.get(locatorAbout.aboutUs).click();
})

And('Click on First Video',()=>{
    cy.get(locatorAbout.videoAbout).click();
})

And('Click on youtube Symbol', ()=>{
    cy.get(locatorAbout.videoYoutube).click();
})
And('Click on Men Right Arrow', ()=>{
    cy.get(locatorAbout.menRightArrow).click();
})
Then('Click on Men Left Arrow', ()=>{
    cy.get(locatorAbout.menLeftArrow).click();
})



  