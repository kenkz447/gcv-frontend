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
import type { PermissionGroupDto } from './PermissionGroupDto';
import {
    PermissionGroupDtoFromJSON,
    PermissionGroupDtoFromJSONTyped,
    PermissionGroupDtoToJSON,
} from './PermissionGroupDto';

/**
 * 
 * @export
 * @interface GetPermissionListResultDto
 */
export interface GetPermissionListResultDto {
    /**
     * 
     * @type {string}
     * @memberof GetPermissionListResultDto
     */
    entityDisplayName?: string | null;
    /**
     * 
     * @type {Array<PermissionGroupDto>}
     * @memberof GetPermissionListResultDto
     */
    groups?: Array<PermissionGroupDto> | null;
}

/**
 * Check if a given object implements the GetPermissionListResultDto interface.
 */
export function instanceOfGetPermissionListResultDto(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetPermissionListResultDtoFromJSON(json: any): GetPermissionListResultDto {
    return GetPermissionListResultDtoFromJSONTyped(json, false);
}

export function GetPermissionListResultDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetPermissionListResultDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'entityDisplayName': !exists(json, 'entityDisplayName') ? undefined : json['entityDisplayName'],
        'groups': !exists(json, 'groups') ? undefined : (json['groups'] === null ? null : (json['groups'] as Array<any>).map(PermissionGroupDtoFromJSON)),
    };
}

export function GetPermissionListResultDtoToJSON(value?: GetPermissionListResultDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'entityDisplayName': value.entityDisplayName,
        'groups': value.groups === undefined ? undefined : (value.groups === null ? null : (value.groups as Array<any>).map(PermissionGroupDtoToJSON)),
    };
}

