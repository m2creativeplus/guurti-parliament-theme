import { Badge } from "@/components/ui/badge"
import { CheckCircle2, XCircle, MinusCircle } from "lucide-react"

interface VotingHistoryTableProps {
  votingRecords: {
    [key: string]: string | number
  }
}

export function VotingHistoryTable({ votingRecords }: VotingHistoryTableProps) {
  const records = Object.entries(votingRecords)

  const getVoteIcon = (vote: string | number) => {
    if (vote === "For") return <CheckCircle2 className="h-5 w-5 text-success" />
    if (vote === "Against") return <XCircle className="h-5 w-5 text-destructive" />
    return <MinusCircle className="h-5 w-5 text-muted-foreground" />
  }

  const getVoteBadge = (vote: string | number) => {
    if (vote === "For")
      return (
        <Badge variant="default" className="bg-success">
          For
        </Badge>
      )
    if (vote === "Against") return <Badge variant="destructive">Against</Badge>
    return <Badge variant="secondary">Abstain</Badge>
  }

  return (
    <div className="space-y-3">
      {records.map(([bill, vote], index) => (
        <div
          key={index}
          className="flex items-center justify-between p-4 rounded-lg border bg-card hover:bg-accent/5 transition-colors"
        >
          <div className="flex items-center gap-3 flex-1">
            {getVoteIcon(vote)}
            <div>
              <h4 className="font-semibold">{bill}</h4>
              <p className="text-sm text-muted-foreground">Legislative Bill</p>
            </div>
          </div>
          <div className="flex items-center gap-3">{getVoteBadge(vote)}</div>
        </div>
      ))}
    </div>
  )
}
