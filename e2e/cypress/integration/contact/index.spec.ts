describe('Contact me page', () => {

    beforeEach(() => {
        cy.visit('/contact-me.html')
    });


    it('Should have contact form', () => {
        cy.percySnapshot();
    })
})