---
layout: default
title: "Block 3 — Reach out: connectors, browser, computer use"
permalink: /block-03-reach/
---

<div class="block-page block-page-wide">
  <div class="block-eyebrow">
    <span class="block-time tone-magenta">00:14</span>
    <span class="block-kicker">Block 3 &middot; 4 minutes</span>
  </div>
  <h1>Reach out: connectors, browser, computer use</h1>

  <p class="demo-lead">Files are only half the job. Cowork can also reach the apps you use. It tries three routes, in this order: a <strong>connector</strong> first, then a <strong>browser</strong>, then <strong>your screen</strong>. Each step down is slower and riskier.</p>

  <div class="cw-compare">
    <div class="cw-compare-card">
      <span class="tag">Route 1 &middot; best</span>
      <h3>Connectors</h3>
      <p>A direct, permissioned link to an app: Microsoft 365, Gmail, Google Drive, Slack and many more. Any service that speaks MCP can be added as a custom connector.</p>
      <p><strong>Customize &rarr; Connectors</strong>, or <strong>+ &rarr; Connectors</strong>.</p>
    </div>
    <div class="cw-compare-card is-magenta">
      <span class="tag">Route 2</span>
      <h3>Browser</h3>
      <p>The built-in browser opens in a side panel; Claude reads, clicks and fills forms while you watch. Claude in Chrome does the same in your own Chrome.</p>
      <p>Asks permission before acting on each new site.</p>
    </div>
    <div class="cw-compare-card is-gold">
      <span class="tag">Route 3 &middot; last resort</span>
      <h3>Computer use</h3>
      <p>Claude moves the mouse and types in your desktop apps. Beta, Pro and Max only. Asks per app, per session.</p>
      <p>No sandbox between Claude and your screen.</p>
    </div>
  </div>

  <div class="demo-preset-row" data-stages="s3-" role="group" aria-label="Screens">
    <button type="button" class="demo-chip">Connector</button>
    <button type="button" class="demo-chip">Browser</button>
    <button type="button" class="demo-chip">Computer use</button>
  </div>

  <div class="demo-stage" id="s3-0">
    <p class="demo-stage-kicker">Connectors carry your own permissions</p>
    <p class="demo-stage-copy">Claude sees only what your account can see in that app. On Team and Enterprise an owner switches a connector on for the organization, then each person signs in.</p>
    <p class="demo-stage-copy">Cloud tasks reach connectors through Anthropic's servers. A KHCC server behind the hospital firewall is not reachable this way, which is the point: clinical systems stay inside.</p>
    <pre class="cw-prompt">From my Outlook calendar, list every committee meeting in the next four weeks. For each one, find the latest minutes in my practice folder and write a one-paragraph brief. Save as meeting-briefs.docx.</pre>
  </div>

  <div class="demo-stage" id="s3-1" hidden>
    <p class="demo-stage-kicker">Built-in browser</p>
    {% include shot.html src="built-in-browser-pricing.jpg" alt="Cowork task titled Pricing Comparison on the left, with a browser side panel on the right showing a sample pricing page" caption="A Cowork task using the built-in browser in a side panel (Anthropic product image)." source="https://claude.com/product/cowork" %}
    <p class="demo-stage-copy">The built-in browser does not see your logins unless you import cookies site by site. Anything you sign in to there stays available to Claude in later sessions on that computer. If you already use Claude in Chrome, it stays the default: <strong>Settings &rarr; Cowork &rarr; Preferred browser</strong>.</p>
    <pre class="cw-prompt">Open the NCCN and ESMO public guideline pages for febrile neutropenia. Make a two-column table of what each says about first-line empirical therapy, with links. Public pages only; do not sign in anywhere.</pre>
  </div>

  <div class="demo-stage" id="s3-2" hidden>
    <p class="demo-stage-kicker">Computer use asks first</p>
    {% include shot.html src="computer-use-permission.png" alt="Turn on computer use warning dialog, and a prompt reading Claude wants to use Finder, Chrome and the clipboard, with Deny and Allow for this session buttons" caption="The computer-use warning and the per-app permission prompt." source="https://claude.com/blog/dispatch-and-computer-use" %}
    <p class="demo-stage-copy">Allow only the app the task needs, for this session only. Block clinical and finance apps outright.</p>
  </div>

  <div class="demo-nav-row">
    <button type="button" class="btn btn-primary" id="s3-next">Next</button>
    <p class="demo-status" id="s3-status" role="status"></p>
  </div>

  <div class="callout callout-safety">
    Anthropic itself advises against using the browser or computer use for medical information. Never point either at the EMR, VISTA, the lab system, or a patient portal.
  </div>

  <div class="callout callout-takehome">
    Connector first, browser second, screen last. Each step down: slower, riskier, more of your usage.
  </div>

  {% include block-nav.html prev="/block-02-first-task/" prev_label="Block 2 · Your first task" next="/block-04-plugins/" next_label="Block 4 · Skills and plugins" %}
</div>
