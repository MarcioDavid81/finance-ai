import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Toaster } from "./_components/ui/sonner";

const mulish = Mulish({
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <ClerkProvider
        appearance={{
          baseTheme: dark,
        }}
      >
        <body className={`${mulish.className} dark antialiased`}>
          {children}
        </body>
      </ClerkProvider>
      <Toaster />
    </html>
  );
}
