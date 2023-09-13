import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
  name: "status",
  initialState: {
    loggedIn: false,
  },
  reducers: {
    setLoggedInStatus: (state, action) => {
      state.loggedIn = action.payload;
    },
  },
});

export const { setLoggedInStatus } = Slice.actions;
export default Slice.reducer;
