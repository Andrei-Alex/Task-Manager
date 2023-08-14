import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(request: Request) {
  try {
    const res = await axios.get(
      `http://${process.env.NEXT_PUBLIC_SERVER}/api/health`
    );
    const appData = await axios.get(
      `http://${process.env.NEXT_PUBLIC_SERVER}/api/appData`
    );
    const [dbName] = Object.keys(res.data.info);
    const server = {
      serverStatus: res.status,
      dbName: dbName,
      dbStatus: res.data.info[dbName].status,
      serverVersion: appData.data.serverVersion,
    };

    const data = {
      server,
      clientVersion: process.env.NEXT_PUBLIC_VERSION,
    };
    return NextResponse.json(data);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ err });
  }
}
