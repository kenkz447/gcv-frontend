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
import type { ExtensionEnumFieldDto } from './ExtensionEnumFieldDto';
import {
    ExtensionEnumFieldDtoFromJSON,
    ExtensionEnumFieldDtoFromJSONTyped,
    ExtensionEnumFieldDtoToJSON,
} from './ExtensionEnumFieldDto';

/**
 * 
 * @export
 * @interface ExtensionEnumDto
 */
export interface ExtensionEnumDto {
    /**
     * 
     * @type {Array<ExtensionEnumFieldDto>}
     * @memberof ExtensionEnumDto
     */
    fields?: Array<ExtensionEnumFieldDto> | null;
    /**
     * 
     * @type {string}
     * @memberof ExtensionEnumDto
     */
    localizationResource?: string | null;
}

/**
 * Check if a given object implements the ExtensionEnumDto interface.
 */
export function instanceOfExtensionEnumDto(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ExtensionEnumDtoFromJSON(json: any): ExtensionEnumDto {
    return ExtensionEnumDtoFromJSONTyped(json, false);
}

export function ExtensionEnumDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExtensionEnumDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fields': !exists(json, 'fields') ? undefined : (json['fields'] === null ? null : (json['fields'] as Array<any>).map(ExtensionEnumFieldDtoFromJSON)),
        'localizationResource': !exists(json, 'localizationResource') ? undefined : json['localizationResource'],
    };
}

export function ExtensionEnumDtoToJSON(value?: ExtensionEnumDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fields': value.fields === undefined ? undefined : (value.fields === null ? null : (value.fields as Array<any>).map(ExtensionEnumFieldDtoToJSON)),
        'localizationResource': value.localizationResource,
    };
}

