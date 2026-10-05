import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { organization, pageMetadata, schemaJson, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  ...pageMetadata("Website Development, Automation & AI", SITE_DESCRIPTION, "/"),
  metadataBase: new URL(SITE_URL),
  title: {
    default: `Website Development, Automation & AI | ${SITE_NAME}`,
    template: `%s | ${SITE_NAME}`,
  },
  verification: { google: process.env.GOOGLE_SITE_VERIFICATION },
};

import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={cn(inter.className, "bg-background text-foreground antialiased selection:bg-cyan-500/30 selection:text-cyan-200")}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaJson(organization) }} />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
