"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { mockEvents } from "@/lib/data/mock-dashboard-data"
import { Calendar, MapPin, Users, Award, Briefcase } from "lucide-react"

export function EventsTimeline() {
  const sortedEvents = [...mockEvents].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

  const getEventIcon = (type: string) => {
    switch (type) {
      case "meeting":
        return <Briefcase className="h-5 w-5" />
      case "conference":
        return <Users className="h-5 w-5" />
      case "visit":
        return <MapPin className="h-5 w-5" />
      case "ceremony":
        return <Award className="h-5 w-5" />
      default:
        return <Calendar className="h-5 w-5" />
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "border-red-500 bg-red-500/10"
      case "medium":
        return "border-yellow-500 bg-yellow-500/10"
      case "low":
        return "border-blue-500 bg-blue-500/10"
      default:
        return "border-gray-500 bg-gray-500/10"
    }
  }

  const getPriorityBadgeVariant = (priority: string): "default" | "secondary" | "destructive" => {
    switch (priority) {
      case "high":
        return "destructive"
      case "medium":
        return "default"
      case "low":
        return "secondary"
      default:
        return "secondary"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Events & Engagements</CardTitle>
        <CardDescription>Scheduled meetings, visits, and important dates</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {sortedEvents.map((event) => (
            <div
              key={event.id}
              className={`p-4 border-2 rounded-lg ${getPriorityColor(event.priority)} hover:shadow-md transition-shadow`}
            >
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-background border">
                  {getEventIcon(event.type)}
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-semibold text-foreground">{event.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{event.description}</p>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <Badge variant={getPriorityBadgeVariant(event.priority)}>{event.priority}</Badge>
                      <Badge variant="outline">{event.type}</Badge>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {new Date(event.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>{event.participants.length} participants</span>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t">
                    <div className="text-xs text-muted-foreground mb-2">Participants:</div>
                    <div className="flex flex-wrap gap-1">
                      {event.participants.map((participant, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {participant}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="text-center p-3 bg-muted rounded-lg">
            <div className="text-2xl font-bold text-foreground">{sortedEvents.length}</div>
            <div className="text-xs text-muted-foreground">Total Events</div>
          </div>
          <div className="text-center p-3 bg-muted rounded-lg">
            <div className="text-2xl font-bold text-red-600">
              {sortedEvents.filter((e) => e.priority === "high").length}
            </div>
            <div className="text-xs text-muted-foreground">High Priority</div>
          </div>
          <div className="text-center p-3 bg-muted rounded-lg">
            <div className="text-2xl font-bold text-foreground">
              {sortedEvents.filter((e) => e.status === "upcoming").length}
            </div>
            <div className="text-xs text-muted-foreground">Upcoming</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
