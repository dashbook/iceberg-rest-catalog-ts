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

import type { EqualityDeleteFile } from './EqualityDeleteFile';
import {
    instanceOfEqualityDeleteFile,
    EqualityDeleteFileFromJSON,
    EqualityDeleteFileFromJSONTyped,
    EqualityDeleteFileToJSON,
} from './EqualityDeleteFile';
import type { PositionDeleteFile } from './PositionDeleteFile';
import {
    instanceOfPositionDeleteFile,
    PositionDeleteFileFromJSON,
    PositionDeleteFileFromJSONTyped,
    PositionDeleteFileToJSON,
} from './PositionDeleteFile';

/**
 * @type DeleteFile
 * 
 * @export
 */
export type DeleteFile = { content: 'equality-deletes' } & EqualityDeleteFile | { content: 'position-deletes' } & PositionDeleteFile;

export function DeleteFileFromJSON(json: any): DeleteFile {
    return DeleteFileFromJSONTyped(json, false);
}

export function DeleteFileFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeleteFile {
    if (json == null) {
        return json;
    }
    switch (json['content']) {
        case 'equality-deletes':
            return Object.assign({}, EqualityDeleteFileFromJSONTyped(json, true), { content: 'equality-deletes' } as const);
        case 'position-deletes':
            return Object.assign({}, PositionDeleteFileFromJSONTyped(json, true), { content: 'position-deletes' } as const);
        default:
            throw new Error(`No variant of DeleteFile exists with 'content=${json['content']}'`);
    }
}

export function DeleteFileToJSON(json: any): any {
    return DeleteFileToJSONTyped(json, false);
}

export function DeleteFileToJSONTyped(value?: DeleteFile | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    switch (value['content']) {
        case 'equality-deletes':
            return Object.assign({}, EqualityDeleteFileToJSON(value), { content: 'equality-deletes' } as const);
        case 'position-deletes':
            return Object.assign({}, PositionDeleteFileToJSON(value), { content: 'position-deletes' } as const);
        default:
            throw new Error(`No variant of DeleteFile exists with 'content=${value['content']}'`);
    }

}

