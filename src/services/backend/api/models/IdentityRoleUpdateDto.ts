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
 * @interface IdentityRoleUpdateDto
 */
export interface IdentityRoleUpdateDto {
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof IdentityRoleUpdateDto
     */
    readonly extraProperties?: { [key: string]: any; } | null;
    /**
     * 
     * @type {string}
     * @memberof IdentityRoleUpdateDto
     */
    name: string;
    /**
     * 
     * @type {boolean}
     * @memberof IdentityRoleUpdateDto
     */
    isDefault?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof IdentityRoleUpdateDto
     */
    isPublic?: boolean;
    /**
     * 
     * @type {string}
     * @memberof IdentityRoleUpdateDto
     */
    concurrencyStamp?: string | null;
}

/**
 * Check if a given object implements the IdentityRoleUpdateDto interface.
 */
export function instanceOfIdentityRoleUpdateDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function IdentityRoleUpdateDtoFromJSON(json: any): IdentityRoleUpdateDto {
    return IdentityRoleUpdateDtoFromJSONTyped(json, false);
}

export function IdentityRoleUpdateDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): IdentityRoleUpdateDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'extraProperties': !exists(json, 'extraProperties') ? undefined : json['extraProperties'],
        'name': json['name'],
        'isDefault': !exists(json, 'isDefault') ? undefined : json['isDefault'],
        'isPublic': !exists(json, 'isPublic') ? undefined : json['isPublic'],
        'concurrencyStamp': !exists(json, 'concurrencyStamp') ? undefined : json['concurrencyStamp'],
    };
}

export function IdentityRoleUpdateDtoToJSON(value?: IdentityRoleUpdateDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'isDefault': value.isDefault,
        'isPublic': value.isPublic,
        'concurrencyStamp': value.concurrencyStamp,
    };
}
