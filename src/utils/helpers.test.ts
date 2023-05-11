import { describe, expect } from "@jest/globals";
import { shuffleArray, fillField } from "./helpers";

describe("Fill field", () => {
  it("should shuffle an array randomly", () => {
    const array1 = Array.from("y".repeat(100));
    array1.push("x");
    const array2 = shuffleArray(array1);
    expect(JSON.stringify(array1)).not.toEqual(JSON.stringify(array2));
  });
  it("should should create a 1 to 1 array with 1 vacant cell", () => {
    const emptyField = fillField(1, 1, 0);
    expect(emptyField).toEqual([["vacant"]]);
  });
  it("should should create a 1 to 1 array with 1 alive cell", () => {
    const aliveField = fillField(1, 1, 100);
    expect(aliveField).toEqual([["alive"]]);
  });
  it("should create a 10 to 10 array (100 elements)", () => {
    const array = fillField(10, 10, 0);
    expect([].concat(...array).length).toEqual(100);
  });
  it("should fill out 75 cells with alive and 25 cells with vacant property", () => {
    const array = fillField(10, 10, 75);
    const occurrences = [].concat(...array).reduce(function (acc, curr) {
      return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
    }, {});
    expect(occurrences["alive"]).toEqual(75);
    expect(occurrences["vacant"]).toEqual(25);
  });
  it("should fill out arrays randomly with the same amount of needed properties", () => {
    const array1 = fillField(10, 10, 75);
    const array2 = fillField(10, 10, 75);
    const occurrences1 = [].concat(...array1).reduce(function (acc, curr) {
      return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
    }, {});
    const occurrences2 = [].concat(...array2).reduce(function (acc, curr) {
      return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
    }, {});
    expect(occurrences1["alive"]).toEqual(75);
    expect(occurrences2["alive"]).toEqual(75);
    expect(JSON.stringify(array1)).not.toEqual(JSON.stringify(array2));
  });
});
