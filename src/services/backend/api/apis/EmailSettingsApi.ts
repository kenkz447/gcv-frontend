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
  EmailSettingsDto,
  RemoteServiceErrorResponse,
  SendTestEmailInput,
  UpdateEmailSettingsDto,
} from '../models';

export interface ApiSettingManagementEmailingPostRequest {
    updateEmailSettingsDto?: UpdateEmailSettingsDto;
}

export interface ApiSettingManagementEmailingSendTestEmailPostRequest {
    sendTestEmailInput?: SendTestEmailInput;
}

/**
 * 
 */
export class EmailSettingsApi extends runtime.BaseAPI {

    /**
     */
    private apiSettingManagementEmailingGetRaw = async (initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EmailSettingsDto>> => {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/setting-management/emailing`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     */
    public apiSettingManagementEmailingGet = async (initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EmailSettingsDto> => {
        const response = await this.apiSettingManagementEmailingGetRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    private apiSettingManagementEmailingPostRaw = async (requestParameters: ApiSettingManagementEmailingPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> => {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/setting-management/emailing`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.updateEmailSettingsDto,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    public apiSettingManagementEmailingPost = async (requestParameters: ApiSettingManagementEmailingPostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> => {
        await this.apiSettingManagementEmailingPostRaw(requestParameters, initOverrides);
    }

    /**
     */
    private apiSettingManagementEmailingSendTestEmailPostRaw = async (requestParameters: ApiSettingManagementEmailingSendTestEmailPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> => {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/setting-management/emailing/send-test-email`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.sendTestEmailInput,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    public apiSettingManagementEmailingSendTestEmailPost = async (requestParameters: ApiSettingManagementEmailingSendTestEmailPostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> => {
        await this.apiSettingManagementEmailingSendTestEmailPostRaw(requestParameters, initOverrides);
    }

}
