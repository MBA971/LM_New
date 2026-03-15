# EduLearn LMS - Specification

## Project Overview

- **Project Name**: EduLearn LMS
- **Type**: Learning Management System (Web Application)
- **Core Functionality**: A comprehensive platform for creating, managing, and taking online courses with quizzes, progress tracking, and user authentication
- **Target Users**: Educators, students, and institution administrators

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Prisma (SQLite for development)
- NextAuth.js for authentication
- Bun package manager

## UI/UX Specification

### Layout Structure

**Global Layout**
- Sidebar navigation (280px width, collapsible on mobile)
- Main content area with max-width 1400px
- Top header with user menu and notifications

**Pages**
1. Dashboard (home)
2. Courses catalog
3. Course detail/player
4. Admin panel (users, courses management)
5. Profile/Settings

### Visual Design

**Color Palette**
- Primary: `#4F46E5` (Indigo-600)
- Primary Dark: `#4338CA` (Indigo-700)
- Secondary: `#10B981` (Emerald-500)
- Accent: `#F59E0B` (Amber-500)
- Background: `#F8FAFC` (Slate-50)
- Surface: `#FFFFFF`
- Text Primary: `#1E293B` (Slate-800)
- Text Secondary: `#64748B` (Slate-500)
- Border: `#E2E8F0` (Slate-200)
- Success: `#22C55E`
- Error: `#EF4444`

**Typography**
- Font Family: "Plus Jakarta Sans" (headings), "Inter" (body)
- Headings: H1 (32px/700), H2 (24px/600), H3 (20px/600)
- Body: 16px/400, Small: 14px/400

**Spacing**
- Base unit: 4px
- Section padding: 24px
- Card padding: 20px
- Gap between elements: 16px

**Visual Effects**
- Card shadows: `0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)`
- Hover transitions: 150ms ease
- Border radius: 8px (cards), 6px (buttons), 4px (inputs)

### Components

**Sidebar**
- Logo at top
- Navigation links with icons
- User profile at bottom
- Active state: indigo background with white text

**Course Card**
- Thumbnail image (16:9 ratio)
- Title, instructor name
- Progress bar (if enrolled)
- Rating stars
- Price or "Free" badge

**Lesson Player**
- Video/content area
- Sidebar with lesson list
- Next/Previous navigation
- Mark as complete button

**Quiz Component**
- Question display
- Multiple choice options
- Timer (optional)
- Submit and results view

**Progress Indicators**
- Circular progress for overall
- Linear progress bars for courses
- Lesson checkmarks

## Functionality Specification

### Authentication
- Email/password registration and login
- Session management with NextAuth.js
- Role-based access (student, teacher, admin)
- Protected routes

### Course Management (Teacher/Admin)
- Create/edit/delete courses
- Add modules and lessons
- Upload content (text, video URLs)
- Create quizzes
- View enrollment statistics

### Student Features
- Browse and search courses
- Enroll in courses
- Watch lessons
- Take quizzes
- Track progress
- View certificates (future)

### Quiz System
- Multiple choice questions
- Instant feedback
- Score tracking
- Retry functionality

### Progress Tracking
- Lesson completion status
- Quiz scores
- Overall course progress percentage
- Time spent tracking

## Database Schema (Prisma)

```prisma
model User {
  id            String    @id @default(cuid())
  email         String    @unique
  name          String?
  password      String
  role          Role      @default(STUDENT)
  avatar        String?
  courses       Course[]  @relation("Instructor")
  enrollments   Enrollment[]
  progress      Progress[]
  quizAttempts  QuizAttempt[]
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
}

enum Role {
  STUDENT
  TEACHER
  ADMIN
}

model Course {
  id          String   @id @default(cuid())
  title       String
  description String
  thumbnail   String?
  price       Float    @default(0)
  isPublished Boolean  @default(false)
  instructor  User     @relation("Instructor", fields: [instructorId], references: [id])
  instructorId String
  modules     Module[]
  enrollments Enrollment[]
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

model Module {
  id        String   @id @default(cuid())
  title     String
  order     Int
  course    Course   @relation(fields: [courseId], references: [id], onDelete: Cascade)
  courseId  String
  lessons   Lesson[]
}

model Lesson {
  id          String   @id @default(cuid())
  title       String
  content     String
  videoUrl    String?
  order       Int
  duration    Int?
  module      Module   @relation(fields: [moduleId], references: [id], onDelete: Cascade)
  moduleId    String
  quiz        Quiz?
  progress    Progress[]
}

model Quiz {
  id        String   @id @default(cuid())
  lesson    Lesson   @relation(fields: [lessonId], references: [id], onDelete: Cascade)
  lessonId  String   @unique
  questions Question[]
}

model Question {
  id          String   @id @default(cuid())
  quiz        Quiz     @relation(fields: [quizId], references: [id], onDelete: Cascade)
  quizId      String
  text        String
  options     Json
  correctAnswer Int
  order       Int
}

model Enrollment {
  id        String   @id @default(cuid())
  user      User     @relation(fields: [userId], references: [id])
  userId    String
  course    Course   @relation(fields: [courseId], references: [id])
  courseId  String
  progress  Progress[]
  createdAt DateTime @default(now())
  @@unique([userId, courseId])
}

model Progress {
  id          String   @id @default(cuid())
  user        User     @relation(fields: [userId], references: [id])
  userId      String
  lesson      Lesson   @relation(fields: [lessonId], references: [id])
  lessonId    String
  completed   Boolean  @default(false)
  enrollment  Enrollment @relation(fields: [enrollmentId], references: [id])
  enrollmentId String
  @@unique([userId, lessonId])
}

model QuizAttempt {
  id        String   @id @default(cuid())
  user      User     @relation(fields: [userId], references: [id])
  userId    String
  quiz      Quiz     @relation(fields: [quizId], references: [id])
  quizId    String
  score     Int
  answers   Json
  createdAt DateTime @default(now())
}
```

## Acceptance Criteria

1. ✅ User can register and login
2. ✅ Dashboard shows enrolled courses and progress
3. ✅ Course catalog displays all available courses
4. ✅ Teachers can create and manage courses
5. ✅ Students can enroll in courses
6. ✅ Lesson player displays content and tracks completion
7. ✅ Quizzes work with instant feedback
8. ✅ Progress is tracked and displayed
9. ✅ Responsive design works on mobile
10. ✅ No TypeScript or lint errors
