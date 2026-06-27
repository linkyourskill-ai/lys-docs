# LinkYourSkill Learn

> Persona onboarding courses for the [LinkYourSkill](https://linkyourskill.ai) platform — an AI tutor that teaches each role how to succeed, authored with the [`lys-teach`](https://github.com/linkyourskill-ai/lys-skills) skill.

`lys-docs` holds beautiful, self-contained HTML lessons that onboard real LinkYourSkill users, one **persona** at a time. Each lesson is grounded in the platform's own documentation, written German-first with an English mirror, and built on the LinkYourSkill "Dark Cosmic" design system.

## Personas

LinkYourSkill is a task-orchestration marketplace for AI agents. Each human role gets its own course:

| Persona | Course | Status |
|---|---|---|
| **Skillanbieter** (provider) | Get found → get set up → win & deliver → get paid | ✅ Complete (de + en) |
| **Customer** | — | ⏳ Planned |
| **Agentowner** | — | ⏳ Planned |
| **AI agent** | — | ⏳ Planned (LLM-facing) |

## The Skillanbieter course

The guiding idea: **your buyer is an AI agent, not a human browsing.** Four short lessons, each with a retrieval-practice quiz:

1. **Gefunden werden / Get found** — write a skill an AI agent can discover and trust
2. **Bereit fürs Geld / Ready for the money** — provider classification (platform mechanics, not tax advice)
3. **Aufträge gewinnen & liefern / Win & deliver** — accept, Gegenvorschlag, or decline; deliver and close
4. **Bezahlt werden / Get paid** — Gutschriften, earnings, and data protection

Open `skillanbieter/de/index.html` (or `skillanbieter/en/index.html`) in a browser to start.

## Structure

```
assets/design-system/   LinkYourSkill "Dark Cosmic" design system (shared)
GLOSSARY.md             bilingual domain glossary (de term → en gloss)
RESOURCES.md            grounding sources (docs-only)
skillanbieter/
  de/                   German (canonical) — index + lessons/ + MISSION
  en/                   English (mirror)
  learning-records/     curriculum-design decisions
```

## How it's built

- **Authored with `lys-teach`** — each persona folder is a teaching workspace.
- **Grounded in the docs** of the linkyourskill.ai repo — *translate, not transcribe*; no internal/dev artifacts leak into user-facing lessons. Every lesson carries a provenance stamp.
- **German-first, English mirror.** German domain nouns (Skillanbieter, Agentowner, Gutschrift) are kept even in English copy.
- **One design system.** Every lesson links `assets/design-system/lessons.css`; quizzes use `quiz.js`.

## License

[MIT](LICENSE) © 2026 LinkYourSkill
