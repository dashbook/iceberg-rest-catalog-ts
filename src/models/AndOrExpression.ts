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
import type { Expression } from './Expression';
import {
    ExpressionFromJSON,
    ExpressionFromJSONTyped,
    ExpressionToJSON,
    ExpressionToJSONTyped,
} from './Expression';

/**
 * 
 * @export
 * @interface AndOrExpression
 */
export interface AndOrExpression {
    /**
     * 
     * @type {string}
     * @memberof AndOrExpression
     */
    type: string;
    /**
     * 
     * @type {Expression}
     * @memberof AndOrExpression
     */
    left: Expression;
    /**
     * 
     * @type {Expression}
     * @memberof AndOrExpression
     */
    right: Expression;
}

/**
 * Check if a given object implements the AndOrExpression interface.
 */
export function instanceOfAndOrExpression(value: object): value is AndOrExpression {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('left' in value) || value['left'] === undefined) return false;
    if (!('right' in value) || value['right'] === undefined) return false;
    return true;
}

export function AndOrExpressionFromJSON(json: any): AndOrExpression {
    return AndOrExpressionFromJSONTyped(json, false);
}

export function AndOrExpressionFromJSONTyped(json: any, ignoreDiscriminator: boolean): AndOrExpression {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'left': ExpressionFromJSON(json['left']),
        'right': ExpressionFromJSON(json['right']),
    };
}

export function AndOrExpressionToJSON(json: any): AndOrExpression {
    return AndOrExpressionToJSONTyped(json, false);
}

export function AndOrExpressionToJSONTyped(value?: AndOrExpression | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'left': ExpressionToJSON(value['left']),
        'right': ExpressionToJSON(value['right']),
    };
}

