import testimonials from "@/data/testimonialsArr";
import { createSlice } from "@reduxjs/toolkit";

// Define the initial state using that type
const initialState = {
  testimonials,
};

export const testimonialSlice = createSlice({
  name: "testimonial",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addTestimonial: (state, action) => {
      state.testimonials.push(action.payload);
    },
    deleteTestimonial: (state, action) => {
      state.testimonials = state.testimonials.filter(
        (testimonial) => testimonial.id !== action.payload
      );
    },
    editTestimonial: (state, action) => {
      state.testimonials = state.testimonials.map((testimonial) =>
        testimonial.id === action.payload.id ? action.payload : testimonial
      );
    },
  },
});
export const { addTestimonial, deleteTestimonial, editTestimonial } =
  testimonialSlice.actions;

// Other code such as selectors can use the imported `RootState` type
//export const testimonials = (state) => state.testimonials;

export default testimonialSlice.reducer;
