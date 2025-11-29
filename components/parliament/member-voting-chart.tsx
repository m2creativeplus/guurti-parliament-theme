"use client"

import { Pie, PieChart, Cell, ResponsiveContainer, Legend } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

interface MemberVotingChartProps {
  data: {
    for: number
    against: number
    abstain: number
  }
}

export function MemberVotingChart({ data }: MemberVotingChartProps) {
  const chartData = [
    { name: "Voted For", value: data.for, color: "hsl(var(--success))" },
    { name: "Voted Against", value: data.against, color: "hsl(var(--destructive))" },
    { name: "Abstained", value: data.abstain, color: "hsl(var(--muted-foreground))" },
  ]

  return (
    <ChartContainer
      config={{
        votes: {
          label: "Votes",
        },
      }}
      className="h-[350px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <ChartTooltip content={<ChartTooltipContent />} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
