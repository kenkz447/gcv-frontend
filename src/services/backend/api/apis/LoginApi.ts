/* tslint:disable */
/* eslint-disable */
/**
 * Gcv API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  AbpLoginResult,
  RemoteServiceErrorResponse,
  UserLoginInfo,
} from '../models';

export interface ApiAccountCheckPasswordPostRequest {
    userLoginInfo?: UserLoginInfo;
}

export interface ApiAccountLoginPostRequest {
    userLoginInfo?: UserLoginInfo;
}

/**
 * 
 */
export class LoginApi extends runtime.BaseAPI {

    /**
     */
    private apiAccountCheckPasswordPostRaw = async (requestParameters: ApiAccountCheckPasswordPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AbpLoginResult>> => {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/account/check-password`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.userLoginInfo,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     */
    public apiAccountCheckPasswordPost = async (requestParameters: ApiAccountCheckPasswordPostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AbpLoginResult> => {
        const response = await this.apiAccountCheckPasswordPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    private apiAccountLoginPostRaw = async (requestParameters: ApiAccountLoginPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AbpLoginResult>> => {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/account/login`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.userLoginInfo,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     */
    public apiAccountLoginPost = async (requestParameters: ApiAccountLoginPostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AbpLoginResult> => {
        const response = await this.apiAccountLoginPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    private apiAccountLogoutGetRaw = async (initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> => {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/account/logout`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    public apiAccountLogoutGet = async (initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> => {
        await this.apiAccountLogoutGetRaw(initOverrides);
    }

}
