"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Globe, Users, Target, TrendingUp, Award, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ForeignAffairsCommitteePage() {
  const members = [
    {
      name: "Sheikh Axmed Cabdi Xasan",
      role: "Guddoomiyaha Guddida (Chairperson)",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1%20Madaxweynaha%20JSL-Ah58YJOFLZkyi1nuI6mJcU4lsuumvi.png",
    },
    {
      name: "Suldaan Maxamed Daahir",
      role: "Ku-xigeenka Guddoomiyaha (Vice Chairperson)",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mohamed%20Ali%20Aw%20Abdi%20Vice%20President%20of%20Somaliland.png-vJ5HoYYc88eG8adv2mN8h2sRh7SLqY.jpeg",
    },
  ]

  const partners = [
    "Inter-Parliamentary Union (IPU)",
    "African Union Pan-African Parliament",
    "Rwanda Senate – Liaison Office",
    "Kenya Senate External Relations Directorate",
    "UNDP Governance Cluster",
    "EU Global Europe (NDICI)",
    "Open Government Partnership (OGP)",
  ]

  const objectives = [
    "Advance Somaliland's diplomatic recognition through parliamentary diplomacy.",
    "Build structured international partnerships with regional and global institutions.",
    "Enhance investment and development cooperation frameworks.",
    "Promote digital transparency and communication through modern tools.",
    "Document and communicate Somaliland's peace and governance model globally.",
  ]

  const kpis = [
    { label: "Partnerships Signed", value: "10+", target: "by 2028" },
    { label: "International Forums", value: "3", target: "annual dialogues" },
    { label: "Policy Briefs", value: "6", target: "published" },
    { label: "Digital Reach", value: "50K+", target: "engagements" },
  ]

  const communicationPillars = [
    {
      name: "Public Diplomacy",
      details:
        "Hosting forums, cultural exchanges, and parliamentary diplomacy events to promote Somaliland's peace model.",
    },
    {
      name: "Digital Engagement",
      details:
        "Launch of bilingual website and dashboard featuring open data, reports, and legislative diplomacy updates.",
    },
    {
      name: "Media Visibility",
      details: "Regular press releases, social media campaigns, and participation in international policy dialogues.",
    },
  ]

  const metrics = [
    { label: "Annual Reports Published", value: "3" },
    { label: "MoUs Signed", value: "10" },
    { label: "Media Mentions", value: "100+" },
    { label: "Training Workshops", value: "12" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/parliamentary-session-somaliland.jpg')] bg-cover bg-center opacity-10" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-accent text-accent-foreground">Parliamentary Committee Profile</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Guddida Arrimaha Dibadda, Iskaashiga Caalamiga ah, Qorsheynta iyo Maalgashiga
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-2">
              Committee for Foreign Affairs, International Cooperation, Planning & Investment
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              The Guddida oversees Somaliland's foreign policy, international cooperation, development planning, and
              investment strategy — representing the wisdom and diplomacy of the House of Elders in advancing peace,
              sovereignty, and sustainable development.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Download className="mr-2 h-5 w-5" />
                Download Strategic Plan (2025–2030)
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/dashboard">
                  <Globe className="mr-2 h-5 w-5" />
                  View Partnerships
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mandate & Legal Foundation */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Mandate & Legal Foundation</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border-l-4 border-l-primary">
                <h3 className="font-semibold text-lg mb-3">Constitutional Basis</h3>
                <p className="text-muted-foreground">
                  The Committee operates under Articles 57–61 of the Constitution of the Republic of Somaliland.
                </p>
              </Card>
              <Card className="p-6 border-l-4 border-l-accent">
                <h3 className="font-semibold text-lg mb-3">Core Mandate</h3>
                <p className="text-muted-foreground">
                  Advise on foreign relations, diplomatic engagement, development planning, and investment cooperation.
                </p>
              </Card>
              <Card className="p-6 border-l-4 border-l-primary md:col-span-2">
                <h3 className="font-semibold text-lg mb-3">National Interest</h3>
                <p className="text-muted-foreground">
                  Ensures that all international agreements and partnerships align with Somaliland's national interest
                  and constitutional sovereignty.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-accent/10 rounded-xl">
                <Target className="h-8 w-8 text-accent" />
              </div>
              <h2 className="text-3xl font-bold">Vision & Mission</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10">
                <h3 className="text-xl font-bold mb-4 text-primary">Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To position Somaliland's House of Elders as a hub for peace diplomacy, global cooperation, and
                  sustainable investment.
                </p>
              </Card>
              <Card className="p-8 bg-gradient-to-br from-accent/5 to-accent/10">
                <h3 className="text-xl font-bold mb-4 text-accent">Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To promote Somaliland's international engagement and economic resilience through evidence-based
                  diplomacy, partnership development, and strategic planning.
                </p>
              </Card>
            </div>
            <Card className="mt-8 p-8">
              <h3 className="text-xl font-bold mb-6">Core Values</h3>
              <div className="flex flex-wrap gap-3">
                {["Integrity", "Wisdom", "Peace", "Transparency", "Partnership"].map((value) => (
                  <Badge key={value} variant="secondary" className="px-4 py-2 text-base">
                    {value}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Strategic Focus */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-primary/10 rounded-xl">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Strategic Focus (2025–2030)</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {objectives.map((objective, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                      {index + 1}
                    </div>
                    <p className="text-muted-foreground">{objective}</p>
                  </div>
                </Card>
              ))}
            </div>
            <Card className="p-8 bg-gradient-to-r from-primary/5 to-accent/5">
              <h3 className="text-2xl font-bold mb-6 text-center">Key Performance Indicators</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {kpis.map((kpi, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">{kpi.value}</div>
                    <div className="font-semibold mb-1">{kpi.label}</div>
                    <div className="text-sm text-muted-foreground">{kpi.target}</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Committee Composition */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-accent/10 rounded-xl">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h2 className="text-3xl font-bold">Committee Composition</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {members.map((member, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-6">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden bg-muted flex-shrink-0">
                      <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                      <p className="text-muted-foreground">{member.role}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5">
              <h3 className="text-xl font-bold mb-4">Committee Members</h3>
              <p className="text-muted-foreground mb-6">
                10 Senior Elders representing regional balance and national expertise
              </p>
              <div className="border-t pt-6">
                <h4 className="font-semibold mb-2">Secretariat Support</h4>
                <p className="text-muted-foreground">
                  <strong>External Partnerships Desk (EPD)</strong> - Responsible for managing MoUs, donor coordination,
                  and strategic communication. Lead Partner: M2 Creative & Consultant
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Communication & Diplomacy */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Communication & Diplomacy</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-8">
              The Committee implements a structured communication strategy aligned with IPU and UNDP standards,
              emphasizing transparency, storytelling, and proactive engagement.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {communicationPillars.map((pillar, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-bold mb-3 text-primary">{pillar.name}</h3>
                  <p className="text-muted-foreground text-sm">{pillar.details}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global Partnerships */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Global Partnerships</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {partners.map((partner, index) => (
                <Card key={index} className="p-4 text-center hover:shadow-lg transition-shadow">
                  <p className="font-medium">{partner}</p>
                </Card>
              ))}
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary/10">
                <h3 className="text-xl font-bold mb-2 text-primary">5 MoUs Signed</h3>
                <p className="text-muted-foreground">2025–2027 Partnership Agreements</p>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-accent/5 to-accent/10">
                <h3 className="text-xl font-bold mb-2 text-accent">Ongoing Projects</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Somaliland Legislative Diplomacy Forum (2026)</li>
                  <li>• Guurti Global Dialogue Series</li>
                  <li>• SDLA Partnership</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Monitoring & Impact */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Monitoring & Impact</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {metrics.map((metric, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="text-4xl font-bold text-primary mb-2">{metric.value}</div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </Card>
              ))}
            </div>
            <Card className="mt-8 p-6 bg-muted/50">
              <p className="text-sm text-muted-foreground text-center">
                Data Source: <strong>Guurti EPD Dashboard</strong>
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer Contact */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Contact Information</h2>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <MapPin className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <p className="text-sm text-muted-foreground">
                    House of Elders (Golaha Guurtida)
                    <br />
                    Hargeisa, Republic of Somaliland
                  </p>
                </div>
                <div>
                  <Mail className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <p className="text-sm text-muted-foreground">info@guurti.govsomaliland.org</p>
                </div>
                <div>
                  <Phone className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <p className="text-sm text-muted-foreground">+252 63 4000000</p>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
                <p>Designed by M2 Creative & Consultant in collaboration with SNPA Digital Team</p>
                <p className="mt-2">Last Updated: November 2025</p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
