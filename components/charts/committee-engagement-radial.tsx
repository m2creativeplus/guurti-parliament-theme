"use client"

import { Award, TrendingUp } from "lucide-react"
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const chartData = [{ committee: "Foreign Affairs", meetings: 45, engagements: 32 }]

const chartConfig = {
  meetings: {
    label: "Committee Meetings",
    color: "var(--chart-1)",
  },
  engagements: {
    label: "International Engagements",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export function CommitteeEngagementRadial() {
  const totalActivities = chartData[0].meetings + chartData[0].engagements

  return (
    <Card className="flex flex-col card-premium">
      <CardHeader className="items-center pb-0">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Award className="h-6 w-6 text-primary" />
          </div>
          <div className="text-left">
            <CardTitle>Committee Activity</CardTitle>
            <CardDescription>Q1 2025 Overview</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex flex-1 items-center pb-0">
        <ChartContainer config={chartConfig} className="mx-auto aspect-square w-full max-w-[250px]">
          <RadialBarChart data={chartData} endAngle={180} innerRadius={80} outerRadius={130}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <g>
                        <image
                          x={(viewBox.cx || 0) - 25}
                          y={(viewBox.cy || 0) - 45}
                          width="50"
                          height="50"
                          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Seal_of_the_Somaliland_House_of_Elders-2-Ysl63cCzz2QEfxHVOEy86a2GN0DWYq.png"
                        />
                        <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 10}
                            className="fill-foreground text-2xl font-bold"
                          >
                            {totalActivities}
                          </tspan>
                          <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 28} className="fill-muted-foreground text-sm">
                            Activities
                          </tspan>
                        </text>
                      </g>
                    )
                  }
                }}
              />
            </PolarRadiusAxis>
            <RadialBar
              dataKey="meetings"
              stackId="a"
              cornerRadius={5}
              fill="var(--color-meetings)"
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="engagements"
              fill="var(--color-engagements)"
              stackId="a"
              cornerRadius={5}
              className="stroke-transparent stroke-2"
            />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium text-primary">
          Engagement up by 18% <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">Foreign Affairs & Int'l Cooperation Committee</div>
      </CardFooter>
    </Card>
  )
}
