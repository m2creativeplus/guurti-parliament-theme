import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Building2, Vote, TrendingUp } from "lucide-react"
import Link from "next/link"
import { getPartyStats, getBills, parliamentMembers } from "@/lib/parliament-data"
import { PartyDistributionChart } from "@/components/parliament/party-distribution-chart"
import { VotingOverviewChart } from "@/components/parliament/voting-overview-chart"

export default function UKParliamentPage() {
  const partyStats = getPartyStats()
  const bills = getBills()
  const totalMembers = parliamentMembers.length

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-heading font-bold mb-2">UK Parliament Analysis</h1>
              <p className="text-muted-foreground">Comprehensive voting records and member statistics</p>
            </div>
            <Link href="/">
              <Button variant="outline">Back to Home</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container py-12 space-y-12">
        {/* Overview Stats */}
        <section>
          <h2 className="text-2xl font-heading font-bold mb-6">Overview</h2>
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
                  <Building2 className="h-8 w-8 text-accent" />
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
                <CardTitle className="text-3xl">85%</CardTitle>
                <CardDescription>Avg. Participation</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Party Distribution */}
        <section>
          <h2 className="text-2xl font-heading font-bold mb-6">Party Distribution</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="card-premium">
              <CardHeader>
                <CardTitle>Members by Party</CardTitle>
                <CardDescription>Distribution across political parties</CardDescription>
              </CardHeader>
              <CardContent>
                <PartyDistributionChart data={partyStats} />
              </CardContent>
            </Card>

            <Card className="card-premium">
              <CardHeader>
                <CardTitle>Party Statistics</CardTitle>
                <CardDescription>Detailed breakdown</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {partyStats.map((stat) => (
                    <div key={stat.party} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Badge variant="outline">{stat.party}</Badge>
                        <span className="text-sm text-muted-foreground">{stat.count} members</span>
                      </div>
                      <span className="font-semibold">{stat.percentage}%</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Voting Overview */}
        <section>
          <h2 className="text-2xl font-heading font-bold mb-6">Voting Records</h2>
          <Card className="card-premium">
            <CardHeader>
              <CardTitle>Bill Voting Overview</CardTitle>
              <CardDescription>Voting patterns across major bills</CardDescription>
            </CardHeader>
            <CardContent>
              <VotingOverviewChart />
            </CardContent>
          </Card>
        </section>

        {/* Quick Actions */}
        <section>
          <h2 className="text-2xl font-heading font-bold mb-6">Explore</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/uk-parliament/members">
              <Card className="card-premium hover-lift cursor-pointer h-full">
                <CardHeader>
                  <Users className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>View All Members</CardTitle>
                  <CardDescription>Browse and search MP profiles</CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/uk-parliament/voting">
              <Card className="card-premium hover-lift cursor-pointer h-full">
                <CardHeader>
                  <Vote className="h-12 w-12 text-accent mb-4" />
                  <CardTitle>Voting Records</CardTitle>
                  <CardDescription>Detailed bill-by-bill analysis</CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/uk-parliament/parties">
              <Card className="card-premium hover-lift cursor-pointer h-full">
                <CardHeader>
                  <Building2 className="h-12 w-12 text-success mb-4" />
                  <CardTitle>Party Analysis</CardTitle>
                  <CardDescription>Compare party voting patterns</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
