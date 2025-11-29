"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Vote, TrendingUp, Users, BarChart3, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { getBills, getBillStats, parliamentMembers } from "@/lib/parliament-data"
import { BillVotingChart } from "@/components/parliament/bill-voting-chart"
import { PartyVotingComparison } from "@/components/parliament/party-voting-comparison"
import { VotingTrendsChart } from "@/components/parliament/voting-trends-chart"
import { BillDetailsCard } from "@/components/parliament/bill-details-card"

export default function VotingRecordsPage() {
  const bills = getBills()
  const [selectedBill, setSelectedBill] = useState(bills[0])

  const billStats = getBillStats(selectedBill)
  const totalMembers = parliamentMembers.length

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container py-8">
          <Link href="/parliament-stats">
            <Button variant="ghost" size="sm" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>

          <div className="flex items-center justify-between">
            <div>
              <Badge variant="outline" className="mb-3">
                Voting Records Analysis
              </Badge>
              <h1 className="text-4xl font-heading font-bold mb-2">Legislative Voting Records</h1>
              <p className="text-muted-foreground text-lg">
                Comprehensive analysis of voting patterns across {bills.length} bills
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="container py-12 space-y-12">
        {/* Overview Statistics */}
        <section>
          <h2 className="text-3xl font-heading font-bold mb-6">Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="card-premium hover-lift">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Vote className="h-8 w-8 text-primary" />
                  <Badge variant="secondary">Active</Badge>
                </div>
                <CardTitle className="text-3xl">{bills.length}</CardTitle>
                <CardDescription>Total Bills</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">Tracked in current session</div>
              </CardContent>
            </Card>

            <Card className="card-premium hover-lift">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-3xl">{totalMembers}</CardTitle>
                <CardDescription>Voting Members</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">Members of Parliament</div>
              </CardContent>
            </Card>

            <Card className="card-premium hover-lift">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <TrendingUp className="h-8 w-8 text-success" />
                </div>
                <CardTitle className="text-3xl">87%</CardTitle>
                <CardDescription>Avg. Participation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">Across all bills</div>
              </CardContent>
            </Card>

            <Card className="card-premium hover-lift">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <BarChart3 className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-3xl">8</CardTitle>
                <CardDescription>Bills Passed</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">This session</div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Detailed Voting Analysis */}
        <section>
          <h2 className="text-3xl font-heading font-bold mb-6">Detailed Voting Analysis</h2>

          <Tabs defaultValue="by-bill" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3 lg:w-[600px]">
              <TabsTrigger value="by-bill">By Bill</TabsTrigger>
              <TabsTrigger value="by-party">By Party</TabsTrigger>
              <TabsTrigger value="trends">Trends</TabsTrigger>
            </TabsList>

            {/* By Bill Tab */}
            <TabsContent value="by-bill" className="space-y-6">
              <Card className="card-premium">
                <CardHeader>
                  <CardTitle>Select a Bill</CardTitle>
                  <CardDescription>View detailed voting breakdown for each bill</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {bills.map((bill) => (
                      <Button
                        key={bill}
                        variant={selectedBill === bill ? "default" : "outline"}
                        className="justify-start h-auto py-3 px-4"
                        onClick={() => setSelectedBill(bill)}
                      >
                        <div className="text-left">
                          <div className="font-semibold">{bill}</div>
                          <div className="text-xs opacity-80">Click to view details</div>
                        </div>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="card-premium">
                  <CardHeader>
                    <CardTitle>Voting Results: {selectedBill}</CardTitle>
                    <CardDescription>Distribution of votes</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BillVotingChart billStats={billStats} />
                  </CardContent>
                </Card>

                <BillDetailsCard bill={selectedBill} stats={billStats} />
              </div>
            </TabsContent>

            {/* By Party Tab */}
            <TabsContent value="by-party" className="space-y-6">
              <Card className="card-premium">
                <CardHeader>
                  <CardTitle>Party Voting Comparison</CardTitle>
                  <CardDescription>How different parties voted across all bills</CardDescription>
                </CardHeader>
                <CardContent>
                  <PartyVotingComparison />
                </CardContent>
              </Card>
            </TabsContent>

            {/* Trends Tab */}
            <TabsContent value="trends" className="space-y-6">
              <Card className="card-premium">
                <CardHeader>
                  <CardTitle>Voting Trends Over Time</CardTitle>
                  <CardDescription>Participation and voting patterns throughout the session</CardDescription>
                </CardHeader>
                <CardContent>
                  <VotingTrendsChart />
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="card-premium">
                  <CardHeader>
                    <CardTitle>Key Insights</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                        <span className="text-sm">Participation rates increased by 5% in Q4</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                        <span className="text-sm">Climate bills show highest cross-party support</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                        <span className="text-sm">Economic policy votes most divided along party lines</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                        <span className="text-sm">Average debate time: 4.5 hours per bill</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="card-premium">
                  <CardHeader>
                    <CardTitle>Most Debated Bills</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {bills.slice(0, 5).map((bill, index) => (
                        <div key={bill} className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Badge variant="outline">{index + 1}</Badge>
                            <span className="text-sm font-medium">{bill}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Quick Links */}
        <section>
          <h2 className="text-3xl font-heading font-bold mb-6">Explore More</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/uk-parliament/members">
              <Card className="card-premium hover-lift cursor-pointer h-full group">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">View Members</CardTitle>
                  <CardDescription>Browse individual voting records</CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/uk-parliament/parties">
              <Card className="card-premium hover-lift cursor-pointer h-full group">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <BarChart3 className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-lg">Party Analysis</CardTitle>
                  <CardDescription>Compare party positions</CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/parliament-stats">
              <Card className="card-premium hover-lift cursor-pointer h-full group">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-success/10 flex items-center justify-center mb-4 group-hover:bg-success/20 transition-colors">
                    <TrendingUp className="h-6 w-6 text-success" />
                  </div>
                  <CardTitle className="text-lg">Dashboard</CardTitle>
                  <CardDescription>View overall statistics</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
