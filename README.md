# Block402 — x402 one-time unlocks for AI agents & APIs

**Block402** is a minimal x402 layer for **one-time unlocks**. Gate any endpoint, file, or feature behind a verifiable payment.
Built for **AI agents** and **servers**. No accounts. Issue access as **JWT** on your backend.

This repo provides:
- **Reference server** (`/server`) — Express + JWT, mock checkout flow.
- **Express middleware** (`/middleware/express`) — `paymentRequired()` for 402 gating.
- **FastAPI decorator (stub)** (`/python/block402_fastapi`) — `@payment_required`.

> Frontend website/docs/SDK disimpan di repositori terpisah.

---

## Quick Start

### 1) Run the reference server
```bash
cd server
npm i
npm run dev
# -> http://localhost:8080
