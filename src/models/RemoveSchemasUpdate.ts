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
 * @interface RemoveSchemasUpdate
 */
export interface RemoveSchemasUpdate extends BaseUpdate {
    /**
     * 
     * @type {string}
     * @memberof RemoveSchemasUpdate
     */
    action: string;
    /**
     * 
     * @type {Array<number>}
     * @memberof RemoveSchemasUpdate
     */
    schemaIds: Array<number>;
}

/**
 * Check if a given object implements the RemoveSchemasUpdate interface.
 */
export function instanceOfRemoveSchemasUpdate(value: object): value is RemoveSchemasUpdate {
    if (!('schemaIds' in value) || value['schemaIds'] === undefined) return false;
    return true;
}

export function RemoveSchemasUpdateFromJSON(json: any): RemoveSchemasUpdate {
    return RemoveSchemasUpdateFromJSONTyped(json, false);
}

export function RemoveSchemasUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): RemoveSchemasUpdate {
    if (json == null) {
        return json;
    }
    return {
        ...BaseUpdateFromJSONTyped(json, true),
        'action': json['action'] == null ? undefined : json['action'],
        'schemaIds': json['schema-ids'],
    };
}

export function RemoveSchemasUpdateToJSON(json: any): RemoveSchemasUpdate {
    return RemoveSchemasUpdateToJSONTyped(json, false);
}

export function RemoveSchemasUpdateToJSONTyped(value?: RemoveSchemasUpdate | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        ...BaseUpdateToJSONTyped(value, true),
        'action': value['action'],
        'schema-ids': value['schemaIds'],
    };
}

