import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { MobileBottomNav } from "@/components/mobile-bottom-nav"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col pb-16 lg:pb-0">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-accent/5 to-background py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Contact the Guurti</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Get in touch with the House of Elders Secretariat and External Partnerships Desk
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="container">
            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
              <Card>
                <CardHeader>
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Office Address</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p className="leading-relaxed">
                    House of Elders
                    <br />
                    Golaha Guurtida
                    <br />
                    Hargeisa, Republic of Somaliland
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Phone</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p className="mb-2">
                    Main Office:
                    <br />
                    +252 63 4000000
                  </p>
                  <p>
                    EPD:
                    <br />
                    +252 63 4000001
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Email</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p className="mb-2">
                    General Inquiries:
                    <br />
                    info@guurti.govsomaliland.org
                  </p>
                  <p>
                    Partnerships:
                    <br />
                    epd@guurti.govsomaliland.org
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="max-w-3xl mx-auto">
              <Card className="card-premium">
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <CardDescription>We welcome inquiries, feedback, and partnership opportunities</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input id="name" placeholder="Your full name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" type="email" placeholder="your@email.com" required />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" placeholder="+252..." />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="organization">Organization</Label>
                        <Input id="organization" placeholder="Your organization" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input id="subject" placeholder="Brief subject of your message" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea id="message" placeholder="Write your message here..." rows={6} required />
                    </div>

                    <Button type="submit" size="lg" className="w-full sm:w-auto gap-2">
                      <Send className="h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card className="mt-8">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Clock className="h-6 w-6 text-primary" />
                    <div>
                      <CardTitle>Office Hours</CardTitle>
                      <CardDescription>Secretariat operating hours</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold mb-2">Saturday – Wednesday</p>
                      <p className="text-muted-foreground">8:00 AM – 4:00 PM (GMT+3)</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">Thursday</p>
                      <p className="text-muted-foreground">8:00 AM – 12:00 PM (GMT+3)</p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">* Closed on Fridays and national holidays</p>
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
