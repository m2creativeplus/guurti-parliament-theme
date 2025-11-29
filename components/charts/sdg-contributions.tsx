"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, TrendingUp } from "lucide-react"
import Image from "next/image"

const sdgData = [
  { goal: 1, name: "No Poverty", value: 62.4, color: "#E5243B", icon: "1" },
  { goal: 2, name: "Zero Hunger", value: 48.7, color: "#DDA63A", icon: "2" },
  { goal: 3, name: "Good Health", value: 38.2, color: "#4C9F38", icon: "3" },
  { goal: 4, name: "Quality Education", value: 52.9, color: "#C5192D", icon: "4" },
  { goal: 5, name: "Gender Equality", value: 41.3, color: "#FF3A21", icon: "5" },
  { goal: 6, name: "Clean Water", value: 49.8, color: "#26BDE2", icon: "6" },
  { goal: 7, name: "Affordable Energy", value: 35.6, color: "#FCC30B", icon: "7" },
  { goal: 8, name: "Decent Work", value: 67.2, color: "#A21942", icon: "8" },
  { goal: 9, name: "Industry Innovation", value: 44.5, color: "#FD6925", icon: "9" },
  { goal: 10, name: "Reduced Inequalities", value: 58.1, color: "#DD1367", icon: "10" },
  { goal: 11, name: "Sustainable Cities", value: 71.8, color: "#FD9D24", icon: "11" },
  { goal: 12, name: "Responsible Consumption", value: 32.4, color: "#BF8B2E", icon: "12" },
  { goal: 13, name: "Climate Action", value: 56.9, color: "#3F7E44", icon: "13" },
  { goal: 14, name: "Life Below Water", value: 28.3, color: "#0A97D9", icon: "14" },
  { goal: 15, name: "Life on Land", value: 68.7, color: "#56C02B", icon: "15" },
  { goal: 16, name: "Peace & Justice", value: 82.5, color: "#00689D", icon: "16" },
  { goal: 17, name: "Partnerships", value: 95.2, color: "#19486A", icon: "17" },
]

export function SDGContributions() {
  const maxValue = Math.max(...sdgData.map((d) => d.value))
  const totalContribution = sdgData.reduce((sum, d) => sum + d.value, 0)

  return (
    <Card className="w-full card-premium overflow-hidden">
      <CardHeader className="relative overflow-hidden">
        {/* Creative Banner inspired by UN CEB design */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#4C9F38] via-[#0A97D9] to-[#00689D] opacity-10"></div>
        <div className="absolute top-0 left-0 right-0 h-2 flex">
          {sdgData.map((sdg, idx) => (
            <div key={idx} className="flex-1" style={{ backgroundColor: sdg.color }}></div>
          ))}
        </div>

        <div className="relative z-10 pt-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="relative w-16 h-16">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-11-09%20at%2001.23.43-Ztkvcp9yuCUqs7Dwpxb6oNb7bRhuj7.png"
                  alt="SDG Wheel"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <Badge variant="outline" className="mb-2 bg-background/90">
                  2030 Agenda for Sustainable Development
                </Badge>
                <CardTitle className="text-3xl">SDG Contribution Mapping</CardTitle>
              </div>
            </div>
            <Button variant="outline" size="sm" className="gap-2 bg-transparent">
              <Download className="h-4 w-4" />
              Export Data
            </Button>
          </div>
          <CardDescription className="text-base">
            Total funding allocation across all 17 Sustainable Development Goals • ${totalContribution.toFixed(1)}M
            invested in Somaliland
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent className="p-8">
        {/* SDG Bars */}
        <div className="space-y-3">
          {sdgData.map((sdg) => (
            <div key={sdg.goal} className="group">
              <div className="flex items-center gap-4 mb-2">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg"
                  style={{ backgroundColor: sdg.color }}
                >
                  {sdg.goal}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-sm">
                      Goal {sdg.goal}: {sdg.name}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">${sdg.value}M</span>
                      <Badge variant="outline" className="text-xs">
                        {((sdg.value / totalContribution) * 100).toFixed(1)}%
                      </Badge>
                    </div>
                  </div>
                  <div className="relative h-8 bg-muted/50 rounded-lg overflow-hidden">
                    <div
                      className="absolute inset-y-0 left-0 rounded-lg transition-all duration-500 group-hover:brightness-110 flex items-center justify-end pr-3 text-white text-xs font-semibold shadow-inner"
                      style={{
                        width: `${(sdg.value / maxValue) * 100}%`,
                        backgroundColor: sdg.color,
                      }}
                    >
                      {sdg.value > 40 && (
                        <span className="flex items-center gap-1">
                          <TrendingUp className="h-3 w-3" />
                          {sdg.value}M
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SDG Icons Footer */}
        <div className="mt-8 pt-6 border-t">
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {sdgData.map((sdg) => (
              <div
                key={sdg.goal}
                className="w-10 h-10 rounded flex items-center justify-center text-white font-bold text-xs cursor-pointer hover:scale-110 transition-transform shadow-md"
                style={{ backgroundColor: sdg.color }}
                title={sdg.name}
              >
                {sdg.goal}
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            Aid flows mapped to UN Sustainable Development Goals framework • Data source: MPTF Office Somaliland
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
