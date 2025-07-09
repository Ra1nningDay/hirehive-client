# HireHive Interview Platform

An AI-powered interview platform that combines automated pre-screening with intelligent candidate matching. HireHive features a conversational AI interviewer that conducts personalized interviews based on job positions and candidate profiles.

## 🚀 Features

### ✅ Currently Implemented

- **AI Chat Interview**: Real-time conversational interviews using GPT API
- **Multi-step Onboarding**: Job selection and candidate information collection
- **Job Position System**: Predefined job roles with specific requirements
- **Interview Summarization**: AI-powered interview summary generation
- **Persistent State**: Conversation history and user data persistence
- **Responsive Design**: Modern UI with Tailwind CSS

### 🚧 In Development

- Audio recording capabilities
- Video interview features
- HR Dashboard
- Advanced matching algorithms
- Real-time analytics

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **HTTP Client**: Axios
- **UI Components**: Custom components with Radix UI
- **Icons**: Lucide React

## 📁 Project Structure

```
frontend/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.tsx           # Landing page
│   │   ├── interview/         # Interview routes
│   │   └── layout.tsx         # Root layout
│   ├── components/
│   │   ├── chat/              # Chat interface
│   │   └── ui/                # Reusable UI components
│   ├── lib/
│   │   └── api/               # API layer
│   ├── store/                 # Zustand stores
│   └── types/                 # TypeScript definitions
└── public/                    # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and pnpm
- Backend server running (for API endpoints)

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd hirehive-interview/frontend
```

2. Install dependencies

```bash
pnpm install
```

3. Start the development server

```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 🔗 API Integration

### Current Endpoints

- `POST /api/interview/chat` - Send chat messages to GPT API

### Planned Endpoints

- `GET /api/interview/questions` - Get interview questions
- `POST /api/interview/upload` - Upload audio/video files
- `POST /api/match` - Candidate matching engine
- `GET /api/dashboard/*` - HR dashboard data

## 🎯 How It Works

1. **Landing Page**: Candidates select job position and provide basic information
2. **AI Interview**: Real-time chat with AI interviewer tailored to job requirements
3. **Summary Generation**: AI creates interview summary and analysis
4. **Matching (Planned)**: Algorithm matches candidates to job requirements
5. **HR Dashboard (Planned)**: HR team reviews and manages candidates

## 📊 Data Flow

The application uses Zustand for state management with the following key stores:

- **Chat Store**: Manages interview conversations, user selections, and thread tracking
- **Message Types**: Handles user, assistant, and system messages
- **Job Positions**: Defines available job roles and requirements

## 🎨 UI/UX Features

- **Responsive Design**: Works on desktop and mobile devices
- **Real-time Chat**: Smooth conversation flow with typing indicators
- **Modern Interface**: Clean, professional design with Tailwind CSS
- **Accessibility**: Built with accessibility best practices

## 📝 Development Guidelines

### Code Style

- Use kebab-case for filenames
- Use PascalCase for component names
- TypeScript for all client-side code
- Functional components with hooks

### Directory Structure

- `src/app/` - Next.js pages and layouts
- `src/components/` - Reusable components
- `src/lib/` - Utilities and API clients
- `src/store/` - State management
- `src/types/` - TypeScript definitions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🔮 Future Roadmap

- **Audio/Video Recording**: MediaRecorder API integration
- **Advanced Analytics**: Interview performance metrics
- **Multi-language Support**: International candidate support
- **Real-time Collaboration**: HR team collaboration features
- **Mobile App**: React Native application

---

Built with ❤️ using Next.js and TypeScript
