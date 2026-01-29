# MFS - Mitrais Financial System

A modern financial management system built with Next.js 15, React 19, and TypeScript.

## Features

- 🔐 **Authentication** - NextAuth-based credential authentication
- 📊 **Dashboard** - Financial overview and management
- 📦 **Inventory Management** - Unit of measure tracking
- 🎨 **Modern UI** - TailwindCSS with responsive design
- 🔒 **Type Safety** - Full TypeScript support
- 🚀 **Performance** - Next.js App Router with Server Components

## Tech Stack

- **Framework**: Next.js 15.1.4
- **UI Library**: React 19.0.0
- **Styling**: TailwindCSS 3.4.17
- **Authentication**: NextAuth 5.0.0-beta.25
- **State Management**: Redux Toolkit 2.5.0
- **API Client**: Axios 1.7.9, Apollo Client 3.12.5
- **Language**: TypeScript 5.7.3

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Backend API running (default: http://localhost:5212)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd mfs_react
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` and configure:
- `NEXTAUTH_URL` - Your application URL (default: http://localhost:3000)
- `NEXTAUTH_SECRET` - Generate with: `openssl rand -base64 32`
- `NEXT_PUBLIC_API_BASE_URL` - Your backend API URL

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Building for Production

Build the application:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

### Code Quality

Run ESLint:
```bash
npm run lint
```

Run TypeScript type checking:
```bash
npm run type-check
```

## Project Structure

```
src/
├── app/              # Next.js App Router pages
│   ├── api/         # API routes
│   ├── login/       # Authentication pages
│   ├── inventory/   # Inventory management
│   └── layout.tsx   # Root layout
├── components/       # Reusable UI components
├── services/         # API service layer
├── store/           # Redux store configuration
├── models/          # TypeScript types/interfaces
├── auth.ts          # NextAuth configuration
└── middleware.ts    # Request middleware
```

## Key Features

### Authentication
The application uses NextAuth with credentials provider. Users must authenticate to access protected routes.

### Navigation
Dynamic navigation component that shows/hides based on authentication status with accordion-style menu items.

### Inventory Management
- Unit of Measure tracking
- CRUD operations for inventory items
- Search and lookup functionality

## Environment Variables

Required environment variables (see `.env.example`):

- `NEXTAUTH_URL` - Application URL
- `NEXTAUTH_SECRET` - Secret for NextAuth
- `NEXT_PUBLIC_API_BASE_URL` - Backend API base URL
- `NODE_ENV` - Environment (development/production)

## Contributing

1. Create a feature branch
2. Make your changes
3. Run linting and type checking
4. Submit a pull request

## License

Private - Mitrais Internal Use
