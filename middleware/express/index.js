
export function paymentRequired(options = {}) {
  const { amount = "0.10", tokenMint = "USDC" } = options
  return async function (req, res, next) {
    
    if (!hasProof) {
      return res.status(402).json({
        error: "Payment Required",
        details: { amount, tokenMint }
      })
    }
   
    next()
  }
}
