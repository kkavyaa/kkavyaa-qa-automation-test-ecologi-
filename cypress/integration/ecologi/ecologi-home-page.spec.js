import homePage from "../pageObjects/homePage.js";

describe("Verify the Home Page", () => {

    it('Launch the Application', () => {
        cy.visit("/");
    });

    it('Verify Page Container is Displayed', () => {
        homePage.verifyContainerHeaderIsDisplayed();
    });

    it("Verify Hero Title is Displayed", () => {
        homePage.verifyHeroTitleAndSubTitleIsDisplayed();
    });

    it('Verify Hero Image is Displayed', () => {
        homePage.verifyHeroPostImageIsDisplayed();
    });

    it('Verify Hero Post displayed', () => {
        homePage.verifyHeroPostIsDisplayed();
    });

    it('Verify Hero Date is displayed', () => {
        homePage.verifyHeroDateIsdisplayed();
    });

    it('Verify Hero Description is displayed', () => {
        homePage.verifyHeroDescriptionIsDisplayed();
    });

    it('Verify Hero Author Picture is displayed', () => {
        homePage.verifyHeroAuthorPictureIsDisplayed();
    });

    it('Verify Hero Author is displayed', () => {
        homePage.verifyHeroAuthorIsDisplayed();
    });

    it('Navigate to Hero Post Page', () => {
        homePage.navigateToHeroPostPage();
    });

    it('Verify More Stories title is displayed', () => {
        homePage.verifyMoreStoriesTitleIsDisplayed();
    });

    /* In the below block I have hard coded the number of posts to do but in real time I would rather 
    read the number of files in the directory/datasource and then use this as the loop count */
    for (let i = 0; i < 2; i++) {
        it(`Verify story at ${i} position`, () => {
            homePage.verifyNthMoreStory(i);
        });
    }

    it('Verify Footer Is Displayed', () => {
        homePage.verifyFooterHeaderIsDisplayed();
    });

    it('Verify Footer Item Is Displayed', () => {
        homePage.verifyFooterItemsIsDisplayed();
    });

});
