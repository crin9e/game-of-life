import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { Router } from "./Router";

export default {
  title: "RouterStory",
  component: Router,
};

export const RouterStory = () => {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to={"notfound"}>notfound</Link>
        </li>
        <li>
          <Link to={"/"}>mainscreen</Link>
        </li>
        <li>
          <Link to={"login"}>login</Link>
        </li>
        <li>
          <Link to={`${Math.floor(Math.random() * 100)}`}>random route</Link>
        </li>
      </ul>
      <Router />
    </BrowserRouter>
  );
};
