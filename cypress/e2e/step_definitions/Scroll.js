import {Given, When, Then, And,} from '@badeball/cypress-cucumber-preprocessor';
import locatorsPage from '../../Locators/Locators'

const scrollTest= new locatorsPage();

Given('khatabook scroll bottom to top',  () => {
    cy.visit(scrollTest.url);
    cy.scrollTo("bottom", { duration: 5000 });
    cy.scrollTo('top', {duration:5000});
    //------------------ correct---------------------------------
    // cy.scrollTo('bottom');
    // cy.wait(5000)
    // cy.scrollTo('top');
    


})

