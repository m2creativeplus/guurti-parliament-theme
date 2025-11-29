// Strategic planning data for External Partnerships Desk (EPD)

export interface DonorOpportunity {
  name: string
  window: string
  focus: string
  owner: string
  status: "Prospecting" | "ToR Drafting" | "Pipeline" | "Concept Note" | "Contact Made" | "High Fit" | "Drafting"
}

export interface EngagementEvent {
  year: number
  title: string
  track: "Parliamentary" | "Diplomatic" | "Academic / Governance" | "Donor" | "Heritage"
  purpose: string
  status: string
}

export interface WebsiteSection {
  id: string
  name: string
  description: string
}

export interface SDLATask {
  label: string
  status: "In progress" | "Pending" | "Planned" | "Completed"
}

export const donorOpportunities: DonorOpportunity[] = [
  {
    name: "UNDP Governance & Rule of Law (Somaliland-facing windows)",
    window: "2026–2028",
    focus: "Digital parliament, SDLA, committee capacity",
    owner: "EPD – International Cooperation Desk",
    status: "Prospecting",
  },
  {
    name: "EU NDICI – Global Europe (Digital governance / parliaments)",
    window: "2026 call – Q2",
    focus: "Legislative transparency, open data, archive hosting",
    owner: "Guurti Secretariat + M2 Creative",
    status: "ToR Drafting",
  },
  {
    name: "World Bank GovTech / PFM Governance window",
    window: "2027–2030",
    focus: "Legislative information systems, HR/data integration with CSC",
    owner: "Guurti SDLA Team",
    status: "Pipeline",
  },
  {
    name: "Google.org – AI for Global Goals",
    window: "Annual",
    focus: "AI-powered legal/archival search for SDLA",
    owner: "M2 Creative & Consultant",
    status: "Concept Note",
  },
  {
    name: "Open Society Foundations / Luminate",
    window: "Rolling",
    focus: "Parliamentary openness, public participation, anti-corruption",
    owner: "EPD – Public Engagement",
    status: "Contact Made",
  },
  {
    name: "AfricanLII / Laws.Africa – Legal Heritage",
    window: "2026",
    focus: "1884–1991 protectorate & 1991–present Somaliland legal continuity",
    owner: "SDLA Core",
    status: "High Fit",
  },
  {
    name: "British Library EAP / UCLA MEAP",
    window: "2026–2029",
    focus: "Historic parliamentary & protectorate material digitisation",
    owner: "SNPA Archival Partner",
    status: "Drafting",
  },
]

export const engagementEvents: EngagementEvent[] = [
  {
    year: 2026,
    title: "28th Conference of Speakers and Presiding Officers of the Commonwealth (CSPOC)",
    track: "Parliamentary",
    purpose: "Parliamentary leadership and legislative innovation showcase",
    status: "Scheduled - January 2026, Delhi, India",
  },
  {
    year: 2026,
    title: "Joint CPA Asia & South-East Asia Regional Conference",
    track: "Parliamentary",
    purpose: "Parliamentary innovation and regional cooperation",
    status: "Scheduled - February 3-7, 2026, Karachi, Pakistan",
  },
  {
    year: 2026,
    title: "152nd Inter-Parliamentary Union (IPU) Assembly",
    track: "Parliamentary",
    purpose: "Global parliamentary diplomacy and SDLA visibility",
    status: "Scheduled - April 15-19, 2026, Istanbul, Türkiye",
  },
  {
    year: 2026,
    title: "27th International Conference on Digital Government Research (dg.o 2026)",
    track: "Academic / Governance",
    purpose: "Showcase SDLA as digital governance model",
    status: "Scheduled - June 1-4, 2026, Omaha, Nebraska, USA",
  },
  {
    year: 2026,
    title: "Global Climate Change Conference 2026",
    track: "Parliamentary",
    purpose: "Climate legislation and environmental policy",
    status: "Scheduled - September 9-10, 2026",
  },
  {
    year: 2026,
    title: "Financial Times Africa Summit",
    track: "Diplomatic",
    purpose: "Economic and trade diplomacy for African leaders",
    status: "Scheduled - October 21-22, 2026, London, UK",
  },
  {
    year: 2027,
    title: "UNDP / IDEA Digital Parliament Labs (Africa)",
    track: "Academic / Governance",
    purpose: "Show SDLA as 'Transparency is Sovereignty' model",
    status: "High Value - Q1 2027",
  },
  {
    year: 2028,
    title: "EU Digital Public Administration & Open Data Forums",
    track: "Donor",
    purpose: "Funding for Guurti website revamp + archive cloud",
    status: "Pipeline - Q3 2028",
  },
  {
    year: 2029,
    title: "Regional Horn of Africa Legislative Dialogue (IGAD window 2029–2030)",
    track: "Diplomatic",
    purpose: "Functional cooperation without recognition",
    status: "Plan - Q4 2029",
  },
  {
    year: 2030,
    title: "Somaliland @40 Parliamentary Heritage Exhibition",
    track: "Heritage",
    purpose: "SNPA + Guurti public diplomacy & youth outreach",
    status: "Flagship - May 2030",
  },
]

export const websiteSections: WebsiteSection[] = [
  {
    id: "about",
    name: "About the House of Elders",
    description: "Mandate, history (Borama 1993 → Const. 2001), leadership, bylaws 2021.",
  },
  {
    id: "members",
    name: "Members & Committees",
    description: "82 elders, standing committee, security, social affairs, justice & religion.",
  },
  {
    id: "sdla",
    name: "Somaliland Digital Legislative Archive (SDLA)",
    description: "Searchable laws 1884–present, Akoma Ntoso structure, bilingual, owned by Guurti.",
  },
  {
    id: "media",
    name: "Media & Communication",
    description: "Press, campaigns, IPU social media style, livestream, public participation.",
  },
  {
    id: "donors",
    name: "External Partnerships Desk (EPD)",
    description: "Donor pipeline, parliamentary cooperation, MoUs, missions.",
  },
  {
    id: "resources",
    name: "Resources & Publications",
    description: "Bylaws, reports, calendars, SNPA-designed heritage materials.",
  },
]

export const sdlaTasks: SDLATask[] = [
  { label: "Phase 1 (2025–2026): acquisition & metadata", status: "In progress" },
  { label: "Phase 2 (2026–2027): legal verification (MoJ/AG)", status: "Pending" },
  { label: "Phase 3 (2027–2028): public portal + WCAG 2.1 + search", status: "Planned" },
  { label: "Phase 4 (2028–2030): donor-backed AI/legal research layer", status: "Planned" },
]

export const strategicObjectives = {
  shortTerm: [
    "Establish External Partnerships Desk (EPD) operational framework",
    "Launch SDLA Phase 1 with initial document digitization",
    "Secure observer status at IPU and CPA assemblies",
    "Complete website redesign with WCAG 2.1 AA compliance",
  ],
  mediumTerm: [
    "Secure UNDP and EU NDICI funding for digital parliament initiatives",
    "Complete SDLA Phase 2 with legal verification",
    "Host first international parliamentary delegation",
    "Establish MoUs with 5+ international parliamentary bodies",
  ],
  longTerm: [
    "Launch full SDLA public portal with AI-powered search",
    "Achieve technical participation status in regional parliamentary forums",
    "Host Somaliland @40 Parliamentary Heritage Exhibition",
    "Establish Guurti as model for legislative transparency in Horn of Africa",
  ],
}
