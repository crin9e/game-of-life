import React from "react";
import { Cell } from "./Cell";
import { render, screen } from "@testing-library/react";
import { describe, expect } from "@jest/globals";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { store } from "../../../../Store/store";
import { Status } from "../../../../../types";

describe("cell component", () => {
  it("should render a cell", () => {
    render(
      <Provider store={store}>
        <Cell status={Status.alive} x={1} y={2} />
      </Provider>
    );

    const cell = screen.getAllByTestId("cell-1-2");

    expect(cell).toBeDefined();
  });
});
