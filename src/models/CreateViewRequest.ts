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
import type { Schema } from './Schema';
import {
    SchemaFromJSON,
    SchemaFromJSONTyped,
    SchemaToJSON,
} from './Schema';
import type { ViewVersion } from './ViewVersion';
import {
    ViewVersionFromJSON,
    ViewVersionFromJSONTyped,
    ViewVersionToJSON,
} from './ViewVersion';

/**
 * 
 * @export
 * @interface CreateViewRequest
 */
export interface CreateViewRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateViewRequest
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof CreateViewRequest
     */
    location?: string;
    /**
     * 
     * @type {Schema}
     * @memberof CreateViewRequest
     */
    schema: Schema;
    /**
     * 
     * @type {ViewVersion}
     * @memberof CreateViewRequest
     */
    viewVersion: ViewVersion;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof CreateViewRequest
     */
    properties: { [key: string]: string; };
}

/**
 * Check if a given object implements the CreateViewRequest interface.
 */
export function instanceOfCreateViewRequest(value: object): boolean {
    if (!('name' in value)) return false;
    if (!('schema' in value)) return false;
    if (!('viewVersion' in value)) return false;
    if (!('properties' in value)) return false;
    return true;
}

export function CreateViewRequestFromJSON(json: any): CreateViewRequest {
    return CreateViewRequestFromJSONTyped(json, false);
}

export function CreateViewRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateViewRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'location': json['location'] == null ? undefined : json['location'],
        'schema': SchemaFromJSON(json['schema']),
        'viewVersion': ViewVersionFromJSON(json['view-version']),
        'properties': json['properties'],
    };
}

export function CreateViewRequestToJSON(value?: CreateViewRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'location': value['location'],
        'schema': SchemaToJSON(value['schema']),
        'view-version': ViewVersionToJSON(value['viewVersion']),
        'properties': value['properties'],
    };
}
