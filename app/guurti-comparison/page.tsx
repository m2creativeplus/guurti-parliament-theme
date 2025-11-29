import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { parliamentComparison } from "@/lib/data/ica-pcom-data"
import { Scale, Users, Shield } from "lucide-react"
import Image from "next/image"

export default function GuurtiComparisonPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background"></div>
          <div className="container relative z-10">
            <div className="max-w-5xl mx-auto text-center space-y-6">
              <Badge variant="outline" className="text-base px-4 py-2">
                <Scale className="h-4 w-4 mr-2 inline" />
                Comparative Institutional Analysis
              </Badge>
              <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight">
                UK House of Lords vs Somaliland Golaha Guurtida
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Two Unelected Chambers, Two Different Stories: Comparative framework based on governance structure,
                membership, powers, and legitimacy
              </p>
            </div>
          </div>
        </section>

        {/* Summary Cards */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="card-premium">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <Image
                      src="/uk-commons-logo.png"
                      alt="UK Parliament"
                      width={48}
                      height={48}
                      className="rounded-lg"
                    />
                    <div>
                      <CardTitle>UK House of Lords</CardTitle>
                      <CardDescription>United Kingdom</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">Members</p>
                    <p className="text-2xl font-bold">789</p>
                    <p className="text-xs text-muted-foreground">Life peers, hereditary peers, bishops</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">Selection Method</p>
                    <p className="text-sm">Appointed by the Crown</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">Legitimacy Source</p>
                    <p className="text-sm">Institutional & procedural legitimacy through centuries of continuity</p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <Badge variant="secondary">Revising Chamber</Badge>
                    <Badge variant="secondary">Expert Review</Badge>
                    <Badge variant="secondary">Delay Powers</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-premium border-primary/20">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Emblem_of_Somaliland.svg-KA2VMS1RBGBiZwHBJKbe1LbHH7N0oc.png"
                      alt="Somaliland Emblem"
                      width={48}
                      height={48}
                      className="rounded-lg"
                    />
                    <div>
                      <CardTitle>Golaha Guurtida</CardTitle>
                      <CardDescription>Republic of Somaliland</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">Members</p>
                    <p className="text-2xl font-bold">82</p>
                    <p className="text-xs text-muted-foreground">Traditional elders from clan structures</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">Selection Method</p>
                    <p className="text-sm">Clan-based appointment</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">Legitimacy Source</p>
                    <p className="text-sm">Traditional & moral legitimacy from 1993 Boorama peace settlement</p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <Badge variant="secondary">Conflict Resolution</Badge>
                    <Badge variant="secondary">Crisis Powers</Badge>
                    <Badge variant="secondary">Cultural Authority</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Detailed Comparison */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Detailed Comparative Analysis</h2>
                <p className="text-muted-foreground">Benchmarked against the Global Parliamentary Research Framework</p>
              </div>

              <div className="space-y-6">
                {parliamentComparison.map((comparison, index) => (
                  <Card key={index} className="card-premium">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Users className="h-5 w-5 text-primary" />
                        {comparison.dimension}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 mb-2">
                            <Image src="/uk-commons-logo.png" alt="UK" width={20} height={20} className="rounded" />
                            <p className="text-sm font-semibold">UK House of Lords</p>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">{comparison.ukHouseOfLords}</p>
                        </div>
                        <div className="space-y-2 md:border-l md:pl-6">
                          <div className="flex items-center gap-2 mb-2">
                            <Image
                              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Emblem_of_Somaliland.svg-KA2VMS1RBGBiZwHBJKbe1LbHH7N0oc.png"
                              alt="Somaliland"
                              width={20}
                              height={20}
                              className="rounded"
                            />
                            <p className="text-sm font-semibold">Somaliland Golaha Guurtida</p>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">{comparison.somalilandGuurti}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="py-16 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <Card className="card-premium">
                <CardHeader className="text-center">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-3xl font-heading font-bold">Analytical Summary</CardTitle>
                  <CardDescription className="text-base">
                    Key findings from the comparative institutional analysis
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">Symmetry of Power</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Both institutions have limited formal veto power (medium symmetry) but strong informal influence
                      through moral authority.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Legitimacy Trade-off</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          <strong>House of Lords:</strong> High procedural legitimacy, low democratic legitimacy
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          <strong>Guurti:</strong> High traditional legitimacy, very low procedural/democratic
                          legitimacy
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Reform Imperative</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Both face modernization pressures, but for Somaliland, reform is existential. Renewing Guurti
                      membership is essential to maintain trust in democratic institutions, as emphasized in Somaliland
                      National Development Plan III (2023-2027).
                    </p>
                  </div>

                  <div className="pt-4 border-t">
                    <h3 className="font-semibold mb-3">Conclusion</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      The House of Lords and Golaha Guurtida perform analogous roles as stabilizing, revising, and
                      reflective chambers - but differ fundamentally in legitimacy sources. The House of Lords embodies
                      expertise-based stability within a democratic monarchy, while the Guurti embodies customary-based
                      stability within a hybrid democratic-traditional republic. For the Guurti to sustain its
                      legitimacy, it must evolve into a hybrid-traditional body with renewed appointments, transparency,
                      and digital governance - echoing reforms made by the Lords in 1999 and 2014.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
