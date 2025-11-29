import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { MobileBottomNav } from "@/components/mobile-bottom-nav"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Download, Search, FileText, FolderOpen } from "lucide-react"

export default function DocumentsPage() {
  const categories = [
    {
      name: "Legislative Documents",
      count: 245,
      description: "Bills, acts, and legislative proposals",
      icon: FileText,
    },
    {
      name: "Committee Reports",
      count: 89,
      description: "Standing committee meeting reports",
      icon: FolderOpen,
    },
    {
      name: "Annual Reports",
      count: 12,
      description: "Yearly parliamentary summaries",
      icon: FileText,
    },
    {
      name: "Strategic Plans",
      count: 8,
      description: "Policy frameworks and roadmaps",
      icon: FolderOpen,
    },
    {
      name: "Press Releases",
      count: 156,
      description: "Official statements and announcements",
      icon: FileText,
    },
    {
      name: "Speeches",
      count: 78,
      description: "Parliamentary addresses and statements",
      icon: FileText,
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
                <Download className="h-8 w-8 text-primary" />
                <Badge variant="outline">Document Library</Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Download Center</h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Access official documents, reports, and publications from the House of Elders
              </p>

              {/* Search */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    placeholder="Search documents by title, category, or year..."
                    className="pl-12 h-12 text-base"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Document Categories */}
        <section className="py-12">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {categories.map((category) => {
                const Icon = category.icon
                return (
                  <Card key={category.name} className="card-premium hover-lift cursor-pointer group">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Icon className="h-7 w-7 text-primary" />
                        </div>
                        <Badge variant="secondary" className="text-base px-3 py-1">
                          {category.count}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl mb-2">{category.name}</CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" className="w-full gap-2 bg-transparent">
                        <FolderOpen className="h-4 w-4" />
                        Browse Documents
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Quick Downloads */}
        <section className="py-12 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-heading font-bold mb-6 text-center">Quick Downloads</h2>
              <div className="space-y-3">
                <Card className="hover-lift cursor-pointer">
                  <CardContent className="flex items-center justify-between p-6">
                    <div className="flex items-center gap-4">
                      <FileText className="h-8 w-8 text-primary" />
                      <div>
                        <p className="font-semibold">Annual Report 2024</p>
                        <p className="text-sm text-muted-foreground">PDF • 8.2 MB</p>
                      </div>
                    </div>
                    <Button size="sm" className="gap-2">
                      <Download className="h-4 w-4" />
                      Download
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover-lift cursor-pointer">
                  <CardContent className="flex items-center justify-between p-6">
                    <div className="flex items-center gap-4">
                      <FileText className="h-8 w-8 text-primary" />
                      <div>
                        <p className="font-semibold">LDES Strategy 2026-2030</p>
                        <p className="text-sm text-muted-foreground">PDF • 4.5 MB</p>
                      </div>
                    </div>
                    <Button size="sm" className="gap-2">
                      <Download className="h-4 w-4" />
                      Download
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover-lift cursor-pointer">
                  <CardContent className="flex items-center justify-between p-6">
                    <div className="flex items-center gap-4">
                      <FileText className="h-8 w-8 text-primary" />
                      <div>
                        <p className="font-semibold">SDLA Progress Report Q3 2025</p>
                        <p className="text-sm text-muted-foreground">PDF • 3.1 MB</p>
                      </div>
                    </div>
                    <Button size="sm" className="gap-2">
                      <Download className="h-4 w-4" />
                      Download
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <MobileBottomNav />
    </div>
  )
}
