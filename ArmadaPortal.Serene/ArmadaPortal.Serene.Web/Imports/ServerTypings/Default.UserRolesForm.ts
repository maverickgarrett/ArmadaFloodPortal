
namespace ArmadaPortal.Serene.Default {
    export class UserRolesForm extends Serenity.PrefixedContext {
        static formKey = 'Default.UserRoles';
    }

    export interface UserRolesForm {
        UserId: Serenity.IntegerEditor;
        RoleId: Serenity.IntegerEditor;
    }

    [,
        ['UserId', () => Serenity.IntegerEditor],
        ['RoleId', () => Serenity.IntegerEditor]
    ].forEach(x => Object.defineProperty(UserRolesForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}