# Next.js Project Setup with Prisma and Neon Database

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### Step 1: Clone the Repository
If you haven't already cloned the repository, run the following command:

```bash
git clone <your-repo-url>
cd <your-project-directory>
```

### Step 2: Install Dependencies
Before starting the project, install all required dependencies:

```bash
npm install  # Using npm
yarn install # Using Yarn
pnpm install # Using pnpm
bun install  # Using Bun
```

### Step 3: Run the Development Server
Start the Next.js development server:

```bash
npm run dev  # Using npm
yarn dev     # Using Yarn
pnpm dev     # Using pnpm
bun dev      # Using Bun
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Setting Up Database with Prisma and Neon

### Step 4: Install Prisma and Database Client
Run the following command to install Prisma and the necessary database client:

```bash
npm install @prisma/client @prisma/cli  # Using npm
yarn add @prisma/client @prisma/cli      # Using Yarn
```

### Step 5: Initialize Prisma
Initialize Prisma in your Next.js project:

```bash
npx prisma init
```

This will create a `prisma` folder with a `schema.prisma` file and a `.env` file.

### Step 6: Configure `schema.prisma`
Edit `prisma/schema.prisma` to define your database model:

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id        String  @id @default(uuid())
  name      String
  email     String  @unique
  password  String
  createdAt DateTime @default(now())
}
```

### Step 7: Set Up Database Connection
Open the `.env` file and add your Neon Database connection string:

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
```

Replace `USER`, `PASSWORD`, `HOST`, `PORT`, and `DATABASE` with your actual database credentials from [Neon](https://neon.tech/).

### Step 8: Run Database Migrations
Apply the schema changes to your database:

```bash
npx prisma migrate dev --name init
```

This will create the necessary tables in your database.

### Step 9: Generate Prisma Client
After migration, generate the Prisma client:

```bash
npx prisma generate
```

### Step 10: Verify Prisma Setup
To verify everything is set up correctly, open Prisma Studio:

```bash
npx prisma studio
```

This will open a GUI where you can view and manage your database records.

## Implementing Database Queries

### Step 11: Create a Server Action to Fetch Data

Modify `app/actions.ts` to connect to the database and fetch data:

```typescript
"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getUsers() {
  return await prisma.user.findMany();
}
```

## Deploying on Vercel

The easiest way to deploy your Next.js app is to use [Vercel](https://vercel.com/):

1. Push your project to GitHub.
2. Go to [Vercel](https://vercel.com/new) and import your GitHub repository.
3. Set your `DATABASE_URL` in Vercel’s environment variables.
4. Click deploy.

For more details, check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment).

## Learn More

To learn more about Next.js, Prisma, and Neon Database, check out these resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Neon Database](https://neon.tech/)

---

Now you're all set to build and deploy your Next.js app with Prisma and Neon Database!

