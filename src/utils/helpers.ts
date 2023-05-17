import { FilledFieldTypes } from "../types";

export const fillField = (
  x: number,
  y: number,
  initialPopulation: number
): FilledFieldTypes => {
  const populatedCells = Math.floor((x * y * initialPopulation) / 100);
  const vacantArray = Array.from("y".repeat(x * y - populatedCells)).map(
    (element) => element.replace("y", "vacant")
  );
  const populatedArray = Array.from("y".repeat(populatedCells)).map((element) =>
    element.replace("y", "alive")
  );
  const unShuffledArray = vacantArray.concat(populatedArray);
  const shuffledArray = shuffleArray(unShuffledArray);
  const filledField = [];
  while (shuffledArray.length) filledField.push(shuffledArray.splice(0, y));

  return filledField;
};

export const shuffleArray = (array: string[]): string[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = newArray[i];
    newArray[i] = newArray[j];
    newArray[j] = temp;
  }
  return newArray;
};
