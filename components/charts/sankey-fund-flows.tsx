"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Maximize2, Download, Info } from "lucide-react"

export function SankeyFundFlows() {
  const [selectedFlow, setSelectedFlow] = useState<string | null>(null)

  const donors = [
    { id: "germany", name: "Germany", value: 45.2, color: "#2C3E50", flag: "🇩🇪" },
    { id: "sweden", name: "Sweden", value: 38.7, color: "#34495E", flag: "🇸🇪" },
    { id: "uk", name: "United Kingdom", value: 52.3, color: "#5D6D7E", flag: "🇬🇧" },
    { id: "netherlands", name: "Netherlands", value: 41.5, color: "#7F8C8D", flag: "🇳🇱" },
    { id: "norway", name: "Norway", value: 35.9, color: "#F39C12", flag: "🇳🇴" },
    { id: "denmark", name: "Denmark", value: 28.4, color: "#E67E22", flag: "🇩🇰" },
    { id: "eu", name: "European Union", value: 67.8, color: "#D35400", flag: "🇪🇺" },
    { id: "switzerland", name: "Switzerland", value: 22.1, color: "#E74C3C", flag: "🇨🇭" },
    { id: "canada", name: "Canada", value: 19.6, color: "#C0392B", flag: "🇨🇦" },
    { id: "spain", name: "Spain", value: 15.8, color: "#A93226", flag: "🇪🇸" },
    { id: "others", name: "Other Contributors", value: 32.7, color: "#922B21", flag: "🌍" },
  ]

  const mechanisms = [
    { id: "pbf", name: "Peacebuilding Fund", value: 85.4, color: "#BDC3C7" },
    { id: "shf", name: "Somalia Humanitarian Fund", value: 145.2, color: "#F39C12" },
    { id: "smwtf", name: "Somalia Multi Window Trust Fd", value: 98.7, color: "#E67E22" },
    { id: "jsdg", name: "Joint SDG Fund", value: 42.3, color: "#3498DB" },
    { id: "ids", name: "Internal Displacement Solution", value: 28.9, color: "#1ABC9C" },
    { id: "cptf", name: "Counter Piracy Trust Fund", value: 18.6, color: "#16A085" },
    { id: "jplg", name: "JP Somalia Loc Gov & Decentral", value: 35.1, color: "#E74C3C" },
    { id: "unsv", name: "UN Action Agst Sexual Violence", value: 12.4, color: "#C0392B" },
    { id: "jprl", name: "JP Somaliland Rule of Law", value: 8.7, color: "#8E44AD" },
    { id: "untf", name: "UN Trust Fd for Human Security", value: 15.2, color: "#9B59B6" },
    { id: "other", name: "Other Funds", value: 9.5, color: "#34495E" },
  ]

  const totalDonorValue = donors.reduce((sum, d) => sum + d.value, 0)
  const totalMechanismValue = mechanisms.reduce((sum, m) => sum + m.value, 0)

  return (
    <Card className="w-full card-premium overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-primary/10 via-accent/5 to-background pb-6">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="bg-background/80">
                Multi-Partner Trust Fund
              </Badge>
              <Badge className="bg-primary/90">2008-2025</Badge>
            </div>
            <CardTitle className="text-2xl">Multi-Stakeholder Partnerships</CardTitle>
            <CardDescription className="text-base mt-2">
              Fund flows from international donors through pooled mechanisms to Somalia
            </CardDescription>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" className="h-8 w-8 bg-transparent">
              <Info className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="h-8 w-8 bg-transparent">
              <Download className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="h-8 w-8 bg-transparent">
              <Maximize2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-8">
        {/* Sankey Diagram */}
        <div className="relative h-[600px] flex items-center gap-8">
          {/* Donors Column (Left) */}
          <div className="flex flex-col justify-center gap-1 w-48">
            {donors.map((donor, idx) => {
              const height = (donor.value / totalDonorValue) * 500
              return (
                <div
                  key={donor.id}
                  className="relative group cursor-pointer transition-all hover:brightness-110"
                  style={{ height: `${height}px`, minHeight: "24px" }}
                  onMouseEnter={() => setSelectedFlow(donor.id)}
                  onMouseLeave={() => setSelectedFlow(null)}
                >
                  <div
                    className="absolute inset-0 rounded-l-lg flex items-center px-3 text-white font-medium text-sm"
                    style={{ backgroundColor: donor.color }}
                  >
                    <span className="text-xs truncate">
                      {donor.flag} {donor.name}
                    </span>
                  </div>
                  <div className="absolute -right-2 top-1/2 -translate-y-1/2 bg-background border border-border rounded px-2 py-0.5 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                    ${donor.value}M
                  </div>
                </div>
              )
            })}
          </div>

          {/* Flow Lines (Center) */}
          <div className="flex-1 relative h-full">
            <svg className="absolute inset-0 w-full h-full" style={{ overflow: "visible" }}>
              <defs>
                <linearGradient id="flow-gradient-warm" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#BDC3C7" stopOpacity="0.7" />
                  <stop offset="25%" stopColor="#F39C12" stopOpacity="0.7" />
                  <stop offset="50%" stopColor="#E67E22" stopOpacity="0.7" />
                  <stop offset="75%" stopColor="#E74C3C" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#3498DB" stopOpacity="0.7" />
                </linearGradient>
              </defs>

              {/* Create curved flow paths */}
              {donors.map((donor, dIdx) => {
                const donorY = donors.slice(0, dIdx).reduce((sum, d) => sum + (d.value / totalDonorValue) * 500, 0)
                const donorHeight = (donor.value / totalDonorValue) * 500

                return mechanisms.map((mech, mIdx) => {
                  const mechY = mechanisms
                    .slice(0, mIdx)
                    .reduce((sum, m) => sum + (m.value / totalMechanismValue) * 500, 0)
                  const mechHeight = (mech.value / totalMechanismValue) * 500

                  // Calculate proportional flow
                  const flowPortion = donor.value * (mech.value / totalMechanismValue)
                  const strokeWidth = (flowPortion / totalDonorValue) * 500

                  if (strokeWidth < 1) return null

                  const startY = donorY + donorHeight / 2
                  const endY = mechY + mechHeight / 2

                  return (
                    <path
                      key={`${donor.id}-${mech.id}`}
                      d={`M 0,${startY} C 150,${startY} 150,${endY} 300,${endY}`}
                      fill="none"
                      stroke="url(#flow-gradient-warm)"
                      strokeWidth={Math.max(strokeWidth, 2)}
                      opacity={selectedFlow === donor.id || selectedFlow === mech.id ? 1 : 0.5}
                      className="transition-all duration-300"
                    />
                  )
                })
              })}
            </svg>
          </div>

          {/* Mechanisms Column (Middle-Right) */}
          <div className="flex flex-col justify-center gap-1 w-64">
            {mechanisms.map((mech, idx) => {
              const height = (mech.value / totalMechanismValue) * 500
              return (
                <div
                  key={mech.id}
                  className="relative group cursor-pointer transition-all hover:brightness-110"
                  style={{ height: `${height}px`, minHeight: "20px" }}
                  onMouseEnter={() => setSelectedFlow(mech.id)}
                  onMouseLeave={() => setSelectedFlow(null)}
                >
                  <div
                    className="absolute inset-0 flex items-center px-3 text-white font-medium text-xs"
                    style={{ backgroundColor: mech.color }}
                  >
                    <span className="truncate">{mech.name}</span>
                  </div>
                  <div className="absolute -right-2 top-1/2 -translate-y-1/2 bg-background border border-border rounded px-2 py-0.5 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                    ${mech.value}M
                  </div>
                </div>
              )
            })}
          </div>

          {/* Final Flow to Somalia */}
          <div className="relative h-full flex items-center w-24">
            <svg className="absolute inset-0 w-full h-full" style={{ overflow: "visible" }}>
              <defs>
                <linearGradient id="flow-to-somalia" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3498DB" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#5DADE2" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#0D9488" stopOpacity="0.9" />
                </linearGradient>
              </defs>
              <path
                d="M 0,250 C 60,250 60,300 120,300"
                fill="none"
                stroke="url(#flow-to-somalia)"
                strokeWidth="80"
                opacity="0.9"
              />
              <path
                d="M 0,100 C 60,100 60,300 120,300"
                fill="none"
                stroke="url(#flow-to-somalia)"
                strokeWidth="60"
                opacity="0.8"
              />
              <path
                d="M 0,400 C 60,400 60,300 120,300"
                fill="none"
                stroke="url(#flow-to-somalia)"
                strokeWidth="60"
                opacity="0.8"
              />
            </svg>
          </div>

          {/* Somaliland Destination (Right) */}
          <div className="w-48 h-full flex items-center">
            <div className="w-full h-96 bg-gradient-to-br from-primary via-primary/90 to-primary/70 rounded-r-lg flex flex-col items-center justify-center text-white shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Flag-map_of_Somaliland.svg-ErQXmkZP7fZL56ztLjixERV54VC2jl.png')] bg-center bg-contain bg-no-repeat opacity-20"></div>
              <div className="relative z-10 text-center px-4">
                <h3 className="text-3xl font-heading font-bold mb-2">SOMALILAND</h3>
                <p className="text-sm opacity-90 mb-4">Republic of Somaliland</p>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-3">
                  <p className="text-xs opacity-75 mb-1">Total Funding</p>
                  <p className="text-2xl font-bold">${totalMechanismValue.toFixed(1)}M</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-8 pt-6 border-t">
          <p className="text-sm text-muted-foreground mb-4">
            Thanks to the contributions of partners to pooled funds administered by the MPTF Office, resources are
            channeled to SOMALILAND to advance the country priorities. The resources from different partners are pooled
            promoting joint action and multi-stakeholder partnerships.
          </p>
          <div className="flex items-center gap-6 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-gradient-to-r from-[#2C3E50] to-[#922B21]"></div>
              <span className="text-muted-foreground">Donor Countries & Organizations</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-gradient-to-r from-[#BDC3C7] via-[#E67E22] to-[#9B59B6]"></div>
              <span className="text-muted-foreground">Pooled Fund Mechanisms</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-gradient-to-r from-primary to-primary/70"></div>
              <span className="text-muted-foreground">Final Recipient Country</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
