/// <reference types="Cypress" />

context("Aliasing", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001");
  });

  it("let me debug like a fiend", function() {
    // cy.get("#root").debug();

    cy.get("#root").should("have.text", "...loading dog...");

    cy.get("button").should("have.text", "Fetch");
    cy.get("button").click();
    cy.get("body").should("have.text", "...loading users...");
    cy.get("#root").should("have.text", "catchPhrase:");
  });
});
