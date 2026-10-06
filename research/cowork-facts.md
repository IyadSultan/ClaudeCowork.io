# Claude Cowork: sourced facts (as of 2026-10-06)

Prepared for the 30-minute KHCC hands-on tutorial. All facts below come from Anthropic pages fetched on 2026-10-06. Items I could not confirm are in the last section. Help-center articles are updated often, so re-check the "Updated" date before teaching.

## 0. Headline: the product changed in the last 3 weeks

- **Sept 16, 2026: "Claude Cowork and chat are now one Claude."** On Pro and Max plans, there is no longer a Chat/Cowork switch. You describe the task in any conversation and Claude decides whether it is a quick answer or a multi-step task. Rolling out gradually to Pro and Max "over the next few weeks", with Team and Free "soon". Enterprise admins get at least 30 days' notice before anything changes. Team and Enterprise organizations keep separate Chat and Cowork for now.
  - https://claude.com/resources/articles/cowork-is-now-claude (redirect from https://claude.com/blog/cowork-is-now-claude)
  - https://support.claude.com/en/articles/16761823-claude-cowork-and-chat-are-one-claude
- **Oct 6, 2026 (today): Pro and Max Cowork tasks run in the cloud.** New Cowork tasks run on Anthropic's servers. The "Only on your computer" setting was removed. Tasks started on the computer before Oct 6 stay local until finished. Source: https://support.claude.com/en/articles/15520349-use-claude-cowork-on-web-desktop-and-mobile
- **Teaching consequence:** the UI a participant sees depends on plan and rollout stage. Screens in this deck may show a "Chat | Cowork" toggle (older, and still used on Team/Enterprise) or a single message box with an Auto/Manual permission setting (new). Check the participants' accounts before the session.

## 1. What Cowork is, versus Chat and Claude Code

- Cowork "brings Claude Code's agentic capabilities to knowledge work beyond coding", with no terminal. You describe an outcome, step away, and come back to finished work (formatted documents, organized files, synthesized research). Source: https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork
- Chat answers messages. Cowork works on files and tools, makes a plan, can run for a long time, and can coordinate parallel sub-agents. The product page states the same distinction: Chat responds to messages, Cowork accesses and modifies files in designated locations. https://claude.com/product/cowork
- Claude Code is the coding/terminal product. For work that must stay on your own computer, Anthropic now points to Claude Code in the desktop app ("For new tasks that run only on your computer, use Claude Code in the desktop app"). Source: the web/desktop/mobile article above.
- Timeline from the release notes (https://support.claude.com/en/articles/12138966-release-notes):
  - Jan 12, 2026: research preview, Claude Desktop macOS only, Max plans. Local, in an isolated VM.
  - Jan 16, 2026: expanded to Pro (macOS).
  - Jan 30, 2026: plugins announced (blog: https://claude.com/blog/cowork-plugins), 11 open-source plugins.
  - Feb 24, 2026: plugin marketplace and admin controls for Team/Enterprise.
  - Feb 25, 2026: scheduled tasks, and a "Customize" section grouping skills, plugins, connectors.
  - Mar 17, 2026: Dispatch (phone-to-desktop persistent thread), research preview for Pro/Max.
  - Mar 23, 2026: computer use research preview in Cowork and Claude Code.
  - Apr 9, 2026: generally available on macOS and Windows; adds Analytics API, usage analytics, OpenTelemetry, role-based access controls for Enterprise.
  - Jul 7, 2026: Cowork on web and mobile (sessions run remotely, in beta).
  - Aug 25, 2026: memory works across chat and Cowork in the cloud.
  - Sep 16, 2026: Cowork and chat merge (Pro/Max rollout).

## 2. Plans, platforms, availability

From https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork (Updated "today" when fetched):
- Paid plans only: Pro, Max, Team, Enterprise. (Free is not included for Cowork.)
- Claude Desktop for macOS: all paid plans. Claude Desktop for Windows: all paid plans (latest version required; claude.com/download).
- Web (claude.ai): Pro, Max, Team; Enterprise where an admin enabled it.
- Mobile (iOS/Android): Pro, Max, Team; Enterprise where enabled.
- Claude in Chrome side panel: Max and Team; rolling out to Pro; Enterprise where enabled.
- Linux: the built-in browser article mentions "Linux (beta)" for the desktop app, and Dispatch lists Linux. Not a main target for this audience.
- Cloud sessions are "in beta" on Team and Enterprise plans.
- Pricing shown on https://claude.com/product/cowork (page text): Pro $17/month annual or $20 monthly; Max 5x $100; Max 20x $200; Team $20 per seat per month (2 to 150 people, as shown); Enterprise custom. Verify at the time of purchase.

## 3. How to start

- Install or update Claude Desktop (claude.com/download). Older flow: open the app, use the mode selector in the message box, select "Cowork", describe the task, review the plan, let it run. Source: get-started article.
- New flow (Pro/Max after the merge): no selector. Just describe the task in any conversation. The Academy tutorial "Get started in Claude Cowork in three steps" is at https://claude.com/resources/tutorials/get-started-in-claude-cowork-in-three-steps (Claude Academy). I only confirmed its page title/preview image and links to connectors, plugins, projects and safety. I did not extract its three steps text.
- Anthropic's guidance for a good brief: state the desired outcome, the format (Word doc, slides, Slack message), and the inputs (files, links, apps). Source: https://support.claude.com/en/articles/16761823-claude-cowork-and-chat-are-one-claude
- Example prompts Anthropic itself lists: "Organize my Downloads folder by file type and date"; "Turn this analysis into a 10-slide deck"; "Every weekday at 8 AM, summarize new messages in my team's Slack channels."

## 4. Granting folder access

- On desktop, Claude "can read from and write to your local files without manual uploads." It can "only read and write files in folders you've connected." Source: get-started article.
- Safety guidance: use a dedicated working folder rather than broad access, and keep backups. Source: https://support.claude.com/en/articles/13364135-use-claude-cowork-safely
- In the merged experience, folders you gave Cowork access to are listed under "Trusted folders" in Settings; saved work is under "Storage folder". Source: the "one Claude" article.
- A cloud session reaches your folders through the desktop app, only while the app is open, only for connected folders. When a task needs a file, Claude fetches a copy of just that file to the cloud; copies are deleted when you delete the session. Source: web/desktop/mobile article.
- Folder instructions: when you select a local folder, you can add folder-specific instructions, and Claude can update them itself. Global instructions: Settings > Cowork > Edit (old UI) or Settings > General "Instructions for Claude" (new UI).
- Not verified: the exact wording/buttons of the folder-permission dialog on first use. No official screenshot of that dialog was found (see images.md).

## 5. How a task runs

Source: get-started article and architecture overview (https://support.claude.com/en/articles/14479288-claude-cowork-architecture-overview).
- Claude analyzes the request and makes a plan, splits complex work into subtasks, runs code and shell commands in an isolated environment, coordinates parallel workstreams (sub-agents), and delivers outputs to the session for preview and download.
- You see progress indicators and Claude's approach, and can steer mid-task. The product page screenshots show a right-hand panel with Progress, Outputs and Context (connectors used). Official images: see scheduled-tasks-progress-panel.png.
- Where it runs (now): in a temporary, isolated cloud sandbox on Anthropic's servers per session, no access to your network by default, egress through a mandatory proxy, short-lived credentials; connector tokens never enter the sandbox. It is destroyed when the session ends.
- Where it ran before (local sessions): the agent loop runs on the device and code runs in a dedicated Linux VM (Apple Virtualization.framework on macOS, Hyper-V on Windows). Local sessions remain only for work started before Oct 6, 2026 on Pro/Max, and for Team/Enterprise local deployments.
- Long tasks: "without conversation timeouts or context limits interrupting your progress."
- Mobile notification when a task finishes or needs input.

## 6. File outputs

- Excel spreadsheets with working formulas (VLOOKUP, conditional formatting, multiple tabs), PowerPoint decks, formatted documents; also PDFs and charts. Source: get-started article; skills article lists built-in Excel, Word, PowerPoint and PDF skills (https://support.claude.com/en/articles/12512180-use-skills-in-claude).
- Outputs can be edited further with Claude for Excel and Claude for PowerPoint add-ins.
- Sept 16, 2026: Claude Docs and Claude Slides (beta, paid plans) can be created in conversation; present from Claude or download as PowerPoint/PDF. Enterprise admins choose when to enable them. Source: the Sept 16 blog.
- "Edit with Claude": highlight text in a Markdown draft Claude wrote, click it, and type the change.
- Not verified: file size limits.

## 7. Connectors and MCP

- Connectors let Claude access apps and services (Google Drive, Gmail, Slack, Microsoft 365, Linear, etc.). Claude inherits the user's permissions in the source system. Any MCP-compatible service can be added as a custom connector. Source: https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities
- Where to add: Customize > Connectors (or "+" > Connectors > Manage connectors).
- Team/Enterprise: an Owner must enable a connector for the org, then each person authenticates individually.
- In Cowork, connectors reach services through Anthropic's cloud. A custom connector must be reachable from Anthropic's IP ranges over the public internet. A hospital-internal server behind a firewall is not reachable unless network requirements are met. Source: plugins article.
- Local MCP servers and desktop extensions run on your computer with your permissions and only work via the desktop app.
- Order Claude uses (computer-use article https://support.claude.com/en/articles/14128542-let-claude-use-your-computer-in-cowork): connector first, then browser, then screen interaction.

## 8. Browser: built-in browser and Claude in Chrome

Source: https://support.claude.com/en/articles/16607400-use-the-built-in-browser-in-claude-cowork
- The desktop app now has a built-in browser (rolling out "this week" when fetched; macOS, Windows, Linux beta; Pro, Max, Team; Enterprise where enabled). It opens in a side panel; Claude opens sites, reads, clicks, types and fills forms while you watch.
- If you already use Claude in Chrome, it stays the default; switch under Settings > Cowork > Preferred browser.
- Built-in browser is separate from your own browser and does not see your logins unless you import cookies (site by site; not from Safari). Anything you sign in to there is available to Claude in later sessions on that computer.
- Chrome side panel can itself start a Cowork session (Max/Team; rolling to Pro).
- Safeguards: permission before first action on a site, high-risk site blocklist, per-action safety checks. Anthropic "strongly advises against" using either browser for sensitive information, explicitly including medical information.
- Get started with Claude in Chrome: https://support.claude.com/en/articles/12012173-get-started-with-claude-in-chrome

## 9. Plugins

Source: https://support.claude.com/en/articles/13837440-use-plugins-in-claude and https://claude.com/blog/cowork-plugins
- A plugin bundles skills, connectors, slash commands and sub-agents for a role/team. Available on all paid plans; saved to your account, so they follow you into chat, Cowork and Claude Code. Hooks and sub-agents run in Cowork and Claude Code, not in chat.
- Install: Customize > Plugins > Discover > Add. Run a plugin command with "/" or "/plugin-name:command".
- Marketplace: a "Knowledge Work" marketplace is added by default; you can add Anthropic marketplaces (Life Sciences, Financial Services, Legal) or a Git repository. Launch set of 11 open-source plugins (Jan 30, 2026): Productivity, Enterprise search, Plugin Create/Customize, Sales, Finance, Data, Legal, Marketing, Customer support, Product management, Biology research. Developer portal for submitting plugins to the Claude directory (Sep 25, 2026 blog list).
- Customize: open an installed plugin, click "Customize"; Claude opens a task to adapt its skills and connectors. "Plugin Create" builds new plugins.
- Team/Enterprise: owners can distribute org marketplaces with four states (installed by default, available to install, required, not available). Enterprise adds group-level overrides, optional skill/plugin malware scanning at install, plugin sharing, and "Publish to org" with review. Source: plugins article and https://support.claude.com/en/articles/13455879-use-claude-cowork-on-team-and-enterprise-plans
- Risk: plugin-bundled local MCP servers run with your computer's permissions. Install only trusted ones.

## 10. Skills

Source: https://support.claude.com/en/articles/12512180-use-skills-in-claude
- Skills give Claude specialized instructions/workflows. Free, Pro, Max, Team, Enterprise; requires code execution and file creation to be enabled.
- Toggle under Customize > Skills. Anthropic built-ins: Excel, Word, PowerPoint, PDF. Custom skills: ZIP of a skill folder uploaded via Customize > Skills > + > Create skill > Upload a skill.
- Enterprise owners can provision skills org-wide.

## 11. Scheduled and recurring tasks

Source: https://support.claude.com/en/articles/13854387-schedule-recurring-tasks-in-claude-cowork
- All paid plans. Create by typing /schedule in a task, or Scheduled in the left sidebar > New task > "Create with Claude" or "Set up manually".
- Manual fields: task name, prompt, approval mode, frequency (hourly, daily, weekly, weekdays, manually), optional model, optional folder.
- Each run is its own Cowork session. Cloud schedules run with the computer off. Tasks that need local files or apps run locally only. Pre-Oct 6 local scheduled tasks keep running locally.
- Manage: pause, resume, delete, edit, run on demand, review past runs.
- Safety advice: start with low-risk summaries; do not schedule sensitive-file access or messages/purchases you cannot undo; review each run's output.

## 12. Projects, memory, global instructions

Sources: https://support.claude.com/en/articles/14116274-organize-your-tasks-with-projects-in-claude-cowork ; release notes ; one-Claude article
- Projects exist: own files, instructions, scheduled tasks, context (folder, linked chat project, URL) and memory scoped to the project. Create via Projects "+" : Start from scratch, Import a project from Chat, or Use an existing folder.
- Projects created from a local folder stay on that computer. Team/Enterprise can share projects (view/edit).
- Memory: Claude can use memory from chats in cloud Cowork tasks; per-task off switch in the "+" menu (must be set before the first message). Memory on by default for Free/Pro/Max, off by default for Team/Enterprise (release notes, Aug 25, 2026). Sensitive topics (e.g., health) stay out of memory unless "Include sensitive topics in memory" is turned on.
- Global instructions: apply to all sessions (see section 4).

## 13. Dispatch, mobile, and web

- Cowork on web and mobile: start, steer, review tasks; resume sessions across surfaces; scheduled tasks and projects work everywhere; local file access/browser/computer use from web/mobile work only through a running desktop app. Source: web/desktop/mobile article.
- Dispatch (phone message drives your desktop, one persistent thread): limited beta for Pro/Max. **"Dispatch isn't available to new users"** as of the fetch; existing users keep it. Requires desktop awake and app open. Source: https://support.claude.com/en/articles/13947068-assign-tasks-from-anywhere-in-claude-cowork . Do not demo Dispatch to new users.
- Computer use (Claude clicks, types, navigates your screen): beta on Pro/Max, macOS and Windows. Asks permission per app; some apps off-limits by default; takes screenshots. Not available on Team/Enterprise per the help text (it says "in beta for Pro and Max plans"); I did not find an explicit Team/Enterprise statement.

## 14. Safety

Sources: https://support.claude.com/en/articles/13364135-use-claude-cowork-safely ; get-started article
- Permission modes (get-started article): Manual (default; asks before actions), Auto ("Automatically approve"; Claude reviews each action for exfiltration/prompt injection and blocks unsafe ones; uses more of your usage limit), Skip ("Skip all approvals"; no checks, use only when you fully trust everything). Older names: "Ask before acting"/"Act without asking".
- Deletion protection: Claude asks explicit permission before permanently deleting files, in any mode.
- Prompt injection: attacker text in web pages, email or documents can hijack Claude when it can both read untrusted content and take actions. Mitigations: model training, content classifiers, auto-mode action screening, deletion protection. Anthropic says the risk is "non-zero".
- Anthropic's own advice: avoid granting access to files with sensitive information (financial documents, credentials, personal records); be deliberate about sites Claude works in; use Manual mode for sensitive files/accounts, new tools/plugins, and hard-to-undo actions; watch for unexpected files/sites/scope creep; stop the task if something looks off; keep backups.
- Computer use: block sensitive apps (healthcare portals, banking); "We strongly advise against" using it for medical or health information or other people's personal information.
- Built-in browser/Chrome: "strongly advise against" using them for sensitive information including medical information.
- You remain responsible for everything Claude does on your behalf.
- Data location: cloud sessions are processed on Anthropic's servers, including local files opened through the desktop app. Delete a task via the "⋮" menu; removed from history immediately and from backend storage within 30 days. Whether chats are used to improve models follows Settings > Privacy (consumer plans). On Team/Enterprise: "isn't used to train Claude".
- Usage limits: multi-step tasks use more usage than chat. Tips: group related work in one task, new conversation for unrelated work, check Settings > Usage; auto mode uses more. Exact numbers are not published in the articles I read.

## 15. Enterprise/admin controls and compliance (relevant to a hospital)

Sources: https://support.claude.com/en/articles/13455879-use-claude-cowork-on-team-and-enterprise-plans ; https://support.claude.com/en/articles/14479288-claude-cowork-architecture-overview
- Org-wide Cowork toggle (Organization settings > Cowork); separate toggle for cloud sessions (Team: on by default; Enterprise: off by default, then grant by group/custom role). Built-in browser toggle; "Automatically approve" mode toggle; "Always allow" for connector write tools (off by default); trusted-device enrollment and recent sign-in requirement for cloud sessions; MDM keys isLocalDevMcpEnabled and isDesktopExtensionEnabled; web search can be disabled org-wide.
- **HIPAA:** in HIPAA-enabled organizations, Cowork is off by default (an Owner must turn it on). On a HIPAA-ready Enterprise plan, a BAA covers Cowork only after the Primary Owner applies the HIPAA configuration to Claude Code (local mode) and Cowork (local mode), and with that configuration Cowork in the cloud is not available. Without it, Cowork is available but not covered by the BAA. (HIPAA is a US framework; applicability to KHCC is a legal/policy question I did not research.)
- Monitoring: Compliance API captures Cowork sessions from Claude, Desktop and Mobile; OpenTelemetry streaming of tool calls, file access and approvals to a SIEM ("doesn't replace audit logging for compliance purposes"); usage analytics and Analytics API.
- Limits: local-session history is stored on the user's computer, outside standard retention, and admins cannot centrally delete it (deletion endpoints for local sessions "aren't available yet"). EDR tools cannot inspect activity inside the local VM or cloud sandbox.
- Network egress settings apply at session creation; they do not apply to web fetch/search or MCPs including Claude in Chrome.

## 16. Keyboard tips and small interface tips

- Type "/" or click "+" to see skills and plugin commands; "/plugin-name:command" in Cowork; "/schedule" to schedule; "/deep-research" (new experience). Sources: plugins article, schedule section of get-started article, one-Claude article.
- Quick entry (Claude Desktop, Mac): double-tap Option to open Claude from any app (default; can change to Option+Space or a custom shortcut); Caps Lock for voice dictation; screenshots and Caps Lock voice are Mac-only. Windows/Linux: a keyboard shortcut brings up Claude. Settings > General (Desktop app). Source: https://support.claude.com/en/articles/12626668-use-quick-entry-with-claude-desktop-on-mac (via search summary; I did not read the full article).
- Click "⋮" next to a task to delete it.
- No Cowork-specific keyboard shortcut list was found.

## 17. Known limitations (from Anthropic)

- Sessions cannot be shared with others (individual artifacts can be shared).
- Plugins with local MCP servers and old live artifacts work in the desktop app only.
- Cloud mode on Team/Enterprise is beta; some features not available there.
- Local file/browser/computer use need the desktop app open and the computer awake.
- Dispatch: single thread, computer must be awake, closed to new users.
- New merged experience: "Add from GitHub" unsupported; no conversation branching; incognito chats open in the previous experience and cannot create files or run code; search does not include older Cowork tasks.
- Computer use is a research/beta feature and has no sandbox between Claude and your screen.
- Usage limits are hit faster with agentic tasks.

## 18. Could not verify

- The exact first-run folder-permission dialog and its wording (no official screenshot found).
- Official screenshots of: the Cowork tab/home in Desktop, the "To-do/Progress" panel at full resolution, the safety/permission-mode selector, the Scheduled tasks page, the deletion confirmation prompt. Only marketing composites and some cropped dialogs were available.
- Which tier and rollout stage each KHCC account is on (determines Chat/Cowork toggle vs merged UI).
- Whether KHCC's organization is Team or Enterprise, and its admin settings.
- Windows-specific differences beyond "latest version required".
- Exact usage-limit quotas.
- The Claude Academy three-step tutorial text.
- Whether Cowork is available/legal for patient data at KHCC. Anthropic's pages advise against sensitive/medical information in browser and computer use and recommend avoiding sensitive files. KHCC's own policy (and the AIDI MRN/PHI rules) should decide; use de-identified or synthetic files in the tutorial.
