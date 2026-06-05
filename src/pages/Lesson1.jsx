import { Link } from 'react-router-dom';
import Quiz from '../components/Quiz';
import { quizData } from '../data/curriculum';
import { ExamTrap, DeepDive, MistakeCard, StepList, BulkifyDiagram } from '../components/LessonComponents';

const COLOR = '#7C3AED';
const COLOR_BG = 'rgba(124,58,237,.12)';

export default function Lesson1() {
  return (
    <>
      <div className="breadcrumb">
        <Link to="/">Home</Link>
        <span className="breadcrumb-sep">/</span>
        <span>Lesson 1</span>
      </div>

      <div className="lesson-header fade-up">
        <div className="lesson-badge" style={{ background: COLOR_BG, color: COLOR, border: `1px solid ${COLOR}40` }}>
          Lesson 1
        </div>
        <h1>Think Like a Developer</h1>
        <p>Variables, data types, algorithms, and control structures — the programming fundamentals that explain why Flow Builder works the way it does. Understanding the "why" prevents 80% of the mistakes beginners make.</p>
      </div>

      {/* ── FRAMING ── */}
      <section className="topic-section fade-up fade-up-1" id="framing">
        <div className="analogy-block">
          <div className="analogy-icon" style={{ background: 'rgba(124,58,237,.12)', color: COLOR }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
          </div>
          <div>
            <div className="analogy-label">The Pizza Restaurant — Our Through-Line</div>
            <div className="analogy-text">
              Every concept in Lesson 1 maps back to a pizza restaurant. The restaurant has <strong>tables</strong> (records), <strong>orders</strong> (data), a <strong>kitchen</strong> (logic engine), and <strong>staff</strong> who follow processes (flows). When a concept feels abstract, zoom out to the restaurant — it becomes concrete.
            </div>
          </div>
        </div>
      </section>

      {/* ── TOPIC 1 — Variables ── */}
      <section className="topic-section fade-up fade-up-2" id="variables">
        <h2>Topic 1: Variables</h2>

        <div className="definition-box" style={{ borderLeftColor: COLOR }}>
          <div className="definition-box-icon">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
          </div>
          <div>
            <div className="definition-label">Definition</div>
            <div className="definition-text">
              A <strong>variable</strong> is a named container that holds a value your flow can read, change, and use later. In Flow Builder, you declare variables in the <strong>Toolbox</strong> (left panel → New Resource). You put values into variables using the <strong>Assignment</strong> element.
            </div>
          </div>
        </div>

        <div className="two-col" style={{ marginBottom: 24 }}>
          <div className="analogy-block" style={{ marginBottom: 0 }}>
            <div className="analogy-icon" style={{ background: 'rgba(124,58,237,.12)', color: COLOR }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
            </div>
            <div>
              <div className="analogy-label">Restaurant Analogy</div>
              <div className="analogy-text">
                In algebra: <code>x = 10</code>.<br />
                In your restaurant: <code>varNumOfPizzas = 10</code>.<br />
                The container <em>varNumOfPizzas</em> holds 10 right now. That value can change — a new order comes in and it becomes 11. The container keeps existing even when empty, like a reserved table waiting for guests.
              </div>
            </div>
          </div>
          <div className="concept-card" style={{ marginBottom: 0 }}>
            <h4>What Do Variables Actually Store?</h4>
            <p style={{ margin: '8px 0 12px', fontSize: '.88rem' }}>Every flow has four categories of data it needs to manage:</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {[
                { color: '#0176D3', label: 'User Input', desc: 'What the user typed into a Screen element' },
                { color: '#0F766E', label: 'Salesforce Record Data', desc: 'Fields pulled from Get Records' },
                { color: '#7C3AED', label: 'Calculated Values', desc: 'Results from formulas or decision logic' },
                { color: '#D97706', label: 'Data to Write Back', desc: 'Staged values before Create/Update Records' },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: item.color, marginTop: 6, flexShrink: 0 }} />
                  <div>
                    <span style={{ fontWeight: 600, fontSize: '.85rem' }}>{item.label}</span>
                    <span style={{ fontSize: '.83rem', color: 'var(--fg-3)', marginLeft: 6 }}>{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="concept-card">
          <h4>Naming Variables — camelCase Convention (This Is Graded)</h4>
          <p style={{ fontSize: '.88rem', marginBottom: 16 }}>Naming variables well is not optional. In a team org, six other admins and developers will read your flow. Cryptic names waste hours during debugging.</p>
          <table className="comparison-table">
            <thead><tr><th>Rule</th><th>Good Example</th><th>Bad Example</th><th>Why Bad?</th></tr></thead>
            <tbody>
              <tr>
                <td>Describes the purpose</td>
                <td><code>varNumOfPizzas</code></td>
                <td><code>var1</code></td>
                <td>What does var1 mean in 6 months?</td>
              </tr>
              <tr>
                <td>Full meaningful words</td>
                <td><code>varAccountRecord</code></td>
                <td><code>varAcct</code></td>
                <td>Abbreviations break search</td>
              </tr>
              <tr>
                <td>Letters and numbers only</td>
                <td><code>varTableNum</code></td>
                <td><code>var_table#</code></td>
                <td>Special chars cause syntax errors</td>
              </tr>
              <tr>
                <td>camelCase format</td>
                <td><code>varOppRecord</code></td>
                <td><code>var opp rec</code></td>
                <td>Spaces break the variable reference</td>
              </tr>
              <tr>
                <td>Prefix indicates type</td>
                <td><code>varAccountRecord</code> <code>colAccountRecs</code></td>
                <td><code>accountRecord</code></td>
                <td>Prefix makes type instantly visible</td>
              </tr>
            </tbody>
          </table>
          <div className="note-box" style={{ marginTop: 0, marginBottom: 0 }}>
            <span className="note-box-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
            </span>
            <span>Conventions used in Salesforce documentation: <code>var</code> prefix for single-value variables, <code>col</code> for collections, <code>rec</code> for record type variables. Use consistently throughout your org.</span>
          </div>
        </div>

        <ExamTrap title="Variable scope">
          <p>Variables in a flow are <strong>local to that flow interview</strong>. If a flow calls a subflow, variables don't automatically pass between them — you must explicitly map inputs and outputs in the Subflow element. Students often expect variables to "just work" across flows. They don't.</p>
        </ExamTrap>
      </section>

      {/* ── TOPIC 2 — Data Types ── */}
      <section className="topic-section" id="data-types">
        <h2>Topic 2: Data Types</h2>

        <div className="definition-box" style={{ borderLeftColor: COLOR }}>
          <div className="definition-box-icon">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"/><path d="M7 7h.01"/></svg>
          </div>
          <div>
            <div className="definition-label">Definition</div>
            <div className="definition-text">
              <strong>Data types</strong> tell Salesforce what kind of value a variable holds — so it knows how to store it, compare it, and validate it. Mismatched data types are the #1 source of "this formula doesn't work" errors. Every variable has exactly one data type, set at creation.
            </div>
          </div>
        </div>

        <div className="concept-card">
          <h4>The 7 Data Types — With Restaurant Context</h4>
          <p style={{ fontSize: '.88rem', marginBottom: 16 }}>Think of data types as the shape of a container. You can't pour a cup of soup into an envelope — the container shape must match what you're storing.</p>
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Data Type</th>
                <th>What It Stores</th>
                <th>Example Value</th>
                <th>Restaurant Analogy</th>
                <th>Key Gotcha</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Text', 'tag-blue', 'Any combination of letters, numbers, symbols', '"Margherita Pizza"', 'The pizza name on the menu', 'Record IDs like "001..." are Text — never Number'],
                ['Number', 'tag-orange', 'Integers and decimal numbers', '5, 302.12', 'Slices sold today', 'Can add/subtract/multiply — cannot do math on Text'],
                ['Boolean', 'tag-purple', 'TRUE or FALSE only — binary', 'true', 'Is the kitchen open? (Yes/No)', 'Default is NULL, not FALSE — check for nulls'],
                ['Date', 'tag-teal', 'Calendar day — no clock time', '10/13/2022', 'Date restaurant opened', 'No time component — use Date/Time for timestamps'],
                ['Date/Time', 'tag-teal', 'Date + specific time in UTC', '10/13/2022 10:04 AM', 'Exact time order was placed', 'Stored in UTC — display converts to user timezone'],
                ['Record (sObject)', 'tag-green', 'All fields of a single Salesforce record', 'varAcctRec.Name, .Phone...', "A person's full table order", 'Null when Get Records finds nothing — always check!'],
                ['Collection', 'tag-purple', 'A list of multiple values (same type)', 'varAcctRecs[0], [1], [2]...', 'All orders from tonight', 'Loop element processes collections one item at a time'],
              ].map(([type, tagClass, desc, example, analogy, gotcha]) => (
                <tr key={type}>
                  <td><span className={`tag ${tagClass}`}>{type}</span></td>
                  <td style={{ fontSize: '.82rem' }}>{desc}</td>
                  <td><code style={{ fontSize: '.76rem' }}>{example}</code></td>
                  <td style={{ fontSize: '.8rem', color: 'var(--fg-3)' }}>{analogy}</td>
                  <td style={{ fontSize: '.76rem', color: '#D97706' }}>{gotcha}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <MistakeCard>
          <p><strong>The silent null failure</strong> — the most common bug in Flow:</p>
          <p style={{ margin: '8px 0' }}>You run a <strong>Get Records</strong> element. If no records match your filter, the Record variable is <strong>null</strong> — it holds nothing. Every subsequent element that tries to access a field on that null variable silently fails or throws a cryptic fault.</p>
          <p style={{ margin: 0 }}>The fix: <strong>always put a Decision element immediately after Get Records</strong> to check if the result is null. Branch to a Fault path or error screen if it is. Skip this and you'll spend hours debugging intermittent errors on records that don't match your criteria.</p>
        </MistakeCard>

        <div className="tip-box">
          <span className="tip-box-icon">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          </span>
          <span><span className="tip-label">Date vs Date/Time</span>Rule: if there's a clock involved (login time, order time, last modified) → <strong>Date/Time</strong>. If it's just a calendar day (birthday, close date, contract date) → <strong>Date</strong>. Mixing these in formulas causes "data type mismatch" errors.</span>
        </div>

        <DeepDive title="Why Record IDs are Text, Not Number">
          <p>Salesforce Record IDs look like <code>0011E00001pDIbHQAS</code>. Students assume they should be Number type because they're used as identifiers. They're <strong>Text</strong> because:</p>
          <ul>
            <li>They contain letters (0-9 and A-Z, base-62 encoded)</li>
            <li>You never do arithmetic on them (adding two IDs makes no sense)</li>
            <li>They must preserve leading zeros and exact format</li>
            <li>Salesforce IDs come in 15-character (case-sensitive) and 18-character (case-insensitive) variants</li>
          </ul>
          <p style={{ margin: '8px 0 0' }}>In flows, always use <code>CASESAFEID()</code> formula when constructing URLs from IDs to convert to the safe 18-char format.</p>
        </DeepDive>
      </section>

      {/* ── TOPIC 3 — Record & Collection Variables ── */}
      <section className="topic-section" id="record-collection">
        <h2>Topic 3: Record &amp; Collection Variables</h2>

        <div className="two-col">
          <div>
            <div className="definition-box" style={{ borderLeftColor: '#0F766E' }}>
              <div className="definition-box-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
              </div>
              <div>
                <div className="definition-label">Record Variable (sObject)</div>
                <div className="definition-text">Holds <strong>all field values for a single record</strong> of a specific object type. Access any field: <code>{'{!varAcctRec.Name}'}</code>, <code>{'{!varAcctRec.Phone}'}</code></div>
              </div>
            </div>
            <div className="analogy-block" style={{ marginBottom: 0 }}>
              <div className="analogy-icon" style={{ background: 'rgba(15,118,110,.12)', color: '#5EEAD4', fontSize: '1.1rem' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.06 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 6 6l.82-.82a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div>
                <div className="analogy-label">Suitcase Analogy</div>
                <div className="analogy-text">Pack the whole Account into one suitcase (<code>varAcctRec</code>). Carry it through your flow. Need the Name? Open the suitcase: <code>{'{!varAcctRec.Name}'}</code>. No need for 20 separate bags.</div>
              </div>
            </div>
          </div>
          <div>
            <div className="definition-box" style={{ borderLeftColor: COLOR }}>
              <div className="definition-box-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M10 4v4"/><path d="M2 8h20"/><path d="M6 4v4"/></svg>
              </div>
              <div>
                <div className="definition-label">Collection Variable</div>
                <div className="definition-text">A list of multiple values — all the same type. <code>Get Records</code> returns a Collection. A <code>Loop</code> processes them one at a time. Use <code>Add to Collection</code> assignment operator to build collections inside loops.</div>
              </div>
            </div>
            <div className="analogy-block" style={{ marginBottom: 0 }}>
              <div className="analogy-icon" style={{ background: 'rgba(124,58,237,.12)', color: COLOR, fontSize: '1.1rem' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>
              </div>
              <div>
                <div className="analogy-label">Airplane Analogy</div>
                <div className="analogy-text">A collection is an <strong>airplane</strong> full of suitcases. <code>Get Records</code> loads 500 Accounts onto the plane. A <code>Loop</code> lands the plane and processes each suitcase one at a time on the ground.</div>
              </div>
            </div>
          </div>
        </div>

        <div className="concept-card" style={{ marginTop: 20 }}>
          <h4>Record Variable: One Variable Replaces 20+</h4>
          <div className="before-after">
            <div className="before-col">
              <div className="before-label">Without Record Variable</div>
              <p style={{ fontSize: '.84rem', marginBottom: 8 }}>One variable per field you care about:</p>
              <code style={{ display: 'block', marginBottom: 4 }}>varAccountName (Text)</code>
              <code style={{ display: 'block', marginBottom: 4 }}>varAccountPhone (Text)</code>
              <code style={{ display: 'block', marginBottom: 4 }}>varAccountIndustry (Text)</code>
              <code style={{ display: 'block', marginBottom: 4 }}>varAccountBillingCity (Text)</code>
              <code style={{ display: 'block', marginBottom: 4 }}>varAccountType (Text)</code>
              <p style={{ color: 'var(--red)', fontSize: '.82rem', marginTop: 10, marginBottom: 0 }}>20+ variables just for one Account</p>
            </div>
            <div className="after-col">
              <div className="after-label">With Record Variable</div>
              <p style={{ fontSize: '.84rem', marginBottom: 8 }}>One variable, all fields included:</p>
              <code style={{ display: 'block', marginBottom: 12 }}>varAcctRec (Account)</code>
              <div style={{ fontSize: '.84rem', color: 'var(--fg-2)' }}>Access any field dynamically:</div>
              <code style={{ display: 'block', marginBottom: 4 }}>{'{!varAcctRec.Name}'}</code>
              <code style={{ display: 'block', marginBottom: 4 }}>{'{!varAcctRec.Phone}'}</code>
              <code style={{ display: 'block', marginBottom: 4 }}>{'{!varAcctRec.BillingCity}'}</code>
              <p style={{ color: 'var(--green)', fontSize: '.82rem', marginTop: 10, marginBottom: 0 }}>One variable, 200+ fields available via dot notation</p>
            </div>
          </div>
        </div>

        <ExamTrap title="Collection variables vs. Record variables on the exam">
          <p>The exam often asks: "You need to query 50 Accounts and process each one. What variable type do you use?" The answer is a <strong>Collection Variable</strong> (type: Account).</p>
          <p style={{ marginTop: 6 }}>Trap: Students choose "Record Variable" because they're dealing with Account records. Wrong — a Record variable holds exactly one record. A Collection variable holds many. <strong>Get Records populates a Collection. Loop reads a Collection one item at a time.</strong></p>
        </ExamTrap>
      </section>

      {/* ── TOPIC 4 — Algorithms ── */}
      <section className="topic-section" id="algorithms">
        <h2>Topic 4: Algorithms</h2>

        <div className="definition-box" style={{ borderLeftColor: COLOR }}>
          <div className="definition-box-icon">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
          </div>
          <div>
            <div className="definition-label">Definition</div>
            <div className="definition-text">
              An <strong>algorithm</strong> is a finite, ordered set of instructions for solving a problem or accomplishing a task — always produces the same result when given the same inputs. Every flow you build is an algorithm. The quality of the algorithm determines the reliability of the flow.
            </div>
          </div>
        </div>

        <div className="two-col">
          <div className="analogy-block" style={{ marginBottom: 0 }}>
            <div className="analogy-icon" style={{ background: 'rgba(217,119,6,.12)', color: '#FCD34D' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 11l19-9-9 19-2-8-8-2z"/></svg>
            </div>
            <div>
              <div className="analogy-label">Recipe Analogy</div>
              <div className="analogy-text">A cooking recipe is an algorithm — specific steps, specific order, always produces the same dish. "Add garlic" is useless. "Add 2 cloves minced garlic after oil reaches 180°F" is an algorithm. Flow elements must be equally precise.</div>
            </div>
          </div>
          <div className="analogy-block" style={{ marginBottom: 0 }}>
            <div className="analogy-icon" style={{ background: 'rgba(1,118,211,.12)', color: '#7DD3FC' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m7 11 2-2-2-2"/><path d="M11 13h4"/><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/></svg>
            </div>
            <div>
              <div className="analogy-label">The Laundry Algorithm</div>
              <div className="analogy-text">Sort → Wash → Dry → Fold → Put away. Skipping "fold" or putting "dry" before "wash" breaks the algorithm. <strong>Order matters.</strong> This is why flow canvas order matters and why you should whiteboard the algorithm before building.</div>
            </div>
          </div>
        </div>

        <div className="concept-card" style={{ marginTop: 20 }}>
          <h4>The 4-Step Flow Algorithm Framework</h4>
          <p style={{ fontSize: '.88rem', marginBottom: 16 }}>Before opening Flow Builder, answer these four questions in order. Skip any and you'll rebuild the flow from scratch later.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { step: '01', color: '#0176D3', label: 'Inputs', q: 'What data does this flow need to start? (user inputs, record fields, constants)' },
              { step: '02', color: '#7C3AED', label: 'Processing', q: 'What logic, decisions, or loops does the flow need to apply to the data?' },
              { step: '03', color: '#0F766E', label: 'DML / Actions', q: 'What does the flow write to the database or send as actions? (Create, Update, Delete, Email)' },
              { step: '04', color: '#D97706', label: 'Edge Cases', q: 'What happens if Get Records returns nothing? What if the user goes backward? What if the DML fails?' },
            ].map(item => (
              <div key={item.step} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <div style={{ background: item.color, color: 'white', borderRadius: 8, padding: '4px 10px', fontFamily: 'var(--font-mono)', fontSize: '.72rem', fontWeight: 700, flexShrink: 0 }}>{item.step}</div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '.88rem', color: item.color, marginBottom: 3 }}>{item.label}</div>
                  <div style={{ fontSize: '.84rem', color: 'var(--fg-2)' }}>{item.q}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="join-me-box">
          <div className="join-me-label">Exercise</div>
          <h4>Write the algorithm for creating a new Salesforce user at your company</h4>
          <p>Before building any flow: list every single step your company takes when onboarding a new user. Profile assignment, permission sets, group memberships, introductory email, manager notification. This list IS your algorithm. Turns out it's 12 steps — not 3. That's why you plan before you build.</p>
        </div>
      </section>

      {/* ── TOPIC 5 — Control Structures ── */}
      <section className="topic-section" id="control-structures">
        <h2>Topic 5: Control Structures</h2>

        <div className="definition-box" style={{ borderLeftColor: COLOR }}>
          <div className="definition-box-icon">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </div>
          <div>
            <div className="definition-label">Definition</div>
            <div className="definition-text">
              <strong>Control structures</strong> determine which instructions run and how many times. Without them, every flow would be a straight line from start to finish — same behavior for every record, every user, every scenario. The three types map directly to specific Flow elements.
            </div>
          </div>
        </div>

        <div className="three-col">
          {[
            {
              color: '#0369A1',
              type: 'Type 1',
              icon: (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>
              ),
              title: 'Sequence',
              desc: 'Steps run in order, top-to-bottom on the canvas. Every flow has at least this structure.',
              example: 'Start → Get Records → Assignment → Create Records → End',
              flowEl: 'All elements execute in canvas order',
              techNote: 'Execution is deterministic — same inputs always produce same outputs',
            },
            {
              color: '#D97706',
              type: 'Type 2',
              icon: (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 3H1l8 9.46V19l4 2v-7.54L21 3h-5z"/></svg>
              ),
              title: 'Conditions (IF/ELSE)',
              desc: 'The flow evaluates a condition and takes a different path based on the result. One of many paths runs — the others skip.',
              example: 'IF Stage = "Closed Won" → Show Closed Reason field ELSE → Hide field',
              flowEl: 'Decision element (evaluates outcomes top-to-bottom)',
              techNote: 'Outcomes evaluated in order — put most likely outcomes at top for performance',
            },
            {
              color: COLOR,
              type: 'Type 3',
              icon: (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M3 21v-5h5"/></svg>
              ),
              title: 'Loops (FOR EACH)',
              desc: 'Repeat a block of logic for each item in a collection. The loop body runs once per record — 500 records = 500 executions of the inner logic.',
              example: 'FOR EACH Contact in colContacts: set VIP_Flag__c to true. END LOOP.',
              flowEl: 'Loop element (iterates over Collection variables)',
              techNote: 'Never put DML inside a loop — see the bulkification pattern below',
            },
          ].map(s => (
            <div key={s.type} className="var-card" style={{ borderTop: `4px solid ${s.color}` }}>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 8 }}>
                <div style={{ width: 24, height: 24, background: s.color + '18', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', color: s.color }}>
                  {s.icon}
                </div>
                <div className="var-card-type" style={{ color: s.color, margin: 0 }}>{s.type}</div>
              </div>
              <h4 style={{ marginBottom: 8 }}>{s.title}</h4>
              <p style={{ fontSize: '.85rem', marginBottom: 10 }}>{s.desc}</p>
              <div style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.08)', borderRadius: 8, padding: '10px 12px', fontSize: '.8rem', color: 'var(--fg-3)', fontStyle: 'italic', marginBottom: 10 }}>
                {s.example}
              </div>
              <div style={{ fontSize: '.76rem', fontWeight: 700, color: s.color, marginBottom: 6 }}>Flow: {s.flowEl}</div>
              <div style={{ fontSize: '.74rem', color: 'var(--fg-3)', fontStyle: 'italic' }}>{s.techNote}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TOPIC 6 — Bulkification ── */}
      <section className="topic-section" id="bulkification">
        <h2>Topic 6: Bulkification — The #1 Performance Rule</h2>

        <div className="definition-box" style={{ borderLeftColor: '#DC2626' }}>
          <div className="definition-box-icon" style={{ color: '#DC2626' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
          </div>
          <div>
            <div className="definition-label">Governor Limit Context</div>
            <div className="definition-text">
              Salesforce enforces <strong>per-transaction governor limits</strong> to protect shared infrastructure. The critical one: <strong>150 DML statements per transaction</strong>. DML = any Create/Update/Delete Records element execution. A flow triggered by a batch of 200 records could blow past 150 if you put DML inside a loop.
            </div>
          </div>
        </div>

        <BulkifyDiagram />

        <DeepDive title="Why does the limit exist?">
          <p>Salesforce is a multi-tenant platform — thousands of orgs share the same servers. Without governor limits, one poorly written flow could monopolize database I/O and degrade performance for every other org on the same pod. The 150 DML limit forces developers to write efficient, bulk-aware code. This isn't a Salesforce bug — it's a fundamental architectural requirement.</p>
          <p style={{ marginTop: 8 }}>The same limit applies in Apex, REST, and Flow. Understanding it deeply is what separates senior admins from beginners. When Record-Triggered Flows run, they process records in batches — sometimes 200 at a time. Each loop iteration counts as a separate DML if you put Create Records inside the loop.</p>
        </DeepDive>

        <ExamTrap title="DML inside a loop = System.LimitException">
          <p>The exam scenario: "You built a flow that loops over 200 Contacts and creates a Task for each one inside the loop. What happens?" <strong>Answer: the flow throws System.LimitException on record 151 and rolls back the entire transaction.</strong> Records 1–150 do NOT save because Salesforce rolls back on limit failure.</p>
          <p style={{ marginTop: 6 }}>Correct pattern: <code>Assignment (Add to Collection)</code> inside loop → <code>Create Records</code> outside loop, passing the full collection. This is <strong>one DML statement</strong> for all records.</p>
        </ExamTrap>
      </section>

      {/* ── TOPIC 7 — Best Practices ── */}
      <section className="topic-section" id="best-practices">
        <h2>Topic 7: Best Practices — Before You Build Anything</h2>

        <div className="join-me-box">
          <div className="join-me-label">The Golden Rule</div>
          <h4>Whiteboard before opening Flow Builder — every single time</h4>
          <p>The fastest way to build a flow is to plan it completely on paper first. Draw the algorithm, list your variables, map your DML operations, and identify edge cases. Skipping this step doesn't save time — it guarantees a rebuild.</p>
        </div>

        <table className="comparison-table">
          <thead>
            <tr>
              <th>Best Practice</th>
              <th>What Breaks Without It</th>
              <th>How To Apply</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['camelCase variable names with full words', 'Flow becomes unreadable in 6 months — other admins can\'t maintain it', 'varOpportunityRecord, not varOpp or v1'],
              ['Add Fault paths to every data element', 'Unhandled faults show "An unhandled fault has occurred" — no one knows what failed', 'Hover element → 3 dots → Add Fault Path → display {!$Flow.FaultMessage}'],
              ['Entry criteria on Record-Triggered Flows', 'Flow runs on every save — burns governor limits for records that don\'t need it', 'Condition: only run when StageName changes or specific field has value'],
              ['Multiple small focused flows per object', 'One giant flow becomes impossible to test, debug, and maintain', 'FLOW 1: Validate. FLOW 2: Update External Link. FLOW 3: Share Record.'],
              ['Bulk DML outside loops', 'Hits 150 DML limit — entire transaction rolls back', 'Build Collection inside loop → Create/Update Records once outside loop'],
              ['Decision after every Get Records', 'Null Record variable causes silent failures downstream', 'Check: "Did Get Records find anything?" → branch on null result'],
            ].map(([practice, breaks, how]) => (
              <tr key={practice}>
                <td style={{ fontWeight: 600, fontSize: '.85rem' }}>{practice}</td>
                <td style={{ fontSize: '.82rem', color: '#DC2626' }}>{breaks}</td>
                <td style={{ fontSize: '.82rem', color: 'var(--fg-3)' }}>{how}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <Quiz questions={quizData.l1} title="Lesson 1 Knowledge Check — Variables &amp; Data Types" />

      <div className="page-nav">
        <Link to="/lesson/0" className="page-nav-btn">← Lesson 0: Course Overview</Link>
        <Link to="/lesson/2" className="page-nav-btn primary">Lesson 2: Screen Flows →</Link>
      </div>
    </>
  );
}
