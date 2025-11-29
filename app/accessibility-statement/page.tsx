import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { MobileBottomNav } from "@/components/mobile-bottom-nav"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Accessibility, CheckCircle2, Mail } from "lucide-react"
import Link from "next/link"

export default function AccessibilityStatementPage() {
  return (
    <div className="flex min-h-screen flex-col pb-16 lg:pb-0">
      <SiteHeader />

      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary/10 via-accent/5 to-background py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Accessibility className="h-8 w-8 text-primary" />
                <Badge variant="outline">WCAG 2.1 Level AA</Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Accessibility Statement</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                The House of Elders is committed to ensuring digital accessibility for all citizens
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="card-premium">
                <CardHeader>
                  <CardTitle className="text-2xl">Our Commitment</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-slate max-w-none">
                  <p className="text-muted-foreground leading-relaxed">
                    The House of Elders of the Republic of Somaliland is committed to ensuring that its website is
                    accessible to people with disabilities. We strive to comply with the Web Content Accessibility
                    Guidelines (WCAG) 2.1 Level AA standard to ensure our digital content is perceivable, operable,
                    understandable, and robust for all users.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-premium">
                <CardHeader>
                  <CardTitle className="text-2xl">Accessibility Features</CardTitle>
                  <CardDescription>Tools and features we provide to enhance accessibility</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Keyboard navigation support",
                      "Screen reader compatibility",
                      "Adjustable text size controls",
                      "High contrast mode option",
                      "Alternative text for images",
                      "Semantic HTML structure",
                      "ARIA labels and landmarks",
                      "Skip navigation links",
                      "Accessible forms with labels",
                      "Clear focus indicators",
                      "Responsive mobile design",
                      "Multilingual support (Somali, English, Arabic)",
                    ].map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="card-premium">
                <CardHeader>
                  <CardTitle className="text-2xl">Standards Compliance</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    This website aims to conform to the following standards:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Web Content Accessibility Guidelines (WCAG) 2.1 Level AA</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Section 508 of the Rehabilitation Act</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>EN 301 549 European Accessibility Standard</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-premium">
                <CardHeader>
                  <CardTitle className="text-2xl">Known Limitations</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    While we strive for full accessibility, some limitations may exist:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                    <li>Some historical PDF documents may not be fully accessible</li>
                    <li>Third-party embedded content may have accessibility limitations</li>
                    <li>Some multimedia content may lack comprehensive captions or transcripts</li>
                  </ul>
                  <p className="text-sm text-muted-foreground">
                    We are actively working to address these limitations in our ongoing improvement efforts.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-premium">
                <CardHeader>
                  <CardTitle className="text-2xl">Feedback and Assistance</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    If you encounter any accessibility barriers or have suggestions for improvement, please contact us:
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="gap-2" asChild>
                      <Link href="/contact">
                        <Mail className="h-4 w-4" />
                        Contact Us
                      </Link>
                    </Button>
                    <Button variant="outline" className="gap-2 bg-transparent" asChild>
                      <a href="mailto:accessibility@guurti.govsomaliland.org">
                        <Mail className="h-4 w-4" />
                        accessibility@guurti.govsomaliland.org
                      </a>
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    We aim to respond to accessibility feedback within 5 business days.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-premium">
                <CardHeader>
                  <CardTitle className="text-2xl">Last Updated</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    This accessibility statement was last reviewed and updated on January 29, 2025.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <MobileBottomNav />
    </div>
  )
}
