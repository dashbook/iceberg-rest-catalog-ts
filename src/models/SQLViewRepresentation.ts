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
 * @interface SQLViewRepresentation
 */
export interface SQLViewRepresentation {
    /**
     * 
     * @type {string}
     * @memberof SQLViewRepresentation
     */
    type: string;
    /**
     * 
     * @type {string}
     * @memberof SQLViewRepresentation
     */
    sql: string;
    /**
     * 
     * @type {string}
     * @memberof SQLViewRepresentation
     */
    dialect: string;
}

/**
 * Check if a given object implements the SQLViewRepresentation interface.
 */
export function instanceOfSQLViewRepresentation(value: object): boolean {
    if (!('type' in value)) return false;
    if (!('sql' in value)) return false;
    if (!('dialect' in value)) return false;
    return true;
}

export function SQLViewRepresentationFromJSON(json: any): SQLViewRepresentation {
    return SQLViewRepresentationFromJSONTyped(json, false);
}

export function SQLViewRepresentationFromJSONTyped(json: any, ignoreDiscriminator: boolean): SQLViewRepresentation {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'sql': json['sql'],
        'dialect': json['dialect'],
    };
}

export function SQLViewRepresentationToJSON(value?: SQLViewRepresentation | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'type': value['type'],
        'sql': value['sql'],
        'dialect': value['dialect'],
    };
}
