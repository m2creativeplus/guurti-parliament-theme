import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { MobileBottomNav } from "@/components/mobile-bottom-nav"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DollarSign, TrendingUp, Clock, CheckCircle2, Search, Download, ExternalLink } from "lucide-react"
import { SankeyFundFlows } from "@/components/charts/sankey-fund-flows"
import { DonorPie3D } from "@/components/charts/donor-pie-3d"
import { SDGContributions } from "@/components/charts/sdg-contributions"

export default function DonorsPage() {
  const donorProjects = [
    {
      id: 1,
      donor: "UNDP",
      project: "Democratic Governance Strengthening",
      amount: "$2.5M",
      status: "Ongoing",
      year: "2024-2026",
      track: "Governance",
      progress: 65,
    },
    {
      id: 2,
      donor: "European Union",
      project: "Civil Service Capacity Building",
      amount: "$4.2M",
      status: "Ongoing",
      year: "2025-2027",
      track: "Institutional Reform",
      progress: 45,
    },
    {
      id: 3,
      donor: "World Bank",
      project: "Public Financial Management Reform",
      amount: "$8.5M",
      status: "Planned",
      year: "2026-2029",
      track: "Economic",
      progress: 10,
    },
    {
      id: 4,
      donor: "UK FCDO",
      project: "Parliamentary Strengthening Program",
      amount: "$3.1M",
      status: "Ongoing",
      year: "2023-2026",
      track: "Legislative",
      progress: 80,
    },
    {
      id: 5,
      donor: "Norway",
      project: "Peace & Community Mediation Fund",
      amount: "$1.8M",
      status: "Completed",
      year: "2022-2025",
      track: "Peace",
      progress: 100,
    },
    {
      id: 6,
      donor: "Switzerland",
      project: "Local Governance Decentralization",
      amount: "$2.9M",
      status: "Ongoing",
      year: "2024-2027",
      track: "Governance",
      progress: 55,
    },
    {
      id: 7,
      donor: "African Development Bank",
      project: "SME & Youth Entrepreneurship",
      amount: "$5.7M",
      status: "Planned",
      year: "2026-2028",
      track: "Economic",
      progress: 5,
    },
  ]

  const statusConfig = {
    Ongoing: { color: "bg-blue-500", badge: "default" as const },
    Planned: { color: "bg-yellow-500", badge: "secondary" as const },
    Completed: { color: "bg-green-500", badge: "outline" as const },
  }

  const totalAmount = donorProjects.reduce((sum, project) => {
    const amount = Number.parseFloat(project.amount.replace(/[$M]/g, ""))
    return sum + amount
  }, 0)

  return (
    <div className="flex min-h-screen flex-col pb-16 lg:pb-0">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-accent/5 to-background py-16">
          <div className="container">
            <div className="max-w-4xl">
              <Badge variant="outline" className="mb-4">
                Verified Projects & Funding
              </Badge>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Donor Coordination Dashboard</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Comprehensive tracking of international aid, development projects, and partnerships aligned with
                national priorities 2025-2030
              </p>

              {/* Summary Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card>
                  <CardHeader className="pb-3">
                    <CardDescription>Total Portfolio</CardDescription>
                    <CardTitle className="text-2xl">${totalAmount.toFixed(1)}M</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <DollarSign className="h-4 w-4" />7 Projects
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardDescription>Active Projects</CardDescription>
                    <CardTitle className="text-2xl">4</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-success">
                      <TrendingUp className="h-4 w-4" />
                      $12.7M value
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardDescription>Planned</CardDescription>
                    <CardTitle className="text-2xl">2</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      $14.2M pipeline
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardDescription>Completed</CardDescription>
                    <CardTitle className="text-2xl">1</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-success">
                      <CheckCircle2 className="h-4 w-4" />
                      $1.8M delivered
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Filters & Search */}
        <section className="py-8 border-b bg-muted/30">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search projects or donors..." className="pl-10" />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="ongoing">Ongoing</SelectItem>
                  <SelectItem value="planned">Planned</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all">
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Track" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Tracks</SelectItem>
                  <SelectItem value="governance">Governance</SelectItem>
                  <SelectItem value="economic">Economic</SelectItem>
                  <SelectItem value="peace">Peace</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" className="gap-2 bg-transparent">
                <Download className="h-4 w-4" />
                Export
              </Button>
            </div>
          </div>
        </section>

        {/* Advanced Visualizations Section */}
        <section className="py-16 bg-gradient-to-br from-background via-muted/20 to-background">
          <div className="container space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <Badge variant="outline" className="mb-4">
                Advanced Analytics & Data Visualization
              </Badge>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Multi-Stakeholder Partnership Insights
              </h2>
              <p className="text-lg text-muted-foreground">
                Interactive visualizations showing fund flows, donor distribution, and SDG contributions for
                comprehensive transparency and accountability
              </p>
            </div>

            {/* Sankey Diagram */}
            <SankeyFundFlows />

            {/* 3D Pie Chart */}
            <DonorPie3D />

            {/* SDG Contributions */}
            <SDGContributions />
          </div>
        </section>

        {/* Projects List */}
        <section className="py-12">
          <div className="container">
            <div className="space-y-4">
              {donorProjects.map((project) => {
                const config = statusConfig[project.status as keyof typeof statusConfig]

                return (
                  <Card key={project.id} className="hover-lift">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <Badge variant={config.badge}>{project.status}</Badge>
                            <Badge variant="outline">{project.track}</Badge>
                            <span className="text-sm text-muted-foreground">{project.year}</span>
                          </div>
                          <CardTitle className="text-xl mb-2">{project.project}</CardTitle>
                          <CardDescription className="flex items-center gap-2">
                            <span className="font-semibold text-foreground">{project.donor}</span>
                            <span>•</span>
                            <span className="text-lg font-bold text-primary">{project.amount}</span>
                          </CardDescription>
                        </div>
                        <Button variant="ghost" size="icon">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Implementation Progress</span>
                          <span className="font-semibold">{project.progress}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div
                            className={`${config.color} h-2 rounded-full transition-all`}
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <p className="text-center text-sm text-muted-foreground mt-8">
              Data verified by External Partnerships Desk (EPD) • Last updated: November 2025
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
      <MobileBottomNav />
    </div>
  )
}
