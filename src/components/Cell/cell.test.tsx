import React from "react";
import { Cell } from "./Cell";
import { render, screen } from "@testing-library/react";
import { describe, expect } from "@jest/globals";
import "@testing-library/jest-dom";

describe("cell component", () => {
  it("should render a cell", () => {
    render(<Cell status="alive" x={1} y={2} />);

    const cell = screen.getAllByTestId("cell-1-2");

    expect(cell).toBeDefined();
  });
});
