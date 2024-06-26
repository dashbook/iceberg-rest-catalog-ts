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
import type { string } from './string';
import {
    instanceOfstring,
    stringFromJSON,
    stringFromJSONTyped,
    stringToJSON,
} from './string';

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
    return ListTypeFromJSONTyped(json, true) || MapTypeFromJSONTyped(json, true) || StructTypeFromJSONTyped(json, true) || stringFromJSONTyped(json, true);
}

export function TypeToJSON(value?: Type | null): any {
    if (value == null) {
        return value;
    }

    if (instanceOfListType(value)) {
        return ListTypeToJSON(value as ListType);
    }
    if (instanceOfMapType(value)) {
        return MapTypeToJSON(value as MapType);
    }
    if (instanceOfStructType(value)) {
        return StructTypeToJSON(value as StructType);
    }
    if (instanceOfstring(value)) {
        return stringToJSON(value as string);
    }

    return {};
}

