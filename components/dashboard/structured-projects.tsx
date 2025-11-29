"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { mockProjects } from "@/lib/data/mock-dashboard-data"
import { useFilters } from "@/contexts/filter-context"
import { Calendar, MapPin, Users, DollarSign, ExternalLink, CheckCircle2, AlertCircle, Info } from "lucide-react"

export function StructuredProjects() {
  const { filters } = useFilters()

  const filteredProjects = mockProjects.filter((project) => {
    if (filters.thematicArea !== "all" && project.sector !== filters.thematicArea) {
      return false
    }
    if (filters.donor && project.donor !== filters.donor) {
      return false
    }
    if (filters.status && project.status !== filters.status) {
      return false
    }
    return true
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500"
      case "completed":
        return "bg-blue-500"
      case "planned":
        return "bg-yellow-500"
      case "delayed":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  const getStatusVariant = (status: string): "default" | "secondary" | "destructive" | "outline" => {
    switch (status) {
      case "active":
        return "default"
      case "completed":
        return "secondary"
      case "delayed":
        return "destructive"
      default:
        return "outline"
    }
  }

  const getVerificationBadge = (status?: "✅" | "⚠️" | "❗") => {
    if (!status) return null

    const config = {
      "✅": { icon: CheckCircle2, color: "text-green-600 dark:text-green-400", label: "Verified" },
      "⚠️": { icon: AlertCircle, color: "text-yellow-600 dark:text-yellow-400", label: "Partial" },
      "❗": { icon: Info, color: "text-blue-600 dark:text-blue-400", label: "Pipeline" },
    }

    const { icon: Icon, color, label } = config[status]

    return (
      <div className="flex items-center gap-1 text-xs">
        <Icon className={`h-3 w-3 ${color}`} />
        <span className={color}>{label}</span>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">Parliamentary Support Projects</h2>
        <Badge variant="outline">{filteredProjects.length} Projects</Badge>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <Card key={project.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between gap-2">
                <CardTitle className="text-lg leading-tight">{project.title}</CardTitle>
                <div className="flex flex-col gap-1 items-end">
                  <Badge variant={getStatusVariant(project.status)} className="whitespace-nowrap">
                    {project.status}
                  </Badge>
                  {getVerificationBadge(project.verificationStatus)}
                </div>
              </div>
              <CardDescription className="line-clamp-2">{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-semibold">{project.progress}%</span>
                </div>
                <Progress value={project.progress} className="h-2" />
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <DollarSign className="h-4 w-4" />
                  <span className="font-medium">${(project.budget / 1000000).toFixed(1)}M</span>
                  <span className="text-xs">(${(project.spent / 1000000).toFixed(1)}M spent)</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>{project.beneficiaries.toLocaleString()} beneficiaries</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>
                    {new Date(project.startDate).getFullYear()} - {new Date(project.endDate).getFullYear()}
                  </span>
                </div>
              </div>

              {project.relevance && (
                <div className="pt-2 border-t">
                  <p className="text-xs text-muted-foreground italic">{project.relevance}</p>
                </div>
              )}

              <div className="pt-2 border-t flex items-center justify-between gap-2">
                <div className="flex items-center justify-between flex-1">
                  <span className="text-xs text-muted-foreground">Donor</span>
                  <Badge variant="outline" className="text-xs">
                    {project.donor}
                  </Badge>
                </div>
                {project.sourceUrl && (
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                    title="View source"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-muted-foreground">No projects match the current filters</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
