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

    // const { container } = render(<Cell status="alive" x={1} y={2} />);
    // console.log(container.firstChild.style.__values);
    // expect(container.firstChild).toHaveStyle("background-color: green");

    expect(screen.getByTestId("cell-1-2")).toHaveAttribute(
      "style",
      "background-color: green"
    );
  });
});
