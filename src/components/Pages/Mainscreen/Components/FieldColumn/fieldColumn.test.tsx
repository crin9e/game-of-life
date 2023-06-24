import React from "react";
import { FieldColumn } from "./FieldColumn";
import { render, screen } from "@testing-library/react";
import { describe, expect } from "@jest/globals";
import { Provider } from "react-redux";
import { store } from "../../../../Store/store";

describe("FieldColumn component", () => {
  it("should render a field column", () => {
    render(
      <Provider store={store}>
        <FieldColumn column={["vacant", "vacant", "vacant"]} columnIndex={2} />
      </Provider>
    );

    const field = screen.getAllByTestId("column");

    expect(field).toBeDefined();

    expect(screen.getAllByTestId("cell-2-0")).toBeDefined();
    expect(screen.getAllByTestId("cell-2-1")).toBeDefined();
    expect(screen.getAllByTestId("cell-2-2")).toBeDefined();
    expect(screen.queryByTestId("cell-1-0")).toBeNull();
    expect(screen.queryByTestId("cell-2-3")).toBeNull();
  });
});
