// ServerSide
export const SS_BASE = new URL(`http://${process.env.NEXT_PUBLIC_CLIENT}`);
export const SS_APPDATA_API = new URL("/api/appdata", SS_BASE);

// Server
export const BASE = new URL(`http://${process.env.NEXT_PUBLIC_SERVER}`);
export const AUTH_API = new URL("/api/auth", BASE);
export const HEALTH_API = new URL("/api/health", BASE);
export const APPDATA_API = new URL("/api/appdata", BASE);
