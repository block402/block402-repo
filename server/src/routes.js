import { Router } from "express"
import { issueAccessToken, verifyAccessToken } from "./jwt.js"

const r = Router()

// In-memory sessions (demo only)
const SESS = new Map()

// Create a mock checkout session (mark paid=true for demo)
r.post("/v1/checkout/create", (req, res) => {
  const { productId = "prod_basic", userRef = "anon" } = req.body || {}
  const sessionId = "sess_" + Math.random().toString(36).slice(2, 10)
  SESS.set(sessionId, { productId, userRef, paid: true })
  res.json({
    sessionId,
    expiresAt: new Date(Date.now() + 10 * 60e3).toISOString()
  })
})

// Confirm session and issue JWT
r.post("/v1/checkout/confirm", (req, res) => {
  const { sessionId } = req.body || {}
  const s = SESS.get(sessionId)
  if (!s || !s.paid) return res.status(400).json({ error: "invalid_session" })

  const accessToken = issueAccessToken({ userRef: s.userRef, productId: s.productId })
  res.json({
    accessToken,
    expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60e3).toISOString()
  })
})

// Validate JWT
r.get("/v1/access/:token", (req, res) => {
  const payload = verifyAccessToken(req.params.token)
  if (!payload) return res.json({ valid: false })
  res.json({
    valid: true,
    productId: payload.productId,
    expiresAt: new Date(payload.exp * 1000).toISOString()
  })
})

export default r
