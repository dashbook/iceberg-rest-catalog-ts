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
 * @interface SetDefaultSortOrderUpdate
 */
export interface SetDefaultSortOrderUpdate extends BaseUpdate {
    /**
     * 
     * @type {string}
     * @memberof SetDefaultSortOrderUpdate
     */
    action: SetDefaultSortOrderUpdateActionEnum;
    /**
     * Sort order ID to set as the default, or -1 to set last added sort order
     * @type {number}
     * @memberof SetDefaultSortOrderUpdate
     */
    sortOrderId: number;
}


/**
 * @export
 */
export const SetDefaultSortOrderUpdateActionEnum = {
    SetDefaultSortOrder: 'set-default-sort-order'
} as const;
export type SetDefaultSortOrderUpdateActionEnum = typeof SetDefaultSortOrderUpdateActionEnum[keyof typeof SetDefaultSortOrderUpdateActionEnum];


/**
 * Check if a given object implements the SetDefaultSortOrderUpdate interface.
 */
export function instanceOfSetDefaultSortOrderUpdate(value: object): boolean {
    if (!('action' in value)) return false;
    if (!('sortOrderId' in value)) return false;
    return true;
}

export function SetDefaultSortOrderUpdateFromJSON(json: any): SetDefaultSortOrderUpdate {
    return SetDefaultSortOrderUpdateFromJSONTyped(json, false);
}

export function SetDefaultSortOrderUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): SetDefaultSortOrderUpdate {
    if (json == null) {
        return json;
    }
    return {
        ...BaseUpdateFromJSONTyped(json, ignoreDiscriminator),
        'action': json['action'],
        'sortOrderId': json['sort-order-id'],
    };
}

export function SetDefaultSortOrderUpdateToJSON(value?: SetDefaultSortOrderUpdate | null): any {
    if (value == null) {
        return value;
    }
    return {
        ...BaseUpdateToJSON(value),
        'action': value['action'],
        'sort-order-id': value['sortOrderId'],
    };
}
