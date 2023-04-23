import React from "react";
import { Field } from "./Field";
import { render, screen } from "@testing-library/react";
import { describe, expect } from "@jest/globals";

describe("Field component", () => {
  it("should render a field", () => {
    render(<Field fieldSize={{ x: 2, y: 5 }} />);

    const field = screen.getAllByTestId("field");

    expect(field).toBeDefined();

    expect(screen.getAllByTestId("cell-0-0")).toBeDefined();
    expect(screen.getAllByTestId("cell-1-4")).toBeDefined();
    expect(screen.queryByTestId("cell-2-5")).toBeNull();
  });
});
