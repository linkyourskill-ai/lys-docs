---
name: verify-course-content
description: Audit this repo's course lessons against the LinkYourSkill platform's internal docs and report factual drift. Use when the user wants to verify, sync, or fact-check the lys-docs content against the platform source of truth, or after the platform changes.
---

This is an **audit**, not a sync: it hunts factual **drift** between the course and the platform, writes a **ledger** of findings, and changes no lesson. You decide the fixes.

The course lives in this repo (`lys-docs`): five tracks — `customer`, `agentowner`, `skillanbieter` (persona tracks) and `n8n`, `claude-code` (builder tracks) — each a set of `de/` and `en/` **lessons** plus `MISSION.md` and `index.html`. The **source of truth** is the platform's internal docs at `~/workspace/linkyourskill.ai/docs`. Sibling teaching skill: `lys-teach`.

## Source of truth & precedence

The whole audit turns on this. Read it before assigning any verdict.

- The platform docs are the reference. A DE claim they refute is **COURSE-WRONG**.
- The docs are not infallible — they lag production too. When a doc contradicts the live-verified ground-truth memory `[[lys-platform-ground-truth]]`, that gap is a **SOURCE-CONFLICT**: record it and leave the course copy alone. Never rewrite correct course copy to match a stale doc.
- A lesson that teaches *around* a known production bug is correct pedagogy — the docs' happy-path is the SOURCE-CONFLICT, not the lesson. Known bugs live in `[[lys-platform-ground-truth]]`; the standing three are literal-only `search_skillanbieter`, messenger approval delivery broken on prod, and token rotation orphaning old orders. Recall that memory fresh each run — production drifts.
- Count-free copy is correct even when a doc cites a number. The tool-catalog count drifts; an earlier hardcoded "18" already went stale.

## The audit

1. **Assemble the audit set.** Name every in-scope DE file: the lessons under `de/lessons/` for all five tracks, each track's `de/MISSION.md` and `de/index.html`, and top-level `GLOSSARY.md`, `RESOURCES.md`, `README.md`, `index.html`. Done when the list is written out and every in-scope DE file appears in it by name.

2. **Load the source of truth.** Read `~/workspace/linkyourskill.ai/docs/index.md` for the doc map, and recall `[[lys-platform-ground-truth]]` for the known docs↔reality conflicts. Done when you can name which docs cover each track (see routing map) and hold the current known-conflict list.

3. **Audit each track against the docs — fan out.** Spawn one read-only reader per track (five, in parallel — inline subagents via the Agent tool, *not* a billed Workflow unless the user asks). Each reader, for its track: extracts every checkable claim from the DE files, cross-references each against the mapped docs, assigns a verdict + severity, and checks whether each EN twin states the same facts as its DE original (drift). It returns a per-track ledger. Done when every checkable claim in every DE file carries a verdict **and** every EN lesson has a drift result — no file unread, no claim unjudged.

4. **Consolidate.** Merge the five ledgers into one. A claim that recurs across tracks (the MCP endpoint, search behavior) collapses to a single row listing all its sites. Done when one ledger holds every finding, each traceable to its file.

5. **Report.** Write `./CONTENT-AUDIT.md`: a ledger table — *file · course says · docs say · verdict · severity* — grouped by severity then track, above a one-line run header (sources, date, file count). Leave every lesson file exactly as found. Then summarize the high-severity COURSE-WRONG and SOURCE-CONFLICT rows inline in chat. Done when `CONTENT-AUDIT.md` holds every finding, names no secret, and the inline summary lists the high-sev items.

## Verdicts

Per claim, one of: **OK** (correct — omit from the report), **COURSE-WRONG** (docs refute it, and docs agree with ground-truth), **SOURCE-CONFLICT** (docs and ground-truth disagree — course untouched), **MISLEADING-OMISSION** (a taught topic drops a caveat that would trip a learner — e.g. teaching search without its literal-match behavior, or a finale resting on the broken approval delivery), **UNVERIFIABLE** (no doc speaks to it). Severity: **high / med / low**.

## What is a checkable claim

Anything a doc can confirm or refute: the MCP endpoint and tool names/args, required order fields, the order state machine and events, search behavior, prices, auth/token wire shapes, the messenger/approval flow, glossary definitions. Narrative, motivation, and tone are out of scope — pass over them.

## Doc routing map

| Course area | Primary docs |
|---|---|
| `n8n`, `claude-code` (builder) | `mcp-guide.md`, `api-reference.md`, `api-parity-matrix.md`, `architecture.md`, `internal-api-contracts.md`, `messenger-adapter.md` |
| `customer` | `journeys/customer.md`, `architecture.md`, `api-reference.md` |
| `agentowner` | `journeys/agentowner.md`, `messenger-adapter.md`, `architecture.md`, `security.md` |
| `skillanbieter` | `journeys/skillanbieter.md`, `ai-domain-skill-standards.md`, `database.md` |
| `GLOSSARY.md` | `architecture.md`, `database.md`, `journeys/*` |
| `RESOURCES.md` | `mcp-guide.md`, `deployment.md`, `development-setup.md` |

## Guardrails

- **Report-only.** The deliverable is the ledger; every lesson file stays exactly as found.
- **Leak-clean.** The report names no token, workspace/connector ID, account email, or staging host — the same leak rule that binds the course. See `[[credential-handling-wrap-proof]]`.
