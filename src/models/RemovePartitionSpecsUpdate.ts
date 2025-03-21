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
 * @interface RemovePartitionSpecsUpdate
 */
export interface RemovePartitionSpecsUpdate extends BaseUpdate {
    /**
     * 
     * @type {string}
     * @memberof RemovePartitionSpecsUpdate
     */
    action: string;
    /**
     * 
     * @type {Array<number>}
     * @memberof RemovePartitionSpecsUpdate
     */
    specIds: Array<number>;
}

/**
 * Check if a given object implements the RemovePartitionSpecsUpdate interface.
 */
export function instanceOfRemovePartitionSpecsUpdate(value: object): value is RemovePartitionSpecsUpdate {
    if (!('specIds' in value) || value['specIds'] === undefined) return false;
    return true;
}

export function RemovePartitionSpecsUpdateFromJSON(json: any): RemovePartitionSpecsUpdate {
    return RemovePartitionSpecsUpdateFromJSONTyped(json, false);
}

export function RemovePartitionSpecsUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): RemovePartitionSpecsUpdate {
    if (json == null) {
        return json;
    }
    return {
        ...BaseUpdateFromJSONTyped(json, true),
        'action': json['action'] == null ? undefined : json['action'],
        'specIds': json['spec-ids'],
    };
}

export function RemovePartitionSpecsUpdateToJSON(json: any): RemovePartitionSpecsUpdate {
    return RemovePartitionSpecsUpdateToJSONTyped(json, false);
}

export function RemovePartitionSpecsUpdateToJSONTyped(value?: RemovePartitionSpecsUpdate | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        ...BaseUpdateToJSONTyped(value, true),
        'action': value['action'],
        'spec-ids': value['specIds'],
    };
}

