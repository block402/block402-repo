from functools import wraps
from fastapi import HTTPException

def payment_required(amount: str = "0.10", payment_address: str | None = None, token_mint: str | None = None):
    """
    Minimal decorator that simulates a 402 if no proof header is present.
    Replace with real on-chain verification in production.
    """
    def decorator(fn):
        @wraps(fn)
        async def wrapper(*args, **kwargs):
            # In a real impl, inspect the request for a receipt and verify.
            raise HTTPException(status_code=402, detail={
                "error": "Payment Required",
                "amount": amount,
                "payment_address": payment_address,
                "token_mint": token_mint
            })
        return wrapper
    return decorator
