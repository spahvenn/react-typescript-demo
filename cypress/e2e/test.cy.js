it("Visits all pages", () => {
  cy.visit("http://127.0.0.1:3000");
  cy.contains("View now");
  cy.contains("Gallery").click();
  cy.url().should("include", "/gallery");
  cy.get('[data-testid="ShoppingCartIcon"]').click();
  cy.url().should("include", "/shopping-cart");
});

it("Adds item to the shopping cart", () => {
  cy.visit("http://127.0.0.1:3000/gallery?season=all");
  cy.get('[data-testid="gallery-image-1"]').click();
  cy.contains("Add to cart").click();
  cy.contains("Picture added to the shopping cart");
});
