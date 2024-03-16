import { createSlice } from "@reduxjs/toolkit";

const DataSlice = createSlice({
  name: "ShowData",
  initialState: null,
  reducers: {
    hide: () => false,
    show: () => true,
  },
});

export const { hide, show } = DataSlice.actions;

export default DataSlice.reducer;
