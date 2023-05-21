export const BASE = new URL(`http://${process.env.NEXT_PUBLIC_SERVER}`);
export const API = new URL("/api/auth", BASE);
