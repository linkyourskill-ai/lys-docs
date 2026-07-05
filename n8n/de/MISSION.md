# Mission: Als Agentowner deinen eigenen KI-Agenten in n8n bauen — und die Kontrolle behalten

## Warum
Im Agentowner-Kurs steuerst du KI-Agenten, die andere gebaut haben. Hier baust du selbst:
In n8n verbindest du ein Chat-Model mit dem MCP-Zugang von LinkYourSkill und erhältst einen
KI-Agenten, der auf Zuruf den Marktplatz durchsucht und Aufträge vorbereitet — in deinem Namen,
mit deinem Token, innerhalb deiner Grenzen. Am Ende chattest du mit deinem eigenen Agenten,
und sein vorbereiteter Auftrag landet in deiner ganz normalen Freigabe.

## Success looks like
- Du verbindest n8n mit dem MCP-Zugang und siehst den Tool-Katalog — die Leitung steht.
- Dein Agent durchsucht den Marktplatz auf einen Chat-Befehl hin und du liest im Log nach, was er wirklich getan hat.
- Du entscheidest per Whitelist, welche Tools dein Agent überhaupt nutzen darf.
- Dein Agent bereitet einen echten Übungsauftrag vor — und du lehnst ihn bewusst ab. Der Kreis zum Agentowner-Kurs schließt sich.

## Constraints
- Deutsch-first, EU/DSGVO-konform. Voraussetzung: Agentowner-Kurs (Agent + Token vorhanden).
- Builder-Track: Dieser Kurs darf technisch werden (MCP, Bearer, JSON) — der Agentowner-Kurs bleibt bewusst untechnisch.
- n8n-UI-Beschriftungen bleiben englisch, Wort für Wort — du musst sie in n8n wiederfinden.
- Kein vorbereiteter Auftrag wird ohne deine Freigabe echt; der Übungsauftrag wird abgelehnt.
- Kurze Lektionen (ca. 6–8 Minuten), jede endet mit einem funktionierenden Zwischenstand.

## Out of scope
- `task_execute` / `auto_approve` (Freigabe überspringen) — bewusst nicht Teil dieses Kurses.
- Eigene MCP-Server oder Plattform-Entwicklung (kein Entwickler-Kurs für die Plattform selbst).
- Der Supervisor-Weg ohne Selbstbauen — dafür gibt es den Agentowner-Kurs.
