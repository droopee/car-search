import axios from 'axios';

export const checkAutoByNumber = async (number) => {
  try {
    const response = await axios.get(`http://localhost:8080/api/v1/car-info/${number}`);
    return response?.data?.result ?? null;
  } catch (error) {
    throw new Error(error?.response?.data?.error ?? 'DEFAULT_ERROR');
  }
};
