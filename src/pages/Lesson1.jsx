import { Link } from 'react-router-dom';
import Quiz from '../components/Quiz';
import { quizData } from '../data/curriculum';

export default function Lesson1() {
  return (
    <>
      <div className="breadcrumb">
        <Link to="/">Home</Link>
        <span className="breadcrumb-sep">/</span>
        <span>Lesson 1</span>
      </div>

      <div className="lesson-header fade-up">
        <div className="lesson-badge" style={{ background: '#F5F3FF', color: '#7B5EA7' }}>
          🧠 Lesson 1
        </div>
        <h1>Think Like a Developer for Admins</h1>
        <p>Variables, data types, algorithms, and control structures — the building blocks all flows are made of.</p>
      </div>

      <div className="analogy-block fade-up fade-up-1">
        <div className="analogy-icon">🍕</div>
        <div>
          <div className="analogy-label">The Story of This Lesson — Pizza Restaurant</div>
          <div className="analogy-text">
            Throughout Lesson 1, we use a pizza restaurant as our Salesforce org. The restaurant has tables (records), orders (data), a kitchen (logic), and staff who follow processes (flows). Every concept maps back to this story — so start your students here.
          </div>
        </div>
      </div>

      {/* TOPIC 1 — Variables */}
      <section className="topic-section fade-up fade-up-2" id="variables">
        <h2>Topic 1: Variables</h2>

        <div className="definition-box">
          <div className="definition-box-icon">📖</div>
          <div>
            <div className="definition-label">Definition</div>
            <div className="definition-text">
              A <strong>variable</strong> is a named container. In Flow, we use the <strong>Assignment</strong> element to provide a value to a variable.
            </div>
          </div>
        </div>

        <div className="analogy-block">
          <div className="analogy-icon">🍕</div>
          <div>
            <div className="analogy-label">Pizza Analogy</div>
            <div className="analogy-text">
              In algebra you wrote x = 10. In our restaurant, <code>varNumOfPizzas = 10</code> means "the container called 'number of pizzas' currently holds the value 10." The container exists even when empty — just like a reserved table waiting for guests.
            </div>
          </div>
        </div>

        <div className="concept-card">
          <h4>Why Do We Use Variables?</h4>
          <p>A program consists of <strong>instructions</strong> (what to do) and <strong>data</strong> (what to do it with). Variables store the data your flow needs while it's running.</p>
          <div className="tag-row">
            <span className="tag tag-blue">📥 Input from users</span>
            <span className="tag tag-blue">☁️ Fields from Salesforce objects</span>
            <span className="tag tag-blue">🔍 Results read from the database</span>
            <span className="tag tag-blue">💾 Values to be written to the database</span>
          </div>
        </div>

        <div className="concept-card">
          <h4>Naming Variables — camelCase Convention</h4>
          <p>A good variable name makes your flow readable and maintainable. The course uses the <code>var</code> prefix + camelCase.</p>
          <table className="comparison-table" style={{ marginTop: 12 }}>
            <thead>
              <tr><th>Rule</th><th>Good Example</th><th>Bad Example</th></tr>
            </thead>
            <tbody>
              <tr><td>Describes the purpose</td><td><code>varNumOfPizzas</code></td><td><code>var1</code></td></tr>
              <tr><td>Full meaningful words</td><td><code>varAccountRecord</code></td><td><code>varAcct</code></td></tr>
              <tr><td>Letters and numbers only</td><td><code>varTableNum</code></td><td><code>var_table#</code></td></tr>
              <tr><td>camelCase format</td><td><code>varOppRec</code></td><td><code>var opp rec</code></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* TOPIC 2 — Data Types */}
      <section className="topic-section" id="data-types">
        <h2>Topic 2: Data Types</h2>

        <div className="definition-box">
          <div className="definition-box-icon">📖</div>
          <div>
            <div className="definition-label">Definition</div>
            <div className="definition-text">
              <strong>Data types</strong> are a way of categorizing data so that they can be classified, compared, and validated.
            </div>
          </div>
        </div>

        <div className="concept-card">
          <h4>The 7 Data Types — With Pizza Examples</h4>
          <table className="comparison-table" style={{ marginTop: 12 }}>
            <thead>
              <tr><th>Data Type</th><th>What It Stores</th><th>Example Value</th><th>🍕 Pizza Analogy</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><span className="tag tag-blue">Text</span></td>
                <td>Letters, words, sentences</td>
                <td>"The pizza is good."</td>
                <td>Pizza type name ("Margherita")</td>
              </tr>
              <tr>
                <td><span className="tag tag-orange">Number</span></td>
                <td>Integers and decimals</td>
                <td>5, 302.12</td>
                <td>Number of pizza slices</td>
              </tr>
              <tr>
                <td><span className="tag tag-purple">Boolean</span></td>
                <td>TRUE or FALSE only</td>
                <td>TRUE</td>
                <td>Is the pizza ready? (Yes/No)</td>
              </tr>
              <tr>
                <td><span className="tag tag-teal">Date</span></td>
                <td>Calendar date, no time</td>
                <td>10/13/2022</td>
                <td>Date the restaurant opened</td>
              </tr>
              <tr>
                <td><span className="tag tag-teal">Date/Time</span></td>
                <td>Date + specific time</td>
                <td>10/13/2022, 10:04 AM</td>
                <td>Exact time an order was received</td>
              </tr>
              <tr>
                <td><span className="tag tag-green">Record (Object)</span></td>
                <td>All fields of ONE Salesforce record</td>
                <td>Acme Inc, 1 Main St, 408-555-2091...</td>
                <td>A person sitting at a table (Name + order + preferences)</td>
              </tr>
              <tr>
                <td><span className="tag tag-purple">Collection</span></td>
                <td>A list of multiple values</td>
                <td>Account1, Account2, Account3</td>
                <td>All the people in the restaurant</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="tip-box">
          <span className="tip-box-icon">⚠️</span>
          <span><span className="tip-label">Common Mistake:</span> Students confuse Date and Date/Time. Rule: if there's a clock involved (login time, order time), it's Date/Time. If it's just a calendar day (birthday, close date), it's Date.</span>
        </div>

        <div className="note-box">
          <span className="note-box-icon">ℹ️</span>
          <span><strong>Salesforce Record IDs</strong> look like numbers ("0011E00001pDIbHQAS") but are actually <strong>Text</strong> — you never do math on them, and they contain letters.</span>
        </div>
      </section>

      {/* TOPIC 3 — Record & Collection Variables */}
      <section className="topic-section" id="record-collection">
        <h2>Topic 3: Record &amp; Collection Variables</h2>

        <div className="two-col">
          <div>
            <div className="definition-box">
              <div className="definition-box-icon">📖</div>
              <div>
                <div className="definition-label">Record Variable</div>
                <div className="definition-text">
                  A <strong>record variable</strong> stores ALL field values for a single Salesforce record. Access individual fields using dot notation: <code>{'{!varOppRec.Name}'}</code>
                </div>
              </div>
            </div>
            <div className="analogy-block" style={{ marginBottom: 0 }}>
              <div className="analogy-icon">🧳</div>
              <div>
                <div className="analogy-label">Suitcase Analogy</div>
                <div className="analogy-text">
                  A record variable is a <strong>suitcase</strong>. Pack it once (with all the Account's fields), carry it around your flow. Need Name? Open the suitcase and grab {'{!varAcctRec.Name}'}. No need to pack each shirt separately.
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="definition-box">
              <div className="definition-box-icon">📖</div>
              <div>
                <div className="definition-label">Collection Variable</div>
                <div className="definition-text">
                  A <strong>collection</strong> is a list of multiple values of a variable — like a list of Record Variables.
                </div>
              </div>
            </div>
            <div className="analogy-block" style={{ marginBottom: 0 }}>
              <div className="analogy-icon">✈️</div>
              <div>
                <div className="analogy-label">Airplane Analogy</div>
                <div className="analogy-text">
                  A collection is an <strong>airplane</strong> loading and unloading <strong>suitcases</strong> (records). Get Records loads suitcases onto the plane. A Loop unloads them one at a time to process each.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="concept-card">
          <h4>The Three Variable Categories</h4>
          <div className="three-col" style={{ marginTop: 12 }}>
            <div className="var-card" style={{ borderTop: '3px solid #0176D3' }}>
              <div className="var-card-type" style={{ color: '#0176D3' }}>Primitive</div>
              <h4>One value</h4>
              <p>Text, Number, Boolean, Date, Date/Time. Holds exactly ONE value at a time.</p>
              <code style={{ fontSize: '0.8rem' }}>varNumOfPizzas = 10</code>
            </div>
            <div className="var-card" style={{ borderTop: '3px solid #06A59A' }}>
              <div className="var-card-type" style={{ color: '#06A59A' }}>Record</div>
              <h4>All fields of one record</h4>
              <p>Stores every field from a single Salesforce object record. Like a suitcase.</p>
              <code style={{ fontSize: '0.8rem' }}>varOppRec.Name</code>
            </div>
            <div className="var-card" style={{ borderTop: '3px solid #7B5EA7' }}>
              <div className="var-card-type" style={{ color: '#7B5EA7' }}>Collection</div>
              <h4>List of multiple values</h4>
              <p>Holds multiple records or primitives. Used with Get Records and Loops.</p>
              <code style={{ fontSize: '0.8rem' }}>varAcctRecs (list)</code>
            </div>
          </div>
        </div>

        <div className="concept-card">
          <h4>Why Use Record Variables Instead of Individual Variables?</h4>
          <div className="before-after">
            <div className="before-col">
              <div className="before-label">❌ Without Record Variable</div>
              <h4>One variable per field</h4>
              <ul style={{ fontSize: '0.88rem' }}>
                <li>varAccountName</li>
                <li>varAccountPhone</li>
                <li>varAccountIndustry</li>
                <li>varAccountBillingCity</li>
                <li>varAccountOwnerId</li>
                <li>...20+ variables for one object</li>
              </ul>
            </div>
            <div className="after-col">
              <div className="after-label">✅ With Record Variable</div>
              <h4>One variable = entire record</h4>
              <ul style={{ fontSize: '0.88rem' }}>
                <li>varAcctRec (one variable)</li>
                <li>Access Name: <code>{'{!varAcctRec.Name}'}</code></li>
                <li>Access Phone: <code>{'{!varAcctRec.Phone}'}</code></li>
                <li>Access any field with dot notation</li>
                <li>Much cleaner, much faster to build</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TOPIC 4 — Algorithms */}
      <section className="topic-section" id="algorithms">
        <h2>Topic 4: Algorithms</h2>

        <div className="definition-box">
          <div className="definition-box-icon">📖</div>
          <div>
            <div className="definition-label">Definition</div>
            <div className="definition-text">
              An <strong>algorithm</strong> is a set of instructions for solving a problem or accomplishing a task.
            </div>
          </div>
        </div>

        <div className="two-col">
          <div className="analogy-block" style={{ marginBottom: 0 }}>
            <div className="analogy-icon">🍲</div>
            <div>
              <div className="analogy-label">Recipe Analogy</div>
              <div className="analogy-text">A cooking recipe is an algorithm — it's a step-by-step set of instructions that always produces the same result when followed correctly. A Salesforce algorithm could be the steps for creating a new user.</div>
            </div>
          </div>
          <div className="analogy-block" style={{ marginBottom: 0 }}>
            <div className="analogy-icon">👕</div>
            <div>
              <div className="analogy-label">Laundry Analogy (from slides)</div>
              <div className="analogy-text">You don't just "do laundry" — you follow steps: Sort → Wash → Dry → Fold → Put away. Skipping or reordering steps produces bad results. Flows work the same way.</div>
            </div>
          </div>
        </div>

        <div className="join-me-box" style={{ marginTop: 20 }}>
          <div className="join-me-label">Exercise — Algorithm Exercise 1</div>
          <h4>What's your company's algorithm for creating a Salesforce user?</h4>
          <p>Have students write out every step they follow when onboarding a new user. This is their first algorithm. Then ask: "Could a Flow automate this?" Usually yes — and that's exactly what Record-Triggered Flows do.</p>
        </div>
      </section>

      {/* TOPIC 5 — Control Structures */}
      <section className="topic-section" id="control-structures">
        <h2>Topic 5: Control Structures</h2>

        <div className="definition-box">
          <div className="definition-box-icon">📖</div>
          <div>
            <div className="definition-label">Definition</div>
            <div className="definition-text">
              <strong>Control structures</strong> determine which lines of a program run and how many times. Programs aren't limited to a straight line — they can branch, loop, and skip sections.
            </div>
          </div>
        </div>

        <div className="three-col">
          <div className="var-card" style={{ borderTop: '4px solid #0176D3' }}>
            <div className="var-card-type" style={{ color: '#0176D3' }}>Type 1</div>
            <h4>📋 Sequence</h4>
            <p>Steps run in order, one after another. Every flow starts here.</p>
            <div style={{ marginTop: 12, fontSize: '0.82rem', color: '#6B7280', borderLeft: '2px solid #BFDBFE', paddingLeft: 10 }}>
              <div>Step 1: I'm hungry</div>
              <div>Step 2: I start my car</div>
              <div>Step 3: I drive to restaurant</div>
              <div>Step 4: I eat pizza</div>
              <div>Step 5: I pay</div>
            </div>
            <div style={{ marginTop: 10, fontSize: '0.82rem', fontWeight: 700, color: '#0176D3' }}>Flow elements: All elements in order on the canvas</div>
          </div>

          <div className="var-card" style={{ borderTop: '4px solid #FE9339' }}>
            <div className="var-card-type" style={{ color: '#E56000' }}>Type 2</div>
            <h4>🔀 Conditions</h4>
            <p>The flow decides which path to take based on data values. One or more branches.</p>
            <div style={{ marginTop: 12, fontSize: '0.82rem', color: '#6B7280', borderLeft: '2px solid #FED7AA', paddingLeft: 10 }}>
              <em>IF Stage = "Closed Won"</em><br />
              → Show Closed Reason field<br />
              <em>ELSE</em><br />
              → Hide Closed Reason field
            </div>
            <div style={{ marginTop: 10, fontSize: '0.82rem', fontWeight: 700, color: '#E56000' }}>Flow elements: Decision element</div>
          </div>

          <div className="var-card" style={{ borderTop: '4px solid #7B5EA7' }}>
            <div className="var-card-type" style={{ color: '#7B5EA7' }}>Type 3</div>
            <h4>🔁 Loops</h4>
            <p>Repeat a section of code for each item in a collection.</p>
            <div style={{ marginTop: 12, fontSize: '0.82rem', color: '#6B7280', borderLeft: '2px solid #DDD6FE', paddingLeft: 10 }}>
              <em>FOR EACH Account in varAcctRecs:</em><br />
              → Update the Industry field<br />
              → Add to output collection<br />
              END LOOP
            </div>
            <div style={{ marginTop: 10, fontSize: '0.82rem', fontWeight: 700, color: '#7B5EA7' }}>Flow elements: Loop element</div>
          </div>
        </div>

        <div className="tip-box">
          <span className="tip-box-icon">⚠️</span>
          <span><span className="tip-label">Critical — Loops + DML:</span> Never put a Create/Update/Delete Records element INSIDE a loop. This fires one DML per iteration and hits governor limits fast. Collect records in a Collection variable inside the loop, then do ONE bulk DML outside the loop.</span>
        </div>
      </section>

      {/* TOPIC 6 — Best Practices */}
      <section className="topic-section" id="best-practices">
        <h2>Topic 6: Best Practices</h2>

        <div className="concept-card">
          <h4>The Whiteboard-First Approach</h4>
          <p>Before touching Flow Builder, always plan on paper or whiteboard. Figure out:</p>
          <div className="two-col" style={{ marginTop: 12 }}>
            <ul>
              <li><strong>Variables</strong> — what data do I need to store?</li>
              <li><strong>Inputs</strong> — what comes into this flow?</li>
              <li><strong>Outputs</strong> — what does this flow produce?</li>
            </ul>
            <ul>
              <li><strong>DML</strong> — what database operations are needed?</li>
              <li><strong>Algorithm</strong> — what are the steps in order?</li>
              <li><strong>Edge cases</strong> — what can go wrong?</li>
            </ul>
          </div>
          <div className="join-me-box" style={{ marginTop: 12, marginBottom: 0 }}>
            <div className="join-me-label">Whiteboard Exercise</div>
            <h4>Always whiteboard BEFORE building in the org</h4>
            <p>Give students a use case requirement and have them fill out Variables, Inputs, Outputs, and Algorithm on paper before opening Flow Builder. Students who skip this step build flows that need to be rebuilt.</p>
          </div>
        </div>

        <table className="comparison-table">
          <thead>
            <tr><th>Best Practice</th><th>Why It Matters</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>Use camelCase variable names with descriptive words</td>
              <td>You or a colleague needs to read this flow 6 months from now</td>
            </tr>
            <tr>
              <td>Always add Fault paths to data elements</td>
              <td>Default fault message is useless to users and admins debugging</td>
            </tr>
            <tr>
              <td>Use entry criteria on Record-Triggered Flows</td>
              <td>Reduce unnecessary executions → conserve governor limits</td>
            </tr>
            <tr>
              <td>Multiple small focused flows per object, not one giant flow</td>
              <td>Easier testing, maintenance, debugging, and better performance</td>
            </tr>
            <tr>
              <td>Bulk DML outside loops</td>
              <td>Avoid hitting the 150 DML operations governor limit</td>
            </tr>
          </tbody>
        </table>
      </section>

      <Quiz questions={quizData.l1} title="Lesson 1 Knowledge Check — Variables & Data Types" />

      <div className="page-nav">
        <Link to="/lesson/0" className="page-nav-btn">
          ← Lesson 0: Course Overview
        </Link>
        <Link to="/lesson/2" className="page-nav-btn primary">
          Lesson 2: Screen Flows →
        </Link>
      </div>
    </>
  );
}
