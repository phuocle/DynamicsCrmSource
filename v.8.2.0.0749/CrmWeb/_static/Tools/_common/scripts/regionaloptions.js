
var _sampleDataNodeArray,
    _sampleDataXml,
    _regionalOptionsDataXml,
    _regionalOptionsIndexXml,
    _regionalOptionsUpdatedSampleStandard,
    _defaultSampleDataArray,
    _defaultLCID,
    _lastSelectedLCID;
Sys.Application.add_load(Initialize);

function Initialize() {
    InitializeRegionalOptions();
    var lcid = document.getElementById("selectRegionalFormatCode");
    if (!IsNull(lcid)) {
        _defaultLCID = lcid.value;
        _lastSelectedLCID = _defaultLCID
    }
    _defaultSampleDataArray = [];
    for (var elementId in _sampleDataNodeArray) {
        var element = document.getElementById(elementId);
        if (!IsNull(element))
            _defaultSampleDataArray[elementId] = element.value
    }
}

function InitializeRegionalOptions() {
    LoadLocaleDefaultDataXml(true, LoadSampleDataXmlHandler);
    _regionalOptionsDataXml = "";
    _sampleDataNodeArray = [];
    _sampleDataNodeArray["sample_number_d"] = "number";
    _sampleDataNodeArray["sample_currency_d"] = "currency";
    _sampleDataNodeArray["sample_time_d"] = "time";
    _sampleDataNodeArray["sample_shortdate_d"] = "shortdate";
    _sampleDataNodeArray["sample_longdate_d"] = "longdate"
}

function LoadLocaleDefaultDataXml(bAsync, oCallback) {
    var oRemoteCmd = new RemoteCommand("RegionalOptions", "GetDefaultsForAllLocales");
    oRemoteCmd.SetParameter("locale", "all");
    if (bAsync)
        oRemoteCmd.Execute(oCallback);
    else {
        var oResult = oRemoteCmd.Execute();
        if (oResult.Success == ERROR_NONE)
            return !IsNull(oCallback) && typeof oCallback == "function"
                ? oCallback(oResult)
                : XUI.Xml.GetText(oResult.Xml);
        return null
    }
}

function LoadSampleDataXmlHandler(oResult) {
    if (oResult.Success == ERROR_NONE) {
        var oResultXml = oResult.Xml;
        if (!IsNull(oResultXml) && XUI.Xml.GetText(oResultXml).length > 0)
            _sampleDataXml = CrmEncodeDecode.CrmXmlDecode(XUI.Xml.GetText(oResultXml))
    }
}

function onRegionalFormatChange(o) {
    var selectedLocale = o.value;
    _lastSelectedLCID = selectedLocale;
    _regionalOptionsDataXml = "";
    _regionalOptionsIndexXml = "";
    _regionalOptionsUpdatedSampleStandard = "";
    if (selectedLocale == _defaultLCID) {
        for (var elementId in _defaultSampleDataArray) {
            var element = document.getElementById(elementId);
            if (!IsNull(element))
                element.value = _defaultSampleDataArray[elementId]
        }
        return
    }
    IsNull(_sampleDataXml) &&
        LoadLocaleDefaultDataXml(false, LoadSampleDataXmlHandler);
    var oXmlDoc = XUI.Xml.LoadXml(_sampleDataXml),
        localeDefaultData = XUI.Xml.SelectSingleNode(oXmlDoc, "sampledata/lcid_" + selectedLocale, null);
    for (var elementId in _sampleDataNodeArray) {
        var element = document.getElementById(elementId);
        if (!IsNull(element))
            element.value = XUI.Xml.GetText(XUI.Xml
                .SelectSingleNode(localeDefaultData, _sampleDataNodeArray[elementId], null))
    }
}

function CustomizeRegionalOptionsClicked(oButton, sUserSettings) {
    var oUrl = Mscrm.CrmUri.create("/Tools/RegionalOptions/dialogs/regionaloptions.aspx");
    oUrl.get_query()["usersettings"] = sUserSettings;
    var lcid = document.getElementById("selectRegionalFormatCode");
    oUrl.get_query()["lcid"] = lcid.value;
    var oArgs = [];
    if (lcid.value == _lastSelectedLCID) {
        oArgs["sLocaleSettingsXml"] = _regionalOptionsIndexXml;
        oArgs["sSampleDataXml"] = _regionalOptionsUpdatedSampleStandard
    }
    var parameters = [];
    parameters[0] = lcid;
    var callbackFunctionObject = Mscrm.Utilities
            .createCallbackFunctionForXrmDialog(regionalOptionsCallback, parameters),
        dialogOptions = new Xrm.DialogOptions;
    dialogOptions.height = 540;
    dialogOptions.width = 600;
    Xrm.Internal.openDialog(oUrl.toString(), dialogOptions, oArgs, null, callbackFunctionObject)
}

function regionalOptionsCallback(retval, lcid) {
    if (!IsNull(retval)) {
        _regionalOptionsDataXml = retval["localesettings"];
        _regionalOptionsIndexXml = retval["localesettingsindex"];
        _regionalOptionsUpdatedSampleStandard = retval["sampledata"];
        if (!IsNull(_regionalOptionsUpdatedSampleStandard) && _regionalOptionsUpdatedSampleStandard != "") {
            var oXmlDoc = XUI.Xml.LoadXml(_regionalOptionsUpdatedSampleStandard),
                selectPrefix = "sampledata/lcid_" + lcid.value + "/";
            for (var elementId in _sampleDataNodeArray) {
                var element = document.getElementById(elementId);
                if (!IsNull(element))
                    element.value = XUI.Xml.GetText(XUI.Xml
                        .SelectSingleNode(oXmlDoc, selectPrefix + _sampleDataNodeArray[elementId], null))
            }
        }
    }
}

function GetRegionalOptionsDataXml() {
    return _regionalOptionsDataXml
}