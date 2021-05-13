import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Feed = {
  food: number;
  quantity: number;
};

export type hippoState = {
  weight: number;
};

const initialState: hippoState = {
  weight: 0,
};

export const hippoSlice = createSlice({
  name: 'Hippo',
  initialState,
  reducers: {
    feed: (state, action: PayloadAction<Feed>) => {
      return {
        ...state,
        weight: state.weight + action.payload.quantity
      };
    },
  },
});
