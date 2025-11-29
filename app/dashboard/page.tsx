import { FilterProvider } from "@/contexts/filter-context"
import { KPIDashboard } from "@/components/dashboard/kpi-dashboard"
import { ThematicFilterBar } from "@/components/dashboard/thematic-filter-bar"
import { StructuredProjects } from "@/components/dashboard/structured-projects"
import { DonorComparison } from "@/components/dashboard/donor-comparison"
import { BudgetAnalysis } from "@/components/dashboard/budget-analysis"
import { DonorWheel } from "@/components/dashboard/donor-wheel"
import { FundingTrends } from "@/components/dashboard/funding-trends"
import { PartnersGrid } from "@/components/dashboard/partners-grid"
import { PartnersNetwork } from "@/components/dashboard/partners-network"
import { DonorTracker } from "@/components/dashboard/donor-tracker"
import { ProjectTimeline } from "@/components/dashboard/project-timeline"
import { EventsTimeline } from "@/components/dashboard/events-timeline"
import { CriticalDeadlines } from "@/components/dashboard/critical-deadlines"
import { PolicyRecommendations } from "@/components/dashboard/policy-recommendations"
import { DonorCollaborationRing } from "@/components/dashboard/donor-collaboration-ring"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { DonorActivityRadar } from "@/components/charts/donor-activity-radar"
import { CommitteeEngagementRadial } from "@/components/charts/committee-engagement-radial"
import { FundingDistributionPie } from "@/components/charts/funding-distribution-pie"
import { LegislativeProgressBar } from "@/components/charts/legislative-progress-bar"
import { PartnershipStrengthRadial } from "@/components/charts/partnership-strength-radial"

export default function DashboardPage() {
  return (
    <FilterProvider>
      <SiteHeader />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <Button variant="ghost" asChild>
              <Link href="/" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>

          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">Golaha Guurtida Dashboard</h1>
            <p className="text-muted-foreground text-lg">International Partnerships & Development Tracking</p>
          </div>

          <div className="space-y-6">
            <KPIDashboard />
            <ThematicFilterBar />

            <div className="space-y-6">
              <h2 className="text-2xl font-heading font-bold">Visual Analytics</h2>

              <div className="grid gap-6 md:grid-cols-2">
                <DonorActivityRadar />
                <FundingDistributionPie />
              </div>

              <LegislativeProgressBar />

              <div className="grid gap-6 md:grid-cols-2">
                <CommitteeEngagementRadial />
                <PartnershipStrengthRadial />
              </div>
            </div>

            <StructuredProjects />
            <DonorComparison />

            <div className="grid gap-6 md:grid-cols-2">
              <BudgetAnalysis />
              <DonorWheel />
            </div>

            <FundingTrends />
            <PartnersGrid />
            <PartnersNetwork />
            <DonorTracker />
            <ProjectTimeline />
            <CriticalDeadlines />
            <EventsTimeline />
            <PolicyRecommendations />
            <DonorCollaborationRing />
          </div>
        </div>
      </div>
    </FilterProvider>
  )
}
