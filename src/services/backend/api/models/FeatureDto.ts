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

import { exists, mapValues } from '../runtime';
import type { FeatureProviderDto } from './FeatureProviderDto';
import {
    FeatureProviderDtoFromJSON,
    FeatureProviderDtoFromJSONTyped,
    FeatureProviderDtoToJSON,
} from './FeatureProviderDto';
import type { IStringValueType } from './IStringValueType';
import {
    IStringValueTypeFromJSON,
    IStringValueTypeFromJSONTyped,
    IStringValueTypeToJSON,
} from './IStringValueType';

/**
 * 
 * @export
 * @interface FeatureDto
 */
export interface FeatureDto {
    /**
     * 
     * @type {string}
     * @memberof FeatureDto
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FeatureDto
     */
    displayName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FeatureDto
     */
    value?: string | null;
    /**
     * 
     * @type {FeatureProviderDto}
     * @memberof FeatureDto
     */
    provider?: FeatureProviderDto;
    /**
     * 
     * @type {string}
     * @memberof FeatureDto
     */
    description?: string | null;
    /**
     * 
     * @type {IStringValueType}
     * @memberof FeatureDto
     */
    valueType?: IStringValueType;
    /**
     * 
     * @type {number}
     * @memberof FeatureDto
     */
    depth?: number;
    /**
     * 
     * @type {string}
     * @memberof FeatureDto
     */
    parentName?: string | null;
}

/**
 * Check if a given object implements the FeatureDto interface.
 */
export function instanceOfFeatureDto(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FeatureDtoFromJSON(json: any): FeatureDto {
    return FeatureDtoFromJSONTyped(json, false);
}

export function FeatureDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): FeatureDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'displayName': !exists(json, 'displayName') ? undefined : json['displayName'],
        'value': !exists(json, 'value') ? undefined : json['value'],
        'provider': !exists(json, 'provider') ? undefined : FeatureProviderDtoFromJSON(json['provider']),
        'description': !exists(json, 'description') ? undefined : json['description'],
        'valueType': !exists(json, 'valueType') ? undefined : IStringValueTypeFromJSON(json['valueType']),
        'depth': !exists(json, 'depth') ? undefined : json['depth'],
        'parentName': !exists(json, 'parentName') ? undefined : json['parentName'],
    };
}

export function FeatureDtoToJSON(value?: FeatureDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'displayName': value.displayName,
        'value': value.value,
        'provider': FeatureProviderDtoToJSON(value.provider),
        'description': value.description,
        'valueType': IStringValueTypeToJSON(value.valueType),
        'depth': value.depth,
        'parentName': value.parentName,
    };
}
