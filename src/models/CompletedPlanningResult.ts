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
import type { FileScanTask } from './FileScanTask';
import {
    FileScanTaskFromJSON,
    FileScanTaskFromJSONTyped,
    FileScanTaskToJSON,
    FileScanTaskToJSONTyped,
} from './FileScanTask';
import type { DeleteFile } from './DeleteFile';
import {
    DeleteFileFromJSON,
    DeleteFileFromJSONTyped,
    DeleteFileToJSON,
    DeleteFileToJSONTyped,
} from './DeleteFile';
import type { PlanStatus } from './PlanStatus';
import {
    PlanStatusFromJSON,
    PlanStatusFromJSONTyped,
    PlanStatusToJSON,
    PlanStatusToJSONTyped,
} from './PlanStatus';

/**
 * Completed server-side planning result
 * @export
 * @interface CompletedPlanningResult
 */
export interface CompletedPlanningResult {
    /**
     * Delete files referenced by file scan tasks
     * @type {Array<DeleteFile>}
     * @memberof CompletedPlanningResult
     */
    deleteFiles?: Array<DeleteFile>;
    /**
     * 
     * @type {Array<FileScanTask>}
     * @memberof CompletedPlanningResult
     */
    fileScanTasks?: Array<FileScanTask>;
    /**
     * 
     * @type {Array<string>}
     * @memberof CompletedPlanningResult
     */
    planTasks?: Array<string>;
    /**
     * 
     * @type {PlanStatus}
     * @memberof CompletedPlanningResult
     */
    status: PlanStatus;
}



/**
 * Check if a given object implements the CompletedPlanningResult interface.
 */
export function instanceOfCompletedPlanningResult(value: object): value is CompletedPlanningResult {
    if (!('status' in value) || value['status'] === undefined) return false;
    return true;
}

export function CompletedPlanningResultFromJSON(json: any): CompletedPlanningResult {
    return CompletedPlanningResultFromJSONTyped(json, false);
}

export function CompletedPlanningResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): CompletedPlanningResult {
    if (json == null) {
        return json;
    }
    return {
        
        'deleteFiles': json['delete-files'] == null ? undefined : ((json['delete-files'] as Array<any>).map(DeleteFileFromJSON)),
        'fileScanTasks': json['file-scan-tasks'] == null ? undefined : ((json['file-scan-tasks'] as Array<any>).map(FileScanTaskFromJSON)),
        'planTasks': json['plan-tasks'] == null ? undefined : json['plan-tasks'],
        'status': PlanStatusFromJSON(json['status']),
    };
}

export function CompletedPlanningResultToJSON(json: any): CompletedPlanningResult {
    return CompletedPlanningResultToJSONTyped(json, false);
}

export function CompletedPlanningResultToJSONTyped(value?: CompletedPlanningResult | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'delete-files': value['deleteFiles'] == null ? undefined : ((value['deleteFiles'] as Array<any>).map(DeleteFileToJSON)),
        'file-scan-tasks': value['fileScanTasks'] == null ? undefined : ((value['fileScanTasks'] as Array<any>).map(FileScanTaskToJSON)),
        'plan-tasks': value['planTasks'],
        'status': PlanStatusToJSON(value['status']),
    };
}

