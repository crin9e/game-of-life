import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect } from "@jest/globals";
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";

describe("Userpanel component", () => {
  it("should render login screen", () => {
    localStorage.removeItem("userName");
    render(
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    );

    const startButton = screen.getAllByText("START");

    expect(startButton).toBeDefined();
  });
  it("should log in and render a greeting screen", () => {
    localStorage.removeItem("userName");
    render(
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    );
    const input = screen.getByTestId("loginInput");

    fireEvent.change(input, { target: { value: "asdfg" } });
    expect(input.value).toBe("asdfg");

    const loginButton = screen.getByTestId("loginButton");
    fireEvent.click(loginButton);

    const greeting = screen.getAllByText("Hello, asdfg");

    expect(greeting).toBeDefined();
  });

  it("should log in and log out correctly", () => {
    localStorage.removeItem("userName");
    render(
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    );
    const input = screen.getByTestId("loginInput");

    fireEvent.change(input, { target: { value: "asdfg" } });

    const loginButton = screen.getByTestId("loginButton");
    fireEvent.click(loginButton);

    const logoutButton = screen.getByTestId("logoutButton");
    fireEvent.click(logoutButton);

    const startButton = screen.getAllByText("START");

    expect(startButton).toBeDefined();
  });
});
