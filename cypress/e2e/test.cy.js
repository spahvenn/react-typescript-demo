describe("Test Navigation", () => {
  it("Visits gallery page", () => {
    cy.visit("http://127.0.0.1:3000");
    cy.contains("Gallery").click();
    cy.url().should("include", "/gallery");
  });
});
