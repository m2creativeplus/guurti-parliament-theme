"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { mockEvents, mockProjects } from "@/lib/data/mock-dashboard-data"
import { AlertTriangle, Clock, Calendar } from "lucide-react"

export function CriticalDeadlines() {
  const upcomingDeadlines = [
    ...mockEvents
      .filter((e) => e.status === "upcoming")
      .map((e) => ({
        id: e.id,
        title: e.title,
        date: e.date,
        type: "event" as const,
        priority: e.priority,
        description: e.description,
      })),
    ...mockProjects
      .filter((p) => p.status === "active")
      .flatMap((p) =>
        p.milestones
          .filter((m) => m.status === "pending")
          .map((m) => ({
            id: m.id,
            title: m.title,
            date: m.date,
            type: "milestone" as const,
            priority: "medium" as const,
            description: `${p.title} - ${m.description}`,
          })),
      ),
  ]
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 8) // Show only next 8 deadlines

  const getDaysUntil = (date: string) => {
    const days = Math.ceil((new Date(date).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))
    return days
  }

  const getUrgencyColor = (days: number) => {
    if (days < 0) return "bg-red-500"
    if (days <= 7) return "bg-red-500"
    if (days <= 14) return "bg-yellow-500"
    if (days <= 30) return "bg-blue-500"
    return "bg-gray-500"
  }

  const getUrgencyText = (days: number) => {
    if (days < 0) return "Overdue"
    if (days === 0) return "Today"
    if (days === 1) return "Tomorrow"
    if (days <= 7) return `${days} days`
    if (days <= 30) return `${days} days`
    return `${Math.ceil(days / 7)} weeks`
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-yellow-600" />
          <CardTitle>Critical Deadlines</CardTitle>
        </div>
        <CardDescription>Upcoming deadlines requiring attention</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {upcomingDeadlines.map((deadline) => {
            const daysUntil = getDaysUntil(deadline.date)
            return (
              <div
                key={deadline.id}
                className="flex items-center gap-4 p-3 border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div
                  className={`flex items-center justify-center w-16 h-16 rounded-lg ${getUrgencyColor(daysUntil)} text-white font-bold text-center flex-col`}
                >
                  <div className="text-xs">{getUrgencyText(daysUntil)}</div>
                  {daysUntil >= 0 && <Clock className="h-4 w-4 mt-1" />}
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between mb-1">
                    <h4 className="font-semibold text-foreground">{deadline.title}</h4>
                    <Badge variant="outline" className="ml-2">
                      {deadline.type}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">{deadline.description}</p>
                  <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {new Date(deadline.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="text-center p-3 bg-red-500/10 border border-red-500 rounded-lg">
            <div className="text-2xl font-bold text-red-600">
              {upcomingDeadlines.filter((d) => getDaysUntil(d.date) <= 7).length}
            </div>
            <div className="text-xs text-muted-foreground">This Week</div>
          </div>
          <div className="text-center p-3 bg-yellow-500/10 border border-yellow-500 rounded-lg">
            <div className="text-2xl font-bold text-yellow-600">
              {
                upcomingDeadlines.filter((d) => {
                  const days = getDaysUntil(d.date)
                  return days > 7 && days <= 14
                }).length
              }
            </div>
            <div className="text-xs text-muted-foreground">Next 2 Weeks</div>
          </div>
          <div className="text-center p-3 bg-blue-500/10 border border-blue-500 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">
              {upcomingDeadlines.filter((d) => getDaysUntil(d.date) > 14).length}
            </div>
            <div className="text-xs text-muted-foreground">Later</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
