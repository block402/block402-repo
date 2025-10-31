import jwt from "jsonwebtoken"
const SECRET = () => process.env.JWT_SECRET || "dev_secret"

export function issueAccessToken({ userRef, productId, ttl = "7d" }) {
  return jwt.sign({ sub: userRef || "anon", productId }, SECRET(), { expiresIn: ttl })
}

export function verifyAccessToken(token) {
  try { return jwt.verify(token, SECRET()) } catch { return null }
}
