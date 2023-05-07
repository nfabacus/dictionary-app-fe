import React from "react";
import PageTitle from "./PageTitle";

describe("<PageTitle />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    // @ts-ignore
    cy.mount(<PageTitle title="Dictionary App" />);
  });
});
