import React from "react";
import { Field } from "./Field";
import { render, screen } from "@testing-library/react";
import { describe, expect } from "@jest/globals";
import { fillField } from "../../../../../utils/helpers";
import { Provider } from "react-redux";
import { store } from "../../../../Store/store";
import { UpdateFieldState } from "../../../../Store/slices/FieldSlice";

describe("Field component", () => {
  it("should render a field", () => {
    const filledField = fillField(5, 5, 0);
    store.dispatch(UpdateFieldState(filledField));
    render(
      <Provider store={store}>
        <Field />
      </Provider>
    );

    const field = screen.getAllByTestId("field");

    expect(field).toBeDefined();

    expect(screen.getAllByTestId("cell-0-0")).toBeDefined();
    expect(screen.getAllByTestId("cell-1-4")).toBeDefined();
    expect(screen.queryByTestId("cell-2-5")).toBeNull();
  });
});
