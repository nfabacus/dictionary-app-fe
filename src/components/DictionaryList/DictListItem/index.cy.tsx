import React from "react";
import DictListItem from "./index";

describe("<DictListItem />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    // @ts-ignore
    cy.mount(<DictListItem label="78" text="javascript" />);
  });
});
