---
layout: default
title: "Block 2 — Your first task"
permalink: /block-02-first-task/
---

<div class="block-page block-page-wide">
  <div class="block-eyebrow">
    <span class="block-time tone-dark">00:08</span>
    <span class="block-kicker">Block 2 &middot; 6 minutes</span>
  </div>
  <h1>Your first task</h1>

  <p class="demo-lead">Download the practice folder, drop it into your Cowork folder, then paste the brief. Three synthetic committee minutes and one table of monthly counts. No patients.</p>

  <p><a class="btn btn-accent" href="{{ site.baseurl }}/assets/demo/cowork-practice.zip" download>Download the practice folder (.zip)</a></p>

  <div class="demo-preset-row" data-stages="s2-" role="group" aria-label="Task steps">
    <button type="button" class="demo-chip">Brief</button>
    <button type="button" class="demo-chip">Plan</button>
    <button type="button" class="demo-chip">Watch</button>
    <button type="button" class="demo-chip">Steer</button>
    <button type="button" class="demo-chip">Collect</button>
  </div>

  <div class="demo-stage" id="s2-0">
    <p class="demo-stage-kicker">Brief it like a colleague</p>
    <p class="demo-stage-copy">A good brief names three things: the <strong>outcome</strong>, the <strong>format</strong>, and the <strong>inputs</strong>. Add who will read it.</p>
    <pre class="cw-prompt">Inputs: the three minutes files and quality-counts.csv in the practice folder.

Make three files in a new subfolder called "outputs":
1. decisions.docx: one page, every decision with its owner and due date.
2. actions.xlsx: one row per action item (owner, due date, status), filtered, with a second tab counting open items by owner.
3. quality-update.pptx: five slides for the department meeting, KHCC colours, one chart of the monthly counts.

Readers: department heads, five minutes to read.
Show me your plan before you start.</pre>
  </div>

  <div class="demo-stage" id="s2-1" hidden>
    <p class="demo-stage-kicker">Read the plan before it runs</p>
    <p class="demo-stage-copy">Cowork reads the request, splits it into steps, and lists them. This is the cheapest moment to fix a misunderstanding. If a step is wrong, say so now: &ldquo;Skip the chart; use a table.&rdquo;</p>
    <p class="demo-stage-copy">Large jobs may be split across sub-agents that work in parallel, for example one per document.</p>
  </div>

  <div class="demo-stage" id="s2-2" hidden>
    <p class="demo-stage-kicker">Watch the progress panel</p>
    <p class="demo-stage-copy">The right-hand panel shows <strong>Progress</strong> (the to-do list ticking off), <strong>Outputs</strong> (files as they appear) and <strong>Context</strong> (folders and connectors in use). Code runs in an isolated sandbox, not on your laptop. You can switch to other work; long tasks do not time out.</p>
    {% include shot.html src="scheduled-tasks-progress-panel.png" alt="Cowork session on a laptop. The conversation is on the left; the right-hand panel shows Progress with ticked steps, Outputs, and Context with Slack, Gmail, Calendar and Drive" caption="A Cowork session with the Progress, Outputs and Context panel on the right." source="https://claude.com/product/cowork" %}
  </div>

  <div class="demo-stage" id="s2-3" hidden>
    <p class="demo-stage-kicker">Steer mid-task</p>
    <p class="demo-stage-copy">Type while it works. Cowork picks the message up at the next step.</p>
    <pre class="cw-prompt">The infection-control committee is not a department. Put its actions under "Committees" in actions.xlsx.</pre>
    <p class="demo-stage-copy">If something looks wrong (a file you did not mention, a website you did not expect), press stop. You can always restart with a clearer brief.</p>
  </div>

  <div class="demo-stage" id="s2-4" hidden>
    <p class="demo-stage-kicker">Collect and check</p>
    <p class="demo-stage-copy">The files land in <code>outputs/</code> in your folder and can be previewed in the session. Excel files carry working formulas, not pasted numbers. Open each one and check it against the source before you send it on. You stay responsible for what leaves your desk.</p>
    <p class="demo-stage-copy">Ask for a fix in the same session (&ldquo;slide 3 is too dense, split it&rdquo;) rather than starting over; Claude keeps the context.</p>
  </div>

  <div class="demo-nav-row">
    <button type="button" class="btn btn-primary" id="s2-next">Next</button>
    <p class="demo-status" id="s2-status" role="status"></p>
  </div>

  <h2>More briefs to try</h2>
  <pre class="cw-prompt">Organise my practice folder: one subfolder per committee, rename files as YYYY-MM-DD_committee_minutes, and give me a list of what you moved. Ask before moving anything.</pre>
  <pre class="cw-prompt">Read quality-counts.csv. Build an Excel workbook with a monthly trend chart, a 3-month moving average, and conditional formatting that marks any month above the yearly mean in gold.</pre>
  <pre class="cw-prompt">Draft a one-page memo to nursing managers announcing the new hand-hygiene audit schedule, using only the decisions in the minutes. Mark anything you had to assume.</pre>

  <h2>Three jobs Chat cannot finish</h2>
  <p>Each needs many files, big files, or a real file back in your folder.</p>
  <pre class="cw-prompt">I need an expense report from the receipt scans in my receipts folder. Give me an Excel sheet with date, vendor, category, amount, and a totals row. If anything is blurry or unclear, mark it "verify".</pre>
  <pre class="cw-prompt">This guideline PDF is too big to work with. Split it into separate files, one per chapter or major section, with descriptive file names so I can find what I need at a glance.</pre>
  <pre class="cw-prompt">These slides are images and cannot be edited. Rebuild this as a clean, editable PowerPoint in KHCC colours: same content, same slide order, real text boxes.</pre>
  <p>The rebuilt deck will not be perfect. It is still far quicker to fix than to retype.</p>
  {% include vid.html t="252" at="04:12" note="receipts, PDF split, slide rebuild" %}

  <div class="callout callout-takehome">
    Outcome, format, inputs, reader. Ask for the plan first. Check the file before it leaves your desk.
  </div>

  {% include block-nav.html prev="/block-01-setup/" prev_label="Block 1 · Set up" next="/block-03-reach/" next_label="Block 3 · Reach out" %}
</div>
