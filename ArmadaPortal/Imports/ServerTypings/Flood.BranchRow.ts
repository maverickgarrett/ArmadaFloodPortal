namespace ArmadaPortal.Flood {
    export interface BranchRow {
        BranchId?: string;
        BranchName?: string;
        BranchAbbrev?: string;
    }

    export namespace BranchRow {
        export const idProperty = 'BranchId';
        export const nameProperty = 'BranchName';
        export const localTextPrefix = 'Flood.Branch';
        export const lookupKey = 'Flood.Branch';

        export function getLookup(): Q.Lookup<BranchRow> {
            return Q.getLookup<BranchRow>('Flood.Branch');
        }

        export declare const enum Fields {
            BranchId = "BranchId",
            BranchName = "BranchName",
            BranchAbbrev = "BranchAbbrev"
        }
    }
}

