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
 * 
 * @export
 * @interface SetLocationUpdate
 */
export interface SetLocationUpdate extends BaseUpdate {
    /**
     * 
     * @type {string}
     * @memberof SetLocationUpdate
     */
    action: string;
    /**
     * 
     * @type {string}
     * @memberof SetLocationUpdate
     */
    location: string;
}

/**
 * Check if a given object implements the SetLocationUpdate interface.
 */
export function instanceOfSetLocationUpdate(value: object): value is SetLocationUpdate {
    if (!('location' in value) || value['location'] === undefined) return false;
    return true;
}

export function SetLocationUpdateFromJSON(json: any): SetLocationUpdate {
    return SetLocationUpdateFromJSONTyped(json, false);
}

export function SetLocationUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): SetLocationUpdate {
    if (json == null) {
        return json;
    }
    return {
        ...BaseUpdateFromJSONTyped(json, true),
        'action': json['action'] == null ? undefined : json['action'],
        'location': json['location'],
    };
}

export function SetLocationUpdateToJSON(json: any): SetLocationUpdate {
    return SetLocationUpdateToJSONTyped(json, false);
}

export function SetLocationUpdateToJSONTyped(value?: SetLocationUpdate | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        ...BaseUpdateToJSONTyped(value, true),
        'action': value['action'],
        'location': value['location'],
    };
}

