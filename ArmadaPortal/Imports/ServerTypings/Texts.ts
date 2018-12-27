namespace ArmadaPortal.Texts {

    declare namespace Db {

        namespace Administration {

            namespace Language {
                export const Id: string;
                export const LanguageId: string;
                export const LanguageName: string;
            }

            namespace Role {
                export const RoleId: string;
                export const RoleName: string;
            }

            namespace RolePermission {
                export const PermissionKey: string;
                export const RoleId: string;
                export const RolePermissionId: string;
                export const RoleRoleName: string;
            }

            namespace Translation {
                export const CustomText: string;
                export const EntityPlural: string;
                export const Key: string;
                export const OverrideConfirmation: string;
                export const SaveChangesButton: string;
                export const SourceLanguage: string;
                export const SourceText: string;
                export const TargetLanguage: string;
                export const TargetText: string;
            }

            namespace User {
                export const DisplayName: string;
                export const Email: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const LastDirectoryUpdate: string;
                export const Password: string;
                export const PasswordConfirm: string;
                export const PasswordHash: string;
                export const PasswordSalt: string;
                export const Source: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UserId: string;
                export const UserImage: string;
                export const Username: string;
            }

            namespace UserPermission {
                export const Granted: string;
                export const PermissionKey: string;
                export const User: string;
                export const UserId: string;
                export const UserPermissionId: string;
                export const Username: string;
            }

            namespace UserRole {
                export const RoleId: string;
                export const User: string;
                export const UserId: string;
                export const UserRoleId: string;
                export const Username: string;
            }
        }

        namespace AdministrationClient {

            namespace ClientUser {
                export const DisplayName: string;
                export const Email: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const LastDirectoryUpdate: string;
                export const Password: string;
                export const PasswordConfirm: string;
                export const PasswordHash: string;
                export const PasswordSalt: string;
                export const Source: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UserId: string;
                export const UserImage: string;
                export const Username: string;
            }
        }

        namespace Common {

            namespace UserPreference {
                export const Name: string;
                export const PreferenceType: string;
                export const UserId: string;
                export const UserPreferenceId: string;
                export const Value: string;
            }
        }

        namespace Flood {

            namespace Branch {
                export const BranchAbbrev: string;
                export const BranchId: string;
                export const BranchName: string;
            }

            namespace Document {
                export const DocumentId: string;
                export const DocumentName: string;
                export const DocumentTitle: string;
                export const DocumentType: string;
                export const DocumentUrl: string;
                export const InsertDate: string;
                export const ModifiedDate: string;
                export const OrderId: string;
                export const UploadDocument: string;
            }

            namespace FloodOrder {
                export const Address1Matched: string;
                export const Address1Orig: string;
                export const Address2Matched: string;
                export const Address2Orig: string;
                export const AddressEnteredFormatted: string;
                export const AddressMatchedFormatted: string;
                export const ApprovalLetter: string;
                export const Borrower: string;
                export const Borrower2: string;
                export const BranchAbbrev: string;
                export const BranchId: string;
                export const BranchName: string;
                export const CityMatched: string;
                export const CityOrig: string;
                export const EmailCertCC: string;
                export const EmailCertTo: string;
                export const FloodOrderStatus: string;
                export const FloodOrderStatusDate: string;
                export const FloodOrderStatusDescription: string;
                export const FloodZone: string;
                export const InsertDate: string;
                export const IsUrgent: string;
                export const LoanNumber: string;
                export const LoanType: string;
                export const ModifiedDate: string;
                export const NoteToAnalyst: string;
                export const OrderAccountId: string;
                export const OrderAccountName: string;
                export const OrderContactId: string;
                export const OrderContactName: string;
                export const OrderCreatedById: string;
                export const OrderCreatedByName: string;
                export const OrderDate: string;
                export const OrderId: string;
                export const OrderNumber: string;
                export const OrderType: string;
                export const ParcelNumber: string;
                export const ShowDownloadLink: string;
                export const ShowDownloadLinkId: string;
                export const StateMatched: string;
                export const StateOrig: string;
                export const UploadDocument: string;
                export const UploadDocumentFileName: string;
                export const ZipMatched: string;
                export const ZipOrig: string;
            }
        }

        namespace _Ext {

            namespace AuditLog {
                export const ActionDate: string;
                export const ActionType: string;
                export const EntityId: string;
                export const EntityTableName: string;
                export const Id: string;
                export const IpAddress: string;
                export const NewEntity: string;
                export const OldEntity: string;
                export const SessionId: string;
                export const UserId: string;
                export const VersionNo: string;
            }
        }
    }

    declare namespace Forms {

        namespace Membership {

            namespace ChangePassword {
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace ForgotPassword {
                export const BackToLogin: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace Login {
                export const FacebookButton: string;
                export const ForgotPassword: string;
                export const FormTitle: string;
                export const GoogleButton: string;
                export const OR: string;
                export const RememberMe: string;
                export const SignInButton: string;
                export const SignUpButton: string;
            }

            namespace ResetPassword {
                export const BackToLogin: string;
                export const EmailSubject: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace SignUp {
                export const AcceptTerms: string;
                export const ActivateEmailSubject: string;
                export const ActivationCompleteMessage: string;
                export const BackToLogin: string;
                export const ConfirmEmail: string;
                export const ConfirmPassword: string;
                export const DisplayName: string;
                export const Email: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const Password: string;
                export const SubmitButton: string;
                export const Success: string;
            }
        }
    }

    declare namespace Site {

        namespace AccessDenied {
            export const ClickToChangeUser: string;
            export const ClickToLogin: string;
            export const LackPermissions: string;
            export const NotLoggedIn: string;
            export const PageTitle: string;
        }

        namespace BasicProgressDialog {
            export const CancelTitle: string;
            export const PleaseWait: string;
        }

        namespace BulkServiceAction {
            export const AllHadErrorsFormat: string;
            export const AllSuccessFormat: string;
            export const ConfirmationFormat: string;
            export const ErrorCount: string;
            export const NothingToProcess: string;
            export const SomeHadErrorsFormat: string;
            export const SuccessCount: string;
        }

        namespace Dashboard {
            export const ContentDescription: string;
        }

        namespace Layout {
            export const FooterCopyright: string;
            export const FooterInfo: string;
            export const FooterRights: string;
            export const GeneralSettings: string;
            export const Language: string;
            export const Theme: string;
            export const ThemeBlack: string;
            export const ThemeBlackLight: string;
            export const ThemeBlue: string;
            export const ThemeBlueLight: string;
            export const ThemeGreen: string;
            export const ThemeGreenLight: string;
            export const ThemePurple: string;
            export const ThemePurpleLight: string;
            export const ThemeRed: string;
            export const ThemeRedLight: string;
            export const ThemeYellow: string;
            export const ThemeYellowLight: string;
        }

        namespace RolePermissionDialog {
            export const DialogTitle: string;
            export const EditButton: string;
            export const SaveSuccess: string;
        }

        namespace UserDialog {
            export const EditPermissionsButton: string;
            export const EditRolesButton: string;
        }

        namespace UserPermissionDialog {
            export const DialogTitle: string;
            export const Grant: string;
            export const Permission: string;
            export const Revoke: string;
            export const SaveSuccess: string;
        }

        namespace UserRoleDialog {
            export const DialogTitle: string;
            export const SaveSuccess: string;
        }

        namespace ValidationError {
            export const Title: string;
        }
    }

    declare namespace Validation {
        export const ArmadaFloodPhoneOrder: string;
        export const ArmadaFloodPhoneOrderMultiple: string;
        export const AuthenticationError: string;
        export const CantFindUserWithEmail: string;
        export const CurrentPasswordMismatch: string;
        export const DeleteForeignKeyError: string;
        export const EmailConfirm: string;
        export const EmailInUse: string;
        export const InvalidActivateToken: string;
        export const InvalidResetToken: string;
        export const MinRequiredPasswordLength: string;
        export const SavePrimaryKeyError: string;
    }

    ArmadaPortal['Texts'] = Q.proxyTexts(Texts, '', {Db:{Administration:{Language:{Id:1,LanguageId:1,LanguageName:1},Role:{RoleId:1,RoleName:1},RolePermission:{PermissionKey:1,RoleId:1,RolePermissionId:1,RoleRoleName:1},Translation:{CustomText:1,EntityPlural:1,Key:1,OverrideConfirmation:1,SaveChangesButton:1,SourceLanguage:1,SourceText:1,TargetLanguage:1,TargetText:1},User:{DisplayName:1,Email:1,InsertDate:1,InsertUserId:1,IsActive:1,LastDirectoryUpdate:1,Password:1,PasswordConfirm:1,PasswordHash:1,PasswordSalt:1,Source:1,UpdateDate:1,UpdateUserId:1,UserId:1,UserImage:1,Username:1},UserPermission:{Granted:1,PermissionKey:1,User:1,UserId:1,UserPermissionId:1,Username:1},UserRole:{RoleId:1,User:1,UserId:1,UserRoleId:1,Username:1}},AdministrationClient:{ClientUser:{DisplayName:1,Email:1,InsertDate:1,InsertUserId:1,IsActive:1,LastDirectoryUpdate:1,Password:1,PasswordConfirm:1,PasswordHash:1,PasswordSalt:1,Source:1,UpdateDate:1,UpdateUserId:1,UserId:1,UserImage:1,Username:1}},Common:{UserPreference:{Name:1,PreferenceType:1,UserId:1,UserPreferenceId:1,Value:1}},Flood:{Branch:{BranchAbbrev:1,BranchId:1,BranchName:1},Document:{DocumentId:1,DocumentName:1,DocumentTitle:1,DocumentType:1,DocumentUrl:1,InsertDate:1,ModifiedDate:1,OrderId:1,UploadDocument:1},FloodOrder:{Address1Matched:1,Address1Orig:1,Address2Matched:1,Address2Orig:1,AddressEnteredFormatted:1,AddressMatchedFormatted:1,ApprovalLetter:1,Borrower:1,Borrower2:1,BranchAbbrev:1,BranchId:1,BranchName:1,CityMatched:1,CityOrig:1,EmailCertCC:1,EmailCertTo:1,FloodOrderStatus:1,FloodOrderStatusDate:1,FloodOrderStatusDescription:1,FloodZone:1,InsertDate:1,IsUrgent:1,LoanNumber:1,LoanType:1,ModifiedDate:1,NoteToAnalyst:1,OrderAccountId:1,OrderAccountName:1,OrderContactId:1,OrderContactName:1,OrderCreatedById:1,OrderCreatedByName:1,OrderDate:1,OrderId:1,OrderNumber:1,OrderType:1,ParcelNumber:1,ShowDownloadLink:1,ShowDownloadLinkId:1,StateMatched:1,StateOrig:1,UploadDocument:1,UploadDocumentFileName:1,ZipMatched:1,ZipOrig:1}},_Ext:{AuditLog:{ActionDate:1,ActionType:1,EntityId:1,EntityTableName:1,Id:1,IpAddress:1,NewEntity:1,OldEntity:1,SessionId:1,UserId:1,VersionNo:1}}},Forms:{Membership:{ChangePassword:{FormTitle:1,SubmitButton:1,Success:1},ForgotPassword:{BackToLogin:1,FormInfo:1,FormTitle:1,SubmitButton:1,Success:1},Login:{FacebookButton:1,ForgotPassword:1,FormTitle:1,GoogleButton:1,OR:1,RememberMe:1,SignInButton:1,SignUpButton:1},ResetPassword:{BackToLogin:1,EmailSubject:1,FormTitle:1,SubmitButton:1,Success:1},SignUp:{AcceptTerms:1,ActivateEmailSubject:1,ActivationCompleteMessage:1,BackToLogin:1,ConfirmEmail:1,ConfirmPassword:1,DisplayName:1,Email:1,FormInfo:1,FormTitle:1,Password:1,SubmitButton:1,Success:1}}},Site:{AccessDenied:{ClickToChangeUser:1,ClickToLogin:1,LackPermissions:1,NotLoggedIn:1,PageTitle:1},BasicProgressDialog:{CancelTitle:1,PleaseWait:1},BulkServiceAction:{AllHadErrorsFormat:1,AllSuccessFormat:1,ConfirmationFormat:1,ErrorCount:1,NothingToProcess:1,SomeHadErrorsFormat:1,SuccessCount:1},Dashboard:{ContentDescription:1},Layout:{FooterCopyright:1,FooterInfo:1,FooterRights:1,GeneralSettings:1,Language:1,Theme:1,ThemeBlack:1,ThemeBlackLight:1,ThemeBlue:1,ThemeBlueLight:1,ThemeGreen:1,ThemeGreenLight:1,ThemePurple:1,ThemePurpleLight:1,ThemeRed:1,ThemeRedLight:1,ThemeYellow:1,ThemeYellowLight:1},RolePermissionDialog:{DialogTitle:1,EditButton:1,SaveSuccess:1},UserDialog:{EditPermissionsButton:1,EditRolesButton:1},UserPermissionDialog:{DialogTitle:1,Grant:1,Permission:1,Revoke:1,SaveSuccess:1},UserRoleDialog:{DialogTitle:1,SaveSuccess:1},ValidationError:{Title:1}},Validation:{ArmadaFloodPhoneOrder:1,ArmadaFloodPhoneOrderMultiple:1,AuthenticationError:1,CantFindUserWithEmail:1,CurrentPasswordMismatch:1,DeleteForeignKeyError:1,EmailConfirm:1,EmailInUse:1,InvalidActivateToken:1,InvalidResetToken:1,MinRequiredPasswordLength:1,SavePrimaryKeyError:1}});
}

