
namespace ArmadaPortal.Serene.Default {
    export class RolePermissionsForm extends Serenity.PrefixedContext {
        static formKey = 'Default.RolePermissions';
    }

    export interface RolePermissionsForm {
        RoleId: Serenity.IntegerEditor;
        PermissionKey: Serenity.StringEditor;
    }

    [,
        ['RoleId', () => Serenity.IntegerEditor],
        ['PermissionKey', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(RolePermissionsForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}