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
import type { ModuleApiDescriptionModel } from './ModuleApiDescriptionModel';
import {
    ModuleApiDescriptionModelFromJSON,
    ModuleApiDescriptionModelFromJSONTyped,
    ModuleApiDescriptionModelToJSON,
} from './ModuleApiDescriptionModel';
import type { TypeApiDescriptionModel } from './TypeApiDescriptionModel';
import {
    TypeApiDescriptionModelFromJSON,
    TypeApiDescriptionModelFromJSONTyped,
    TypeApiDescriptionModelToJSON,
} from './TypeApiDescriptionModel';

/**
 * 
 * @export
 * @interface ApplicationApiDescriptionModel
 */
export interface ApplicationApiDescriptionModel {
    /**
     * 
     * @type {{ [key: string]: ModuleApiDescriptionModel; }}
     * @memberof ApplicationApiDescriptionModel
     */
    modules?: { [key: string]: ModuleApiDescriptionModel; } | null;
    /**
     * 
     * @type {{ [key: string]: TypeApiDescriptionModel; }}
     * @memberof ApplicationApiDescriptionModel
     */
    types?: { [key: string]: TypeApiDescriptionModel; } | null;
}

/**
 * Check if a given object implements the ApplicationApiDescriptionModel interface.
 */
export function instanceOfApplicationApiDescriptionModel(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ApplicationApiDescriptionModelFromJSON(json: any): ApplicationApiDescriptionModel {
    return ApplicationApiDescriptionModelFromJSONTyped(json, false);
}

export function ApplicationApiDescriptionModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApplicationApiDescriptionModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'modules': !exists(json, 'modules') ? undefined : (json['modules'] === null ? null : mapValues(json['modules'], ModuleApiDescriptionModelFromJSON)),
        'types': !exists(json, 'types') ? undefined : (json['types'] === null ? null : mapValues(json['types'], TypeApiDescriptionModelFromJSON)),
    };
}

export function ApplicationApiDescriptionModelToJSON(value?: ApplicationApiDescriptionModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'modules': value.modules === undefined ? undefined : (value.modules === null ? null : mapValues(value.modules, ModuleApiDescriptionModelToJSON)),
        'types': value.types === undefined ? undefined : (value.types === null ? null : mapValues(value.types, TypeApiDescriptionModelToJSON)),
    };
}

