namespace ArmadaPortal.Flood {
    export namespace BranchService {
        export const baseUrl = 'Flood/Branch';

        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BranchRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BranchRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            List = "Flood/Branch/List",
            Retrieve = "Flood/Branch/Retrieve"
        }

        [
            'List', 
            'Retrieve'
        ].forEach(x => {
            (<any>BranchService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

