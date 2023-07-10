import reducer, {
  changeFieldSize,
  changePopulation,
  changeSpeed,
  toggleIsPlaying,
} from "./ContolPanelSlice";
import { FieldSize } from "../../../types";

test("should return the initial state", () => {
  expect(reducer(undefined, { type: undefined })).toEqual({
    fieldSize: { x: 50, y: 50 },
    population: 0,
    speed: 1000,
    isPlaying: false,
  });
});

test("should change field size", () => {
  const previousState: {
    fieldSize: FieldSize;
    population: number;
    speed: number;
    isPlaying: boolean;
  } = {
    fieldSize: { x: 50, y: 50 },
    population: 0,
    speed: 1000,
    isPlaying: false,
  };

  expect(
    reducer(previousState, changeFieldSize({ axis: "x", size: 10 }))
  ).toEqual({
    fieldSize: { x: 10, y: 50 },
    population: 0,
    speed: 1000,
    isPlaying: false,
  });
});

test("should change population", () => {
  const previousState: {
    fieldSize: FieldSize;
    population: number;
    speed: number;
    isPlaying: boolean;
  } = {
    fieldSize: { x: 50, y: 50 },
    population: 0,
    speed: 1000,
    isPlaying: false,
  };

  expect(reducer(previousState, changePopulation(10))).toEqual({
    fieldSize: { x: 50, y: 50 },
    population: 10,
    speed: 1000,
    isPlaying: false,
  });
});

test("should change speed", () => {
  const previousState: {
    fieldSize: FieldSize;
    population: number;
    speed: number;
    isPlaying: boolean;
  } = {
    fieldSize: { x: 50, y: 50 },
    population: 0,
    speed: 1000,
    isPlaying: false,
  };

  expect(reducer(previousState, changeSpeed("up"))).toEqual({
    fieldSize: { x: 50, y: 50 },
    population: 0,
    speed: 750,
    isPlaying: false,
  });
});

test("should toggle play", () => {
  const previousState: {
    fieldSize: FieldSize;
    population: number;
    speed: number;
    isPlaying: boolean;
  } = {
    fieldSize: { x: 50, y: 50 },
    population: 0,
    speed: 1000,
    isPlaying: false,
  };

  expect(reducer(previousState, toggleIsPlaying(true))).toEqual({
    fieldSize: { x: 50, y: 50 },
    population: 0,
    speed: 1000,
    isPlaying: true,
  });
});
