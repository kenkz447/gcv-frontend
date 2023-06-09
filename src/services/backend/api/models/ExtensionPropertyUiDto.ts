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
import type { ExtensionPropertyUiFormDto } from './ExtensionPropertyUiFormDto';
import {
    ExtensionPropertyUiFormDtoFromJSON,
    ExtensionPropertyUiFormDtoFromJSONTyped,
    ExtensionPropertyUiFormDtoToJSON,
} from './ExtensionPropertyUiFormDto';
import type { ExtensionPropertyUiLookupDto } from './ExtensionPropertyUiLookupDto';
import {
    ExtensionPropertyUiLookupDtoFromJSON,
    ExtensionPropertyUiLookupDtoFromJSONTyped,
    ExtensionPropertyUiLookupDtoToJSON,
} from './ExtensionPropertyUiLookupDto';
import type { ExtensionPropertyUiTableDto } from './ExtensionPropertyUiTableDto';
import {
    ExtensionPropertyUiTableDtoFromJSON,
    ExtensionPropertyUiTableDtoFromJSONTyped,
    ExtensionPropertyUiTableDtoToJSON,
} from './ExtensionPropertyUiTableDto';

/**
 * 
 * @export
 * @interface ExtensionPropertyUiDto
 */
export interface ExtensionPropertyUiDto {
    /**
     * 
     * @type {ExtensionPropertyUiTableDto}
     * @memberof ExtensionPropertyUiDto
     */
    onTable?: ExtensionPropertyUiTableDto;
    /**
     * 
     * @type {ExtensionPropertyUiFormDto}
     * @memberof ExtensionPropertyUiDto
     */
    onCreateForm?: ExtensionPropertyUiFormDto;
    /**
     * 
     * @type {ExtensionPropertyUiFormDto}
     * @memberof ExtensionPropertyUiDto
     */
    onEditForm?: ExtensionPropertyUiFormDto;
    /**
     * 
     * @type {ExtensionPropertyUiLookupDto}
     * @memberof ExtensionPropertyUiDto
     */
    lookup?: ExtensionPropertyUiLookupDto;
}

/**
 * Check if a given object implements the ExtensionPropertyUiDto interface.
 */
export function instanceOfExtensionPropertyUiDto(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ExtensionPropertyUiDtoFromJSON(json: any): ExtensionPropertyUiDto {
    return ExtensionPropertyUiDtoFromJSONTyped(json, false);
}

export function ExtensionPropertyUiDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExtensionPropertyUiDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'onTable': !exists(json, 'onTable') ? undefined : ExtensionPropertyUiTableDtoFromJSON(json['onTable']),
        'onCreateForm': !exists(json, 'onCreateForm') ? undefined : ExtensionPropertyUiFormDtoFromJSON(json['onCreateForm']),
        'onEditForm': !exists(json, 'onEditForm') ? undefined : ExtensionPropertyUiFormDtoFromJSON(json['onEditForm']),
        'lookup': !exists(json, 'lookup') ? undefined : ExtensionPropertyUiLookupDtoFromJSON(json['lookup']),
    };
}

export function ExtensionPropertyUiDtoToJSON(value?: ExtensionPropertyUiDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'onTable': ExtensionPropertyUiTableDtoToJSON(value.onTable),
        'onCreateForm': ExtensionPropertyUiFormDtoToJSON(value.onCreateForm),
        'onEditForm': ExtensionPropertyUiFormDtoToJSON(value.onEditForm),
        'lookup': ExtensionPropertyUiLookupDtoToJSON(value.lookup),
    };
}

