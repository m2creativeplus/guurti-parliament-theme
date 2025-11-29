import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { MobileBottomNav } from "@/components/mobile-bottom-nav"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Newspaper, Calendar, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function NewsPage() {
  const pressReleases = [
    {
      id: 1,
      title: "Guurti Approves Community Peace & Mediation Fund Framework",
      excerpt:
        "The House of Elders has unanimously approved the establishment of a national fund to support community-level conflict resolution and traditional mediation practices.",
      date: "November 5, 2025",
      category: "Peace & Governance",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sheikh-ibrahim-boorama-conference-7irH5kLjmUSP2bDweM9aafVHnuf7jE.jpg",
    },
    {
      id: 2,
      title: "SDLA Project Reaches 1,200 Documents Milestone",
      excerpt:
        "The Somaliland Digital Legislative Archive has successfully digitized over 1,200 historical and contemporary legislative documents, making them publicly accessible.",
      date: "October 28, 2025",
      category: "Digital Transformation",
      image: "/digital-archive.jpg",
    },
    {
      id: 3,
      title: "Speaker Receives UNDP Delegation to Discuss Governance Programs",
      excerpt:
        "The Speaker of the House of Elders met with UNDP representatives to review ongoing democratic governance strengthening initiatives.",
      date: "October 15, 2025",
      category: "International Relations",
      image: "/diplomatic-meeting.png",
    },
    {
      id: 4,
      title: "New Committee Structure Approved for 2026-2030 Term",
      excerpt:
        "The Guurti has reorganized its committee structure to better align with national development priorities and enhance oversight capacity.",
      date: "September 30, 2025",
      category: "Institutional Reform",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Somalia_%28Somaliland%29%2C_Hargeisa%2C_House_of_Representatives_1-BoKY2u2JPzyRXfuH7rXIA0iFYH4FRx.jpeg",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col pb-16 lg:pb-0">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-accent/5 to-background py-16">
          <div className="container">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <Newspaper className="h-8 w-8 text-primary" />
                <Badge variant="outline">Press & Media</Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">News & Press Releases</h1>
              <p className="text-xl text-muted-foreground">
                Official statements, announcements, and updates from the House of Elders
              </p>
            </div>
          </div>
        </section>

        {/* Featured Press Release */}
        <section className="py-12 border-b">
          <div className="container">
            <Card className="card-premium overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative min-h-[300px] md:min-h-[400px]">
                  <Image
                    src={pressReleases[0].image || "/placeholder.svg"}
                    alt={pressReleases[0].title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <Badge variant="default" className="w-fit mb-4">
                    Featured
                  </Badge>
                  <h2 className="text-3xl font-heading font-bold mb-4">{pressReleases[0].title}</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{pressReleases[0].excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {pressReleases[0].date}
                    </div>
                    <Badge variant="outline">{pressReleases[0].category}</Badge>
                  </div>
                  <Button asChild>
                    <Link href={`/news/${pressReleases[0].id}`} className="gap-2">
                      Read Full Release <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Recent Press Releases */}
        <section className="py-12">
          <div className="container">
            <h2 className="text-2xl font-heading font-bold mb-8">Recent Press Releases</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pressReleases.slice(1).map((release) => (
                <Card key={release.id} className="hover-lift group">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={release.image || "/placeholder.svg"}
                      alt={release.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">{release.category}</Badge>
                    </div>
                    <CardTitle className="text-lg line-clamp-2">{release.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{release.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{release.date}</span>
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={`/news/${release.id}`}>
                          Read More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Sections */}
        <section className="py-12 bg-muted/30">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover-lift">
                <CardHeader>
                  <CardTitle>Photo Gallery</CardTitle>
                  <CardDescription>View official photographs and event coverage</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/gallery">Browse Gallery</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardHeader>
                  <CardTitle>Speeches & Statements</CardTitle>
                  <CardDescription>Official speeches and parliamentary statements</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/speeches">View Speeches</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardHeader>
                  <CardTitle>Media Contact</CardTitle>
                  <CardDescription>For press inquiries and media relations</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
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
