import { Link } from 'react-router-dom';
import Quiz from '../components/Quiz';
import { quizData } from '../data/curriculum';

const COLOR = '#D97706';
const COLOR_BG = '#FFFBEB';

export default function Lesson3() {
  return (
    <>
      <div className="breadcrumb">
        <Link to="/">Home</Link><span className="breadcrumb-sep">/</span><span>Lesson 3</span>
      </div>

      <div className="lesson-header fade-up">
        <div className="lesson-badge" style={{ background: COLOR_BG, color: COLOR, border: '1px solid #FDE68A' }}>
          ⚡ Lesson 3
        </div>
        <h1>Plan &amp; Build Record-Triggered Flows</h1>
        <p>Save order of execution, before/after save triggers, global variables, flow-based validation, subflows, and scheduled paths.</p>
      </div>

      {/* ── TOPIC 1 — Save Order ── */}
      <section className="topic-section fade-up fade-up-1" id="save-order">
        <h2>Topic 1: The Save Order of Execution</h2>

        <div className="definition-box" style={{ borderLeftColor: COLOR }}>
          <div className="definition-box-icon">📖</div>
          <div>
            <div className="definition-label">Definition</div>
            <div className="definition-text">The <strong>Save Order of Execution</strong> describes the series of events that occur on the Salesforce platform when a record is saved. Data is first saved but NOT committed — automations run — then data is committed to the database.</div>
          </div>
        </div>

        <div className="concept-card">
          <h4>What Happens When You Save a Record?</h4>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', margin: '16px 0' }}>
            {[
              { label: 'User Saves', color: '#0369A1' },
              { label: '→' },
              { label: 'Validation', color: '#7C3AED' },
              { label: '→' },
              { label: 'Before-Save Flows', color: '#D97706' },
              { label: '→' },
              { label: 'SAVE to DB', color: '#0F766E' },
              { label: '→' },
              { label: 'After-Save Flows', color: '#D97706' },
              { label: '→' },
              { label: 'COMMIT', color: '#059669' },
            ].map((item, i) => (
              item.label === '→'
                ? <span key={i} style={{ color: '#94A3B8', fontWeight: 700 }}>→</span>
                : <span key={i} style={{ background: item.color, color: 'white', padding: '5px 12px', borderRadius: 20, fontSize: '.8rem', fontWeight: 700 }}>{item.label}</span>
            ))}
          </div>
          <div className="note-box">
            <span className="note-box-icon">ℹ️</span>
            <span><strong>Record-Triggered Flows execute at TWO points</strong> in this order — once before the record is saved (Fast Field Update), and once after it's saved (Actions and Related Records).</span>
          </div>
        </div>
      </section>

      {/* ── TOPIC 2 — Before/After Save ── */}
      <section className="topic-section" id="before-after-save">
        <h2>Topic 2: Before Save vs. After Save</h2>

        <div className="before-after" style={{ marginBottom: 24 }}>
          <div className="before-col" style={{ background: '#FFFBEB', borderColor: '#FED7AA' }}>
            <div className="before-label" style={{ background: '#D97706' }}>⚡ Fast Field Updates (Before Save)</div>
            <h4 style={{ color: '#7C2D12' }}>Runs BEFORE record is saved</h4>
            <div className="two-col" style={{ marginTop: 12, gap: 8 }}>
              <div>
                <div style={{ fontSize: '.72rem', fontWeight: 800, color: '#059669', marginBottom: 6 }}>✅ CAN</div>
                <ul style={{ fontSize: '.83rem' }}>
                  <li>Change data before save</li>
                  <li>Query other objects</li>
                  <li>Custom Error (abort save)</li>
                </ul>
              </div>
              <div>
                <div style={{ fontSize: '.72rem', fontWeight: 800, color: '#DC2626', marginBottom: 6 }}>❌ CANNOT</div>
                <ul style={{ fontSize: '.83rem' }}>
                  <li>Send emails / notifications</li>
                  <li>Create related records</li>
                  <li>Call Apex actions</li>
                  <li>Access new record's ID</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="after-col" style={{ background: '#EFF6FF', borderColor: '#BFDBFE' }}>
            <div className="after-label" style={{ background: '#0369A1' }}>🔵 Actions &amp; Related Records (After Save)</div>
            <h4 style={{ color: '#1E3A5F' }}>Runs AFTER record is saved</h4>
            <div className="two-col" style={{ marginTop: 12, gap: 8 }}>
              <div>
                <div style={{ fontSize: '.72rem', fontWeight: 800, color: '#059669', marginBottom: 6 }}>✅ CAN</div>
                <ul style={{ fontSize: '.83rem' }}>
                  <li>Send emails / notifications</li>
                  <li>Create/update related records</li>
                  <li>Call Apex actions</li>
                  <li>Call Subflows</li>
                  <li>Access new record's ID</li>
                </ul>
              </div>
              <div>
                <div style={{ fontSize: '.72rem', fontWeight: 800, color: '#DC2626', marginBottom: 6 }}>❌ CANNOT</div>
                <ul style={{ fontSize: '.83rem' }}>
                  <li>Directly change the triggering record (must use Update Records element)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="analogy-block">
          <div className="analogy-icon">🍕</div>
          <div>
            <div className="analogy-label">Chef vs. Manager Analogy</div>
            <div className="analogy-text">
              <strong>Before Save = Chef tasting the pizza before it goes to the table.</strong> Can fix it, season it, send it back. But can't give the customer their receipt yet (no ID exists).<br /><br />
              <strong>After Save = Manager following up after pizza was delivered.</strong> Can send a thank-you email, update loyalty points, notify staff. But can't take the pizza back off the table.
            </div>
          </div>
        </div>

        <div className="concept-card">
          <h4>Best Practice: Multiple Small Flows Per Object</h4>
          <div className="before-after">
            <div className="before-col">
              <div className="before-label">❌ One Giant Flow</div>
              <h4>Spaghetti logic</h4>
              <p style={{ fontSize: '.88rem' }}>Hundreds of elements. Impossible to test, debug, or maintain. When it breaks, finding the issue takes hours.</p>
            </div>
            <div className="after-col">
              <div className="after-label">✅ Multiple Focused Flows</div>
              <h4>One purpose per flow</h4>
              <p style={{ fontSize: '.88rem' }}>FLOW 1: Validate Close Date<br />FLOW 2: Update External Link<br />FLOW 3: Share to Auditor<br /><br />Each has focused entry criteria. Easy to disable one without breaking others.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TOPIC 3 — $Record ── */}
      <section className="topic-section" id="record-prior">
        <h2>Topic 3: $Record &amp; $Record__Prior</h2>

        <div className="two-col">
          <div className="concept-card" style={{ marginBottom: 0 }}>
            <div className="definition-box" style={{ borderLeftColor: '#0369A1' }}>
              <div className="definition-box-icon">📖</div>
              <div>
                <div className="definition-label">$Record</div>
                <div className="definition-text"><strong>Current</strong> field values. Available on CREATE and UPDATE. Reference: <code>{'{!$Record.CloseDate}'}</code></div>
              </div>
            </div>
            <ul>
              <li>Reference parent objects up to 10 relationships away</li>
              <li>In Fast Field Updates: change fields directly (no Update Records needed)</li>
            </ul>
          </div>
          <div className="concept-card" style={{ marginBottom: 0 }}>
            <div className="definition-box" style={{ borderLeftColor: '#7C3AED' }}>
              <div className="definition-box-icon">📖</div>
              <div>
                <div className="definition-label">$Record__Prior</div>
                <div className="definition-text"><strong>Previous</strong> field values — what the record looked like before this save. Only available on <strong>UPDATE</strong>.</div>
              </div>
            </div>
            <ul>
              <li>Detect changes: compare <code>{'{!$Record.StageName}'}</code> to <code>{'{!$Record__Prior.StageName}'}</code></li>
              <li>NOT available on CREATE (no prior version exists)</li>
            </ul>
          </div>
        </div>

        <div className="analogy-block" style={{ marginTop: 16 }}>
          <div className="analogy-icon">🕵️</div>
          <div>
            <div className="analogy-label">Before-Photo Analogy</div>
            <div className="analogy-text"><code>$Record__Prior</code> is your before-photo. To detect "did Stage change?" compare the current photo (<code>$Record.StageName</code>) to the before-photo (<code>$Record__Prior.StageName</code>). If they're different, something changed.</div>
          </div>
        </div>

        <table className="comparison-table">
          <thead><tr><th>Variable</th><th>On CREATE</th><th>On UPDATE</th></tr></thead>
          <tbody>
            <tr><td><code>$Record</code></td><td style={{ color: '#059669', fontWeight: 600 }}>✅ Available</td><td style={{ color: '#059669', fontWeight: 600 }}>✅ Available</td></tr>
            <tr><td><code>$Record__Prior</code></td><td style={{ color: '#DC2626', fontWeight: 600 }}>❌ Not available (record is brand new)</td><td style={{ color: '#059669', fontWeight: 600 }}>✅ Available</td></tr>
          </tbody>
        </table>
      </section>

      {/* ── TOPIC 4 — Flow Validation ── */}
      <section className="topic-section" id="flow-validation">
        <h2>Topic 4: Flow-Based Validation Rules</h2>

        <div className="concept-card">
          <h4>Use Case 3-1: Validate Close Date — No Holidays</h4>
          <div className="two-col" style={{ marginTop: 12 }}>
            <div style={{ background: '#FFF1F2', borderRadius: 10, padding: 16 }}>
              <div style={{ fontSize: '.72rem', fontWeight: 800, color: '#DC2626', textTransform: 'uppercase', marginBottom: 6 }}>The Problem</div>
              <p style={{ fontSize: '.9rem' }}>Prevent users from setting an Opportunity Close Date as a company holiday. Standard Validation Rules can't cross unrelated objects (Holiday ≠ Opportunity).</p>
            </div>
            <div style={{ background: '#F0FDF4', borderRadius: 10, padding: 16 }}>
              <div style={{ fontSize: '.72rem', fontWeight: 800, color: '#059669', textTransform: 'uppercase', marginBottom: 6 }}>The Solution</div>
              <p style={{ fontSize: '.9rem' }}>Record-Triggered Flow (Fast Field Update) → Get Records queries the Holiday object → Custom Error element if a match is found.</p>
            </div>
          </div>
        </div>

        <div className="definition-box" style={{ borderLeftColor: COLOR }}>
          <div className="definition-box-icon">📖</div>
          <div>
            <div className="definition-label">Custom Error Element</div>
            <div className="definition-text">The Custom Error element <strong>terminates and rolls back the entire transaction</strong> — nothing saves. It displays an error message on the page (inline on a field or in a popup) and writes to debug logs.</div>
          </div>
        </div>

        <div className="analogy-block">
          <div className="analogy-icon">🚫</div>
          <div>
            <div className="analogy-label">Bouncer Analogy</div>
            <div className="analogy-text">The Custom Error element is like a bouncer at the door. If you don't meet the criteria (Close Date is a holiday), you're stopped at the entrance — the record doesn't save. The bouncer even tells you exactly why: "Close date cannot be on a holiday. (New Years Day)"</div>
          </div>
        </div>

        <div className="join-me-box">
          <div className="join-me-label">📌 Building Use Case 3-1</div>
          <h4>Algorithm: Validate Close Date of Opportunity</h4>
          <ol style={{ marginTop: 8 }}>
            <li>Record-Triggered Flow on Opportunity → <strong>Fast Field Update</strong></li>
            <li>Entry criteria: triggers on Create AND Update when Close Date is changed</li>
            <li><strong>Get Records</strong>: Holiday where <code>HolidayDate = {'{!$Record.CloseDate}'}</code>, First record only</li>
            <li><strong>Decision</strong>: Did Get Records find a holiday? (result not null?)</li>
            <li>If yes → <strong>Custom Error</strong>: "Close date cannot be on a holiday. ({'{!get010.Name}'})"</li>
            <li>Set error to appear <em>inline on the Close Date field</em></li>
          </ol>
        </div>
      </section>

      {/* ── TOPIC 5 — Replace Formula Fields ── */}
      <section className="topic-section" id="formula-fields">
        <h2>Topic 5: Replace Formula Fields with Flows</h2>

        <div className="concept-card">
          <h4>Use Case 3-2: Replace External Link Formula Field</h4>
          <div className="before-after">
            <div className="before-col">
              <div className="before-label">❌ Formula Field</div>
              <h4>Recalculates on every page load</h4>
              <p style={{ fontSize: '.88rem' }}>50 formula fields = 50 calculations every time anyone opens an Account. Page loading errors begin.</p>
            </div>
            <div className="after-col">
              <div className="after-label">✅ Record-Triggered Flow</div>
              <h4>Pre-computes and stores the value</h4>
              <p style={{ fontSize: '.88rem' }}>Flow runs once on save, stores result as a regular field. Record loads instantly — calculation already done.</p>
            </div>
          </div>
        </div>

        <div className="analogy-block">
          <div className="analogy-icon">⚡</div>
          <div>
            <div className="analogy-label">Pre-cooked vs. Made-to-Order</div>
            <div className="analogy-text">Formula fields are like ordering a pizza made-to-order every time someone looks at the menu. Record-Triggered Flows are like having the pizza pre-baked in a display case — customers (page viewers) get it instantly, no wait.</div>
          </div>
        </div>

        <div className="concept-card">
          <h4>Text Template Resource — Building Hyperlinks in Flows</h4>
          <div className="code-block">
            <div className="code-block-header">
              <div className="code-block-dots"><span className="code-dot code-dot-red"/><span className="code-dot code-dot-yellow"/><span className="code-dot code-dot-green"/></div>
              <span className="code-block-label">Text Template Resource (Rich Text)</span>
            </div>
            <pre>{`// Original Formula Field:
HYPERLINK(
  "https://www.Salesforce.com?dept=" & RecordType.DeveloperName
  & "&Id=" & CASESAFEID(Id),
  RecordType.DeveloperName
)

// Flow Text Template equivalent:
Link Title: {!$Record.RecordType.Name}
Link URL:   https://www.salesforce.com/?dept={!$Record.RecordType.DeveloperName}&Id={!$Record.Id}

// NOTE: Target field must be Rich Text Area type (not plain Text)`}</pre>
          </div>
        </div>

        <div className="tip-box">
          <span className="tip-box-icon">💡</span>
          <span><span className="tip-label">Best Practice</span>Use SEPARATE flows for Create and Update. Different entry criteria apply — simpler logic, cleaner governor limits, easier to test each independently.</span>
        </div>
      </section>

      {/* ── TOPIC 6 — Subflows ── */}
      <section className="topic-section" id="subflows">
        <h2>Topic 6: Subflows</h2>

        <div className="definition-box" style={{ borderLeftColor: COLOR }}>
          <div className="definition-box-icon">📖</div>
          <div>
            <div className="definition-label">Definition</div>
            <div className="definition-text">A <strong>Subflow</strong> is a reusable flow called from another flow. The calling flow passes inputs in and receives outputs back — like a function or method in code.</div>
          </div>
        </div>

        <div className="concept-card">
          <h4>Use Case 3-3: Share Account Record to Auditor</h4>
          <p style={{ marginBottom: 12 }}>Compliance officers assign auditors to Accounts. Once assigned, the Account must be automatically shared with that auditor via the AccountShare object.</p>

          <h4 style={{ marginBottom: 8 }}>Share Object Structure</h4>
          <table className="comparison-table">
            <thead><tr><th>Field</th><th>Value</th><th>Purpose</th></tr></thead>
            <tbody>
              {[
                ['ParentId', 'Account ID', 'The record being shared'],
                ['UserOrGroupId', 'User/Group/Role ID', 'Who gets access'],
                ['AccessLevel', 'Read | Edit | All', 'What level of access'],
                ['RowCause', 'Sharing Reason', 'Why this sharing rule exists'],
              ].map(([f, v, p]) => <tr key={f}><td>{f}</td><td><code>{v}</code></td><td>{p}</td></tr>)}
            </tbody>
          </table>

          <div className="note-box" style={{ marginTop: 0 }}>
            <span className="note-box-icon">ℹ️</span>
            <span>The pattern works for any object: Account → <strong>AccountShare</strong>, Custom_Object__c → <strong>Custom_Object__Share</strong></span>
          </div>
        </div>

        <div className="three-col">
          {[
            { color: '#0F766E', reason: 'Reason 1', icon: '♻️', title: 'Reusability', desc: 'The "Share Record" logic can be called from ANY flow that needs sharing — build once, use everywhere.' },
            { color: '#0369A1', reason: 'Reason 2', icon: '🧩', title: 'Modularity', desc: 'Test each subflow in isolation. Fix it once in the subflow and all callers benefit automatically.' },
            { color: '#7C3AED', reason: 'Reason 3', icon: '📖', title: 'Readability', desc: 'The parent flow stays clean. Complexity is hidden inside the subflow where it belongs.' },
          ].map(s => (
            <div key={s.reason} className="var-card" style={{ borderTop: `3px solid ${s.color}` }}>
              <div className="var-card-type" style={{ color: s.color }}>{s.reason}</div>
              <h4>{s.icon} {s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TOPIC 7 — Scheduled Paths ── */}
      <section className="topic-section" id="scheduled-paths">
        <h2>Topic 7: Scheduled Paths</h2>

        <div className="definition-box" style={{ borderLeftColor: COLOR }}>
          <div className="definition-box-icon">📖</div>
          <div>
            <div className="definition-label">Definition</div>
            <div className="definition-text"><strong>Scheduled Paths</strong> execute at a specified time <em>relative to a date/time field</em> on the triggering record. They run asynchronously after the record is saved.</div>
          </div>
        </div>

        <div className="two-col">
          <div className="concept-card" style={{ marginBottom: 0 }}>
            <h4>Common Use Cases</h4>
            <ul style={{ marginTop: 8 }}>
              <li>Send reminder email <strong>7 days before Close Date</strong></li>
              <li>Escalate a Case <strong>4 hours after creation</strong> if unassigned</li>
              <li>Auto-close Opportunities <strong>30 days after last activity</strong></li>
              <li>Notify manager <strong>1 day before contract expires</strong></li>
            </ul>
          </div>
          <div className="concept-card" style={{ marginBottom: 0 }}>
            <h4>Key Characteristics</h4>
            <ul style={{ marginTop: 8 }}>
              <li>Runs <strong>asynchronously</strong> — after save completes</li>
              <li>Time offset is relative to a date/time field on the record</li>
              <li>Can offset in minutes, hours, or days</li>
              <li>Fires even if the user who saved is no longer logged in</li>
            </ul>
          </div>
        </div>

        <div className="analogy-block">
          <div className="analogy-icon">⏰</div>
          <div>
            <div className="analogy-label">Alarm Clock Analogy</div>
            <div className="analogy-text">A Scheduled Path is like setting an alarm on a record. When you save an Opportunity with a Close Date, Flow sets an alarm: "7 days before that date, fire this email." The alarm fires automatically — you don't need to do anything else.</div>
          </div>
        </div>
      </section>

      <Quiz questions={quizData.l3} title="Lesson 3 Knowledge Check — Record-Triggered Flows" />

      <div className="page-nav">
        <Link to="/lesson/2" className="page-nav-btn">← Lesson 2: Screen Flows</Link>
        <Link to="/" className="page-nav-btn primary">🏠 Back to Home</Link>
      </div>
    </>
  );
}
