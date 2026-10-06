---
layout: default
title: "Block 1 — Set up: app, folder, project, instructions"
permalink: /block-01-setup/
---

<div class="block-page block-page-wide">
  <div class="block-eyebrow">
    <span class="block-time tone-teal">00:03</span>
    <span class="block-kicker">Block 1 &middot; 5 minutes</span>
  </div>
  <h1>Set up: app, folder, project, instructions</h1>

  <p class="demo-lead">Five steps, done once. After that every task starts in the right folder with your rules already loaded.</p>

  <div class="demo-preset-row" data-stages="s1-" role="group" aria-label="Setup steps">
    <button type="button" class="demo-chip">Install</button>
    <button type="button" class="demo-chip">Open Cowork</button>
    <button type="button" class="demo-chip">Folder</button>
    <button type="button" class="demo-chip">Project</button>
    <button type="button" class="demo-chip">Instructions</button>
  </div>

  <div class="demo-stage" id="s1-0">
    <p class="demo-stage-kicker">Install Claude Desktop</p>
    <p class="demo-stage-copy">Download from <a href="https://claude.com/download" target="_blank" rel="noopener">claude.com/download</a> (macOS or Windows, latest version). Cowork needs a paid plan: Pro, Max, Team or Enterprise. Free accounts do not get it. On Enterprise an admin must switch Cowork on for the organization first.</p>
    <p class="demo-stage-copy">Cowork also works on the web and the phone app. Those sessions run in the cloud and can reach your files only through a desktop app that is open.</p>
  </div>

  <div class="demo-stage" id="s1-1" hidden>
    <p class="demo-stage-kicker">Find Cowork</p>
    <p class="demo-stage-copy"><strong>Older layout (Team, Enterprise):</strong> under the message box, click <strong>Cowork</strong> in the Chat | Cowork switch.</p>
    <p class="demo-stage-copy"><strong>New layout (Pro, Max after the merge):</strong> there is no switch. Describe the task in any conversation.</p>
    {% include shot.html src="cowork-home-desktop.png" alt="Message box with a plus button, the Chat and Cowork switch, and the model picker set to Sonnet 5" caption="Plus button for files and plugins, the Chat | Cowork switch, and the model picker." %}
  </div>

  <div class="demo-stage" id="s1-2" hidden>
    <p class="demo-stage-kicker">Give it one working folder</p>
    <p class="demo-stage-copy">Cowork can read and write only in folders you connect. Make a new, empty folder for this course, for example <code>Documents/Cowork-KHCC</code>, and connect only that one. Do not connect Desktop, Downloads or your whole drive.</p>
    <p class="demo-stage-copy">Folders you have connected show under <strong>Settings &rarr; Trusted folders</strong>. You can remove them there.</p>
    <div class="callout callout-safety">The folder you connect must hold synthetic or de-identified files only. No MRNs, names, or national numbers.</div>
  </div>

  <div class="demo-stage" id="s1-3" hidden>
    <p class="demo-stage-kicker">Make a project</p>
    <p class="demo-stage-copy">A project keeps files, instructions, scheduled tasks and memory for one piece of work. Sidebar &rarr; <strong>Projects</strong> &rarr; <strong>+</strong>. Pick <strong>Use an existing folder</strong> and choose your course folder.</p>
    {% include shot.html src="project-create-options.png" alt="Create a new project dialog with three options: Start from scratch, Import a project, Use an existing folder" caption="Three ways to start a project." source="https://support.claude.com/en/articles/14116274-organize-your-tasks-with-projects-in-claude-cowork" %}
    {% include shot.html src="project-existing-folder-details.png" alt="Use an existing folder dialog with project name, instructions box, add files and Create button" caption="Name it, add project instructions, click Create. Projects made from a local folder stay on that computer." source="https://support.claude.com/en/articles/14116274-organize-your-tasks-with-projects-in-claude-cowork" %}
  </div>

  <div class="demo-stage" id="s1-4" hidden>
    <p class="demo-stage-kicker">Write your standing instructions</p>
    <p class="demo-stage-copy">Global instructions apply to every session: <strong>Settings &rarr; Cowork &rarr; Edit</strong> in the older layout, <strong>Settings &rarr; General &rarr; Instructions for Claude</strong> in the new one. Keep them short.</p>
    {% include shot.html src="global-instructions.png" alt="Global instructions text box reading Add instructions for Claude to follow in all Cowork sessions, with Cancel and Save buttons" caption="The global instructions box." source="https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork" %}
    <pre class="cw-prompt">I work at King Hussein Cancer Center, Amman.
Write in plain English, short sentences, British spelling.
Save every output in the folder I connected, never elsewhere.
Ask before deleting, moving, or overwriting any file.
If a file looks like it holds patient identifiers (MRN, name, national number), stop and tell me.
Use the KHCC colours for slides: teal #237A9B, gold #E4B325, magenta #B6447D.</pre>
  </div>

  <div class="demo-nav-row">
    <button type="button" class="btn btn-primary" id="s1-next">Next</button>
    <p class="demo-status" id="s1-status" role="status"></p>
  </div>

  <div class="callout callout-takehome">
    One folder, one project, five lines of instructions. Set them once; every later task inherits them.
  </div>

  {% include block-nav.html prev="/block-00-what/" prev_label="Block 0 · What Cowork is" next="/block-02-first-task/" next_label="Block 2 · Your first task" %}
</div>
