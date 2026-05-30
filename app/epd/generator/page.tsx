"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Copy, Check, Download, Wand2, Target, Coins, FileText, AlertCircle, ShieldAlert } from 'lucide-react';

interface Opportunity {
  id: string;
  type: string;
  title: string;
  organization: string;
  location: string;
  deadline: string;
  url: string;
  mahmoud_score: number;
  m2_score: number;
  overall_priority: string;
  matched_keywords: string[];
  value_usd?: number;
}

const STRATEGIC_MODELS = [
  {
    id: 'sierra-leone',
    name: '1. Sierra Leone Stability Model (Recommended)',
    description: 'Positions the Guurti as "peace infrastructure," capitalizing on indigenous traditional peacebuilding legitimacy, mediation history, and social cohesion.',
    badge: 'Stability Actor'
  },
  {
    id: 'kenya-psc',
    name: '2. Kenya PSC Modernization Model',
    description: 'Emphasizes administrative autonomy, e-parliament systems, specialized committee digital scrutiny, and operational readiness.',
    badge: 'Operational Systems'
  },
  {
    id: 'rwanda-kpi',
    name: '3. Rwanda KPI Efficiency Model',
    description: 'Focuses on strict Results-Based Management (RBM), quantitative key performance indicators, and absolute reporting discipline.',
    badge: 'Quantitative Impact'
  }
];

const PROPOSAL_TEMPLATES = [
  {
    id: 'eoi',
    name: '1.2.1 Expression of Interest (EOI)',
    subject: 'Expression of Interest: Strategic Partnership & Legislative Oversight Collaboration',
    body: `EXPRESSION OF INTEREST (EOI)
To: {{Organization}}
Reference: Strategic Partnership Framework
Program: {{GrantTitle}}
Target Funding: USD {{GrantValue}}
Strategic Framework: {{ModelBadge}} Alignment
Date: Friday, May 29, 2026

Dear Strategic Partner,

The House of Elders (Golaha Guurtida) of the Republic of Somaliland, through its External Partnerships Department (EPD), formally submits this Expression of Interest to collaborate on the implementation and oversight of the "{{GrantTitle}}" initiative (valued at USD {{GrantValue}}).

Somaliland stands as a beacon of democratic stability and institutional resilience in the Horn of Africa. The Guurti, as the upper legislative chamber representing both traditional consensus and modern constitutional governance, is uniquely positioned to oversee and guarantee the institutional legitimacy, community buy-in, and fiscal accountability of the proposed "{{GrantTitle}}" initiative.

{{ModelSpecificParagraph}}

Our proposed cooperation focuses on:
1. Legislative Oversight: Establishing active parliamentary oversight committees to guarantee transparent execution and absolute accountability of program funds.
2. Strategic Policy Communication: Deploying visual and data-driven systems to translate developmental metrics into public trust and institutional alignment.
3. Sovereignty and Legal Compliance: Ensuring all programmatic interventions conform strictly to Somaliland's national security, decentralization, and governance architectures.

We welcome the opportunity to discuss how the EPD can collaborate with the {{Organization}} to deliver on these strategic objectives and safeguard our mutual developmental interests.

Sincerely,

Chair, Committee on Foreign Affairs & International Cooperation
Golaha Guurtida, Republic of Somaliland`
  },
  {
    id: 'concept-note',
    name: '1.2.2 EPD Institutional Concept Note',
    subject: 'Institutional Oversight and Sustainability Alignment Blueprint',
    body: `CONCEPT NOTE: LEGISLATIVE OVERSIGHT ALIGNMENT
Project: Support Framework for "{{GrantTitle}}"
Donor Agency: {{Organization}}
Target Pipeline Value: USD {{GrantValue}}
Model Alignment: {{ModelBadge}} Model
Lead Entity: External Partnerships Department (EPD), Golaha Guurtida

1. EXECUTIVE SUMMARY
This Concept Note outlines the institutional capacity, strategic alignment, and proposed legislative oversight architecture of the House of Elders (Guurti) of Somaliland for the "{{GrantTitle}}" program. With a program value of USD {{GrantValue}}, this initiative represents a critical pillar of governance and resilience.

2. PROBLEM STATEMENT & CONTEXT
Somaliland’s sovereign governance model relies on the harmonious synthesis of traditional peacebuilding and modern democratic oversight. To ensure the durability and positive social impact of the "{{GrantTitle}}" interventions, it is crucial that legislative oversight is active and integrated from inception.

{{ModelSpecificParagraph}}

3. PROPOSED INTERVENTION
The EPD proposes a dual-track partnership model:
- Ex-Ante Compliance Auditing: Ensuring all project agreements conform strictly to Somaliland's constitutional sovereignty and fiscal guidelines.
- Strategic Narrative Shielding: Using the EPD Research Unit to defend the program against regional narrative disruptions and ensure clear, transparent policy communication.

4. ALIGNMENT WITH {{Organization}} STRATEGY
The priorities of "{{GrantTitle}}" directly align with the Guurti's constitutional mandate to maintain peace, foster national consensus, and oversee long-term developmental planning. We propose a dedicated liaison committee between the {{Organization}} Somaliland/Somalia desk and the EPD to manage periodic oversight audits.

Sincerely,

External Partnerships Department (EPD)
Golaha Guurtida, Republic of Somaliland`
  },
  {
    id: 'alignment-memo',
    name: '1.2.3 Strategic Alignment Memorandum',
    subject: 'Internal Briefing: Strategic Oversight & Capture Strategy for {{GrantTitle}}',
    body: `MEMORANDUM OF STRATEGIC ALIGNMENT

TO: Office of the Chairman, Golaha Guurtida
FROM: External Partnerships Department (EPD)
DATE: May 29, 2026
SUBJECT: Strategic Oversight and Capture Strategy: {{GrantTitle}} ({{Organization}})
Strategic Model: {{ModelBadge}} Framework

1. OBJECTIVE
This memorandum provides a strategic assessment of the "{{GrantTitle}}" program financed by {{Organization}}, valued at USD {{GrantValue}}. It outlines how the EPD will engage to assert Somaliland's institutional agency and secure maximum development capture.

2. STRATEGIC PRECEDENTS
This program aligns with the Guurti’s core mandate under Article 61 of the Somaliland Constitution to review and approve international agreements that impact national sovereignty, security, and long-term socio-economic planning.

{{ModelSpecificParagraph}}

3. RECOMMENDATIONS & ACTION ITEMS
The EPD recommends the following immediate actions:
- Formal Ingestion: Feed the program's procurement framework into the AI-POS Compliance Scrutiny Gatekeeper.
- Diplomatic Attaché Outreach: Convene a virtual briefing with the {{Organization}} Somaliland/Somalia desk to present our legislative oversight blueprint.
- Capacity Audit: Conduct a comparative analysis of previous World Bank/EU/AfDB programs in the region to establish baseline benchmarks.

Submitted by,

External Partnerships Department (EPD)
Golaha Guurtida, Republic of Somaliland`
  }
];

export default function DocumentGenerator() {
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
  const [selectedOpportunityId, setSelectedOpportunityId] = useState<string>('');
  const [selectedModelId, setSelectedModelId] = useState<string>('sierra-leone');
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>('');
  const [generatedContent, setGeneratedContent] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/latest.json')
      .then(res => res.json())
      .then(data => {
        setOpportunities(data.for_mahmoud || []);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading opportunities:', err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (opportunities.length > 0) {
      const params = new URLSearchParams(window.location.search);
      const oppId = params.get('opportunity');
      if (oppId && opportunities.some(o => o.id === oppId)) {
        setSelectedOpportunityId(oppId);
      }
    }
  }, [opportunities]);

  const selectedOpportunity = opportunities.find(o => o.id === selectedOpportunityId);
  const selectedTemplate = PROPOSAL_TEMPLATES.find(t => t.id === selectedTemplateId);
  const selectedModel = STRATEGIC_MODELS.find(m => m.id === selectedModelId) || STRATEGIC_MODELS[0];

  const handleGenerate = () => {
    if (!selectedOpportunity || !selectedTemplate) return;

    let text = selectedTemplate.body;
    text = text.replace(/{{Organization}}/g, selectedOpportunity.organization);
    text = text.replace(/{{GrantTitle}}/g, selectedOpportunity.title);
    text = text.replace(/{{ModelBadge}}/g, selectedModel.badge);
    
    const formattedValue = selectedOpportunity.value_usd 
      ? `$${(selectedOpportunity.value_usd / 1000000).toFixed(2)}M` 
      : 'TBD';
    text = text.replace(/{{GrantValue}}/g, formattedValue);

    // Dynamic model-specific paragraph injection
    let modelParagraph = '';
    if (selectedModel.id === 'sierra-leone') {
      if (selectedTemplate.id === 'eoi') {
        modelParagraph = `Uniquely, the Golaha Guurtida represents the traditional peace brokers of Somaliland, whose indigenous consensus and conflict resolution mechanisms successfully secured the nation's peaceful foundation between 1991 and 1997 without external intervention. By adopting the Sierra Leone model of 'Peace Infrastructure,' we position this project not merely as a technical intervention, but as a critical safeguard for the region's democratic stability and social cohesion.`;
      } else if (selectedTemplate.id === 'concept-note') {
        modelParagraph = `3. STRATEGIC POSITIONING AS PEACE INFRASTRUCTURE\nFollowing the successful precedent of the Parliament of Sierra Leone, we position the Guurti's oversight role as core 'Peace Infrastructure.' Customary legitimacy, indigenous arbitration methods, and traditional conflict prevention architectures will be formally integrated into the "${selectedOpportunity.title}" administrative workflows, providing an exceptionally high-trust implementation environment that standard political institutions cannot match.`;
      } else {
        modelParagraph = `3. PEACE ACTOR FRAMING PRECEDENT\nFollowing the Sierra Leone parliamentary support blueprint, we recommend the EPD frames this outreach to UNDP and the EU by positioning the Guurti as conflict prevention and mediation 'Peace Infrastructure.' Donors in the Horn of Africa are currently prioritizing local stabilization and traditional governance ownership over abstract administrative training.`;
      }
    } else if (selectedModel.id === 'kenya-psc') {
      if (selectedTemplate.id === 'eoi') {
        modelParagraph = `Drawing direct structural inspiration from the highly successful Parliamentary Service Commission (PSC) model of Kenya, the Guurti is implementing comprehensive administrative and technical autonomy. This ensures that the "${selectedOpportunity.title}" initiative will be managed by a highly specialized, operational secretariat with dedicated committee digital tracking, digitized legislative archives, and robust, autonomous procurement oversight channels.`;
      } else if (selectedTemplate.id === 'concept-note') {
        modelParagraph = `3. ADMINISTRATIVE AUTONOMY & OPERATIONAL READYING\nIn alignment with the Parliament of Kenya's PSC framework, we emphasize complete operational readiness. The Guurti has digitized its legislative archives (SDLA) and created dedicated digital scrutiny units to manage the "${selectedOpportunity.title}" program. This mitigates the common 'stabilization fragilities' observed in dependent parliaments by embedding all donor tracking directly into autonomous, local ICT systems.`;
      } else {
        modelParagraph = `3. REGULATORY AUTONOMY SCENARIO\nFollowing the Kenya PSC framework, we recommend setting up a dedicated 'Public Finance & Capital Scrutiny Unit' under the EPD to manage the technical audit. This will allow the Guurti to assert its constitutional scrutiny powers on the World Bank/AfDB funding parameters, ensuring local ownership and mitigating executive bypass risk.`;
      }
    } else if (selectedModel.id === 'rwanda-kpi') {
      if (selectedTemplate.id === 'eoi') {
        modelParagraph = `Emulating the strict results-oriented governance architectures of the Parliament of Rwanda, we are integrating comprehensive Results-Based Management (RBM) and explicit key performance indicators (KPIs) into the program structure. We guarantee absolute reporting discipline and precise quantitative impact tracking, ensuring every dollar of developmental funding translates into verified institutional transformation.`;
      } else if (selectedTemplate.id === 'concept-note') {
        modelParagraph = `3. QUANTITATIVE MEASUREMENT & REPORTING DISCIPLINE\nFollowing the Rwanda parliamentary support blueprint, we implement strict Results-Based Management (RBM) grids. The "${selectedOpportunity.title}" program will be audited quarterly against clear, computerized KPIs (digitization rates, public consensus sessions, and constitutional compliance metrics) managed by the EPD digital dashboard, guaranteeing absolute donor visibility and accountability.`;
      } else {
        modelParagraph = `3. RESULTS-ORIENTED REPORTING BLUEPRINT\nFollowing the Rwanda model, we recommend that the EPD integrates explicit RBM progress metrics directly into the submission draft. This demonstrates the Guurti's operational professionalism, shifting the donor conversation from political rhetoric to quantitative governance capacity.`;
      }
    }

    text = text.replace(/{{ModelSpecificParagraph}}/g, modelParagraph);

    setGeneratedContent(text);
    setCopied(false);
  };

  const handleCopy = () => {
    if (!generatedContent) return;
    navigator.clipboard.writeText(generatedContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    if (!generatedContent) return;
    const element = document.createElement("a");
    const file = new Blob([generatedContent], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `${selectedOpportunity?.id || 'proposal'}_${selectedModelId}_${selectedTemplate?.id || 'draft'}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#050507] flex items-center justify-center text-mora-green-400">
        <div className="w-8 h-8 border-4 border-mora-green-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050507] text-[#F0EEE8] font-body p-8 selection:bg-mora-green-500/30">
      {/* Header */}
      <header className="mb-12 flex items-center gap-6 border-b border-mora-green-900/45 pb-8">
        <Link href="/epd" className="p-2.5 bg-zinc-900/60 border border-white/5 hover:border-mora-green-500/40 rounded-xl transition-all">
          <ArrowLeft className="w-5 h-5 text-mora-green-400" />
        </Link>
        <div>
          <h1 className="text-3xl font-header font-bold text-white tracking-widest uppercase">
            AI-POS <span className="text-sl-gold-400">•</span> Proposal Writer
          </h1>
          <p className="text-[#9B9AAD] text-sm mt-1">Generate high-value institutional Proposals, Concept Notes, and Strategic Memos dynamically.</p>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Controls */}
        <div className="space-y-8">
          
          {/* Step 1: Opportunity */}
          <div className="space-y-4">
            <h2 className="text-lg font-header font-bold text-white flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-mora-green-500/10 text-mora-green-400 text-sm font-bold border border-mora-green-500/20">1</span>
              Select Strategic Opportunity
            </h2>
            <div className="grid grid-cols-1 gap-3 max-h-52 overflow-y-auto pr-2 custom-scrollbar">
              {opportunities.map((opp) => (
                <button
                  key={opp.id}
                  onClick={() => setSelectedOpportunityId(opp.id)}
                  className={`flex items-center justify-between p-4 rounded-xl border text-left transition-all ${
                    selectedOpportunityId === opp.id
                      ? 'bg-mora-green-950/20 border-mora-green-500/60 shadow-[0_0_15px_rgba(56,142,60,0.15)] text-white'
                      : 'bg-zinc-900/50 border-white/5 hover:border-mora-green-500/20 text-[#9B9AAD] hover:text-white'
                  }`}
                >
                  <div className="flex-1 min-w-0 pr-4">
                    <div className="font-bold text-sm truncate">{opp.title}</div>
                    <div className="text-xs mt-1 text-[#5A5870] font-medium flex items-center gap-1.5">
                      <span>{opp.organization}</span>
                      <span>•</span>
                      <span>{opp.location}</span>
                    </div>
                  </div>
                  {opp.value_usd && (
                    <div className="text-xs font-bold text-sl-gold-400 bg-sl-gold-400/10 px-2.5 py-1 rounded-md border border-sl-gold-400/20 shrink-0">
                      ${(opp.value_usd / 1000000).toFixed(1)}M
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Alignment Model */}
          <div className="space-y-4">
            <h2 className="text-lg font-header font-bold text-white flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-sl-gold-400/10 text-sl-gold-400 text-sm font-bold border border-sl-gold-400/20">2</span>
              Select Strategic Alignment Model
            </h2>
            <div className="grid grid-cols-1 gap-3">
              {STRATEGIC_MODELS.map((model) => (
                <button
                  key={model.id}
                  onClick={() => setSelectedModelId(model.id)}
                  className={`p-4 rounded-xl border text-left transition-all flex flex-col gap-1.5 ${
                    selectedModelId === model.id
                      ? 'bg-sl-gold-400/5 border-sl-gold-400 text-white shadow-[0_0_15px_rgba(212,175,55,0.08)]'
                      : 'bg-zinc-900/50 border-white/5 hover:border-sl-gold-400/20 text-[#9B9AAD] hover:text-white'
                  }`}
                >
                  <div className="flex justify-between items-center w-full">
                    <span className="font-bold text-sm">{model.name}</span>
                    <span className={`text-[9px] px-2 py-0.5 rounded font-mono font-bold ${
                      selectedModelId === model.id ? 'bg-sl-gold-400/20 text-sl-gold-400 border border-sl-gold-400/30' : 'bg-zinc-950 text-[#5A5870]'
                    }`}>
                      {model.badge}
                    </span>
                  </div>
                  <p className="text-xs text-[#5A5870] leading-relaxed">{model.description}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Template */}
          <div className="space-y-4">
            <h2 className="text-lg font-header font-bold text-white flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-mora-green-500/10 text-mora-green-400 text-sm font-bold border border-mora-green-500/20">3</span>
              Select Document Template
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {PROPOSAL_TEMPLATES.map((template) => (
                <button
                  key={template.id}
                  onClick={() => setSelectedTemplateId(template.id)}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    selectedTemplateId === template.id
                      ? 'bg-mora-green-950/20 border-mora-green-500 text-white shadow-[0_0_15px_rgba(56,142,60,0.12)]'
                      : 'bg-zinc-900/50 border-white/5 hover:border-mora-green-500/20 text-[#9B9AAD] hover:text-white'
                  }`}
                >
                  <div className="font-bold text-sm mb-1 text-center">{template.id.toUpperCase()}</div>
                  <div className="text-[10px] text-[#5A5870] text-center truncate">{template.subject}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Generate Action */}
          <button
            onClick={handleGenerate}
            disabled={!selectedOpportunityId || !selectedTemplateId}
            className="w-full py-4 bg-gradient-to-r from-sl-gold-700 to-sl-gold text-[#050507] hover:brightness-110 font-bold rounded-xl shadow-lg shadow-sl-gold/10 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center gap-2.5 transition-all active:scale-95"
          >
            <Wand2 className="w-5 h-5" />
            Synthesize Strategic Proposal
          </button>

        </div>

        {/* Preview Panel */}
        <div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-6 flex flex-col h-[750px] sticky top-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-md font-header font-bold text-zinc-300">Draft Document Preview</h2>
            <div className="flex gap-2">
              <button 
                onClick={handleCopy}
                disabled={!generatedContent}
                className="p-2 bg-zinc-950 border border-white/5 hover:border-mora-green-500/30 rounded-lg text-[#9B9AAD] hover:text-white transition-colors disabled:opacity-30"
                title="Copy to Clipboard"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
              <button 
                onClick={handleDownload}
                disabled={!generatedContent}
                className="p-2 bg-zinc-950 border border-white/5 hover:border-mora-green-500/30 rounded-lg text-[#9B9AAD] hover:text-white transition-colors disabled:opacity-30"
                title="Download Draft as TXT"
              >
                <Download className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex-1 bg-[#F9F9F6] text-[#1A1A17] p-8 rounded-xl font-serif text-sm leading-relaxed whitespace-pre-wrap overflow-y-auto shadow-inner border border-zinc-200">
            {generatedContent ? (
              <div className="leading-relaxed animate-in fade-in duration-500">
                {generatedContent}
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-zinc-400 italic">
                <FileText className="w-12 h-12 mb-4 opacity-25" />
                Select a strategic opportunity, strategic model, and template to generate the proposal draft here.
              </div>
            )}
          </div>
          
          {generatedContent && (
             <div className="mt-4 text-[10px] text-[#5A5870] font-mono text-center uppercase tracking-wider flex items-center justify-center gap-1.5">
                <AlertCircle className="w-3 h-3 text-sl-gold-400" />
                AI-POS Generated Draft • Requires Legal Sign-Off
             </div>
          )}
        </div>
      </div>
    </div>
  );
}
