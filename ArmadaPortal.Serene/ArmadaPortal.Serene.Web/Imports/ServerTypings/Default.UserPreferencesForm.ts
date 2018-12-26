
namespace ArmadaPortal.Serene.Default {
    export class UserPreferencesForm extends Serenity.PrefixedContext {
        static formKey = 'Default.UserPreferences';
    }

    export interface UserPreferencesForm {
        UserId: Serenity.IntegerEditor;
        PreferenceType: Serenity.StringEditor;
        Name: Serenity.StringEditor;
        Value: Serenity.StringEditor;
    }

    [,
        ['UserId', () => Serenity.IntegerEditor],
        ['PreferenceType', () => Serenity.StringEditor],
        ['Name', () => Serenity.StringEditor],
        ['Value', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(UserPreferencesForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}