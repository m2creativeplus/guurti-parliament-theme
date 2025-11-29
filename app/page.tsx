import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PortalTabs } from "@/components/portal-tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, TrendingUp, Users, Calendar, Database, Building2, Globe, BarChart3, Award } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ExecutiveSummary } from "@/components/executive-summary"
import { DonorWheel3D } from "@/components/donor-wheel-3d"
import { TopicsGrid } from "@/components/topics-grid"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
      >
        Skip to main content
      </a>

      <SiteHeader />

      <main id="main" className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
          {/* Background with overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/parliamentary-session-somaliland.jpg"
              alt="Guurti Chamber"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/80"></div>
            {/* Emblem watermark */}
            <div className="absolute inset-0 flex items-center justify-center opacity-5">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Emblem_of_Somaliland.svg-KA2VMS1RBGBiZwHBJKbe1LbHH7N0oc.png"
                alt=""
                width={400}
                height={400}
              />
            </div>
          </div>

          <div className="container relative z-10 py-20 md:py-32">
            <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
              <Badge variant="outline" className="text-base px-4 py-2">
                Jamhuuriyadda Somaliland
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight">
                Custodians of Peace and Continuity
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">Transparency is Sovereignty</p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Button size="lg" className="gap-2 text-base">
                  <FileText className="h-5 w-5" />
                  Explore Laws 1884–Present
                </Button>
                <Button size="lg" variant="outline" className="gap-2 text-base bg-transparent">
                  <Building2 className="h-5 w-5" />
                  Partner with the Guurti
                </Button>
                <Button size="lg" variant="outline" className="gap-2 text-base bg-transparent">
                  <BarChart3 className="h-5 w-5" />
                  Access Reports
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Executive Summary Section */}
        <section className="py-16">
          <div className="container">
            <ExecutiveSummary />
          </div>
        </section>

        {/* Overview Dashboard Cards */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/documents">
                <Card className="card-premium hover-lift cursor-pointer h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Database className="h-8 w-8 text-primary" />
                      <Badge variant="secondary">Active</Badge>
                    </div>
                    <CardTitle className="text-2xl">SDLA Archive</CardTitle>
                    <CardDescription>Digital Legislative Archive</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-semibold">Phase 1</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "35%" }}></div>
                      </div>
                      <p className="text-xs text-muted-foreground">1,200+ documents digitized</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/donors">
                <Card className="card-premium hover-lift cursor-pointer h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <TrendingUp className="h-8 w-8 text-accent" />
                      <Badge variant="secondary">7 Active</Badge>
                    </div>
                    <CardTitle className="text-2xl">Donor Pipeline</CardTitle>
                    <CardDescription>Funding Opportunities</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Total Value</span>
                        <span className="font-semibold">$148M</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="outline" className="text-xs">
                          UNDP
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          EU
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          World Bank
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/international-engagement">
                <Card className="card-premium hover-lift cursor-pointer h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Calendar className="h-8 w-8 text-success" />
                      <Badge variant="secondary">2026–2030</Badge>
                    </div>
                    <CardTitle className="text-2xl">Engagements</CardTitle>
                    <CardDescription>International Events Calendar</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Scheduled</span>
                        <span className="font-semibold">8 Events</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="outline" className="text-xs">
                          IPU
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          CPA
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          UNDP
                        </Badge>
                      </div>
                      <p className="text-xs text-primary font-medium">Click to view live countdown →</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/strategic-plan">
                <Card className="card-premium hover-lift cursor-pointer h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Globe className="h-8 w-8 text-secondary" />
                      <Badge variant="secondary">Active</Badge>
                    </div>
                    <CardTitle className="text-2xl">EPD Projects</CardTitle>
                    <CardDescription>External Partnerships</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">MoUs Signed</span>
                        <span className="font-semibold">5 Partners</span>
                      </div>
                      <p className="text-xs text-muted-foreground">12 international partnerships</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>

            <p className="text-center text-xs text-muted-foreground mt-6">Last updated — SNPA Dataverse, Nov 2025</p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <Card className="card-premium overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-primary/10 rounded-xl">
                        <Award className="h-8 w-8 text-primary" />
                      </div>
                      <Badge variant="secondary">Featured Committee</Badge>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                      Foreign Affairs & International Cooperation
                    </h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Overseeing Somaliland's foreign policy, international cooperation, development planning, and
                      investment strategy — representing the wisdom and diplomacy of the House of Elders.
                    </p>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-sm">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>10+ International Partnerships by 2028</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="h-2 w-2 rounded-full bg-accent"></div>
                        <span>3 Annual International Forums</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>Strategic Plan 2025–2030</span>
                      </div>
                    </div>
                    <Button asChild size="lg" className="w-full sm:w-auto">
                      <Link href="/committees/foreign-affairs">View Committee Profile</Link>
                    </Button>
                  </div>
                  <div className="relative min-h-[300px] md:min-h-0">
                    <Image
                      src="/international-diplomatic-meeting.jpg"
                      alt="International Diplomatic Meeting"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent md:bg-gradient-to-r"></div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Donor Wheel 3D Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <DonorWheel3D />
            </div>
          </div>
        </section>

        {/* Main Portal Tabs Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Guurti Digital Portal</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive access to legislative archives, donor tracking, international engagements, and partnership
                management
              </p>
            </div>

            <PortalTabs />
          </div>
        </section>

        {/* Reports & Insights Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Reports & Insights</h2>
              <p className="text-lg text-muted-foreground">Generate comprehensive reports and data visualizations</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Button size="lg" variant="outline" className="h-auto py-6 flex-col gap-3 bg-background">
                <BarChart3 className="h-8 w-8 text-primary" />
                <div className="text-center">
                  <p className="font-semibold">Donor Brief</p>
                  <p className="text-xs text-muted-foreground">Generate PDF</p>
                </div>
              </Button>

              <Button size="lg" variant="outline" className="h-auto py-6 flex-col gap-3 bg-background">
                <FileText className="h-8 w-8 text-primary" />
                <div className="text-center">
                  <p className="font-semibold">SDLA Report</p>
                  <p className="text-xs text-muted-foreground">Generate PDF</p>
                </div>
              </Button>

              <Button size="lg" variant="outline" className="h-auto py-6 flex-col gap-3 bg-background">
                <TrendingUp className="h-8 w-8 text-primary" />
                <div className="text-center">
                  <p className="font-semibold">Analytics Dashboard</p>
                  <p className="text-xs text-muted-foreground">View Insights</p>
                </div>
              </Button>
            </div>

            <p className="text-center text-xs text-muted-foreground mt-8">
              Data verified by M2 Creative & SNPA — ISO 27001 aligned
            </p>
          </div>
        </section>

        {/* Topics Grid Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <TopicsGrid />
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/about">
                <Card className="h-full card-premium hover-lift cursor-pointer group">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">About Guurti</CardTitle>
                    <CardDescription>History & Mandate</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Learn about the House of Elders' role in Somaliland's governance
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/members">
                <Card className="h-full card-premium hover-lift cursor-pointer group">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Members</CardTitle>
                    <CardDescription>82 Elders & 6 Committees</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Meet the members and explore standing committees
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/documents">
                <Card className="h-full card-premium hover-lift cursor-pointer group">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Publications</CardTitle>
                    <CardDescription>Reports & Documents</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Access official publications and legislative documents
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/contact">
                <Card className="h-full card-premium hover-lift cursor-pointer group">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Globe className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Contact</CardTitle>
                    <CardDescription>Get in Touch</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Reach out to the Guurti secretariat and EPD desk
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
