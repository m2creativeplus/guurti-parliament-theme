"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { mockDonors } from "@/lib/data/mock-dashboard-data"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"

const COLORS = ["#1EB53A", "#D21034", "#F4A300", "#3B82F6", "#8B5CF6", "#EC4899", "#10B981"]

export function DonorWheel() {
  const chartData = mockDonors.map((donor) => ({
    name: donor.name,
    value: donor.totalFunding,
  }))

  return (
    <Card>
      <CardHeader>
        <CardTitle>Funding Distribution by Donor</CardTitle>
        <CardDescription>Proportional breakdown of total funding commitments</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value: number) => `$${(value / 1000000).toFixed(1)}M`}
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
              }}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>

        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-3">
          {mockDonors.map((donor, index) => (
            <div key={donor.id} className="flex items-center gap-2 p-2 border rounded">
              <div className="w-4 h-4 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }} />
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium truncate">{donor.name}</div>
                <div className="text-xs text-muted-foreground">${(donor.totalFunding / 1000000).toFixed(1)}M</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
