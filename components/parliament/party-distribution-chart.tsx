"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

interface PartyDistributionChartProps {
  data: Array<{
    party: string
    count: number
    percentage: number
  }>
}

export function PartyDistributionChart({ data }: PartyDistributionChartProps) {
  const chartData = data.map((item) => ({
    party: item.party,
    members: item.count,
  }))

  return (
    <ChartContainer
      config={{
        members: {
          label: "Members",
          color: "hsl(var(--primary))",
        },
      }}
      className="h-[300px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="party" angle={-45} textAnchor="end" height={100} fontSize={12} />
          <YAxis />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="members" fill="var(--color-members)" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
