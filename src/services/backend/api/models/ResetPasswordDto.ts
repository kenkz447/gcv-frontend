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
 * @interface ResetPasswordDto
 */
export interface ResetPasswordDto {
    /**
     * 
     * @type {string}
     * @memberof ResetPasswordDto
     */
    userId?: string;
    /**
     * 
     * @type {string}
     * @memberof ResetPasswordDto
     */
    resetToken: string;
    /**
     * 
     * @type {string}
     * @memberof ResetPasswordDto
     */
    password: string;
}

/**
 * Check if a given object implements the ResetPasswordDto interface.
 */
export function instanceOfResetPasswordDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "resetToken" in value;
    isInstance = isInstance && "password" in value;

    return isInstance;
}

export function ResetPasswordDtoFromJSON(json: any): ResetPasswordDto {
    return ResetPasswordDtoFromJSONTyped(json, false);
}

export function ResetPasswordDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResetPasswordDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'resetToken': json['resetToken'],
        'password': json['password'],
    };
}

export function ResetPasswordDtoToJSON(value?: ResetPasswordDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'userId': value.userId,
        'resetToken': value.resetToken,
        'password': value.password,
    };
}

