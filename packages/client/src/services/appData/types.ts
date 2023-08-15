export interface IAppData {
  server: Partial<AppDataServer>;
  clientVersion: string | undefined;
}

export type AppDataServer = {
  serverStatus: number;
  dbName: string;
  dbStatus: string;
  serverVersion: string;
};
