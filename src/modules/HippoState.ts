import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Feed = {
  food: number;
  quantity: number;
};

export type hippoState = {
  height: number;
  hp: number;
  intelligence: number;
  strength: number;
};

const initialState: hippoState = {
  height: 1,
  hp: 1,
  intelligence: 1,
  strength: 1,
};

export const hippoSlice = createSlice({
  name: 'Hippo',
  initialState,
  reducers: {
    feed: (state, action: PayloadAction<Feed>) => {
      let height: number = state.height;
      height = height * 200;
      return {
        ...state,
        height: height
      };
    },
    walk: (state, action: PayloadAction<Feed>) => {
    },
  },
});
