import axios from "axios";
import { HealthResponse } from ".";

export const getHealthFromFrontEndAPI = async (): Promise<HealthResponse> => {
  try {
    const response = await axios.get(
      `http://${process.env.NEXT_PUBLIC_SERVER}/api/health`
    );
    return response.data.status;
  } catch (error) {
    console.error("Fetch Failed :", error);
    return null;
  }
};
