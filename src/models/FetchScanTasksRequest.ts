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
 * @interface FetchScanTasksRequest
 */
export interface FetchScanTasksRequest {
    /**
     * An opaque string provided by the REST server that represents a unit of work to produce file scan tasks for scan planning. This allows clients to fetch tasks across multiple requests to accommodate large result sets.
     * @type {string}
     * @memberof FetchScanTasksRequest
     */
    planTask: string;
}

/**
 * Check if a given object implements the FetchScanTasksRequest interface.
 */
export function instanceOfFetchScanTasksRequest(value: object): value is FetchScanTasksRequest {
    if (!('planTask' in value) || value['planTask'] === undefined) return false;
    return true;
}

export function FetchScanTasksRequestFromJSON(json: any): FetchScanTasksRequest {
    return FetchScanTasksRequestFromJSONTyped(json, false);
}

export function FetchScanTasksRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): FetchScanTasksRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'planTask': json['plan-task'],
    };
}

export function FetchScanTasksRequestToJSON(json: any): FetchScanTasksRequest {
    return FetchScanTasksRequestToJSONTyped(json, false);
}

export function FetchScanTasksRequestToJSONTyped(value?: FetchScanTasksRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'plan-task': value['planTask'],
    };
}

