import { Link } from 'react-router-dom';
import Quiz from '../components/Quiz';
import { quizData } from '../data/curriculum';

export default function Lesson3() {
  return (
    <>
      <div className="breadcrumb">
        <Link to="/">Home</Link>
        <span className="breadcrumb-sep">/</span>
        <span>Lesson 3</span>
      </div>

      <div className="lesson-header fade-up">
        <div className="lesson-badge" style={{ background: '#FFF7ED', color: '#E56000' }}>
          ⚡ Lesson 3
        </div>
        <h1>Plan &amp; Build Record-Triggered Flows</h1>
        <p>Save order of execution, before/after save triggers, global variables, flow-based validation, subflows, and scheduled paths.</p>
      </div>

      {/* TOPIC 1 — Save Order */}
      <section className="topic-section fade-up fade-up-1" id="save-order">
        <h2>Topic 1: The Save Order of Execution</h2>

        <div className="definition-box">
          <div className="definition-box-icon">📖</div>
          <div>
            <div className="definition-label">Definition</div>
            <div className="definition-text">
              The <strong>Save Order of Execution</strong> describes the series of events that occur on the Salesforce platform when a record is saved. Data is first saved but NOT committed — then automations run — then data is committed to the database.
            </div>
          </div>
        </div>

        <div className="concept-card">
          <h4>What Happens When You Save a Record?</h4>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginTop: 16, marginBottom: 16 }}>
            {[
              { label: 'User Saves', color: '#0176D3' },
              { label: '→', color: '#999' },
              { label: 'Validation', color: '#7B5EA7' },
              { label: '→', color: '#999' },
              { label: 'Before-Save Flows', color: '#FE9339' },
              { label: '→', color: '#999' },
              { label: 'SAVE (DB)', color: '#06A59A' },
              { label: '→', color: '#999' },
              { label: 'After-Save Flows', color: '#FE9339' },
              { label: '→', color: '#999' },
              { label: 'COMMIT', color: '#2E844A' },
            ].map((item, i) => (
              item.label === '→'
                ? <span key={i} style={{ color: '#aaa', fontWeight: 700 }}>→</span>
                : <span key={i} style={{ background: item.color, color: 'white', padding: '5px 12px', borderRadius: 20, fontSize: '0.82rem', fontWeight: 700 }}>{item.label}</span>
            ))}
          </div>
          <div className="note-box">
            <span className="note-box-icon">ℹ️</span>
            <span><strong>Record-Triggered Flows execute at TWO points</strong> in this order — once before the record is saved to the database (Fast Field Update), and once after it's saved (Actions and Related Records).</span>
          </div>
        </div>
      </section>

      {/* TOPIC 2 — Before/After Save */}
      <section className="topic-section" id="before-after-save">
        <h2>Topic 2: Before Save vs. After Save</h2>

        <div className="before-after" style={{ marginBottom: 24 }}>
          <div className="before-col" style={{ background: '#FFF7ED', borderColor: '#FED7AA' }}>
            <div className="before-label" style={{ color: '#E56000' }}>⚡ Fast Field Updates (Before Save)</div>
            <h4 style={{ color: '#7C2D12' }}>Runs BEFORE record is saved to DB</h4>
            <div className="two-col" style={{ marginTop: 12, gap: 8 }}>
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#2E844A', marginBottom: 4 }}>✅ CAN DO</div>
                <ul style={{ fontSize: '0.82rem' }}>
                  <li>Change data before it saves</li>
                  <li>Query data from other objects</li>
                  <li>Show Custom Error (abort save)</li>
                  <li>Reference $Record</li>
                </ul>
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#BA0517', marginBottom: 4 }}>❌ CANNOT DO</div>
                <ul style={{ fontSize: '0.82rem' }}>
                  <li>Send emails / notifications</li>
                  <li>Create related records</li>
                  <li>Call Apex actions</li>
                  <li>Access the new record's ID</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="after-col" style={{ background: '#EFF6FF', borderColor: '#BFDBFE' }}>
            <div className="after-label" style={{ color: '#0176D3' }}>🔵 Actions &amp; Related Records (After Save)</div>
            <h4 style={{ color: '#1E3A5F' }}>Runs AFTER record is saved to DB</h4>
            <div className="two-col" style={{ marginTop: 12, gap: 8 }}>
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#2E844A', marginBottom: 4 }}>✅ CAN DO</div>
                <ul style={{ fontSize: '0.82rem' }}>
                  <li>Send emails / notifications</li>
                  <li>Create/update related records</li>
                  <li>Call Apex actions</li>
                  <li>Call Subflows</li>
                  <li>Access new record's ID</li>
                </ul>
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#BA0517', marginBottom: 4 }}>❌ CANNOT DO</div>
                <ul style={{ fontSize: '0.82rem' }}>
                  <li>Directly change the triggering record (use Update Records element instead)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="analogy-block">
          <div className="analogy-icon">🍕</div>
          <div>
            <div className="analogy-label">Pizza Analogy — Chef vs. Manager</div>
            <div className="analogy-text">
              <strong>Before Save = Chef tasting the pizza before it goes out.</strong> Can fix it, season it, send it back. But can't give the customer their receipt yet (no ID).<br /><br />
              <strong>After Save = Manager following up after the pizza was delivered.</strong> Can send a thank-you email, update loyalty points, notify kitchen staff. But can't take the pizza back off the table.
            </div>
          </div>
        </div>

        <div className="concept-card">
          <h4>Best Practice: Multiple Small Flows Per Object</h4>
          <div className="before-after">
            <div className="before-col">
              <div className="before-label">❌ One Giant Flow</div>
              <h4>Spaghetti logic</h4>
              <p style={{ fontSize: '0.88rem' }}>One flow with hundreds of elements handles all Account automation. Impossible to test, debug, maintain, or hand off. When it breaks, finding the issue is a nightmare.</p>
            </div>
            <div className="after-col">
              <div className="after-label">✅ Multiple Focused Flows</div>
              <h4>FLOW 1: Validate Close Date</h4>
              <p style={{ fontSize: '0.88rem' }}>FLOW 2: Update External Link Field<br />FLOW 3: Share to Auditor<br />FLOW 4: Send Welcome Email<br /><br />Each flow has focused entry criteria. Easy to test each independently. Easy to disable one without breaking others.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TOPIC 3 — $Record & $Record__Prior */}
      <section className="topic-section" id="record-prior">
        <h2>Topic 3: $Record &amp; $Record__Prior</h2>

        <div className="two-col">
          <div className="concept-card" style={{ marginBottom: 0 }}>
            <div className="definition-box">
              <div className="definition-box-icon">📖</div>
              <div>
                <div className="definition-label">$Record Global Variable</div>
                <div className="definition-text">Contains the <strong>current</strong> field values of the record that triggered the flow. Available on CREATE and UPDATE.</div>
              </div>
            </div>
            <ul>
              <li>Reference fields: <code>{'{!$Record.CloseDate}'}</code></li>
              <li>Reference parent objects up to 10 relationships away</li>
              <li>In Fast Field Updates: change <code>$Record</code> fields directly (no Update Records element needed)</li>
            </ul>
          </div>
          <div className="concept-card" style={{ marginBottom: 0 }}>
            <div className="definition-box">
              <div className="definition-box-icon">📖</div>
              <div>
                <div className="definition-label">$Record__Prior Global Variable</div>
                <div className="definition-text">Contains the <strong>previous</strong> field values — what the record looked like BEFORE this save. Only available on UPDATE.</div>
              </div>
            </div>
            <ul>
              <li>Reference: <code>{'{!$Record__Prior.StageName}'}</code></li>
              <li>Use to detect <em>changes</em>: "Did Stage change FROM Prospecting?"</li>
              <li>NOT available on CREATE (no prior version exists)</li>
            </ul>
          </div>
        </div>

        <div className="analogy-block" style={{ marginTop: 16 }}>
          <div className="analogy-icon">🕵️</div>
          <div>
            <div className="analogy-label">Detective Analogy for $Record__Prior</div>
            <div className="analogy-text">
              <code>$Record__Prior</code> is your before-photo. If you want to know "did the Stage change?" you compare the current photo (<code>$Record.StageName</code>) to the before-photo (<code>$Record__Prior.StageName</code>). If they're different, something changed.
            </div>
          </div>
        </div>

        <div className="concept-card">
          <h4>Availability Matrix</h4>
          <table className="comparison-table">
            <thead>
              <tr><th>Variable</th><th>CREATE trigger</th><th>UPDATE trigger</th></tr>
            </thead>
            <tbody>
              <tr><td><code>$Record</code></td><td>✅ Available</td><td>✅ Available</td></tr>
              <tr><td><code>$Record__Prior</code></td><td>❌ Not available (no prior version)</td><td>✅ Available</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* TOPIC 4 — Flow Validation */}
      <section className="topic-section" id="flow-validation">
        <h2>Topic 4: Flow-Based Validation Rules</h2>

        <div className="concept-card">
          <h4>Use Case 3-1: Validate Close Date — No Holidays</h4>
          <div className="two-col" style={{ marginTop: 12 }}>
            <div style={{ background: '#FFF1F2', borderRadius: 10, padding: 16 }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#BA0517', textTransform: 'uppercase', marginBottom: 6 }}>The Problem</div>
              <p style={{ fontSize: '0.9rem' }}>Prevent users from setting an Opportunity Close Date as a company holiday. The Holiday object is unrelated to Opportunity — standard Validation Rules can't cross unrelated objects.</p>
            </div>
            <div style={{ background: '#F0FDF4', borderRadius: 10, padding: 16 }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#2E844A', textTransform: 'uppercase', marginBottom: 6 }}>The Solution</div>
              <p style={{ fontSize: '0.9rem' }}>Record-Triggered Flow (Fast Field Update) with a <strong>Get Records</strong> element that queries the Holiday object, then a <strong>Custom Error</strong> element if a match is found.</p>
            </div>
          </div>
        </div>

        <div className="definition-box">
          <div className="definition-box-icon">📖</div>
          <div>
            <div className="definition-label">Custom Error Element</div>
            <div className="definition-text">
              The Custom Error element <strong>terminates and rolls back the entire transaction</strong> — nothing is saved. It displays an error message on the page layout (inline on a field) or in a popup window. It also writes to debug logs.
            </div>
          </div>
        </div>

        <div className="analogy-block">
          <div className="analogy-icon">🚫</div>
          <div>
            <div className="analogy-label">Analogy — A Bouncer at the Door</div>
            <div className="analogy-text">
              The Custom Error element is like a bouncer who checks your ID at the door. If you don't meet the criteria (Close Date is a holiday), you get stopped at the entrance — you can't get in (the record doesn't save). The bouncer even tells you exactly why: "Close date cannot be on a holiday. (New Years Day)."
            </div>
          </div>
        </div>

        <div className="join-me-box">
          <div className="join-me-label">📌 Building Use Case 3-1 — Key Steps</div>
          <h4>Algorithm: Validate Close Date of Opportunity</h4>
          <ol style={{ marginTop: 8 }}>
            <li>Create the flow as Record-Triggered, on Opportunity, <strong>Fast Field Update</strong></li>
            <li>Set entry criteria: triggers on Create AND Update when Close Date is changed</li>
            <li><strong>Get Records</strong>: Query Holiday object where <code>HolidayDate = {'{!$Record.CloseDate}'}</code>, First record only</li>
            <li><strong>Decision</strong>: Did the Get Records find a holiday? (check if result is not null)</li>
            <li>If yes → <strong>Custom Error</strong>: "Close date cannot be on a holiday. ({'{!get010.Name}'})"</li>
            <li>Choose "As an inline error on a field" → Select "Close Date"</li>
          </ol>
        </div>

        <div className="concept-card">
          <h4>Flow Optimization at Runtime — How to Store Record Data</h4>
          <table className="comparison-table">
            <thead>
              <tr><th>Option</th><th>What Happens</th><th>Best For</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>Automatically store all fields</td>
                <td>Salesforce optimizes — only ID and Name actually return</td>
                <td>Quick prototyping</td>
              </tr>
              <tr>
                <td>Choose fields and let Salesforce do the rest</td>
                <td>You specify fields; Salesforce fetches them explicitly</td>
                <td>✅ Production flows (self-documenting)</td>
              </tr>
              <tr>
                <td>Choose fields and assign variables</td>
                <td>Advanced: manually wire each field to a variable</td>
                <td>Complex mapping scenarios</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* TOPIC 5 — Replace Formula Fields */}
      <section className="topic-section" id="formula-fields">
        <h2>Topic 5: Replace Formula Fields with Flows</h2>

        <div className="concept-card">
          <h4>Use Case 3-2: Replace External Link Formula Field</h4>
          <div className="two-col">
            <div>
              <div className="before-label" style={{ color: '#BA0517', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>The Problem</div>
              <p>Too many formula fields on the Account object cause <strong>page loading errors</strong>. Formula fields recalculate on every page load — 50 formula fields = 50 calculations every time someone opens an Account.</p>
            </div>
            <div>
              <div className="after-label" style={{ color: '#2E844A', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>The Solution</div>
              <p>A Record-Triggered Flow <strong>pre-computes</strong> the formula value and stores it as a regular Text/Rich Text field. The calculation happens once on save, not on every page view.</p>
            </div>
          </div>
        </div>

        <div className="analogy-block">
          <div className="analogy-icon">⚡</div>
          <div>
            <div className="analogy-label">Pre-cooked vs. Made-to-Order Analogy</div>
            <div className="analogy-text">
              Formula fields are like ordering a pizza made-to-order every time someone looks at the menu. Record-Triggered Flows are like having the pizza pre-baked and ready in a display case — customers (page viewers) get it instantly, no wait.
            </div>
          </div>
        </div>

        <div className="concept-card">
          <h4>Text Template Resource — Building Hyperlinks in Flows</h4>
          <p>To replicate a HYPERLINK formula in a flow, use a <strong>Text Template Resource</strong>:</p>
          <div className="code-block">{`// Original Formula Field:
HYPERLINK(
  "https://www.Salesforce.com?dept=" &
  RecordType.DeveloperName & "&Id=" &
  CASESAFEID(Id),
  RecordType.DeveloperName
)

// Flow Text Template (Rich Text, set field to Rich Text type):
// Link Title: {!$Record.RecordType.Name}
// Link URL: https://www.salesforce.com/?dept={!$Record.RecordType.DeveloperName}&Id={!$Record.Id}`}</div>
          <div className="note-box">
            <span className="note-box-icon">ℹ️</span>
            <span>The field storing the hyperlink must be a <strong>Rich Text Area</strong> field type (not plain Text). Rich Text supports HTML links; plain Text does not render them.</span>
          </div>
        </div>

        <div className="tip-box">
          <span className="tip-box-icon">💡</span>
          <span><span className="tip-label">Best Practice:</span> Use SEPARATE flows for Create and Update. Different entry criteria apply — on Create, always run; on Update, only run if RecordType changed. Splitting keeps each flow's logic simple and governor limits clean.</span>
        </div>
      </section>

      {/* TOPIC 6 — Subflows */}
      <section className="topic-section" id="subflows">
        <h2>Topic 6: Subflows</h2>

        <div className="definition-box">
          <div className="definition-box-icon">📖</div>
          <div>
            <div className="definition-label">Definition</div>
            <div className="definition-text">
              A <strong>Subflow</strong> is a reusable flow that is called from another flow. The calling flow passes inputs in and receives outputs back. Think of it as a function or method in code.
            </div>
          </div>
        </div>

        <div className="concept-card">
          <h4>Use Case 3-3: Share Account Record to Auditor</h4>
          <div style={{ background: '#EFF6FF', borderRadius: 10, padding: 16, marginBottom: 16 }}>
            <p><strong>Business Requirement:</strong> Company compliance officers assign auditors to Accounts. Once assigned, the Account must be automatically shared with the auditor. Sharing happens via the AccountShare object.</p>
          </div>

          <h4>The AccountShare Object Structure</h4>
          <table className="comparison-table">
            <thead>
              <tr><th>Field</th><th>Value</th><th>Purpose</th></tr>
            </thead>
            <tbody>
              <tr><td>ParentId</td><td>Account ID</td><td>The record being shared</td></tr>
              <tr><td>UserOrGroupId</td><td>User/Group/Role ID</td><td>Who gets access</td></tr>
              <tr><td>AccessLevel</td><td>Read | Edit | All</td><td>What level of access</td></tr>
              <tr><td>RowCause</td><td>Sharing Reason</td><td>Why this sharing rule exists</td></tr>
            </tbody>
          </table>

          <div className="note-box">
            <span className="note-box-icon">ℹ️</span>
            <span>The pattern works for any object: Account → AccountShare, Custom_Object__c → Custom_Object__Share. The share object is always [ObjectName]Share.</span>
          </div>
        </div>

        <div className="concept-card">
          <h4>Why Use Subflows?</h4>
          <div className="three-col">
            <div className="var-card">
              <div className="var-card-type" style={{ color: '#06A59A' }}>Reason 1</div>
              <h4>♻️ Reusability</h4>
              <p>The "Share Record" logic can be called from ANY flow that needs sharing — no need to rebuild it each time.</p>
            </div>
            <div className="var-card">
              <div className="var-card-type" style={{ color: '#0176D3' }}>Reason 2</div>
              <h4>🧩 Modularity</h4>
              <p>Each subflow can be tested in isolation. Fix it once in the subflow, all callers benefit automatically.</p>
            </div>
            <div className="var-card">
              <div className="var-card-type" style={{ color: '#7B5EA7' }}>Reason 3</div>
              <h4>📖 Readability</h4>
              <p>The parent flow stays clean: "get record → decision → call subflow." Complexity is hidden inside the subflow.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TOPIC 7 — Scheduled Paths */}
      <section className="topic-section" id="scheduled-paths">
        <h2>Topic 7: Scheduled Paths</h2>

        <div className="definition-box">
          <div className="definition-box-icon">📖</div>
          <div>
            <div className="definition-label">Definition</div>
            <div className="definition-text">
              <strong>Scheduled Paths</strong> are an extension of Record-Triggered Flows that execute at a specified time <em>relative to a date/time field</em> on the triggering record. They run asynchronously after the record is saved.
            </div>
          </div>
        </div>

        <div className="concept-card">
          <h4>How Scheduled Paths Work</h4>
          <div className="two-col">
            <div>
              <h4 style={{ marginBottom: 8 }}>Common Use Cases</h4>
              <ul>
                <li>Send a reminder email <strong>7 days before Close Date</strong></li>
                <li>Escalate a Case <strong>4 hours after creation</strong> if not assigned</li>
                <li>Auto-close Opportunities <strong>30 days after last activity</strong></li>
                <li>Notify manager <strong>1 day before a contract expires</strong></li>
              </ul>
            </div>
            <div>
              <h4 style={{ marginBottom: 8 }}>Key Characteristics</h4>
              <ul>
                <li>Scheduled paths run <strong>asynchronously</strong> (after save)</li>
                <li>Time offset is relative to a date/time field on the record</li>
                <li>Can be offset in minutes, hours, or days</li>
                <li>Runs even if the user who saved the record is no longer logged in</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="analogy-block">
          <div className="analogy-icon">⏰</div>
          <div>
            <div className="analogy-label">Alarm Clock Analogy</div>
            <div className="analogy-text">
              A Scheduled Path is like setting an alarm on a specific record. When you save an Opportunity with a Close Date, Flow sets an alarm: "7 days before that date, send this email." The alarm fires automatically — you don't need to do anything else.
            </div>
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
