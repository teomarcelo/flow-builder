import { Link } from 'react-router-dom';
import Quiz from '../components/Quiz';
import { quizData } from '../data/curriculum';

const COLOR = '#0176D3';
const COLOR_BG = '#EFF6FF';

export default function Lesson0() {
  return (
    <>
      <div className="breadcrumb">
        <Link to="/">Home</Link>
        <span className="breadcrumb-sep">/</span>
        <span>Lesson 0</span>
      </div>

      <div className="lesson-header fade-up">
        <div className="lesson-badge" style={{ background: COLOR_BG, color: COLOR, border: `1px solid #BFDBFE` }}>
          🗺️ Lesson 0
        </div>
        <h1>Course Overview</h1>
        <p>Flow basics, flow types, the Flow Builder UI, and how to translate business requirements into flows.</p>
      </div>

      {/* ── TOPIC 1 ── */}
      <section className="topic-section fade-up fade-up-1" id="what-is-flow">
        <h2>What is Flow?</h2>

        <div className="definition-box" style={{ borderLeftColor: COLOR }}>
          <div className="definition-box-icon">📖</div>
          <div>
            <div className="definition-label">Definition</div>
            <div className="definition-text">
              <strong>Flow</strong> automates business processes by executing logic, interacting with Salesforce objects (database) and users. Flows are built using <strong>Flow Builder</strong>. A <strong>Flow Interview</strong> is an instance of a currently executing flow.
            </div>
          </div>
        </div>

        <div className="analogy-block">
          <div className="analogy-icon">🍕</div>
          <div>
            <div className="analogy-label">Analogy — The Pizza Restaurant</div>
            <div className="analogy-text">
              A flow is like a recipe. The recipe has <strong>ingredients</strong> (variables), <strong>steps</strong> (elements), and <strong>decisions</strong> (control structures). The Flow Interview is the actual act of cooking the pizza for table 12 right now.
            </div>
          </div>
        </div>

        <div className="concept-card">
          <h4>The Three Layers of a Salesforce Application</h4>
          <div className="three-col" style={{ marginTop: 16 }}>
            {[
              { layer: 'Layer 1', icon: '🖥️', title: 'User Interface', desc: 'What users see and interact with. Screen Flows operate at this layer.', color: '#0369A1' },
              { layer: 'Layer 2', icon: '⚙️', title: 'Business Logic & Automation', desc: 'Rules, workflows, and flows. Most flows live here.', color: '#7C3AED' },
              { layer: 'Layer 3', icon: '🗄️', title: 'Data', desc: 'Salesforce objects and records. Flows read and write data here.', color: '#0F766E' },
            ].map(item => (
              <div key={item.layer} className="var-card" style={{ borderTop: `3px solid ${item.color}` }}>
                <div className="var-card-type" style={{ color: item.color }}>{item.layer}</div>
                <h4>{item.icon} {item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="note-box" style={{ marginTop: 8 }}>
            <span className="note-box-icon">ℹ️</span>
            <span>Flows run in the Logic and Data layers. <strong>Screen Flows also have a UI component</strong> because they show screens to users.</span>
          </div>
        </div>
      </section>

      {/* ── TOPIC 2 ── */}
      <section className="topic-section" id="flow-types">
        <h2>Core Flow Types</h2>

        <div className="flow-type-grid">
          {[
            { icon: '🖥️', tag: 'Screen Flow', tagClass: 'tag-blue', border: '#BFDBFE', title: 'Guides users through a process', desc: 'Has a user interface — shows screens, collects input, displays results. Launched from Lightning pages, quick actions, utility bars.', tip: 'When to use: New record wizards, guided data entry, user-facing surveys.' },
            { icon: '⚡', tag: 'Record-Triggered Flow', tagClass: 'tag-orange', border: '#FED7AA', title: 'Fires automatically on record save', desc: 'Launches when a record is created, updated, or deleted. Runs in the background — no user interaction. Replaces Workflow Rules and Process Builder.', tip: 'When to use: Auto-update fields, send emails on record changes, enforce validation.' },
            { icon: '🔄', tag: 'Autolaunched Flow', tagClass: 'tag-green', border: '#BBF7D0', title: 'Called by another process', desc: 'Launched by Apex, REST APIs, or called as a Subflow from another flow. No automatic trigger — runs only when explicitly invoked.', tip: 'When to use: Reusable logic modules (subflows), API-triggered automations.' },
            { icon: '🗓️', tag: 'Schedule-Triggered Flow', tagClass: 'tag-purple', border: '#DDD6FE', title: 'Runs at a specific time', desc: 'Launches at a specified time and frequency, processes records in a batch. Great for nightly or weekly maintenance jobs.', tip: 'When to use: Nightly data cleanup, weekly reminders, batch field updates.' },
          ].map(card => (
            <div key={card.tag} className="flow-type-card" style={{ borderTopColor: card.border }}>
              <span className="flow-type-card-icon">{card.icon}</span>
              <span className={`tag ${card.tagClass}`} style={{ marginBottom: 8, display: 'inline-flex' }}>{card.tag}</span>
              <h4>{card.title}</h4>
              <p>{card.desc}</p>
              <div className="tip-box" style={{ marginTop: 12, marginBottom: 0 }}>
                <span className="tip-box-icon">💡</span>
                <span><span className="tip-label">Tip</span>{card.tip}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TOPIC 3 ── */}
      <section className="topic-section" id="flow-builder-ui">
        <h2>Navigating Flow Builder</h2>

        <div className="concept-card">
          <h4>The Three Areas of Flow Builder</h4>
          <table className="comparison-table" style={{ marginTop: 16 }}>
            <thead><tr><th>#</th><th>Area</th><th>Location</th><th>What You Do There</th></tr></thead>
            <tbody>
              {[
                { num: '1', color: '#D97706', area: 'Toolbox', loc: 'Left panel', desc: 'Add Resources (variables, formulas, constants) and search Elements to drag onto canvas' },
                { num: '2', color: '#0369A1', area: 'Canvas', loc: 'Center', desc: 'Drag, connect, and configure Elements. Your flow diagram builds visually here.' },
                { num: '3', color: '#0F766E', area: 'Button Bar', loc: 'Top', desc: 'Run (test), Debug (step-through), Save, and Activate your flow' },
              ].map(row => (
                <tr key={row.area}>
                  <td>
                    <span style={{ background: row.color, color: 'white', borderRadius: '50%', width: 24, height: 24, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '.82rem' }}>{row.num}</span>
                  </td>
                  <td>{row.area}</td>
                  <td>{row.loc}</td>
                  <td>{row.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="join-me-box">
          <div className="join-me-label">📌 Instructor Demo Note</div>
          <h4>Show the "In case you get stuck" workflow</h4>
          <p>In the demo org, Solutions are pre-built completed flows. Point students to: <strong>Setup → Flows → Solutions filter</strong>. Also show the Quick Reference document in Files.</p>
        </div>
      </section>

      {/* ── TOPIC 4 ── */}
      <section className="topic-section" id="translating-requirements">
        <h2>Translating Use Case Requirements</h2>

        <div className="concept-card">
          <h4>The 3-Step Translation Framework</h4>
          <p>Every flow starts with a business requirement. Never jump to building — always translate first.</p>
          <div className="three-col" style={{ marginTop: 16 }}>
            {[
              { step: 'Step 1', color: '#7C3AED', icon: '🗣️', title: 'Say it in Plain Language', example: '"Users need a quick way to create new Opportunities for Prospect Accounts."', note: 'State what the user needs. No technical terms yet.' },
              { step: 'Step 2', color: '#0369A1', icon: '☁️', title: 'Say it in Salesforce', example: '"I need to create an Opportunity record linked to an Account of Type = Prospect."', note: 'Identify the objects and operations (CRUD).' },
              { step: 'Step 3', color: '#0F766E', icon: '⚡', title: 'Say it in Flow', example: '"I need a Get Records to query Prospect Accounts, then a Screen element, then Create Records..."', note: 'Map to specific Flow elements.' },
            ].map(s => (
              <div key={s.step} className="var-card" style={{ borderLeft: `4px solid ${s.color}` }}>
                <div className="var-card-type" style={{ color: s.color }}>{s.step}</div>
                <h4>{s.icon} {s.title}</h4>
                <p style={{ fontStyle: 'italic', fontSize: '.88rem' }}>{s.example}</p>
                <p style={{ fontSize: '.8rem', color: '#94A3B8', marginTop: 6 }}>{s.note}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="tip-box">
          <span className="tip-box-icon">⚠️</span>
          <span><span className="tip-label">Key</span>Students who skip steps 1 and 2 build flows that solve the wrong problem or miss edge cases entirely.</span>
        </div>
      </section>

      <Quiz questions={quizData.l0} title="Lesson 0 Knowledge Check — Flow Fundamentals" />

      <div className="page-nav">
        <span />
        <Link to="/lesson/1" className="page-nav-btn primary">Lesson 1: Think Like a Developer →</Link>
      </div>
    </>
  );
}
