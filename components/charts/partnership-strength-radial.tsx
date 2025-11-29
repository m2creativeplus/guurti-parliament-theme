"use client"

import { Globe, TrendingUp } from "lucide-react"
import { Label, PolarGrid, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { type ChartConfig, ChartContainer } from "@/components/ui/chart"

const chartData = [{ category: "partnerships", strength: 87, fill: "var(--color-partnerships)" }]

const chartConfig = {
  strength: {
    label: "Partnership Strength",
  },
  partnerships: {
    label: "Active Partnerships",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig

export function PartnershipStrengthRadial() {
  return (
    <Card className="flex flex-col card-premium">
      <CardHeader className="items-center pb-0">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-success/10 rounded-lg">
            <Globe className="h-6 w-6 text-success" />
          </div>
          <div className="text-left">
            <CardTitle>Partnership Health</CardTitle>
            <CardDescription>International Cooperation Index</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[250px]">
          <RadialBarChart data={chartData} endAngle={chartData[0].strength * 3.6} innerRadius={80} outerRadius={140}>
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="var(--border)"
              className="first:fill-muted/50 last:fill-background"
              polarRadius={[86, 74]}
            />
            <RadialBar dataKey="strength" background cornerRadius={10} />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <g>
                        <image
                          x={(viewBox.cx || 0) - 30}
                          y={(viewBox.cy || 0) - 50}
                          width="60"
                          height="60"
                          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Seal_of_the_Somaliland_House_of_Elders-2-Ysl63cCzz2QEfxHVOEy86a2GN0DWYq.png"
                        />
                        <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 20}
                            className="fill-foreground text-4xl font-bold"
                          >
                            {chartData[0].strength}%
                          </tspan>
                          <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 40} className="fill-muted-foreground text-sm">
                            Strength
                          </tspan>
                        </text>
                      </g>
                    )
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium text-success">
          Partnership index up by 12% <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Based on 15 active international partnerships — Q1 2025
        </div>
      </CardFooter>
    </Card>
  )
}
