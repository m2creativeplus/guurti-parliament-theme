"use client"

import { useState, useMemo } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, Users, MapPin, Building2, ArrowUpDown } from "lucide-react"
import Link from "next/link"
import { parliamentMembers, getParties, getConstituencies } from "@/lib/parliament-data"
import Image from "next/image"

export default function MembersDirectoryPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedParty, setSelectedParty] = useState<string>("all")
  const [sortBy, setSortBy] = useState<"name" | "party" | "constituency">("name")

  const parties = getParties()
  const constituencies = getConstituencies()

  // Filter and sort members
  const filteredMembers = useMemo(() => {
    const filtered = parliamentMembers.filter((member) => {
      const matchesSearch =
        member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.constituency.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.party.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesParty = selectedParty === "all" || member.party === selectedParty

      return matchesSearch && matchesParty
    })

    // Sort members
    filtered.sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name)
      } else if (sortBy === "party") {
        return a.party.localeCompare(b.party)
      } else {
        return a.constituency.localeCompare(b.constituency)
      }
    })

    return filtered
  }, [searchQuery, selectedParty, sortBy])

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container py-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <Badge variant="outline" className="mb-3">
                Members Directory
              </Badge>
              <h1 className="text-4xl font-heading font-bold mb-2">Parliament Members</h1>
              <p className="text-muted-foreground text-lg">
                Browse and search all {parliamentMembers.length} Members of Parliament
              </p>
            </div>
            <Link href="/parliament-stats">
              <Button variant="outline" size="lg">
                Back to Dashboard
              </Button>
            </Link>
          </div>

          {/* Search and Filter Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative md:col-span-2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by name, party, or constituency..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex gap-2">
              <Select value={selectedParty} onValueChange={setSelectedParty}>
                <SelectTrigger>
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Filter by party" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Parties</SelectItem>
                  {parties.map((party) => (
                    <SelectItem key={party} value={party}>
                      {party}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={(value: any) => setSortBy(value)}>
                <SelectTrigger className="w-[140px]">
                  <ArrowUpDown className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Sort by Name</SelectItem>
                  <SelectItem value="party">Sort by Party</SelectItem>
                  <SelectItem value="constituency">Sort by Area</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Showing {filteredMembers.length} of {parliamentMembers.length} members
            </p>
            {(searchQuery || selectedParty !== "all") && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setSearchQuery("")
                  setSelectedParty("all")
                }}
              >
                Clear filters
              </Button>
            )}
          </div>
        </div>
      </header>

      <main className="container py-12">
        {/* Members Grid */}
        {filteredMembers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMembers.map((member) => (
              <Link
                key={member.name}
                href={`/uk-parliament/members/${encodeURIComponent(member.name.toLowerCase().replace(/\s+/g, "-"))}`}
              >
                <Card className="card-premium hover-lift cursor-pointer h-full group">
                  <CardHeader>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="relative h-16 w-16 rounded-full overflow-hidden bg-muted flex-shrink-0">
                        <Image
                          src={`/.jpg?height=64&width=64&query=${encodeURIComponent(member.name)}`}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                          {member.name}
                        </CardTitle>
                        <Badge variant="secondary" className="mb-2">
                          {member.party}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 flex-shrink-0" />
                        <span className="truncate">{member.constituency}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Building2 className="h-4 w-4 flex-shrink-0" />
                        <span>{Object.keys(member.votingRecords).length} votes recorded</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <Card className="card-premium">
            <CardContent className="py-12">
              <div className="text-center">
                <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No members found</h3>
                <p className="text-muted-foreground mb-4">Try adjusting your search or filter criteria</p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchQuery("")
                    setSelectedParty("all")
                  }}
                >
                  Clear all filters
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Quick Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="card-premium">
            <CardHeader>
              <CardTitle className="text-2xl">{parliamentMembers.length}</CardTitle>
              <CardDescription>Total Members</CardDescription>
            </CardHeader>
          </Card>

          <Card className="card-premium">
            <CardHeader>
              <CardTitle className="text-2xl">{parties.length}</CardTitle>
              <CardDescription>Political Parties</CardDescription>
            </CardHeader>
          </Card>

          <Card className="card-premium">
            <CardHeader>
              <CardTitle className="text-2xl">{constituencies.length}</CardTitle>
              <CardDescription>Constituencies</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </main>
    </div>
  )
}
