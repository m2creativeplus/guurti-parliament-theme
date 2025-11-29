"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { mockFundingTrends } from "@/lib/data/mock-dashboard-data"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

export function FundingTrends() {
  const chartData = mockFundingTrends.map((item) => ({
    period: item.period,
    amount: item.amount / 1000000,
    donor: item.donor,
  }))

  // Group by period and sum amounts
  const aggregatedData = chartData.reduce(
    (acc, curr) => {
      const existing = acc.find((item) => item.period === curr.period)
      if (existing) {
        existing.amount += curr.amount
      } else {
        acc.push({ period: curr.period, amount: curr.amount })
      }
      return acc
    },
    [] as { period: string; amount: number }[],
  )

  return (
    <Card>
      <CardHeader>
        <CardTitle>Funding Trends Over Time</CardTitle>
        <CardDescription>Quarterly funding commitments (in millions USD)</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={aggregatedData}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis dataKey="period" className="text-xs" tick={{ fill: "hsl(var(--foreground))" }} />
            <YAxis className="text-xs" tick={{ fill: "hsl(var(--foreground))" }} />
            <Tooltip
              formatter={(value: number) => `$${value.toFixed(1)}M`}
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
              }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="amount"
              stroke="#1EB53A"
              strokeWidth={3}
              name="Total Funding"
              dot={{ fill: "#1EB53A", r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>

        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="text-center p-3 bg-muted rounded-lg">
            <div className="text-sm text-muted-foreground mb-1">Average per Quarter</div>
            <div className="text-xl font-bold text-foreground">
              ${(aggregatedData.reduce((sum, item) => sum + item.amount, 0) / aggregatedData.length).toFixed(1)}M
            </div>
          </div>
          <div className="text-center p-3 bg-muted rounded-lg">
            <div className="text-sm text-muted-foreground mb-1">Highest Quarter</div>
            <div className="text-xl font-bold text-foreground">
              ${Math.max(...aggregatedData.map((item) => item.amount)).toFixed(1)}M
            </div>
          </div>
          <div className="text-center p-3 bg-muted rounded-lg">
            <div className="text-sm text-muted-foreground mb-1">Growth Rate</div>
            <div className="text-xl font-bold text-green-600">
              +
              {(
                ((aggregatedData[aggregatedData.length - 1].amount - aggregatedData[0].amount) /
                  aggregatedData[0].amount) *
                100
              ).toFixed(0)}
              %
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
