import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Feed = {
  food: number;
  quantity: number;
};

export type hippoState = {
  weight: number;
};

const initialState: hippoState = {
  weight: 1,
};

export const hippoSlice = createSlice({
  name: 'Hippo',
  initialState,
  reducers: {
    feed: (state, action: PayloadAction<Feed>) => {
      let weight: number = state.weight;
      weight = weight * 200;
      return {
        ...state,
        weight: weight
      };
    },
  },
});
