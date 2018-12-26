
namespace ArmadaPortal.Serene.Default {
    export class UserPermissionsForm extends Serenity.PrefixedContext {
        static formKey = 'Default.UserPermissions';
    }

    export interface UserPermissionsForm {
        UserId: Serenity.IntegerEditor;
        PermissionKey: Serenity.StringEditor;
        Granted: Serenity.BooleanEditor;
    }

    [,
        ['UserId', () => Serenity.IntegerEditor],
        ['PermissionKey', () => Serenity.StringEditor],
        ['Granted', () => Serenity.BooleanEditor]
    ].forEach(x => Object.defineProperty(UserPermissionsForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}