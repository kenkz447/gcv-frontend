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
 * @interface TenantCreateDto
 */
export interface TenantCreateDto {
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof TenantCreateDto
     */
    readonly extraProperties?: { [key: string]: any; } | null;
    /**
     * 
     * @type {string}
     * @memberof TenantCreateDto
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof TenantCreateDto
     */
    adminEmailAddress: string;
    /**
     * 
     * @type {string}
     * @memberof TenantCreateDto
     */
    adminPassword: string;
}

/**
 * Check if a given object implements the TenantCreateDto interface.
 */
export function instanceOfTenantCreateDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "adminEmailAddress" in value;
    isInstance = isInstance && "adminPassword" in value;

    return isInstance;
}

export function TenantCreateDtoFromJSON(json: any): TenantCreateDto {
    return TenantCreateDtoFromJSONTyped(json, false);
}

export function TenantCreateDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): TenantCreateDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'extraProperties': !exists(json, 'extraProperties') ? undefined : json['extraProperties'],
        'name': json['name'],
        'adminEmailAddress': json['adminEmailAddress'],
        'adminPassword': json['adminPassword'],
    };
}

export function TenantCreateDtoToJSON(value?: TenantCreateDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'adminEmailAddress': value.adminEmailAddress,
        'adminPassword': value.adminPassword,
    };
}

