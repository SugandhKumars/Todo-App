import { configureStore } from "@reduxjs/toolkit";
import Data from "./DataSlice";
export const Store = configureStore({
  reducer: {
    showData: Data,
  },
});

export default Store;
