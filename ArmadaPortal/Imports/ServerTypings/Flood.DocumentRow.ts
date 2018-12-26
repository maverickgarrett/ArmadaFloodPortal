﻿namespace ArmadaPortal.Flood {
    export interface DocumentRow {
        DocumentId?: string;
        DocumentType?: string;
        DocumentName?: string;
        DocumentUrl?: string;
        InsertDate?: string;
        ModifiedDate?: string;
    }

    export namespace DocumentRow {
        export const idProperty = 'DocumentId';
        export const nameProperty = 'DocumentName';
        export const localTextPrefix = 'Flood.Document';

        export declare const enum Fields {
            DocumentId = "DocumentId",
            DocumentType = "DocumentType",
            DocumentName = "DocumentName",
            DocumentUrl = "DocumentUrl",
            InsertDate = "InsertDate",
            ModifiedDate = "ModifiedDate"
        }
    }
}
