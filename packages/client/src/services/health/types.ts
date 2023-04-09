export interface IHealthResponse {
  status: string | null;
} ;

export type HealthResponse = {
  response: IHealthResponse,
} | null


