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


/**
 * Status of a server-side planning operation
 * @export
 */
export const PlanStatus = {
    Completed: 'completed',
    Submitted: 'submitted',
    Cancelled: 'cancelled',
    Failed: 'failed'
} as const;
export type PlanStatus = typeof PlanStatus[keyof typeof PlanStatus];


export function instanceOfPlanStatus(value: any): boolean {
    for (const key in PlanStatus) {
        if (Object.prototype.hasOwnProperty.call(PlanStatus, key)) {
            if (PlanStatus[key as keyof typeof PlanStatus] === value) {
                return true;
            }
        }
    }
    return false;
}

export function PlanStatusFromJSON(json: any): PlanStatus {
    return PlanStatusFromJSONTyped(json, false);
}

export function PlanStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): PlanStatus {
    return json as PlanStatus;
}

export function PlanStatusToJSON(value?: PlanStatus | null): any {
    return value as any;
}

export function PlanStatusToJSONTyped(value: any, ignoreDiscriminator: boolean): PlanStatus {
    return value as PlanStatus;
}

