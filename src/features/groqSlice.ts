import { createSlice } from "@reduxjs/toolkit";

export const groqSlice = createSlice({
  name: "groq",
  initialState: {
    roadMap: [],
  },

  reducers: {
    setRoadMap: (state, action) => {
      state.roadMap = action.payload;
    },
  },
});

export const { setRoadMap } = groqSlice.actions;

export default groqSlice.reducer;
