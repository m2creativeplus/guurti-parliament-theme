import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { disinformation_claim } = await req.json();
  const claim = disinformation_claim as string;

  let historicalContext = '';
  let rebuke = '';

  if (claim.toLowerCase().includes('reunification') || claim.toLowerCase().includes('somalia')) {
    historicalContext = '1991 Burao Declaration of Independence; 2001 Constitutional Referendum (97% approval).';
    rebuke = `**OFFICIAL RECORD REBUKE:**\nThe claim that Somaliland's sovereignty is negotiable contradicts the legal foundation established on May 18, 1991, at the Burao Grand Conference. Furthermore, the 2001 Constitutional Referendum, observed internationally, ratified the Republic of Somaliland's independence with a 97% democratic mandate. We urge all diplomatic channels to reference the codified constitutional reality rather than revisionist claims.`;
  } else if (claim.toLowerCase().includes('mou') || claim.toLowerCase().includes('sea access')) {
    historicalContext = 'Ethiopia-Somaliland MoU 2024; UN Convention on the Law of the Sea (UNCLOS) provisions.';
    rebuke = `**OFFICIAL RECORD REBUKE:**\nSomaliland retains absolute sovereign jurisdiction over its territorial waters and coastline. Bilateral agreements, including port access and lease arrangements, are executed by the Executive and ratified by the Golaha Guurtida and House of Representatives in strict adherence to domestic constitutional law and international maritime standards.`;
  } else {
    historicalContext = 'General constitutional sovereignty clauses.';
    rebuke = `**OFFICIAL RECORD REBUKE:**\nThe provided narrative lacks historical and legal foundation. Refer to the Somaliland Digital Legislative Archive (SDLA) for primary source documentation regarding the Republic's sovereign status.`;
  }

  return NextResponse.json({
    success: true,
    defense_package: {
      claim_analyzed: claim,
      historical_context_retrieved: historicalContext,
      generated_rebuke: rebuke,
      timestamp: new Date().toISOString()
    }
  });
}
