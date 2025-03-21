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
import type { SortOrder } from './SortOrder';
import {
    SortOrderFromJSON,
    SortOrderFromJSONTyped,
    SortOrderToJSON,
    SortOrderToJSONTyped,
} from './SortOrder';

/**
 * 
 * @export
 * @interface AddSortOrderUpdate
 */
export interface AddSortOrderUpdate extends BaseUpdate {
    /**
     * 
     * @type {string}
     * @memberof AddSortOrderUpdate
     */
    action: string;
    /**
     * 
     * @type {SortOrder}
     * @memberof AddSortOrderUpdate
     */
    sortOrder: SortOrder;
}

/**
 * Check if a given object implements the AddSortOrderUpdate interface.
 */
export function instanceOfAddSortOrderUpdate(value: object): value is AddSortOrderUpdate {
    if (!('sortOrder' in value) || value['sortOrder'] === undefined) return false;
    return true;
}

export function AddSortOrderUpdateFromJSON(json: any): AddSortOrderUpdate {
    return AddSortOrderUpdateFromJSONTyped(json, false);
}

export function AddSortOrderUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddSortOrderUpdate {
    if (json == null) {
        return json;
    }
    return {
        ...BaseUpdateFromJSONTyped(json, true),
        'action': json['action'] == null ? undefined : json['action'],
        'sortOrder': SortOrderFromJSON(json['sort-order']),
    };
}

export function AddSortOrderUpdateToJSON(json: any): AddSortOrderUpdate {
    return AddSortOrderUpdateToJSONTyped(json, false);
}

export function AddSortOrderUpdateToJSONTyped(value?: AddSortOrderUpdate | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        ...BaseUpdateToJSONTyped(value, true),
        'action': value['action'],
        'sort-order': SortOrderToJSON(value['sortOrder']),
    };
}

