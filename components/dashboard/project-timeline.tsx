"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { mockProjects } from "@/lib/data/mock-dashboard-data"
import { Calendar, CheckCircle, Clock, AlertCircle } from "lucide-react"

export function ProjectTimeline() {
  const allMilestones = mockProjects
    .flatMap((project) =>
      project.milestones.map((milestone) => ({
        ...milestone,
        projectTitle: project.title,
        projectId: project.id,
        donor: project.donor,
      })),
    )
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case "pending":
        return <Clock className="h-4 w-4 text-yellow-600" />
      case "overdue":
        return <AlertCircle className="h-4 w-4 text-red-600" />
      default:
        return <Clock className="h-4 w-4 text-gray-600" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "border-green-500 bg-green-500/10"
      case "pending":
        return "border-yellow-500 bg-yellow-500/10"
      case "overdue":
        return "border-red-500 bg-red-500/10"
      default:
        return "border-gray-500 bg-gray-500/10"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Project Timeline</CardTitle>
        <CardDescription>Key milestones across all active projects</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative space-y-4">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />

          {allMilestones.map((milestone, index) => (
            <div key={milestone.id} className="relative flex gap-4">
              {/* Timeline dot */}
              <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-background border-2 border-border">
                {getStatusIcon(milestone.status)}
              </div>

              {/* Content */}
              <div className={`flex-1 p-4 border-2 rounded-lg ${getStatusColor(milestone.status)}`}>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">{milestone.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{milestone.projectTitle}</p>
                  </div>
                  <Badge variant="outline" className="ml-2">
                    {milestone.status}
                  </Badge>
                </div>

                <p className="text-sm text-muted-foreground mb-3">{milestone.description}</p>

                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {new Date(milestone.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {milestone.donor}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="text-center p-3 bg-green-500/10 border border-green-500 rounded-lg">
            <div className="text-2xl font-bold text-green-600">
              {allMilestones.filter((m) => m.status === "completed").length}
            </div>
            <div className="text-xs text-muted-foreground">Completed</div>
          </div>
          <div className="text-center p-3 bg-yellow-500/10 border border-yellow-500 rounded-lg">
            <div className="text-2xl font-bold text-yellow-600">
              {allMilestones.filter((m) => m.status === "pending").length}
            </div>
            <div className="text-xs text-muted-foreground">Pending</div>
          </div>
          <div className="text-center p-3 bg-red-500/10 border border-red-500 rounded-lg">
            <div className="text-2xl font-bold text-red-600">
              {allMilestones.filter((m) => m.status === "overdue").length}
            </div>
            <div className="text-xs text-muted-foreground">Overdue</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
