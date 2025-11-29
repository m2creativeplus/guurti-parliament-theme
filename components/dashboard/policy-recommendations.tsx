"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { mockPolicyRecommendations } from "@/lib/data/mock-dashboard-data"
import { FileText, AlertCircle, TrendingUp, ExternalLink } from "lucide-react"

export function PolicyRecommendations() {
  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "critical":
        return <AlertCircle className="h-5 w-5 text-red-600" />
      case "high":
        return <TrendingUp className="h-5 w-5 text-orange-600" />
      case "medium":
        return <FileText className="h-5 w-5 text-yellow-600" />
      case "low":
        return <FileText className="h-5 w-5 text-blue-600" />
      default:
        return <FileText className="h-5 w-5 text-gray-600" />
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "critical":
        return "border-red-500 bg-red-500/10"
      case "high":
        return "border-orange-500 bg-orange-500/10"
      case "medium":
        return "border-yellow-500 bg-yellow-500/10"
      case "low":
        return "border-blue-500 bg-blue-500/10"
      default:
        return "border-gray-500 bg-gray-500/10"
    }
  }

  const getStatusVariant = (status: string): "default" | "secondary" | "outline" => {
    switch (status) {
      case "implemented":
        return "default"
      case "approved":
        return "secondary"
      case "review":
        return "outline"
      case "draft":
        return "outline"
      default:
        return "outline"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Policy Recommendations</CardTitle>
        <CardDescription>Strategic policy proposals from Guurti committees</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockPolicyRecommendations.map((policy) => (
            <div key={policy.id} className={`p-4 border-2 rounded-lg ${getPriorityColor(policy.priority)}`}>
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-background border">
                  {getPriorityIcon(policy.priority)}
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-semibold text-foreground">{policy.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        {policy.category} • Submitted by {policy.submittedBy}
                      </p>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <Badge variant={getStatusVariant(policy.status)}>{policy.status}</Badge>
                      <Badge
                        variant="outline"
                        className={
                          policy.priority === "critical"
                            ? "border-red-500 text-red-600"
                            : policy.priority === "high"
                              ? "border-orange-500 text-orange-600"
                              : "border-yellow-500 text-yellow-600"
                        }
                      >
                        {policy.priority}
                      </Badge>
                    </div>
                  </div>

                  <div className="space-y-3 mt-3">
                    <div>
                      <div className="text-xs font-semibold text-muted-foreground mb-1">Summary</div>
                      <p className="text-sm text-foreground">{policy.summary}</p>
                    </div>

                    <div>
                      <div className="text-xs font-semibold text-muted-foreground mb-1">Expected Impact</div>
                      <p className="text-sm text-foreground">{policy.impact}</p>
                    </div>

                    <div>
                      <div className="text-xs font-semibold text-muted-foreground mb-2">Related Donors</div>
                      <div className="flex flex-wrap gap-1">
                        {policy.relatedDonors.map((donor, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {donor}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-4 pt-3 border-t">
                    <div className="text-xs text-muted-foreground">
                      Submitted:{" "}
                      {new Date(policy.submittedDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </div>
                    <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                      View Details
                      <ExternalLink className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-3 bg-muted rounded-lg">
            <div className="text-2xl font-bold text-foreground">{mockPolicyRecommendations.length}</div>
            <div className="text-xs text-muted-foreground">Total Policies</div>
          </div>
          <div className="text-center p-3 bg-red-500/10 border border-red-500 rounded-lg">
            <div className="text-2xl font-bold text-red-600">
              {mockPolicyRecommendations.filter((p) => p.priority === "critical").length}
            </div>
            <div className="text-xs text-muted-foreground">Critical</div>
          </div>
          <div className="text-center p-3 bg-yellow-500/10 border border-yellow-500 rounded-lg">
            <div className="text-2xl font-bold text-yellow-600">
              {mockPolicyRecommendations.filter((p) => p.status === "review").length}
            </div>
            <div className="text-xs text-muted-foreground">In Review</div>
          </div>
          <div className="text-center p-3 bg-green-500/10 border border-green-500 rounded-lg">
            <div className="text-2xl font-bold text-green-600">
              {mockPolicyRecommendations.filter((p) => p.status === "approved").length}
            </div>
            <div className="text-xs text-muted-foreground">Approved</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
