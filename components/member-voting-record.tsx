"use client"

import { Badge } from "@/components/ui/badge"
import { CheckCircle2, XCircle, MinusCircle } from "lucide-react"

interface MemberVotingRecordProps {
  votingRecords: {
    [key: string]: string | number
  }
}

export function MemberVotingRecord({ votingRecords }: MemberVotingRecordProps) {
  const getVoteIcon = (vote: string | number) => {
    if (vote === "For") return <CheckCircle2 className="h-5 w-5 text-green-600" />
    if (vote === "Against") return <XCircle className="h-5 w-5 text-red-600" />
    if (vote === "Abstain") return <MinusCircle className="h-5 w-5 text-gray-600" />
    return null
  }

  const getVoteBadge = (vote: string | number) => {
    if (vote === "For") {
      return <Badge className="bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20">For</Badge>
    }
    if (vote === "Against") {
      return <Badge className="bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/20">Against</Badge>
    }
    if (vote === "Abstain") {
      return <Badge className="bg-gray-500/10 text-gray-700 dark:text-gray-400 border-gray-500/20">Abstain</Badge>
    }
    return <Badge variant="secondary">{vote}</Badge>
  }

  return (
    <div className="space-y-3">
      {Object.entries(votingRecords).map(([bill, vote]) => (
        <div
          key={bill}
          className="flex items-center justify-between p-4 rounded-lg border bg-card hover:bg-muted/50 transition-colors"
        >
          <div className="flex items-center gap-3 flex-1">
            {getVoteIcon(vote)}
            <span className="font-medium">{bill}</span>
          </div>
          {getVoteBadge(vote)}
        </div>
      ))}
    </div>
  )
}
