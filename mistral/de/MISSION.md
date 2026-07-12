# Mission: Als Agentowner deinen eigenen KI-Agenten im Chat mit Mistral bauen — und die Kontrolle behalten

## Warum
Im Agentowner-Kurs steuerst du KI-Agenten, die andere gebaut haben. Hier baust du selbst —
im Chat: In Vibe (ehemals Le Chat) verbindest du LinkYourSkill als eigenen MCP-Connector und
erhältst einen KI-Agenten, der auf Zuruf den Marktplatz durchsucht und Aufträge vorbereitet —
in deinem Namen, mit deinem Schlüssel, innerhalb deiner Grenzen. Das Besondere an diesem Weg:
Er braucht kein Werkzeug außer einem Chatfenster. Kein n8n, kein Terminal, keine Zeile Code —
und trotzdem ist es dein Agent, den du baust.

## Success looks like
- Du legst den Connector an, hinterlegst deinen Schlüssel und siehst im Reiter „Übersicht" die Funktionsliste — die Leitung steht, ganz ohne Chat.
- Dein Agent durchsucht den Marktplatz auf einen Chat-Befehl hin, und du liest im aufklappbaren Tool-Block nach, was er wirklich getan hat — nicht, was er darüber erzählt.
- Du durchschaust die zwei Netze: Mistrals Ausführungs-Gate fragt bei *jedem* Tool — lesend wie schreibend; es kennt den Unterschied nicht. Die LYS-Freigabe ist das Netz, das ihn kennt.
- Dein Agent bereitet einen echten Übungsauftrag vor — und du lehnst ihn im Messenger ab. Er wird nie echt. Der Kreis zum Agentowner-Kurs schließt sich.
- Du begrenzt deinen Agenten dauerhaft auf die Funktionen, die du erlaubst.

## Constraints
- Deutsch-first, EU/DSGVO-konform. Voraussetzung: Agentowner-Kurs (Agent + Schlüssel vorhanden) sowie ein Mistral-Konto für Vibe.
- Builder-Track: Dieser Kurs darf technisch werden (MCP, Bearer, Connector) — der Agentowner-Kurs bleibt bewusst untechnisch.
- Mistrals UI-Strings werden zitiert, wie die Oberfläche sie zeigt — auf Deutsch, weil die Sprache dem Konto folgt und der Kurs deutsch-first ist.
- Der Tool-Katalog wird nie gezählt: Zahlen veralten, der Verweis auf die Docs nicht.
- Der Kostenlos-Anspruch steht an genau einer Stelle: in der Voraussetzungen-Box von Lektion 1, mit Datumsstempel der Live-Verifikation.
- Kein vorbereiteter Auftrag wird ohne deine Freigabe echt; der Übungsauftrag wird abgelehnt („Test:"-Präfix, nie eine Fremdleistung ohne Absicht freigeben).
- Kurze Lektionen (ca. 6–8 Minuten), jede endet mit einem funktionierenden Zwischenstand.

## Out of scope
- `task_execute` / `auto_approve` und jede Form von Vor-Autorisierung, die die Freigabe überspringt — bewusst nicht Teil dieses Kurses.
- Eigene MCP-Server oder Plattform-Entwicklung (kein Entwickler-Kurs für die Plattform selbst).
- Der Supervisor-Weg ohne Selbstbauen — dafür gibt es den Agentowner-Kurs.
- Der visuelle Bau-Weg und der Terminal-Weg — dafür gibt es „Dein Agent in n8n" und „Dein Agent in Claude Code".
