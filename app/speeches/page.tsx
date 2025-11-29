import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { MobileBottomNav } from "@/components/mobile-bottom-nav"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Mic, Calendar, Download, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function SpeechesPage() {
  const speeches = [
    {
      id: 1,
      title: "State of the House Address - Opening of 2025 Session",
      speaker: "Hon. Speaker Suleiman Mohamoud Adan",
      date: "January 15, 2025",
      category: "Parliamentary Opening",
      excerpt:
        "Outlining the legislative agenda, institutional priorities, and governance reforms for the 2025-2026 session.",
    },
    {
      id: 2,
      title: "Peace and Reconciliation Framework Address",
      speaker: "Chair, Social Affairs Committee",
      date: "November 8, 2025",
      category: "Peace & Mediation",
      excerpt: "Presenting the new national community mediation fund framework approved by the Guurti.",
    },
    {
      id: 3,
      title: "Digital Transformation Vision Statement",
      speaker: "Chair, ICT Committee",
      date: "October 20, 2025",
      category: "Digital Governance",
      excerpt: "Unveiling the Somaliland Digital Legislative Archive (SDLA) progress and future roadmap.",
    },
    {
      id: 4,
      title: "International Partnerships Strategy",
      speaker: "Director, External Partnerships Desk",
      date: "September 30, 2025",
      category: "International Relations",
      excerpt: "Presenting the 2026-2030 legislative diplomatic engagement strategy and upcoming international forums.",
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
                <Mic className="h-8 w-8 text-primary" />
                <Badge variant="outline">Official Statements</Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Speeches & Statements</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Official parliamentary addresses, policy statements, and keynote speeches from Guurti leadership
              </p>
            </div>
          </div>
        </section>

        {/* Speeches List */}
        <section className="py-12">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-6">
              {speeches.map((speech) => (
                <Card key={speech.id} className="card-premium hover-lift">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="outline">{speech.category}</Badge>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            {speech.date}
                          </div>
                        </div>
                        <CardTitle className="text-2xl mb-2">{speech.title}</CardTitle>
                        <CardDescription className="text-base">By {speech.speaker}</CardDescription>
                      </div>
                      <Button variant="ghost" size="icon">
                        <Download className="h-5 w-5" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed mb-4">{speech.excerpt}</p>
                    <div className="flex items-center gap-3">
                      <Button asChild variant="outline">
                        <Link href={`/speeches/${speech.id}`}>
                          Read Full Transcript <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download PDF
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
