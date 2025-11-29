"use client"

import { Button } from "@/components/ui/button"
import { useFilters } from "@/contexts/filter-context"
import type { ThematicArea } from "@/lib/types/dashboard"
import { Building2, Heart, GraduationCap, Wheat, Shield, Leaf, Scale, Grid3x3 } from "lucide-react"

const thematicAreas: { value: ThematicArea; label: string; icon: any }[] = [
  { value: "all", label: "All Sectors", icon: Grid3x3 },
  { value: "governance", label: "Governance", icon: Scale },
  { value: "infrastructure", label: "Infrastructure", icon: Building2 },
  { value: "health", label: "Health", icon: Heart },
  { value: "education", label: "Education", icon: GraduationCap },
  { value: "agriculture", label: "Agriculture", icon: Wheat },
  { value: "security", label: "Security", icon: Shield },
  { value: "environment", label: "Environment", icon: Leaf },
]

export function ThematicFilterBar() {
  const { filters, setThematicArea } = useFilters()

  return (
    <div className="bg-card border rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-foreground">Filter by Sector</h3>
        <span className="text-xs text-muted-foreground">
          Current: {thematicAreas.find((a) => a.value === filters.thematicArea)?.label}
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        {thematicAreas.map((area) => {
          const Icon = area.icon
          const isActive = filters.thematicArea === area.value
          return (
            <Button
              key={area.value}
              variant={isActive ? "default" : "outline"}
              size="sm"
              onClick={() => setThematicArea(area.value)}
              className="flex items-center gap-2"
            >
              <Icon className="h-4 w-4" />
              {area.label}
            </Button>
          )
        })}
      </div>
    </div>
  )
}
