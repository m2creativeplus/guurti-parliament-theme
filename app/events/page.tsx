import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { MobileBottomNav } from "@/components/mobile-bottom-nav"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, Globe, ExternalLink, Share2 } from "lucide-react"
import Link from "next/link"

export default function EventsPage() {
  const events = [
    {
      id: 1,
      title: "27th International Conference on Digital Government Research (dg.o 2026)",
      date: "June 1-4, 2026",
      venue: "Omaha, Nebraska, USA",
      host: "Digital Government Society & University of Nebraska",
      track: "Digital Transformation",
      status: "Confirmed",
      delegates: "Chairperson ICT Committee + SDLA Technical Lead",
      theme: "Digital Governance and e-Parliament Innovation",
    },
    {
      id: 2,
      title: "Financial Times Africa Summit 2026",
      date: "October 21-22, 2026",
      venue: "Financial Times HQ, London, UK",
      host: "FT Live, UK FCDO & African Development Bank",
      track: "Economic Leadership",
      status: "Confirmed",
      delegates: "Chairperson Economic Committee + African Economic Leaders' Rep",
      theme: "Africa's Economic Future: Trade, Innovation and Parliamentary Leadership",
    },
    {
      id: 3,
      title: "145th IPU Assembly",
      date: "October 11-15, 2026",
      venue: "Kigali, Rwanda",
      host: "Inter-Parliamentary Union",
      track: "Parliamentary Diplomacy",
      status: "Registration Open",
      delegates: "Speaker + 4 Member Delegation",
      theme: "Parliamentary Innovation for Sustainable Development",
    },
    {
      id: 4,
      title: "Commonwealth Parliamentary Association Regional Conference",
      date: "March 2027",
      venue: "Nairobi, Kenya",
      host: "CPA Africa Region",
      track: "Parliamentary Governance",
      status: "Planned",
      delegates: "TBD",
      theme: "Strengthening Parliamentary Oversight in Africa",
    },
    {
      id: 5,
      title: "UNDP Oslo Governance Forum",
      date: "June 2027",
      venue: "Oslo, Norway",
      host: "UNDP & Norwegian Government",
      track: "Governance & Accountability",
      status: "Expression of Interest",
      delegates: "TBD",
      theme: "Digital Tools for Parliamentary Transparency",
    },
    {
      id: 6,
      title: "World Bank Spring Meetings - Parliamentary Network",
      date: "April 2028",
      venue: "Washington DC, USA",
      host: "World Bank Parliamentary Network",
      track: "Economic Development",
      status: "Planning Stage",
      delegates: "TBD",
      theme: "Parliamentary Engagement in Development Finance",
    },
    {
      id: 7,
      title: "African Governance Architecture Platform Summit",
      date: "September 2028",
      venue: "Addis Ababa, Ethiopia",
      host: "African Union",
      track: "Peace & Security",
      status: "Planning Stage",
      delegates: "TBD",
      theme: "Traditional Governance Systems and Modern Democracy",
    },
  ]

  const statusConfig = {
    Confirmed: "default" as const,
    "Registration Open": "secondary" as const,
    Planned: "outline" as const,
    "Expression of Interest": "outline" as const,
    "Planning Stage": "outline" as const,
  }

  return (
    <div className="flex min-h-screen flex-col pb-16 lg:pb-0">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-accent/5 to-background py-16">
          <div className="container">
            <div className="max-w-4xl">
              <Badge variant="outline" className="mb-4">
                International Engagements 2026–2030
              </Badge>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Legislative Diplomatic Calendar</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Scheduled international forums, conferences, and parliamentary engagements advancing Somaliland's
                governance visibility and cooperation
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gap-2" asChild>
                  <Link href="/international-engagement">
                    <Calendar className="h-5 w-5" />
                    View Event Banners & Live Countdown
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="gap-2 bg-transparent">
                  <Calendar className="h-5 w-5" />
                  Download Full Calendar
                </Button>
                <Button size="lg" variant="outline" className="gap-2 bg-transparent">
                  <Share2 className="h-5 w-5" />
                  Share Calendar
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Track Filters */}
        <section className="py-8 border-b bg-muted/30">
          <div className="container">
            <div className="flex flex-wrap gap-2">
              <Badge variant="default" className="cursor-pointer">
                All Events
              </Badge>
              <Badge variant="outline" className="cursor-pointer">
                Digital Transformation
              </Badge>
              <Badge variant="outline" className="cursor-pointer">
                Economic Leadership
              </Badge>
              <Badge variant="outline" className="cursor-pointer">
                Parliamentary Diplomacy
              </Badge>
              <Badge variant="outline" className="cursor-pointer">
                Governance
              </Badge>
              <Badge variant="outline" className="cursor-pointer">
                Peace & Security
              </Badge>
            </div>
          </div>
        </section>

        {/* Events List */}
        <section className="py-12">
          <div className="container">
            <div className="grid gap-6">
              {events.map((event) => (
                <Card key={event.id} className="hover-lift">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant={statusConfig[event.status as keyof typeof statusConfig]}>
                            {event.status}
                          </Badge>
                          <Badge variant="outline">{event.track}</Badge>
                        </div>
                        <CardTitle className="text-2xl mb-2">{event.title}</CardTitle>
                        <CardDescription className="text-base">{event.theme}</CardDescription>
                      </div>
                      <Button variant="ghost" size="icon">
                        <ExternalLink className="h-5 w-5" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
                          <div>
                            <p className="text-sm font-medium">Date</p>
                            <p className="text-sm text-muted-foreground">{event.date}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                          <div>
                            <p className="text-sm font-medium">Venue</p>
                            <p className="text-sm text-muted-foreground">{event.venue}</p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <Globe className="h-5 w-5 text-muted-foreground mt-0.5" />
                          <div>
                            <p className="text-sm font-medium">Host Organization</p>
                            <p className="text-sm text-muted-foreground">{event.host}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Users className="h-5 w-5 text-muted-foreground mt-0.5" />
                          <div>
                            <p className="text-sm font-medium">Delegation</p>
                            <p className="text-sm text-muted-foreground">{event.delegates}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <p className="text-center text-sm text-muted-foreground mt-8">
              Managed by External Partnerships Desk (EPD) • Updated monthly
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
      <MobileBottomNav />
    </div>
  )
}
