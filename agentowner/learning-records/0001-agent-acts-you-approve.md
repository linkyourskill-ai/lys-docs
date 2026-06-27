# Agentowner-Kurs: „Dein Agent handelt — du behältst die Kontrolle" als Leitachse

Der Agentowner-Kurs ruht auf einer nicht offensichtlichen Achse: Der Agentowner **handelt nicht
selbst** — sein **KI-Agent** durchsucht den Marktplatz und bereitet Aufträge vor. Die Rolle des
Menschen verschiebt sich vom Ausführen zum **Steuern und Freigeben**: Schlüssel vergeben, Grenzen
setzen, jeden vorbereiteten Auftrag bewusst freigeben, bezahlen. Jede Lektion dient diesem
Reframe — *Delegieren mit der Hand am Schalter* statt selbst beauftragen.

Dies ist der **agenten-vermittelte Nachfrage-Weg** — abzugrenzen von zwei Nachbarn:
- vom **Customer** (direkter menschlicher Weg: selbst finden, selbst beauftragen);
- vom **Skillanbieter** (Angebotsseite, dessen Leitachse „dein Käufer ist ein KI-Agent" lautet).
Der Agentowner ist genau die Nachfrageseite, die jenen KI-Käufer betreibt.

Quelle: `docs/journeys/agentowner.md` (docs-only, v1).

## Arc-Sequenz (nach Motivation/ZPD, nicht nach Produkt-Reihenfolge)
1. **Deine Agenten verstehen** — Dashboard lesen (deine Agenten, letzte Aufträge,
   Verknüpfungs-Status); einem Agenten einen **Token** (Schlüssel) erstellen. Orientierung +
   erste konkrete Handlung.
2. **Grenzen setzen** — **Auftrags-Limits** in normaler Sprache („max. 5 Aufträge/Tag, max.
   500 € pro Auftrag"); einen **Messenger** verknüpfen, damit Freigaben per Nachricht erreichen.
3. **Freigeben** — vorbereitete Aufträge prüfen und bestätigen; Status **Vorbereitet → Genehmigt**;
   nichts wird ohne den Agentowner echt (Human-in-the-loop-Kontrolle).
4. **Bezahlen & konform bleiben** — **Rechnungen** sicher über die Plattform (Karte/Stripe oder
   PayPal) nach Abschluss; Datenschutz/Einwilligung und Nutzungsbedingungen.

## Altitude-Entscheidungen (gegrillt 2026-06-27)
- **Token = „Schlüssel", nur user-facing.** Gelehrt wird: dein Agent braucht einen Schlüssel, um
  in deinem Namen zu handeln; einmal beim Agenten erstellt, nur einmal angezeigt, geheim wie ein
  Passwort. **Weggelassen** als Dev-Artefakte: MCP, Bearer-Auth, `curl`, 90-Tage-Ablauf.
- **Messenger statt Produktname.** Der Kanal heißt im Kurs „Messenger" / „per Nachricht", nicht
  „WhatsApp" — die konkrete Produktnennung wäre eine ungesicherte UI-Annahme. Weggelassen:
  E.164-Format, Mock-Mode, OTP, 24h-Service-Fenster.
- **Zahlung nach Abschluss, ohne Treuhand.** Rechnung erscheint **nach Abschluss & Schließung**
  des Auftrags (anders als beim Kunden, wo bei Vergabe gezahlt wird); sicher über die Plattform
  per Karte (Stripe) oder PayPal; Status → „bezahlt". **Keine** Treuhand-/„bis-Fertigstellung-
  gehalten"-Aussage. (Beide Zahlarten vom Nutzer bestätigt, obwohl die Journey nur Stripe nennt.)

## Implikationen
- Eine 1:1-Transkription der 10-Schritt-Journey ist verworfen (zu abstrakt, leakt Dev-/QA-
  Artefakte: `e2e.sh`, Seed-Logins, `localhost:8888`, Test-Endpunkte, API-Pfade, Mock-Mode).
- **In-App-only:** Agenten, Token, Limits, Freigaben und Rechnungen leben hinter der Anmeldung.
  Lektionen ohne öffentliche URL lassen den `btn-primary`-CTA weg und nennen in der Primärquelle
  UI-Beschriftungen als Text **ohne** `href` (wie Skillanbieter Arc 4 / Customer Arc 3–4).
- **Vertikaler Schnitt zuerst:** Arc 1 als erster greifbarer Gewinn (Agenten verstehen + Schlüssel
  geben), Accuracy-Gate, dann EN-Spiegel, dann Arcs 2–4.
- **Glossar:** neu `Token`; `Agentowner` und `KI-Agent` bestanden bereits. Für Arcs 2–4 vorgesehen:
  `Auftrags-Limit`, `Freigabe`; `Rechnung` und `Auftragsstatus` ggf. persona-neutral broadenen
  (Vorbereitet/Genehmigt ergänzen) — broaden, nicht forken.
