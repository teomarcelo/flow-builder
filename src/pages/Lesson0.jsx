import { Link } from 'react-router-dom';
import Quiz from '../components/Quiz';
import { quizData } from '../data/curriculum';
import { ExamTrap, DeepDive, StepList, FlowTypeDecision } from '../components/LessonComponents';

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
        <div className="lesson-badge" style={{ background: COLOR_BG, color: COLOR, border: '1px solid #BFDBFE' }}>
          Lesson 0
        </div>
        <h1>Course Overview</h1>
        <p>Flow basics, the four flow types, Flow Builder navigation, and the framework for translating business requirements into buildable flows. This lesson sets the mental model that everything else builds on.</p>
      </div>

      {/* ── TOPIC 1 — What is Flow ── */}
      <section className="topic-section fade-up fade-up-1" id="what-is-flow">
        <h2>What is Salesforce Flow?</h2>

        <div className="definition-box" style={{ borderLeftColor: COLOR }}>
          <div className="definition-box-icon">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
          </div>
          <div>
            <div className="definition-label">Definition</div>
            <div className="definition-text">
              <strong>Flow</strong> is Salesforce's declarative automation engine — it automates business processes by executing logic, reading from and writing to Salesforce objects (database), and optionally interacting with users through screens. Flows are built visually in <strong>Flow Builder</strong>. A <strong>Flow Interview</strong> is a single running instance of a flow — one record save triggers one interview; 200 records trigger 200 interviews (running in bulk).
            </div>
          </div>
        </div>

        <div className="analogy-block">
          <div className="analogy-icon" style={{ background: '#EFF6FF', color: COLOR }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 11l19-9-9 19-2-8-8-2z"/></svg>
          </div>
          <div>
            <div className="analogy-label">Pizza Restaurant Analogy — The Through-Line</div>
            <div className="analogy-text">
              A flow is like a <strong>recipe</strong>. The recipe has <strong>ingredients</strong> (variables), <strong>steps</strong> (elements), and <strong>decisions</strong> (control structures). The Flow Interview is the actual act of cooking the pizza for Table 12 right now. Multiple simultaneous interviews = multiple pizzas being cooked at once, each following the same recipe but with different ingredients.
            </div>
          </div>
        </div>

        <div className="concept-card">
          <h4>The Three Layers of a Salesforce Application</h4>
          <p style={{ fontSize: '.88rem', marginBottom: 16 }}>Every Salesforce feature exists in one of three layers. Understanding which layer a flow operates in clarifies why certain flow types can show UI (Screen Flows) and others can't (Autolaunched Flows).</p>
          <div className="three-col" style={{ marginTop: 0 }}>
            {[
              {
                layer: 'Layer 1', color: '#0369A1', bgColor: '#EFF6FF',
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                ),
                title: 'User Interface',
                desc: 'What users see and click. Lightning pages, components, mobile app. Screen Flows operate at this layer — they show screens to users.',
                flows: 'Screen Flow'
              },
              {
                layer: 'Layer 2', color: '#7C3AED', bgColor: '#F5F3FF',
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="2" x2="9" y2="4"/><line x1="15" y1="2" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="22"/><line x1="15" y1="20" x2="15" y2="22"/><line x1="20" y1="9" x2="22" y2="9"/><line x1="20" y1="14" x2="22" y2="14"/><line x1="2" y1="9" x2="4" y2="9"/><line x1="2" y1="14" x2="4" y2="14"/></svg>
                ),
                title: 'Business Logic &amp; Automation',
                desc: 'Rules, validations, and workflows. Where most flows live. Processes decisions, coordinates data, enforces business rules.',
                flows: 'All flow types'
              },
              {
                layer: 'Layer 3', color: '#0F766E', bgColor: '#F0FDFA',
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
                ),
                title: 'Data',
                desc: 'Salesforce objects, fields, records. All flows can read and write here via Get Records, Create Records, Update Records, Delete Records.',
                flows: 'All flow types'
              },
            ].map(item => (
              <div key={item.layer} className="var-card" style={{ borderTop: `4px solid ${item.color}` }}>
                <div style={{ width: 28, height: 28, background: item.bgColor, border: `1px solid ${item.color}30`, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: item.color, marginBottom: 10 }}>
                  {item.icon}
                </div>
                <div className="var-card-type" style={{ color: item.color }}>{item.layer}</div>
                <h4 dangerouslySetInnerHTML={{ __html: item.title }} />
                <p style={{ fontSize: '.84rem' }}>{item.desc}</p>
                <div style={{ fontSize: '.74rem', fontWeight: 700, color: item.color }}>Flows: {item.flows}</div>
              </div>
            ))}
          </div>
        </div>

        <DeepDive title="Why Flow Replaced Process Builder and Workflow Rules">
          <p>Before Flow Builder's current power, Salesforce had separate tools for different automation needs: Workflow Rules (field updates + emails), Process Builder (multi-step logic), and Flow (screen flows only). This fragmentation created problems: you'd need three separate tools to automate one business process, and they interacted in unpredictable ways.</p>
          <p style={{ marginTop: 8 }}>Salesforce consolidated everything into Flow. Workflow Rules are retiring in 2026. Process Builder is in maintenance mode. Record-Triggered Flows replace both — with better performance, better debugging, and better governor limit management. <strong>Everything new should be built in Flow.</strong></p>
        </DeepDive>
      </section>

      {/* ── TOPIC 2 — Flow Types ── */}
      <section className="topic-section" id="flow-types">
        <h2>Core Flow Types</h2>

        <p style={{ marginBottom: 20, color: 'var(--fg-2)' }}>The four flow types answer one fundamental question: <em>what triggers this flow to run?</em> Everything else — capabilities, limitations, use cases — follows from the trigger. Use the decision tree below first, then study each type's details.</p>

        <FlowTypeDecision />

        <div className="flow-type-grid" style={{ marginTop: 24 }}>
          {[
            {
              color: '#0176D3',
              tagClass: 'tag-blue',
              borderColor: '#BFDBFE',
              icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              ),
              tag: 'Screen Flow',
              title: 'Guided user interaction',
              desc: 'The only flow type with a user interface. Shows screens, collects input, displays results. Launched from Lightning pages, quick actions, utility bars, or embedded as a page component.',
              strengths: ['Multi-step wizards', 'Dynamic field visibility', 'Collect input + write to DB in one transaction'],
              limitations: ['Requires user to be present — can\'t run in background', 'Governor limits count against the current user context'],
              tip: 'New record wizards, guided data entry, service scripts, onboarding flows'
            },
            {
              color: '#D97706',
              tagClass: 'tag-orange',
              borderColor: '#FED7AA',
              icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
              ),
              tag: 'Record-Triggered Flow',
              title: 'Fires automatically on record save',
              desc: 'Launches when a record is created, updated, or deleted. Runs invisibly in the background. The modern replacement for Workflow Rules and Process Builder. Runs at two points: Before Save (Fast Field Update) and After Save (Actions & Related Records).',
              strengths: ['No user interaction required', 'Runs in bulk for up to 200 records per batch', 'Before-Save: zero extra DML for field updates'],
              limitations: ['Cannot show screens to users', 'Must be mindful of governor limits in bulk context'],
              tip: 'Auto-update fields, validate on save, create related records, send triggered emails'
            },
            {
              color: '#7C3AED',
              tagClass: 'tag-purple',
              borderColor: '#DDD6FE',
              icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M3 21v-5h5"/></svg>
              ),
              tag: 'Autolaunched Flow',
              title: 'Called by another process',
              desc: 'Launched explicitly by Apex code, a REST API call, or invoked as a Subflow from another flow. Has no automatic trigger — runs only when explicitly invoked. The building block of reusable logic modules.',
              strengths: ['Reusable logic (call from any flow or Apex)', 'API-triggerable from external systems', 'Composable — build complex logic from simple modules'],
              limitations: ['Cannot show screens (no UI layer)', 'Must be explicitly invoked — no automatic trigger'],
              tip: 'Reusable sharing logic, API-triggered automations, called as subflows'
            },
            {
              color: '#0F766E',
              tagClass: 'tag-teal',
              borderColor: '#99F6E4',
              icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              ),
              tag: 'Schedule-Triggered Flow',
              title: 'Runs at a specified time',
              desc: 'Launches at a defined time and frequency, automatically processes a batch of records that match your criteria. Great for bulk maintenance jobs, nightly cleanup, and weekly reminders. Separate from Scheduled Paths, which are time-based paths inside a Record-Triggered Flow.',
              strengths: ['Runs automatically without user action', 'Batch processes many records at once', 'Configurable frequency: once, daily, weekly'],
              limitations: ['Runs in batch — record context is query-based, not triggered by a save', 'Runs in its own transaction (Apex Flex Queue)'],
              tip: 'Nightly data cleanup, weekly reminder emails, batch field recalculations, housekeeping jobs'
            },
          ].map(card => (
            <div key={card.tag} className="flow-type-card" style={{ borderTop: `3px solid ${card.borderColor}` }}>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 10 }}>
                <div style={{ width: 32, height: 32, background: card.color + '15', border: `1px solid ${card.color}30`, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', color: card.color, flexShrink: 0 }}>
                  {card.icon}
                </div>
                <span className={`tag ${card.tagClass}`}>{card.tag}</span>
              </div>
              <h4 style={{ marginBottom: 8 }}>{card.title}</h4>
              <p style={{ fontSize: '.84rem', marginBottom: 12 }}>{card.desc}</p>
              <div style={{ fontSize: '.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '.1em', color: '#059669', marginBottom: 5 }}>Strengths</div>
              <ul style={{ fontSize: '.82rem', marginBottom: 12, paddingLeft: '1.2rem' }}>
                {card.strengths.map((s, i) => <li key={i} style={{ marginBottom: 3 }}>{s}</li>)}
              </ul>
              <div style={{ fontSize: '.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '.1em', color: '#DC2626', marginBottom: 5 }}>Limitations</div>
              <ul style={{ fontSize: '.82rem', marginBottom: 12, paddingLeft: '1.2rem' }}>
                {card.limitations.map((l, i) => <li key={i} style={{ marginBottom: 3 }}>{l}</li>)}
              </ul>
              <div className="tip-box" style={{ marginTop: 0, marginBottom: 0 }}>
                <span className="tip-box-icon">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                </span>
                <span><span className="tip-label">Use for</span>{card.tip}</span>
              </div>
            </div>
          ))}
        </div>

        <ExamTrap title="Schedule-Triggered Flow vs. Scheduled Paths in RTF">
          <p>These two are frequently confused. <strong>Schedule-Triggered Flow</strong> is an independent flow type that runs on a calendar schedule (daily, weekly, once) and queries a batch of records. <strong>Scheduled Paths</strong> are time-based execution paths inside a Record-Triggered Flow — they fire relative to a date field on a specific record that was just saved.</p>
          <p style={{ marginTop: 6 }}>Example: "Send an email to all Opportunities closing this week" → Schedule-Triggered Flow (batch query). "Send a reminder 7 days before this specific Opportunity's Close Date" → Scheduled Path in a Record-Triggered Flow.</p>
        </ExamTrap>
      </section>

      {/* ── TOPIC 3 — Flow Builder UI ── */}
      <section className="topic-section" id="flow-builder-ui">
        <h2>Navigating Flow Builder</h2>

        <div className="concept-card">
          <h4>The Three Areas of Flow Builder</h4>
          <p style={{ fontSize: '.88rem', marginBottom: 16 }}>Flow Builder is a visual IDE. Knowing exactly where every control lives prevents the "where is the thing I need?" paralysis that slows down new builders.</p>
          <table className="comparison-table">
            <thead><tr><th>#</th><th>Area</th><th>Location</th><th>What You Do There</th></tr></thead>
            <tbody>
              {[
                {
                  num: '1', color: '#D97706',
                  area: 'Toolbox',
                  loc: 'Left panel',
                  desc: 'Create Resources (Variables, Formulas, Constants, Text Templates). Search and browse Elements to drag onto canvas. Manager tab shows all existing resources.'
                },
                {
                  num: '2', color: '#0369A1',
                  area: 'Canvas',
                  loc: 'Center work area',
                  desc: 'Drag elements from Toolbox, connect them with arrows to define execution order. Click elements to configure. Zoom controls in bottom-right. Right-click for copy/paste.'
                },
                {
                  num: '3', color: '#0F766E',
                  area: 'Button Bar',
                  loc: 'Top header',
                  desc: 'Run (test without debug info), Debug (step-through with variable inspection), Save (save as new version), Activate (make flow live). Flow API Name and version shown here.'
                },
              ].map(row => (
                <tr key={row.area}>
                  <td>
                    <span style={{ background: row.color, color: 'white', borderRadius: '50%', width: 26, height: 26, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '.82rem' }}>{row.num}</span>
                  </td>
                  <td style={{ fontWeight: 600 }}>{row.area}</td>
                  <td style={{ fontSize: '.83rem', color: 'var(--fg-3)' }}>{row.loc}</td>
                  <td style={{ fontSize: '.84rem' }}>{row.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="concept-card">
          <h4>The Debug Tool — Your Best Friend</h4>
          <p style={{ fontSize: '.88rem', marginBottom: 12 }}>Flow Builder's built-in debugger lets you step through a flow execution, inspect variable values at each step, and see exactly why a path was taken. Use it constantly, not just when something breaks.</p>
          <div className="two-col" style={{ marginBottom: 0 }}>
            <div>
              <div style={{ fontSize: '.72rem', fontWeight: 800, color: 'var(--fg-3)', textTransform: 'uppercase', marginBottom: 8 }}>What Debug Shows You</div>
              <ul style={{ fontSize: '.84rem' }}>
                <li>Variable values at each element</li>
                <li>Which Decision outcome was taken (and why)</li>
                <li>How many records Get Records returned</li>
                <li>Fault path details when DML fails</li>
                <li>Full error messages from the platform</li>
              </ul>
            </div>
            <div>
              <div style={{ fontSize: '.72rem', fontWeight: 800, color: 'var(--fg-3)', textTransform: 'uppercase', marginBottom: 8 }}>How to Use It</div>
              <ol style={{ fontSize: '.84rem' }}>
                <li>Click Debug in the button bar</li>
                <li>Set input values if your flow requires them</li>
                <li>Click Run → step through execution</li>
                <li>Inspect the Detail panel for each step</li>
                <li>Check variable values in the Variables panel</li>
              </ol>
            </div>
          </div>
        </div>

        <div className="join-me-box">
          <div className="join-me-label">Instructor Demo Note</div>
          <h4>Show the "In case you get stuck" workflow</h4>
          <p>In the demo org, Solutions are pre-built completed flows. Point students to: <strong>Setup → Flows → filter by "Solutions"</strong>. These are the fully built reference implementations for each use case. Students who fall behind can compare their flow against the Solution. Also show the Quick Reference document in Files.</p>
        </div>
      </section>

      {/* ── TOPIC 4 — Translating Requirements ── */}
      <section className="topic-section" id="translating-requirements">
        <h2>Translating Business Requirements into Flows</h2>

        <div className="concept-card">
          <h4>The 3-Step Translation Framework</h4>
          <p style={{ fontSize: '.88rem', marginBottom: 16 }}>Every flow starts with a business requirement. The #1 mistake new flow builders make: jumping straight to Flow Builder before fully translating the requirement. Students who skip Step 1 and Step 2 build flows that solve the wrong problem or miss critical edge cases entirely.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {[
              {
                step: '01', color: '#7C3AED', label: 'Say it in Plain Language',
                what: 'State what the user needs to accomplish. No technical terms. No Salesforce objects. Just the business outcome.',
                example: '"Users need a quick way to create new Opportunities for Prospect Accounts."',
                test: 'Could a non-Salesforce person understand this?'
              },
              {
                step: '02', color: '#0369A1', label: 'Say it in Salesforce',
                what: 'Translate the business outcome into Salesforce objects, fields, and operations. Identify the data model.',
                example: '"I need to create an Opportunity record linked to an Account where Type = Prospect. StageName, CloseDate, and Name are required."',
                test: 'Which objects? Which fields? Which CRUD operations?'
              },
              {
                step: '03', color: COLOR, label: 'Say it in Flow',
                what: 'Map Salesforce operations to specific Flow elements. Define variables. Identify decisions, loops, and DML.',
                example: '"Record Choice Set (Account, Type=Prospect) → Screen (scr010) → Decision (close date valid?) → Create Records (new050) → Success Screen with record link."',
                test: 'Which elements? Which resources? What\'s the canvas order?'
              },
            ].map((step, i) => (
              <div key={step.step} style={{ display: 'flex', alignItems: 'stretch', gap: 0 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 40, flexShrink: 0 }}>
                  <div style={{ width: 32, height: 32, borderRadius: '50%', background: step.color, color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-mono)', fontSize: '.72rem', fontWeight: 700, flexShrink: 0 }}>{step.step}</div>
                  {i < 2 && <div style={{ width: 2, flex: 1, background: step.color + '30', margin: '4px 0' }} />}
                </div>
                <div style={{ flex: 1, padding: '0 0 24px 16px' }}>
                  <div style={{ fontWeight: 700, fontSize: '.9rem', color: step.color, marginBottom: 4 }}>{step.label}</div>
                  <p style={{ fontSize: '.85rem', marginBottom: 8 }}>{step.what}</p>
                  <div style={{ fontStyle: 'italic', fontSize: '.84rem', color: 'var(--fg-3)', background: step.color + '08', borderRadius: 8, padding: '10px 14px', border: `1px solid ${step.color}20`, marginBottom: 6 }}>{step.example}</div>
                  <div style={{ fontSize: '.76rem', fontWeight: 600, color: step.color }}>Self-test: {step.test}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <StepList
          title="Live Exercise: Translate Use Case 2-1"
          intro="Practice the 3-step framework on the Opportunity Wizard use case before opening Flow Builder."
          steps={[
            {
              label: 'Plain Language',
              detail: 'Write 1-2 sentences describing what the user needs to accomplish. No Salesforce terms.',
              note: 'Example: "Sales reps need to quickly create Opportunities linked to Prospect Accounts."'
            },
            {
              label: 'Salesforce Language',
              detail: 'Identify the object (Opportunity), fields required (Name, Account, Stage, CloseDate), and any restrictions (Account must be Type = Prospect).',
              note: 'Also identify: what\'s optional? What\'s the validation logic? What happens on success?'
            },
            {
              label: 'Flow Language',
              detail: 'List the elements in execution order. Start with: how does the flow start? What does the user see first? What data gets written? What happens on success?',
              note: 'Answer: Record Choice Set → Screen → Decision (date valid?) → Create Records → Success Screen'
            },
            {
              label: 'Draw it on paper',
              detail: 'Sketch boxes connected by arrows. Label each box with the element type. This whiteboard diagram becomes your canvas blueprint.',
              note: 'Students who skip this step take 2x longer to build and make 3x more errors.'
            },
          ]}
        />

        <ExamTrap title="Always identify the trigger type before building">
          <p>Exam questions present a business requirement and ask "which flow type should be used?" The discriminating question: <em>does a user need to interact with the process?</em></p>
          <ul>
            <li>User fills out a form → <strong>Screen Flow</strong></li>
            <li>Happens automatically when a record is saved → <strong>Record-Triggered Flow</strong></li>
            <li>Runs on a schedule → <strong>Schedule-Triggered Flow</strong></li>
            <li>Called by Apex or API → <strong>Autolaunched Flow</strong></li>
          </ul>
          <p style={{ marginTop: 8 }}>If the requirement says "automatically" or "whenever a record is saved" — it's Record-Triggered. If it says "daily" or "weekly" — it's Schedule-Triggered. If it says "user clicks a button" or "user fills out a form" — it's Screen Flow.</p>
        </ExamTrap>
      </section>

      <Quiz questions={quizData.l0} title="Lesson 0 Knowledge Check — Flow Fundamentals" />

      <div className="page-nav">
        <span />
        <Link to="/lesson/1" className="page-nav-btn primary">Lesson 1: Think Like a Developer →</Link>
      </div>
    </>
  );
}
