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
 * @interface VerifyPasswordResetTokenInput
 */
export interface VerifyPasswordResetTokenInput {
    /**
     * 
     * @type {string}
     * @memberof VerifyPasswordResetTokenInput
     */
    userId?: string;
    /**
     * 
     * @type {string}
     * @memberof VerifyPasswordResetTokenInput
     */
    resetToken: string;
}

/**
 * Check if a given object implements the VerifyPasswordResetTokenInput interface.
 */
export function instanceOfVerifyPasswordResetTokenInput(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "resetToken" in value;

    return isInstance;
}

export function VerifyPasswordResetTokenInputFromJSON(json: any): VerifyPasswordResetTokenInput {
    return VerifyPasswordResetTokenInputFromJSONTyped(json, false);
}

export function VerifyPasswordResetTokenInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): VerifyPasswordResetTokenInput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'resetToken': json['resetToken'],
    };
}

export function VerifyPasswordResetTokenInputToJSON(value?: VerifyPasswordResetTokenInput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'userId': value.userId,
        'resetToken': value.resetToken,
    };
}

