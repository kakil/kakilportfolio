# Akil Digital Project Tracking Standard

**Status:** Active standard  
**Applies to:** Every Akil Digital product/project repository created from October 2026 forward  
**Model source:** The evidence-heavy `training-capture/` system proven in the Micro-Series Studio repository

---

# 1. Purpose

Every Akil Digital project should leave behind a durable record of:

- what was intended,
- what actually happened,
- what changed,
- what failed,
- what worked,
- how it was tested,
- what evidence exists,
- what was launched,
- what customers did,
- what lessons should be reused.

Chat history is not the permanent project record.

The GitHub repository is.

---

# 2. Three Documentation Layers

## Layer A — Planning baseline

Usually stored in:

`docs/`

This records what the project intended to build before execution.

Examples:

- master project plan
- requirements
- funnel architecture
- launch strategy
- research plan
- roadmap

Do not rewrite planning documents merely to make them match what eventually happened.

## Layer B — Living implementation record

Stored in:

`training-capture/`

This records what actually happened.

It is chronological, evidence-based, and allowed to contain mistakes, abandoned approaches, failures, unexpected findings, and changed decisions.

## Layer C — Distilled training / automation

Created later from the evidence in Layers A and B.

Possible outputs:

- training products
- SOPs
- templates
- reusable launch playbooks
- Akil Digital Systems Business OS automation

**Capture now; package later.**

---

# 3. Required Baseline Directory

Every product/project repository should contain:

`training-capture/`

with the following baseline files:

- `00-objective-and-constraints.md`
- `01-research-and-product-decision.md`
- `02-requirements.md`
- `03-architecture.md`
- `04-build-log.md`
- `05-prompts-used.md`
- `06-bugs-and-fixes.md`
- `07-testing-log.md`
- `08-deployment.md`
- `09-warriorplus-setup.md` when WarriorPlus is used
- `10-launch-log.md`
- `11-results-and-lessons.md`
- `PHASE-CHECKPOINT-TEMPLATE.md`
- `screenshots/`
- `evidence/`

Projects may add specialized files for:

- access/licensing
- affiliate/JV work
- prelaunch marketing
- live launch tracking
- migrations
- feature-specific audits
- customer fulfillment
- handoffs
- demos
- experiments
- post-launch expansion

Do not remove the baseline merely because a project is not software.

---

# 4. Mandatory Phase Checkpoint

Before a meaningful project phase is closed, the project record must answer:

1. What did we build, research, or change?
2. Why did we choose this approach?
3. What tools, services, commands, or data sources did we use?
4. Which AI prompts materially helped?
5. What failed or behaved unexpectedly?
6. How did we diagnose or evaluate it?
7. What was the final fix, decision, or replacement?
8. What tests or validations were run?
9. What passed?
10. What failed or remains unverified?
11. What screenshots, files, research artifacts, or evidence should be preserved?
12. What Git commit/tag represents the known-good baseline?
13. What should a beginner or future operator be warned about?
14. What reusable lesson belongs in a future Akil Digital training product, SOP, or Business OS capability?
15. What information is specific to this project?
16. What private Akil Digital capability should remain outside a public training product?
17. What is the exact next phase?

A phase is not closed merely because the feature/product appears finished.

It is closed when the implementation evidence is preserved.

---

# 5. Prompt Capture Standard

Preserve exact high-value AI prompts when they materially affect:

- opportunity selection
- market research
- analysis
- planning
- product design
- writing
- coding
- troubleshooting
- testing
- launch strategy
- affiliate/JV work
- customer-support fixes
- post-launch decisions

Record:

- date
- purpose
- exact prompt
- result
- whether it worked immediately, required revision, or failed

Do not fill `05-prompts-used.md` with every trivial instruction.

Capture prompts that materially changed the project.

---

# 6. Failure Capture Standard

Do not sanitize away mistakes.

When something fails, preserve:

- attempted approach
- why it seemed reasonable
- observed symptom
- impact
- diagnosis
- rejected fixes
- final fix/replacement
- regression test
- known-good commit
- reusable lesson

Failures are high-value training and automation data.

---

# 7. Testing Standard

Testing logs should distinguish:

- planned acceptance criteria
- tests actually run
- results actually observed
- evidence actually preserved

Do not claim stronger validation than the captured evidence supports.

For software projects, include:

- functional testing
- browser/device testing
- persistence/recovery
- deployment
- regression
- purchase/access flows

For research/information products, include:

- source verification
- recency
- citation integrity
- contradictory evidence
- calculation checks
- PDF/render QA
- delivery-package QA
- funnel QA

---

# 8. Screenshot / Evidence Standard

Capture milestones, not every keystroke.

Good evidence includes:

- first working baseline
- meaningful feature completion
- before/after bug state
- deployment
- platform setup
- test purchase
- product proof
- live launch
- launch metrics
- final known-good state

Use descriptive filenames.

Do not store unnecessary customer PII in screenshots.

---

# 9. Git Standard

**Git and documentation should move together.**

After a stable phase:

1. update the relevant training-capture files,
2. preserve evidence,
3. commit code/product files and documentation,
4. record the known-good SHA or tag,
5. then move to the next phase.

Before risky work, identify the last known-good baseline.

Use feature branches and PRs for meaningful changes when practical.

---

# 10. Launch / Commercial Tracking

Commercial projects should preserve:

- offer architecture
- prices
- commission
- platform product/offer IDs
- affiliate request links
- JV pages
- calendar listings
- swipes
- test purchase evidence
- launch chronology
- traffic
- sales
- AOV
- refunds
- fees
- support issues
- activation/delivery failures
- affiliate activity
- experiments
- post-launch pricing
- postmortem

Keep distribution metrics separate from conversion metrics so “no demand” is not confused with “no traffic.”

---

# 11. Privacy and Security

Never commit:

- passwords
- API keys
- tokens
- payment credentials
- buyer payment data
- raw buyer PII
- private customer-support information
- full private mailing-list exports
- secrets

Private repositories are not an excuse to store credentials.

Commercial metrics may be stored privately, but future public case studies should aggregate or sanitize buyer-level and partner-level information.

---

# 12. Public Training Boundary

Akil Digital may teach:

- general build process
- general research process
- launch workflow
- debugging/test discipline
- productization frameworks
- reusable templates

Keep private by default:

- proprietary opportunity-scoring logic
- private market/competitor intelligence
- internal portfolio performance data
- automated Product Factory/orchestration
- proprietary research corpus
- advanced prompt benchmarking
- private mature versions of products
- future automated launch/optimization systems

---

# 13. Standard Product Repository Convention

Every Akil Digital product should have:

- a dedicated GitHub repository
- a dedicated AkilDigital.com subdomain
- a root-site status entry while in development
- a `docs/` planning baseline
- a `training-capture/` living record
- product-specific source/assets
- QA evidence
- launch records
- post-launch lessons

This makes each product an auditable, reusable unit inside the wider Akil Digital portfolio.

---

# 14. Reference Implementations

## Micro-Series Studio

Repository:

`kakil/micro-series-studio`

Its `training-capture/` directory is the original detailed reference. It contains the baseline files plus many phase-specific feature audits, deployment records, test logs, launch records, screenshots, and demo artifacts.

## Digital Opportunity Intelligence 2027

Repository:

`kakil/digital-opportunity-intelligence-2027`

This is the first project to adopt the standard deliberately from project inception.

---

# 15. Guiding Principle

> **Define → implement/research one controlled increment → run/validate immediately → test independently → regression check → document → preserve known-good baseline → continue.**

The purpose is not bureaucracy.

The purpose is to make each launch easier to understand, debug, teach, automate, and improve.
