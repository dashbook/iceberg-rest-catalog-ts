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
} from './BaseUpdate';

/**
 * 
 * @export
 * @interface RemovePartitionStatisticsUpdate
 */
export interface RemovePartitionStatisticsUpdate extends BaseUpdate {
    /**
     * 
     * @type {string}
     * @memberof RemovePartitionStatisticsUpdate
     */
    action: RemovePartitionStatisticsUpdateActionEnum;
    /**
     * 
     * @type {number}
     * @memberof RemovePartitionStatisticsUpdate
     */
    snapshotId: number;
}


/**
 * @export
 */
export const RemovePartitionStatisticsUpdateActionEnum = {
    RemovePartitionStatistics: 'remove-partition-statistics'
} as const;
export type RemovePartitionStatisticsUpdateActionEnum = typeof RemovePartitionStatisticsUpdateActionEnum[keyof typeof RemovePartitionStatisticsUpdateActionEnum];


/**
 * Check if a given object implements the RemovePartitionStatisticsUpdate interface.
 */
export function instanceOfRemovePartitionStatisticsUpdate(value: object): boolean {
    if (!('action' in value)) return false;
    if (!('snapshotId' in value)) return false;
    return true;
}

export function RemovePartitionStatisticsUpdateFromJSON(json: any): RemovePartitionStatisticsUpdate {
    return RemovePartitionStatisticsUpdateFromJSONTyped(json, false);
}

export function RemovePartitionStatisticsUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): RemovePartitionStatisticsUpdate {
    if (json == null) {
        return json;
    }
    return {
        ...BaseUpdateFromJSONTyped(json, ignoreDiscriminator),
        'action': json['action'],
        'snapshotId': json['snapshot-id'],
    };
}

export function RemovePartitionStatisticsUpdateToJSON(value?: RemovePartitionStatisticsUpdate | null): any {
    if (value == null) {
        return value;
    }
    return {
        ...BaseUpdateToJSON(value),
        'action': value['action'],
        'snapshot-id': value['snapshotId'],
    };
}

