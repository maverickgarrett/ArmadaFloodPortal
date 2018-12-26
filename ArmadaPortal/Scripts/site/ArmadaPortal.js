var ArmadaPortal;
(function (ArmadaPortal) {
    var Administration;
    (function (Administration) {
        var LanguageForm = /** @class */ (function (_super) {
            __extends(LanguageForm, _super);
            function LanguageForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LanguageForm.init) {
                    LanguageForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(LanguageForm, [
                        'LanguageId', w0,
                        'LanguageName', w0
                    ]);
                }
                return _this;
            }
            LanguageForm.formKey = 'Administration.Language';
            return LanguageForm;
        }(Serenity.PrefixedContext));
        Administration.LanguageForm = LanguageForm;
    })(Administration = ArmadaPortal.Administration || (ArmadaPortal.Administration = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
var ArmadaPortal;
(function (ArmadaPortal) {
    var Administration;
    (function (Administration) {
        var LanguageRow;
        (function (LanguageRow) {
            LanguageRow.idProperty = 'Id';
            LanguageRow.nameProperty = 'LanguageName';
            LanguageRow.localTextPrefix = 'Administration.Language';
            LanguageRow.lookupKey = 'Administration.Language';
            function getLookup() {
                return Q.getLookup('Administration.Language');
            }
            LanguageRow.getLookup = getLookup;
        })(LanguageRow = Administration.LanguageRow || (Administration.LanguageRow = {}));
    })(Administration = ArmadaPortal.Administration || (ArmadaPortal.Administration = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
var ArmadaPortal;
(function (ArmadaPortal) {
    var Administration;
    (function (Administration) {
        var LanguageService;
        (function (LanguageService) {
            LanguageService.baseUrl = 'Administration/Language';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LanguageService[x] = function (r, s, o) {
                    return Q.serviceRequest(LanguageService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LanguageService = Administration.LanguageService || (Administration.LanguageService = {}));
    })(Administration = ArmadaPortal.Administration || (ArmadaPortal.Administration = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
var ArmadaPortal;
(function (ArmadaPortal) {
    var Administration;
    (function (Administration) {
        var RoleForm = /** @class */ (function (_super) {
            __extends(RoleForm, _super);
            function RoleForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RoleForm.init) {
                    RoleForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(RoleForm, [
                        'RoleName', w0
                    ]);
                }
                return _this;
            }
            RoleForm.formKey = 'Administration.Role';
            return RoleForm;
        }(Serenity.PrefixedContext));
        Administration.RoleForm = RoleForm;
    })(Administration = ArmadaPortal.Administration || (ArmadaPortal.Administration = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
var ArmadaPortal;
(function (ArmadaPortal) {
    var Administration;
    (function (Administration) {
        var RolePermissionRow;
        (function (RolePermissionRow) {
            RolePermissionRow.idProperty = 'RolePermissionId';
            RolePermissionRow.nameProperty = 'PermissionKey';
            RolePermissionRow.localTextPrefix = 'Administration.RolePermission';
        })(RolePermissionRow = Administration.RolePermissionRow || (Administration.RolePermissionRow = {}));
    })(Administration = ArmadaPortal.Administration || (ArmadaPortal.Administration = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
var ArmadaPortal;
(function (ArmadaPortal) {
    var Administration;
    (function (Administration) {
        var RolePermissionService;
        (function (RolePermissionService) {
            RolePermissionService.baseUrl = 'Administration/RolePermission';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                RolePermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(RolePermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RolePermissionService = Administration.RolePermissionService || (Administration.RolePermissionService = {}));
    })(Administration = ArmadaPortal.Administration || (ArmadaPortal.Administration = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
var ArmadaPortal;
(function (ArmadaPortal) {
    var Administration;
    (function (Administration) {
        var RoleRow;
        (function (RoleRow) {
            RoleRow.idProperty = 'RoleId';
            RoleRow.nameProperty = 'RoleName';
            RoleRow.localTextPrefix = 'Administration.Role';
            RoleRow.lookupKey = 'Administration.Role';
            function getLookup() {
                return Q.getLookup('Administration.Role');
            }
            RoleRow.getLookup = getLookup;
        })(RoleRow = Administration.RoleRow || (Administration.RoleRow = {}));
    })(Administration = ArmadaPortal.Administration || (ArmadaPortal.Administration = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
var ArmadaPortal;
(function (ArmadaPortal) {
    var Administration;
    (function (Administration) {
        var RoleService;
        (function (RoleService) {
            RoleService.baseUrl = 'Administration/Role';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(RoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RoleService = Administration.RoleService || (Administration.RoleService = {}));
    })(Administration = ArmadaPortal.Administration || (ArmadaPortal.Administration = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
var ArmadaPortal;
(function (ArmadaPortal) {
    var Administration;
    (function (Administration) {
        var TranslationService;
        (function (TranslationService) {
            TranslationService.baseUrl = 'Administration/Translation';
            [
                'List',
                'Update'
            ].forEach(function (x) {
                TranslationService[x] = function (r, s, o) {
                    return Q.serviceRequest(TranslationService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TranslationService = Administration.TranslationService || (Administration.TranslationService = {}));
    })(Administration = ArmadaPortal.Administration || (ArmadaPortal.Administration = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
var ArmadaPortal;
(function (ArmadaPortal) {
    var Administration;
    (function (Administration) {
        var UserForm = /** @class */ (function (_super) {
            __extends(UserForm, _super);
            function UserForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!UserForm.init) {
                    UserForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.ImageUploadEditor;
                    var w3 = s.PasswordEditor;
                    Q.initFormType(UserForm, [
                        'Username', w0,
                        'DisplayName', w0,
                        'Email', w1,
                        'UserImage', w2,
                        'Password', w3,
                        'PasswordConfirm', w3,
                        'Source', w0
                    ]);
                }
                return _this;
            }
            UserForm.formKey = 'Administration.User';
            return UserForm;
        }(Serenity.PrefixedContext));
        Administration.UserForm = UserForm;
    })(Administration = ArmadaPortal.Administration || (ArmadaPortal.Administration = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
var ArmadaPortal;
(function (ArmadaPortal) {
    var Administration;
    (function (Administration) {
        var UserPermissionRow;
        (function (UserPermissionRow) {
            UserPermissionRow.idProperty = 'UserPermissionId';
            UserPermissionRow.nameProperty = 'PermissionKey';
            UserPermissionRow.localTextPrefix = 'Administration.UserPermission';
        })(UserPermissionRow = Administration.UserPermissionRow || (Administration.UserPermissionRow = {}));
    })(Administration = ArmadaPortal.Administration || (ArmadaPortal.Administration = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
var ArmadaPortal;
(function (ArmadaPortal) {
    var Administration;
    (function (Administration) {
        var UserPermissionService;
        (function (UserPermissionService) {
            UserPermissionService.baseUrl = 'Administration/UserPermission';
            [
                'Update',
                'List',
                'ListRolePermissions',
                'ListPermissionKeys'
            ].forEach(function (x) {
                UserPermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPermissionService = Administration.UserPermissionService || (Administration.UserPermissionService = {}));
    })(Administration = ArmadaPortal.Administration || (ArmadaPortal.Administration = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
var ArmadaPortal;
(function (ArmadaPortal) {
    var Administration;
    (function (Administration) {
        var UserRoleRow;
        (function (UserRoleRow) {
            UserRoleRow.idProperty = 'UserRoleId';
            UserRoleRow.localTextPrefix = 'Administration.UserRole';
        })(UserRoleRow = Administration.UserRoleRow || (Administration.UserRoleRow = {}));
    })(Administration = ArmadaPortal.Administration || (ArmadaPortal.Administration = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
var ArmadaPortal;
(function (ArmadaPortal) {
    var Administration;
    (function (Administration) {
        var UserRoleService;
        (function (UserRoleService) {
            UserRoleService.baseUrl = 'Administration/UserRole';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                UserRoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserRoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserRoleService = Administration.UserRoleService || (Administration.UserRoleService = {}));
    })(Administration = ArmadaPortal.Administration || (ArmadaPortal.Administration = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
var ArmadaPortal;
(function (ArmadaPortal) {
    var Administration;
    (function (Administration) {
        var UserRow;
        (function (UserRow) {
            UserRow.idProperty = 'UserId';
            UserRow.isActiveProperty = 'IsActive';
            UserRow.nameProperty = 'Username';
            UserRow.localTextPrefix = 'Administration.User';
            UserRow.lookupKey = 'Administration.User';
            function getLookup() {
                return Q.getLookup('Administration.User');
            }
            UserRow.getLookup = getLookup;
        })(UserRow = Administration.UserRow || (Administration.UserRow = {}));
    })(Administration = ArmadaPortal.Administration || (ArmadaPortal.Administration = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
var ArmadaPortal;
(function (ArmadaPortal) {
    var Administration;
    (function (Administration) {
        var UserService;
        (function (UserService) {
            UserService.baseUrl = 'Administration/User';
            [
                'Create',
                'Update',
                'Delete',
                'Undelete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                UserService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserService = Administration.UserService || (Administration.UserService = {}));
    })(Administration = ArmadaPortal.Administration || (ArmadaPortal.Administration = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
var ArmadaPortal;
(function (ArmadaPortal) {
    var Common;
    (function (Common) {
        var UserPreferenceRow;
        (function (UserPreferenceRow) {
            UserPreferenceRow.idProperty = 'UserPreferenceId';
            UserPreferenceRow.nameProperty = 'Name';
            UserPreferenceRow.localTextPrefix = 'Common.UserPreference';
        })(UserPreferenceRow = Common.UserPreferenceRow || (Common.UserPreferenceRow = {}));
    })(Common = ArmadaPortal.Common || (ArmadaPortal.Common = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
var ArmadaPortal;
(function (ArmadaPortal) {
    var Common;
    (function (Common) {
        var UserPreferenceService;
        (function (UserPreferenceService) {
            UserPreferenceService.baseUrl = 'Common/UserPreference';
            [
                'Update',
                'Retrieve'
            ].forEach(function (x) {
                UserPreferenceService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPreferenceService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPreferenceService = Common.UserPreferenceService || (Common.UserPreferenceService = {}));
    })(Common = ArmadaPortal.Common || (ArmadaPortal.Common = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
var ArmadaPortal;
(function (ArmadaPortal) {
    var Flood;
    (function (Flood) {
        var BranchRow;
        (function (BranchRow) {
            BranchRow.idProperty = 'BranchId';
            BranchRow.nameProperty = 'BranchName';
            BranchRow.localTextPrefix = 'Flood.Branch';
            BranchRow.lookupKey = 'Flood.Branch';
            function getLookup() {
                return Q.getLookup('Flood.Branch');
            }
            BranchRow.getLookup = getLookup;
        })(BranchRow = Flood.BranchRow || (Flood.BranchRow = {}));
    })(Flood = ArmadaPortal.Flood || (ArmadaPortal.Flood = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
var ArmadaPortal;
(function (ArmadaPortal) {
    var Flood;
    (function (Flood) {
        var BranchService;
        (function (BranchService) {
            BranchService.baseUrl = 'Flood/Branch';
            [
                'List',
                'Retrieve'
            ].forEach(function (x) {
                BranchService[x] = function (r, s, o) {
                    return Q.serviceRequest(BranchService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(BranchService = Flood.BranchService || (Flood.BranchService = {}));
    })(Flood = ArmadaPortal.Flood || (ArmadaPortal.Flood = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
var ArmadaPortal;
(function (ArmadaPortal) {
    var Flood;
    (function (Flood) {
        var DocumentImportForm = /** @class */ (function (_super) {
            __extends(DocumentImportForm, _super);
            function DocumentImportForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!DocumentImportForm.init) {
                    DocumentImportForm.init = true;
                    var s = Serenity;
                    var w0 = s.ImageUploadEditor;
                    Q.initFormType(DocumentImportForm, [
                        'FileName', w0
                    ]);
                }
                return _this;
            }
            DocumentImportForm.formKey = 'Flood.DocumentImport';
            return DocumentImportForm;
        }(Serenity.PrefixedContext));
        Flood.DocumentImportForm = DocumentImportForm;
    })(Flood = ArmadaPortal.Flood || (ArmadaPortal.Flood = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
var ArmadaPortal;
(function (ArmadaPortal) {
    var Flood;
    (function (Flood) {
        var DocumentRow;
        (function (DocumentRow) {
            DocumentRow.idProperty = 'DocumentId';
            DocumentRow.nameProperty = 'DocumentName';
            DocumentRow.localTextPrefix = 'Flood.Document';
        })(DocumentRow = Flood.DocumentRow || (Flood.DocumentRow = {}));
    })(Flood = ArmadaPortal.Flood || (ArmadaPortal.Flood = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
var ArmadaPortal;
(function (ArmadaPortal) {
    var Flood;
    (function (Flood) {
        var DocumentService;
        (function (DocumentService) {
            DocumentService.baseUrl = 'Flood/Document';
            [
                'List',
                'Retrieve',
                'DocumentImport'
            ].forEach(function (x) {
                DocumentService[x] = function (r, s, o) {
                    return Q.serviceRequest(DocumentService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(DocumentService = Flood.DocumentService || (Flood.DocumentService = {}));
    })(Flood = ArmadaPortal.Flood || (ArmadaPortal.Flood = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
var ArmadaPortal;
(function (ArmadaPortal) {
    var Flood;
    (function (Flood) {
        var FloodOrderDetStatusTypeEnum;
        (function (FloodOrderDetStatusTypeEnum) {
            FloodOrderDetStatusTypeEnum[FloodOrderDetStatusTypeEnum["Ordered"] = 100000000] = "Ordered";
            FloodOrderDetStatusTypeEnum[FloodOrderDetStatusTypeEnum["Assigned"] = 100000001] = "Assigned";
            FloodOrderDetStatusTypeEnum[FloodOrderDetStatusTypeEnum["Review"] = 100000002] = "Review";
            FloodOrderDetStatusTypeEnum[FloodOrderDetStatusTypeEnum["Completed"] = 100000003] = "Completed";
            FloodOrderDetStatusTypeEnum[FloodOrderDetStatusTypeEnum["OnHold"] = 100000004] = "OnHold";
            FloodOrderDetStatusTypeEnum[FloodOrderDetStatusTypeEnum["Issue"] = 100000005] = "Issue";
            FloodOrderDetStatusTypeEnum[FloodOrderDetStatusTypeEnum["Draft"] = 100000006] = "Draft";
        })(FloodOrderDetStatusTypeEnum = Flood.FloodOrderDetStatusTypeEnum || (Flood.FloodOrderDetStatusTypeEnum = {}));
        Serenity.Decorators.registerEnumType(FloodOrderDetStatusTypeEnum, 'ArmadaPortal.Flood.FloodOrderDetStatusTypeEnum', 'Flood.FloodOrderDetStatusTypeEnum');
    })(Flood = ArmadaPortal.Flood || (ArmadaPortal.Flood = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
var ArmadaPortal;
(function (ArmadaPortal) {
    var Flood;
    (function (Flood) {
        var FloodOrderForm = /** @class */ (function (_super) {
            __extends(FloodOrderForm, _super);
            function FloodOrderForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!FloodOrderForm.init) {
                    FloodOrderForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.BooleanEditor;
                    var w2 = s.EmailEditor;
                    var w3 = s.EnumEditor;
                    var w4 = s.MultipleImageUploadEditor;
                    Q.initFormType(FloodOrderForm, [
                        'OrderAccountId', w0,
                        'BranchId', w0,
                        'IsUrgent', w1,
                        'OrderCreatedByName', w0,
                        'EmailCertCC', w2,
                        'OrderType', w3,
                        'LoanType', w3,
                        'Borrower', w0,
                        'LoanNumber', w0,
                        'Address1Orig', w0,
                        'Address2Orig', w0,
                        'CityOrig', w0,
                        'StateOrig', w0,
                        'ZipOrig', w0,
                        'ParcelNumber', w0,
                        'NoteToAnalyst', w0,
                        'OrderId', w0,
                        'UploadDocument', w4
                    ]);
                }
                return _this;
            }
            FloodOrderForm.formKey = 'ArmadaPortal.FloodOrder';
            return FloodOrderForm;
        }(Serenity.PrefixedContext));
        Flood.FloodOrderForm = FloodOrderForm;
    })(Flood = ArmadaPortal.Flood || (ArmadaPortal.Flood = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
var ArmadaPortal;
(function (ArmadaPortal) {
    var Flood;
    (function (Flood) {
        var FloodOrderLoanTypeEnum;
        (function (FloodOrderLoanTypeEnum) {
            FloodOrderLoanTypeEnum[FloodOrderLoanTypeEnum["Residential"] = 100000000] = "Residential";
            FloodOrderLoanTypeEnum[FloodOrderLoanTypeEnum["Commercial"] = 100000001] = "Commercial";
            FloodOrderLoanTypeEnum[FloodOrderLoanTypeEnum["Land"] = 100000002] = "Land";
            FloodOrderLoanTypeEnum[FloodOrderLoanTypeEnum["NewConstruct"] = 100000003] = "NewConstruct";
        })(FloodOrderLoanTypeEnum = Flood.FloodOrderLoanTypeEnum || (Flood.FloodOrderLoanTypeEnum = {}));
        Serenity.Decorators.registerEnumType(FloodOrderLoanTypeEnum, 'ArmadaPortal.Flood.FloodOrderLoanTypeEnum', 'Flood.FloodOrderLoanTypeEnum');
    })(Flood = ArmadaPortal.Flood || (ArmadaPortal.Flood = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
var ArmadaPortal;
(function (ArmadaPortal) {
    var Flood;
    (function (Flood) {
        var FloodOrderRow;
        (function (FloodOrderRow) {
            FloodOrderRow.idProperty = 'OrderId';
            FloodOrderRow.nameProperty = 'OrderNumber';
            FloodOrderRow.localTextPrefix = 'Flood.FloodOrder';
            FloodOrderRow.lookupKey = 'Flood.FloodOrder';
            function getLookup() {
                return Q.getLookup('Flood.FloodOrder');
            }
            FloodOrderRow.getLookup = getLookup;
        })(FloodOrderRow = Flood.FloodOrderRow || (Flood.FloodOrderRow = {}));
    })(Flood = ArmadaPortal.Flood || (ArmadaPortal.Flood = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
var ArmadaPortal;
(function (ArmadaPortal) {
    var Flood;
    (function (Flood) {
        var FloodOrderService;
        (function (FloodOrderService) {
            FloodOrderService.baseUrl = 'Flood/Order';
            [
                'Create',
                'Update',
                'List',
                'Retrieve'
            ].forEach(function (x) {
                FloodOrderService[x] = function (r, s, o) {
                    return Q.serviceRequest(FloodOrderService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(FloodOrderService = Flood.FloodOrderService || (Flood.FloodOrderService = {}));
    })(Flood = ArmadaPortal.Flood || (ArmadaPortal.Flood = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
var ArmadaPortal;
(function (ArmadaPortal) {
    var Flood;
    (function (Flood) {
        var FloodOrderTypeEnum;
        (function (FloodOrderTypeEnum) {
            FloodOrderTypeEnum[FloodOrderTypeEnum["LifeOfLoan"] = 100000000] = "LifeOfLoan";
            FloodOrderTypeEnum[FloodOrderTypeEnum["Basic"] = 100000001] = "Basic";
        })(FloodOrderTypeEnum = Flood.FloodOrderTypeEnum || (Flood.FloodOrderTypeEnum = {}));
        Serenity.Decorators.registerEnumType(FloodOrderTypeEnum, 'ArmadaPortal.Flood.FloodOrderTypeEnum', 'Flood.FloodOrderTypeEnum');
    })(Flood = ArmadaPortal.Flood || (ArmadaPortal.Flood = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
var ArmadaPortal;
(function (ArmadaPortal) {
    var Membership;
    (function (Membership) {
        var ChangePasswordForm = /** @class */ (function (_super) {
            __extends(ChangePasswordForm, _super);
            function ChangePasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ChangePasswordForm.init) {
                    ChangePasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ChangePasswordForm, [
                        'OldPassword', w0,
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ChangePasswordForm.formKey = 'Membership.ChangePassword';
            return ChangePasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ChangePasswordForm = ChangePasswordForm;
    })(Membership = ArmadaPortal.Membership || (ArmadaPortal.Membership = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
var ArmadaPortal;
(function (ArmadaPortal) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordForm = /** @class */ (function (_super) {
            __extends(ForgotPasswordForm, _super);
            function ForgotPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ForgotPasswordForm.init) {
                    ForgotPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.EmailEditor;
                    Q.initFormType(ForgotPasswordForm, [
                        'Email', w0
                    ]);
                }
                return _this;
            }
            ForgotPasswordForm.formKey = 'Membership.ForgotPassword';
            return ForgotPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ForgotPasswordForm = ForgotPasswordForm;
    })(Membership = ArmadaPortal.Membership || (ArmadaPortal.Membership = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
var ArmadaPortal;
(function (ArmadaPortal) {
    var Membership;
    (function (Membership) {
        var LoginForm = /** @class */ (function (_super) {
            __extends(LoginForm, _super);
            function LoginForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LoginForm.init) {
                    LoginForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.PasswordEditor;
                    Q.initFormType(LoginForm, [
                        'Username', w0,
                        'Password', w1
                    ]);
                }
                return _this;
            }
            LoginForm.formKey = 'Membership.Login';
            return LoginForm;
        }(Serenity.PrefixedContext));
        Membership.LoginForm = LoginForm;
    })(Membership = ArmadaPortal.Membership || (ArmadaPortal.Membership = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
var ArmadaPortal;
(function (ArmadaPortal) {
    var Membership;
    (function (Membership) {
        var ResetPasswordForm = /** @class */ (function (_super) {
            __extends(ResetPasswordForm, _super);
            function ResetPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ResetPasswordForm.init) {
                    ResetPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ResetPasswordForm, [
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ResetPasswordForm.formKey = 'Membership.ResetPassword';
            return ResetPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ResetPasswordForm = ResetPasswordForm;
    })(Membership = ArmadaPortal.Membership || (ArmadaPortal.Membership = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
var ArmadaPortal;
(function (ArmadaPortal) {
    var Membership;
    (function (Membership) {
        var SignUpForm = /** @class */ (function (_super) {
            __extends(SignUpForm, _super);
            function SignUpForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SignUpForm.init) {
                    SignUpForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.PasswordEditor;
                    Q.initFormType(SignUpForm, [
                        'FirstName', w0,
                        'LastName', w0,
                        'Email', w1,
                        'ConfirmEmail', w1,
                        'Password', w2,
                        'ConfirmPassword', w2
                    ]);
                }
                return _this;
            }
            SignUpForm.formKey = 'Membership.SignUp';
            return SignUpForm;
        }(Serenity.PrefixedContext));
        Membership.SignUpForm = SignUpForm;
    })(Membership = ArmadaPortal.Membership || (ArmadaPortal.Membership = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
var ArmadaPortal;
(function (ArmadaPortal) {
    var Texts;
    (function (Texts) {
        ArmadaPortal['Texts'] = Q.proxyTexts(Texts, '', { Db: { Administration: { Language: { Id: 1, LanguageId: 1, LanguageName: 1 }, Role: { RoleId: 1, RoleName: 1 }, RolePermission: { PermissionKey: 1, RoleId: 1, RolePermissionId: 1, RoleRoleName: 1 }, Translation: { CustomText: 1, EntityPlural: 1, Key: 1, OverrideConfirmation: 1, SaveChangesButton: 1, SourceLanguage: 1, SourceText: 1, TargetLanguage: 1, TargetText: 1 }, User: { DisplayName: 1, Email: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, LastDirectoryUpdate: 1, Password: 1, PasswordConfirm: 1, PasswordHash: 1, PasswordSalt: 1, Source: 1, UpdateDate: 1, UpdateUserId: 1, UserId: 1, UserImage: 1, Username: 1 }, UserPermission: { Granted: 1, PermissionKey: 1, User: 1, UserId: 1, UserPermissionId: 1, Username: 1 }, UserRole: { RoleId: 1, User: 1, UserId: 1, UserRoleId: 1, Username: 1 } }, AdministrationClient: { ClientUser: { DisplayName: 1, Email: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, LastDirectoryUpdate: 1, Password: 1, PasswordConfirm: 1, PasswordHash: 1, PasswordSalt: 1, Source: 1, UpdateDate: 1, UpdateUserId: 1, UserId: 1, UserImage: 1, Username: 1 } }, Common: { UserPreference: { Name: 1, PreferenceType: 1, UserId: 1, UserPreferenceId: 1, Value: 1 } }, Flood: { Branch: { BranchAbbrev: 1, BranchId: 1, BranchName: 1 }, Document: { DocumentId: 1, DocumentName: 1, DocumentType: 1, DocumentUrl: 1, InsertDate: 1, ModifiedDate: 1 }, FloodOrder: { Address1Matched: 1, Address1Orig: 1, Address2Matched: 1, Address2Orig: 1, AddressEnteredFormatted: 1, AddressMatchedFormatted: 1, ApprovalLetter: 1, Borrower: 1, Borrower2: 1, BranchAbbrev: 1, BranchId: 1, BranchName: 1, CityMatched: 1, CityOrig: 1, EmailCertCC: 1, EmailCertTo: 1, FloodOrderStatus: 1, FloodOrderStatusDate: 1, FloodOrderStatusDescription: 1, FloodZone: 1, InsertDate: 1, IsUrgent: 1, LoanNumber: 1, LoanType: 1, ModifiedDate: 1, NoteToAnalyst: 1, OrderAccountId: 1, OrderAccountName: 1, OrderContactId: 1, OrderContactName: 1, OrderCreatedById: 1, OrderCreatedByName: 1, OrderDate: 1, OrderId: 1, OrderNumber: 1, OrderType: 1, ParcelNumber: 1, StateMatched: 1, StateOrig: 1, UploadDocument: 1, UploadDocumentFileName: 1, ZipMatched: 1, ZipOrig: 1 } }, _Ext: { AuditLog: { ActionDate: 1, ActionType: 1, EntityId: 1, EntityTableName: 1, Id: 1, IpAddress: 1, NewEntity: 1, OldEntity: 1, SessionId: 1, UserId: 1, VersionNo: 1 } } }, Forms: { Membership: { ChangePassword: { FormTitle: 1, SubmitButton: 1, Success: 1 }, ForgotPassword: { BackToLogin: 1, FormInfo: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, Login: { FacebookButton: 1, ForgotPassword: 1, FormTitle: 1, GoogleButton: 1, OR: 1, RememberMe: 1, SignInButton: 1, SignUpButton: 1 }, ResetPassword: { BackToLogin: 1, EmailSubject: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, SignUp: { AcceptTerms: 1, ActivateEmailSubject: 1, ActivationCompleteMessage: 1, BackToLogin: 1, ConfirmEmail: 1, ConfirmPassword: 1, DisplayName: 1, Email: 1, FormInfo: 1, FormTitle: 1, Password: 1, SubmitButton: 1, Success: 1 } } }, Site: { AccessDenied: { ClickToChangeUser: 1, ClickToLogin: 1, LackPermissions: 1, NotLoggedIn: 1, PageTitle: 1 }, BasicProgressDialog: { CancelTitle: 1, PleaseWait: 1 }, BulkServiceAction: { AllHadErrorsFormat: 1, AllSuccessFormat: 1, ConfirmationFormat: 1, ErrorCount: 1, NothingToProcess: 1, SomeHadErrorsFormat: 1, SuccessCount: 1 }, Dashboard: { ContentDescription: 1 }, Layout: { FooterCopyright: 1, FooterInfo: 1, FooterRights: 1, GeneralSettings: 1, Language: 1, Theme: 1, ThemeBlack: 1, ThemeBlackLight: 1, ThemeBlue: 1, ThemeBlueLight: 1, ThemeGreen: 1, ThemeGreenLight: 1, ThemePurple: 1, ThemePurpleLight: 1, ThemeRed: 1, ThemeRedLight: 1, ThemeYellow: 1, ThemeYellowLight: 1 }, RolePermissionDialog: { DialogTitle: 1, EditButton: 1, SaveSuccess: 1 }, UserDialog: { EditPermissionsButton: 1, EditRolesButton: 1 }, UserPermissionDialog: { DialogTitle: 1, Grant: 1, Permission: 1, Revoke: 1, SaveSuccess: 1 }, UserRoleDialog: { DialogTitle: 1, SaveSuccess: 1 }, ValidationError: { Title: 1 } }, Validation: { ArmadaFloodPhoneOrder: 1, ArmadaFloodPhoneOrderMultiple: 1, AuthenticationError: 1, CantFindUserWithEmail: 1, CurrentPasswordMismatch: 1, DeleteForeignKeyError: 1, EmailConfirm: 1, EmailInUse: 1, InvalidActivateToken: 1, InvalidResetToken: 1, MinRequiredPasswordLength: 1, SavePrimaryKeyError: 1 } });
    })(Texts = ArmadaPortal.Texts || (ArmadaPortal.Texts = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
var _Ext;
(function (_Ext) {
    var AuditActionType;
    (function (AuditActionType) {
        AuditActionType[AuditActionType["Insert"] = 1] = "Insert";
        AuditActionType[AuditActionType["Update"] = 2] = "Update";
        AuditActionType[AuditActionType["Delete"] = 3] = "Delete";
    })(AuditActionType = _Ext.AuditActionType || (_Ext.AuditActionType = {}));
    Serenity.Decorators.registerEnumType(AuditActionType, '_Ext.AuditActionType', 'Enum.Audit.AuditActionType');
})(_Ext || (_Ext = {}));
var _Ext;
(function (_Ext) {
    var AuditLogForm = /** @class */ (function (_super) {
        __extends(AuditLogForm, _super);
        function AuditLogForm(prefix) {
            var _this = _super.call(this, prefix) || this;
            if (!AuditLogForm.init) {
                AuditLogForm.init = true;
                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.LookupEditor;
                var w3 = s.EnumEditor;
                var w4 = s.DateTimeEditor;
                var w5 = _Ext.StaticTextBlock;
                Q.initFormType(AuditLogForm, [
                    'EntityTableName', w0,
                    'VersionNo', w1,
                    'UserId', w2,
                    'ActionType', w3,
                    'ActionDate', w4,
                    'EntityId', w1,
                    'OldEntity', w0,
                    'NewEntity', w0,
                    'Differences', w5,
                    'IpAddress', w0,
                    'SessionId', w0
                ]);
            }
            return _this;
        }
        AuditLogForm.formKey = '_Ext.AuditLog';
        return AuditLogForm;
    }(Serenity.PrefixedContext));
    _Ext.AuditLogForm = AuditLogForm;
})(_Ext || (_Ext = {}));
var _Ext;
(function (_Ext) {
    var AuditLogRow;
    (function (AuditLogRow) {
        AuditLogRow.idProperty = 'Id';
        AuditLogRow.nameProperty = 'EntityTableName';
        AuditLogRow.localTextPrefix = '_Ext.AuditLog';
    })(AuditLogRow = _Ext.AuditLogRow || (_Ext.AuditLogRow = {}));
})(_Ext || (_Ext = {}));
var _Ext;
(function (_Ext) {
    var AuditLogService;
    (function (AuditLogService) {
        AuditLogService.baseUrl = '_Ext/AuditLog';
        [
            'Create',
            'Update',
            'Delete',
            'Retrieve',
            'List'
        ].forEach(function (x) {
            AuditLogService[x] = function (r, s, o) {
                return Q.serviceRequest(AuditLogService.baseUrl + '/' + x, r, s, o);
            };
        });
    })(AuditLogService = _Ext.AuditLogService || (_Ext.AuditLogService = {}));
})(_Ext || (_Ext = {}));
var _Ext;
(function (_Ext) {
    var AuditLogViewerService;
    (function (AuditLogViewerService) {
        AuditLogViewerService.baseUrl = 'AuditLogViewer';
        [
            'List'
        ].forEach(function (x) {
            AuditLogViewerService[x] = function (r, s, o) {
                return Q.serviceRequest(AuditLogViewerService.baseUrl + '/' + x, r, s, o);
            };
        });
    })(AuditLogViewerService = _Ext.AuditLogViewerService || (_Ext.AuditLogViewerService = {}));
})(_Ext || (_Ext = {}));
var _Ext;
(function (_Ext) {
    var DevTools;
    (function (DevTools) {
        var SergenService;
        (function (SergenService) {
            SergenService.baseUrl = 'DevTools/Sergen';
            [
                'ListConnections',
                'ListTables',
                'Generate'
            ].forEach(function (x) {
                SergenService[x] = function (r, s, o) {
                    return Q.serviceRequest(SergenService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SergenService = DevTools.SergenService || (DevTools.SergenService = {}));
    })(DevTools = _Ext.DevTools || (_Ext.DevTools = {}));
})(_Ext || (_Ext = {}));
var _Ext;
(function (_Ext) {
    var Months;
    (function (Months) {
        Months[Months["January"] = 0] = "January";
        Months[Months["February"] = 1] = "February";
        Months[Months["March"] = 2] = "March";
        Months[Months["April"] = 3] = "April";
        Months[Months["May"] = 4] = "May";
        Months[Months["June"] = 5] = "June";
        Months[Months["July"] = 6] = "July";
        Months[Months["August"] = 7] = "August";
        Months[Months["September"] = 8] = "September";
        Months[Months["October"] = 9] = "October";
        Months[Months["November"] = 10] = "November";
        Months[Months["December"] = 11] = "December";
    })(Months = _Ext.Months || (_Ext.Months = {}));
    Serenity.Decorators.registerEnumType(Months, '_Ext.Months', 'Months');
})(_Ext || (_Ext = {}));
var _Ext;
(function (_Ext) {
    var ReplaceRowForm = /** @class */ (function (_super) {
        __extends(ReplaceRowForm, _super);
        function ReplaceRowForm(prefix) {
            var _this = _super.call(this, prefix) || this;
            if (!ReplaceRowForm.init) {
                ReplaceRowForm.init = true;
                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = _Ext.EmptyLookupEditor;
                Q.initFormType(ReplaceRowForm, [
                    'DeletedEntityName', w0,
                    'ReplaceWithEntityId', w1
                ]);
            }
            return _this;
        }
        ReplaceRowForm.formKey = '_Ext.ReplaceRow';
        return ReplaceRowForm;
    }(Serenity.PrefixedContext));
    _Ext.ReplaceRowForm = ReplaceRowForm;
})(_Ext || (_Ext = {}));
var _Ext;
(function (_Ext) {
    var ReplaceRowService;
    (function (ReplaceRowService) {
        ReplaceRowService.baseUrl = 'ReplaceRow';
        [
            'Replace'
        ].forEach(function (x) {
            ReplaceRowService[x] = function (r, s, o) {
                return Q.serviceRequest(ReplaceRowService.baseUrl + '/' + x, r, s, o);
            };
        });
    })(ReplaceRowService = _Ext.ReplaceRowService || (_Ext.ReplaceRowService = {}));
})(_Ext || (_Ext = {}));
var _Ext;
(function (_Ext) {
    var TimeUoM;
    (function (TimeUoM) {
        TimeUoM[TimeUoM["Hour"] = 1] = "Hour";
        TimeUoM[TimeUoM["Day"] = 2] = "Day";
        TimeUoM[TimeUoM["Week"] = 3] = "Week";
        TimeUoM[TimeUoM["Month"] = 4] = "Month";
        TimeUoM[TimeUoM["CalenderMonth"] = 5] = "CalenderMonth";
        TimeUoM[TimeUoM["Year"] = 6] = "Year";
    })(TimeUoM = _Ext.TimeUoM || (_Ext.TimeUoM = {}));
    Serenity.Decorators.registerEnumType(TimeUoM, '_Ext.TimeUoM', 'TimeUoM');
})(_Ext || (_Ext = {}));
var ArmadaPortal;
(function (ArmadaPortal) {
    var Administration;
    (function (Administration) {
        var LanguageDialog = /** @class */ (function (_super) {
            __extends(LanguageDialog, _super);
            function LanguageDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.LanguageForm(_this.idPrefix);
                return _this;
            }
            LanguageDialog.prototype.getFormKey = function () { return Administration.LanguageForm.formKey; };
            LanguageDialog.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageDialog.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageDialog.prototype.getNameProperty = function () { return Administration.LanguageRow.nameProperty; };
            LanguageDialog.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageDialog);
            return LanguageDialog;
        }(Serenity.EntityDialog));
        Administration.LanguageDialog = LanguageDialog;
    })(Administration = ArmadaPortal.Administration || (ArmadaPortal.Administration = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
var ArmadaPortal;
(function (ArmadaPortal) {
    var Administration;
    (function (Administration) {
        var LanguageGrid = /** @class */ (function (_super) {
            __extends(LanguageGrid, _super);
            function LanguageGrid(container) {
                return _super.call(this, container) || this;
            }
            LanguageGrid.prototype.getColumnsKey = function () { return "Administration.Language"; };
            LanguageGrid.prototype.getDialogType = function () { return Administration.LanguageDialog; };
            LanguageGrid.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageGrid.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageGrid.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageGrid.prototype.getDefaultSortBy = function () {
                return ["LanguageName" /* LanguageName */];
            };
            LanguageGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageGrid);
            return LanguageGrid;
        }(Serenity.EntityGrid));
        Administration.LanguageGrid = LanguageGrid;
    })(Administration = ArmadaPortal.Administration || (ArmadaPortal.Administration = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
var ArmadaPortal;
(function (ArmadaPortal) {
    var Administration;
    (function (Administration) {
        var RoleDialog = /** @class */ (function (_super) {
            __extends(RoleDialog, _super);
            function RoleDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.RoleForm(_this.idPrefix);
                return _this;
            }
            RoleDialog.prototype.getFormKey = function () { return Administration.RoleForm.formKey; };
            RoleDialog.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleDialog.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleDialog.prototype.getNameProperty = function () { return Administration.RoleRow.nameProperty; };
            RoleDialog.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.RolePermissionDialog.EditButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.RolePermissionDialog({
                            roleID: _this.entity.RoleId,
                            title: _this.entity.RoleName
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            RoleDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            RoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleDialog);
            return RoleDialog;
        }(Serenity.EntityDialog));
        Administration.RoleDialog = RoleDialog;
    })(Administration = ArmadaPortal.Administration || (ArmadaPortal.Administration = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
var ArmadaPortal;
(function (ArmadaPortal) {
    var Administration;
    (function (Administration) {
        var RoleGrid = /** @class */ (function (_super) {
            __extends(RoleGrid, _super);
            function RoleGrid(container) {
                return _super.call(this, container) || this;
            }
            RoleGrid.prototype.getColumnsKey = function () { return "Administration.Role"; };
            RoleGrid.prototype.getDialogType = function () { return Administration.RoleDialog; };
            RoleGrid.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleGrid.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleGrid.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleGrid.prototype.getDefaultSortBy = function () {
                return ["RoleName" /* RoleName */];
            };
            RoleGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleGrid);
            return RoleGrid;
        }(Serenity.EntityGrid));
        Administration.RoleGrid = RoleGrid;
    })(Administration = ArmadaPortal.Administration || (ArmadaPortal.Administration = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
var ArmadaPortal;
(function (ArmadaPortal) {
    var Administration;
    (function (Administration) {
        var RolePermissionDialog = /** @class */ (function (_super) {
            __extends(RolePermissionDialog, _super);
            function RolePermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: false
                });
                Administration.RolePermissionService.List({
                    RoleID: _this.options.roleID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return ({ PermissionKey: x }); });
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            RolePermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.RolePermissionService.Update({
                                RoleID: _this.options.roleID,
                                Permissions: _this.permissions.value.map(function (x) { return x.PermissionKey; }),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.RolePermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.RolePermissionDialog.DialogTitle'), this.options.title);
                return opt;
            };
            RolePermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            RolePermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RolePermissionDialog);
            return RolePermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.RolePermissionDialog = RolePermissionDialog;
    })(Administration = ArmadaPortal.Administration || (ArmadaPortal.Administration = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
var ArmadaPortal;
(function (ArmadaPortal) {
    var Administration;
    (function (Administration) {
        var TranslationGrid = /** @class */ (function (_super) {
            __extends(TranslationGrid, _super);
            function TranslationGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.element.on('keyup.' + _this.uniqueName + ' change.' + _this.uniqueName, 'input.custom-text', function (e) {
                    var value = Q.trimToNull($(e.target).val());
                    if (value === '') {
                        value = null;
                    }
                    _this.view.getItemById($(e.target).data('key')).CustomText = value;
                    _this.hasChanges = true;
                });
                return _this;
            }
            TranslationGrid.prototype.getIdProperty = function () { return "Key"; };
            TranslationGrid.prototype.getLocalTextPrefix = function () { return "Administration.Translation"; };
            TranslationGrid.prototype.getService = function () { return Administration.TranslationService.baseUrl; };
            TranslationGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented()) {
                    return;
                }
                var item = this.itemAt(row);
                var done;
                if ($(e.target).hasClass('source-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.SourceText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.SourceText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
                if ($(e.target).hasClass('target-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.TargetText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.TargetText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
            };
            TranslationGrid.prototype.getColumns = function () {
                var columns = [];
                columns.push({ field: 'Key', width: 300, sortable: false });
                columns.push({
                    field: 'SourceText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) {
                        return Q.outerHtml($('<a/>')
                            .addClass('source-text')
                            .text(ctx.value || ''));
                    }
                });
                columns.push({
                    field: 'CustomText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<input/>')
                        .addClass('custom-text')
                        .attr('value', ctx.value)
                        .attr('type', 'text')
                        .attr('data-key', ctx.item.Key)); }
                });
                columns.push({
                    field: 'TargetText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<a/>')
                        .addClass('target-text')
                        .text(ctx.value || '')); }
                });
                return columns;
            };
            TranslationGrid.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                var opt = {
                    lookupKey: 'Administration.Language'
                };
                this.sourceLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.SourceLanguage') + ' ---'); },
                    options: opt
                });
                this.sourceLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
                this.targetLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.TargetLanguage') + ' ---'); },
                    options: opt
                });
                this.targetLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
            };
            TranslationGrid.prototype.saveChanges = function (language) {
                var _this = this;
                var translations = {};
                for (var _i = 0, _a = this.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    translations[item.Key] = item.CustomText;
                }
                return Promise.resolve(Administration.TranslationService.Update({
                    TargetLanguageID: language,
                    Translations: translations
                })).then(function () {
                    _this.hasChanges = false;
                    language = Q.trimToNull(language) || 'invariant';
                    Q.notifySuccess('User translations in "' + language +
                        '" language are saved to "user.texts.' +
                        language + '.json" ' + 'file under "~/App_Data/texts/"', '');
                });
            };
            TranslationGrid.prototype.onViewSubmit = function () {
                var request = this.view.params;
                request.SourceLanguageID = this.sourceLanguage.value;
                this.targetLanguageKey = this.targetLanguage.value || '';
                request.TargetLanguageID = this.targetLanguageKey;
                this.hasChanges = false;
                return _super.prototype.onViewSubmit.call(this);
            };
            TranslationGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: Q.text('Db.Administration.Translation.SaveChangesButton'),
                        onClick: function (e) { return _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); }); },
                        cssClass: 'apply-changes-button'
                    }];
            };
            TranslationGrid.prototype.createQuickSearchInput = function () {
                var _this = this;
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, searchText) {
                    _this.searchText = searchText;
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            TranslationGrid.prototype.onViewFilter = function (item) {
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!this.searchText) {
                    return true;
                }
                var sd = Select2.util.stripDiacritics;
                var searching = sd(this.searchText).toLowerCase();
                function match(str) {
                    if (!str)
                        return false;
                    return str.toLowerCase().indexOf(searching) >= 0;
                }
                return Q.isEmptyOrNull(searching) || match(item.Key) || match(item.SourceText) ||
                    match(item.TargetText) || match(item.CustomText);
            };
            TranslationGrid.prototype.usePager = function () {
                return false;
            };
            TranslationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TranslationGrid);
            return TranslationGrid;
        }(Serenity.EntityGrid));
        Administration.TranslationGrid = TranslationGrid;
    })(Administration = ArmadaPortal.Administration || (ArmadaPortal.Administration = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
var ArmadaPortal;
(function (ArmadaPortal) {
    var Administration;
    (function (Administration) {
        var UserDialog = /** @class */ (function (_super) {
            __extends(UserDialog, _super);
            function UserDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Administration.UserForm(_this.idPrefix);
                _this.form.Password.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value.length < 7)
                        return "Password must be at least 7 characters!";
                });
                _this.form.PasswordConfirm.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value != _this.form.PasswordConfirm.value)
                        return "The passwords entered doesn't match!";
                });
                return _this;
            }
            UserDialog.prototype.getFormKey = function () { return Administration.UserForm.formKey; };
            UserDialog.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserDialog.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserDialog.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserDialog.prototype.getNameProperty = function () { return Administration.UserRow.nameProperty; };
            UserDialog.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.UserDialog.EditRolesButton'),
                    cssClass: 'edit-roles-button',
                    icon: 'fa-users text-blue',
                    onClick: function () {
                        new Administration.UserRoleDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                buttons.push({
                    title: Q.text('Site.UserDialog.EditPermissionsButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.UserPermissionDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            UserDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('edit-roles-button').toggleClass('disabled', this.isNewOrDeleted());
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            UserDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // these fields are only required in new record mode
                this.form.Password.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
                this.form.PasswordConfirm.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
            };
            UserDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserDialog);
            return UserDialog;
        }(Serenity.EntityDialog));
        Administration.UserDialog = UserDialog;
    })(Administration = ArmadaPortal.Administration || (ArmadaPortal.Administration = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
var ArmadaPortal;
(function (ArmadaPortal) {
    var Administration;
    (function (Administration) {
        var UserGrid = /** @class */ (function (_super) {
            __extends(UserGrid, _super);
            function UserGrid(container) {
                return _super.call(this, container) || this;
            }
            UserGrid.prototype.getColumnsKey = function () { return "Administration.User"; };
            UserGrid.prototype.getDialogType = function () { return Administration.UserDialog; };
            UserGrid.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserGrid.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserGrid.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserGrid.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserGrid.prototype.getDefaultSortBy = function () {
                return ["Username" /* Username */];
            };
            UserGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UserGrid);
            return UserGrid;
        }(Serenity.EntityGrid));
        Administration.UserGrid = UserGrid;
    })(Administration = ArmadaPortal.Administration || (ArmadaPortal.Administration = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
var ArmadaPortal;
(function (ArmadaPortal) {
    var Authorization;
    (function (Authorization) {
        Object.defineProperty(Authorization, 'userDefinition', {
            get: function () {
                return Q.getRemoteData('UserData');
            }
        });
        function hasPermission(permissionKey) {
            var ud = Authorization.userDefinition;
            return ud.Username === 'admin' || !!ud.Permissions[permissionKey];
        }
        Authorization.hasPermission = hasPermission;
    })(Authorization = ArmadaPortal.Authorization || (ArmadaPortal.Authorization = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
var ArmadaPortal;
(function (ArmadaPortal) {
    var Administration;
    (function (Administration) {
        var PermissionCheckEditor = /** @class */ (function (_super) {
            __extends(PermissionCheckEditor, _super);
            function PermissionCheckEditor(container, opt) {
                var _this = _super.call(this, container, opt) || this;
                _this._rolePermissions = {};
                _this._implicitPermissions = {};
                var titleByKey = {};
                var permissionKeys = _this.getSortedGroupAndPermissionKeys(titleByKey);
                var items = permissionKeys.map(function (key) { return ({
                    Key: key,
                    ParentKey: _this.getParentKey(key),
                    Title: titleByKey[key],
                    GrantRevoke: null,
                    IsGroup: key.charAt(key.length - 1) === ':'
                }); });
                _this.byParentKey = Q.toGrouping(items, function (x) { return x.ParentKey; });
                _this.setItems(items);
                return _this;
            }
            PermissionCheckEditor.prototype.getIdProperty = function () { return "Key"; };
            PermissionCheckEditor.prototype.getItemGrantRevokeClass = function (item, grant) {
                if (!item.IsGroup) {
                    return ((item.GrantRevoke === grant) ? ' checked' : '');
                }
                var desc = this.getDescendants(item, true);
                var granted = desc.filter(function (x) { return x.GrantRevoke === grant; });
                if (!granted.length) {
                    return '';
                }
                if (desc.length === granted.length) {
                    return 'checked';
                }
                return 'checked partial';
            };
            PermissionCheckEditor.prototype.roleOrImplicit = function (key) {
                if (this._rolePermissions[key])
                    return true;
                for (var _i = 0, _a = Object.keys(this._rolePermissions); _i < _a.length; _i++) {
                    var k = _a[_i];
                    var d = this._implicitPermissions[k];
                    if (d && d[key])
                        return true;
                }
                for (var _b = 0, _c = Object.keys(this._implicitPermissions); _b < _c.length; _b++) {
                    var i = _c[_b];
                    var item = this.view.getItemById(i);
                    if (item && item.GrantRevoke == true) {
                        var d = this._implicitPermissions[i];
                        if (d && d[key])
                            return true;
                    }
                }
            };
            PermissionCheckEditor.prototype.getItemEffectiveClass = function (item) {
                var _this = this;
                if (item.IsGroup) {
                    var desc = this.getDescendants(item, true);
                    var grantCount = Q.count(desc, function (x) { return x.GrantRevoke === true ||
                        (x.GrantRevoke == null && _this.roleOrImplicit(x.Key)); });
                    if (grantCount === desc.length || desc.length === 0) {
                        return 'allow';
                    }
                    if (grantCount === 0) {
                        return 'deny';
                    }
                    return 'partial';
                }
                var granted = item.GrantRevoke === true ||
                    (item.GrantRevoke == null && this.roleOrImplicit(item.Key));
                return (granted ? ' allow' : ' deny');
            };
            PermissionCheckEditor.prototype.getColumns = function () {
                var _this = this;
                var columns = [{
                        name: Q.text('Site.UserPermissionDialog.Permission'),
                        field: 'Title',
                        format: Serenity.SlickFormatting.treeToggle(function () { return _this.view; }, function (x) { return x.Key; }, function (ctx) {
                            var item = ctx.item;
                            var klass = _this.getItemEffectiveClass(item);
                            return '<span class="effective-permission ' + klass + '">' + Q.htmlEncode(ctx.value) + '</span>';
                        }),
                        width: 495,
                        sortable: false
                    }, {
                        name: Q.text('Site.UserPermissionDialog.Grant'), field: 'Grant',
                        format: function (ctx) {
                            var item1 = ctx.item;
                            var klass1 = _this.getItemGrantRevokeClass(item1, true);
                            return "<span class='check-box grant no-float " + klass1 + "'></span>";
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    }];
                if (this.options.showRevoke) {
                    columns.push({
                        name: Q.text('Site.UserPermissionDialog.Revoke'), field: 'Revoke',
                        format: function (ctx) {
                            var item2 = ctx.item;
                            var klass2 = _this.getItemGrantRevokeClass(item2, false);
                            return '<span class="check-box revoke no-float ' + klass2 + '"></span>';
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    });
                }
                return columns;
            };
            PermissionCheckEditor.prototype.setItems = function (items) {
                Serenity.SlickTreeHelper.setIndents(items, function (x) { return x.Key; }, function (x) { return x.ParentKey; }, false);
                this.view.setItems(items, true);
            };
            PermissionCheckEditor.prototype.onViewSubmit = function () {
                return false;
            };
            PermissionCheckEditor.prototype.onViewFilter = function (item) {
                var _this = this;
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!Serenity.SlickTreeHelper.filterById(item, this.view, function (x) { return x.ParentKey; }))
                    return false;
                if (this.searchText) {
                    return this.matchContains(item) || item.IsGroup && Q.any(this.getDescendants(item, false), function (x) { return _this.matchContains(x); });
                }
                return true;
            };
            PermissionCheckEditor.prototype.matchContains = function (item) {
                return Select2.util.stripDiacritics(item.Title || '').toLowerCase().indexOf(this.searchText) >= 0;
            };
            PermissionCheckEditor.prototype.getDescendants = function (item, excludeGroups) {
                var result = [];
                var stack = [item];
                while (stack.length > 0) {
                    var i = stack.pop();
                    var children = this.byParentKey[i.Key];
                    if (!children)
                        continue;
                    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                        var child = children_1[_i];
                        if (!excludeGroups || !child.IsGroup) {
                            result.push(child);
                        }
                        stack.push(child);
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (!e.isDefaultPrevented()) {
                    Serenity.SlickTreeHelper.toggleClick(e, row, cell, this.view, function (x) { return x.Key; });
                }
                if (e.isDefaultPrevented()) {
                    return;
                }
                var target = $(e.target);
                var grant = target.hasClass('grant');
                if (grant || target.hasClass('revoke')) {
                    e.preventDefault();
                    var item = this.itemAt(row);
                    var checkedOrPartial = target.hasClass('checked') || target.hasClass('partial');
                    if (checkedOrPartial) {
                        grant = null;
                    }
                    else {
                        grant = grant !== checkedOrPartial;
                    }
                    if (item.IsGroup) {
                        for (var _i = 0, _a = this.getDescendants(item, true); _i < _a.length; _i++) {
                            var d = _a[_i];
                            d.GrantRevoke = grant;
                        }
                    }
                    else
                        item.GrantRevoke = grant;
                    this.slickGrid.invalidate();
                }
            };
            PermissionCheckEditor.prototype.getParentKey = function (key) {
                if (key.charAt(key.length - 1) === ':') {
                    key = key.substr(0, key.length - 1);
                }
                var idx = key.lastIndexOf(':');
                if (idx >= 0) {
                    return key.substr(0, idx + 1);
                }
                return null;
            };
            PermissionCheckEditor.prototype.getButtons = function () {
                return [];
            };
            PermissionCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(Q.trimToNull(text) || '').toLowerCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            PermissionCheckEditor.prototype.getSortedGroupAndPermissionKeys = function (titleByKey) {
                var keys = Q.getRemoteData('Administration.PermissionKeys').Entities;
                var titleWithGroup = {};
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var k = keys_1[_i];
                    var s = k;
                    if (!s) {
                        continue;
                    }
                    if (s.charAt(s.length - 1) == ':') {
                        s = s.substr(0, s.length - 1);
                        if (s.length === 0) {
                            continue;
                        }
                    }
                    if (titleByKey[s]) {
                        continue;
                    }
                    titleByKey[s] = Q.coalesce(Q.tryGetText('Permission.' + s), s);
                    var parts = s.split(':');
                    var group = '';
                    var groupTitle = '';
                    for (var i = 0; i < parts.length - 1; i++) {
                        group = group + parts[i] + ':';
                        var txt = Q.tryGetText('Permission.' + group);
                        if (txt == null) {
                            txt = parts[i];
                        }
                        titleByKey[group] = txt;
                        groupTitle = groupTitle + titleByKey[group] + ':';
                        titleWithGroup[group] = groupTitle;
                    }
                    titleWithGroup[s] = groupTitle + titleByKey[s];
                }
                keys = Object.keys(titleByKey);
                keys = keys.sort(function (x, y) { return Q.turkishLocaleCompare(titleWithGroup[x], titleWithGroup[y]); });
                return keys;
            };
            Object.defineProperty(PermissionCheckEditor.prototype, "value", {
                get: function () {
                    var result = [];
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.GrantRevoke != null && item.Key.charAt(item.Key.length - 1) != ':') {
                            result.push({ PermissionKey: item.Key, Granted: item.GrantRevoke });
                        }
                    }
                    return result;
                },
                set: function (value) {
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        item.GrantRevoke = null;
                    }
                    if (value != null) {
                        for (var _b = 0, value_1 = value; _b < value_1.length; _b++) {
                            var row = value_1[_b];
                            var r = this.view.getItemById(row.PermissionKey);
                            if (r) {
                                r.GrantRevoke = Q.coalesce(row.Granted, true);
                            }
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "rolePermissions", {
                get: function () {
                    return Object.keys(this._rolePermissions);
                },
                set: function (value) {
                    this._rolePermissions = {};
                    if (value) {
                        for (var _i = 0, value_2 = value; _i < value_2.length; _i++) {
                            var k = value_2[_i];
                            this._rolePermissions[k] = true;
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "implicitPermissions", {
                set: function (value) {
                    this._implicitPermissions = {};
                    if (value) {
                        for (var _i = 0, _a = Object.keys(value); _i < _a.length; _i++) {
                            var k = _a[_i];
                            this._implicitPermissions[k] = this._implicitPermissions[k] || {};
                            var l = value[k];
                            if (l) {
                                for (var _b = 0, l_1 = l; _b < l_1.length; _b++) {
                                    var s = l_1[_b];
                                    this._implicitPermissions[k][s] = true;
                                }
                            }
                        }
                    }
                },
                enumerable: true,
                configurable: true
            });
            PermissionCheckEditor = __decorate([
                Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
            ], PermissionCheckEditor);
            return PermissionCheckEditor;
        }(Serenity.DataGrid));
        Administration.PermissionCheckEditor = PermissionCheckEditor;
    })(Administration = ArmadaPortal.Administration || (ArmadaPortal.Administration = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
var ArmadaPortal;
(function (ArmadaPortal) {
    var Administration;
    (function (Administration) {
        var UserPermissionDialog = /** @class */ (function (_super) {
            __extends(UserPermissionDialog, _super);
            function UserPermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: true
                });
                Administration.UserPermissionService.List({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities;
                });
                Administration.UserPermissionService.ListRolePermissions({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null,
                }, function (response) {
                    _this.permissions.rolePermissions = response.Entities;
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            UserPermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.UserPermissionService.Update({
                                UserID: _this.options.userID,
                                Permissions: _this.permissions.value,
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.UserPermissionDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserPermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            UserPermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserPermissionDialog);
            return UserPermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserPermissionDialog = UserPermissionDialog;
    })(Administration = ArmadaPortal.Administration || (ArmadaPortal.Administration = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
var ArmadaPortal;
(function (ArmadaPortal) {
    var Administration;
    (function (Administration) {
        var RoleCheckEditor = /** @class */ (function (_super) {
            __extends(RoleCheckEditor, _super);
            function RoleCheckEditor(div) {
                return _super.call(this, div) || this;
            }
            RoleCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(text || '').toUpperCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            RoleCheckEditor.prototype.getButtons = function () {
                return [];
            };
            RoleCheckEditor.prototype.getTreeItems = function () {
                return Administration.RoleRow.getLookup().items.map(function (role) { return ({
                    id: role.RoleId.toString(),
                    text: role.RoleName
                }); });
            };
            RoleCheckEditor.prototype.onViewFilter = function (item) {
                return _super.prototype.onViewFilter.call(this, item) &&
                    (Q.isEmptyOrNull(this.searchText) ||
                        Select2.util.stripDiacritics(item.text || '')
                            .toUpperCase().indexOf(this.searchText) >= 0);
            };
            RoleCheckEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], RoleCheckEditor);
            return RoleCheckEditor;
        }(Serenity.CheckTreeEditor));
        Administration.RoleCheckEditor = RoleCheckEditor;
    })(Administration = ArmadaPortal.Administration || (ArmadaPortal.Administration = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
var ArmadaPortal;
(function (ArmadaPortal) {
    var Administration;
    (function (Administration) {
        var UserRoleDialog = /** @class */ (function (_super) {
            __extends(UserRoleDialog, _super);
            function UserRoleDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.RoleCheckEditor(_this.byId('Roles'));
                Administration.UserRoleService.List({
                    UserID: _this.options.userID
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return x.toString(); });
                });
                return _this;
            }
            UserRoleDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            Q.serviceRequest('Administration/UserRole/Update', {
                                UserID: _this.options.userID,
                                Roles: _this.permissions.value.map(function (x) { return parseInt(x, 10); })
                            }, function (response) {
                                _this.dialogClose();
                                Q.notifySuccess(Q.text('Site.UserRoleDialog.SaveSuccess'));
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }];
                opt.title = Q.format(Q.text('Site.UserRoleDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserRoleDialog.prototype.getTemplate = function () {
                return "<div id='~_Roles'></div>";
            };
            UserRoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserRoleDialog);
            return UserRoleDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserRoleDialog = UserRoleDialog;
    })(Administration = ArmadaPortal.Administration || (ArmadaPortal.Administration = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
var ArmadaPortal;
(function (ArmadaPortal) {
    var LanguageList;
    (function (LanguageList) {
        function getValue() {
            var result = [];
            for (var _i = 0, _a = ArmadaPortal.Administration.LanguageRow.getLookup().items; _i < _a.length; _i++) {
                var k = _a[_i];
                if (k.LanguageId !== 'en') {
                    result.push([k.Id.toString(), k.LanguageName]);
                }
            }
            return result;
        }
        LanguageList.getValue = getValue;
    })(LanguageList = ArmadaPortal.LanguageList || (ArmadaPortal.LanguageList = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
/// <reference path="../Common/Helpers/LanguageList.ts" />
var ArmadaPortal;
(function (ArmadaPortal) {
    var ScriptInitialization;
    (function (ScriptInitialization) {
        Q.Config.responsiveDialogs = true;
        Q.Config.rootNamespaces.push('ArmadaPortal');
        Serenity.EntityDialog.defaultLanguageList = ArmadaPortal.LanguageList.getValue;
        Serenity.DataGrid.defaultPersistanceStorage = window.sessionStorage;
        //Serenity.DataGrid.defaultPersistanceStorage = window.localStorage;
        if ($.fn['colorbox']) {
            $.fn['colorbox'].settings.maxWidth = "95%";
            $.fn['colorbox'].settings.maxHeight = "95%";
        }
        window.onerror = Q.ErrorHandling.runtimeErrorHandler;
    })(ScriptInitialization = ArmadaPortal.ScriptInitialization || (ArmadaPortal.ScriptInitialization = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
var ArmadaPortal;
(function (ArmadaPortal) {
    var BasicProgressDialog = /** @class */ (function (_super) {
        __extends(BasicProgressDialog, _super);
        function BasicProgressDialog() {
            var _this = _super.call(this) || this;
            _this.byId('ProgressBar').progressbar({
                max: 100,
                value: 0,
                change: function (e, v) {
                    _this.byId('ProgressLabel').text(_this.value + ' / ' + _this.max);
                }
            });
            return _this;
        }
        Object.defineProperty(BasicProgressDialog.prototype, "max", {
            get: function () {
                return this.byId('ProgressBar').progressbar().progressbar('option', 'max');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('option', 'max', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "value", {
            get: function () {
                return this.byId('ProgressBar').progressbar('value');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('value', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "title", {
            get: function () {
                return this.element.dialog().dialog('option', 'title');
            },
            set: function (value) {
                this.element.dialog().dialog('option', 'title', value);
            },
            enumerable: true,
            configurable: true
        });
        BasicProgressDialog.prototype.getDialogOptions = function () {
            var _this = this;
            var opt = _super.prototype.getDialogOptions.call(this);
            opt.title = Q.text('Site.BasicProgressDialog.PleaseWait');
            opt.width = 600;
            opt.buttons = [{
                    text: Q.text('Dialogs.CancelButton'),
                    click: function () {
                        _this.cancelled = true;
                        _this.element.closest('.ui-dialog')
                            .find('.ui-dialog-buttonpane .ui-button')
                            .attr('disabled', 'disabled')
                            .css('opacity', '0.5');
                        _this.element.dialog('option', 'title', Q.trimToNull(_this.cancelTitle) ||
                            Q.text('Site.BasicProgressDialog.CancelTitle'));
                    }
                }];
            return opt;
        };
        BasicProgressDialog.prototype.initDialog = function () {
            _super.prototype.initDialog.call(this);
            this.element.closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
        };
        BasicProgressDialog.prototype.getTemplate = function () {
            return ("<div class='s-DialogContent s-BasicProgressDialogContent'>" +
                "<div id='~_StatusText' class='status-text' ></div>" +
                "<div id='~_ProgressBar' class='progress-bar'>" +
                "<div id='~_ProgressLabel' class='progress-label' ></div>" +
                "</div>" +
                "</div>");
        };
        return BasicProgressDialog;
    }(Serenity.TemplatedDialog));
    ArmadaPortal.BasicProgressDialog = BasicProgressDialog;
})(ArmadaPortal || (ArmadaPortal = {}));
var ArmadaPortal;
(function (ArmadaPortal) {
    var Common;
    (function (Common) {
        var BulkServiceAction = /** @class */ (function () {
            function BulkServiceAction() {
            }
            BulkServiceAction.prototype.createProgressDialog = function () {
                this.progressDialog = new ArmadaPortal.BasicProgressDialog();
                this.progressDialog.dialogOpen();
                this.progressDialog.max = this.keys.length;
                this.progressDialog.value = 0;
            };
            BulkServiceAction.prototype.getConfirmationFormat = function () {
                return Q.text('Site.BulkServiceAction.ConfirmationFormat');
            };
            BulkServiceAction.prototype.getConfirmationMessage = function (targetCount) {
                return Q.format(this.getConfirmationFormat(), targetCount);
            };
            BulkServiceAction.prototype.confirm = function (targetCount, action) {
                Q.confirm(this.getConfirmationMessage(targetCount), action);
            };
            BulkServiceAction.prototype.getNothingToProcessMessage = function () {
                return Q.text('Site.BulkServiceAction.NothingToProcess');
            };
            BulkServiceAction.prototype.nothingToProcess = function () {
                Q.notifyError(this.getNothingToProcessMessage());
            };
            BulkServiceAction.prototype.getParallelRequests = function () {
                return 1;
            };
            BulkServiceAction.prototype.getBatchSize = function () {
                return 1;
            };
            BulkServiceAction.prototype.startParallelExecution = function () {
                this.createProgressDialog();
                this.successCount = 0;
                this.errorCount = 0;
                this.pendingRequests = 0;
                this.completedRequests = 0;
                this.errorCount = 0;
                this.errorByKey = {};
                this.queue = this.keys.slice();
                this.queueIndex = 0;
                var parallelRequests = this.getParallelRequests();
                while (parallelRequests-- > 0) {
                    this.executeNextBatch();
                }
            };
            BulkServiceAction.prototype.serviceCallCleanup = function () {
                this.pendingRequests--;
                this.completedRequests++;
                var title = Q.text((this.progressDialog.cancelled ?
                    'Site.BasicProgressDialog.CancelTitle' : 'Site.BasicProgressDialog.PleaseWait'));
                title += ' (';
                if (this.successCount > 0) {
                    title += Q.format(Q.text('Site.BulkServiceAction.SuccessCount'), this.successCount);
                }
                if (this.errorCount > 0) {
                    if (this.successCount > 0) {
                        title += ', ';
                    }
                    title += Q.format(Q.text('Site.BulkServiceAction.ErrorCount'), this.errorCount);
                }
                this.progressDialog.title = title + ')';
                this.progressDialog.value = this.successCount + this.errorCount;
                if (!this.progressDialog.cancelled && this.progressDialog.value < this.keys.length) {
                    this.executeNextBatch();
                }
                else if (this.pendingRequests === 0) {
                    this.progressDialog.dialogClose();
                    this.showResults();
                    if (this.done) {
                        this.done();
                        this.done = null;
                    }
                }
            };
            BulkServiceAction.prototype.executeForBatch = function (batch) {
            };
            BulkServiceAction.prototype.executeNextBatch = function () {
                var batchSize = this.getBatchSize();
                var batch = [];
                while (true) {
                    if (batch.length >= batchSize) {
                        break;
                    }
                    if (this.queueIndex >= this.queue.length) {
                        break;
                    }
                    batch.push(this.queue[this.queueIndex++]);
                }
                if (batch.length > 0) {
                    this.pendingRequests++;
                    this.executeForBatch(batch);
                }
            };
            BulkServiceAction.prototype.getAllHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.AllHadErrorsFormat');
            };
            BulkServiceAction.prototype.showAllHadErrors = function () {
                Q.notifyError(Q.format(this.getAllHadErrorsFormat(), this.errorCount));
            };
            BulkServiceAction.prototype.getSomeHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.SomeHadErrorsFormat');
            };
            BulkServiceAction.prototype.showSomeHadErrors = function () {
                Q.notifyWarning(Q.format(this.getSomeHadErrorsFormat(), this.successCount, this.errorCount));
            };
            BulkServiceAction.prototype.getAllSuccessFormat = function () {
                return Q.text('Site.BulkServiceAction.AllSuccessFormat');
            };
            BulkServiceAction.prototype.showAllSuccess = function () {
                Q.notifySuccess(Q.format(this.getAllSuccessFormat(), this.successCount));
            };
            BulkServiceAction.prototype.showResults = function () {
                if (this.errorCount === 0 && this.successCount === 0) {
                    this.nothingToProcess();
                    return;
                }
                if (this.errorCount > 0 && this.successCount === 0) {
                    this.showAllHadErrors();
                    return;
                }
                if (this.errorCount > 0) {
                    this.showSomeHadErrors();
                    return;
                }
                this.showAllSuccess();
            };
            BulkServiceAction.prototype.execute = function (keys) {
                var _this = this;
                this.keys = keys;
                if (this.keys.length === 0) {
                    this.nothingToProcess();
                    return;
                }
                this.confirm(this.keys.length, function () { return _this.startParallelExecution(); });
            };
            BulkServiceAction.prototype.get_successCount = function () {
                return this.successCount;
            };
            BulkServiceAction.prototype.set_successCount = function (value) {
                this.successCount = value;
            };
            BulkServiceAction.prototype.get_errorCount = function () {
                return this.errorCount;
            };
            BulkServiceAction.prototype.set_errorCount = function (value) {
                this.errorCount = value;
            };
            return BulkServiceAction;
        }());
        Common.BulkServiceAction = BulkServiceAction;
    })(Common = ArmadaPortal.Common || (ArmadaPortal.Common = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
var ArmadaPortal;
(function (ArmadaPortal) {
    var DialogUtils;
    (function (DialogUtils) {
        function pendingChangesConfirmation(element, hasPendingChanges) {
            element.on('dialogbeforeclose panelbeforeclose', function (e) {
                if (!Serenity.WX.hasOriginalEvent(e) || !hasPendingChanges()) {
                    return;
                }
                e.preventDefault();
                Q.confirm('You have pending changes. Save them?', function () { return element.find('div.save-and-close-button').click(); }, {
                    onNo: function () {
                        if (element.hasClass('ui-dialog-content'))
                            element.dialog('close');
                        else if (element.hasClass('s-Panel'))
                            Serenity.TemplatedDialog.closePanel(element);
                    }
                });
            });
        }
        DialogUtils.pendingChangesConfirmation = pendingChangesConfirmation;
    })(DialogUtils = ArmadaPortal.DialogUtils || (ArmadaPortal.DialogUtils = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
var ArmadaPortal;
(function (ArmadaPortal) {
    var Common;
    (function (Common) {
        var EnumSelectFormatter = /** @class */ (function () {
            function EnumSelectFormatter() {
                this.allowClear = true;
            }
            EnumSelectFormatter.prototype.format = function (ctx) {
                var enumType = Serenity.EnumTypeRegistry.get(this.enumKey);
                var sb = "<select>";
                if (this.allowClear) {
                    sb += '<option value="">';
                    sb += Q.htmlEncode(this.emptyItemText || Q.text("Controls.SelectEditor.EmptyItemText"));
                    sb += '</option>';
                }
                for (var _i = 0, _a = Object.keys(enumType).filter(function (v) { return !isNaN(parseInt(v, 10)); }); _i < _a.length; _i++) {
                    var x = _a[_i];
                    sb += '<option value="' + Q.attrEncode(x) + '"';
                    if (x == ctx.value)
                        sb += " selected";
                    var name = enumType[x];
                    sb += ">";
                    sb += Q.htmlEncode(Q.tryGetText("Enums." + this.enumKey + "." + name) || name);
                    sb += "</option>";
                }
                sb += "</select>";
                return sb;
            };
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "enumKey", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "allowClear", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "emptyItemText", void 0);
            EnumSelectFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], EnumSelectFormatter);
            return EnumSelectFormatter;
        }());
        Common.EnumSelectFormatter = EnumSelectFormatter;
    })(Common = ArmadaPortal.Common || (ArmadaPortal.Common = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
var ArmadaPortal;
(function (ArmadaPortal) {
    var Common;
    (function (Common) {
        var ExcelExportHelper;
        (function (ExcelExportHelper) {
            function createToolButton(options) {
                return {
                    hint: Q.coalesce(options.hint, 'Excel'),
                    title: Q.coalesce(options.title, ''),
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        if (!options.onViewSubmit()) {
                            return;
                        }
                        var grid = options.grid;
                        var request = Q.deepClone(grid.getView().params);
                        request.Take = 0;
                        request.Skip = 0;
                        var sortBy = grid.getView().sortBy;
                        if (sortBy) {
                            request.Sort = sortBy;
                        }
                        request.IncludeColumns = [];
                        var columns = grid.getGrid().getColumns();
                        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
                            var column = columns_1[_i];
                            request.IncludeColumns.push(column.id || column.field);
                        }
                        Q.postToService({ service: options.service, request: request, target: '_blank' });
                    },
                    separator: options.separator
                };
            }
            ExcelExportHelper.createToolButton = createToolButton;
        })(ExcelExportHelper = Common.ExcelExportHelper || (Common.ExcelExportHelper = {}));
    })(Common = ArmadaPortal.Common || (ArmadaPortal.Common = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
var ArmadaPortal;
(function (ArmadaPortal) {
    var Common;
    (function (Common) {
        var GridEditorBase = /** @class */ (function (_super) {
            __extends(GridEditorBase, _super);
            function GridEditorBase(container) {
                var _this = _super.call(this, container) || this;
                _this.nextId = 1;
                return _this;
            }
            GridEditorBase.prototype.getIdProperty = function () { return "__id"; };
            GridEditorBase.prototype.id = function (entity) {
                return entity[this.getIdProperty()];
            };
            GridEditorBase.prototype.getNextId = function () {
                return "`" + this.nextId++;
            };
            GridEditorBase.prototype.setNewId = function (entity) {
                entity[this.getIdProperty()] = this.getNextId();
            };
            GridEditorBase.prototype.save = function (opt, callback) {
                var _this = this;
                var request = opt.request;
                var row = Q.deepClone(request.Entity);
                var id = this.id(row);
                if (id == null) {
                    row[this.getIdProperty()] = this.getNextId();
                }
                if (!this.validateEntity(row, id)) {
                    return;
                }
                var items = this.view.getItems().slice();
                if (id == null) {
                    items.push(row);
                }
                else {
                    var index = Q.indexOf(items, function (x) { return _this.id(x) === id; });
                    items[index] = Q.deepClone({}, items[index], row);
                }
                this.setEntities(items);
                callback({});
            };
            GridEditorBase.prototype.deleteEntity = function (id) {
                this.view.deleteItem(id);
                return true;
            };
            GridEditorBase.prototype.validateEntity = function (row, id) {
                return true;
            };
            GridEditorBase.prototype.setEntities = function (items) {
                this.view.setItems(items, true);
            };
            GridEditorBase.prototype.getNewEntity = function () {
                return {};
            };
            GridEditorBase.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: this.getAddButtonCaption(),
                        cssClass: 'add-button',
                        onClick: function () {
                            _this.createEntityDialog(_this.getItemType(), function (dlg) {
                                var dialog = dlg;
                                dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                                dialog.loadEntityAndOpenDialog(_this.getNewEntity());
                            });
                        }
                    }];
            };
            GridEditorBase.prototype.editItem = function (entityOrId) {
                var _this = this;
                var id = entityOrId;
                var item = this.view.getItemById(id);
                this.createEntityDialog(this.getItemType(), function (dlg) {
                    var dialog = dlg;
                    dialog.onDelete = function (opt, callback) {
                        if (!_this.deleteEntity(id)) {
                            return;
                        }
                        callback({});
                    };
                    dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                    dialog.loadEntityAndOpenDialog(item);
                });
                ;
            };
            GridEditorBase.prototype.getEditValue = function (property, target) {
                target[property.name] = this.value;
            };
            GridEditorBase.prototype.setEditValue = function (source, property) {
                this.value = source[property.name];
            };
            Object.defineProperty(GridEditorBase.prototype, "value", {
                get: function () {
                    var p = this.getIdProperty();
                    return this.view.getItems().map(function (x) {
                        var y = Q.deepClone(x);
                        var id = y[p];
                        if (id && id.toString().charAt(0) == '`')
                            delete y[p];
                        return y;
                    });
                },
                set: function (value) {
                    var _this = this;
                    var p = this.getIdProperty();
                    this.view.setItems((value || []).map(function (x) {
                        var y = Q.deepClone(x);
                        if (y[p] == null)
                            y[p] = "`" + _this.getNextId();
                        return y;
                    }), true);
                },
                enumerable: true,
                configurable: true
            });
            GridEditorBase.prototype.getGridCanLoad = function () {
                return false;
            };
            GridEditorBase.prototype.usePager = function () {
                return false;
            };
            GridEditorBase.prototype.getInitialTitle = function () {
                return null;
            };
            GridEditorBase.prototype.createQuickSearchInput = function () {
            };
            GridEditorBase = __decorate([
                Serenity.Decorators.registerClass([Serenity.IGetEditValue, Serenity.ISetEditValue]),
                Serenity.Decorators.editor(),
                Serenity.Decorators.element("<div/>")
            ], GridEditorBase);
            return GridEditorBase;
        }(Serenity.EntityGrid));
        Common.GridEditorBase = GridEditorBase;
    })(Common = ArmadaPortal.Common || (ArmadaPortal.Common = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
var ArmadaPortal;
(function (ArmadaPortal) {
    var Common;
    (function (Common) {
        var GridEditorDialog = /** @class */ (function (_super) {
            __extends(GridEditorDialog, _super);
            function GridEditorDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GridEditorDialog.prototype.getIdProperty = function () { return "__id"; };
            GridEditorDialog.prototype.destroy = function () {
                this.onSave = null;
                this.onDelete = null;
                _super.prototype.destroy.call(this);
            };
            GridEditorDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                // apply changes button doesn't work properly with in-memory grids yet
                if (this.applyChangesButton) {
                    this.applyChangesButton.hide();
                }
            };
            GridEditorDialog.prototype.saveHandler = function (options, callback) {
                this.onSave && this.onSave(options, callback);
            };
            GridEditorDialog.prototype.deleteHandler = function (options, callback) {
                this.onDelete && this.onDelete(options, callback);
            };
            GridEditorDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GridEditorDialog);
            return GridEditorDialog;
        }(Serenity.EntityDialog));
        Common.GridEditorDialog = GridEditorDialog;
    })(Common = ArmadaPortal.Common || (ArmadaPortal.Common = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
var ArmadaPortal;
(function (ArmadaPortal) {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    var StaticTextBlock = /** @class */ (function (_super) {
        __extends(StaticTextBlock, _super);
        function StaticTextBlock(container, options) {
            var _this = _super.call(this, container, options) || this;
            // hide the caption label for this editor if in a form. ugly hack
            if (_this.options.hideLabel)
                _this.element.closest('.field').find('.caption').hide();
            _this.updateElementContent();
            return _this;
        }
        StaticTextBlock.prototype.updateElementContent = function () {
            var text = Q.coalesce(this.options.text, this.value);
            // if isLocalText is set, text is actually a local text key
            if (this.options.isLocalText)
                text = Q.text(text);
            // don't html encode if isHtml option is true
            if (this.options.isHtml)
                this.element.html(text);
            else
                this.element.text(text);
        };
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        StaticTextBlock.prototype.setEditValue = function (source, property) {
            if (this.options.text == null) {
                this.value = Q.coalesce(this.options.text, source[property.name]);
                this.updateElementContent();
            }
        };
        StaticTextBlock = __decorate([
            Serenity.Decorators.element("<div/>"),
            Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
        ], StaticTextBlock);
        return StaticTextBlock;
    }(Serenity.Widget));
    ArmadaPortal.StaticTextBlock = StaticTextBlock;
})(ArmadaPortal || (ArmadaPortal = {}));
var ArmadaPortal;
(function (ArmadaPortal) {
    var Common;
    (function (Common) {
        var LanguageSelection = /** @class */ (function (_super) {
            __extends(LanguageSelection, _super);
            function LanguageSelection(select, currentLanguage) {
                var _this = _super.call(this, select) || this;
                currentLanguage = Q.coalesce(currentLanguage, 'en');
                _this.change(function (e) {
                    $.cookie('LanguagePreference', select.val(), {
                        path: Q.Config.applicationPath,
                        expires: 365
                    });
                    window.location.reload(true);
                });
                Q.getLookupAsync('Administration.Language').then(function (x) {
                    if (!Q.any(x.items, function (z) { return z.LanguageId === currentLanguage; })) {
                        var idx = currentLanguage.lastIndexOf('-');
                        if (idx >= 0) {
                            currentLanguage = currentLanguage.substr(0, idx);
                            if (!Q.any(x.items, function (y) { return y.LanguageId === currentLanguage; })) {
                                currentLanguage = 'en';
                            }
                        }
                        else {
                            currentLanguage = 'en';
                        }
                    }
                    for (var _i = 0, _a = x.items; _i < _a.length; _i++) {
                        var l = _a[_i];
                        Q.addOption(select, l.LanguageId, l.LanguageName);
                    }
                    select.val(currentLanguage);
                });
                return _this;
            }
            return LanguageSelection;
        }(Serenity.Widget));
        Common.LanguageSelection = LanguageSelection;
    })(Common = ArmadaPortal.Common || (ArmadaPortal.Common = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
var ArmadaPortal;
(function (ArmadaPortal) {
    var Common;
    (function (Common) {
        var SidebarSearch = /** @class */ (function (_super) {
            __extends(SidebarSearch, _super);
            function SidebarSearch(input, menuUL) {
                var _this = _super.call(this, input) || this;
                new Serenity.QuickSearchInput(input, {
                    onSearch: function (field, text, success) {
                        _this.updateMatchFlags(text);
                        success(true);
                    }
                });
                _this.menuUL = menuUL;
                return _this;
            }
            SidebarSearch.prototype.updateMatchFlags = function (text) {
                var liList = this.menuUL.find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (text == null) {
                    liList.show();
                    liList.removeClass('expanded');
                    return;
                }
                var parts = text.replace(',', ' ').split(' ').filter(function (x) { return !Q.isTrimmedEmpty(x); });
                for (var i = 0; i < parts.length; i++) {
                    parts[i] = Q.trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
                }
                var items = liList;
                items.each(function (idx, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                        var p = parts_1[_i];
                        if (p != null && !(title.indexOf(p) !== -1)) {
                            x.addClass('non-match');
                            break;
                        }
                    }
                });
                var matchingItems = items.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                liList.addClass('expanded');
            };
            return SidebarSearch;
        }(Serenity.Widget));
        Common.SidebarSearch = SidebarSearch;
    })(Common = ArmadaPortal.Common || (ArmadaPortal.Common = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
var ArmadaPortal;
(function (ArmadaPortal) {
    var Common;
    (function (Common) {
        var ThemeSelection = /** @class */ (function (_super) {
            __extends(ThemeSelection, _super);
            function ThemeSelection(select) {
                var _this = _super.call(this, select) || this;
                _this.change(function (e) {
                    var path = Q.Config.applicationPath;
                    if (path && path != '/' && Q.endsWith(path, '/'))
                        path = path.substr(0, path.length - 1);
                    $.cookie('ThemePreference', select.val(), {
                        path: path,
                        expires: 365
                    });
                    var theme = select.val() || '';
                    var darkSidebar = theme.indexOf('light') < 0;
                    $('body').removeClass('skin-' + _this.getCurrentTheme());
                    $('body').addClass('skin-' + theme)
                        .toggleClass('dark-sidebar', darkSidebar)
                        .toggleClass('light-sidebar', !darkSidebar);
                });
                Q.addOption(select, 'blue', Q.text('Site.Layout.ThemeBlue'));
                Q.addOption(select, 'blue-light', Q.text('Site.Layout.ThemeBlueLight'));
                //Q.addOption(select, 'purple', Q.text('Site.Layout.ThemePurple'));
                //Q.addOption(select, 'purple-light', Q.text('Site.Layout.ThemePurpleLight'));
                //Q.addOption(select, 'red', Q.text('Site.Layout.ThemeRed'));
                //Q.addOption(select, 'red-light', Q.text('Site.Layout.ThemeRedLight'));
                //Q.addOption(select, 'green', Q.text('Site.Layout.ThemeGreen'));
                //Q.addOption(select, 'green-light', Q.text('Site.Layout.ThemeGreenLight'));
                //Q.addOption(select, 'yellow', Q.text('Site.Layout.ThemeYellow'));
                //Q.addOption(select, 'yellow-light', Q.text('Site.Layout.ThemeYellowLight'));
                Q.addOption(select, 'black', Q.text('Site.Layout.ThemeBlack'));
                Q.addOption(select, 'black-light', Q.text('Site.Layout.ThemeBlackLight'));
                select.val(_this.getCurrentTheme());
                return _this;
            }
            ThemeSelection.prototype.getCurrentTheme = function () {
                var skinClass = Q.first(($('body').attr('class') || '').split(' '), function (x) { return Q.startsWith(x, 'skin-'); });
                if (skinClass) {
                    return skinClass.substr(5);
                }
                return 'blue';
            };
            return ThemeSelection;
        }(Serenity.Widget));
        Common.ThemeSelection = ThemeSelection;
    })(Common = ArmadaPortal.Common || (ArmadaPortal.Common = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
var ArmadaPortal;
(function (ArmadaPortal) {
    var Common;
    (function (Common) {
        var PdfExportHelper;
        (function (PdfExportHelper) {
            function toAutoTableColumns(srcColumns, columnStyles, columnTitles) {
                return srcColumns.map(function (src) {
                    var col = {
                        dataKey: src.id || src.field,
                        title: src.name || ''
                    };
                    if (columnTitles && columnTitles[col.dataKey] != null)
                        col.title = columnTitles[col.dataKey];
                    var style = {};
                    if ((src.cssClass || '').indexOf("align-right") >= 0)
                        style.halign = 'right';
                    else if ((src.cssClass || '').indexOf("align-center") >= 0)
                        style.halign = 'center';
                    columnStyles[col.dataKey] = style;
                    return col;
                });
            }
            function toAutoTableData(entities, keys, srcColumns) {
                var el = document.createElement('span');
                var row = 0;
                return entities.map(function (item) {
                    var dst = {};
                    for (var cell = 0; cell < srcColumns.length; cell++) {
                        var src = srcColumns[cell];
                        var fld = src.field || '';
                        var key = keys[cell];
                        var txt = void 0;
                        var html = void 0;
                        if (src.formatter) {
                            html = src.formatter(row, cell, item[fld], src, item);
                        }
                        else if (src.format) {
                            html = src.format({ row: row, cell: cell, item: item, value: item[fld] });
                        }
                        else {
                            dst[key] = item[fld];
                            continue;
                        }
                        if (!html || (html.indexOf('<') < 0 && html.indexOf('&') < 0))
                            dst[key] = html;
                        else {
                            el.innerHTML = html;
                            if (el.children.length == 1 &&
                                $(el.children[0]).is(":input")) {
                                dst[key] = $(el.children[0]).val();
                            }
                            else if (el.children.length == 1 &&
                                $(el.children).is('.check-box')) {
                                dst[key] = $(el.children).hasClass("checked") ? "X" : "";
                            }
                            else
                                dst[key] = el.textContent || '';
                        }
                    }
                    row++;
                    return dst;
                });
            }
            function exportToPdf(options) {
                var g = options.grid;
                if (!options.onViewSubmit())
                    return;
                includeAutoTable();
                var request = Q.deepClone(g.view.params);
                request.Take = 0;
                request.Skip = 0;
                var sortBy = g.view.sortBy;
                if (sortBy != null)
                    request.Sort = sortBy;
                var gridColumns = g.slickGrid.getColumns();
                gridColumns = gridColumns.filter(function (x) { return x.id !== "__select__"; });
                request.IncludeColumns = [];
                for (var _i = 0, gridColumns_1 = gridColumns; _i < gridColumns_1.length; _i++) {
                    var column = gridColumns_1[_i];
                    request.IncludeColumns.push(column.id || column.field);
                }
                Q.serviceCall({
                    url: g.view.url,
                    request: request,
                    onSuccess: function (response) {
                        var doc = new jsPDF('l', 'pt');
                        var srcColumns = gridColumns;
                        var columnStyles = {};
                        var columns = toAutoTableColumns(srcColumns, columnStyles, options.columnTitles);
                        var keys = columns.map(function (x) { return x.dataKey; });
                        var entities = response.Entities || [];
                        var data = toAutoTableData(entities, keys, srcColumns);
                        doc.setFontSize(options.titleFontSize || 10);
                        doc.setFontStyle('bold');
                        var reportTitle = options.reportTitle || g.getTitle() || "Report";
                        doc.autoTableText(reportTitle, doc.internal.pageSize.width / 2, options.titleTop || 25, { halign: 'center' });
                        var totalPagesExp = "{{T}}";
                        var pageNumbers = options.pageNumbers == null || options.pageNumbers;
                        var autoOptions = $.extend({
                            margin: { top: 25, left: 25, right: 25, bottom: pageNumbers ? 25 : 30 },
                            startY: 60,
                            styles: {
                                fontSize: 8,
                                overflow: 'linebreak',
                                cellPadding: 2,
                                valign: 'middle'
                            },
                            columnStyles: columnStyles
                        }, options.tableOptions);
                        if (pageNumbers) {
                            var footer = function (data) {
                                var str = data.pageCount;
                                // Total page number plugin only available in jspdf v1.0+
                                if (typeof doc.putTotalPages === 'function') {
                                    str = str + " / " + totalPagesExp;
                                }
                                doc.autoTableText(str, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - autoOptions.margin.bottom, {
                                    halign: 'center'
                                });
                            };
                            autoOptions.afterPageContent = footer;
                        }
                        // Print header of page
                        if (options.printDateTimeHeader == null || options.printDateTimeHeader) {
                            var beforePage = function (data) {
                                doc.setFontStyle('normal');
                                doc.setFontSize(8);
                                // Date and time of the report
                                doc.autoTableText(Q.formatDate(new Date(), "dd-MM-yyyy HH:mm"), doc.internal.pageSize.width - autoOptions.margin.right, 13, {
                                    halign: 'right'
                                });
                            };
                            autoOptions.beforePageContent = beforePage;
                        }
                        doc.autoTable(columns, data, autoOptions);
                        if (typeof doc.putTotalPages === 'function') {
                            doc.putTotalPages(totalPagesExp);
                        }
                        if (!options.output || options.output == "file") {
                            var fileName = options.fileName || options.reportTitle || "{0}_{1}.pdf";
                            fileName = Q.format(fileName, g.getTitle() || "report", Q.formatDate(new Date(), "yyyyMMdd_HHmm"));
                            doc.save(fileName);
                            return;
                        }
                        if (options.autoPrint)
                            doc.autoPrint();
                        var output = options.output;
                        if (output == 'newwindow' || '_blank')
                            output = 'dataurlnewwindow';
                        else if (output == 'window')
                            output = 'datauri';
                        if (output == 'datauri')
                            doc.output(output);
                        else {
                            var tmpOut = doc.output('datauristring');
                            if (output == 'dataurlnewwindow') {
                                var fileTmpName = options.reportTitle || g.getTitle();
                                var url_with_name = tmpOut.replace("data:application/pdf;", "data:application/pdf;name=" + fileTmpName + ".pdf;");
                                var html = '<html>' +
                                    '<style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style>' +
                                    '<body>' +
                                    '<p></p>' +
                                    '<iframe type="application/pdf" src="' + url_with_name + '"></iframe>' +
                                    '</body></html>';
                                var a = window.open("about:blank", "_blank");
                                a.document.write(html);
                                a.document.close();
                            }
                        }
                    }
                });
            }
            PdfExportHelper.exportToPdf = exportToPdf;
            function createToolButton(options) {
                return {
                    title: options.title || '',
                    hint: options.hint || 'PDF',
                    cssClass: 'export-pdf-button',
                    onClick: function () { return exportToPdf(options); },
                    separator: options.separator
                };
            }
            PdfExportHelper.createToolButton = createToolButton;
            function includeJsPDF() {
                if (typeof jsPDF !== "undefined")
                    return;
                var script = $("jsPDFScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.min.js"))
                    .appendTo(document.head);
            }
            function includeAutoTable() {
                includeJsPDF();
                if (typeof jsPDF === "undefined" ||
                    typeof jsPDF.API == "undefined" ||
                    typeof jsPDF.API.autoTable !== "undefined")
                    return;
                var script = $("jsPDFAutoTableScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFAutoTableScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.plugin.autotable.min.js"))
                    .appendTo(document.head);
            }
        })(PdfExportHelper = Common.PdfExportHelper || (Common.PdfExportHelper = {}));
    })(Common = ArmadaPortal.Common || (ArmadaPortal.Common = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
var ArmadaPortal;
(function (ArmadaPortal) {
    var Common;
    (function (Common) {
        var ReportDialog = /** @class */ (function (_super) {
            __extends(ReportDialog, _super);
            function ReportDialog(options) {
                var _this = _super.call(this, options) || this;
                _this.updateInterface();
                _this.loadReport(_this.options.reportKey);
                return _this;
            }
            ReportDialog.prototype.getDialogButtons = function () {
                return null;
            };
            ReportDialog.prototype.createPropertyGrid = function () {
                this.propertyGrid && this.byId('PropertyGrid').html('').attr('class', '');
                this.propertyGrid = new Serenity.PropertyGrid(this.byId('PropertyGrid'), {
                    idPrefix: this.idPrefix,
                    useCategories: true,
                    items: this.report.Properties
                }).init(null);
            };
            ReportDialog.prototype.loadReport = function (reportKey) {
                var _this = this;
                Q.serviceCall({
                    url: Q.resolveUrl('~/Report/Retrieve'),
                    request: {
                        ReportKey: reportKey
                    },
                    onSuccess: function (response) {
                        _this.report = response;
                        _this.element.dialog().dialog('option', 'title', _this.report.Title);
                        _this.createPropertyGrid();
                        _this.propertyGrid.load(_this.report.InitialSettings || {});
                        _this.updateInterface();
                        _this.dialogOpen();
                    }
                });
            };
            ReportDialog.prototype.updateInterface = function () {
                this.toolbar.findButton('print-preview-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-pdf-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-xlsx-button')
                    .toggle(this.report && this.report.IsDataOnlyReport);
            };
            ReportDialog.prototype.executeReport = function (target, ext, download) {
                if (!this.validateForm()) {
                    return;
                }
                var opt = {};
                this.propertyGrid.save(opt);
                Common.ReportHelper.execute({
                    download: download,
                    reportKey: this.report.ReportKey,
                    extension: ext,
                    target: target,
                    params: opt
                });
            };
            ReportDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                return [
                    {
                        title: 'Preview',
                        cssClass: 'print-preview-button',
                        onClick: function () { return _this.executeReport('_blank', null, false); }
                    },
                    {
                        title: 'PDF',
                        cssClass: 'export-pdf-button',
                        onClick: function () { return _this.executeReport('_blank', 'pdf', true); }
                    },
                    {
                        title: 'Excel',
                        cssClass: 'export-xlsx-button',
                        onClick: function () { return _this.executeReport('_blank', 'xlsx', true); }
                    }
                ];
            };
            return ReportDialog;
        }(Serenity.TemplatedDialog));
        Common.ReportDialog = ReportDialog;
    })(Common = ArmadaPortal.Common || (ArmadaPortal.Common = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
var ArmadaPortal;
(function (ArmadaPortal) {
    var Common;
    (function (Common) {
        var ReportHelper;
        (function (ReportHelper) {
            function createToolButton(options) {
                return {
                    title: Q.coalesce(options.title, 'Report'),
                    cssClass: Q.coalesce(options.cssClass, 'print-button'),
                    icon: options.icon,
                    onClick: function () {
                        ReportHelper.execute(options);
                    }
                };
            }
            ReportHelper.createToolButton = createToolButton;
            function execute(options) {
                var opt = options.getParams ? options.getParams() : options.params;
                Q.postToUrl({
                    url: '~/Report/' + (options.download ? 'Download' : 'Render'),
                    params: {
                        key: options.reportKey,
                        ext: Q.coalesce(options.extension, 'pdf'),
                        opt: opt ? $.toJSON(opt) : ''
                    },
                    target: Q.coalesce(options.target, '_blank')
                });
            }
            ReportHelper.execute = execute;
        })(ReportHelper = Common.ReportHelper || (Common.ReportHelper = {}));
    })(Common = ArmadaPortal.Common || (ArmadaPortal.Common = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
var ArmadaPortal;
(function (ArmadaPortal) {
    var Common;
    (function (Common) {
        var ReportPage = /** @class */ (function (_super) {
            __extends(ReportPage, _super);
            function ReportPage(element) {
                var _this = _super.call(this, element) || this;
                $('.report-link', element).click(function (e) { return _this.reportLinkClick(e); });
                $('div.line', element).click(function (e) { return _this.categoryClick(e); });
                new Serenity.QuickSearchInput($('.s-QuickSearchBar input', element), {
                    onSearch: function (field, text, done) {
                        _this.updateMatchFlags(text);
                        done(true);
                    }
                });
                return _this;
            }
            ReportPage.prototype.updateMatchFlags = function (text) {
                var liList = $('.report-list', this.element).find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (!text) {
                    liList.children('ul').hide();
                    liList.show().removeClass('expanded');
                    return;
                }
                text = Select2.util.stripDiacritics(text).toUpperCase();
                var reportItems = liList.filter('.report-item');
                reportItems.each(function (ix, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    if (title.indexOf(text) < 0) {
                        x.addClass('non-match');
                    }
                });
                var matchingItems = reportItems.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                if (visibles.length <= 100) {
                    liList.children('ul').show();
                    liList.addClass('expanded');
                }
            };
            ReportPage.prototype.categoryClick = function (e) {
                var li = $(e.target).closest('li');
                if (li.hasClass('expanded')) {
                    li.find('ul').hide('fast');
                    li.removeClass('expanded');
                    li.find('li').removeClass('expanded');
                }
                else {
                    li.addClass('expanded');
                    li.children('ul').show('fast');
                    if (li.children('ul').children('li').length === 1 && !li.children('ul').children('li').hasClass('expanded')) {
                        li.children('ul').children('li').children('.line').click();
                    }
                }
            };
            ReportPage.prototype.reportLinkClick = function (e) {
                e.preventDefault();
                new Common.ReportDialog({
                    reportKey: $(e.target).data('key')
                }).dialogOpen();
            };
            return ReportPage;
        }(Serenity.Widget));
        Common.ReportPage = ReportPage;
    })(Common = ArmadaPortal.Common || (ArmadaPortal.Common = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
var ArmadaPortal;
(function (ArmadaPortal) {
    var Common;
    (function (Common) {
        var UserPreferenceStorage = /** @class */ (function () {
            function UserPreferenceStorage() {
            }
            UserPreferenceStorage.prototype.getItem = function (key) {
                var value;
                Common.UserPreferenceService.Retrieve({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key
                }, function (response) { return value = response.Value; }, {
                    async: false
                });
                return value;
            };
            UserPreferenceStorage.prototype.setItem = function (key, data) {
                Common.UserPreferenceService.Update({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key,
                    Value: data
                });
            };
            return UserPreferenceStorage;
        }());
        Common.UserPreferenceStorage = UserPreferenceStorage;
    })(Common = ArmadaPortal.Common || (ArmadaPortal.Common = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var ArmadaPortal;
(function (ArmadaPortal) {
    var Flood;
    (function (Flood) {
        var DocumentDialog = /** @class */ (function (_super) {
            __extends(DocumentDialog, _super);
            function DocumentDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Flood.DocumentImportForm(_this.idPrefix);
                _this.form = new Flood.DocumentImportForm(_this.idPrefix);
                ArmadaPortal.DialogUtils.pendingChangesConfirmation(_this.element, function () { return _this.getSaveState() != _this.loadedState; });
                return _this;
            }
            DocumentDialog.prototype.getFormKey = function () { return Flood.DocumentImportForm.formKey; };
            DocumentDialog.prototype.getIdProperty = function () { return Flood.DocumentRow.idProperty; };
            DocumentDialog.prototype.getLocalTextPrefix = function () { return Flood.DocumentRow.localTextPrefix; };
            DocumentDialog.prototype.getNameProperty = function () { return Flood.DocumentRow.nameProperty; };
            DocumentDialog.prototype.getService = function () { return Flood.DocumentService.baseUrl; };
            DocumentDialog.prototype.getSaveState = function () {
                try {
                    return $.toJSON(this.getSaveEntity());
                }
                catch (e) {
                    return null;
                }
            };
            DocumentDialog.prototype.loadResponse = function (data) {
                _super.prototype.loadResponse.call(this, data);
                this.loadedState = this.getSaveState();
            };
            DocumentDialog.prototype.loadEntity = function (entity) {
                _super.prototype.loadEntity.call(this, entity);
            };
            DocumentDialog.prototype.onSaveSuccess = function (response) {
                _super.prototype.onSaveSuccess.call(this, response);
                //Q.reloadLookup('Northwind.Customer');
            };
            DocumentDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], DocumentDialog);
            return DocumentDialog;
        }(Serenity.EntityDialog));
        Flood.DocumentDialog = DocumentDialog;
    })(Flood = ArmadaPortal.Flood || (ArmadaPortal.Flood = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var ArmadaPortal;
(function (ArmadaPortal) {
    var Flood;
    (function (Flood) {
        var DocumentEditor = /** @class */ (function (_super) {
            __extends(DocumentEditor, _super);
            function DocumentEditor(container) {
                return _super.call(this, container) || this;
            }
            DocumentEditor.prototype.getColumnsKey = function () { return "ArmadaPortal.Document"; };
            DocumentEditor.prototype.getDialogType = function () { return Flood.DocumentImportDialog; };
            DocumentEditor.prototype.getLocalTextPrefix = function () { return Flood.DocumentRow.localTextPrefix; };
            DocumentEditor.prototype.validateEntity = function (row, id) {
                return true;
            };
            DocumentEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], DocumentEditor);
            return DocumentEditor;
        }(ArmadaPortal.Common.GridEditorBase));
        Flood.DocumentEditor = DocumentEditor;
    })(Flood = ArmadaPortal.Flood || (ArmadaPortal.Flood = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
var ArmadaPortal;
(function (ArmadaPortal) {
    var Flood;
    (function (Flood) {
        var DocumentGrid = /** @class */ (function (_super) {
            __extends(DocumentGrid, _super);
            function DocumentGrid(container) {
                return _super.call(this, container) || this;
            }
            DocumentGrid.prototype.getColumnsKey = function () { return "ArmadaPortal.Document"; };
            DocumentGrid.prototype.getDialogType = function () { return Flood.DocumentImportDialog; };
            DocumentGrid.prototype.getIdProperty = function () { return Flood.DocumentRow.idProperty; };
            DocumentGrid.prototype.getNameProperty = function () { return Flood.DocumentRow.nameProperty; };
            DocumentGrid.prototype.getLocalTextPrefix = function () { return Flood.DocumentRow.localTextPrefix; };
            DocumentGrid.prototype.getService = function () { return Flood.DocumentService.baseUrl; };
            /**
             * This method is called to preprocess data returned from the list service
             */
            DocumentGrid.prototype.onViewProcessData = function (response) {
                response = _super.prototype.onViewProcessData.call(this, response);
                // there is no __id property in CustomerGrossSalesRow but 
                // this is javascript and we can set any property of an object
                //for (var x of response.Entities) {
                //    (x as any).__id = this.nextId++;
                //}
                return response;
            };
            DocumentGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.splice(1, 0, {
                    field: 'Print Document',
                    name: '',
                    format: function (ctx) {
                        return '<a class="document-link print-document" title="printdocument">' +
                            '<i class="fa fa-file-pdf-o text-red"></i></a>';
                    },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                Q.first(columns, function (x) { return x.field == "DocumentName" /* DocumentName */; }).format =
                    function (ctx) { return "<a href=\"javascript:;\" class=\"document-link\">" + Q.htmlEncode(ctx.value) + "</a>"; };
                Q.first(columns, function (x) { return x.field == "DocumentName" /* DocumentName */; }).format =
                    function (ctx) { return "<a href=\"javascript:;\" class=\"document-link\">" + Q.htmlEncode(ctx.value) + "</a>"; };
                return columns;
            };
            DocumentGrid.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                // if user clicks "i" element, e.g. icon
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass("document-link")) {
                    e.preventDefault();
                    Q.postToUrl({
                        url: '~/FloodReport/GetDocumentById/?documentId=' + item.DocumentId,
                        params: {},
                        target: '_blank'
                    });
                }
            };
            DocumentGrid.prototype.getButtons = function () {
                var buttons = [];
                //buttons.push(Common.PdfExportHelper.createToolButton({
                //    grid: this,
                //    onViewSubmit: () => this.onViewSubmit()
                //}));
                return buttons;
            };
            DocumentGrid.prototype.createSlickGrid = function () {
                var grid = _super.prototype.createSlickGrid.call(this);
                //// need to register this plugin for grouping or you'll have errors
                //grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
                //this.view.setSummaryOptions({
                //    aggregators: [
                //        new Slick.Aggregators.Sum('GrossAmount')
                //    ]
                //});
                //this.view.setGrouping(
                //    [{
                //        getter: 'ContactName'
                //    }]);
                return grid;
            };
            DocumentGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.showFooterRow = true;
                return opt;
            };
            DocumentGrid.prototype.usePager = function () {
                return false;
            };
            DocumentGrid = __decorate([
                Serenity.Decorators.registerClass()
                //@Serenity.Decorators.filterable()
            ], DocumentGrid);
            return DocumentGrid;
        }(Serenity.EntityGrid));
        Flood.DocumentGrid = DocumentGrid;
    })(Flood = ArmadaPortal.Flood || (ArmadaPortal.Flood = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
var ArmadaPortal;
(function (ArmadaPortal) {
    var Flood;
    (function (Flood) {
        var DocumentImportDialog = /** @class */ (function (_super) {
            __extends(DocumentImportDialog, _super);
            function DocumentImportDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Flood.DocumentImportForm(_this.idPrefix);
                _this.form = new Flood.DocumentImportForm(_this.idPrefix);
                return _this;
            }
            DocumentImportDialog.prototype.getFormKey = function () { return Flood.DocumentImportForm.formKey; };
            DocumentImportDialog.prototype.getIdProperty = function () { return Flood.DocumentRow.idProperty; };
            DocumentImportDialog.prototype.getLocalTextPrefix = function () { return Flood.DocumentRow.localTextPrefix; };
            DocumentImportDialog.prototype.getNameProperty = function () { return Flood.DocumentRow.nameProperty; };
            DocumentImportDialog.prototype.getService = function () { return Flood.DocumentService.baseUrl; };
            DocumentImportDialog.prototype.getDialogTitle = function () {
                return "Add a Document";
            };
            DocumentImportDialog.prototype.getDialogButtons = function () {
                var _this = this;
                return [
                    {
                        text: 'Insert Document',
                        click: function () {
                            if (!_this.validateBeforeSave())
                                return;
                            if (_this.form.FileName.value == null ||
                                Q.isEmptyOrNull(_this.form.FileName.value.Filename)) {
                                Q.notifyError("Please select a file!");
                                return;
                            }
                            Flood.DocumentService.DocumentImport({
                                FileName: _this.form.FileName.value.Filename
                            }, function (response) {
                                Q.notifyInfo('Inserted: ' + (response.Inserted || 0) +
                                    ', Updated: ' + (response.Updated || 0));
                                if (response.ErrorList != null && response.ErrorList.length > 0) {
                                    Q.notifyError(response.ErrorList.join(',\r\n '));
                                }
                                _this.dialogClose();
                            });
                        },
                    },
                    {
                        text: 'Cancel',
                        click: function () { return _this.dialogClose(); }
                    }
                ];
            };
            DocumentImportDialog.prototype.getSaveState = function () {
                try {
                    return $.toJSON(this.getSaveEntity());
                }
                catch (e) {
                    return null;
                }
            };
            DocumentImportDialog.prototype.loadResponse = function (data) {
                _super.prototype.loadResponse.call(this, data);
                this.loadedState = this.getSaveState();
            };
            DocumentImportDialog.prototype.loadEntity = function (entity) {
                _super.prototype.loadEntity.call(this, entity);
            };
            DocumentImportDialog.prototype.onSaveSuccess = function (response) {
                _super.prototype.onSaveSuccess.call(this, response);
            };
            DocumentImportDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], DocumentImportDialog);
            return DocumentImportDialog;
        }(Serenity.EntityDialog));
        Flood.DocumentImportDialog = DocumentImportDialog;
    })(Flood = ArmadaPortal.Flood || (ArmadaPortal.Flood = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
var ArmadaPortal;
(function (ArmadaPortal) {
    var Flood;
    (function (Flood) {
        var FloodOrderDialog = /** @class */ (function (_super) {
            __extends(FloodOrderDialog, _super);
            function FloodOrderDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Flood.FloodOrderForm(_this.idPrefix);
                //this.byId('NoteList').closest('.field').hide().end().appendTo(this.byId('TabNotes'));
                _this.documentsGrid = new Flood.FloodOrderDocumentsGrid(_this.byId('DocumentsGrid'));
                ArmadaPortal.DialogUtils.pendingChangesConfirmation(_this.element, function () { return _this.getSaveState() != _this.loadedState; });
                return _this;
            }
            FloodOrderDialog.prototype.getFormKey = function () { return Flood.FloodOrderForm.formKey; };
            FloodOrderDialog.prototype.getIdProperty = function () { return Flood.FloodOrderRow.idProperty; };
            FloodOrderDialog.prototype.getLocalTextPrefix = function () { return Flood.FloodOrderRow.localTextPrefix; };
            FloodOrderDialog.prototype.getNameProperty = function () { return Flood.FloodOrderRow.nameProperty; };
            FloodOrderDialog.prototype.getService = function () { return Flood.FloodOrderService.baseUrl; };
            FloodOrderDialog.prototype.loadEntity = function (entity) {
                _super.prototype.loadEntity.call(this, entity);
                Serenity.TabsExtensions.setDisabled(this.tabs, 'Documents', this.isNewOrDeleted());
                this.documentsGrid.orderId = entity.OrderId;
            };
            FloodOrderDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // these fields are only required in new record mode
                //this.form.Password.element.toggleClass('required', this.isNew())
                //    .closest('.field').find('sup').toggle(this.isNew());
                //this.form.PasswordConfirm.element.toggleClass('required', this.isNew())
                //    .closest('.field').find('sup').toggle(this.isNew());
            };
            FloodOrderDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                // *** Remove default buttons ***
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "save-and-close-button"; }), 1);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "apply-changes-button"; }), 1);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "delete-button"; }), 1);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "undo-delete-button"; }), 1);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "localization-button"; }), 1);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "clone-button"; }), 1);
                var saveButton = {
                    title: Q.text("Submit Order"),
                    cssClass: 'save-and-close-button',
                    onClick: function () {
                        if (!_this.validateForm()) {
                            return;
                        }
                        Q.defaultNotifyOptions.positionClass = "toast-top-center";
                        Q.defaultNotifyOptions.newestOnTop = false;
                        Q.notifyWarning(Q.text("Order is being submitted"), Q.text("Flood Order"));
                        var saveEntity = _this.getSaveEntity();
                        // *** Here we actually call the endpoint ***
                        var servicecall = Flood.FloodOrderService.Create({
                            IsUrgent: saveEntity.IsUrgent,
                            //EmailCertTo: saveEntity.EmailCertTo,
                            EmailCertCC: saveEntity.EmailCertCC,
                            OrderType: saveEntity.OrderType,
                            LoanType: saveEntity.LoanType,
                            Borrower: saveEntity.Borrower,
                            LoanNumber: saveEntity.LoanNumber,
                            Address1Orig: saveEntity.Address1Orig,
                            Address2Orig: saveEntity.Address2Orig,
                            CityOrig: saveEntity.CityOrig,
                            StateOrig: saveEntity.StateOrig,
                            ZipOrig: saveEntity.ZipOrig,
                            ParcelNumber: saveEntity.ParcelNumber,
                            NoteToAnalyst: saveEntity.NoteToAnalyst,
                            UploadDocument: saveEntity.UploadDocument
                        }, function (response) {
                            var options = Q.defaultNotifyOptions;
                            options.tapToDismiss = true;
                            _this.dialogClose();
                            var message = JSON.parse(servicecall.responseText);
                            Q.notifySuccess(message, Q.text("Flood Order"), options);
                        }, {
                            blockUI: true,
                            onError: function (response) {
                                var options = Q.defaultNotifyOptions;
                                options.timeOut = 15000;
                                options.extendedTimeOut = 3000;
                                _this.dialogClose();
                                Q.notifyError(Q.text("Flood Order Error"), Q.text("Flood Order Save Error"), options);
                                var errorcontent = JSON.parse(servicecall.responseText);
                                var message = errorcontent["Error"]["Message"];
                                Q.alert(message);
                            },
                        });
                    }
                };
                var cancelButton = {
                    title: Q.text("Cancel"),
                    cssClass: 'cancel-button',
                    onClick: function () {
                        _this.dialogClose();
                    }
                };
                var letterButton = {
                    title: Q.text("Determination Letter Download"),
                    cssClass: 'export-pdf-button',
                    onClick: function () {
                        Q.postToUrl({
                            url: '~/FloodReport/GetFloodOrderDeterminationLetter/?orderId=' + _this.get_entityId(),
                            params: {},
                            target: '_blank'
                        });
                    }
                };
                buttons.push(saveButton);
                buttons.push(cancelButton);
                buttons.push(letterButton);
                return buttons;
            };
            FloodOrderDialog.prototype.setOrderDetails = function (details) {
                this.form.OrderCreatedByName.value = "Ally Master";
                this.form.OrderAccountId.value = "cfd96059-adbb-e811-a965-000d3a32c8b8";
                this.form.BranchId.value = "21ad0673-adbb-e811-a965-000d3a32c8b8";
            };
            FloodOrderDialog.prototype.getSaveState = function () {
                try {
                    return $.toJSON(this.getSaveEntity());
                }
                catch (e) {
                    return null;
                }
            };
            FloodOrderDialog.prototype.loadResponse = function (data) {
                _super.prototype.loadResponse.call(this, data);
                this.loadedState = this.getSaveState();
            };
            FloodOrderDialog.prototype.onSaveSuccess = function (response) {
                _super.prototype.onSaveSuccess.call(this, response);
                this.showSaveSuccessMessage(response);
                // check that this is an insert
                if (this.isNew()) {
                    //Q.notifySuccess("Order Saved with ID: " + response.EntityId);
                    // you could also open a new dialog
                    // new Northwind.CategoryDialog().loadByIdAndOpenDialog(response.EntityId);
                    // but let's better load inserted record using Retrieve service
                    ArmadaPortal.Flood.FloodOrderService.Retrieve({
                        EntityId: response.EntityId
                    }, function (resp) {
                        Q.notifyInfo("Order Number is: " + resp.Entity.OrderNumber);
                    });
                }
                this.dialogClose();
            };
            FloodOrderDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.deleteButton.hide();
                this.applyChangesButton.hide();
                this.toolbar.findButton('export-pdf-button').toggle(this.isEditMode());
                if (this.isEditMode()) {
                    Serenity.EditorUtils.setReadonly(this.element.find('.editor'), true);
                    this.saveAndCloseButton.hide();
                    // remove required asterisk (*)
                    this.element.find('sup').hide();
                    this.deleteButton.hide();
                    //Serenity.EditorUtils.setReadOnly(this.form.LoanNumber, false);
                    //Serenity.EditorUtils.setReadOnly(this.form.Borrower, false);
                    //Serenity.EditorUtils.setReadOnly(this.form.Borrower2, false);
                    //Serenity.EditorUtils.setReadOnly(this.form.IsUrgent, false);
                    //Serenity.EditorUtils.setReadOnly(this.form.EmailCertTo, false);
                    //Serenity.EditorUtils.setReadOnly(this.form.EmailCertCC, false);
                    //Serenity.EditorUtils.setReadOnly(this.form.NoteToAnalyst, false);
                }
            };
            FloodOrderDialog = __decorate([
                Serenity.Decorators.registerClass()
                //@Serenity.Decorators.filterable()
                ,
                Serenity.Decorators.panel()
                //@Serenity.Decorators.resizable()
                //@Serenity.Decorators.maximizable()
            ], FloodOrderDialog);
            return FloodOrderDialog;
        }(Serenity.EntityDialog));
        Flood.FloodOrderDialog = FloodOrderDialog;
    })(Flood = ArmadaPortal.Flood || (ArmadaPortal.Flood = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
/// <reference path="../Document/DocumentImportDialog.ts" />
var ArmadaPortal;
(function (ArmadaPortal) {
    var Flood;
    (function (Flood) {
        var FloodOrderDocumentDialog = /** @class */ (function (_super) {
            __extends(FloodOrderDocumentDialog, _super);
            function FloodOrderDocumentDialog() {
                return _super.call(this) || this;
            }
            FloodOrderDocumentDialog.prototype.updateInterface = function () {
                //super.updateInterface();
                //Serenity.EditorUtils.setReadOnly(this.form.CustomerID, true);
            };
            FloodOrderDocumentDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], FloodOrderDocumentDialog);
            return FloodOrderDocumentDialog;
        }(Flood.DocumentImportDialog));
        Flood.FloodOrderDocumentDialog = FloodOrderDocumentDialog;
    })(Flood = ArmadaPortal.Flood || (ArmadaPortal.Flood = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
/// <reference path="../Document/DocumentGrid.ts" />
var ArmadaPortal;
(function (ArmadaPortal) {
    var Flood;
    (function (Flood) {
        var FloodOrderDocumentsGrid = /** @class */ (function (_super) {
            __extends(FloodOrderDocumentsGrid, _super);
            function FloodOrderDocumentsGrid(container) {
                return _super.call(this, container) || this;
            }
            FloodOrderDocumentsGrid.prototype.getColumns = function () {
                //return super.getColumns().filter(x => x.field !== fld.CustomerCompanyName);
                return _super.prototype.getColumns.call(this);
            };
            FloodOrderDocumentsGrid.prototype.initEntityDialog = function (itemType, dialog) {
                _super.prototype.initEntityDialog.call(this, itemType, dialog);
                Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
            };
            FloodOrderDocumentsGrid.prototype.addButtonClick = function () {
                this.editItem({ orderId: this.orderId });
            };
            FloodOrderDocumentsGrid.prototype.getInitialTitle = function () {
                return null;
            };
            FloodOrderDocumentsGrid.prototype.getGridCanLoad = function () {
                return _super.prototype.getGridCanLoad.call(this) && !!this.orderId;
            };
            Object.defineProperty(FloodOrderDocumentsGrid.prototype, "orderId", {
                get: function () {
                    return this._orderId;
                },
                set: function (value) {
                    if (this._orderId !== value) {
                        this._orderId = value;
                        this.setEquality('orderId', value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            FloodOrderDocumentsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], FloodOrderDocumentsGrid);
            return FloodOrderDocumentsGrid;
        }(Flood.DocumentGrid));
        Flood.FloodOrderDocumentsGrid = FloodOrderDocumentsGrid;
    })(Flood = ArmadaPortal.Flood || (ArmadaPortal.Flood = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
var ArmadaPortal;
(function (ArmadaPortal) {
    var Flood;
    (function (Flood) {
        var FloodOrderGrid = /** @class */ (function (_super) {
            __extends(FloodOrderGrid, _super);
            //protected floodOrderStatusFilter: Serenity.EnumEditor;
            function FloodOrderGrid(container) {
                return _super.call(this, container) || this;
            }
            FloodOrderGrid.prototype.getColumnsKey = function () { return "ArmadaPortal.FloodOrder"; };
            FloodOrderGrid.prototype.getDialogType = function () { return Flood.FloodOrderDialog; };
            FloodOrderGrid.prototype.getIdProperty = function () { return "OrderId"; };
            FloodOrderGrid.prototype.getNameProperty = function () { return Flood.FloodOrderRow.nameProperty; };
            FloodOrderGrid.prototype.getLocalTextPrefix = function () { return Flood.FloodOrderRow.localTextPrefix; };
            FloodOrderGrid.prototype.getService = function () { return Flood.FloodOrderService.baseUrl; };
            //protected getQuickFilters() {
            //    var filters = super.getQuickFilters();
            //// we create a date-range quick filter, which is a composite
            //// filter with two date time editors
            //var orderDate = this.dateRangeQuickFilter('OrderDate', 'Order Date');
            //orderDate.handler = args => {
            //    var start = args.widget.value;
            //    // to find end date editor, need to search it by its css class among siblings
            //    var end = args.widget.element.nextAll('.s-DateEditor')
            //            .getWidget(Serenity.DateEditor).value;
            //    (args.request as FloodOrderListRequest).StartDate = start;
            //    (args.request as FloodOrderListRequest).EndDate = end;
            //   // active option controls when a filter editor looks active, e.g. its label is blueish
            //    args.active = !Q.isEmptyOrNull(start) || !Q.isEmptyOrNull(end);
            //};
            //filters.push(orderDate);
            //filters.push({
            //    type: Serenity.LookupEditor,
            //    options: {
            //        lookupKey: BranchRow.lookupKey
            //    },
            //    field: 'BranchId',
            //    title: 'Only Orders for Branch',
            //    handler: w => {
            //        (this.view.params as FloodOrderListRequest).BranchId = (w.value);
            //    },
            //    cssClass: 'hidden-xs'
            //});
            //var q = Q.parseQueryString();
            //if (q["floodOrderStatus"]) {
            //    (this.view.params as FloodOrderListRequest).OrderStatusGrouping = (q["floodOrderStatus"]);
            //    //var floodOrderStatusGrouping = Q.tryFirst(filters, x => x.field === "FloodOrderStatusDescription");
            //    //floodOrderStatusGrouping.init = e => {
            //    //    e.element.getWidget(Serenity.EnumEditor).value = q["floodOrderStatus"];
            //    //};
            //}
            //    return filters;
            //}
            FloodOrderGrid.prototype.initEntityDialog = function (itemType, dialog) {
                _super.prototype.initEntityDialog.call(this, itemType, dialog);
                Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
            };
            //protected addButtonClick() {
            //    this.editItem({ OrderId: this.orderId });
            //}
            FloodOrderGrid.prototype.addButtonClick = function () {
                this.editItem({
                    OrderAccountId: 'cfd96059-adbb-e811-a965-000d3a32c8b8',
                    OrderAccountName: 'Alley Bank',
                    BranchId: '21ad0673-adbb-e811-a965-000d3a32c8b8',
                    OrderDate: Q.formatDate(new Date(), 'MM-dd-yyyy')
                });
            };
            FloodOrderGrid.prototype.getButtons = function () {
                var buttons = _super.prototype.getButtons.call(this);
                //buttons.push(Common.PdfExportHelper.createToolButton({
                //    grid: this,
                //    onViewSubmit: () => this.onViewSubmit()
                //}));
                return buttons;
            };
            FloodOrderGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                //var completedOrderDescription = 'Completed';
                //columns.splice(1, 0, {
                //    field: 'View Details',
                //    name: '',
                //    format: ctx => '<a class="inline-action view-details" title="view details"></a>',
                //    width: 24,
                //    minWidth: 24,
                //    maxWidth: 24
                //});
                //columns.splice(2,
                //    0,
                //    {
                //        field: 'Flood Certificate',
                //        name: '',
                //        format: ctx =>
                //            '<a class="inline-action print-flood fa fa-file-pdf-o text-red" title="flood certificate"></a>',
                //        width: 24,
                //        minWidth: 24,
                //        maxWidth: 24
                //    });
                return columns;
            };
            FloodOrderGrid.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                // if user clicks "i" element, e.g. icon
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (target.hasClass('print-flood')) {
                        Q.postToUrl({
                            url: '~/FloodReport/Retrieve/?orderId=' + item.OrderId,
                            params: {},
                            target: '_blank'
                        });
                    }
                    else if (target.hasClass('view-details')) {
                        this.editItem(item.ID);
                    }
                }
            };
            FloodOrderGrid.prototype.createSlickGrid = function () {
                var grid = _super.prototype.createSlickGrid.call(this);
                // need to register this plugin for grouping or you'll have errors
                //grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
                return grid;
            };
            FloodOrderGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.showFooterRow = true;
                //opt.rowHeight = 250;
                return opt;
            };
            FloodOrderGrid.prototype.usePager = function () {
                return true;
            };
            FloodOrderGrid.prototype.createQuickFilters = function () {
                _super.prototype.createQuickFilters.call(this);
                //this.floodOrderStatusFilter = this.findQuickFilter(Serenity.EnumEditor, fld.FloodOrderStatus);
            };
            FloodOrderGrid.prototype.set_floodOrderStatusFilter = function (value) {
                // this.floodOrderStatusFilter.value = value == null ? '' : value.toString();
            };
            Object.defineProperty(FloodOrderGrid.prototype, "accountId", {
                get: function () {
                    return this._accountId;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FloodOrderGrid.prototype, "branchId", {
                get: function () {
                    return this._branchId;
                },
                set: function (value) {
                    if (this._branchId !== value) {
                        this._branchId = value;
                        this.setEquality('BranchId', value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            FloodOrderGrid = __decorate([
                Serenity.Decorators.registerClass()
                //@Serenity.Decorators.filterable()
            ], FloodOrderGrid);
            return FloodOrderGrid;
        }(Serenity.EntityGrid));
        Flood.FloodOrderGrid = FloodOrderGrid;
    })(Flood = ArmadaPortal.Flood || (ArmadaPortal.Flood = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
var ArmadaPortal;
(function (ArmadaPortal) {
    var Flood;
    (function (Flood) {
        var PhoneEditor = /** @class */ (function (_super) {
            __extends(PhoneEditor, _super);
            function PhoneEditor(input) {
                var _this = _super.call(this, input) || this;
                _this.addValidationRule(_this.uniqueName, function (e) {
                    var value = Q.trimToNull(_this.get_value());
                    if (value == null) {
                        return null;
                    }
                    return PhoneEditor_1.validate(value, _this.multiple);
                });
                input.bind('change', function (e) {
                    if (!Serenity.WX.hasOriginalEvent(e)) {
                        return;
                    }
                    _this.formatValue();
                });
                input.bind('blur', function (e) {
                    if (_this.element.hasClass('valid')) {
                        _this.formatValue();
                    }
                });
                return _this;
            }
            PhoneEditor_1 = PhoneEditor;
            PhoneEditor.prototype.formatValue = function () {
                this.element.val(this.getFormattedValue());
            };
            PhoneEditor.prototype.getFormattedValue = function () {
                var value = this.element.val();
                if (this.multiple) {
                    return PhoneEditor_1.formatMulti(value, PhoneEditor_1.formatPhone);
                }
                return PhoneEditor_1.formatPhone(value);
            };
            PhoneEditor.prototype.get_value = function () {
                return this.getFormattedValue();
            };
            PhoneEditor.prototype.set_value = function (value) {
                this.element.val(value);
            };
            PhoneEditor.validate = function (phone, isMultiple) {
                var valid = (isMultiple ? PhoneEditor_1.isValidMulti(phone, PhoneEditor_1.isValidPhone) : PhoneEditor_1.isValidPhone(phone));
                if (valid) {
                    return null;
                }
                return Q.text((isMultiple ? 'Validation.NorthwindPhoneMultiple' : 'Validation.NorthwindPhone'));
            };
            PhoneEditor.isValidPhone = function (phone) {
                if (Q.isEmptyOrNull(phone)) {
                    return false;
                }
                phone = Q.replaceAll(Q.replaceAll(phone, ' ', ''), '-', '');
                if (phone.length < 10) {
                    return false;
                }
                if (Q.startsWith(phone, '0')) {
                    phone = phone.substring(1);
                }
                if (Q.startsWith(phone, '(') && phone.charAt(4) === ')') {
                    phone = phone.substr(1, 3) + phone.substring(5);
                }
                if (phone.length !== 10) {
                    return false;
                }
                if (Q.startsWith(phone, '0')) {
                    return false;
                }
                for (var i = 0; i < phone.length; i++) {
                    var c = phone.charAt(i);
                    if (c < '0' || c > '9') {
                        return false;
                    }
                }
                return true;
            };
            PhoneEditor.formatPhone = function (phone) {
                if (!PhoneEditor_1.isValidPhone(phone)) {
                    return phone;
                }
                phone = Q.replaceAll(Q.replaceAll(Q.replaceAll(Q.replaceAll(phone, ' ', ''), '-', ''), '(', ''), ')', '');
                if (Q.startsWith(phone, '0')) {
                    phone = phone.substring(1);
                }
                phone = '(' + phone.substr(0, 3) + ') ' + phone.substr(3, 3) + '-' + phone.substr(6, 2) + phone.substr(8, 2);
                return phone;
            };
            PhoneEditor.formatMulti = function (phone, format) {
                var phones = Q.replaceAll(phone, String.fromCharCode(59), String.fromCharCode(44)).split(String.fromCharCode(44));
                var result = '';
                for (var _i = 0, phones_1 = phones; _i < phones_1.length; _i++) {
                    var x = phones_1[_i];
                    var s = Q.trimToNull(x);
                    if (s == null) {
                        continue;
                    }
                    if (result.length > 0) {
                        result += ', ';
                    }
                    result += format(s);
                }
                return result;
            };
            PhoneEditor.isValidMulti = function (phone, check) {
                if (Q.isEmptyOrNull(phone)) {
                    return false;
                }
                var phones = Q.replaceAll(phone, String.fromCharCode(59), String.fromCharCode(44)).split(String.fromCharCode(44));
                var anyValid = false;
                for (var $t1 = 0; $t1 < phones.length; $t1++) {
                    var x = phones[$t1];
                    var s = Q.trimToNull(x);
                    if (s == null) {
                        continue;
                    }
                    if (!check(s)) {
                        return false;
                    }
                    anyValid = true;
                }
                if (!anyValid) {
                    return false;
                }
                return true;
            };
            var PhoneEditor_1;
            __decorate([
                Serenity.Decorators.option()
            ], PhoneEditor.prototype, "multiple", void 0);
            PhoneEditor = PhoneEditor_1 = __decorate([
                Serenity.Decorators.registerEditor()
            ], PhoneEditor);
            return PhoneEditor;
        }(Serenity.StringEditor));
        Flood.PhoneEditor = PhoneEditor;
    })(Flood = ArmadaPortal.Flood || (ArmadaPortal.Flood = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
var ArmadaPortal;
(function (ArmadaPortal) {
    var Membership;
    (function (Membership) {
        var ChangePasswordPanel = /** @class */ (function (_super) {
            __extends(ChangePasswordPanel, _super);
            function ChangePasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ChangePasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.w('ConfirmPassword', Serenity.PasswordEditor).value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ChangePassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ChangePassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ChangePasswordPanel.prototype.getFormKey = function () { return Membership.ChangePasswordForm.formKey; };
            ChangePasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ChangePasswordPanel);
            return ChangePasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ChangePasswordPanel = ChangePasswordPanel;
    })(Membership = ArmadaPortal.Membership || (ArmadaPortal.Membership = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
var ArmadaPortal;
(function (ArmadaPortal) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordPanel = /** @class */ (function (_super) {
            __extends(ForgotPasswordPanel, _super);
            function ForgotPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ForgotPasswordForm(_this.idPrefix);
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ForgotPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ForgotPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ForgotPasswordPanel.prototype.getFormKey = function () { return Membership.ForgotPasswordForm.formKey; };
            ForgotPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ForgotPasswordPanel);
            return ForgotPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ForgotPasswordPanel = ForgotPasswordPanel;
    })(Membership = ArmadaPortal.Membership || (ArmadaPortal.Membership = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
var ArmadaPortal;
(function (ArmadaPortal) {
    var Membership;
    (function (Membership) {
        var ResetPasswordPanel = /** @class */ (function (_super) {
            __extends(ResetPasswordPanel, _super);
            function ResetPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ResetPasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    request.Token = _this.byId('Token').val();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ResetPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ResetPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/Account/Login');
                            });
                        }
                    });
                });
                return _this;
            }
            ResetPasswordPanel.prototype.getFormKey = function () { return Membership.ResetPasswordForm.formKey; };
            ResetPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ResetPasswordPanel);
            return ResetPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ResetPasswordPanel = ResetPasswordPanel;
    })(Membership = ArmadaPortal.Membership || (ArmadaPortal.Membership = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
var ArmadaPortal;
(function (ArmadaPortal) {
    var Membership;
    (function (Membership) {
        var SignUpPanel = /** @class */ (function (_super) {
            __extends(SignUpPanel, _super);
            function SignUpPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.SignUpForm(_this.idPrefix);
                _this.form.ConfirmEmail.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmEmail.value !== _this.form.Email.value) {
                        return Q.text('Validation.EmailConfirm');
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.Password.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/SignUp'),
                        request: {
                            Email: _this.form.Email.value,
                            Password: _this.form.Password.value
                        },
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.SignUp.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            SignUpPanel.prototype.getFormKey = function () { return Membership.SignUpForm.formKey; };
            SignUpPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], SignUpPanel);
            return SignUpPanel;
        }(Serenity.PropertyPanel));
        Membership.SignUpPanel = SignUpPanel;
    })(Membership = ArmadaPortal.Membership || (ArmadaPortal.Membership = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
var _Ext;
(function (_Ext) {
    var AuditLogActionTypeFormatter = /** @class */ (function () {
        function AuditLogActionTypeFormatter() {
        }
        AuditLogActionTypeFormatter_1 = AuditLogActionTypeFormatter;
        AuditLogActionTypeFormatter.format = function (ctx) {
            var item = ctx.item;
            var klass = '';
            if (item.ActionType == _Ext.AuditActionType.Update) {
                klass = 'warning';
            }
            else if (item.ActionType == _Ext.AuditActionType.Delete) {
                klass = 'danger';
            }
            else {
                klass = 'default';
            }
            return "<span class=\"label label-" + klass + "\">" + _Ext.AuditActionType[item.ActionType] + "</span>";
        };
        AuditLogActionTypeFormatter.prototype.format = function (ctx) {
            return AuditLogActionTypeFormatter_1.format(ctx);
        };
        var AuditLogActionTypeFormatter_1;
        AuditLogActionTypeFormatter = AuditLogActionTypeFormatter_1 = __decorate([
            Serenity.Decorators.registerFormatter([Serenity.ISlickFormatter])
        ], AuditLogActionTypeFormatter);
        return AuditLogActionTypeFormatter;
    }());
    _Ext.AuditLogActionTypeFormatter = AuditLogActionTypeFormatter;
})(_Ext || (_Ext = {}));
var _Ext;
(function (_Ext) {
    var DialogBase = /** @class */ (function (_super) {
        __extends(DialogBase, _super);
        function DialogBase(opt) {
            var _this = _super.call(this, opt) || this;
            _this.isReadOnly = false;
            _this.element.fadeTo(0, 0);
            if (_this.get_ExtDialogOptions().PendingChangesConfirmation == true) {
                _Ext.DialogUtils.pendingChangesConfirmation(_this.element, function () { return _this.getSaveState() != _this.loadedState; });
            }
            return _this;
        }
        DialogBase.prototype.get_ExtDialogOptions = function () { return q.DefaultEntityDialogOptions; };
        DialogBase.prototype.updateInterface = function () {
            _super.prototype.updateInterface.call(this);
            this.setReadOnly(this.isReadOnly);
            if (this.get_ExtDialogOptions().HideCategoyLinksBar == true) {
                this.element.find('.category-links').hide();
            }
        };
        DialogBase.prototype.onDialogOpen = function () {
            var _this = this;
            _super.prototype.onDialogOpen.call(this);
            if (this.get_ExtDialogOptions().AutoFitContentArea == true) {
                this.fullContentArea();
            }
            //temporary fix for set grid editor height
            setTimeout(function () { _this.onAfterSetDialogSize(); }, 200);
            this.element.fadeTo(100, 1);
        };
        DialogBase.prototype.onDialogClose = function () {
            _super.prototype.onDialogClose.call(this);
            this.onAfterDialogClose(this.entity);
        };
        DialogBase.prototype.setReadOnly = function (value) {
            this.isReadOnly = value;
            if (this.isReadOnly == true) {
                this.saveAndCloseButton.toggleClass('disabled', this.isReadOnly);
                this.applyChangesButton.toggleClass('disabled', this.isReadOnly);
                this.deleteButton.toggleClass('disabled', this.isReadOnly);
                this.cloneButton.toggleClass('disabled', this.isReadOnly);
                this.undeleteButton.toggleClass('disabled', this.isReadOnly);
                this.toolbar.findButton('btn-save-and-close').addClass('disabled');
                this.toolbar.findButton('btn-replace-row').addClass('disabled');
                // remove required asterisk (*)
                this.element.find('sup').toggle(this.isReadOnly);
                for (var editor in this.form) {
                    if (this.form[editor].widgetName) {
                        Serenity.EditorUtils.setReadOnly(this.form[editor], this.isReadOnly);
                    }
                }
            }
        };
        DialogBase.prototype.getToolbarButtons = function () {
            var _this = this;
            var buttons = _super.prototype.getToolbarButtons.call(this);
            var extOptions = this.get_ExtDialogOptions();
            if (extOptions.ShowSaveAndNewButtonInToolbar == true)
                buttons.push({
                    title: 'Save & New',
                    icon: 'fa fa-save',
                    cssClass: 'btn-save-and-close',
                    onClick: function () {
                        _this.save(function (response) {
                            _this.loadEntity({});
                        });
                    }
                });
            if (extOptions.ShowCloseButtonInToolbar == true)
                buttons.push({
                    title: 'Close',
                    icon: 'fa fa-close',
                    cssClass: 'btn-close',
                    onClick: function () {
                        _this.dialogClose();
                    }
                });
            if (extOptions.ShowRefreshButtonInToolbar == true)
                buttons.push({
                    title: 'Refresh',
                    icon: 'fa fa-refresh',
                    onClick: function () {
                        _this.onRefreshClick();
                    }
                });
            try {
                if (extOptions.ShowReplaceRowButtonInToolbar == true && Q.Authorization.hasPermission('Administration:ReplaceRow')) {
                    if (Q.isEmptyOrNull(this.getService()) == false) {
                        buttons.push({
                            title: 'Replace',
                            icon: 'fa fa-trash-o',
                            cssClass: 'btn-replace-row',
                            onClick: function () {
                                var idProperty = _this.getIdProperty();
                                var nameProperty = _this.getNameProperty();
                                var entityId = _this.entity[idProperty];
                                var entityName = _this.entity[nameProperty];
                                if (entityId) {
                                    Q.serviceRequest(_this.getService() + '/List', {}, function (response) {
                                        var entityList = response.Entities;
                                        var dlg = new _Ext.ReplaceRowDialog({
                                            FormKey: _this.getFormKey(),
                                            IdProperty: idProperty,
                                            NameProperty: nameProperty,
                                            EntityTypeTitle: _this.getEntitySingular(),
                                            DeletedEntityName: entityName,
                                            DeletedEntityId: entityId,
                                        }, entityList);
                                        dlg.dialogOpen();
                                        _this.dialogClose();
                                    });
                                }
                            }
                        });
                    }
                }
                if (extOptions.ShowChangeLogButtonInToolbar == true && Q.Authorization.hasPermission('Administration:AuditLog')) {
                    buttons.push({
                        title: 'Change Log',
                        icon: 'fa fa-history',
                        onClick: function () {
                            var entityId = _this.entity[_this.getIdProperty()];
                            if (entityId) {
                                var dlg = new _Ext.AuditLogViewerDialog({ FormKey: _this.getFormKey(), EntityId: entityId });
                                dlg.dialogOpen();
                            }
                            else {
                                Q.alert('No change log found for this entity.');
                            }
                        }
                    });
                }
                //clone button click event customization
                var cloneButton = Q.tryFirst(buttons, function (x) { return x.cssClass == 'clone-button'; });
                cloneButton.onClick = function () {
                    if (!_this.isEditMode()) {
                        return;
                    }
                    var cloneEntity = _this.getCloningEntity();
                    Serenity.Widget.create({
                        type: ss.getInstanceType(_this),
                        init: function (dlg) {
                            _this.parentGrid.initDialog(dlg);
                            dlg.loadEntityAndOpenDialog(cloneEntity, null);
                        }
                    });
                    _this.dialogClose();
                };
            }
            catch (e) { }
            return buttons;
        };
        DialogBase.prototype.onRefreshClick = function () {
            this.reloadById();
        };
        DialogBase.prototype.getSaveState = function () {
            try {
                return $.toJSON(this.getSaveEntity());
            }
            catch (e) {
                return null;
            }
        };
        DialogBase.prototype.onSaveSuccess = function (response) {
            _super.prototype.onSaveSuccess.call(this, response);
            isPageRefreshRequired = true;
            //Q.reloadLookup(this.getLookupKey());
        };
        DialogBase.prototype.loadResponse = function (data) {
            _super.prototype.loadResponse.call(this, data);
            if (this.get_ExtDialogOptions().PendingChangesConfirmation == true) {
                this.loadedState = this.getSaveState();
            }
        };
        DialogBase.prototype.maximize = function () {
            var _this = this;
            this.element.closest(".ui-dialog").find(".ui-dialog-titlebar-maximize").click();
            setTimeout(function () {
                var dialogElement = _this.element ? _this.element.closest(".ui-dialog") : $(".ui-dialog");
                var dialogHeight = dialogElement.height();
                var titleBarHeight = dialogElement.find('.ui-dialog-title').height() || 20;
                var toolBarHeight = dialogElement.find('.s-DialogToolbar.s-Toolbar').height() || 0;
                var tabBarHeight = dialogElement.find('.nav.nav-tabs.property-tabs').height() || 0;
                var categoryLinkHeight = dialogElement.find('.category-links').height() || 0;
                _this.element.find('.categories').height(dialogHeight - titleBarHeight - toolBarHeight - tabBarHeight - categoryLinkHeight - 40);
            }, 100);
        };
        DialogBase.prototype.fullContentArea = function () {
            this.setDialogSize();
        };
        // set the dialog size relative to content area (to shrink use negative value)
        DialogBase.prototype.setDialogSize = function (width, height, top, left, $content) {
            var _this = this;
            if (!$content) {
                $content = $('section.content');
            }
            if ($content.length == 0) {
                $content = $('.content-wrapper');
            }
            var dialogElement = this.element ? this.element.closest(".ui-dialog") : $(".ui-dialog");
            if ($content.length > 0 && dialogElement.length > 0) {
                var dialogWidth = $content.width() + 30 + (width || 0);
                var dialogHeight = $content.height() + (height || 30);
                this.element.dialog("option", "width", dialogWidth);
                this.element.dialog("option", "height", dialogHeight);
                var titleBarHeight = dialogElement.find('.ui-dialog-title').height() || 20;
                var toolBarHeight = dialogElement.find('.s-DialogToolbar.s-Toolbar').height() || 0;
                var tabBarHeight = dialogElement.find('.nav.nav-tabs.property-tabs').height() || 0;
                var categoryLinkHeight = dialogElement.find('.category-links').height() || 0;
                this.element.find('.categories').height(dialogHeight - titleBarHeight - toolBarHeight - tabBarHeight - categoryLinkHeight - 40);
                dialogElement.css({
                    left: $content.position().left + (left || 0),
                    top: (top || 50),
                });
            }
            setTimeout(function () {
                _this.onAfterSetDialogSize();
            }, 200);
        };
        DialogBase.prototype.onAfterSetDialogSize = function () { };
        DialogBase.prototype.onAfterDialogClose = function (entity) { };
        DialogBase = __decorate([
            Serenity.Decorators.responsive(),
            Serenity.Decorators.maximizable()
        ], DialogBase);
        return DialogBase;
    }(Serenity.EntityDialog));
    _Ext.DialogBase = DialogBase;
})(_Ext || (_Ext = {}));
/// <reference path="../Bases/DialogBase.ts" />
var _Ext;
(function (_Ext) {
    var AuditLogDialog = /** @class */ (function (_super) {
        __extends(AuditLogDialog, _super);
        function AuditLogDialog() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.form = new _Ext.AuditLogForm(_this.idPrefix);
            return _this;
        }
        AuditLogDialog.prototype.getFormKey = function () { return _Ext.AuditLogForm.formKey; };
        AuditLogDialog.prototype.getIdProperty = function () { return _Ext.AuditLogRow.idProperty; };
        AuditLogDialog.prototype.getLocalTextPrefix = function () { return _Ext.AuditLogRow.localTextPrefix; };
        AuditLogDialog.prototype.getNameProperty = function () { return _Ext.AuditLogRow.nameProperty; };
        AuditLogDialog.prototype.getService = function () { return _Ext.AuditLogService.baseUrl; };
        AuditLogDialog.prototype.afterLoadEntity = function () {
            _super.prototype.afterLoadEntity.call(this);
            usingJsonDiffPatch();
            //showing diff visually
            var left = JSON.parse(this.entity.OldEntity);
            if (left) {
                if (left.PlantJson) {
                    left.PlantInfo = JSON.parse(left.PlantJson);
                    delete (left.PlantJson);
                }
                delete (left.Id);
                delete (left.IDate);
                delete (left.IUser);
                delete (left.EDate);
                delete (left.EUser);
            }
            var right = JSON.parse(this.entity.NewEntity);
            if (right) {
                if (right.PlantJson) {
                    right.PlantInfo = JSON.parse(right.PlantJson);
                    delete (right.PlantJson);
                }
            }
            var delta = jsondiffpatch.diff(left, right);
            // beautiful html diff
            this.form.Differences.value = jsondiffpatch.formatters.html.format(delta);
        };
        AuditLogDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], AuditLogDialog);
        return AuditLogDialog;
    }(_Ext.DialogBase));
    _Ext.AuditLogDialog = AuditLogDialog;
})(_Ext || (_Ext = {}));
/// <reference path="../_q/_q.d.ts" />
var _Ext;
(function (_Ext) {
    var GridBase = /** @class */ (function (_super) {
        __extends(GridBase, _super);
        function GridBase(container, options) {
            var _this = _super.call(this, container, options) || this;
            _this.isAutosized = false;
            _this.isChildGrid = false;
            _this.nextRowNumber = 1;
            _this.rowSelection = new Serenity.GridRowSelectionMixin(_this);
            _this.slickContainer.fadeTo(0, 0);
            return _this;
        }
        GridBase.prototype.get_ExtGridOptions = function () { return q.DefaultMainGridOptions; };
        GridBase.prototype.markupReady = function () {
            var _this = this;
            _super.prototype.markupReady.call(this);
            setTimeout(function () {
                if (_this.isAutosized == false) {
                    if (_this.get_ExtGridOptions().AutoColumnSize == true) {
                        _this.resizeAllCulumn();
                    }
                    _this.slickContainer.fadeTo(100, 1);
                }
            }, 100);
        };
        GridBase.prototype.getButtons = function () {
            var _this = this;
            var buttons = _super.prototype.getButtons.call(this);
            var reportRequest = this.getReportRequest();
            if (reportRequest.ListExcelServiceMethodName) {
                buttons.push(_Ext.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: this.getService() + '/' + reportRequest.ListExcelServiceMethodName,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
            }
            if (reportRequest.ReportKey) {
                buttons.push({
                    title: 'Export to PDF',
                    icon: 'fa fa-file-pdf-o',
                    onClick: function () {
                        _Ext.ReportHelper.execute({ reportKey: reportRequest.ReportKey, params: { request: _this.getReportRequest() } });
                    }
                });
                buttons.push({
                    title: 'View as Report',
                    icon: 'fa fa-html5',
                    onClick: function () {
                        _Ext.ReportHelper.execute({ reportKey: reportRequest.ReportKey, params: { request: _this.getReportRequest() }, extension: 'html' });
                    }
                });
            }
            else if (reportRequest.ReportServiceMethodName) {
                buttons.push({
                    title: 'View as Report',
                    icon: 'fa fa-eye',
                    onClick: function () {
                        Q.postToService({ service: Q.resolveUrl(_this.getService() + '/' + reportRequest.ReportServiceMethodName), request: _this.getReportRequest(), target: '_blank' });
                    }
                });
            }
            else {
                buttons.push(_Ext.PdfExportHelper.createToolButton({
                    grid: this,
                    tableOptions: { theme: 'grid' },
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
            }
            return buttons;
        };
        GridBase.prototype.getReportRequest = function () {
            var view = this.getView();
            var request = Q.deepClone(view ? view.params : {}); //as _Ext.ReportRequest;
            request.ReportServiceMethodName = null; // if some value found in this property then "view as report" button will appear
            request.ReportKey = null; // if some value found in this property then "export to pdf" button will appear
            request.ListExcelServiceMethodName = null; // if some value found in this property then "export to xls" button will appear
            request.EqualityFilterWithTextValue = {};
            if (view) {
                var quickFilters = this.getQuickFilters();
                for (var _i = 0, quickFilters_1 = quickFilters; _i < quickFilters_1.length; _i++) {
                    var quickFilter = quickFilters_1[_i];
                    var filterValue = request.EqualityFilter[quickFilter.field];
                    if (filterValue && filterValue.length > 0) {
                        if (quickFilter.options.lookupKey) {
                            var lookup = Q.getLookup(quickFilter.options.lookupKey);
                            request.EqualityFilterWithTextValue[quickFilter.title] = lookup.itemById[filterValue][lookup.textField];
                        }
                        else if (quickFilter.options.enumKey) {
                            var enumKey = quickFilter.options.enumKey;
                            var enumValue = Q.toId(filterValue);
                            request.EqualityFilterWithTextValue[quickFilter.title] = Serenity.EnumFormatter.format(Serenity.EnumTypeRegistry.get(enumKey), enumValue);
                        }
                        else {
                            request.EqualityFilterWithTextValue[quickFilter.title] = filterValue;
                        }
                    }
                    else if (quickFilter.type == Serenity.DateEditor) {
                        var qf = this.findQuickFilter(Serenity.DateEditor, quickFilter.field);
                        var dateFrom = qf.element.val();
                        var dateTo = qf.element.siblings('input').val();
                        var filterText = '';
                        if (!Q.isEmptyOrNull(dateFrom))
                            filterText = 'From ' + dateFrom;
                        if (!Q.isEmptyOrNull(dateTo))
                            filterText = filterText + ' To ' + dateTo;
                        if (!Q.isEmptyOrNull(filterText)) {
                            request.EqualityFilterWithTextValue[quickFilter.title] = filterText;
                        }
                        else if (this.get_ExtGridOptions().ShowAnyInEqualityFilterWithTextValue == true) {
                            request.EqualityFilterWithTextValue[quickFilter.title] = 'all';
                        }
                    }
                    else if (this.get_ExtGridOptions().ShowAnyInEqualityFilterWithTextValue == true) {
                        request.EqualityFilterWithTextValue[quickFilter.title] = 'all';
                    }
                }
            }
            return request;
        };
        GridBase.prototype.getColumns = function () {
            var _this = this;
            var columns = _super.prototype.getColumns.call(this);
            var isEditable = this.getSlickOptions().editable;
            var extOptions = this.get_ExtGridOptions();
            columns.forEach(function (c) {
                if (extOptions.AutoColumnSize == true) {
                    c.width = c.minWidth || c.width || 50;
                    c.cssClass = c.cssClass || '';
                    if (c.sourceItem) {
                        if (c.sourceItem.filteringType == "Lookup") {
                            c.cssClass += ' align-left';
                            if (c.sourceItem.editorType == "Lookup" && !c.sourceItem.editorParams.autoComplete) {
                                c.lookup = Q.getLookup(c.sourceItem.editorParams.lookupKey);
                                c.formatter = function (row, cell, value, columnDef, dataContext) {
                                    var item = columnDef.lookup.itemById[value];
                                    if (item)
                                        return item[columnDef.lookup.textField];
                                    else
                                        return '-';
                                };
                            }
                            c.width = c.minWidth > 100 ? c.minWidth : 100;
                        }
                        else if (c.sourceItem.formatterType == "Enum") {
                            //c.cssClass += ' align-center';
                            c.formatter = function (row, cell, value, columnDef, dataContext) {
                                var enumKey = columnDef.sourceItem.editorParams.enumKey;
                                var text = Serenity.EnumFormatter.format(Serenity.EnumTypeRegistry.get(enumKey), Q.toId(value));
                                if (text)
                                    return text;
                                else
                                    return '-';
                            };
                        }
                        else if (c.sourceItem.formatterType == "Date") {
                            c.cssClass += ' align-center';
                            c.width = c.minWidth > 99 ? c.minWidth : 99;
                        }
                        else if (c.sourceItem.formatterType == "DateTime") {
                            c.cssClass += ' align-center';
                            c.width = c.minWidth > 140 ? c.minWidth : 140;
                        }
                        else if (c.sourceItem.formatterType == "Number") {
                            c.cssClass += ' align-right';
                            if (c.sourceItem.editorType == "Decimal") {
                                var formatSrt_1 = '#,##0.00';
                                if (c.sourceItem.editorParams) {
                                    var decimals = c.sourceItem.editorParams['decimals'];
                                    if (decimals) {
                                        formatSrt_1 = '#,##0.';
                                        for (var i = 0; i < decimals; i++) {
                                            formatSrt_1 += '0';
                                        }
                                    }
                                    else if (c.sourceItem.editorParams['minValue']) {
                                        var splitedMinValue = c.sourceItem.editorParams['minValue'].split('.');
                                        if (splitedMinValue.length > 1) {
                                            formatSrt_1 = '#,##0.' + splitedMinValue[1];
                                        }
                                        else {
                                            formatSrt_1 = '#,##0';
                                        }
                                    }
                                }
                                c.format = function (ctx) { return Serenity.NumberFormatter.format(ctx.value, formatSrt_1); };
                            }
                        }
                        else if (c.sourceItem.formatterType == "Checkbox") {
                            c.cssClass += ' align-center';
                        }
                        else {
                            c.cssClass += ' align-left';
                            c.width = c.minWidth > 99 ? c.minWidth : 99;
                        }
                    }
                    else {
                        c.cssClass += ' align-left';
                        c.width = c.minWidth > 99 ? c.minWidth : 99;
                    }
                }
                //editor
                if (isEditable == true && c.sourceItem && c.sourceItem.readOnly != true) {
                    usingSlickGridEditors();
                    if (q.useSerenityInlineEditors) {
                        c.editor = SerenityInlineEditor;
                    }
                    else {
                        if (c.sourceItem.editorType == "Lookup" || c.sourceItem.editorType == "Enum") {
                            c.editor = Slick['Editors']['Select2'];
                            c.width = c.minWidth > 160 ? c.minWidth : 160;
                        }
                        else if (c.sourceItem.editorType == "Date") {
                            c.editor = Slick['Editors']['Date'];
                        }
                        else if (c.sourceItem.editorType == "Boolean") {
                            c.editor = Slick['Editors']['Checkbox'];
                        }
                        else if (c.sourceItem.editorType == "Integer") {
                            c.editor = Slick['Editors']['Integer'];
                        }
                        else if (c.sourceItem.editorType == "Decimal") {
                            c.editor = Slick['Editors']['Float'];
                        }
                        else if (c.sourceItem.editorType == "YesNoSelect") {
                            c.editor = Slick['Editors']['YesNoSelect'];
                        }
                        else if (c.sourceItem.editorType == "PercentComplete") {
                            c.editor = Slick['Editors']['PercentComplete'];
                        }
                        else if (c.sourceItem.editorType == "LongText") {
                            c.editor = Slick['Editors']['LongText'];
                        }
                        else {
                            c.editor = Slick['Editors']['Text'];
                        }
                    }
                }
            });
            columns.unshift({
                field: 'RowNum',
                name: '#',
                cssClass: 'rownum-column',
                headerCssClass: 'align-center',
                width: 40,
                minWidth: 40,
                maxWidth: 40,
                visible: extOptions.ShowRowNumberColumn,
                format: function (ctx) {
                    if (!ctx.item.RowNum) {
                        ctx.item.RowNum = _this.nextRowNumber++;
                    }
                    return String(ctx.item.RowNum);
                }
            });
            if (extOptions.ShowInlineActionsColumn == true) {
                var inlineActionsColumnWidth = 0;
                var inlineActionsColumnContent_1 = '';
                if (extOptions.ShowEditInlineButtun == true) {
                    inlineActionsColumnWidth += 25;
                    inlineActionsColumnContent_1 += '<a class="inline-actions view-details" title="edit/view details" style="padding-right: 10px;"><i class="view-details fa fa-pencil-square-o"></i></a>';
                }
                if (extOptions.ShowDeleteInlineButtun == true) {
                    inlineActionsColumnWidth += 25;
                    inlineActionsColumnContent_1 += '<a class="inline-actions delete-row" title="delete"><i class="delete-row fa fa-trash-o text-red"></i></a>';
                }
                columns.unshift({
                    field: 'inline-actions',
                    name: '',
                    cssClass: 'inline-actions-column',
                    width: inlineActionsColumnWidth,
                    minWidth: inlineActionsColumnWidth,
                    maxWidth: inlineActionsColumnWidth,
                    format: function (ctx) { return inlineActionsColumnContent_1; }
                });
            }
            if (extOptions.ShowRowSelectionCheckboxColumn == true) {
                var rowSelectionCol = Serenity.GridRowSelectionMixin.createSelectColumn(function () { return _this.rowSelection; });
                rowSelectionCol.width = rowSelectionCol.minWidth = rowSelectionCol.maxWidth = 25;
                columns.unshift(rowSelectionCol);
            }
            if (this.element.hasClass('RowSelectionCheckGrid')) { //show checkbox column in picker mode
                var options = this.options;
                if (!options.multiple && !options.gridType) {
                    Q.notifyWarning("Could not determine multiple/single. Probably there is no 'options' parameter in grid's constructor.");
                }
                if (options.multiple == true) {
                    var rowSelectionCol = Serenity.GridRowSelectionMixin.createSelectColumn(function () { return _this.rowSelection; });
                    rowSelectionCol.width = rowSelectionCol.minWidth = rowSelectionCol.maxWidth = 25;
                    columns.unshift(rowSelectionCol);
                }
                else {
                    columns.unshift({
                        field: 'row-selection',
                        name: '',
                        cssClass: 'inline-actions-column',
                        width: 66,
                        minWidth: 66,
                        maxWidth: 66,
                        format: function (ctx) { return '<a class="inline-actions select-row"><i class="select-row fa fa-check"></i> Select</a>'; }
                    });
                }
            }
            return columns;
        };
        GridBase.prototype.createSlickGrid = function () {
            var grid = _super.prototype.createSlickGrid.call(this);
            usingSlickAutoColumnSize();
            if (Slick.AutoColumnSize) {
                this.autoColumnSizePlugin = new Slick.AutoColumnSize();
                grid.registerPlugin(this.autoColumnSizePlugin);
            }
            grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
            return grid;
        };
        GridBase.prototype.resetColumns = function (columns) {
            var _this = this;
            this.slickContainer.fadeTo(0, 0);
            this.slickGrid.setColumns(columns);
            setTimeout(function () {
                if (_this.get_ExtGridOptions().AutoColumnSize == true) {
                    _this.resizeAllCulumn();
                }
                _this.slickContainer.fadeTo(100, 1);
            }, 100);
        };
        GridBase.prototype.resizeAllCulumn = function () {
            this.isAutosized = true;
            var gridContainerWidth = this.slickContainer.width();
            if (gridContainerWidth > 0) { }
            else {
                gridContainerWidth = this.element.closest('.s-Dialog').width() - 55;
            }
            if (gridContainerWidth > 0) { }
            else {
                gridContainerWidth = this.element.closest('.s-Panel').width() - 55;
            }
            if (gridContainerWidth > 0) { }
            else {
                gridContainerWidth = $('section.content').width() - 75;
            }
            this.slickGrid.setOptions({ forceFitColumns: false });
            var allVisibleColumns = this.autoColumnSizePlugin.resizeAllColumns().filter(function (f) { return f.visible != false; }); // this.allColumns;
            var allVisibleColumnWidth = 0;
            allVisibleColumns.map(function (m) { return m.width; }).forEach(function (e) { return allVisibleColumnWidth += e; });
            if (allVisibleColumnWidth > gridContainerWidth) {
                this.autoColumnSizePlugin.resizeAllColumns();
            }
            else if (allVisibleColumnWidth < gridContainerWidth) {
                this.autoColumnSizePlugin.resizeAllColumns();
                var fixedSizeColumns_1 = [];
                var resizableColumns_1 = [];
                allVisibleColumns.forEach(function (c) {
                    if (c.minWidth == c.maxWidth) {
                        fixedSizeColumns_1.push(c);
                        c.width = c.maxWidth;
                    }
                    else if (c.sourceItem) {
                        if (c.sourceItem.formatterType == String("Number")) {
                            fixedSizeColumns_1.push(c);
                        }
                        else if (c.sourceItem.filteringType == String("Enum")) {
                            fixedSizeColumns_1.push(c);
                            if (c.width < 80)
                                c.width = 80;
                        }
                        else if (c.sourceItem.formatterType == String("Date")) {
                            fixedSizeColumns_1.push(c);
                            if (c.width < 80)
                                c.width = 80;
                        }
                        else if (c.sourceItem.formatterType == String("DateTime")) {
                            fixedSizeColumns_1.push(c);
                            if (c.width < 140)
                                c.width = 140;
                        }
                        else if (c.sourceItem.formatterType == String("Checkbox")) {
                            fixedSizeColumns_1.push(c);
                        }
                        else {
                            resizableColumns_1.push(c);
                        }
                    }
                    else {
                        resizableColumns_1.push(c);
                    }
                });
                if (resizableColumns_1.length == 0) {
                    fixedSizeColumns_1 = [];
                    resizableColumns_1 = [];
                    allVisibleColumns.forEach(function (c) {
                        if (c.minWidth == c.maxWidth) {
                            fixedSizeColumns_1.push(c);
                            c.width = c.maxWidth;
                        }
                        else {
                            resizableColumns_1.push(c);
                        }
                    });
                }
                var fixedSizeColumnsWidth_1 = 0;
                fixedSizeColumns_1.map(function (m) { return m.width; }).forEach(function (e) { return fixedSizeColumnsWidth_1 += e; });
                var stretchableGridAreaWidth_1 = gridContainerWidth - fixedSizeColumnsWidth_1 - 18;
                var resizableColumnsWidth_1 = 0;
                resizableColumns_1
                    .map(function (m) { return m.width; })
                    .forEach(function (e) { return resizableColumnsWidth_1 += e; });
                resizableColumns_1.forEach(function (c) {
                    c.width = c.width * (stretchableGridAreaWidth_1 / resizableColumnsWidth_1);
                });
                this.slickGrid.setColumns(allVisibleColumns);
                this.slickGrid.onColumnsResized.notify();
            }
            this.setItems(this.getItems());
        };
        GridBase.prototype.getSlickOptions = function () {
            var opt = _super.prototype.getSlickOptions.call(this);
            if (this.get_ExtGridOptions().AutoColumnSize == true) {
                opt.forceFitColumns = true;
            }
            //opt.enableTextSelectionOnCells = true;
            opt.enableCellNavigation = true;
            opt.asyncEditorLoading = false;
            opt.autoEdit = true;
            return opt;
        };
        GridBase.prototype.getViewOptions = function () {
            var opt = _super.prototype.getViewOptions.call(this);
            opt.rowsPerPage = q.DefaultMainGridOptions.RowsPerPage;
            return opt;
        };
        GridBase.prototype.onClick = function (e, row, cell) {
            _super.prototype.onClick.call(this, e, row, cell);
            if (e.isDefaultPrevented())
                return;
            var item = this.itemAt(row);
            var recordId = item[this.getIdProperty()];
            var target = $(e.target);
            // if user clicks "i" element, e.g. icon
            if (target.parent().hasClass('inline-action') || target.parent().hasClass('inline-actions') || target.parent().hasClass('inline-btn'))
                target = target.parent();
            if (target.hasClass('inline-action') || target.hasClass('inline-actions') || target.hasClass('inline-btn')) {
                //e.preventDefault();
                this.onInlineActionClick(target, recordId, item);
            }
        };
        GridBase.prototype.onInlineActionClick = function (target, recordId, item) {
            var _this = this;
            if (target.hasClass('delete-row')) {
                if (this.isReadOnly == true) {
                    Q.notifyWarning('Read only records could not be deleted!');
                }
                else {
                    Q.confirm('Delete record?', function () {
                        var o = _this;
                        if (o.deleteEntity) { //for in-memory grid
                            o.deleteEntity(recordId);
                        }
                        else {
                            Q.serviceRequest(_this.getService() + '/Delete', { EntityId: recordId }, function (response) {
                                _this.refresh();
                            });
                        }
                    });
                }
            }
            else if (target.hasClass('view-details')) {
                this.editItem(recordId);
            }
            else if (target.hasClass('select-row')) {
                this.rowSelection.setSelectedKeys([recordId]);
                this.pickerDialog.onSuccess(this.selectedItems);
                this.pickerDialog.dialogClose();
            }
        };
        GridBase.prototype.resetRowNumber = function () {
            this.nextRowNumber = 1;
            var items = this.getItems();
            var grouping_fields = this.view.getGrouping();
            if (grouping_fields.length == 0) {
                for (var i = 0; i < items.length; i++) {
                    items[i].RowNum = i + 1;
                }
            }
            else if (grouping_fields.length > 0) {
                var generateRowNumber_1 = function (groups) {
                    for (var gi = 0; gi < groups.length; gi++) {
                        var subGroups = groups[gi].groups;
                        if (subGroups) {
                            generateRowNumber_1(subGroups);
                        }
                        else {
                            var rows = groups[gi].rows;
                            for (var i = 0; i < rows.length; i++) {
                                rows[i].RowNum = i + 1;
                            }
                        }
                    }
                };
                var groups = this.view.getGroups();
                generateRowNumber_1(groups);
            }
            this.setItems(items);
        };
        GridBase.prototype.setGrouping = function (groupInfo) {
            this.view.setGrouping(groupInfo);
            this.resetRowNumber();
        };
        GridBase.prototype.onViewProcessData = function (response) {
            var _this = this;
            var r = _super.prototype.onViewProcessData.call(this, response);
            if (this.get_ExtGridOptions().ShowRowNumberColumn == true) {
                setTimeout(function () { _this.resetRowNumber(); });
            }
            return r;
        };
        GridBase.prototype.initDialog = function (dialog) {
            _super.prototype.initDialog.call(this, dialog);
            dialog.parentGrid = this;
        };
        Object.defineProperty(GridBase.prototype, "selectedItems", {
            get: function () {
                var _this = this;
                return this.rowSelection.getSelectedKeys().map(function (m) {
                    return _this.view.getItemById(m);
                });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GridBase.prototype, "selectedKeys", {
            set: function (value) {
                var options = this.options;
                if (options.multiple == true) {
                    this.rowSelection.setSelectedKeys(value);
                }
                else {
                }
            },
            enumerable: true,
            configurable: true
        });
        GridBase = __decorate([
            Serenity.Decorators.filterable()
        ], GridBase);
        return GridBase;
    }(Serenity.EntityGrid));
    _Ext.GridBase = GridBase;
})(_Ext || (_Ext = {}));
/// <reference path="../Bases/GridBase.ts" />
var _Ext;
(function (_Ext) {
    var AuditLogGrid = /** @class */ (function (_super) {
        __extends(AuditLogGrid, _super);
        function AuditLogGrid(container) {
            return _super.call(this, container) || this;
        }
        AuditLogGrid.prototype.getColumnsKey = function () { return '_Ext.AuditLog'; };
        AuditLogGrid.prototype.getDialogType = function () { return _Ext.AuditLogDialog; };
        AuditLogGrid.prototype.getIdProperty = function () { return _Ext.AuditLogRow.idProperty; };
        AuditLogGrid.prototype.getLocalTextPrefix = function () { return _Ext.AuditLogRow.localTextPrefix; };
        AuditLogGrid.prototype.getService = function () { return _Ext.AuditLogService.baseUrl; };
        AuditLogGrid.prototype.getButtons = function () {
            var buttons = _super.prototype.getButtons.call(this);
            buttons.splice(0, 1);
            return buttons;
        };
        AuditLogGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], AuditLogGrid);
        return AuditLogGrid;
    }(_Ext.GridBase));
    _Ext.AuditLogGrid = AuditLogGrid;
})(_Ext || (_Ext = {}));
var _Ext;
(function (_Ext) {
    var AuditLogViewer = /** @class */ (function () {
        function AuditLogViewer(el, entityVersions) {
            this.el = '.content-wrapper';
            this.data = {
                entityVersions: []
            };
            this.mounted = function () {
            };
            this.computed = {
                test: function () {
                    return 'test computed';
                }
            };
            this.filters = {
                filterByYardId: function () {
                    return [];
                }
            };
            this.methods = {
                showDiff: function (versionInfo) {
                    //showing diff visually
                    var left = versionInfo.OldEntity;
                    var right = versionInfo.NewEntity;
                    var delta = jsondiffpatch.diff(left, right);
                    // beautiful html diff
                    document.getElementById('visualizeDiff').innerHTML = jsondiffpatch.formatters.html.format(delta, left);
                },
                getDiff: function (versionInfo) {
                    //showing diff visually
                    var left = versionInfo.OldEntity;
                    var right = versionInfo.NewEntity;
                    var delta = jsondiffpatch.diff(left, right);
                    // beautiful html diff
                    return jsondiffpatch.formatters.html.format(delta);
                    //var delta = jsondiffpatch.diff(left, right);
                    //// left is optional, if specified unchanged values will be visible too
                    //document.getElementBy('the-diff').innerHTML = jsondiffpatch.formatters.html.format(delta, left);
                    //// Also you can dinamically show/hide unchanged values
                    //jsondiffpatch.formatters.html.showUnchanged();
                    //jsondiffpatch.formatters.html.hideUnchanged();
                    //// these will also adjust array move arrows (SVG), which is useful if something alters the html layout
                }
            };
            this.el = el || this.el;
            this.data.entityVersions = entityVersions;
        }
        AuditLogViewer.prototype.destroyed = function () {
        };
        return AuditLogViewer;
    }());
    _Ext.AuditLogViewer = AuditLogViewer;
})(_Ext || (_Ext = {}));
var _Ext;
(function (_Ext) {
    var AuditLogViewerDialog = /** @class */ (function (_super) {
        __extends(AuditLogViewerDialog, _super);
        function AuditLogViewerDialog(request) {
            var _this = _super.call(this) || this;
            _this.request = request;
            _this.dialogTitle = 'Audit Log Viewer';
            _this.onDialogOpen = function () {
                _Ext.AuditLogViewerService.List(_this.request, function (response) {
                    response.EntityVersions.forEach(function (e) {
                        delete (e.Id);
                        e.OldEntity = JSON.parse(e.OldEntity);
                        e.NewEntity = JSON.parse(e.NewEntity);
                        delete (e.OldEntity.Id);
                        delete (e.OldEntity.IDate);
                        delete (e.OldEntity.IUser);
                        delete (e.OldEntity.EDate);
                        delete (e.OldEntity.EUser);
                        e.ActionType = _Ext.AuditActionType[e.ActionType];
                        e.isShowed = false;
                    });
                    new Vue(new _Ext.AuditLogViewer('#' + _this.idPrefix + 'dialogContent', response.EntityVersions));
                });
            };
            return _this;
        }
        AuditLogViewerDialog.prototype.getTemplateName = function () {
            usingVuejs();
            usingJsonDiffPatch();
            return '_Ext.AuditLogViewer';
        };
        AuditLogViewerDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.maximizable()
        ], AuditLogViewerDialog);
        return AuditLogViewerDialog;
    }(Serenity.TemplatedDialog));
    _Ext.AuditLogViewerDialog = AuditLogViewerDialog;
})(_Ext || (_Ext = {}));
var _Ext;
(function (_Ext) {
    var ReportGridBase = /** @class */ (function (_super) {
        __extends(ReportGridBase, _super);
        function ReportGridBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ReportGridBase.prototype.getButtons = function () {
            var buttons = _super.prototype.getButtons.call(this);
            buttons.splice(0, 1);
            return buttons;
        };
        ReportGridBase.prototype.getColumns = function () {
            var columns = _super.prototype.getColumns.call(this);
            columns.splice(0, 1);
            return columns;
        };
        ReportGridBase = __decorate([
            Serenity.Decorators.filterable()
        ], ReportGridBase);
        return ReportGridBase;
    }(_Ext.GridBase));
    _Ext.ReportGridBase = ReportGridBase;
})(_Ext || (_Ext = {}));
var _Ext;
(function (_Ext) {
    var ReportPanelBase = /** @class */ (function (_super) {
        __extends(ReportPanelBase, _super);
        function ReportPanelBase(container) {
            var _this = _super.call(this, container) || this;
            _this.byId('PanelTitle').text(_this.getReportTitle());
            _this.byId('SubmitButton').click(function (e) {
                e.preventDefault();
                if (!_this.validateForm()) {
                    return;
                }
                _Ext.ReportHelper.execute({ reportKey: _this.getReportKey(), params: { Request: _this.getReportRequest() }, extension: 'html' });
            });
            _this.byId('DownloadPdfButton').click(function (e) {
                e.preventDefault();
                if (!_this.validateForm()) {
                    return;
                }
                _Ext.ReportHelper.execute({ reportKey: _this.getReportKey(), params: { Request: _this.getReportRequest() }, extension: 'html' });
            });
            return _this;
        }
        ReportPanelBase.prototype.getTemplateName = function () { return 'ReportPanel'; };
        ReportPanelBase.prototype.getReportTitle = function () { return 'Report Title'; };
        ReportPanelBase.prototype.getReportKey = function () { return 'Report.Key'; };
        ReportPanelBase.prototype.getReportRequest = function () { return this.getSaveEntity(); };
        return ReportPanelBase;
    }(Serenity.PropertyPanel));
    _Ext.ReportPanelBase = ReportPanelBase;
})(_Ext || (_Ext = {}));
var _Ext;
(function (_Ext) {
    var ReplaceRowDialog = /** @class */ (function (_super) {
        __extends(ReplaceRowDialog, _super);
        function ReplaceRowDialog(request, entityList) {
            var _this = _super.call(this) || this;
            _this.request = request;
            _this.entityList = entityList;
            _this.form = new _Ext.ReplaceRowForm(_this.idPrefix);
            _this.dialogTitle = 'Replace Row';
            _this.form.DeletedEntityName.value = request.DeletedEntityName;
            _this.form.ReplaceWithEntityId.items = entityList.map(function (m) { return { id: String(m[request.IdProperty]), text: m[request.NameProperty], source: m }; });
            return _this;
        }
        ReplaceRowDialog.prototype.getFormKey = function () { return _Ext.ReplaceRowForm.formKey; };
        ReplaceRowDialog.prototype.getToolbarButtons = function () {
            var _this = this;
            var buttons = [];
            _super.prototype.getToolbarButtons.call(this);
            buttons.push({
                title: 'Replace',
                icon: 'fa fa fa-trash-o',
                onClick: function () {
                    if (_this.validateForm() == false)
                        return;
                    Q.confirm("Are you sure? \n\n" + _this.request.EntityTypeTitle + ": \"" + _this.request.DeletedEntityName + "\" will be deleted \nand all references will be replaced with \"" + _this.form.ReplaceWithEntityId.text + "\". \n\nThis action cannot be undone!\n\n", function () {
                        _this.request.ReplaceWithEntityId = Q.toId(_this.form.ReplaceWithEntityId.value);
                        Q.serviceRequest(Q.resolveUrl('~/Services/ReplaceRow/Replace'), _this.request, function (response) {
                            _this.dialogClose();
                            if (window['lastGrid']) //for single paged apps
                                window['lastGrid'].refresh();
                        });
                    });
                }
            });
            return buttons;
        };
        ReplaceRowDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.maximizable()
        ], ReplaceRowDialog);
        return ReplaceRowDialog;
    }(_Ext.DialogBase));
    _Ext.ReplaceRowDialog = ReplaceRowDialog;
})(_Ext || (_Ext = {}));
var _Ext;
(function (_Ext) {
    var DevTools;
    (function (DevTools) {
        var SergenPanel = /** @class */ (function (_super) {
            __extends(SergenPanel, _super);
            function SergenPanel(container) {
                var _this = _super.call(this, container) || this;
                var vm = new Vue({
                    el: $('<div/>').appendTo(_this.element)[0],
                    data: {
                        connection: "",
                        connections: [],
                        tables: [],
                        generate: {
                            Row: true,
                            Service: true,
                            UI: true
                        }
                    },
                    methods: {
                        generateCode: function (table) {
                            if (!table.Identifier) {
                                Q.notifyError("Identifier cannot be empty!");
                                return;
                            }
                            if (!table.Module) {
                                Q.notifyError("Module cannot be empty!");
                                return;
                            }
                            DevTools.SergenService.Generate({
                                ConnectionKey: this.connection,
                                Table: table,
                                GenerateOptions: this.generate
                            }, function (r) {
                                Q.notifySuccess("Code for selected table is generated. You'll need to rebuild your project.");
                            });
                        }
                    },
                    watch: {
                        connection: function (val) {
                            if (!val || !val.length)
                                vm.tables = [];
                            else
                                DevTools.SergenService.ListTables({
                                    ConnectionKey: val
                                }, function (response) { return vm.tables = response.Entities; });
                        }
                    },
                    template: Q.getTemplate('_Ext.SergenPanel')
                });
                DevTools.SergenService.ListConnections({}, function (response) { return vm.connections = response.Entities; });
                return _this;
            }
            return SergenPanel;
        }(Serenity.Widget));
        DevTools.SergenPanel = SergenPanel;
    })(DevTools = _Ext.DevTools || (_Ext.DevTools = {}));
})(_Ext || (_Ext = {}));
var _Ext;
(function (_Ext) {
    var AutoCompleteEditor = /** @class */ (function (_super) {
        __extends(AutoCompleteEditor, _super);
        function AutoCompleteEditor(input, options) {
            var _this = _super.call(this, input) || this;
            _this.options = options;
            input.bind('change', function (e) {
                if (!Serenity.WX.hasOriginalEvent(e)) {
                    return;
                }
            });
            setTimeout(function () {
                _this.bindAutoComplete(input);
            }, 1000);
            return _this;
        }
        AutoCompleteEditor.prototype.bindAutoComplete = function (input) {
            var opt = this.options;
            var source = opt.sourceArray;
            if (opt.sourceCSV) {
                source = opt.sourceCSV.split(',');
            }
            else if (this.options.lookupKey) {
                var lookup_1 = Q.getLookup(opt.lookupKey);
                source = lookup_1.items.map(function (m) { return m[lookup_1.textField]; });
            }
            input.autocomplete({
                minLength: opt.minSearchLength || 0,
                autoFocus: true,
                source: source,
                focus: function (event, ui) {
                    //$(".ui-helper-hidden-accessible").hide();  //fix issue with the selected data showing up on webpage
                    //event.preventDefault();
                    //return false;
                },
            });
            input.data("ui-autocomplete")._renderItem = function (ul, item) {
                return $("<li>")
                    .append("<a>" + item.label + "</a>")
                    .appendTo(ul);
            };
            input.bind('click', function (e) {
                var wasOpen = input.autocomplete("widget").is(":visible");
                // Close if already visible
                if (wasOpen) {
                    return;
                }
                // Pass empty string as value to search for, displaying all results
                input.autocomplete("search", "");
            });
        };
        AutoCompleteEditor = __decorate([
            Serenity.Decorators.registerEditor()
        ], AutoCompleteEditor);
        return AutoCompleteEditor;
    }(Serenity.StringEditor));
    _Ext.AutoCompleteEditor = AutoCompleteEditor;
})(_Ext || (_Ext = {}));
var _Ext;
(function (_Ext) {
    var ColorEditor = /** @class */ (function (_super) {
        __extends(ColorEditor, _super);
        function ColorEditor(container) {
            var _this = _super.call(this, container) || this;
            try {
                _this.element.colorpicker({ format: "hex" });
            }
            catch (e) { }
            return _this;
        }
        ColorEditor.prototype.getTemplate = function () {
            usingBootstrapColorPicker();
            return "<div class=\"input-group colorpicker-component\">\n                        <input type=\"text\" value=\"#00AABB\" class=\"form-control\" />\n                        <span class=\"input-group-addon\"><i></i></span>\n                    </div>";
        };
        ;
        ColorEditor.prototype.getEditValue = function (property, target) {
            try {
                var editVal = this.element.colorpicker().data().color;
                target[property.name] = editVal;
            }
            catch (e) { }
        };
        ColorEditor.prototype.setEditValue = function (source, property) {
            var val = source[property.name];
            //this.element.children('input').val(val);
            try {
                this.element.data('colorpicker').setValue(val);
            }
            catch (e) { }
        };
        ColorEditor = __decorate([
            Serenity.Decorators.registerClass([Serenity.IGetEditValue, Serenity.ISetEditValue]),
            Serenity.Decorators.editor(),
            Serenity.Decorators.element("<div/>")
        ], ColorEditor);
        return ColorEditor;
    }(Serenity.TemplatedWidget));
    _Ext.ColorEditor = ColorEditor;
})(_Ext || (_Ext = {}));
var _Ext;
(function (_Ext) {
    var DateTimePickerEditor = /** @class */ (function (_super) {
        __extends(DateTimePickerEditor, _super);
        function DateTimePickerEditor(container) {
            var _this = _super.call(this, container) || this;
            usingJqueryUITimepickerAddon();
            _this.element.datetimepicker({
                timeInput: true,
                controlType: 'select',
                oneLine: true,
                timeFormat: "HH:mm",
                showOn: "button"
            });
            return _this;
        }
        DateTimePickerEditor.prototype.getEditValue = function (property, target) { target[property.name] = this.value; };
        DateTimePickerEditor.prototype.setEditValue = function (source, property) { this.value = source[property.name]; };
        Object.defineProperty(DateTimePickerEditor.prototype, "value", {
            //http://trentrichardson.com/examples/timepicker
            get: function () {
                return Q.formatDate(this.valueAsDate, 'yyyy-MM-ddTHH:mm');
            },
            set: function (val) {
                this.valueAsDate = Q.parseISODateTime(val);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DateTimePickerEditor.prototype, "valueAsDate", {
            get: function () {
                var val = this.element.datetimepicker('getDate');
                return val;
            },
            set: function (val) {
                this.element.datetimepicker('setDate', val);
            },
            enumerable: true,
            configurable: true
        });
        DateTimePickerEditor.prototype.get_readOnly = function () {
            return this.element.hasClass('readonly');
        };
        DateTimePickerEditor.prototype.set_readOnly = function (value) {
            if (value == true) {
                this.element.datetimepicker("option", "disabled", true);
                this.element.addClass('readonly');
                this.element.attr("disabled");
            }
            else {
                this.element.datetimepicker("option", "disabled", false);
                this.element.removeClass('readonly');
                this.element.removeAttr("disabled");
            }
        };
        DateTimePickerEditor.prototype.set_minDate = function (date) {
            this.element.datetimepicker('option', 'minDate', date);
        };
        DateTimePickerEditor.prototype.set_maxDate = function (date) {
            this.element.datetimepicker('option', 'maxDate', date);
        };
        DateTimePickerEditor.prototype.set_minDateTime = function (date) {
            this.element.datetimepicker('option', 'minDateTime', date);
        };
        DateTimePickerEditor.prototype.set_maxDateTime = function (date) {
            this.element.datetimepicker('option', 'maxDateTime', date);
        };
        DateTimePickerEditor = __decorate([
            Serenity.Decorators.registerClass([Serenity.IGetEditValue, Serenity.ISetEditValue, Serenity.IReadOnly]),
            Serenity.Decorators.editor(),
            Serenity.Decorators.element("<input/>")
        ], DateTimePickerEditor);
        return DateTimePickerEditor;
    }(Serenity.Widget));
    _Ext.DateTimePickerEditor = DateTimePickerEditor;
})(_Ext || (_Ext = {}));
/// <reference path="../Bases/DialogBase.ts" />
var _Ext;
(function (_Ext) {
    var EditorDialogBase = /** @class */ (function (_super) {
        __extends(EditorDialogBase, _super);
        function EditorDialogBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        EditorDialogBase.prototype.get_ExtDialogOptions = function () { return q.DefaultEditorDialogOptions; };
        EditorDialogBase.prototype.getIdProperty = function () { return "__id"; };
        EditorDialogBase.prototype.destroy = function () {
            this.onSave = null;
            this.onDelete = null;
            _super.prototype.destroy.call(this);
        };
        EditorDialogBase.prototype.updateInterface = function () {
            _super.prototype.updateInterface.call(this);
            this.saveAndCloseButton.find('.button-inner').text(this.isNew() ? (Q.tryGetText('Controls.AddButton') || 'Add') : (Q.tryGetText('Controls.ApplyButton') || 'Apply'));
            // apply changes button doesn't work properly with in-memory grids yet
            if (this.applyChangesButton) {
                this.applyChangesButton.hide();
            }
            if (this.parentEditor.isReadOnly == true) {
                this.saveAndCloseButton.addClass('disabled');
                this.deleteButton.addClass('disabled');
                Serenity.EditorUtils.setReadonly(this.element.find('.editor'), true);
                // remove required asterisk (*)
                this.element.find('sup').hide();
            }
        };
        EditorDialogBase.prototype.saveHandler = function (options, callback) {
            this.onSave && this.onSave(options, callback);
        };
        EditorDialogBase.prototype.deleteHandler = function (options, callback) {
            this.onDelete && this.onDelete(options, callback);
        };
        EditorDialogBase = __decorate([
            Serenity.Decorators.registerClass()
        ], EditorDialogBase);
        return EditorDialogBase;
    }(_Ext.DialogBase));
    _Ext.EditorDialogBase = EditorDialogBase;
})(_Ext || (_Ext = {}));
var _Ext;
(function (_Ext) {
    var EmptyLookupEditor = /** @class */ (function (_super) {
        __extends(EmptyLookupEditor, _super);
        function EmptyLookupEditor() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        EmptyLookupEditor.prototype.setSelect2Items = function (items) {
            var _this = this;
            this.clearItems();
            items.forEach(function (item) { _this.addItem(item); });
        };
        EmptyLookupEditor.prototype.setLookupItems = function (lookup) {
            var items = lookup.items.map(function (m) {
                return {
                    id: m[lookup.idField],
                    text: m[lookup.textField],
                    source: m
                };
            });
            this.setSelect2Items(items);
        };
        EmptyLookupEditor = __decorate([
            Serenity.Decorators.registerEditor()
        ], EmptyLookupEditor);
        return EmptyLookupEditor;
    }(Serenity.Select2Editor));
    _Ext.EmptyLookupEditor = EmptyLookupEditor;
})(_Ext || (_Ext = {}));
/// <reference path="../Bases/GridBase.ts" />
var _Ext;
(function (_Ext) {
    var GridEditorBase = /** @class */ (function (_super) {
        __extends(GridEditorBase, _super);
        function GridEditorBase(container) {
            var _this = _super.call(this, container) || this;
            _this.nextId = 1;
            _this.slickGrid.onSort.subscribe(function (e, args) {
                _this.sortGridFunction(args.grid, args.sortCols[0], args.sortCols[0].sortCol.field);
                //(args.grid as Slick.Grid).init();
                args.grid.invalidateAllRows();
                args.grid.invalidate();
                args.grid.render();
                args.grid.resizeCanvas();
            });
            return _this;
        }
        GridEditorBase.prototype.get_ExtGridOptions = function () { return q.DefaultEditorGridOptions; };
        GridEditorBase.prototype.getIdProperty = function () { return "__id"; };
        GridEditorBase.prototype.sortGridFunction = function (grid, column, field) {
            grid.getData().sort(function (a, b) {
                var result = a[field] > b[field] ? 1 :
                    a[field] < b[field] ? -1 :
                        0;
                return column.sortAsc ? result : -result;
            });
        };
        GridEditorBase.prototype.getQuickFilters = function () {
            return [];
        };
        GridEditorBase.prototype.id = function (entity) {
            return entity[this.getIdProperty()];
        };
        GridEditorBase.prototype.save = function (opt, callback) {
            var _this = this;
            var request = opt.request;
            var row = Q.deepClone(request.Entity);
            var id = this.id(row);
            if (id == null) {
                row[this.getIdProperty()] = "`" + this.nextId++;
            }
            if (!this.validateEntity(row, id)) {
                return;
            }
            var items = this.view.getItems().slice();
            if (id == null) {
                items.push(row);
            }
            else {
                var index = Q.indexOf(items, function (x) { return _this.id(x) === id; });
                items[index] = Q.deepClone({}, items[index], row);
            }
            this.value = items;
            callback({});
        };
        GridEditorBase.prototype.deleteEntity = function (id) {
            var _this = this;
            this.view.deleteItem(id);
            setTimeout(function () { _this.onItemsChanged(); });
            return true;
        };
        GridEditorBase.prototype.validateEntity = function (row, id) {
            return true;
        };
        GridEditorBase.prototype.getNewEntity = function () {
            return {};
        };
        GridEditorBase.prototype.getButtons = function () {
            var _this = this;
            return [{
                    title: 'Add ' + this.getItemName(),
                    cssClass: 'add-button',
                    onClick: function () { _this.addButtonClick(); }
                }];
        };
        GridEditorBase.prototype.addButtonClick = function () {
            var _this = this;
            this.createEntityDialog(this.getItemType(), function (dlg) {
                var dialog = dlg;
                dialog.parentEditor = _this;
                dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                dialog.loadEntityAndOpenDialog(_this.getNewEntity());
            });
        };
        GridEditorBase.prototype.editItem = function (entityOrId) {
            var _this = this;
            var id = entityOrId;
            var item = this.view.getItemById(id);
            this.createEntityDialog(this.getItemType(), function (dlg) {
                var dialog = dlg;
                dialog.onDelete = function (opt, callback) {
                    if (!_this.deleteEntity(id)) {
                        return;
                    }
                    callback({});
                };
                dialog.parentEditor = _this;
                dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                dialog.loadEntityAndOpenDialog(item);
            });
            ;
        };
        GridEditorBase.prototype.getEditValue = function (property, target) {
            target[property.name] = this.value;
        };
        GridEditorBase.prototype.setEditValue = function (source, property) {
            this.value = source[property.name];
        };
        Object.defineProperty(GridEditorBase.prototype, "value", {
            get: function () {
                var p = this.getIdProperty();
                this.slickGrid.getEditController().commitCurrentEdit();
                var items = this.view.getItems();
                this.onBeforeGetValue(items);
                return items.map(function (x) {
                    var y = Q.deepClone(x);
                    var id = y[p];
                    if (id && id.toString().charAt(0) == '`')
                        delete y[p];
                    if (y['RowNum'])
                        delete y['RowNum'];
                    return y;
                });
            },
            set: function (value) {
                var _this = this;
                var id = this.getIdProperty();
                var val = value || [];
                var items = val.map(function (x) {
                    var y = Q.deepClone(x);
                    if (y[id] == null) {
                        y[id] = "`" + _this.nextId++;
                    }
                    return y;
                });
                var r = this.onViewProcessData({ Entities: items });
                this.view.setItems(r.Entities, true);
                setTimeout(function () { _this.onItemsChanged(); });
                this.resetRowNumber(); // to generate serial no.
            },
            enumerable: true,
            configurable: true
        });
        GridEditorBase.prototype.getGridCanLoad = function () {
            return false;
        };
        GridEditorBase.prototype.usePager = function () {
            return false;
        };
        GridEditorBase.prototype.getInitialTitle = function () {
            return null;
        };
        GridEditorBase.prototype.createToolbarExtensions = function () {
            var _this = this;
            //super.createToolbarExtensions();
            Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                _this.searchText = Select2.util.stripDiacritics(Q.trimToNull(text) || '').toLowerCase();
                _this.view.setItems(_this.view.getItems(), true);
            });
        };
        GridEditorBase.prototype.onViewFilter = function (row) {
            if (!_super.prototype.onViewFilter.call(this, row)) {
                return false;
            }
            if (this.searchText) {
                return this.matchContains(row);
            }
            return true;
        };
        GridEditorBase.prototype.matchContains = function (item) {
            var result = false;
            for (var prop in item) {
                result = Select2.util.stripDiacritics(String(item[prop] || '')).toLowerCase().indexOf(this.searchText) >= 0;
                if (result == true) {
                    return result;
                }
            }
            return result;
        };
        GridEditorBase.prototype.enableFiltering = function () { return false; };
        GridEditorBase.prototype.onViewSubmit = function () { return false; };
        GridEditorBase.prototype.get_readOnly = function () {
            return this.isReadOnly;
        };
        GridEditorBase.prototype.set_readOnly = function (value) {
            this.isReadOnly = value;
            if (value == true) {
                this.element.find('.add-button').addClass('disabled');
                var opt = this.slickGrid.getOptions();
                opt.editable = false;
                this.slickGrid.setOptions(opt);
            }
            else {
                this.element.find('.add-button').removeClass('disabled');
            }
        };
        GridEditorBase.prototype.getSlickOptions = function () {
            var opt = _super.prototype.getSlickOptions.call(this);
            opt.forceFitColumns = false;
            //opt.autoHeight = true; // If you need to show footer, you have to do opt.autoHeight = false
            return opt;
        };
        //custom events
        GridEditorBase.prototype.onItemsChanged = function () {
        };
        GridEditorBase.prototype.onBeforeGetValue = function (items) {
        };
        GridEditorBase = __decorate([
            Serenity.Decorators.registerClass([Serenity.IGetEditValue, Serenity.ISetEditValue, Serenity.IReadOnly]),
            Serenity.Decorators.editor(),
            Serenity.Decorators.element("<div/>")
        ], GridEditorBase);
        return GridEditorBase;
    }(_Ext.GridBase));
    _Ext.GridEditorBase = GridEditorBase;
})(_Ext || (_Ext = {}));
var _Ext;
(function (_Ext) {
    var HardCodedLookupEditor = /** @class */ (function (_super) {
        __extends(HardCodedLookupEditor, _super);
        function HardCodedLookupEditor(container, options) {
            var _this = _super.call(this, container, options) || this;
            var source = options.sourceArray;
            if (options.sourceCSV) {
                source = options.sourceCSV.split(',');
            }
            source.forEach(function (i) { return _this.addOption(i, i); });
            return _this;
        }
        HardCodedLookupEditor.prototype.getSelect2Options = function () {
            var opt = _super.prototype.getSelect2Options.call(this);
            return opt;
        };
        HardCodedLookupEditor = __decorate([
            Serenity.Decorators.registerEditor()
        ], HardCodedLookupEditor);
        return HardCodedLookupEditor;
    }(Serenity.Select2Editor));
    _Ext.HardCodedLookupEditor = HardCodedLookupEditor;
})(_Ext || (_Ext = {}));
var _Ext;
(function (_Ext) {
    var HtmlTemplateEditor = /** @class */ (function (_super) {
        __extends(HtmlTemplateEditor, _super);
        function HtmlTemplateEditor(textArea, opt) {
            return _super.call(this, textArea, opt) || this;
        }
        HtmlTemplateEditor.prototype.getConfig = function () {
            var config = _super.prototype.getConfig.call(this);
            var placehorders = this.options.placeholders;
            if (placehorders) {
                config.placeholder_select = {
                    placeholders: placehorders.split(',')
                };
                config.extraPlugins += ',richcombo,placeholder_select';
            }
            config.allowedContent = true;
            config.enterMode = window['CKEDITOR'].ENTER_BR;
            config.extraPlugins += ',showborders';
            config.removePlugins += ',uploadimage';
            //config.forcePasteAsPlainText = true;
            //config.toolbar = [['placeholder_select']];
            config.removeButtons += ',Cut,Copy,Paste,PasteText,PasteFromWord' +
                ',SpecialChar,Subscript,Superscript,Styles,' +
                'Link,Unlink,CreatePlaceholder,' +
                'Image,Anchor,Blockquote,BGColor,' +
                'Superscript,RemoveFormat';
            return config;
        };
        HtmlTemplateEditor = __decorate([
            Serenity.Decorators.editor(),
            Serenity.Decorators.element("<div/>")
        ], HtmlTemplateEditor);
        return HtmlTemplateEditor;
    }(Serenity.HtmlContentEditor));
    _Ext.HtmlTemplateEditor = HtmlTemplateEditor;
})(_Ext || (_Ext = {}));
var _Ext;
(function (_Ext) {
    var StaticTextBlock = /** @class */ (function (_super) {
        __extends(StaticTextBlock, _super);
        function StaticTextBlock(container, options) {
            var _this = _super.call(this, container, options) || this;
            // hide the caption label for this editor if in a form. ugly hack
            if (_this.options.hideLabel)
                _this.element.closest('.field').find('.caption').hide();
            // remove required asterisk (*)
            _this.element.closest('.field').find('sup').hide();
            _this.updateElementContent();
            return _this;
        }
        StaticTextBlock.prototype.updateElementContent = function () {
            var text = Q.coalesce(this.options.text, this._value);
            // if isLocalText is set, text is actually a local text key
            if (this.options.isLocalText)
                text = Q.text(text);
            // don't html encode if isHtml option is true
            if (this.options.isHtml)
                this.element.html(text);
            else
                this.element.text(text);
        };
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        StaticTextBlock.prototype.setEditValue = function (source, property) {
            if (this.options.text == null) {
                this._value = Q.coalesce(this.options.text, source[property.name]);
                this.updateElementContent();
            }
        };
        Object.defineProperty(StaticTextBlock.prototype, "value", {
            get: function () {
                return this._value;
            },
            set: function (value) {
                this._value = value;
                this.updateElementContent();
            },
            enumerable: true,
            configurable: true
        });
        StaticTextBlock = __decorate([
            Serenity.Decorators.element("<div/>"),
            Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
        ], StaticTextBlock);
        return StaticTextBlock;
    }(Serenity.Widget));
    _Ext.StaticTextBlock = StaticTextBlock;
})(_Ext || (_Ext = {}));
var _Ext;
(function (_Ext) {
    var GridItemPickerDialog = /** @class */ (function (_super) {
        __extends(GridItemPickerDialog, _super);
        function GridItemPickerDialog(options) {
            var _this = _super.call(this, options) || this;
            _this.onSuccess = function (selectedItems) { };
            var gridType = options.gridType;
            if (!gridType.prototype)
                gridType = Q.typeByFullName(options.gridType);
            try {
                _this.checkGrid = new gridType(_this.byId("RowSelectionCheckGrid"), options);
                if (options.preSelectedKeys)
                    _this.checkGrid.selectedKeys = options.preSelectedKeys;
                _this.dialogTitle = "Select " + _this.checkGrid.getTitle();
                _this.checkGrid.setTitle(null);
                _this.checkGrid.pickerDialog = _this;
            }
            catch (ex) {
                Q.notifyError('Could not intialize ' + options.gridType);
            }
            return _this;
        }
        GridItemPickerDialog.prototype.getTemplate = function () {
            return "<div id=\"~_RowSelectionCheckGrid\" \n                class=\"RowSelectionCheckGrid " + (this.options.multiple == true ? 'multi-select' : 'single-select') + "\" \n                style = \"margin: 15px 15px 0 15px;\" >\n            </div>";
        };
        Object.defineProperty(GridItemPickerDialog.prototype, "selectedItems", {
            get: function () { return this.checkGrid.selectedItems; },
            enumerable: true,
            configurable: true
        });
        GridItemPickerDialog.prototype.getDialogOptions = function () {
            var _this = this;
            var opt = _super.prototype.getDialogOptions.call(this);
            opt.buttons = [{
                    text: Q.text("Dialogs.OkButton"),
                    click: function () {
                        var selectedItems = _this.checkGrid.selectedItems;
                        if (!selectedItems.length) {
                            Q.notifyWarning("Please select some items!");
                            return;
                        }
                        _this.onSuccess(selectedItems);
                        _this.dialogClose();
                    }
                }, {
                    text: Q.text("Dialogs.CancelButton"),
                    click: function () {
                        _this.dialogClose();
                    }
                }];
            return opt;
        };
        GridItemPickerDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], GridItemPickerDialog);
        return GridItemPickerDialog;
    }(Serenity.TemplatedDialog));
    _Ext.GridItemPickerDialog = GridItemPickerDialog;
})(_Ext || (_Ext = {}));
var _Ext;
(function (_Ext) {
    var GridItemPickerEditor = /** @class */ (function (_super) {
        __extends(GridItemPickerEditor, _super);
        function GridItemPickerEditor(container, options) {
            var _this = _super.call(this, container, options) || this;
            setTimeout(function () {
                _this.element.find('.btn').click(function (e) {
                    var pickerDialog = new _Ext.GridItemPickerDialog(options);
                    pickerDialog.onSuccess = function (selectedItems) {
                        _this.value = pickerDialog.checkGrid.rowSelection.getSelectedKeys().join(',');
                        _this.text = selectedItems.map(function (m) { return m[options.nameFieldInGridRow]; }).join(', ');
                    };
                    pickerDialog.dialogOpen();
                });
            }, 500);
            return _this;
        }
        GridItemPickerEditor.prototype.getTemplate = function () {
            return "<div class=\"input-group\">\n                        <input type=\"hidden\" class=\"value\" />\n                        <input type=\"text\" class=\"form-control text\" disabled/>\n                          <span class=\"input-group-btn\">\n                            <button class=\"btn btn-default\" style=\"height: 27px; padding-top: 3px;\" type=\"button\"><i class=\"fa fa-search\"></i></button>\n                          </span>\n                    </div>";
        };
        ;
        GridItemPickerEditor.prototype.getEditValue = function (property, target) { target[property.name] = this.value; };
        GridItemPickerEditor.prototype.setEditValue = function (source, property) { this.value = source[property.name]; this.text = source[this.options.nameFieldInThisRow]; };
        Object.defineProperty(GridItemPickerEditor.prototype, "value", {
            get: function () {
                var editVal = this.element.find('input.value').val();
                return editVal;
            },
            set: function (val) {
                this.element.find('input.value').val(val);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GridItemPickerEditor.prototype, "text", {
            get: function () {
                var editVal = this.element.find('input.text').val();
                return editVal;
            },
            set: function (val) {
                this.element.find('input.text').val(val);
            },
            enumerable: true,
            configurable: true
        });
        GridItemPickerEditor = __decorate([
            Serenity.Decorators.registerClass([Serenity.IGetEditValue, Serenity.ISetEditValue]),
            Serenity.Decorators.editor(),
            Serenity.Decorators.element("<div/>")
        ], GridItemPickerEditor);
        return GridItemPickerEditor;
    }(Serenity.TemplatedWidget));
    _Ext.GridItemPickerEditor = GridItemPickerEditor;
})(_Ext || (_Ext = {}));
var _Ext;
(function (_Ext) {
    var CardViewMixin = /** @class */ (function () {
        function CardViewMixin(options) {
            var _this = this;
            this.options = options;
            var u, f;
            var dg = this.dataGrid = options.grid;
            var idProperty = dg.getIdProperty();
            var getId = this.getId = function (item) { return item[idProperty]; };
            options.defaultViewType = options.defaultViewType || 'list';
            this.viewType = options.defaultViewType;
            var divViewSwitch = $('\n<div class="btn-group view-switch" data-toggle="buttons" style="float: right">\n    <label class="btn btn-default active" title="List View">\n        <i class="fa fa-th-list text-purple"><\/i>\n        <input type="radio" name="' + dg.element.attr("id") + '_ViewType" value="list" checked />\n    <\/label>\n    <label class="btn btn-default" title="Card View">\n        <i class="fa fa-th-large text-purple"><\/i>\n        <input type="radio" name="' + dg.element.attr("id") + '_ViewType" value="card" />    \n    <\/label>\n<\/div>')
                .prependTo(dg.element.find(".grid-title"));
            this.cardContainer = $('<div class="card-container" style="display: none;"><div class="card-items"><\/div><\/div>').insertAfter(dg.element.children(".grid-container"));
            divViewSwitch.find("input").change(function (e) {
                return _this.switchView($(e.target).val());
            });
            this.resizeCardView();
            dg.element.bind("layout", function () {
                return _this.resizeCardView();
            });
            dg.view.onDataChanged.subscribe(function () {
                _this.vm && _this.updateCardItems();
            });
            u = dg.getCurrentSettings;
            dg.getCurrentSettings = function (n) {
                var i = u.apply(dg, [n]);
                return i.viewType = divViewSwitch.find("input:checked").val(), i;
            };
            f = dg.restoreSettings;
            dg.restoreSettings = function (n, i) {
                var u, e, o, s;
                if (f.apply(dg, [n, i]),
                    n == null) {
                    if (u = this.getPersistanceStorage(),
                        u == null)
                        return;
                    if (e = Q.trimToNull(u.getItem(this.getPersistanceKey())),
                        !e)
                        return;
                    n = JSON.parse(e);
                }
                o = n.viewType || options.defaultViewType;
                s = divViewSwitch.find("input:checked").val() || options.defaultViewType;
                o != s && divViewSwitch.find("input").eq(o == "card" ? 1 : 0).click();
            };
        }
        CardViewMixin.prototype.switchView = function (viewType) {
            this.resizeCardView();
            var isCardView = viewType == "card";
            this.dataGrid.element.children(".card-container").toggle(isCardView);
            this.dataGrid.element.children(".grid-container").toggle(!isCardView);
            isCardView && this.updateCardItems();
            this.dataGrid.persistSettings();
        };
        CardViewMixin.prototype.updateCardItems = function () {
            if (this.vm)
                this.vm.items = this.dataGrid.getItems();
            else {
                usingVuejs();
                this.vm = new Vue({
                    el: this.cardContainer.children()[0],
                    template: this.options.containerTemplate ? "<div> " + this.options.containerTemplate + " </div>"
                        : "<div class=\"card-items\">\n    <div v-for=\"(item, index) in items\" class=\"" + (this.options.itemCssClass || 'col-sm-12 col-md-6 col-lg-4') + "\">\n        <div class=\"card-item\" style=\"" + this.options.itemCssStyle + "\">\n        " + this.options.itemTemplate + "\n        </div>\n    </div>\n</div>",
                    data: {
                        items: this.dataGrid.getItems()
                    },
                    methods: this.options.methods
                });
            }
        };
        CardViewMixin.prototype.resizeCardView = function () {
            var gridContainer = this.dataGrid.element.children(".grid-container"), width = this.dataGrid.element.width(), height = gridContainer.height();
            this.dataGrid.element.children(".card-container").css({
                width: width + "px",
                height: height + "px"
            });
        };
        return CardViewMixin;
    }());
    _Ext.CardViewMixin = CardViewMixin;
})(_Ext || (_Ext = {}));
var _Ext;
(function (_Ext) {
    /**
     * A mixin that can be applied to a DataGrid for excel style filtering functionality
     */
    var HeaderFiltersMixin = /** @class */ (function () {
        function HeaderFiltersMixin(options) {
            this.options = options;
            var dg = this.dataGrid = options.grid;
            var currentColumn = null;
            var cachedValues = {};
            usingSlickHeaderFilters();
            var headerFilters = new Slick['Plugins'].HeaderFilters({
                getFilterValues: function (column, setFilterableValues) {
                    if (!dg.view.url || !dg.view["getPagingInfo"]().rowsPerPage || dg.view.getLength() == 0
                        && !Q.any(dg.slickGrid.getColumns(), function (x) { return x.filterValues && x.filterValues.length > 0; })) {
                        return null;
                    }
                    currentColumn = column;
                    try {
                        if (!dg.onViewSubmit()) {
                            setFilterableValues([]);
                            return;
                        }
                    }
                    finally {
                        currentColumn = null;
                    }
                    var request = Q.deepClone(dg.view.params);
                    request.DistinctFields = [column.field];
                    request.Skip = 0;
                    request.Take = 0;
                    var cacheKey = $.toJSON(request);
                    var cachedValue = cachedValues[cacheKey];
                    if (cachedValue && cachedValue.expires > (new Date).getTime())
                        setFilterableValues(cachedValue.value);
                    else {
                        Q.serviceCall({
                            request: request,
                            url: dg.view.url,
                            onSuccess: function (response) {
                                cachedValues[cacheKey] = {
                                    value: response.Values,
                                    expires: (new Date).getTime() + 1e3 * 30
                                };
                                setFilterableValues(response.Values);
                            }
                        });
                    }
                },
                isFilterable: function (column) {
                    return column.sourceItem != null && column.sortable && (column.sourceItem.notFilterable == null || !column.sourceItem.notFilterable);
                }
            });
            headerFilters.onFilterApplied.subscribe(function () {
                dg.refresh();
            });
            dg.slickGrid.registerPlugin(headerFilters);
            var oldOnViewSubmit = dg.onViewSubmit;
            dg.onViewSubmit = function () {
                if (!oldOnViewSubmit.call(dg))
                    return false;
                var columns = dg.slickGrid.getColumns();
                var request = dg.view.params;
                for (var n = 0; n < columns.length; n++) {
                    var column = columns[n];
                    if (column === currentColumn)
                        continue;
                    var filterValues = column.filterValues;
                    if (filterValues && filterValues.length) {
                        var u = filterValues.filter(function (f) { return f != null; });
                        var d = [[column.field], "in", [u]];
                        if (u.length !== filterValues.length) {
                            if (u.length > 0)
                                d = Serenity.Criteria.or(["is null", [column.field]], d);
                            else
                                d = ["is null", [column.field]];
                        }
                        request.Criteria = Serenity.Criteria.and(request.Criteria, d);
                    }
                }
                return true;
            };
        }
        return HeaderFiltersMixin;
    }());
    _Ext.HeaderFiltersMixin = HeaderFiltersMixin;
})(_Ext || (_Ext = {}));
var _Ext;
(function (_Ext) {
    /**
     * A mixin that can be applied to a DataGrid for tree functionality
     */
    var TreeGridMixin = /** @class */ (function () {
        function TreeGridMixin(options) {
            this.options = options;
            var dg = this.dataGrid = options.grid;
            var idProperty = options.idField || dg.getIdProperty();
            var getId = this.getId = function (item) { return item[idProperty]; };
            dg.element.find('.grid-container').on('click', function (e) {
                if ($(e.target).hasClass('s-TreeToggle')) {
                    var src = dg.slickGrid.getCellFromEvent(e);
                    if (src.cell >= 0 &&
                        src.row >= 0) {
                        TreeGridMixin.toggleClick(e, src.row, src.row, dg.view, getId);
                    }
                }
            });
            var oldViewFilter = dg.onViewFilter;
            dg.onViewFilter = function (item) {
                if (!oldViewFilter.apply(this, [item]))
                    return false;
                return TreeGridMixin.filterById(item, dg.view, idProperty, options.getParentId);
            };
            var oldProcessData = dg.onViewProcessData;
            dg.onViewProcessData = function (response) {
                response = oldProcessData.apply(this, [response]);
                response.Entities = TreeGridMixin.applyTreeOrdering(response.Entities, getId, options.getParentId);
                Serenity.SlickTreeHelper.setIndents(response.Entities, getId, options.getParentId, (options.initialCollapse && options.initialCollapse()) || false);
                return response;
            };
            if (options.toggleField) {
                var col = Q.first(dg.getGrid().getColumns(), function (x) { return x.field == options.toggleField; });
                col.format = TreeGridMixin.treeToggle(function () { return dg.view; }, getId, col.format || (function (ctx) { return Q.htmlEncode(ctx.value); }));
                col.formatter = Serenity.SlickHelper.convertToFormatter(col.format);
            }
        }
        /**
         * Expands / collapses all rows in a grid automatically
         */
        TreeGridMixin.prototype.toggleAll = function () {
            Serenity.SlickTreeHelper.setCollapsed(this.dataGrid.view.getItems(), !this.dataGrid.view.getItems().every(function (x) { return x._collapsed == true; }));
            this.dataGrid.view.setItems(this.dataGrid.view.getItems(), true);
        };
        TreeGridMixin.prototype.expandAll = function () {
            Serenity.SlickTreeHelper.setCollapsed(this.dataGrid.view.getItems(), false);
            this.dataGrid.view.setItems(this.dataGrid.view.getItems(), true);
        };
        TreeGridMixin.prototype.collapsedAll = function () {
            Serenity.SlickTreeHelper.setCollapsed(this.dataGrid.view.getItems(), true);
            this.dataGrid.view.setItems(this.dataGrid.view.getItems(), true);
        };
        /**
         * Reorders a set of items so that parents comes before their children.
         * This method is required for proper tree ordering, as it is not so easy to perform with SQL.
         * @param items list of items to be ordered
         * @param getId a delegate to get ID of a record (must return same ID with grid identity field)
         * @param getParentId a delegate to get parent ID of a record
         */
        TreeGridMixin.applyTreeOrdering = function (items, getId, getParentId) {
            var result = [];
            var byId = Q.toGrouping(items, getId);
            var byParentId = Q.toGrouping(items, getParentId);
            var visited = {};
            function takeChildren(theParentId) {
                if (visited[theParentId])
                    return;
                visited[theParentId] = true;
                for (var _i = 0, _a = (byParentId[theParentId] || []); _i < _a.length; _i++) {
                    var child = _a[_i];
                    result.push(child);
                    takeChildren(getId(child));
                }
            }
            for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                var item = items_1[_i];
                var parentId = getParentId(item);
                var hasParent = parentId != null;
                var parent_1 = byId[parentId];
                var isRootItem = !hasParent || !(parent_1 || []).length;
                if (isRootItem) {
                    result.push(item);
                    takeChildren(getId(item));
                }
            }
            return result;
        };
        TreeGridMixin.filterById = function (item, view, idProperty, getParentId) {
            return Serenity.SlickTreeHelper.filterCustom(item, function (x) {
                var parentId = getParentId(x);
                if (parentId == null) {
                    return null;
                }
                var items = view.getItems();
                var parentItem = items.filter(function (f) { return f[idProperty] == parentId; })[0];
                return parentItem;
            });
        };
        TreeGridMixin.treeToggle = function (getView, getId, formatter) {
            return function (ctx) {
                var text = formatter(ctx);
                var view = getView();
                var indent = Q.coalesce(ctx.item._indent, 0);
                var spacer = '<span class="s-TreeIndent" style="width:' + 15 * indent + 'px"></span>';
                var id = getId(ctx.item);
                var idx = view.getIdxById(ctx.item.__id || id);
                var next = view.getItemByIdx(idx + 1);
                if (next != null) {
                    var nextIndent = Q.coalesce(next._indent, 0);
                    if (nextIndent > indent) {
                        if (!!!!ctx.item._collapsed) {
                            return spacer + '<span class="s-TreeToggle s-TreeExpand"></span>' + text;
                        }
                        else {
                            return spacer + '<span class="s-TreeToggle s-TreeCollapse"></span>' + text;
                        }
                    }
                }
                return spacer + '<span class="s-TreeToggle"></span>' + text;
            };
        };
        TreeGridMixin.toggleClick = function (e, row, cell, view, getId) {
            var target = $(e.target);
            if (!target.hasClass('s-TreeToggle')) {
                return;
            }
            if (target.hasClass('s-TreeCollapse') || target.hasClass('s-TreeExpand')) {
                var item = view.getItem(row);
                if (item != null) {
                    if (!!!item._collapsed) {
                        item._collapsed = true;
                    }
                    else {
                        item._collapsed = false;
                    }
                    var id = getId(item);
                    view.updateItem(item.__id || id, item); //to support in-memory grid we check fake item.__id
                }
                if (e.shiftKey) {
                    view.beginUpdate();
                    try {
                        Serenity.SlickTreeHelper.setCollapsed(view.getItems(), !!item._collapsed);
                        view.setItems(view.getItems(), true);
                    }
                    finally {
                        view.endUpdate();
                    }
                }
            }
        };
        return TreeGridMixin;
    }());
    _Ext.TreeGridMixin = TreeGridMixin;
})(_Ext || (_Ext = {}));
var _Ext;
(function (_Ext) {
    var ExcelExportHelper;
    (function (ExcelExportHelper) {
        function createToolButton(options) {
            return {
                hint: Q.coalesce(options.title, 'Excel'),
                title: Q.coalesce(options.hint, ''),
                cssClass: 'export-xlsx-button',
                onClick: function () {
                    if (!options.onViewSubmit()) {
                        return;
                    }
                    var grid = options.grid;
                    var request = Q.deepClone(grid.getView().params);
                    request.Take = 0;
                    request.Skip = 0;
                    var sortBy = grid.getView().sortBy;
                    if (sortBy) {
                        request.Sort = sortBy;
                    }
                    request.IncludeColumns = [];
                    var columns = grid.getGrid().getColumns();
                    for (var _i = 0, columns_2 = columns; _i < columns_2.length; _i++) {
                        var column = columns_2[_i];
                        request.IncludeColumns.push(column.id || column.field);
                    }
                    Q.postToService({ service: options.service, request: request, target: '_blank' });
                },
                separator: options.separator
            };
        }
        ExcelExportHelper.createToolButton = createToolButton;
    })(ExcelExportHelper = _Ext.ExcelExportHelper || (_Ext.ExcelExportHelper = {}));
})(_Ext || (_Ext = {}));
var _Ext;
(function (_Ext) {
    var PdfExportHelper;
    (function (PdfExportHelper) {
        function toAutoTableColumns(srcColumns, columnStyles, columnTitles) {
            return srcColumns.map(function (src) {
                var col = {
                    dataKey: src.id || src.field,
                    title: src.name || ''
                };
                if (columnTitles && columnTitles[col.dataKey] != null)
                    col.title = columnTitles[col.dataKey];
                var style = {};
                if ((src.cssClass || '').indexOf("align-right") >= 0)
                    style.halign = 'right';
                else if ((src.cssClass || '').indexOf("align-center") >= 0)
                    style.halign = 'center';
                columnStyles[col.dataKey] = style;
                return col;
            });
        }
        function toAutoTableData(entities, keys, srcColumns) {
            var el = document.createElement('span');
            var row = 0;
            return entities.map(function (item) {
                var dst = {};
                for (var cell = 0; cell < srcColumns.length; cell++) {
                    var src = srcColumns[cell];
                    var fld = src.field || '';
                    var key = keys[cell];
                    var txt = void 0;
                    var html = void 0;
                    if (src.formatter) {
                        html = src.formatter(row, cell, item[fld], src, item);
                    }
                    else if (src.format) {
                        html = src.format({ row: row, cell: cell, item: item, value: item[fld] });
                    }
                    else {
                        dst[key] = item[fld];
                        continue;
                    }
                    if (!html || (html.indexOf('<') < 0 && html.indexOf('&') < 0))
                        dst[key] = html;
                    else {
                        el.innerHTML = html;
                        if (el.children.length == 1 &&
                            $(el.children[0]).is(":input")) {
                            dst[key] = $(el.children[0]).val();
                        }
                        else if (el.children.length == 1 &&
                            $(el.children).is('.check-box')) {
                            dst[key] = $(el.children).hasClass("checked") ? "Yes" : "No";
                        }
                        else
                            dst[key] = el.textContent || '';
                    }
                }
                row++;
                return dst;
            });
        }
        function exportToPdf(options) {
            var g = options.grid;
            if (!options.onViewSubmit())
                return;
            includeAutoTable();
            var request = Q.deepClone(g.view.params);
            request.Take = 0;
            request.Skip = 0;
            var sortBy = g.view.sortBy;
            if (sortBy != null)
                request.Sort = sortBy;
            var gridColumns = g.slickGrid.getColumns();
            gridColumns = gridColumns.filter(function (x) { return x.id !== "__select__" && x.name.length > 0; });
            request.IncludeColumns = [];
            for (var _i = 0, gridColumns_2 = gridColumns; _i < gridColumns_2.length; _i++) {
                var column = gridColumns_2[_i];
                request.IncludeColumns.push(column.id || column.field);
            }
            Q.serviceCall({
                url: g.view.url,
                request: request,
                onSuccess: function (response) {
                    var doc = new jsPDF('l', 'pt');
                    var groupings = g.view.getGrouping(); //group fields
                    var groupingColumns = gridColumns.filter(function (f) { return groupings.some(function (s) { return s.getter == f.field; }) == true; });
                    var srcColumns = gridColumns.filter(function (f) { return groupings.some(function (s) { return s.getter == f.field; }) == false; });
                    var columnStyles = {};
                    var columns = toAutoTableColumns(srcColumns, columnStyles, options.columnTitles);
                    var keys = columns.filter(function (f) { return groupings.some(function (s) { return s.getter == f; }) == false; }).map(function (x) { return x.dataKey; });
                    var totalPagesExp = "{{T}}";
                    var pageNumbers = options.pageNumbers == null || options.pageNumbers;
                    var autoOptions = $.extend({
                        margin: { top: 40, left: 40, right: 40, bottom: pageNumbers ? 110 : 100 },
                        startY: 90,
                        styles: {
                            fontSize: 8,
                            overflow: 'linebreak',
                            cellPadding: 5,
                            valign: 'middle',
                            lineColor: 0
                        },
                        headerStyles: { fillColor: 255, textColor: 0, lineWidth: 1, fillStyle: 'S', halign: 'center', valign: 'middle' },
                        columnStyles: columnStyles
                    }, options.tableOptions);
                    ///region Title
                    {
                        if (q.jsPDFHeaderImageData) {
                            doc.addImage(q.jsPDFHeaderImageData, 'PNG', 40, 40, 60, 60);
                        }
                        doc.autoTable([q.jsPDFHeaderTitle], [], {
                            margin: { bottom: 10, left: 110 },
                            startY: options.titleTop || 45,
                            headerStyles: { fillColor: 255, textColor: 0 },
                            styles: { halign: 'left', fontSize: 18 }
                        });
                        var reportTitle = '';
                        if (groupingColumns[0])
                            reportTitle = groupingColumns.map(function (m) { return m.name; }).join(', ') + ' wise ';
                        reportTitle += options.reportTitle || g.getTitle();
                        reportTitle += " Report";
                        doc.autoTable([reportTitle], [], {
                            margin: { top: 10, bottom: 10, left: 110 },
                            startY: doc.autoTableEndPosY(),
                            headerStyles: { fillColor: 255, textColor: 0 },
                            styles: { halign: 'left', fontSize: 14 }
                        });
                    }
                    ///region Header
                    {
                        var header = function (data) {
                        };
                        autoOptions.beforePageContent = header;
                    }
                    ///region Footer
                    {
                        if (pageNumbers) {
                            var footer = function (data) {
                                var str = data.pageCount;
                                // Total page number plugin only available in jspdf v1.0+
                                if (typeof doc.putTotalPages === 'function') {
                                    str = str + " / " + totalPagesExp;
                                }
                                doc.autoTableText(str, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - autoOptions.margin.bottom, {
                                    halign: 'center'
                                });
                            };
                            autoOptions.afterPageContent = footer;
                        }
                    }
                    ///region Content
                    {
                        //extra space after title
                        doc.autoTable([''], [], {
                            startY: doc.autoTableEndPosY() + 20,
                            headerStyles: { fillColor: 255, textColor: 0 }
                        });
                        var headerHeight = 125;
                        var headerFontSizeBase = 11;
                        var entities = response.Entities || [];
                        g.setItems(entities);
                        var groups = g.view.getGroups(); //grouped data
                        if (groups.length > 0) {
                            var ggg = function (grps, parentGroupIndex) {
                                var endPosY = doc.autoTableEndPosY();
                                for (var i = 0; i < grps.length; i++) {
                                    var group = grps[i];
                                    var level = group.level + 1;
                                    doc.autoTable([group.title], [], {
                                        margin: { left: 30 + level * 10, top: 2 },
                                        startY: doc.autoTableEndPosY(),
                                        headerStyles: { fillColor: 255, textColor: 0, fontSize: 10 - group.level, cellPadding: 0 }
                                    });
                                    if (group.groups) {
                                        ggg(group.groups, i);
                                    }
                                    else {
                                        var data = toAutoTableData(group.rows, keys, srcColumns);
                                        autoOptions.startY = doc.autoTableEndPosY();
                                        autoOptions.margin.left = 30 + level * 10;
                                        autoOptions.margin.bottom = 10;
                                        doc.autoTable(columns, data, autoOptions);
                                        //for extra space
                                        doc.autoTable([''], [], {
                                            margin: { left: 30 + level * 10, top: 2 },
                                            startY: doc.autoTableEndPosY() + 10,
                                            headerStyles: { fillColor: 255, textColor: 0 }
                                        });
                                    }
                                }
                            };
                            ggg(groups, -1);
                        }
                        else {
                            var data = toAutoTableData(g.getItems(), keys, srcColumns);
                            autoOptions.startY = headerHeight;
                            doc.autoTable(columns, data, autoOptions);
                        }
                    }
                    if (typeof doc.putTotalPages === 'function') {
                        doc.putTotalPages(totalPagesExp);
                    }
                    if (!options.output || options.output == "file") {
                        var fileName = options.reportTitle || "{0}_{1}.pdf";
                        fileName = Q.format(fileName, g.getTitle() || "report", Q.formatDate(new Date(), "yyyyMMdd_HHmm"));
                        doc.save(fileName);
                        return;
                    }
                    if (options.autoPrint)
                        doc.autoPrint();
                    var output = options.output;
                    if (output == 'newwindow' || '_blank')
                        output = 'dataurlnewwindow';
                    else if (output == 'window')
                        output = 'datauri';
                    doc.output(output);
                }
            });
        }
        PdfExportHelper.exportToPdf = exportToPdf;
        function createToolButton(options) {
            return {
                title: options.title || '',
                hint: options.hint || 'PDF',
                cssClass: 'export-pdf-button',
                onClick: function () { return exportToPdf(options); },
                separator: options.separator
            };
        }
        PdfExportHelper.createToolButton = createToolButton;
        function includeJsPDF() {
            if (typeof jsPDF !== "undefined")
                return;
            var script = $("jsPDFScript");
            if (script.length > 0)
                return;
            $("<script/>")
                .attr("type", "text/javascript")
                .attr("id", "jsPDFScript")
                .attr("src", Q.resolveUrl("~/Scripts/jspdf.min.js"))
                .appendTo(document.head);
        }
        function includeAutoTable() {
            includeJsPDF();
            if (typeof jsPDF === "undefined" ||
                typeof jsPDF.API == "undefined" ||
                typeof jsPDF.API.autoTable !== "undefined")
                return;
            var script = $("jsPDFAutoTableScript");
            if (script.length > 0)
                return;
            $("<script/>")
                .attr("type", "text/javascript")
                .attr("id", "jsPDFAutoTableScript")
                .attr("src", Q.resolveUrl("~/Scripts/jspdf.plugin.autotable.min.js"))
                .appendTo(document.head);
        }
    })(PdfExportHelper = _Ext.PdfExportHelper || (_Ext.PdfExportHelper = {}));
})(_Ext || (_Ext = {}));
var _Ext;
(function (_Ext) {
    var ReportHelper;
    (function (ReportHelper) {
        function createToolButton(options) {
            return {
                title: Q.coalesce(options.title, 'Report'),
                cssClass: Q.coalesce(options.cssClass, 'print-button'),
                icon: options.icon,
                onClick: function () {
                    ReportHelper.execute(options);
                }
            };
        }
        ReportHelper.createToolButton = createToolButton;
        function execute(options) {
            var opt = options.getParams ? options.getParams() : options.params;
            Q.postToUrl({
                url: '~/Report/' + (options.download ? 'Download' : 'Render'),
                params: {
                    key: options.reportKey,
                    ext: Q.coalesce(options.extension, 'pdf'),
                    opt: opt ? $.toJSON(opt) : ''
                },
                target: Q.coalesce(options.target, '_blank')
            });
        }
        ReportHelper.execute = execute;
    })(ReportHelper = _Ext.ReportHelper || (_Ext.ReportHelper = {}));
})(_Ext || (_Ext = {}));
var _Ext;
(function (_Ext) {
    var DialogUtils;
    (function (DialogUtils) {
        function pendingChangesConfirmation(element, hasPendingChanges) {
            element.bind('dialogbeforeclose', function (e) {
                if (!Serenity.WX.hasOriginalEvent(e) || !hasPendingChanges()) {
                    return;
                }
                e.preventDefault();
                Q.confirm('You have pending changes. Save them?', function () { return element.find('div.save-and-close-button').click(); }, {
                    onNo: function () {
                        element.dialog().dialog('close');
                    }
                });
            });
        }
        DialogUtils.pendingChangesConfirmation = pendingChangesConfirmation;
    })(DialogUtils = _Ext.DialogUtils || (_Ext.DialogUtils = {}));
})(_Ext || (_Ext = {}));
function loadScriptAsync(url, callback) {
    // Adding the script tag to the head as suggested before
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onload = callback;
    // Fire the loading
    head.appendChild(script);
}
function loadScript(url) {
    $.ajax({
        url: url,
        dataType: "script",
        async: false,
        cache: true,
        success: function () {
            // all good...
        },
        error: function () {
            throw new Error("Could not load script " + url);
        }
    });
}
function usingVuejs() {
    if (window['Vue']) {
        return;
    }
    else {
        loadScript(Q.resolveUrl("~/Scripts/vue.js"));
        //filters
        window['Vue'].filter('formatDate', function (value, format) {
            if (value) {
                return Q.formatDate(value, format);
            }
        });
        window['Vue'].filter('formatDateReadable', function (value) {
            if (value) {
                var date = Q.parseISODateTime(value);
                return date.getDate() + ' ' + _Ext.Months[date.getMonth()].substr(0, 3) + ' ' + date.getFullYear();
            }
        });
        window['Vue'].filter('dayOnly', function (value) {
            if (value) {
                return Q.formatDate(value, 'dd');
            }
        });
        window['Vue'].filter('monthOnly', function (value) {
            if (value) {
                var date = Q.parseISODateTime(value);
                return _Ext.Months[date.getMonth()];
            }
        });
        window['Vue'].filter('monthOnly3', function (value) {
            if (value) {
                var date = Q.parseISODateTime(value);
                return _Ext.Months[date.getMonth()].substr(0, 3);
            }
        });
        window['Vue'].filter('yearOnly', function (value) {
            if (value) {
                var date = Q.parseISODateTime(value);
                return date.getFullYear();
            }
        });
        window['Vue'].filter('timeOnlyHHmm', function (value) {
            if (value) {
                return Q.formatDate(value, 'HH:mm');
            }
        });
        window['Vue'].filter('formatDateTimeReadable', function (value) {
            if (value) {
                var date = Q.parseISODateTime(value);
                return date.getDate() + ' ' + _Ext.Months[date.getMonth()] + ' ' + date.getFullYear()
                    + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
            }
        });
        window['Vue'].filter('enumText', function (value, enumKey) {
            if (value) {
                return Serenity.EnumFormatter.format(Serenity.EnumTypeRegistry.get(enumKey), value);
            }
        });
        window['Vue'].filter('truncate', function (text, length, clamp) {
            clamp = clamp || '...';
            length = length || 30;
            if (text.length <= length)
                return text;
            var tcText = text.slice(0, length - clamp.length);
            var last = tcText.length - 1;
            while (last > 0 && tcText[last] !== ' ' && tcText[last] !== clamp[0])
                last -= 1;
            // Fix for case when text dont have any `space`
            last = last || length - clamp.length;
            tcText = tcText.slice(0, last);
            return tcText + clamp;
        });
        window['Vue'].filter('capitalize', function (value) {
            if (!value)
                return '';
            value = value.toString();
            return value.charAt(0).toUpperCase() + value.toLowerCase().slice(1);
        });
    }
}
function includeBootstrapColorPickerCss() {
    var style = $("#colorpicker");
    if (style.length > 0) {
        return;
    }
    $("<link/>")
        .attr("type", "text/css")
        .attr("id", "colorpicker")
        .attr("rel", "stylesheet")
        .attr("href", Q.resolveUrl("~/Scripts/colorpicker/bootstrap-colorpicker.min.css"))
        .appendTo(document.head);
}
function usingBootstrapColorPicker() {
    if (window['colorpicker']) {
        return;
    }
    else {
        includeBootstrapColorPickerCss();
        loadScript(Q.resolveUrl("~/Scripts/colorpicker/bootstrap-colorpicker.min.js"));
    }
}
function includeJqueryUITimepickerAddonCss() {
    var style = $("#datetimepicker");
    if (style.length > 0) {
        return;
    }
    $("<link/>")
        .attr("type", "text/css")
        .attr("id", "datetimepicker")
        .attr("rel", "stylesheet")
        .attr("href", Q.resolveUrl("~/Content/jquery-ui-timepicker-addon.css"))
        .appendTo(document.head);
}
function usingJqueryUITimepickerAddon() {
    if (window['datetimepicker']) {
        return;
    }
    else {
        includeJqueryUITimepickerAddonCss();
        loadScript(Q.resolveUrl("~/Scripts/jquery-ui-timepicker-addon.js"));
    }
}
function usingBabylonjs() {
    if (window['BABYLON'] && window['BABYLON']['Engine']) {
        return;
    }
    else {
        loadScript(Q.resolveUrl("~/Scripts/babylonjs/babylon.js"));
    }
}
function usingChartjs() {
    if (window['Chart']) {
        return;
    }
    else {
        loadScript(Q.resolveUrl('~/Scripts/chartjs/Chart.js'));
    }
}
function includeCustomMarkerCss() {
    var style = $("#customMarker");
    if (style.length > 0) {
        return;
    }
    $("<link/>")
        .attr("type", "text/css")
        .attr("id", "customMarker")
        .attr("rel", "stylesheet")
        .attr("href", Q.resolveUrl("~/Scripts/googlemap/CustomMarker.css"))
        .appendTo(document.head);
}
function usingCustomMarker() {
    if (window['CustomMarker']) {
        return;
    }
    else {
        includeCustomMarkerCss();
        loadScript(Q.resolveUrl("~/Scripts/googlemap/CustomMarker.js"));
    }
}
function includeGoogleMap(callback, callbackFullName) {
    if (window['google']) {
        if (callback)
            callback();
        return;
    }
    var script = $("#googleScript");
    if (script.length > 0) {
        if (callback)
            callback();
        return;
    }
    $("<script/>")
        .attr("type", "text/javascript")
        .attr("id", "googleScript")
        .attr("src", 'http://maps.google.com/maps/api/js?v=3.31&key=AIzaSyCRiY7aFA2cI6STbl3YQ3r6m1IpUFmBM98&callback=' + callbackFullName || 'includeGoogleMap')
        .appendTo(document.head);
}
function includeMarkerWithLabel() {
    if (window['MarkerWithLabel']) {
        return;
    }
    var script = $("#MarkerWithLabelScript");
    if (script.length > 0) {
        return;
    }
    $("<script/>")
        .attr("type", "text/javascript")
        .attr("id", "MarkerWithLabelScript")
        .attr("src", Q.resolveUrl("~/Scripts/googlemap/markerwithlabel.js"))
        .appendTo(document.head);
}
function includeVisCss() {
    var style = $("#Vis");
    if (style.length > 0) {
        return;
    }
    $("<link/>")
        .attr("type", "text/css")
        .attr("id", "Vis")
        .attr("rel", "stylesheet")
        .attr("href", Q.resolveUrl("~/Scripts/visjs/vis.min.css"))
        .appendTo(document.head);
}
function usingVisjs() {
    if (window['vis']) {
        return;
    }
    else {
        includeVisCss();
        loadScript(Q.resolveUrl("~/Scripts/visjs/vis.min.js"));
    }
}
function usingJsonDiffPatch() {
    if (window['jsondiffpatch']) {
        return;
    }
    else {
        $("<link/>").attr("type", "text/css").attr("id", "JsonDiffPatch").attr("rel", "stylesheet")
            .attr("href", Q.resolveUrl("~/Modules/_Ext/AuditLogViewer/jsondiffpatch/formatters-styles/html.css"))
            .appendTo(document.head);
        loadScript(Q.resolveUrl("~/Modules/_Ext/AuditLogViewer/jsondiffpatch/jsondiffpatch.min.js"));
        loadScript(Q.resolveUrl("~/Modules/_Ext/AuditLogViewer/jsondiffpatch/jsondiffpatch-formatters.min.js"));
    }
}
function usingSlickGridEditors() {
    if (window['Slick'] && window['Slick']['Editors'] && window['Slick']['Editors']['Text']) {
        return;
    }
    else {
        loadScript(Q.resolveUrl("~/Modules/_Ext/Editors/slick.editors.js"));
    }
}
function usingSlickAutoColumnSize() {
    if (window['Slick'] && window['Slick']['AutoColumnSize']) {
        return;
    }
    else {
        loadScript(Q.resolveUrl("~/Modules/_Ext/CustomSlickGridPlugin/slick.autocolumnsize.js"));
    }
}
function usingSlickHeaderFilters() {
    if (window['Slick'] && window['Slick']['HeaderFilters']) {
        return;
    }
    else {
        $("<link/>")
            .attr("type", "text/css")
            .attr("id", "CustomSlickGridPlugin")
            .attr("rel", "stylesheet")
            .attr("href", Q.resolveUrl("~/Modules/_Ext/CustomSlickGridPlugin/slick-headerfilters.css"))
            .appendTo(document.head);
        loadScript(Q.resolveUrl("~/Modules/_Ext/CustomSlickGridPlugin/slick.headerfilters.js"));
    }
}
var q;
(function (q) {
    function groupBy(xs, key) {
        return xs.reduce(function (rv, x) {
            (rv[x[key]] = rv[x[key]] || []).push(x);
            return rv;
        }, {});
    }
    q.groupBy = groupBy;
    function sortBy(xs, key) {
        return xs.sort(function (a, b) {
            if (a[key] < b[key]) {
                return -1;
            }
            if (a[key] > b[key]) {
                return 1;
            }
            return 0;
        });
    }
    q.sortBy = sortBy;
    function sortByDesc(xs, key) {
        return xs.sort(function (a, b) {
            if (a[key] > b[key]) {
                return -1;
            }
            if (a[key] < b[key]) {
                return 1;
            }
            return 0;
        });
    }
    q.sortByDesc = sortByDesc;
})(q || (q = {}));
var q;
(function (q) {
    function nextTick(date) {
        return new Date(date.getTime() + 1);
    }
    q.nextTick = nextTick;
    function addMinutes(date, minutes) {
        return new Date(date.getTime() + minutes * 60000);
    }
    q.addMinutes = addMinutes;
    function addHours(date, hours) {
        return new Date(date.getTime() + hours * 3600000);
    }
    q.addHours = addHours;
    function getHours(fromDate, toDate) {
        var hours = 0;
        if (fromDate && toDate) {
            var totalMiliSeconds = toDate.valueOf() - fromDate.valueOf();
            hours = totalMiliSeconds / (1000 * 60 * 60);
        }
        return hours;
    }
    q.getHours = getHours;
    function getDays24HourPulse(fromDate, toDate) {
        var days = q.getHours(fromDate, toDate) / 24;
        return Math.ceil(days);
    }
    q.getDays24HourPulse = getDays24HourPulse;
    function getDays(pFromDate, pToDate) {
        var fromDate = new Date(pFromDate.getFullYear(), pFromDate.getMonth(), pFromDate.getDate());
        var toDate = new Date(pToDate.getFullYear(), pToDate.getMonth(), pToDate.getDate(), 23, 59, 59);
        var days = q.getHours(fromDate, toDate) / 24;
        //days = days <= 0 ? 1 : days;
        return Math.ceil(days);
    }
    q.getDays = getDays;
    function getMonths(fromDate, toDate) {
        var months = q.getDays24HourPulse(fromDate, toDate) / 30;
        return Math.ceil(months);
    }
    q.getMonths = getMonths;
    function getCalenderMonths(fromDate, toDate) {
        var months;
        months = (toDate.getFullYear() - fromDate.getFullYear()) * 12;
        months -= fromDate.getMonth();
        months += toDate.getMonth();
        return months <= 0 ? 0 : months;
    }
    q.getCalenderMonths = getCalenderMonths;
    function getCalenderMonthsCeil(fromDate, toDate) {
        var months = q.getCalenderMonths(fromDate, toDate);
        return months == 0 ? 1 : months;
    }
    q.getCalenderMonthsCeil = getCalenderMonthsCeil;
    function addDays(date, days) {
        var result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }
    q.addDays = addDays;
    function addMonths(date, months) {
        var result = new Date(date);
        result.setMonth(result.getMonth() + months);
        return result;
    }
    q.addMonths = addMonths;
    function addYear(date, years) {
        var result = new Date(date);
        result.setFullYear(result.getFullYear() + years);
        return result;
    }
    q.addYear = addYear;
    function getPeriods(fromDate, toDate, periodUnit) {
        if (periodUnit == _Ext.TimeUoM.Day) {
            var days = q.getDays(fromDate, toDate);
            return days;
        }
        else if (periodUnit == _Ext.TimeUoM.Month) {
            var months = q.getMonths(fromDate, toDate);
            return months == 0 ? 1 : months;
        }
        else if (periodUnit == _Ext.TimeUoM.CalenderMonth) {
            var calenderMonths = q.getCalenderMonths(fromDate, toDate);
            return calenderMonths + 1;
        }
    }
    q.getPeriods = getPeriods;
    function addPeriod(date, period, periodUnit) {
        var result = new Date(date);
        if (periodUnit == _Ext.TimeUoM.Day)
            result.setDate(result.getDate() + period);
        else if (periodUnit == _Ext.TimeUoM.Month)
            result.setMonth(result.getMonth() + period);
        else if (periodUnit == _Ext.TimeUoM.CalenderMonth) {
            result.setDate(1);
            result.setMonth(result.getMonth() + period);
        }
        return result;
    }
    q.addPeriod = addPeriod;
    function formatISODate(date) {
        if (date) {
            var offset = date.getTimezoneOffset();
            var result = new Date(date.getTime() - offset * 60 * 1000);
            return result.toISOString();
        }
        else
            return null;
    }
    q.formatISODate = formatISODate;
    //editor utils
    function bindDateTimeEditorChange(editor, handler) {
        editor.change(handler);
        editor.element.closest('.field').find('.time').change(handler);
        editor.element.closest('.field').find('.inplace-now').click(handler);
    }
    q.bindDateTimeEditorChange = bindDateTimeEditorChange;
    function initDateRangeEditor(fromDateEditor, toDateEditor, onChangeHandler) {
        var startDateTextBox = fromDateEditor.element;
        var endDateTextBox = toDateEditor.element;
        startDateTextBox.datepicker('option', 'onClose', function (dateText, inst) {
            if (endDateTextBox.val() != '') {
                var testStartDate = startDateTextBox.datepicker('getDate');
                var testEndDate = endDateTextBox.datepicker('getDate');
                if (testStartDate > testEndDate)
                    endDateTextBox.datepicker('setDate', testStartDate);
            }
            else {
                endDateTextBox.val(dateText);
            }
        });
        endDateTextBox.datepicker('option', 'minDate', startDateTextBox.datepicker('getDate'));
        startDateTextBox.datepicker('option', 'onSelect', function (selectedDateTime) {
            endDateTextBox.datepicker('option', 'minDate', startDateTextBox.datepicker('getDate'));
        });
        endDateTextBox.datepicker('option', 'onClose', function (dateText, inst) {
            if (startDateTextBox.val() != '') {
                var testStartDate = startDateTextBox.datepicker('getDate');
                var testEndDate = endDateTextBox.datepicker('getDate');
                if (testStartDate > testEndDate)
                    startDateTextBox.datepicker('setDate', testEndDate);
            }
            else {
                startDateTextBox.val(dateText);
            }
        });
        startDateTextBox.datepicker('option', 'maxDate', endDateTextBox.datepicker('getDate'));
        endDateTextBox.datepicker('option', 'onSelect', function (selectedDateTime) {
            startDateTextBox.datepicker('option', 'maxDate', endDateTextBox.datepicker('getDate'));
        });
        setTimeout(function () {
            fromDateEditor.change(onChangeHandler);
            toDateEditor.change(onChangeHandler);
        }, 500);
    }
    q.initDateRangeEditor = initDateRangeEditor;
    function initDateTimeRangeEditor(fromDateTimeEditor, toDateTimeEditor, onChangeHandler) {
        //fromDateTimeEditor.destroy();
        //toDateTimeEditor.destroy();
        var startDateTextBox = fromDateTimeEditor.element;
        var endDateTextBox = toDateTimeEditor.element;
        //startDateTextBox.datetimepicker('option', 'timeFormat', 'HH:mm z')
        startDateTextBox.datetimepicker('option', 'onClose', function (dateText, inst) {
            if (endDateTextBox.val() != '') {
                var testStartDate = startDateTextBox.datetimepicker('getDate');
                var testEndDate = endDateTextBox.datetimepicker('getDate');
                if (testStartDate > testEndDate)
                    endDateTextBox.datetimepicker('setDate', testStartDate);
            }
            else {
                endDateTextBox.val(dateText);
            }
        });
        endDateTextBox.datetimepicker('option', 'minDate', startDateTextBox.datetimepicker('getDate'));
        startDateTextBox.datetimepicker('option', 'onSelect', function (selectedDateTime) {
            endDateTextBox.datetimepicker('option', 'minDate', startDateTextBox.datetimepicker('getDate'));
        });
        //endDateTextBox.datetimepicker('option', 'timeFormat', 'HH:mm z')
        endDateTextBox.datetimepicker('option', 'onClose', function (dateText, inst) {
            if (startDateTextBox.val() != '') {
                var testStartDate = startDateTextBox.datetimepicker('getDate');
                var testEndDate = endDateTextBox.datetimepicker('getDate');
                if (testStartDate > testEndDate)
                    startDateTextBox.datetimepicker('setDate', testEndDate);
            }
            else {
                startDateTextBox.val(dateText);
            }
        });
        startDateTextBox.datetimepicker('option', 'maxDate', endDateTextBox.datetimepicker('getDate'));
        endDateTextBox.datetimepicker('option', 'onSelect', function (selectedDateTime) {
            startDateTextBox.datetimepicker('option', 'maxDate', endDateTextBox.datetimepicker('getDate'));
        });
        setTimeout(function () {
            fromDateTimeEditor.change(onChangeHandler);
            toDateTimeEditor.change(onChangeHandler);
        }, 500);
    }
    q.initDateTimeRangeEditor = initDateTimeRangeEditor;
    function formatDate(d, format) {
        if (!d) {
            return '';
        }
        var date;
        if (typeof d == "string") {
            var res = Q.parseDate(d);
            if (!res)
                return d;
            date = res;
        }
        else
            date = d;
        if (format == null || format == "d") {
            format = Q.Culture.dateFormat;
        }
        else {
            switch (format) {
                case "g":
                    format = Q.Culture.dateTimeFormat.replace(":ss", "");
                    break;
                case "G":
                    format = Q.Culture.dateTimeFormat;
                    break;
                case "s":
                    format = "yyyy-MM-ddTHH:mm:ss";
                    break;
                case "u": return Q.formatISODateTimeUTC(date);
            }
        }
        var pad = function (i) {
            return Q.zeroPad(i, 2);
        };
        return format.replace(new RegExp('dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|fff|zz?z?|\\/', 'g'), function (fmt) {
            var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            switch (fmt) {
                case '/': return Q.Culture.dateSeparator;
                case 'hh': return pad(((date.getHours() < 13) ? date.getHours() : (date.getHours() - 12)));
                case 'h': return ((date.getHours() < 13) ? date.getHours() : (date.getHours() - 12));
                case 'HH': return pad(date.getHours());
                case 'H': return date.getHours();
                case 'mm': return pad(date.getMinutes());
                case 'm': return date.getMinutes();
                case 'ss': return pad(date.getSeconds());
                case 's': return date.getSeconds();
                case 'yyyy': return date.getFullYear();
                case 'yy': return date.getFullYear().toString().substr(2, 4);
                case 'dddd': return days[date.getDay()];
                case 'ddd': return days[date.getDay()].substr(0, 3);
                case 'dd': return pad(date.getDate());
                case 'd': return date.getDate().toString();
                case 'MMMM': return months[date.getMonth()];
                case 'MMM': return months[date.getMonth()].substr(0, 3);
                case 'MM': return pad(date.getMonth() + 1);
                case 'M': return date.getMonth() + 1;
                case 't': return ((date.getHours() < 12) ? 'A' : 'P');
                case 'tt': return ((date.getHours() < 12) ? 'AM' : 'PM');
                case 'fff': return Q.zeroPad(date.getMilliseconds(), 3);
                case 'zzz':
                case 'zz':
                case 'z': return '';
                default: return fmt;
            }
        });
    }
    q.formatDate = formatDate;
})(q || (q = {}));
var q;
(function (q) {
    function initDetailEditor(dialog, editor, options) {
        if (options === void 0) { options = {}; }
        if (options.showCaption != true) {
            editor.element.siblings('.caption').hide();
        }
        if (options.hideToolbar == true) {
            editor.element.find('.grid-toolbar').hide();
        }
        if (options.isReadOnly == true) {
            editor.set_readOnly(options.isReadOnly);
        }
        editor.parentDialog = dialog;
        dialog.onAfterSetDialogSize = function () {
            var $gridContainer = editor.element.find('.grid-container');
            if (options.height) {
                editor.slickGrid.setOptions({ autoHeight: false });
                $gridContainer.height(options.height);
            }
            else {
                var top_1 = $gridContainer.position().top;
                var height = dialog.element.innerHeight() - top_1 - 40;
                if (height > 200)
                    $gridContainer.height(height);
            }
            if (options.width) {
                $gridContainer.width(options.width);
            }
            editor.slickGrid.resizeCanvas();
        };
    }
    q.initDetailEditor = initDetailEditor;
    function setGridEditorHeight(editor, heightInPx) {
        editor.css('height', heightInPx + 'px');
        editor.find('.grid-container')
            .css('height', (heightInPx - 25) + 'px')
            .height(heightInPx);
    }
    q.setGridEditorHeight = setGridEditorHeight;
    function addNotificationIcon(editor, isSuccess) {
        var isAddOnInitialized = editor.element.data('isAddOnInitialized');
        if (isAddOnInitialized != true) {
            editor.element.after('<span class="text text-danger" style="padding:3px"><i class="fa fa-times"></i></span>');
            editor.element.data('isAddOnInitialized', true);
        }
        if (isSuccess == true) {
            editor.element.switchClass('bg-danger', 'bg-success')
                .siblings('.text').switchClass('text-danger', 'text-success')
                .children().switchClass('fa-times', 'fa-check');
        }
        else {
            editor.element.switchClass('bg-success', 'bg-danger')
                .siblings('.text').switchClass('text-success', 'text-danger')
                .children().switchClass('fa-check', 'fa-times');
        }
    }
    q.addNotificationIcon = addNotificationIcon;
    function setEditorLabel(editor, value) {
        editor.element.siblings('label').text(value);
    }
    q.setEditorLabel = setEditorLabel;
    function hideEditorLabel(editor) {
        editor.element.siblings('label').hide();
    }
    q.hideEditorLabel = hideEditorLabel;
    function setEditorCategoryLabel(editor, value) {
        var categoryAnchor = editor.element.closest('.category').find('.category-anchor');
        categoryAnchor.text(value);
        var categoryAnchorName = categoryAnchor.attr('name');
        categoryAnchor.closest('.s-PropertyGrid').find("a[href='#" + categoryAnchorName + "']").text(value);
    }
    q.setEditorCategoryLabel = setEditorCategoryLabel;
    function hideEditorCategory(editor, value) {
        if (value === void 0) { value = true; }
        if (value == true)
            editor.element.closest('.category').hide();
        else
            editor.element.closest('.category').show();
        var categoryAnchor = editor.element.closest('.category').find('.category-anchor');
        var categoryAnchorName = categoryAnchor.attr('name');
        if (value == true)
            categoryAnchor.closest('.s-PropertyGrid').find("a[href='#" + categoryAnchorName + "']").hide();
        else
            categoryAnchor.closest('.s-PropertyGrid').find("a[href='#" + categoryAnchorName + "']").show();
    }
    q.hideEditorCategory = hideEditorCategory;
    function hideCategories(containerElement, value) {
        if (value === void 0) { value = true; }
        if (value == true)
            containerElement.find('.category').hide();
        else
            containerElement.find('.category').show();
        var categoryAnchor = containerElement.find('.category').find('.category-anchor');
        var categoryAnchorName = categoryAnchor.attr('name');
        if (value == true)
            categoryAnchor.closest('.s-PropertyGrid').find("a[href='#" + categoryAnchorName + "']").hide();
        else
            categoryAnchor.closest('.s-PropertyGrid').find("a[href='#" + categoryAnchorName + "']").show();
    }
    q.hideCategories = hideCategories;
    function hideFields(containerElement, value) {
        if (value === void 0) { value = true; }
        if (value == true)
            containerElement.find('.field').hide();
        else
            containerElement.find('.field').show();
    }
    q.hideFields = hideFields;
    function hideFieldsAndCategories(containerElement, value) {
        if (value === void 0) { value = true; }
        hideFields(containerElement);
        hideCategories(containerElement);
    }
    q.hideFieldsAndCategories = hideFieldsAndCategories;
    function hideField(editor, value) {
        if (value === void 0) { value = true; }
        if (editor) {
            if (value == true)
                editor.element.closest('.field').hide();
            else
                editor.element.closest('.field').show();
        }
    }
    q.hideField = hideField;
    function showField(editor, value) {
        if (value === void 0) { value = true; }
        if (editor) {
            if (value == true)
                editor.element.closest('.field').show();
            else
                editor.element.closest('.field').hide();
        }
    }
    q.showField = showField;
    function showFieldAndCategory(editor, value) {
        if (value === void 0) { value = true; }
        showField(editor, value);
        if (value == true)
            hideEditorCategory(editor, false);
    }
    q.showFieldAndCategory = showFieldAndCategory;
    function hideEditorTab(editor, value) {
        if (value === void 0) { value = true; }
        var tabId = editor.element.closest('.tab-pane').hide().attr('id');
        var tabAnchor = editor.element.closest('.s-PropertyGrid').find("a[href='#" + tabId + "']");
        tabAnchor.closest('li').hide();
    }
    q.hideEditorTab = hideEditorTab;
    function readOnlyEditorTab(editor, value) {
        if (value === void 0) { value = true; }
        var $editors = editor.element.closest('.tab-pane').find('.editor');
        Serenity.EditorUtils.setReadonly($editors, value);
    }
    q.readOnlyEditorTab = readOnlyEditorTab;
    function readOnlyEditorCategory(editor, value) {
        if (value === void 0) { value = true; }
        var $editors = editor.element.closest('.category').find('.editor');
        Serenity.EditorUtils.setReadonly($editors, value);
    }
    q.readOnlyEditorCategory = readOnlyEditorCategory;
    function readonlyEditorCategory($editor, value) {
        if (value === void 0) { value = true; }
        var $editors = $editor.closest('.category').find('.editor');
        Serenity.EditorUtils.setReadonly($editors, value);
    }
    q.readonlyEditorCategory = readonlyEditorCategory;
    function readOnlyEditor(editor, value) {
        if (value === void 0) { value = true; }
        Serenity.EditorUtils.setReadOnly(editor, value);
    }
    q.readOnlyEditor = readOnlyEditor;
    function readonlyEditor($editor, value) {
        if (value === void 0) { value = true; }
        Serenity.EditorUtils.setReadonly($editor, value);
    }
    q.readonlyEditor = readonlyEditor;
    function moveEditorFromTab(editor, toElement, isPrepend) {
        if (isPrepend === void 0) { isPrepend = false; }
        var fieldDiv = editor.element.closest('.field');
        if (isPrepend == true)
            fieldDiv.prependTo(toElement);
        else
            fieldDiv.appendTo(toElement);
    }
    q.moveEditorFromTab = moveEditorFromTab;
    function moveEditorCategoryFromTab(editor, toElement, isPrepend) {
        if (isPrepend === void 0) { isPrepend = false; }
        var fieldDiv = editor.element.closest('.field');
        var categoryDiv = editor.element.closest('.category');
        if (isPrepend == true)
            categoryDiv.prependTo(toElement);
        else
            categoryDiv.appendTo(toElement);
        //hide category navigation link
        var categoryAnchor = categoryDiv.find('.category-anchor');
        var categoryAnchorName = categoryAnchor.attr('name');
        categoryAnchor.closest('.s-PropertyGrid').find("a[href='#" + categoryAnchorName + "']").hide();
    }
    q.moveEditorCategoryFromTab = moveEditorCategoryFromTab;
    function selectEditorTab(editor) {
        var tabId = editor.element.closest('.tab-pane').attr('id');
        var tabAnchor = editor.element.closest('.s-PropertyGrid').find("a[href='#" + tabId + "']");
        tabAnchor.tab('show');
    }
    q.selectEditorTab = selectEditorTab;
    // for select2 lookup editor
    function getSelectedRow(e) {
        var selectedItem = e.added;
        var selectedRow = selectedItem.source;
        return selectedRow;
    }
    q.getSelectedRow = getSelectedRow;
})(q || (q = {}));
var q;
(function (q) {
    function getEnumText(enumKey, value) {
        var title = Serenity.EnumFormatter.format(Serenity.EnumTypeRegistry.get(enumKey), value);
        return title;
    }
    q.getEnumText = getEnumText;
    function getEnumValues(enumType) {
        var items = [];
        for (var item in enumType) {
            if (!isNaN(Number(item))) {
                items.push(enumType[item]);
            }
        }
        return items;
    }
    q.getEnumValues = getEnumValues;
    function getEnumKeys(enumType) {
        var items = [];
        for (var item in enumType) {
            if (!isNaN(Number(item))) {
                items.push(item);
            }
        }
        return items;
    }
    q.getEnumKeys = getEnumKeys;
})(q || (q = {}));
var q;
(function (q) {
    function isCosmicThemeApplied() {
        return document.body.className.indexOf('cosmic') >= 0;
    }
    q.isCosmicThemeApplied = isCosmicThemeApplied;
    function getSelectedLanguage() {
        return document.getElementById('LanguageSelect').value;
    }
    q.getSelectedLanguage = getSelectedLanguage;
    function formatDecimal(value) {
        var title = Serenity.NumberFormatter.format(value, '#,##0.00');
        return title;
    }
    q.formatDecimal = formatDecimal;
    function formatInt(value) {
        var title = Serenity.NumberFormatter.format(value, '#,##0');
        return title;
    }
    q.formatInt = formatInt;
    // Check numeric or not then return value, if NAN then return zero(0)
    function ToNumber(value) {
        return isNaN(value) ? 0 : value;
    }
    q.ToNumber = ToNumber;
    function ToBool(value) {
        return value == 'true' ? true : false;
    }
    q.ToBool = ToBool;
    //colorDepth should be within '0123456789ABCDEF'
    function getRandomColor(hexLetters) {
        var letters = hexLetters; // '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            var letterIndex = Math.floor((Math.random()) * letters.length);
            if (letterIndex > 15)
                letterIndex = 15;
            if (letterIndex < 0)
                letterIndex = 0;
            color += letters[letterIndex];
        }
        return color;
    }
    q.getRandomColor = getRandomColor;
})(q || (q = {}));
var isPageRefreshRequired;
//const nameof = <T>(name: keyof T) => name;
//const nameofFactory = <T>() => (name: keyof T) => name;
//usage const nameof = nameofFactory<Edoc.RevenueReportModel>();
var q;
(function (q) {
    q.queryString = {};
    q.jsPDFHeaderImageData = null;
    q.jsPDFHeaderTitle = 'Report Title';
    q.useSerenityInlineEditors = true;
    q.DefaultMainGridOptions = {
        AutoColumnSize: true,
        FadeInEffectWhenInit: true,
        ShowAnyInEqualityFilterWithTextValue: true,
        ShowInlineActionsColumn: true,
        ShowDeleteInlineButtun: false,
        ShowEditInlineButtun: true,
        ShowRowNumberColumn: true,
        ShowRowSelectionCheckboxColumn: false,
        RowsPerPage: 100
    };
    q.DefaultEditorGridOptions = {
        AutoColumnSize: true,
        FadeInEffectWhenInit: true,
        ShowAnyInEqualityFilterWithTextValue: true,
        ShowInlineActionsColumn: true,
        ShowDeleteInlineButtun: true,
        ShowEditInlineButtun: true,
        ShowRowSelectionCheckboxColumn: false,
        ShowRowNumberColumn: true
    };
    q.DefaultEntityDialogOptions = {
        AutoFitContentArea: true,
        HideCategoyLinksBar: true,
        PendingChangesConfirmation: true,
        ShowSaveAndNewButtonInToolbar: false,
        ShowCloseButtonInToolbar: false,
        ShowRefreshButtonInToolbar: false,
        ShowChangeLogButtonInToolbar: false,
        ShowReplaceRowButtonInToolbar: false
    };
    q.DefaultEditorDialogOptions = {
        AutoFitContentArea: false,
        HideCategoyLinksBar: true,
        PendingChangesConfirmation: true,
        ShowSaveAndNewButtonInToolbar: false,
        ShowCloseButtonInToolbar: false,
        ShowRefreshButtonInToolbar: false,
        ShowChangeLogButtonInToolbar: false,
        ShowReplaceRowButtonInToolbar: false
    };
    //date time
    q.fiscalYearMonths = [6, 7, 8, 9, 10, 11, 0, 1, 2, 3, 4, 5];
})(q || (q = {}));
var ArmadaPortal;
(function (ArmadaPortal) {
    var AdministrationClient;
    (function (AdministrationClient) {
        var ClientUserForm = /** @class */ (function (_super) {
            __extends(ClientUserForm, _super);
            function ClientUserForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ClientUserForm.init) {
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
                return _this;
            }
            ClientUserForm.formKey = 'AdministrationClient.ClientUser';
            return ClientUserForm;
        }(Serenity.PrefixedContext));
        AdministrationClient.ClientUserForm = ClientUserForm;
    })(AdministrationClient = ArmadaPortal.AdministrationClient || (ArmadaPortal.AdministrationClient = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
var ArmadaPortal;
(function (ArmadaPortal) {
    var AdministrationClient;
    (function (AdministrationClient) {
        var ClientUserRow;
        (function (ClientUserRow) {
            ClientUserRow.idProperty = 'UserId';
            ClientUserRow.isActiveProperty = 'IsActive';
            ClientUserRow.nameProperty = 'Username';
            ClientUserRow.localTextPrefix = 'AdministrationClient.ClientUser';
            ClientUserRow.lookupKey = 'AdministrationClient.ClientUser';
            function getLookup() {
                return Q.getLookup('AdministrationClient.ClientUser');
            }
            ClientUserRow.getLookup = getLookup;
        })(ClientUserRow = AdministrationClient.ClientUserRow || (AdministrationClient.ClientUserRow = {}));
    })(AdministrationClient = ArmadaPortal.AdministrationClient || (ArmadaPortal.AdministrationClient = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
var ArmadaPortal;
(function (ArmadaPortal) {
    var AdministrationClient;
    (function (AdministrationClient) {
        var ClientUserService;
        (function (ClientUserService) {
            ClientUserService.baseUrl = 'AdministrationClient/ClientUser';
            [
                'Create',
                'Update',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ClientUserService[x] = function (r, s, o) {
                    return Q.serviceRequest(ClientUserService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ClientUserService = AdministrationClient.ClientUserService || (AdministrationClient.ClientUserService = {}));
    })(AdministrationClient = ArmadaPortal.AdministrationClient || (ArmadaPortal.AdministrationClient = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
var ArmadaPortal;
(function (ArmadaPortal) {
    var AdministrationClient;
    (function (AdministrationClient) {
        var ClientUserDialog = /** @class */ (function (_super) {
            __extends(ClientUserDialog, _super);
            function ClientUserDialog() {
                var _this = _super.call(this) || this;
                _this.form = new AdministrationClient.ClientUserForm(_this.idPrefix);
                _this.form.Password.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value.length < 7)
                        return "Password must be at least 7 characters!";
                });
                _this.form.PasswordConfirm.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value != _this.form.PasswordConfirm.value)
                        return "The passwords entered doesn't match!";
                });
                return _this;
            }
            ClientUserDialog.prototype.getFormKey = function () { return AdministrationClient.ClientUserForm.formKey; };
            ClientUserDialog.prototype.getIdProperty = function () { return AdministrationClient.ClientUserRow.idProperty; };
            ClientUserDialog.prototype.getIsActiveProperty = function () { return AdministrationClient.ClientUserRow.isActiveProperty; };
            ClientUserDialog.prototype.getLocalTextPrefix = function () { return AdministrationClient.ClientUserRow.localTextPrefix; };
            ClientUserDialog.prototype.getNameProperty = function () { return AdministrationClient.ClientUserRow.nameProperty; };
            ClientUserDialog.prototype.getService = function () { return AdministrationClient.ClientUserService.baseUrl; };
            ClientUserDialog.prototype.getToolbarButtons = function () {
                var buttons = _super.prototype.getToolbarButtons.call(this);
                return buttons;
            };
            ClientUserDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                //this.toolbar.findButton('edit-roles-button').toggleClass('disabled', this.isNewOrDeleted());
                //this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            ClientUserDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // these fields are only required in new record mode
                this.form.Password.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
                this.form.PasswordConfirm.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
            };
            ClientUserDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ClientUserDialog);
            return ClientUserDialog;
        }(Serenity.EntityDialog));
        AdministrationClient.ClientUserDialog = ClientUserDialog;
    })(AdministrationClient = ArmadaPortal.AdministrationClient || (ArmadaPortal.AdministrationClient = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
var ArmadaPortal;
(function (ArmadaPortal) {
    var AdministrationClient;
    (function (AdministrationClient) {
        var ClientUserGrid = /** @class */ (function (_super) {
            __extends(ClientUserGrid, _super);
            function ClientUserGrid(container) {
                return _super.call(this, container) || this;
            }
            ClientUserGrid.prototype.getColumnsKey = function () { return "AdministrationClient.ClientUser"; };
            ClientUserGrid.prototype.getDialogType = function () { return AdministrationClient.ClientUserDialog; };
            ClientUserGrid.prototype.getIdProperty = function () { return AdministrationClient.ClientUserRow.idProperty; };
            ClientUserGrid.prototype.getIsActiveProperty = function () { return AdministrationClient.ClientUserRow.isActiveProperty; };
            ClientUserGrid.prototype.getLocalTextPrefix = function () { return AdministrationClient.ClientUserRow.localTextPrefix; };
            ClientUserGrid.prototype.getService = function () { return AdministrationClient.ClientUserService.baseUrl; };
            ClientUserGrid.prototype.getDefaultSortBy = function () {
                return ["Username" /* Username */];
            };
            ClientUserGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ClientUserGrid);
            return ClientUserGrid;
        }(Serenity.EntityGrid));
        AdministrationClient.ClientUserGrid = ClientUserGrid;
    })(AdministrationClient = ArmadaPortal.AdministrationClient || (ArmadaPortal.AdministrationClient = {}));
})(ArmadaPortal || (ArmadaPortal = {}));
//# sourceMappingURL=ArmadaPortal.js.map