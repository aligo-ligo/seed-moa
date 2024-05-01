import axios, { isAxiosError } from 'axios';

import ERROR_RESPONSES from '@/constants/errorMessages';
import STORAGE_KEYS from '@/constants/storageKeys';
import { isProd } from '@/utils/env';



const DEVELOPMENT_API_URL = 'https://www.aligoligo.store:7070';
const PRODUCTION_API_URL = 'https://www.aligoligo.store:8080';

/** 단순한 API 요청 클라이언트 */
export const baseInstance = axios.create({
  baseURL: isProd(import.meta.env.MODE) ? PRODUCTION_API_URL : DEVELOPMENT_API_URL,
  timeout: 30000,
});

/** 사용자 인가 권한이 필요한 API 요청 클라이언트 */
export const authInstance = axios.create({
  baseURL: isProd(import.meta.env.MODE) ? PRODUCTION_API_URL : DEVELOPMENT_API_URL,
  timeout: 30000,
});

authInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem(STORAGE_KEYS.accessToken);
  config.headers.Authorization = `Bearer ${token}`

  return config;
});

authInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    // TODO : accessToken 만료 처리! 및 refeshToken 도입
    if (isAxiosError(error)) {
      switch (error.response?.status) {
        case ERROR_RESPONSES.accessExpired : {
          // TODO : reissue API 필요할 듯
          localStorage.removeItem(STORAGE_KEYS.accessToken);
          break;
        }
        default:
          break;
      }
    }

    return Promise.reject(error);
  },
);
