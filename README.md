# Block402 — x402 one-time unlocks for AI agents & APIs

A minimal x402 layer for **one-time unlocks**. Gate any endpoint, file, or feature behind a verifiable payment.
Built for **agents** and **servers**. No accounts. Issue access as **JWT**.

This repo provides:
- **Reference server** (`/server`) — Express + JWT, mock checkout flow
- **Express middleware** (`/middleware/express`) — `paymentRequired()` for 402
- **FastAPI decorator (stub)** (`/python/openlibx402_fastapi`) — `@payment_required`

> Frontend website/docs/SDK disimpan di repositori terpisah.

---

## Quick Start

### Run the reference server
```bash
cd server
npm i
npm run dev
# -> http://localhost:8080
