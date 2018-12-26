
namespace ArmadaPortal.Serene.Default {
    export class RolesForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Roles';
    }

    export interface RolesForm {
        RoleName: Serenity.StringEditor;
    }

    [,
        ['RoleName', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(RolesForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}