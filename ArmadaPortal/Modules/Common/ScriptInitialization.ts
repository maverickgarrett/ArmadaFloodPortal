/// <reference path="../Common/Helpers/LanguageList.ts" />

namespace ArmadaPortal.ScriptInitialization {
    Q.Config.responsiveDialogs = true;
    Q.Config.rootNamespaces.push('ArmadaPortal');
    Serenity.EntityDialog.defaultLanguageList = LanguageList.getValue;

    Serenity.DataGrid.defaultPersistanceStorage = window.sessionStorage;
    //Serenity.DataGrid.defaultPersistanceStorage = window.localStorage;

    if ($.fn['colorbox']) {
        $.fn['colorbox'].settings.maxWidth = "95%";
        $.fn['colorbox'].settings.maxHeight = "95%";
    }

    window.onerror = Q.ErrorHandling.runtimeErrorHandler;
}   