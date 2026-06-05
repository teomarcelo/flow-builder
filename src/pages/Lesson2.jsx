import { Link } from 'react-router-dom';
import Quiz from '../components/Quiz';
import { quizData } from '../data/curriculum';
import { ExamTrap, DeepDive, MistakeCard, StepList } from '../components/LessonComponents';

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
          Lesson 2
        </div>
        <h1>Plan &amp; Build Screen Flows</h1>
        <p>The complete guide to Screen Flows: elements, resources, field visibility, DML operations, fault handling, and surfacing your flow to users — using the Opportunity Wizard exercise as our end-to-end example.</p>
      </div>

      {/* ── USE CASE 2-1 ── */}
      <section className="topic-section fade-up fade-up-1" id="use-case-21">
        <h2>The Use Case: Opportunity Wizard</h2>

        <div className="concept-card">
          <div className="concept-card-header">
            <div className="concept-card-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
            </div>
            <div>
              <h3>Use Case 2-1: Create Opportunity Wizard</h3>
              <div className="concept-card-subtitle">This scenario drives every concept in Lesson 2 — we build it incrementally</div>
            </div>
          </div>
          <div className="two-col">
            <div style={{ background: '#EFF6FF', borderRadius: 10, padding: 16 }}>
              <div style={{ fontSize: '.68rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '.1em', color: '#0369A1', marginBottom: 6 }}>Osman Parks — Sales User</div>
              <p style={{ fontStyle: 'italic', fontSize: '.9rem', marginBottom: 0 }}>"We need a quick way to create Opportunities for our Prospect Accounts. The current process is too many clicks."</p>
            </div>
            <div style={{ background: COLOR_BG, borderRadius: 10, padding: 16 }}>
              <div style={{ fontSize: '.68rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '.1em', color: COLOR, marginBottom: 6 }}>Angela McCoy — Admin</div>
              <p style={{ fontStyle: 'italic', fontSize: '.9rem', marginBottom: 0 }}>"If Stage is Closed Won or Closed Lost, Closed Reason must be required. If any other Stage, Close Date must be in the future — can't log a past-dated open Opportunity."</p>
            </div>
          </div>
        </div>

        <div className="concept-card">
          <h4>Translating the Requirement — 3 Steps Before Building</h4>
          <p style={{ fontSize: '.88rem', marginBottom: 16 }}>Never open Flow Builder first. Translate the business requirement through three layers:</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {[
              {
                n: 1, color: '#7C3AED',
                title: 'Plain Language',
                content: '"Users need a quick way to create Opportunities for Prospect Accounts, with mandatory Closed Reason for closed stages and future-dated Close Date for open ones."'
              },
              {
                n: 2, color: '#0176D3',
                title: 'Salesforce Language',
                content: '"I need to create an Opportunity record linked to an Account where Type = Prospect. If StageName is Closed Won or Closed Lost, CloseDate__Reason is required. If StageName is anything else, CloseDate must be ≥ today."'
              },
              {
                n: 3, color: COLOR,
                title: 'Flow Language',
                content: '"Record Choice Set (Account, Type=Prospect) → Screen element with Stage picklist → Field Visibility for Closed Reason → Formula Resource for date validation → Decision → Create Records → Success Screen with hyperlink to new record."'
              }
            ].map((step, i) => (
              <div key={step.n} style={{ display: 'flex', alignItems: 'stretch', gap: 0 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 32, flexShrink: 0 }}>
                  <div style={{ width: 28, height: 28, borderRadius: '50%', background: step.color, color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '.78rem', fontWeight: 800, flexShrink: 0 }}>{step.n}</div>
                  {i < 2 && <div style={{ width: 2, flex: 1, background: step.color + '30', margin: '4px 0' }} />}
                </div>
                <div style={{ flex: 1, padding: '0 0 20px 16px' }}>
                  <div style={{ fontSize: '.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.1em', color: step.color, marginBottom: 4 }}>Step {step.n}: {step.title}</div>
                  <div style={{ fontSize: '.85rem', color: 'var(--fg-2)', fontStyle: 'italic', lineHeight: 1.6, background: step.color + '08', borderRadius: 8, padding: '10px 14px', border: `1px solid ${step.color}20` }}>{step.content}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="analogy-block">
          <div className="analogy-icon" style={{ background: '#F0FDF4', color: '#0F766E' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>
          </div>
          <div>
            <div className="analogy-label">The Elephant Strategy — Build Incrementally</div>
            <div className="analogy-text">Build the basic wizard first (Screen + Create Records). Get it working. Then add Field Visibility for Closed Reason. Get that working. Then add the date formula validation. Never try to build all three at once — you won't know which part broke.</div>
          </div>
        </div>
      </section>

      {/* ── TOPIC 1 — Screen Elements ── */}
      <section className="topic-section" id="elements-resources">
        <h2>Topic 1: Screen Elements &amp; Resources</h2>

        <div className="concept-card">
          <h4>The Screen Element: What It Is and What It Does</h4>
          <p style={{ fontSize: '.88rem', marginBottom: 16 }}>A Screen element pauses the flow and shows a visual interface to the user. It's the only element that creates a user interaction — everything else runs invisibly. Screens can contain input fields, display text, images, datatable components, and custom Lightning components.</p>
          <div className="three-col" style={{ marginTop: 0 }}>
            {[
              { color: '#0176D3', icon: (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
              ), label: 'Input Fields', desc: 'Text inputs, date pickers, lookup fields, picklists, checkboxes — collect data from users' },
              { color: '#0F766E', icon: (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              ), label: 'Display Text', desc: 'Show merged field values, hyperlinks to records, instructions, summaries' },
              { color: '#7C3AED', icon: (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              ), label: 'Components', desc: 'Custom Lightning Web Components, datatable for multi-record display, address input' },
            ].map(c => (
              <div key={c.label} style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 10, padding: 14 }}>
                <div style={{ width: 26, height: 26, background: c.color + '15', border: `1px solid ${c.color}30`, borderRadius: 7, display: 'flex', alignItems: 'center', justifyContent: 'center', color: c.color, marginBottom: 8 }}>{c.icon}</div>
                <div style={{ fontWeight: 600, fontSize: '.85rem', marginBottom: 4 }}>{c.label}</div>
                <div style={{ fontSize: '.8rem', color: 'var(--fg-3)' }}>{c.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="concept-card">
          <h4>Lookup Field vs. Record Choice Set — Critical Difference</h4>
          <p style={{ fontSize: '.88rem', marginBottom: 12 }}>Both let users select an Account. The difference is <em>which</em> Accounts they can see. For Use Case 2-1, this distinction is the entire point — we only want Prospect Accounts.</p>
          <table className="comparison-table">
            <thead>
              <tr>
                <th></th>
                <th>Lookup Field</th>
                <th>Record Choice Set</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Which records show?', 'ALL records of that object type', 'Only records matching your filter criteria'],
                ['How many records?', 'No limit (search-based)', 'Maximum 200 records'],
                ['UI component', 'Typeahead search box', 'Picklist (dropdown) or radio buttons'],
                ['Can create new parent?', '✅ Yes (inline New button)', '❌ No'],
                ['Can filter by field value?', '❌ No (shows all)', '✅ Yes (e.g., Type = "Prospect")'],
                ['Best for UC 2-1?', '❌ Would show non-prospects', '✅ Filters to Prospect Accounts only'],
              ].map(([criteria, lookup, rcs]) => (
                <tr key={criteria}>
                  <td style={{ fontWeight: 600, fontSize: '.84rem' }}>{criteria}</td>
                  <td style={{ fontSize: '.83rem' }}>{lookup}</td>
                  <td style={{ fontSize: '.83rem' }}>{rcs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="concept-card">
          <h4>Element Naming Conventions — Required for the Exam</h4>
          <p style={{ fontSize: '.88rem', marginBottom: 12 }}>Flow Builder auto-names elements with generic labels. Always rename using the convention: <strong>prefix + step number + description</strong>. The step number makes flow execution order visually obvious.</p>
          <table className="comparison-table">
            <thead><tr><th>Element Type</th><th>Prefix</th><th>Example Name</th><th>Why This Prefix?</th></tr></thead>
            <tbody>
              {[
                ['Screen', 'scr', 'scr010 Opportunity Details', '"scr" = screen — visible UI element'],
                ['Assignment', 'set', 'set020 Set Opportunity Record', '"set" = set a value'],
                ['Action', 'act', 'act030 Send Close Email', '"act" = action taken'],
                ['Get Records', 'get', 'get040 Query Prospect Accounts', '"get" = retrieve from DB'],
                ['Create Records', 'new', 'new050 Insert Opportunity', '"new" = create new record'],
                ['Update Records', 'upd', 'upd060 Update Account Status', '"upd" = update existing'],
                ['Delete Records', 'del', 'del070 Delete Draft Opp', '"del" = delete'],
                ['Loop', 'lp', 'lp080 Iterate Contacts', '"lp" = loop'],
                ['Subflow', 'sub', 'sub090 Share Record Subflow', '"sub" = subflow call'],
                ['Decision', 'if', 'if100 Does Opp Exist?', '"if" = conditional branch'],
              ].map(([type, prefix, example, why]) => (
                <tr key={type}>
                  <td>{type}</td>
                  <td><code>{prefix}</code></td>
                  <td style={{ fontSize: '.8rem' }}>{example}</td>
                  <td style={{ fontSize: '.78rem', color: 'var(--fg-3)' }}>{why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <ExamTrap title="Element naming on the exam">
          <p>Exam questions often present a flow with elements named "Screen 1", "Assignment 2", "Create Records 3" and ask you to identify which element is responsible for a given action. Without consistent naming conventions, this is guesswork. With them, <code>new050 Insert Opportunity</code> is immediately clear.</p>
          <p style={{ marginTop: 6 }}>The step number (010, 020...) convention using increments of 10 allows inserting a new element between steps without renumbering everything.</p>
        </ExamTrap>
      </section>

      {/* ── TOPIC 2 — Field Visibility ── */}
      <section className="topic-section" id="field-visibility">
        <h2>Topic 2: Field Visibility</h2>

        <div className="definition-box" style={{ borderLeftColor: COLOR }}>
          <div className="definition-box-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
          </div>
          <div>
            <div className="definition-label">Definition</div>
            <div className="definition-text">
              <strong>Field Visibility</strong> conditionally shows or hides any component on a Screen element based on real-time field values — the screen updates dynamically as users interact, without navigating to a new screen. Implemented as a visibility rule on the specific component, not as a separate Decision element.
            </div>
          </div>
        </div>

        <div className="two-col" style={{ marginBottom: 24 }}>
          <div className="before-col" style={{ borderRadius: 'var(--r-lg)', border: '1px solid #FECDD3', background: '#FFF1F2', padding: 16 }}>
            <div style={{ fontSize: '.68rem', fontWeight: 800, color: 'var(--red)', textTransform: 'uppercase', marginBottom: 8 }}>Without Field Visibility</div>
            <p style={{ fontSize: '.88rem', marginBottom: 0 }}>Put "Closed Reason" on a second screen. User fills out Stage on Screen 1 → clicks Next → sees Closed Reason on Screen 2 regardless of Stage. Need a Decision element to branch between two different screens. Two separate screens to maintain. No real-time feedback.</p>
          </div>
          <div className="after-col" style={{ borderRadius: 'var(--r-lg)', border: '1px solid #BBF7D0', background: '#F0FDF4', padding: 16 }}>
            <div style={{ fontSize: '.68rem', fontWeight: 800, color: 'var(--green)', textTransform: 'uppercase', marginBottom: 8 }}>With Field Visibility</div>
            <p style={{ fontSize: '.88rem', marginBottom: 0 }}>Both Stage and Closed Reason live on the same screen. Set Closed Reason visibility: show when Stage = "Closed Won" OR Stage = "Closed Lost". As soon as user changes the Stage picklist, Closed Reason appears/disappears instantly. Single screen. No Decision element needed.</p>
          </div>
        </div>

        <StepList
          title="Exercise Walkthrough: Set Field Visibility on Closed Reason"
          intro="This is exactly what you'll do in the Org — step by step, verified against the Activity Guide."
          steps={[
            { label: 'Open your Screen element', detail: 'Double-click scr010 on the canvas to enter Screen editor.' },
            { label: 'Add Closed Reason to the screen', detail: 'Drag the CloseReason__c field from the left panel onto the screen layout.' },
            { label: 'Click on the Closed Reason component', detail: 'Single click to select it — you\'ll see component properties appear in the right panel.' },
            { label: 'Click "Set Field Visibility"', detail: 'Button appears in the right properties panel when the component is selected.' },
            { label: 'Set "When to Display Field"', detail: 'Change from "Always" to "When conditions are met". Select "Any condition is met (OR)" — you need two conditions.' },
            { label: 'Add first condition', detail: 'Resource: {!varOppRec.StageName}. Operator: Equals. Value: "Closed Won" (type the exact string).' },
            { label: 'Add second condition', detail: 'Click Add Condition. Resource: {!varOppRec.StageName}. Operator: Equals. Value: "Closed Lost".' },
            { label: 'Save and run the debug', detail: 'Save the flow. Run it in Debug mode. Change Stage to "Closed Won" — watch Closed Reason appear. Change to "Prospecting" — watch it disappear.', note: 'If Stage is mapped to the right variable, the real-time behavior works immediately.' },
          ]}
        />

        <div className="tip-box">
          <span className="tip-box-icon">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
          </span>
          <span><span className="tip-label">Field Visibility vs. Validation Rule</span>Field Visibility provides <em>real-time UX guidance</em> — fields appear and disappear as users interact. A Validation Rule fires only on Save — after users complete the whole form. Use Field Visibility to guide. Use Validation Rules (or Custom Error in a flow) to enforce. Both are often needed together.</span>
        </div>
      </section>

      {/* ── TOPIC 3 — DML ── */}
      <section className="topic-section" id="dml-data">
        <h2>Topic 3: DML Operations in Screen Flows</h2>

        <div className="definition-box" style={{ borderLeftColor: COLOR }}>
          <div className="definition-box-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
          </div>
          <div>
            <div className="definition-label">Definition</div>
            <div className="definition-text">
              <strong>DML (Data Manipulation Language)</strong> is how flows write to the database. Each operation costs one DML statement against the 150-per-transaction limit. Understanding which operations are available in Flow (vs. Apex only) is a common exam topic.
            </div>
          </div>
        </div>

        <table className="comparison-table">
          <thead>
            <tr>
              <th>DML Operation</th>
              <th>Flow Element</th>
              <th>What It Does</th>
              <th>Available in Flow?</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Insert', 'Create Records', 'Add new records to the database', true, 'Most common — creates the Opportunity in UC 2-1'],
              ['Update', 'Update Records', 'Modify field values on existing records', true, 'Also used in Record-Triggered Flows'],
              ['Delete', 'Delete Records', 'Send records to Recycle Bin (soft delete)', true, 'Cannot skip Recycle Bin in Flow — use Apex for hard delete'],
              ['Upsert', 'Create Records (option)', 'Update if exists, Insert if not (based on External ID)', true, 'Enable in Create Records settings — requires External ID field'],
              ['Undelete', 'N/A — Apex only', 'Restore records from Recycle Bin', false, 'Not available in Flow — must use Apex or UI'],
              ['Merge', 'N/A — Apex only', 'Combine two duplicate records into one', false, 'Not available in Flow — use standard Merge UI or Apex'],
            ].map(([dml, elem, what, available, note]) => (
              <tr key={dml}>
                <td><code>{dml}</code></td>
                <td style={{ fontSize: '.84rem' }}>{elem}</td>
                <td style={{ fontSize: '.83rem' }}>{what}</td>
                <td style={{ color: available ? '#059669' : '#DC2626', fontWeight: 700 }}>
                  {available ? '✓ Yes' : '✗ No'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="concept-card">
          <h4>Create Records: How Flow Builds the Opportunity in UC 2-1</h4>
          <div className="two-col" style={{ marginBottom: 0 }}>
            <div>
              <div style={{ fontSize: '.72rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--fg-3)', marginBottom: 10 }}>Option A: Use All Values from a Record Variable</div>
              <p style={{ fontSize: '.85rem' }}>Set every field on a Record variable using Assignment elements, then pass the entire variable to Create Records. Clean, all assignments visible in one place. Best for complex records with many fields.</p>
              <code style={{ display: 'block', fontSize: '.78rem', padding: '10px 14px' }}>
                varOppRec.Name = {'{!scrOppName}'}<br />
                varOppRec.AccountId = {'{!rcsAccountId}'}<br />
                varOppRec.CloseDate = {'{!scrCloseDate}'}<br />
                → Create Records using varOppRec
              </code>
            </div>
            <div>
              <div style={{ fontSize: '.72rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--fg-3)', marginBottom: 10 }}>Option B: Use Separate Variables for Field Values</div>
              <p style={{ fontSize: '.85rem' }}>Map each field manually inside the Create Records element. More direct for simple records with few fields. Field mapping visible in the Create Records element without opening Assignments.</p>
              <code style={{ display: 'block', fontSize: '.78rem', padding: '10px 14px' }}>
                Create Records: Opportunity<br />
                Name: {'{!scrOppName}'}<br />
                AccountId: {'{!rcsAccountId}'}<br />
                CloseDate: {'{!scrCloseDate}'}
              </code>
            </div>
          </div>
        </div>

        <div className="concept-card">
          <h4>Critical: Prevent Duplicate Records — Hide the Previous Button After DML</h4>
          <div className="before-after">
            <div className="before-col">
              <div className="before-label">What Goes Wrong</div>
              <p style={{ fontSize: '.88rem' }}>User fills out form → clicks Next → Create Records fires → Opportunity is created → user realizes a mistake → clicks <strong>Previous</strong> → fixes it → clicks <strong>Next</strong> again → <strong>Create Records fires again.</strong></p>
              <p style={{ color: 'var(--red)', fontWeight: 600, fontSize: '.88rem', marginBottom: 0 }}>Now there are two Opportunities with the same data. DML does not undo on backward navigation.</p>
            </div>
            <div className="after-col">
              <div className="after-label">The Fix</div>
              <p style={{ fontSize: '.88rem' }}>On the screen that appears <em>after</em> Create Records (your success screen), set the <strong>Previous Button</strong> property to <strong>Hide Previous</strong>.</p>
              <p style={{ fontSize: '.88rem', marginBottom: 0 }}>This removes the back button entirely from the success screen. Users cannot go backward from the point of data write. The record was already created — navigating backward just creates duplicates.</p>
            </div>
          </div>
        </div>

        <div className="concept-card">
          <h4>Link to the Newly Created Record — Using the Populated Record ID</h4>
          <p style={{ fontSize: '.88rem', marginBottom: 12 }}>When Create Records finishes, Salesforce populates <code>{'{!varOppRec.Id}'}</code> with the new record's ID. Use this on the success screen to give users a direct link.</p>
          <div className="code-block">
            <div className="code-block-header">
              <div className="code-block-dots"><span className="code-dot code-dot-red"/><span className="code-dot code-dot-yellow"/><span className="code-dot code-dot-green"/></div>
              <span className="code-block-label">Success Screen — Display Text element (Rich Text)</span>
            </div>
            <pre>{`Link Title:  {!varOppRec.Name}
Link URL:    /{!varOppRec.Id}

→ Renders as: "Q4 2026 Deal" (hyperlinked to the new record)
→ Important: Use a forward slash before the ID for org-relative URLs`}</pre>
          </div>
          <div className="note-box" style={{ marginBottom: 0 }}>
            <span className="note-box-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
            </span>
            <span>The Display Text component must be set to <strong>Rich Text</strong> mode to render clickable hyperlinks. Plain text mode shows the raw HTML as text.</span>
          </div>
        </div>

        <div className="concept-card">
          <h4>Formula Resource — Validate Close Date</h4>
          <p style={{ fontSize: '.88rem', marginBottom: 12 }}>Requirement: if Stage is open (not Closed Won/Lost), Close Date must be today or in the future. This is a Boolean formula — returns <code>true</code> when the input is valid.</p>
          <div className="code-block">
            <div className="code-block-header">
              <div className="code-block-dots"><span className="code-dot code-dot-red"/><span className="code-dot code-dot-yellow"/><span className="code-dot code-dot-green"/></div>
              <span className="code-block-label">Formula Resource — fmlIsCloseDateValid (Boolean)</span>
            </div>
            <pre>{`IF(
  {!varOppRec.CloseDate} >= {!$Flow.CurrentDate} ||
  ISPICKVAL({!varOppRec.StageName}, 'Closed Won') ||
  ISPICKVAL({!varOppRec.StageName}, 'Closed Lost'),
  True,
  False
)

// Returns True (VALID) when any of these are true:
//   - Close Date is today or in the future
//   - Stage is Closed Won (historical date OK)
//   - Stage is Closed Lost (historical date OK)
//
// Returns False (INVALID) when:
//   - Close Date is in the past AND Stage is still open`}</pre>
          </div>
          <div className="note-box" style={{ marginBottom: 0 }}>
            <span className="note-box-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
            </span>
            <span>Use <code>ISPICKVAL()</code> for picklist comparisons — not <code>==</code> equals operator. Picklist comparison with <code>==</code> can fail if the internal and display values differ. <code>ISPICKVAL()</code> compares against the API value.</span>
          </div>
        </div>

        <ExamTrap title="Create Records does not auto-populate the Record variable until after it runs">
          <p>Students often try to reference <code>{'{!varOppRec.Id}'}</code> before Create Records has executed — for example, in a formula resource or assignment before the element. The Id is <code>null</code> until Create Records completes. Only <em>after</em> Create Records runs does Salesforce populate the Id back into the variable you passed.</p>
        </ExamTrap>
      </section>

      {/* ── TOPIC 4 — Faults ── */}
      <section className="topic-section" id="faults">
        <h2>Topic 4: Faults &amp; Error Handling</h2>

        <div className="definition-box" style={{ borderLeftColor: COLOR }}>
          <div className="definition-box-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
          </div>
          <div>
            <div className="definition-label">Definition</div>
            <div className="definition-text">
              A <strong>Fault</strong> is an exception that occurs during a data operation — a Get Records that fails due to permissions, a Create Records blocked by a validation rule, a callout that times out. Faults are the declarative equivalent of <code>try/catch</code> blocks in code. Without Fault paths, the flow terminates with a generic, useless error message.
            </div>
          </div>
        </div>

        <div className="before-after" style={{ marginBottom: 24 }}>
          <div className="before-col">
            <div className="before-label">No Fault Path — What Users See</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '.82rem', background: '#1a1a1a', color: '#f87171', borderRadius: 8, padding: 14, margin: '12px 0' }}>
              An unhandled fault has occurred in this flow.<br />
              Please contact your system administrator.
            </div>
            <p style={{ fontSize: '.85rem', marginBottom: 0 }}>Nobody knows what failed. Your admin has to open debug logs, find the org-specific transaction, decode the error. Support tickets pile up. Admins spend hours on a problem a Fault path would have surfaced instantly.</p>
          </div>
          <div className="after-col">
            <div className="after-label">With Fault Path — What Users See</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '.82rem', background: '#1a1a1a', color: '#86efac', borderRadius: 8, padding: 14, margin: '12px 0' }}>
              Error creating Opportunity:<br />
              REQUIRED_FIELD_MISSING: Required fields<br />
              are missing: [CloseDate]
            </div>
            <p style={{ fontSize: '.85rem', marginBottom: 0 }}>Admin immediately knows the exact field. User can call support with a specific error. Log message pinpoints the flow version, element, and transaction. Resolution time: 5 minutes vs. 2 hours.</p>
          </div>
        </div>

        <StepList
          title="How to Add a Fault Path to Any Data Element"
          intro="Every Create Records, Update Records, Delete Records, Get Records, and Action element needs a Fault path. This takes 60 seconds."
          steps={[
            { label: 'Hover over the data element on the canvas', detail: 'Look for the three vertical dots (⋮) that appear in the top-right corner of the element.' },
            { label: 'Click Add Fault Path', detail: 'The element now shows two exit connectors: the default path (success) and the Fault path (error).' },
            { label: 'Connect Fault to a Screen element', detail: 'Drag from the Fault connector to a new Screen element. Name it "scr999 Error Screen" or similar.' },
            { label: 'Add Display Text showing the fault message', detail: 'Inside the error Screen, add a Display Text component.' },
            { label: 'Reference {!$Flow.FaultMessage}', detail: 'This global variable holds the exact technical error from Salesforce. Merge it into your Display Text so the message is visible to the admin reviewing the flow run.', code: 'Error: {!$Flow.FaultMessage}' },
            { label: 'Optional: also send an email to admin', detail: 'Add an Action element (Send Email) on the Fault path to email the admin the fault message automatically.', note: 'Production flows in large orgs should always notify admins on fault — don\'t rely on users to report errors.' },
          ]}
        />

        <MistakeCard>
          <p><strong>Students skip Fault paths on Get Records</strong> — "it's just a query, it can't fail." Wrong. <code>Get Records</code> fails on:</p>
          <ul>
            <li>Insufficient field-level security for the running user (record access but not field access)</li>
            <li>Network timeouts in complex queries with many filters</li>
            <li>SOQL query limits exceeded (100 SOQL per transaction)</li>
          </ul>
          <p style={{ margin: '8px 0 0' }}>Always add Fault paths. Always. Every element that touches the database.</p>
        </MistakeCard>
      </section>

      {/* ── TOPIC 5 — Surfacing ── */}
      <section className="topic-section" id="surfacing">
        <h2>Topic 5: Surfacing &amp; Activating a Flow</h2>

        <div className="concept-card">
          <h4>Three Ways to Surface a Screen Flow</h4>
          <div className="three-col" style={{ marginTop: 12 }}>
            {[
              {
                color: '#0176D3',
                num: '01',
                title: 'Quick Action (Most Common)',
                desc: 'Add a button to a record page. Users click it from the page to launch the flow. Flow context includes the record\'s ID — perfect for record-specific wizards.',
                howTo: 'Setup → Object Manager → Object → Buttons, Links, Actions → New Action → Flow Action → select your flow',
                bestFor: 'Record-specific wizards, forms that need the current record\'s data'
              },
              {
                color: COLOR,
                num: '02',
                title: 'Lightning App Builder Component',
                desc: 'Embed the flow directly on a record page, home page, or app page. The flow launches automatically when the page loads. Best for forms that are always visible.',
                howTo: 'Lightning App Builder → add "Flow" component → select your flow → pass record ID via Input Variables',
                bestFor: 'Always-visible wizards, onboarding screens, home page tools'
              },
              {
                color: '#D97706',
                num: '03',
                title: 'Utility Bar',
                desc: 'Add the flow to the utility bar at the bottom of a Lightning App. Available on every page in the app without leaving current context. Great for frequently used tools.',
                howTo: 'App Manager → Edit App → Utility Items → Add Utility Item → Flow → configure width/height',
                bestFor: 'Frequently used workflows, always-accessible tools, support scripts'
              },
            ].map(s => (
              <div key={s.num} className="var-card" style={{ borderTop: `4px solid ${s.color}` }}>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 10 }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '.7rem', fontWeight: 700, color: s.color, background: s.color + '15', border: `1px solid ${s.color}30`, borderRadius: 6, padding: '2px 8px' }}>{s.num}</span>
                </div>
                <h4 style={{ marginBottom: 8 }}>{s.title}</h4>
                <p style={{ fontSize: '.84rem', marginBottom: 10 }}>{s.desc}</p>
                <div style={{ fontSize: '.76rem', fontWeight: 600, color: s.color, marginBottom: 4 }}>Best for:</div>
                <div style={{ fontSize: '.78rem', color: 'var(--fg-3)', marginBottom: 10 }}>{s.bestFor}</div>
                <div style={{ fontSize: '.72rem', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 6, padding: '8px 10px', color: 'var(--fg-3)' }}>{s.howTo}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="note-box">
          <span className="note-box-icon">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
          </span>
          <span><strong>Don't forget to Activate!</strong> A flow in Inactive status will not run — it won't appear on the Quick Action, it won't embed in App Builder, nothing. New admins build a perfect flow, add it to the page, and wonder why clicking the button does nothing. Always go to Flow detail → Activate before testing.</span>
        </div>

        <DeepDive title="Input Variables: How Page Context Passes Into Your Flow">
          <p>When you surface a flow via Quick Action or App Builder on a record page, the flow needs to know <em>which</em> record the user is on. This is done via <strong>Input Variables</strong>:</p>
          <ol>
            <li>Create a Text variable named exactly <code>recordId</code> (case-sensitive) and set <strong>Available for Input</strong> to true</li>
            <li>When the flow launches from a record context, Salesforce automatically passes the record ID into this variable</li>
            <li>Use <code>Get Records</code> to load the full record: <code>Id equals {'{!recordId}'}</code></li>
          </ol>
          <p style={{ marginTop: 8 }}>Without this, your flow has no idea which Account or Opportunity the user is currently viewing. The flow runs, but has no context — a common source of "my flow isn't pulling the right data" support tickets.</p>
        </DeepDive>

        <ExamTrap>
          <p><strong>Input Variable naming is exact-match.</strong> If you name the variable <code>RecordId</code> (capital R) and the Quick Action passes <code>recordId</code>, the value won't bind. The variable name must match exactly what the surface passes. For record pages: <code>recordId</code> (lowercase r). The exam tests this.</p>
        </ExamTrap>
      </section>

      <Quiz questions={quizData.l2} title="Lesson 2 Knowledge Check — Screen Flows" />

      <div className="page-nav">
        <Link to="/lesson/1" className="page-nav-btn">← Lesson 1: Think Like a Developer</Link>
        <Link to="/lesson/3" className="page-nav-btn primary">Lesson 3: Record-Triggered Flows →</Link>
      </div>
    </>
  );
}
