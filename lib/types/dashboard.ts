export interface Donor {
  id: string
  name: string
  country: string
  logo: string
  totalFunding: number
  activeProjects: number
  sectors: string[]
  commitmentLevel: "high" | "medium" | "low"
  lastEngagement: string
  upcomingMeetings: number
}

export interface Project {
  id: string
  title: string
  description: string
  donor: string
  sector: string
  budget: number
  spent: number
  status: "active" | "completed" | "planned" | "delayed"
  startDate: string
  endDate: string
  progress: number
  location: string
  beneficiaries: number
  milestones: Milestone[]
  verificationStatus?: "✅" | "⚠️" | "❗"
  sourceUrl?: string | null
  relevance?: string
}

export interface Milestone {
  id: string
  title: string
  date: string
  status: "completed" | "pending" | "overdue"
  description: string
}

export interface Partnership {
  id: string
  organization: string
  type: "bilateral" | "multilateral" | "ngo" | "private"
  country: string
  logo: string
  focus: string[]
  established: string
  status: "active" | "pending" | "inactive"
  projects: number
  totalValue: number
}

export interface Event {
  id: string
  title: string
  type: "meeting" | "conference" | "visit" | "ceremony" | "deadline"
  date: string
  location: string
  participants: string[]
  status: "upcoming" | "completed" | "cancelled"
  priority: "high" | "medium" | "low"
  description: string
}

export interface PolicyRecommendation {
  id: string
  title: string
  category: string
  priority: "critical" | "high" | "medium" | "low"
  status: "draft" | "review" | "approved" | "implemented"
  submittedBy: string
  submittedDate: string
  summary: string
  impact: string
  relatedDonors: string[]
}

export interface BudgetData {
  sector: string
  allocated: number
  spent: number
  committed: number
  available: number
}

export interface FundingTrend {
  period: string
  amount: number
  donor: string
  sector: string
}

export type ThematicArea =
  | "governance"
  | "infrastructure"
  | "health"
  | "education"
  | "agriculture"
  | "security"
  | "environment"
  | "all"

export interface FilterState {
  thematicArea: ThematicArea
  dateRange: { start: string; end: string } | null
  donor: string | null
  status: string | null
}
