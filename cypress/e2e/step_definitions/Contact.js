import {
    Given,
    When,
    And,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
import locatorsPage from '../../Locators/Locators';

const locatorContact = new locatorsPage();

Given('khatabook web site',()=>{
    cy.visit(locatorContact.url);

})

And('khatabook contact page',()=>{
   
    cy.get(locatorContact.ContactNav).click();

})

Then('Click on Facebook Icon',()=>{
    cy.get(locatorContact.facebook).click();
})

And('Type email in the email input field',()=>{
    cy.get(locatorContact.facebookEmail).type('tamim123@gmail.com');
})

And('Type password in the password input field',()=>{
    cy.get(locatorContact.facebookPass).type('takla');
})
And('Click on login button',()=>{
    cy.get(locatorContact.facebookLoginButton).click();
})


   
   
   

