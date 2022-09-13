import {Given, When, And, Then} from '@badeball/cypress-cucumber-preprocessor';
import locatorsPage from '../../Locators/Locators';

const newsRoom= new locatorsPage();

Given('Visit Website for NewsRoom',function(){
    cy.visit(newsRoom.url);
    

})

And('Click on Newsroom',()=>{
    cy.get(newsRoom.newsRoomNav).click();
})