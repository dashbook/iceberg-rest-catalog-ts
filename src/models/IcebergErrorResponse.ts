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
import type { ErrorModel } from './ErrorModel';
import {
    ErrorModelFromJSON,
    ErrorModelFromJSONTyped,
    ErrorModelToJSON,
    ErrorModelToJSONTyped,
} from './ErrorModel';

/**
 * JSON wrapper for all error responses (non-2xx)
 * @export
 * @interface IcebergErrorResponse
 */
export interface IcebergErrorResponse {
    /**
     * 
     * @type {ErrorModel}
     * @memberof IcebergErrorResponse
     */
    error: ErrorModel;
}

/**
 * Check if a given object implements the IcebergErrorResponse interface.
 */
export function instanceOfIcebergErrorResponse(value: object): value is IcebergErrorResponse {
    if (!('error' in value) || value['error'] === undefined) return false;
    return true;
}

export function IcebergErrorResponseFromJSON(json: any): IcebergErrorResponse {
    return IcebergErrorResponseFromJSONTyped(json, false);
}

export function IcebergErrorResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): IcebergErrorResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'error': ErrorModelFromJSON(json['error']),
    };
}

export function IcebergErrorResponseToJSON(json: any): IcebergErrorResponse {
    return IcebergErrorResponseToJSONTyped(json, false);
}

export function IcebergErrorResponseToJSONTyped(value?: IcebergErrorResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'error': ErrorModelToJSON(value['error']),
    };
}

