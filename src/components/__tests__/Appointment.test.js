import React from "react";
import Appointment from "components/Appointment";
const { render, cleanup } = require("@testing-library/react");

describe("Appointment", () => {
  afterEach(cleanup);

  it("renders without crashing", () => {
    render(<Appointment />);
  });

  it("renders empty component with no state", () => {
    // ...
  });

  it("does something else it is supposed to do", () => {
    // ...
  });
});