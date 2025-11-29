import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { MobileBottomNav } from "@/components/mobile-bottom-nav"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileBarChart, Download, ExternalLink } from "lucide-react"

export default function ReportsPage() {
  const reports = [
    {
      id: 1,
      title: "Annual Report 2024",
      year: "2024",
      category: "Annual Report",
      pages: 156,
      size: "8.2 MB",
      description:
        "Comprehensive overview of parliamentary activities, legislative outputs, and institutional achievements.",
    },
    {
      id: 2,
      title: "SDLA Progress Report Q3 2025",
      year: "2025",
      category: "Project Report",
      pages: 45,
      size: "3.1 MB",
      description: "Digital Legislative Archive implementation progress, milestones achieved, and Phase 2 planning.",
    },
    {
      id: 3,
      title: "International Engagement Summary 2025",
      year: "2025",
      category: "EPD Report",
      pages: 68,
      size: "5.4 MB",
      description: "Summary of international partnerships, conference participations, and diplomatic initiatives.",
    },
    {
      id: 4,
      title: "Committee Performance Review 2024-2025",
      year: "2024-2025",
      category: "Performance Report",
      pages: 92,
      size: "6.8 MB",
      description: "Analysis of six standing committees' legislative oversight and policy development activities.",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col pb-16 lg:pb-0">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-accent/5 to-background py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <FileBarChart className="h-8 w-8 text-primary" />
                <Badge variant="outline">Official Publications</Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Annual Reports & Publications</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Comprehensive reports documenting parliamentary activities, institutional performance, and strategic
                initiatives
              </p>
            </div>
          </div>
        </section>

        {/* Reports List */}
        <section className="py-12">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-6">
              {reports.map((report) => (
                <Card key={report.id} className="card-premium hover-lift">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="outline">{report.category}</Badge>
                          <Badge variant="secondary">{report.year}</Badge>
                        </div>
                        <CardTitle className="text-2xl mb-2">{report.title}</CardTitle>
                        <CardDescription className="text-base">{report.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-6 text-sm text-muted-foreground mb-4">
                      <span>{report.pages} pages</span>
                      <span>•</span>
                      <span>{report.size}</span>
                      <span>•</span>
                      <span>PDF Format</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button className="gap-2">
                        <Download className="h-4 w-4" />
                        Download Report
                      </Button>
                      <Button variant="outline" className="gap-2 bg-transparent">
                        <ExternalLink className="h-4 w-4" />
                        Preview Online
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <MobileBottomNav />
    </div>
  )
}
