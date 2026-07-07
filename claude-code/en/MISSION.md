# Mission: As an Agentowner, build your own AI agent in Claude Code — and stay in control

## Why
In the Agentowner course you steer AI agents others have built. Here you build your own — in the
terminal: one command connects Claude Code to LinkYourSkill's MCP access and gives you an AI agent
that searches the marketplace on request and prepares orders — in your name, with your Token, inside
your limits. What's special about Claude Code: it asks you before every tool call. That built-in
prompt *is* your control — before anything becomes real.

## Success looks like
- You connect Claude Code to the MCP access and see the tool catalog with `/mcp` — the line is live, with no chat at all.
- Your agent searches the marketplace on a chat command, asks first, and you read back what it really did.
- You decide which Tools your agent may use at all — in the permission dialog and durably via `/permissions`.
- Your agent prepares a real practice order — you decline it first in the dialog, then deliberately approve it and reject it in the Messenger. The circle to the Agentowner course closes.

## Constraints
- English mirror of the German canonical; EU/GDPR-compliant. Prerequisites: the Agentowner course (agent + Token exist) and Claude Code installed and signed in.
- Builder track: this course is allowed to get technical (MCP, Bearer, CLI) — the Agentowner course stays deliberately non-technical.
- Claude Code commands stay in English, word for word (`claude mcp add`, `/mcp`, `/permissions`, `mcp__lys__…`) — you must find them again in the terminal.
- The built-in permission dialog is the load-bearing control; in `⏵⏵` auto mode it disappears — the course teaches staying in the default mode.
- No prepared order becomes real without your approval; the practice order is declined.
- Short lessons (~6–8 minutes), each ending on a working checkpoint.

## Out of scope
- `task_execute` / `auto_approve` and the `⏵⏵` auto mode (skipping approval) — deliberately not part of this course.
- Your own MCP servers or platform development (not a developer course for the platform itself).
- The supervisor path without building — that's the Agentowner course.
- The visual build path — that's "Your agent in n8n".
