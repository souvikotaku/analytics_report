import { createSlice } from "@reduxjs/toolkit";


// Initial state
const initialState = {
  selectedObject: null,
  showlightmode: null,
 
};

const selectedSlice = createSlice({
  name: "selected",
  initialState,
  reducers: {
    setselectedObject: (state, action) => {
      state.selectedObject = action.payload;
    },
    setshowlightmode: (state, action) => {
      state.showlightmode = action.payload;
    },
  },
});

export const { setselectedObject,setshowlightmode } =
selectedSlice.actions;

export default selectedSlice.reducer;
