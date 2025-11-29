import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { parliamentMembers, getBills, getPartyStats, getBillStats } from "@/lib/parliament-data"
import { MembersTable } from "@/components/members-table"
import { PartyDistribution } from "@/components/party-distribution"
import { VotingRecordsChart } from "@/components/voting-records-chart"
import { Users, BarChart3, Vote, TrendingUp } from "lucide-react"

export default function MembersAnalysisPage() {
  const partyStats = getPartyStats()
  const bills = getBills()
  const totalMembers = parliamentMembers.length

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge variant="outline" className="text-base px-4 py-2">
                Parliament Analysis
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
                Members & Voting Records
              </h1>
              <p className="text-xl text-muted-foreground">
                Comprehensive analysis of {totalMembers} parliament members across {partyStats.length} parties
              </p>
            </div>
          </div>
        </section>

        {/* Overview Stats */}
        <section className="py-12 bg-muted/30">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="card-premium">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-3xl">{totalMembers}</CardTitle>
                  <CardDescription>Total Members</CardDescription>
                </CardHeader>
              </Card>

              <Card className="card-premium">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <BarChart3 className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-3xl">{partyStats.length}</CardTitle>
                  <CardDescription>Political Parties</CardDescription>
                </CardHeader>
              </Card>

              <Card className="card-premium">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Vote className="h-8 w-8 text-success" />
                  </div>
                  <CardTitle className="text-3xl">{bills.length}</CardTitle>
                  <CardDescription>Bills Tracked</CardDescription>
                </CardHeader>
              </Card>

              <Card className="card-premium">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <TrendingUp className="h-8 w-8 text-secondary" />
                  </div>
                  <CardTitle className="text-3xl">
                    {Math.round(
                      (parliamentMembers.filter((m) => m.party === "Conservative").length / totalMembers) * 100,
                    )}
                    %
                  </CardTitle>
                  <CardDescription>Largest Party</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Main Content Tabs */}
        <section className="py-16">
          <div className="container">
            <Tabs defaultValue="members" className="space-y-8">
              <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3">
                <TabsTrigger value="members">Members</TabsTrigger>
                <TabsTrigger value="parties">Parties</TabsTrigger>
                <TabsTrigger value="voting">Voting Records</TabsTrigger>
              </TabsList>

              <TabsContent value="members" className="space-y-6">
                <Card className="card-premium">
                  <CardHeader>
                    <CardTitle>All Parliament Members</CardTitle>
                    <CardDescription>
                      View detailed information about all {totalMembers} members including their party affiliation and
                      constituency
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <MembersTable members={parliamentMembers} />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="parties" className="space-y-6">
                <Card className="card-premium">
                  <CardHeader>
                    <CardTitle>Party Distribution</CardTitle>
                    <CardDescription>Visual breakdown of party representation in parliament</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PartyDistribution stats={partyStats} />
                  </CardContent>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {partyStats.map((stat) => (
                    <Card key={stat.party} className="card-premium">
                      <CardHeader>
                        <CardTitle className="text-lg">{stat.party}</CardTitle>
                        <CardDescription>{stat.count} members</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Percentage</span>
                            <span className="font-semibold">{stat.percentage}%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div className="bg-primary h-2 rounded-full" style={{ width: `${stat.percentage}%` }}></div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="voting" className="space-y-6">
                <Card className="card-premium">
                  <CardHeader>
                    <CardTitle>Voting Records by Bill</CardTitle>
                    <CardDescription>Analysis of voting patterns across {bills.length} different bills</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <VotingRecordsChart bills={bills} />
                  </CardContent>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {bills.map((bill) => {
                    const stats = getBillStats(bill)
                    return (
                      <Card key={bill} className="card-premium">
                        <CardHeader>
                          <CardTitle className="text-lg">{bill}</CardTitle>
                          <CardDescription>Voting breakdown</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-muted-foreground">For</span>
                              <Badge variant="default">{stats.for} votes</Badge>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-muted-foreground">Against</span>
                              <Badge variant="destructive">{stats.against} votes</Badge>
                            </div>
                            {stats.abstain > 0 && (
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-muted-foreground">Abstain</span>
                                <Badge variant="secondary">{stats.abstain} votes</Badge>
                              </div>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
