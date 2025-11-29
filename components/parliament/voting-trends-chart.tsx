"use client"

import { Line, LineChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Legend } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const trendsData = [
  { month: "Jan", participation: 82, forVotes: 65, againstVotes: 35 },
  { month: "Feb", participation: 85, forVotes: 68, againstVotes: 32 },
  { month: "Mar", participation: 88, forVotes: 70, againstVotes: 30 },
  { month: "Apr", participation: 84, forVotes: 62, againstVotes: 38 },
  { month: "May", participation: 87, forVotes: 72, againstVotes: 28 },
  { month: "Jun", participation: 89, forVotes: 75, againstVotes: 25 },
  { month: "Jul", participation: 86, forVotes: 68, againstVotes: 32 },
  { month: "Aug", participation: 83, forVotes: 64, againstVotes: 36 },
  { month: "Sep", participation: 90, forVotes: 78, againstVotes: 22 },
  { month: "Oct", participation: 88, forVotes: 73, againstVotes: 27 },
  { month: "Nov", participation: 91, forVotes: 76, againstVotes: 24 },
]

export function VotingTrendsChart() {
  return (
    <ChartContainer
      config={{
        participation: {
          label: "Participation %",
          color: "hsl(var(--primary))",
        },
        forVotes: {
          label: "For Votes %",
          color: "hsl(var(--success))",
        },
        againstVotes: {
          label: "Against Votes %",
          color: "hsl(var(--destructive))",
        },
      }}
      className="h-[400px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={trendsData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" fontSize={12} />
          <YAxis fontSize={12} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Legend />
          <Line
            type="monotone"
            dataKey="participation"
            stroke="var(--color-participation)"
            strokeWidth={2}
            dot={{ r: 4 }}
            name="Participation %"
          />
          <Line
            type="monotone"
            dataKey="forVotes"
            stroke="var(--color-forVotes)"
            strokeWidth={2}
            dot={{ r: 4 }}
            name="For Votes %"
          />
          <Line
            type="monotone"
            dataKey="againstVotes"
            stroke="var(--color-againstVotes)"
            strokeWidth={2}
            dot={{ r: 4 }}
            name="Against Votes %"
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
