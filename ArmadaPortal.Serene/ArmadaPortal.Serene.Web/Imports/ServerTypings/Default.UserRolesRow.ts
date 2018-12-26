
namespace ArmadaPortal.Serene.Default {
    export interface UserRolesRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        UserUsername?: string;
        UserDisplayName?: string;
        UserEmail?: string;
        UserSource?: string;
        UserPasswordHash?: string;
        UserPasswordSalt?: string;
        UserLastDirectoryUpdate?: string;
        UserUserImage?: string;
        UserInsertDate?: string;
        UserInsertUserId?: number;
        UserUpdateDate?: string;
        UserUpdateUserId?: number;
        UserIsActive?: number;
        RoleRoleName?: string;
    }

    export namespace UserRolesRow {
        export const idProperty = 'UserRoleId';
        export const localTextPrefix = 'Default.UserRoles';

        export namespace Fields {
            export declare const UserRoleId;
            export declare const UserId;
            export declare const RoleId;
            export declare const UserUsername;
            export declare const UserDisplayName;
            export declare const UserEmail;
            export declare const UserSource;
            export declare const UserPasswordHash;
            export declare const UserPasswordSalt;
            export declare const UserLastDirectoryUpdate;
            export declare const UserUserImage;
            export declare const UserInsertDate;
            export declare const UserInsertUserId;
            export declare const UserUpdateDate;
            export declare const UserUpdateUserId;
            export declare const UserIsActive;
            export declare const RoleRoleName;
        }

        [
            'UserRoleId',
            'UserId',
            'RoleId',
            'UserUsername',
            'UserDisplayName',
            'UserEmail',
            'UserSource',
            'UserPasswordHash',
            'UserPasswordSalt',
            'UserLastDirectoryUpdate',
            'UserUserImage',
            'UserInsertDate',
            'UserInsertUserId',
            'UserUpdateDate',
            'UserUpdateUserId',
            'UserIsActive',
            'RoleRoleName'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}