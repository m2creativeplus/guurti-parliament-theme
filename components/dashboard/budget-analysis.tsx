"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { mockBudgetData } from "@/lib/data/mock-dashboard-data"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

export function BudgetAnalysis() {
  const chartData = mockBudgetData.map((item) => ({
    sector: item.sector,
    Allocated: item.allocated / 1000000,
    Spent: item.spent / 1000000,
    Committed: item.committed / 1000000,
    Available: item.available / 1000000,
  }))

  return (
    <Card>
      <CardHeader>
        <CardTitle>Budget Analysis by Sector</CardTitle>
        <CardDescription>Financial allocation and spending across sectors (in millions USD)</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis dataKey="sector" className="text-xs" tick={{ fill: "hsl(var(--foreground))" }} />
            <YAxis className="text-xs" tick={{ fill: "hsl(var(--foreground))" }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
              }}
            />
            <Legend />
            <Bar dataKey="Allocated" fill="#1EB53A" />
            <Bar dataKey="Spent" fill="#D21034" />
            <Bar dataKey="Committed" fill="#F4A300" />
            <Bar dataKey="Available" fill="#6B7280" />
          </BarChart>
        </ResponsiveContainer>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center p-3 bg-muted rounded-lg">
            <div className="text-sm text-muted-foreground mb-1">Total Allocated</div>
            <div className="text-2xl font-bold text-foreground">
              ${(mockBudgetData.reduce((sum, item) => sum + item.allocated, 0) / 1000000).toFixed(0)}M
            </div>
          </div>
          <div className="text-center p-3 bg-muted rounded-lg">
            <div className="text-sm text-muted-foreground mb-1">Total Spent</div>
            <div className="text-2xl font-bold text-foreground">
              ${(mockBudgetData.reduce((sum, item) => sum + item.spent, 0) / 1000000).toFixed(0)}M
            </div>
          </div>
          <div className="text-center p-3 bg-muted rounded-lg">
            <div className="text-sm text-muted-foreground mb-1">Total Committed</div>
            <div className="text-2xl font-bold text-foreground">
              ${(mockBudgetData.reduce((sum, item) => sum + item.committed, 0) / 1000000).toFixed(0)}M
            </div>
          </div>
          <div className="text-center p-3 bg-muted rounded-lg">
            <div className="text-sm text-muted-foreground mb-1">Total Available</div>
            <div className="text-2xl font-bold text-foreground">
              ${(mockBudgetData.reduce((sum, item) => sum + item.available, 0) / 1000000).toFixed(0)}M
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
