
namespace ArmadaPortal.Serene.Default {
    export interface UserPreferencesRow {
        UserPreferenceId?: number;
        UserId?: number;
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }

    export namespace UserPreferencesRow {
        export const idProperty = 'UserPreferenceId';
        export const nameProperty = 'PreferenceType';
        export const localTextPrefix = 'Default.UserPreferences';

        export namespace Fields {
            export declare const UserPreferenceId;
            export declare const UserId;
            export declare const PreferenceType;
            export declare const Name;
            export declare const Value;
        }

        [
            'UserPreferenceId',
            'UserId',
            'PreferenceType',
            'Name',
            'Value'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}