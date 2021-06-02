import { createSlice } from "@reduxjs/toolkit";

export type CounterState = {
  count: number;
};

const initialState: CounterState = { count: 0 };

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementCount: (state) => {
      return { ...state, count: state.count + 1 };
    },
    decrementCount: (state) => {
      return { ...state, count: state.count - 1 };
    },
  },
});
