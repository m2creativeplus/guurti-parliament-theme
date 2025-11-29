import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Target, TrendingUp, Globe, FileText, Download, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function StrategicPlanPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 px-4 bg-gradient-to-br from-primary/10 via-accent/5 to-success/10">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent"></div>
          </div>
          <div className="container relative">
            <div className="max-w-4xl mx-auto text-center space-y-4">
              <Badge variant="outline" className="mb-4">
                <Target className="h-3 w-3 mr-1" />
                Strategic Planning 2025-2030
              </Badge>
              <h1 className="text-4xl md:text-5xl font-heading font-bold">
                Digital Transformation & Global Engagement
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Comprehensive roadmap for Golaha Guurtida's modernization, international partnerships, and digital
                legislative excellence
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <Button size="lg" asChild>
                  <Link href="#transformation">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    Transformation Roadmap
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#engagement">
                    <Globe className="h-4 w-4 mr-2" />
                    International Engagement
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Overview Cards */}
        <section className="py-12 px-4">
          <div className="container">
            <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Card className="hover-lift card-premium border-t-4 border-t-primary">
                <CardHeader className="pb-3">
                  <CardTitle className="text-3xl font-bold text-primary">7</CardTitle>
                  <CardDescription>Strategic Phases</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">2025-2028 Digital Transformation</p>
                </CardContent>
              </Card>
              <Card className="hover-lift card-premium border-t-4 border-t-accent">
                <CardHeader className="pb-3">
                  <CardTitle className="text-3xl font-bold text-accent-foreground">8</CardTitle>
                  <CardDescription>International Events</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">2026 Parliamentary Forums</p>
                </CardContent>
              </Card>
              <Card className="hover-lift card-premium border-t-4 border-t-success">
                <CardHeader className="pb-3">
                  <CardTitle className="text-3xl font-bold text-success-foreground">$75K</CardTitle>
                  <CardDescription>Budget Allocation</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">50% External Funding Target</p>
                </CardContent>
              </Card>
              <Card className="hover-lift card-premium border-t-4 border-t-secondary">
                <CardHeader className="pb-3">
                  <CardTitle className="text-3xl font-bold text-secondary-foreground">5</CardTitle>
                  <CardDescription>Strategic Pillars</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Legislative Diplomacy Focus</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Main Content Tabs */}
        <section className="py-12 px-4 bg-muted/30">
          <div className="container">
            <Tabs defaultValue="transformation" className="max-w-7xl mx-auto">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
                <TabsTrigger value="transformation" className="gap-2">
                  <TrendingUp className="h-4 w-4" />
                  Digital Transformation
                </TabsTrigger>
                <TabsTrigger value="engagement" className="gap-2">
                  <Globe className="h-4 w-4" />
                  Global Engagement
                </TabsTrigger>
              </TabsList>

              <TabsContent value="transformation" id="transformation" className="space-y-8">
                <div className="text-center space-y-2 mb-8">
                  <h2 className="text-3xl font-heading font-bold">Digital Transformation Roadmap</h2>
                  <p className="text-muted-foreground">2025-2028 Implementation Plan by M2 Creative</p>
                </div>

                <Link href="/digital-transformation">
                  <Card className="hover-lift cursor-pointer">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle>View Complete Gantt Chart & Timeline</CardTitle>
                          <CardDescription>
                            Interactive visualization of all 7 phases with quarterly breakdown
                          </CardDescription>
                        </div>
                        <ExternalLink className="h-5 w-5 text-muted-foreground" />
                      </div>
                    </CardHeader>
                  </Card>
                </Link>

                {/* Phase Cards */}
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      phase: "Phase 1",
                      title: "Strategic Direction",
                      icon: "🎯",
                      actions: "Approve Vision 2030, Steering Committee, Audit, Strategy",
                      timeline: "Q1-Q3 2025",
                      color: "primary",
                    },
                    {
                      phase: "Phase 2",
                      title: "Governance & Policy",
                      icon: "📋",
                      actions: "Digital Governance Charter, Open Parliament Policy, ISO Alignment",
                      timeline: "Q3 2025 - Q2 2026",
                      color: "accent",
                    },
                    {
                      phase: "Phase 3",
                      title: "Core Digital Systems",
                      icon: "💻",
                      actions: "Website, DMS, E-Voting, API, Digital Archive",
                      timeline: "Q4 2025 - Q4 2026",
                      color: "success",
                    },
                    {
                      phase: "Phase 4",
                      title: "Infrastructure & Cybersecurity",
                      icon: "🔒",
                      actions: "Network upgrades, MFA, Encryption, Testing",
                      timeline: "Q1 2026 - 2028",
                      color: "secondary",
                    },
                    {
                      phase: "Phase 5",
                      title: "Capacity & Culture",
                      icon: "👥",
                      actions: "Training, Digital Champions, Help Desk",
                      timeline: "Q1 2026 - 2028",
                      color: "primary",
                    },
                    {
                      phase: "Phase 6",
                      title: "Public Engagement",
                      icon: "📣",
                      actions: "Livestream, Citizen Feedback, Open Parliament Report",
                      timeline: "Q3 2026 - 2028",
                      color: "accent",
                    },
                    {
                      phase: "Phase 7",
                      title: "Monitoring & Sustainability",
                      icon: "📊",
                      actions: "KPI Dashboard, ICT Budget, Annual Audit",
                      timeline: "Q4 2026 - 2028",
                      color: "success",
                    },
                  ].map((phase, idx) => (
                    <Card key={idx} className="hover-lift card-premium">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <span className="text-4xl">{phase.icon}</span>
                            <div>
                              <Badge variant="outline" className="mb-2">
                                {phase.phase}
                              </Badge>
                              <CardTitle className="text-lg">{phase.title}</CardTitle>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <p className="text-sm text-muted-foreground">{phase.actions}</p>
                        <div className="flex items-center gap-2 pt-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm font-medium">{phase.timeline}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="engagement" id="engagement" className="space-y-8">
                <div className="text-center space-y-2 mb-8">
                  <h2 className="text-3xl font-heading font-bold">International Engagement 2026</h2>
                  <p className="text-muted-foreground">Strategic Parliamentary Diplomacy & Funding Master Package</p>
                </div>

                <Link href="/international-engagement">
                  <Card className="hover-lift cursor-pointer">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle>View Complete Event Calendar & Details</CardTitle>
                          <CardDescription>
                            Full breakdown of 8 international events, funding models, and expected outcomes
                          </CardDescription>
                        </div>
                        <ExternalLink className="h-5 w-5 text-muted-foreground" />
                      </div>
                    </CardHeader>
                  </Card>
                </Link>

                {/* Strategic Priorities */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      pillar: "Legislative Diplomacy",
                      focus: "Participation in 5+ international forums",
                      outcome: "OECD/IPU Observer status by end of 2026",
                      icon: Globe,
                    },
                    {
                      pillar: "Digital Transformation",
                      focus: "Promote SDLA funding (2025-2028)",
                      outcome: "2+ partnership MOUs with UNDP/EU/World Bank",
                      icon: TrendingUp,
                    },
                    {
                      pillar: "External Partnerships",
                      focus: "Operationalize EPD and donor database",
                      outcome: "EPD listed in OECD Global Network by 2026",
                      icon: FileText,
                    },
                  ].map((priority, idx) => (
                    <Card key={idx} className="hover-lift">
                      <CardHeader>
                        <priority.icon className="h-8 w-8 text-primary mb-2" />
                        <CardTitle className="text-lg">{priority.pillar}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div>
                          <p className="text-xs font-medium text-muted-foreground mb-1">Focus Area</p>
                          <p className="text-sm">{priority.focus}</p>
                        </div>
                        <div>
                          <p className="text-xs font-medium text-muted-foreground mb-1">Expected Outcome</p>
                          <p className="text-sm">{priority.outcome}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Event Highlights */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle>2026 Key Events Snapshot</CardTitle>
                    <CardDescription>8 strategic parliamentary engagements across 4 continents</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          event: "OECD Global Parliamentary Network Plenary",
                          date: "11-13 March 2026",
                          location: "Paris, France",
                        },
                        { event: "IPU 149th Assembly", date: "April 2026", location: "Geneva, Switzerland" },
                        { event: "CPA Regional Summit", date: "June 2026", location: "Accra, Ghana" },
                        {
                          event: "UNDP Governance & Rule of Law Forum",
                          date: "July 2026",
                          location: "Addis Ababa, Ethiopia",
                        },
                        {
                          event: "World Bank GovTech Global Summit",
                          date: "September 2026",
                          location: "Washington D.C.",
                        },
                        { event: "IPU e-Parliament Conference", date: "October 2026", location: "Madrid, Spain" },
                        {
                          event: "AU Pan-African Parliament Summit",
                          date: "November 2026",
                          location: "Midrand, South Africa",
                        },
                        {
                          event: "Somaliland Legislative Heritage Exhibition",
                          date: "December 2026",
                          location: "Hargeisa",
                        },
                      ].map((evt, idx) => (
                        <div key={idx} className="flex items-start gap-4 pb-4 border-b last:border-0">
                          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Calendar className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-sm">{evt.event}</h4>
                            <p className="text-xs text-muted-foreground mt-1">
                              {evt.date} • {evt.location}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Download Section */}
        <section className="py-12 px-4 bg-gradient-to-br from-primary/5 via-accent/5 to-success/5">
          <div className="container">
            <Card className="max-w-3xl mx-auto glass-card">
              <CardHeader className="text-center">
                <CardTitle>Download Strategic Documents</CardTitle>
                <CardDescription>Complete planning documents and roadmaps</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="gap-2">
                    <Download className="h-4 w-4" />
                    Digital Transformation Plan (PDF)
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2 bg-transparent">
                    <Download className="h-4 w-4" />
                    International Engagement Package (PDF)
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
