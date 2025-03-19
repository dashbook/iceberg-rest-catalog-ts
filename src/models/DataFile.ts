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
import type { CountMap } from './CountMap';
import {
    CountMapFromJSON,
    CountMapFromJSONTyped,
    CountMapToJSON,
    CountMapToJSONTyped,
} from './CountMap';
import type { PrimitiveTypeValue } from './PrimitiveTypeValue';
import {
    PrimitiveTypeValueFromJSON,
    PrimitiveTypeValueFromJSONTyped,
    PrimitiveTypeValueToJSON,
    PrimitiveTypeValueToJSONTyped,
} from './PrimitiveTypeValue';
import type { ContentFile } from './ContentFile';
import {
    ContentFileFromJSON,
    ContentFileFromJSONTyped,
    ContentFileToJSON,
    ContentFileToJSONTyped,
} from './ContentFile';
import type { ValueMap } from './ValueMap';
import {
    ValueMapFromJSON,
    ValueMapFromJSONTyped,
    ValueMapToJSON,
    ValueMapToJSONTyped,
} from './ValueMap';
import type { FileFormat } from './FileFormat';
import {
    FileFormatFromJSON,
    FileFormatFromJSONTyped,
    FileFormatToJSON,
    FileFormatToJSONTyped,
} from './FileFormat';

/**
 * 
 * @export
 * @interface DataFile
 */
export interface DataFile extends ContentFile {
    /**
     * 
     * @type {string}
     * @memberof DataFile
     */
    content: string;
    /**
     * Map of column id to total count, including null and NaN
     * @type {CountMap}
     * @memberof DataFile
     */
    columnSizes?: CountMap;
    /**
     * Map of column id to null value count
     * @type {CountMap}
     * @memberof DataFile
     */
    valueCounts?: CountMap;
    /**
     * Map of column id to null value count
     * @type {CountMap}
     * @memberof DataFile
     */
    nullValueCounts?: CountMap;
    /**
     * Map of column id to number of NaN values in the column
     * @type {CountMap}
     * @memberof DataFile
     */
    nanValueCounts?: CountMap;
    /**
     * Map of column id to lower bound primitive type values
     * @type {ValueMap}
     * @memberof DataFile
     */
    lowerBounds?: ValueMap;
    /**
     * Map of column id to upper bound primitive type values
     * @type {ValueMap}
     * @memberof DataFile
     */
    upperBounds?: ValueMap;
}



/**
 * Check if a given object implements the DataFile interface.
 */
export function instanceOfDataFile(value: object): value is DataFile {
    if (!('content' in value) || value['content'] === undefined) return false;
    return true;
}

export function DataFileFromJSON(json: any): DataFile {
    return DataFileFromJSONTyped(json, false);
}

export function DataFileFromJSONTyped(json: any, ignoreDiscriminator: boolean): DataFile {
    if (json == null) {
        return json;
    }
    return {
        ...ContentFileFromJSONTyped(json, true),
        'content': json['content'],
        'columnSizes': json['column-sizes'] == null ? undefined : CountMapFromJSON(json['column-sizes']),
        'valueCounts': json['value-counts'] == null ? undefined : CountMapFromJSON(json['value-counts']),
        'nullValueCounts': json['null-value-counts'] == null ? undefined : CountMapFromJSON(json['null-value-counts']),
        'nanValueCounts': json['nan-value-counts'] == null ? undefined : CountMapFromJSON(json['nan-value-counts']),
        'lowerBounds': json['lower-bounds'] == null ? undefined : ValueMapFromJSON(json['lower-bounds']),
        'upperBounds': json['upper-bounds'] == null ? undefined : ValueMapFromJSON(json['upper-bounds']),
    };
}

export function DataFileToJSON(json: any): DataFile {
    return DataFileToJSONTyped(json, false);
}

export function DataFileToJSONTyped(value?: DataFile | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        ...ContentFileToJSONTyped(value, true),
        'content': value['content'],
        'column-sizes': CountMapToJSON(value['columnSizes']),
        'value-counts': CountMapToJSON(value['valueCounts']),
        'null-value-counts': CountMapToJSON(value['nullValueCounts']),
        'nan-value-counts': CountMapToJSON(value['nanValueCounts']),
        'lower-bounds': ValueMapToJSON(value['lowerBounds']),
        'upper-bounds': ValueMapToJSON(value['upperBounds']),
    };
}

