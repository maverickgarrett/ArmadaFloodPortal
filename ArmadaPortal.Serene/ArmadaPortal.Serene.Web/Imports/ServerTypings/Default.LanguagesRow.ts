
namespace ArmadaPortal.Serene.Default {
    export interface LanguagesRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
    }

    export namespace LanguagesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'LanguageId';
        export const localTextPrefix = 'Default.Languages';

        export namespace Fields {
            export declare const Id;
            export declare const LanguageId;
            export declare const LanguageName;
        }

        [
            'Id',
            'LanguageId',
            'LanguageName'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}