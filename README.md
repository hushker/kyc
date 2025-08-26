# KYC Frontend

A modern React frontend application built with Docker, React, Tailwind CSS v3, shadcn/ui, and Vite.

## Tech Stack

- **React 18** - Modern React with TypeScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS v3** - Utility-first CSS framework
- **shadcn/ui** - High-quality, accessible UI components
- **Docker** - Containerized development and deployment

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Docker (optional, for containerized development)

### Local Development

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Docker Development

1. Build and run with Docker Compose:
```bash
docker-compose up --build
```

The application will be available at `http://localhost:3000`

### Adding shadcn/ui Components

This project is configured to use shadcn/ui components. To add a new component:

```bash
npx shadcn-ui@latest add button
```

This will add the component to `src/components/ui/` and you can import it:

```tsx
import { Button } from "@/components/ui/button"
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
├── src/
│   ├── components/
│   │   └── ui/          # shadcn/ui components
│   ├── lib/
│   │   └── utils.ts     # Utility functions
│   ├── App.tsx          # Main App component
│   ├── main.tsx         # React entry point
│   ├── index.css        # Global styles with Tailwind
│   └── vite-env.d.ts    # Vite type definitions
├── public/              # Static assets
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── tailwind.config.js   # Tailwind configuration
├── components.json      # shadcn/ui configuration
└── vite.config.ts       # Vite configuration
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
