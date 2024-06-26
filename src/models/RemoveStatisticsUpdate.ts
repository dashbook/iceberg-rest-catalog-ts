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
 * @interface RemoveStatisticsUpdate
 */
export interface RemoveStatisticsUpdate extends BaseUpdate {
    /**
     * 
     * @type {string}
     * @memberof RemoveStatisticsUpdate
     */
    action: RemoveStatisticsUpdateActionEnum;
    /**
     * 
     * @type {number}
     * @memberof RemoveStatisticsUpdate
     */
    snapshotId: number;
}


/**
 * @export
 */
export const RemoveStatisticsUpdateActionEnum = {
    RemoveStatistics: 'remove-statistics'
} as const;
export type RemoveStatisticsUpdateActionEnum = typeof RemoveStatisticsUpdateActionEnum[keyof typeof RemoveStatisticsUpdateActionEnum];


/**
 * Check if a given object implements the RemoveStatisticsUpdate interface.
 */
export function instanceOfRemoveStatisticsUpdate(value: object): boolean {
    if (!('action' in value)) return false;
    if (!('snapshotId' in value)) return false;
    return true;
}

export function RemoveStatisticsUpdateFromJSON(json: any): RemoveStatisticsUpdate {
    return RemoveStatisticsUpdateFromJSONTyped(json, false);
}

export function RemoveStatisticsUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): RemoveStatisticsUpdate {
    if (json == null) {
        return json;
    }
    return {
        ...BaseUpdateFromJSONTyped(json, ignoreDiscriminator),
        'action': json['action'],
        'snapshotId': json['snapshot-id'],
    };
}

export function RemoveStatisticsUpdateToJSON(value?: RemoveStatisticsUpdate | null): any {
    if (value == null) {
        return value;
    }
    return {
        ...BaseUpdateToJSON(value),
        'action': value['action'],
        'snapshot-id': value['snapshotId'],
    };
}

