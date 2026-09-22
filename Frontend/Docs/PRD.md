ResumeForge — Product Requirements Document

Product Name: ResumeForge
Tagline: Build a resume worth remembering.
Project Type: College Minor Full-Stack Project
Primary Goal: Allow users to create, customize, preview, save, and download professional resumes using multiple templates.

1. Product Vision

ResumeForge is a web-based resume builder where a user can:

Create an account
Create a resume
Enter personal and professional information
Select a resume template
Customize the appearance
See the resume live while editing
Save the resume to their account
Edit it later
Duplicate/delete resumes
Download the final resume as PDF 2. Target Users
Students
College students
Freshers
Internship seekers
Job Seekers
Developers
Designers
Other professionals

For your minor project, the primary target can be students and freshers.

3. Core Features
   A. Authentication
   Register

Fields:

Full Name
Email
Password
Confirm Password

Backend:

POST /api/auth/register
Login
Email
Password

Backend:

POST /api/auth/login
Logout

Clear authentication token/session.

Protected Routes

Only logged-in users can access:

/dashboard
/resumes
/resume/:id/edit
/profile 4. Home Page

Route:

/
Sections
Navbar
Logo: ResumeForge

Home
Features
Templates
How It Works

Login
Get Started
Hero
Build a resume worth remembering.

Create professional resumes in minutes
with beautiful templates and an easy-to-use builder.

[Create Your Resume]
[Explore Templates]

Visual:

             Resume Preview
          ┌───────────────────┐
          │ JOHN DOE           │
          │ Full Stack Dev     │
          │───────────────────│
          │ EXPERIENCE         │
          │ ...               │
          │ PROJECTS           │
          │ ...               │
          └───────────────────┘

Features Section

Show:

Easy Resume Builder
Professional Templates
Live Preview
Customization
Cloud Saving
PDF Export
How It Works
01 Create Account
↓
02 Build Resume
↓
03 Customize
↓
04 Preview
↓
05 Download PDF
Templates Preview

Show 3–4 templates.

Modern
Professional
Minimal
Creative

CTA:

View All Templates →
CTA
Ready to build your resume?

Create your professional resume today.

[Start Building] 5. Features Page

Route:

/features

Detailed feature presentation:

Resume Builder

Create and manage all resume information.

Live Preview

See changes immediately.

Templates

Multiple professional layouts.

Customization

Change:

Font
Font size
Accent color
Spacing
PDF Export

Download resume in A4 PDF format.

Resume Management

Create, edit, duplicate and delete resumes.

6. Templates Page

Route:

/templates

Display:

## Template Card

Preview
Template Name
Description

[Use Template]

Example:

Modern
Professional
Minimal
Creative

When user clicks Use Template:

if logged in
→ /resume/create
else
→ /login 7. Authentication Pages
Login
Welcome Back

Email
[____________]

Password
[____________]

[Login]

Don't have an account?
Create Account
Register
Create your account

Full Name
Email
Password
Confirm Password

[Create Account] 8. Dashboard

Route:

/dashboard
Dashboard Header
Welcome back, Dishant 👋

Build your next professional resume.
Statistics
Total Resumes 3
Last Updated Today
Draft Resumes 1
Create Resume

Large card:

- Create New Resume
  My Resumes

Cards:

┌──────────────────────┐
│ Resume Preview │
│ │
│ Software Developer │
│ Last edited: Today │
│ │
│ [Edit] [Duplicate] │
│ [Download] [Delete] │
└──────────────────────┘ 9. Resume Builder

This is the main feature.

Route:

/resume/:id/edit

Recommended layout:

┌─────────────────────────────────────────────────────────┐
│ ResumeForge Save Preview Download PDF │
├───────────────────┬─────────────────────────────────────┤
│ │ │
│ Resume Sections │ LIVE RESUME │
│ │ │
│ Personal Info │ ┌───────────────────┐ │
│ Summary │ │ │ │
│ Education │ │ Resume │ │
│ Experience │ │ Preview │ │
│ Projects │ │ │ │
│ Skills │ │ │ │
│ Certificates │ │ │ │
│ Achievements │ │ │ │
│ Languages │ │ │ │
│ │ └───────────────────┘ │
└───────────────────┴─────────────────────────────────────┘ 10. Resume Sections
Personal Information
Full Name
Professional Title
Email
Phone
Location
Profile Photo
LinkedIn
GitHub
Portfolio
Professional Summary
Professional Summary
[........................................]
[........................................]
Education

Multiple entries:

Degree
Institution
Location
Start Year
End Year
Description

Example:

B.Tech Computer Science
ABC University
2025 - 2028

Buttons:

- Add Education
  Edit
  Delete
  Experience
  Job Title
  Company
  Location
  Start Date
  End Date
  Currently Working
  Description

Allow multiple experiences.

Projects
Project Name
Role
Description
Technologies
Project URL
GitHub URL
Start Date
End Date
Skills

Example:

JavaScript
React
Node.js
Express
MongoDB
Python
Git

Could use a tag-based UI:

[React ×] [Node.js ×] [MongoDB ×]

- Add Skill
  Certifications
  Certificate Name
  Issuing Organization
  Issue Date
  Credential URL
  Achievements
  Achievement Title
  Description
  Date
  Languages
  English — Professional
  Hindi — Native
  Hobbies / Interests

Optional section.

11. Template System

Instead of storing the complete resume separately for every template, store the resume data once.

Example:

{
template: "modern",
personalInfo: {...},
education: [...],
skills: [...],
projects: [...]
}

Then:

Resume Data
↓
Selected Template
↓
Template Component
↓
Live Preview

Frontend:

ModernTemplate.jsx
MinimalTemplate.jsx
ProfessionalTemplate.jsx
CreativeTemplate.jsx 12. Customization

Route/Panel:

Customize

Options:

Font
Inter
Roboto
Poppins
Open Sans
Lato
Font Size
Small
Medium
Large
Accent Color

Allow user to select an accent color.

Spacing
Compact
Normal
Relaxed
Section Visibility

Example:

☑ Summary
☑ Skills
☑ Experience
☑ Projects
☐ Hobbies 13. Live Preview

The preview should update whenever the user changes data.

Example:

User types:

Name:
Dishant Chaudhary

          ↓

Redux/State Update

          ↓

Resume Preview

DISHANT CHAUDHARY
Full Stack Developer

No page refresh.

14. Auto Save

Resume should automatically save changes.

Possible implementation:

User changes data
↓
Debounce 1–2 seconds
↓
PUT /api/resumes/:id
↓
Database

Show:

✓ Saved

or:

Saving... 15. Resume Management

Users can:

Create
POST /api/resumes
Read
GET /api/resumes
GET /api/resumes/:id
Update
PUT /api/resumes/:id
Delete
DELETE /api/resumes/:id
Duplicate
POST /api/resumes/:id/duplicate

This gives you a proper CRUD-based full-stack project.

16. PDF Export

Button:

Download PDF

Flow:

Resume Data
↓
Selected Template
↓
Resume Preview
↓
PDF Generator
↓
A4 PDF

PDF should contain:

Proper margins
Page breaks
Resume content
Selected template styling 17. Profile Page

Route:

/profile

Display:

Profile

Name
Email

[Edit Profile]

Account Created
Number of Resumes 18. Backend Architecture

I recommend this structure:

backend/
│
├── config/
│ └── db.js
│
├── controllers/
│ ├── authController.js
│ ├── resumeController.js
│ ├── templateController.js
│ └── userController.js
│
├── models/
│ ├── User.js
│ └── Resume.js
│
├── routes/
│ ├── authRoutes.js
│ ├── resumeRoutes.js
│ ├── templateRoutes.js
│ └── userRoutes.js
│
├── middleware/
│ ├── authMiddleware.js
│ ├── errorMiddleware.js
│ └── validationMiddleware.js
│
├── services/
│ └── pdfService.js
│
├── utils/
│ ├── generateToken.js
│ └── validators.js
│
├── uploads/
│ └── profiles/
│
├── .env
├── server.js
├── package.json
└── README.md 19. Frontend Architecture
frontend/
│
├── public/
│
├── src/
│ │
│ ├── assets/
│ │ ├── images/
│ │ └── icons/
│ │
│ ├── components/
│ │ │
│ │ ├── common/
│ │ │ ├── Button.jsx
│ │ │ ├── Input.jsx
│ │ │ ├── Modal.jsx
│ │ │ ├── Loader.jsx
│ │ │ └── Toast.jsx
│ │ │
│ │ ├── navbar/
│ │ │ └── Navbar.jsx
│ │ │
│ │ ├── home/
│ │ │ ├── Hero.jsx
│ │ │ ├── Features.jsx
│ │ │ ├── HowItWorks.jsx
│ │ │ ├── TemplatePreview.jsx
│ │ │ └── CTA.jsx
│ │ │
│ │ ├── dashboard/
│ │ │ ├── DashboardHeader.jsx
│ │ │ ├── StatsCards.jsx
│ │ │ ├── ResumeCard.jsx
│ │ │ └── ResumeGrid.jsx
│ │ │
│ │ ├── resume/
│ │ │ ├── ResumeBuilder.jsx
│ │ │ ├── ResumeForm.jsx
│ │ │ ├── ResumePreview.jsx
│ │ │ ├── ResumeToolbar.jsx
│ │ │ └── SectionNavigation.jsx
│ │ │
│ │ ├── forms/
│ │ │ ├── PersonalInfoForm.jsx
│ │ │ ├── SummaryForm.jsx
│ │ │ ├── EducationForm.jsx
│ │ │ ├── ExperienceForm.jsx
│ │ │ ├── ProjectsForm.jsx
│ │ │ ├── SkillsForm.jsx
│ │ │ ├── CertificationForm.jsx
│ │ │ ├── AchievementForm.jsx
│ │ │ └── LanguageForm.jsx
│ │ │
│ │ ├── templates/
│ │ │ ├── ModernTemplate.jsx
│ │ │ ├── MinimalTemplate.jsx
│ │ │ ├── ProfessionalTemplate.jsx
│ │ │ └── CreativeTemplate.jsx
│ │ │
│ │ └── customization/
│ │ ├── FontSelector.jsx
│ │ ├── ColorSelector.jsx
│ │ ├── SpacingSelector.jsx
│ │ └── SectionVisibility.jsx
│ │
│ ├── pages/
│ │ ├── Home.jsx
│ │ ├── Features.jsx
│ │ ├── Templates.jsx
│ │ ├── Login.jsx
│ │ ├── Register.jsx
│ │ ├── Dashboard.jsx
│ │ ├── ResumeCreate.jsx
│ │ ├── ResumeEdit.jsx
│ │ ├── ResumePreviewPage.jsx
│ │ └── Profile.jsx
│ │
│ ├── layouts/
│ │ ├── PublicLayout.jsx
│ │ └── DashboardLayout.jsx
│ │
│ ├── redux/
│ │ ├── store.js
│ │ │
│ │ └── slices/
│ │ ├── authSlice.js
│ │ ├── resumeSlice.js
│ │ └── uiSlice.js
│ │
│ ├── services/
│ │ ├── api.js
│ │ ├── authApi.js
│ │ └── resumeApi.js
│ │
│ ├── hooks/
│ │ ├── useAuth.js
│ │ ├── useResume.js
│ │ └── useDebounce.js
│ │
│ ├── utils/
│ │ ├── validators.js
│ │ ├── pdf.js
│ │ └── constants.js
│ │
│ ├── routes/
│ │ ├── AppRoutes.jsx
│ │ ├── ProtectedRoute.jsx
│ │ └── PublicRoute.jsx
│ │
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
│
├── .env
├── package.json
├── vite.config.js
└── README.md 20. Database Design
User Collection
User {
\_id,
name,
email,
password,
avatar,
createdAt,
updatedAt
}

Password should be stored as a bcrypt hash, never plain text.

21. Resume Schema

Main structure:

Resume {
\_id,

user,

title,

template,

customization: {
font,
fontSize,
accentColor,
spacing
},

personalInfo: {
fullName,
title,
email,
phone,
location,
profileImage,
linkedin,
github,
portfolio
},

summary,

education: [],

experience: [],

projects: [],

skills: [],

certifications: [],

achievements: [],

languages: [],

hobbies: [],

sectionVisibility: {
summary,
education,
experience,
projects,
skills,
certifications,
achievements,
languages,
hobbies
},

createdAt,
updatedAt
} 22. API Structure
Authentication
POST /api/auth/register
POST /api/auth/login
GET /api/auth/me
POST /api/auth/logout
Resume
POST /api/resumes
GET /api/resumes
GET /api/resumes/:id
PUT /api/resumes/:id
DELETE /api/resumes/:id
POST /api/resumes/:id/duplicate
User
GET /api/users/profile
PUT /api/users/profile
Templates

Could keep templates frontend-only because the templates themselves are UI components.

If you want an API:

GET /api/templates
GET /api/templates/:id

But for a minor project, this is optional.

23. Authentication Flow
    REGISTER
    ↓
    Backend validates data
    ↓
    Hash password using bcrypt
    ↓
    Save User in MongoDB
    ↓
    Generate JWT
    ↓
    Return token
    ↓
    Frontend stores authentication state

Login:

LOGIN
↓
Find user
↓
Compare password
↓
Generate JWT
↓
Frontend receives token
↓
Protected APIs use Bearer token 24. Resume Creation Flow
Click "Create Resume"
↓
Select Template
↓
Create empty Resume document
↓
Backend returns Resume ID
↓
Open Resume Builder
↓
Fill information
↓
Auto Save
↓
MongoDB 25. Complete User Journey
HOME
│
┌───────────┴───────────┐
↓ ↓
Login Register
│ │
└───────────┬───────────┘
↓
DASHBOARD
│
Create Resume
↓
Choose Template
↓
RESUME BUILDER
│
┌─────────────┼──────────────┐
↓ ↓ ↓
Resume Customize Preview
Data
│ │ │
└─────────────┼──────────────┘
↓
Auto Save
↓
MongoDB
↓
Download PDF 26. Recommended Tech Stack
Frontend
React
Vite
Tailwind CSS
React Router
Redux Toolkit
Axios
Framer Motion
Lucide React / Font Awesome
Backend
Node.js
Express.js
MongoDB
Mongoose
JWT
bcrypt
dotenv
cors
PDF
html2canvas
jsPDF 27. What NOT to Build

Since this is a minor project, don't unnecessarily add:

❌ Admin Dashboard
❌ Payment Gateway
❌ Job Portal
❌ Recruiter System
❌ AI Resume Generator
❌ AI Chatbot
❌ Job Matching
❌ Email Campaigns
❌ Subscription System
❌ Complex Analytics

Those features will increase development time without being necessary to demonstrate the core full-stack concepts.

28. Final MVP

Your actual working project should definitely have:

✅ Home Page
✅ Features Page
✅ Templates Page
✅ Register
✅ Login
✅ JWT Authentication
✅ Dashboard
✅ Create Resume
✅ Edit Resume
✅ Delete Resume
✅ Duplicate Resume
✅ Resume CRUD
✅ Multiple Resume Sections
✅ Multiple Templates
✅ Live Preview
✅ Customization
✅ Auto Save
✅ MongoDB
✅ PDF Download
✅ Profile
✅ Responsive UI
