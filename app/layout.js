import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wealth",
  description: "One stop Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo-blue.svg" type="image/svg+xml" />
      </head>
      <body suppressHydrationWarning>
        <ClerkProvider>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
            <div className={inter.className}>
              <Header />
              <main className="min-h-screen">{children}</main>
              <Toaster richColors />
            </div>
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
