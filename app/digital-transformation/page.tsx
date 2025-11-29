import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, CheckCircle2, Circle } from "lucide-react"
import Link from "next/link"

const ganttData = [
  {
    phase: "Phase 1: Strategic Direction",
    actions: "Approve Vision 2030, Steering Committee, Audit, Strategy",
    quarters: {
      "Q1 2025": true,
      "Q2 2025": true,
      "Q3 2025": true,
      "Q4 2025": false,
      "Q1 2026": false,
      "Q2 2026": false,
      "Q3 2026": false,
      "Q4 2026": false,
      "2027": false,
      "2028": false,
    },
  },
  {
    phase: "Phase 2: Governance & Policy",
    actions: "Digital Governance Charter, Open Parliament Policy, ISO Alignment",
    quarters: {
      "Q1 2025": false,
      "Q2 2025": false,
      "Q3 2025": true,
      "Q4 2025": true,
      "Q1 2026": true,
      "Q2 2026": true,
      "Q3 2026": false,
      "Q4 2026": false,
      "2027": false,
      "2028": false,
    },
  },
  {
    phase: "Phase 3: Core Digital Systems",
    actions: "Website, DMS, E-Voting, API, Digital Archive",
    quarters: {
      "Q1 2025": false,
      "Q2 2025": false,
      "Q3 2025": false,
      "Q4 2025": true,
      "Q1 2026": true,
      "Q2 2026": true,
      "Q3 2026": true,
      "Q4 2026": true,
      "2027": false,
      "2028": false,
    },
  },
  {
    phase: "Phase 4: Infrastructure & Cybersecurity",
    actions: "Network upgrades, MFA, Encryption, Testing",
    quarters: {
      "Q1 2025": false,
      "Q2 2025": false,
      "Q3 2025": false,
      "Q4 2025": false,
      "Q1 2026": true,
      "Q2 2026": true,
      "Q3 2026": true,
      "Q4 2026": true,
      "2027": true,
      "2028": true,
    },
  },
  {
    phase: "Phase 5: Capacity & Culture",
    actions: "Training, Digital Champions, Help Desk",
    quarters: {
      "Q1 2025": false,
      "Q2 2025": false,
      "Q3 2025": false,
      "Q4 2025": false,
      "Q1 2026": true,
      "Q2 2026": true,
      "Q3 2026": true,
      "Q4 2026": true,
      "2027": true,
      "2028": true,
    },
  },
  {
    phase: "Phase 6: Public Engagement",
    actions: "Livestream, Citizen Feedback, Open Parliament Report",
    quarters: {
      "Q1 2025": false,
      "Q2 2025": false,
      "Q3 2025": false,
      "Q4 2025": false,
      "Q1 2026": false,
      "Q2 2026": false,
      "Q3 2026": true,
      "Q4 2026": true,
      "2027": true,
      "2028": true,
    },
  },
  {
    phase: "Phase 7: Monitoring & Sustainability",
    actions: "KPI Dashboard, ICT Budget, Annual Audit",
    quarters: {
      "Q1 2025": false,
      "Q2 2025": false,
      "Q3 2025": false,
      "Q4 2025": false,
      "Q1 2026": false,
      "Q2 2026": false,
      "Q3 2026": false,
      "Q4 2026": true,
      "2027": true,
      "2028": true,
    },
  },
]

const timelineQuarters = [
  "Q1 2025",
  "Q2 2025",
  "Q3 2025",
  "Q4 2025",
  "Q1 2026",
  "Q2 2026",
  "Q3 2026",
  "Q4 2026",
  "2027",
  "2028",
]

export default function DigitalTransformationPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 py-12 px-4">
        <div className="container max-w-7xl">
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/strategic-plan">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Strategic Plan
            </Link>
          </Button>

          <div className="space-y-6">
            <div className="text-center space-y-3">
              <Badge variant="outline" className="mb-2">
                <Calendar className="h-3 w-3 mr-1" />
                2025-2028 Implementation
              </Badge>
              <h1 className="text-4xl font-heading font-bold">Digital Transformation Roadmap</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive Gantt chart showing the 7-phase implementation plan by M2 Creative for Golaha Guurtida's
                modernization
              </p>
            </div>

            {/* Gantt Chart */}
            <Card className="glass-card overflow-hidden">
              <CardHeader>
                <CardTitle>Implementation Timeline</CardTitle>
                <CardDescription>Quarterly breakdown of all strategic phases</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[1000px]">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-4 font-semibold bg-muted/50 sticky left-0 z-10 min-w-[280px]">
                          Phase & Actions
                        </th>
                        {timelineQuarters.map((quarter) => (
                          <th key={quarter} className="text-center p-3 font-medium text-sm bg-muted/30 min-w-[80px]">
                            {quarter}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {ganttData.map((row, rowIdx) => (
                        <tr key={rowIdx} className="border-b hover:bg-muted/10 transition-colors">
                          <td className="p-4 sticky left-0 bg-background z-10">
                            <div className="space-y-1">
                              <p className="font-medium text-sm">{row.phase}</p>
                              <p className="text-xs text-muted-foreground">{row.actions}</p>
                            </div>
                          </td>
                          {timelineQuarters.map((quarter) => (
                            <td key={quarter} className="text-center p-3">
                              {row.quarters[quarter] ? (
                                <div className="h-8 bg-gradient-to-r from-success via-primary to-accent rounded flex items-center justify-center">
                                  <CheckCircle2 className="h-4 w-4 text-white" />
                                </div>
                              ) : (
                                <div className="h-8 flex items-center justify-center">
                                  <Circle className="h-3 w-3 text-muted-foreground/30" />
                                </div>
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="flex items-center gap-6 justify-center pt-6 mt-6 border-t">
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-12 bg-gradient-to-r from-success via-primary to-accent rounded"></div>
                    <span className="text-sm text-muted-foreground">Active Phase</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Circle className="h-3 w-3 text-muted-foreground/30" />
                    <span className="text-sm text-muted-foreground">Future Phase</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Phase Details Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
              {ganttData.map((phase, idx) => {
                const activeQuarters = Object.entries(phase.quarters)
                  .filter(([_, active]) => active)
                  .map(([quarter]) => quarter)

                return (
                  <Card key={idx} className="hover-lift">
                    <CardHeader>
                      <Badge variant="outline" className="w-fit mb-2">
                        Phase {idx + 1}
                      </Badge>
                      <CardTitle className="text-lg">{phase.phase.replace(`Phase ${idx + 1}: `, "")}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <p className="text-xs font-medium text-muted-foreground mb-1">Major Actions</p>
                        <p className="text-sm">{phase.actions}</p>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-muted-foreground mb-1">Timeline</p>
                        <p className="text-sm font-medium">
                          {activeQuarters[0]} - {activeQuarters[activeQuarters.length - 1]}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-muted-foreground mb-1">Duration</p>
                        <p className="text-sm">{activeQuarters.length} periods</p>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
