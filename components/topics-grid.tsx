"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Database, TrendingUp, Building2, Users, Globe, BarChart3 } from "lucide-react"
import Link from "next/link"

const topics = [
  {
    title: "Data and Statistics",
    icon: Database,
    color: "from-orange-500 to-orange-600",
    href: "/dashboard",
  },
  {
    title: "Donor Pipeline",
    icon: TrendingUp,
    color: "from-cyan-500 to-cyan-600",
    href: "/dashboard#donors",
  },
  {
    title: "SDLA Archive",
    icon: Building2,
    color: "from-blue-600 to-blue-700",
    href: "/sdla",
  },
  {
    title: "Committees",
    icon: Users,
    color: "from-red-600 to-red-700",
    href: "/committees/foreign-affairs",
  },
  {
    title: "International Engagements",
    icon: Globe,
    color: "from-amber-500 to-amber-600",
    href: "/dashboard#engagements",
  },
  {
    title: "Reports & Insights",
    icon: BarChart3,
    color: "from-purple-600 to-purple-700",
    href: "/dashboard#reports",
  },
]

export function TopicsGrid() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Explore Topics</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Navigate through key areas of parliamentary governance and international cooperation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic) => {
            const Icon = topic.icon
            return (
              <Link key={topic.title} href={topic.href}>
                <Card className={`h-full card-premium hover-lift cursor-pointer group overflow-hidden relative`}>
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${topic.color} opacity-90 group-hover:opacity-100 transition-opacity`}
                  />
                  <CardContent className="relative z-10 p-12 text-white">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm group-hover:scale-110 transition-transform">
                        <Icon className="h-12 w-12" />
                      </div>
                      <h3 className="text-2xl font-bold font-heading">{topic.title}</h3>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
