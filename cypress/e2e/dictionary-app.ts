import { When, Then, Before } from "@badeball/cypress-cucumber-preprocessor";

When("I open the dictionary app", () => {
  cy.visit("http://localhost:3000");
});

Then("I see a scrollable list of English words", () => {
  cy.get("input").should("exist");
  cy.get("input").should("have.value", "");
  cy.get(".MuiList-root").should("be.visible");
  cy.get(".MuiList-root").children("li").should("have.length.gte", 10);
  cy.get(".MuiList-root")
    .children("li")
    .then((listItems) => {
      const initialCount = listItems.length;
      cy.get(".lastWord").scrollIntoView({ duration: 100 });
      cy.get("p").contains("Loading more...").should("be.visible");
      cy.get(".MuiList-root")
        .children("li")
        .should("have.length.gt", initialCount);
    });
});

Before(() => {
  cy.visit("http://localhost:3000");
});

When("I type in some string in the text field", () => {
  cy.get("input").should("exist");
  cy.get("input").should("have.value", "");
  cy.get("input").type("hello");
});

Then("I see a list of words that starts with that string", () => {
  cy.get(".MuiList-root").children("li").should("exist");
  cy.get(
    ":nth-child(1) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root"
  ).should("contain.text", "hello");
  cy.get(".MuiList-root").children("li").should("have.length", 5);
});

When(
  `I use at least 1 wildcard |* in my string - for example, when a user filters by 'c|*t'`,
  () => {
    cy.get("input").should("exist");
    cy.get("input").should("have.value", "");
    cy.get("input").type("c*t");
  }
);
Then(
  "I see words that starts with 'c', followed by any other character and the 3rd character is 't'. In this case users should get words like 'cat'",
  () => {
    cy.get(".MuiList-root").children("li").should("exist");
    cy.get(
      ":nth-child(1) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root"
    ).should("contain.text", "cat");
    cy.get(".MuiList-root").children("li").should("have.length.gte", 10);
  }
);

When("I filter the list", () => {
  cy.get("input").should("exist");
  cy.get("input").should("have.value", "");
  cy.session("filter", () => {
    cy.visit("http://localhost:3000");
    cy.get("input").type("test");
    cy.wait(500);
  });
});
When("I refreshes the browser", () => {
  cy.reload();
});

Then(
  "I still see my filtered list which is the same as before the refresh",
  () => {
    cy.visit("http://localhost:3000");
    cy.get("input").should("have.value", "test");
  }
);
