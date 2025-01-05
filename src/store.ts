import { configureStore } from "@reduxjs/toolkit";
import groqSlice from "./features/groqSlice";

export default configureStore({
  reducer: {
    groq: groqSlice,
  },
});
