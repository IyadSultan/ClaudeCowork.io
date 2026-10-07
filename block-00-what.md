---
layout: default
title: "Block 0 — What Cowork is"
permalink: /block-00-what/
---

<div class="block-page block-page-wide">
  <div class="block-eyebrow">
    <span class="block-time tone-grey">00:00</span>
    <span class="block-kicker">Block 0 &middot; 3 minutes</span>
  </div>
  <h1>What Cowork is</h1>

  <p class="demo-lead">Chat answers a message. Cowork takes an outcome (&ldquo;turn these minutes into a slide deck&rdquo;), makes a plan, works on your files and apps for as long as it needs, and hands back a finished file. Anthropic describes it as Claude Code's agent abilities brought to knowledge work, with no terminal.</p>

  <div class="cw-compare">
    <div class="cw-compare-card">
      <span class="tag">Talk</span>
      <h3>Chat</h3>
      <p>You ask, it answers. You copy the answer somewhere else.</p>
      <ul>
        <li>Questions, drafts, explanations</li>
        <li>One reply at a time</li>
      </ul>
    </div>
    <div class="cw-compare-card is-magenta">
      <span class="tag">Delegate</span>
      <h3>Cowork</h3>
      <p>You describe the outcome. It plans, works, and delivers files.</p>
      <ul>
        <li>Reads and writes in folders you connect</li>
        <li>Uses connectors, a browser, skills, plugins</li>
        <li>Runs long tasks, splits work across sub-agents</li>
        <li>Can repeat on a schedule</li>
      </ul>
    </div>
    <div class="cw-compare-card is-gold">
      <span class="tag">Build</span>
      <h3>Claude Code</h3>
      <p>The same agent for software: code, terminals, repositories.</p>
      <ul>
        <li>For developers and data teams</li>
        <li>Anthropic's pick for work that must stay on your own computer</li>
      </ul>
    </div>
  </div>

  <h2>Same request, two ways</h2>
  <p>Chat gets <strong>task-first</strong> wording: tell it what to do, then do the work yourself. Cowork gets <strong>outcome-first</strong> wording: the end result, the limits, and how good it must be.</p>
  <div class="cw-compare">
    <div class="cw-compare-card">
      <span class="tag">Chat &middot; task first</span>
      <p>&ldquo;Look at my committee minutes and suggest a naming convention and folder structure.&rdquo;</p>
      <p><em>You get advice in text. You move the files.</em></p>
    </div>
    <div class="cw-compare-card is-magenta">
      <span class="tag">Cowork &middot; outcome first</span>
      <p>&ldquo;I have 15 minutes files in this folder. I need them in one subfolder per committee, renamed YYYY-MM-DD_committee. Ask before moving anything.&rdquo;</p>
      <p><em>A few minutes later the folder is done.</em></p>
    </div>
  </div>
  <p>Two practical differences, as Jeff Su describes them: Chat uploads files to the cloud, with a cap of 20 files per conversation and 30 MB per file, while Cowork reads files directly in your folder. Chat also leaves the result in the chat window, while Cowork saves the finished file in your folder.</p>
  {% include vid.html t="25" at="00:25" %}

  {% include shot.html src="cowork-home-desktop.png" alt="Claude Desktop home screen. Under the message box, a switch reads Chat and Cowork, with Cowork selected. The sidebar lists New, Projects, Artifacts, Scheduled, Dispatch and Customize." caption="The Chat | Cowork switch in Claude Desktop. Team and Enterprise accounts still see this switch." %}

  <h2>What changed in September and October 2026</h2>
  <ul class="cw-steps">
    <li><strong>16 Sept: &ldquo;Cowork and chat are one Claude.&rdquo;</strong> On Pro and Max the switch is being removed, a few accounts at a time. You type the task in any conversation and Claude decides whether it needs a quick answer or a multi-step job.</li>
    <li><strong>6 Oct: new Pro and Max Cowork tasks run in Anthropic's cloud.</strong> They keep running when your laptop is closed. Your folders are reached through the desktop app, one file at a time, and only while the app is open.</li>
    <li><strong>Team and Enterprise</strong> keep the separate Chat and Cowork switch for now. Admins get 30 days' notice before it changes.</li>
  </ul>

  <div class="callout callout-takehome">
    Use Chat when you need an answer. Use Cowork when you need a finished file or a job done across several files or apps.
  </div>

  {% include block-nav.html prev="/" prev_label="Run of show" next="/block-01-setup/" next_label="Block 1 · Set up" %}
</div>
