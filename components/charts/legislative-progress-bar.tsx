"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"
import Image from "next/image"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const chartData = [
  { phase: "Digitization", documents: 1200 },
  { phase: "Review", documents: 850 },
  { phase: "Translation", documents: 640 },
  { phase: "Publishing", documents: 420 },
  { phase: "Archiving", documents: 320 },
  { phase: "Analysis", documents: 180 },
]

const chartConfig = {
  documents: {
    label: "Documents",
    color: "var(--chart-1)",
  },
  label: {
    color: "var(--background)",
  },
} satisfies ChartConfig

export function LegislativeProgressBar() {
  return (
    <Card className="card-premium">
      <CardHeader>
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
            <CardTitle>SDLA Progress Tracker</CardTitle>
            <CardDescription>Somaliland Digital Legislative Archive — Phase 1</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              right: 60,
              left: 10,
            }}
          >
            <CartesianGrid horizontal={false} stroke="var(--border)" opacity={0.3} />
            <YAxis
              dataKey="phase"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value}
              hide
            />
            <XAxis dataKey="documents" type="number" hide />
            <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
            <Bar dataKey="documents" layout="vertical" fill="var(--color-documents)" radius={8}>
              <LabelList
                dataKey="phase"
                position="insideLeft"
                offset={8}
                className="fill-primary-foreground font-semibold"
                fontSize={12}
              />
              <LabelList
                dataKey="documents"
                position="right"
                offset={8}
                className="fill-foreground font-semibold"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium text-primary">
          Progress up by 22% this quarter <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Total of 3,610 documents processed — Target: 5,000 by Q4 2025
        </div>
      </CardFooter>
    </Card>
  )
}
