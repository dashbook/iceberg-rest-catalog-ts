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
    TableRequirementToJSONTyped,
} from './TableRequirement';

/**
 * The table must not already exist; used for create transactions
 * @export
 * @interface AssertCreate
 */
export interface AssertCreate extends TableRequirement {
    /**
     * 
     * @type {string}
     * @memberof AssertCreate
     */
    type: string;
}

/**
 * Check if a given object implements the AssertCreate interface.
 */
export function instanceOfAssertCreate(value: object): value is AssertCreate {
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function AssertCreateFromJSON(json: any): AssertCreate {
    return AssertCreateFromJSONTyped(json, false);
}

export function AssertCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): AssertCreate {
    if (json == null) {
        return json;
    }
    return {
        ...TableRequirementFromJSONTyped(json, true),
        'type': json['type'],
    };
}

export function AssertCreateToJSON(json: any): AssertCreate {
    return AssertCreateToJSONTyped(json, false);
}

export function AssertCreateToJSONTyped(value?: AssertCreate | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        ...TableRequirementToJSONTyped(value, true),
        'type': value['type'],
    };
}

