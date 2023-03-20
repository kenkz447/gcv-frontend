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
import type { ExtensionPropertyDto } from './ExtensionPropertyDto';
import {
    ExtensionPropertyDtoFromJSON,
    ExtensionPropertyDtoFromJSONTyped,
    ExtensionPropertyDtoToJSON,
} from './ExtensionPropertyDto';

/**
 * 
 * @export
 * @interface EntityExtensionDto
 */
export interface EntityExtensionDto {
    /**
     * 
     * @type {{ [key: string]: ExtensionPropertyDto; }}
     * @memberof EntityExtensionDto
     */
    properties?: { [key: string]: ExtensionPropertyDto; } | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof EntityExtensionDto
     */
    _configuration?: { [key: string]: any; } | null;
}

/**
 * Check if a given object implements the EntityExtensionDto interface.
 */
export function instanceOfEntityExtensionDto(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EntityExtensionDtoFromJSON(json: any): EntityExtensionDto {
    return EntityExtensionDtoFromJSONTyped(json, false);
}

export function EntityExtensionDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): EntityExtensionDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'properties': !exists(json, 'properties') ? undefined : (json['properties'] === null ? null : mapValues(json['properties'], ExtensionPropertyDtoFromJSON)),
        '_configuration': !exists(json, 'configuration') ? undefined : json['configuration'],
    };
}

export function EntityExtensionDtoToJSON(value?: EntityExtensionDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'properties': value.properties === undefined ? undefined : (value.properties === null ? null : mapValues(value.properties, ExtensionPropertyDtoToJSON)),
        'configuration': value._configuration,
    };
}

