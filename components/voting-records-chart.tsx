"use client"

import { Bar, BarChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { getBillStats } from "@/lib/parliament-data"

interface VotingRecordsChartProps {
  bills: string[]
}

export function VotingRecordsChart({ bills }: VotingRecordsChartProps) {
  const data = bills.map((bill) => {
    const stats = getBillStats(bill)
    return {
      bill: bill.length > 20 ? bill.substring(0, 20) + "..." : bill,
      fullBill: bill,
      For: stats.for,
      Against: stats.against,
      Abstain: stats.abstain,
    }
  })

  return (
    <ChartContainer
      config={{
        For: {
          label: "For",
          color: "hsl(142, 76%, 36%)",
        },
        Against: {
          label: "Against",
          color: "hsl(0, 84%, 60%)",
        },
        Abstain: {
          label: "Abstain",
          color: "hsl(0, 0%, 60%)",
        },
      }}
      className="h-[500px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 100 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="bill" angle={-45} textAnchor="end" height={120} interval={0} />
          <YAxis />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Legend />
          <Bar dataKey="For" fill="var(--color-For)" radius={[4, 4, 0, 0]} />
          <Bar dataKey="Against" fill="var(--color-Against)" radius={[4, 4, 0, 0]} />
          <Bar dataKey="Abstain" fill="var(--color-Abstain)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
