import { configureStore } from "@reduxjs/toolkit";

import resumeReducer from "./slice/resumeSlice.js";
import authReducer from "./slice/authSlice.js";
import templateReducer from "./slice/templateSlice.js";
import themeReducer from "./slice/themeSlice.js";

export const store = configureStore({
  reducer: {
    resume: resumeReducer,
    auth: authReducer,
    template: templateReducer,
    theme: themeReducer,
  },
});
