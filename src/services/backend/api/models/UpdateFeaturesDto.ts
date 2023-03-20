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
import type { UpdateFeatureDto } from './UpdateFeatureDto';
import {
    UpdateFeatureDtoFromJSON,
    UpdateFeatureDtoFromJSONTyped,
    UpdateFeatureDtoToJSON,
} from './UpdateFeatureDto';

/**
 * 
 * @export
 * @interface UpdateFeaturesDto
 */
export interface UpdateFeaturesDto {
    /**
     * 
     * @type {Array<UpdateFeatureDto>}
     * @memberof UpdateFeaturesDto
     */
    features?: Array<UpdateFeatureDto> | null;
}

/**
 * Check if a given object implements the UpdateFeaturesDto interface.
 */
export function instanceOfUpdateFeaturesDto(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UpdateFeaturesDtoFromJSON(json: any): UpdateFeaturesDto {
    return UpdateFeaturesDtoFromJSONTyped(json, false);
}

export function UpdateFeaturesDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateFeaturesDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'features': !exists(json, 'features') ? undefined : (json['features'] === null ? null : (json['features'] as Array<any>).map(UpdateFeatureDtoFromJSON)),
    };
}

export function UpdateFeaturesDtoToJSON(value?: UpdateFeaturesDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'features': value.features === undefined ? undefined : (value.features === null ? null : (value.features as Array<any>).map(UpdateFeatureDtoToJSON)),
    };
}
