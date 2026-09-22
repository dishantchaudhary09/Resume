import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
  createResume as createResumeApi,
  getResume,
  getResumes,
  updateResume as updateResumeApi,
  deleteResume as deleteResumeApi,
} from "../../service/api";

const defaultPersonal = {
  fullName: "",
  email: "",
  phone: "",
  location: "",
  summary: "",
};

const defaultSocialLinks = {
  linkedin: "",
  github: "",
  portfolio: "",
};

const initialState = {
  resumeId: null,

  // Template selected for the current resume
  template: "modern",

  resumes: [],

  personal: defaultPersonal,

  education: [],

  experience: [],

  skills: [],

  projects: [],

  certifications: [],

  achievements: [],

  socialLinks: defaultSocialLinks,

  loading: false,
  saving: false,
  error: null,
};

/* =========================================================
   ASYNC ACTIONS
========================================================= */

export const createResume = createAsyncThunk(
  "resume/createResume",
  async (resumeData, { rejectWithValue }) => {
    try {
      const response = await createResumeApi(resumeData);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to create resume",
      );
    }
  },
);

export const fetchResumes = createAsyncThunk(
  "resume/fetchResumes",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getResumes();
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch resumes",
      );
    }
  },
);

export const fetchResume = createAsyncThunk(
  "resume/fetchResume",
  async (id, { rejectWithValue }) => {
    try {
      const response = await getResume(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch resume",
      );
    }
  },
);

export const updateResume = createAsyncThunk(
  "resume/updateResume",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await updateResumeApi(id, data);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to update resume",
      );
    }
  },
);

export const deleteResume = createAsyncThunk(
  "resume/deleteResume",
  async (id, { rejectWithValue }) => {
    try {
      await deleteResumeApi(id);
      return id;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to delete resume",
      );
    }
  },
);

/* =========================================================
   LOAD RESUME INTO BUILDER
========================================================= */

const loadResumeData = (state, resume) => {
  state.resumeId = resume._id;

  state.template = resume.template || "modern";

  state.personal = resume.personal || {
    ...defaultPersonal,
  };

  state.education = resume.education || [];

  state.experience = resume.experience || [];

  state.skills = resume.skills || [];

  state.projects = resume.projects || [];

  state.certifications = resume.certifications || [];

  state.achievements = resume.achievements || [];

  state.socialLinks = resume.socialLinks || {
    ...defaultSocialLinks,
  };
};

/* =========================================================
   SLICE
========================================================= */

const resumeSlice = createSlice({
  name: "resume",

  initialState,

  reducers: {
    updatePersonal: (state, action) => {
      state.personal = {
        ...state.personal,
        ...action.payload,
      };
    },

    addEducation: (state, action) => {
      state.education.push(action.payload);
    },

    updateEducation: (state, action) => {
      const { index, data } = action.payload;

      if (state.education[index]) {
        state.education[index] = {
          ...state.education[index],
          ...data,
        };
      }
    },

    deleteEducation: (state, action) => {
      state.education.splice(action.payload, 1);
    },

    addExperience: (state, action) => {
      state.experience.push(action.payload);
    },

    updateExperience: (state, action) => {
      const { index, data } = action.payload;

      if (state.experience[index]) {
        state.experience[index] = {
          ...state.experience[index],
          ...data,
        };
      }
    },

    deleteExperience: (state, action) => {
      state.experience.splice(action.payload, 1);
    },

    updateSkills: (state, action) => {
      state.skills = action.payload;
    },

    addProject: (state, action) => {
      state.projects.push(action.payload);
    },

    updateProject: (state, action) => {
      const { index, data } = action.payload;

      if (state.projects[index]) {
        state.projects[index] = {
          ...state.projects[index],
          ...data,
        };
      }
    },

    deleteProject: (state, action) => {
      state.projects.splice(action.payload, 1);
    },

    addCertification: (state, action) => {
      state.certifications.push(action.payload);
    },

    updateCertification: (state, action) => {
      const { index, data } = action.payload;

      if (state.certifications[index]) {
        state.certifications[index] = {
          ...state.certifications[index],
          ...data,
        };
      }
    },

    deleteCertification: (state, action) => {
      state.certifications.splice(action.payload, 1);
    },

    addAchievement: (state, action) => {
      state.achievements.push(action.payload);
    },

    updateAchievement: (state, action) => {
      const { index, data } = action.payload;

      if (state.achievements[index]) {
        state.achievements[index] = {
          ...state.achievements[index],
          ...data,
        };
      }
    },

    deleteAchievement: (state, action) => {
      state.achievements.splice(action.payload, 1);
    },

    updateSocialLinks: (state, action) => {
      state.socialLinks = {
        ...state.socialLinks,
        ...action.payload,
      };
    },

    updateTemplate: (state, action) => {
      state.template = action.payload;
    },

    clearResume: (state) => {
      state.resumeId = null;

      state.template = "modern";

      state.personal = {
        ...defaultPersonal,
      };

      state.education = [];

      state.experience = [];

      state.skills = [];

      state.projects = [];

      state.certifications = [];

      state.achievements = [];

      state.socialLinks = {
        ...defaultSocialLinks,
      };

      state.error = null;
    },

    clearError: (state) => {
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    /* CREATE */

    builder
      .addCase(createResume.pending, (state) => {
        state.saving = true;
        state.error = null;
      })

      .addCase(createResume.fulfilled, (state, action) => {
        state.saving = false;

        loadResumeData(state, action.payload);

        state.resumes.unshift(action.payload);
      })

      .addCase(createResume.rejected, (state, action) => {
        state.saving = false;
        state.error = action.payload;
      });

    /* GET ALL */

    builder
      .addCase(fetchResumes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchResumes.fulfilled, (state, action) => {
        state.loading = false;
        state.resumes = action.payload;
      })

      .addCase(fetchResumes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    /* GET ONE */

    builder
      .addCase(fetchResume.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchResume.fulfilled, (state, action) => {
        state.loading = false;

        loadResumeData(state, action.payload);
      })

      .addCase(fetchResume.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    /* UPDATE */

    builder
      .addCase(updateResume.pending, (state) => {
        state.saving = true;
        state.error = null;
      })

      .addCase(updateResume.fulfilled, (state, action) => {
        state.saving = false;

        loadResumeData(state, action.payload);

        const index = state.resumes.findIndex(
          (resume) => resume._id === action.payload._id,
        );

        if (index !== -1) {
          state.resumes[index] = action.payload;
        }
      })

      .addCase(updateResume.rejected, (state, action) => {
        state.saving = false;
        state.error = action.payload;
      });

    /* DELETE */

    builder
      .addCase(deleteResume.fulfilled, (state, action) => {
        state.resumes = state.resumes.filter(
          (resume) => resume._id !== action.payload,
        );

        if (state.resumeId === action.payload) {
          state.resumeId = null;
        }
      })

      .addCase(deleteResume.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const {
  updatePersonal,

  addEducation,
  updateEducation,
  deleteEducation,

  addExperience,
  updateExperience,
  deleteExperience,

  updateSkills,

  addProject,
  updateProject,
  deleteProject,

  addCertification,
  updateCertification,
  deleteCertification,

  addAchievement,
  updateAchievement,
  deleteAchievement,

  updateSocialLinks,

  updateTemplate,

  clearResume,
  clearError,
} = resumeSlice.actions;

export default resumeSlice.reducer;
