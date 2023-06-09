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
 * @interface TenantDto
 */
export interface TenantDto {
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof TenantDto
     */
    readonly extraProperties?: { [key: string]: any; } | null;
    /**
     * 
     * @type {string}
     * @memberof TenantDto
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof TenantDto
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TenantDto
     */
    concurrencyStamp?: string | null;
}

/**
 * Check if a given object implements the TenantDto interface.
 */
export function instanceOfTenantDto(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TenantDtoFromJSON(json: any): TenantDto {
    return TenantDtoFromJSONTyped(json, false);
}

export function TenantDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): TenantDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'extraProperties': !exists(json, 'extraProperties') ? undefined : json['extraProperties'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'concurrencyStamp': !exists(json, 'concurrencyStamp') ? undefined : json['concurrencyStamp'],
    };
}

export function TenantDtoToJSON(value?: TenantDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'concurrencyStamp': value.concurrencyStamp,
    };
}

