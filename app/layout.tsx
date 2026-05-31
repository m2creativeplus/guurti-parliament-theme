import type React from "react"
import type { Metadata } from "next"
import { Lexend_Deca, Krub, Cairo } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { AccessibilityToolbar } from "@/components/accessibility-toolbar"
import { ConvexClientProvider } from "@/components/ConvexClientProvider"
import "./globals.css"

const lexendDeca = Lexend_Deca({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const krub = Krub({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
})

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-arabic",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Golaha Guurtida JSL | House of Elders of Somaliland",
  description:
    "Official website of the House of Elders of the Republic of Somaliland - Custodians of Peace and Continuity. Transparency is Sovereignty.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="so" suppressHydrationWarning className={`${lexendDeca.variable} ${krub.variable} ${cairo.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  const isDark = theme === 'dark' || (!theme && prefersDark);
                  if (isDark) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <ConvexClientProvider>
          {children}
          <AccessibilityToolbar />
          <Analytics />
        </ConvexClientProvider>
      </body>
    </html>
  )
}
