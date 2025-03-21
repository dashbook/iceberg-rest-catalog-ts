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
import type { StatisticsFile } from './StatisticsFile';
import {
    StatisticsFileFromJSON,
    StatisticsFileFromJSONTyped,
    StatisticsFileToJSON,
    StatisticsFileToJSONTyped,
} from './StatisticsFile';

/**
 * 
 * @export
 * @interface SetStatisticsUpdate
 */
export interface SetStatisticsUpdate extends BaseUpdate {
    /**
     * 
     * @type {string}
     * @memberof SetStatisticsUpdate
     */
    action: string;
    /**
     * This optional field is **DEPRECATED for REMOVAL** since it contains redundant information. Clients should use the `statistics.snapshot-id` field instead.
     * @type {number}
     * @memberof SetStatisticsUpdate
     * @deprecated
     */
    snapshotId?: number;
    /**
     * 
     * @type {StatisticsFile}
     * @memberof SetStatisticsUpdate
     */
    statistics: StatisticsFile;
}

/**
 * Check if a given object implements the SetStatisticsUpdate interface.
 */
export function instanceOfSetStatisticsUpdate(value: object): value is SetStatisticsUpdate {
    if (!('statistics' in value) || value['statistics'] === undefined) return false;
    return true;
}

export function SetStatisticsUpdateFromJSON(json: any): SetStatisticsUpdate {
    return SetStatisticsUpdateFromJSONTyped(json, false);
}

export function SetStatisticsUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): SetStatisticsUpdate {
    if (json == null) {
        return json;
    }
    return {
        ...BaseUpdateFromJSONTyped(json, true),
        'action': json['action'] == null ? undefined : json['action'],
        'snapshotId': json['snapshot-id'] == null ? undefined : json['snapshot-id'],
        'statistics': StatisticsFileFromJSON(json['statistics']),
    };
}

export function SetStatisticsUpdateToJSON(json: any): SetStatisticsUpdate {
    return SetStatisticsUpdateToJSONTyped(json, false);
}

export function SetStatisticsUpdateToJSONTyped(value?: SetStatisticsUpdate | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        ...BaseUpdateToJSONTyped(value, true),
        'action': value['action'],
        'snapshot-id': value['snapshotId'],
        'statistics': StatisticsFileToJSON(value['statistics']),
    };
}

