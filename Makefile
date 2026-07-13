# n8n auf Podman — lokale Lernumgebung für den Track „Dein Agent in n8n".
#
# Gepinnt auf die Version, gegen die der Kurs verifiziert wurde (n8n 2.4.5).
# Die Daten liegen in einem benannten Volume, damit dein Workflow einen
# Neustart überlebt — die MCP-Zugangsdaten trägst du im n8n-Editor ein,
# niemals hier (dieses Repo ist öffentlich).
#
#   make n8n-up      Editor starten  → http://localhost:5678
#   make n8n-down    anhalten (Daten bleiben)
#   make n8n-reset   Container + Daten löschen
#   make help        alle Ziele

N8N_VERSION ?= 2.4.5
# docker.io, nicht docker.n8n.io: der n8n-Spiegel läuft schnell ins
# unauthentifizierte Pull-Limit von Docker Hub („toomanyrequests").
N8N_IMAGE   ?= docker.io/n8nio/n8n:$(N8N_VERSION)
N8N_NAME    ?= lys-n8n
N8N_PORT    ?= 5678
N8N_VOLUME  ?= lys-n8n-data
N8N_TZ      ?= Europe/Berlin
N8N_URL     := http://localhost:$(N8N_PORT)

.DEFAULT_GOAL := help

.PHONY: help n8n-up n8n-down n8n-restart n8n-status n8n-logs n8n-open n8n-shell n8n-pull n8n-reset podman-machine

help: ## Diese Übersicht
	@grep -hE '^[a-z0-9_-]+:.*?## ' $(MAKEFILE_LIST) \
		| awk 'BEGIN{FS=":.*?## "}{printf "  \033[36m%-14s\033[0m %s\n", $$1, $$2}'

podman-machine: ## Podman-VM starten, falls sie steht (macOS)
	@podman machine inspect --format '{{.State}}' 2>/dev/null | grep -q running \
		|| { echo "→ Podman-VM startet…"; podman machine start; }

n8n-pull: podman-machine ## Image holen ($(N8N_IMAGE))
	@podman image exists $(N8N_IMAGE) || podman pull $(N8N_IMAGE)

n8n-up: n8n-pull ## n8n starten (idempotent) und Editor-URL zeigen
	@if podman container exists $(N8N_NAME); then \
		podman start $(N8N_NAME) >/dev/null; \
	else \
		podman volume exists $(N8N_VOLUME) || podman volume create $(N8N_VOLUME) >/dev/null; \
		podman run -d \
			--name $(N8N_NAME) \
			--publish $(N8N_PORT):5678 \
			--volume $(N8N_VOLUME):/home/node/.n8n:U \
			--env N8N_SECURE_COOKIE=false \
			--env GENERIC_TIMEZONE=$(N8N_TZ) \
			--env TZ=$(N8N_TZ) \
			--restart unless-stopped \
			$(N8N_IMAGE) >/dev/null; \
	fi
	@printf '→ n8n läuft: %s  (make n8n-logs · make n8n-down)\n' '$(N8N_URL)'

# N8N_SECURE_COOKIE=false ist Pflicht: über http://localhost blockiert n8n sonst
# das Login („configured to use a secure cookie"), in Safari zuverlässig.

n8n-down: ## n8n anhalten (Volume und damit die Workflows bleiben)
	@podman stop $(N8N_NAME) >/dev/null 2>&1 && echo "→ n8n angehalten (Daten bleiben)" \
		|| echo "→ n8n läuft nicht"

n8n-restart: n8n-down n8n-up ## n8n neu starten

n8n-status: ## Läuft n8n? Version und Port
	@podman ps --filter name=$(N8N_NAME) --format '  {{.Names}}  {{.Image}}  {{.Status}}  {{.Ports}}' \
		| grep . || echo "  n8n läuft nicht — make n8n-up"

n8n-logs: ## Logs mitlesen (Strg-C beendet nur die Ausgabe)
	@podman logs -f $(N8N_NAME)

n8n-open: ## Editor im Browser öffnen
	@open '$(N8N_URL)' 2>/dev/null || echo "→ öffne $(N8N_URL)"

n8n-shell: ## Shell im laufenden Container
	@podman exec -it $(N8N_NAME) /bin/sh

n8n-reset: ## Container UND Daten löschen (Workflows sind dann weg)
	@printf 'Löscht Container %s und Volume %s — alle Workflows weg. [j/N] ' '$(N8N_NAME)' '$(N8N_VOLUME)'
	@read -r a; [ "$$a" = "j" ] || { echo "→ abgebrochen"; exit 1; }
	@podman rm -f $(N8N_NAME) >/dev/null 2>&1 || true
	@podman volume rm $(N8N_VOLUME) >/dev/null 2>&1 || true
	@echo "→ zurückgesetzt — make n8n-up startet frisch"
