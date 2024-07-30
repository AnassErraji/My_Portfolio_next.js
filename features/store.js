import { configureStore } from "@reduxjs/toolkit";
import testimonialSlice from "./testimonialSlice";
//import counterReducer from "@/features/counter/counterSlice"
export const store = configureStore({
  reducer: {
    testimonials: testimonialSlice,
  },
});
