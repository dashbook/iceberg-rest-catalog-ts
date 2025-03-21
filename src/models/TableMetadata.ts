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
import type { Snapshot } from './Snapshot';
import {
    SnapshotFromJSON,
    SnapshotFromJSONTyped,
    SnapshotToJSON,
    SnapshotToJSONTyped,
} from './Snapshot';
import type { SnapshotLogInner } from './SnapshotLogInner';
import {
    SnapshotLogInnerFromJSON,
    SnapshotLogInnerFromJSONTyped,
    SnapshotLogInnerToJSON,
    SnapshotLogInnerToJSONTyped,
} from './SnapshotLogInner';
import type { PartitionStatisticsFile } from './PartitionStatisticsFile';
import {
    PartitionStatisticsFileFromJSON,
    PartitionStatisticsFileFromJSONTyped,
    PartitionStatisticsFileToJSON,
    PartitionStatisticsFileToJSONTyped,
} from './PartitionStatisticsFile';
import type { SnapshotReference } from './SnapshotReference';
import {
    SnapshotReferenceFromJSON,
    SnapshotReferenceFromJSONTyped,
    SnapshotReferenceToJSON,
    SnapshotReferenceToJSONTyped,
} from './SnapshotReference';
import type { Schema } from './Schema';
import {
    SchemaFromJSON,
    SchemaFromJSONTyped,
    SchemaToJSON,
    SchemaToJSONTyped,
} from './Schema';
import type { SortOrder } from './SortOrder';
import {
    SortOrderFromJSON,
    SortOrderFromJSONTyped,
    SortOrderToJSON,
    SortOrderToJSONTyped,
} from './SortOrder';
import type { PartitionSpec } from './PartitionSpec';
import {
    PartitionSpecFromJSON,
    PartitionSpecFromJSONTyped,
    PartitionSpecToJSON,
    PartitionSpecToJSONTyped,
} from './PartitionSpec';
import type { MetadataLogInner } from './MetadataLogInner';
import {
    MetadataLogInnerFromJSON,
    MetadataLogInnerFromJSONTyped,
    MetadataLogInnerToJSON,
    MetadataLogInnerToJSONTyped,
} from './MetadataLogInner';
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
 * @interface TableMetadata
 */
export interface TableMetadata {
    /**
     * 
     * @type {number}
     * @memberof TableMetadata
     */
    formatVersion: number;
    /**
     * 
     * @type {string}
     * @memberof TableMetadata
     */
    tableUuid: string;
    /**
     * 
     * @type {string}
     * @memberof TableMetadata
     */
    location?: string;
    /**
     * 
     * @type {number}
     * @memberof TableMetadata
     */
    lastUpdatedMs?: number;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof TableMetadata
     */
    properties?: { [key: string]: string; };
    /**
     * 
     * @type {Array<Schema>}
     * @memberof TableMetadata
     */
    schemas?: Array<Schema>;
    /**
     * 
     * @type {number}
     * @memberof TableMetadata
     */
    currentSchemaId?: number;
    /**
     * 
     * @type {number}
     * @memberof TableMetadata
     */
    lastColumnId?: number;
    /**
     * 
     * @type {Array<PartitionSpec>}
     * @memberof TableMetadata
     */
    partitionSpecs?: Array<PartitionSpec>;
    /**
     * 
     * @type {number}
     * @memberof TableMetadata
     */
    defaultSpecId?: number;
    /**
     * 
     * @type {number}
     * @memberof TableMetadata
     */
    lastPartitionId?: number;
    /**
     * 
     * @type {Array<SortOrder>}
     * @memberof TableMetadata
     */
    sortOrders?: Array<SortOrder>;
    /**
     * 
     * @type {number}
     * @memberof TableMetadata
     */
    defaultSortOrderId?: number;
    /**
     * 
     * @type {Array<Snapshot>}
     * @memberof TableMetadata
     */
    snapshots?: Array<Snapshot>;
    /**
     * 
     * @type {{ [key: string]: SnapshotReference; }}
     * @memberof TableMetadata
     */
    refs?: { [key: string]: SnapshotReference; };
    /**
     * 
     * @type {number}
     * @memberof TableMetadata
     */
    currentSnapshotId?: number;
    /**
     * 
     * @type {number}
     * @memberof TableMetadata
     */
    lastSequenceNumber?: number;
    /**
     * 
     * @type {Array<SnapshotLogInner>}
     * @memberof TableMetadata
     */
    snapshotLog?: Array<SnapshotLogInner>;
    /**
     * 
     * @type {Array<MetadataLogInner>}
     * @memberof TableMetadata
     */
    metadataLog?: Array<MetadataLogInner>;
    /**
     * 
     * @type {Array<StatisticsFile>}
     * @memberof TableMetadata
     */
    statistics?: Array<StatisticsFile>;
    /**
     * 
     * @type {Array<PartitionStatisticsFile>}
     * @memberof TableMetadata
     */
    partitionStatistics?: Array<PartitionStatisticsFile>;
}

/**
 * Check if a given object implements the TableMetadata interface.
 */
export function instanceOfTableMetadata(value: object): value is TableMetadata {
    if (!('formatVersion' in value) || value['formatVersion'] === undefined) return false;
    if (!('tableUuid' in value) || value['tableUuid'] === undefined) return false;
    return true;
}

export function TableMetadataFromJSON(json: any): TableMetadata {
    return TableMetadataFromJSONTyped(json, false);
}

export function TableMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): TableMetadata {
    if (json == null) {
        return json;
    }
    return {
        
        'formatVersion': json['format-version'],
        'tableUuid': json['table-uuid'],
        'location': json['location'] == null ? undefined : json['location'],
        'lastUpdatedMs': json['last-updated-ms'] == null ? undefined : json['last-updated-ms'],
        'properties': json['properties'] == null ? undefined : json['properties'],
        'schemas': json['schemas'] == null ? undefined : ((json['schemas'] as Array<any>).map(SchemaFromJSON)),
        'currentSchemaId': json['current-schema-id'] == null ? undefined : json['current-schema-id'],
        'lastColumnId': json['last-column-id'] == null ? undefined : json['last-column-id'],
        'partitionSpecs': json['partition-specs'] == null ? undefined : ((json['partition-specs'] as Array<any>).map(PartitionSpecFromJSON)),
        'defaultSpecId': json['default-spec-id'] == null ? undefined : json['default-spec-id'],
        'lastPartitionId': json['last-partition-id'] == null ? undefined : json['last-partition-id'],
        'sortOrders': json['sort-orders'] == null ? undefined : ((json['sort-orders'] as Array<any>).map(SortOrderFromJSON)),
        'defaultSortOrderId': json['default-sort-order-id'] == null ? undefined : json['default-sort-order-id'],
        'snapshots': json['snapshots'] == null ? undefined : ((json['snapshots'] as Array<any>).map(SnapshotFromJSON)),
        'refs': json['refs'] == null ? undefined : (mapValues(json['refs'], SnapshotReferenceFromJSON)),
        'currentSnapshotId': json['current-snapshot-id'] == null ? undefined : json['current-snapshot-id'],
        'lastSequenceNumber': json['last-sequence-number'] == null ? undefined : json['last-sequence-number'],
        'snapshotLog': json['snapshot-log'] == null ? undefined : ((json['snapshot-log'] as Array<any>).map(SnapshotLogInnerFromJSON)),
        'metadataLog': json['metadata-log'] == null ? undefined : ((json['metadata-log'] as Array<any>).map(MetadataLogInnerFromJSON)),
        'statistics': json['statistics'] == null ? undefined : ((json['statistics'] as Array<any>).map(StatisticsFileFromJSON)),
        'partitionStatistics': json['partition-statistics'] == null ? undefined : ((json['partition-statistics'] as Array<any>).map(PartitionStatisticsFileFromJSON)),
    };
}

export function TableMetadataToJSON(json: any): TableMetadata {
    return TableMetadataToJSONTyped(json, false);
}

export function TableMetadataToJSONTyped(value?: TableMetadata | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'format-version': value['formatVersion'],
        'table-uuid': value['tableUuid'],
        'location': value['location'],
        'last-updated-ms': value['lastUpdatedMs'],
        'properties': value['properties'],
        'schemas': value['schemas'] == null ? undefined : ((value['schemas'] as Array<any>).map(SchemaToJSON)),
        'current-schema-id': value['currentSchemaId'],
        'last-column-id': value['lastColumnId'],
        'partition-specs': value['partitionSpecs'] == null ? undefined : ((value['partitionSpecs'] as Array<any>).map(PartitionSpecToJSON)),
        'default-spec-id': value['defaultSpecId'],
        'last-partition-id': value['lastPartitionId'],
        'sort-orders': value['sortOrders'] == null ? undefined : ((value['sortOrders'] as Array<any>).map(SortOrderToJSON)),
        'default-sort-order-id': value['defaultSortOrderId'],
        'snapshots': value['snapshots'] == null ? undefined : ((value['snapshots'] as Array<any>).map(SnapshotToJSON)),
        'refs': value['refs'] == null ? undefined : (mapValues(value['refs'], SnapshotReferenceToJSON)),
        'current-snapshot-id': value['currentSnapshotId'],
        'last-sequence-number': value['lastSequenceNumber'],
        'snapshot-log': value['snapshotLog'] == null ? undefined : ((value['snapshotLog'] as Array<any>).map(SnapshotLogInnerToJSON)),
        'metadata-log': value['metadataLog'] == null ? undefined : ((value['metadataLog'] as Array<any>).map(MetadataLogInnerToJSON)),
        'statistics': value['statistics'] == null ? undefined : ((value['statistics'] as Array<any>).map(StatisticsFileToJSON)),
        'partition-statistics': value['partitionStatistics'] == null ? undefined : ((value['partitionStatistics'] as Array<any>).map(PartitionStatisticsFileToJSON)),
    };
}

