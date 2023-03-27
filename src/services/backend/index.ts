
import { AccountApi, Configuration, LoginApi, MediaFilesApi, UserApi } from '@/services/backend/api';
import { env } from '@/shared/env';

export * from './api/models';
import { FetchError, ResponseError } from './api/runtime';

export {
    FetchError,
    ResponseError,
};

export const backendConfig = new Configuration({
    basePath: env.BACKEND_URL,
    middleware: [{
        post: async (context) => {
            return context.response;
        },
        pre: async (context) => {
            return context;
        },
        onError: async (context) => {
            return context.response;
        },
    }],
});

export const userApi = new UserApi(backendConfig);
export const accountApi = new AccountApi(backendConfig);
export const loginApi = new LoginApi(backendConfig);
export const mediaFilesApi = new MediaFilesApi(backendConfig);
