"use client"

import { Pie, PieChart, Cell, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const committeeData = [
  { name: "Foreign Affairs", members: 15, color: "hsl(var(--chart-1))" },
  { name: "Finance", members: 12, color: "hsl(var(--chart-2))" },
  { name: "Health & Social", members: 14, color: "hsl(var(--chart-3))" },
  { name: "Justice", members: 11, color: "hsl(var(--chart-4))" },
  { name: "Environment", members: 13, color: "hsl(var(--chart-5))" },
  { name: "Education", members: 17, color: "hsl(var(--primary))" },
]

export function CommitteeBreakdown() {
  return (
    <div className="space-y-6">
      <ChartContainer
        config={{
          members: {
            label: "Members",
          },
        }}
        className="h-[250px]"
      >
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={committeeData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="members"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {committeeData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <ChartTooltip content={<ChartTooltipContent />} />
          </PieChart>
        </ResponsiveContainer>
      </ChartContainer>

      <div className="space-y-2">
        {committeeData.map((committee) => (
          <div key={committee.name} className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full" style={{ backgroundColor: committee.color }} />
              <span>{committee.name}</span>
            </div>
            <span className="font-semibold">{committee.members} members</span>
          </div>
        ))}
      </div>
    </div>
  )
}
