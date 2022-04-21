describe("homepage launches correctly", () => {
    it("rendered correctly", () => {
        cy.visit("/");
        cy.get("#home").should("exist");
    });

    it("Homepage Buttons can be used",()=>{
        cy.visit("/");
        cy.get('.btn-select').click();
        cy.get('.button-31').click();
        cy.get('.search').click();
    });

    it("Routes to a different page",()=>{
        cy.visit('/');
        cy.get('a.scanner').click();
        cy.url().should("include","about"); 
    });
});