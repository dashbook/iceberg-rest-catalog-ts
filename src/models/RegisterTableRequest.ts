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
/**
 * 
 * @export
 * @interface RegisterTableRequest
 */
export interface RegisterTableRequest {
    /**
     * 
     * @type {string}
     * @memberof RegisterTableRequest
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterTableRequest
     */
    metadataLocation: string;
    /**
     * Whether to overwrite table metadata if the table already exists
     * @type {boolean}
     * @memberof RegisterTableRequest
     */
    overwrite?: boolean;
}

/**
 * Check if a given object implements the RegisterTableRequest interface.
 */
export function instanceOfRegisterTableRequest(value: object): value is RegisterTableRequest {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('metadataLocation' in value) || value['metadataLocation'] === undefined) return false;
    return true;
}

export function RegisterTableRequestFromJSON(json: any): RegisterTableRequest {
    return RegisterTableRequestFromJSONTyped(json, false);
}

export function RegisterTableRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RegisterTableRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'metadataLocation': json['metadata-location'],
        'overwrite': json['overwrite'] == null ? undefined : json['overwrite'],
    };
}

export function RegisterTableRequestToJSON(json: any): RegisterTableRequest {
    return RegisterTableRequestToJSONTyped(json, false);
}

export function RegisterTableRequestToJSONTyped(value?: RegisterTableRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'metadata-location': value['metadataLocation'],
        'overwrite': value['overwrite'],
    };
}

