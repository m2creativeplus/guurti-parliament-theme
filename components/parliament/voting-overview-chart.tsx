"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Legend } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { getBills, getBillStats } from "@/lib/parliament-data"

export function VotingOverviewChart() {
  const bills = getBills()
  const chartData = bills.map((bill) => {
    const stats = getBillStats(bill)
    return {
      bill: bill.length > 20 ? bill.substring(0, 20) + "..." : bill,
      for: stats.for,
      against: stats.against,
      abstain: stats.abstain,
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
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="bill" angle={-45} textAnchor="end" height={120} fontSize={11} />
          <YAxis />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Legend />
          <Bar dataKey="for" fill="var(--color-for)" radius={[4, 4, 0, 0]} />
          <Bar dataKey="against" fill="var(--color-against)" radius={[4, 4, 0, 0]} />
          <Bar dataKey="abstain" fill="var(--color-abstain)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
