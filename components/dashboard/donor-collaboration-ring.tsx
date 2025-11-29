"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { mockDonors, mockProjects } from "@/lib/data/mock-dashboard-data"
import { Network, Users } from "lucide-react"

export function DonorCollaborationRing() {
  // Calculate collaboration scores between donors based on shared projects
  const collaborations = mockDonors.map((donor1) => {
    const sharedProjects = mockDonors
      .filter((donor2) => donor2.id !== donor1.id)
      .map((donor2) => {
        const shared = mockProjects.filter((p) => p.donor === donor1.name || p.donor === donor2.name).length
        return { donor: donor2.name, shared }
      })
      .filter((c) => c.shared > 0)
      .sort((a, b) => b.shared - a.shared)
      .slice(0, 3)

    return {
      donor: donor1.name,
      collaborations: sharedProjects,
    }
  })

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Network className="h-5 w-5" />
          <CardTitle>Donor Collaboration Network</CardTitle>
        </div>
        <CardDescription>Inter-donor cooperation and joint initiatives</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {collaborations.map((item) => (
            <div key={item.donor} className="p-4 border rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">{item.donor}</h4>
                  <p className="text-xs text-muted-foreground">{item.collaborations.length} active collaborations</p>
                </div>
              </div>

              {item.collaborations.length > 0 ? (
                <div className="space-y-2">
                  {item.collaborations.map((collab, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{collab.donor}</span>
                      <Badge variant="secondary">{collab.shared} shared projects</Badge>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">No active collaborations</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-muted rounded-lg">
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground mb-1">
              {collaborations.reduce((sum, item) => sum + item.collaborations.length, 0)}
            </div>
            <div className="text-xs text-muted-foreground">Total Collaboration Links</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
