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
import type { UpdatePermissionDto } from './UpdatePermissionDto';
import {
    UpdatePermissionDtoFromJSON,
    UpdatePermissionDtoFromJSONTyped,
    UpdatePermissionDtoToJSON,
} from './UpdatePermissionDto';

/**
 * 
 * @export
 * @interface UpdatePermissionsDto
 */
export interface UpdatePermissionsDto {
    /**
     * 
     * @type {Array<UpdatePermissionDto>}
     * @memberof UpdatePermissionsDto
     */
    permissions?: Array<UpdatePermissionDto> | null;
}

/**
 * Check if a given object implements the UpdatePermissionsDto interface.
 */
export function instanceOfUpdatePermissionsDto(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UpdatePermissionsDtoFromJSON(json: any): UpdatePermissionsDto {
    return UpdatePermissionsDtoFromJSONTyped(json, false);
}

export function UpdatePermissionsDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdatePermissionsDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'permissions': !exists(json, 'permissions') ? undefined : (json['permissions'] === null ? null : (json['permissions'] as Array<any>).map(UpdatePermissionDtoFromJSON)),
    };
}

export function UpdatePermissionsDtoToJSON(value?: UpdatePermissionsDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'permissions': value.permissions === undefined ? undefined : (value.permissions === null ? null : (value.permissions as Array<any>).map(UpdatePermissionDtoToJSON)),
    };
}

