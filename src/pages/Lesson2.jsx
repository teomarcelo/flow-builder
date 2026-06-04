import { Link } from 'react-router-dom';
import Quiz from '../components/Quiz';
import { quizData } from '../data/curriculum';

const COLOR = '#0F766E';
const COLOR_BG = '#F0FDFA';

export default function Lesson2() {
  return (
    <>
      <div className="breadcrumb">
        <Link to="/">Home</Link><span className="breadcrumb-sep">/</span><span>Lesson 2</span>
      </div>

      <div className="lesson-header fade-up">
        <div className="lesson-badge" style={{ background: COLOR_BG, color: COLOR, border: '1px solid #99F6E4' }}>
          🖥️ Lesson 2
        </div>
        <h1>Plan &amp; Build Screen Flows</h1>
        <p>Elements, resources, field visibility, DML operations, fault handling, and surfacing your flow to users.</p>
      </div>

      {/* ── USE CASE 2-1 ── */}
      <section className="topic-section fade-up fade-up-1" id="use-case-21">
        <h2>The Use Case: Opportunity Wizard</h2>

        <div className="concept-card">
          <div className="concept-card-header">
            <div className="concept-card-icon">📋</div>
            <div>
              <h3>Use Case 2-1: Create Opportunity Wizard</h3>
              <div className="concept-card-subtitle">The scenario we build throughout Lesson 2</div>
            </div>
          </div>
          <div className="two-col">
            <div style={{ background: '#EFF6FF', borderRadius: 10, padding: 16 }}>
              <div style={{ fontSize: '.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '.1em', color: '#0369A1', marginBottom: 6 }}>👤 Osman Parks (User)</div>
              <p style={{ fontStyle: 'italic', fontSize: '.93rem' }}>"Users need a quick way to create new Opportunities for Prospect Accounts."</p>
            </div>
            <div style={{ background: COLOR_BG, borderRadius: 10, padding: 16 }}>
              <div style={{ fontSize: '.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '.1em', color: COLOR, marginBottom: 6 }}>👤 Angela McCoy (Admin)</div>
              <p style={{ fontStyle: 'italic', fontSize: '.93rem' }}>"If Stage is Closed Won or Closed Lost, a Closed Reason must be specified. If another Stage is selected, Close Date must be in the future."</p>
            </div>
          </div>
        </div>

        <div className="analogy-block">
          <div className="analogy-icon">🐘</div>
          <div>
            <div className="analogy-label">Approach: Eat the Elephant One Bite at a Time</div>
            <div className="analogy-text">Break this big requirement into pieces. Build the basic wizard first (screen + create), then add the Closed Reason logic, then the Close Date validation. Students who try to build everything at once get lost.</div>
          </div>
        </div>

        <div className="concept-card">
          <h4>Element Naming Conventions</h4>
          <table className="comparison-table" style={{ marginTop: 12 }}>
            <thead><tr><th>Element Type</th><th>Prefix</th><th>Full Example</th></tr></thead>
            <tbody>
              {[
                ['Screen', 'scr010', 'scr010 Contact Input'],
                ['Assignment', 'set020', 'set020 Contact Record'],
                ['Action', 'act030', 'act030 Send Email'],
                ['Get Records', 'get040', 'get040 Query Account'],
                ['Create Records', 'new050', 'new050 Insert Account'],
                ['Update Records', 'upd060', 'upd060 Update Account'],
                ['Delete Records', 'del070', 'del070 Delete Account'],
                ['Loop', 'lp080', 'lp080 Iterate over Accounts'],
                ['Subflow', 'sub090', 'sub090 Share Record'],
                ['Decision', 'if100', 'if100 Does the record exist?'],
              ].map(([type, prefix, example]) => (
                <tr key={type}><td>{type}</td><td><code>{prefix}</code></td><td>{example}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── TOPIC 2 — Elements ── */}
      <section className="topic-section" id="elements-resources">
        <h2>Topic 1: Elements &amp; Resources</h2>

        <div className="concept-card">
          <h4>Lookup Field vs. Record Choice Set</h4>
          <table className="comparison-table" style={{ marginTop: 12 }}>
            <thead><tr><th></th><th>Lookup Field</th><th>Record Choice Set</th></tr></thead>
            <tbody>
              <tr><td>Record access</td><td>ALL parent records</td><td>Max 200 records</td></tr>
              <tr><td>Filtering</td><td>No filtering</td><td>✅ Filter by any criteria (e.g., Type = Prospect)</td></tr>
              <tr><td>Create new record</td><td>✅ Can create a new parent record</td><td>No</td></tr>
              <tr><td>Display</td><td>Search/typeahead box</td><td>Picklist or radio buttons</td></tr>
              <tr><td>Use when</td><td>User can pick any related record</td><td>You need to restrict which records appear</td></tr>
            </tbody>
          </table>
          <div className="analogy-block" style={{ marginBottom: 0 }}>
            <div className="analogy-icon">🍕</div>
            <div>
              <div className="analogy-label">Why This Matters for Use Case 2-1</div>
              <div className="analogy-text">A Lookup would show ALL Accounts — including non-prospects. The Record Choice Set filters to Type = Prospect so users can only select the right Account type. The 200-record limit is fine for most prospect lists.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TOPIC 3 — Field Visibility ── */}
      <section className="topic-section" id="field-visibility">
        <h2>Topic 2: Field Visibility</h2>

        <div className="definition-box" style={{ borderLeftColor: COLOR }}>
          <div className="definition-box-icon">📖</div>
          <div>
            <div className="definition-label">Definition</div>
            <div className="definition-text"><strong>Field Visibility</strong> lets you conditionally show or hide any component on a Screen element based on current field values — in real time, without navigating to a new screen.</div>
          </div>
        </div>

        <div className="join-me-box">
          <div className="join-me-label">📌 How It Works</div>
          <h4>Show "Closed Reason" only when Stage is Closed Won or Closed Lost</h4>
          <ol style={{ marginTop: 8 }}>
            <li>Click on the Closed Reason field in the Screen element</li>
            <li>Click <strong>"Set Field Visibility"</strong></li>
            <li>Set <strong>"When to Display Field"</strong> to <strong>"Any Condition Is Met (OR)"</strong></li>
            <li>Add condition: <code>{'{!varOppRec.StageName}'}</code> Equals <code>"Closed Won"</code></li>
            <li>Add condition: <code>{'{!varOppRec.StageName}'}</code> Equals <code>"Closed Lost"</code></li>
          </ol>
        </div>

        <div className="tip-box">
          <span className="tip-box-icon">💡</span>
          <span><span className="tip-label">Why Not Validation Rule?</span>Field Visibility shows/hides in real time as users interact. A validation rule only fires on save — the user fills out the whole form first, then gets an error. Field Visibility guides users as they go.</span>
        </div>
      </section>

      {/* ── TOPIC 4 — DML ── */}
      <section className="topic-section" id="dml-data">
        <h2>Topic 3: Data Manipulation Language (DML)</h2>

        <div className="definition-box" style={{ borderLeftColor: COLOR }}>
          <div className="definition-box-icon">📖</div>
          <div>
            <div className="definition-label">Definition</div>
            <div className="definition-text"><strong>DML</strong> is used to add, modify, or remove data in a database. In Salesforce: Insert, Update, Delete, Undelete, Upsert, and Merge.</div>
          </div>
        </div>

        <table className="comparison-table">
          <thead><tr><th>DML Operation</th><th>Flow Element</th><th>What It Does</th><th>In Flow?</th></tr></thead>
          <tbody>
            {[
              ['Insert', 'Create Records', 'Add new records to the database', '✅ Yes'],
              ['Update', 'Update Records', 'Change existing records', '✅ Yes'],
              ['Delete', 'Delete Records', 'Send records to Recycle Bin', '✅ Yes'],
              ['Upsert', 'Create Records (option)', 'Update if exists, Insert if not', '✅ Option in Create Records'],
              ['Undelete', 'n/a', 'Restore from Recycle Bin', '❌ Not available'],
              ['Merge', 'n/a', 'Combine duplicate records', '❌ Not available'],
            ].map(([dml, elem, what, avail]) => (
              <tr key={dml}>
                <td><code>{dml}</code></td>
                <td>{elem}</td>
                <td>{what}</td>
                <td style={{ color: avail.startsWith('✅') ? '#059669' : '#DC2626', fontWeight: 600 }}>{avail}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="concept-card">
          <h4>Hide Previous Button After DML — Always</h4>
          <div className="before-after">
            <div className="before-col">
              <div className="before-label">❌ Don't Do This</div>
              <h4>Previous button visible after Create Records</h4>
              <p style={{ fontSize: '.88rem' }}>User goes back → hits Next again → Create Records fires again → <strong>duplicate record created</strong>. DML does not undo when navigating backward.</p>
            </div>
            <div className="after-col">
              <div className="after-label">✅ Do This</div>
              <h4>Hide Previous on success screen</h4>
              <p style={{ fontSize: '.88rem' }}>On the screen after Create Records, set <strong>Previous Button → Hide Previous</strong>. Prevents duplicate record creation entirely.</p>
            </div>
          </div>
        </div>

        <div className="concept-card">
          <h4>Hyperlink to Newly Created Record</h4>
          <p>After Create Records runs, the flow populates <code>{'{!varOppRec.Id}'}</code>. On your success screen Display Text:</p>
          <div className="code-block">
            <div className="code-block-header">
              <div className="code-block-dots"><span className="code-dot code-dot-red"/><span className="code-dot code-dot-yellow"/><span className="code-dot code-dot-green"/></div>
              <span className="code-block-label">Display Text — Success Screen</span>
            </div>
            <pre>{`Link Title:  {!varOppRec.Name}
Link URL:    {!varOppRec.Id}

→ Creates a clickable link to the newly created Opportunity`}</pre>
          </div>
        </div>

        <div className="concept-card">
          <h4>Formula Resource — Validate Close Date</h4>
          <div className="code-block">
            <div className="code-block-header">
              <div className="code-block-dots"><span className="code-dot code-dot-red"/><span className="code-dot code-dot-yellow"/><span className="code-dot code-dot-green"/></div>
              <span className="code-block-label">Formula Resource (Boolean)</span>
            </div>
            <pre>{`if(
  {!closeDate} >= {!$Flow.CurrentDate} ||
  ISPICKVAL({!varOppRec.StageName}, 'Closed Won') ||
  ISPICKVAL({!varOppRec.StageName}, 'Closed Lost'),
  True, False
)

// Returns True (valid) when:
// - Close Date is today or in the future, OR
// - Stage is Closed Won or Closed Lost`}</pre>
          </div>
        </div>
      </section>

      {/* ── TOPIC 5 — Faults ── */}
      <section className="topic-section" id="faults">
        <h2>Topic 4: Faults &amp; Error Handling</h2>

        <div className="definition-box" style={{ borderLeftColor: COLOR }}>
          <div className="definition-box-icon">📖</div>
          <div>
            <div className="definition-label">Definition</div>
            <div className="definition-text"><strong>Faults</strong> are exceptions that can happen while processing data elements. They are the declarative equivalent of try/catch in code.</div>
          </div>
        </div>

        <div className="before-after">
          <div className="before-col">
            <div className="before-label">❌ No Fault Path</div>
            <h4>Generic, useless error</h4>
            <p style={{ fontSize: '.88rem', fontStyle: 'italic' }}>"An unhandled fault has occurred in this flow. Please contact your system administrator."</p>
            <p style={{ fontSize: '.88rem' }}>Nobody knows what to fix. Support tickets pile up.</p>
          </div>
          <div className="after-col">
            <div className="after-label">✅ With Fault Path</div>
            <h4>Specific, actionable error</h4>
            <p style={{ fontSize: '.88rem', fontStyle: 'italic' }}>"REQUIRED_FIELD_MISSING: Required fields are missing: [CloseDate]"</p>
            <p style={{ fontSize: '.88rem' }}>Admin immediately knows which field to fix.</p>
          </div>
        </div>

        <div className="join-me-box">
          <div className="join-me-label">📌 How to Add a Fault Path</div>
          <h4>Every data element needs one</h4>
          <ol style={{ marginTop: 8 }}>
            <li>Hover over your data element (Create Records, Update, etc.)</li>
            <li>Click the 3 vertical dots → <strong>Add Fault Path</strong></li>
            <li>Connect to a Screen element</li>
            <li>Add Display Text with <code>{'{!$Flow.FaultMessage}'}</code></li>
          </ol>
        </div>

        <div className="tip-box">
          <span className="tip-box-icon">⚠️</span>
          <span><span className="tip-label">Always</span>Every single data element in every flow should have a fault path. Students learn this lesson the hard way when a production flow fails silently.</span>
        </div>
      </section>

      {/* ── TOPIC 6 — Surfacing ── */}
      <section className="topic-section" id="surfacing">
        <h2>Topic 5: Surfacing &amp; Finishing a Flow</h2>

        <div className="three-col">
          {[
            { color: '#0369A1', type: 'Option 1', icon: '⚡', title: 'Quick Action', desc: 'Add to a page layout as a button. Users click it from the record page. Most common for record-specific flows.' },
            { color: COLOR, type: 'Option 2', icon: '🏗️', title: 'Lightning App Builder', desc: 'Add as a component to any record page, home page, or app page. Visible on page load.' },
            { color: '#D97706', type: 'Option 3', icon: '🔧', title: 'Utility Bar', desc: 'Always accessible at the bottom of a Lightning App. Great for frequently used wizards.' },
          ].map(s => (
            <div key={s.type} className="var-card" style={{ borderTop: `3px solid ${s.color}` }}>
              <div className="var-card-type" style={{ color: s.color }}>{s.type}</div>
              <h4>{s.icon} {s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="note-box">
          <span className="note-box-icon">ℹ️</span>
          <span><strong>Don't forget to Activate!</strong> A flow not in Active status won't run — even if it's on a page. New admins often build a perfect flow and wonder why nothing happens.</span>
        </div>
      </section>

      <Quiz questions={quizData.l2} title="Lesson 2 Knowledge Check — Screen Flows" />

      <div className="page-nav">
        <Link to="/lesson/1" className="page-nav-btn">← Lesson 1: Think Like a Developer</Link>
        <Link to="/lesson/3" className="page-nav-btn primary">Lesson 3: Record-Triggered Flows →</Link>
      </div>
    </>
  );
}
