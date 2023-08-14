import { AxiosResponse } from "axios";

export type HealthData = {
  status: number;
  info: { [key: string]: { status: string } };
  error: Record<string, never>;
  details: Record<string, { status: string }>;
};
export interface IHealthResponse {
  data: AxiosResponse<HealthData>;
}
