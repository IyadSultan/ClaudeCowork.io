---
layout: default
title: "Block 5 — Put it on a schedule"
permalink: /block-05-schedule/
---

<div class="block-page block-page-wide">
  <div class="block-eyebrow">
    <span class="block-time tone-teal">00:23</span>
    <span class="block-kicker">Block 5 &middot; 3 minutes</span>
  </div>
  <h1>Put it on a schedule</h1>

  <p class="demo-lead">A task that works once can run every week. Each run is its own Cowork session. Cloud schedules run with your laptop closed; tasks that need local files run only when the desktop app is open.</p>

  <h2>Two ways to schedule</h2>
  <ol class="cw-steps">
    <li><strong>From a task:</strong> type <code>/schedule</code> in a session that already worked, and say how often.</li>
    <li><strong>From the sidebar:</strong> <strong>Scheduled &rarr; New task</strong>, then <strong>Create with Claude</strong> or <strong>Set up manually</strong>: name, prompt, approval mode, frequency (hourly, daily, weekdays, weekly, or manual), optional model and folder.</li>
  </ol>

  {% include shot.html src="scheduled-tasks-progress-panel.png" alt="A Cowork session that has just created two scheduled tasks, with the Progress, Outputs and Context panel on the right" caption="A session that set up two recurring tasks." source="https://claude.com/product/cowork" %}

  <pre class="cw-prompt">/schedule
Run this weekly, on Sunday morning:
Read any new minutes added to my practice folder this week.
Update actions.xlsx: add new action items, mark items past their due date as "Overdue".
Write a five-line digest of what changed to digest-YYYY-MM-DD.md.
Do not send anything to anyone.</pre>

  <p>Manage schedules from the <strong>Scheduled</strong> page: pause, resume, edit, run now, delete, and read past runs.</p>

  <div class="cw-dodont">
    <div class="cw-do">
      <strong class="head">Good first schedules</strong>
      <ul>
        <li>Weekly digest of new files in a folder</li>
        <li>Monday summary of the week's committee calendar</li>
        <li>Monthly refresh of a tracker spreadsheet</li>
      </ul>
    </div>
    <div class="cw-dont">
      <strong class="head">Not on a schedule</strong>
      <ul>
        <li>Anything that sends email or messages for you</li>
        <li>Anything that deletes or overwrites files</li>
        <li>Anything that touches sensitive files</li>
      </ul>
    </div>
  </div>

  <h2>Why a schedule works well: one worked example</h2>
  <p>Jeff Su runs an inbox triage every morning at 6:00. It works because three earlier pieces are already in place:</p>
  <ol class="cw-steps">
    <li><strong>Rules in a file.</strong> His triage rules sit in a Markdown file in the folder (Block 1).</li>
    <li><strong>A connector.</strong> Gmail is connected, so Cowork can read new mail (Block 3).</li>
    <li><strong>Memory.</strong> For the first week he corrected the drafts; <code>memory.md</code> kept every correction, so later drafts sound like him (Block 1).</li>
  </ol>
  <p>KHCC version: a weekly digest of new committee minutes, with action items checked against the tracker and <strong>draft</strong> reminders to owners that you read and send yourself. No patient email, no automatic sending.</p>
  {% include vid.html t="1004" at="16:44" note="scheduled inbox triage" %}

  <h2>What about Dispatch?</h2>
  <p>Dispatch lets you text a task from your phone to your desktop. It is closed to new users, so we skip it today. Cowork on the web and the phone app is available; it can start, steer and review tasks.</p>

  <div class="callout callout-takehome">
    Schedule only what already worked by hand. Read every run's output, at least for the first month.
  </div>

  {% include block-nav.html prev="/block-04-plugins/" prev_label="Block 4 · Skills and plugins" next="/block-06-safety/" next_label="Block 6 · Safe use at KHCC" %}
</div>
