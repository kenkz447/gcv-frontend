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
 * @interface WindowsTimeZone
 */
export interface WindowsTimeZone {
    /**
     * 
     * @type {string}
     * @memberof WindowsTimeZone
     */
    timeZoneId?: string | null;
}

/**
 * Check if a given object implements the WindowsTimeZone interface.
 */
export function instanceOfWindowsTimeZone(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function WindowsTimeZoneFromJSON(json: any): WindowsTimeZone {
    return WindowsTimeZoneFromJSONTyped(json, false);
}

export function WindowsTimeZoneFromJSONTyped(json: any, ignoreDiscriminator: boolean): WindowsTimeZone {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'timeZoneId': !exists(json, 'timeZoneId') ? undefined : json['timeZoneId'],
    };
}

export function WindowsTimeZoneToJSON(value?: WindowsTimeZone | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'timeZoneId': value.timeZoneId,
    };
}

