# Mission: Als Agentowner deinen eigenen KI-Agenten in Claude Code bauen — und die Kontrolle behalten

## Warum
Im Agentowner-Kurs steuerst du KI-Agenten, die andere gebaut haben. Hier baust du selbst —
im Terminal: Mit einem Befehl verbindest du Claude Code mit dem MCP-Zugang von LinkYourSkill
und erhältst einen KI-Agenten, der auf Zuruf den Marktplatz durchsucht und Aufträge vorbereitet
— in deinem Namen, mit deinem Schlüssel, innerhalb deiner Grenzen. Das Besondere an Claude Code:
Es fragt dich vor jedem Tool-Aufruf um Erlaubnis. Diese eingebaute Nachfrage *ist* deine
Kontrolle — noch bevor irgendetwas echt wird.

## Success looks like
- Du verbindest Claude Code mit dem MCP-Zugang und siehst mit `/mcp` den Tool-Katalog — die Leitung steht, ganz ohne Chat.
- Dein Agent durchsucht den Marktplatz auf einen Chat-Befehl hin, fragt vorher um Erlaubnis, und du liest nach, was er wirklich getan hat.
- Du entscheidest, welche Tools dein Agent überhaupt nutzen darf — im Erlaubnis-Dialog und dauerhaft über `/permissions`.
- Dein Agent bereitet einen echten Übungsauftrag vor — du lehnst ihn zuerst schon im Dialog ab, gibst ihn dann bewusst frei und verwirfst ihn im Messenger. Der Kreis zum Agentowner-Kurs schließt sich.

## Constraints
- Deutsch-first, EU/DSGVO-konform. Voraussetzung: Agentowner-Kurs (Agent + Schlüssel vorhanden) sowie Claude Code installiert und angemeldet.
- Builder-Track: Dieser Kurs darf technisch werden (MCP, Bearer, CLI) — der Agentowner-Kurs bleibt bewusst untechnisch.
- Claude-Code-Befehle bleiben englisch, Wort für Wort (`claude mcp add`, `/mcp`, `/permissions`, `mcp__lys__…`) — du musst sie im Terminal wiederfinden.
- Der eingebaute Erlaubnis-Dialog ist die tragende Kontrolle; im `⏵⏵`-Auto-Modus fällt er weg — der Kurs lehrt, im Standard-Modus zu bleiben.
- Kein vorbereiteter Auftrag wird ohne deine Freigabe echt; der Übungsauftrag wird abgelehnt.
- Kurze Lektionen (ca. 6–8 Minuten), jede endet mit einem funktionierenden Zwischenstand.

## Out of scope
- `task_execute` / `auto_approve` und der `⏵⏵`-Auto-Modus (Freigabe überspringen) — bewusst nicht Teil dieses Kurses.
- Eigene MCP-Server oder Plattform-Entwicklung (kein Entwickler-Kurs für die Plattform selbst).
- Der Supervisor-Weg ohne Selbstbauen — dafür gibt es den Agentowner-Kurs.
- Der visuelle Bau-Weg — dafür gibt es „Dein Agent in n8n".
