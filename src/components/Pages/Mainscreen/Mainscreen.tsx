import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ControlPanelState } from "../../../types";
import { fillField } from "../../../utils/helpers";
import { UpdateFieldState } from "../../Store/slices/FieldSlice";
import { ControlPanel } from "./Components/ControlPanel/ControlPanel";
import { Field } from "./Components/Field/Field";
import classes from "./Mainscreen.module.css";

export const Mainscreen: React.FunctionComponent = () => {
  const { fieldSize, population, speed, isPlaying } = useSelector(
    (state: { ContolPanelSlice: ControlPanelState }) => state.ContolPanelSlice
  );
  const dispatch = useDispatch();
  const filledField = fillField(fieldSize.x, fieldSize.y, population);

  function* nextFrameGenerator(isPlaying: boolean): Generator<number> {
    while (isPlaying) {
      yield dispatch({ type: "PLAY", payload: { playing: true } });
    }
  }

  const testGenerator = useRef<Generator<number>>();
  const paused = useRef<boolean>(false);

  useEffect(() => {
    const fn = () => {
      if (paused.current) return;
      testGenerator.current!.next();
      setTimeout(() => {
        fn();
      }, speed);
    };

    if (isPlaying) {
      paused.current = false;
      testGenerator.current = nextFrameGenerator(isPlaying);
      fn();
    } else {
      paused.current = true;
    }
  }, [isPlaying]);

  useEffect(() => {
    dispatch(UpdateFieldState(filledField));
  }, [fieldSize, population]);

  return (
    <div className={classes.formWrapper}>
      <div className={classes.form}>
        <Field />
        <ControlPanel />
      </div>
    </div>
  );
};
