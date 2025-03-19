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

import type { ListType } from './ListType';
import {
    instanceOfListType,
    ListTypeFromJSON,
    ListTypeFromJSONTyped,
    ListTypeToJSON,
} from './ListType';
import type { MapType } from './MapType';
import {
    instanceOfMapType,
    MapTypeFromJSON,
    MapTypeFromJSONTyped,
    MapTypeToJSON,
} from './MapType';
import type { StructType } from './StructType';
import {
    instanceOfStructType,
    StructTypeFromJSON,
    StructTypeFromJSONTyped,
    StructTypeToJSON,
} from './StructType';

/**
 * @type Type
 * 
 * @export
 */
export type Type = ListType | MapType | StructType | string;

export function TypeFromJSON(json: any): Type {
    return TypeFromJSONTyped(json, false);
}

export function TypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): Type {
    if (json == null) {
        return json;
    }
    if (instanceOfListType(json)) {
        return ListTypeFromJSONTyped(json, true);
    }
    if (instanceOfMapType(json)) {
        return MapTypeFromJSONTyped(json, true);
    }
    if (instanceOfStructType(json)) {
        return StructTypeFromJSONTyped(json, true);
    }
    if (typeof json === 'string') {
        return json;
    }

    return {} as any;
}

export function TypeToJSON(json: any): any {
    return TypeToJSONTyped(json, false);
}

export function TypeToJSONTyped(value?: Type | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    if (instanceOfListType(value as object)) {
        return ListTypeToJSON(value as ListType);
    }
    if (instanceOfMapType(value as object)) {
        return MapTypeToJSON(value as MapType);
    }
    if (instanceOfStructType(value as object)) {
        return StructTypeToJSON(value as StructType);
    }
    if (typeof value === 'string') {
        return value;
    }

    return {};
}

