import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedTemplate: "modern",
};

const templateSlice = createSlice({
  name: "template",

  initialState,

  reducers: {
    setTemplate: (state, action) => {
      state.selectedTemplate = action.payload;
    },

    resetTemplate: (state) => {
      state.selectedTemplate = "modern";
    },
  },
});

export const { setTemplate, resetTemplate } = templateSlice.actions;

export default templateSlice.reducer;
