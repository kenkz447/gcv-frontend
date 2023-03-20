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
 * @interface ApplicationLocalizationResourceDto
 */
export interface ApplicationLocalizationResourceDto {
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof ApplicationLocalizationResourceDto
     */
    texts?: { [key: string]: string; } | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ApplicationLocalizationResourceDto
     */
    baseResources?: Array<string> | null;
}

/**
 * Check if a given object implements the ApplicationLocalizationResourceDto interface.
 */
export function instanceOfApplicationLocalizationResourceDto(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ApplicationLocalizationResourceDtoFromJSON(json: any): ApplicationLocalizationResourceDto {
    return ApplicationLocalizationResourceDtoFromJSONTyped(json, false);
}

export function ApplicationLocalizationResourceDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApplicationLocalizationResourceDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'texts': !exists(json, 'texts') ? undefined : json['texts'],
        'baseResources': !exists(json, 'baseResources') ? undefined : json['baseResources'],
    };
}

export function ApplicationLocalizationResourceDtoToJSON(value?: ApplicationLocalizationResourceDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'texts': value.texts,
        'baseResources': value.baseResources,
    };
}
