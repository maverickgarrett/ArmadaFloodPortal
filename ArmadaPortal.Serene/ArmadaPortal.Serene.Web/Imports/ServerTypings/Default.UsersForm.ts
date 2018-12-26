
namespace ArmadaPortal.Serene.Default {
    export class UsersForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Users';
    }

    export interface UsersForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        Source: Serenity.StringEditor;
        PasswordHash: Serenity.StringEditor;
        PasswordSalt: Serenity.StringEditor;
        LastDirectoryUpdate: Serenity.DateEditor;
        UserImage: Serenity.StringEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        IsActive: Serenity.IntegerEditor;
    }

    [,
        ['Username', () => Serenity.StringEditor],
        ['DisplayName', () => Serenity.StringEditor],
        ['Email', () => Serenity.StringEditor],
        ['Source', () => Serenity.StringEditor],
        ['PasswordHash', () => Serenity.StringEditor],
        ['PasswordSalt', () => Serenity.StringEditor],
        ['LastDirectoryUpdate', () => Serenity.DateEditor],
        ['UserImage', () => Serenity.StringEditor],
        ['InsertDate', () => Serenity.DateEditor],
        ['InsertUserId', () => Serenity.IntegerEditor],
        ['UpdateDate', () => Serenity.DateEditor],
        ['UpdateUserId', () => Serenity.IntegerEditor],
        ['IsActive', () => Serenity.IntegerEditor]
    ].forEach(x => Object.defineProperty(UsersForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}