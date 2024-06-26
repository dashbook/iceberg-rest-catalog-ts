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
import type { SetCurrentViewVersionUpdate } from './SetCurrentViewVersionUpdate';
import {
    SetCurrentViewVersionUpdateFromJSON,
    SetCurrentViewVersionUpdateFromJSONTyped,
    SetCurrentViewVersionUpdateToJSON,
} from './SetCurrentViewVersionUpdate';
import type { RemovePropertiesUpdate } from './RemovePropertiesUpdate';
import {
    RemovePropertiesUpdateFromJSON,
    RemovePropertiesUpdateFromJSONTyped,
    RemovePropertiesUpdateToJSON,
} from './RemovePropertiesUpdate';
import type { AddSchemaUpdate } from './AddSchemaUpdate';
import {
    AddSchemaUpdateFromJSON,
    AddSchemaUpdateFromJSONTyped,
    AddSchemaUpdateToJSON,
} from './AddSchemaUpdate';
import type { SetPropertiesUpdate } from './SetPropertiesUpdate';
import {
    SetPropertiesUpdateFromJSON,
    SetPropertiesUpdateFromJSONTyped,
    SetPropertiesUpdateToJSON,
} from './SetPropertiesUpdate';
import type { AssignUUIDUpdate } from './AssignUUIDUpdate';
import {
    AssignUUIDUpdateFromJSON,
    AssignUUIDUpdateFromJSONTyped,
    AssignUUIDUpdateToJSON,
} from './AssignUUIDUpdate';
import type { Schema } from './Schema';
import {
    SchemaFromJSON,
    SchemaFromJSONTyped,
    SchemaToJSON,
} from './Schema';
import type { UpgradeFormatVersionUpdate } from './UpgradeFormatVersionUpdate';
import {
    UpgradeFormatVersionUpdateFromJSON,
    UpgradeFormatVersionUpdateFromJSONTyped,
    UpgradeFormatVersionUpdateToJSON,
} from './UpgradeFormatVersionUpdate';
import type { SetLocationUpdate } from './SetLocationUpdate';
import {
    SetLocationUpdateFromJSON,
    SetLocationUpdateFromJSONTyped,
    SetLocationUpdateToJSON,
} from './SetLocationUpdate';
import type { AddViewVersionUpdate } from './AddViewVersionUpdate';
import {
    AddViewVersionUpdateFromJSON,
    AddViewVersionUpdateFromJSONTyped,
    AddViewVersionUpdateToJSON,
} from './AddViewVersionUpdate';
import type { ViewVersion } from './ViewVersion';
import {
    ViewVersionFromJSON,
    ViewVersionFromJSONTyped,
    ViewVersionToJSON,
} from './ViewVersion';

/**
 * 
 * @export
 * @interface ViewUpdate
 */
export interface ViewUpdate {
    /**
     * 
     * @type {string}
     * @memberof ViewUpdate
     */
    action: string;
    /**
     * 
     * @type {number}
     * @memberof ViewUpdate
     */
    formatVersion: number;
    /**
     * 
     * @type {Schema}
     * @memberof ViewUpdate
     */
    schema: Schema;
    /**
     * The highest assigned column ID for the table. This is used to ensure columns are always assigned an unused ID when evolving schemas. When omitted, it will be computed on the server side.
     * @type {number}
     * @memberof ViewUpdate
     */
    lastColumnId?: number;
    /**
     * 
     * @type {string}
     * @memberof ViewUpdate
     */
    location: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof ViewUpdate
     */
    updates: { [key: string]: string; };
    /**
     * 
     * @type {Array<string>}
     * @memberof ViewUpdate
     */
    removals: Array<string>;
    /**
     * 
     * @type {ViewVersion}
     * @memberof ViewUpdate
     */
    viewVersion: ViewVersion;
    /**
     * The view version id to set as current, or -1 to set last added view version id
     * @type {number}
     * @memberof ViewUpdate
     */
    viewVersionId: number;
}

/**
 * Check if a given object implements the ViewUpdate interface.
 */
export function instanceOfViewUpdate(value: object): boolean {
    if (!('action' in value)) return false;
    if (!('formatVersion' in value)) return false;
    if (!('schema' in value)) return false;
    if (!('location' in value)) return false;
    if (!('updates' in value)) return false;
    if (!('removals' in value)) return false;
    if (!('viewVersion' in value)) return false;
    if (!('viewVersionId' in value)) return false;
    return true;
}

export function ViewUpdateFromJSON(json: any): ViewUpdate {
    return ViewUpdateFromJSONTyped(json, false);
}

export function ViewUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): ViewUpdate {
    if (json == null) {
        return json;
    }
    return {
        
        'action': json['action'],
        'formatVersion': json['format-version'],
        'schema': SchemaFromJSON(json['schema']),
        'lastColumnId': json['last-column-id'] == null ? undefined : json['last-column-id'],
        'location': json['location'],
        'updates': json['updates'],
        'removals': json['removals'],
        'viewVersion': ViewVersionFromJSON(json['view-version']),
        'viewVersionId': json['view-version-id'],
    };
}

export function ViewUpdateToJSON(value?: ViewUpdate | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'action': value['action'],
        'format-version': value['formatVersion'],
        'schema': SchemaToJSON(value['schema']),
        'last-column-id': value['lastColumnId'],
        'location': value['location'],
        'updates': value['updates'],
        'removals': value['removals'],
        'view-version': ViewVersionToJSON(value['viewVersion']),
        'view-version-id': value['viewVersionId'],
    };
}

