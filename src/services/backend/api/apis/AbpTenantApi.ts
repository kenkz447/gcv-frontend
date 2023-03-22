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
  FindTenantResultDto,
  RemoteServiceErrorResponse,
} from '../models';

export interface ApiAbpMultiTenancyTenantsByIdIdGetRequest {
    id: string;
}

export interface ApiAbpMultiTenancyTenantsByNameNameGetRequest {
    name: string;
}

/**
 * 
 */
export class AbpTenantApi extends runtime.BaseAPI {

    /**
     */
    private apiAbpMultiTenancyTenantsByIdIdGetRaw = async (requestParameters: ApiAbpMultiTenancyTenantsByIdIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FindTenantResultDto>> => {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiAbpMultiTenancyTenantsByIdIdGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/abp/multi-tenancy/tenants/by-id/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     */
    public apiAbpMultiTenancyTenantsByIdIdGet = async (requestParameters: ApiAbpMultiTenancyTenantsByIdIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FindTenantResultDto> => {
        const response = await this.apiAbpMultiTenancyTenantsByIdIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    private apiAbpMultiTenancyTenantsByNameNameGetRaw = async (requestParameters: ApiAbpMultiTenancyTenantsByNameNameGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FindTenantResultDto>> => {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling apiAbpMultiTenancyTenantsByNameNameGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/abp/multi-tenancy/tenants/by-name/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     */
    public apiAbpMultiTenancyTenantsByNameNameGet = async (requestParameters: ApiAbpMultiTenancyTenantsByNameNameGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FindTenantResultDto> => {
        const response = await this.apiAbpMultiTenancyTenantsByNameNameGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
