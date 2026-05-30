import { NextRequest, NextResponse } from 'next/server';

// In-memory simple grants seed store for demonstration purposes
let mockGrants = [
  {
    _id: "grant_1",
    org: "UNDP / SIPS",
    title: "Somali Institutional Public Sector (SIPS) Project - Phase II",
    deadline: "2026-08-15",
    amount: "$2.5M allocation",
    matchScore: 94,
    status: "Eligibility Confirmed",
    focus: ["SDG 16", "Institutional Reform", "Digitalization"]
  },
  {
    _id: "grant_2",
    org: "EU NDICI",
    title: "Horn of Africa Democratic Governance & Accountability Fund",
    deadline: "2026-10-01",
    amount: "€4.0M allocation",
    matchScore: 88,
    status: "Requires IPU Alignment",
    focus: ["Legislative Oversight", "Ex-Ante Scrutiny", "Transparency"]
  }
];

export async function GET() {
  return NextResponse.json({ grants: mockGrants });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  
  if (body.action === 'evaluate') {
    const grant = mockGrants.find(g => g._id === body.id);
    return NextResponse.json({
      success: true,
      audit: {
        confirmed: true,
        score: grant ? grant.matchScore : 90,
        message: "Ex-ante IPU guidelines & Somaliland legislative compliance confirmed."
      }
    });
  }

  // Otherwise, handle addGrant / seed
  const newGrant = {
    _id: `grant_${Date.now()}`,
    org: body.org || "Global Fund",
    title: body.title || "Custom Legislative Capacity Program",
    deadline: body.deadline || "2026-12-31",
    amount: body.amount || "$1.0M allocation",
    matchScore: body.matchScore || 90,
    status: body.status || "Evaluating",
    focus: body.focus || ["Governance"]
  };

  mockGrants.push(newGrant);
  return NextResponse.json({ success: true, grant: newGrant });
}
