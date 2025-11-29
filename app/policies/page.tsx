import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { MobileBottomNav } from "@/components/mobile-bottom-nav"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileCheck, Download } from "lucide-react"
import Link from "next/link"

export default function PoliciesPage() {
  const policies = [
    {
      id: 1,
      title: "Legislative Diplomatic Engagement Strategy (LDES) 2026-2030",
      year: "2026-2030",
      status: "Active",
      category: "Strategic Plan",
      description: "Comprehensive framework for international parliamentary partnerships and diplomatic engagement.",
    },
    {
      id: 2,
      title: "National Donor Coordination Framework",
      year: "2026-2028",
      status: "Under Review",
      category: "Aid Effectiveness",
      description:
        "Centralized mechanism for coordinating international development assistance and enhancing transparency.",
    },
    {
      id: 3,
      title: "Digital Transformation Roadmap 2025-2028",
      year: "2025-2028",
      status: "Active",
      category: "Digital Governance",
      description:
        "Parliamentary modernization through digital archives, e-governance systems, and technology integration.",
    },
    {
      id: 4,
      title: "Committee Restructuring Policy 2026",
      year: "2026",
      status: "Approved",
      category: "Institutional Reform",
      description: "Reformed committee structure aligning with national development priorities and oversight capacity.",
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
                <FileCheck className="h-8 w-8 text-primary" />
                <Badge variant="outline">Strategic Frameworks</Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Strategies & Policies</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Strategic plans, policy frameworks, and institutional roadmaps guiding the Guurti's work
              </p>
            </div>
          </div>
        </section>

        {/* Policies List */}
        <section className="py-12">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-6">
              {policies.map((policy) => (
                <Card key={policy.id} className="card-premium hover-lift">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge
                            variant={
                              policy.status === "Active"
                                ? "default"
                                : policy.status === "Approved"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {policy.status}
                          </Badge>
                          <Badge variant="outline">{policy.category}</Badge>
                        </div>
                        <CardTitle className="text-2xl mb-2">{policy.title}</CardTitle>
                        <CardDescription className="text-base">{policy.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-3">
                      <Button className="gap-2">
                        <Download className="h-4 w-4" />
                        Download Policy
                      </Button>
                      <Button variant="outline" asChild>
                        <Link href={`/policies/${policy.id}`}>View Details</Link>
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
