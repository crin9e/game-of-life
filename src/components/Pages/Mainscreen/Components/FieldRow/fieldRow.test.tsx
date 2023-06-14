import React from "react";
import { FieldRow } from "./FieldRow";
import { render, screen } from "@testing-library/react";
import { describe, expect } from "@jest/globals";

describe("FieldRow component", () => {
  it("should render a field row", () => {
    render(<FieldRow row={["vacant", "vacant", "vacant"]} rowIndex={2} />);

    const field = screen.getAllByTestId("row");

    expect(field).toBeDefined();

    expect(screen.getAllByTestId("cell-2-0")).toBeDefined();
    expect(screen.getAllByTestId("cell-2-1")).toBeDefined();
    expect(screen.getAllByTestId("cell-2-2")).toBeDefined();
    expect(screen.queryByTestId("cell-1-0")).toBeNull();
    expect(screen.queryByTestId("cell-2-3")).toBeNull();
  });
});
