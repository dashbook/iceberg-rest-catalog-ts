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
import type { Term } from './Term';
import {
    TermFromJSON,
    TermFromJSONTyped,
    TermToJSON,
} from './Term';

/**
 * 
 * @export
 * @interface UnaryExpression
 */
export interface UnaryExpression {
    /**
     * 
     * @type {string}
     * @memberof UnaryExpression
     */
    type: string;
    /**
     * 
     * @type {Term}
     * @memberof UnaryExpression
     */
    term: Term;
    /**
     * 
     * @type {object}
     * @memberof UnaryExpression
     */
    value: object;
}

/**
 * Check if a given object implements the UnaryExpression interface.
 */
export function instanceOfUnaryExpression(value: object): boolean {
    if (!('type' in value)) return false;
    if (!('term' in value)) return false;
    if (!('value' in value)) return false;
    return true;
}

export function UnaryExpressionFromJSON(json: any): UnaryExpression {
    return UnaryExpressionFromJSONTyped(json, false);
}

export function UnaryExpressionFromJSONTyped(json: any, ignoreDiscriminator: boolean): UnaryExpression {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'term': TermFromJSON(json['term']),
        'value': json['value'],
    };
}

export function UnaryExpressionToJSON(value?: UnaryExpression | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'type': value['type'],
        'term': TermToJSON(value['term']),
        'value': value['value'],
    };
}

