import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { MobileBottomNav } from "@/components/mobile-bottom-nav"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Users, FileText, Bell, MessageSquare, Send, CheckCircle2, Clock, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function CitizenEngagementPage() {
  const recentPetitions = [
    {
      title: "Improve Healthcare Access in Rural Areas",
      author: "Citizens Coalition for Health",
      signatures: 2847,
      target: 5000,
      status: "active",
      date: "2025-01-20",
    },
    {
      title: "Enhanced Digital Infrastructure for Schools",
      author: "Education Reform Movement",
      signatures: 4523,
      target: 5000,
      status: "under-review",
      date: "2025-01-15",
    },
    {
      title: "Environmental Protection and Clean Energy Initiative",
      author: "Green Somaliland Coalition",
      signatures: 5234,
      target: 5000,
      status: "successful",
      date: "2025-01-10",
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
                <Users className="h-8 w-8 text-primary" />
                <Badge variant="outline">Citizen Participation</Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Engage with Parliament</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Submit petitions, share feedback, and stay informed about legislative activities through alerts and
                notifications
              </p>
            </div>
          </div>
        </section>

        {/* Engagement Options */}
        <section className="py-16">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
              <Card className="card-premium hover-lift">
                <CardHeader>
                  <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <FileText className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Submit Petition</CardTitle>
                  <CardDescription>Start or sign petitions on issues that matter to you</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full gap-2" asChild>
                    <Link href="#petitions">
                      <FileText className="h-4 w-4" />
                      View Petitions
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-premium hover-lift">
                <CardHeader>
                  <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Bell className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Legislative Alerts</CardTitle>
                  <CardDescription>Subscribe to email/SMS updates on bills and activities</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full gap-2" asChild>
                    <Link href="#alerts">
                      <Bell className="h-4 w-4" />
                      Set Up Alerts
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-premium hover-lift">
                <CardHeader>
                  <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <MessageSquare className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl">General Feedback</CardTitle>
                  <CardDescription>Share your thoughts and suggestions with Parliament</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full gap-2" asChild>
                    <Link href="#feedback">
                      <MessageSquare className="h-4 w-4" />
                      Send Feedback
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Active Petitions */}
            <div id="petitions" className="max-w-5xl mx-auto mb-16">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-heading font-bold mb-2">Active Petitions</h2>
                  <p className="text-muted-foreground">View and sign petitions submitted by citizens</p>
                </div>
                <Button className="gap-2">
                  <FileText className="h-4 w-4" />
                  Start New Petition
                </Button>
              </div>

              <div className="space-y-4">
                {recentPetitions.map((petition, index) => (
                  <Card key={index} className="card-premium">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-3">
                            {petition.status === "successful" && (
                              <Badge className="gap-1">
                                <CheckCircle2 className="h-3 w-3" />
                                Successful
                              </Badge>
                            )}
                            {petition.status === "under-review" && (
                              <Badge variant="secondary" className="gap-1">
                                <Clock className="h-3 w-3" />
                                Under Review
                              </Badge>
                            )}
                            {petition.status === "active" && (
                              <Badge variant="outline" className="gap-1">
                                <TrendingUp className="h-3 w-3" />
                                Active
                              </Badge>
                            )}
                            <span className="text-xs text-muted-foreground">{petition.date}</span>
                          </div>
                          <CardTitle className="text-xl mb-2">{petition.title}</CardTitle>
                          <CardDescription>Started by {petition.author}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {/* Progress Bar */}
                        <div>
                          <div className="flex items-center justify-between text-sm mb-2">
                            <span className="font-semibold">{petition.signatures.toLocaleString()} signatures</span>
                            <span className="text-muted-foreground">Goal: {petition.target.toLocaleString()}</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-3">
                            <div
                              className="bg-primary h-3 rounded-full transition-all"
                              style={{ width: `${(petition.signatures / petition.target) * 100}%` }}
                            />
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <Button variant="default" className="gap-2">
                            <FileText className="h-4 w-4" />
                            Sign Petition
                          </Button>
                          <Button variant="outline" className="gap-2 bg-transparent">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Legislative Alerts Signup */}
            <div id="alerts" className="max-w-3xl mx-auto mb-16">
              <Card className="card-premium">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Bell className="h-6 w-6 text-primary" />
                    <CardTitle className="text-2xl">Subscribe to Legislative Alerts</CardTitle>
                  </div>
                  <CardDescription>
                    Receive email or SMS notifications about new bills, committee activities, and parliamentary sessions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="alert-email">Email Address *</Label>
                        <Input id="alert-email" type="email" placeholder="your@email.com" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="alert-phone">Phone Number (SMS)</Label>
                        <Input id="alert-phone" type="tel" placeholder="+252..." />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label>Alert Topics (select all that apply)</Label>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {[
                          "New Bills",
                          "Committee Meetings",
                          "Plenary Sessions",
                          "Budget Updates",
                          "International Affairs",
                          "Annual Reports",
                        ].map((topic) => (
                          <div key={topic} className="flex items-center space-x-2">
                            <input type="checkbox" id={topic} className="rounded" />
                            <Label htmlFor={topic} className="text-sm font-normal cursor-pointer">
                              {topic}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button type="submit" size="lg" className="w-full sm:w-auto gap-2">
                      <Bell className="h-4 w-4" />
                      Subscribe to Alerts
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* General Feedback Form */}
            <div id="feedback" className="max-w-3xl mx-auto">
              <Card className="card-premium">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <MessageSquare className="h-6 w-6 text-primary" />
                    <CardTitle className="text-2xl">Send General Feedback</CardTitle>
                  </div>
                  <CardDescription>
                    Share your thoughts, suggestions, or concerns with the House of Elders
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="feedback-name">Full Name *</Label>
                        <Input id="feedback-name" placeholder="Your full name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="feedback-email">Email Address *</Label>
                        <Input id="feedback-email" type="email" placeholder="your@email.com" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="feedback-category">Feedback Category</Label>
                      <select
                        id="feedback-category"
                        className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                      >
                        <option value="">Select a category</option>
                        <option value="website">Website & Digital Services</option>
                        <option value="legislation">Legislative Process</option>
                        <option value="transparency">Transparency & Access</option>
                        <option value="engagement">Citizen Engagement</option>
                        <option value="general">General Feedback</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="feedback-message">Your Message *</Label>
                      <Textarea
                        id="feedback-message"
                        placeholder="Share your feedback, suggestions, or concerns..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full sm:w-auto gap-2">
                      <Send className="h-4 w-4" />
                      Submit Feedback
                    </Button>
                  </form>
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
