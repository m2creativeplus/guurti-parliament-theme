"use client"

import * as React from "react"
import { Label, Pie, PieChart, Sector } from "recharts"
import type { PieSectorDataItem } from "recharts/types/polar/Pie"
import Image from "next/image"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { type ChartConfig, ChartContainer, ChartStyle, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const fundingData = [
  { donor: "undp", amount: 42, fill: "var(--color-undp)" },
  { donor: "worldbank", amount: 35, fill: "var(--color-worldbank)" },
  { donor: "eu", amount: 28, fill: "var(--color-eu)" },
  { donor: "usaid", amount: 24, fill: "var(--color-usaid)" },
  { donor: "uk", amount: 19, fill: "var(--color-uk)" },
]

const chartConfig = {
  amount: {
    label: "Funding ($M)",
  },
  undp: {
    label: "UNDP",
    color: "var(--chart-1)",
  },
  worldbank: {
    label: "World Bank",
    color: "var(--chart-2)",
  },
  eu: {
    label: "European Union",
    color: "var(--chart-3)",
  },
  usaid: {
    label: "USAID",
    color: "var(--chart-4)",
  },
  uk: {
    label: "UK FCDO",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig

export function FundingDistributionPie() {
  const id = "funding-pie-interactive"
  const [activeDonor, setActiveDonor] = React.useState(fundingData[0].donor)

  const activeIndex = React.useMemo(() => fundingData.findIndex((item) => item.donor === activeDonor), [activeDonor])
  const donors = React.useMemo(() => fundingData.map((item) => item.donor), [])

  return (
    <Card data-chart={id} className="flex flex-col card-premium">
      <ChartStyle id={id} config={chartConfig} />
      <CardHeader className="flex-row items-start space-y-0 pb-0">
        <div className="flex items-center gap-3 flex-1">
          <div className="relative h-10 w-10">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Seal_of_the_Somaliland_House_of_Elders-2-Ysl63cCzz2QEfxHVOEy86a2GN0DWYq.png"
              alt="Guurti Seal"
              fill
              className="object-contain"
            />
          </div>
          <div className="grid gap-1">
            <CardTitle>Funding Distribution</CardTitle>
            <CardDescription>2025 Commitments by Donor</CardDescription>
          </div>
        </div>
        <Select value={activeDonor} onValueChange={setActiveDonor}>
          <SelectTrigger className="ml-auto h-7 w-[160px] rounded-lg pl-2.5" aria-label="Select a donor">
            <SelectValue placeholder="Select donor" />
          </SelectTrigger>
          <SelectContent align="end" className="rounded-xl">
            {donors.map((key) => {
              const config = chartConfig[key as keyof typeof chartConfig]

              if (!config) {
                return null
              }

              return (
                <SelectItem key={key} value={key} className="rounded-lg [&_span]:flex">
                  <div className="flex items-center gap-2 text-xs">
                    <span
                      className="flex h-3 w-3 shrink-0 rounded-sm"
                      style={{
                        backgroundColor: `var(--color-${key})`,
                      }}
                    />
                    {config?.label}
                  </div>
                </SelectItem>
              )
            })}
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="flex flex-1 justify-center pb-0">
        <ChartContainer id={id} config={chartConfig} className="mx-auto aspect-square w-full max-w-[300px]">
          <PieChart>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Pie
              data={fundingData}
              dataKey="amount"
              nameKey="donor"
              innerRadius={60}
              strokeWidth={5}
              activeIndex={activeIndex}
              activeShape={({ outerRadius = 0, ...props }: PieSectorDataItem) => (
                <g>
                  <Sector {...props} outerRadius={outerRadius + 10} />
                  <Sector {...props} outerRadius={outerRadius + 25} innerRadius={outerRadius + 12} />
                </g>
              )}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                        <tspan x={viewBox.cx} y={viewBox.cy} className="fill-foreground text-3xl font-bold">
                          ${fundingData[activeIndex].amount}M
                        </tspan>
                        <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 24} className="fill-muted-foreground text-sm">
                          Committed
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
