"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Network, ArrowRight } from "lucide-react"

export function PartnersNetwork() {
  const connections = [
    { from: "Somaliland Guurti", to: "European Union", type: "governance", strength: "strong" },
    { from: "Somaliland Guurti", to: "United Kingdom", type: "health", strength: "strong" },
    { from: "Somaliland Guurti", to: "United States", type: "security", strength: "medium" },
    { from: "Somaliland Guurti", to: "UAE", type: "infrastructure", strength: "strong" },
    { from: "Somaliland Guurti", to: "African Development Bank", type: "multilateral", strength: "medium" },
    { from: "Somaliland Guurti", to: "World Health Organization", type: "health", strength: "strong" },
  ]

  const getStrengthColor = (strength: string) => {
    switch (strength) {
      case "strong":
        return "border-green-500 bg-green-500/10"
      case "medium":
        return "border-yellow-500 bg-yellow-500/10"
      case "weak":
        return "border-red-500 bg-red-500/10"
      default:
        return "border-gray-500 bg-gray-500/10"
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Network className="h-5 w-5" />
          <CardTitle>Partnership Network</CardTitle>
        </div>
        <CardDescription>Visualization of institutional relationships and collaboration strength</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {connections.map((connection, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 p-4 border-2 rounded-lg ${getStrengthColor(connection.strength)} transition-all hover:shadow-md`}
            >
              <div className="flex-1 flex items-center gap-3">
                <div className="font-semibold text-sm min-w-[140px]">{connection.from}</div>
                <ArrowRight className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <div className="font-semibold text-sm min-w-[140px]">{connection.to}</div>
              </div>

              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">
                  {connection.type}
                </Badge>
                <Badge
                  variant="secondary"
                  className={
                    connection.strength === "strong"
                      ? "bg-green-500 text-white"
                      : connection.strength === "medium"
                        ? "bg-yellow-500 text-white"
                        : "bg-red-500 text-white"
                  }
                >
                  {connection.strength}
                </Badge>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-muted rounded-lg">
          <h4 className="font-semibold mb-3">Network Statistics</h4>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-green-600">
                {connections.filter((c) => c.strength === "strong").length}
              </div>
              <div className="text-xs text-muted-foreground">Strong Connections</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-600">
                {connections.filter((c) => c.strength === "medium").length}
              </div>
              <div className="text-xs text-muted-foreground">Medium Connections</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground">{connections.length}</div>
              <div className="text-xs text-muted-foreground">Total Connections</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
