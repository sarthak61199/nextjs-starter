# Next.js Starter Template

A modern, feature-rich Next.js starter template with a comprehensive set of pre-configured tools and libraries to kickstart your web application development.

## Features

- **[Next.js 15.2.0](https://nextjs.org/)** - The React framework for production with App Router
- **[React 19](https://react.dev/)** - The latest version of React
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety for your JavaScript
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Shadcn UI](https://ui.shadcn.com/)** - Re-usable UI components built with Radix UI and Tailwind CSS
- **[Better Auth](https://github.com/better-auth/better-auth)** - Authentication library for Next.js
- **[Prisma 6](https://www.prisma.io/)** - Next-generation ORM for Node.js and TypeScript
- **[Zod](https://zod.dev/)** - TypeScript-first schema validation
- **[React Hook Form](https://react-hook-form.com/)** - Performant, flexible form validation
- **[Sonner](https://sonner.emilkowal.ski/)** - Toast notifications for React
- **[Lucide React](https://lucide.dev/)** - Beautiful & consistent icon set
- **[ESLint 9](https://eslint.org/)** - Pluggable JavaScript linter
- **[Next Themes](https://github.com/pacocoursey/next-themes)** - Dark mode support

## Project Structure

```
nextjs-starter/
├── app/                # Next.js App Router
│   ├── (auth)/         # Authentication routes
│   ├── (main)/         # Main application routes
│   ├── api/            # API routes
│   ├── globals.css     # Global styles
│   └── layout.tsx      # Root layout
├── components/         # Reusable components
├── features/           # Feature-based components
├── lib/                # Utility functions and shared code
├── prisma/             # Prisma schema and migrations
├── public/             # Static files
├── auth.ts             # Authentication configuration
├── components.json     # Shadcn UI configuration
├── next.config.ts      # Next.js configuration
└── ...
```

## Getting Started

### Prerequisites

- Node.js 18.17.0 or later
- npm, pnpm, yarn, or bun

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/nextjs-starter.git
cd nextjs-starter
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Set up your environment variables:

Create a `.env` file in the root directory and add your environment variables:

```
DATABASE_URL="your-database-url"
```

4. Set up the database with Prisma:

```bash
npx prisma generate
npx prisma db push
```

5. Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Authentication

This starter uses Better Auth for authentication with Prisma adapter. The authentication configuration is in `auth.ts`. It currently supports:

- Email and Password authentication

## Styling

This project uses Tailwind CSS for styling with the Shadcn UI component library. The Shadcn UI configuration is in `components.json`.

## Database

Prisma is set up with a PostgreSQL adapter. The database schema is defined in `prisma/schema.prisma`.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/) from the creators of Next.js.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
