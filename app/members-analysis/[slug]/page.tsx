import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { parliamentMembers } from "@/lib/parliament-data"
import { ArrowLeft, MapPin, Users, Vote } from "lucide-react"
import Link from "next/link"
import { MemberVotingRecord } from "@/components/member-voting-record"

interface MemberPageProps {
  params: {
    slug: string
  }
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim()
}

export function generateStaticParams() {
  return parliamentMembers.map((member) => ({
    slug: slugify(member.name),
  }))
}

export default async function MemberPage({ params }: MemberPageProps) {
  const { slug } = await params

  const member = parliamentMembers.find((m) => slugify(m.name) === slug)

  if (!member) {
    notFound()
  }

  const getPartyColor = (party: string) => {
    const colors: Record<string, string> = {
      Conservative: "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20",
      Labour: "bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/20",
      "Liberal Democrat": "bg-orange-500/10 text-orange-700 dark:text-orange-400 border-orange-500/20",
      "Scottish National Party": "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/20",
      Independent: "bg-gray-500/10 text-gray-700 dark:text-gray-400 border-gray-500/20",
    }
    return colors[party] || "bg-gray-500/10 text-gray-700 dark:text-gray-400 border-gray-500/20"
  }

  const votingRecords = Object.entries(member.votingRecords)
  const forVotes = votingRecords.filter(([_, vote]) => vote === "For").length
  const againstVotes = votingRecords.filter(([_, vote]) => vote === "Against").length
  const abstainVotes = votingRecords.filter(([_, vote]) => vote === "Abstain").length

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Header Section */}
        <section className="py-12 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <Button variant="ghost" asChild className="mb-6">
                <Link href="/members-analysis">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Members
                </Link>
              </Button>

              <div className="space-y-4">
                <Badge variant="outline" className={`text-base px-4 py-2 ${getPartyColor(member.party)}`}>
                  {member.party}
                </Badge>
                <h1 className="text-4xl md:text-5xl font-heading font-bold">{member.name}</h1>
                <div className="flex flex-wrap gap-4 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    <span className="text-lg">{member.constituency}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    <span className="text-lg">Member of Parliament</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Overview */}
        <section className="py-12">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <Card className="card-premium">
                  <CardHeader>
                    <CardTitle className="text-3xl text-green-600 dark:text-green-400">{forVotes}</CardTitle>
                    <CardDescription>Votes For</CardDescription>
                  </CardHeader>
                </Card>

                <Card className="card-premium">
                  <CardHeader>
                    <CardTitle className="text-3xl text-red-600 dark:text-red-400">{againstVotes}</CardTitle>
                    <CardDescription>Votes Against</CardDescription>
                  </CardHeader>
                </Card>

                <Card className="card-premium">
                  <CardHeader>
                    <CardTitle className="text-3xl text-gray-600 dark:text-gray-400">{abstainVotes}</CardTitle>
                    <CardDescription>Abstentions</CardDescription>
                  </CardHeader>
                </Card>
              </div>

              {/* Voting Record */}
              <Card className="card-premium">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Vote className="h-6 w-6 text-primary" />
                    <CardTitle>Complete Voting Record</CardTitle>
                  </div>
                  <CardDescription>Detailed breakdown of all {votingRecords.length} recorded votes</CardDescription>
                </CardHeader>
                <CardContent>
                  <MemberVotingRecord votingRecords={member.votingRecords} />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
