describe('calculator', function () {
    beforeEach(function () {
       cy.visit('http://localhost:3000');
    });

    it('should add two numbers', function () {
        cy.get('.btn-11').click();
        cy.get('.btn-24').click();
        cy.get('.btn-23').click();
        cy.get('.btn-29').click();
        cy.get('.answer').should('have.value', '10')
        
    });

    it('should multiply two numbers', function () {
        cy.get('.btn-11').click();
        cy.get('.btn-14').click();
        cy.get('.btn-23').click();
        cy.get('.btn-29').click();
        cy.get('.answer').should('have.value', '21')
    });

    it('should divide two numbers', function () {
        cy.get('.bnt-16').click();
        cy.get('.btn-22').click();
        cy.get('.btn-9').click();
        cy.get('.btn-29').click();
        cy.get('answer').should('have.value', '2')
    });

    it('should log two numbers', function () {
        cy.get('[data-cy=button8]').click();
        cy.get('[data-cy=buttonDivide]').click();
        cy.get('[data-cy=button2]').click();
        cy.get('[data-cy=buttonEquals]').click();
        cy.get('[data-cy=result]').should('have.value', '4')
    });

    it('should ln two numbers', function () {
        cy.get('[data-cy=button8]').click();
        cy.get('[data-cy=buttonDivide]').click();
        cy.get('[data-cy=button2]').click();
        cy.get('[data-cy=buttonEquals]').click();
        cy.get('[data-cy=result]').should('have.value', '4')
    });

    it('should power two numbers', function () {
        cy.get('[data-cy=button8]').click();
        cy.get('[data-cy=buttonDivide]').click();
        cy.get('[data-cy=button2]').click();
        cy.get('[data-cy=buttonEquals]').click();
        cy.get('[data-cy=result]').should('have.value', '4')
    });

    
});