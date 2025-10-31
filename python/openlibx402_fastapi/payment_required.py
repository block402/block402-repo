from functools import wraps
from fastapi import HTTPException

def payment_required(amount: str = "0.10",
                     payment_address: str | None = None,
                     token_mint: str | None = None):
    """
    Block402 FastAPI decorator to require x402-style payment before access.
    Replace this stub with on-chain verification for production.
    """
    def decorator(fn):
        @wraps(fn)
        async def wrapper(*args, **kwargs):
            # In a real implementation, inspect request headers for a proof (receipt/tx)
            # and verify it before allowing access.
            raise HTTPException(status_code=402, detail={
                "error": "Payment Required",
                "amount": amount,
                "payment_address": payment_address,
                "token_mint": token_mint
            })
        return wrapper
    return decorator
