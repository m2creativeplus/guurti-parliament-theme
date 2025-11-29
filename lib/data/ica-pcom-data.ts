// ICA PCOM Grants - Somaliland Digital Legislative Archive (SDLA)
// Clean data extracted from parliamentary engagement research

export interface ICAProjectDetails {
  id: string
  title: string
  lead: string
  startDate: string
  duration: string
  durationDays: number
  totalEstimatedGrant: string
  purpose: string
  eventStructure: Array<{
    component: string
    description: string
    leadPartner: string
  }>
  grantComponents: Array<{
    stream: string
    budget: number
    description: string
  }>
  deliverables: string[]
  partners: Array<{
    partner: string
    role: string
    visibilityElement: string
  }>
  timeline: Array<{
    date: string
    milestone: string
  }>
  expectedImpact: string[]
}

export const icaPcomProject: ICAProjectDetails = {
  id: "ICA-PCOM-2026-SDLA",
  title: "ICA PCOM Grants - Lead: SDLA",
  lead: "House of Elders (Golaha Guurtida Jamhuuriyadda Somaliland)",
  startDate: "2026-03-01",
  duration: "466 days",
  durationDays: 466,
  totalEstimatedGrant: "USD 148,000 - 172,000",
  purpose:
    "To enable the Somaliland Digital Legislative Archive (SDLA) to access the ICA PCOM Grants for digitisation, metadata, and public access innovation - positioning Somaliland's House of Elders as a global model for legislative heritage preservation and digital transparency.",
  eventStructure: [
    {
      component: "Opening Session - Hargeisa",
      description:
        "Formal announcement of Somaliland's nomination for ICA PCOM 2026 cycle; unveiling of SDLA Phase II concept note.",
      leadPartner: "Speaker of the Guurti, ICA Regional Representative, M2 Creative",
    },
    {
      component: 'Panel Forum: "Transparency is Sovereignty"',
      description: "Policy dialogue on digital legislative heritage and governance innovation.",
      leadPartner: "House of Elders + UNDP Somaliland + EU Delegation",
    },
    {
      component: "Archive Showcase Exhibition",
      description:
        "Curated by SNPA - featuring original legal documents (1950s-1990s), digitized samples, metadata interface prototypes.",
      leadPartner: "SNPA + M2 Creative",
    },
    {
      component: "Workshop - Metadata & Standards",
      description: "Training for Guurti and parliament clerks on ICA ISAD(G), Dublin Core, and Akoma Ntoso schema.",
      leadPartner: "ICA & AfricanLII technical mentors",
    },
    {
      component: "Press & Diplomatic Reception",
      description: "Media launch + donor briefing + memorandum signing for PCOM application.",
      leadPartner: "Guurti EPD + M2 Creative Protocol Team",
    },
  ],
  grantComponents: [
    {
      stream: "Digitisation & Preservation Kit",
      budget: 58000,
      description: "High-resolution scanners, OCR software, cloud backup system (ISO 27001 compliant).",
    },
    {
      stream: "Metadata & Portal Development",
      budget: 35000,
      description:
        "Design and development of bilingual (Somali-English) digital legislative portal + metadata registry using Akoma Ntoso.",
    },
    {
      stream: "Capacity & Training Fund",
      budget: 22000,
      description: "ICA-certified training for archivists, Guurti clerks, and SNPA technicians.",
    },
    {
      stream: "Public Access & Outreach",
      budget: 18000,
      description:
        'Public education materials, policy briefs, and travelling heritage exhibit ("From Xeer to Constitution").',
    },
    {
      stream: "Monitoring & Evaluation",
      budget: 7000,
      description: "Mid-term and final impact assessment, ICA standard reporting templates.",
    },
    {
      stream: "Communications and Visibility",
      budget: 10000,
      description:
        "Official event branding, media kits, heritage brochure, and digital assets aligned with Somaliland flag and emblem.",
    },
  ],
  deliverables: [
    "SDLA Phase II Portal Launch (May 2027) - Online archive with 10,000+ records",
    "Metadata Handbook v1.0 - Somaliland-adapted ICA metadata manual",
    "Heritage Exhibit Tour (3 Cities) - Hargeisa, Berbera, Borama",
    "ICA PCOM Final Report and Replication Framework - template for regional parliaments to emulate",
  ],
  partners: [
    {
      partner: "ICA Programme Commission (PCOM)",
      role: "Grant and technical oversight",
      visibilityElement: "Logo co-branding + joint press release",
    },
    {
      partner: "UNDP Somaliland",
      role: "Co-funding and digital capacity support",
      visibilityElement: "UNDP logo on training materials",
    },
    {
      partner: "EU Delegation - NDICI Global Europe",
      role: "Visibility and parallel grant dialogue",
      visibilityElement: '"EU-Somaliland Digital Governance Partnership" banner',
    },
    {
      partner: "M2 Creative & Consultant",
      role: "Event and communications lead",
      visibilityElement: "Event branding + design system integration",
    },
    {
      partner: "SNPA",
      role: "Digitisation and exhibition production",
      visibilityElement: 'Heritage print materials "Produced 100% in Somaliland"',
    },
    {
      partner: "Guurti External Partnerships Desk (EPD)",
      role: "Diplomatic liaison + donor relations",
      visibilityElement: "Official Guurti seal and Somaliland flag display",
    },
  ],
  timeline: [
    { date: "Mar 1 2026", milestone: "Official launch of SDLA ICA PCOM Grants Project" },
    { date: "Apr-Jun 2026", milestone: "Procurement and training of digitisation equipment" },
    { date: "Jul 2026 - Feb 2027", milestone: "Metadata creation and archive indexing" },
    { date: "Mar 2027", milestone: "Public heritage exhibit and open data portal pilot" },
    { date: "Jun 2027", milestone: "ICA final evaluation and grant close-out report" },
  ],
  expectedImpact: [
    "Institutional Transformation: Establishes the House of Elders as the custodian of Somaliland's legal memory",
    "Global Visibility: Positions SDLA within ICA's international knowledge network",
    "Sustainability: Foundation for SDLA Phase III (2028 - Digital Heritage & e-Gazette Integration)",
  ],
}

// ICA membership pathway information
export interface MembershipPathway {
  level: string
  institution: string
  role: string
  benchmark: string
}

export const membershipPathways: MembershipPathway[] = [
  {
    level: "National",
    institution: "Somaliland National Printing Agency (SNPA)",
    role: "Apply for ICA/ESARBICA Institutional Membership (~€100/yr) to serve as official applicant and fiduciary lead.",
    benchmark: "Rwanda Senate-National Archives partnership (2021)",
  },
  {
    level: "Regional",
    institution: "ESARBICA (Eastern & Southern Africa Regional Branch of ICA)",
    role: "Endorsement and technical mentorship; co-validation of metadata and archival standards.",
    benchmark: "Zanzibar Archives (Observer Member, 2016)",
  },
  {
    level: "International",
    institution: "AfricanLII (UCT) & British Library Endangered Archives Programme (EAP)",
    role: "External endorsement for transparency, open data and heritage access.",
    benchmark: "Uganda Parliament-EAP cooperation (2019)",
  },
  {
    level: "Institutional Peer",
    institution:
      "Parliament of Uganda Archives & Research Services or South African Parliamentary Communication Services",
    role: "Peer MoU for capacity exchange, digital archiving training, and visibility.",
    benchmark: "Lesotho-UK Lords MoU (2015)",
  },
]

// Guurti vs UK House of Lords comparison data
export interface ParliamentComparison {
  dimension: string
  ukHouseOfLords: string
  somalilandGuurti: string
}

export const parliamentComparison: ParliamentComparison[] = [
  {
    dimension: "Origin & Historical Basis",
    ukHouseOfLords:
      "Originates from medieval aristocracy (Peers and Clergy). Formalized under the Magna Carta and evolved into a revising chamber within a constitutional monarchy.",
    somalilandGuurti:
      "Established in 1993 at the Boorama Conference, merging traditional Somali clan authority (xeer) with modern state-building. Functions as an upper house rooted in customary and Islamic law.",
  },
  {
    dimension: "Membership Composition",
    ukHouseOfLords:
      "789 members (as of 2024): life peers, 92 hereditary peers, and 26 bishops. Members are appointed by the Crown on advice of the Prime Minister or House of Lords Appointments Commission.",
    somalilandGuurti:
      "82 members - traditional elders appointed through clan-based selection, not elections. Membership has not been renewed since 1993. Seats distributed among clans for social representation and conflict resolution.",
  },
  {
    dimension: "Appointment vs. Election",
    ukHouseOfLords:
      "Entirely appointed (no direct elections). Emphasis on expertise, senior public service, and religious leadership.",
    somalilandGuurti:
      "Entirely appointed through clan nominations, reflecting traditional legitimacy rather than electoral representation.",
  },
  {
    dimension: "Formal Legislative Powers",
    ukHouseOfLords:
      "Can delay (not veto) legislation. The elected House of Commons can override Lords' objections under the Parliament Acts (1911, 1949). Focus on revising and scrutinizing laws.",
    somalilandGuurti:
      "Constitutionally, reviews laws from the House of Representatives; cannot permanently block bills but can delay them. Holds special authority over religion, culture, and security-related laws. Can extend mandates during national crises.",
  },
  {
    dimension: "De facto Power",
    ukHouseOfLords: "Moderate - exercises 'soft power' through moral persuasion and expert review.",
    somalilandGuurti:
      "High - possesses de facto crisis powers, having repeatedly extended presidential and parliamentary terms. Serves as a stabilizing but anti-reform mechanism.",
  },
  {
    dimension: "Representation",
    ukHouseOfLords:
      "Represents societal expertise, religion, and legacy; not territorially or demographically representative.",
    somalilandGuurti:
      "Represents clan structures, preserving traditional balance and peace. Provides representation for pastoral and rural elders.",
  },
  {
    dimension: "Legitimacy",
    ukHouseOfLords:
      "Derived from long institutional history and gradual reforms (life peers system, appointments commission).",
    somalilandGuurti:
      "High moral and traditional legitimacy, but low democratic legitimacy due to lack of renewal and elections since 1993.",
  },
  {
    dimension: "Governance & Transparency",
    ukHouseOfLords:
      "Strong administrative support; clear standing orders, committee structure, and digital transparency (Hansard, open data).",
    somalilandGuurti:
      "Operates under internal by-laws (Xeer-hoosaad) defining roles of leadership, committees, and procedures. Limited digital visibility and administrative transparency.",
  },
  {
    dimension: "Digital Visibility",
    ukHouseOfLords: "Advanced e-parliament systems; open data portals and AI-assisted records.",
    somalilandGuurti:
      "Minimal digital infrastructure; proceedings and laws are not publicly accessible online. Digital modernization is identified as a reform priority under NDP III.",
  },
  {
    dimension: "Functional Role in State Stability",
    ukHouseOfLords:
      "Revising and deliberative role - ensures slow, reasoned legislation and protects constitutional continuity.",
    somalilandGuurti:
      "Conflict resolution, crisis mediation, and national stability are its primary mandates. Has historically prevented civil conflict through traditional consensus mechanisms.",
  },
  {
    dimension: "Challenges / Reform Needs",
    ukHouseOfLords:
      "Criticized for being unelected and lacking diversity. Ongoing debate about replacing with an elected or partly elected chamber.",
    somalilandGuurti:
      "Needs renewal or reappointment to restore legitimacy. Reform proposals emphasize term limits, transparency, and digital modernization while preserving traditional mediation role.",
  },
]
