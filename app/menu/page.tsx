import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { MobileBottomNav } from "@/components/mobile-bottom-nav"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Home,
  FileText,
  Newspaper,
  DollarSign,
  Users,
  ImageIcon,
  Mic,
  FileBarChart,
  FileCheck,
  Download,
  MapPin,
  Mail,
  Info,
  Globe,
  Target,
  Clock,
} from "lucide-react"
import Link from "next/link"

export default function MenuPage() {
  const menuSections = [
    {
      title: "Main Navigation",
      links: [
        { href: "/", icon: Home, label: "Home", description: "Return to homepage" },
        { href: "/sdla", icon: FileText, label: "Laws & Archives", description: "Digital legislative archive" },
        { href: "/news", icon: Newspaper, label: "News & Press", description: "Latest announcements" },
        { href: "/donors", icon: DollarSign, label: "Donor Dashboard", description: "Funding & projects" },
        {
          href: "/international-engagement",
          icon: Globe,
          label: "International Events",
          description: "Live countdown to 8 events (2026-2030)",
          featured: true,
        },
        {
          href: "/strategic-plan",
          icon: Target,
          label: "Strategic Plan 2025-2030",
          description: "Digital transformation roadmap",
        },
      ],
    },
    {
      title: "About the Guurti",
      links: [
        { href: "/about", icon: Info, label: "History & Mandate", description: "Learn about our role" },
        { href: "/members", icon: Users, label: "Members & Elders", description: "82 distinguished elders" },
        { href: "/committees", icon: Users, label: "Committees", description: "6 standing committees" },
        { href: "/leadership", icon: Users, label: "Leadership", description: "Speaker & officers" },
        { href: "/contact", icon: MapPin, label: "Contact & Location", description: "Get in touch" },
      ],
    },
    {
      title: "News & Media",
      links: [
        { href: "/news", icon: Newspaper, label: "Press Releases", description: "Official statements" },
        { href: "/gallery", icon: ImageIcon, label: "Photo & Video Gallery", description: "Visual archives" },
        { href: "/speeches", icon: Mic, label: "Speeches & Statements", description: "Parliamentary records" },
      ],
    },
    {
      title: "Publications",
      links: [
        { href: "/reports", icon: FileBarChart, label: "Annual Reports", description: "Yearly summaries" },
        { href: "/policies", icon: FileCheck, label: "Strategies & Policies", description: "Strategic plans" },
        { href: "/documents", icon: Download, label: "Download Center", description: "Official documents" },
      ],
    },
    {
      title: "Quick Access",
      links: [
        { href: "/dashboard", icon: FileBarChart, label: "Dashboard", description: "Analytics & insights" },
        { href: "/epd", icon: FileText, label: "EPD Projects", description: "External partnerships" },
        { href: "/search", icon: FileText, label: "Search", description: "Find content" },
        { href: "/contact", icon: Mail, label: "Feedback", description: "Send us a message" },
      ],
    },
  ]

  return (
    <div className="flex min-h-screen flex-col pb-16 lg:pb-0">
      <SiteHeader />

      <main className="flex-1 py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Site Menu</h1>
            <p className="text-xl text-muted-foreground">Complete navigation for the Guurti Portal</p>
          </div>

          <div className="max-w-6xl mx-auto space-y-12">
            {menuSections.map((section) => (
              <div key={section.title}>
                <h2 className="text-2xl font-heading font-bold mb-6">{section.title}</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {section.links.map((link) => {
                    const Icon = link.icon
                    return (
                      <Link key={link.href} href={link.href}>
                        <Card
                          className={`h-full hover-lift cursor-pointer group ${link.featured ? "border-primary border-2" : ""}`}
                        >
                          <CardHeader>
                            <div className="flex items-center gap-3 mb-2">
                              <div
                                className={`h-10 w-10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors ${link.featured ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"}`}
                              >
                                <Icon className="h-5 w-5" />
                              </div>
                              <div className="flex-1">
                                <CardTitle className="text-base flex items-center gap-2">
                                  {link.label}
                                  {link.featured && (
                                    <Badge variant="default" className="text-xs gap-1">
                                      <Clock className="h-3 w-3" />
                                      Live
                                    </Badge>
                                  )}
                                </CardTitle>
                              </div>
                            </div>
                            <CardDescription>{link.description}</CardDescription>
                          </CardHeader>
                        </Card>
                      </Link>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <SiteFooter />
      <MobileBottomNav />
    </div>
  )
}
