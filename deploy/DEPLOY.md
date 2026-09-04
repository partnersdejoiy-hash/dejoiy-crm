# Deploy Dejoiy CRM (Twenty) — hub.dejoiy.com

Private CRM deployment on the Dejoiy portal server, using the **upstream** Docker image
`twentycrm/twenty:latest` (no vendor fork required). Data lives only in the
`dejoiy-crm-*` volumes on this server.

## Architecture

```
hub.dejoiy.com (HTTPS, Caddy)  →  127.0.0.1:3005  →  twentycrm/twenty:latest (server + worker)
                                                      ├─ postgres:16  (dejoiy-crm-db-data)
                                                      └─ redis        (dejoiy-crm-redis?)
```

- Host port **3005** is used because **3000 is already taken** by the DAOS frontend dev server.
- Server + worker share the `dejoiy-crm-server-local-data` volume (local file storage).
- Telemetry is **off** (`TELEMETRY_ENABLED=false`) for privacy.

## Prerequisites

- Docker 24+ / Compose v2 on the portal server
- DNS: `hub.dejoiy.com` → A record `178.104.228.157` (required for HTTPS cert + access)

## Install

```bash
cd /root/dejoiy-crm/deploy
cp .env.example .env     # then fill in secrets (openssl rand -hex 32)
docker compose up -d
docker compose ps        # wait until server is healthy
curl -s http://127.0.0.1:3005/healthz   # expect: ok
```

First run: the server runs DB migrations automatically, then the setup wizard is served.

## Reverse proxy (Caddy)

Already configured in `/etc/caddy/Caddyfile`:

```caddy
# Dejoiy CRM (Twenty)
hub.dejoiy.com {
    encode gzip zstd
    reverse_proxy 127.0.0.1:3005 {
        flush_interval -1
    }
}
```

Reload: `systemctl reload caddy`

## After deploy

1. Browse `https://hub.dejoiy.com`
2. Complete the setup wizard → create the workspace owner account
3. Verify storage + settings under **Settings**

## Operations

```bash
cd /root/dejoiy-crm/deploy
docker compose logs -f server
docker compose restart server
docker compose pull        # update to a newer twentycrm/twenty tag
docker compose up -d       # apply after editing .env
```

## Backups

- Database volume: `dejoiy-crm-db-data`
- File storage volume: `dejoiy-crm-server-local-data`

Back up both volumes (e.g. `docker run --rm -v dejoiy-crm-db-data:/data -v /backup:/backup alpine tar czf /backup/dejoiy-crm-db.tgz -C /data .`).

## Notes

- RAM: this server is memory-constrained (~4 GB). Before first start, stop heavy dev
  containers (`docker stop daos-frontend-dev daos-n8n convex-dashboard`) if free RAM < 1.5 GB.
- To enable email/calendar/SSO, uncomment the relevant vars in `docker-compose.yml` and
  set them in `.env`, then `docker compose up -d`.