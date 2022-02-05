import { createSlice } from "@reduxjs/toolkit";
import filterSlice from "./filter";

interface PaginationState {
  value: {
    totalPages: string;
    pageNumber: number;
    start: number;
    end: number;
  };
}
const initialState: PaginationState = {
  value: { totalPages: "", pageNumber: 1, start: 0, end: 15 },
};
export const paginationSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    handleNext: (state) => {
      if (state.value.pageNumber >= +state.value.totalPages) return;
      state.value.start = state.value.start + 15;
      state.value.end = state.value.end + 15;
      state.value.pageNumber++;
    },
    handlePrev: (state) => {
      if (state.value.pageNumber <= 1) return;
      state.value.start = state.value.start - 15;
      state.value.end = state.value.end - 15;
      state.value.pageNumber--;
    },
    handlePagination: (state, action) => {
      state.value.totalPages = action.payload;
    },
    handleReset: (state) => {
      state.value.pageNumber = 1;
      state.value.start=0
      state.value.end=15
    },
    handleChangeInput: (state, action) => {
      if (isNaN(action.payload)) return;
      state.value.start = 15 * action.payload-15;
      state.value.end = 15 * action.payload;
      if (state.value.totalPages < action.payload) return;
      state.value.pageNumber = action.payload;
    },
  },
});
export default paginationSlice;
export const { reducer } = paginationSlice;
export const {
  handleChangeInput,
  handleReset,
  handlePagination,
  handlePrev,
  handleNext,
} = paginationSlice.actions;
