import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { donorOpportunities, engagementEvents, strategicObjectives } from "@/lib/data/strategic-data"
import { Building2, Calendar, FileText, Globe, Target, Users } from "lucide-react"

export default function EPDPage() {
  const activeOpportunities = donorOpportunities.filter((d) =>
    ["Prospecting", "ToR Drafting", "Concept Note", "Contact Made", "High Fit"].includes(d.status),
  ).length

  const upcomingEvents = engagementEvents.filter((e) => e.year >= 2026 && e.year <= 2027).length

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Building2 className="h-10 w-10 text-primary" />
            <div>
              <h1 className="text-4xl font-bold text-foreground">External Partnerships Desk</h1>
              <p className="text-muted-foreground text-lg">Guddiga Arrimaha Dibadda, Iskaashiga Caalamiga ah</p>
            </div>
          </div>
          <p className="text-muted-foreground max-w-3xl">
            The EPD serves as the Guurti's front office for international cooperation, donor relations, and
            diplomatic/academic exchanges. We advance Somaliland's legislative diplomacy through structured engagement
            with parliamentary bodies, development partners, and academic institutions.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid gap-4 md:grid-cols-3 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Opportunities</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{activeOpportunities}</div>
              <p className="text-xs text-muted-foreground">Donor & partner pipeline</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Upcoming Engagements</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{upcomingEvents}</div>
              <p className="text-xs text-muted-foreground">2026-2027 calendar</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Strategic Objectives</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">12</div>
              <p className="text-xs text-muted-foreground">2025-2030 targets</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="donors">Donor Pipeline</TabsTrigger>
            <TabsTrigger value="engagements">Engagements</TabsTrigger>
            <TabsTrigger value="strategy">Strategy</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Mission & Mandate</CardTitle>
                <CardDescription>Constitutional basis: Articles 57–61, Somaliland Constitution</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Core Functions</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Maintain donor and partner pipeline for legislative development initiatives</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Prepare MoUs with parliamentary associations, development agencies, and universities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Coordinate Guurti delegations to international parliamentary forums (2026–2030)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Support SDLA development and international legal heritage partnerships</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Feed institutional communications with IPU-standard parliamentary diplomacy content</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Priority MoUs (2026)</h3>
                  <div className="grid gap-3 md:grid-cols-2">
                    <div className="p-3 bg-muted rounded-lg">
                      <p className="font-medium text-sm">IPU / CPA Framework</p>
                      <p className="text-xs text-muted-foreground mt-1">Observer/technical participation model</p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <p className="font-medium text-sm">UNDP Governance Cluster</p>
                      <p className="text-xs text-muted-foreground mt-1">SDLA + parliamentary digitalization</p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <p className="font-medium text-sm">SNPA Partnership</p>
                      <p className="text-xs text-muted-foreground mt-1">Permanent archival & publication services</p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <p className="font-medium text-sm">Regional Universities</p>
                      <p className="text-xs text-muted-foreground mt-1">Legal heritage and legislative research</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tagline & Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <blockquote className="border-l-4 border-primary pl-4 italic text-foreground">
                  "Xikmad. Xasilooni. Horumar. — Elders for Peace, Partners for Progress."
                </blockquote>
                <p className="mt-4 text-sm text-muted-foreground">
                  Somaliland's diplomacy of wisdom — led by its elders — connects peace, governance, and partnership.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="donors" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Donor & Partner Tracking Dashboard</CardTitle>
                <CardDescription>
                  Active opportunities for SDLA, website development, committee digitalization, and parliamentary
                  capacity building
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {donorOpportunities.map((opportunity) => (
                    <div key={opportunity.name} className="p-4 border rounded-lg space-y-2">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground">{opportunity.name}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{opportunity.focus}</p>
                        </div>
                        <Badge
                          variant={
                            opportunity.status === "High Fit"
                              ? "default"
                              : opportunity.status === "Contact Made"
                                ? "secondary"
                                : "outline"
                          }
                        >
                          {opportunity.status}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {opportunity.window}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          {opportunity.owner}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="engagements" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>International Engagement Calendar (2026–2030)</CardTitle>
                <CardDescription>
                  Strategic parliamentary diplomacy aligned with Legislative Diplomatic Engagement Strategy (LDES)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[2026, 2027, 2028, 2029, 2030].map((year) => {
                    const yearEvents = engagementEvents.filter((e) => e.year === year)
                    if (yearEvents.length === 0) return null

                    return (
                      <div key={year}>
                        <h3 className="text-lg font-semibold text-foreground mb-3">{year}</h3>
                        <div className="space-y-3">
                          {yearEvents.map((event) => (
                            <div key={event.title} className="p-4 bg-muted rounded-lg">
                              <div className="flex items-start justify-between gap-4 mb-2">
                                <h4 className="font-medium text-foreground">{event.title}</h4>
                                <Badge variant="outline">{event.track}</Badge>
                              </div>
                              <p className="text-sm text-muted-foreground mb-2">{event.purpose}</p>
                              <p className="text-xs text-muted-foreground">Status: {event.status}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="strategy" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Strategic Objectives (2025–2030)</CardTitle>
                <CardDescription>Aligned with Somaliland Vision 2030 and National Development Plan III</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-green-500"></span>
                    Short-term (2025–2026)
                  </h3>
                  <ul className="space-y-2">
                    {strategicObjectives.shortTerm.map((objective, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                    Medium-term (2027–2028)
                  </h3>
                  <ul className="space-y-2">
                    {strategicObjectives.mediumTerm.map((objective, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-purple-500"></span>
                    Long-term (2029–2030)
                  </h3>
                  <ul className="space-y-2">
                    {strategicObjectives.longTerm.map((objective, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>International Benchmarks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3 md:grid-cols-2">
                  <div className="p-3 border rounded-lg">
                    <p className="font-medium text-sm">IPU Standards</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Communications Strategy & Social Media Guide (2019-2021)
                    </p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <p className="font-medium text-sm">UNDP Digital Transformation</p>
                    <p className="text-xs text-muted-foreground mt-1">Thailand National Assembly Model (2024)</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <p className="font-medium text-sm">South Africa Parliament</p>
                    <p className="text-xs text-muted-foreground mt-1">Communication Services Model (2024)</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <p className="font-medium text-sm">Uganda Parliament</p>
                    <p className="text-xs text-muted-foreground mt-1">Strategic Plan (2025-2030)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <Card className="mt-8 bg-primary text-primary-foreground">
          <CardContent className="p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold mb-2">Ready to Partner with Guurti?</h3>
                <p className="text-sm opacity-90">
                  Contact the External Partnerships Desk to explore collaboration opportunities
                </p>
              </div>
              <Button variant="secondary" size="lg">
                <Globe className="mr-2 h-4 w-4" />
                Contact EPD
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
