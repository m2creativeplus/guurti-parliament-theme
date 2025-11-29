"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LanguageToggle } from "@/components/language-toggle"
import { ThemeToggle } from "@/components/theme-toggle"
import { Search, Menu, X, LogIn, ChevronDown } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="h-1 w-full gradient-flag"></div>

      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Emblem_of_Somaliland.svg-KA2VMS1RBGBiZwHBJKbe1LbHH7N0oc.png"
              alt="Emblem of the Republic of Somaliland"
              width={56}
              height={56}
              className="h-14 w-14"
            />
            <div className="flex flex-col">
              <span className="text-base font-heading font-bold leading-tight">Golaha Guurtida</span>
              <span className="text-xs text-muted-foreground">Jamhuuriyadda Somaliland</span>
            </div>
          </Link>
        </div>

        <nav className="hidden lg:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
              About <ChevronDown className="h-3 w-3" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuLabel>About the Guurti</DropdownMenuLabel>
              <DropdownMenuItem asChild>
                <Link href="/about">History & Mandate</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/members">Members & Elders</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/committees">Committees</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/leadership">Leadership Profiles</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/contact">Contact & Location</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/sdla" className="text-sm font-medium hover:text-primary transition-colors">
            Laws & Archives
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
              News & Media <ChevronDown className="h-3 w-3" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem asChild>
                <Link href="/news">Press Releases</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/gallery">Photo & Video Gallery</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/speeches">Speeches & Statements</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/donors" className="text-sm font-medium hover:text-primary transition-colors">
            Donor Dashboard
          </Link>

          <Link href="/international-engagement" className="text-sm font-medium hover:text-primary transition-colors">
            International Events
          </Link>

          <Link href="/strategic-plan" className="text-sm font-medium hover:text-primary transition-colors">
            Strategic Plan
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
              Publications <ChevronDown className="h-3 w-3" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem asChild>
                <Link href="/research">Parliamentary Research</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/reports">Annual Reports</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/policies">Strategies & Policies</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/documents">Download Center</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
            <Button variant="ghost" size="icon" asChild>
              <Link href="/search">
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Link>
            </Button>
          </div>
          <Button className="hidden md:flex gap-2" size="sm">
            <LogIn className="h-4 w-4" />
            Portal Login
          </Button>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed right-0 top-[5.25rem] bottom-0 w-full max-w-sm bg-background border-l shadow-lg lg:hidden overflow-y-auto">
            <nav className="flex flex-col p-6 gap-6">
              <div>
                <h3 className="font-semibold text-sm text-muted-foreground mb-3">Main Navigation</h3>
                <div className="flex flex-col gap-2">
                  <Link
                    href="/"
                    className="text-base font-medium hover:text-primary transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    href="/sdla"
                    className="text-base font-medium hover:text-primary transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Laws & Archives (SDLA)
                  </Link>
                  <Link
                    href="/donors"
                    className="text-base font-medium hover:text-primary transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Donor Dashboard
                  </Link>
                  <Link
                    href="/international-engagement"
                    className="text-base font-medium hover:text-primary transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    International Events (Live Countdown)
                  </Link>
                  <Link
                    href="/strategic-plan"
                    className="text-base font-medium hover:text-primary transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Strategic Plan 2025-2030
                  </Link>
                </div>
              </div>

              <div className="border-t pt-4">
                <h3 className="font-semibold text-sm text-muted-foreground mb-3">About the Guurti</h3>
                <div className="flex flex-col gap-2">
                  <Link
                    href="/about"
                    className="text-sm hover:text-primary transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    History & Mandate
                  </Link>
                  <Link
                    href="/members"
                    className="text-sm hover:text-primary transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Members & Elders
                  </Link>
                  <Link
                    href="/committees"
                    className="text-sm hover:text-primary transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Committees
                  </Link>
                  <Link
                    href="/leadership"
                    className="text-sm hover:text-primary transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Leadership
                  </Link>
                  <Link
                    href="/contact"
                    className="text-sm hover:text-primary transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </div>
              </div>

              <div className="border-t pt-4">
                <h3 className="font-semibold text-sm text-muted-foreground mb-3">News & Media</h3>
                <div className="flex flex-col gap-2">
                  <Link
                    href="/news"
                    className="text-sm hover:text-primary transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Press Releases
                  </Link>
                  <Link
                    href="/gallery"
                    className="text-sm hover:text-primary transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Photo & Video Gallery
                  </Link>
                  <Link
                    href="/speeches"
                    className="text-sm hover:text-primary transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Speeches & Statements
                  </Link>
                </div>
              </div>

              <div className="border-t pt-4">
                <h3 className="font-semibold text-sm text-muted-foreground mb-3">Publications</h3>
                <div className="flex flex-col gap-2">
                  <Link
                    href="/research"
                    className="text-sm hover:text-primary transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Parliamentary Research
                  </Link>
                  <Link
                    href="/reports"
                    className="text-sm hover:text-primary transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Annual Reports
                  </Link>
                  <Link
                    href="/policies"
                    className="text-sm hover:text-primary transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Strategies & Policies
                  </Link>
                  <Link
                    href="/documents"
                    className="text-sm hover:text-primary transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Download Center
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-4 border-t">
                <LanguageToggle />
                <ThemeToggle />
              </div>

              <Button className="w-full gap-2">
                <LogIn className="h-4 w-4" />
                Portal Login
              </Button>
            </nav>
          </div>
        </>
      )}
    </header>
  )
}
