import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Feed = {
  food: string;
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
      let hp: number = state.hp;
      height = height * 10;
      if (action.payload.food == "meat") {
        console.log("is meat");
        hp = hp * 20;
      }
      return {
        ...state,
        height: height,
        hp: hp
      };
    },
    walk: (state, action: PayloadAction<Feed>) => {
    },
  },
});
