import { Link } from 'react-router-dom';

const ELEMENT_NAMING = [
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
];

const FLOW_ELEMENTS = [
  { name: 'Screen', when: 'Show UI to users, collect input, display results' },
  { name: 'Decision', when: 'Branch flow logic (IF / ELSE)' },
  { name: 'Assignment', when: 'Set or update a variable value' },
  { name: 'Loop', when: 'Iterate over each item in a Collection' },
  { name: 'Get Records', when: 'Query Salesforce records (SELECT)' },
  { name: 'Create Records', when: 'Insert new records (INSERT)' },
  { name: 'Update Records', when: 'Modify existing records (UPDATE)' },
  { name: 'Delete Records', when: 'Remove records (DELETE)' },
  { name: 'Subflow', when: 'Call another flow as a reusable module' },
  { name: 'Custom Error', when: 'Abort the transaction with an error message' },
  { name: 'Send Email', when: 'Send an email action (After Save only)' },
  { name: 'Scheduled Path', when: 'Fire logic at a time relative to a date field' },
];

const DML_OPS = [
  { op: 'Insert', el: 'Create Records', ok: true },
  { op: 'Update', el: 'Update Records', ok: true },
  { op: 'Delete', el: 'Delete Records', ok: true },
  { op: 'Upsert', el: 'Create Records (option)', ok: true },
  { op: 'Undelete', el: 'n/a — Apex only', ok: false },
  { op: 'Merge', el: 'n/a — Apex only', ok: false },
];

const DATA_TYPES = [
  { type: 'Text', stores: 'Letters, words, sentences', example: '"Angela"', note: 'Record IDs are Text' },
  { type: 'Number', stores: 'Integers and decimals', example: '302.12', note: '' },
  { type: 'Boolean', stores: 'TRUE or FALSE only', example: 'true', note: '' },
  { type: 'Date', stores: 'Calendar date, no time', example: '10/13/2022', note: 'Birthday, Close Date' },
  { type: 'Date/Time', stores: 'Date + specific time', example: '10/13/2022 10:04 AM', note: 'Login time, Order time' },
  { type: 'Record', stores: 'All fields of ONE Salesforce record', example: 'varAcctRec', note: 'Like a suitcase' },
  { type: 'Collection', stores: 'A list of multiple values', example: 'varAcctRecs[]', note: 'Like an airplane of suitcases' },
];

const BEST_PRACTICES = [
  ['camelCase variable names', 'Use descriptive full words: varNumOfPizzas not var1'],
  ['Add Fault paths', 'Every data element (Get/Create/Update/Delete) needs a Fault path'],
  ['Entry criteria on RTFs', 'Reduce unnecessary executions → conserve governor limits'],
  ['One purpose per flow', 'Multiple small flows > one giant spaghetti flow'],
  ['Bulk DML outside loops', 'Collect in Collection inside loop → one DML outside'],
  ['Whiteboard first', 'Plan variables, DML, algorithm, and edge cases BEFORE opening Flow Builder'],
  ['Hide Previous after DML', 'Prevents duplicate record creation on backward navigation'],
  ['Activate your flow!', 'A flow in Inactive status never runs — even if it\'s on a page'],
];

const GLOBAL_VARS = [
  { name: '$Record', desc: 'Current field values. Available on CREATE and UPDATE.' },
  { name: '$Record__Prior', desc: 'Previous field values. Only available on UPDATE (record is brand new on CREATE).' },
  { name: '$Flow.CurrentDate', desc: 'Today\'s date inside the flow.' },
  { name: '$Flow.CurrentDateTime', desc: 'Current date and time inside the flow.' },
  { name: '$Flow.FaultMessage', desc: 'The error message from a Fault path — display to users or debug.' },
  { name: '$User.Id', desc: 'The ID of the running user.' },
  { name: '$Label', desc: 'Reference custom labels for multilingual text.' },
];

const SAVE_ORDER = [
  { step: '1', label: 'User Saves Record', color: '#0369A1' },
  { step: '2', label: 'Validation Rules run', color: '#7C3AED' },
  { step: '3', label: 'Before-Save Flows (Fast Field Update)', color: '#D97706' },
  { step: '4', label: 'Record SAVED to database', color: '#0F766E' },
  { step: '5', label: 'After-Save Flows (Actions & Related)', color: '#D97706' },
  { step: '6', label: 'COMMITTED to database', color: '#059669' },
];

export default function QuickRef() {
  return (
    <>
      <div className="breadcrumb">
        <Link to="/">Home</Link>
        <span className="breadcrumb-sep">/</span>
        <span>Quick Reference</span>
      </div>

      <div className="lesson-header fade-up">
        <div className="lesson-badge" style={{ background: '#F1F5F9', color: '#475569', border: '1px solid #E2E8F0' }}>
          ✦ Reference
        </div>
        <h1>Quick Reference</h1>
        <p>Every element, naming convention, DML operation, data type, global variable, and best practice — in one scannable page.</p>
      </div>

      {/* ── Save Order ── */}
      <section className="topic-section fade-up fade-up-1" id="save-order">
        <h2>Save Order of Execution</h2>
        <div className="concept-card">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center' }}>
            {SAVE_ORDER.map((s, i) => (
              <div key={s.step} style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ background: s.color, color: 'white', width: 22, height: 22, borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '.7rem', fontWeight: 800, flexShrink: 0 }}>{s.step}</span>
                  <span style={{ fontSize: '.84rem', fontWeight: 500, color: s.color }}>{s.label}</span>
                </div>
                {i < SAVE_ORDER.length - 1 && <span style={{ color: '#CBD5E1', fontWeight: 700 }}>→</span>}
              </div>
            ))}
          </div>
          <div className="note-box" style={{ marginTop: 16 }}>
            <span className="note-box-icon">ℹ️</span>
            <span><strong>Before-Save flows</strong> can change fields and run Custom Error (abort). <strong>After-Save flows</strong> can send emails, create related records, and call Apex — but cannot change the triggering record directly.</span>
          </div>
        </div>
      </section>

      {/* ── Data Types ── */}
      <section className="topic-section" id="data-types">
        <h2>Data Types</h2>
        <div className="concept-card">
          <table className="comparison-table" style={{ marginBottom: 0 }}>
            <thead>
              <tr><th>Data Type</th><th>What It Stores</th><th>Example</th><th>Note</th></tr>
            </thead>
            <tbody>
              {DATA_TYPES.map(d => (
                <tr key={d.type}>
                  <td><span className={`tag tag-${d.type === 'Text' ? 'blue' : d.type === 'Number' ? 'orange' : d.type === 'Boolean' ? 'purple' : d.type === 'Record' ? 'green' : d.type === 'Collection' ? 'purple' : 'teal'}`}>{d.type}</span></td>
                  <td>{d.stores}</td>
                  <td><code>{d.example}</code></td>
                  <td style={{ color: '#64748B', fontSize: '.82rem' }}>{d.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Flow Elements ── */}
      <section className="topic-section" id="elements">
        <h2>Flow Elements</h2>
        <div className="two-col" style={{ marginBottom: 0 }}>
          <div className="concept-card" style={{ marginBottom: 0 }}>
            <h4 style={{ marginBottom: 16 }}>All Elements &amp; When to Use</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {FLOW_ELEMENTS.map(e => (
                <div key={e.name} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <code style={{ flexShrink: 0, fontSize: '.78rem' }}>{e.name}</code>
                  <span style={{ fontSize: '.83rem', color: '#475569' }}>{e.when}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="concept-card" style={{ marginBottom: 0 }}>
            <h4 style={{ marginBottom: 16 }}>Element Naming Conventions</h4>
            <table className="comparison-table" style={{ marginBottom: 0, fontSize: '.8rem' }}>
              <thead><tr><th>Element</th><th>Prefix</th><th>Example</th></tr></thead>
              <tbody>
                {ELEMENT_NAMING.map(([type, prefix, example]) => (
                  <tr key={type}>
                    <td>{type}</td>
                    <td><code>{prefix}</code></td>
                    <td style={{ color: '#64748B', fontSize: '.78rem' }}>{example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── DML ── */}
      <section className="topic-section" id="dml">
        <h2>DML Operations in Flow</h2>
        <div className="concept-card">
          <table className="comparison-table" style={{ marginBottom: 0 }}>
            <thead><tr><th>Operation</th><th>Flow Element</th><th>Available?</th></tr></thead>
            <tbody>
              {DML_OPS.map(d => (
                <tr key={d.op}>
                  <td><code>{d.op}</code></td>
                  <td>{d.el}</td>
                  <td style={{ color: d.ok ? '#059669' : '#DC2626', fontWeight: 700 }}>{d.ok ? '✅ Yes' : '❌ No'}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="tip-box" style={{ marginBottom: 0, marginTop: 12 }}>
            <span className="tip-box-icon">⚠️</span>
            <span><span className="tip-label">Critical</span>Never put DML operations inside a Loop — collect records in a Collection variable first, then do ONE bulk DML outside the loop. Avoids hitting the 150 DML governor limit.</span>
          </div>
        </div>
      </section>

      {/* ── Global Variables ── */}
      <section className="topic-section" id="global-vars">
        <h2>Global Variables</h2>
        <div className="qr-cheatsheet fade-up fade-up-2">
          <div className="qr-cheatsheet-header">
            <div className="code-block-dots"><span className="code-dot code-dot-red"/><span className="code-dot code-dot-yellow"/><span className="code-dot code-dot-green"/></div>
            <span className="qr-cheatsheet-title">Reference in formulas and elements with <code style={{ color: '#7DD3FC', background: 'transparent', border: 'none', padding: 0, fontSize: 'inherit' }}>{'{!$Variable.Field}'}</code></span>
          </div>
          <div className="qr-cheatsheet-body">
            {GLOBAL_VARS.map(v => (
              <div key={v.name} className="qr-cheatsheet-item">
                <div className="qr-cheatsheet-key">{'{!' + v.name + '}'}</div>
                <div className="qr-cheatsheet-val">{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Flow Types ── */}
      <section className="topic-section" id="flow-types">
        <h2>Flow Types at a Glance</h2>
        <div className="qr-grid">
          {[
            { color: '#0176D3', icon: '🖥️', name: 'Screen Flow', trigger: 'User-initiated', canUI: true, canDML: true, canAction: true, note: 'Launched from pages, quick actions, utility bar' },
            { color: '#D97706', icon: '⚡', name: 'Record-Triggered', trigger: 'Record save (create/update/delete)', canUI: false, canDML: true, canAction: true, note: 'Runs Before Save or After Save' },
            { color: '#7C3AED', icon: '🔄', name: 'Autolaunched', trigger: 'Called by Apex, API, or Subflow', canUI: false, canDML: true, canAction: true, note: 'Reusable logic modules' },
            { color: '#0F766E', icon: '🗓️', name: 'Schedule-Triggered', trigger: 'Time + frequency', canUI: false, canDML: true, canAction: true, note: 'Batch jobs, nightly cleanup' },
          ].map(ft => (
            <div key={ft.name} className="qr-card" style={{ borderTopColor: ft.color }}>
              <div className="qr-card-head">
                <div className="qr-card-icon" style={{ background: ft.color + '18' }}>{ft.icon}</div>
                <h3 style={{ color: ft.color }}>{ft.name}</h3>
              </div>
              <ul className="qr-list">
                <li className="qr-item"><span className="qr-item-dot" style={{ background: ft.color }} /><span><strong>Trigger:</strong> {ft.trigger}</span></li>
                <li className="qr-item"><span className="qr-item-dot" style={{ background: ft.canUI ? '#059669' : '#DC2626' }} /><span>User Interface: {ft.canUI ? '✅' : '❌'}</span></li>
                <li className="qr-item"><span className="qr-item-dot" style={{ background: '#059669' }} /><span>DML: ✅</span></li>
                <li className="qr-item"><span className="qr-item-dot" style={{ background: ft.color }} /><span style={{ color: '#64748B', fontSize: '.82rem' }}>{ft.note}</span></li>
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── Best Practices ── */}
      <section className="topic-section" id="best-practices">
        <h2>Best Practices Checklist</h2>
        <div className="concept-card">
          <table className="comparison-table" style={{ marginBottom: 0 }}>
            <thead><tr><th>Best Practice</th><th>Why</th></tr></thead>
            <tbody>
              {BEST_PRACTICES.map(([bp, why]) => (
                <tr key={bp}>
                  <td style={{ fontWeight: 600 }}>✓ {bp}</td>
                  <td style={{ color: '#475569', fontSize: '.875rem' }}>{why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Lookup vs Record Choice Set ── */}
      <section className="topic-section" id="lookup-vs-rcs">
        <h2>Lookup Field vs. Record Choice Set</h2>
        <div className="before-after">
          <div className="before-col" style={{ background: '#F0F9FF', borderColor: '#BAE6FD' }}>
            <div className="before-label" style={{ background: '#0369A1' }}>🔍 Lookup Field</div>
            <ul style={{ fontSize: '.88rem', color: '#1E3A5F' }}>
              <li>Shows <strong>ALL</strong> parent records (no filter)</li>
              <li>Search / typeahead input</li>
              <li>Can create new parent record on the fly</li>
              <li>No record limit</li>
            </ul>
          </div>
          <div className="after-col" style={{ background: '#F0FDF4', borderColor: '#BBF7D0' }}>
            <div className="after-label" style={{ background: '#0F766E' }}>🎯 Record Choice Set</div>
            <ul style={{ fontSize: '.88rem', color: '#134E4A' }}>
              <li>Filter records by any criteria</li>
              <li>Renders as picklist or radio buttons</li>
              <li>Max 200 records</li>
              <li>Cannot create new parent inline</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── Before vs After Save ── */}
      <section className="topic-section" id="before-after">
        <h2>Before Save vs. After Save</h2>
        <div className="before-after">
          <div className="before-col" style={{ background: '#FFFBEB', borderColor: '#FDE68A' }}>
            <div className="before-label" style={{ background: '#D97706' }}>⚡ Fast Field Update (Before)</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 8 }}>
              <div>
                <div style={{ fontSize: '.68rem', fontWeight: 800, color: '#059669', marginBottom: 4 }}>✅ CAN</div>
                <ul style={{ fontSize: '.82rem', color: '#78350F' }}>
                  <li>Change fields before save</li>
                  <li>Query other objects</li>
                  <li>Custom Error (abort)</li>
                </ul>
              </div>
              <div>
                <div style={{ fontSize: '.68rem', fontWeight: 800, color: '#DC2626', marginBottom: 4 }}>❌ CANNOT</div>
                <ul style={{ fontSize: '.82rem', color: '#78350F' }}>
                  <li>Send emails</li>
                  <li>Create related records</li>
                  <li>Call Apex</li>
                  <li>Access the new record ID</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="after-col" style={{ background: '#EFF6FF', borderColor: '#BFDBFE' }}>
            <div className="after-label" style={{ background: '#0176D3' }}>🔵 Actions &amp; Related (After)</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 8 }}>
              <div>
                <div style={{ fontSize: '.68rem', fontWeight: 800, color: '#059669', marginBottom: 4 }}>✅ CAN</div>
                <ul style={{ fontSize: '.82rem', color: '#1E3A5F' }}>
                  <li>Send emails</li>
                  <li>Create related records</li>
                  <li>Call Apex</li>
                  <li>Access the new record ID</li>
                  <li>Call Subflows</li>
                </ul>
              </div>
              <div>
                <div style={{ fontSize: '.68rem', fontWeight: 800, color: '#DC2626', marginBottom: 4 }}>❌ CANNOT</div>
                <ul style={{ fontSize: '.82rem', color: '#1E3A5F' }}>
                  <li>Directly change triggering record (use Update Records)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-nav">
        <Link to="/lesson/3" className="page-nav-btn">← Lesson 3: Record-Triggered Flows</Link>
        <Link to="/" className="page-nav-btn primary">🏠 Back to Home</Link>
      </div>
    </>
  );
}
