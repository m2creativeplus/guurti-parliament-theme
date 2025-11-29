"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const donors = [
  {
    name: "UNDP",
    logo: "/undp-logo.png",
    funding: "$45M",
    position: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
  },
  { name: "EU", logo: "/eu-flag.png", funding: "$38M", position: "top-1/4 right-0 translate-x-1/2" },
  { name: "World Bank", logo: "/worldbank-logo.png", funding: "$32M", position: "bottom-1/4 right-0 translate-x-1/2" },
  {
    name: "AfDB",
    logo: "/afdb-logo.png",
    funding: "$18M",
    position: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
  },
  { name: "UK Aid", logo: "/uk-flag.png", funding: "$8M", position: "bottom-1/4 left-0 -translate-x-1/2" },
  { name: "UAE", logo: "/uae-flag.png", funding: "$5M", position: "top-1/4 left-0 -translate-x-1/2" },
  { name: "Turkey", logo: "/turkey-flag.png", funding: "$2M", position: "top-1/3 right-1/4" },
]

export function DonorWheel3D() {
  return (
    <Card className="card-premium">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-2xl">International Donor Network</CardTitle>
            <CardDescription>Funding distribution and partnership ecosystem</CardDescription>
          </div>
          <Badge variant="secondary">7 Active Donors</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative w-full aspect-square max-w-2xl mx-auto">
          {/* Central Hub */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="relative w-48 h-48 rounded-full bg-gradient-to-br from-primary to-secondary p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                <div className="text-center">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Emblem_of_Somaliland.svg-KA2VMS1RBGBiZwHBJKbe1LbHH7N0oc.png"
                    alt="Somaliland Emblem"
                    width={80}
                    height={80}
                    className="mx-auto mb-2"
                  />
                  <p className="text-sm font-bold">Guurti</p>
                  <p className="text-xs text-muted-foreground">JSL</p>
                </div>
              </div>
            </div>
          </div>

          {/* Donor Nodes */}
          {donors.map((donor, index) => (
            <div key={donor.name} className={`absolute ${donor.position} z-20`}>
              <div className="relative group">
                {/* Connection Line */}
                <div className="absolute top-1/2 left-1/2 w-32 h-0.5 bg-gradient-to-r from-primary/50 to-transparent origin-left -rotate-45 group-hover:from-primary transition-colors" />

                {/* Donor Card */}
                <div className="relative w-24 h-24 rounded-full bg-white dark:bg-card border-2 border-primary/20 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center">
                  <div className="text-center p-2">
                    <div className="w-12 h-12 mx-auto mb-1 relative">
                      <Image src={donor.logo || "/placeholder.svg"} alt={donor.name} fill className="object-contain" />
                    </div>
                    <p className="text-xs font-semibold">{donor.funding}</p>
                  </div>
                </div>

                {/* Hover Tooltip */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="bg-popover text-popover-foreground px-3 py-2 rounded-lg shadow-lg text-xs whitespace-nowrap">
                    <p className="font-semibold">{donor.name}</p>
                    <p className="text-muted-foreground">{donor.funding} committed</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Orbital Rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border-2 border-dashed border-primary/10 animate-spin-slow" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-primary/5" />
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {donors.map((donor) => (
            <div
              key={donor.name}
              className="flex items-center gap-2 p-3 border rounded-lg hover:bg-muted/50 transition-colors"
            >
              <div className="w-8 h-8 relative flex-shrink-0">
                <Image src={donor.logo || "/placeholder.svg"} alt={donor.name} fill className="object-contain" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold truncate">{donor.name}</p>
                <p className="text-xs text-muted-foreground">{donor.funding}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
