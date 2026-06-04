import { Link } from 'react-router-dom';
import Quiz from '../components/Quiz';
import { quizData } from '../data/curriculum';

const COLOR = '#7C3AED';
const COLOR_BG = '#F5F3FF';

export default function Lesson1() {
  return (
    <>
      <div className="breadcrumb">
        <Link to="/">Home</Link>
        <span className="breadcrumb-sep">/</span>
        <span>Lesson 1</span>
      </div>

      <div className="lesson-header fade-up">
        <div className="lesson-badge" style={{ background: COLOR_BG, color: COLOR, border: '1px solid #DDD6FE' }}>
          🧠 Lesson 1
        </div>
        <h1>Think Like a Developer</h1>
        <p>Variables, data types, algorithms, and control structures — the building blocks every flow is made of.</p>
      </div>

      <div className="analogy-block fade-up fade-up-1">
        <div className="analogy-icon">🍕</div>
        <div>
          <div className="analogy-label">The Story of This Lesson — Pizza Restaurant</div>
          <div className="analogy-text">
            Throughout Lesson 1 we use a pizza restaurant as our Salesforce org. The restaurant has tables (records), orders (data), a kitchen (logic), and staff who follow processes (flows). Every concept maps back to this story.
          </div>
        </div>
      </div>

      {/* ── TOPIC 1 — Variables ── */}
      <section className="topic-section fade-up fade-up-2" id="variables">
        <h2>Topic 1: Variables</h2>

        <div className="definition-box" style={{ borderLeftColor: COLOR }}>
          <div className="definition-box-icon">📖</div>
          <div>
            <div className="definition-label">Definition</div>
            <div className="definition-text">
              A <strong>variable</strong> is a named container that holds a value. In Flow, we use the <strong>Assignment</strong> element to provide a value to a variable.
            </div>
          </div>
        </div>

        <div className="analogy-block">
          <div className="analogy-icon">🍕</div>
          <div>
            <div className="analogy-label">Pizza Analogy</div>
            <div className="analogy-text">
              In algebra you wrote <code>x = 10</code>. In our restaurant, <code>varNumOfPizzas = 10</code> means "the container called 'number of pizzas' currently holds 10." The container exists even when empty — like a reserved table waiting for guests.
            </div>
          </div>
        </div>

        <div className="concept-card">
          <h4>Why Do We Use Variables?</h4>
          <p>A program has <strong>instructions</strong> (what to do) and <strong>data</strong> (what to do it with). Variables store the data your flow needs while it runs.</p>
          <div className="tag-row" style={{ marginTop: 12 }}>
            <span className="tag tag-blue">📥 Input from users</span>
            <span className="tag tag-blue">☁️ Fields from Salesforce objects</span>
            <span className="tag tag-blue">🔍 Results read from the database</span>
            <span className="tag tag-blue">💾 Values to be written to the database</span>
          </div>
        </div>

        <div className="concept-card">
          <h4>Naming Variables — camelCase Convention</h4>
          <table className="comparison-table" style={{ marginTop: 12 }}>
            <thead><tr><th>Rule</th><th>Good Example</th><th>Bad Example</th></tr></thead>
            <tbody>
              <tr><td>Describes the purpose</td><td><code>varNumOfPizzas</code></td><td><code>var1</code></td></tr>
              <tr><td>Full meaningful words</td><td><code>varAccountRecord</code></td><td><code>varAcct</code></td></tr>
              <tr><td>Letters and numbers only</td><td><code>varTableNum</code></td><td><code>var_table#</code></td></tr>
              <tr><td>camelCase format</td><td><code>varOppRec</code></td><td><code>var opp rec</code></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── TOPIC 2 — Data Types ── */}
      <section className="topic-section" id="data-types">
        <h2>Topic 2: Data Types</h2>

        <div className="definition-box" style={{ borderLeftColor: COLOR }}>
          <div className="definition-box-icon">📖</div>
          <div>
            <div className="definition-label">Definition</div>
            <div className="definition-text">
              <strong>Data types</strong> categorize data so it can be classified, compared, and validated. Every variable has exactly one data type.
            </div>
          </div>
        </div>

        <div className="concept-card">
          <h4>The 7 Data Types — With Pizza Examples</h4>
          <table className="comparison-table" style={{ marginTop: 12 }}>
            <thead><tr><th>Data Type</th><th>What It Stores</th><th>Example Value</th><th>🍕 Pizza Analogy</th></tr></thead>
            <tbody>
              {[
                ['Text', 'tag-blue', 'Letters, words, sentences', '"The pizza is good."', 'Pizza type name ("Margherita")'],
                ['Number', 'tag-orange', 'Integers and decimals', '5, 302.12', 'Number of pizza slices'],
                ['Boolean', 'tag-purple', 'TRUE or FALSE only', 'TRUE', 'Is the pizza ready? (Yes/No)'],
                ['Date', 'tag-teal', 'Calendar date, no time', '10/13/2022', 'Date the restaurant opened'],
                ['Date/Time', 'tag-teal', 'Date + specific time', '10/13/2022, 10:04 AM', 'Exact time an order was received'],
                ['Record', 'tag-green', 'All fields of ONE Salesforce record', 'Acme Inc, 1 Main St...', 'A person at the table (name + order)'],
                ['Collection', 'tag-purple', 'A list of multiple values', 'Account1, Account2, Account3', 'All the people in the restaurant'],
              ].map(([type, tagClass, desc, example, analogy]) => (
                <tr key={type}>
                  <td><span className={`tag ${tagClass}`}>{type}</span></td>
                  <td>{desc}</td>
                  <td><code>{example}</code></td>
                  <td>{analogy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="tip-box">
          <span className="tip-box-icon">⚠️</span>
          <span><span className="tip-label">Common Mistake</span>Students confuse Date and Date/Time. Rule: if there's a clock involved (login time, order time) → Date/Time. If it's just a calendar day (birthday, close date) → Date.</span>
        </div>

        <div className="note-box">
          <span className="note-box-icon">ℹ️</span>
          <span><strong>Salesforce Record IDs</strong> like "0011E00001pDIbHQAS" are <strong>Text</strong> — they contain letters and numbers but are not numeric values you'd calculate with.</span>
        </div>
      </section>

      {/* ── TOPIC 3 — Record & Collection ── */}
      <section className="topic-section" id="record-collection">
        <h2>Topic 3: Record &amp; Collection Variables</h2>

        <div className="two-col">
          <div>
            <div className="definition-box" style={{ borderLeftColor: '#0F766E' }}>
              <div className="definition-box-icon">📖</div>
              <div>
                <div className="definition-label">Record Variable</div>
                <div className="definition-text">Stores ALL field values for a single Salesforce record. Access fields with dot notation: <code>{'{!varOppRec.Name}'}</code></div>
              </div>
            </div>
            <div className="analogy-block" style={{ marginBottom: 0 }}>
              <div className="analogy-icon">🧳</div>
              <div>
                <div className="analogy-label">Suitcase Analogy</div>
                <div className="analogy-text">A record variable is a <strong>suitcase</strong>. Pack it once with all the Account's fields, carry it through your flow. Need the Name? Open the suitcase: <code>{'{!varAcctRec.Name}'}</code></div>
              </div>
            </div>
          </div>
          <div>
            <div className="definition-box" style={{ borderLeftColor: '#7C3AED' }}>
              <div className="definition-box-icon">📖</div>
              <div>
                <div className="definition-label">Collection Variable</div>
                <div className="definition-text">A list of multiple values — like a list of Record Variables. Used when reading or writing many records at once.</div>
              </div>
            </div>
            <div className="analogy-block" style={{ marginBottom: 0 }}>
              <div className="analogy-icon">✈️</div>
              <div>
                <div className="analogy-label">Airplane Analogy</div>
                <div className="analogy-text">A collection is an <strong>airplane</strong> loading and unloading <strong>suitcases</strong>. Get Records loads them on. A Loop unloads them one at a time to process each.</div>
              </div>
            </div>
          </div>
        </div>

        <div className="concept-card">
          <h4>Why Use Record Variables Instead of Individual Variables?</h4>
          <div className="before-after">
            <div className="before-col">
              <div className="before-label">❌ Without Record Variable</div>
              <h4>One variable per field</h4>
              <ul style={{ fontSize: '.88rem' }}>
                <li>varAccountName</li>
                <li>varAccountPhone</li>
                <li>varAccountIndustry</li>
                <li>varAccountBillingCity</li>
                <li style={{ color: '#DC2626' }}>...20+ variables for one object</li>
              </ul>
            </div>
            <div className="after-col">
              <div className="after-label">✅ With Record Variable</div>
              <h4>One variable = entire record</h4>
              <ul style={{ fontSize: '.88rem' }}>
                <li><code>varAcctRec</code> (one variable)</li>
                <li>Name: <code>{'{!varAcctRec.Name}'}</code></li>
                <li>Phone: <code>{'{!varAcctRec.Phone}'}</code></li>
                <li>Any field via dot notation</li>
                <li style={{ color: '#059669' }}>Much cleaner, much faster to build</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── TOPIC 4 — Algorithms ── */}
      <section className="topic-section" id="algorithms">
        <h2>Topic 4: Algorithms</h2>

        <div className="definition-box" style={{ borderLeftColor: COLOR }}>
          <div className="definition-box-icon">📖</div>
          <div>
            <div className="definition-label">Definition</div>
            <div className="definition-text">An <strong>algorithm</strong> is a set of instructions for solving a problem or accomplishing a task.</div>
          </div>
        </div>

        <div className="two-col">
          <div className="analogy-block" style={{ marginBottom: 0 }}>
            <div className="analogy-icon">🍲</div>
            <div>
              <div className="analogy-label">Recipe Analogy</div>
              <div className="analogy-text">A cooking recipe is an algorithm — step-by-step instructions that always produce the same result when followed correctly. A Salesforce algorithm could be the steps for onboarding a new user.</div>
            </div>
          </div>
          <div className="analogy-block" style={{ marginBottom: 0 }}>
            <div className="analogy-icon">👕</div>
            <div>
              <div className="analogy-label">Laundry Analogy</div>
              <div className="analogy-text">You don't just "do laundry" — you follow steps: <strong>Sort → Wash → Dry → Fold → Put away.</strong> Skipping or reordering steps produces bad results. Flows work the same way.</div>
            </div>
          </div>
        </div>

        <div className="join-me-box" style={{ marginTop: 20 }}>
          <div className="join-me-label">Exercise</div>
          <h4>Write your company's algorithm for creating a new Salesforce user</h4>
          <p>Have students list every step they follow when onboarding a new user. This is their first algorithm. Then ask: "Could a Flow automate this?" — almost always yes.</p>
        </div>
      </section>

      {/* ── TOPIC 5 — Control Structures ── */}
      <section className="topic-section" id="control-structures">
        <h2>Topic 5: Control Structures</h2>

        <div className="definition-box" style={{ borderLeftColor: COLOR }}>
          <div className="definition-box-icon">📖</div>
          <div>
            <div className="definition-label">Definition</div>
            <div className="definition-text"><strong>Control structures</strong> determine which lines of a program run and how many times. Programs aren't limited to a straight line — they can branch, loop, and skip sections.</div>
          </div>
        </div>

        <div className="three-col">
          {[
            { color: '#0369A1', type: 'Type 1', icon: '📋', title: 'Sequence', desc: 'Steps run in order, one after another.', example: 'Step 1: Hungry → Step 2: Start car → Step 3: Drive → Step 4: Eat pizza → Step 5: Pay', flow: 'All elements run in order on canvas' },
            { color: '#D97706', type: 'Type 2', icon: '🔀', title: 'Conditions', desc: 'The flow decides which path to take based on data.', example: 'IF Stage = "Closed Won" → Show Closed Reason field. ELSE → Hide Closed Reason field.', flow: 'Decision element' },
            { color: '#7C3AED', type: 'Type 3', icon: '🔁', title: 'Loops', desc: 'Repeat a section of code for each item in a collection.', example: 'FOR EACH Account in varAcctRecs: Update Industry field. END LOOP.', flow: 'Loop element' },
          ].map(s => (
            <div key={s.type} className="var-card" style={{ borderTop: `4px solid ${s.color}` }}>
              <div className="var-card-type" style={{ color: s.color }}>{s.type}</div>
              <h4>{s.icon} {s.title}</h4>
              <p style={{ fontSize: '.88rem' }}>{s.desc}</p>
              <div style={{ marginTop: 10, fontSize: '.8rem', color: '#64748B', borderLeft: `2px solid ${s.color}30`, paddingLeft: 10, fontStyle: 'italic' }}>{s.example}</div>
              <div style={{ marginTop: 10, fontSize: '.78rem', fontWeight: 700, color: s.color }}>Flow: {s.flow}</div>
            </div>
          ))}
        </div>

        <div className="tip-box">
          <span className="tip-box-icon">⚠️</span>
          <span><span className="tip-label">Critical</span>Never put Create/Update/Delete Records <em>inside</em> a loop. This fires one DML per iteration and hits governor limits fast. Collect records in a Collection inside the loop, then do ONE bulk DML outside the loop.</span>
        </div>
      </section>

      {/* ── TOPIC 6 — Best Practices ── */}
      <section className="topic-section" id="best-practices">
        <h2>Topic 6: Best Practices</h2>

        <div className="join-me-box">
          <div className="join-me-label">Whiteboard First</div>
          <h4>Always plan on paper before opening Flow Builder</h4>
          <p>Before touching the org, figure out: Variables needed · Inputs · Outputs · DML operations · Algorithm steps · Edge cases. Students who skip this rebuild flows from scratch.</p>
        </div>

        <table className="comparison-table">
          <thead><tr><th>Best Practice</th><th>Why It Matters</th></tr></thead>
          <tbody>
            {[
              ['Use camelCase variable names with descriptive words', 'You or a colleague needs to read this flow 6 months from now'],
              ['Always add Fault paths to data elements', 'Default fault message is useless — "An unhandled fault has occurred" helps no one'],
              ['Use entry criteria on Record-Triggered Flows', 'Reduce unnecessary executions → conserve governor limits'],
              ['Multiple small focused flows per object, not one giant flow', 'Easier testing, maintenance, debugging, and better performance'],
              ['Bulk DML outside loops', 'Avoid hitting the 150 DML operations governor limit'],
            ].map(([practice, why]) => (
              <tr key={practice}><td>{practice}</td><td>{why}</td></tr>
            ))}
          </tbody>
        </table>
      </section>

      <Quiz questions={quizData.l1} title="Lesson 1 Knowledge Check — Variables & Data Types" />

      <div className="page-nav">
        <Link to="/lesson/0" className="page-nav-btn">← Lesson 0: Course Overview</Link>
        <Link to="/lesson/2" className="page-nav-btn primary">Lesson 2: Screen Flows →</Link>
      </div>
    </>
  );
}
