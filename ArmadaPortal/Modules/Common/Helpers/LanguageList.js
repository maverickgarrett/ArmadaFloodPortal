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
//# sourceMappingURL=LanguageList.js.map