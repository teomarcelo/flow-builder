import { Link } from 'react-router-dom';
import Quiz from '../components/Quiz';

const quizL0 = [
  {
    id: 'l0q1',
    question: 'What is a Flow Interview?',
    options: [
      'A job interview at Salesforce',
      'An instance of a currently executing flow',
      'A review of flow performance metrics',
      'A test run before activating a flow'
    ],
    correct: 1,
    explanation: 'A Flow Interview is a single running instance of a flow. Each time a user triggers a flow, a new Flow Interview is created. Think of the flow as the recipe, and the Flow Interview as the act of cooking it for this specific customer.'
  },
  {
    id: 'l0q2',
    question: 'Which flow type requires a user to interact with it?',
    options: ['Record-Triggered Flow', 'Schedule-Triggered Flow', 'Screen Flow', 'Autolaunched Flow'],
    correct: 2,
    explanation: 'Screen Flows have a user interface — they guide users through screens and collect input. All other flow types run in the background without user interaction.'
  },
  {
    id: 'l0q3',
    question: 'Where do flows primarily run in the Salesforce application layers?',
    options: ['User Interface layer only', 'Logic and Data layers (Screen Flows also touch UI)', 'Data layer only', 'All three layers equally'],
    correct: 1,
    explanation: 'Flows primarily operate in the Business Logic/Automation and Data layers. Screen Flows additionally touch the User Interface layer because they display screens to users.'
  },
  {
    id: 'l0q4',
    question: 'What is the correct 3-step framework for translating a use case requirement into a Flow?',
    options: [
      'Think → Build → Test',
      'Say it in Plain Language → Say it in Salesforce → Say it in Flow',
      'Objects → Fields → Logic',
      'Requirements → Design → Deploy'
    ],
    correct: 1,
    explanation: 'The course\'s framework: (1) Plain Language — what does the user need? (2) Salesforce — what objects/operations are involved? (3) Flow — "I need a Get Records to look up X, then an Update Records to change Y..."'
  }
];

export default function Lesson0() {
  return (
    <>
      <div className="breadcrumb">
        <Link to="/">Home</Link>
        <span className="breadcrumb-sep">/</span>
        <span>Lesson 0</span>
      </div>

      <div className="lesson-header fade-up">
        <div className="lesson-badge" style={{ background: '#EFF6FF', color: '#0176D3' }}>
          🗺️ Lesson 0
        </div>
        <h1>Course Overview</h1>
        <p>Flow basics, flow types, the Flow Builder UI, and how to translate business requirements into flows.</p>
      </div>

      {/* TOPIC 1 */}
      <section className="topic-section fade-up fade-up-1" id="what-is-flow">
        <h2>What is Flow?</h2>

        <div className="definition-box">
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
              Think of a flow like a recipe. The recipe has <strong>ingredients</strong> (variables), <strong>steps</strong> (elements), and <strong>decisions</strong> (control structures — "if dough is too thick, roll it more"). The Flow Interview is the actual act of cooking the pizza for table 12.
            </div>
          </div>
        </div>

        <div className="concept-card">
          <h4>The Three Layers of a Salesforce Application</h4>
          <div className="three-col" style={{ marginTop: 16 }}>
            <div className="var-card">
              <div className="var-card-type" style={{ color: '#0176D3' }}>Layer 1</div>
              <h4>🖥️ User Interface</h4>
              <p>What users see and interact with. Screen Flows operate at this layer.</p>
            </div>
            <div className="var-card">
              <div className="var-card-type" style={{ color: '#7B5EA7' }}>Layer 2</div>
              <h4>⚙️ Business Logic & Automation</h4>
              <p>Rules, workflows, flows. Most flows live here.</p>
            </div>
            <div className="var-card">
              <div className="var-card-type" style={{ color: '#06A59A' }}>Layer 3</div>
              <h4>🗄️ Data</h4>
              <p>Salesforce objects and records. Flows read and write data here.</p>
            </div>
          </div>
          <div className="note-box" style={{ marginTop: 8 }}>
            <span className="note-box-icon">ℹ️</span>
            <span>Flows in general run in the Logic and Data layers. <strong>Screen Flows also have a UI component</strong> because they show screens to users.</span>
          </div>
        </div>
      </section>

      {/* TOPIC 2 */}
      <section className="topic-section" id="flow-types">
        <h2>Core Flow Types</h2>

        <div className="flow-type-grid">
          <div className="flow-type-card" style={{ borderColor: '#BFDBFE' }}>
            <div className="flow-type-card-icon">🖥️</div>
            <div className="tag tag-blue" style={{ marginBottom: 8 }}>Screen Flow</div>
            <h4>Guides users through a process</h4>
            <p>Has a user interface — shows screens, collects input, displays results. Launched from Lightning pages, quick actions, utility bars. <em>Requires a user to interact.</em></p>
            <div className="tip-box" style={{ marginTop: 12 }}>
              <span className="tip-box-icon">💡</span>
              <span><span className="tip-label">When to use:</span> New record wizards, guided data entry, user-facing surveys.</span>
            </div>
          </div>

          <div className="flow-type-card" style={{ borderColor: '#FED7AA' }}>
            <div className="flow-type-card-icon">⚡</div>
            <div className="tag tag-orange" style={{ marginBottom: 8 }}>Record-Triggered Flow</div>
            <h4>Fires automatically on record save</h4>
            <p>Launches when a record is <strong>created, updated, or deleted</strong>. Runs in the background — no user interaction. Replaces Workflow Rules and Process Builder.</p>
            <div className="tip-box" style={{ marginTop: 12 }}>
              <span className="tip-box-icon">💡</span>
              <span><span className="tip-label">When to use:</span> Auto-update fields, send emails on record changes, enforce validation, create related records.</span>
            </div>
          </div>

          <div className="flow-type-card" style={{ borderColor: '#BBF7D0' }}>
            <div className="flow-type-card-icon">🔄</div>
            <div className="tag tag-green" style={{ marginBottom: 8 }}>Autolaunched Flow (No Trigger)</div>
            <h4>Called by another process</h4>
            <p>Launched by Apex, REST APIs, or called as a Subflow from another flow. No automatic trigger — runs only when explicitly invoked.</p>
            <div className="tip-box" style={{ marginTop: 12 }}>
              <span className="tip-box-icon">💡</span>
              <span><span className="tip-label">When to use:</span> Reusable logic modules (subflows), API-triggered automations.</span>
            </div>
          </div>

          <div className="flow-type-card" style={{ borderColor: '#DDD6FE' }}>
            <div className="flow-type-card-icon">🗓️</div>
            <div className="tag tag-purple" style={{ marginBottom: 8 }}>Schedule-Triggered Flow</div>
            <h4>Runs at a specific time</h4>
            <p>Launches at a specified time and frequency, processes records in a batch. Great for nightly/weekly maintenance jobs.</p>
            <div className="tip-box" style={{ marginTop: 12 }}>
              <span className="tip-box-icon">💡</span>
              <span><span className="tip-label">When to use:</span> Nightly data cleanup, weekly reminder emails, batch field updates.</span>
            </div>
          </div>
        </div>
      </section>

      {/* TOPIC 3 */}
      <section className="topic-section" id="flow-builder-ui">
        <h2>Navigating Flow Builder</h2>

        <div className="concept-card">
          <h4>The Three Areas of Flow Builder</h4>
          <table className="comparison-table" style={{ marginTop: 16 }}>
            <thead>
              <tr>
                <th>#</th>
                <th>Area</th>
                <th>Location</th>
                <th>What You Do There</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span style={{ background: '#FE9339', color: 'white', borderRadius: '50%', width: 24, height: 24, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.85rem' }}>1</span></td>
                <td>Toolbox</td>
                <td>Left panel</td>
                <td>Add Resources (variables, formulas, constants) and search for Elements to drag onto canvas</td>
              </tr>
              <tr>
                <td><span style={{ background: '#0176D3', color: 'white', borderRadius: '50%', width: 24, height: 24, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.85rem' }}>2</span></td>
                <td>Canvas</td>
                <td>Center</td>
                <td>Drag, connect, and configure Elements. Your flow diagram builds visually here.</td>
              </tr>
              <tr>
                <td><span style={{ background: '#06A59A', color: 'white', borderRadius: '50%', width: 24, height: 24, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.85rem' }}>3</span></td>
                <td>Button Bar</td>
                <td>Top</td>
                <td>Run (test), Debug (step-through), Save, and Activate your flow</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="join-me-box">
          <div className="join-me-label">📌 Instructor Demo Note</div>
          <h4>Show the "In case you get stuck" workflow</h4>
          <p>In the demo org, Solutions are pre-built completed flows students can reference. Point out: <strong>Setup → Flows → Solutions filter</strong>. Also show the Quick Reference document in Files.</p>
        </div>
      </section>

      {/* TOPIC 4 */}
      <section className="topic-section" id="translating-requirements">
        <h2>Translating Use Case Requirements</h2>

        <div className="concept-card">
          <h4>The 3-Step Translation Framework</h4>
          <p>Every flow starts with a business requirement. Use this framework to move from "what the user wants" to "what to build."</p>

          <div className="three-col" style={{ marginTop: 16 }}>
            <div className="var-card" style={{ borderLeft: '4px solid #7B5EA7' }}>
              <div className="var-card-type" style={{ color: '#7B5EA7' }}>Step 1</div>
              <h4>🗣️ Say it in Plain Language</h4>
              <p><em>"Users need a quick way to create new Opportunities for Prospect Accounts."</em></p>
              <p style={{ fontSize: '0.82rem', color: '#6B7280', marginTop: 8 }}>State what the user needs. No technical terms yet.</p>
            </div>
            <div className="var-card" style={{ borderLeft: '4px solid #0176D3' }}>
              <div className="var-card-type" style={{ color: '#0176D3' }}>Step 2</div>
              <h4>☁️ Say it in Salesforce</h4>
              <p><em>"I need to create an Opportunity record linked to an Account of Type = Prospect."</em></p>
              <p style={{ fontSize: '0.82rem', color: '#6B7280', marginTop: 8 }}>Identify the objects and operations (CRUD).</p>
            </div>
            <div className="var-card" style={{ borderLeft: '4px solid #06A59A' }}>
              <div className="var-card-type" style={{ color: '#06A59A' }}>Step 3</div>
              <h4>⚡ Say it in Flow</h4>
              <p><em>"I need a Get Records element to query Prospect Accounts, then a Screen element with a Create Records element..."</em></p>
              <p style={{ fontSize: '0.82rem', color: '#6B7280', marginTop: 8 }}>Map to specific Flow elements.</p>
            </div>
          </div>
        </div>

        <div className="tip-box">
          <span className="tip-box-icon">💡</span>
          <span><span className="tip-label">TIP:</span> Never jump straight to "Say it in Flow." Students who skip steps 1 and 2 build flows that solve the wrong problem, or miss edge cases that come up later.</span>
        </div>
      </section>

      <Quiz questions={quizL0} title="Lesson 0 Knowledge Check" />

      <div className="page-nav">
        <span />
        <Link to="/lesson/1" className="page-nav-btn primary">
          Lesson 1: Think Like a Developer →
        </Link>
      </div>
    </>
  );
}
