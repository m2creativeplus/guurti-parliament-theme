"use client"

import { TrendingUp } from "lucide-react"
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"
import Image from "next/image"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { sector: "Governance", undp: 85, worldBank: 70, eu: 65 },
  { sector: "Education", undp: 75, worldBank: 90, eu: 80 },
  { sector: "Healthcare", undp: 90, worldBank: 75, eu: 85 },
  { sector: "Infrastructure", undp: 60, worldBank: 95, eu: 70 },
  { sector: "Climate", undp: 80, worldBank: 65, eu: 92 },
  { sector: "Economy", undp: 70, worldBank: 88, eu: 75 },
]

const chartConfig = {
  undp: {
    label: "UNDP",
    color: "var(--chart-1)",
  },
  worldBank: {
    label: "World Bank",
    color: "var(--chart-2)",
  },
  eu: {
    label: "European Union",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig

export function DonorActivityRadar() {
  return (
    <Card className="card-premium">
      <CardHeader className="items-center pb-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="relative h-10 w-10">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Seal_of_the_Somaliland_House_of_Elders-2-Ysl63cCzz2QEfxHVOEy86a2GN0DWYq.png"
              alt="Guurti Seal"
              fill
              className="object-contain"
            />
          </div>
          <div>
            <CardTitle>Donor Activity by Sector</CardTitle>
            <CardDescription>Multi-Donor Engagement Analysis</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[350px]">
          <RadarChart
            data={chartData}
            margin={{
              top: 10,
              bottom: 10,
            }}
          >
            <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
            <PolarAngleAxis dataKey="sector" />
            <PolarGrid stroke="var(--border)" className="opacity-50" />
            <Radar
              dataKey="undp"
              fill="var(--color-undp)"
              fillOpacity={0.6}
              stroke="var(--color-undp)"
              strokeWidth={2}
            />
            <Radar
              dataKey="worldBank"
              fill="var(--color-worldBank)"
              fillOpacity={0.5}
              stroke="var(--color-worldBank)"
              strokeWidth={2}
            />
            <Radar dataKey="eu" fill="var(--color-eu)" fillOpacity={0.4} stroke="var(--color-eu)" strokeWidth={2} />
            <ChartLegend className="mt-8" content={<ChartLegendContent />} />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 pt-4 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium text-primary">
          Climate sector showing 28% increase <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground flex items-center gap-2 leading-none">
          Q1 2025 — Guurti EPD Desk Analysis
        </div>
      </CardFooter>
    </Card>
  )
}
