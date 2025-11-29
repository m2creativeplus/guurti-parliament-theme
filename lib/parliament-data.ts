// UK Parliament Member Data and Types

export interface ParliamentMember {
  name: string
  party: string
  constituency: string
  votingRecords: {
    [key: string]: string | number
  }
}

export const parliamentMembers: ParliamentMember[] = [
  {
    name: "Rishi Sunak",
    party: "Conservative",
    constituency: "Richmond and Northallerton",
    votingRecords: {
      "Asylum and Immigration Bill": "For",
      "Climate Change Act": "For",
      "NHS Funding Bill": "For",
      "Education Reform": "For",
      "Housing Development": "For",
      "Transport Infrastructure": "For",
      "Digital Services Tax": "For",
      "Workers Rights": "Against",
      "Environmental Protection": "For",
      "Trade Agreements": "For",
    },
  },
  {
    name: "Keir Starmer",
    party: "Labour",
    constituency: "Holborn and St Pancras",
    votingRecords: {
      "Asylum and Immigration Bill": "Against",
      "Climate Change Act": "For",
      "NHS Funding Bill": "For",
      "Education Reform": "For",
      "Housing Development": "For",
      "Transport Infrastructure": "For",
      "Digital Services Tax": "For",
      "Workers Rights": "For",
      "Environmental Protection": "For",
      "Trade Agreements": "For",
    },
  },
  {
    name: "Ed Davey",
    party: "Liberal Democrat",
    constituency: "Kingston and Surbiton",
    votingRecords: {
      "Asylum and Immigration Bill": "Against",
      "Climate Change Act": "For",
      "NHS Funding Bill": "For",
      "Education Reform": "For",
      "Housing Development": "For",
      "Transport Infrastructure": "For",
      "Digital Services Tax": "Against",
      "Workers Rights": "For",
      "Environmental Protection": "For",
      "Trade Agreements": "Against",
    },
  },
  {
    name: "Ian Blackford",
    party: "Scottish National Party",
    constituency: "Ross, Skye and Lochaber",
    votingRecords: {
      "Asylum and Immigration Bill": "Against",
      "Climate Change Act": "For",
      "NHS Funding Bill": "For",
      "Education Reform": "Against",
      "Housing Development": "For",
      "Transport Infrastructure": "For",
      "Digital Services Tax": "For",
      "Workers Rights": "For",
      "Environmental Protection": "For",
      "Trade Agreements": "Against",
    },
  },
  {
    name: "Jeremy Corbyn",
    party: "Independent",
    constituency: "Islington North",
    votingRecords: {
      "Asylum and Immigration Bill": "Against",
      "Climate Change Act": "For",
      "NHS Funding Bill": "For",
      "Education Reform": "For",
      "Housing Development": "For",
      "Transport Infrastructure": "Against",
      "Digital Services Tax": "For",
      "Workers Rights": "For",
      "Environmental Protection": "For",
      "Trade Agreements": "Against",
    },
  },
  {
    name: "Theresa May",
    party: "Conservative",
    constituency: "Maidenhead",
    votingRecords: {
      "Asylum and Immigration Bill": "For",
      "Climate Change Act": "For",
      "NHS Funding Bill": "For",
      "Education Reform": "For",
      "Housing Development": "Against",
      "Transport Infrastructure": "For",
      "Digital Services Tax": "For",
      "Workers Rights": "Against",
      "Environmental Protection": "For",
      "Trade Agreements": "For",
    },
  },
  {
    name: "Angela Rayner",
    party: "Labour",
    constituency: "Ashton-under-Lyne",
    votingRecords: {
      "Asylum and Immigration Bill": "Against",
      "Climate Change Act": "For",
      "NHS Funding Bill": "For",
      "Education Reform": "For",
      "Housing Development": "For",
      "Transport Infrastructure": "For",
      "Digital Services Tax": "For",
      "Workers Rights": "For",
      "Environmental Protection": "For",
      "Trade Agreements": "For",
    },
  },
  {
    name: "Priti Patel",
    party: "Conservative",
    constituency: "Witham",
    votingRecords: {
      "Asylum and Immigration Bill": "For",
      "Climate Change Act": "Against",
      "NHS Funding Bill": "For",
      "Education Reform": "For",
      "Housing Development": "For",
      "Transport Infrastructure": "For",
      "Digital Services Tax": "Against",
      "Workers Rights": "Against",
      "Environmental Protection": "Against",
      "Trade Agreements": "For",
    },
  },
]

// Get unique parties
export function getParties(): string[] {
  return Array.from(new Set(parliamentMembers.map((m) => m.party)))
}

// Get unique constituencies
export function getConstituencies(): string[] {
  return Array.from(new Set(parliamentMembers.map((m) => m.constituency))).sort()
}

// Get unique bills/topics
export function getBills(): string[] {
  if (parliamentMembers.length === 0) return []
  return Object.keys(parliamentMembers[0].votingRecords)
}

// Get party statistics
export function getPartyStats() {
  const parties = getParties()
  return parties.map((party) => ({
    party,
    count: parliamentMembers.filter((m) => m.party === party).length,
    percentage: Math.round(
      (parliamentMembers.filter((m) => m.party === party).length / parliamentMembers.length) * 100,
    ),
  }))
}

// Get voting statistics for a specific bill
export function getBillStats(bill: string) {
  const votes = parliamentMembers.map((m) => m.votingRecords[bill])
  const forVotes = votes.filter((v) => v === "For").length
  const againstVotes = votes.filter((v) => v === "Against").length
  const abstained = votes.filter((v) => v === "Abstain").length

  return {
    bill,
    for: forVotes,
    against: againstVotes,
    abstain: abstained,
    total: parliamentMembers.length,
  }
}

// Search members
export function searchMembers(query: string): ParliamentMember[] {
  const lowerQuery = query.toLowerCase()
  return parliamentMembers.filter(
    (m) =>
      m.name.toLowerCase().includes(lowerQuery) ||
      m.party.toLowerCase().includes(lowerQuery) ||
      m.constituency.toLowerCase().includes(lowerQuery),
  )
}

// Filter by party
export function filterByParty(party: string): ParliamentMember[] {
  return parliamentMembers.filter((m) => m.party === party)
}
