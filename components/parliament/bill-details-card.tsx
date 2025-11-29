import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, XCircle, MinusCircle } from "lucide-react"

interface BillDetailsCardProps {
  bill: string
  stats: {
    bill: string
    for: number
    against: number
    abstain: number
    total: number
  }
}

export function BillDetailsCard({ bill, stats }: BillDetailsCardProps) {
  const forPercentage = Math.round((stats.for / stats.total) * 100)
  const againstPercentage = Math.round((stats.against / stats.total) * 100)
  const abstainPercentage = Math.round((stats.abstain / stats.total) * 100)

  const passed = forPercentage > 50

  return (
    <Card className="card-premium">
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <CardTitle className="text-xl">Bill Details</CardTitle>
          <Badge variant={passed ? "default" : "destructive"} className={passed ? "bg-success" : ""}>
            {passed ? "Passed" : "Failed"}
          </Badge>
        </div>
        <CardDescription>{bill}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-success" />
                <span className="font-semibold">Voted For</span>
              </div>
              <span className="text-2xl font-bold">{stats.for}</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-success h-2 rounded-full transition-all" style={{ width: `${forPercentage}%` }} />
            </div>
            <p className="text-sm text-muted-foreground">{forPercentage}% of total votes</p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <XCircle className="h-5 w-5 text-destructive" />
                <span className="font-semibold">Voted Against</span>
              </div>
              <span className="text-2xl font-bold">{stats.against}</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div
                className="bg-destructive h-2 rounded-full transition-all"
                style={{ width: `${againstPercentage}%` }}
              />
            </div>
            <p className="text-sm text-muted-foreground">{againstPercentage}% of total votes</p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MinusCircle className="h-5 w-5 text-muted-foreground" />
                <span className="font-semibold">Abstained</span>
              </div>
              <span className="text-2xl font-bold">{stats.abstain}</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div
                className="bg-muted-foreground h-2 rounded-full transition-all"
                style={{ width: `${abstainPercentage}%` }}
              />
            </div>
            <p className="text-sm text-muted-foreground">{abstainPercentage}% of total votes</p>
          </div>
        </div>

        <div className="pt-4 border-t">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Total Votes Cast</span>
            <span className="font-semibold text-lg">{stats.total}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
