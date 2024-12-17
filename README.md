# KeaTeka Frontend

The frontend application for KeaTeka, a cleaning service marketplace designed for the Nairobi market. Built with Next.js 13 App Router and TypeScript, following a feature-first architecture pattern.

## Features

- 📱 Progressive Web App (PWA) with offline support
- 🌍 Multi-language Support (English & Swahili)
- 📍 Real-time Location Tracking
- 💳 M-PESA Integration with STK Push
- 🔔 Real-time WebSocket Notifications
- ⏱️ Job Time Tracking
- 📊 Interactive Analytics Dashboard
- 🎨 Responsive Design with shadcn/ui
- 🔄 Real-time Job Matching
- 💰 Dynamic Pricing

## Tech Stack

- **Framework:** Next.js 13 (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS, shadcn/ui
- **State Management:** Zustand
- **Data Fetching:** TanStack Query
- **Form Handling:** React Hook Form, Zod
- **Real-time:** WebSocket
- **Maps:** Google Maps API
- **Payments:** M-PESA API
- **Testing:** Vitest, Testing Library
- **Notifications:** WebSocket, Service Workers

## Prerequisites

- Node.js 18.17 or higher
- pnpm (recommended) or npm
- Firebase project configuration
- Google Maps API key
- M-PESA API credentials

## Getting Started

1. **Clone the repository**
```bash
git clone https://github.com/Garnet-Owl/keateka-frontend.git
cd keateka-frontend
```

2. **Install dependencies**
```bash
pnpm install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
# Edit .env.local with your configuration
```

4. **Run the development server**
```bash
pnpm dev
```

The application will be available at `http://localhost:3000`

## Project Structure

```
keateka-frontend/
├── app/                              # App Router directory
│   ├── (auth)/                      # Auth route group
│   ├── (dashboard)/                 # Dashboard route group
│   │   ├── jobs/                    # Jobs feature
│   │   ├── payments/                # Payments feature
│   │   ├── locations/               # Location feature
│   │   └── reviews/                 # Reviews feature
│   └── api/                         # API routes
├── components/                       # Shared components
│   ├── ui/                          # shadcn/ui components
│   └── shared/                      # Shared feature components
├── lib/                             # Utility functions & libs
│   ├── api/                         # API client
│   ├── hooks/                       # Custom hooks
│   ├── stores/                      # State management
│   └── utils/                       # Utility functions
├── types/                           # TypeScript types
└── tests/                           # Test files
```

## Available Scripts

```bash
# Development
pnpm dev

# Build
pnpm build

# Production
pnpm start

# Testing
pnpm test
pnpm test:watch
pnpm test:coverage

# Linting & Formatting
pnpm lint
pnpm format

# Type Checking
pnpm type-check
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_API_URL` | Backend API URL | Yes |
| `NEXT_PUBLIC_WS_URL` | WebSocket Server URL | Yes |
| `NEXT_PUBLIC_MAPS_KEY` | Google Maps API key | Yes |
| `NEXT_PUBLIC_MPESA_KEY` | M-PESA API key | Yes |
| `NEXT_PUBLIC_MPESA_SECRET` | M-PESA secret | Yes |

## Feature Development

Each feature in KeaTeka follows a modular structure:

```
feature/
├── _components/       # Feature-specific components
├── _hooks/           # Feature-specific hooks
├── _stores/          # Feature-specific state
├── _lib/             # Feature-specific utilities
├── page.tsx          # Main feature page
└── layout.tsx        # Feature layout (if needed)
```

## Testing Strategy

- Unit tests for utilities and hooks
- Component tests with React Testing Library
- Integration tests for key user flows
- E2E tests with Playwright for critical paths

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feat/amazing-feature`)
3. Follow the feature development structure
4. Write tests for your changes
5. Commit using conventional commits (`feat(scope): description`)
6. Push to the branch
7. Open a Pull Request

## API Integration

- REST API for CRUD operations
- WebSocket for real-time updates
- Server-Sent Events for notifications
- M-PESA API for payments
- Google Maps API for location services

## Performance Optimization

- Route groups for code splitting
- Image optimization with next/image
- Static page generation where possible
- Dynamic imports for heavy components
- Service worker for offline support

## Links

- [Backend Repository](https://github.com/Garnet-Owl/keateka-backend)
- [API Documentation](https://api.keateka.com/docs)
- [Design System](https://ui.keateka.com)
- [Production](https://keateka.com)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
