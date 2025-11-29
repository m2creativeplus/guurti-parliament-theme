import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { MobileBottomNav } from "@/components/mobile-bottom-nav"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Crown, Users, FileText, Building2 } from "lucide-react"

export default function LeadershipPage() {
  return (
    <div className="flex min-h-screen flex-col pb-16 lg:pb-0">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-accent/5 to-background py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4">
                Leadership
              </Badge>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Guurti Leadership</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Distinguished elders guiding Somaliland's upper house with wisdom and experience
              </p>
            </div>
          </div>
        </section>

        {/* Speaker Section */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <Card className="card-premium overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative min-h-[400px] bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <Crown className="h-32 w-32 text-primary/40" />
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <Badge variant="default" className="w-fit mb-4">
                      Speaker of the House
                    </Badge>
                    <h2 className="text-3xl font-heading font-bold mb-2">Hon. Suleiman Mohamoud Adan</h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Leading the House of Elders with decades of experience in conflict resolution, traditional
                      governance, and parliamentary leadership. Serving as Speaker since [Year], overseeing
                      constitutional reforms and institutional modernization.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">Traditional Elder</Badge>
                        <Badge variant="outline">Peace Mediator</Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">Constitutional Expert</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Deputy Speakers */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-heading font-bold mb-8 text-center">Deputy Speakers</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="card-premium">
                  <CardHeader>
                    <div className="h-16 w-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Hon. Ahmed Hassan Ibrahim</CardTitle>
                    <CardDescription>First Deputy Speaker</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      Oversees parliamentary procedures and presides in the Speaker's absence. Chairs the Governance and
                      Constitutional Affairs Committee.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">
                        Constitutional Law
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Governance Reform
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-premium">
                  <CardHeader>
                    <div className="h-16 w-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Hon. Mohamed Abdi Yusuf</CardTitle>
                    <CardDescription>Second Deputy Speaker</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      Coordinates committee activities and regional representation. Leads peace and mediation
                      initiatives across communities.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">
                        Conflict Resolution
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Regional Coordination
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Offices */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-heading font-bold mb-8 text-center">Support Offices</h2>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="text-center">
                  <CardHeader>
                    <div className="h-16 w-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <FileText className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>Secretary General</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Manages parliamentary administration and legislative services
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <div className="h-16 w-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Building2 className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>Chief of Staff</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Coordinates between committees and executive offices
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <div className="h-16 w-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>EPD Director</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Leads external partnerships and international engagement
                    </p>
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
