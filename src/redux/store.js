import { configureStore } from "@reduxjs/toolkit";
import pcBuilderSlice from "./features/pcBuilder/pcBuilderSlice";

const store = configureStore({
  reducer: {
    pcBuilder: pcBuilderSlice,
  },
});

export default store;
