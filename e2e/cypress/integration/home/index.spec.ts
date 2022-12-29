describe('Home page', () => {

    beforeEach(() => {
        cy.visit('/')
    });

    it('Should see the website name', () => {
        cy.get('.intro > article > h1')
            .should('be.visible')
            .contains('Murage Martin');
    })

    it('Should see the call to action button', () => {
        cy.get('.intro > article > .action-buttons')
            .within(() => {
                cy.get('a.btn-primary')
                    .should('be.visible')
                    .invoke('attr', 'href')
                    .should('contain', 'contact-me.html');


                cy.get('a.btn-secondary')
                    .should('be.visible')
                    .invoke('attr', 'href')
                    .should('contain', '#about-me');
            })
    })
})