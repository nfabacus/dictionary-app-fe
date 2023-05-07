import React from "react";
import DictionaryList from "./index";

describe("<DictionaryList />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    // @ts-ignore
    cy.mount(<DictionaryList searchTerm="trail" />);
  });
});
