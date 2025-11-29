"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { mockPartnerships } from "@/lib/data/mock-dashboard-data"
import { Building2, Globe, TrendingUp } from "lucide-react"
import Image from "next/image"

export function PartnersGrid() {
  const getTypeColor = (type: string) => {
    switch (type) {
      case "bilateral":
        return "bg-blue-500"
      case "multilateral":
        return "bg-purple-500"
      case "ngo":
        return "bg-green-500"
      case "private":
        return "bg-orange-500"
      default:
        return "bg-gray-500"
    }
  }

  const getStatusVariant = (status: string): "default" | "secondary" | "outline" => {
    switch (status) {
      case "active":
        return "default"
      case "pending":
        return "secondary"
      case "inactive":
        return "outline"
      default:
        return "outline"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>International Partners</CardTitle>
        <CardDescription>Strategic partnerships and collaborations</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {mockPartnerships.map((partner) => (
            <Card key={partner.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center overflow-hidden">
                      <Image
                        src={partner.logo || "/placeholder.svg"}
                        alt={partner.organization}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-base leading-tight">{partner.organization}</CardTitle>
                      <CardDescription className="text-xs">{partner.country}</CardDescription>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className={`${getTypeColor(partner.type)} text-white border-0`}>
                    {partner.type}
                  </Badge>
                  <Badge variant={getStatusVariant(partner.status)}>{partner.status}</Badge>
                </div>

                <div className="flex flex-wrap gap-1">
                  {partner.focus.map((area) => (
                    <Badge key={area} variant="secondary" className="text-xs">
                      {area}
                    </Badge>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2 border-t">
                  <div>
                    <div className="text-xs text-muted-foreground">Projects</div>
                    <div className="text-lg font-bold">{partner.projects}</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Total Value</div>
                    <div className="text-lg font-bold">${(partner.totalValue / 1000000).toFixed(0)}M</div>
                  </div>
                </div>

                <div className="text-xs text-muted-foreground pt-2 border-t">
                  Established: {new Date(partner.established).getFullYear()}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-3 bg-muted rounded-lg">
            <Building2 className="h-5 w-5 mx-auto mb-2 text-muted-foreground" />
            <div className="text-2xl font-bold">{mockPartnerships.length}</div>
            <div className="text-xs text-muted-foreground">Total Partners</div>
          </div>
          <div className="text-center p-3 bg-muted rounded-lg">
            <TrendingUp className="h-5 w-5 mx-auto mb-2 text-muted-foreground" />
            <div className="text-2xl font-bold">{mockPartnerships.filter((p) => p.status === "active").length}</div>
            <div className="text-xs text-muted-foreground">Active</div>
          </div>
          <div className="text-center p-3 bg-muted rounded-lg">
            <Globe className="h-5 w-5 mx-auto mb-2 text-muted-foreground" />
            <div className="text-2xl font-bold">{mockPartnerships.reduce((sum, p) => sum + p.projects, 0)}</div>
            <div className="text-xs text-muted-foreground">Total Projects</div>
          </div>
          <div className="text-center p-3 bg-muted rounded-lg">
            <div className="text-2xl font-bold">
              ${(mockPartnerships.reduce((sum, p) => sum + p.totalValue, 0) / 1000000).toFixed(0)}M
            </div>
            <div className="text-xs text-muted-foreground">Combined Value</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
