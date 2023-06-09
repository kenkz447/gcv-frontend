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
import type { IanaTimeZone } from './IanaTimeZone';
import {
    IanaTimeZoneFromJSON,
    IanaTimeZoneFromJSONTyped,
    IanaTimeZoneToJSON,
} from './IanaTimeZone';
import type { WindowsTimeZone } from './WindowsTimeZone';
import {
    WindowsTimeZoneFromJSON,
    WindowsTimeZoneFromJSONTyped,
    WindowsTimeZoneToJSON,
} from './WindowsTimeZone';

/**
 * 
 * @export
 * @interface TimeZone
 */
export interface TimeZone {
    /**
     * 
     * @type {IanaTimeZone}
     * @memberof TimeZone
     */
    iana?: IanaTimeZone;
    /**
     * 
     * @type {WindowsTimeZone}
     * @memberof TimeZone
     */
    windows?: WindowsTimeZone;
}

/**
 * Check if a given object implements the TimeZone interface.
 */
export function instanceOfTimeZone(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TimeZoneFromJSON(json: any): TimeZone {
    return TimeZoneFromJSONTyped(json, false);
}

export function TimeZoneFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimeZone {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'iana': !exists(json, 'iana') ? undefined : IanaTimeZoneFromJSON(json['iana']),
        'windows': !exists(json, 'windows') ? undefined : WindowsTimeZoneFromJSON(json['windows']),
    };
}

export function TimeZoneToJSON(value?: TimeZone | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'iana': IanaTimeZoneToJSON(value.iana),
        'windows': WindowsTimeZoneToJSON(value.windows),
    };
}

