namespace ArmadaPortal.AdministrationClient {
    export namespace ClientUserService {
        export const baseUrl = 'AdministrationClient/ClientUser';

        export declare function Create(request: Serenity.SaveRequest<ClientUserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ClientUserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ClientUserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ClientUserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "AdministrationClient/ClientUser/Create",
            Update = "AdministrationClient/ClientUser/Update",
            Retrieve = "AdministrationClient/ClientUser/Retrieve",
            List = "AdministrationClient/ClientUser/List"
        }

        [
            'Create', 
            'Update', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>ClientUserService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

