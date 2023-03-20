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
 * @interface CurrentTenantDto
 */
export interface CurrentTenantDto {
    /**
     * 
     * @type {string}
     * @memberof CurrentTenantDto
     */
    id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CurrentTenantDto
     */
    name?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof CurrentTenantDto
     */
    isAvailable?: boolean;
}

/**
 * Check if a given object implements the CurrentTenantDto interface.
 */
export function instanceOfCurrentTenantDto(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CurrentTenantDtoFromJSON(json: any): CurrentTenantDto {
    return CurrentTenantDtoFromJSONTyped(json, false);
}

export function CurrentTenantDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CurrentTenantDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'isAvailable': !exists(json, 'isAvailable') ? undefined : json['isAvailable'],
    };
}

export function CurrentTenantDtoToJSON(value?: CurrentTenantDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'isAvailable': value.isAvailable,
    };
}

