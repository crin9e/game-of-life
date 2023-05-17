import React, { useEffect } from "react";
import { Field } from "./Field";
import { number } from "@storybook/addon-knobs";

export default {
  title: "FieldStory",
  component: Field,
};

export const FieldStory = () => {
  const options = {
    range: true,
    min: 1,
    max: 200,
    step: 1,
  };

  const x = number("X", 10, options);
  const y = number("Y", 10, options);
  const population = number("POPULATION", 0, {
    range: true,
    min: 0,
    max: 100,
    step: 1,
  });

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
      <Field fieldSize={{ x: x, y: y }} initialPopulation={population} />
    </div>
  );
};
