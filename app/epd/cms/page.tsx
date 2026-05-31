"use client";

import { useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function EPD_CMS() {
  const data = useQuery(api.projects.getEcosystemData);
  const bulkImport = useMutation(api.projects.bulkImport);
  const [jsonInput, setJsonInput] = useState("");
  const [status, setStatus] = useState("");

  const handleImport = async () => {
    try {
      setStatus("Importing...");
      const parsed = JSON.parse(jsonInput);
      
      // Handle either raw array or { projects: [] } format
      const projects = Array.isArray(parsed) ? parsed : (parsed.projects || parsed.for_mahmoud || []);
      const kpis = parsed.kpis || undefined;

      if (!projects.length) {
        throw new Error("No projects found in JSON");
      }

      const res = await bulkImport({ projects, kpis });
      setStatus(`Success! Imported ${res.count} projects.`);
      setJsonInput("");
    } catch (e: any) {
      setStatus(`Error: ${e.message}`);
    }
  };

  const handleExport = () => {
    if (!data) return;
    const exportData = {
      projects: data.projects,
      kpis: data.kpis,
    };
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "m2_epd_pipeline_export.json";
    a.click();
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#c0a062] p-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-8">
        <header className="border-b border-[#c0a062]/20 pb-4">
          <h1 className="text-3xl font-bold tracking-tight text-[#D4AF37]">M2 Sovereign CMS (EPD Pipeline)</h1>
          <p className="text-[#888] mt-2">Real-time customizable content management for the $163.8M Ecosystem.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Import Panel */}
          <div className="bg-[#111] border border-[#c0a062]/30 p-6 rounded-xl shadow-2xl">
            <h2 className="text-xl font-semibold mb-4 text-white">Bulk Import (JSON)</h2>
            <p className="text-sm text-[#888] mb-4">Paste your exported Google Sheets JSON payload here to instantly replace the live database.</p>
            <textarea
              className="w-full h-64 bg-black border border-[#333] rounded-lg p-4 text-sm font-mono text-green-400 focus:outline-none focus:border-[#D4AF37]"
              value={jsonInput}
              onChange={(e) => setJsonInput(e.target.value)}
              placeholder='{ "projects": [ { "code": "DGTP-001", ... } ] }'
            />
            <button 
              onClick={handleImport}
              className="mt-4 bg-[#D4AF37] text-black font-bold py-2 px-6 rounded hover:bg-[#c0a062] transition"
            >
              Sync to Production
            </button>
            {status && <p className="mt-4 text-sm">{status}</p>}
          </div>

          {/* Export Panel */}
          <div className="bg-[#111] border border-[#c0a062]/30 p-6 rounded-xl shadow-2xl flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold mb-4 text-white">Bulk Export</h2>
              <p className="text-sm text-[#888] mb-4">Download the current live database state to re-import into Google Sheets or perform offline analysis.</p>
              
              {data ? (
                <div className="bg-black/50 p-4 rounded-lg mb-4 space-y-2 text-sm border border-[#333]">
                  <p><strong>Total Projects:</strong> {data.projects.length}</p>
                  <p><strong>Total Value:</strong> ${(data.kpis?.totalValue || 0).toLocaleString()}</p>
                  <p><strong>Status:</strong> LIVE</p>
                </div>
              ) : (
                <p className="text-[#888]">Loading live state...</p>
              )}
            </div>
            
            <button 
              onClick={handleExport}
              disabled={!data}
              className="mt-4 bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] font-bold py-2 px-6 rounded hover:bg-[#D4AF37]/10 transition disabled:opacity-50"
            >
              Export JSON Payload
            </button>
          </div>
        </div>

        {/* Data Table Preview */}
        <div className="bg-[#111] border border-[#c0a062]/30 p-6 rounded-xl shadow-2xl mt-8">
           <h2 className="text-xl font-semibold mb-4 text-white">Live Data Preview</h2>
           <div className="overflow-x-auto">
             <table className="w-full text-left text-sm">
               <thead className="bg-[#222] text-[#888]">
                 <tr>
                   <th className="p-3">Code</th>
                   <th className="p-3">Project</th>
                   <th className="p-3">Value</th>
                   <th className="p-3">Status</th>
                 </tr>
               </thead>
               <tbody>
                 {data?.projects.slice(0, 10).map((p, i) => (
                   <tr key={i} className="border-b border-[#333]">
                     <td className="p-3 font-mono text-[#D4AF37]">{p.code}</td>
                     <td className="p-3 text-white">{p.project_name}</td>
                     <td className="p-3">${parseInt(p.amount).toLocaleString()}</td>
                     <td className="p-3">
                       <span className="px-2 py-1 bg-green-900/30 text-green-400 rounded text-xs">{p.status}</span>
                     </td>
                   </tr>
                 ))}
               </tbody>
             </table>
             <p className="text-center text-[#888] mt-4 text-xs">Showing latest 10 records...</p>
           </div>
        </div>
      </div>
    </div>
  );
}
