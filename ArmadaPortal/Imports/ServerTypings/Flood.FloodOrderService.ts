namespace ArmadaPortal.Flood {
    export namespace FloodOrderService {
        export const baseUrl = 'Flood/Order';

        export declare function Create(request: FloodOrderSaveRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<FloodOrderRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: FloodOrderListRequest, onSuccess?: (response: Serenity.ListResponse<FloodOrderRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: FloodOrderRetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<FloodOrderRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Flood/Order/Create",
            Update = "Flood/Order/Update",
            List = "Flood/Order/List",
            Retrieve = "Flood/Order/Retrieve"
        }

        [
            'Create', 
            'Update', 
            'List', 
            'Retrieve'
        ].forEach(x => {
            (<any>FloodOrderService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

