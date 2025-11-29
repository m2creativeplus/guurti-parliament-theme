"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Users, DollarSign, FileText, Calendar } from "lucide-react"
import { mockDonors, mockProjects, mockEvents } from "@/lib/data/mock-dashboard-data"
import Link from "next/link"

export function KPIDashboard() {
  const totalFunding = mockDonors.reduce((sum, donor) => sum + donor.totalFunding, 0)
  const activeProjects = mockProjects.filter((p) => p.status === "active").length
  const upcomingEvents = mockEvents.filter((e) => e.status === "upcoming").length
  const activeDonors = mockDonors.filter((d) => d.commitmentLevel === "high").length

  const kpis = [
    {
      title: "Total Funding",
      value: `$${(totalFunding / 1000000).toFixed(1)}M`,
      change: "+12.5%",
      icon: DollarSign,
      trend: "up",
      description: "Total committed funding",
      href: "/donors",
    },
    {
      title: "Active Projects",
      value: activeProjects.toString(),
      change: "+3",
      icon: FileText,
      trend: "up",
      description: "Currently in progress",
      href: "/strategic-plan",
    },
    {
      title: "Active Donors",
      value: activeDonors.toString(),
      change: "Stable",
      icon: Users,
      trend: "stable",
      description: "High commitment level",
      href: "/donors",
    },
    {
      title: "Upcoming Events",
      value: upcomingEvents.toString(),
      change: "Next 30 days",
      icon: Calendar,
      trend: "neutral",
      description: "Scheduled meetings & visits",
      href: "/international-engagement",
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {kpis.map((kpi) => {
        const Icon = kpi.icon
        return (
          <Link key={kpi.title} href={kpi.href}>
            <Card className="hover:shadow-lg transition-shadow hover-lift cursor-pointer h-full">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{kpi.title}</CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{kpi.value}</div>
                <p className="text-xs text-muted-foreground mt-1">{kpi.description}</p>
                <div className="flex items-center mt-2">
                  {kpi.trend === "up" && <TrendingUp className="h-3 w-3 text-green-600 mr-1" />}
                  <span
                    className={`text-xs font-medium ${kpi.trend === "up" ? "text-green-600" : "text-muted-foreground"}`}
                  >
                    {kpi.change}
                  </span>
                </div>
              </CardContent>
            </Card>
          </Link>
        )
      })}
    </div>
  )
}
