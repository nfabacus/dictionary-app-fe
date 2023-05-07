import React from "react";
import SearchField from "./index";

describe("<SearchField />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    // @ts-ignore
    cy.mount(
      <SearchField searchTerm="note" handleSearchTerm={(value: string) => {}} />
    );

    cy.get("input").should("have.value", "note");
    cy.get("input").type("book");
    cy.get("input").should("have.value", "notebook");
  });
});
