import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { MobileBottomNav } from "@/components/mobile-bottom-nav"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Globe, DollarSign, Scale, Users, Building2, Heart, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CommitteesPage() {
  const committees = [
    {
      id: 1,
      name: "Foreign Affairs & International Cooperation",
      chair: "Hon. Elder Ahmed Hassan Adan",
      members: 15,
      icon: Globe,
      description:
        "Oversees international relations, diplomatic engagement, development cooperation, and foreign policy alignment with national interests.",
      focus: ["Diplomatic Relations", "International Aid", "Trade Agreements", "Regional Integration"],
      href: "/committees/foreign-affairs",
    },
    {
      id: 2,
      name: "Economic Affairs & Finance",
      chair: "Hon. Elder Mohamed Ali Jama",
      members: 14,
      icon: DollarSign,
      description:
        "Reviews fiscal policy, budget oversight, economic development strategies, and private sector enabling environment.",
      focus: ["Budget Review", "Economic Policy", "Investment Climate", "SME Development"],
      href: "/committees/economic-affairs",
    },
    {
      id: 3,
      name: "Governance, Justice & Constitutional Affairs",
      chair: "Hon. Elder Abdirahman Ibrahim Hashi",
      members: 16,
      icon: Scale,
      description: "Constitutional review, judicial oversight, rule of law, and governance reform initiatives.",
      focus: ["Constitutional Law", "Judicial Reform", "Electoral Law", "Human Rights"],
      href: "/committees/governance-justice",
    },
    {
      id: 4,
      name: "Social Affairs, Peace & Mediation",
      chair: "Hon. Elder Farah Mohamed Hassan",
      members: 13,
      icon: Heart,
      description:
        "Traditional conflict resolution, community reconciliation, social cohesion, and humanitarian affairs.",
      focus: ["Conflict Resolution", "Traditional Mediation", "Social Cohesion", "Humanitarian Response"],
      href: "/committees/social-affairs",
    },
    {
      id: 5,
      name: "Public Administration & Civil Service Reform",
      chair: "Hon. Elder Hassan Omar Sheikh",
      members: 12,
      icon: Building2,
      description:
        "Civil service modernization, administrative efficiency, anti-corruption measures, and institutional capacity building.",
      focus: ["Civil Service Reform", "Anti-Corruption", "Institutional Capacity", "Public Sector Efficiency"],
      href: "/committees/public-administration",
    },
    {
      id: 6,
      name: "Regional Development & Local Governance",
      chair: "Hon. Elder Ibrahim Yusuf Adan",
      members: 12,
      icon: Users,
      description:
        "Decentralization, regional coordination, local government capacity, and equitable development across regions.",
      focus: ["Decentralization", "Regional Equity", "Local Government", "Infrastructure Development"],
      href: "/committees/regional-development",
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
              <Badge variant="outline" className="mb-4">
                Standing Committees
              </Badge>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Guurti Committee Structure</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Six specialized committees driving legislative oversight, policy development, and sectoral governance
                across national priorities
              </p>
            </div>
          </div>
        </section>

        {/* Committees Grid */}
        <section className="py-16">
          <div className="container">
            <div className="grid gap-8 max-w-6xl mx-auto">
              {committees.map((committee) => {
                const Icon = committee.icon
                return (
                  <Card key={committee.id} className="card-premium hover-lift">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="flex items-start gap-4 flex-1">
                          <div className="h-16 w-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Icon className="h-8 w-8 text-primary" />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-2xl mb-2">{committee.name}</CardTitle>
                            <CardDescription className="text-base mb-3">{committee.description}</CardDescription>
                            <div className="flex flex-wrap gap-2 mb-3">
                              <Badge variant="outline" className="text-xs">
                                Chair: {committee.chair}
                              </Badge>
                              <Badge variant="secondary" className="text-xs">
                                {committee.members} Members
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <Button asChild variant="ghost" size="icon">
                          <Link href={committee.href}>
                            <ArrowRight className="h-5 w-5" />
                          </Link>
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div>
                        <p className="text-sm font-semibold mb-3 text-muted-foreground">Key Focus Areas:</p>
                        <div className="flex flex-wrap gap-2">
                          {committee.focus.map((area) => (
                            <Badge key={area} variant="outline">
                              {area}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="mt-6 pt-6 border-t">
                        <Button asChild className="w-full sm:w-auto">
                          <Link href={committee.href}>
                            View Committee Profile <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Committee Operations */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-heading font-bold mb-8 text-center">How Committees Operate</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Regular Sessions</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    Committees meet bi-weekly during parliamentary sessions to review legislation, conduct oversight,
                    and engage with stakeholders.
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Public Consultations</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    Committees hold public hearings and consultations with civil society, experts, and affected
                    communities.
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Legislative Review</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    All legislation passes through relevant committees for detailed scrutiny before plenary
                    consideration.
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Oversight Functions</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    Committees monitor implementation of laws and hold government departments accountable.
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
