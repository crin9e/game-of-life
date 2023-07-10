import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  changeFieldSize,
  changePopulation,
  changeSpeed,
  reset,
  toggleIsPlaying,
} from "../../../../Store/slices/ContolPanelSlice";
import clsx from "clsx";
import styles from "./ControlPanel.module.css";
import { ControlPanelState } from "../../../../../types";

export const ControlPanel: React.FC = () => {
  const controlPanelState = useSelector(
    (state: { ContolPanelSlice: ControlPanelState }) => state.ContolPanelSlice
  );

  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(toggleIsPlaying(false));
    dispatch(reset());
  };

  return (
    <div className={styles.controlPanelContainer}>
      <div className={styles.row}>
        <div>
          <label htmlFor="x-size">Размер игрового поля по оси X</label>
          <div className={styles.range}>
            <input
              type="range"
              id="x-size"
              name="x-size"
              min="50"
              max="200"
              value={controlPanelState.fieldSize.x}
              onChange={(e) =>
                dispatch(
                  changeFieldSize({ axis: "x", size: parseInt(e.target.value) })
                )
              }
            />
            <span>{controlPanelState.fieldSize.x}</span>
          </div>
        </div>
        <div className={styles.range}>
          <label htmlFor="y-size">Размер игрового поля по оси Y</label>
          <div>
            <input
              type="range"
              id="y-size"
              name="y-size"
              min="50"
              max="200"
              value={controlPanelState.fieldSize.y}
              onChange={(e) =>
                dispatch(
                  changeFieldSize({ axis: "y", size: parseInt(e.target.value) })
                )
              }
            />
            <span>{controlPanelState.fieldSize.y}</span>
          </div>
        </div>
      </div>
      <div className={styles.row}>
        <span>Начальный процент заполненности:</span>
        <div>
          <button
            onClick={() => dispatch(changePopulation(20))}
            className={clsx({
              [styles.selected]: controlPanelState.population === 20,
            })}
          >
            20%
          </button>
          <button
            onClick={() => dispatch(changePopulation(50))}
            className={clsx({
              [styles.selected]: controlPanelState.population === 50,
            })}
          >
            50%
          </button>
          <button
            onClick={() => dispatch(changePopulation(70))}
            className={clsx({
              [styles.selected]: controlPanelState.population === 70,
            })}
          >
            70%
          </button>
        </div>
      </div>
      <div className={styles.row}>
        <span>Скорость:</span>
        <div>
          <button onClick={() => dispatch(changeSpeed("down"))}>⏪</button>
          <button onClick={() => dispatch(changeSpeed("reset"))}>
            Сбросить
          </button>
          <button onClick={() => dispatch(changeSpeed("up"))}>⏩</button>
        </div>
      </div>
      <div>
        <button
          onClick={() => {
            dispatch(toggleIsPlaying(true));
          }}
          className={clsx({
            [styles.selected]: controlPanelState.isPlaying,
          })}
        >
          ⏵
        </button>
        <button
          onClick={() => {
            dispatch(toggleIsPlaying(false));
          }}
        >
          ⏸
        </button>
        <button onClick={handleReset}>Сбросить</button>
      </div>
    </div>
  );
};
