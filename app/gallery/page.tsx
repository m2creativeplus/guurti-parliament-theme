import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { MobileBottomNav } from "@/components/mobile-bottom-nav"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ImageIcon, Video, Filter } from "lucide-react"
import Image from "next/image"

export default function GalleryPage() {
  const galleryItems = [
    {
      id: 1,
      type: "photo",
      title: "Boorama Conference Historical Archive",
      date: "1993",
      category: "Historical",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sheikh-ibrahim-boorama-conference-7irH5kLjmUSP2bDweM9aafVHnuf7jE.jpg",
    },
    {
      id: 2,
      type: "photo",
      title: "House of Representatives Chamber",
      date: "2024",
      category: "Facilities",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Somalia_%28Somaliland%29%2C_Hargeisa%2C_House_of_Representatives_1-BoKY2u2JPzyRXfuH7rXIA0iFYH4FRx.jpeg",
    },
    {
      id: 3,
      type: "photo",
      title: "International Diplomatic Meeting",
      date: "2025",
      category: "International Relations",
      image: "/international-diplomatic-meeting.jpg",
    },
    {
      id: 4,
      type: "photo",
      title: "Plenary Session",
      date: "2025",
      category: "Parliamentary Sessions",
      image: "/parliamentary-session-somaliland.jpg",
    },
    {
      id: 5,
      type: "photo",
      title: "Committee Meeting",
      date: "2025",
      category: "Committees",
      image: "/committee-meeting-parliamentary.jpg",
    },
    {
      id: 6,
      type: "photo",
      title: "Speaker's Address",
      date: "2025",
      category: "Parliamentary Sessions",
      image: "/speaker-podium-parliament.jpg",
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
                <ImageIcon className="h-8 w-8 text-primary" />
                <Badge variant="outline">Media Gallery</Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Photo & Video Gallery</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Visual documentation of parliamentary sessions, historical moments, and international engagements
              </p>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 border-b bg-muted/30">
          <div className="container">
            <div className="flex flex-wrap gap-2 items-center">
              <Button variant="ghost" size="sm" className="gap-2">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
              <Badge variant="default" className="cursor-pointer">
                All
              </Badge>
              <Badge variant="outline" className="cursor-pointer">
                Historical
              </Badge>
              <Badge variant="outline" className="cursor-pointer">
                Parliamentary Sessions
              </Badge>
              <Badge variant="outline" className="cursor-pointer">
                International Relations
              </Badge>
              <Badge variant="outline" className="cursor-pointer">
                Committees
              </Badge>
              <Badge variant="outline" className="cursor-pointer">
                Facilities
              </Badge>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-12">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryItems.map((item) => (
                <Card key={item.id} className="overflow-hidden hover-lift group cursor-pointer">
                  <div className="relative h-64">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3">
                      <Badge variant="secondary">
                        {item.type === "photo" ? (
                          <ImageIcon className="h-3 w-3 mr-1" />
                        ) : (
                          <Video className="h-3 w-3 mr-1" />
                        )}
                        {item.type}
                      </Badge>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <div>
                        <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                        <div className="flex items-center gap-2 text-xs">
                          <Badge variant="outline" className="text-xs">
                            {item.category}
                          </Badge>
                          <span className="text-white/80">{item.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button size="lg" variant="outline">
                Load More
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <MobileBottomNav />
    </div>
  )
}
