import homePageData from '../../fixtures/homePage.json'
class homePage {

    verifyContainerHeaderIsDisplayed() {
        cy.get(this.containerHeader).should('be.visible');
    }

    verifyHeroTitleAndSubTitleIsDisplayed() {
        cy.get(this.heroTitle).should('be.visible');
        cy.get(this.heroSubTitle).should('be.visible');
    }

    verifyHeroPostImageIsDisplayed() {
        cy.get(this.heroImage).should('be.visible');
        cy.get(this.heroImage).should('have.attr', 'src');
    }

    verifyHeroPostIsDisplayed() {
        cy.get(this.heroPost).should('be.visible');
    }

    verifyHeroDateIsdisplayed() {
        cy.get(this.heroDate).should('be.visible');
    }

    verifyHeroDescriptionIsDisplayed() {
        cy.get(this.heroDescription).should('be.visible');
    }

    verifyHeroAuthorIsDisplayed() {
        cy.get(this.author).eq(0).should('be.visible');
    }

    verifyHeroAuthorPictureIsDisplayed() {
        cy.get(this.authorPicture).eq(0).should('be.visible');
    }

    verifyMoreStoriesTitleIsDisplayed() {
        cy.get(this.moreStoryTitle).should('be.visible');
    }

    verifyNthMoreStory(nthStoryIndex) {
        this.verifyMoreStoriesImageIsDisplayed(nthStoryIndex);
        this.verifyMoreStoriesPostIsDisplayed(nthStoryIndex);
        this.verifyMoreStoriesDateIsDisplayed(nthStoryIndex);
        this.verifyMoreStoriesDescriptionIsDisplayed(nthStoryIndex);
        this.verifyMoreStoriesAuthorPictureIsDisplayed(nthStoryIndex);
        this.verifyMoreStoriesAuthorIsDisplayed(nthStoryIndex);
        this.navigateToMoreStoriesPostPage(nthStoryIndex);

    }

    verifyMoreStoriesImageIsDisplayed(postIndex) {
        cy.get(`[test-id="post-preview-${postIndex}"]`).find(this.moreStoryImage).should('be.visible');
    }

    verifyMoreStoriesPostIsDisplayed(postIndex) {
        cy.get(`[test-id="post-preview-${postIndex}"]`).find(this.moreStoryPost)
            .should('be.visible')
            .should('have.attr', 'href');
    }

    verifyMoreStoriesDateIsDisplayed(postIndex) {
        cy.get(`[test-id="post-preview-${postIndex}"]`).find(this.moreStoryDate).should('be.visible');
    }

    verifyMoreStoriesDescriptionIsDisplayed(postIndex) {
        cy.get(`[test-id="post-preview-${postIndex}"]`).find(this.moreStoryDescription).should('be.visible');

    }

    verifyMoreStoriesAuthorPictureIsDisplayed(postIndex) {
        cy.get(`[test-id="post-preview-${postIndex}"]`).find(this.authorPicture).should('be.visible');
    }

    verifyMoreStoriesAuthorIsDisplayed(postIndex) {
        cy.get(`[test-id="post-preview-${postIndex}"]`).find(this.author).should('be.visible');
    }

    verifyFooterHeaderIsDisplayed() {
        cy.get(this.footerHeader).should('be.visible');
    }

    verifyFooterItemsIsDisplayed(){
        cy.get(this.footerItem).eq(0).should('be.visible');
        cy.get(this.footerItem).eq(1).should('be.visible');

    }

    navigateToHeroPostPage() {
        cy.get(this.heroPost).click();
        cy.url().should('contain', homePageData.postUrl);
        cy.visit('/');
    }

    navigateToMoreStoriesPostPage(postIndex){
        cy.get(`[test-id="post-preview-${postIndex}"]`).find(this.moreStoryPost).click();
        cy.url().should('contain', homePageData.postUrl);
        cy.visit('/');
    }

    


    containerHeader = '.border-b.bg-accent-1.border-accent-2';
    heroTitle = '.text-6xl.md\\:text-8xl.font-bold.tracking-tighter.leading-tight.md\\:pr-8';
    heroSubTitle = '.text-center.md\\:text-left.text-lg.mt-5.md\\:pl-8';
    heroImage = '.shadow-sm.hover\\:shadow-md.transition-shadow.duration-200';
    heroPost = '.mb-4.text-4xl.lg\\:text-6xl.leading-tight';
    heroDate = '.mb-4.md\\:mb-0.text-lg';
    heroDescription = '.text-lg.leading-relaxed.mb-4';
    authorPicture = '.w-12.h-12.rounded-full.mr-4';
    author = '.text-xl.font-bold';
    moreStoryTitle = '.mb-8.text-6xl.md\\:text-7xl.font-bold.tracking-tighter.leading-tight';
    moreStoryImage = 'img';
    moreStoryPost = '.hover\\:underline';
    moreStoryDate = 'time';
    moreStoryDescription = 'p';

    footerHeader = '.py-28.flex.flex-col.lg\\:flex-row.items-center h3';
    footerItem = 'footer .container.mx-auto.px-5 a';

}

const homePagePO = new homePage();
export default homePagePO;
