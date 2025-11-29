import { notFound } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Building2, Vote, TrendingUp, CheckCircle2, XCircle, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { parliamentMembers, getBills } from "@/lib/parliament-data"
import Image from "next/image"
import { MemberVotingChart } from "@/components/parliament/member-voting-chart"
import { VotingHistoryTable } from "@/components/parliament/voting-history-table"

interface MemberPageProps {
  params: {
    slug: string
  }
}

export default function MemberPage({ params }: MemberPageProps) {
  // Find member by slug
  const member = parliamentMembers.find((m) => m.name.toLowerCase().replace(/\s+/g, "-") === params.slug)

  if (!member) {
    notFound()
  }

  const bills = getBills()
  const votingRecords = Object.entries(member.votingRecords)

  // Calculate voting statistics
  const forVotes = votingRecords.filter(([_, vote]) => vote === "For").length
  const againstVotes = votingRecords.filter(([_, vote]) => vote === "Against").length
  const abstainVotes = votingRecords.filter(([_, vote]) => vote === "Abstain").length
  const totalVotes = votingRecords.length
  const participationRate = Math.round((totalVotes / bills.length) * 100)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container py-8">
          <Link href="/uk-parliament/members">
            <Button variant="ghost" size="sm" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Members
            </Button>
          </Link>

          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="relative h-32 w-32 rounded-full overflow-hidden bg-muted flex-shrink-0">
              <Image
                src={`/.jpg?height=128&width=128&query=${encodeURIComponent(member.name)}`}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-start gap-3 mb-3">
                <h1 className="text-4xl font-heading font-bold">{member.name}</h1>
                <Badge variant="secondary" className="text-base px-3 py-1">
                  {member.party}
                </Badge>
              </div>

              <div className="flex flex-wrap gap-4 text-muted-foreground mb-4">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  <span className="text-lg">{member.constituency}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="h-5 w-5" />
                  <span className="text-lg">Member of Parliament</span>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed max-w-3xl">
                Representing {member.constituency} in the House of Commons. Active participant in legislative debates
                and committee work, with a focus on key policy areas affecting constituents.
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="container py-12 space-y-12">
        {/* Voting Statistics Overview */}
        <section>
          <h2 className="text-3xl font-heading font-bold mb-6">Voting Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="card-premium">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Vote className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-3xl">{totalVotes}</CardTitle>
                <CardDescription>Total Votes Cast</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">Out of {bills.length} bills</div>
              </CardContent>
            </Card>

            <Card className="card-premium">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CheckCircle2 className="h-8 w-8 text-success" />
                </div>
                <CardTitle className="text-3xl">{forVotes}</CardTitle>
                <CardDescription>Voted For</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">
                  {Math.round((forVotes / totalVotes) * 100)}% of votes
                </div>
              </CardContent>
            </Card>

            <Card className="card-premium">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <XCircle className="h-8 w-8 text-destructive" />
                </div>
                <CardTitle className="text-3xl">{againstVotes}</CardTitle>
                <CardDescription>Voted Against</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">
                  {Math.round((againstVotes / totalVotes) * 100)}% of votes
                </div>
              </CardContent>
            </Card>

            <Card className="card-premium">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <TrendingUp className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-3xl">{participationRate}%</CardTitle>
                <CardDescription>Participation Rate</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">{abstainVotes} abstentions</div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Voting Pattern Visualization */}
        <section>
          <h2 className="text-3xl font-heading font-bold mb-6">Voting Pattern Analysis</h2>
          <Card className="card-premium">
            <CardHeader>
              <CardTitle>Vote Distribution</CardTitle>
              <CardDescription>Breakdown of voting positions across all bills</CardDescription>
            </CardHeader>
            <CardContent>
              <MemberVotingChart
                data={{
                  for: forVotes,
                  against: againstVotes,
                  abstain: abstainVotes,
                }}
              />
            </CardContent>
          </Card>
        </section>

        {/* Detailed Voting History */}
        <section>
          <h2 className="text-3xl font-heading font-bold mb-6">Voting History</h2>
          <Card className="card-premium">
            <CardHeader>
              <CardTitle>Complete Voting Record</CardTitle>
              <CardDescription>All recorded votes on legislative bills</CardDescription>
            </CardHeader>
            <CardContent>
              <VotingHistoryTable votingRecords={member.votingRecords} />
            </CardContent>
          </Card>
        </section>

        {/* Committee Memberships */}
        <section>
          <h2 className="text-3xl font-heading font-bold mb-6">Committee Memberships</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="card-premium">
              <CardHeader>
                <Building2 className="h-8 w-8 text-primary mb-3" />
                <CardTitle>Foreign Affairs Committee</CardTitle>
                <CardDescription>Member since 2020</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Oversight of UK foreign policy, international relations, and diplomatic affairs.
                </p>
              </CardContent>
            </Card>

            <Card className="card-premium">
              <CardHeader>
                <Building2 className="h-8 w-8 text-accent mb-3" />
                <CardTitle>Treasury Select Committee</CardTitle>
                <CardDescription>Member since 2022</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Scrutiny of HM Treasury, financial services, and economic policy.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Information */}
        <section>
          <h2 className="text-3xl font-heading font-bold mb-6">Contact Information</h2>
          <Card className="card-premium">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Parliamentary Office</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    House of Commons
                    <br />
                    London SW1A 0AA
                    <br />
                    United Kingdom
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Constituency Office</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.constituency} Office
                    <br />
                    Contact via parliamentary website
                    <br />
                    Regular surgeries available
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}
