import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { target_parliament, document_type, key_points } = await req.json();

  const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  let draft = '';

  if (document_type === 'Icebreaker Letter' && target_parliament === 'Knesset') {
    draft = `Date: ${today}\n\nTo the Honorable Members of the Knesset,\n\nOn behalf of the Golaha Guurtida (House of Elders) of the Republic of Somaliland, we extend our highest diplomatic regards.\n\nFollowing the historic diplomatic engagements of December 2025, we write to formalize a Strategic Friendship Group between our respective legislative bodies. Our shared commitment to democratic resilience, regional stability, and technological innovation forms a strong foundation for bilateral cooperation.\n\nKey areas of proposed collaboration include:\n${key_points.map((p: string) => `- ${p}`).join('\n')}\n\nWe look forward to a direct parliament-to-parliament exchange.\n\nSincerely,\nOffice of the Chairman\nGolaha Guurtida (House of Elders)\nRepublic of Somaliland`;
  } else if (document_type === 'MoU') {
    draft = `MEMORANDUM OF UNDERSTANDING\n\nBetween the Golaha Guurtida (Republic of Somaliland) and the ${target_parliament}\n\nArticle 1: Purpose\nThis MoU establishes a formal Strategic Friendship Group...\n\nArticle 2: Areas of Cooperation\n${key_points.map((p: string, i: number) => `2.${i + 1} ${p}`).join('\n')}\n\nSigned on this day, ${today}.`;
  } else {
    draft = `Standard diplomatic template generated for ${target_parliament} regarding: ${key_points.join(', ')}.`;
  }

  return NextResponse.json({
    success: true,
    draft_content: draft,
    metadata: { target: target_parliament, generated_at: new Date().toISOString() }
  });
}
