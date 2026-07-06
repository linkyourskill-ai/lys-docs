# n8n-Kurs: Der bewusste Altitude-Bruch — Builder-Track statt vierter Persona

Der Kurs „Dein Agent in n8n" ruht auf einer Entscheidung, die aus dem Repo nicht offensichtlich
ist: Er **bricht absichtlich** eine als dauerhaft markierte Altitude-Entscheidung des
Agentowner-Kurses. Dort wird der Token nur als „Schlüssel" gelehrt — MCP, Bearer-Auth und `curl`
sind als Dev-Artefakte ausdrücklich weggelassen (siehe
`../../agentowner/learning-records/0001-agent-acts-you-approve.md`). Dieser Track lehrt genau
diese Ebene: MCP-Endpunkt, Bearer Token, n8n-Nodes.

Der Bruch ist kein Widerspruch, weil er **im Schnitt** liegt, nicht im Inhalt:

- **Gleicher Mensch, anderer Modus.** Der Lernende ist der Agentowner in *Builder-Mode* — keine
  vierte Persona. README und Landing nennen den Kurs deshalb „Builder-Track für Agentowner"
  („Für Agentowner, die selbst bauen"), nicht „Kurs für eine neue Rolle".
- **Getrennte Tracks, getrennte Flughöhen.** Der Supervisor-Kurs (Agentowner) bleibt unberührt
  nicht-technisch; wer nie bauen will, begegnet MCP/Bearer nie. Der technische Stoff lebt
  ausschließlich hier. Gleiche Fakten, zwei Altitudes — broaden, nicht forken.
- **Die Leitachse gilt unverändert:** „Dein Agent handelt — du behältst die Kontrolle."
  Neu ist nur, dass der Lernende den Agenten selbst zusammensteckt.

## Arc-Sequenz

1. **Verbinden** — deterministischer Rohr-Beweis zuerst: HTTP-Request-Node + einzeiliges
   JSON-RPC `tools/list`, ohne LLM; der eigene Token stammt aus dem Agentowner-Kurs (Arc 1).
2. **Dein Agent sucht** — AI Agent Node + MCP Client Tool (HTTP Streamable); die Whitelist als
   Fähigkeits-Zwilling der Auftrags-Limits.
3. **Dein Agent beauftragt** — `prepare_order` → echte Freigabe → **bewusstes Ablehnen**.
4. **Verfolgen & Grenzen** — Wire↔Badge-Mapping, Rate-Limits, 401/429-Symptome.

## Entscheidungen im Detail

- **Inverse Verbatim-Regel.** Die Persona-Kurse halten deutsche Domänen-Nomen in englischer
  Copy; dieser Kurs hält zusätzlich **englische n8n-UI-Strings in deutscher Copy** („AI
  Agent"-Node, „Bearer Token", „Tools to Include → Selected") — der Lernende muss sie
  buchstabengetreu in n8ns englischer Oberfläche wiederfinden.
- **Docs-only-Ausnahme, eng begrenzt.** Einziger Kurs mit sanktionierter externer Quelle
  (offizielle n8n-Docs) und Live-Verifikation: Jede Lektion trägt
  `verified live against n8n <X.Y> @ <Datum>` zusätzlich zum Grounding-Stempel
  (siehe RESOURCES.md, „Externe Quellen (nur n8n-Kurs)").
- **Kein Sandkasten → Ablehnen-Drill.** `prepare_order` erzeugt echte Aufträge; eine
  Übungsumgebung existiert nicht. Der Übungsauftrag trägt darum das Präfix „Test:" und wird am
  Ende **abgelehnt**, nie freigegeben (Fluchtweg: Ist es ein echter Auftrag, wird freigegeben).
  Live verifiziert: Wire-Status `rejected`, Badge „Abgelehnt".
- **Whitelist = Präzisionskontrolle.** Genau fünf Tools: `search_skillanbieter`,
  `get_skillanbieter_ratings`, `prepare_order`, `get_order_status`, `list_orders`.
  `prepare_orders` (Batch) und die `task_*`-Tools bleiben aus — alles, was am bewussten
  Einzelauftrag oder an der Freigabe vorbeiführt, widerspricht der Leitachse.
