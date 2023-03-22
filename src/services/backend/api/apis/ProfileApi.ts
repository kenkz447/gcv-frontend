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
  ChangePasswordInput,
  ProfileDto,
  RemoteServiceErrorResponse,
  UpdateProfileDto,
} from '../models';

export interface ApiAccountMyProfileChangePasswordPostRequest {
    changePasswordInput?: ChangePasswordInput;
}

export interface ApiAccountMyProfilePutRequest {
    updateProfileDto?: UpdateProfileDto;
}

/**
 * 
 */
export class ProfileApi extends runtime.BaseAPI {

    /**
     */
    private apiAccountMyProfileChangePasswordPostRaw = async (requestParameters: ApiAccountMyProfileChangePasswordPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> => {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/account/my-profile/change-password`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.changePasswordInput,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    public apiAccountMyProfileChangePasswordPost = async (requestParameters: ApiAccountMyProfileChangePasswordPostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> => {
        await this.apiAccountMyProfileChangePasswordPostRaw(requestParameters, initOverrides);
    }

    /**
     */
    private apiAccountMyProfileGetRaw = async (initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProfileDto>> => {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/account/my-profile`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     */
    public apiAccountMyProfileGet = async (initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProfileDto> => {
        const response = await this.apiAccountMyProfileGetRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    private apiAccountMyProfilePutRaw = async (requestParameters: ApiAccountMyProfilePutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProfileDto>> => {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/account/my-profile`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.updateProfileDto,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     */
    public apiAccountMyProfilePut = async (requestParameters: ApiAccountMyProfilePutRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProfileDto> => {
        const response = await this.apiAccountMyProfilePutRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
