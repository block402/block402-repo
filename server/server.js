import "dotenv/config"
import express from "express"
import helmet from "helmet"
import cors from "cors"
import routes from "./src/routes.js"

const app = express()
app.use(helmet())
app.use(express.json())

// CORS allowlist
const allow = (process.env.ALLOWED_ORIGINS || "")
  .split(",")
  .map(s => s.trim())
  .filter(Boolean)

app.use(cors({
  origin: (origin, cb) => (allow.length === 0 || !origin ? cb(null, true) : cb(null, allow.includes(origin))),
  credentials: true
}))

app.get("/", (_, res) => res.json({ ok: true, service: "block402" }))
app.use(routes)

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Block402 server on http://localhost:${port}`))
