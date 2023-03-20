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
import type { ExtensionPropertyApiCreateDto } from './ExtensionPropertyApiCreateDto';
import {
    ExtensionPropertyApiCreateDtoFromJSON,
    ExtensionPropertyApiCreateDtoFromJSONTyped,
    ExtensionPropertyApiCreateDtoToJSON,
} from './ExtensionPropertyApiCreateDto';
import type { ExtensionPropertyApiGetDto } from './ExtensionPropertyApiGetDto';
import {
    ExtensionPropertyApiGetDtoFromJSON,
    ExtensionPropertyApiGetDtoFromJSONTyped,
    ExtensionPropertyApiGetDtoToJSON,
} from './ExtensionPropertyApiGetDto';
import type { ExtensionPropertyApiUpdateDto } from './ExtensionPropertyApiUpdateDto';
import {
    ExtensionPropertyApiUpdateDtoFromJSON,
    ExtensionPropertyApiUpdateDtoFromJSONTyped,
    ExtensionPropertyApiUpdateDtoToJSON,
} from './ExtensionPropertyApiUpdateDto';

/**
 * 
 * @export
 * @interface ExtensionPropertyApiDto
 */
export interface ExtensionPropertyApiDto {
    /**
     * 
     * @type {ExtensionPropertyApiGetDto}
     * @memberof ExtensionPropertyApiDto
     */
    onGet?: ExtensionPropertyApiGetDto;
    /**
     * 
     * @type {ExtensionPropertyApiCreateDto}
     * @memberof ExtensionPropertyApiDto
     */
    onCreate?: ExtensionPropertyApiCreateDto;
    /**
     * 
     * @type {ExtensionPropertyApiUpdateDto}
     * @memberof ExtensionPropertyApiDto
     */
    onUpdate?: ExtensionPropertyApiUpdateDto;
}

/**
 * Check if a given object implements the ExtensionPropertyApiDto interface.
 */
export function instanceOfExtensionPropertyApiDto(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ExtensionPropertyApiDtoFromJSON(json: any): ExtensionPropertyApiDto {
    return ExtensionPropertyApiDtoFromJSONTyped(json, false);
}

export function ExtensionPropertyApiDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExtensionPropertyApiDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'onGet': !exists(json, 'onGet') ? undefined : ExtensionPropertyApiGetDtoFromJSON(json['onGet']),
        'onCreate': !exists(json, 'onCreate') ? undefined : ExtensionPropertyApiCreateDtoFromJSON(json['onCreate']),
        'onUpdate': !exists(json, 'onUpdate') ? undefined : ExtensionPropertyApiUpdateDtoFromJSON(json['onUpdate']),
    };
}

export function ExtensionPropertyApiDtoToJSON(value?: ExtensionPropertyApiDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'onGet': ExtensionPropertyApiGetDtoToJSON(value.onGet),
        'onCreate': ExtensionPropertyApiCreateDtoToJSON(value.onCreate),
        'onUpdate': ExtensionPropertyApiUpdateDtoToJSON(value.onUpdate),
    };
}
