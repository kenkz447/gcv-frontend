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
  IdentityRoleCreateDto,
  IdentityRoleDto,
  IdentityRoleDtoListResultDto,
  IdentityRoleDtoPagedResultDto,
  IdentityRoleUpdateDto,
  RemoteServiceErrorResponse,
} from '../models';

export interface ApiIdentityRolesGetRequest {
    filter?: string;
    sorting?: string;
    skipCount?: number;
    maxResultCount?: number;
}

export interface ApiIdentityRolesIdDeleteRequest {
    id: string;
}

export interface ApiIdentityRolesIdGetRequest {
    id: string;
}

export interface ApiIdentityRolesIdPutRequest {
    id: string;
    identityRoleUpdateDto?: IdentityRoleUpdateDto;
}

export interface ApiIdentityRolesPostRequest {
    identityRoleCreateDto?: IdentityRoleCreateDto;
}

/**
 * 
 */
export class RoleApi extends runtime.BaseAPI {

    /**
     */
    async apiIdentityRolesAllGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<IdentityRoleDtoListResultDto>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/identity/roles/all`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     */
    async apiIdentityRolesAllGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<IdentityRoleDtoListResultDto> {
        const response = await this.apiIdentityRolesAllGetRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async apiIdentityRolesGetRaw(requestParameters: ApiIdentityRolesGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<IdentityRoleDtoPagedResultDto>> {
        const queryParameters: any = {};

        if (requestParameters.filter !== undefined) {
            queryParameters['Filter'] = requestParameters.filter;
        }

        if (requestParameters.sorting !== undefined) {
            queryParameters['Sorting'] = requestParameters.sorting;
        }

        if (requestParameters.skipCount !== undefined) {
            queryParameters['SkipCount'] = requestParameters.skipCount;
        }

        if (requestParameters.maxResultCount !== undefined) {
            queryParameters['MaxResultCount'] = requestParameters.maxResultCount;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/identity/roles`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     */
    async apiIdentityRolesGet(requestParameters: ApiIdentityRolesGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<IdentityRoleDtoPagedResultDto> {
        const response = await this.apiIdentityRolesGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiIdentityRolesIdDeleteRaw(requestParameters: ApiIdentityRolesIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiIdentityRolesIdDelete.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/identity/roles/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async apiIdentityRolesIdDelete(requestParameters: ApiIdentityRolesIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.apiIdentityRolesIdDeleteRaw(requestParameters, initOverrides);
    }

    /**
     */
    async apiIdentityRolesIdGetRaw(requestParameters: ApiIdentityRolesIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<IdentityRoleDto>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiIdentityRolesIdGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/identity/roles/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     */
    async apiIdentityRolesIdGet(requestParameters: ApiIdentityRolesIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<IdentityRoleDto> {
        const response = await this.apiIdentityRolesIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiIdentityRolesIdPutRaw(requestParameters: ApiIdentityRolesIdPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<IdentityRoleDto>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiIdentityRolesIdPut.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/identity/roles/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.identityRoleUpdateDto,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     */
    async apiIdentityRolesIdPut(requestParameters: ApiIdentityRolesIdPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<IdentityRoleDto> {
        const response = await this.apiIdentityRolesIdPutRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiIdentityRolesPostRaw(requestParameters: ApiIdentityRolesPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<IdentityRoleDto>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/identity/roles`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.identityRoleCreateDto,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     */
    async apiIdentityRolesPost(requestParameters: ApiIdentityRolesPostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<IdentityRoleDto> {
        const response = await this.apiIdentityRolesPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}