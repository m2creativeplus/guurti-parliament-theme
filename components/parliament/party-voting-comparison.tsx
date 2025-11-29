"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Legend } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { getParties, getBills, parliamentMembers } from "@/lib/parliament-data"

export function PartyVotingComparison() {
  const parties = getParties()
  const bills = getBills()

  // Calculate voting patterns by party
  const partyData = parties.map((party) => {
    const partyMembers = parliamentMembers.filter((m) => m.party === party)

    let totalFor = 0
    let totalAgainst = 0
    let totalAbstain = 0

    partyMembers.forEach((member) => {
      Object.values(member.votingRecords).forEach((vote) => {
        if (vote === "For") totalFor++
        else if (vote === "Against") totalAgainst++
        else totalAbstain++
      })
    })

    return {
      party,
      for: totalFor,
      against: totalAgainst,
      abstain: totalAbstain,
    }
  })

  return (
    <ChartContainer
      config={{
        for: {
          label: "For",
          color: "hsl(var(--success))",
        },
        against: {
          label: "Against",
          color: "hsl(var(--destructive))",
        },
        abstain: {
          label: "Abstain",
          color: "hsl(var(--muted-foreground))",
        },
      }}
      className="h-[400px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={partyData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="party" angle={-45} textAnchor="end" height={100} fontSize={12} />
          <YAxis fontSize={12} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Legend />
          <Bar dataKey="for" fill="var(--color-for)" name="For" radius={[4, 4, 0, 0]} />
          <Bar dataKey="against" fill="var(--color-against)" name="Against" radius={[4, 4, 0, 0]} />
          <Bar dataKey="abstain" fill="var(--color-abstain)" name="Abstain" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
