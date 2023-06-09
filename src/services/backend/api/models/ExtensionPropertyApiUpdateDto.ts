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
/**
 * 
 * @export
 * @interface ExtensionPropertyApiUpdateDto
 */
export interface ExtensionPropertyApiUpdateDto {
    /**
     * 
     * @type {boolean}
     * @memberof ExtensionPropertyApiUpdateDto
     */
    isAvailable?: boolean;
}

/**
 * Check if a given object implements the ExtensionPropertyApiUpdateDto interface.
 */
export function instanceOfExtensionPropertyApiUpdateDto(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ExtensionPropertyApiUpdateDtoFromJSON(json: any): ExtensionPropertyApiUpdateDto {
    return ExtensionPropertyApiUpdateDtoFromJSONTyped(json, false);
}

export function ExtensionPropertyApiUpdateDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExtensionPropertyApiUpdateDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'isAvailable': !exists(json, 'isAvailable') ? undefined : json['isAvailable'],
    };
}

export function ExtensionPropertyApiUpdateDtoToJSON(value?: ExtensionPropertyApiUpdateDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'isAvailable': value.isAvailable,
    };
}

