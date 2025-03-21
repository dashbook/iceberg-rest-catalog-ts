/* tslint:disable */
/* eslint-disable */
/**
 * Apache Iceberg REST Catalog API
 * Defines the specification for the first version of the REST Catalog API. Implementations should ideally support both Iceberg table specs v1 and v2, with priority given to v2.
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { BaseUpdate } from './BaseUpdate';
import {
    BaseUpdateFromJSON,
    BaseUpdateFromJSONTyped,
    BaseUpdateToJSON,
    BaseUpdateToJSONTyped,
} from './BaseUpdate';

/**
 * Assigning a UUID to a table/view should only be done when creating the table/view. It is not safe to re-assign the UUID if a table/view already has a UUID assigned
 * @export
 * @interface AssignUUIDUpdate
 */
export interface AssignUUIDUpdate extends BaseUpdate {
    /**
     * 
     * @type {string}
     * @memberof AssignUUIDUpdate
     */
    action: string;
    /**
     * 
     * @type {string}
     * @memberof AssignUUIDUpdate
     */
    uuid: string;
}

/**
 * Check if a given object implements the AssignUUIDUpdate interface.
 */
export function instanceOfAssignUUIDUpdate(value: object): value is AssignUUIDUpdate {
    if (!('uuid' in value) || value['uuid'] === undefined) return false;
    return true;
}

export function AssignUUIDUpdateFromJSON(json: any): AssignUUIDUpdate {
    return AssignUUIDUpdateFromJSONTyped(json, false);
}

export function AssignUUIDUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): AssignUUIDUpdate {
    if (json == null) {
        return json;
    }
    return {
        ...BaseUpdateFromJSONTyped(json, true),
        'action': json['action'] == null ? undefined : json['action'],
        'uuid': json['uuid'],
    };
}

export function AssignUUIDUpdateToJSON(json: any): AssignUUIDUpdate {
    return AssignUUIDUpdateToJSONTyped(json, false);
}

export function AssignUUIDUpdateToJSONTyped(value?: AssignUUIDUpdate | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        ...BaseUpdateToJSONTyped(value, true),
        'action': value['action'],
        'uuid': value['uuid'],
    };
}

