// Shared premium lesson components — visual diagrams, callout cards, matrices
import { motion } from 'framer-motion';

// ─────────────────────────────────────────────
// SVG Icons (no emojis, no external libs)
// ─────────────────────────────────────────────
const IcTarget = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
  </svg>
);
const IcLayers = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
  </svg>
);
const IcAlertTriangle = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
    <path d="M12 9v4"/><path d="M12 17h.01"/>
  </svg>
);
const IcCheck = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);
const IcX = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);
const IcArrowDown = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/>
  </svg>
);
const IcZap = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);
const IcClock = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);
const IcRefresh = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/>
    <path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/>
    <path d="M3 21v-5h5"/>
  </svg>
);
const IcMonitor = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
  </svg>
);

// ─────────────────────────────────────────────
// Shared animation variants
// ─────────────────────────────────────────────
const fadeInFromLeft = {
  initial: { opacity: 0, x: -10 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.4 },
};

// ─────────────────────────────────────────────
// ExamTrap — exam-critical gotcha callouts
// ─────────────────────────────────────────────
export function ExamTrap({ title, children }) {
  return (
    <motion.div className="exam-trap" {...fadeInFromLeft}>
      <div className="exam-trap-header">
        <span className="exam-trap-icon"><IcTarget /></span>
        <span className="exam-trap-badge">EXAM TRAP</span>
        {title && <span className="exam-trap-title">{title}</span>}
      </div>
      <div className="exam-trap-body">{children}</div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────
// DeepDive — "why this exists" insight cards
// ─────────────────────────────────────────────
export function DeepDive({ title = 'Why This Exists', children }) {
  return (
    <motion.div className="deep-dive" {...fadeInFromLeft}>
      <div className="deep-dive-header">
        <span className="deep-dive-icon"><IcLayers /></span>
        <span className="deep-dive-badge">DEEP DIVE</span>
        <span className="deep-dive-title">{title}</span>
      </div>
      <div className="deep-dive-body">{children}</div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────
// MistakeCard — common mistakes with consequences
// ─────────────────────────────────────────────
export function MistakeCard({ children }) {
  return (
    <motion.div className="mistake-card" {...fadeInFromLeft}>
      <div className="mistake-card-header">
        <span className="mistake-card-icon"><IcAlertTriangle /></span>
        <span className="mistake-card-badge">COMMON MISTAKE</span>
      </div>
      <div className="mistake-card-body">{children}</div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────
// StepList — numbered exercise walkthroughs
// ─────────────────────────────────────────────
export function StepList({ title, intro, steps }) {
  return (
    <div className="step-list">
      {(title || intro) && (
        <div className="step-list-header">
          {title && <div className="step-list-title">{title}</div>}
          {intro && <div className="step-list-intro">{intro}</div>}
        </div>
      )}
      <div className="step-list-body">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            className="step-item"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.08 }}
          >
            <div className="step-num">{String(i + 1).padStart(2, '0')}</div>
            <div className="step-content">
              {typeof step === 'string' ? (
                <p style={{ margin: 0 }}>{step}</p>
              ) : (
                <>
                  {step.label && <div className="step-label">{step.label}</div>}
                  {step.detail && <div className="step-detail">{step.detail}</div>}
                  {step.note && <div className="step-note">{step.note}</div>}
                  {step.code && (
                    <code className="step-code">{step.code}</code>
                  )}
                </>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// SaveOrderDiagram — visual save order of execution
// ─────────────────────────────────────────────
const SOD_ZONES = [
  {
    id: 'before',
    label: 'PHASE 1: BEFORE SAVE',
    sub: 'Record exists in memory only — not yet written to the database',
    color: '#7C3AED',
    bg: 'rgba(124,58,237,.07)',
    border: 'rgba(124,58,237,.2)',
    steps: [
      { n: 1, label: 'System Validation', sub: 'Required fields, field format, max length', note: 'Cannot be bypassed' },
      { n: 2, label: 'Before-Save Flows', sub: 'Fast Field Update', flow: true, note: 'Runs BEFORE Apex!' },
      { n: 3, label: 'Custom Validation Rules', sub: 'Admin-created validation rules', note: 'Runs AFTER Before-Save flows' },
      { n: 4, label: 'Apex Before Triggers', sub: 'trigger(before insert/update)', apex: true },
    ]
  },
  {
    id: 'after',
    label: 'PHASE 2: AFTER SAVE',
    sub: 'Record written to DB — record ID and timestamps now available',
    color: '#0176D3',
    bg: 'rgba(1,118,211,.07)',
    border: 'rgba(1,118,211,.2)',
    steps: [
      { n: 5, label: 'Apex After Triggers', sub: 'trigger(after insert/update)', apex: true },
      { n: 6, label: 'Assignment Rules', sub: 'Lead & Case auto-assignment' },
      { n: 7, label: 'Auto-Response Rules', sub: 'Case & Lead acknowledgement emails' },
      { n: 8, label: 'Workflow Rules', sub: 'Legacy — retiring 2025', legacy: true },
      { n: 9, label: 'After-Save Flows', sub: 'Actions & Related Records', flow: true },
      { n: 10, label: 'Escalation Rules', sub: 'Case escalation logic' },
      { n: 11, label: 'Roll-up Summary Fields', sub: 'Parent record aggregations recalculate' },
    ]
  },
  {
    id: 'async',
    label: 'PHASE 3: POST-COMMIT (Async)',
    sub: 'Separate transaction — fired after the main transaction commits',
    color: '#0F766E',
    bg: 'rgba(15,118,110,.07)',
    border: 'rgba(15,118,110,.2)',
    steps: [
      { n: 12, label: 'Async Apex', sub: '@future methods, Queueable Apex jobs', note: 'Separate transaction' },
      { n: 13, label: 'Email Delivery', sub: 'Actual SMTP sending of email alerts' },
      { n: 14, label: 'Platform Events', sub: 'Published events delivered to subscribers' },
    ]
  }
];

const MILESTONES = [
  {
    label: 'RECORD WRITTEN TO DATABASE',
    sub: 'Auto ID assigned · Timestamps set · Record ID now available in after-save flows',
    color: '#0176D3',
  },
  {
    label: 'TRANSACTION COMMITTED',
    sub: 'Data is permanent · Rollback no longer possible · Async operations begin',
    color: '#0F766E',
  },
];

export function SaveOrderDiagram() {
  return (
    <div className="sod-wrapper">
      {SOD_ZONES.map((zone, zi) => (
        <div key={zone.id}>
          <motion.div
            className="sod-zone"
            style={{ '--zone-color': zone.color, '--zone-bg': zone.bg, '--zone-border': zone.border }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: zi * 0.15 }}
          >
            <div className="sod-zone-header">
              <span className="sod-zone-label" style={{ color: zone.color }}>{zone.label}</span>
              <span className="sod-zone-sub">{zone.sub}</span>
            </div>
            <div className="sod-steps-grid">
              {zone.steps.map(step => (
                <div
                  key={step.n}
                  className={`sod-step${step.flow ? ' sod-step--flow' : ''}${step.apex ? ' sod-step--apex' : ''}${step.legacy ? ' sod-step--legacy' : ''}`}
                  style={step.flow ? { '--step-color': zone.color } : {}}
                >
                  <div className="sod-step-top">
                    <div className="sod-step-num" style={step.flow ? { background: zone.color, color: 'white' } : {}}>{step.n}</div>
                    <div className="sod-step-tags">
                      {step.flow && <span className="sod-tag sod-tag--flow" style={{ color: zone.color, borderColor: zone.color + '50', background: zone.color + '15' }}>FLOW</span>}
                      {step.apex && <span className="sod-tag sod-tag--apex">APEX</span>}
                      {step.legacy && <span className="sod-tag sod-tag--legacy">LEGACY</span>}
                    </div>
                  </div>
                  <div className="sod-step-label">{step.label}</div>
                  <div className="sod-step-sub">{step.sub}</div>
                  {step.note && <div className="sod-step-note" style={{ color: zone.color }}>{step.note}</div>}
                </div>
              ))}
            </div>
          </motion.div>
          {zi < SOD_ZONES.length - 1 && (
            <div className="sod-milestone" style={{ '--ms-color': MILESTONES[zi].color }}>
              <div className="sod-milestone-line" />
              <div className="sod-milestone-pill" style={{ borderColor: MILESTONES[zi].color + '50', background: MILESTONES[zi].color + '15', color: MILESTONES[zi].color }}>
                <span className="sod-milestone-arrow"><IcArrowDown /></span>
                <div>
                  <div className="sod-milestone-label">{MILESTONES[zi].label}</div>
                  <div className="sod-milestone-sub">{MILESTONES[zi].sub}</div>
                </div>
              </div>
              <div className="sod-milestone-line" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────
// BulkifyDiagram — DML inside vs outside loop
// ─────────────────────────────────────────────
export function BulkifyDiagram() {
  return (
    <div className="bulkify-grid">
      {/* BAD pattern */}
      <motion.div
        className="bulkify-col"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="bulkify-col-head bulkify-bad">
          <span className="bulkify-col-badge"><IcX /> Anti-Pattern</span>
          <span className="bulkify-col-sub">DML inside the loop — fails at record 151</span>
        </div>
        <div className="bulkify-flow">
          <div className="bulkify-el">
            <div className="bulkify-el-name">Get Records</div>
            <div className="bulkify-el-sub">500 Contacts returned</div>
          </div>
          <div className="bulkify-connector"><IcArrowDown /></div>
          <div className="bulkify-el">
            <div className="bulkify-el-name">Loop</div>
            <div className="bulkify-el-sub">For each Contact...</div>
          </div>
          <div className="bulkify-connector bulkify-connector--indent"><IcArrowDown /></div>
          <div className="bulkify-el bulkify-el--bad bulkify-el--indent">
            <div className="bulkify-el-name">Create Records</div>
            <div className="bulkify-el-sub">Create 1 Task — <strong>DML #1, #2, #3...</strong></div>
          </div>
        </div>
        <div className="bulkify-result bulkify-result--bad">
          <IcX />
          <div>
            <strong>System.LimitException</strong>
            <div>Too many DML statements: 151</div>
            <div style={{ fontSize: '.78rem', marginTop: 4, opacity: .75 }}>Flow crashes on record 151 of 500</div>
          </div>
        </div>
      </motion.div>

      {/* GOOD pattern */}
      <motion.div
        className="bulkify-col"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="bulkify-col-head bulkify-good">
          <span className="bulkify-col-badge"><IcCheck /> Correct Pattern</span>
          <span className="bulkify-col-sub">Build collection → single bulk DML outside</span>
        </div>
        <div className="bulkify-flow">
          <div className="bulkify-el">
            <div className="bulkify-el-name">Get Records</div>
            <div className="bulkify-el-sub">500 Contacts returned</div>
          </div>
          <div className="bulkify-connector"><IcArrowDown /></div>
          <div className="bulkify-el">
            <div className="bulkify-el-name">Loop</div>
            <div className="bulkify-el-sub">For each Contact...</div>
          </div>
          <div className="bulkify-connector bulkify-connector--indent"><IcArrowDown /></div>
          <div className="bulkify-el bulkify-el--neutral bulkify-el--indent">
            <div className="bulkify-el-name">Assignment</div>
            <div className="bulkify-el-sub">Set Task fields for this Contact</div>
          </div>
          <div className="bulkify-connector bulkify-connector--indent"><IcArrowDown /></div>
          <div className="bulkify-el bulkify-el--good bulkify-el--indent">
            <div className="bulkify-el-name">Add to Collection</div>
            <div className="bulkify-el-sub">colTasks.add(task) — <strong>no DML</strong></div>
          </div>
          <div className="bulkify-connector"><IcArrowDown /></div>
          <div className="bulkify-el bulkify-el--good">
            <div className="bulkify-el-name">Create Records</div>
            <div className="bulkify-el-sub">Pass <code>colTasks</code> — bulk insert all 500</div>
          </div>
        </div>
        <div className="bulkify-result bulkify-result--good">
          <IcCheck />
          <div>
            <strong>1 DML statement</strong> for 500 records
            <div style={{ fontSize: '.78rem', marginTop: 4, opacity: .85 }}>149 DML operations remaining in limit</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// ─────────────────────────────────────────────
// ActionsMatrix — full Before vs After Save capability matrix
// ─────────────────────────────────────────────
const MATRIX_ROWS = [
  { group: 'Core Field Operations' },
  { label: 'Update fields on the triggering record', before: true, after: 'cost', afterNote: '+1 DML' },
  { label: 'Access triggering record\'s ID (new records)', before: false, after: true },
  { label: 'Access $Record__Prior (old field values)', before: false, after: true },
  { group: 'Data Operations' },
  { label: 'Get Records (SOQL query)', before: true, after: true },
  { label: 'Create related records', before: false, after: true },
  { label: 'Update other records', before: false, after: true },
  { label: 'Delete records', before: false, after: true },
  { label: 'Trigger on record DELETE', before: false, after: true },
  { group: 'Logic Elements' },
  { label: 'Decision, Assignment, Loop', before: true, after: true },
  { label: 'Collection Sort / Filter', before: true, after: true },
  { label: 'Custom Error (block the save)', before: true, after: false, beforeNote: 'Only way to block' },
  { group: 'Actions & Integrations' },
  { label: 'Send Email Alert', before: false, after: true },
  { label: 'Call Apex Action (@InvocableMethod)', before: false, after: true },
  { label: 'Invoke Subflow', before: false, after: true },
  { label: 'HTTP Callout to external system', before: false, after: true },
  { label: 'Post to Slack / Chatter', before: false, after: true },
  { group: 'Advanced Paths' },
  { label: 'Scheduled Paths (time-based actions)', before: false, after: true },
  { label: 'Asynchronous Paths (non-blocking)', before: false, after: true },
];

export function ActionsMatrix() {
  return (
    <div className="actions-matrix">
      <div className="actions-matrix-header">
        <div className="actions-matrix-cap">Capability</div>
        <div className="actions-matrix-col-head before">
          <IcZap />
          Before-Save
          <span className="actions-matrix-col-sub">Fast Field Update</span>
        </div>
        <div className="actions-matrix-col-head after">
          <IcRefresh />
          After-Save
          <span className="actions-matrix-col-sub">Actions & Related</span>
        </div>
      </div>
      {MATRIX_ROWS.map((row, i) => (
        row.group ? (
          <div key={i} className="actions-matrix-group">{row.group}</div>
        ) : (
          <motion.div
            key={i}
            className="actions-matrix-row"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25, delay: i * 0.03 }}
          >
            <div className="actions-matrix-cap">{row.label}</div>
            <div className={`actions-matrix-cell ${row.before ? 'yes' : 'no'}`}>
              {row.before ? <IcCheck /> : <IcX />}
              {row.before && row.beforeNote && <span className="cell-note">{row.beforeNote}</span>}
            </div>
            <div className={`actions-matrix-cell ${row.after === 'cost' ? 'cost' : row.after ? 'yes' : 'no'}`}>
              {(row.after === true || row.after === 'cost') ? <IcCheck /> : <IcX />}
              {row.afterNote && <span className="cell-note">{row.afterNote}</span>}
            </div>
          </motion.div>
        )
      ))}
      <div className="actions-matrix-legend">
        <span className="legend-item yes"><IcCheck /> Available</span>
        <span className="legend-item no"><IcX /> Not available</span>
        <span className="legend-item cost"><IcCheck /> Available (+1 DML statement)</span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// PerformanceBar — visual performance comparison
// ─────────────────────────────────────────────
export function PerformanceBar({ title, items }) {
  const max = Math.max(...items.map(i => i.value));
  return (
    <div className="perf-bar-wrapper">
      {title && <div className="perf-bar-title">{title}</div>}
      {items.map((item, i) => (
        <div key={i} className="perf-bar-row">
          <div className="perf-bar-label">{item.label}</div>
          <div className="perf-bar-track">
            <motion.div
              className={`perf-bar-fill ${item.variant || 'neutral'}`}
              initial={{ width: 0 }}
              whileInView={{ width: `${Math.max(4, (item.value / max) * 100)}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.1 }}
            />
          </div>
          <div className="perf-bar-val">{item.display}</div>
        </div>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────
// FlowTypeDecision — visual decision tree
// ─────────────────────────────────────────────
export function FlowTypeDecision() {
  return (
    <div className="ftd-wrapper">
      <div className="ftd-question">Does a user need to interact with the process — see screens, enter data?</div>
      <div className="ftd-branches">
        <div className="ftd-branch">
          <div className="ftd-branch-label yes">YES</div>
          <motion.div
            className="ftd-result"
            style={{ '--result-color': '#0176D3' }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="ftd-result-icon"><IcMonitor /></div>
            <div className="ftd-result-name">Screen Flow</div>
            <div className="ftd-result-examples">New record wizards · Guided data entry · Service scripts</div>
          </motion.div>
        </div>
        <div className="ftd-branch">
          <div className="ftd-branch-label no">NO → Automated</div>
          <div className="ftd-sub-question">Is it triggered by a record being saved (created, updated, or deleted)?</div>
          <div className="ftd-sub-branches">
            <div className="ftd-branch">
              <div className="ftd-branch-label yes">YES</div>
              <motion.div
                className="ftd-result"
                style={{ '--result-color': '#D97706' }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <div className="ftd-result-icon"><IcZap /></div>
                <div className="ftd-result-name">Record-Triggered Flow</div>
                <div className="ftd-result-examples">Auto-update fields · Validate on save · Create related records</div>
              </motion.div>
            </div>
            <div className="ftd-branch">
              <div className="ftd-branch-label no">NO</div>
              <div className="ftd-sub-question">Should it run on a recurring schedule (daily, weekly, once)?</div>
              <div className="ftd-sub-branches">
                <div className="ftd-branch">
                  <div className="ftd-branch-label yes">YES</div>
                  <motion.div
                    className="ftd-result"
                    style={{ '--result-color': '#0F766E' }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    <div className="ftd-result-icon"><IcClock /></div>
                    <div className="ftd-result-name">Schedule-Triggered Flow</div>
                    <div className="ftd-result-examples">Nightly cleanup · Weekly reminders · Batch updates</div>
                  </motion.div>
                </div>
                <div className="ftd-branch">
                  <div className="ftd-branch-label no">NO</div>
                  <motion.div
                    className="ftd-result"
                    style={{ '--result-color': '#7C3AED' }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                  >
                    <div className="ftd-result-icon"><IcRefresh /></div>
                    <div className="ftd-result-name">Autolaunched Flow</div>
                    <div className="ftd-result-examples">Called by Apex · REST API trigger · Subflow module</div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
