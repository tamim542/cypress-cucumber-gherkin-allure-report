class locatorsPage{

    url="https://khatabook.com/";
    

    joinUs=".MuiList-root > :nth-child(5) > .MuiTypography-root";
    toogleMenubar=".navbar-toggler-icon";
   // login=".nav-link > button"
    calculator=".d-flex > .nav-link";
    calculatorSearch="#searchtext";
    SearchBtnClick=".search-btn";
    nameInputField='#name';
    phoneInputField='#mobile-number';
    emailInputField='#email';
    checkbox='#Yes';
    submit='#subscribe_tally';

    //----------- About Us page locators--------------------------

    aboutUs=".MuiList-root > :nth-child(2) > .MuiTypography-root";
   
    videoAbout=".vp-1";
    videoYoutube="#yt";
    menRightArrow="#carouselExampleIndicators > .carousel-control-next > .carousel-arrow";
    menLeftArrow="#carouselExampleIndicators > .carousel-control-prev > .carousel-arrow";


    //----------- News Room  page locators--------------------------

    newsRoomNav=".MuiList-root > :nth-child(4) > .MuiTypography-root";


   //----------- Our App  page locators--------------------------


   ourAppNav=".MuiList-root > :nth-child(3) > .MuiTypography-root"; 
   learnMoreOne=":nth-child(1) > .css-v9vgrn > .MuiGrid-grid-xs-4 > .MuiGrid-container > :nth-child(4) > .MuiLink-root > .MuiTypography-root";

   learnMoreTwo=":nth-child(3) > .css-v9vgrn > .MuiGrid-grid-xs-4 > .MuiGrid-container > :nth-child(4) > .MuiLink-root > .MuiTypography-root";


   //---------------- join us --------------------------------------

   joinUsNav=".MuiList-root > :nth-child(5) > .MuiTypography-root";

   checkAll="#all";
   navAnalytics="#Analytics";
   apply2=":nth-child(2) > .card-body > .btn";
  //  apply2="(//a[@class='btn btn-outline-danger'])[1]";

   //------------------ Login --------------------------------------
 
  LoginNav=".nav-link > button"
 // countrySelected='//*[@id="country-select-demo"]';
  countrySelected='(//button[@type="button"])[1]';
  //countrySelected='[@id="root"]/div/div/div[2]/div/div[1]/form/div[2]/div/div/button/span';

  //------------------- contact us----------------------------------

  ContactNav=":nth-child(7) > .MuiTypography-root";
  facebook=".col-sm-3 > .list-unstyled > :nth-child(1) > a";
  facebookEmail=":nth-child(1) > .rtxb060y > .qi72231t";
  facebookPass=":nth-child(2) > .rtxb060y > .qi72231t";
  facebookLoginButton=":nth-child(3) > :nth-child(1) > .qi72231t > .jez8cy9q"
  twitter=".col-sm-3 > .list-unstyled > :nth-child(2) > a";


}

export default locatorsPage;
