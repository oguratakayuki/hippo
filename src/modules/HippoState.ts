import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Feed = {
  id: number;
  food: string;
  quantity: number;
};

type hippoState = {
  height: number;
  hp: number;
  intelligence: number;
  strength: number;
}

export type stateList = {
  hippos: hippoState[];
};


const initialState: stateList = {
  hippos: [],
};

export const hippoSlice = createSlice({
  name: 'Hippo',
  initialState,
  reducers: {
    feed: (state, action: PayloadAction<Feed>) => {
      let newHippos: hippoState[] = { ...state.hippos};
      if(typeof newHippos[action.payload.id] === 'undefined') {
        newHippos[action.payload.id] = { height: 1, hp: 2, intelligence: 2, strength: 2 }
      } else {
        let height: number = newHippos[action.payload.id].height;
        let hp: number = newHippos[action.payload.id].hp;
        newHippos[action.payload.id] = { height: 1, hp: 2, intelligence: 2, strength: 999 }
      }
      if (action.payload.food == "meat") {
        console.log("is meat");
      }
      return {
        ...state,
        hippos: newHippos 
      };
    },
    walk: (state, action: PayloadAction<Feed>) => {
    },
  },
});
