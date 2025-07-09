---
applyTo: "**"
---

# HireHive Interview Platform

## Project Overview

HireHive is an AI-powered interview platform that combines automated pre-screening with intelligent candidate matching. The platform features a conversational AI interviewer that conducts personalized interviews based on job positions and candidate profiles.

## Current Project Status

### ✅ Implemented Features

1. **Landing Page** - Multi-step onboarding process with job selection and user info collection
2. **AI Chat Interview** - Real-time conversational interview using GPT API
3. **Job Position System** - Predefined job roles with specific requirements
4. **User Profile Management** - Collect and store candidate information
5. **Interview Summarization** - AI-powered interview summary generation
6. **Persistent State** - Zustand store with localStorage persistence

### 🚧 In Progress

- Audio recording capabilities
- Video interview features
- HR Dashboard
- Advanced matching algorithms

## Technical Architecture

### Frontend Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **HTTP Client**: Axios
- **UI Components**: Custom components with Radix UI primitives
- **Icons**: Lucide React

### Key Dependencies

```json
{
  "next": "15.1.8",
  "react": "^19.0.0",
  "zustand": "^5.0.5",
  "axios": "^1.9.0",
  "tailwindcss": "^3.4.1",
  "lucide-react": "^0.511.0"
}
```

## Project Structure

```
frontend/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.tsx           # Landing page with job selection
│   │   ├── layout.tsx         # Root layout
│   │   ├── interview/         # Interview routes
│   │   │   ├── page.tsx       # Main interview chat
│   │   │   └── summarize/
│   │   │       └── [threadId]/
│   │   │           └── page.tsx # Interview summary
│   │   └── globals.css        # Global styles
│   ├── components/
│   │   ├── chat/              # Chat interface components
│   │   │   ├── chat.tsx       # Main chat component
│   │   │   ├── chat-header.tsx
│   │   │   ├── chat-input.tsx
│   │   │   ├── message.tsx
│   │   │   └── typing-indicator.tsx
│   │   └── ui/                # Reusable UI components
│   │       ├── button.tsx
│   │       ├── avatar.tsx
│   │       ├── alert.tsx
│   │       └── textarea.tsx
│   ├── hooks/
│   │   ├── use-audio-recorder.ts
│   │   └── use-chatbot.ts
│   ├── lib/
│   │   ├── utils.ts           # Utility functions
│   │   └── api/               # API layer
│   │       ├── axios-instance.ts
│   │       └── chatbot-api.ts
│   ├── store/
│   │   └── use-chat-store.ts  # Zustand store
│   └── types/
│       ├── chat.ts            # Chat-related types
│       ├── job-positions.ts   # Job position definitions
│       └── global.d.ts        # Global type definitions
└── public/                    # Static assets
```

## Development Guidelines

### Code Style

- **File Naming**: Use kebab-case for all filenames (e.g., `user-profile.tsx`, `interview-session.ts`)
- **Component Names**: Use PascalCase for all component names
- **Language**: TypeScript for all client-side code
- **Components**: Use functional components and hooks (no class components)
- **Routing**: Use Next.js App Router (no React Router)

### Technology Stack Rules

- **Styling**: Tailwind CSS for all styling
- **Data Fetching**: Axios for API calls (TanStack Query to be added later)
- **State Management**: Zustand for global state
- **Forms**: React Hook Form + Zod validation (to be implemented)
- **Testing**: React Testing Library + Jest (to be implemented)
- **Linting**: ESLint + Prettier

### Directory Structure Rules

- `src/app/` - Next.js App Router pages and layouts
- `src/components/` - Reusable UI components
- `src/hooks/` - Custom React hooks
- `src/lib/` - Utility functions and API clients
- `src/store/` - Zustand stores
- `src/types/` - TypeScript type definitions
- `public/` - Static assets (images, fonts, etc.)

## API Endpoints

### Current Backend Integration

- `POST /api/interview/chat` - Send chat messages to GPT API
  - Input: `{ messages: ChatMessage[], thread_id?: string }`
  - Output: AI response with thread_id

### Planned Backend Endpoints

- `GET /api/interview/questions` - Get interview questions
- `POST /api/interview/upload` - Upload audio/video files
- `POST /api/match` - Candidate matching engine
- `GET /api/dashboard/*` - HR dashboard data

## Features Implementation

### 1. AI Pre-screening Interview (✅ IMPLEMENTED)

**Current Implementation:**

- Route: `/interview` (main chat interface)
- Route: `/interview/summarize/[threadId]` (interview summary)
- Real-time text-based interview using GPT API
- Thread-based conversation tracking
- Persistent conversation state with Zustand
- Job position context integration

**Components:**

- `Chat` - Main interview interface
- `ChatHeader` - Interview header with branding
- `ChatInput` - Message input with send functionality
- `Message` - Individual message display
- `TypingIndicator` - Loading state indicator

**Next Phase:**

- Audio recording using MediaRecorder API (format: mp3)
- Video recording (webcam) support [format: mp4]
- Question-by-question navigation

### 2. Landing Page & Job Selection (✅ IMPLEMENTED)

**Current Implementation:**

- Multi-step onboarding process
- Job position selection from predefined list
- User information collection (name, age, strengths, etc.)
- Smooth transitions between steps
- Job position data stored in `types/job-positions.ts`

**Job Positions Available:**

- Corporate Strategy Officer (Financial Industry)
- Detail Strategy & Space Analyst (Retail Industry)
- [Additional positions defined in job-positions.ts]

### 3. Matching Engine (🚧 PLANNED)

**Backend Requirements:**

- `POST /api/match`
- Input: Candidate Profile, Job Profile (JSON)
- Output: Ranked Score, Reasoning Summary (JSON)
- Dynamic weighting configuration

**Frontend Requirements:**

- Score visualization (radar chart or weighted bar)
- Mismatch reasoning display
- Integration with interview results

### 4. Video Interview Platform (🚧 PLANNED)

**Features:**

- Webcam recording via getUserMedia
- Time limit per question
- Limited number of retries
- Real-time video processing

### 5. HR Dashboard (🚧 PLANNED)

**Features:**

- Admin route `/dashboard`
- Candidate list view with filters
- Sort by: Score, Interview Time, Language
- Shortlist functionality
- Interview preview (transcript, scores, media)

## Data Flow

### Chat Store (Zustand)

```typescript
interface ChatState {
  threadId?: string; // Interview session ID
  messages: Message[]; // Chat history
  userSelection: UserSelection; // Job & user info
  setThreadId: (id: string) => void;
  setMessages: (msgs: Message[]) => void;
  setUserSelection: (selection: UserSelection) => void;
  generateWelcomeMessage: () => Message;
}
```

### Message Types

```typescript
interface Message {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  timestamp: string;
}
```

### Job Position Structure

```typescript
interface JobPosition {
  id: string;
  title: string;
  subtitle: string;
  color: string;
  description: string[];
}
```

## Development Workflow

### Getting Started

1. Install dependencies: `pnpm install`
2. Run development server: `pnpm dev`
3. Open [http://localhost:3000](http://localhost:3000)

### Key Commands

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

### Adding New Features

1. Create types in `src/types/`
2. Add API functions in `src/lib/api/`
3. Create components in `src/components/`
4. Add routes in `src/app/`
5. Update store if needed in `src/store/`

## Backend Development (Future)

### Planned Tech Stack

- **Framework**: Gin (Go) for RESTful APIs
- **Database**: PostgreSQL with sqlc ORM
- **Caching**: Redis
- **Migrations**: sqlc
- **Testing**: Go built-in testing
- **Deployment**: GitHub Actions CI/CD

### Key Backend Features

- GPT API integration for chat responses
- Audio/video file processing
- Candidate matching algorithms
- Interview analytics and reporting
- User authentication and authorization

## LLM Integration Guidelines

### Current GPT API Usage

- Used exclusively for HR chatbot features
- Context includes job position and user profile
- Thread-based conversation tracking
- Personalized welcome messages based on user selection

### Future AI Processing

- Voice emotion analysis
- NLP keyword extraction
- Keyword matching (e.g., "customer-focused", "problem-solving")
- Pitch, tone, and pause analysis
- Automated interview scoring
