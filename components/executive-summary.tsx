"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Database, Calendar, Globe, DollarSign, FileText } from "lucide-react"
import { useEffect, useState } from "react"

interface StatCardProps {
  icon: React.ReactNode
  label: string
  value: string
  subtitle: string
  color: string
  delay: number
}

function AnimatedStatCard({ icon, label, value, subtitle, color, delay }: StatCardProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <Card
      className={`card-premium hover-lift transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ backgroundColor: color }}
    >
      <CardContent className="p-8 text-white">
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">{icon}</div>
          <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
            Verified
          </Badge>
        </div>
        <div className="space-y-2">
          <h3 className="text-5xl font-bold font-heading">{value}</h3>
          <p className="text-xl font-semibold">{label}</p>
          <p className="text-sm text-white/80">{subtitle}</p>
        </div>
      </CardContent>
    </Card>
  )
}

export function ExecutiveSummary() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
      <div className="container">
        <div className="text-center mb-12 space-y-4">
          <Badge variant="outline" className="text-base px-4 py-2">
            Executive Summary 2025–2030
          </Badge>
          <h2 className="text-4xl md:text-5xl font-heading font-bold">Golaha Guurtida at a Glance</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-time insights into parliamentary digitalization, international partnerships, and development funding
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <AnimatedStatCard
            icon={<DollarSign className="h-8 w-8 text-white" />}
            label="Funding Secured"
            value="$3.4M"
            subtitle="Total funding from 7 active donors"
            color="#0D9488"
            delay={100}
          />
          <AnimatedStatCard
            icon={<TrendingUp className="h-8 w-8 text-white" />}
            label="Total Opportunities"
            value="27"
            subtitle="Pipeline projects 2026–2030"
            color="#1EB53A"
            delay={200}
          />
          <AnimatedStatCard
            icon={<Database className="h-8 w-8 text-white" />}
            label="Laws Digitized"
            value="7,420"
            subtitle="SDLA Core Database"
            color="#3B82F6"
            delay={300}
          />
          <AnimatedStatCard
            icon={<Calendar className="h-8 w-8 text-white" />}
            label="Engagements"
            value="18"
            subtitle="International events scheduled"
            color="#F59E0B"
            delay={400}
          />
          <AnimatedStatCard
            icon={<FileText className="h-8 w-8 text-white" />}
            label="Publications"
            value="48"
            subtitle="SNPA Archive 2025"
            color="#8B5CF6"
            delay={500}
          />
          <AnimatedStatCard
            icon={<Globe className="h-8 w-8 text-white" />}
            label="Active Donors"
            value="7"
            subtitle="EPD Dashboard 2025"
            color="#D21034"
            delay={600}
          />
        </div>

        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Data verified by M2 Creative & SNPA — Last updated November 2025
          </p>
        </div>
      </div>
    </section>
  )
}
