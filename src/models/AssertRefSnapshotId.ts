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
import type { TableRequirement } from './TableRequirement';
import {
    TableRequirementFromJSON,
    TableRequirementFromJSONTyped,
    TableRequirementToJSON,
} from './TableRequirement';

/**
 * The table branch or tag identified by the requirement's `ref` must reference the requirement's `snapshot-id`; if `snapshot-id` is `null` or missing, the ref must not already exist
 * @export
 * @interface AssertRefSnapshotId
 */
export interface AssertRefSnapshotId extends TableRequirement {
    /**
     * 
     * @type {string}
     * @memberof AssertRefSnapshotId
     */
    type: AssertRefSnapshotIdTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AssertRefSnapshotId
     */
    ref: string;
    /**
     * 
     * @type {number}
     * @memberof AssertRefSnapshotId
     */
    snapshotId: number;
}


/**
 * @export
 */
export const AssertRefSnapshotIdTypeEnum = {
    AssertRefSnapshotId: 'assert-ref-snapshot-id'
} as const;
export type AssertRefSnapshotIdTypeEnum = typeof AssertRefSnapshotIdTypeEnum[keyof typeof AssertRefSnapshotIdTypeEnum];


/**
 * Check if a given object implements the AssertRefSnapshotId interface.
 */
export function instanceOfAssertRefSnapshotId(value: object): boolean {
    if (!('type' in value)) return false;
    if (!('ref' in value)) return false;
    if (!('snapshotId' in value)) return false;
    return true;
}

export function AssertRefSnapshotIdFromJSON(json: any): AssertRefSnapshotId {
    return AssertRefSnapshotIdFromJSONTyped(json, false);
}

export function AssertRefSnapshotIdFromJSONTyped(json: any, ignoreDiscriminator: boolean): AssertRefSnapshotId {
    if (json == null) {
        return json;
    }
    return {
        ...TableRequirementFromJSONTyped(json, ignoreDiscriminator),
        'type': json['type'],
        'ref': json['ref'],
        'snapshotId': json['snapshot-id'],
    };
}

export function AssertRefSnapshotIdToJSON(value?: AssertRefSnapshotId | null): any {
    if (value == null) {
        return value;
    }
    return {
        ...TableRequirementToJSON(value),
        'type': value['type'],
        'ref': value['ref'],
        'snapshot-id': value['snapshotId'],
    };
}
