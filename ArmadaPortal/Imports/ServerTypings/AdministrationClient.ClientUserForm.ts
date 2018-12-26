namespace ArmadaPortal.AdministrationClient {
    export interface ClientUserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
    }

    export class ClientUserForm extends Serenity.PrefixedContext {
        static formKey = 'AdministrationClient.ClientUser';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ClientUserForm.init)  {
                ClientUserForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.EmailEditor;
                var w2 = s.PasswordEditor;

                Q.initFormType(ClientUserForm, [
                    'Username', w0,
                    'DisplayName', w0,
                    'Email', w1,
                    'Password', w2,
                    'PasswordConfirm', w2,
                    'Source', w0
                ]);
            }
        }
    }
}

