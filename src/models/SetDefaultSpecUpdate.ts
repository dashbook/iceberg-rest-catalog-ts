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
 * @interface SetDefaultSpecUpdate
 */
export interface SetDefaultSpecUpdate extends BaseUpdate {
    /**
     * 
     * @type {string}
     * @memberof SetDefaultSpecUpdate
     */
    action: string;
    /**
     * Partition spec ID to set as the default, or -1 to set last added spec
     * @type {number}
     * @memberof SetDefaultSpecUpdate
     */
    specId: number;
}

/**
 * Check if a given object implements the SetDefaultSpecUpdate interface.
 */
export function instanceOfSetDefaultSpecUpdate(value: object): value is SetDefaultSpecUpdate {
    if (!('specId' in value) || value['specId'] === undefined) return false;
    return true;
}

export function SetDefaultSpecUpdateFromJSON(json: any): SetDefaultSpecUpdate {
    return SetDefaultSpecUpdateFromJSONTyped(json, false);
}

export function SetDefaultSpecUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): SetDefaultSpecUpdate {
    if (json == null) {
        return json;
    }
    return {
        ...BaseUpdateFromJSONTyped(json, true),
        'action': json['action'] == null ? undefined : json['action'],
        'specId': json['spec-id'],
    };
}

export function SetDefaultSpecUpdateToJSON(json: any): SetDefaultSpecUpdate {
    return SetDefaultSpecUpdateToJSONTyped(json, false);
}

export function SetDefaultSpecUpdateToJSONTyped(value?: SetDefaultSpecUpdate | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        ...BaseUpdateToJSONTyped(value, true),
        'action': value['action'],
        'spec-id': value['specId'],
    };
}

