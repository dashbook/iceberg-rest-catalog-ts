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
import { AddSchemaUpdateFromJSONTyped } from './AddSchemaUpdate';
import { AddSnapshotUpdateFromJSONTyped } from './AddSnapshotUpdate';
import { AddSortOrderUpdateFromJSONTyped } from './AddSortOrderUpdate';
import { AddPartitionSpecUpdateFromJSONTyped } from './AddPartitionSpecUpdate';
import { AddViewVersionUpdateFromJSONTyped } from './AddViewVersionUpdate';
import { AssignUUIDUpdateFromJSONTyped } from './AssignUUIDUpdate';
import { RemovePartitionStatisticsUpdateFromJSONTyped } from './RemovePartitionStatisticsUpdate';
import { RemovePropertiesUpdateFromJSONTyped } from './RemovePropertiesUpdate';
import { RemoveSnapshotRefUpdateFromJSONTyped } from './RemoveSnapshotRefUpdate';
import { RemoveSnapshotsUpdateFromJSONTyped } from './RemoveSnapshotsUpdate';
import { RemoveStatisticsUpdateFromJSONTyped } from './RemoveStatisticsUpdate';
import { SetCurrentSchemaUpdateFromJSONTyped } from './SetCurrentSchemaUpdate';
import { SetCurrentViewVersionUpdateFromJSONTyped } from './SetCurrentViewVersionUpdate';
import { SetDefaultSortOrderUpdateFromJSONTyped } from './SetDefaultSortOrderUpdate';
import { SetDefaultSpecUpdateFromJSONTyped } from './SetDefaultSpecUpdate';
import { SetLocationUpdateFromJSONTyped } from './SetLocationUpdate';
import { SetPartitionStatisticsUpdateFromJSONTyped } from './SetPartitionStatisticsUpdate';
import { SetPropertiesUpdateFromJSONTyped } from './SetPropertiesUpdate';
import { SetSnapshotRefUpdateFromJSONTyped } from './SetSnapshotRefUpdate';
import { SetStatisticsUpdateFromJSONTyped } from './SetStatisticsUpdate';
import { UpgradeFormatVersionUpdateFromJSONTyped } from './UpgradeFormatVersionUpdate';
/**
 * 
 * @export
 * @interface BaseUpdate
 */
export interface BaseUpdate {
    /**
     * 
     * @type {string}
     * @memberof BaseUpdate
     */
    action: string;
}

/**
 * Check if a given object implements the BaseUpdate interface.
 */
export function instanceOfBaseUpdate(value: object): boolean {
    if (!('action' in value)) return false;
    return true;
}

export function BaseUpdateFromJSON(json: any): BaseUpdate {
    return BaseUpdateFromJSONTyped(json, false);
}

export function BaseUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): BaseUpdate {
    if (json == null) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['action'] === 'add-schema') {
            return AddSchemaUpdateFromJSONTyped(json, true);
        }
        if (json['action'] === 'add-snapshot') {
            return AddSnapshotUpdateFromJSONTyped(json, true);
        }
        if (json['action'] === 'add-sort-order') {
            return AddSortOrderUpdateFromJSONTyped(json, true);
        }
        if (json['action'] === 'add-spec') {
            return AddPartitionSpecUpdateFromJSONTyped(json, true);
        }
        if (json['action'] === 'add-view-version') {
            return AddViewVersionUpdateFromJSONTyped(json, true);
        }
        if (json['action'] === 'assign-uuid') {
            return AssignUUIDUpdateFromJSONTyped(json, true);
        }
        if (json['action'] === 'remove-partition-statistics') {
            return RemovePartitionStatisticsUpdateFromJSONTyped(json, true);
        }
        if (json['action'] === 'remove-properties') {
            return RemovePropertiesUpdateFromJSONTyped(json, true);
        }
        if (json['action'] === 'remove-snapshot-ref') {
            return RemoveSnapshotRefUpdateFromJSONTyped(json, true);
        }
        if (json['action'] === 'remove-snapshots') {
            return RemoveSnapshotsUpdateFromJSONTyped(json, true);
        }
        if (json['action'] === 'remove-statistics') {
            return RemoveStatisticsUpdateFromJSONTyped(json, true);
        }
        if (json['action'] === 'set-current-schema') {
            return SetCurrentSchemaUpdateFromJSONTyped(json, true);
        }
        if (json['action'] === 'set-current-view-version') {
            return SetCurrentViewVersionUpdateFromJSONTyped(json, true);
        }
        if (json['action'] === 'set-default-sort-order') {
            return SetDefaultSortOrderUpdateFromJSONTyped(json, true);
        }
        if (json['action'] === 'set-default-spec') {
            return SetDefaultSpecUpdateFromJSONTyped(json, true);
        }
        if (json['action'] === 'set-location') {
            return SetLocationUpdateFromJSONTyped(json, true);
        }
        if (json['action'] === 'set-partition-statistics') {
            return SetPartitionStatisticsUpdateFromJSONTyped(json, true);
        }
        if (json['action'] === 'set-properties') {
            return SetPropertiesUpdateFromJSONTyped(json, true);
        }
        if (json['action'] === 'set-snapshot-ref') {
            return SetSnapshotRefUpdateFromJSONTyped(json, true);
        }
        if (json['action'] === 'set-statistics') {
            return SetStatisticsUpdateFromJSONTyped(json, true);
        }
        if (json['action'] === 'upgrade-format-version') {
            return UpgradeFormatVersionUpdateFromJSONTyped(json, true);
        }
    }
    return {
        
        'action': json['action'],
    };
}

export function BaseUpdateToJSON(value?: BaseUpdate | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'action': value['action'],
    };
}
