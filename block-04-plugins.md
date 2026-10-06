---
layout: default
title: "Block 4 — Skills and plugins"
permalink: /block-04-plugins/
---

<div class="block-page block-page-wide">
  <div class="block-eyebrow">
    <span class="block-time tone-gold">00:18</span>
    <span class="block-kicker">Block 4 &middot; 5 minutes</span>
  </div>
  <h1>Skills and plugins</h1>

  <p class="demo-lead">A <strong>skill</strong> is a saved briefing: instructions (and sometimes a script) that Claude loads when the job calls for it. A <strong>plugin</strong> is a bundle for a whole role: several skills, slash commands, connectors and sub-agents in one install.</p>

  <div class="cw-compare">
    <div class="cw-compare-card">
      <span class="tag">One job</span>
      <h3>Skill</h3>
      <ul>
        <li>A Markdown file with a short header</li>
        <li>Built in: Word, Excel, PowerPoint, PDF</li>
        <li>Yours: <strong>Customize &rarr; Skills &rarr; +</strong></li>
        <li>Upload a skill as a ZIP of its folder</li>
      </ul>
    </div>
    <div class="cw-compare-card is-gold">
      <span class="tag">One role</span>
      <h3>Plugin</h3>
      <ul>
        <li>Skills + commands + connectors + sub-agents</li>
        <li><strong>Customize &rarr; Plugins &rarr; Discover &rarr; Add</strong></li>
        <li>Run with <kbd>/</kbd> or <code>/plugin-name:command</code></li>
        <li>Follows your account into chat and Claude Code</li>
      </ul>
    </div>
  </div>

  <div class="demo-preset-row" data-stages="s4-" role="group" aria-label="Plugin steps">
    <button type="button" class="demo-chip">Browse</button>
    <button type="button" class="demo-chip">Run</button>
    <button type="button" class="demo-chip">Look inside</button>
    <button type="button" class="demo-chip">Make your own</button>
  </div>

  <div class="demo-stage" id="s4-0">
    <p class="demo-stage-kicker">Browse the directory</p>
    {% include shot.html src="plugins-browse-directory.png" alt="Browse plugins dialog with tabs By Anthropic, Your organization and Personal, and cards for Enterprise search, Finance, Legal, Marketing, Product management and Productivity" caption="Browse plugins. The Your organization tab holds plugins KHCC publishes for staff." source="https://support.claude.com/en/articles/13837440-use-plugins-in-claude" %}
    <p class="demo-stage-copy">The Knowledge Work marketplace is added by default. Anthropic also publishes Life Sciences, Financial Services and Legal marketplaces. Install only from sources you trust: plugins that bundle a local server run with your computer's permissions.</p>
  </div>

  <div class="demo-stage" id="s4-1" hidden>
    <p class="demo-stage-kicker">Run a plugin command</p>
    {% include shot.html src="plugins-slash-menu-data.png" alt="The plus menu open on Plugins, then Data, listing the Data plugin's commands and skills" caption="Plus &rarr; Plugins &rarr; Data shows every command the plugin adds." source="https://support.claude.com/en/articles/13837440-use-plugins-in-claude" %}
    <p class="demo-stage-copy">Type <kbd>/</kbd>, pick one of the Data plugin's commands from the list, then add your question:</p>
    <pre class="cw-prompt">Use quality-counts.csv. Which indicator moved most in August 2026, and is it outside its usual range?</pre>
  </div>

  <div class="demo-stage" id="s4-2" hidden>
    <p class="demo-stage-kicker">Look inside a plugin</p>
    {% include shot.html src="plugins-customize-panel.png" alt="Plugins panel listing Local Plugins Sales and Marketing, with sections for Commands, Skills, Agents and Connectors, and a SKILL.md file open" caption="Inside a plugin: commands, skills, agents and connectors. Click Customize and Claude adapts it to your team." source="https://claude.com/blog/cowork-plugins" %}
  </div>

  <div class="demo-stage" id="s4-3" hidden>
    <p class="demo-stage-kicker">Turn a habit into a skill</p>
    <p class="demo-stage-copy">Anything you have briefed three times is a skill. Ask Cowork to write it, then save it under Customize &rarr; Skills.</p>
    <pre class="cw-prompt">Write me a skill called committee-minutes.
When I give it raw meeting notes, it should produce KHCC-style minutes:
- header with committee, date, chair (no attendee names)
- decisions numbered, each with owner role and due date
- an "Open from last meeting" section
- a closing line with the next meeting date
It must flag any patient identifier and refuse to include it.
Save it as a skill folder I can upload.</pre>
  </div>

  <div class="demo-nav-row">
    <button type="button" class="btn btn-primary" id="s4-next">Next</button>
    <p class="demo-status" id="s4-status" role="status"></p>
  </div>

  <div class="callout callout-note">
    Team and Enterprise owners can push plugins to everyone: installed by default, available, required, or blocked. Enterprise can scan skills and plugins for malware at install.
  </div>

  <div class="callout callout-takehome">
    Brief it three times, then save it as a skill. A plugin is many skills for one role.
  </div>

  {% include block-nav.html prev="/block-03-reach/" prev_label="Block 3 · Reach out" next="/block-05-schedule/" next_label="Block 5 · Schedule it" %}
</div>
