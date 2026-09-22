import mongoose from "mongoose";

const educationSchema = new mongoose.Schema(
  {
    degree: {
      type: String,
      default: "",
    },

    institution: {
      type: String,
      default: "",
    },

    location: {
      type: String,
      default: "",
    },

    startDate: {
      type: String,
      default: "",
    },

    endDate: {
      type: String,
      default: "",
    },

    description: {
      type: String,
      default: "",
    },
  },
  { _id: false },
);

const experienceSchema = new mongoose.Schema(
  {
    jobTitle: {
      type: String,
      default: "",
    },

    company: {
      type: String,
      default: "",
    },

    location: {
      type: String,
      default: "",
    },

    startDate: {
      type: String,
      default: "",
    },

    endDate: {
      type: String,
      default: "",
    },

    description: {
      type: String,
      default: "",
    },
  },
  { _id: false },
);

const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: "",
    },

    description: {
      type: String,
      default: "",
    },

    technologies: {
      type: String,
      default: "",
    },

    link: {
      type: String,
      default: "",
    },
  },
  { _id: false },
);

const certificationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: "",
    },

    organization: {
      type: String,
      default: "",
    },

    date: {
      type: String,
      default: "",
    },

    link: {
      type: String,
      default: "",
    },
  },
  { _id: false },
);

const achievementSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      default: "",
    },

    organization: {
      type: String,
      default: "",
    },

    date: {
      type: String,
      default: "",
    },

    description: {
      type: String,
      default: "",
    },
  },
  { _id: false },
);

const resumeSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    /*
      Resume template
      Available:
      modern
      classic
      minimal
      creative
    */
    template: {
      type: String,

      enum: ["modern", "classic", "minimal", "creative"],

      default: "modern",
    },

    personal: {
      fullName: {
        type: String,
        default: "",
      },

      email: {
        type: String,
        default: "",
      },

      phone: {
        type: String,
        default: "",
      },

      location: {
        type: String,
        default: "",
      },

      summary: {
        type: String,
        default: "",
      },
    },

    education: {
      type: [educationSchema],
      default: [],
    },

    experience: {
      type: [experienceSchema],
      default: [],
    },

    skills: {
      type: [String],
      default: [],
    },

    projects: {
      type: [projectSchema],
      default: [],
    },

    certifications: {
      type: [certificationSchema],
      default: [],
    },

    achievements: {
      type: [achievementSchema],
      default: [],
    },

    socialLinks: {
      linkedin: {
        type: String,
        default: "",
      },

      github: {
        type: String,
        default: "",
      },

      portfolio: {
        type: String,
        default: "",
      },
    },
  },

  {
    timestamps: true,
  },
);

const Resume = mongoose.model("Resume", resumeSchema);

export default Resume;
