namespace ArmadaPortal.Flood {
    export namespace DocumentService {
        export const baseUrl = 'Flood/Document';

        export declare function List(request: DocumentListRequest, onSuccess?: (response: Serenity.ListResponse<DocumentRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: DocumentRetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DocumentRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function DocumentImport(request: DocumentImportRequest, onSuccess?: (response: DocumentImportResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            List = "Flood/Document/List",
            Retrieve = "Flood/Document/Retrieve",
            DocumentImport = "Flood/Document/DocumentImport"
        }

        [
            'List', 
            'Retrieve', 
            'DocumentImport'
        ].forEach(x => {
            (<any>DocumentService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

