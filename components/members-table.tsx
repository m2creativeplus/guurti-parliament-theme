"use client"

import { useState } from "react"
import type { ParliamentMember } from "@/lib/parliament-data"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search } from "lucide-react"
import Link from "next/link"

interface MembersTableProps {
  members: ParliamentMember[]
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim()
}

export function MembersTable({ members }: MembersTableProps) {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredMembers = members.filter(
    (member) =>
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.party.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.constituency.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const getPartyColor = (party: string) => {
    const colors: Record<string, string> = {
      Conservative: "bg-blue-500/10 text-blue-700 dark:text-blue-400",
      Labour: "bg-red-500/10 text-red-700 dark:text-red-400",
      "Liberal Democrat": "bg-orange-500/10 text-orange-700 dark:text-orange-400",
      "Scottish National Party": "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400",
      Independent: "bg-gray-500/10 text-gray-700 dark:text-gray-400",
    }
    return colors[party] || "bg-gray-500/10 text-gray-700 dark:text-gray-400"
  }

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search by name, party, or constituency..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="rounded-lg border">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="px-4 py-3 text-left text-sm font-semibold">Name</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Party</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Constituency</th>
              </tr>
            </thead>
            <tbody>
              {filteredMembers.map((member, index) => (
                <tr key={index} className="border-b last:border-0 hover:bg-muted/50 transition-colors">
                  <td className="px-4 py-3">
                    <Link
                      href={`/members-analysis/${slugify(member.name)}`}
                      className="font-medium hover:text-primary transition-colors"
                    >
                      {member.name}
                    </Link>
                  </td>
                  <td className="px-4 py-3">
                    <Badge variant="secondary" className={getPartyColor(member.party)}>
                      {member.party}
                    </Badge>
                  </td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">{member.constituency}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <p className="text-sm text-muted-foreground text-center">
        Showing {filteredMembers.length} of {members.length} members
      </p>
    </div>
  )
}
