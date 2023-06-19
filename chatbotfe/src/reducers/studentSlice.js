// studentSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  age: 23,
  name: "Harv",
};

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    setAge: (state, action) => {
      state.age = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { setAge, setName } = studentSlice.actions;
export default studentSlice.reducer;
