import reducer, {
  changeFieldSize,
  changePopulation,
  changeSpeed,
} from "./ContolPanelSlice";
import { FieldSize } from "../../../types";

test("should return the initial state", () => {
  expect(reducer(undefined, { type: undefined })).toEqual({
    fieldSize: { x: 50, y: 50 },
    population: 0,
    speed: 50,
  });
});

test("should change field size", () => {
  const previousState: {
    fieldSize: FieldSize;
    population: number;
    speed: number;
  } = {
    fieldSize: { x: 50, y: 50 },
    population: 0,
    speed: 50,
  };

  expect(reducer(previousState, changeFieldSize({ x: 10, y: 10 }))).toEqual({
    fieldSize: { x: 10, y: 10 },
    population: 0,
    speed: 50,
  });
});

test("should change population", () => {
  const previousState: {
    fieldSize: FieldSize;
    population: number;
    speed: number;
  } = {
    fieldSize: { x: 50, y: 50 },
    population: 0,
    speed: 50,
  };

  expect(reducer(previousState, changePopulation(10))).toEqual({
    fieldSize: { x: 50, y: 50 },
    population: 10,
    speed: 50,
  });
});

test("should change speed", () => {
  const previousState: {
    fieldSize: FieldSize;
    population: number;
    speed: number;
  } = {
    fieldSize: { x: 50, y: 50 },
    population: 0,
    speed: 50,
  };

  expect(reducer(previousState, changeSpeed(10))).toEqual({
    fieldSize: { x: 50, y: 50 },
    population: 0,
    speed: 10,
  });
});

test("should save state to localStorage", () => {
  const previousState: {
    fieldSize: FieldSize;
    population: number;
    speed: number;
  } = {
    fieldSize: { x: 50, y: 50 },
    population: 0,
    speed: 50,
  };

  expect(reducer(previousState, changeSpeed(10))).toEqual({
    fieldSize: { x: 50, y: 50 },
    population: 0,
    speed: 10,
  });
});
