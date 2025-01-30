import { createSlice } from "@reduxjs/toolkit";


// Initial state
const initialState = {
  selectedObject: null,
 
};

const selectedSlice = createSlice({
  name: "selected",
  initialState,
  reducers: {
    setselectedObject: (state, action) => {
      state.selectedObject = action.payload;
    },
  },
});

export const { setselectedObject } =
selectedSlice.actions;

export default selectedSlice.reducer;
