import { Configuration, LoginApi, MediaFilesApi } from "@/services/backend/api";

export * from './api/models';

export const backendConfig = new Configuration();

export const loginApi = new LoginApi(backendConfig)
export const mediaFilesApi = new MediaFilesApi(backendConfig);
