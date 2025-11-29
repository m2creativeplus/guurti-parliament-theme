import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { MobileBottomNav } from "@/components/mobile-bottom-nav"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, FileText, ExternalLink, Calendar } from "lucide-react"
import Link from "next/link"

export default function ResearchPage() {
  const researchArticles = [
    {
      id: 1,
      title: "Dalalka Ay Golayaashooda Sare Yihiin Kuwo La Soo Magacaabo",
      titleEn: "Delegated Upper Houses: A Comparative Study",
      category: "Comparative Parliamentary Studies",
      date: "November 8, 2025",
      author: "Xafiiska Isgaadhsiinta iyo Xiriirka Dibadda",
      description:
        "Comprehensive analysis of delegated upper house systems across 8 countries, including Somaliland's Golaha Guurtida",
      tags: ["Parliamentary Systems", "Upper House", "Comparative Study", "Bicameral Legislature"],
      slug: "delegated-upper-houses",
      featured: true,
    },
    {
      id: 2,
      title: "The Role of Traditional Elders in Modern Governance",
      category: "Governance Studies",
      date: "October 15, 2025",
      author: "Research Department",
      description:
        "Examining how traditional leadership structures integrate with contemporary democratic institutions in Somaliland",
      tags: ["Traditional Governance", "Democracy", "Clan Systems"],
      slug: "traditional-elders-governance",
      featured: false,
    },
    {
      id: 3,
      title: "Legislative Oversight Mechanisms in the Guurti",
      category: "Legislative Process",
      date: "September 22, 2025",
      author: "Committee on Legislative Affairs",
      description: "Analysis of oversight functions and accountability mechanisms within the House of Elders structure",
      tags: ["Oversight", "Accountability", "Legislative Process"],
      slug: "legislative-oversight",
      featured: false,
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
                <BookOpen className="h-8 w-8 text-primary" />
                <Badge variant="outline">Research & Analysis</Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Parliamentary Research Center</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                In-depth studies, comparative analyses, and policy research on parliamentary systems, governance, and
                legislative processes
              </p>
            </div>
          </div>
        </section>

        {/* Featured Research */}
        <section className="py-12">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-heading font-bold mb-6">Featured Research</h2>

              {researchArticles
                .filter((article) => article.featured)
                .map((article) => (
                  <Card key={article.id} className="card-premium hover-lift mb-8">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-3 flex-wrap">
                            <Badge variant="default" className="bg-primary">
                              Featured
                            </Badge>
                            <Badge variant="outline">{article.category}</Badge>
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <Calendar className="h-3 w-3" />
                              {article.date}
                            </div>
                          </div>
                          <CardTitle className="text-2xl mb-2">{article.title}</CardTitle>
                          {article.titleEn && (
                            <p className="text-lg text-muted-foreground mb-3 italic">{article.titleEn}</p>
                          )}
                          <CardDescription className="text-base mb-4">{article.description}</CardDescription>
                          <p className="text-sm text-muted-foreground mb-4">By {article.author}</p>
                          <div className="flex items-center gap-2 flex-wrap">
                            {article.tags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Link href={`/research/${article.slug}`}>
                        <Button className="gap-2">
                          <FileText className="h-4 w-4" />
                          Read Full Research
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </section>

        {/* All Research */}
        <section className="py-12 bg-muted/30">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-heading font-bold mb-6">All Research Publications</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {researchArticles
                  .filter((article) => !article.featured)
                  .map((article) => (
                    <Card key={article.id} className="card-premium hover-lift">
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-3 flex-wrap">
                          <Badge variant="outline">{article.category}</Badge>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Calendar className="h-3 w-3" />
                            {article.date}
                          </div>
                        </div>
                        <CardTitle className="text-xl mb-2">{article.title}</CardTitle>
                        <CardDescription className="text-sm mb-3">{article.description}</CardDescription>
                        <p className="text-xs text-muted-foreground mb-3">By {article.author}</p>
                        <div className="flex items-center gap-2 flex-wrap">
                          {article.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <Link href={`/research/${article.slug}`}>
                          <Button variant="outline" size="sm" className="gap-2 w-full bg-transparent">
                            <ExternalLink className="h-3 w-3" />
                            View Research
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
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
