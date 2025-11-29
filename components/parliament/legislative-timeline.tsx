import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Clock, AlertCircle } from "lucide-react"

const legislativeEvents = [
  {
    date: "Nov 15, 2025",
    title: "Climate Change Act Amendment",
    status: "passed",
    description: "Passed with 78% majority",
  },
  {
    date: "Nov 10, 2025",
    title: "Digital Services Tax Bill",
    status: "debate",
    description: "Currently in committee review",
  },
  {
    date: "Nov 5, 2025",
    title: "NHS Funding Increase",
    status: "passed",
    description: "Passed unanimously",
  },
  {
    date: "Oct 28, 2025",
    title: "Education Reform Bill",
    status: "passed",
    description: "Passed with amendments",
  },
  {
    date: "Oct 20, 2025",
    title: "Housing Development Act",
    status: "debate",
    description: "Second reading scheduled",
  },
  {
    date: "Oct 15, 2025",
    title: "Workers Rights Protection",
    status: "rejected",
    description: "Failed to pass (45% support)",
  },
]

const statusConfig = {
  passed: {
    icon: CheckCircle2,
    color: "text-success",
    bg: "bg-success/10",
    badge: "success",
    label: "Passed",
  },
  debate: {
    icon: Clock,
    color: "text-accent",
    bg: "bg-accent/10",
    badge: "secondary",
    label: "In Debate",
  },
  rejected: {
    icon: AlertCircle,
    color: "text-destructive",
    bg: "bg-destructive/10",
    badge: "destructive",
    label: "Rejected",
  },
}

export function LegislativeTimeline() {
  return (
    <div className="space-y-6">
      {legislativeEvents.map((event, index) => {
        const config = statusConfig[event.status as keyof typeof statusConfig]
        const Icon = config.icon

        return (
          <div key={index} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className={`h-10 w-10 rounded-full ${config.bg} flex items-center justify-center`}>
                <Icon className={`h-5 w-5 ${config.color}`} />
              </div>
              {index < legislativeEvents.length - 1 && <div className="w-0.5 h-full bg-border mt-2" />}
            </div>

            <div className="flex-1 pb-8">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-lg">{event.title}</h3>
                    <Badge variant={config.badge as any}>{config.label}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{event.date}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{event.description}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
