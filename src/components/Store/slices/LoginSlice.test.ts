import reducer, { logIn, logOut } from "./LoginSlice";

test("should return the initial state", () => {
  expect(reducer(undefined, { type: undefined })).toEqual({ username: null });
});

test("should log in", () => {
  const previousState: {
    username: string | null;
  } = {
    username: null,
  };

  expect(reducer(previousState, logIn("test"))).toEqual({
    username: "test",
  });
});

test("should log out", () => {
  const previousState: {
    username: string | null;
  } = {
    username: null,
  };

  expect(reducer(previousState, logIn("test"))).toEqual({
    username: "test",
  });
  expect(reducer(previousState, logOut())).toEqual({
    username: null,
  });
  expect(reducer(previousState, logOut())).toEqual({
    username: null,
  });
});
