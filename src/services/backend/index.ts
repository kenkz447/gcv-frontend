import { Configuration, MediaFilesApi } from "@/services/backend/api";

export const backendConfig = new Configuration();

export const mediaFilesApi = new MediaFilesApi(backendConfig);