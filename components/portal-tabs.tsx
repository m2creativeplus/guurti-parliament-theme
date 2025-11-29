"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  LayoutGrid,
  Globe,
  TrendingUp,
  Calendar,
  Database,
  Building2,
  FileText,
  Download,
  ExternalLink,
  Search,
  Filter,
} from "lucide-react"
import Link from "next/link"

export function PortalTabs() {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 h-auto gap-2 bg-muted p-2 rounded-xl">
        <TabsTrigger value="overview" className="gap-2 data-[state=active]:bg-background">
          <LayoutGrid className="h-4 w-4" />
          <span className="hidden sm:inline">Overview</span>
        </TabsTrigger>
        <TabsTrigger value="website" className="gap-2 data-[state=active]:bg-background">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">Website</span>
        </TabsTrigger>
        <TabsTrigger value="donors" className="gap-2 data-[state=active]:bg-background">
          <TrendingUp className="h-4 w-4" />
          <span className="hidden sm:inline">Donor Desk</span>
        </TabsTrigger>
        <TabsTrigger value="engagements" className="gap-2 data-[state=active]:bg-background">
          <Calendar className="h-4 w-4" />
          <span className="hidden sm:inline">Engagements</span>
        </TabsTrigger>
        <TabsTrigger value="sdla" className="gap-2 data-[state=active]:bg-background">
          <Database className="h-4 w-4" />
          <span className="hidden sm:inline">SDLA</span>
        </TabsTrigger>
        <TabsTrigger value="epd" className="gap-2 data-[state=active]:bg-background">
          <Building2 className="h-4 w-4" />
          <span className="hidden sm:inline">EPD</span>
        </TabsTrigger>
      </TabsList>

      {/* Overview Tab */}
      <TabsContent value="overview" className="mt-6 space-y-6">
        <Card className="card-premium">
          <CardHeader>
            <CardTitle>Portal Overview</CardTitle>
            <CardDescription>Comprehensive digital infrastructure for the Golaha Guurtida</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-muted">
                <Globe className="h-6 w-6 text-primary mb-2" />
                <h4 className="font-semibold mb-1">Website Redesign</h4>
                <p className="text-sm text-muted-foreground">Modern, accessible, trilingual portal</p>
              </div>
              <div className="p-4 rounded-lg bg-muted">
                <TrendingUp className="h-6 w-6 text-primary mb-2" />
                <h4 className="font-semibold mb-1">Donor Tracking</h4>
                <p className="text-sm text-muted-foreground">7 opportunities worth $148M</p>
              </div>
              <div className="p-4 rounded-lg bg-muted">
                <Calendar className="h-6 w-6 text-primary mb-2" />
                <h4 className="font-semibold mb-1">Engagement Calendar</h4>
                <p className="text-sm text-muted-foreground">7 events scheduled 2026–2030</p>
              </div>
              <div className="p-4 rounded-lg bg-muted">
                <Database className="h-6 w-6 text-primary mb-2" />
                <h4 className="font-semibold mb-1">SDLA Archive</h4>
                <p className="text-sm text-muted-foreground">1,200+ laws digitized</p>
              </div>
              <div className="p-4 rounded-lg bg-muted">
                <Building2 className="h-6 w-6 text-primary mb-2" />
                <h4 className="font-semibold mb-1">EPD Projects</h4>
                <p className="text-sm text-muted-foreground">5 MoUs, 12 partnerships</p>
              </div>
              <div className="p-4 rounded-lg bg-muted">
                <FileText className="h-6 w-6 text-primary mb-2" />
                <h4 className="font-semibold mb-1">WCAG 2.1 AA</h4>
                <p className="text-sm text-muted-foreground">Accessibility compliant</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      {/* Website Tab */}
      <TabsContent value="website" className="mt-6 space-y-6">
        <Card className="card-premium">
          <CardHeader>
            <CardTitle>Website Redesign</CardTitle>
            <CardDescription>Modern, accessible, trilingual portal structure</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: "About", icon: Globe, desc: "History, mandate, structure" },
                { title: "Members", icon: Building2, desc: "82 elders, 6 committees" },
                { title: "SDLA", icon: Database, desc: "Legislative archive 1884–present" },
                { title: "Media", icon: FileText, desc: "News, press releases, gallery" },
                { title: "Publications", icon: Download, desc: "Reports, documents, data" },
                { title: "Contact", icon: ExternalLink, desc: "Secretariat, EPD desk" },
              ].map((section) => (
                <Card key={section.title} className="hover-lift cursor-pointer">
                  <CardHeader>
                    <section.icon className="h-8 w-8 text-primary mb-2" />
                    <CardTitle className="text-lg">{section.title}</CardTitle>
                    <CardDescription>{section.desc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" size="sm" className="w-full gap-2 bg-transparent">
                      Visit Section
                      <ExternalLink className="h-3 w-3" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-6 p-4 bg-muted rounded-lg">
              <Badge variant="secondary" className="mb-2">
                Accessibility
              </Badge>
              <p className="text-sm text-muted-foreground">WCAG 2.1 AA compliant with trilingual support (SO/EN/AR)</p>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      {/* Donor Desk Tab */}
      <TabsContent value="donors" className="mt-6 space-y-6">
        <Card className="card-premium">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Donor Tracking Dashboard</CardTitle>
                <CardDescription>7 donor opportunities 2026–2030</CardDescription>
              </div>
              <Badge variant="secondary" className="text-base px-3 py-1">
                $148M Total
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2 mb-6">
              <Button variant="outline" size="sm" className="bg-transparent">
                All
              </Button>
              <Button variant="outline" size="sm" className="bg-transparent">
                Active
              </Button>
              <Button variant="outline" size="sm" className="bg-transparent">
                Pipeline
              </Button>
              <Button variant="outline" size="sm" className="bg-transparent">
                Closed
              </Button>
            </div>

            <div className="space-y-3">
              {[
                { donor: "UNDP", window: "2026–2028", focus: "Governance", status: "Active", amount: "$45M" },
                { donor: "EU NDICI", window: "2026–2030", focus: "Democracy", status: "Pipeline", amount: "$38M" },
                {
                  donor: "World Bank",
                  window: "2027–2029",
                  focus: "Infrastructure",
                  status: "Prospecting",
                  amount: "$32M",
                },
                { donor: "Google.org", window: "2026–2027", focus: "Digital", status: "Active", amount: "$15M" },
                { donor: "IPU", window: "2026–2030", focus: "Parliamentary", status: "Active", amount: "$8M" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors"
                >
                  <div className="flex-1">
                    <p className="font-semibold">{item.donor}</p>
                    <p className="text-sm text-muted-foreground">
                      {item.window} • {item.focus}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="font-semibold text-primary">{item.amount}</p>
                    <Badge variant={item.status === "Active" ? "default" : "secondary"}>{item.status}</Badge>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <Button asChild className="w-full gap-2">
                <Link href="/dashboard">
                  View Full Dashboard
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      {/* Engagements Tab */}
      <TabsContent value="engagements" className="mt-6 space-y-6">
        <Card className="card-premium">
          <CardHeader>
            <CardTitle>Engagement Calendar 2026–2030</CardTitle>
            <CardDescription>International parliamentary and diplomatic events</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2 mb-6 flex-wrap">
              {["2026", "2027", "2028", "2029", "2030"].map((year) => (
                <Button key={year} variant="outline" size="sm" className="bg-transparent">
                  {year}
                </Button>
              ))}
            </div>

            <div className="space-y-4">
              {[
                { event: "IPU Assembly", track: "Parliamentary", year: "2026", status: "Confirmed" },
                { event: "CPA Conference", track: "Parliamentary", year: "2027", status: "Planned" },
                { event: "UNDP Consultation", track: "Diplomatic", year: "2026", status: "Confirmed" },
                { event: "Academic Exchange", track: "Academic", year: "2028", status: "Planned" },
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-lg border">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-semibold">{item.event}</h4>
                      <p className="text-sm text-muted-foreground">
                        {item.track} • {item.year}
                      </p>
                    </div>
                    <Badge variant={item.status === "Confirmed" ? "default" : "secondary"}>{item.status}</Badge>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="outline" className="w-full mt-6 gap-2 bg-transparent">
              <Download className="h-4 w-4" />
              Export to Calendar
            </Button>
          </CardContent>
        </Card>
      </TabsContent>

      {/* SDLA Tab */}
      <TabsContent value="sdla" className="mt-6 space-y-6">
        <Card className="card-premium">
          <CardHeader>
            <CardTitle>Somaliland Digital Legislative Archive</CardTitle>
            <CardDescription>Comprehensive legal database from 1884 to present</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex gap-2">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search laws by year, type, or keyword"
                    className="w-full pl-10 pr-4 py-2 rounded-lg border bg-background"
                  />
                </div>
                <Button variant="outline" size="icon" className="bg-transparent">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                  { phase: "Phase 1", status: "In Progress", progress: 35 },
                  { phase: "Phase 2", status: "Pending", progress: 0 },
                  { phase: "Phase 3", status: "Planned", progress: 0 },
                  { phase: "Phase 4", status: "Planned", progress: 0 },
                ].map((item) => (
                  <div key={item.phase} className="p-4 rounded-lg border">
                    <p className="font-semibold mb-1">{item.phase}</p>
                    <p className="text-sm text-muted-foreground mb-2">{item.status}</p>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: `${item.progress}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-muted rounded-lg">
                <h4 className="font-semibold mb-2">SDLA Governance</h4>
                <p className="text-sm text-muted-foreground">Ministry of Justice / Attorney General / SNPA</p>
              </div>

              <Button asChild className="w-full gap-2">
                <Link href="/sdla">
                  <Database className="h-4 w-4" />
                  Access Full Archive
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      {/* EPD Tab */}
      <TabsContent value="epd" className="mt-6 space-y-6">
        <Card className="card-premium">
          <CardHeader>
            <CardTitle>External Partnerships Desk</CardTitle>
            <CardDescription>International cooperation and donor relations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">Core Functions</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Donor prospecting and relationship management</li>
                  <li>• MoU negotiation and partnership development</li>
                  <li>• International parliamentary engagement</li>
                  <li>• Academic and research collaboration</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Priority MoUs</h4>
                <div className="space-y-2">
                  {[
                    "IPU Observer Status",
                    "CPA Membership",
                    "UNDP Partnership",
                    "EU Cooperation",
                    "Academic Exchanges",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-lg border">
                      <span className="text-sm">{item}</span>
                      <Badge variant="outline">Priority {i + 1}</Badge>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-muted rounded-lg">
                <h4 className="font-semibold mb-2">Contact EPD Secretariat</h4>
                <p className="text-sm text-muted-foreground">epd@guurti.govsoml</p>
              </div>

              <Button asChild className="w-full gap-2">
                <Link href="/epd">
                  <Building2 className="h-4 w-4" />
                  View Full EPD Portal
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
