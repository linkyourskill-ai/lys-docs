# Customer-Kurs: „Beauftragen statt kaufen" als Leitachse + Motivation-first-Sequenz

Der Customer-Kurs ruht auf einer nicht offensichtlichen Achse: Der Kunde **kauft kein
fertiges Produkt, sondern beauftragt eine Fachkraft**. Der Marktplatz sieht aus wie ein Shop,
ist aber ein Verzeichnis von Menschen, denen man eine Aufgabe anvertraut. Jede Kunden-
Entscheidung (welche Karte, welcher Auftragstext, welche Zahlung, welches Verfolgen) dient
diesem Reframe — Eignung und Vertrauen statt „in den Warenkorb".

Dies ist der **Nachfrage-seitige Spiegel** des Skillanbieter-Kurses (dort: „Käufer ist ein
KI-Agent"). Wichtig: Der Customer ist der **direkte menschliche Weg** (öffentlich browsen →
direkt beauftragen → bezahlen → verfolgen), **nicht** der Agenten-Weg. Beide Nachfrage-Wege
existieren auf der Plattform; dieser Kurs behandelt nur den direkten.

Quelle: `docs/journeys/customer.md` (docs-only, v1).

## Arc-Sequenz (nach Motivation/ZPD, nicht nach Produkt-Reihenfolge)
1. **Auf dem Marktplatz finden** — eine Skill-Karte nach Eignung (Kategorie, Einsatzgebiet,
   Verfügbarkeit) und Vertrauen (Bewertung, Verifizierung) lesen; suchen, filtern, sortieren.
2. **Gut beauftragen** — einen Auftrag schreiben (Titel, Beschreibung, Scope, Budget,
   Zeitrahmen), den die richtige Fachkraft annehmen kann.
3. **Sicher bezahlen** — sicher über die Plattform per Karte (Stripe) oder PayPal, gegen eine
   Rechnung, wenn der Auftrag vergeben ist; Status wird „bezahlt".
4. **Verfolgen & bewerten** — Auftragsstatus verfolgen, Aufträge verwalten, nach Abschluss
   bewerten.

## Altitude-Entscheidung — Zahlung (Arc 3)
Die Onboarding-Copy verspricht „held until work is completed" (Treuhand-Anmutung), der
faktische Zahlschritt beschreibt aber das **Bezahlen einer Rechnung**, sobald der Auftrag
vergeben/in Rechnung gestellt ist. Diese beiden Aussagen sind nicht deckungsgleich, und
„dein Geld wird bis zur Lieferung gehalten" ist eine regulierte Verbraucherschutz-Aussage.

**Gewählte Altitude:** Plattform-Mechanik + sanftes Vertrauen, **ohne** Treuhand-Garantie.
Gelehrt wird nur das Belegbare: sicher **über die Plattform** zahlen (kein Bargeld an Fremde,
keine Bankdaten an die Fachkraft), gegen eine Rechnung; Status wird „bezahlt". Keine Aussage
über treuhänderisches Halten/Freigeben bei Abschluss, solange das nicht bestätigt ist.

## Implikationen
- Eine 1:1-Transkription der 8-Schritt-Journey ist verworfen (zu abstrakt, leakt Dev-/QA-
  Artefakte: `e2e.sh`, Seed-Logins, `localhost:8888`, Mock-Mode/Test-Karten, API-Endpunkte).
- „Auf dem Marktplatz finden" ist Lektion 1 als **vertikaler Schnitt** — der erste greifbare
  Gewinn (die richtige Fachkraft wählen), bevor Arcs 2–4 nach dem Genauigkeits-Gate entstehen.
- Geteiltes Glossar broadened: `Marktplatz` und `Auftrag` waren agenten-spezifisch definiert
  und wurden persona-neutral formuliert; neu: `Kunde`, `Verifizierung`.
