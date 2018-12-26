
namespace ArmadaPortal.Serene.Default {
    export interface RolesRow {
        RoleId?: number;
        RoleName?: string;
    }

    export namespace RolesRow {
        export const idProperty = 'RoleId';
        export const nameProperty = 'RoleName';
        export const localTextPrefix = 'Default.Roles';

        export namespace Fields {
            export declare const RoleId;
            export declare const RoleName;
        }

        [
            'RoleId',
            'RoleName'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}