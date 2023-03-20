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
import type { IdentityRoleDto } from './IdentityRoleDto';
import {
    IdentityRoleDtoFromJSON,
    IdentityRoleDtoFromJSONTyped,
    IdentityRoleDtoToJSON,
} from './IdentityRoleDto';

/**
 * 
 * @export
 * @interface IdentityRoleDtoPagedResultDto
 */
export interface IdentityRoleDtoPagedResultDto {
    /**
     * 
     * @type {Array<IdentityRoleDto>}
     * @memberof IdentityRoleDtoPagedResultDto
     */
    items?: Array<IdentityRoleDto> | null;
    /**
     * 
     * @type {number}
     * @memberof IdentityRoleDtoPagedResultDto
     */
    totalCount?: number;
}

/**
 * Check if a given object implements the IdentityRoleDtoPagedResultDto interface.
 */
export function instanceOfIdentityRoleDtoPagedResultDto(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IdentityRoleDtoPagedResultDtoFromJSON(json: any): IdentityRoleDtoPagedResultDto {
    return IdentityRoleDtoPagedResultDtoFromJSONTyped(json, false);
}

export function IdentityRoleDtoPagedResultDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): IdentityRoleDtoPagedResultDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'items': !exists(json, 'items') ? undefined : (json['items'] === null ? null : (json['items'] as Array<any>).map(IdentityRoleDtoFromJSON)),
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
    };
}

export function IdentityRoleDtoPagedResultDtoToJSON(value?: IdentityRoleDtoPagedResultDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'items': value.items === undefined ? undefined : (value.items === null ? null : (value.items as Array<any>).map(IdentityRoleDtoToJSON)),
        'totalCount': value.totalCount,
    };
}

