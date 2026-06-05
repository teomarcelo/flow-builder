import { Link } from 'react-router-dom';
import Quiz from '../components/Quiz';
import { quizData } from '../data/curriculum';
import {
  ExamTrap,
  DeepDive,
  MistakeCard,
  StepList,
  SaveOrderDiagram,
  ActionsMatrix,
} from '../components/LessonComponents';

const COLOR = '#D97706';
const COLOR_BG = 'rgba(217,119,6,.12)';

export default function Lesson3() {
  return (
    <>
      <div className="breadcrumb">
        <Link to="/">Home</Link><span className="breadcrumb-sep">/</span><span>Lesson 3</span>
      </div>

      <div className="lesson-header fade-up">
        <div className="lesson-badge" style={{ background: COLOR_BG, color: '#FCD34D', border: `1px solid ${COLOR}40` }}>
          Lesson 3
        </div>
        <h1>Plan &amp; Build Record-Triggered Flows</h1>
        <p>The deepest lesson in the course — Save Order of Execution, Before vs. After Save, global variables, flow-based validation, formula fields vs. flows, subflows, and scheduled paths. This is where advanced admins separate themselves.</p>
      </div>

      {/* ── TOPIC 1 — Save Order ── */}
      <section className="topic-section fade-up fade-up-1" id="save-order">
        <h2>Topic 1: The Save Order of Execution</h2>

        <div className="definition-box" style={{ borderLeftColor: COLOR }}>
          <div className="definition-box-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22V8"/><path d="m5 15 7 7 7-7"/><path d="M5 9l7-7 7 7"/></svg>
          </div>
          <div>
            <div className="definition-label">Definition</div>
            <div className="definition-text">
              When a user saves a record, Salesforce doesn't immediately write to the database. It executes a <strong>precise, deterministic sequence of operations</strong> — validations, triggers, flows, assignments, automations — and only commits to the database after all of them succeed. If any step fails, the entire transaction rolls back to the state before the save.
            </div>
          </div>
        </div>

        <div className="note-box" style={{ marginBottom: 24 }}>
          <span className="note-box-icon">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
          </span>
          <span><strong>Why this matters for Record-Triggered Flows:</strong> Your flow runs at <em>two specific moments</em> in this sequence. Understanding where each moment falls determines what capabilities the flow has and what data is available to it.</span>
        </div>

        <SaveOrderDiagram />

        <DeepDive title="Why two phases? Why does the database split matter?">
          <p><strong>Before the record is saved</strong>, it only exists in memory. There is no record ID yet (for new records). Changes are cheap and fast — you're modifying in-memory data, not touching the database. This is why Before-Save flows are called "Fast Field Update" — they're genuinely faster because there's no extra DML. The entire Before phase runs synchronously, in the same thread as the save operation.</p>
          <p style={{ marginTop: 8 }}><strong>After the record is saved</strong>, the ID exists, related records can reference it, and you can trigger email/Apex/subflows. But now any change to the triggering record requires an additional DML statement (Update Records element) because the record is in the database.</p>
          <p style={{ marginTop: 8 }}>The <strong>commit boundary</strong> separates what's reversible from what isn't. Post-commit operations (async Apex, emails, platform events) fire after the transaction is permanent — they can't be rolled back with the original save.</p>
        </DeepDive>

        <ExamTrap title="Exam-critical: Before-Save runs BEFORE Apex Before Triggers">
          <p>Counterintuitive fact: <strong>Before-Save flows run before Apex before triggers</strong>. The sequence: System Validation → <strong>Before-Save Flow</strong> → Validation Rules → Apex Before Trigger → Save to DB → After-Save Flow.</p>
          <p style={{ marginTop: 6 }}>This means a Before-Save flow can set a field value that an Apex trigger later reads. It also means your Before-Save flow runs with less overhead than the older Apex trigger approach. The exam frequently asks which automation runs first.</p>
        </ExamTrap>
      </section>

      {/* ── TOPIC 2 — Before/After Save ── */}
      <section className="topic-section" id="before-after-save">
        <h2>Topic 2: Before Save vs. After Save — Complete Capability Matrix</h2>

        <div className="two-col" style={{ marginBottom: 24 }}>
          <div style={{ background: 'var(--amber-bg)', border: '1px solid var(--amber-border)', borderRadius: 'var(--r-lg)', padding: 20 }}>
            <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 12 }}>
              <div style={{ width: 28, height: 28, background: COLOR, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', flexShrink: 0 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '.95rem', color: '#78350F' }}>Fast Field Update</div>
                <div style={{ fontSize: '.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.1em', color: COLOR }}>Before Save · No extra DML</div>
              </div>
            </div>
            <p style={{ fontSize: '.85rem', color: '#92400E', marginBottom: 10 }}>Runs while the record is still in memory — before anything writes to the database. Like a chef tasting the pizza before it leaves the kitchen. Can fix it, season it, reject it. Can't deliver a receipt yet (no ID).</p>
            <div style={{ fontSize: '.72rem', fontWeight: 800, textTransform: 'uppercase', color: COLOR, marginBottom: 8 }}>Use when:</div>
            <ul style={{ fontSize: '.83rem', color: '#92400E', paddingLeft: '1.2rem' }}>
              <li>Setting fields on the triggering record automatically</li>
              <li>Validating data and blocking the save with Custom Error</li>
              <li>Calculating values that depend on other fields before save</li>
              <li>Performance-critical logic (no extra DML cost)</li>
            </ul>
          </div>
          <div style={{ background: 'var(--blue-bg)', border: '1px solid var(--blue-border)', borderRadius: 'var(--r-lg)', padding: 20 }}>
            <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 12 }}>
              <div style={{ width: 28, height: 28, background: '#0176D3', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', flexShrink: 0 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M3 21v-5h5"/></svg>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '.95rem', color: '#1E3A5F' }}>Actions &amp; Related Records</div>
                <div style={{ fontSize: '.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.1em', color: '#0176D3' }}>After Save · Full capabilities</div>
              </div>
            </div>
            <p style={{ fontSize: '.85rem', color: '#1E3A5F', marginBottom: 10 }}>Runs after the record is saved and the ID exists. Like a manager following up after the pizza was delivered — can send thank-you emails, update loyalty points, notify staff. But can't take the pizza back (no pre-save interception).</p>
            <div style={{ fontSize: '.72rem', fontWeight: 800, textTransform: 'uppercase', color: '#0176D3', marginBottom: 8 }}>Use when:</div>
            <ul style={{ fontSize: '.83rem', color: '#1E3A5F', paddingLeft: '1.2rem' }}>
              <li>Sending notifications or emails triggered by the save</li>
              <li>Creating or updating related records (need the new ID)</li>
              <li>Calling Apex or external integrations</li>
              <li>Accessing <code>$Record__Prior</code> to detect field changes</li>
            </ul>
          </div>
        </div>

        <ActionsMatrix />

        <MistakeCard>
          <p><strong>Update Records in a Before-Save flow costs an extra DML</strong> — but you don't need it. In a Before-Save (Fast Field Update) flow, you can directly assign values to <code>$Record.FieldName</code> in an Assignment element. Salesforce writes those changes to the record automatically when the Before-Save flow completes.</p>
          <p style={{ marginTop: 6 }}>Using an Update Records element in Before-Save triggers a separate DML statement for the same record — wastes a DML and slows the transaction. Assignment to <code>$Record</code> is the intended mechanism.</p>
        </MistakeCard>

        <ExamTrap title="Two places to decide: flow type AND trigger point">
          <p>When creating a Record-Triggered Flow, you make two decisions:</p>
          <ol>
            <li><strong>Trigger object and when</strong>: Created, Updated, Deleted, or Created and Updated</li>
            <li><strong>Flow executes</strong>: Fast Field Update (Before Save) OR Actions and Related Records (After Save)</li>
          </ol>
          <p style={{ marginTop: 6 }}>The exam presents scenarios where the wrong trigger point is selected. Key discriminator: <em>"Can the record's ID be null when this runs?"</em> → Before Save (yes, new records have no ID) vs After Save (always has ID). <em>"Does the flow need to block the save?"</em> → Must be Before Save with Custom Error. After-Save cannot prevent the save.</p>
        </ExamTrap>
      </section>

      {/* ── TOPIC 3 — $Record & Prior ── */}
      <section className="topic-section" id="record-prior">
        <h2>Topic 3: $Record &amp; $Record__Prior</h2>

        <div className="two-col">
          <div className="concept-card" style={{ marginBottom: 0 }}>
            <div className="definition-box" style={{ borderLeftColor: '#0176D3' }}>
              <div className="definition-box-icon">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              </div>
              <div>
                <div className="definition-label">$Record</div>
                <div className="definition-text"><strong>Current</strong> field values of the triggering record. Available on both CREATE and UPDATE. References parent relationships up to 10 levels: <code>{'{!$Record.Account.Name}'}</code></div>
              </div>
            </div>
            <div style={{ fontSize: '.72rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--fg-3)', marginBottom: 8, marginTop: 16 }}>Available on:</div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <span className="tag tag-green">CREATE</span>
              <span className="tag tag-green">UPDATE</span>
              <span className="tag tag-green">DELETE (as prior)</span>
            </div>
            <div style={{ marginTop: 12, fontSize: '.83rem', color: 'var(--fg-2)' }}>
              In a <strong>Before-Save</strong> flow: read <code>$Record</code>, set fields on it directly via Assignment. The platform writes your changes automatically.<br /><br />
              In an <strong>After-Save</strong> flow: <code>$Record</code> reflects the committed state, including the assigned ID.
            </div>
          </div>
          <div className="concept-card" style={{ marginBottom: 0 }}>
            <div className="definition-box" style={{ borderLeftColor: '#7C3AED' }}>
              <div className="definition-box-icon">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
              </div>
              <div>
                <div className="definition-label">$Record__Prior</div>
                <div className="definition-text">The record as it existed <strong>before this save</strong> — the "before photo." Only available on UPDATE. On CREATE, there is no prior version.</div>
              </div>
            </div>
            <div style={{ fontSize: '.72rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--fg-3)', marginBottom: 8, marginTop: 16 }}>Available on:</div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <span className="tag tag-red" style={{ background: '#FFF1F2', color: 'var(--red)', border: '1px solid #FECDD3' }}>Not on CREATE</span>
              <span className="tag tag-green">UPDATE only</span>
            </div>
            <div style={{ marginTop: 12, fontSize: '.83rem', color: 'var(--fg-2)' }}>
              <strong>Primary use:</strong> detect when a specific field changed:<br /><br />
              <code style={{ display: 'block', marginBottom: 8, fontSize: '.78rem' }}>{'{!$Record.StageName}'} ≠ {'{!$Record__Prior.StageName}'}</code>
              This means "Stage was just changed in this save." Without <code>$Record__Prior</code>, you can't distinguish "Stage was already Closed Won" from "Stage was just changed to Closed Won."
            </div>
          </div>
        </div>

        <table className="comparison-table" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Variable</th>
              <th>On CREATE</th>
              <th>On UPDATE</th>
              <th>On DELETE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>$Record</code></td>
              <td style={{ color: 'var(--green)', fontWeight: 600 }}>✓ Available (new values)</td>
              <td style={{ color: 'var(--green)', fontWeight: 600 }}>✓ Available (new values)</td>
              <td style={{ color: 'var(--green)', fontWeight: 600 }}>✓ Available (final state)</td>
            </tr>
            <tr>
              <td><code>$Record__Prior</code></td>
              <td style={{ color: 'var(--red)', fontWeight: 600 }}>✗ Not available (no prior version)</td>
              <td style={{ color: 'var(--green)', fontWeight: 600 }}>✓ Available (values before this save)</td>
              <td style={{ color: 'var(--red)', fontWeight: 600 }}>✗ Not available</td>
            </tr>
          </tbody>
        </table>

        <div className="concept-card" style={{ marginTop: 20 }}>
          <h4>Real-World Use Cases for $Record__Prior</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { color: '#D97706', case: 'Stage Change Notification', logic: 'Decision: {!$Record.StageName} ≠ {!$Record__Prior.StageName} → send email to account team with old and new stage' },
              { color: '#0176D3', case: 'Owner Changed Alert', logic: '{!$Record.OwnerId} ≠ {!$Record__Prior.OwnerId} → create a Task for the new owner with introduction text' },
              { color: '#0F766E', case: 'Price Increase Detection', logic: '{!$Record.Amount} > {!$Record__Prior.Amount} → log a price audit trail record on a custom object' },
              { color: '#7C3AED', case: 'Status Regression Prevention', logic: '{!$Record.Stage__c} is earlier in funnel than {!$Record__Prior.Stage__c} → Custom Error blocking the downgrade' },
            ].map(uc => (
              <div key={uc.case} style={{ display: 'flex', gap: 12, background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.08)', borderRadius: 10, padding: '12px 14px', alignItems: 'flex-start' }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: uc.color, marginTop: 6, flexShrink: 0 }} />
                <div>
                  <div style={{ fontWeight: 600, fontSize: '.88rem', marginBottom: 4 }}>{uc.case}</div>
                  <code style={{ fontSize: '.78rem', background: 'transparent', border: 'none', padding: 0, color: 'var(--fg-3)', whiteSpace: 'normal', wordBreak: 'break-word' }}>{uc.logic}</code>
                </div>
              </div>
            ))}
          </div>
        </div>

        <ExamTrap title="Entry criteria with $Record__Prior">
          <p>Entry criteria on a Record-Triggered Flow can also reference <code>$Record__Prior</code> — but only when the Condition Requirement is set to "When records are created or updated to meet condition requirements." If your entry criteria compares current vs. prior values, the flow only runs when the field actually changes, not every time the record saves. This is the <strong>correct way</strong> to fire a flow only when Stage changes.</p>
        </ExamTrap>
      </section>

      {/* ── TOPIC 4 — Flow Validation ── */}
      <section className="topic-section" id="flow-validation">
        <h2>Topic 4: Flow-Based Validation — Use Case 3-1</h2>

        <div className="concept-card">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
            <div style={{ background: 'var(--red-bg)', borderRadius: 10, padding: 16 }}>
              <div style={{ fontSize: '.68rem', fontWeight: 800, color: 'var(--red)', textTransform: 'uppercase', marginBottom: 6 }}>The Business Problem</div>
              <p style={{ fontSize: '.88rem', marginBottom: 0 }}>Sales reps are setting Opportunity Close Dates on company holidays — a legal and planning issue. Standard Validation Rules can't do cross-object comparisons: there's no way to compare <code>Opportunity.CloseDate</code> against records in a separate <code>Holiday</code> object using declarative validation alone.</p>
            </div>
            <div style={{ background: 'var(--green-bg)', borderRadius: 10, padding: 16 }}>
              <div style={{ fontSize: '.68rem', fontWeight: 800, color: 'var(--green)', textTransform: 'uppercase', marginBottom: 6 }}>The Flow Solution</div>
              <p style={{ fontSize: '.88rem', marginBottom: 0 }}>Record-Triggered Flow (Before Save → Fast Field Update) on Opportunity. Flow queries the Holiday object for a matching date. If found, Flow's Custom Error element terminates the transaction and displays a specific error inline on the CloseDate field. No Apex required.</p>
            </div>
          </div>
        </div>

        <div className="definition-box" style={{ borderLeftColor: COLOR }}>
          <div className="definition-box-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          </div>
          <div>
            <div className="definition-label">The Custom Error Element — The Only Way to Block a Save</div>
            <div className="definition-text">
              <strong>Custom Error</strong> is a special flow element available exclusively in Before-Save flows. When executed, it <strong>terminates the entire transaction</strong> — nothing saves, all DML rolls back, and the user sees your error message inline on the field or in a page-level popup. Think of it as the bouncer at the database door: wrong credentials, you don't get in.
            </div>
          </div>
        </div>

        <StepList
          title="Exercise Walkthrough: Use Case 3-1 — Validate Close Date Against Holiday Object"
          intro="Build this exactly in your practice org. Every step produces a testable result — don't skip ahead."
          steps={[
            {
              label: 'Create Record-Triggered Flow on Opportunity',
              detail: 'New Flow → Record-Triggered Flow. Object: Opportunity. Trigger: A record is created or updated. Flow executes: Fast Field Update (Before Save).'
            },
            {
              label: 'Set Entry Criteria',
              detail: 'Condition: CloseDate Is Changed (or: {!$Record.CloseDate} is not equal to {!$Record__Prior.CloseDate}). This prevents the flow from running on every Opportunity save — only fires when CloseDate is actually modified.',
              note: 'Performance best practice: never run a validation flow on every single save if only one field needs checking.'
            },
            {
              label: 'Add Get Records element: get010 Query Holiday',
              detail: 'Object: Holiday. Condition: HolidayDate Equals {!$Record.CloseDate}. How many records: Only the first record. Store result in: varHolidayRecord (Holiday Record variable).',
              code: 'get010 Query Holiday'
            },
            {
              label: 'Add Decision element: if020 Is CloseDate a Holiday?',
              detail: 'Outcome: "Yes – Holiday Found". Condition: {!varHolidayRecord} Is Null → False. (If Get Records found a record, the variable is NOT null — this outcome matches.)',
              note: 'This is the "null check" pattern — always needed after Get Records.'
            },
            {
              label: 'Connect "Yes – Holiday Found" outcome to Custom Error element',
              detail: 'Add Custom Error element. Error Message: "Close date cannot be on a company holiday. ({!varHolidayRecord.Name})"'
            },
            {
              label: 'Configure error display location',
              detail: 'Error Type: "Show error on field". Field: CloseDate. This makes the error appear inline directly under the CloseDate field — much better UX than a generic page-level popup.',
              note: 'The {!varHolidayRecord.Name} merge field includes the specific holiday name in the error — "cannot be on New Year\'s Day" instead of a generic message.'
            },
            {
              label: 'Save and Activate the flow',
              detail: 'Flow name: UC3-1 Validate Close Date. Save → Activate. Then test in the org: create an Opportunity with CloseDate matching a Holiday record.'
            },
            {
              label: 'Verify the behavior',
              detail: 'Set a Close Date that matches a Holiday.HolidayDate. Click Save. You should see the inline error on the Close Date field with the holiday name. The record should NOT save.',
              note: 'If no error appears: check the flow is Active, check the Holiday object has a record matching your test date, check your field API names are correct.'
            },
          ]}
        />

        <DeepDive title="Flow-Based Validation vs. Standard Validation Rules — When to Use Each">
          <p><strong>Use Standard Validation Rules when:</strong> the validation only involves fields on the same object. They're simpler, run before flows, and don't consume governor limits. Example: Opportunity Close Date must be after today.</p>
          <p style={{ marginTop: 8 }}><strong>Use Flow-Based Validation when:</strong></p>
          <ul>
            <li>The validation requires querying another object (Holiday, Custom Settings, Metadata)</li>
            <li>The logic is too complex for a single formula (multiple conditions, lookups)</li>
            <li>You need to customize the error message with live data from the query result</li>
            <li>The validation should only fire under certain user-context conditions you need to evaluate dynamically</li>
          </ul>
          <p style={{ marginTop: 8 }}>The two approaches are complementary — a record can have both standard validation rules AND a Before-Save flow with Custom Error. They're evaluated sequentially.</p>
        </DeepDive>
      </section>

      {/* ── TOPIC 5 — Replace Formula Fields ── */}
      <section className="topic-section" id="formula-fields">
        <h2>Topic 5: Replace Formula Fields with Flows — Use Case 3-2</h2>

        <div className="concept-card">
          <h4>The Formula Field Performance Problem</h4>
          <div className="before-after">
            <div className="before-col">
              <div className="before-label">Formula Field — Made-to-Order</div>
              <p style={{ fontSize: '.88rem' }}>Recalculates on every single page load. 50 formula fields on Account = 50 calculations every time anyone opens an Account record. As org data grows and formulas reference related objects, page load times exceed Salesforce limits. Users start seeing timeout errors.</p>
              <div style={{ background: '#FFF1F2', border: '1px solid #FECDD3', borderRadius: 8, padding: 12, marginTop: 8 }}>
                <div style={{ fontSize: '.72rem', fontWeight: 700, color: 'var(--red)', marginBottom: 4 }}>The Math</div>
                <div style={{ fontSize: '.82rem', color: '#9F1239' }}>50 formulas × 10,000 daily Account views = <strong>500,000 formula evaluations per day</strong>. Even at 5ms each, that's 41 minutes of compute time wasted on already-known values.</div>
              </div>
            </div>
            <div className="after-col">
              <div className="after-label">Record-Triggered Flow — Pre-cooked</div>
              <p style={{ fontSize: '.88rem' }}>Flow calculates the value once when the record is saved, stores it in a regular field. Page load just reads the stored value — zero computation. Formula field replaced by a plain Text or URL field. Value is always current because the flow runs on Create AND Update.</p>
              <div style={{ background: 'rgba(5,150,105,.1)', border: '1px solid rgba(5,150,105,.25)', borderRadius: 8, padding: 12, marginTop: 8 }}>
                <div style={{ fontSize: '.72rem', fontWeight: 700, color: 'var(--green)', marginBottom: 4 }}>The Math</div>
                <div style={{ fontSize: '.82rem', color: '#14532D' }}>1 flow execution on save × 1,000 Account saves per day = <strong>1,000 DML statements total</strong>. Page loads → 0 compute. Trade: storage + save overhead for faster reads.</div>
              </div>
            </div>
          </div>
        </div>

        <div className="concept-card">
          <h4>Text Template Resource — Building Hyperlinks in Flows</h4>
          <p style={{ fontSize: '.88rem', marginBottom: 12 }}>Use Case 3-2 replaces a HYPERLINK formula field with a flow. The target field on the Account object must be <strong>Rich Text Area</strong> type — plain Text fields don't render HTML. A Text Template resource in Flow builds the full HTML anchor tag.</p>
          <div className="code-block">
            <div className="code-block-header">
              <div className="code-block-dots"><span className="code-dot code-dot-red"/><span className="code-dot code-dot-yellow"/><span className="code-dot code-dot-green"/></div>
              <span className="code-block-label">Original Formula Field being replaced</span>
            </div>
            <pre>{`HYPERLINK(
  "https://www.Salesforce.com?dept=" & RecordType.DeveloperName
  & "&Id=" & CASESAFEID(Id),
  RecordType.DeveloperName
)`}</pre>
          </div>
          <div className="code-block">
            <div className="code-block-header">
              <div className="code-block-dots"><span className="code-dot code-dot-red"/><span className="code-dot code-dot-yellow"/><span className="code-dot code-dot-green"/></div>
              <span className="code-block-label">Flow Text Template Resource equivalent (Rich Text)</span>
            </div>
            <pre>{`<a href="https://www.salesforce.com/?dept={!$Record.RecordType.DeveloperName}&Id={!$Record.Id}">
  {!$Record.RecordType.Name}
</a>

// Notes:
// - $Record.Id returns the 18-char case-safe ID automatically (in After-Save flows)
// - Rich Text Area field type is REQUIRED on the Account object
// - Before-Save flows don't have the new record's ID — use After-Save for new records
// - Use SEPARATE flows for Create and Update trigger contexts`}</pre>
          </div>
        </div>

        <div className="tip-box">
          <span className="tip-box-icon">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
          </span>
          <span><span className="tip-label">Best Practice: Separate Create and Update Flows</span>For formula field replacement, build <em>two separate flows</em>: one for Create (trigger: "A record is created") and one for Update (trigger: "A record is updated when RecordType is changed"). Separate entry criteria = cleaner governor limit usage = easier to test each scenario independently.</span>
        </div>
      </section>

      {/* ── TOPIC 6 — Subflows ── */}
      <section className="topic-section" id="subflows">
        <h2>Topic 6: Subflows — Reusable Logic Modules</h2>

        <div className="definition-box" style={{ borderLeftColor: COLOR }}>
          <div className="definition-box-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/></svg>
          </div>
          <div>
            <div className="definition-label">Definition</div>
            <div className="definition-text">
              A <strong>Subflow</strong> is an Autolaunched Flow called from another flow via the Subflow element. The parent flow passes <strong>Input Variables</strong> into the subflow and receives <strong>Output Variables</strong> back. This is the declarative equivalent of a function or method — write once, call from many flows.
            </div>
          </div>
        </div>

        <div className="concept-card">
          <h4>Use Case 3-3: Share Account Record to Auditor</h4>
          <p style={{ fontSize: '.88rem', marginBottom: 16 }}>Compliance requirement: when an auditor is assigned to an Account, the Account must be automatically shared with that auditor. Sharing in Salesforce requires creating a record in the <code>AccountShare</code> object.</p>

          <div className="two-col" style={{ marginBottom: 16 }}>
            <div>
              <div style={{ fontSize: '.72rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--fg-3)', marginBottom: 8 }}>Why Use a Subflow Here?</div>
              <p style={{ fontSize: '.85rem' }}>The "share a record" logic is identical whether triggered from an Account flow, a Contact flow, or a Bulk Admin tool. Build it once as a subflow, call it from any flow. Fix the sharing logic in one place and all callers benefit.</p>
            </div>
            <div>
              <div style={{ fontSize: '.72rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--fg-3)', marginBottom: 8 }}>The AccountShare Object Structure</div>
              <table className="comparison-table" style={{ marginBottom: 0, fontSize: '.8rem' }}>
                <thead><tr><th>Field</th><th>Value</th></tr></thead>
                <tbody>
                  {[
                    ['ParentId', 'Account ID being shared'],
                    ['UserOrGroupId', 'User, Group, or Role getting access'],
                    ['RowCause', 'Sharing reason (custom reason or Manual)'],
                    ['AccountAccessLevel', '"Read", "Edit", or "All"'],
                  ].map(([f, v]) => <tr key={f}><td><code style={{ fontSize: '.75rem' }}>{f}</code></td><td style={{ fontSize: '.8rem' }}>{v}</td></tr>)}
                </tbody>
              </table>
              <div style={{ fontSize: '.74rem', color: 'var(--fg-3)', marginTop: 6 }}>Same pattern for any object: Account → AccountShare, Custom__c → Custom__Share</div>
            </div>
          </div>

          <div className="three-col" style={{ marginBottom: 0 }}>
            {[
              { color: '#0F766E', n: '01', title: 'Reusability', desc: 'The sharing logic is written once in the subflow. Any flow that needs to share a record just calls the subflow — no copy-pasting, no drift between implementations.' },
              { color: '#0176D3', n: '02', title: 'Testability', desc: 'Test the subflow in isolation. Debug sharing errors in one place. Changes propagate to all calling flows automatically.' },
              { color: '#7C3AED', n: '03', title: 'Readability', desc: 'The parent flow canvas stays clean: "sub090 Share Record." Complexity is encapsulated. Any admin can read the parent flow without understanding every detail of sharing logic.' },
            ].map(s => (
              <div key={s.n} style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.08)', borderRadius: 12, padding: 14 }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '.65rem', fontWeight: 700, color: s.color, marginBottom: 6 }}>{s.n}</div>
                <div style={{ fontWeight: 700, fontSize: '.88rem', marginBottom: 6 }}>{s.title}</div>
                <div style={{ fontSize: '.82rem', color: 'var(--fg-3)' }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <StepList
          title="Architecture: How the Subflow Pattern Works"
          intro="Understanding the input/output contract is the key to building composable flows."
          steps={[
            {
              label: 'Build the subflow (Autolaunched Flow)',
              detail: 'Create a new Autolaunched Flow. Add Input Variables for the data it needs: varInputAccountId (Text, Input), varInputUserId (Text, Input), varInputAccessLevel (Text, Input).',
              note: 'Mark variables as "Available for Input" in variable settings.'
            },
            {
              label: 'Add the Create Records logic inside the subflow',
              detail: 'Create Records: AccountShare object. Set ParentId = {!varInputAccountId}, UserOrGroupId = {!varInputUserId}, AccountAccessLevel = {!varInputAccessLevel}, RowCause = "Manual".',
            },
            {
              label: 'Add Output Variables if needed',
              detail: 'If the caller needs to know if sharing succeeded, add a Boolean output variable varOutputSuccess. Set it to true after Create Records, false on the Fault path.',
              note: 'Output variables are how subflows return data to the parent flow.'
            },
            {
              label: 'Activate the subflow',
              detail: 'Save and Activate. An inactive subflow cannot be called — you\'ll get a runtime error at the Subflow element in the parent.'
            },
            {
              label: 'Call from the parent flow with Subflow element',
              detail: 'In your parent Record-Triggered Flow, add a Subflow element. Select the sharing flow. Map inputs: AccountId → {!$Record.Id}, UserId → {!$Record.Auditor__c}, AccessLevel → "Read".',
            },
            {
              label: 'Map outputs if applicable',
              detail: 'If the subflow has output variables, map them to variables in the parent flow after the Subflow element completes.',
            },
          ]}
        />

        <ExamTrap title="Subflow requires Autolaunched Flow type — not Screen Flow">
          <p>You cannot call a Screen Flow as a subflow from a Record-Triggered Flow. Only <strong>Autolaunched Flows</strong> can be called as subflows from non-screen contexts. If you try to call a Screen Flow as a subflow from a background flow, you'll get a runtime error. The exam presents this scenario.</p>
          <p style={{ marginTop: 6 }}>You CAN call a Screen Flow as a subflow from another Screen Flow — but only when the parent is also a Screen Flow running in a user context.</p>
        </ExamTrap>
      </section>

      {/* ── TOPIC 7 — Scheduled Paths ── */}
      <section className="topic-section" id="scheduled-paths">
        <h2>Topic 7: Scheduled Paths</h2>

        <div className="definition-box" style={{ borderLeftColor: COLOR }}>
          <div className="definition-box-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          </div>
          <div>
            <div className="definition-label">Definition</div>
            <div className="definition-text">
              A <strong>Scheduled Path</strong> adds a time-based trigger to a Record-Triggered Flow. When the record saves (meeting entry criteria), Salesforce schedules an alarm relative to a Date/Time field on that record. When the alarm fires, the flow's scheduled path executes — asynchronously, in a separate transaction, even if the original user is no longer logged in.
            </div>
          </div>
        </div>

        <div className="analogy-block">
          <div className="analogy-icon" style={{ background: 'rgba(217,119,6,.12)', color: '#FCD34D' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          </div>
          <div>
            <div className="analogy-label">Alarm Clock Analogy</div>
            <div className="analogy-text">When you save an Opportunity with a CloseDate, Flow sets an alarm: "7 days before that date, run this email action." The alarm fires automatically even while you sleep — you don't need to do anything else. The alarm is stored in a <strong>scheduled action queue</strong>, separate from the original save transaction.</div>
          </div>
        </div>

        <div className="two-col">
          <div className="concept-card" style={{ marginBottom: 0 }}>
            <h4>Real Use Cases for Scheduled Paths</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 10 }}>
              {[
                { color: '#D97706', label: '7 days before CloseDate', detail: 'Send reminder email to Opportunity owner and manager' },
                { color: '#0176D3', label: '4 hours after CreatedDate', detail: 'Escalate a Case if still unassigned to a queue' },
                { color: '#0F766E', label: '30 days after LastActivityDate', detail: 'Auto-close stale Opportunities with "No Activity" reason' },
                { color: '#7C3AED', label: '1 day before ContractEndDate__c', detail: 'Notify account team and trigger renewal workflow' },
              ].map(uc => (
                <div key={uc.label} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.08)', borderRadius: 8, padding: '10px 12px' }}>
                  <div style={{ width: 7, height: 7, borderRadius: '50%', background: uc.color, marginTop: 5, flexShrink: 0 }} />
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '.84rem', color: uc.color }}>{uc.label}</div>
                    <div style={{ fontSize: '.8rem', color: 'var(--fg-3)' }}>{uc.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="concept-card" style={{ marginBottom: 0 }}>
            <h4>Key Technical Characteristics</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 10 }}>
              {[
                { icon: '⏱', title: 'Offset timing', detail: 'Offset in minutes, hours, or days. Positive = after the date field. Negative = before.' },
                { icon: '🔀', title: 'Separate transaction', detail: 'Runs in its own transaction — separate governor limits. A fault on the scheduled path does NOT roll back the original save.' },
                { icon: '📋', title: 'Scheduled action queue', detail: 'Visible in Setup → Scheduled Actions. Can be deleted from queue before firing.' },
                { icon: '🔁', title: 'Re-evaluation on update', detail: 'If the date field changes, Salesforce reschedules the alarm automatically.' },
                { icon: '⚠️', title: 'Maximum 50 scheduled actions', detail: 'Per flow per record per 24-hour rolling period.' },
              ].map(c => (
                <div key={c.title} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '1rem', flexShrink: 0, marginTop: 1 }}>{c.icon}</span>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '.84rem', marginBottom: 2 }}>{c.title}</div>
                    <div style={{ fontSize: '.8rem', color: 'var(--fg-3)' }}>{c.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <ExamTrap title="Scheduled Paths only available in After-Save context">
          <p>You cannot add Scheduled Paths to a Before-Save (Fast Field Update) flow — Scheduled Paths are exclusively an After-Save (Actions and Related Records) feature. The exam frequently uses this to trip up students who mix up the two execution contexts. If a scenario needs both "block the save with error" and "send a reminder 7 days later," you need <strong>two separate flows</strong>.</p>
        </ExamTrap>
      </section>

      <Quiz questions={quizData.l3} title="Lesson 3 Knowledge Check — Record-Triggered Flows" />

      <div className="page-nav">
        <Link to="/lesson/2" className="page-nav-btn">← Lesson 2: Screen Flows</Link>
        <Link to="/quick-ref" className="page-nav-btn primary">Quick Reference Sheet →</Link>
      </div>
    </>
  );
}
