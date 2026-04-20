import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Hektor's Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" suppressHydrationWarning>
        <body className="bg-background text-foreground">
          <Providers>{children}</Providers>
          </body>
      </html>
  );
}
