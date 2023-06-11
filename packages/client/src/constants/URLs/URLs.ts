export const BASE = new URL(`http://${process.env.NEXT_PUBLIC_SERVER}`);
export const AUTH_API = new URL("/api/auth", BASE);
