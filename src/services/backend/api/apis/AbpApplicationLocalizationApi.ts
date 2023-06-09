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
  ApplicationLocalizationDto,
  RemoteServiceErrorResponse,
} from '../models';

export interface ApiAbpApplicationLocalizationGetRequest {
    cultureName: string;
    onlyDynamics?: boolean;
}

/**
 * 
 */
export class AbpApplicationLocalizationApi extends runtime.BaseAPI {

    /**
     */
    private apiAbpApplicationLocalizationGetRaw = async (requestParameters: ApiAbpApplicationLocalizationGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApplicationLocalizationDto>> => {
        if (requestParameters.cultureName === null || requestParameters.cultureName === undefined) {
            throw new runtime.RequiredError('cultureName','Required parameter requestParameters.cultureName was null or undefined when calling apiAbpApplicationLocalizationGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.cultureName !== undefined) {
            queryParameters['CultureName'] = requestParameters.cultureName;
        }

        if (requestParameters.onlyDynamics !== undefined) {
            queryParameters['OnlyDynamics'] = requestParameters.onlyDynamics;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/abp/application-localization`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     */
    public apiAbpApplicationLocalizationGet = async (requestParameters: ApiAbpApplicationLocalizationGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApplicationLocalizationDto> => {
        const response = await this.apiAbpApplicationLocalizationGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
