import React, { useEffect } from "react";
import { Cell } from "./Cell";
import { select } from "@storybook/addon-knobs";

export default {
  title: "CellStory",
  component: Cell,
};

export const CellStoryWithKnobs = () => {
  const options = ["vacant", "alive", "dead"];
  const cellStatus = select("Status", options, "vacant");

  useEffect(() => {
    const handleContextmenu = (e) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextmenu);
    return function cleanup() {
      document.removeEventListener("contextmenu", handleContextmenu);
    };
  }, []);

  return (
    <div>
      <Cell status={cellStatus} />
    </div>
  );
};
