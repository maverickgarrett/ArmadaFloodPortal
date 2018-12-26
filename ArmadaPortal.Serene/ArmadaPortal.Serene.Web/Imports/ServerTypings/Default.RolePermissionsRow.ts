
namespace ArmadaPortal.Serene.Default {
    export interface RolePermissionsRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }

    export namespace RolePermissionsRow {
        export const idProperty = 'RolePermissionId';
        export const nameProperty = 'PermissionKey';
        export const localTextPrefix = 'Default.RolePermissions';

        export namespace Fields {
            export declare const RolePermissionId;
            export declare const RoleId;
            export declare const PermissionKey;
            export declare const RoleRoleName;
        }

        [
            'RolePermissionId',
            'RoleId',
            'PermissionKey',
            'RoleRoleName'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}