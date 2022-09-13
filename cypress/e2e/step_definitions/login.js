import {Given, When, Then, And} from '@badeball/cypress-cucumber-preprocessor';

import locatorsPage from "../../Locators/Locators";

const login = new locatorsPage();

Given('Visit website for login page',()=>{
  cy.visit(login.url);
})

When('Click on Join Us Nav',()=>{
  cy.get(login.joinUsNav).click();
})

And('Click on Togglebar for Login',()=>{
  cy.get(login.toogleMenubar).click(); 
})


// Then('Login ', function(){

   

    
    
  
//     cy.wait(5000);
//     // cy.get(login.LoginNav).invoke('removeAttr', 'target').click();
//     cy.wait(5000);
   

   
//     let newUrl = '';
//     cy.window().then((win) => {
//     cy.stub(win, 'open').as('windowOpen').callsFake(url => {
//       newUrl = url;
//           });
//         })
        
//     cy.get(login.LoginNav).click({force: true})
//     cy.wait(5000);  
//     cy.get('@windowOpen').should('be.called');
    

//     cy.xpath('//*[@id="phone"]').type('01989');
//     // cy.xpath(login.countrySelected).click();
//     cy.wait(5000);
// })