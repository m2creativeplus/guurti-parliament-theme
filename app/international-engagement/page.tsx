import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Target, DollarSign, Globe, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { EventBanner } from "@/components/event-banner"
import Image from "next/image"

const events2026 = [
  {
    id: 1,
    event: "OECD Global Parliamentary Network (GPN) Plenary",
    dates: "11–13 March 2026",
    startDate: new Date("2026-03-11T09:00:00"),
    endDate: "13 March 2026 5:00 pm",
    venue: "OECD Conference Centre, Paris",
    location: "Paris, France",
    focus: "Legislative cooperation on global challenges",
    objective: "Present Somaliland hybrid bicameral model and launch the EPD",
    funding: "Government + donor co-funding (OECD + UNDP Rule of Law fund)",
    pillar: "Legislative Diplomacy",
    outcome: "OECD/IPU recognition",
    gradient: "bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600",
    status: "upcoming" as const,
  },
  {
    id: 2,
    event: "IPU 149th Assembly & Forum of Women Parliamentarians",
    dates: "April 2026",
    startDate: new Date("2026-04-15T09:00:00"),
    endDate: "18 April 2026 5:00 pm",
    venue: "International Conference Centre Geneva",
    location: "Geneva, Switzerland",
    focus: "Parliamentary innovation, gender inclusion, democracy",
    objective: "Observer participation; benchmark bicameral integration",
    funding: "Fully funded through IPU Partnership Programme",
    pillar: "Innovation & Visibility",
    outcome: "IPU Innovation endorsement",
    gradient: "bg-gradient-to-br from-purple-600 via-purple-500 to-pink-600",
    status: "upcoming" as const,
  },
  {
    id: 3,
    event: "Commonwealth Parliamentary Association (CPA) Regional Summit",
    dates: "June 2026",
    startDate: new Date("2026-06-20T09:00:00"),
    endDate: "23 June 2026 5:00 pm",
    venue: "Accra International Conference Centre",
    location: "Accra, Ghana",
    focus: "Strengthening African parliamentary institutions",
    objective: "Showcase Guurti's role in peace and stability",
    funding: "CPA Africa grant (travel and accommodation covered)",
    pillar: "African Integration",
    outcome: "CPA/AU recognition",
    gradient: "bg-gradient-to-br from-teal-600 via-emerald-500 to-green-600",
    status: "upcoming" as const,
  },
  {
    id: 4,
    event: "UNDP Governance & Rule of Law Forum",
    dates: "July 2026",
    startDate: new Date("2026-07-10T09:00:00"),
    endDate: "12 July 2026 5:00 pm",
    venue: "African Union Conference Centre",
    location: "Addis Ababa, Ethiopia",
    focus: "Digital governance and SDG 16 institutions",
    objective: "Present the SDLA and seek UNDP technical cooperation",
    funding: "Fully funded (UNDP invite-only event)",
    pillar: "Digital Governance",
    outcome: "UNDP support secured",
    gradient: "bg-gradient-to-br from-cyan-600 via-blue-500 to-teal-600",
    status: "upcoming" as const,
  },
  {
    id: 5,
    event: "World Bank GovTech Global Summit",
    dates: "September 2026",
    startDate: new Date("2026-09-15T09:00:00"),
    endDate: "17 September 2026 5:00 pm",
    venue: "World Bank Headquarters / Hybrid",
    location: "Washington D.C., USA",
    focus: "Digital transformation of governments",
    objective: "Seek technical and financial support for SDLA",
    funding: "Co-funded through World Bank trust fund (partner ticket + hybrid)",
    pillar: "Digital Governance",
    outcome: "World Bank partnership",
    gradient: "bg-gradient-to-br from-orange-600 via-amber-500 to-yellow-600",
    status: "upcoming" as const,
  },
  {
    id: 6,
    event: "IPU e-Parliament Conference",
    dates: "October 2026",
    startDate: new Date("2026-10-20T09:00:00"),
    endDate: "22 October 2026 5:00 pm",
    venue: "Madrid Congress Palace",
    location: "Madrid, Spain",
    focus: "ICT innovation in legislatures",
    objective: "Showcase Guurti's digital roadmap and archive modernization",
    funding: "Apply via IPU Innovation Hub fund",
    pillar: "Innovation & Visibility",
    outcome: "IPU Innovation endorsement",
    gradient: "bg-gradient-to-br from-red-600 via-rose-500 to-pink-600",
    status: "upcoming" as const,
  },
  {
    id: 7,
    event: "AU Pan-African Parliament Summit on Governance and Peace",
    dates: "November 2026",
    startDate: new Date("2026-11-05T09:00:00"),
    endDate: "8 November 2026 5:00 pm",
    venue: "Pan-African Parliament Complex",
    location: "Midrand, South Africa",
    focus: "Peace, reconciliation, and traditional leadership",
    objective: "Present Somaliland's traditional conflict resolution framework",
    funding: "AU Peace & Governance Fund / UN Habitat support",
    pillar: "African Integration",
    outcome: "AU recognition",
    gradient: "bg-gradient-to-br from-green-600 via-teal-500 to-emerald-600",
    status: "upcoming" as const,
  },
  {
    id: 8,
    event: "Somaliland Legislative Heritage Exhibition",
    dates: "December 2026",
    startDate: new Date("2026-12-15T09:00:00"),
    endDate: "17 December 2026 5:00 pm",
    venue: "SNPA Hall",
    location: "Hargeisa, Somaliland",
    focus: "National wrap-up and public diplomacy",
    objective: "Showcase 2026 outcomes and announce 2027 agenda",
    funding: "SNPA + M2 Creative + local donors (EU Delegation / UNDP)",
    pillar: "Branding & Public Diplomacy",
    outcome: "Annual report publication",
    gradient: "bg-gradient-to-br from-emerald-600 via-amber-500 to-red-600",
    status: "upcoming" as const,
  },
]

export default function InternationalEngagementPage() {
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

          <div className="space-y-8">
            <div className="text-center space-y-4">
              <div className="flex justify-center mb-4">
                <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-primary via-accent to-success p-1">
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Seal_of_the_Somaliland_House_of_Elders-2-Ysl63cCzz2QEfxHVOEy86a2GN0DWYq.png"
                      alt="Guurti Seal"
                      width={80}
                      height={80}
                      className="rounded-full"
                    />
                  </div>
                </div>
              </div>
              <Badge variant="outline" className="mb-2">
                <Globe className="h-3 w-3 mr-1" />
                2026 Master Package
              </Badge>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-gradient">
                International Engagement & Funding
              </h1>
              <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
                Strategic plan for Somaliland's legislative participation in global and regional parliamentary events —
                maximizing visibility, partnerships, and donor funding
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="border-t-4 border-t-primary card-premium">
                <CardHeader className="pb-3">
                  <CardTitle className="text-3xl font-bold text-primary">8</CardTitle>
                  <CardDescription>International Events</CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-t-4 border-t-accent card-premium">
                <CardHeader className="pb-3">
                  <CardTitle className="text-3xl font-bold text-accent-foreground">$74,700</CardTitle>
                  <CardDescription>Total Budget (USD)</CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-t-4 border-t-success card-premium">
                <CardHeader className="pb-3">
                  <CardTitle className="text-3xl font-bold text-success">50%</CardTitle>
                  <CardDescription>External Funding Target</CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-t-4 border-t-secondary card-premium">
                <CardHeader className="pb-3">
                  <CardTitle className="text-3xl font-bold text-secondary">4</CardTitle>
                  <CardDescription>Continents Covered</CardDescription>
                </CardHeader>
              </Card>
            </div>

            {/* Budget Breakdown */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-primary" />
                  Funding Model & Budget Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-sm">Funding Sources</h4>
                    <div className="space-y-3">
                      {[
                        { source: "Government Allocation", percentage: "35%", color: "primary" },
                        { source: "Donor Co-financing", percentage: "40%", color: "accent" },
                        { source: "Institutional In-Kind Support", percentage: "15%", color: "success" },
                        { source: "External Sponsorships", percentage: "10%", color: "secondary" },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between">
                          <span className="text-sm">{item.source}</span>
                          <Badge variant="outline">{item.percentage}</Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-sm">Budget Allocation (USD)</h4>
                    <div className="space-y-3">
                      {[
                        { category: "Travel & Logistics", amount: "$52,000" },
                        { category: "Exhibition Materials", amount: "$8,500" },
                        { category: "Communication & Press", amount: "$5,200" },
                        { category: "Event Registration", amount: "$3,000" },
                        { category: "Contingency", amount: "$6,000" },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between">
                          <span className="text-sm">{item.category}</span>
                          <span className="font-medium text-sm">{item.amount}</span>
                        </div>
                      ))}
                      <div className="flex items-center justify-between pt-3 border-t font-bold">
                        <span>Total Estimated</span>
                        <span className="text-primary">$74,700</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-heading font-bold">2026 Event Calendar</h2>
                <Badge variant="secondary" className="hidden sm:flex">
                  Live Countdown Tracking
                </Badge>
              </div>
              <p className="text-muted-foreground">
                Track all upcoming international events with real-time countdowns and comprehensive event details
              </p>
              <div className="space-y-6">
                {events2026.map((event) => (
                  <div key={event.id} className="space-y-4">
                    <EventBanner
                      eventNumber={event.id}
                      title={event.event}
                      date={event.dates}
                      endDate={event.endDate}
                      location={event.location}
                      venue={event.venue}
                      status={event.status}
                      gradient={event.gradient}
                      targetDate={event.startDate}
                      logoUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Seal_of_the_Somaliland_House_of_Elders-2-Ysl63cCzz2QEfxHVOEy86a2GN0DWYq.png"
                    />

                    {/* Event Details Card */}
                    <Card className="glass-card">
                      <CardContent className="pt-6">
                        <div className="grid md:grid-cols-3 gap-6">
                          <div>
                            <p className="text-xs font-medium text-muted-foreground mb-1 uppercase tracking-wider">
                              Focus Area
                            </p>
                            <p className="text-sm font-medium">{event.focus}</p>
                          </div>
                          <div>
                            <p className="text-xs font-medium text-muted-foreground mb-1 uppercase tracking-wider">
                              Primary Objective
                            </p>
                            <p className="text-sm font-medium">{event.objective}</p>
                          </div>
                          <div>
                            <p className="text-xs font-medium text-muted-foreground mb-1 uppercase tracking-wider">
                              Strategic Pillar
                            </p>
                            <Badge variant="outline">{event.pillar}</Badge>
                          </div>
                        </div>
                        <div className="mt-6 pt-6 border-t">
                          <p className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">
                            Funding Route
                          </p>
                          <p className="text-sm">{event.funding}</p>
                        </div>
                        <div className="mt-4 flex items-center gap-2 p-4 bg-success/10 rounded-lg border border-success/20">
                          <Target className="h-5 w-5 text-success flex-shrink-0" />
                          <div>
                            <span className="text-sm font-medium">Expected Outcome: </span>
                            <span className="text-sm text-muted-foreground">{event.outcome}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Expected Outcomes */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-success" />
                  Expected Outcomes by End of 2026
                </CardTitle>
                <CardDescription>Strategic achievements and milestones we aim to accomplish</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid md:grid-cols-2 gap-4">
                  {[
                    "Somaliland listed in OECD and IPU directories",
                    "Two international MoUs signed (UNDP, EU NDICI)",
                    "USD 35,000–40,000 external funding secured",
                    "International media coverage from 5 outlets",
                    "SDLA recognized as regional digital innovation model",
                    "Partnership agreements with 3 regional parliaments",
                    "Featured in 2 major parliamentary innovation reports",
                    "Hosting capacity for international delegations established",
                  ].map((outcome, idx) => (
                    <li key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                      <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Strategic Partners & Donors</CardTitle>
                <CardDescription>Organizations supporting Somaliland's international engagement</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    {
                      name: "UNDP",
                      logo: "/undp-logo.png",
                    },
                    {
                      name: "FCDO",
                      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hdcW0MlnwslwUVOeuUGTBlRTSoXfaW.png",
                    },
                    {
                      name: "World Bank",
                      logo: "/world-bank-logo.png",
                    },
                    {
                      name: "IPU",
                      logo: "/ipu-logo.jpg",
                    },
                  ].map((partner, idx) => (
                    <div key={idx} className="flex items-center justify-center p-4 bg-muted/50 rounded-lg hover-lift">
                      <Image
                        src={partner.logo || "/placeholder.svg"}
                        alt={partner.name}
                        width={120}
                        height={60}
                        className="object-contain grayscale hover:grayscale-0 transition-all duration-300 dark:invert"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
