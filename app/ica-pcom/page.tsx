import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Award, Calendar, DollarSign, FileText, Globe, Target, TrendingUp, Users, CheckCircle2 } from "lucide-react"
import { icaPcomProject, membershipPathways } from "@/lib/data/ica-pcom-data"

export default function ICAPCOMPage() {
  const totalBudget = icaPcomProject.grantComponents.reduce((sum, component) => sum + component.budget, 0)

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background"></div>
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge variant="outline" className="text-base px-4 py-2">
                <Award className="h-4 w-4 mr-2 inline" />
                International Council on Archives
              </Badge>
              <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight">
                ICA PCOM Grants - Lead: SDLA
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {icaPcomProject.purpose}
              </p>
              <div className="flex flex-wrap gap-4 justify-center pt-4">
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span>
                    <strong>Launch:</strong> March 1, 2026
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <TrendingUp className="h-4 w-4 text-primary" />
                  <span>
                    <strong>Duration:</strong> {icaPcomProject.duration} ({icaPcomProject.durationDays} days)
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <DollarSign className="h-4 w-4 text-primary" />
                  <span>
                    <strong>Budget:</strong> {icaPcomProject.totalEstimatedGrant}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Overview Cards */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="card-premium">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Lead Institution</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-semibold text-foreground mb-1">{icaPcomProject.lead}</p>
                  <p className="text-xs text-muted-foreground">Implementing Partner: M2 Creative & Consultant</p>
                  <p className="text-xs text-muted-foreground">Archival Partner: SNPA</p>
                </CardContent>
              </Card>

              <Card className="card-premium">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Project Phase</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-semibold text-foreground mb-2">SDLA Phase II</p>
                  <div className="space-y-1">
                    <Badge variant="secondary" className="text-xs">
                      Digitisation
                    </Badge>
                    <Badge variant="secondary" className="text-xs ml-1">
                      Metadata
                    </Badge>
                    <Badge variant="secondary" className="text-xs ml-1">
                      Public Access
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-premium">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>International Platform</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-semibold text-foreground">ICA Programme Commission (PCOM)</p>
                  <p className="text-xs text-muted-foreground mt-1">Regional Branch: ESARBICA</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Event Structure */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Launch Week Event Structure</h2>
                <p className="text-muted-foreground">March 1-7, 2026 | Hargeisa, Somaliland</p>
              </div>

              <div className="grid gap-6">
                {icaPcomProject.eventStructure.map((event, index) => (
                  <Card key={index} className="card-premium">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-lg">{event.component}</CardTitle>
                          <CardDescription className="mt-2">{event.description}</CardDescription>
                        </div>
                        <Badge variant="outline" className="ml-4">
                          Day {index + 1}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>
                          <strong>Lead:</strong> {event.leadPartner}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Grant Components */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Grant Package Components</h2>
                <p className="text-lg text-muted-foreground">Total Budget: ${totalBudget.toLocaleString()}</p>
              </div>

              <div className="grid gap-6">
                {icaPcomProject.grantComponents.map((component, index) => (
                  <Card key={index} className="card-premium">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-lg">{component.stream}</CardTitle>
                        <Badge variant="default" className="text-base px-3 py-1">
                          ${component.budget.toLocaleString()}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{component.description}</p>
                      <div className="mt-4 w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full"
                          style={{ width: `${(component.budget / totalBudget) * 100}%` }}
                        ></div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        {((component.budget / totalBudget) * 100).toFixed(1)}% of total budget
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Matrix */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Partnership & Visibility Matrix</h2>
                <p className="text-muted-foreground">Multi-stakeholder collaboration framework</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {icaPcomProject.partners.map((partner, index) => (
                  <Card key={index} className="card-premium">
                    <CardHeader>
                      <CardTitle className="text-base">{partner.partner}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground mb-1">Role</p>
                        <p className="text-sm">{partner.role}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground mb-1">Visibility</p>
                        <p className="text-sm text-primary">{partner.visibilityElement}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Implementation Timeline</h2>
                <p className="text-muted-foreground">466-day project cycle | March 2026 - June 2027</p>
              </div>

              <div className="space-y-6">
                {icaPcomProject.timeline.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                      </div>
                      {index < icaPcomProject.timeline.length - 1 && (
                        <div className="w-0.5 h-full bg-primary/20 mt-2"></div>
                      )}
                    </div>
                    <Card className="flex-1 card-premium">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <CardTitle className="text-base">{item.milestone}</CardTitle>
                          <Badge variant="outline">{item.date}</Badge>
                        </div>
                      </CardHeader>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Key Deliverables</h2>
                <p className="text-muted-foreground">Expected outputs from the 466-day implementation cycle</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {icaPcomProject.deliverables.map((deliverable, index) => (
                  <Card key={index} className="card-premium">
                    <CardHeader>
                      <div className="flex items-start gap-3">
                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <FileText className="h-5 w-5 text-primary" />
                        </div>
                        <p className="text-sm font-medium leading-relaxed">{deliverable}</p>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Expected Impact */}
        <section className="py-16 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <Card className="card-premium overflow-hidden">
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-3xl font-heading font-bold">Expected Impact</CardTitle>
                  <CardDescription>Transforming Somaliland's legislative heritage preservation</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {icaPcomProject.expectedImpact.map((impact, index) => (
                    <div key={index} className="flex gap-4 items-start">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                      </div>
                      <p className="text-sm leading-relaxed flex-1">{impact}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Membership Pathway */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  ICA Membership & Partnership Pathway
                </h2>
                <p className="text-muted-foreground">Strategic approach for non-member parliamentary institutions</p>
              </div>

              <div className="grid gap-6">
                {membershipPathways.map((pathway, index) => (
                  <Card key={index} className="card-premium">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <Badge variant="outline" className="mb-3">
                            {pathway.level}
                          </Badge>
                          <CardTitle className="text-lg mb-2">{pathway.institution}</CardTitle>
                          <CardDescription className="text-sm leading-relaxed">{pathway.role}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Award className="h-4 w-4" />
                        <span>
                          <strong>Benchmark:</strong> {pathway.benchmark}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <Card className="card-premium max-w-3xl mx-auto text-center">
              <CardHeader>
                <CardTitle className="text-2xl font-heading font-bold">Transparency is Sovereignty</CardTitle>
                <CardDescription className="text-base">
                  Digitising Our Legislative Memory for Future Generations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The ICA PCOM Grants project represents a transformative step in establishing the House of Elders as
                  the custodian of Somaliland's legal memory, building bridges with the global archival community while
                  preserving our unique heritage.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                  <Button size="lg">
                    <FileText className="h-4 w-4 mr-2" />
                    Download Project Dossier
                  </Button>
                  <Button size="lg" variant="outline">
                    <Globe className="h-4 w-4 mr-2" />
                    Learn About SDLA
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
