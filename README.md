# Wealth – AI-Powered Finance Platform

Wealth is a modern, full-stack finance platform that helps you track, analyze, and grow your finances with real-time AI insights, beautiful dashboards, and seamless automation. Built with Next.js, Prisma, Clerk, Gemini AI, and more, Wealth is designed for usability and actionable intelligence.

---

## Features

- User authentication with Clerk for secure sign-up and login.
- Dashboard overview with visual summaries of accounts, budgets, and transactions.
- Multi-account support for tracking multiple bank accounts and sources.
- AI-generated monthly financial insights using Gemini (Google AI).
- Automated monthly email reports and budget alerts via Resend.
- Interactive charts and analytics with Recharts.
- Receipt scanning and auto-extraction of data using Gemini AI.
- Dark/light mode with a modern, responsive UI.
- Automated recurring transactions and reports with Inngest.
- Mobile-friendly design.

---

## Installation

To set up Wealth on your local machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Mansimishra19/Wealth.git
   cd Wealth
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   - Create a `.env` file in your project root and add the following variables:
   ```env
   DATABASE_URL=
   DIRECT_URL=

   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
   CLERK_SECRET_KEY=
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=

   GEMINI_API_KEY=
   RESEND_API_KEY=
   ARCJET_KEY=
   ```
   Fill in each value with your own API keys and URLs.

4. **Run database migrations:**
   ```bash
   npx prisma migrate deploy
   ```

5. **Start the development server:**
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

---
