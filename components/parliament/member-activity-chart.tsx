"use client"

import { Line, LineChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Legend } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const activityData = [
  { month: "Jan", participation: 82, votes: 45 },
  { month: "Feb", participation: 85, votes: 52 },
  { month: "Mar", participation: 88, votes: 48 },
  { month: "Apr", participation: 84, votes: 41 },
  { month: "May", participation: 87, votes: 55 },
  { month: "Jun", participation: 89, votes: 58 },
  { month: "Jul", participation: 86, votes: 43 },
  { month: "Aug", participation: 83, votes: 38 },
  { month: "Sep", participation: 90, votes: 62 },
  { month: "Oct", participation: 88, votes: 57 },
  { month: "Nov", participation: 91, votes: 64 },
]

export function MemberActivityChart() {
  return (
    <ChartContainer
      config={{
        participation: {
          label: "Participation %",
          color: "hsl(var(--primary))",
        },
        votes: {
          label: "Total Votes",
          color: "hsl(var(--accent))",
        },
      }}
      className="h-[300px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={activityData}>
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
            dataKey="votes"
            stroke="var(--color-votes)"
            strokeWidth={2}
            dot={{ r: 4 }}
            name="Total Votes"
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
