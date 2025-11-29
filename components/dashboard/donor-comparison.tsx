"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { mockDonors } from "@/lib/data/mock-dashboard-data"
import Image from "next/image"

export function DonorComparison() {
  const sortedDonors = [...mockDonors].sort((a, b) => b.totalFunding - a.totalFunding)

  const getCommitmentColor = (level: string) => {
    switch (level) {
      case "high":
        return "bg-green-500"
      case "medium":
        return "bg-yellow-500"
      case "low":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Donor Comparison</CardTitle>
        <CardDescription>Overview of major development partners</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {sortedDonors.map((donor, index) => (
            <div
              key={donor.id}
              className="flex items-center gap-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center gap-3 flex-1">
                <div className="text-2xl font-bold text-muted-foreground w-8">#{index + 1}</div>
                <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center overflow-hidden">
                  <Image
                    src={donor.logo || "/placeholder.svg"}
                    alt={donor.name}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold">{donor.name}</h4>
                    <Badge
                      variant="outline"
                      className={`${getCommitmentColor(donor.commitmentLevel)} text-white border-0`}
                    >
                      {donor.commitmentLevel}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{donor.country}</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-foreground">
                    ${(donor.totalFunding / 1000000).toFixed(1)}M
                  </div>
                  <div className="text-xs text-muted-foreground">Total Funding</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">{donor.activeProjects}</div>
                  <div className="text-xs text-muted-foreground">Active Projects</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">{donor.upcomingMeetings}</div>
                  <div className="text-xs text-muted-foreground">Upcoming Meetings</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-1 max-w-xs">
                {donor.sectors.map((sector) => (
                  <Badge key={sector} variant="secondary" className="text-xs">
                    {sector}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
