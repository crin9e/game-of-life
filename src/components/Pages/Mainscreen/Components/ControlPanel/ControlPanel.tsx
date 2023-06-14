import React, { useState } from "react";
import clsx from "clsx";
import styles from "./ControlPanel.module.css";
import { FieldSize, SpeedActions } from "../../types";

export const ControlPanel: React.FC = () => {
  const [fieldSize, setFieldSize] = useState<FieldSize>({ x: 50, y: 50 });
  const [population, setPopulation] = useState<number>(50);
  const [speed, setSpeed] = useState<number>(50);

  const handleSpeedChange = (action: SpeedActions) => {
    if (action === "resetSpeed") setSpeed(50);
    if (action === "speedUp") {
      if (speed < 100) setSpeed((prev) => prev + 25);
    }
    if (action === "slowDown") {
      if (speed > 0) setSpeed((prev) => prev - 25);
    }
    return null;
  };

  const handleReset = (e: React.MouseEvent<HTMLElement>) => {
    setFieldSize({ x: 50, y: 50 });
    setPopulation(0);
    setSpeed(50);
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
              value={fieldSize.x}
              onChange={(e) =>
                setFieldSize((prev) => ({
                  ...prev,
                  x: parseInt(e.target.value),
                }))
              }
            />
            <span>{fieldSize.x}</span>
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
              value={fieldSize.y}
              onChange={(e) =>
                setFieldSize((prev) => ({
                  ...prev,
                  y: parseInt(e.target.value),
                }))
              }
            />
            <span>{fieldSize.y}</span>
          </div>
        </div>
      </div>
      <div className={styles.row}>
        <span>Начальный процент заполненности:</span>
        <div>
          <button
            onClick={() => setPopulation(20)}
            className={clsx({ [styles.selected]: population === 20 })}
          >
            20%
          </button>
          <button
            onClick={() => setPopulation(50)}
            className={clsx({ [styles.selected]: population === 50 })}
          >
            50%
          </button>
          <button
            onClick={() => setPopulation(70)}
            className={clsx({ [styles.selected]: population === 70 })}
          >
            70%
          </button>
        </div>
      </div>
      <div className={styles.row}>
        <span>Скорость:</span>
        <div>
          <button onClick={() => handleSpeedChange("slowDown")}>
            Замедлить
          </button>
          <button onClick={() => handleSpeedChange("resetSpeed")}>
            Сбросить
          </button>
          <button onClick={() => handleSpeedChange("speedUp")}>Ускорить</button>
        </div>
      </div>
      <div>
        <button>Начать</button>
        <button>Остановить</button>
        <button onClick={handleReset}>Сбросить</button>
      </div>
    </div>
  );
};