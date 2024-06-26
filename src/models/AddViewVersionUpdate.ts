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
import type { ViewVersion } from './ViewVersion';
import {
    ViewVersionFromJSON,
    ViewVersionFromJSONTyped,
    ViewVersionToJSON,
} from './ViewVersion';

/**
 * 
 * @export
 * @interface AddViewVersionUpdate
 */
export interface AddViewVersionUpdate extends BaseUpdate {
    /**
     * 
     * @type {string}
     * @memberof AddViewVersionUpdate
     */
    action: AddViewVersionUpdateActionEnum;
    /**
     * 
     * @type {ViewVersion}
     * @memberof AddViewVersionUpdate
     */
    viewVersion: ViewVersion;
}


/**
 * @export
 */
export const AddViewVersionUpdateActionEnum = {
    AddViewVersion: 'add-view-version'
} as const;
export type AddViewVersionUpdateActionEnum = typeof AddViewVersionUpdateActionEnum[keyof typeof AddViewVersionUpdateActionEnum];


/**
 * Check if a given object implements the AddViewVersionUpdate interface.
 */
export function instanceOfAddViewVersionUpdate(value: object): boolean {
    if (!('action' in value)) return false;
    if (!('viewVersion' in value)) return false;
    return true;
}

export function AddViewVersionUpdateFromJSON(json: any): AddViewVersionUpdate {
    return AddViewVersionUpdateFromJSONTyped(json, false);
}

export function AddViewVersionUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddViewVersionUpdate {
    if (json == null) {
        return json;
    }
    return {
        ...BaseUpdateFromJSONTyped(json, ignoreDiscriminator),
        'action': json['action'],
        'viewVersion': ViewVersionFromJSON(json['view-version']),
    };
}

export function AddViewVersionUpdateToJSON(value?: AddViewVersionUpdate | null): any {
    if (value == null) {
        return value;
    }
    return {
        ...BaseUpdateToJSON(value),
        'action': value['action'],
        'view-version': ViewVersionToJSON(value['viewVersion']),
    };
}

