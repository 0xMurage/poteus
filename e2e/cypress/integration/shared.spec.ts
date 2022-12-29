
describe('Top navigation',()=>{

    beforeEach(()=>{
        cy.visit('/')
    });

    it('Should see navigation menu links',()=>{
        cy.get('nav.navbar>.menu>.nav-item > .nav-link')
            .should('be.visible')
            .should('have.length',4);

        cy.percySnapshot();
    })

    it('Should see home menu link',()=>{
        cy.get('nav.navbar>.menu>.nav-item > .nav-link')
            .contains('home',{matchCase:false})
            .should('be.visible')
    })

    it('Should see portfolio menu link',()=>{
        cy.get('nav.navbar>.menu>.nav-item > .nav-link')
            .contains('portfolio',{matchCase:false})
            .should('be.visible')
    })

    it('Should see resume menu link',()=>{
        cy.get('nav.navbar>.menu>.nav-item > .nav-link')
            .contains('resume',{matchCase:false})
            .should('be.visible')
    })

    it('Should see contact me menu link',()=>{
        cy.get('nav.navbar>.menu>.nav-item > .nav-link')
            .contains('contact me',{matchCase:false})
            .should('be.visible')
    })

})

describe('Bottom navigation',()=>{

    beforeEach(()=>{
        cy.visit('/')
    });

    it('Should see contact me menu link',()=>{
        cy.get('footer >.copyright')
            .contains(new Date().getUTCFullYear())
            .should('be.visible')
    })

})