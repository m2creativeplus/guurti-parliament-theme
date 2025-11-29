"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { mockDonors } from "@/lib/data/mock-dashboard-data"
import { Calendar, TrendingUp, AlertCircle, CheckCircle } from "lucide-react"

export function DonorTracker() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Donor Engagement Tracker</CardTitle>
        <CardDescription>Real-time monitoring of donor activities and commitments</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockDonors.map((donor) => {
            const engagementScore = donor.commitmentLevel === "high" ? 85 : donor.commitmentLevel === "medium" ? 60 : 35
            const daysSinceEngagement = Math.floor(
              (new Date().getTime() - new Date(donor.lastEngagement).getTime()) / (1000 * 60 * 60 * 24),
            )

            return (
              <div key={donor.id} className="p-4 border rounded-lg space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold">{donor.name}</h4>
                      {donor.commitmentLevel === "high" && <CheckCircle className="h-4 w-4 text-green-600" />}
                      {daysSinceEngagement > 30 && <AlertCircle className="h-4 w-4 text-yellow-600" />}
                    </div>
                    <p className="text-sm text-muted-foreground">{donor.country}</p>
                  </div>
                  <Badge variant={donor.commitmentLevel === "high" ? "default" : "secondary"}>
                    {donor.commitmentLevel} commitment
                  </Badge>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Engagement Score</span>
                    <span className="font-semibold">{engagementScore}%</span>
                  </div>
                  <Progress value={engagementScore} className="h-2" />
                </div>

                <div className="grid grid-cols-3 gap-3 text-sm">
                  <div>
                    <div className="text-muted-foreground text-xs">Last Contact</div>
                    <div className="font-semibold flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {daysSinceEngagement}d ago
                    </div>
                  </div>
                  <div>
                    <div className="text-muted-foreground text-xs">Upcoming</div>
                    <div className="font-semibold flex items-center gap-1">
                      <TrendingUp className="h-3 w-3" />
                      {donor.upcomingMeetings} meetings
                    </div>
                  </div>
                  <div>
                    <div className="text-muted-foreground text-xs">Projects</div>
                    <div className="font-semibold">{donor.activeProjects} active</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 pt-2 border-t">
                  {donor.sectors.map((sector) => (
                    <Badge key={sector} variant="outline" className="text-xs">
                      {sector}
                    </Badge>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-6 p-4 bg-muted rounded-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-green-600">
                {mockDonors.filter((d) => d.commitmentLevel === "high").length}
              </div>
              <div className="text-xs text-muted-foreground">High Commitment</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-600">
                {
                  mockDonors.filter((d) => {
                    const days = Math.floor(
                      (new Date().getTime() - new Date(d.lastEngagement).getTime()) / (1000 * 60 * 60 * 24),
                    )
                    return days > 30
                  }).length
                }
              </div>
              <div className="text-xs text-muted-foreground">Need Follow-up</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground">
                {mockDonors.reduce((sum, d) => sum + d.upcomingMeetings, 0)}
              </div>
              <div className="text-xs text-muted-foreground">Scheduled Meetings</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground">
                {mockDonors.reduce((sum, d) => sum + d.activeProjects, 0)}
              </div>
              <div className="text-xs text-muted-foreground">Total Projects</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
