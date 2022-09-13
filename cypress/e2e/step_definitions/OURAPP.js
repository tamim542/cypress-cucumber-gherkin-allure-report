import { Given, When, Then, And } from '@badeball/cypress-cucumber-preprocessor';
import locatorsPage from "../../Locators/Locators";

const ourApp= new locatorsPage();

Given('visit Website for ourapp',function(){
    cy.visit(ourApp.url);
})
And('Click on ourApp',()=>{
    cy.get(ourApp.ourAppNav).click();
    cy.wait(5000);
})
And('Click first Learn More',()=>{
    cy.get(ourApp.learnMoreOne).click();
    cy.wait(5000);
})
And('Click second Learn More',()=>{
    cy.get(ourApp.learnMoreTwo).click();
    cy.wait(5000);
})
   
   
  
   
