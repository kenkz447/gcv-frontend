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
 * @interface IdentityUserDto
 */
export interface IdentityUserDto {
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof IdentityUserDto
     */
    readonly extraProperties?: { [key: string]: any; } | null;
    /**
     * 
     * @type {string}
     * @memberof IdentityUserDto
     */
    id?: string;
    /**
     * 
     * @type {Date}
     * @memberof IdentityUserDto
     */
    creationTime?: Date;
    /**
     * 
     * @type {string}
     * @memberof IdentityUserDto
     */
    creatorId?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof IdentityUserDto
     */
    lastModificationTime?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof IdentityUserDto
     */
    lastModifierId?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof IdentityUserDto
     */
    isDeleted?: boolean;
    /**
     * 
     * @type {string}
     * @memberof IdentityUserDto
     */
    deleterId?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof IdentityUserDto
     */
    deletionTime?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof IdentityUserDto
     */
    tenantId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof IdentityUserDto
     */
    userName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof IdentityUserDto
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof IdentityUserDto
     */
    surname?: string | null;
    /**
     * 
     * @type {string}
     * @memberof IdentityUserDto
     */
    email?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof IdentityUserDto
     */
    emailConfirmed?: boolean;
    /**
     * 
     * @type {string}
     * @memberof IdentityUserDto
     */
    phoneNumber?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof IdentityUserDto
     */
    phoneNumberConfirmed?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof IdentityUserDto
     */
    isActive?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof IdentityUserDto
     */
    lockoutEnabled?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof IdentityUserDto
     */
    lockoutEnd?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof IdentityUserDto
     */
    concurrencyStamp?: string | null;
}

/**
 * Check if a given object implements the IdentityUserDto interface.
 */
export function instanceOfIdentityUserDto(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IdentityUserDtoFromJSON(json: any): IdentityUserDto {
    return IdentityUserDtoFromJSONTyped(json, false);
}

export function IdentityUserDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): IdentityUserDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'extraProperties': !exists(json, 'extraProperties') ? undefined : json['extraProperties'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'creationTime': !exists(json, 'creationTime') ? undefined : (new Date(json['creationTime'])),
        'creatorId': !exists(json, 'creatorId') ? undefined : json['creatorId'],
        'lastModificationTime': !exists(json, 'lastModificationTime') ? undefined : (json['lastModificationTime'] === null ? null : new Date(json['lastModificationTime'])),
        'lastModifierId': !exists(json, 'lastModifierId') ? undefined : json['lastModifierId'],
        'isDeleted': !exists(json, 'isDeleted') ? undefined : json['isDeleted'],
        'deleterId': !exists(json, 'deleterId') ? undefined : json['deleterId'],
        'deletionTime': !exists(json, 'deletionTime') ? undefined : (json['deletionTime'] === null ? null : new Date(json['deletionTime'])),
        'tenantId': !exists(json, 'tenantId') ? undefined : json['tenantId'],
        'userName': !exists(json, 'userName') ? undefined : json['userName'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'surname': !exists(json, 'surname') ? undefined : json['surname'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'emailConfirmed': !exists(json, 'emailConfirmed') ? undefined : json['emailConfirmed'],
        'phoneNumber': !exists(json, 'phoneNumber') ? undefined : json['phoneNumber'],
        'phoneNumberConfirmed': !exists(json, 'phoneNumberConfirmed') ? undefined : json['phoneNumberConfirmed'],
        'isActive': !exists(json, 'isActive') ? undefined : json['isActive'],
        'lockoutEnabled': !exists(json, 'lockoutEnabled') ? undefined : json['lockoutEnabled'],
        'lockoutEnd': !exists(json, 'lockoutEnd') ? undefined : (json['lockoutEnd'] === null ? null : new Date(json['lockoutEnd'])),
        'concurrencyStamp': !exists(json, 'concurrencyStamp') ? undefined : json['concurrencyStamp'],
    };
}

export function IdentityUserDtoToJSON(value?: IdentityUserDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'creationTime': value.creationTime === undefined ? undefined : (value.creationTime.toISOString()),
        'creatorId': value.creatorId,
        'lastModificationTime': value.lastModificationTime === undefined ? undefined : (value.lastModificationTime === null ? null : value.lastModificationTime.toISOString()),
        'lastModifierId': value.lastModifierId,
        'isDeleted': value.isDeleted,
        'deleterId': value.deleterId,
        'deletionTime': value.deletionTime === undefined ? undefined : (value.deletionTime === null ? null : value.deletionTime.toISOString()),
        'tenantId': value.tenantId,
        'userName': value.userName,
        'name': value.name,
        'surname': value.surname,
        'email': value.email,
        'emailConfirmed': value.emailConfirmed,
        'phoneNumber': value.phoneNumber,
        'phoneNumberConfirmed': value.phoneNumberConfirmed,
        'isActive': value.isActive,
        'lockoutEnabled': value.lockoutEnabled,
        'lockoutEnd': value.lockoutEnd === undefined ? undefined : (value.lockoutEnd === null ? null : value.lockoutEnd.toISOString()),
        'concurrencyStamp': value.concurrencyStamp,
    };
}
