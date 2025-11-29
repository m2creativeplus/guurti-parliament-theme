"use client"

import { Bar, BarChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

interface PartyStats {
  party: string
  count: number
  percentage: number
}

interface PartyDistributionProps {
  stats: PartyStats[]
}

const PARTY_COLORS: Record<string, string> = {
  Conservative: "hsl(221, 83%, 53%)",
  Labour: "hsl(0, 84%, 60%)",
  "Liberal Democrat": "hsl(39, 100%, 57%)",
  "Scottish National Party": "hsl(48, 100%, 67%)",
  Independent: "hsl(0, 0%, 60%)",
}

export function PartyDistribution({ stats }: PartyDistributionProps) {
  return (
    <ChartContainer
      config={{
        count: {
          label: "Members",
          color: "hsl(var(--primary))",
        },
      }}
      className="h-[400px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={stats} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="party" angle={-45} textAnchor="end" height={100} interval={0} />
          <YAxis />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="count" radius={[8, 8, 0, 0]}>
            {stats.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={PARTY_COLORS[entry.party] || "hsl(var(--primary))"} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
