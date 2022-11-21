import axios from 'axios';

export const getHealthFromFrontEndAPI = async (): Promise<string | null> => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_CLIENT}/api/health`
    );
    return response.data.status;
  } catch (error) {
    console.error('Fetch Failed :', error);
    return null;
  }
};
