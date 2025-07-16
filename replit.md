# Portfolio Website

## Overview

This is a modern, responsive portfolio website built with React, Express.js, and PostgreSQL. The application features a full-stack architecture with a React frontend, Express API backend, and database integration using Drizzle ORM. The site includes sections for showcasing projects, blog posts, services, and a contact form.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Library**: Radix UI components with shadcn/ui styling system
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Routing**: Wouter for client-side routing
- **State Management**: React Query (TanStack Query) for server state management
- **Animations**: Framer Motion for smooth animations and transitions
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ESM modules
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for Neon serverless)
- **API Pattern**: RESTful API endpoints

## Key Components

### Frontend Components
- **Navigation**: Fixed navigation with smooth scrolling and active section highlighting
- **Hero Section**: Landing area with call-to-action buttons
- **About Section**: Personal information and skills showcase with progress bars
- **Projects Section**: Portfolio project cards with filtering and animations
- **Services Section**: Service offerings with feature lists
- **Blog Section**: Blog post previews with categories and tags
- **Contact Form**: Interactive contact form with validation and submission handling
- **Theme System**: Light/dark mode toggle with system preference detection

### Backend Components
- **Contact API**: Handles contact form submissions with validation
- **Storage Interface**: Abstraction layer for data operations (currently using in-memory storage)
- **Route Registration**: Centralized route management system
- **Error Handling**: Global error handling middleware
- **Request Logging**: Custom logging middleware for API requests

## Data Flow

1. **Frontend to Backend**: React components use React Query to make API calls to Express endpoints
2. **Form Submission**: Contact form data is validated on frontend with Zod, then sent to `/api/contact`
3. **Database Operations**: Backend uses Drizzle ORM to interact with PostgreSQL database
4. **Response Handling**: API responses are processed by React Query and update UI state
5. **Error Management**: Errors are caught and displayed using toast notifications

## Database Schema

The application defines the following database tables:
- **users**: User authentication (id, username, password)
- **contacts**: Contact form submissions (id, name, email, subject, message, createdAt, replied)
- **projects**: Portfolio projects (id, title, description, image, technologies, urls, featured, createdAt)
- **blog_posts**: Blog content (id, title, excerpt, content, image, category, tags, published, timestamps)

## External Dependencies

### Frontend Dependencies
- React ecosystem (React, React DOM, React Router alternative)
- UI Components (Radix UI primitives, shadcn/ui components)
- Styling (Tailwind CSS, class-variance-authority, clsx)
- Forms and Validation (React Hook Form, Zod, hookform/resolvers)
- Animations (Framer Motion, Embla Carousel)
- Data Fetching (TanStack React Query)
- Utilities (date-fns, cmdk for command palette)

### Backend Dependencies
- Server Framework (Express.js, Node.js types)
- Database (Drizzle ORM, Neon serverless PostgreSQL driver)
- Development Tools (tsx for TypeScript execution, esbuild for production builds)
- Session Management (connect-pg-simple for PostgreSQL sessions)

### Development Dependencies
- Build Tools (Vite, TypeScript, PostCSS, Autoprefixer)
- Replit Integration (Replit-specific Vite plugins and development tools)

## Deployment Strategy

### Development
- Uses Vite dev server with hot module replacement
- Express server runs with tsx for TypeScript execution
- Database migrations handled with Drizzle Kit
- Replit-specific development tools for cloud development environment

### Production
- Frontend built with Vite and output to `dist/public`
- Backend compiled with esbuild to `dist/index.js`
- Static files served by Express in production mode
- Database schema pushed using Drizzle Kit
- Environment variables for database connection (DATABASE_URL required)

### Build Process
1. Frontend assets are built using Vite
2. Backend is bundled using esbuild with external packages
3. Both outputs are placed in `dist/` directory
4. Production server serves static files and API endpoints from single Express instance

The application is designed to be deployed on platforms like Replit, Vercel, or any Node.js hosting service with PostgreSQL database support.