import type { Config } from "jest";

export default async (): Promise<Config> => {
  return {
    verbose: true,
    moduleNameMapper: {
      "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js",
    },
    testEnvironment: "jsdom",
    transform: {
      "\\.[jt]sx?$": "babel-jest",
    },
  };
};
