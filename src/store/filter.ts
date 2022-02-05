import { createSlice } from "@reduxjs/toolkit";
import { handleOrder, handleDate } from "../utils";
interface Data {
  name: string;
  category: string[];
}
interface FilterState {
  value: {
    category: string;
    order: string;
    date: string;
    data: Data[] | boolean;
    constantData: Data[];
    error: boolean;
    search: string;
  };
}
const initialState: FilterState = {
  value: {
    category: "All",
    order: "",
    date: "",
    data: false,
    constantData: [],
    error: false,
    search: "",
  },
};
export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    addCategory: (state, action) => {
      let newData;
      state.value.data = state.value.constantData;
      state.value.category = action.payload;
      state.value.date = "Default";
      state.value.order = "Default";
      state.value.search = "";
      if (!state.value.data) return;
      if (action.payload.split(" ")[0] === "All") {
        newData = state.value.constantData;
      } else
        newData = state.value.data.filter((arr) => {
          return arr.category.indexOf(action.payload.split(" ")[0]) >= 0;
        });
      state.value.data = newData;
    },
    addOrder: (state, action) => {
      state.value.date = "Default";

      state.value.order = action.payload;
      if (!state.value.data) return;
      state.value.data = handleOrder(
        state.value.data,
        action.payload,
        state.value.constantData
      );
    },
    addDate: (state, action) => {
      state.value.order = "Default";

      state.value.date = action.payload;
      if (!state.value.data) return;
      state.value.data = handleDate(
        state.value.data,
        action.payload,
        state.value.constantData
      );
    },
    getData: (state, action) => {
      state.value.data = action.payload.data;
      state.value.error = action.payload.isError;
      state.value.constantData = action.payload.data;
    },
    search: (state, action) => {
      let newData;
      let arr;
      state.value.search = action.payload;
      if (!state.value.data) return;

      state.value.data = arr;
      arr = state.value.constantData;
      newData = arr.filter((x) => {
        const a = x.name.toLowerCase();
        return a.includes(action.payload.toLowerCase());
      });
      if (
        state.value.order === "Ascending Order" ||
        state.value.order === "Descending Order"
      ) {
        newData = handleOrder(
          newData,
          state.value.order,
          state.value.constantData
        );
      } else if (
        state.value.date === "Descending Date" ||
        state.value.date === "Ascending Date"
      ) {
        newData = handleDate(
          newData,
          state.value.date,
          state.value.constantData
        );
      }
      if (state.value.category.split(" ")[0] !== "All") {
        state.value.data = newData.filter((arr) => {
          return arr.category.indexOf(state.value.category.split(" ")[0]) >= 0;
        });
      } else state.value.data = newData;
    },
  },
});
export default filterSlice;
export const {search,getData,addCategory,addDate,addOrder} =filterSlice.actions
export const {reducer}= filterSlice
