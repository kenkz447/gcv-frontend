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
  ApplicationConfigurationDto,
  RemoteServiceErrorResponse,
} from '../models';

export interface ApiAbpApplicationConfigurationGetRequest {
    includeLocalizationResources?: boolean;
}

/**
 * 
 */
export class AbpApplicationConfigurationApi extends runtime.BaseAPI {

    /**
     */
    private apiAbpApplicationConfigurationGetRaw = async (requestParameters: ApiAbpApplicationConfigurationGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApplicationConfigurationDto>> => {
        const queryParameters: any = {};

        if (requestParameters.includeLocalizationResources !== undefined) {
            queryParameters['IncludeLocalizationResources'] = requestParameters.includeLocalizationResources;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/abp/application-configuration`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     */
    public apiAbpApplicationConfigurationGet = async (requestParameters: ApiAbpApplicationConfigurationGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApplicationConfigurationDto> => {
        const response = await this.apiAbpApplicationConfigurationGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
