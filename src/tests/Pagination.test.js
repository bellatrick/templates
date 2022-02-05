import {
  reducer,
  handleChangeInput,
  handleReset,
  handlePagination,
  handlePrev,
  handleNext,
} from "../store/pagination";

const initialState = {
  value: { totalPages: 100, pageNumber: 1, start: 0, end: 15 },
};
test("It should be able to get total number of pages", () => {
  const previousState = initialState;

  expect(reducer(previousState, handlePagination(250))).toEqual({
    value: { totalPages: 250, pageNumber: 1, start: 0, end: 15 },
  });
});
test("It should be able to reset page number to default", () => {
  const previousState = {
    value: { totalPages: 100, pageNumber: 4, start: 60, end: 75 },
  };

  expect(reducer(previousState, handleReset(2))).toEqual({
    value: { totalPages: 100, pageNumber: 1, start: 0, end: 15 },
  });
});

test("It should be able to change pagination input value", () => {
  const previousState = initialState;

  expect(reducer(previousState, handleChangeInput(2))).toEqual({
    value: { totalPages: 100, pageNumber: 2, start: 15, end: 30 },
  });
});

test("It should be able to increase page number by one", () => {
  const previousState = initialState;

  expect(reducer(previousState, handleNext())).toEqual({
    value: { totalPages: 100, pageNumber: 2, start: 15, end: 30 },
  });
});

test("It should be able to decrease page number by one", () => {
  const previousState = initialState;

  expect(reducer(previousState, handlePrev())).toEqual({
    value: { totalPages: 100, pageNumber: 1, start: 0, end: 15 },
  });
});
