'use client';

import { useState, useEffect } from 'react';
import './aipos.css';

// Move the data to constant arrays to be rendered by React map
const INITIAL_AGENTS = [
  {
    id: 'opportunity',
    name: 'Global Opportunity Scanner',
    icon: '🎯',
    status: 'active',
    description: 'Scans 2,847 sources daily for grants, donor programs, and strategic opportunities',
    processed: '12,847',
    discovered: '142'
  },
  {
    id: 'donor',
    name: 'Donor Ecosystem Monitor',
    icon: '💰',
    status: 'active',
    description: 'Tracks World Bank, EU, USAID, AfDB and 50+ donor organizations for new calls',
    processed: '1,523',
    discovered: '89'
  },
  {
    id: 'proposal',
    name: 'AI Proposal Writer',
    icon: '📝',
    status: 'processing',
    description: 'Automatically generates world-class concept notes, EOIs, and full proposals',
    processed: '340',
    discovered: '45'
  },
  {
    id: 'diplomacy',
    name: 'Parliamentary Diplomacy Agent',
    icon: '🌐',
    status: 'active',
    description: 'Manages parliamentary partnerships, congressional engagement, and diplomatic briefs',
    processed: '234',
    discovered: '23'
  },
  {
    id: 'compliance',
    name: 'Compliance & Legal Checker',
    icon: '✓',
    status: 'active',
    description: 'Verifies constitutional alignment, donor compliance, and diplomatic sensitivity',
    processed: '892',
    discovered: '34'
  },
  {
    id: 'research',
    name: 'Strategic Research Unit',
    icon: '📚',
    status: 'active',
    description: 'Conducts comparative analysis, benchmarking, and predictive intelligence',
    processed: '4,291',
    discovered: '67'
  }
];

const INITIAL_INTELLIGENCE = [
  { id: 1, title: 'URGENT: British Library EAP - £60k Archives Digitization Grant', category: 'Grant Opportunity', source: 'AI Opportunity Scanner', time: '5 min ago', description: 'Perfect match for SDLA priorities. 95% eligibility. Deadline: Nov 7, 2025.', priority: 'critical', tag: 'urgent' },
  { id: 2, title: 'New UNDP Procurement - Digital Governance Platform ($2.3M)', category: 'Procurement', source: 'Procurement Monitor', time: '12 min ago', description: 'e-government system for Horn of Africa. Direct Regional implementation.', priority: 'high', tag: 'new' },
  { id: 3, title: 'World Bank GovTech Initiative - $50M Horn of Africa Allocation', category: 'Donor Program', source: 'Donor Monitor', time: '1 hour ago', description: 'Digital transformation. Q1 2026 application window. Full capacity building.', priority: 'high', tag: 'new' },
  { id: 4, title: 'EU NDICI Sub-Saharan Africa - €29.18B Geographic Programme', category: 'Framework', source: 'Donor Monitor', time: '2 hours ago', description: 'Governance, democracy, digital. Rolling calls throughout 2026.', priority: 'medium', tag: 'framework' },
  { id: 5, title: 'Westminster Foundation - Committee Strengthening Programs Active', category: 'Partnership', source: 'Parliamentary Intel', time: '3 hours ago', description: 'Public Accounts, Oversight, Digital Governance committees. Kenya, Uganda models.', priority: 'high', tag: 'partnership' }
];

const INITIAL_OPPORTUNITIES = [
  { title: 'British Library EAP - Archives Digitization', value: '£60k', deadline: 'Nov 7' },
  { title: 'DAAD In-Country Scholarships', value: 'Full Masters', deadline: 'Nov 27' },
  { title: 'Erasmus+ CBHE - Higher Education', value: '€500k+', deadline: 'Feb 6' },
  { title: 'Mastercard Foundation Scholars', value: 'Full Scholarship', deadline: 'Rolling' },
  { title: 'WFD Committee Strengthening', value: 'Full TA', deadline: 'Rolling' }
];

const INITIAL_STATS = [
  { icon: '💎', value: '142', label: 'Active Opportunities', sub: '$47.3M total value', trend: '+23' },
  { icon: '📋', value: '89', label: 'Live Procurements', sub: '34 organizations', trend: '+12' },
  { icon: '🏢', value: '67', label: 'Donor Programs', sub: 'Real-time tracked', trend: '+8' },
  { icon: '📚', value: '8,429', label: 'Knowledge Items', sub: 'Indexed & searchable', trend: '+234' },
  { icon: '⚖️', value: '1,847', label: 'Legal Documents', sub: 'Laws, policies, regs', trend: '+45' },
  { icon: '🌍', value: '23', label: 'Regional Insights', sub: 'Comparative analyses', trend: '+5' }
];

export default function AIPOSGuurti() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [activeAgents, setActiveAgents] = useState<string[]>([]);
  const [stats, setStats] = useState(INITIAL_STATS);

  useEffect(() => {
    // Inject the fonts required by the AI-POS UI
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Lora:ital,wght@0,400;0,500;0,600;1,400&family=Amiri:ital,wght@0,400;0,700;1,400&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Fetch live data from n8n scraping output
    fetch('/data/latest.json')
      .then(res => res.json())
      .then((data: any) => {
        const count = data.for_mahmoud?.length || 0;
        const totalVal = data.for_mahmoud?.reduce((acc: number, curr: any) => acc + (curr.value_usd || 0), 0) || 0;
        if (count > 0) {
           setStats(prev => {
             const newStats = [...prev];
             newStats[0] = { ...newStats[0], value: count.toString(), sub: `$${(totalVal / 1000000).toFixed(2)}M total value` };
             return newStats;
           });
        }
      })
      .catch(err => console.error('Error fetching EPD stats:', err));

      return () => {
        document.head.removeChild(link);
      }
  }, []);

  const activateAgent = (id: string, name: string) => {
    alert(`🤖 Activating ${name}\n\nAgent is now running. New discoveries will be added to the intelligence feed.`);
    if (!activeAgents.includes(id)) {
      setActiveAgents([...activeAgents, id]);
    }
  };

  const performSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    if (query.length > 2) {
      console.log(`Searching for ${query}`);
    }
  };

  return (
    <div className="aipos-theme">
      {/* App Container */}
      <div className="app-container">
        
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="sidebar-section">
            <div className="sidebar-title">🎯 Core Modules</div>
            <ul className="sidebar-menu">
              <li className={`sidebar-item ${currentView === 'dashboard' ? 'active' : ''}`} onClick={() => setCurrentView('dashboard')}>
                <span className="sidebar-icon">📊</span> Command Center
              </li>
              <li className={`sidebar-item ${currentView === 'opportunities' ? 'active' : ''}`} onClick={() => setCurrentView('opportunities')}>
                <span className="sidebar-icon">💎</span> Global Opportunities
                <span className="sidebar-badge">142</span>
              </li>
              <li className={`sidebar-item ${currentView === 'procurement' ? 'active' : ''}`} onClick={() => setCurrentView('procurement')}>
                <span className="sidebar-icon">📋</span> Procurement Intel
                <span className="sidebar-badge">89</span>
              </li>
              <li className={`sidebar-item ${currentView === 'donors' ? 'active' : ''}`} onClick={() => setCurrentView('donors')}>
                <span className="sidebar-icon">🏢</span> Donor Ecosystem
                <span className="sidebar-badge">67</span>
              </li>
            </ul>
          </div>

          <div className="sidebar-section">
            <div className="sidebar-title">🤖 AI Agents</div>
            <ul className="sidebar-menu">
              {INITIAL_AGENTS.map(agent => (
                <li key={agent.id} className="sidebar-item" onClick={() => activateAgent(agent.id, agent.name)}>
                  <span className="sidebar-icon">{agent.icon}</span> {agent.name.split(' ').slice(0, 2).join(' ')}
                </li>
              ))}
            </ul>
          </div>

          <div className="sidebar-section">
            <div className="sidebar-title">📚 Knowledge</div>
            <ul className="sidebar-menu">
              <li className={`sidebar-item ${currentView === 'archive' ? 'active' : ''}`} onClick={() => setCurrentView('archive')}>
                <span className="sidebar-icon">📖</span> Archives
              </li>
              <li className={`sidebar-item ${currentView === 'legal' ? 'active' : ''}`} onClick={() => setCurrentView('legal')}>
                <span className="sidebar-icon">⚖️</span> Legal Docs
              </li>
              <li className={`sidebar-item ${currentView === 'parliament' ? 'active' : ''}`} onClick={() => setCurrentView('parliament')}>
                <span className="sidebar-icon">🏛️</span> Parliamentary
              </li>
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          
          {/* Header */}
          <div className="main-header">
            <div className="header-brand">
              <div className="header-logo">ع</div>
              <div className="header-text">
                <h1>AI-POS • Golaha Guurtida</h1>
                <p>Autonomous Institutional Intelligence Platform</p>
              </div>
            </div>
            
            <div className="header-search">
              <span className="header-search-icon">🔍</span>
              <input type="text" placeholder="Raadi opportunities, donors, legal..." onChange={performSearch} />
            </div>

            <div className="header-actions">
              <button className="btn" onClick={() => alert('⚡ Live Scan Activated')}>⚡ Live Scan</button>
              <button className="btn btn-primary" onClick={() => alert('📊 AI Report Generation')}>📊 AI Report</button>
            </div>
          </div>

          <div className="view-content-wrapper">
            {currentView === 'dashboard' && (
              <div className="animate-fade-in">
                <div className="content-header">
                  <h2>AI-Powered Institutional Command Center</h2>
                  <p>Real-time monitoring • 2,847 knowledge sources • {stats[0].value} active opportunities • {stats[0].sub}</p>
                </div>

                {/* AI Command Panel */}
                <div className="ai-command">
                  <div className="ai-command-header">
                    <div className="ai-avatar">🧠</div>
                    <div className="ai-command-info">
                      <h3>6 Autonomous AI Agents Active</h3>
                      <p>Continuously scanning, analyzing, and discovering global opportunities</p>
                    </div>
                  </div>
                  
                  <div className="ai-agents-grid">
                    {INITIAL_AGENTS.map(a => (
                      <div key={a.id} className="ai-agent-card" onClick={() => activateAgent(a.id, a.name)}>
                        <div className="agent-header">
                          <div className="agent-icon">{a.icon}</div>
                          <div>
                            <div className="agent-name">{a.name}</div>
                            <div className={`agent-status ${a.status === 'processing' ? 'processing' : ''}`}>
                              {a.status === 'active' ? '● Active' : '⟳ Processing'}
                            </div>
                          </div>
                        </div>
                        <div className="agent-description">{a.description}</div>
                        <div className="agent-metrics">
                          <span>📊 {a.processed} processed</span>
                          <span>✨ {a.discovered} new</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="stats-grid">
                  {stats.map((s, i) => (
                    <div key={i} className="stat-card">
                      <div className="stat-header">
                        <div className="stat-icon">{s.icon}</div>
                        <div className="stat-trend">{s.trend}</div>
                      </div>
                      <div className="stat-value">{s.value}</div>
                      <div className="stat-label">{s.label}</div>
                      <div className="stat-sublabel">{s.sub}</div>
                    </div>
                  ))}
                </div>

                {/* Content Grid */}
                <div className="content-grid">
                  {/* Intelligence Feed */}
                  <div className="panel">
                    <div className="panel-header">
                      <div className="panel-title">
                        <span className="panel-title-icon">🔥</span> Latest Intelligence Alerts
                      </div>
                      <a href="#" className="panel-action">View All →</a>
                    </div>
                    <div className="intel-feed">
                      {INITIAL_INTELLIGENCE.map(item => (
                        <div key={item.id} className="intel-item" onClick={() => alert(`📝 Action: ${item.title}`)}>
                          <div className="intel-indicator"></div>
                          <div className="intel-content">
                            <div className="intel-title">{item.title}</div>
                            <div className="intel-meta">{item.category} • {item.source} • {item.time}</div>
                            <div className="intel-description">{item.description}</div>
                          </div>
                          <div className={`intel-tag ${item.tag === 'urgent' ? 'urgent' : ''}`}>{item.tag.toUpperCase()}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Latest Opportunities */}
                  <div className="panel">
                    <div className="panel-header">
                      <div className="panel-title">
                        <span className="panel-title-icon">🎯</span> Top Opportunities
                      </div>
                      <a href="#" className="panel-action">Browse →</a>
                    </div>
                    <div style={{ padding: '1.25rem 1.5rem' }}>
                      {INITIAL_OPPORTUNITIES.map((o, i) => (
                        <div key={i} className="opportunity-card mb-4 last:mb-0" onClick={() => alert(`📝 Action: ${o.title}`)}>
                          <div className="opportunity-left">
                            <div className="opportunity-title">{o.title}</div>
                            <div className="opportunity-meta">Deadline: {o.deadline}</div>
                          </div>
                          <div className="opportunity-value">{o.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {currentView !== 'dashboard' && (
              <div className="animate-fade-in">
                <div className="empty-state">
                  <div className="empty-icon">🚀</div>
                  <div className="empty-title">Loading {currentView.charAt(0).toUpperCase() + currentView.slice(1)}...</div>
                  <div className="empty-description">AI agents are gathering the latest intelligence from global sources...</div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
