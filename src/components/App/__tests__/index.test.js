import React from "react";
import { render } from "react-testing-library";

import App from "../index";

describe("<App />", () => {
  it("should render the demo text", () => {
    const { getByText } = render(<App />);

    expect(
      getByText("I am the popup from the Chrome Extension template!")
    ).toBeTruthy();
  });
});
