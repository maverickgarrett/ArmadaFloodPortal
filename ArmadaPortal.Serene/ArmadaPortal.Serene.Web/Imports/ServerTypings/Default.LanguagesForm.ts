
namespace ArmadaPortal.Serene.Default {
    export class LanguagesForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Languages';
    }

    export interface LanguagesForm {
        LanguageId: Serenity.StringEditor;
        LanguageName: Serenity.StringEditor;
    }

    [,
        ['LanguageId', () => Serenity.StringEditor],
        ['LanguageName', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(LanguagesForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}