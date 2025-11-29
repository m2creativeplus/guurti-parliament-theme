"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Cell } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

interface BillVotingChartProps {
  billStats: {
    bill: string
    for: number
    against: number
    abstain: number
    total: number
  }
}

export function BillVotingChart({ billStats }: BillVotingChartProps) {
  const chartData = [
    { category: "For", votes: billStats.for, color: "hsl(var(--success))" },
    { category: "Against", votes: billStats.against, color: "hsl(var(--destructive))" },
    { category: "Abstain", votes: billStats.abstain, color: "hsl(var(--muted-foreground))" },
  ]

  return (
    <ChartContainer
      config={{
        votes: {
          label: "Votes",
        },
      }}
      className="h-[300px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" fontSize={12} />
          <YAxis fontSize={12} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="votes" radius={[8, 8, 0, 0]}>
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
