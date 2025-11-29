import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { MobileBottomNav } from "@/components/mobile-bottom-nav"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Scale, Users, Heart, Shield, Target, Building2 } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col pb-16 lg:pb-0">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-accent/5 to-background">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4">
                About the Guurti
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                Custodians of Peace and Continuity
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                The House of Elders (Golaha Guurtida) represents the wisdom of traditional governance integrated with
                modern democratic institutions in the Republic of Somaliland
              </p>
            </div>
          </div>
        </section>

        {/* Historical Context */}
        <section className="py-16">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-3xl font-heading font-bold mb-6">Historical Foundation</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    The House of Elders traces its roots to the Boorama Conference of 1993, where traditional clan
                    elders convened to forge a path toward peace and governance after years of conflict.
                  </p>
                  <p>
                    At Boorama, the Guurti system was formalized, combining Somali customary law (xeer) with modern
                    parliamentary structures, creating a unique bicameral legislature that balances traditional wisdom
                    with contemporary governance.
                  </p>
                  <p>
                    This innovative institution has been instrumental in maintaining peace, mediating conflicts, and
                    ensuring constitutional continuity in Somaliland for over three decades.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sheikh-ibrahim-boorama-conference-7irH5kLjmUSP2bDweM9aafVHnuf7jE.jpg"
                  alt="Boorama Conference - Historical Foundation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Core Mandate */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Constitutional Mandate</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                The Guurti exercises distinct constitutional powers that complement the House of Representatives
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <Card className="card-premium">
                <CardHeader>
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Peace & Mediation</CardTitle>
                  <CardDescription>
                    Conflict resolution and reconciliation using traditional mechanisms and xeer customary law
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="card-premium">
                <CardHeader>
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Scale className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Constitutional Review</CardTitle>
                  <CardDescription>
                    Reviewing and approving constitutional amendments and electoral laws
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="card-premium">
                <CardHeader>
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>National Security</CardTitle>
                  <CardDescription>
                    Oversight of national security policies and presidential emergency powers
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="card-premium">
                <CardHeader>
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Legislative Balance</CardTitle>
                  <CardDescription>Reviewing legislation passed by the House of Representatives</CardDescription>
                </CardHeader>
              </Card>

              <Card className="card-premium">
                <CardHeader>
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Electoral Oversight</CardTitle>
                  <CardDescription>Extending electoral terms when necessary for national stability</CardDescription>
                </CardHeader>
              </Card>

              <Card className="card-premium">
                <CardHeader>
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Institutional Integrity</CardTitle>
                  <CardDescription>Safeguarding democratic institutions and governance continuity</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Composition */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-heading font-bold mb-8">Composition & Structure</h2>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <Card className="text-center">
                  <CardHeader>
                    <div className="text-4xl font-bold text-primary mb-2">82</div>
                    <CardTitle>Members</CardTitle>
                    <CardDescription>Distinguished Elders representing all clans</CardDescription>
                  </CardHeader>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <div className="text-4xl font-bold text-primary mb-2">6</div>
                    <CardTitle>Committees</CardTitle>
                    <CardDescription>Standing committees covering key sectors</CardDescription>
                  </CardHeader>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <div className="text-4xl font-bold text-primary mb-2">6</div>
                    <CardTitle>Regions</CardTitle>
                    <CardDescription>Representation from all administrative regions</CardDescription>
                  </CardHeader>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Selection Process</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground leading-relaxed">
                    <p>
                      Members of the Guurti are selected through traditional clan consultation processes (shir beeleed),
                      ensuring representation of Somaliland's diverse clan structure. Elders are chosen based on wisdom,
                      integrity, and their proven track record in conflict resolution and community leadership.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Term & Tenure</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground leading-relaxed">
                    <p>
                      The Guurti operates with six-year terms, with provisions for term extensions in consultation with
                      stakeholders. This flexibility allows the institution to maintain stability during critical
                      national transitions while working toward comprehensive electoral reform.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Modern Role */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-heading font-bold mb-6">Contemporary Governance</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Today, the House of Elders continues to evolve, embracing digital transformation and international
                partnerships while maintaining its foundational role as the guardian of peace and constitutional order.
                Through initiatives like the Somaliland Digital Legislative Archive (SDLA) and active participation in
                global parliamentary forums, the Guurti demonstrates how traditional wisdom can enhance modern
                governance.
              </p>
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Somalia_%28Somaliland%29%2C_Hargeisa%2C_House_of_Representatives_1-BoKY2u2JPzyRXfuH7rXIA0iFYH4FRx.jpeg"
                  alt="Modern Guurti Chamber"
                  fill
                  className="object-cover"
                />
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
