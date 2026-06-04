import { Link } from 'react-router-dom';
import Quiz from '../components/Quiz';
import { quizData } from '../data/curriculum';

export default function Lesson2() {
  return (
    <>
      <div className="breadcrumb">
        <Link to="/">Home</Link>
        <span className="breadcrumb-sep">/</span>
        <span>Lesson 2</span>
      </div>

      <div className="lesson-header fade-up">
        <div className="lesson-badge" style={{ background: '#E6FAF9', color: '#06A59A' }}>
          🖥️ Lesson 2
        </div>
        <h1>Plan &amp; Build Screen Flows</h1>
        <p>Elements, resources, field visibility, DML operations, fault handling, and surfacing your flow to users.</p>
      </div>

      {/* USE CASE 2-1 */}
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
              <div style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#0176D3', marginBottom: 6 }}>👤 Osman Parks (User)</div>
              <p style={{ fontStyle: 'italic', fontSize: '0.95rem' }}>"Users need a quick way to create new Opportunities for Prospect Accounts."</p>
            </div>
            <div style={{ background: '#E6FAF9', borderRadius: 10, padding: 16 }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#06A59A', marginBottom: 6 }}>👤 Angela McCoy (Admin)</div>
              <p style={{ fontStyle: 'italic', fontSize: '0.95rem' }}>"If Stage is Closed Won or Closed Lost, a Closed Reason must be specified. If another Stage is selected, Close Date must be in the future."</p>
            </div>
          </div>
        </div>

        <div className="analogy-block">
          <div className="analogy-icon">🐘</div>
          <div>
            <div className="analogy-label">Approach: Eat the Elephant One Bite at a Time</div>
            <div className="analogy-text">
              This is a big requirement. Break it into pieces: first build the basic wizard (screen + create), then add the Closed Reason logic, then add the Close Date validation. Students who try to build everything at once get lost.
            </div>
          </div>
        </div>

        <div className="concept-card">
          <h4>Element Naming Conventions</h4>
          <p>Consistent naming makes flows readable and sortable. Use a numbered prefix so elements stay in logical order.</p>
          <table className="comparison-table" style={{ marginTop: 12 }}>
            <thead>
              <tr><th>Element Type</th><th>Prefix</th><th>Full Example</th></tr>
            </thead>
            <tbody>
              <tr><td>Screen</td><td><code>scr010</code></td><td>scr010 Contact Input</td></tr>
              <tr><td>Assignment</td><td><code>set020</code></td><td>set020 Contact Record</td></tr>
              <tr><td>Action</td><td><code>act030</code></td><td>act030 Send Email</td></tr>
              <tr><td>Get Records</td><td><code>get040</code></td><td>get040 Query Account</td></tr>
              <tr><td>Create Records</td><td><code>new050</code></td><td>new050 Insert Account</td></tr>
              <tr><td>Update Records</td><td><code>upd060</code></td><td>upd060 Update Account</td></tr>
              <tr><td>Delete Records</td><td><code>del070</code></td><td>del070 Delete Account</td></tr>
              <tr><td>Loop</td><td><code>lp080</code></td><td>lp080 Iterate over Accounts</td></tr>
              <tr><td>Subflow</td><td><code>sub090</code></td><td>sub090 Share Record</td></tr>
              <tr><td>Decision</td><td><code>if100</code></td><td>if100 Does the record exist?</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* TOPIC 2 — Elements & Resources */}
      <section className="topic-section" id="elements-resources">
        <h2>Topic 1: Elements &amp; Resources</h2>

        <div className="concept-card">
          <h4>Screen Element — The User-Facing Layer</h4>
          <p>The Screen element creates a page that users interact with. It can hold fields (from a Record Variable), components (picklists, file uploads, etc.), and display text.</p>

          <div className="two-col" style={{ marginTop: 16 }}>
            <div>
              <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#06A59A', textTransform: 'uppercase', marginBottom: 8 }}>Adding Fields from a Record Variable</div>
              <div className="note-box">
                <span className="note-box-icon">ℹ️</span>
                <span>Select your Record Variable in the Screen element's <strong>Fields</strong> tab. Salesforce auto-generates input fields for the object. This is "automatically packing the suitcase."</span>
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#06A59A', textTransform: 'uppercase', marginBottom: 8 }}>Sections — Up to 4 Columns</div>
              <div className="note-box">
                <span className="note-box-icon">ℹ️</span>
                <span>Add a <strong>Section</strong> component to your screen to create a multi-column layout. Configure each column width independently.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="concept-card">
          <h4>Lookup Field vs. Record Choice Set</h4>
          <p>When users need to select a related record (like an Account), you have two options:</p>
          <table className="comparison-table" style={{ marginTop: 12 }}>
            <thead>
              <tr><th></th><th>Lookup Field</th><th>Record Choice Set</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>Record access</td>
                <td>ALL parent records</td>
                <td>Max 200 records</td>
              </tr>
              <tr>
                <td>Filtering</td>
                <td>No filtering</td>
                <td>✅ Filter by any criteria (e.g., Type = Prospect)</td>
              </tr>
              <tr>
                <td>Create new</td>
                <td>✅ Can create a new parent record</td>
                <td>No</td>
              </tr>
              <tr>
                <td>Display</td>
                <td>Search/typeahead box</td>
                <td>Picklist or radio buttons</td>
              </tr>
              <tr>
                <td>Use when</td>
                <td>User can pick any related record</td>
                <td>You need to restrict which records appear</td>
              </tr>
            </tbody>
          </table>
          <div className="analogy-block" style={{ marginBottom: 0 }}>
            <div className="analogy-icon">🍕</div>
            <div>
              <div className="analogy-label">Why This Matters for Use Case 2-1</div>
              <div className="analogy-text">
                The Lookup field would show ALL Accounts — including non-prospects. The Record Choice Set filters to Type = Prospect, so users can only select the right Account type. 200-record limit is fine for most prospect lists.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TOPIC 3 — Field Visibility */}
      <section className="topic-section" id="field-visibility">
        <h2>Topic 2: Field Visibility</h2>

        <div className="definition-box">
          <div className="definition-box-icon">📖</div>
          <div>
            <div className="definition-label">Definition</div>
            <div className="definition-text">
              <strong>Field Visibility</strong> lets you conditionally show or hide any component on a Screen element based on current field values — without navigating to a new screen.
            </div>
          </div>
        </div>

        <div className="concept-card">
          <h4>Use Case: Show "Closed Reason" Only When Stage is Closed</h4>
          <div className="join-me-box">
            <div className="join-me-label">📌 How It Works</div>
            <h4>Set Field Visibility on the Closed Reason component</h4>
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
            <span><span className="tip-label">Why this beats a validation rule:</span> Field Visibility shows/hides in real time as users interact. A validation rule only fires on save — the user fills out the form first, then gets an error. Field Visibility guides users as they go.</span>
          </div>
        </div>
      </section>

      {/* TOPIC 4 — DML */}
      <section className="topic-section" id="dml-data">
        <h2>Topic 3: Data Manipulation Language (DML)</h2>

        <div className="definition-box">
          <div className="definition-box-icon">📖</div>
          <div>
            <div className="definition-label">Definition</div>
            <div className="definition-text">
              <strong>DML (Data Manipulation Language)</strong> is used to add, modify, or remove data in a database. In Salesforce, DML includes Insert, Update, Delete, Undelete, Upsert, and Merge.
            </div>
          </div>
        </div>

        <table className="comparison-table">
          <thead>
            <tr><th>DML Operation</th><th>Flow Element</th><th>What It Does</th><th>Available in Flow?</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>Insert</td>
              <td><span className="tag tag-green">Create Records</span></td>
              <td>Add new records to the database</td>
              <td>✅ Yes</td>
            </tr>
            <tr>
              <td>Update</td>
              <td><span className="tag tag-blue">Update Records</span></td>
              <td>Change existing records</td>
              <td>✅ Yes</td>
            </tr>
            <tr>
              <td>Delete</td>
              <td><span className="tag tag-red">Delete Records</span></td>
              <td>Send records to the Recycle Bin</td>
              <td>✅ Yes</td>
            </tr>
            <tr>
              <td>Upsert</td>
              <td><span className="tag tag-teal">Create Records (option)</span></td>
              <td>Update if exists, Insert if not</td>
              <td>✅ Option in Create Records</td>
            </tr>
            <tr>
              <td>Undelete</td>
              <td><em>n/a</em></td>
              <td>Restore from Recycle Bin</td>
              <td>❌ Not available in Flow</td>
            </tr>
            <tr>
              <td>Merge</td>
              <td><em>n/a</em></td>
              <td>Combine duplicate records</td>
              <td>❌ Not available in Flow</td>
            </tr>
          </tbody>
        </table>

        <div className="concept-card">
          <h4>Get Records — Retrieving Data</h4>
          <p>Get Records is a query operation (SOQL) — it reads from the database without changing anything. Configure it with:</p>
          <ul>
            <li><strong>Object</strong> — which object to query</li>
            <li><strong>Filter conditions</strong> — which records to return</li>
            <li><strong>Sort order</strong> — how to order results</li>
            <li><strong>How many records</strong> — First record only, or All records</li>
            <li><strong>How to store</strong> — Automatically (all fields) or choose specific fields</li>
          </ul>
          <div className="tip-box" style={{ marginTop: 12 }}>
            <span className="tip-box-icon">💡</span>
            <span><span className="tip-label">Best Practice:</span> "Choose fields and let Salesforce do the rest" is more self-documenting than "Automatically store all fields." Future maintainers can see exactly what fields you're using.</span>
          </div>
        </div>

        <div className="concept-card">
          <h4>Screen Navigation — Hide Previous After DML</h4>
          <div className="before-after">
            <div className="before-col">
              <div className="before-label">❌ Don't Do This</div>
              <h4>Previous button visible after Create Records</h4>
              <p style={{ fontSize: '0.88rem' }}>User goes back → hits Next again → Create Records fires again → <strong>duplicate record created</strong>. DML does not undo when navigating backward.</p>
            </div>
            <div className="after-col">
              <div className="after-label">✅ Do This</div>
              <h4>Hide Previous button on success screen</h4>
              <p style={{ fontSize: '0.88rem' }}>On the screen that appears after Create Records, set <strong>Previous Button → Hide Previous</strong>. This prevents the user from accidentally creating duplicates.</p>
            </div>
          </div>

          <div className="join-me-box" style={{ marginBottom: 0 }}>
            <div className="join-me-label">Hyperlink Trick</div>
            <h4>Link to the newly created record in the success screen</h4>
            <p>After Create Records runs, the flow populates <code>{'{!varOppRec.Id}'}</code>. In your Display Text component on the success screen:</p>
            <ul style={{ marginTop: 8 }}>
              <li>Link Title: <code>{'{!varOppRec.Name}'}</code></li>
              <li>Link URL: <code>{'{!varOppRec.Id}'}</code></li>
            </ul>
            <p style={{ marginTop: 8, fontSize: '0.88rem' }}>This gives users a clickable link to jump directly to the new Opportunity. Delightful UX detail.</p>
          </div>
        </div>
      </section>

      {/* TOPIC 5 — Faults */}
      <section className="topic-section" id="faults">
        <h2>Topic 4: Faults &amp; Error Handling</h2>

        <div className="definition-box">
          <div className="definition-box-icon">📖</div>
          <div>
            <div className="definition-label">Definition</div>
            <div className="definition-text">
              <strong>Faults</strong> are exceptions that can happen while processing Data elements (Create, Update, Delete, Get). They are the declarative equivalent of exception handling (try/catch in code).
            </div>
          </div>
        </div>

        <div className="before-after">
          <div className="before-col">
            <div className="before-label">❌ No Fault Path</div>
            <h4>Generic error message</h4>
            <p style={{ fontSize: '0.88rem' }}>The user sees: <em>"An unhandled fault has occurred in this flow. Please contact your system administrator for more information."</em></p>
            <p style={{ fontSize: '0.88rem' }}>Useless. No one knows what to fix.</p>
          </div>
          <div className="after-col">
            <div className="after-label">✅ With Fault Path</div>
            <h4>Specific, actionable error</h4>
            <p style={{ fontSize: '0.88rem' }}>The flow catches the error. A Fault Screen shows: <em>"This error occurred when the flow tried to create records: REQUIRED_FIELD_MISSING: Required fields are missing: [CloseDate]."</em></p>
            <p style={{ fontSize: '0.88rem' }}>Admin can immediately find and fix the issue.</p>
          </div>
        </div>

        <div className="concept-card">
          <h4>How to Add a Fault Path</h4>
          <ol>
            <li>Add your data element (Create Records, Update Records, etc.) to the canvas</li>
            <li>On the element, click the red <strong>Fault</strong> connector that appears</li>
            <li>Connect it to a new Screen element</li>
            <li>On that screen, add a Display Text component</li>
            <li>Reference <code>{'{!$Flow.FaultMessage}'}</code> to show the actual error</li>
          </ol>
          <div className="tip-box" style={{ marginTop: 12 }}>
            <span className="tip-box-icon">⚠️</span>
            <span><span className="tip-label">Always do this:</span> Every single data element in every flow should have a fault path. Students learn this lesson the hard way when a production flow fails silently and no one can diagnose why.</span>
          </div>
        </div>

        <div className="concept-card">
          <h4>Use Case 2-2: Validate Close Date with a Formula</h4>
          <p>Why use a Screen Flow for validation instead of a standard Validation Rule?</p>
          <table className="comparison-table" style={{ marginTop: 12 }}>
            <thead>
              <tr><th>Method</th><th>Validates Close Date Must Be Future</th><th>Limitation</th></tr>
            </thead>
            <tbody>
              <tr><td>Page Layout</td><td>❌ No</td><td>Layout only controls visibility</td></tr>
              <tr><td>Validation Rule</td><td>✅ Yes*</td><td>*Doesn't notify until Save; blocks historical data imports</td></tr>
              <tr><td>Screen Flow</td><td>✅ Yes</td><td>Validates in real time as user interacts; can allow exceptions</td></tr>
            </tbody>
          </table>
          <div className="code-block">{`if(
  {!closeDate} >= {!$Flow.CurrentDate} ||
  ISPICKVAL({!varOppRec.StageName}, 'Closed Won')
  ||
  ISPICKVAL({!varOppRec.StageName}, 'Closed Lost'),
  True, False
)

// Returns True (valid) if:
// - Close Date is today or future, OR
// - Stage is Closed Won or Closed Lost (historical close dates OK)`}</div>
        </div>
      </section>

      {/* TOPIC 6 — Surfacing */}
      <section className="topic-section" id="surfacing">
        <h2>Topic 5: Surfacing &amp; Finishing a Flow</h2>

        <div className="concept-card">
          <h4>Where Can You Surface a Screen Flow?</h4>
          <div className="three-col" style={{ marginTop: 12 }}>
            <div className="var-card">
              <div className="var-card-type" style={{ color: '#0176D3' }}>Option 1</div>
              <h4>⚡ Quick Action</h4>
              <p>Add to a page layout as a button. Users click it from the record page. Most common for record-specific flows.</p>
            </div>
            <div className="var-card">
              <div className="var-card-type" style={{ color: '#06A59A' }}>Option 2</div>
              <h4>🏗️ Lightning App Builder</h4>
              <p>Add as a component to any record page, home page, or app page. Visible on page load.</p>
            </div>
            <div className="var-card">
              <div className="var-card-type" style={{ color: '#FE9339' }}>Option 3</div>
              <h4>🔧 Utility Bar</h4>
              <p>Always accessible at the bottom of a Lightning App. Great for frequently used wizards.</p>
            </div>
          </div>
        </div>

        <div className="note-box">
          <span className="note-box-icon">ℹ️</span>
          <span><strong>Don't forget to Activate!</strong> A flow that isn't Activated won't run, even if it's on a page. New admins often build a perfect flow and wonder why nothing happens — it's still in Draft status.</span>
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
