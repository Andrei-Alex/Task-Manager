import { NextResponse } from "next/server";
import { AxiosError } from "axios";
import { getHealth } from "@/services";
import { getAppData } from "@/services/appData";

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

export async function GET(request: Request) {
  try {
    const res = await getHealth();
    const appData = await getAppData();
    if (!(res instanceof AxiosError)) {
      const [dbName] = Object.keys(res.info);
      const server: Partial<AppDataServer> = {
        serverStatus: res.status,
        dbName: dbName,
        dbStatus: res.info[dbName].status,
      };
      if (!(appData instanceof AxiosError)) {
        server.serverVersion = appData.serverVersion;
      }

      const data: IAppData = {
        server,
        clientVersion: process.env.NEXT_PUBLIC_VERSION,
      };
      console.log(data);
      return NextResponse.json(data);
    }
  } catch (err) {
    console.error(err);
    return NextResponse.json({ err });
  }
}
