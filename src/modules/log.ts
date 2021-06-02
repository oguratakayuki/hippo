import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Log = {
  id: number;
  text: string;
};

export type LogState = {
  logs: Log[];
  loading: boolean;
};

const initialState: LogState = {
  logs: [],
  loading: false,
};

export const logSlice = createSlice({
  name: "log",
  initialState,
  reducers: {
    addLog: (state, action: PayloadAction<Log>) => {
      return {
        ...state,
        logs: [...state.logs, action.payload],
        loading: false,
      };
    },
    deleteLog: (state, action: PayloadAction<Pick<Log, "id">>) => {
      return {
        ...state,
        logs: state.logs.filter((log) => log.id !== action.payload.id),
        loading: false,
      };
    },
    setLogLoading: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
  },
});
