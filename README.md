This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Do not expose your Neon credentials to the browser

DATABASE_URL='postgresql://neondb_owner:npg_Y6ZoN1kVyxmp@ep-snowy-bush-a8atoy7r-pooler.eastus2.azure.neon.tech/neondb?sslmode=require'



// app/actions.ts
"use server";
import { neon } from "@neondatabase/serverless";
// app/actions.ts
"use server";
import { neon } from "@neondatabase/serverless";

export async function getData() {
    const sql = neon(process.env.DATABASE_URL);
    const data = await sql`...`;
    return data;
}







Step 1: Install Prisma & Database Client
Run the following command in your Next.js project:

sh
Copy
Edit
npm install @prisma/client @prisma/cli
Step 2: Initialize Prisma
Run:

sh
Copy
Edit
npx prisma init
This will create a prisma folder with a schema.prisma file and a .env file.

Step 3: Configure schema.prisma
Edit the prisma/schema.prisma file to define your database model:

prisma
Copy
Edit
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql" // Change if using MySQL or SQLite
  url      = env("DATABASE_URL")
}

model User {
  id       String  @id @default(uuid())
  name     String
  email    String  @unique
  password String
  createdAt DateTime @default(now())
}
Step 4: Set Up Database Connection
In the .env file, add your database URL:

env
Copy
Edit
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
If using Neon Database, get your database URL from Neon and replace USER, PASSWORD, HOST, PORT, and DATABASE.

Step 5: Run Migrations
Run:

sh
Copy
Edit
npx prisma migrate dev --name init
This will create the necessary tables in your database.

Step 6: Generate Prisma Client
After migration, generate the Prisma client by running:

sh
Copy
Edit
npx prisma generate
Step 7: Verify Prisma Works
Run:

sh
Copy
Edit
npx prisma studio
This will open a GUI where you can view and manage your database records.

